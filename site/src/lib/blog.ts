// -----------------------------------------------------------------------------
// Blog helpers — shared by /blog, /blog/[slug], and (later) the homepage strip so
// all three pick, order, and summarize posts identically.
// -----------------------------------------------------------------------------
import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

/** Published (non-draft) posts, newest first. */
export async function getPublishedPosts(): Promise<BlogEntry[]> {
  return (await getCollection("blog"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** "April 14, 2026" — the published line. Date parsed as UTC midnight → format in UTC. */
export function formatPublished(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** Card blurb: the staff-written excerpt, else the body's first real paragraph
 *  (skipping headings, quotes, lists, and bare URLs), trimmed to ~40 words. */
export function excerptOf(entry: BlogEntry, maxWords = 40): string {
  if (entry.data.excerpt?.trim()) return entry.data.excerpt.trim();
  const para = (entry.body ?? "")
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .find((b) => b && !/^(#|>|[-*+] |\d+\. |https?:\/\/|<)/.test(b));
  if (!para) return "";
  const text = para
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(" ");
  return words.length <= maxWords ? text : `${words.slice(0, maxWords).join(" ")}…`;
}

export type SeriesInfo = CollectionEntry<"blogSeries">["data"] & { id: string };

/** Series id → its label + default image, for resolving `series` references. */
export async function getSeriesMap(): Promise<Record<string, SeriesInfo>> {
  const all = await getCollection("blogSeries");
  return Object.fromEntries(all.map((s) => [s.id, { id: s.id, ...s.data }]));
}

/** The post's photo, else its series default, else none (text-only layouts). */
export function photoFor(entry: BlogEntry, series: Record<string, SeriesInfo>) {
  if (entry.data.image) {
    return { src: entry.data.image, alt: entry.data.imageAlt ?? entry.data.title };
  }
  const s = entry.data.series ? series[entry.data.series.id] : undefined;
  if (s?.image) return { src: s.image, alt: s.imageAlt ?? s.label };
  return undefined;
}

/** Filter anchor / class for a series id (prefixed so it can't collide with #all). */
export function seriesAnchor(id: string): string {
  return `s-${id}`;
}

/** "MK" — up to two initials for the author mark. */
export function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
