# North Wake Church Site — Project State (2026-07-04)

**Purpose of this file:** complete, current context so a fresh chat (Claude as SME/
prompt-writer) can resume at full speed without the prior conversation. Drop into
Project knowledge. **Supersedes `docs/PROJECT-STATE-2026-07-02.md`** — which predates the
**events content collection (now live end-to-end)**, the **site-wide type standards**
(16px content floor + mobile scale), the **serif-on-image hero pilot going live on
`/community/kids`**, the **photographer shot list**, the **content-specimen review + Pages
CMS test plan**, and the **`--accent-on-inverse` contrast fix**.

---

## TL;DR — where things stand
A static Astro 5 marketing site for North Wake Church (Wake Forest, NC). Foundation
complete and **seven pages built and reviewed**: homepage (watercolor hero), students,
mission (Devotional redesign), who-is-jesus, kids, feed, mature-adults. The site is
**LIVE on Render**, auto-deploying from GitHub `main` on every push.

**The headline this session: the EVENTS BUILD IS COMPLETE.** `/events`, `/events/[slug]`,
and the homepage "Upcoming" section all now run off a real **Astro Content Layer
collection** — dates are real `Date` objects, listings filter out past events and sort
chronologically at build time. **The live "stale events" bug (past events shown as
Upcoming, unsorted, yearless) is structurally dead.** All four gates shipped and pushed.

Also this session: a **site-wide type policy** (16px content floor at all viewports +
mobile scale) is now a STANDING RULE that silently corrects incoming design packages; the
**serif-on-image photo hero** is piloted live on `/community/kids` (stock placeholder,
contrast-audited); a **photographer shot list** is written and ready to send; and a review
of the old site's content specimens produced the events image field and a **Pages CMS
employee-test task list**.

Next work: the **mobile nav / hamburger (LAUNCH BLOCKER)**, then `/sermons`, then the
first **Pages CMS vertical-slice test**, then the remaining content collections. The
content-verification pass with the church remains the real launch gate.

**Live URL:** https://nwc-site.onrender.com (deploy confirmed working)
**Repo:** https://github.com/twkavanaugh/nwc-site  (currently public)

---

## Roles & workflow (how we work — keep doing this)
- **Claude (chat)** = SME, prompt-writer, reviewer. Writes CC instructions as ONE
  self-contained inline code block (no nested fences, no prose wrapping). Explains the
  *why*, pushes back honestly, flags ONE next action (not a roadmap). Makes a
  recommendation rather than bouncing decisions back when Todd has no preference.
- **Claude Code (CC)** = build agent. Runs on the user's **personal MacBook Air**.
- **User (Todd)** = directs strategy, runs commands, reviews each step in the browser.
  Todd also brings in Claude-Design exports (HTML/JSX) for new pages/heroes mid-stream —
  treat each as a system-integration moment (extract the chosen direction, commit it to
  `brand/prototype/`, translate inline styles to tokens), not a one-off paste.
- **Cadence:** ONE gated task at a time. Review in the browser before the next step.
  The gate is the quality mechanism (prevents the ~50%-fidelity failure from building
  unreviewed). Long pages are section-gated; short continuous-flow pages can be one pass.
  The events build used a **4-gate** sequence (schema → design package → pages → homepage
  wiring) — a good template for multi-part infrastructure work.
- **Command labeling:** prefix **[Terminal]** for commands Todd runs himself, **[CC]**
  for prompts handed to Claude Code. Always. (The `[CC]` / `[Terminal]` label is a
  human-facing tag — it must NOT be typed into the terminal. This bit us once.)
- **`pwd` discipline:** CC confirms it's in the NWC Site repo before acting (a separate
  `Heritage-Metal-Site` project also exists on the machine — they collided once). In a
  continuous session the per-block check can relax; re-confirm at session start.
- **COMMIT DISCIPLINE (learned the hard way, REPEATEDLY):** "Todd approved it" =
  "commit it now." Hand the commit block together with the approval, in the SAME turn.
  Reviewed-but-uncommitted work drifted MULTIPLE times because a new edit/design-import
  arrived before the commit block was issued. The gap is at the COMMIT step, not the build
  step. Don't let the next task jump the queue. CC's `git status` gate ("STOP if anything
  unexpected") is what keeps catching this — keep it.
- **BRANCH-RESOLUTION DISCIPLINE:** when a branch is merged/deleted, record the resolution
  in the state doc the SAME session, and don't push a merge until the browser review that
  gates it has happened.
- **DESIGN-IMPORT GATE:** when Todd drops a new Claude-Design export, run a READ-AND-PLAN
  gate FIRST (no build): locate/confirm any assets, read the current page, decide the
  inline→token translation, flag legitimate literal exceptions, decide sequencing
  (extract-first vs build-first). Only build after the plan is reviewed.

## Environment
- Repo root: `/Users/toddkavanaugh/Documents/NWC Site`
- **Git identity:** global git identity is **Todd Kavanaugh**
  (`263997182+twkavanaugh@users.noreply.github.com` — GitHub noreply, set 2026-07-02).
- Build agent: **Claude Code directly** (NOT Replit). Builds on the **personal MacBook Air**
  (the work machine's ThreatLocker SIGKILLs esbuild on npm install).
- Dev server: `[Terminal]` `cd "…/NWC Site/site" && npm run dev` → localhost:4321.
- **DEV-SERVER LESSON (burned twice):** RESTART the dev server after any `npm install` or
  change to global.css/tokens. A long-running server goes STALE — Vite can't resolve a
  package added after it started, breaking global.css at request time; since global.css
  @imports tokens.css, ALL tokens go undefined → page looks catastrophically broken (wrong
  fonts, no layout, "missing" words). NOT a code bug. Fix = Ctrl+C, `npm run dev`, hard-
  refresh (Cmd+Shift+R). The production build is unaffected and is the source of truth.

## Stack
- **Astro 5.x** (pinned `^5.0.0` — deliberately NOT 7.x. 5.18.2 installed.)
- Static output, zero client JS. CSS-only interactivity (mega-menu, dropdowns, marquee, fade-up).
- **Content Layer API** (Astro 5) now in use — see the Events collection section.
- Fonts self-hosted via `@fontsource-variable`, explicit `@font-face` blocks in global.css
  aliasing package woff2 to clean family names. THREE fonts: Inter Tight (display/sans),
  JetBrains Mono, Newsreader (serif).
- Design source: committed prototypes in `brand/prototype/` (read by CC). Exports vary
  (page-*.jsx React source; rendered-HTML snapshots; multi-direction comparisons — pick
  one direction). Claude extracts the chosen source, CC commits it to `brand/prototype/`
  before building against it.

## Deploy (LIVE — proven, auto-deploy working)
- **GitHub:** `twkavanaugh/nwc-site`, branch `main`. Fine-grained PAT (Contents: r/w).
  Future pushes are just `git push`.
- **Render:** Static Site `nwc-site` under the **North Wake Church** workspace (Todd's
  Yahoo email, for later transfer). Root `site` · Build `npm install && npm run build` ·
  Publish `dist` · Auto-Deploy On Commit.
- **Deploy flow:** `git push` → Render auto-builds from `main` → live. Render lives in
  browser + GitHub connection only (no terminal/CC login). Auto-deploy confirmed firing;
  if the live site ever lags `main`, check the Render dashboard / trigger a manual deploy.
- **The push IS the deploy gate:** because a push ships to production, the browser review
  that gates a change must happen BEFORE the push, not after.
- **NOTE (freshness):** a **nightly Render deploy-hook cron** is on the hardening list — see
  the Events collection section for why (push-only freshness is accepted for v1).

## ⚠️ OWNERSHIP / HANDOFF OBLIGATION (do not lose this)
Built under **Todd's personal accounts** (GitHub `twkavanaugh`, Render under a Yahoo
email). Decision: build now, **transfer to church-owned accounts at handoff**. REQUIRED:
- Transfer the GitHub repo to a church-owned account/org (clean).
- Transfer/reassign the Render account to the church (swap account email; remove Todd).
"Transfer later" only protects against lock-in if it actually happens at handoff.

---

## Pages — current state
| Route | Status |
|---|---|
| `/` (homepage) | ✅ COMPLETE — watercolor "Scene + People" hero; **Upcoming section now queries the events collection** |
| `/community/students` | ✅ COMPLETE |
| `/about/mission` | ✅ COMPLETE — Devotional redesign |
| `/who-is-jesus` | ✅ COMPLETE — Literary Essay (Direction A) |
| `/community/kids` | ✅ COMPLETE — 10 sections; **now leads with the serif-on-image photo hero (pilot, stock placeholder)** |
| `/help/feed` | ✅ COMPLETE — 7 sections |
| `/community/mature-adults` | ✅ COMPLETE — 8 sections |
| `/events` | ✅ COMPLETE — date-filtered, chronologically sorted index (4 seed events) |
| `/events/[slug]` | ✅ COMPLETE — continuous-column detail template (4 seeds render) |
| All other nav routes | ❌ 404 — not built yet (expected; nav links are real) |

**Home hero note:** the homepage opens with a 3-part "Scene + People" hero
(`brand/prototype/HOME-HERO-SCENE-PEOPLE.md`): (A) a watercolor of downtown Wake Forest
(`site/public/wake-forest-bcg.png`, 1.2MB) with a cream legibility scrim + centered serif
headline "A place to know, grow, and go in love." (know/grow/go via `.em-accent`); (B) an
italic serif transition line + vertical hairline; (C) a framed 21:9 people photo with
caption. The people photo reuses `/home-hero.jpg` which is STILL ABSENT → renders over
`--bg-2` with a removable "Photo pending" marker. **The homepage "Upcoming" list is no
longer hardcoded** — it queries the events collection (top-3 by date filter — see below).

**Mission page note:** original build SUPERSEDED by the Devotional redesign
(`.wrap-reading` 720px column, Newsreader accents, three Know/Grow/Go movements with
hairline borders). Live source: `brand/prototype/page-mission-devotional.jsx`.

**Route map (canonical, encoded in the nav — nested):**
Top: `/` , `/visit` , `/who-is-jesus` , `/blog` , Give = EXTERNAL
`https://onrealm.org/NorthWake/-/form/give/now` (new tab). Give URL also lives in
`business.ts` as `givingUrl` (single source).
About: `/about/beliefs` `/about/leadership` `/about/mission` `/about/membership`
Mission: `/mission/international` `/mission/church-planting` `/mission/local-outreach`
  `/mission/training` `/mission/serve`
Help: `/help/hope-counseling` `/help/mercy-clinic` `/help/feed` `/help/care`
Community: `/community/grow-groups` `/community/adult-discipleship` `/community/kids`
  `/community/students` `/community/women` `/community/men` `/community/lily-moms`
  `/community/young-adults` `/community/mature-adults`
Resources: `/events` (+ `/events/[slug]`) `/sermons` `/blog` (+ `/blog/[slug]`) `/resources`

Prototype sources in `brand/prototype/`: home (+ HOME-HERO-SCENE-PEOPLE.md), students,
membership, feed, mature, mission-devotional, sermons, hope, jesus (who-is-jesus →
Direction A), kids, event, event-standard, blog, other, HERO-SERIF-ON-IMAGE.md,
**EVENT-DETAIL-CONTINUOUS-SPEC.md + EVENT-DETAIL-CONTINUOUS.html (NEW).**
(No prototype yet — leadership, most /mission/*, mercy-clinic, women, men, lily-moms,
young-adults, grow-groups, adult-discipleship.)

---

## ★ EVENTS CONTENT COLLECTION — COMPLETE, LIVE END-TO-END (the headline)
The site's **first content collection**, built and shipped across 4 gates + 1 doc commit.
This structurally fixes the live stale-events bug: dates are real, so listings filter and
sort at build time instead of relying on hand-maintained yearless strings.

**Shipped commits (all pushed, all live):**
- `a237dc8` — committed the content-model decision record into the repo (was
  project-knowledge only). See `docs/CONTENT-MODEL-2026-06-28.md`.
- `84ea3fe` — **Gate 1:** schema in `site/src/content.config.ts`, date utils in
  `site/src/lib/date.ts`, 4 **UNVERIFIED** seed entries in `site/src/content/events/`.
- `f5b56e2` — added the continuous-column event-detail **design package** to
  `brand/prototype/` (`EVENT-DETAIL-CONTINUOUS-SPEC.md` + `.html`).
- `df2dc4e` — **Gate 2:** date-filtered `/events` index + continuous-column
  `/events/[slug]` detail template; added `image` / `imageAlt` schema fields; added
  `ministryId` to seeds; corrected service times to 9:00 & 10:45.
- `5538e7c` — **Gate 3:** homepage "Upcoming" section queries the collection (top-3 by the
  same date filter/sort) — the stale-events bug is now structurally dead.

**Where things live:**
- `site/src/content.config.ts` — the `events` collection: `glob` loader over
  `src/content/events/**/*.md`. Required: `title`, `startDate` (`z.coerce.date()`, the
  sortable/filterable real date). Optional display: `subtitle`, `endDate`, `expirationDate`,
  `time`, `timeNote`, `location`, `cost`, `deadline`, `registrationUrl`, `contactEmail`,
  `image`, `imageAlt`. Association/future: `ministryId`, `featured` (default false).
- `site/src/lib/date.ts` — the date helpers. `isUpcoming()` = an event is upcoming while
  `(expirationDate ?? endDate ?? startDate) >= today` (lets an open application window
  linger past startDate, or drop early). Plus chronological sort + derived month/day/
  long-form date-string formatters. **Displayed date strings are ALWAYS DERIVED from
  `startDate`, never stored** — no more yearless "May 31".
- `site/src/content/events/` — 4 seed `.md` files (baptism-sunday, membership-class-spring,
  ministry-intensive-internship, womens-day). Facts in frontmatter; narrative prose in the
  Markdown BODY (kept as prose, not modelled as arrays).
- `site/src/pages/events/index.astro` (filtered + sorted list) and `[slug].astro`
  (continuous-column detail).

**Key decisions recorded (carry these — they're the rationale a fresh chat needs):**
- **Simple date-sorted list; NO recurrence in v1.** iCal/calendar/recurrence are
  intentionally out. The schema doesn't preclude them (a `recurrence` field is a
  non-breaking future add). **CONTENT-MEETING ITEM:** the church must be *told* the old
  recurring-calendar feature isn't coming back in v1 — set that expectation explicitly.
- **Push-only freshness accepted for v1.** The date filter runs at *build* time, so a
  static site won't "roll over" a now-past event until the next deploy. Mitigation on the
  hardening list: a **nightly Render deploy-hook cron** to rebuild daily. Acceptable for v1.
- **`registrationUrl` is `z.string()` (NOT `.url()`)** — deliberately, so it accepts
  internal relative paths (e.g. `/about/membership`), absolute URLs, and `mailto:`.
  `.url()` would reject internal paths and fail the build.
- **Absent URL = no button** (inert-button discipline): the template omits the
  registration button entirely when `registrationUrl` is absent, rather than rendering a
  dead button. Likewise unverified `contactEmail` renders INERT (plain text, no `mailto:`).
- **Image convention: `public/events/<slug>.jpg`.** Presence of the `image` field is what
  turns on the 21:8 image slot AND the shaded `--bg-2` rail behind the facts box (variant D
  of the design package). `imageAlt` falls back to the title when absent (a fallback, not a
  substitute for real office-written alt).
- **Location/cost defaults (Q5):** absent `location` → template defaults to BUSINESS (church
  name + address); absent `cost` → the cost row is OMITTED (no "Free" assumed).
- **`ministryId` / `featured`** are included now but UNUSED by v1 queries (future filtering
  / homepage pinning). v1 homepage is pure date-sort top-3.

**The 4 seed events are UNVERIFIED placeholders** (dates/details) — on the content agenda.

---

## ★ SITE-WIDE TYPE STANDARDS — STANDING RULE (commit `8860ab3`)
A site-wide legibility policy, now recorded in `brand/design-tokens.md` and implemented in
`global.css`. **STANDING RULE: this type policy silently corrects all incoming design
packages** — when a Claude-Design export ships sub-16px content text or tiny mobile
floors, CC applies the policy without asking; it does not faithfully reproduce
too-small type.

- **16px content floor at ALL viewports.** No body/content text below 16px anywhere.
- **Micro-type exemption:** mono / eyebrow / caption styles may go below 16px, BUT such
  micro-type must **never be the sole carrier of meaning** (it labels/annotates content
  that is also conveyed at readable size).
- **Mobile scale (in `global.css`):** body 18px, mono 14px, section vertical rhythm 64px,
  card padding 24px on mobile. The mobile card-padding override is applied via
  **`.wrap`-prefixed selectors** — see the cascade lesson below.
- **Label-column grids collapse at 720px:** the two-column label/value grids (kids
  schedule, kids dedication, feed hours) stack to one column on phones so the label column
  doesn't crush the value column.

**★ CASCADE LESSON (Astro `where` scoping — important, reusable):** Astro scopes component
styles with `:where(...)`, which has **zero specificity**. A *global* rule that needs to
override a *page-scoped* class (e.g. bumping mobile card padding) will LOSE to the
component's own rule unless the global selector carries enough specificity — hence the
**`.wrap`-prefixed** selectors in the global mobile overrides. When a global override of a
page-scoped class silently no-ops, this is why: add a real ancestor to win the cascade.

---

## Ministry-page template (PROVEN across 4 pages: students, kids, feed, mature)
The recurring ministry shape is a COMPOSITION of already-global pieces, not a single
extractable "template": Breadcrumb → hero (1.2–1.3fr / 1fr grid: eyebrow + display-l +
lede + 2 buttons + Placeholder 4/5) → section-heads → card grids → (often) a dark band →
centered CTA. Build new ministry pages by consuming the globals; keep page-specific card
variants page-local. Confirmed across both `/community/*` and `/help/*`.

## Foundation (done, proven)
- `brand/design-tokens.md` — HUMAN SOURCE OF TRUTH. Two layers: raw palette (only place
  literals live) → semantic aliases (var() only). Light theme only. **Now also records the
  16px type policy.**
- `site/src/styles/tokens.css` — generated ONE-WAY from the md; NEVER hand-edit.
- **Inverse tokens** (`--bg-inverse`, `--ink-on-inverse[-2]`, `--line-on-inverse[-strong]`,
  `--border-on-inverse`, **`--accent-on-inverse`**) so dark bands don't hardcode white rgba.
  PROVEN on: homepage Care band, Who-is-Jesus prayer band, Kids child-dedication band, Feed
  "How we serve" band, Mature CTA band.
- **`--accent-on-inverse` (NEW, commit `e8643c7`) → `--raw-clay-300` (#e8b394).** A
  full-token contrast audit found clay-600 accent *text* on `--bg-inverse` failed WCAG
  (2.69:1 — below even the 3.0 large-text bar). The new alias computes **9.54:1 (AAA)**.
  Repointed all 5 accent-as-text-on-dark uses: care tag/cta (home), `.wij-amen`
  (who-is-jesus), dedication email + purpose ordinals (kids). **Decorative** accent uses
  (dots, borders) on dark bands were left untouched — decoration is exempt from contrast
  rules. The audit script was throwaway (not committed).
- **On-image tokens** `--on-image-fg` (#f6f3ed cream) and `--on-image-accent` (#e8b394 light
  clay) are now REAL tokens (added by the hero pilot, commit `108d1aa`) — added to
  `design-tokens.md` first, regenerated into `tokens.css`. Image-only; both fail contrast
  on light `--bg`; never use on a light background.
- **Type (THREE families):** Inter Tight (display @ 700, body 400/500); JetBrains Mono;
  **Newsreader serif** → token `--serif` (bare-name convention: `--display`/`--sans`/
  `--mono`/`--serif`, NO `--font-` prefix). Self-hosted, normal + italic axes.
- `site/src/styles/global.css` — foundational layer + shared classes + **the mobile type
  scale** (see Type standards).
- **`site/src/data/business.ts` — SSOT for church facts** (commit `e3b6a8a` extended it into
  a `siteSettings`-style `Business` object): NAP, phone, email, url, `serviceTimes: ['9:00
  AM', '10:45 AM']` (CONFIRMED with church 2026-06-28 — the old "11:00 AM" was a confirmed
  typo), `givingUrl` (onRealm form, single source), `mapsUrl` (still empty — TODO once
  street address is church-verified). `url` `https://northwake.com` still UNCONFIRMED.
  RULE: never hardcode NAP / service times / give URL in a page — import from BUSINESS.

## Shared globals (live in global.css — consume, don't recreate)
- `.btn*` (incl. `.btn-primary`, `.btn-ghost`, `.btn-accent`, **on-image button variants**),
  `.arr`
- `.section-head`, `.row-arr`, `.row-link`, `.ph*`, `.eyebrow` + `.dot`, `.mono`, `.body`,
  `.lede`, `.small`, `.display-l/m/s`, `.title`, `.fade-up` (one-shot entrance animation)
- **Containers:** `.wrap` (1320px), `.wrap-narrow` (920px), `.wrap-reading` (720px,
  reverent reading column). Do NOT add a 4th width without reason.
- **Serif/devotional idioms:** `.serif { font-family: var(--serif) }`,
  `.em-accent { font-style: italic; color: var(--accent) }`,
  `.pull-quote { border-left: 2px solid var(--accent); padding-left: 28px }`.
- **`.hairline-grid`**: `display:grid; gap:1px; background:var(--line);
  border:1px solid var(--line)`. Consumed by 5 grids. `grid-template-columns` stays
  PER-PAGE; CELLS stay fully page-local (do NOT extract a cell class).

## Components
- `Layout.astro` — doc shell; props `title`, `description`. Imports global.css; Nav + slot + Footer.
- **`Nav.astro` — sticky FULL-WIDTH MEGA-MENU** (RESOLVED & LIVE). Each group trigger
  (About / Mission / Help / Community / Resources) opens a full-bleed `.mega` panel —
  columns of grouped items + a featured rail. Static, ZERO-JS: panels open on `:hover` /
  `:focus-within`; active state computed at build from `Astro.url.pathname`. Items WITHOUT
  an href render dimmed/non-clickable. Featured-rail copy + item descriptions are UNVERIFIED
  placeholders. **Desktop-only — no mobile/hamburger yet (LAUNCH BLOCKER, next task).**
- `Footer.astro` — 5-col; NAP from business.ts; brand-mark CSS duplicated from Nav
  (→ extract a Brand component later).
- **`Breadcrumb.astro`** — full-bleed chip-style bar: edge-to-edge `var(--bg-2)`,
  `border-bottom: 1px solid var(--line)`, `12px 40px` padding, flush under nav (must be
  FIRST element in page body). Props: `trail` (`{label, href?}` — last = current filled
  chip; href-less = outlined placeholder chip) + optional `action` (`{label, href}`, mono).
  ALL interior pages use it. FIRST-OF-TYPE TRAP: page hero classes (0,2,0) outrank
  `section:first-of-type` (0,1,1), so heroes keep top padding as first element — fine.

## Token/architecture rules (keep enforcing)
- Components consume SEMANTIC tokens only — no raw hex, no `var(--raw-*)`, no inline
  `rgba()`/`#fff`. Dark bands MUST map to inverse tokens; **accent TEXT on dark bands MUST
  use `--accent-on-inverse`** (not `--accent`, which fails contrast).
- DOCUMENTED literal EXCEPTIONS (real-image scrims / non-theme values): hero photo-scrims
  (home cream `rgba(246,243,237,…)`, home caption `rgba(0,0,0,…)`, caption text
  `rgba(255,255,255,0.95)`, `#f3ecdf` watercolor fallback; kids serif-on-image charcoal
  scrim); `--shadow-dropdown` composite; the Feed donation swatch `var(--raw-teal)`
  (#3fb6ad, the ONE sanctioned `var(--raw-*)`, a real-world object color). Each commented.
- Build against REAL committed prototype source (`brand/prototype/`), not descriptions.
- **Foundation before propagation:** when a pattern recurs, do a pattern-analysis pass,
  extract the genuinely-identical core to global, PROVE non-destructive (rendered-HTML
  diff), THEN build on it. Extract ONLY what's recurred AND is the same thing.
  ("Same mechanism" ≠ "same component" — Feed's bordered cards looked like a repeat but
  diverged, correctly NOT extracted.)
- No inline styles in components — translate prototype `style={{}}` to token-based CSS.
- Honest placeholders only; nothing invented; grow the UNVERIFIED CONTENT list.
- EMAIL/CONTACT DISCIPLINE: never wire a live `mailto:` to an unverified address; NEVER
  publish a personal email on the public site. Verify with church before wiring.

## ★ SERIF-ON-IMAGE HERO — PILOT LIVE on /community/kids (rollout gated on photography)
The photo-based interior hero (`brand/prototype/HERO-SERIF-ON-IMAGE.md`, variant E) is now
**live as a pilot on `/community/kids`** with a **stock placeholder** photo.

- **Shipped commits:** `108d1aa` (pilot on kids + adds `--on-image-fg`/`--on-image-accent`
  tokens + on-image button variants), `b5a0892` (eyebrow bumped to 90% cream for mobile
  legibility over bright image regions), `fe471a9` (kids hero mobile spacing + audited
  contrast values recorded in the design package).
- **Contrast audited:** scrim mid-stop `0.58`, hero text at **full opacity** (no alpha).
  Worst-case-over-pure-white photo regions leaves a documented residual (~3.9–4.5:1) —
  recorded in the package and mitigated by the shot-list framing rule ("no blown-out areas
  dead center"). Accent words use light-clay `--on-image-accent` and are decorative
  emphasis (meaning not carried by color) — exempt.
- **ROLLOUT to 13 pages is GATED ON PHOTOGRAPHY.** When the 2nd real photo lands, extract a
  shared `HeroOnImage` component (prove-twice-then-extract). Photo requirement: ~2000px
  wide, subject framed in the **upper two-thirds** (overlay is darkest at the bottom).

## ★ PHOTOGRAPHER SHOT LIST — v1 READY TO SEND (commit `cb51ca9`)
`docs/PHOTOGRAPHER-SHOT-LIST.md` v1: **13 ministry heroes + 4 homepage shots +
environmental splash + B-roll.** Consent-sensitive shots are flagged. This is the artifact
that unblocks both the home people-photo and the serif-on-image hero rollout. **Ready to
send to a photographer.**

## ★ CONTENT SPECIMENS REVIEWED + PAGES CMS TEST PLAN
Reviewed real old-site pages as content specimens: **Family Table, Lily Moms, Serve,
Ministry Intensive, and 3 legacy event pages.** Outcomes:
- Validated the **events schema** + confirmed a future **posts collection** is needed.
- Produced the events **`image` field** (from what real event pages actually carry).
- The old site's dead **"Event Website" buttons** are exactly the failure our **inert-button
  rule** fixes (no dead buttons — omit when the target isn't real/verified).
- Built a **Pages CMS employee-test task list** (the vertical-slice test the office will
  run to prove the CMS is usable): (1) create a **dated event with a poster upload**,
  (2) a **link-heavy program page**, (3) an **undated reference post**, (4) **PDF
  upload + replace**, (5) **edit-and-republish**.
- **Content sign-off flags:** Lily Moms uses personal Gmails + names individuals →
  needs church sign-off before publishing. `noahj@northwake.com` likewise needs
  confirmation before it's wired live.

## EXTRACTION CANDIDATES — remaining (built page-local, await a 2nd occurrence)
- **`HeroOnImage` component** — extract on its 2nd page use (after the Kids pilot).
  Blocked until a 2nd real photo lands.
- **`.kids-verse` scripture treatment** — `.serif` upright, `clamp(34–48px)`, in a
  `.pull-quote` frame. STILL ONLY 1 occurrence. Promote to a shared `scripture` class when
  a real 2nd verse appears.
- **`.kids-schedule` section-separator** — hero → 64px gap → hairline → 96px gap → content.
  Still 1 occurrence.
- **Brand mark** (duplicated Nav + Footer → extract a Brand component).
- Earlier RESOLVED: `.hairline-grid` (5 consumers), Breadcrumb, eyebrow+dot, pull-quote,
  serif idioms — all global ✅.
- NOT extracted on purpose: bordered cards (`.kids-card*` / `.feed-card*` / mature variants)
  — diverge per page; only the border is shared. Left page-local.

## KNOWN DEBT / HARDENING (address before launch; no current risk)
- **★ Mobile nav — LAUNCH BLOCKER (next task).** The mega-menu is desktop-only; links
  hidden <980px, no hamburger. This is the worst thing on any phone. Blocks phone QA.
- **Nightly Render deploy-hook cron** — needed so build-time event date filtering rolls
  over daily (push-only freshness is the accepted v1 tradeoff — see Events section).
- **Watercolor 1.2MB PNG** (`site/public/wake-forest-bcg.png`) — compress / WebP.
- **tel:/mailto:** on footer + verified page contacts — easy UX/a11y win (after verification).
- **Inert buttons / unwired placeholders** (wire real targets only once verified; never
  invent): home hero "Watch Sunday's sermon" → /sermons (page not built), "Plan a visit" →
  /visit (not built); students "Parent info"/"Email the student team"; kids
  `children@`/`childsafety@northwake.com`, `@northwakekids`, Gospel-Project links,
  photo-release form; who-is-jesus "Tell us"/"Coffee or tea" + 2 book rows; feed "Stop by
  Feed"/"Volunteer"/coordinator emails (incl. a personal Gmail — unpublished); mature
  "RSVP"/"Email the team"; mega-menu featured rails + item descriptions (placeholder).
  Events use the same discipline (absent registrationUrl = no button; unverified email inert).
- **Hero/people photo** — `/home-hero.jpg` still absent; home hero section C renders over
  `--bg-2` with a pending marker. Ministry-page hero photography is the larger, shot-list
  need.
- **Brand mark** — CSS placeholder; swap for real logo; de-dupe Nav/Footer.
- **npm audit** — advisories in Astro 5.x line; NOT audit-fixed (would break pin). Low risk.
- **Repo visibility** — currently PUBLIC; consider flipping to private. One click.
- **`/community` index** — breadcrumb "Community" + "All ministries" point at
  `/community/grow-groups` as a stand-in; a real section index may be wanted.
- **Stale comment** in `who-is-jesus.astro` lists `.crumb*` among globals (no longer true);
  `brand/prototype/.gitkeep` redundant — sweep both in a cleanup commit.
- **`mapsUrl` empty** in business.ts — fill once the street address is church-verified.
- **Pre-launch hardening pass** (after content lands): schema/structured data, robots.txt,
  XML sitemap, custom 404, per-page canonicals + unique titles/descriptions, og/twitter
  images, Lighthouse / Core Web Vitals, image optimization. Its own pass.

## UNVERIFIED CONTENT — confirm with church before launch (content-meeting agenda)
The content-verification meeting is increasingly the real launch gate (more than building).
- **★ Events: tell the church the recurring-calendar feature is NOT returning in v1** (simple
  date-sorted list only). The 4 seed events (baptism-sunday, membership-class-spring,
  ministry-intensive-internship, womens-day) are UNVERIFIED — confirm dates/details.
- **★ Pages CMS content sign-offs:** Lily Moms personal Gmails + named individuals;
  `noahj@northwake.com`. Church must approve before publishing.
- **Service times:** `9:00 AM` & `10:45 AM` (RECONCILED — old "9 & 11" was a typo,
  corrected + confirmed 2026-06-28). Feed: Sun 8:30–10:15 AM year-round, 1st & 3rd Sat
  8:30–10:00 AM. (Final confirm on the agenda, no longer a conflict.)
- **NAP:** 1212 S Main St, Wake Forest NC 27587 / (919) 556-1546 / office@northwake.com;
  canonical url `https://northwake.com` unconfirmed; `mapsUrl` not yet set.
- **Hero photography:** one photo per ministry page, ~2000px wide, subject upper two-thirds
  (see the shot list). Unblocks the serif-on-image rollout + the home people photo.
- **Home hero copy:** "A place to know, grow, and go in love." + lede + transition line
  + caption ("One family, gathered around the gospel") — confirm.
- **Latest sermon:** "Be Different — a journey through Romans", "Spring 2026" — PLACEHOLDER.
- **Mission/Jesus/Kids/Students copy:** all prototype-sourced (verse wordings/translations,
  the Jesus essay, the 2 recommended books, kids curricula + dedication date May 10 2026 +
  verse refs, students grade range + Colossians 1:28–29). Confirm.
- **Feed:** the two convictions, three-paths copy, "teal box · church lobby", hours,
  "Building 2" specificity, coordinator names/emails (incl. personal Gmail).
- **Mature:** opening conviction, "what we long to see" list, 4 experiences, schedule.
- **Nav mega-menu:** featured-rail kickers/titles/bodies + item descriptions (placeholder).
- **Marquee phrases, homepage logistics, Care ministry scope** (as before).
- **★ ACCESSIBILITY REVIEW OF RECORD:** Todd's wife's verdict on the live-site type sizes is
  **still pending** — this is the accessibility sign-off we're waiting on for the type scale.

## NEXT TASKS (in priority order)
1. **★ Chrome pass — mobile nav / hamburger. LAUNCH BLOCKER.** The mega-menu has no mobile
   treatment; on a phone the nav is the single worst thing on the site. Do this first.
2. **`/sermons` page** — prototype-ready; also lets the homepage/hero "Watch Sunday's
   sermon" and "Plan a visit"-adjacent buttons land somewhere real.
3. **Pages CMS vertical-slice test** — the infrastructure now exists (events collection is
   live). Run the employee-test task list (dated event w/ poster, link-heavy page, undated
   post, PDF upload/replace, edit-and-republish) to prove the office can actually use it.
4. **Posts / resources / categories collections** — the next content collections, following
   the events collection as the proven pattern.

Standing directions after these: keep building pages for momentum (a page with a real
scripture VERSE gives `.kids-verse` its 2nd occurrence → scripture extraction); steer Todd
toward scheduling the **church content meeting** (the real launch gate); then the
**hardening pass** (mobile already handled as task 1, plus deploy-hook cron, schema,
sitemap, image optimization, Lighthouse) AFTER content lands.

## LESSONS (workflow — keep these sharp)
- **★ Astro `:where()` scoping = zero specificity.** A global override of a page-scoped
  class silently no-ops unless the global selector adds specificity (the `.wrap`-prefixed
  mobile card-padding rules). If a global rule "isn't taking," this is the first suspect.
- **Multi-part infrastructure works well as an explicit gate sequence** — the events build
  ran schema → design package → pages → homepage wiring, each reviewed before the next.
- **Push-as-deploy-gate only works if the push waits for the review.** Don't push a merge
  until its browser review has happened; record a branch's resolution in the state doc the
  SAME session.
- **Commit discipline:** "approved" = "commit now," in the same turn; reviewed-but-
  uncommitted work has drifted repeatedly. The `git status` STOP-gate keeps catching it.
- **Type policy is a STANDING correction** — incoming design packages are silently brought
  up to the 16px floor + mobile scale, not reproduced faithfully when they ship tiny type.
- **Dev-server staleness** and the **`[CC]`/`[Terminal]` label-not-a-command** trap — both
  still live; see Environment / Roles.

## Commit history (high level — chronological)
[prior sessions: scaffold → tokens → global+fonts → layout chrome → homepage → students →
deploy → mission redesign → Newsreader/--serif → who-is-jesus → serif extraction →
Breadcrumb + propagation → kids (10 sections) → feed (7 sections) → `.hairline-grid`
extraction → mature (8 sections) → watercolor "Scene + People" home hero → mega-menu merge
→ `e3b6a8a` siteSettings → `5917eba` serif-on-image package (deferred) → `8401c54` state
2026-07-02 → `9c9184c` record live Render URL]
**[2026-07-03 — hero pilot + shot list + type standards]** `108d1aa` serif-on-image hero
pilot on kids (+ on-image tokens/buttons) → `b5a0892` eyebrow 90% cream → `cb51ca9`
photographer shot list v1 → `fe471a9` kids hero mobile spacing + audited contrast →
`8860ab3` site-wide type standards (16px floor, mobile scale, grid collapses).
**[2026-07-04 — events build complete]** `a237dc8` content-model doc into repo → `84ea3fe`
Gate 1 (schema + date utils + 4 seeds) → `f5b56e2` continuous-column design package →
`df2dc4e` Gate 2 (index + detail, image/imageAlt, ministryId, service-time fix) →
`5538e7c` Gate 3 (homepage queries the collection — stale-events bug dead) → `e8643c7`
`--accent-on-inverse` contrast fix (accent text on dark bands) → this state doc.
