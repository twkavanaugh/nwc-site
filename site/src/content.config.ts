import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

// -----------------------------------------------------------------------------
// events — the site's first content collection (Astro 5 Content Layer API).
// Flat Markdown files in src/content/events/, one per event. Facts live in
// frontmatter; narrative (paragraphs, "who it's for", "what's included") lives in
// the Markdown BODY (Q1 decision — kept as prose, not modelled as arrays).
//
// The whole point: startDate is a real date, so /events and the homepage can
// FILTER out past events and SORT chronologically at build time — structurally
// fixing the live "past events shown as Upcoming, unsorted" bug. Month / day /
// long-form date strings are ALWAYS DERIVED from startDate (see src/lib/date.ts),
// never stored — no more hand-maintained, yearless "May 31" strings.
//
// Recurrence / calendar / iCal are intentionally OUT of v1 (per plan + the content
// model's open question). This schema does not preclude adding them later: a
// `recurrence` field is a non-breaking future addition.
// -----------------------------------------------------------------------------
const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    // --- Required ---
    title: z.string(),
    startDate: z.coerce.date(), // the sortable/filterable real date; drives all displayed date strings

    // --- Optional display fields (template omits the row/line when absent) ---
    subtitle: z.string().optional(), // shown under the title on detail + as a candidate homepage 2nd line
    endDate: z.coerce.date().optional(), // multi-day span (end of the event)
    // Visibility cutoff. An event is "upcoming" while (expirationDate ?? endDate ??
    // startDate) >= today. Lets an event linger past its startDate (e.g. an open
    // application window) or drop early. See src/lib/date.ts isUpcoming().
    expirationDate: z.coerce.date().optional(),
    time: z.string().optional(), // free-text clock range, e.g. "8:30 AM – 3:30 PM"; also the homepage 2nd line
    timeNote: z.string().optional(), // small note under the time, e.g. "Kickoff & orientation"
    // Q5: when absent, the detail template defaults the location to BUSINESS (church
    // name + address from src/data/business.ts). Only set this to override.
    location: z.string().optional(),
    // Q5: when absent, the detail template OMITS the cost row entirely (no "Free" assumed).
    cost: z.string().optional(),
    deadline: z.string().optional(), // display text, e.g. "Applications close April 30, 2026"
    // Registration/target link. Deliberately z.string() (NOT .url()): events may point
    // at an INTERNAL relative path (e.g. "/about/membership") or a placeholder "#",
    // which z.string().url() would reject and fail the build. Accepts internal paths,
    // absolute URLs, and mailto:.
    registrationUrl: z.string().optional(),
    // Unverified church emails are rendered INERT (plain text, no mailto) by the
    // template until confirmed — email discipline. Storing it here is fine.
    contactEmail: z.string().optional(),

    // Featured image (21:8, shown between the contact line and the body, variant D).
    // A path into public/ — convention: public/events/<slug>.jpg. Presence of this
    // field is what turns on the image slot AND the shaded --bg-2 rail behind the facts box.
    image: z.string().optional(),
    // Alt text for `image`. Office should write real, descriptive alt; when absent the
    // template falls back to the event title (a fallback, not a substitute for real alt).
    imageAlt: z.string().optional(),

    // --- Association / future-proofing (Q7 — included now, unused by v1 queries) ---
    ministryId: z.string().optional(), // links an event to a ministry (future filtering / eyebrow generation)
    featured: z.boolean().default(false), // future homepage pinning; v1 homepage is pure date-sort top-3
  }),
});

// -----------------------------------------------------------------------------
// categories — flat taxonomy (Q: no parent field, deliberately). Data-only (just
// a label), so YAML data files rather than empty-bodied Markdown — the filename is
// the id (e.g. new-here.yaml → "new-here"), which posts/resources reference.
// SEED LABELS ARE PROVISIONAL — confirm the taxonomy with the church before launch.
// -----------------------------------------------------------------------------
const categories = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/categories" }),
  schema: z.object({
    label: z.string(),
    // Curated chip/tag order. Sort ascending where present, then alphabetical by
    // id for any without one. PROVISIONAL like the labels — one-line edits once the
    // church confirms the real taxonomy.
    order: z.number().optional(),
  }),
});

// -----------------------------------------------------------------------------
// posts — long-form content (narrative in the Markdown BODY, same prose-not-arrays
// convention as events). Cards/listings render title + description.
// -----------------------------------------------------------------------------
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // the card / listing blurb
    // Validated against the categories collection via reference() (Astro 5 Content
    // Layer) — a bad id fails the build, not silently.
    categories: z.array(reference("categories")),
    // Downloadable files attached to the post. Capped at 5.
    attachments: z
      .array(z.object({ label: z.string(), file: z.string() }))
      .max(5)
      .optional(),
    draft: z.boolean().default(false), // hidden from listings while true
  }),
});

// -----------------------------------------------------------------------------
// resources — pointer entries (a PDF, an external link, or an internal post).
// Staff (Karen, Devin) add these through Pages CMS (.pages.yml), so the destination
// is split by kind (2026-09-24): `file` = an uploaded PDF (/resources/<name>.pdf),
// `link` = an absolute URL or a post slug (post; developer use — posts already
// appear in the catalog on their own). A PDF may be EITHER uploaded (`file`) OR
// hosted elsewhere (`link`, e.g. the church Google Drive) — hosted CMS uploads fail
// above ~3MB (Vercel 4.5MB body limit → 413), and Drive keeps the document beyond
// the site. External/post need `link`. Exactly one of file/link must be set; a
// mismatch FAILS THE BUILD (so it never deploys) with a plain message.
// -----------------------------------------------------------------------------
const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      categories: z.array(reference("categories")).min(1, "Pick at least one category."),
      type: z.enum(["pdf", "external", "post"]),
      file: z.string().optional(),
      // Deliberately z.string() (NOT .url()): a post slug isn't a URL — same
      // rationale as events.registrationUrl.
      link: z.string().optional(),
    })
    .superRefine((d, ctx) => {
      const hasFile = !!d.file?.trim();
      const hasLink = !!d.link?.trim();
      if (d.type === "pdf" && !hasFile && !hasLink)
        ctx.addIssue({ code: "custom", path: ["file"], message: "A PDF download needs either an uploaded PDF or a link to the PDF (e.g. Google Drive)." });
      if (d.type === "pdf" && hasFile && hasLink)
        ctx.addIssue({ code: "custom", path: ["link"], message: "A PDF download should have an uploaded file OR a link, not both — clear one." });
      if (d.type !== "pdf" && !hasLink)
        ctx.addIssue({ code: "custom", path: ["link"], message: "An external link needs the web address filled in." });
      if (d.type !== "pdf" && hasFile)
        ctx.addIssue({ code: "custom", path: ["file"], message: "An external link should not also have a PDF — remove the file." });
    }),
});

export const collections = { events, categories, posts, resources };
