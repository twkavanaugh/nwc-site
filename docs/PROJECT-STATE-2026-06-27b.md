# North Wake Church Site — Project State (2026-06-27, late session)

**Purpose of this file:** complete, current context so a fresh chat (Claude as SME/
prompt-writer) can resume at full speed without the prior conversation. Drop into
Project knowledge. Supersedes the earlier `PROJECT-STATE-2026-06-27.md` (which
predates the mission redesign, the `--serif` font, the Breadcrumb component, and the
Who-is-Jesus + Kids pages).

---

## TL;DR — where things stand
A static Astro 5 marketing site for North Wake Church (Wake Forest, NC). Foundation
complete and **five pages built and reviewed** (homepage, students, mission [redesigned],
who-is-jesus, kids). The site is **LIVE on Render**, auto-deploying from GitHub `main`
on every push. All interior pages now share a `<Breadcrumb>` component and the
established token/global vocabulary. Next work is more pages (every nav link points at
a real route; most 404 until built), a shared-vocabulary extraction pass (three
candidates ripe), and — before launch — a hardening + content-verification pass.

**Live URL:** [FILL IN — the *.onrender.com URL Render assigned]
**Repo:** https://github.com/twkavanaugh/nwc-site  (currently public)

---

## Roles & workflow (how we work — keep doing this)
- **Claude (chat)** = SME, prompt-writer, reviewer. Writes CC instructions as ONE
  self-contained inline code block (no nested fences, no prose wrapping). Explains the
  *why*, pushes back honestly, flags ONE next action (not a roadmap). Makes a
  recommendation rather than bouncing decisions back when Todd has no preference.
- **Claude Code (CC)** = build agent. Runs on the user's **personal MacBook Air**.
- **User (Todd)** = directs strategy, runs commands, reviews each step in the browser.
- **Cadence:** ONE gated task at a time. Review in the browser before the next step.
  The gate is the quality mechanism (prevents the ~50%-fidelity failure from building
  unreviewed). Long pages are section-gated; short continuous-flow pages can be one pass.
- **Command labeling:** prefix **[Terminal]** for commands Todd runs himself, **[CC]**
  for prompts handed to Claude Code. Always. (Note: the `[CC]` / `[Terminal]` label is a
  human-facing tag — it must NOT be typed into the terminal. This bit us once.)
- **`pwd` discipline:** CC confirms it's in the NWC Site repo before acting (a separate
  `Heritage-Metal-Site` project also exists on the machine — they collided once). In a
  continuous session where CC has already proven it's in the right repo, the per-block
  pwd check can relax; re-confirm at session start or after any directory change.
- **COMMIT DISCIPLINE (learned the hard way):** "Todd approved it" = "commit it now."
  Hand the commit block together with the approval, in the SAME turn. Reviewed-but-
  uncommitted work drifted twice this session (kids 1–3, then kids 4–5) because a new
  edit arrived before the commit block was issued. Don't let the next task jump the queue.

## Environment
- Repo root: `/Users/toddkavanaugh/Documents/NWC Site`
- Build agent: **Claude Code directly** (NOT Replit — earlier assumption, corrected).
- The user's **work machine blocks the toolchain via ThreatLocker** (SIGKILLs esbuild
  on npm install) — all builds happen on the **personal MacBook Air**.
- Dev server: `[Terminal]` `cd "…/NWC Site/site" && npm run dev` → localhost:4321.
  Run it in its own terminal window (long-running). Stop with Ctrl+C.
- **DEV-SERVER LESSON (learned this session):** RESTART the dev server after any
  `npm install` or change to global.css/tokens. A long-running dev server goes STALE —
  Vite can't resolve a package added after it started, which breaks global.css at
  request time and cascades (global.css @imports tokens.css, so ALL tokens go undefined →
  the page looks catastrophically broken: wrong fonts, no layout, "missing" words). It is
  NOT a code bug; it's a stale server. Fix = Ctrl+C and `npm run dev` again, hard-refresh
  (Cmd+Shift+R). The production build is unaffected and is the source of truth.

## Stack
- **Astro 5.x** (pinned `^5.0.0` — deliberately NOT 7.x; matches Heritage build +
  Project Playbook. 5.18.2 installed.)
- Static output, zero client JS. CSS-only interactivity (dropdowns, marquee).
- Fonts self-hosted via `@fontsource-variable`, declared with explicit `@font-face`
  blocks in global.css that point `src: url(...)` at the package woff2 files and alias
  them to clean family names. **THREE fonts now:** Inter Tight (display/sans),
  JetBrains Mono, and **Newsreader (serif — added this session)**.
- Design source: committed React/Babel (or rendered-HTML) prototypes in
  `brand/prototype/` (read by CC). Note exports vary: some are `page-*.jsx` React source;
  some are rendered-HTML snapshots; some are multi-direction comparisons (pick one
  direction). Claude extracts the chosen source and CC commits it to `brand/prototype/`
  before building against it.

## Deploy (LIVE — proven)
- **GitHub:** `twkavanaugh/nwc-site`, branch `main`. Auth via fine-grained PAT
  (Contents: read/write). Future pushes are just `git push`.
- **Render:** Static Site `nwc-site` under the **North Wake Church** Render workspace
  (created under Todd's Yahoo email for easy later transfer). Config:
  Root Directory `site` · Build `npm install && npm run build` · Publish `dist` ·
  Auto-Deploy On Commit.
- **Deploy flow:** `git push` → Render auto-builds from `main` → live. No terminal/CC
  Render login exists; Render lives in browser + GitHub connection only.

## ⚠️ OWNERSHIP / HANDOFF OBLIGATION (do not lose this)
The site is being built under **Todd's personal accounts** (GitHub `twkavanaugh`,
Render under a Yahoo email). Decision: build now, **transfer to church-owned accounts
at handoff**. REQUIRED handoff step:
- Transfer the GitHub repo to a church-owned account/org (clean).
- Transfer/reassign the Render account to the church (swap account email to a church
  address; remove Todd). More involved than GitHub — do deliberately.
"Transfer later" only protects against lock-in if it actually happens at handoff.

---

## Pages — current state
| Route | Status |
|---|---|
| `/` (homepage) | ✅ COMPLETE — 3 gated passes, reviewed |
| `/community/students` | ✅ COMPLETE — reviewed |
| `/about/mission` | ✅ COMPLETE — **REDESIGNED to the "Devotional" direction** (see below) |
| `/who-is-jesus` | ✅ COMPLETE — "Literary Essay" (Direction A), reviewed |
| `/community/kids` | ✅ COMPLETE — 10 sections, section-gated, reviewed |
| All other nav routes | ❌ 404 — not built yet (expected; nav links are real) |

**Mission page note:** the original mission build (left-aligned grid) was SUPERSEDED by
a Claude-Design "Devotional" redesign — centered narrow reading column (`.wrap-reading`,
720px), Newsreader serif accents, three Know/Grow/Go "movements" with hairline borders,
closing serif quote + CTAs. The old prototype `page-mission.jsx` is retired; the live
design source is `brand/prototype/page-mission-devotional.jsx`.

**Route map (canonical, encoded in the nav — nested structure):**
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

Prototype sources in `brand/prototype/`: home, students, membership, feed, mature,
mission-devotional, sermons, hope, jesus (who-is-jesus), kids, event, event-standard,
blog, other. (Several nav targets have NO prototype yet — leadership, most /mission/*,
mercy-clinic, women, men, lily-moms, young-adults, grow-groups, adult-discipleship.)

## Foundation (done, proven)
- `brand/design-tokens.md` — HUMAN SOURCE OF TRUTH. Two layers: raw palette (only place
  literals live) → semantic aliases (var() only). Light theme only (dark dropped).
- `site/src/styles/tokens.css` — generated ONE-WAY from the md; NEVER hand-edit.
- **Inverse tokens** (`--bg-inverse`, `--ink-on-inverse[-2]`, `--line-on-inverse[-strong]`,
  `--border-on-inverse`) so dark bands don't hardcode white rgba. PROVEN on the homepage
  Care band, the Who-is-Jesus prayer band, and the Kids child-dedication band.
- **Type (THREE families):** Inter Tight (display @ 700, body 400/500); JetBrains Mono;
  **Newsreader serif** → token `--serif` (bare-name convention: tokens are `--display` /
  `--sans` / `--mono` / `--serif`, NO `--font-` prefix). Newsreader self-hosted via
  `@fontsource-variable/newsreader`, both normal + italic axes, `@font-face`-aliased to
  "Newsreader". Role: reverent/devotional serif, reusable across pages (not mission-only).
  Söhne rejected (commercial/unlicensable).
- `site/src/styles/global.css` — foundational layer: resets, type scale, containers,
  section rhythm, @font-face. Shared classes promoted as they recur (see "Globals" below).
- `site/src/data/business.ts` — SSOT for NAP/phone/email/url. (canonical url
  `https://northwake.com` still UNCONFIRMED.)

## Shared globals (classes that live in global.css — consume, don't recreate)
- `.btn*` (incl. `.btn-primary`, `.btn-ghost`, `.btn-accent`), `.arr`
- `.section-head`, `.row-arr`, `.row-link`, `.ph*` (placeholders), `.eyebrow` + `.dot`,
  `.mono`, `.body`, `.lede`, `.display-l/m/s`, `.title`
- **Containers:** `.wrap` (1320px), `.wrap-narrow` (920px — used by students CTA),
  `.wrap-reading` (720px — the reverent reading column; mission + jesus). Do NOT add a
  4th width without reason.
- **Serif/devotional idioms (extracted this session):**
  `.serif { font-family: var(--serif) }`,
  `.em-accent { font-style: italic; color: var(--accent) }` (mission's old `.mv-em` was
  consolidated into this),
  `.pull-quote { border-left: 2px solid var(--accent); padding-left: 28px }`.

## Components
- `Layout.astro` — doc shell; props `title` (default "North Wake Church"), `description`.
  Imports global.css; renders Nav + slot + Footer.
- `Nav.astro` — sticky translucent nav (40px horizontal gutter); CSS `.brand-mark` (no
  logo asset yet); CSS-only hover dropdowns **with the hover-bridge fix** (`.dropdown::before`
  −8px/8px transparent bridge so panels don't collapse crossing the gap — the dropdown
  launch-blocker is FIXED); pathname-based active state (no JS).
- `Footer.astro` — 5-col; NAP from business.ts; computed year; brand-mark CSS duplicated
  from Nav (→ extract a Brand component later).
- **`Breadcrumb.astro` (NEW this session)** — full-bleed chip-style breadcrumb bar:
  edge-to-edge `var(--bg-2)` band, `border-bottom: 1px solid var(--line)`, `12px 40px`
  padding (matches nav gutter), flush under the nav (must be the FIRST element in page
  body). Props: `trail` (array of `{label, href?}` — last item = current, rendered as a
  filled `var(--ink)` chip; href-less items = non-clickable outlined "placeholder" chips
  e.g. "About"/"Help") and optional `action` (`{label, href}` — right-aligned mono
  shortcut, e.g. "All ministries"). Home chip gets a house SVG icon; separators are
  rotated-square chevrons. Token-only, CSS-only. **ALL interior pages now use it; the old
  `.crumb*` global classes were retired.** First-of-type spacing trap: page hero classes
  (specificity 0,2,0) outrank `section:first-of-type` (0,1,1), so heroes keep their top
  padding even as first element — watch this when adding the breadcrumb to a new page.

## Token/architecture rules (held throughout — keep enforcing)
- Components consume SEMANTIC tokens only — no raw hex, no `var(--raw-*)`, no inline
  `rgba()`/`#fff`. Dark bands MUST map to inverse tokens (proven 3×).
- Documented literal EXCEPTIONS: hero photo-scrim `rgba(0,0,0,…)`; `--shadow-dropdown`
  composite. Both legitimate (not theme colors).
- Build against REAL committed prototype source (`brand/prototype/`), not descriptions.
- **Foundation before propagation, applied to LAYOUT too:** when a pattern recurs, do a
  pattern-analysis pass (compare across the real pages), extract the genuinely-identical
  ones to global, PROVE non-destructive (rendered-HTML diff: page bodies byte-identical),
  THEN build on the shared vocabulary. Extract only what's recurred AND is the same thing —
  no speculative abstraction. (Done this session for the serif idioms and the Breadcrumb.)
- No inline styles in components — translate prototype inline `style={{}}` to token-based
  CSS classes (scoped or global).
- Honest placeholders only; nothing invented; grow the UNVERIFIED CONTENT list.
- Accessibility beyond prototype: marquee `prefers-reduced-motion`; mobile grid collapses;
  keyboard-accessible dropdowns; breadcrumb `aria-current`/`aria-label`.

## EXTRACTION CANDIDATES — ripe for a shared-vocabulary pass (built page-local so far)
These have recurred and are flagged; promote on next confirmed occurrence (same play as
the serif-idioms + Breadcrumb extractions):
- **`.kids-card*` bordered-card grid** — used 3× on kids alone (curriculum, worship,
  health/safety); conceptually a ministry-page pattern. Section-9 variant adds a `var(--bg)`
  fill (band-context modifier) for the bg-2 band. STRONGEST candidate.
- **`.kids-verse` scripture treatment** — `.serif` upright, `clamp(34–48px)`, in a
  `.pull-quote` frame, in the wider grid column (so scripture leads its band). Will recur
  on mature/feed (any page with a verse). Promote to a shared `scripture` class then (the
  `.serif` + `.pull-quote` frame is already global; only size/weight/measure needs promoting).
- **`.kids-schedule` section-separator** — hero → 64px gap → hairline `border-top:1px solid
  var(--line)` → 96px gap → content. Students has a similar hero→section seam.
- **Brand mark** (duplicated Nav + Footer → extract a Brand component).
- Older flags now RESOLVED: Breadcrumb (extracted ✅), eyebrow+dot (global ✅),
  pull-quote (global ✅).

## KNOWN DEBT / DEFERRED FIXES (address before launch; no current risk)
- **Mobile nav** — links hidden <980px, no hamburger yet. (Next usability blocker after
  the dropdown fix; blocks phone QA.)
- **tel:/mailto:** on footer + page contacts — easy UX/a11y win.
- **Inert buttons / unwired placeholders** — across pages: "Get directions" (home),
  "Subscribe" (footer), "Parent info"/"Email the student team" (students); kids: emails
  `children@northwake.com` + `childsafety@northwake.com` (UNVERIFIED — do NOT wire mailto
  until church confirms), `@northwakekids` social, Gospel-Project track links, photo-release
  form; who-is-jesus: "Tell us"/"Coffee or tea" CTAs + the two book rows (Keller, Scrivener).
  Wire real targets only once verified; never invent.
- **Brand mark** — CSS placeholder; swap for real logo asset; de-dupe Nav/Footer.
- **Hero image** — homepage overlay hero points at `/home-hero.jpg` (absent); renders over
  `--bg-2` fallback + removable "hero image pending" marker. Drop real photo into
  `site/public/` to finish. (Who-is-Jesus Direction B — the image-led version — was NOT
  chosen partly for the same missing-photo reason; could revisit if photography lands.)
- **npm audit** — advisories in the Astro 5.x line; NOT audit-fixed (would break the pin).
  Revisit in hardening; low risk for a static site.
- **Repo visibility** — currently PUBLIC; consider flipping to private. One click; Render
  unaffected.
- **`/community` index** — breadcrumb "Community" + "All ministries" actions point at
  `/community/grow-groups` as a stand-in; a real section index may be wanted.
- **Stale header comment** in `who-is-jesus.astro` lists `.crumb*` among consumed globals
  (no longer true post-Breadcrumb) — harmless; sweep in a cleanup commit.
- **brand/prototype/.gitkeep** — redundant; sweep in a cleanup commit.

## UNVERIFIED CONTENT — confirm with church before launch (content-meeting agenda)
- **Service times:** Sundays 9:00 & 11:00 AM (homepage); Kids lists 9:00 & 10:45 AM —
  RECONCILE these.
- **NAP:** 1212 S Main St, Wake Forest NC 27587 / (919) 556-1546 / office@northwake.com
  (canonical url `https://northwake.com` unconfirmed).
- **Homepage logistics, Find-Community facts, marquee phrases** (as before).
- **Latest sermon:** "Be Different — a journey through Romans", "Spring 2026" — PLACEHOLDER.
- **Events:** Ministry Intensive / Membership Class / Women's Day / Baptism Sunday — dates
  placeholder-likely.
- **Care ministry** names/scope.
- **Students page:** grade range (6th–12th), Colossians 1:28–29 wording, ministry copy.
- **Mission (Devotional) copy:** hero "We are a family of faith… know, grow, go in love.",
  the mission sentence, framing paragraph, the three movements' bodies, closing quote —
  ALL prototype-sourced; confirm official phrasing.
- **Who-is-Jesus copy:** the whole essay (hero invitation, the 7 questions, the 4 claims,
  the good-news paragraph + Trinity footnote, the prayer + "Amen.", closing line); the two
  recommended books (Keller "The Reason for God"; Scrivener "3-2-1") — confirm intended.
- **Kids copy:** age ranges, service times, curricula ("Roamin' Through Romans", "The
  Gospel Project"), Psalm 78:6 wording/translation, "Know. Grow. Go." statement, child-
  dedication date (May 10, 2026) + copy + verse refs (Eph. 6:4 / 1 Sam. 1:27–28 /
  Mark 10:13–16), Mother's Room / Worship Guide details, ECAP status, the 12-item illness
  policy, CTA copy, all the emails/social handles above.

## NEXT TASK (single decided action for the new chat)
Two reasonable options:
A) **Shared-vocabulary extraction pass** — promote the three ripe candidates
   (`.kids-card*`, `.kids-verse`→`scripture`, `.kids-schedule`→`section-separator`) to
   global, proven non-destructive, so the next ministry pages build on them. Best done
   when the next ministry page gives them a 2nd-page occurrence.
B) **Build the next page** — strongest candidates (have prototype + reuse established
   patterns): `/help/feed`, `/community/mature-adults` (both ministry-template + likely a
   scripture verse → would trigger the scripture extraction), or `/about/membership`.
   Section-gate long pages.
Recommendation: build one more ministry page (e.g. `/help/feed` or `/community/mature-adults`)
— it gives the extraction candidates their 2nd occurrence, so the extraction pass becomes
grounded rather than speculative; then do the extraction. Eventually: hardening pass
(mobile nav, schema, sitemap, og/twitter images, Lighthouse) AFTER content lands.

## Commit history (high level, chronological)
scaffold → tokens → global+fonts → prototype files → layout chrome → homepage 1/2/3 →
session log → students → GitHub remote + Render deploy → mission (original) →
**[this session]** dropdown hover-bridge fix → mission italic→color tweak →
Newsreader/`--serif` foundation → Devotional mission prototype → mission redesign →
who-is-jesus prototype → serif-idiom extraction (.serif/.em-accent/.pull-quote) →
who-is-jesus page → Breadcrumb component (applied to jesus) → breadcrumb propagation
(students/mission/kids; retired .crumb* globals) → kids 1–3 → kids 4–5 → kids separator →
kids 6–7 → kids 8–10 (complete).
