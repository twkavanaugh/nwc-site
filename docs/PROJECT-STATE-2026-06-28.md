# North Wake Church Site — Project State (2026-06-28)

**Purpose of this file:** complete, current context so a fresh chat (Claude as SME/
prompt-writer) can resume at full speed without the prior conversation. Drop into
Project knowledge. Supersedes `docs/PROJECT-STATE-2026-06-27b.md` (which predates the
Feed + Mature-Adults pages, the `.hairline-grid` extraction, and the new watercolor
home hero).

---

## TL;DR — where things stand
A static Astro 5 marketing site for North Wake Church (Wake Forest, NC). Foundation
complete and **seven pages built and reviewed**: homepage (new watercolor hero),
students, mission (Devotional redesign), who-is-jesus, kids, feed, mature-adults. The
site is **LIVE on Render**, auto-deploying from GitHub `main` on every push. All interior
pages share the `<Breadcrumb>` component and the established token/global vocabulary.
The ministry-page template is now proven across BOTH `/community/*` and `/help/*`.
Next work is more pages (every nav link points at a real route; most 404 until built)
and — increasingly the real launch gate — a content-verification pass with the church
plus a hardening pass.

**Live URL:** [FILL IN — the *.onrender.com URL Render assigned] (deploy confirmed working)
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
- **Command labeling:** prefix **[Terminal]** for commands Todd runs himself, **[CC]**
  for prompts handed to Claude Code. Always. (The `[CC]` / `[Terminal]` label is a
  human-facing tag — it must NOT be typed into the terminal. This bit us once.)
- **`pwd` discipline:** CC confirms it's in the NWC Site repo before acting (a separate
  `Heritage-Metal-Site` project also exists on the machine — they collided once). In a
  continuous session the per-block check can relax; re-confirm at session start.
- **COMMIT DISCIPLINE (learned the hard way, REPEATEDLY):** "Todd approved it" =
  "commit it now." Hand the commit block together with the approval, in the SAME turn.
  Reviewed-but-uncommitted work drifted MULTIPLE times (kids 1–3, kids 4–5, mature 7–8)
  because a new edit/design-import arrived before the commit block was issued. The gap is
  at the COMMIT step, not the build step. Don't let the next task jump the queue. CC's
  `git status` gate ("STOP if anything unexpected") is what keeps catching this — keep it.
- **DESIGN-IMPORT GATE:** when Todd drops a new Claude-Design export, run a READ-AND-PLAN
  gate FIRST (no build): locate/confirm any assets, read the current page, decide the
  inline→token translation, flag legitimate literal exceptions, decide sequencing
  (extract-first vs build-first). Only build after the plan is reviewed.

## Environment
- Repo root: `/Users/toddkavanaugh/Documents/NWC Site`
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
- Static output, zero client JS. CSS-only interactivity (dropdowns, marquee, fade-up).
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
  if the live site ever lags `main`, check the Render dashboard for build status / trigger
  a manual deploy (the original session flagged a webhook mismatch as a known risk — keep
  an eye on it, but it has been working).

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
| `/` (homepage) | ✅ COMPLETE — **NEW watercolor "Scene + People" hero** (replaced overlay hero) |
| `/community/students` | ✅ COMPLETE |
| `/about/mission` | ✅ COMPLETE — Devotional redesign |
| `/who-is-jesus` | ✅ COMPLETE — Literary Essay (Direction A) |
| `/community/kids` | ✅ COMPLETE — 10 sections |
| `/help/feed` | ✅ COMPLETE — 7 sections |
| `/community/mature-adults` | ✅ COMPLETE — 8 sections |
| All other nav routes | ❌ 404 — not built yet (expected; nav links are real) |

**Home hero note:** the homepage now opens with a 3-part "Scene + People" hero
(`brand/prototype/HOME-HERO-SCENE-PEOPLE.md`): (A) a watercolor of downtown Wake Forest
(`site/public/wake-forest-bcg.png`, 1.2MB) with a cream legibility scrim + centered serif
headline "A place to know, grow, and go in love." (know/grow/go via `.em-accent`); (B) an
italic serif transition line + vertical hairline; (C) a framed 21:9 people photo with
caption. The OLD overlay hero (and all its `.hero*`/`.btn-overlay` CSS) was removed. The
people photo reuses `/home-hero.jpg` which is STILL ABSENT → renders over `--bg-2` with a
removable "Photo pending" marker until a real Sunday-gathering shot lands.

**Mission page note:** original left-aligned build SUPERSEDED by the Devotional redesign
(`.wrap-reading` 720px column, Newsreader accents, three Know/Grow/Go movements with
hairline borders). Live design source: `brand/prototype/page-mission-devotional.jsx`.

**Route map (canonical, encoded in the nav — nested):**
Top: `/` , `/visit` , `/who-is-jesus` , `/blog` , Give = EXTERNAL
`https://onrealm.org/NorthWake/-/form/give/now` (new tab).
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
Direction A "Literary Essay"; Direction B image-led was NOT chosen — needs photography),
kids, event, event-standard, blog, other. (No prototype yet — leadership, most /mission/*,
mercy-clinic, women, men, lily-moms, young-adults, grow-groups, adult-discipleship.)

## Ministry-page template (PROVEN across 4 pages: students, kids, feed, mature)
The recurring ministry shape is a COMPOSITION of already-global pieces, not a single
extractable "template": Breadcrumb → hero (1.2–1.3fr / 1fr grid: eyebrow + display-l +
lede + 2 buttons + Placeholder 4/5) → section-heads → card grids → (often) a dark band →
centered CTA. Build new ministry pages by consuming the globals; keep page-specific card
variants page-local. Confirmed to hold across both `/community/*` and `/help/*` sections.

## Foundation (done, proven)
- `brand/design-tokens.md` — HUMAN SOURCE OF TRUTH. Two layers: raw palette (only place
  literals live) → semantic aliases (var() only). Light theme only.
- `site/src/styles/tokens.css` — generated ONE-WAY from the md; NEVER hand-edit.
- **Inverse tokens** (`--bg-inverse`, `--ink-on-inverse[-2]`, `--line-on-inverse[-strong]`,
  `--border-on-inverse`) so dark bands don't hardcode white rgba. PROVEN on: homepage Care
  band, Who-is-Jesus prayer band, Kids child-dedication band, Feed "How we serve" band,
  Mature CTA band. `--border-on-inverse` got its designed first use on the Mature CTA's
  ghost button.
- **Type (THREE families):** Inter Tight (display @ 700, body 400/500); JetBrains Mono;
  **Newsreader serif** → token `--serif` (bare-name convention: `--display`/`--sans`/
  `--mono`/`--serif`, NO `--font-` prefix). Self-hosted, normal + italic axes.
- `site/src/styles/global.css` — foundational layer + shared classes (see Globals below).
- `site/src/data/business.ts` — SSOT for NAP/phone/email/url (used by Footer + the Feed
  location card). Canonical url `https://northwake.com` still UNCONFIRMED. RULE: never
  hardcode NAP in a page — import from BUSINESS.

## Shared globals (live in global.css — consume, don't recreate)
- `.btn*` (incl. `.btn-primary`, `.btn-ghost`, `.btn-accent`), `.arr`
- `.section-head`, `.row-arr`, `.row-link`, `.ph*`, `.eyebrow` + `.dot`, `.mono`, `.body`,
  `.lede`, `.small`, `.display-l/m/s`, `.title`, `.fade-up` (one-shot entrance animation)
- **Containers:** `.wrap` (1320px), `.wrap-narrow` (920px), `.wrap-reading` (720px,
  reverent reading column). Do NOT add a 4th width without reason.
- **Serif/devotional idioms:** `.serif { font-family: var(--serif) }`,
  `.em-accent { font-style: italic; color: var(--accent) }`,
  `.pull-quote { border-left: 2px solid var(--accent); padding-left: 28px }`.
- **`.hairline-grid`** (extracted this session): `display:grid; gap:1px;
  background:var(--line); border:1px solid var(--line)`. The hairline-gap card-grid
  mechanism. Consumed by 5 grids (homepage community, students rhythms, kids schedule,
  feed paths, mature experiences). `grid-template-columns` stays PER-PAGE (the page-local
  class holds only columns + breakpoints); CELLS stay fully page-local (backgrounds/
  padding/min-height legitimately diverge — do NOT try to extract a cell class).

## Components
- `Layout.astro` — doc shell; props `title`, `description`. Imports global.css; Nav + slot + Footer.
- `Nav.astro` — sticky nav (40px gutter); CSS `.brand-mark` (no logo yet); CSS-only hover
  dropdowns WITH the hover-bridge fix (`.dropdown::before` −8px/8px transparent bridge —
  dropdown launch-blocker FIXED); pathname-based active state.
- `Footer.astro` — 5-col; NAP from business.ts; brand-mark CSS duplicated from Nav
  (→ extract a Brand component later).
- **`Breadcrumb.astro`** — full-bleed chip-style bar: edge-to-edge `var(--bg-2)`,
  `border-bottom: 1px solid var(--line)`, `12px 40px` padding, flush under nav (must be
  FIRST element in page body). Props: `trail` (array of `{label, href?}` — last = current,
  filled chip; href-less = non-clickable outlined placeholder chip, e.g. "About"/"Help")
  + optional `action` (`{label, href}`, right-aligned mono). Home chip = house SVG;
  separators = rotated-square chevrons. ALL interior pages use it; old `.crumb*` globals
  retired. FIRST-OF-TYPE TRAP: page hero classes (spec 0,2,0) outrank `section:first-of-type`
  (0,1,1), so heroes keep top padding even as first element — verified fine on all pages.

## Token/architecture rules (keep enforcing)
- Components consume SEMANTIC tokens only — no raw hex, no `var(--raw-*)`, no inline
  `rgba()`/`#fff`. Dark bands MUST map to inverse tokens (proven 5×).
- DOCUMENTED literal EXCEPTIONS (real-image scrims / non-theme values): hero photo-scrim
  `rgba(0,0,0,…)`; `--shadow-dropdown` composite; the Feed donation swatch `var(--raw-teal)`
  (#3fb6ad, the ONE sanctioned `var(--raw-*)`, a real-world object color); the new home
  hero's scrims (cream `rgba(246,243,237,…)`, caption `rgba(0,0,0,…)`, caption text
  `rgba(255,255,255,0.95)`) and the `#f3ecdf` watercolor fallback. Each commented in place.
- Build against REAL committed prototype source (`brand/prototype/`), not descriptions.
- **Foundation before propagation, applied to LAYOUT too:** when a pattern recurs, do a
  pattern-analysis pass across the real pages, extract the genuinely-identical core to
  global, PROVE non-destructive (rendered-HTML diff: page bodies byte-identical), THEN
  build on it. Extract ONLY what's recurred AND is the same thing — no speculative
  abstraction. (Done: serif idioms, Breadcrumb, hairline-grid. NOTE the discipline that
  worked — Feed's bordered cards LOOKED like a repeat but diverged in padding/radius/bg, so
  they were correctly NOT extracted. "Same mechanism" ≠ "same component.")
- No inline styles in components — translate prototype `style={{}}` to token-based CSS.
- Honest placeholders only; nothing invented; grow the UNVERIFIED CONTENT list.
- EMAIL/CONTACT DISCIPLINE: never wire a live `mailto:` to an unverified address. NEVER
  publish a personal email on the public site (Feed's prototype had a personal Gmail —
  kept inert, shown as "email pending verification"). Verify with church before wiring.

## EXTRACTION CANDIDATES — remaining (built page-local, await a 2nd occurrence)
- **`.kids-verse` scripture treatment** — `.serif` upright, `clamp(34–48px)`, in a
  `.pull-quote` frame, leading its band (wider grid column). STILL ONLY 1 occurrence —
  neither Feed nor Mature had a quoted verse. Promote to a shared `scripture` class when a
  real 2nd verse appears (the `.serif` + `.pull-quote` frame is already global; only
  size/weight/measure needs promoting).
- **`.kids-schedule` section-separator** — hero → 64px gap → hairline `border-top:1px solid
  var(--line)` → 96px gap → content. Still 1 occurrence; awaits a 2nd.
- **Brand mark** (duplicated Nav + Footer → extract a Brand component).
- RESOLVED this session: `.hairline-grid` (extracted ✅, 5 consumers). Earlier: Breadcrumb,
  eyebrow+dot, pull-quote, serif idioms (all global ✅).
- NOT extracted on purpose: bordered cards (`.kids-card*` / `.feed-card*` / mature variants)
  — they diverge in padding/radius/bg per page; the only shared decl is the border. Not a
  clean extract; left page-local. Revisit only if a true identical repeat appears.

## KNOWN DEBT / HARDENING (address before launch; no current risk)
- **Watercolor 1.2MB PNG** (`site/public/wake-forest-bcg.png`) — heavy hero asset; compress
  / convert to WebP in hardening.
- **Mobile nav** — links hidden <980px, no hamburger yet. Blocks phone QA.
- **tel:/mailto:** on footer + verified page contacts — easy UX/a11y win (after verification).
- **Inert buttons / unwired placeholders** (wire real targets only once verified; never
  invent): home hero "Watch Sunday's sermon" → /sermons (route exists? sermons page not
  built), "Plan a visit" → /visit (not built); students "Parent info"/"Email the student
  team"; kids `children@`/`childsafety@northwake.com`, `@northwakekids`, Gospel-Project
  track links, photo-release form; who-is-jesus "Tell us"/"Coffee or tea" + 2 book rows
  (Keller, Scrivener); feed "Stop by Feed"/"Volunteer"/coordinator emails (incl. a personal
  Gmail — kept unpublished); mature "RSVP"/"Email the team".
- **Hero/people photo** — `/home-hero.jpg` still absent; home hero section C + (old) other
  spots render over `--bg-2` with pending markers. Needs a real Sunday-gathering photo.
- **Brand mark** — CSS placeholder; swap for real logo; de-dupe Nav/Footer.
- **npm audit** — advisories in Astro 5.x line; NOT audit-fixed (would break pin). Low risk
  for static site; revisit in hardening.
- **Repo visibility** — currently PUBLIC; consider flipping to private. One click.
- **`/community` index** — breadcrumb "Community" + "All ministries" point at
  `/community/grow-groups` as a stand-in; a real section index may be wanted.
- **Stale comment** in `who-is-jesus.astro` lists `.crumb*` among globals (no longer true);
  `brand/prototype/.gitkeep` redundant — sweep both in a cleanup commit.
- **Pre-launch hardening pass** (after content lands): schema/structured data, robots.txt,
  XML sitemap, custom 404, per-page canonicals + unique titles/descriptions, og/twitter
  images, Lighthouse / Core Web Vitals, image optimization. Run as its own pass.

## UNVERIFIED CONTENT — confirm with church before launch (content-meeting agenda)
This list is now substantial; the content-verification meeting is increasingly the real
launch gate (more than building).
- **Service times CONFLICT:** homepage says Sundays 9 & 11 AM; Kids says 9 & 10:45 AM —
  RECONCILE. Feed: Sun 8:30–10:15 AM year-round, 1st & 3rd Sat 8:30–10:00 AM.
- **NAP:** 1212 S Main St, Wake Forest NC 27587 / (919) 556-1546 / office@northwake.com;
  canonical url `https://northwake.com` unconfirmed.
- **Home hero copy:** "A place to know, grow, and go in love." + lede + transition line
  + caption ("One family, gathered around the gospel") — confirm.
- **Latest sermon:** "Be Different — a journey through Romans", "Spring 2026" — PLACEHOLDER.
- **Events:** Ministry Intensive / Membership Class / Women's Day / Baptism Sunday — dates.
- **Mission/Jesus/Kids/Students copy:** all prototype-sourced (verse wordings/translations,
  the Jesus essay, the 2 recommended books, kids curricula + dedication date May 10 2026 +
  verse refs, students grade range + Colossians 1:28–29). Confirm.
- **Feed:** the two convictions, three-paths copy, "teal box · church lobby" mechanism,
  hours, "Building 2" location specificity, coordinator names/emails (incl. personal Gmail).
- **Mature:** opening conviction, "what we long to see" list, 4 experiences, schedule
  ("1st & 3rd Tuesdays", "Next gathering: Tuesday May 5 · 10:00 AM" — date placeholder).
- **Marquee phrases, homepage logistics, Care ministry scope** (as before).

## NEXT TASK (single decided action for the new chat)
Two reasonable directions:
A) **Build the next page** — best candidates with prototypes that reuse the proven
   ministry template + globals: `/help/hope-counseling`, `/about/membership`, or
   `/community/*` siblings. A page with a real scripture VERSE would finally give
   `.kids-verse` its 2nd occurrence → triggers the scripture extraction. `/sermons` is also
   prototype-ready and would let the homepage "Watch Sunday's sermon" button land somewhere.
B) **Content-verification pass** — the UNVERIFIED list is long enough that the church
   conversation is becoming the critical path. Nothing launches until it's done. Worth
   planning the content meeting from the agenda above.
Recommendation: keep building pages (momentum), but start steering Todd toward scheduling
the church content meeting — it's the real launch gate. Eventually: hardening pass
(mobile nav, schema, sitemap, image optimization, Lighthouse) AFTER content lands.

## Commit history (high level — this session, chronological)
[prior sessions: scaffold → tokens → global+fonts → layout chrome → homepage → students →
deploy → mission redesign → Newsreader/--serif → who-is-jesus → serif extraction →
Breadcrumb + propagation → kids (10 sections)]
**[this session]** feed 1–3 → feed 4–5 → feed 6–7 (complete) → `.hairline-grid` extraction
(migrate 4 pages) → mature 1–3 → mature 4–6 → mature 7–8 (complete) → new watercolor
"Scene + People" home hero (overlay hero retired).
