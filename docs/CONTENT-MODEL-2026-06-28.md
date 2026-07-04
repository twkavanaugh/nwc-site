# North Wake Church Site — Content Model & Authoring Strategy (2026-06-28)

**Purpose of this file:** capture the content-model and self-serve-authoring
architecture decided in the 2026-06-28 planning session, so a fresh chat resumes
without re-deriving it. This is a DECISION RECORD, not a build log.

**CRITICAL STATUS:** Everything below is **DECIDED, NOT YET BUILT.** As of this
session, NO collections, NO Decap, and NO `siteSettings` exist in the repo. The
seven built pages (homepage, students, mission, who-is-jesus, kids, feed,
mature-adults) and the foundation described in `PROJECT-STATE-2026-06-28.md` are
unchanged. This doc is the plan that the next build steps execute against.

---

## TL;DR
This session was a deliberate strategy pause — no building — to settle how the
site handles dynamic / authored content and a future handoff to non-technical
church staff. Outcome: a small flat-file content-collection model (no database,
no server, no Replit app) plus an optional Decap/Sveltia editor over the
office-facing collections. The static + push-to-deploy architecture is preserved
completely. Build queue defined; first action is `siteSettings`.

---

## The guiding lens (how every decision was made)
Sort all content by **who touches it and how often**:
1. **Changes weekly/monthly, by church staff → structured data + self-serve editor.**
   (Events, Resources, Posts.)
2. **Changes rarely, by Todd → stays in code.** (Ministry pages, mission/Jesus/kids
   prose, nav, design, sermon series text, the `categories` list.)
3. **Never changes / external → not ours.** (Giving = Realm; sermon media = Branchcast.)

Failure mode to avoid: making STABLE content editable while leaving VOLATILE
content hand-typed. That is backwards (and roughly what the old WordPress site did).

Todd is a **member of the church and will stay involved indefinitely.** This
materially de-risks the handoff: the "successor dev" for code-level content is
Todd, ongoing. That is why leaving stable content in code is correct here, not a
liability.

---

## DATA MODEL — four content collections (Astro Content Layer, flat files)
No database. No server. Typed collections, linked by ids, validated at build,
git-versioned, rollback-able. Each is a folder of Markdown/data files.

### 1. `events` — HIGHEST PRIORITY (has an active correctness bug)
Structured, **date-filtered and date-sorted**. Fields (approx):
`title, startDate, endDate?, registrationUrl?, ministryId?, featured?, expirationDate?`
The `/events` page queries the collection, filters `startDate >= now`, sorts
ascending. This STRUCTURALLY fixes the live bug: the current homepage shows past
events (May 3, May 31, Jun 1) as "Upcoming," out of chronological order, as of
late June 2026. With date-aware querying a past event CANNOT show as upcoming and
CANNOT sort wrong — a content-model guarantee replacing a human-memory chore.
OPEN: calendar/recurrence/iCal vs. simple upcoming-list (old site used The Events
Calendar plugin — `tribe-events` — so staff are used to a calendar + .ics export;
recurrence is the hard part of the schema and is still UNCONFIRMED).

### 2. `resources` — the catalog
A resource is a **card**. Fields (approx):
`title, description, categories[], type (pdf | external | post), target`
- `type: pdf` → target is a file in `public/`
- `type: external` → target is a URL
- `type: post` → target references a `posts` entry
The `/resources` page lists resources + posts together (shared `categories`),
optionally filtered by category.

### 3. `posts` — universal text-page type
A "post" is text authored entirely in Decap (rich-text → Markdown), renders as its
own page at `/resources/[slug]` (or similar), is categorizable, and is surfaced on
the resources page alongside PDFs. A post IS itself a resource whose target is its
own body. Fields (approx):
`title, body, categories[], attachments[]?`
**`attachments` — LOCKED DECISION:** optional array of `{ label, file }`,
**max 5.** Zero attachments = plain text page; one = text page with a labeled
download; up to five = labeled download list. Labels are required per attachment so
multiple downloads stay legible to the reader (three buttons all saying "Download"
are useless). In Decap this is a `list` widget: a repeatable block of {text label +
file picker}, "Add" up to 5. This decision SUBSUMES the earlier "post with optional
companion PDF" question entirely.
OPEN (minor, build-time): nothing material — model is settled.

### 4. `categories` — the taxonomy
**FLAT. No hierarchy. No `parent` field.** Decision driven by count: the church
expects ~5–10 categories (Todd has asked for the real number; anywhere 5–15 the
call is the same — flat). A 5–10 item list is scannable; nesting earns its place
only at ~30+. Fields (approx): `id/slug, label`.
**Starting flat costs nothing later:** if volume ever demands grouping, add a
`parent` field then — resource→category links don't change, the office's authoring
experience doesn't change, nothing migrates. Hierarchy is a non-breaking deferred
addition.

---

## TAXONOMY OWNERSHIP — the key management decision
Two DIFFERENT editing jobs, deliberately split:
- **Authoring resources/posts** (frequent, by office): pick categories via
  checkboxes, upload PDFs, write descriptions/bodies. Office does this in Decap.
  They NEVER see ids — Decap's `relation` widget shows category LABELS while storing
  the slug/id.
- **Curating the taxonomy** (rare, structural, by Todd): add/rename/reparent
  categories. This is information-architecture work and STAYS WITH TODD as a
  code-level `categories` collection. The office only SELECTS from existing
  categories; it cannot invent or restructure them. (Optional future release valve:
  a flat free-text "tags" field staff can use loosely, which Todd periodically
  promotes into the real taxonomy.)
Rationale: a non-specialist reparenting a live taxonomy is how sites go incoherent.
Do NOT build a drag-the-tree editor for the office.

---

## SERMONS — resolved, minimal
- **Sermon media** = Branchcast, embedded via one iframe
  (`https://app.branchcast.com/north-wake-church/embed`) on a `/sermons` page, plus
  Apple Podcasts + Spotify badge links. The church already manages sermons inside
  Branchcast. ZERO authoring/CMS work for us; not a collection.
- The iframe is third-party JS in the page BODY (acceptable deliberate embed per
  Playbook §9.6). Sermon content was never going to be crawler-visible HTML on our
  site regardless of stack — inherent to using a sermon host. Framing it costs
  nothing we weren't already conceding.
- Build `/sermons` in OUR design system (Layout + Breadcrumb + one iframe section).
  Do NOT port the old WordPress page's chrome/NAP/nav — use only the embed URL and
  the two badge links from it.
- **Sermon SERIES on the homepage** = STATIC TEXT, maintained by Todd through the
  normal review-and-push flow. Changes ~biannually (every 6 months at most). NOT a
  collection — structuring a twice-a-year field would be over-engineering. Ideally
  sourced from `siteSettings` so it's one edit, not scattered.

---

## EDITOR LAYER — Decap (or Sveltia) CMS, at handoff
- Git-based visual editor: office goes to `/admin`, logs in (GitHub OAuth), sees
  friendly forms, saves → commits Markdown/files to the repo → Render rebuilds →
  live in ~2 min. **No server we own; static JS that talks to the GitHub API.**
  Transfers with the repo. This is "the thing you'd build in Replit, already built,
  without the server."
- Covers the office-facing collections: `events`, `resources`, `posts`. Does NOT
  cover `categories` (Todd-curated in code) or stable code-level pages.
- **The one genuinely fiddly config bit:** Decap's `relation` widget pulling a
  resource/post's category options live from the `categories` collection (display
  label, store slug/id). It works and is the right tool, but expect real
  configuration time there. Everything else (media/PDF upload, text/description
  fields, the `list` widget for attachments) is Decap's bread and butter.
- **Auth is the shared hard part** regardless of tool — a static site can't safely
  hold a GitHub token, so non-technical login needs an OAuth helper (one-click
  deployable helpers exist on Render / Cloudflare Workers). A self-built Replit app
  would NOT avoid this; it would add app-maintenance ON TOP of it.

## REJECTED / NOT DOING (and why)
- **No database** (Postgres etc.) — reintroduces the running server the whole
  architecture avoids, to manage what is fundamentally a list of files + links.
- **No self-built Replit app** — it would re-implement Decap with MORE ownership
  burden and a live service to host/transfer. Only revisit if Decap genuinely can't
  model a real need (it can, for events + resources + posts).
- **No hosted headless CMS** (Sanity/Contentful) — external dependency + an account
  to transfer; fights the no-third-party-CDN instinct; overkill.
- **No taxonomy tree-editor for the office** — see Taxonomy Ownership.
- **No homepage-as-entity-references merchandising layer** (ChatGPT review
  suggested it). Correct at 50–100 pages; speculative abstraction at ~15–25. Hand-
  curated homepage cards are fine; revisit only on real drift, not anticipation.
- **No CI build-gates / monitoring apparatus** as a standing system — a small church
  office won't maintain sermon-age alerts or external-link monitoring. Cherry-pick
  the cheap high-value checks (broken-link, no-placeholder-in-prod) into the
  hardening pass; skip the enterprise scaffolding.

---

## ChatGPT homepage review (2026-06-28) — disposition
Todd ran the compiled homepage HTML through ChatGPT. Verdict: sharp on the content
model, overcalibrated for scale we don't have.
- **Take fully:** events + service info + (where surfaced) sermon series should be
  DATA queried by pages, not prose typed into pages. The stale/unsorted events bug
  is the clean illustration. `siteSettings` for repeated facts kills a class of
  contradiction. → reflected in the build queue.
- **Correction to its framing:** it inferred "separately maintained navigation/NAP"
  from compiled HTML, but nav is ALREADY one typed structure in `Nav.astro` and NAP
  is ALREADY single-sourced in `business.ts`. The real gap is only that the NEW
  fast-moving entities aren't structured yet — exactly what this plan fixes.
- **Already in our debt list (not news):** inert buttons, dimmed-vs-linked nav
  inconsistencies, "Watch now"→/events mislink, "See all ministries"→grow-groups,
  placeholders, mobile nav, background-div people photo, SEO/schema. All
  pre-existing KNOWN DEBT / UNVERIFIED CONTENT.
- **Defer to hardening:** ARIA menu-role rework, reduced-motion audits, `<picture>`
  for the people photo, SEO component, CI checks. Take broken-link + production-
  placeholder checks NOW-ISH; rest as the planned post-content hardening pass.

---

## `siteSettings` — FIRST BUILD (decided approach)
Promote the handful of repeated operational facts to one queried source:
`serviceTimes[]`, `givingUrl`, `mapsUrl` (and likely the homepage sermon-series text).
**DECISION: extend `business.ts`** (do NOT stand up a separate `site.ts`). Widen its
remit from "contact/NAP" to "the church's canonical facts" — one source, one import
(`import { BUSINESS } from ...`) every page already uses. A second config file is
ceremony at this scale. (If a future reason emerges to keep `business.ts` strictly
contact-only, a `site.ts` split is the fallback — but not now.)

This fixes (centralizes) the **service-times CONFLICT**: homepage says Sundays
9 & 11 AM; kids page says 9 & 10:45 AM. NOTE: `siteSettings` does NOT RESOLVE the
conflict — that is an UNVERIFIED-CONTENT item only the church can settle. It turns a
scattered contradiction into a SINGLE flagged value awaiting church confirmation.

**First CC step is READ-AND-REPORT ONLY** (no edits): dump `business.ts` verbatim;
find every hardcoded service-time / giving-URL / maps-URL occurrence across
`site/src`; report grouped. The edit block (extend + rewire + prove against build +
commit in the same turn approved) comes after that report.

---

## BUILD QUEUE (priority order; recommendation, not constraint)
1. **`siteSettings`** (extend `business.ts`) — smallest, unambiguous, kills the
   service-times contradiction. ← FIRST ACTION. (Read-and-report step is the live
   next CC block.)
2. **`events` collection** + date-aware `/events` index + `/events/[slug]` — highest
   value; fixes the live stale-events correctness bug.
3. **`/sermons` page** — Branchcast iframe + badges; cheap; unblocks the homepage
   "Watch Sunday's sermon" button.
4. **`resources` + `posts` + `categories`** — the catalog (flat categories, labeled
   attachments max 5).
5. **Decap/Sveltia** layered over events/resources/posts — at handoff.
6. **Hardening pass** (after content lands): broken-link + production-placeholder
   checks first, then mobile nav, schema/SEO component, image optimization,
   reduced-motion, Lighthouse. Run as its own pass.

---

## OPEN QUESTIONS (carry forward)
- **Events:** calendar/recurrence/iCal vs. simple date-sorted upcoming list? (Old
  site had full Events Calendar; recurrence is the hard schema part.) UNCONFIRMED.
- **Categories:** exact starting count (Todd has asked the church; expects 5–10).
  Does not change the build — flat regardless in that range.
- **Posts:** can a post both render a body AND carry attachments? YES — resolved
  (attachments optional, independent of body). No remaining material question.
- All prior UNVERIFIED CONTENT (service times, NAP, sermon placeholder, event dates,
  ministry facts, copy) still stands — the church content-verification meeting is
  increasingly the real launch gate.
