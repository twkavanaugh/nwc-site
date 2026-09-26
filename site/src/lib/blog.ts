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

/** URL-safe id for a series label (filter anchors / classes). */
export function seriesId(label: string): string {
  return (
    "s-" +
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
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
