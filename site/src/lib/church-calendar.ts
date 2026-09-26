// Build-time reader for the church's Google Calendar feed (src/data/calendar.ts).
// Fetches the public iCal feed once per build, expands recurring events (EXDATEs and
// RECURRENCE-ID overrides included, via node-ical), filters, and buckets instances into
// Sunday-start weeks in America/New_York. Nothing here ships to the browser.
//
// Filtering (Todd, 2026-09-26): everything shows exactly as written in Google EXCEPT
//   - "Busy" entries / CLASS:PRIVATE|CONFIDENTIAL (events marked private in Google), and
//   - CANCELLED instances.
// If the church wants something off the website, they mark it private in Google.
//
// Failure is NOT fatal: a fetch/parse error returns { ok: false } and the page shows a
// short "calendar unavailable" note with a link to Google — the build still deploys.
import ical from "node-ical";
import { CHURCH_CALENDAR } from "../data/calendar";

const TZ = CHURCH_CALENDAR.timeZone;

export type CalendarEvent = {
  title: string;
  allDay: boolean;
  timeLabel: string; // full: "9:00 AM", "6:00 – 8:00 PM", or "All day"
  startLabel: string; // compact, for the week grid: "9:00 AM" or "All day"
  startMs: number; // sort key
  location?: string;
  description?: string; // plain text
};
export type CalendarDay = {
  key: string;
  weekday: string; // "Sunday"
  dateLabel: string; // "Sep 20"
  dayNum: string; // "20"
  isToday: boolean;
  events: CalendarEvent[];
};
export type CalendarWeek = { id: string; label: string; days: CalendarDay[] };
export type ChurchCalendar = { ok: true; weeks: CalendarWeek[] } | { ok: false };

// --- small helpers ---------------------------------------------------------------
const val = (v: unknown): string => {
  if (v == null) return "";
  if (typeof v === "object" && "val" in (v as Record<string, unknown>)) return String((v as { val: unknown }).val ?? "");
  return String(v);
};

// "YYYY-MM-DD" for an instant, in the church's time zone.
const dayKeyFmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" });
const dayKey = (d: Date) => dayKeyFmt.format(d);

// Calendar-date arithmetic on "YYYY-MM-DD" keys (UTC-noon anchor avoids DST edges).
const keyToUTCNoon = (k: string) => new Date(`${k}T12:00:00Z`);
const addDays = (k: string, n: number) => {
  const d = keyToUTCNoon(k);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};
const weekdayOf = (k: string) => keyToUTCNoon(k).getUTCDay(); // 0 = Sunday

const timeFmt = new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" });
const weekdayFmt = new Intl.DateTimeFormat("en-US", { timeZone: "UTC", weekday: "long" });
const dateFmt = new Intl.DateTimeFormat("en-US", { timeZone: "UTC", month: "short", day: "numeric" });

function timeRange(start: Date, end?: Date): string {
  const s = timeFmt.format(start);
  if (!end || end.getTime() <= start.getTime()) return s;
  const e = timeFmt.format(end);
  // "6:00 PM – 8:00 PM" → "6:00 – 8:00 PM" when both share AM/PM
  const [sT, sP] = s.split(" ");
  const [eT, eP] = e.split(" ");
  return sP === eP ? `${sT} – ${eT} ${eP}` : `${s} – ${e}`;
}

// Google descriptions can carry light HTML — reduce to plain text (Astro escapes output).
function plainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li[^>]*>/gi, "• ") // Google sends lists as <ol>/<ul><li>…
    .replace(/<\/(p|li|div|ol|ul)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// A full-day DTSTART is a calendar date; node-ical gives midnight UTC or local — take the
// date the feed meant, not a TZ-shifted one.
const fullDayKey = (d: Date) =>
  d.getUTCHours() === 0 && d.getUTCMinutes() === 0 ? d.toISOString().slice(0, 10) : dayKey(d);

// --- the reader -------------------------------------------------------------------
let cached: Promise<ChurchCalendar> | undefined;

export function getChurchCalendar(now = new Date()): Promise<ChurchCalendar> {
  cached ??= load(now);
  return cached;
}

async function load(now: Date): Promise<ChurchCalendar> {
  try {
    const res = await fetch(CHURCH_CALENDAR.feedUrl, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`feed HTTP ${res.status}`);
    const data = ical.sync.parseICS(await res.text());

    // Window: the Sunday of the current week (church time) → weeksAhead weeks.
    const today = dayKey(now);
    const firstKey = addDays(today, -weekdayOf(today));
    const dayCount = CHURCH_CALENDAR.weeksAhead * 7;
    const lastKey = addDays(firstKey, dayCount - 1);
    // Generous instant bounds (a day either side); exact bucketing is by day key below.
    const from = new Date(`${addDays(firstKey, -1)}T00:00:00Z`);
    const to = new Date(`${addDays(lastKey, 2)}T00:00:00Z`);

    const byDay = new Map<string, CalendarEvent[]>();
    const push = (k: string, ev: CalendarEvent) => {
      if (k < firstKey || k > lastKey) return;
      (byDay.get(k) ?? byDay.set(k, []).get(k)!).push(ev);
    };

    for (const comp of Object.values(data)) {
      if (!comp || comp.type !== "VEVENT") continue;
      const instances = ical.expandRecurringEvent(comp, { from, to, expandOngoing: true });
      for (const inst of instances) {
        const ev = inst.event;
        const title = val(inst.summary).trim();
        const cls = val(ev.class).toUpperCase();
        if (!title || title === "Busy" || cls === "PRIVATE" || cls === "CONFIDENTIAL") continue;
        if (ev.status === "CANCELLED") continue;

        const location = val(ev.location).trim() || undefined;
        const description = plainText(val(ev.description)) || undefined;

        if (inst.isFullDay) {
          // Spans [start, end) calendar days; appears on each day it covers.
          const startK = fullDayKey(inst.start);
          const endK = inst.end ? fullDayKey(inst.end) : addDays(startK, 1);
          for (let k = startK; k < endK; k = addDays(k, 1)) {
            push(k, { title, allDay: true, timeLabel: "All day", startLabel: "All day", startMs: keyToUTCNoon(k).getTime() - 1e9, location, description });
          }
        } else {
          push(dayKey(inst.start), {
            title,
            allDay: false,
            timeLabel: timeRange(inst.start, inst.end),
            startLabel: timeFmt.format(inst.start),
            startMs: inst.start.getTime(),
            location,
            description,
          });
        }
      }
    }

    const weeks: CalendarWeek[] = [];
    for (let w = 0; w < CHURCH_CALENDAR.weeksAhead; w++) {
      const wStart = addDays(firstKey, w * 7);
      const days: CalendarDay[] = [];
      for (let d = 0; d < 7; d++) {
        const k = addDays(wStart, d);
        const events = (byDay.get(k) ?? []).sort((a, b) => a.startMs - b.startMs || a.title.localeCompare(b.title));
        days.push({
          key: k,
          weekday: weekdayFmt.format(keyToUTCNoon(k)),
          dateLabel: dateFmt.format(keyToUTCNoon(k)),
          dayNum: String(keyToUTCNoon(k).getUTCDate()),
          isToday: k === today,
          events,
        });
      }
      const wEnd = addDays(wStart, 6);
      weeks.push({
        id: `week-${wStart}`,
        label: `${dateFmt.format(keyToUTCNoon(wStart))} – ${dateFmt.format(keyToUTCNoon(wEnd))}`,
        days,
      });
    }
    return { ok: true, weeks };
  } catch (err) {
    // Never fail the build over the calendar — log it and let the page show the fallback.
    console.warn(`[church-calendar] feed unavailable, rendering fallback: ${(err as Error).message}`);
    return { ok: false };
  }
}
