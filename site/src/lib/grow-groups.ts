// Grow Groups directory helpers — ONE source for the /community/grow-groups page and the
// homepage's "N active groups" line, so the count can never drift from the directory.
import { getCollection } from "astro:content";

const DAY_ORDER = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// "18:30" → "6:30 PM"
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export type GrowGroup = { name: string; time: string; timeLabel: string; place: string };
export type GrowGroupDay = { day: string; id: string; groups: GrowGroup[] };

// Days in week order (Sunday first), empty days omitted; within a day, by time, then by
// name (a stable, CMS-proof tie-break).
export async function getGrowGroupDays(): Promise<GrowGroupDay[]> {
  const entries = await getCollection("growGroups");
  return DAY_ORDER.map((day) => ({
    day,
    id: day.toLowerCase(),
    groups: entries
      .filter((e) => e.data.day === day)
      .map((e) => ({
        name: e.data.name,
        time: e.data.time,
        timeLabel: formatTime(e.data.time),
        place: e.data.place,
      }))
      .sort((a, b) => a.time.localeCompare(b.time) || a.name.localeCompare(b.name)),
  })).filter((d) => d.groups.length > 0);
}

export async function getGrowGroupCount(): Promise<number> {
  return (await getCollection("growGroups")).length;
}
