import { defineCollection, z } from "astro:content";
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

    // --- Association / future-proofing (Q7 — included now, unused by v1 queries) ---
    ministryId: z.string().optional(), // links an event to a ministry (future filtering / eyebrow generation)
    featured: z.boolean().default(false), // future homepage pinning; v1 homepage is pure date-sort top-3
  }),
});

export const collections = { events };
