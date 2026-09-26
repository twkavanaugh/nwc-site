// Shared resource helpers — ONE source for "where does this resource link" and "which
// item is featured", used by the /resources page (catalog + hero card) and the Nav's
// Resources mega-menu rail, so the two can never disagree.
import { getCollection, type CollectionEntry } from "astro:content";

// CONVENTION: a pdf/download target whose path begins with "/resources/PLACEHOLDER-"
// is a document the church hasn't provided yet — its row renders INERT (glyph + label
// kept, action replaced with muted "Available soon", no link). Swap the placeholder
// path for the real file and the row goes live automatically. Also enforced in
// resources/[slug].astro for post attachments.
export const PLACEHOLDER_PREFIX = "/resources/PLACEHOLDER-";

export type ResourceType = "pdf" | "external" | "post";

// pdf → `file` (/public path) OR `link` (hosted PDF, e.g. Google Drive — opens in a
// new tab); external → `link` (absolute URL); post → `link` (a post slug) resolved to
// the /resources route. The schema guarantees exactly one of file/link is set.
export function resourceTarget(e: CollectionEntry<"resources">) {
  const d = e.data;
  return {
    href: d.type === "post" ? `/resources/${d.link}` : (d.file ?? d.link)!,
    newTab: d.type === "external" || (d.type === "pdf" && !d.file),
    inert: d.type === "pdf" && !!d.file?.startsWith(PLACEHOLDER_PREFIX),
  };
}

// Button wording per type for the featured card + rail; ↗ = opens another site/tab.
const FEATURED_CTA = {
  post: { label: "Read the post", arr: "→" },
  pdf: { label: "Download PDF", arr: "→" },
  external: { label: "Visit site", arr: "↗" },
} as const;

export type FeaturedResource = {
  title: string;
  blurb: string; // featuredDescription, else the description
  type: ResourceType;
  href: string;
  newTab: boolean;
  ctaLabel: string;
  ctaArr: string;
};

// The featured item (brand/prototype/FEATURED-RESOURCE-PHOTO-SPEC.md): the FIRST item
// by title with `featured` on, across resources + non-draft posts. Staff are told to
// feature one thing at a time; if two are on, the alphabetical first wins (no build
// failure — staff wouldn't see it). An inert placeholder has nothing to link to, so
// it never features. Undefined → no card / the rail keeps its default.
export async function getFeaturedResource(): Promise<FeaturedResource | undefined> {
  const resources = (await getCollection("resources")).map((e) => ({
    title: e.data.title,
    description: e.data.description,
    featured: e.data.featured,
    featuredDescription: e.data.featuredDescription,
    type: e.data.type as ResourceType,
    ...resourceTarget(e),
  }));
  const posts = (await getCollection("posts"))
    .filter((e) => !e.data.draft)
    .map((e) => ({
      title: e.data.title,
      description: e.data.description,
      featured: e.data.featured,
      featuredDescription: e.data.featuredDescription,
      type: "post" as const,
      href: `/resources/${e.id}`,
      newTab: false,
      inert: false,
    }));
  const f = [...resources, ...posts]
    .sort((a, b) => a.title.localeCompare(b.title))
    .find((c) => c.featured && !c.inert);
  if (!f) return undefined;
  const cta = FEATURED_CTA[f.type];
  return {
    title: f.title,
    blurb: f.featuredDescription ?? f.description,
    type: f.type,
    href: f.href,
    newTab: f.newTab,
    ctaLabel: cta.label,
    ctaArr: f.type === "pdf" && f.newTab ? "↗" : cta.arr,
  };
}
