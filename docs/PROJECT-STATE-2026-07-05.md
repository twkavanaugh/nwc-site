# North Wake Church Site — Project State (2026-07-05, PRE-FREEZE)

**Purpose of this file:** complete, current context so a fresh chat (Claude as SME/
prompt-writer) can resume at full speed without the prior conversation. Drop into
Project knowledge. **Supersedes `docs/PROJECT-STATE-2026-07-04.md`** — which predates the
**mobile-nav ship**, the **/sermons page**, **Pages CMS going live end-to-end**, the
**event-label softening**, and the **stock placeholder photography pass**.

> **⛔ FREEZE IN EFFECT.** The repo is frozen after Todd's final live review until after his
> **Tuesday, July 7 2026** pastor meeting. The one sanctioned exception: **Pages CMS edits
> to the Family Table event** (Todd may tweak its body/date through the CMS before the
> meeting as the live demo piece — those CMS commits are expected and legitimate). No other
> commits until the freeze lifts.

---

## TL;DR — where things stand
A static Astro 5 marketing site for North Wake Church (Wake Forest, NC), **LIVE on Render**,
auto-deploying from GitHub `main`. **Eight pages built + reviewed** (homepage, students,
mission, who-is-jesus, kids, feed, mature-adults, **sermons**) plus the **events system**
(`/events` index + `/events/[slug]`). **14 pages** build total (includes the CMS-created
Family Table event).

Since 07-04, four big things landed and shipped: (1) the **mobile nav** — the former launch
blocker — is **done** (CSS-only hamburger); (2) the **/sermons** page shipped (BranchCast
embed); (3) **Pages CMS is live end-to-end** and **smoke-tested green** (office created a
real event through it → committed → deployed → live); (4) a **stock-placeholder photography
pass** filled every pending image slot (all flagged, all pending real photos).

The critical path is now the **church**: Todd's **Tuesday July 7 pastor meeting** should
name a CMS test employee and schedule the content-verification meeting. Nothing launches
until content is confirmed.

**Live URL:** https://nwc-site.onrender.com  ·  **Repo:** https://github.com/twkavanaugh/nwc-site (public)

---

## Roles & workflow (how we work — keep doing this)
- **Claude (chat)** = SME, prompt-writer, reviewer. Writes CC instructions as ONE
  self-contained inline code block. Explains the *why*, pushes back honestly, flags ONE
  next action. Recommends rather than bouncing decisions back when Todd has no preference.
- **Claude Code (CC)** = build agent on Todd's **personal MacBook Air**.
- **User (Todd)** = directs strategy, runs commands, reviews each step in the browser.
  Brings in Claude-Design exports mid-stream — treat each as a system-integration moment
  (extract chosen direction → commit to `brand/prototype/` → translate to tokens).
- **Cadence:** ONE gated task at a time; browser review before the next. Multi-part
  infrastructure runs as an explicit gate sequence (events used 4 gates; mobile nav 2).
- **Command labeling:** **[Terminal]** = Todd runs it; **[CC]** = prompt for Claude Code.
  The label is human-facing — never typed into the terminal.
- **`pwd` discipline:** CC confirms it's in the NWC Site repo before acting (a separate
  `Heritage-Metal-Site` project exists on the machine — they collided once).
- **COMMIT DISCIPLINE:** "approved" = "commit now," same turn. The `git status` STOP-gate at
  the top of each task keeps catching drift — keep it.
- **PUSH-BEFORE-REVIEW GATE (standing rule):** because a push deploys, the browser review
  that gates a change happens BEFORE the push. (See the honest process note under Lessons —
  the final placeholder commit `69548c5` was reviewed with CC and pushed without the usual
  pre-push browser walk; Todd's pre-meeting live walk is the after-the-fact review. The gate
  remains the rule; this was a deliberate, flagged exception, not a new norm.)
- **DESIGN-IMPORT GATE:** new Claude-Design export → READ-AND-PLAN first (no build): locate
  assets, read the page, decide inline→token translation, flag literal exceptions, sequence.

## Environment
- Repo root: `/Users/toddkavanaugh/Documents/NWC Site`
- **Git identity:** Todd Kavanaugh (`263997182+twkavanaugh@users.noreply.github.com`).
- Build agent: Claude Code on the **personal MacBook Air** (the work machine's ThreatLocker
  SIGKILLs esbuild on npm install).
- Dev server: `[Terminal]` `cd "…/NWC Site/site" && npm run dev` → localhost:4321.
- **DEV-SERVER LESSON (burned twice):** RESTART the dev server after any `npm install` or
  change to global.css/tokens. A stale long-running server can't resolve a newly added
  package → global.css breaks at request time → since it @imports tokens.css, ALL tokens go
  undefined → page looks catastrophically broken. NOT a code bug. Fix = Ctrl+C, `npm run
  dev`, hard-refresh. Production build is the source of truth and is unaffected.
- **Image processing:** `sips` (built-in macOS). Resize `sips --resampleWidth N` (or `-Z N`
  for long-edge), quality `-s formatOptions 80`. Used for all placeholder photos.

## Stack
- **Astro 5.x** (pinned `^5.0.0`, 5.18.2 installed — deliberately NOT 7.x).
- Static output, **near-zero client JS**. CSS-only interactivity (mega-menu, mobile
  hamburger, dropdowns, marquee, fade-up, details/summary accordions). The ONLY `<script>`
  anywhere in `dist/` is the BranchCast embed resizer on `/sermons` (documented exception).
- **Content Layer API** (Astro 5): the `events` collection (see Events section).
- Fonts self-hosted via `@fontsource-variable` + explicit `@font-face`. THREE families:
  Inter Tight (display/sans), JetBrains Mono, Newsreader (serif).
- Design source: committed prototypes in `brand/prototype/` (read by CC).

## Deploy (LIVE — proven, auto-deploy working)
- **GitHub:** `twkavanaugh/nwc-site`, branch `main`. Fine-grained PAT. Future pushes = `git push`.
- **Render:** Static Site `nwc-site` under the North Wake Church workspace (Todd's Yahoo
  email, for later transfer). Root `site` · Build `npm install && npm run build` · Publish
  `dist` · Auto-Deploy On Commit. `git push` → Render builds `main` → live.
- **The push IS the deploy gate** — review before pushing.
- **CMS commits + CC commits coexist:** Pages CMS pushes commits directly to `main`. When CC
  has local commits and a CMS push landed first, `git pull --rebase` replays CC's commits
  cleanly on top (PROVEN at `3ee46c5` — rebased over 3 CMS commits, no conflicts, pushed).
- **Nightly rebuild cron STILL PENDING** (hardening): build-time date filtering won't roll a
  now-past event off "Events" until the next deploy. Accepted v1 tradeoff.

## ⚠️ OWNERSHIP / HANDOFF OBLIGATION (do not lose this)
Built under **Todd's personal accounts** (GitHub `twkavanaugh`, Render under a Yahoo email),
**plus** the **Pages CMS GitHub App** (installed by Todd, scoped to `nwc-site` only).
Decision: build now, **transfer to church-owned accounts at handoff**. REQUIRED at handoff:
transfer the GitHub repo to a church org; reassign Render (swap account email, remove Todd);
**re-install / re-authorize the Pages CMS GitHub App under the church-owned repo.**

---

## Pages — current state (14 routes build)
| Route | Status |
|---|---|
| `/` (homepage) | ✅ COMPLETE — watercolor hero; Events section queries the collection; placeholder photos in mission triad, sermon-card art, welcome band, people photo |
| `/community/students` | ✅ COMPLETE |
| `/about/mission` | ✅ COMPLETE — Devotional redesign |
| `/who-is-jesus` | ✅ COMPLETE |
| `/community/kids` | ✅ COMPLETE — serif-on-image photo hero (stock) |
| `/help/feed` | ✅ COMPLETE |
| `/community/mature-adults` | ✅ COMPLETE |
| `/sermons` | ✅ **COMPLETE (NEW)** — BranchCast embed + podcast links |
| `/events` | ✅ COMPLETE — date-filtered, sorted index |
| `/events/[slug]` | ✅ COMPLETE — continuous-column detail (baptism-sunday, membership-class-spring, ministry-intensive-internship, womens-day, **family-table** [CMS-created]) |
| All other nav routes | ❌ 404 — not built yet (expected; nav links are real) |

**Route map (canonical, encoded in the nav — nested):** Top: `/`, `/visit`, `/who-is-jesus`,
`/blog`, Give=EXTERNAL onRealm. About: beliefs/leadership/mission/membership. Mission:
international/church-planting/local-outreach/training/serve. Help:
hope-counseling/mercy-clinic/feed/care. Community: grow-groups/adult-discipleship/kids/
students/women/men/lily-moms/young-adults/mature-adults. Resources: `/events` (+`[slug]`),
`/sermons`, `/blog` (+`[slug]`), `/resources`.

---

## ★ MOBILE NAV — SHIPPED (2026-07-05) — launch blocker DEAD
Commits `47d11e9` (nav) + `6533063` (breadcrumb), branch `mobile-nav` merged fast-forward
and deleted. Below 980px the desktop mega links row is replaced by a **CSS-only (zero-JS)
`<details>`/`<summary>` hamburger** that **dual-renders from the same `GROUPS` array** as the
desktop mega (flattened into per-group accordions, no featured rails):
- Panel: full-bleed overlay under the bar, `max-height: calc(100vh - 72px)` + internal
  scroll (overlay, not push). **COUPLED value:** 72px = 14px×2 `.nav-inner` vertical padding
  + 44px `.mnav-toggle` summary — commented in both places; change one → change the other.
- Bar at mobile: **brand · Plan a Visit (compacted) · hamburger**; Give moves INTO the panel
  (full-width row at top). Brand wordmark got `white-space:nowrap` + `.brand` `flex-shrink:0`
  so "North Wake" never wraps at 360px.
- Breadcrumb mobile behavior (`6533063`): `.crumbbar-action` hidden and the bar drops to the
  22px gutter below 720px; desktop unchanged.
- Pure CSS hamburger→X animation; 44px tap targets; native `<details>` markers suppressed.
- **Homepage hero eyebrow fix (`5b34285`):** at phone width the eyebrow drops flex-centering
  to block flow (dot stays attached), "Wake Forest, NC" is an atomic nowrap unit → no
  orphaned "NC". Same technique as the kids hero.

## ★ /sermons — SHIPPED (2026-07-05, `7402b1b`; headline `705e551`)
Thin shell around the **BranchCast archive embed** (design source
`brand/prototype/page-sermons.jsx`). Breadcrumb (Resources = placeholder chip) → hero
(eyebrow, `.display-xl` headline "Drawing near to God through the study of his Word.",
lede, + a stock peace-flag photo) → embed → subscribe.
- **THE ONE SANCTIONED THIRD-PARTY SCRIPT:** the BranchCast `iframeResizer` loads verbatim
  via `<script is:inline src=… onload="iFrameResize({checkOrigin:false}, '#sermons-embed-iframe')">`.
  `is:inline` stops Astro bundling/hoisting it. DOCUMENTED EXCEPTION comment in place (per
  `docs/CONTENT-MODEL-2026-06-28.md` §SERMONS). It is the ONLY `<script>` in all of `dist/`.
  The iframe has a 600px CSS min-height pre-resize fallback.
- Subscribe = token-native `.btn-ghost` buttons (NOT hotlinked badge images): Apple Podcasts
  (https://apple.co/3yuiX7U) + Spotify (https://open.spotify.com/show/1jHh4sACzIFhYiV5wh5Mof),
  both live/verified, new-tab.
- Nav wiring: the Resources "Sermons" item is now a real link, and the Resources featured
  rail "Watch now" CTA was rewired from `/events` (stopgap) to `/sermons`.

## ★ EVENT-LABEL SOFTENING (2026-07-05, `3ee46c5`)
Words only — **date-filtering logic and `src/lib/date.ts` untouched.** Homepage `<h2>` and
`/events` h1 → "Events." (from "Upcoming." / "What's coming up."); empty states "No upcoming
events…" → "No events…"; `/events` description dropped "Upcoming". Code identifiers
(`isUpcoming`, `upcoming*` vars) left alone. NOTE: on `/events` the eyebrow "Events" + h1
"Events." reads slightly redundant — Todd is aware; low priority.

---

## ★ PAGES CMS — LIVE END-TO-END, SMOKE-TESTED GREEN (the headline)
Pages CMS (pagescms.org) now edits the events collection through the browser.
- **GitHub App installed, scoped to `nwc-site` ONLY.**
- **`.pages.yml` at the REPO ROOT** (`fd27f93`, tweaked in `3ee46c5`). Critical path rule:
  the config lives at the root but the site is in `site/`, so **filesystem paths are
  `site/`-prefixed** (`content.path: site/src/content/events`, `media.input:
  site/public/events`) while **`media.output: /events` is a PUBLIC URL (NOT prefixed)** —
  it must match what templates emit (`<img src="/events/…">`). Every field has an
  office-facing label + plain-language helper. `startDate`/`title` required; all date fields
  locked to `yyyy-MM-dd` (no time-of-day); `registrationUrl` is a plain string (NO url
  validation — must accept relative paths / `#` / `mailto:`); `body` is rich-text.
- **`3ee46c5` tweaks:** ministryId select gained `international, church-planting, serve`
  (now all 14 ministry slugs); date helpers made recurrence-aware; image helper gained
  size/proportion guidance (~2100×800, under 1MB, poster-vs-photo warning).
- **SMOKE TEST PASSED** — the office-style path worked start to finish: created the
  **Family Table** event via the CMS UI → CMS committed to GitHub (`d2adacf`/`3e576ae`/
  `c047d92`) → Render auto-built → **live page**. Confirmed:
  - Optional fields left blank are **OMITTED from frontmatter** (not written as empty
    strings) — the "absent = omit row" template behavior holds.
  - Slugifier produces clean kebab filenames.
  - Image upload landed in `site/public/events/` with the correct `/events/…` path.
  - The **conditional image variant** (21:8 image + shaded rail) fired, and the **BUSINESS
    location default** (church address when `location` blank) fired.
  - CMS commits **rebase cleanly** under CC commits (proven at the `3ee46c5` push).

### Recurrence ruling (v1)
No recurrence field in v1. **Weekly-series events model as a date RANGE:** `startDate` = first
occurrence, `endDate` = last occurrence (keeps it listed until the series ends), and the
recurrence language lives in `timeNote` (e.g. "Every Wednesday in July"). **Family Table is
the worked example.** IMPORTANT distinction: the **real Family Table _program page_ is a
POSTS-collection item** (queued — see Next Tasks), NOT an event; the current Family Table
_event_ is the CMS demo piece. Legacy flat URL **`/familytable` → redirect** decision logged
for the hardening pass.

---

## ★ PLACEHOLDER PHOTOGRAPHY PASS (2026-07-05, `75f1974` + `69548c5`)
Every pending image slot now carries a compressed **stock (Unsplash) placeholder**, ALL
flagged in-code as `STOCK PLACEHOLDER` and ALL pending real photography per
`docs/PHOTOGRAPHER-SHOT-LIST.md`:
- **Home people photo** (hero section C) → `site/public/home-hero.jpg` (492KB); "Photo
  pending" marker removed.
- **Mission triad** (Know/Grow/Go cards) → `mission-know.jpg` / `mission-grow.jpg` /
  `mission-go.jpg`, filling the former 4/5 `.ph` slots via `.mission-photo` (object-fit cover).
- **Sermons hero** peace-flag → `sermons-hero-STOCK-PLACEHOLDER.jpg` (natural 3:2, no crop).
- **Homepage latest-sermon card art** ("Series artwork" tile) → reuses the same peace-flag
  image, square-cropped via `.sermon-art-img`.
- **Welcome band** (plan-visit `.visit-ph`) hug → `welcome-STOCK-PLACEHOLDER.jpg`, deliberate
  short 21:9 crop, `object-position: center 35%` so the embrace reads.
- Images are `<img>` with real-ish alt (provisional) + `loading="lazy"`; no inline styles.

---

## Foundation (done, proven)
- `brand/design-tokens.md` — HUMAN SOURCE OF TRUTH (raw palette → semantic aliases; also the
  16px type-floor policy). `site/src/styles/tokens.css` — generated ONE-WAY; NEVER hand-edit.
- **Inverse tokens** for dark bands: `--bg-inverse`, `--ink-on-inverse[-2]`,
  `--line-on-inverse[-strong]`, `--border-on-inverse`, **`--accent-on-inverse`** (`e8643c7`
  a11y fix — clay-600 text on dark failed WCAG 2.69:1; clay-300 = 9.54:1 AAA). Accent TEXT on
  dark bands MUST use `--accent-on-inverse`; decorative accent (dots/borders) exempt.
- **On-image tokens** `--on-image-fg` (#f6f3ed) / `--on-image-accent` (#e8b394) — image-only.
- **Type:** Inter Tight / JetBrains Mono / Newsreader (`--serif`). **16px content floor at all
  viewports** (mono/eyebrow/caption micro-type exempt but never the sole carrier of meaning).
  Mobile scale in global.css. **`:where()` scoping lesson:** Astro scopes component styles at
  zero specificity, so a global override of a page-scoped class needs added specificity (the
  `.wrap`-prefixed mobile rules) to win — first suspect when a global rule silently no-ops.
- **`site/src/data/business.ts`** — SSOT for church facts (NAP, `serviceTimes: ['9:00 AM',
  '10:45 AM']` confirmed, `givingUrl`, `mapsUrl` empty-TODO). Never hardcode NAP/times/give
  URL in a page.
- **Events:** `site/src/content.config.ts` (schema), `site/src/lib/date.ts` (isUpcoming =
  `(expirationDate ?? endDate ?? startDate) >= today`; all displayed date strings DERIVED
  from startDate). Facts in frontmatter, narrative in the Markdown body.

## Shared globals (consume, don't recreate)
`.btn*` (incl. on-image variants), `.arr`, `.section-head`, `.row-arr`, `.row-link`, `.ph*`,
`.eyebrow`+`.dot`, `.mono`/`.body`/`.lede`/`.small`/`.display-*`/`.title`, `.fade-up`;
containers `.wrap` (1320) / `.wrap-narrow` (920) / `.wrap-reading` (720); serif idioms
`.serif`/`.em-accent`/`.pull-quote`; `.hairline-grid` (5 consumers, columns stay per-page).

## Components
- `Layout.astro` — shell; imports global.css; Nav + slot + Footer.
- **`Nav.astro`** — sticky full-width MEGA-MENU (desktop, zero-JS `:hover`/`:focus-within`) +
  **the mobile hamburger (details/summary) below 980px** (see Mobile Nav section). Both
  render from one `GROUPS` source. Featured-rail + item descriptions are UNVERIFIED copy.
- `Footer.astro` — 5-col; NAP from business.ts; brand-mark CSS duplicated from Nav.
- **`Breadcrumb.astro`** — full-bleed chip bar; `trail` (last = current filled chip; href-less
  = placeholder chip) + optional `action` (hidden <720px). Must be FIRST in page body.

## Token/architecture rules (keep enforcing)
- Components consume SEMANTIC tokens only — no raw hex, no `var(--raw-*)`, no inline
  `rgba()`/`#fff`, no inline styles. Dark bands → inverse tokens; accent text on dark →
  `--accent-on-inverse`.
- DOCUMENTED literal EXCEPTIONS (real-image scrims / non-theme values): home hero scrims +
  `#f3ecdf` watercolor fallback; kids serif-on-image charcoal scrim; `--shadow-dropdown`;
  Feed donation swatch `var(--raw-teal)` (the ONE sanctioned raw token). Each commented.
- DOCUMENTED SCRIPT EXCEPTION: the `/sermons` BranchCast resizer (only JS on the site).
- Build against REAL committed prototype source. Prove-twice-then-extract for shared patterns.
- Honest placeholders only; nothing invented; grow the UNVERIFIED list. Never publish a
  personal email / never wire a `mailto:` to an unverified address (rendered inert).

## KNOWN DEBT / HARDENING (address before launch; no current risk)
- **Normalize placeholder image filenames** — `mission-{know,grow,go}.jpg` lack the
  `-STOCK-PLACEHOLDER` suffix the others use; inconsistent. Rename in a sweep.
- **Dead CSS sweep** — `.shero-people-pending` and `.sermon-art-tl`/`-title`/`-bl` are now
  orphaned (their elements were removed when photos landed). Also the earlier stale
  `who-is-jesus.astro` `.crumb*` comment + `brand/prototype/.gitkeep`. One cleanup commit.
- **CMS media has NO size guard** — the office could upload a huge image; only helper text
  warns. Hardening decision pending (build-time compression? upload limit?).
- **Orphaned CMS media on event deletion UNTESTED** — deleting an event via CMS may leave its
  uploaded image in `site/public/events/`. Verify + document during the vertical-slice test.
- **Nightly Render deploy-hook cron** — still pending (date-rollover freshness).
- **`/familytable` legacy redirect** — decision logged; implement in hardening.
- **Watercolor 1.2MB PNG** (`wake-forest-bcg.png`) — compress/WebP.
- **tel:/mailto:** on footer + verified contacts (after verification).
- **Inert buttons / unwired placeholders** — home "Watch Sunday's sermon" now lands
  (`/sermons`); still inert: "Plan a visit"/`/visit` (unbuilt), various ministry emails
  (several inert unverified, incl. personal Gmails), photo-release form, mega-menu rail copy.
- **Brand mark** — CSS placeholder; swap for real logo; de-dupe Nav/Footer.
- **npm audit** advisories (Astro 5 line; not fixed — would break pin; low risk static).
- **Repo PUBLIC** — consider private. **`/community` index** stand-in. **`mapsUrl` empty.**
- **Pre-launch hardening pass** (after content): schema/structured data, robots, sitemap,
  custom 404, canonicals + unique titles/descriptions, og/twitter, Lighthouse, image opt.

## OPEN ITEMS / UNDER CONSIDERATION
- **White-canvas trial** — near-white `--bg`/`--bg-2` under consideration. Needs its own
  branch + read-and-plan gate. Risks: watercolor-hero scrim interaction; site-wide `--bg-2`
  separation quieting (many bands/cards rely on the sand-50/100 tonal step).

## UNVERIFIED CONTENT — confirm with church (content-meeting agenda; the real launch gate)
- **★ CMS test employee** must be named at the Tuesday meeting; **content-verification
  meeting** scheduled.
- **Events:** tell the church the recurring-calendar feature is NOT returning in v1
  (date-range model). Seed events (baptism-sunday, membership-class-spring,
  ministry-intensive-internship, womens-day) + **family-table** are UNVERIFIED.
- **All placeholder photos** (home people, mission triad, sermons/card art, welcome band,
  kids hero) — stock, pending real photography per the shot list.
- **Sermons:** hero headline "Drawing near to God through the study of his Word." is Todd's
  copy, not church-confirmed. Podcast links verified from the old site.
- **NAP / service times** (9:00 & 10:45 confirmed) / `url` northwake.com unconfirmed / mapsUrl.
- **Copy across mission/jesus/kids/students/feed/mature** + nav mega-menu rail/descriptions +
  marquee — all prototype-sourced, confirm.
- **Content sign-offs:** Lily Moms personal Gmails + named individuals; `noahj@northwake.com`.
- **★ Accessibility review of record:** Todd's wife's verdict on live-site type sizes —
  status unknown; confirm whether it has come back.

## NEXT TASKS (post-freeze, after the Tuesday meeting)
1. **Pastor-meeting outcomes** — capture: CMS test employee named; content-verification
   meeting scheduled; any copy/date confirmations for the seed events.
2. **Pages CMS employee vertical-slice test** — the task list stands (dated event w/ poster,
   link-heavy page, undated post, PDF upload/replace, edit-and-republish). **Rebuild the REAL
   Family Table** as the link-heavy-page test using Todd's supplied copy. Also verify orphaned
   media on delete during this pass.
3. **Posts / resources / categories collections** — following events as the proven pattern;
   the real Family Table _program page_ is a posts-collection item.
4. **Hardening pass** — nightly rebuild cron, `/familytable` redirect, image compression /
   CMS size guard, filename + dead-CSS cleanup, watercolor PNG, schema/sitemap/404/canonicals,
   Lighthouse. Its own pass after content lands.

## LESSONS (workflow — keep sharp)
- **Push-before-review is the gate.** `69548c5` (placeholders) was reviewed with CC and pushed
  without the usual pre-push browser walk — a deliberate, flagged exception with Todd's
  pre-meeting live walk as the after-the-fact review. Don't let the exception become the norm.
- **CMS + CC commits coexist via rebase** — when a push is rejected because Pages CMS pushed
  first, `git pull --rebase` replays CC's commits cleanly (no conflicts, proven).
- **Astro `:where()` = zero specificity** — global overrides of page-scoped classes need
  added specificity (the `.wrap`-prefixed mobile rules). First suspect for a no-op global.
- **Multi-part work as gate sequences** (events 4-gate, mobile-nav 2-gate) works well.
- **Coupled CSS values get paired comments** (the mobile-nav 72px = 14×2 + 44).
- **Commit discipline** ("approved" = commit now) + the `git status` STOP-gate; **dev-server
  staleness**; the **[CC]/[Terminal] label-not-a-command** trap — all still live.

## Commit history (high level — chronological)
[through 07-04: scaffold → tokens → global+fonts → chrome → homepage → students → deploy →
mission redesign → Newsreader → who-is-jesus → Breadcrumb + propagation → kids → feed →
hairline-grid → mature → watercolor home hero → mega-menu → siteSettings → serif-on-image
package → hero pilot + shot list + type standards → **events build (4 gates)** →
`e8643c7` accent-on-inverse a11y → state 07-04]
**[2026-07-05]** `6533063`/`47d11e9` mobile nav (breadcrumb + hamburger) → `70e3d15` doc:
mobile-nav resolution → `5b34285` homepage eyebrow fix → `7402b1b` /sermons (+ `705e551`
headline) → `fd27f93` Pages CMS `.pages.yml` → `d2adacf`/`3e576ae`/`c047d92` Family Table
event **via Pages CMS** (smoke test) → `3ee46c5` event-label softening + CMS config tweaks →
`75f1974` home people photo → `69548c5` mission/sermons/welcome placeholders → this doc.
**FREEZE after Todd's final review, until after the Tuesday July 7 pastor meeting.**
