// -----------------------------------------------------------------------------
// Event date helpers — shared by /events, /events/[slug], and the homepage so all
// three format and compare dates identically.
//
// TIMEZONE RATIONALE (Q4): the site is static and rebuilds only on git push, so
// "today" is whatever the build machine's clock says at build time — Render builds
// in UTC. To avoid an off-by-one at the day boundary (UTC is hours ahead of NC), we
// normalize BOTH sides of the comparison to a plain calendar date in the church's
// timezone (America/New_York) and compare date-only, ignoring clock time.
//
// Known v1 limitation, accepted: because the comparison is fixed at build time, an
// event only drops off "upcoming" on the next deploy AFTER its date passes. A nightly
// Render deploy-hook cron is the cheap fast-follow that keeps the list fresh without
// a content push.
// -----------------------------------------------------------------------------

const CHURCH_TZ = "America/New_York";

// A frontmatter `startDate: 2026-10-24` is parsed by z.coerce.date() as UTC midnight,
// so its calendar Y-M-D is read off the UTC parts. We compare as a YYYYMMDD integer.
function ymdUTC(date: Date): number {
  return date.getUTCFullYear() * 10000 + (date.getUTCMonth() + 1) * 100 + date.getUTCDate();
}

// Today's calendar date in the church timezone, as a YYYYMMDD integer, resolved at
// build time. Intl gives us the NY-local Y/M/D regardless of the build machine's TZ.
function todayYmdChurch(): number {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: CHURCH_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  return get("year") * 10000 + get("month") * 100 + get("day");
}

/** True if the event is still upcoming (or ongoing) as of the build date.
 *  Uses the latest of expirationDate / endDate / startDate so open-window events
 *  can linger past their start. Date-only, church-tz normalized. */
export function isUpcoming(entry: {
  data: { startDate: Date; endDate?: Date; expirationDate?: Date };
}): boolean {
  const cutoff = entry.data.expirationDate ?? entry.data.endDate ?? entry.data.startDate;
  return ymdUTC(cutoff) >= todayYmdChurch();
}

/** Ascending chronological comparator by startDate — pass to Array.sort(). */
export function byStartDateAsc(
  a: { data: { startDate: Date } },
  b: { data: { startDate: Date } },
): number {
  return a.data.startDate.getTime() - b.data.startDate.getTime();
}

// --- Display formatters (read the event's own calendar date via UTC parts) ---

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Oct" — three-letter month abbreviation for the compact date chip. */
export function formatMonth(date: Date): string {
  return MONTHS[date.getUTCMonth()];
}

/** "24" / "01" — zero-padded 2-digit day for the compact date chip. */
export function formatDay(date: Date): string {
  return String(date.getUTCDate()).padStart(2, "0");
}

/** "Saturday, October 24, 2026" — long form for the detail facts box. */
export function formatLong(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC", // date parsed as UTC midnight; format in UTC to avoid a day shift
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
