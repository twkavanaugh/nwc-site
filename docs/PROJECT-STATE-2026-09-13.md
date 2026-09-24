# North Wake Church Site — Project State (2026-09-13)

**Purpose of this file:** complete, current context so a fresh chat (Claude as SME/
prompt-writer) can resume at full speed without the prior conversation. Drop into
Project knowledge. **Supersedes `docs/PROJECT-STATE-2026-07-05.md`** — which predates the
**posts/resources/categories collections**, the **`/resources` index + `/resources/[slug]`
post template**, the **sanctioned YouTube embed transform**, the **Warm Band hero design
package**, and **shot list v2**.

> **⏸ DORMANCY NOTE.** The last commit landed **2026-07-12**. The repo sat untouched for
> roughly two months and work resumed **2026-09-13**. Nothing decayed — the build is green
> and the tree is clean — but see **★ CONTEXT GAP** below: several July decisions were never
> written down, and they need to be recovered from Todd before the church-facing work
> continues.

> **🟢 2026-09-23 UPDATE — `/visit`, `/mission/church-planting`, `/help/care`, `/help/mercy-clinic`,
> `/community/women`, `/community/lily-moms` SHIPPED; homepage ticker removed; first redirect
> (`/womensministry`).** See the ★ LILY MOMS, ★ WOMEN'S MINISTRY, ★ MERCY HEALTH, ★ CARE MINISTRY, ★ CHURCH PLANTING and ★ COME VISIT sections. Read that section first; the rest of this doc is as of 09-13 except where marked.

---

## TL;DR — where things stand
A static Astro 5 marketing site for North Wake Church (Wake Forest, NC), **LIVE on Render**,
auto-deploying from GitHub `main`. **20 routes build** (was 14 at the last state doc).

Since 07-05, two bodies of work landed:
1. **The resources/posts/categories system shipped** (07-07, a 4-gate sequence) — three new
   collections, five real Adult Discipleship seed posts, a zero-JS `:target`-filtered
   `/resources` index, a `/resources/[slug]` post template with an attachments block, the
   inert-placeholder-download convention, and a **remark transform** that turns bare YouTube
   URLs into lazy nocookie embeds (the site's second sanctioned third-party exception).
2. **Two design/docs packages landed** (07-12) — the **Warm Band photo hero** kit and
   **shot list v2**. Both are *specs only*. Neither has been built or acted on.

**Build status verified 2026-09-13:** `npm run build` green, 20 pages, 1.3s, working tree clean.

**Two commits are local-only and unpushed** (`1e2dc9b`, `40062f9`). Both touch `docs/` and
`brand/` ONLY — zero `site/` changes, so nothing is waiting to deploy and the live site
matches `origin/main`.

**Live URL:** https://nwc-site.onrender.com  ·  **Repo:** https://github.com/twkavanaugh/nwc-site (public)

---

## ★ CONTEXT GAP — recover these from Todd before church-facing work
The 07-05 doc set four next-tasks. Commits show **task 3 (collections) was done**. There is
**no written record** of the others, and the state doc was never updated. Open questions:

1. **The Tuesday 2026-07-07 pastor meeting — what happened?** The 07-05 doc made this the
   critical path (name a CMS test employee; schedule the content-verification meeting).
   Commits resumed the morning of 07-07, so the freeze lifted, but the outcomes were never
   recorded. **Was a CMS test employee named? Was the content meeting scheduled or held?**
2. **The Pages CMS employee vertical-slice test** — never recorded as run. Still open?
3. **What happened in the July 12 → September 13 gap?** Any church-side movement (photos
   shot, content returned, documents provided, decisions made) that the repo doesn't know about?
4. **Accessibility review of record** — Todd's wife's verdict on live-site type sizes. Was
   carried as "status unknown" on 07-05 and is still unknown.

Everything in the UNVERIFIED section below is stated as of 07-05 plus what the code shows.
If any of it was settled in July or during the gap, this doc does not know it.

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
  infrastructure runs as an explicit gate sequence (events 4 gates; mobile nav 2;
  **resources 4: collections → list design package → index → post template**).
- **Command labeling:** **[Terminal]** = Todd runs it; **[CC]** = prompt for Claude Code.
  The label is human-facing — never typed into the terminal.
- **`pwd` discipline:** CC confirms it's in the NWC Site repo before acting (a separate
  `Heritage-Metal-Site` project exists on the machine — they collided once).
- **COMMIT DISCIPLINE:** "approved" = "commit now," same turn. The `git status` STOP-gate at
  the top of each task keeps catching drift — keep it.
- **PUSH-BEFORE-REVIEW GATE (standing rule):** because a push deploys, the browser review
  that gates a change happens BEFORE the push.
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
  for long-edge), quality `-s formatOptions 80`.

## Stack
- **Astro 5.x** (pinned `^5.0.0`, 5.18.2 installed — deliberately NOT 7.x).
- Static output, **near-zero client JS**. CSS-only interactivity (mega-menu, mobile
  hamburger, dropdowns, fade-up, details/summary accordions, **`:target` resource
  filtering**). The ONLY `<script>` in `dist/` is the BranchCast embed resizer on `/sermons`.
- **Content Layer API** (Astro 5): FOUR collections — `events`, `categories`, `posts`,
  `resources` (see Content model below).
- **Markdown pipeline:** one remark plugin, `src/lib/remark-youtube.mjs`, wired in
  `astro.config.mjs`.
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
  cleanly on top (PROVEN at `3ee46c5`).
- **Nightly rebuild cron STILL PENDING** (hardening): build-time date filtering won't roll a
  now-past event off "Events" until the next deploy. Accepted v1 tradeoff.

## ⚠️ OWNERSHIP / HANDOFF OBLIGATION (do not lose this)
Built under **Todd's personal accounts** (GitHub `twkavanaugh`, Render under a Yahoo email),
**plus** the **Pages CMS GitHub App** (installed by Todd, scoped to `nwc-site` only).
Decision: build now, **transfer to church-owned accounts at handoff**. REQUIRED at handoff:
transfer the GitHub repo to a church org; reassign Render (swap account email, remove Todd);
**re-install / re-authorize the Pages CMS GitHub App under the church-owned repo.**

---

## Pages — current state (20 routes build)
| Route | Status |
|---|---|
| `/` (homepage) | ✅ COMPLETE — watercolor hero; Events section queries the collection; placeholder photos in mission triad, sermon-card art, welcome band, people photo |
| `/community/students` | ✅ COMPLETE |
| `/about/mission` | ✅ COMPLETE — Devotional redesign |
| `/who-is-jesus` | ✅ COMPLETE |
| `/community/kids` | ✅ COMPLETE — serif-on-image photo hero (stock) |
| `/help/feed` | ✅ COMPLETE |
| `/community/mature-adults` | ✅ COMPLETE |
| `/sermons` | ✅ COMPLETE — BranchCast embed + podcast links |
| `/community/lily-moms` | ✅ **COMPLETE (2026-09-24)** — Community split hero + ministry logo, warm heartbeat band, facts, lily photo band with 4 steps + 2 notes, fees, dark LILY Kids band. Emails + Register gated (see ★ LILY MOMS). Nav wired; footer has no LILY entry |
| `/community/women` | ✅ **COMPLETE (2026-09-23)** — Community split hero, "Know. Grow. Go." serif motto, floral photo band with 6 gathering cards, dark contact band. `/womensministry` redirects here (postcard URL). Nav + footer resolve |
| `/help/mercy-clinic` | ✅ **COMPLETE (2026-09-23)** — condensed from mercyhealthnw.org; Help-group hero, facts, scope panels, Luke 10:37, values, 2 get-involved cards, dark contact band. Footer link (was a 404) now resolves; nav wired |
| `/help/care` | ✅ **COMPLETE (2026-09-23)** — Help-group split hero (mirrors Feed), facts strip, Our heart, 3 steps + reapply note, dark "where to apply" band. Nav Help→Care Ministry now a real link |
| `/help/hope-counseling` | ✅ **COMPLETE (2026-09-24)** — distilled from thehopecounselingcenter.org; Help-group hero, facts, testimony over sunburst photo, who we are + licensing note, 4 expectations, services + scope, 4 steps, dark contact band. Nav, nav featured card, footer all resolve (were 404) |
| `/mission/international` | ✅ **COMPLETE (2026-09-24)** — Warm Band hero, Rev 7:9 statement over a road photo, near-and-far, four ways (Pray/Give/Focus/Equip), dark Entermission band, Break Bread → Training#missionary-sending. Nav wired |
| `/mission/training` | ✅ **COMPLETE (2026-09-24)** — Warm Band hero, approach + 3-pathway anchor strip, Personal / Elder / Missionary sections (light → warm → dark) with sticky sidebars. Nav wired |
| `/mission/church-planting` | ✅ **COMPLETE (2026-09-23)** — first `/mission/*` route; Warm Band hero (display-m, no CTAs, .ph photo), two realities + inverse bridge band, church lists, serif statement, engage grid. Nav Mission→Church Planting now a real link |
| `/visit` | ✅ **COMPLETE (2026-09-23)** — Warm Band hero, facts strip, flow of a Sunday, FAQ, find us. Every "Plan a Visit" CTA now resolves (was a 404) |
| `/events` | ✅ COMPLETE — date-filtered, sorted index |
| `/events/[slug]` | ✅ COMPLETE — continuous-column detail (5 entries; `family-table` is CMS-created) |
| `/resources` | ✅ **COMPLETE (NEW)** — merged catalog, zero-JS `:target` category filter |
| `/resources/[slug]` | ✅ **COMPLETE (NEW)** — post template + attachments (5 post routes) |
| `/blog` | ⏸ **DELIBERATELY DIMMED** — nav + footer entries are non-links pending the blog-vs-resources decision |
| All other nav routes | ❌ 404 — not built yet (expected; nav links are real) |

**Route map (canonical, encoded in the nav — nested):** Top: `/`, `/visit`, `/who-is-jesus`,
`/blog`, Give=EXTERNAL onRealm. About: beliefs/leadership/mission/membership. Mission:
international/church-planting/local-outreach/training/serve. Help:
hope-counseling/mercy-clinic/feed/care. Community: grow-groups/adult-discipleship/kids/
students/women/men/lily-moms/young-adults/mature-adults. Resources: `/events` (+`[slug]`),
`/sermons`, `/blog` (+`[slug]`, dimmed), `/resources` (+`[slug]`, labeled "Other Resources").

---

## ★ HOPE COUNSELING — SHIPPED (2026-09-24, 1 gate)
Commits: `5427bf1` (package; photo in `site/public`) → this commit (page + `src/data/hope.ts` +
`/give` redirect + guard).
- **No church seed** — the ministry lead's direction was to distill thehopecounselingcenter.org
  to one page. Every line checked against HOPE's live site (Home/About/Services/FAQ/Contact/
  Donate) 2026-09-24; facts in `src/data/hope.ts` (LAST VERIFIED stamp).
- **Package errors fixed:** 2 Tim 3:16–17 was on "Real work" (belongs to Scripture); added
  "Expect to pray" (Col 1:9–11); "Three things you can count on" → "What to expect."; testimony
  un-trimmed (full quote verbatim); steps 3 → 4 (forms to the church office); "typically"
  restored; HOPE email `hopecounseling@northwake.com` added; Donations → HOPE's Donate page.
- **★ `/give` redirect (first EXTERNAL redirect):** → `BUSINESS.givingUrl`. HOPE's Donate button
  links to `northwake.com/give/` (old site). `check-content.mjs` check #3 fails the build if
  the redirect and `business.ts` disagree (tested).
- **Sunburst band:** token scrim held at 86% across all small text (AA over ≈0.95-luminance
  sky); phone variant holds to 80% of the ellipse (small lines reach ~0.67 there). Measured.
- **Footer finding (pre-existing, site-wide):** footer link lists render at 14px on phones —
  below the 16px content floor. Separate small fix to `Footer.astro`.
- **Serif heading helper now on 5 pages** → promote to a global class (overdue).

## ★ INTERNATIONAL MISSIONS — SHIPPED (2026-09-24, 1 gate)
Commits: `38fc8c9` (package) → this commit (page + photo + nav).
- **Route `/mission/international`** (route map), not the package's `/international-missions`.
- **Copy:** every seed sentence exactly once, in seed order (script-verified, 13/13). Changes
  from the package: Pray figure "Sunday gatherings" (package's "Every Sunday" overstated the
  copy); "Furthermore," restored on the Focus card; the Break Bread lead sentence shown once
  (Equip card), the section opens with the next seed sentence; "Entermission." plain (the
  package's italic split was invented). Labels approved by Todd.
- **Photo band:** the package's flags photo (identifiable national flags incl. Russia/Belarus
  — a sensitivity risk for workers) was REPLACED with Todd's Unsplash aerial crossroads photo
  (`public/missions-road.jpg`; source URL in a code comment; no on-page credit per Todd —
  not required). Token-based radial scrim; positioned `50% 100%` so the fork sits above the
  quote at desktop (behind it on tall phone bands — accepted).
- **Cross-links:** `/mission/church-planting` and `/mission/training#missionary-sending`.
- **Serif heading helper now on 4 pages** → the shared-global-class gate is overdue.

## ★ MINISTRY TRAINING — SHIPPED (2026-09-24, 1 gate)
Commits: `010a103` (package) → this commit (page + nav).
- **Route `/mission/training`** (route map), not the package's `/ministry-training`.
- **Copy = church's verified seed, as close to verbatim as possible** (Todd). Only five
  grammar fixes: "called into"→"called" ("called to" would double the "to" in "to which"),
  "it come"→"it comes", "9 months period"→"9-month period", "Including;"→"Including:",
  "9 month elder"→"9-month elder". A script confirmed all 25 seed sentences in `dist/`.
  Questions + missionary values shown as lists, same words. SEBTS kept as written, wrapped
  in `<abbr title>` + sr-only full name.
- **Stable anchors** for deep links: `#personal-ministry`, `#elder-preparation`,
  `#missionary-sending` (land below the sticky nav — verified desktop + phone).
- Sticky sidebars (desktop only; static ≤880). Dark band on inverse tokens; value cards on
  `color-mix(--ink-on-inverse 6%, --bg-inverse)` (same recipe as `.ph-dark`).
- **Serif heading/paragraph helpers now on 3 pages** (women, lily-moms, training) → promote
  to a shared global class in its own global.css gate.

## ★ STAFF CMS FOR RESOURCES + TEXT POSTS — SHIPPED (2026-09-24, 2 gates)
**Editors: Karen and Devin** (church staff) — events, resources AND posts. Todd may add names.
- **Pages CMS now has three sections:** Events · **Resources: links & PDFs** · **Resources: text
  pages** (the `posts` collection). Post bodies `format: markdown` (YouTube transform needs it);
  rich-text image uploads disabled (no size-guarded folder); Draft switch; up to 5 PDF downloads.
- **Schema change:** resource `target` → **`file`** (PDF upload, `site/public/resources/`) OR
  **`link`** (URL; post slug for dev use). `superRefine` fails the build with plain messages
  on a type/field mismatch. Staff Type choices: PDF download / External link only (posts
  appear in the catalog on their own).
- **Media is now two named sources:** `images` (events) and `docs` (resource PDFs, `rename: safe`).
- **★ Build guard `site/scripts/check-content.mjs` (`prebuild`)** — runs on Render's
  `npm run build`. Fails (nothing deploys) if any file in `public/resources|events` > **15MB**
  (resolves the "CMS media has NO size guard" debt) or if the category files disagree with
  EITHER `CATEGORIES-START/END` pick-list in `.pages.yml`. All failure paths tested.
- **Categories are developer-only:** new one = YAML file + a line in both pick-lists.
- **★ Upload ceiling ~3MB (2026-09-24):** hosted Pages CMS runs on **Vercel** (4.5MB request
  body limit → `413 FUNCTION_PAYLOAD_TOO_LARGE`; a 4.4MB PDF failed). Exact ceiling unpinned.
  **Policy (Todd):** bigger documents live in the **church Google Drive** ("Anyone with the
  link can view") — keeps them alive beyond the site. A "PDF download" now takes an upload
  OR a link (exactly one, build-enforced); linked PDFs render "Download PDF ↗", new tab.
  The 15MB prebuild guard stays as a backstop for developer-committed files.
  **Needs:** a church-OWNED Drive / shared drive (not a staff member's personal Drive — a
  departed editor would break every link). Share docs as **Viewer**, never Editor.
- **✅ Gate 2 COMPLETE (2026-09-24, Todd live in Pages CMS):** text page + YouTube embed
  (editor saves a pasted URL as a Markdown link — the transform handles it; a trailing empty
  line saves as `&nbsp;`, harmless) · PDF upload of 3.16MB ✅ (4.4MB ✗ → ceiling ≈3.2–4.4MB,
  consistent with 4.5MB ÷ base64 overhead ≈ 3.4MB; "about 3MB" guidance is right) · external
  link (Google Doc) · edit + delete · **existing-post round-trip**: body Markdown survived
  intact (numbered bold list unchanged); front matter restyled (quotes dropped, folded lines,
  `draft: false` added) — semantically identical; renaming the title KEPT the URL. Test edits
  to `delighting-in-the-company-of-god.md` reverted to the pre-test version; test entries and
  the test PDF deleted (the PDF via CMS Media — staff CAN delete files there).
- **★ CMS delete does NOT remove the uploaded file** (resolves the open "orphaned media on
  event deletion" item — CONFIRMED). The file stays in the repo AND publicly reachable at its
  URL. Mitigation: helper text on every upload field tells staff to also delete it in Media;
  **`npm run audit-media`** (site/scripts/audit-media.mjs, read-only) lists unreferenced
  uploads — run QUARTERLY (see ★ QUARTERLY MAINTENANCE).
- **★ Keep "needs verification" notes in THIS doc, not inside content files.** A CMS save
  rewrites front matter (YAML `#` comments won't survive) and may drop HTML `<!-- -->`
  comments. The Delighting post's hidden LarryT@ note is restored, and is ALSO recorded here:
  the old page's "LarryT@" contact email + all its external resource links await
  verification before migrating.
- **Gate 2 (after push — Pages CMS reads config from GitHub):** Todd adds a PDF resource, an
  external link, replaces the membership-packet placeholder, deletes a test entry; creates a
  draft text page (confirm hidden), publishes it with a bare YouTube line + a PDF download;
  opens an EXISTING post, changes a word, saves — inspect that commit's diff for rich-text
  round-trip reformatting of the old Markdown.

## ★ LILY MOMS — SHIPPED (2026-09-24, 1 gate)
Commits: `5c4afa4` (package; assets in `site/public`) → this commit (page + nav).
- **Route `/community/lily-moms`** (route map), not the package's `/lilymoms`.
- **Copy verified** line by line against the ministry's "Updated text" — all FACTs match
  (1st & 3rd Weds, Oct–May, 9:00–11:30; fees $20/$60/$100; teachers 8:30–11:45, $35,
  babies–age five). Design labels approved by Todd.
- **★ EMAILS GATED:** `NWlilymoms@gmail.com` + `NWLilyKids@gmail.com` are Gmail accounts →
  `EMAILS_APPROVED = false` at the top of `lily-moms.astro`: email buttons inert, addresses NOT
  printed anywhere in `dist/`. Flip to `true` once the church approves (restores the questions
  line, Contact row and real `mailto:`s). Consider asking for church-owned addresses.
- **Register inert** until `REGISTER_URL` is set (the page's primary action — used twice).
- **Logo** (`public/lily-moms-logo.png`, downscaled 448px for 112px display): ministry teal/
  orchid kept as a flat image, never recolored, light backgrounds only. Not tokenized.
- **Lily photo band** (`public/lily-flowers-dark.jpg`, Unsplash — Benson John): token scrim,
  74% held to 44% (intro ends ~43% at 1440 with the 3-line h2).
- **Serif heading now used on 2 pages** (`.wm-serif-h2`, `.lily-serif-h`) → promote to a global
  class in its own global.css gate (prove-twice met).
- **Seasonal:** fees + Oct–May season — re-confirm each August.

## ★ WOMEN'S MINISTRY — SHIPPED (2026-09-23, 1 gate)
Commits: `babfdc3` (package) → `058a05b` (page + floral image + redirect + nav) → `0da9532`
(Women's Day event email).
- **Route `/community/women`** (footer already linked it). **First redirect on the site:**
  `astro.config.mjs` `redirects` `'/womensministry' → '/community/women'` — the ministry postcard
  prints `northwake.com/womensministry`. Static meta-refresh page, no JS. **Same mechanism is
  now ready for the queued `/familytable` legacy redirect.**
- **Copy verified** against the seed text AND the postcard PDF (both pages; page 2 = seed
  verbatim; no dates anywhere). PDF had no text layer at page 1 → rendered via a PDFKit swift
  script (poppler isn't installed).
- **Motto = "Know. Grow. Go."** — the postcard emphasizes exactly those verbs (the church-wide
  motto); the package invented a 4th "Glorify" pillar. Glorify clause stays verbatim in the
  statement. Purpose breakdown is 3 items.
- **Card kickers:** only sourced timings (Twice a year / Around April / October); the other
  three come from each card's own text. The package's "Ongoing"/"Throughout the year" were
  invented.
- **Floral band** (`public/women-flowers.jpg`, Unsplash — Dallas Reedy): scrim is `color-mix` of
  `--bg-inverse` (no literal exception) and **holds 72% to 38%** so the on-photo intro stays AA
  (package gradient ≈ 4:1 over the brightest petals). Retune if the heading block grows.
- **Email** `womensministry@northwake.com` is postcard-verified → real `mailto:` links. Women's
  Day event `contactEmail` corrected from the unverified `women@` (event template still renders
  all event emails inert — site-wide question, untouched).

## ★ MERCY HEALTH CLINIC — SHIPPED (2026-09-23, 1 gate)
Commits: `06d23d8` (package → `brand/prototype/MERCY-HEALTH-SPEC.md` + `mercy-health.html`) →
this commit (page + `src/data/mercy.ts` + nav).
- **Route `/help/mercy-clinic`** (the footer already linked it). Hero mirrors Feed/Care.
- **Clinic facts live in `src/data/mercy.ts`** (hours, closures, eligibility, phone/fax, URLs),
  stamped LAST VERIFIED 2026-09-23 against the live clinic site (Home/About/Volunteer/Partner/
  Contact — all matched). Address comes from `business.ts` (clinic meets at the church).
- **The package's Partner card was invented AND wrong** — the clinic's Partner page is financial
  partnership only. Get involved = 2 cards: Volunteer + Give (clinic wording; Donate + Partner
  links). Lesson: Claude Design writes filler when it hasn't read a source page — check.
- **Nav description corrected:** "Care for the uninsured…" → "Free medical and dental care for
  neighbors in need." (eligibility is income-based, not insurance-based).
- **Deliberately omitted:** provider/leadership/board names; personal emails (incl. a Gmail).
- Dark band: inverse tokens + `.btn-accent`. `.text-link` kept page-scoped (`.mh-text-link`).

## ★ CARE MINISTRY — SHIPPED (2026-09-23, 1 gate)
Commits: `7fef38e` (package → `brand/prototype/CARE-MINISTRY-SPEC.md` + `care-ministry.html`)
→ `3d72fc4` (page + nav href).
- **Route `/help/care`**; site `Breadcrumb` (Home › Help › Care Ministry), not the package's
  plain `.crumbs`. Hero copies **Feed's real hero** values (stacks at 720 like Feed, not 880).
- **Dark band** on inverse tokens; CTA is **`.btn-accent`** — the package's `.btn-primary` is
  ink-on-ink on this site. Dark-band CTA precedent: who-is-jesus, mature-adults.
- **"How to apply"** is a plain `#how-to-apply` jump with `scroll-margin-top: 80px` (verified
  clears the sticky nav desktop + mobile). Smooth scroll skipped — needs a global `html` rule.
- **Copy:** Claude Design's step splits/recasts + labels + distilled h1 approved by Todd.
  "dispersed" → "disbursed"; duplicate "Funds are released quarterly." intro removed.
- **Mobile type:** page text respects global.css §j (`.body` → 18px at ≤720). **Known gap:**
  `/mission/church-planting` drops 3 body styles to 17px on phones (undercuts §j) — one-line fix
  offered, not yet made.
- **Photo privacy:** hero `.ph` carries an in-code rule — never an identifiable recipient.

## ★ CHURCH PLANTING — SHIPPED (2026-09-23, 1 gate)
Commits: `f0587df` (package → `brand/prototype/CHURCH-PLANTING-SPEC.md` + `church-planting.html`)
→ `b6ffa78` (page + WarmBandHero options + nav href).
- **Route is `/mission/church-planting`** (package said `/church-planting`; route map nests it).
  Breadcrumb Home › Mission (non-link chip — no `/mission` index) › Church Planting.
- **WarmBandHero gained opt-in props:** `headlineSize="m"`, optional `primary`/`ghost`, and
  `photoPlaceholder` (no `photo` → square-cornered `.ph`). `/visit` verified unchanged
  (identical body markup; every hero rule still present).
- **Dark bridge band** uses `--bg-inverse`/`--ink-on-inverse`/`--accent-on-inverse`, NOT the
  package's `[data-theme="dim"]` (which the site doesn't have). Accent is clay-300, not the
  package's `#d49271`.
- **Churches are a data array in the page** (`category: self-sustaining | partner`, optional
  `url`). Names are plain text — no URLs provided. No CTA on the page (none in approved copy).
- **Copy:** approved text; typos fixed per Todd ("places", "ongoing", "early ’90s"). Design-added
  labels (Our heritage / Our conviction / Heritage + conviction / The churches / Kingdom work /
  How we engage / What we do / How we do it) approved by Todd.
- **Homepage ticker removed (2026-09-23)** — church didn't like the marquee strip; markup,
  CSS and its compact-times helpers deleted from `index.astro`. Hero now meets the Service
  Times band directly. Follow-up: homepage "Get directions" is still inert — `mapsUrl` now
  exists, so it can be wired.
- **Only photo slot** is the hero `.ph` — shot description in the spec §9 (add to shot list).

## ★ COME VISIT — SHIPPED (2026-09-23, 2 gates)
Commits: `1792fe8` (design package → `brand/prototype/COME-VISIT-SPEC.md` + `come-visit.html`;
also committed `CLAUDE.md` + this doc) → `f773172` (Gate 1: `WarmBandHero.astro` + hero) →
`df57050` (Gate 2: rest of page + `mapsUrl`). Pushed/deployed 2026-09-23.
- **`WarmBandHero.astro` is now BUILT** (was queued since 07-12). Props: eyebrow,
  headlineLead/Accent, lede, photo, primary/ghost CTA — a CTA with no `href` renders an inert
  `<button>`. First consumer `/visit`; Mission/Help pages can adopt it next.
- **Page-scoped by design:** facts strip, FAQ accordion, find-us split live in
  `visit.astro` only (prove-twice-then-extract). Zero changes to global.css/Nav/Footer/other
  pages — Todd's explicit constraint. `.sr-only` is page-scoped (no global exists).
- **Facts from `business.ts`:** service times, address, and the 10:45 "students" time.
  **`mapsUrl` is now filled** (Google Maps search URL built from the address; no API).
- **Content corrections (Todd, 2026-09-23)** — Claude Design mistranslated the source copy:
  removed the "Stay / Next Step lunch" step (not a real program → flow is 3 steps, 3-up);
  removed orange-vest greeters; removed the communion line (schedule varies); removed service
  length everywhere (facts cell, Worship step, FAQ item → 5 FAQs). Added **Students
  (6th–12th) meet during the second service (10:45)** — facts strip + kids FAQ answer.
- **Inert:** both "Tell us you're coming" CTAs — will likely go to a hosted form (TBD). Wire
  by adding `href` to the hero prop + the Find-us button.
- **Map slot = `.ph` placeholder.** Todd wants a **Google Maps embed** eventually → that is a
  **third third-party exception** and needs a written decision (non-negotiable #1) first.
- **Photos:** hero reuses `welcome-STOCK-PLACEHOLDER.jpg` (same as homepage band); 3 step
  photos + map are labeled `.ph`. Shot descriptions: `COME-VISIT-SPEC.md` §9 (add to shot list).
- **FAQ "link below"** for livestream → a **Sermons →** ghost button to `/sermons`.
- **Dev-server staleness bit again:** after an edit, the dev server kept serving old scoped
  CSS (4-col flow) until restarted. Production build was correct. Same lesson as before.

## ★ RESOURCES / POSTS / CATEGORIES — SHIPPED (2026-07-07, 4 gates)
Commits: `4c065b5` (Gate 1 collections) → `a42b9a7` (seed content) → `979d5b4` (YouTube
transform) → `ff6920e` (list-view design package) → `2bdc160` (Gate 3a index) → `4ab7c10`
(Gate 3b post template). Design sources: `brand/prototype/RESOURCES-LIST-SPEC.md` +
`RESOURCES-LIST.html`.

### Content model (`site/src/content.config.ts`)
- **`categories`** — flat taxonomy, **YAML data files** (not empty-bodied Markdown) because
  they're data-only. Filename = id. Fields: `label`, optional `order` (curated sort;
  ascending where present, then alphabetical by id for the rest). Seed set (ALL PROVISIONAL,
  each file carries an UNVERIFIED comment): New Here (1), Families (2), Discipleship (3),
  Care (4), Missions (5), Forms (6).
- **`posts`** — long-form staff-written pages. `title`, `description` (the card blurb),
  `categories: z.array(reference("categories"))` — **validated by reference(), so a bad
  category id fails the BUILD rather than silently rendering wrong** — optional
  `attachments` (array of `{label, file}`, **capped at 5**), `draft` (default false, hidden
  from listings). Narrative lives in the Markdown BODY (same prose-not-arrays convention as
  events).
- **`resources`** — pointer entries. `title`, `description`, `categories`,
  `type: z.enum(["pdf","external","post"])`, `target`. **`target` is deliberately
  `z.string()` NOT `.url()`** — it holds a `/public` path (pdf), an absolute URL (external),
  or a post slug (post); `.url()` would reject the internal forms and fail the build. Same
  rationale as `events.registrationUrl`.

### `/resources` index (`2bdc160`)
- **The catalog MERGES two collections:** every `resources` entry (rendered per its type)
  plus every non-draft `posts` entry (rendered as a "Read on site" card → `/resources/<id>`).
- **Filtering is 100% CSS via `:target`** — zero JS, the page's non-negotiable. The
  per-category filter rules are **GENERATED from the categories collection**, so adding a
  category needs **zero CSS edits**. One sorted array drives anchors, chips, tags, counts,
  and the generated CSS in lockstep.
- `TYPE_META` maps the schema enum → glyph / kicker / action label:
  `pdf` = `↓` / "Download · PDF" / "Download PDF →"; `external` = `↗` / "External link" /
  "Visit site ↗"; `post` = `→` / "Read on site" / "Read post →".
- Catalog order is alphabetical by title (no curated sort field yet).
- Nav wiring: the Resources group's "Other Resources" item is a real link.

### ★ INERT-PLACEHOLDER-DOWNLOAD CONVENTION (important, easy to lose)
A download target whose path begins with **`/resources/PLACEHOLDER-`** renders **INERT** —
glyph and label kept, action replaced with a muted "Available soon", no link. **Swap the
placeholder path for the real file and the row goes live automatically.** Enforced in BOTH
`resources/index.astro` and `resources/[slug].astro` (attachments). This is the mechanism
for every church document that doesn't exist yet — nothing dead-links.

### `/resources/[slug]` post template (`4ab7c10`)
Adapts the event-detail "continuous column" typography
(`brand/prototype/EVENT-DETAIL-CONTINUOUS-SPEC.md`) as a **single reading column**
(`.wrap-reading`) — posts have no facts rail. Breadcrumb → eyebrow → title → lede → category
tag chips (each links to `/resources#<id>`, landing on the index **pre-filtered** via the
same `:target` mechanism) → prose → optional Downloads block. One route per NON-DRAFT post;
the two `pdf` resources entries are index-only and generate no route here.

### Blog dimmed (`4ab7c10`)
`/blog` was a real link in Nav and Footer but the route doesn't exist. Both are now dimmed
static text with paired comments. **The blog-vs-resources question is OPEN** — do posts live
under `/resources`, under `/blog`, or both? Decide before building `/blog`.

### ★ SANCTIONED YOUTUBE EMBED EXCEPTION (`979d5b4`)
`site/src/lib/remark-youtube.mjs` — a paragraph whose **sole** content is a bare YouTube URL
becomes a lazy, privacy-mode `youtube-nocookie.com` 16:9 iframe. URLs inside a sentence, or
written as a Markdown link, are **left untouched**. Accepts `youtube.com/watch?v=` and
`youtu.be/` (11-char id, optional trailing query/hash). Plain `.mjs`, no external deps
(walks top-level mdast children rather than pulling in `unist-util-visit`).
**Why it was allowed:** the migrated Adult Discipleship course pages are video-heavy and
embed parity is a content requirement. It is the **second and last** sanctioned third-party
embed alongside the BranchCast widget. The decision comment lives in `astro.config.mjs`.
**No other third-party embeds without a documented decision.**

### Seed content (`a42b9a7`) — REAL migrated content, partially stubbed
Five Adult Discipleship posts, each currently an outline + an explicit
**`## TODO — full content migration pending`** heading (full bodies migrate from the old site):
- `fall-in-love-with-the-family-of-god` — 6-week ADC course (discipleship)
- `delighting-in-the-company-of-god` — Larry Trotter, 6-week training (discipleship)
- `parenting-six-lessons` (families, discipleship) — **leader/guest names on the old page
  need church sign-off before migrating** (noted in an HTML comment in the file)
- `marriage-cultivating-friendship` (discipleship, families) — carries the one **attachment**:
  `PLACEHOLDER-marriage-guide.pdf`, currently inert
- `when-i-demand-what-i-want` — James 4 / HOPE Counseling teaching article (care, discipleship)

Two `resources` pdf entries, both inert placeholders pending church documents:
`membership-packet` (new-here, forms) and `photo-media-release` (forms, families) — the
latter is the **new home for the real photo-release form currently flagged on the kids page**.

---

## ★ WARM BAND HERO — DESIGN PACKAGE COMMITTED, NOT BUILT (2026-07-12, `1e2dc9b`)
`brand/prototype/HERO-WARM-BAND.md` + `hero-warm-band.html` (standalone, runnable — treat
the HTML as source of truth). Variant **F**: split hero on a `--bg-2` band, text left,
**full-height photo flush right**, hairline bottom border.

**The two moves that ARE the effect** (don't lose them in translation):
1. `align-items: stretch` on a `1.15fr 1fr` grid — the photo column stretches to the text
   column's natural height. No fixed hero height, no letterboxing.
2. Gutter-aware left padding `max(40px, calc((100vw - 1320px) / 2 + 40px))` — aligns text to
   the site's 1320px centered container while the band runs full-bleed.

Text column padding `80px 64px 80px <that>`; the 64px right padding IS the gap (grid gap
none) so the photo stays flush right. Photo column `min-height:520px`, no radius. Newsreader
is deliberately NOT used here (serif is reserved for devotional heroes). §10 of the spec is a
build checklist addressed to CC: make it `WarmBandHero.astro` with props (`eyebrow`,
`headlineLead`, `headlineAccent`, `lede`, `photo`, `primaryLabel`/`Href`,
`ghostLabel`/`Href`), inline styles → classes, tokens not hexes, add ONE breakpoint at 880px
(stack; text padding `56px 24px`; photo `min-height:320px`, optional `order:-1`).
**Intended consumers: the Mission and Help pages.** Ship photos ≥1600px wide.

**NOT STARTED.** `site/src/components/` still holds only Nav, Footer, Breadcrumb.

## ★ SHOT LIST v2 — COMMITTED, NOT ACTED ON (2026-07-12, `40062f9`)
`docs/PHOTOGRAPHER-SHOT-LIST.md`. v2 changes: framing split into two **recipes**, Help pages
moved to Column, 5 Mission entries added, about pages excluded.
- **RECIPE 1 — OVERLAY** (text sits on the photo): landscape; subject in the upper two-thirds;
  quiet lower third; horizontally center-weighted (phones crop to roughly the middle third);
  no blown-out white dead center.
- **RECIPE 2 — COLUMN** (photo fills a side column, no overlay): subject centered; must
  survive any crop from 4:5 through square; no legibility constraints. **This is the Warm
  Band recipe** — the two 07-12 commits are one idea.
- Totals: **18 ministry heroes** (Community 1–9 OVERLAY, Help 10–13 COLUMN, Mission 14–18
  COLUMN), **4 homepage** shots (hero is an ultra-wide 21:9 crop — compose very horizontal),
  **1 wide environmental splash** (shoot both interior and exterior), plus a B-roll wishlist.
- **Mission 14–16 (Local Outreach, Serve, Training) have TBD subjects — Todd to confirm.**
  **17–18 (International, Church Planting) are SOURCED, NOT SHOT** — partner missionaries /
  sending orgs, and each needs **explicit usage permission** (a verification item).
- Global: **min 2000px wide**, candid > posed, warm natural light, full-res originals.
- **Consent:** several shots involve congregation faces and minors (flagged
  CONSENT-SENSITIVE). The church must settle its announcement / release / opt-out approach
  BEFORE the session — content-meeting agenda item. The kids photo-release form is itself
  still an unverified placeholder.

---

## Foundation (done, proven)
- `brand/design-tokens.md` — HUMAN SOURCE OF TRUTH (raw palette → semantic aliases; also the
  16px type-floor policy). `site/src/styles/tokens.css` — generated ONE-WAY; NEVER hand-edit.
- **Inverse tokens** for dark bands: `--bg-inverse`, `--ink-on-inverse[-2]`,
  `--line-on-inverse[-strong]`, `--border-on-inverse`, **`--accent-on-inverse`** (`e8643c7`
  a11y fix — clay-600 text on dark failed WCAG at 2.69:1; clay-300 = 9.54:1 AAA). Accent TEXT
  on dark bands MUST use `--accent-on-inverse`; decorative accent (dots/borders) exempt.
- **On-image tokens** `--on-image-fg` (#f6f3ed) / `--on-image-accent` (#e8b394) — image-only.
- **Type:** Inter Tight / JetBrains Mono / Newsreader (`--serif`). **16px content floor at all
  viewports** (mono/eyebrow/caption micro-type exempt but never the sole carrier of meaning).
  **`:where()` scoping lesson:** Astro scopes component styles at zero specificity, so a
  global override of a page-scoped class needs added specificity (the `.wrap`-prefixed mobile
  rules) to win — first suspect when a global rule silently no-ops.
- **`site/src/data/business.ts`** — SSOT for church facts (NAP, `serviceTimes: ['9:00 AM',
  '10:45 AM']` confirmed, `givingUrl`, `mapsUrl` empty-TODO). Never hardcode NAP/times/give
  URL in a page.
- **Events:** `site/src/lib/date.ts` (isUpcoming = `(expirationDate ?? endDate ?? startDate)
  >= today`; all displayed date strings DERIVED from startDate). Facts in frontmatter,
  narrative in the Markdown body.

## Shared globals (consume, don't recreate)
`.btn*` (incl. on-image variants), `.arr`, `.section-head`, `.row-arr`, `.row-link`, `.ph*`,
`.eyebrow`+`.dot`, `.mono`/`.body`/`.lede`/`.small`/`.display-*`/`.title`, `.fade-up`;
containers `.wrap` (1320) / `.wrap-narrow` (920) / `.wrap-reading` (720); serif idioms
`.serif`/`.em-accent`/`.pull-quote`; `.hairline-grid` (5 consumers, columns stay per-page).

## Components
- `Layout.astro` — shell; props `title`/`description` only. **No social/OG meta, no
  canonicals, no analytics yet** (hardening step).
- **`Nav.astro`** — sticky full-width MEGA-MENU (desktop, zero-JS `:hover`/`:focus-within`) +
  a **CSS-only `<details>`/`<summary>` hamburger below 980px**. Both render from one `GROUPS`
  array. Panel `max-height: calc(100vh - 72px)`; **COUPLED value:** 72px = 14px×2 `.nav-inner`
  padding + 44px `.mnav-toggle` — commented in both places; change one → change the other.
  Featured-rail + item descriptions are UNVERIFIED copy.
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
- **THE TWO SANCTIONED THIRD-PARTY EXCEPTIONS — and only these two:** the `/sermons`
  BranchCast resizer (the only `<script>` in `dist/`) and the remark YouTube nocookie embed.
- Build against REAL committed prototype source. Prove-twice-then-extract for shared patterns.
- Honest placeholders only; nothing invented; grow the UNVERIFIED list. Never publish a
  personal email / never wire a `mailto:` to an unverified address (rendered inert).

## ★ QUARTERLY MAINTENANCE (developer — Todd or backup; started 2026-09-24)
Run once a quarter (Jan / Apr / Jul / Oct), in `site/`, after `git pull --rebase`:
1. **`npm run audit-media`** — lists uploaded PDFs/photos nothing uses (CMS deletes leave them
   behind, publicly reachable). Confirm each is unneeded, delete in Pages CMS → Media.
2. **`npm audit`** — expect the 3 Astro-7-only advisories until the Astro 7 upgrade; anything
   NEW → look at it.
3. **Mercy clinic facts** (`src/data/mercy.ts`) — re-check hours/closures/phone against
   mercyhealthnw.org; update the LAST VERIFIED date. **Same for HOPE** (`src/data/hope.ts`)
   against thehopecounselingcenter.org (deposit, hours, age, phone/email, links).
4. **Dead links** — spot-check External-link / Drive resources still open (and Drive files are
   shared "Anyone with the link can view", NOT Editor).
5. **August only:** LILY Moms fees + Oct–May season; LILY Kids pay.

## KNOWN DEBT / HARDENING (address before launch; no current risk)
- **Normalize placeholder image filenames** — `mission-{know,grow,go}.jpg` lack the
  `-STOCK-PLACEHOLDER` suffix the others use. Rename in a sweep.
- **Dead CSS sweep** — `.shero-people-pending`, `.sermon-art-tl`/`-title`/`-bl` orphaned; the
  stale `who-is-jesus.astro` `.crumb*` comment; `brand/prototype/.gitkeep`. One cleanup commit.
- **`/blog` decision** — blog vs resources; nav/footer entries dimmed until decided.
- ~~CMS has no `posts`/`resources` collections~~ **DONE 2026-09-24** (see ★ STAFF CMS) —
  pending Todd's live Gate 2 test.
- ~~CMS media has NO size guard~~ **DONE 2026-09-24** — 15MB prebuild guard (check-content.mjs).
- ~~Orphaned CMS media on event deletion UNTESTED~~ **CONFIRMED 2026-09-24** — files are left behind; see ★ STAFF CMS + ★ QUARTERLY MAINTENANCE.
- **Nightly Render deploy-hook cron** — still pending (date-rollover freshness).
- **`/familytable` legacy redirect** — decision logged; implement in hardening.
- **Watercolor 1.2MB PNG** (`wake-forest-bcg.png`) — compress/WebP.
- **tel:/mailto:** on footer + verified contacts (after verification).
- **Inert buttons / unwired placeholders** — `/visit` "Tell us you're coming" (form TBD), various
  ministry emails (several inert unverified, incl. personal Gmails), photo-release form,
  mega-menu rail copy, the two PDF resources + the marriage guide attachment.
- **Brand mark** — CSS placeholder; swap for real logo; de-dupe Nav/Footer.
- **npm audit** — 2026-09-24: `npm audit fix` (non-breaking, lockfile only; `dist/` byte-identical)
  took 9 → **3**. Remaining 3 (astro critical, sharp high, esbuild low) need **Astro 5 → 7**
  (major, against the pin). None reachable here: no `define:vars`, no server islands, spread
  props use code-defined attribute names only, no `sharp`/astro:assets use, esbuild issue is
  Windows dev-server only. → **Plan the Astro 7 upgrade as its own read-and-plan project**
  (branch + full-site QA). Optional: Render build command → `npm run build` (Render already
  runs `npm install`; the log shows it 3×).
- **Repo PUBLIC** — consider private. **`/community` index** stand-in. **`mapsUrl` empty.**
- **Pre-launch hardening pass** (after content): schema/structured data, robots, sitemap,
  custom 404, canonicals + unique titles/descriptions, og/twitter, Lighthouse, image opt.

## OPEN ITEMS / UNDER CONSIDERATION
- **White-canvas trial** — near-white `--bg`/`--bg-2` under consideration. Needs its own
  branch + read-and-plan gate. Risks: watercolor-hero scrim interaction; site-wide `--bg-2`
  separation quieting (many bands/cards rely on the sand-50/100 tonal step).
- **`/events` eyebrow + h1 redundancy** ("Events" / "Events.") — Todd aware; low priority.

## UNVERIFIED CONTENT — confirm with church (the real launch gate)
- **★ `/visit` (2026-09-23):** copy is church-approved, but Claude Design mistranslated some of
  it (see ★ COME VISIT). Still unconfirmed: Welcome Wall / coffee / campus maps; kids check-in
  "opens 30 minutes early"; "every Sunday is livestreamed and archived"; reserved first-time
  guest parking; "15 minutes north of Raleigh, just off Capital Blvd"; songs "modern and
  traditional". `/community/students` says "Sunday AM" but not the 10:45 service — align.
- **★ `/help/hope-counseling`:** HOPE sign-off on the licensing note ("Please know" — legal
  weight), the distilled lines, and the **minimum age** (their site says 16 in two places,
  13 in one; page uses 16). Hero photo — never counselees; the empty room.
- **★ `/mission/international`:** a missions contact (who to talk to about Break Bread /
  going); optional next Entermission dates; hero photo — SECURITY: never identifiable faces,
  names or locations of workers in restricted-access countries.
- **★ `/mission/training`:** no next step on the page — WHO do people contact about each
  pathway (Personal / Elder / Missionary)? Hero photo (mentorship).
- **★ `/community/lily-moms`:** church sign-off to publish the two Gmails (or church-owned
  replacements); the registration URL; hero photo (child-photo consent). Optional: "bi-monthly"
  → "twice-monthly" wording (ministry's call).
- **★ `/community/women`:** Facebook page URL for "North Wake-Women" (renders as plain text
  until provided); a one-line Spring Retreat description (card currently repeats "Annually
  around April"); hero photo. Women's Day event date/time still UNVERIFIED in its event file.
- **★ `/help/mercy-clinic`:** (1) **patient-portal URL** — the clinic's own site doesn't link it;
  once provided, set `MERCY.portalUrl` + add a "Book an appointment ↗" hero button. (2) **Update
  owner** — who re-checks `mercy.ts` when the clinic changes hours/closures? Undecided.
  (3) Clinic sign-off on the distilled lines (optional courtesy).
- **★ `/help/care`:** NOT PROVIDED — office hours for the reception desk (in-person only, so
  this matters most), a contact for questions, Building Five wayfinding. Facts VERIFIED
  2026-09-23 against the church's source copy (Todd); prayer meeting = interview (confirmed).
- **★ `/mission/church-planting`:** Todd to diff against source copy — the six church names +
  cities, "early ’90s", "Providence Church (Raleigh NC)" (Claude Design mistranslated `/visit`).
  Partner-church website URLs + any CTA destination (giving/contact) not yet provided.
- ~~CMS "New Event Test"~~ **DELETED 2026-09-24** by Todd in Pages CMS; its orphaned photo removed
  (first real catch by `npm run audit-media`).
> As of 07-05 + what the code shows. See ★ CONTEXT GAP — some of this may have moved in July.
- **★ CMS test employee** + **content-verification meeting** — status unknown (see gap).
- **Category taxonomy** — all six labels PROVISIONAL; each YAML carries an UNVERIFIED comment.
- **The five ADC posts** — real migrated outlines; bodies still to migrate (the visible "TODO"
  heading was replaced with "Full content coming soon." on all five, 2026-09-24 — Karen/Devin
  can finish them in the CMS). Still to migrate/verify: Delighting — the old page's LarryT@
  email + external resource links; Fall in Love — noahj@ email (sign-off); Marriage — full
  chapter body, the North Wake couples' video testimonies, inline links; Parenting — leader/
  guest names need sign-off; When I Demand — the full edited transcript.
- **Two PDF resources** (membership packet, photo & media release) — documents don't exist yet.
- **Events:** tell the church the recurring-calendar feature is NOT returning in v1 (date-range
  model). All five seed events UNVERIFIED.
- **All placeholder photos** — stock, pending real photography per the shot list.
- **Sermons:** hero headline is Todd's copy, not church-confirmed. Podcast links verified.
- **NAP / service times** (9:00 & 10:45 confirmed) / `url` northwake.com unconfirmed / mapsUrl.
- **Copy across mission/jesus/kids/students/feed/mature** + nav mega-menu rail/descriptions +
  — all prototype-sourced, confirm. (Homepage marquee/ticker REMOVED 2026-09-23 — church
  did not like it.)
- **Content sign-offs:** Lily Moms personal Gmails + named individuals; `noahj@northwake.com`.
- **★ Accessibility review of record** — Todd's wife's verdict on live-site type sizes; unknown.

## NEXT TASKS (as of resumption)
0. **Recover the context gap** (above) — especially the July 7 pastor-meeting outcomes.
1. **Push the two local docs/brand commits** (`1e2dc9b`, `40062f9`) — no deploy impact.
2. ~~Build `WarmBandHero.astro`~~ **DONE 2026-09-23 (on `/visit`)** — and on `/mission/church-planting`.
   Next: apply to a Help page or remaining Mission pages. The design package has been sitting committed and unbuilt since 07-12; it is
   the clearest queued build.
3. **Pages CMS employee vertical-slice test** (still unrecorded) — dated event w/ poster,
   link-heavy page, undated post, PDF upload/replace, edit-and-republish; **rebuild the REAL
   Family Table** as the link-heavy-page test; verify orphaned media on delete.
4. ~~Extend `.pages.yml` to posts + resources~~ **Gate 1 done 2026-09-24** — Gate 2 = Todd's live CMS test.
5. **Hardening pass** — its own pass after content lands.

## LESSONS (workflow — keep sharp)
- **A state doc that isn't updated is worse than none** — two months of decisions (the pastor
  meeting, whatever moved over the summer) are now unrecoverable from the repo. Write the
  state doc at the END of a work block, not just when one starts.
- **Push-before-review is the gate.** A push deploys.
- **CMS + CC commits coexist via rebase** — `git pull --rebase` replays CC's commits cleanly.
- **Astro `:where()` = zero specificity** — first suspect for a no-op global override.
- **Multi-part work as gate sequences** (events 4, mobile-nav 2, resources 4) works well.
- **Coupled CSS values get paired comments** (the mobile-nav 72px = 14×2 + 44).
- **Generate CSS from content, don't hand-maintain it** — the `/resources` `:target` filter
  rules come from the categories collection, so a new category costs zero CSS.
- **Conventions beat one-off flags** — the `/resources/PLACEHOLDER-` prefix means "not
  provided yet" everywhere, and swapping the path is the entire go-live action.
- **Commit discipline** ("approved" = commit now) + the `git status` STOP-gate; **dev-server
  staleness**; the **[CC]/[Terminal] label-not-a-command** trap — all still live.

## Commit history (high level — chronological)
[through 07-04: scaffold → tokens → global+fonts → chrome → homepage → students → deploy →
mission redesign → Newsreader → who-is-jesus → Breadcrumb → kids → feed → hairline-grid →
mature → watercolor home hero → mega-menu → siteSettings → serif-on-image → hero pilot +
shot list + type standards → **events build (4 gates)** → `e8643c7` a11y → state 07-04]
**[2026-09-23]** `1792fe8` Come Visit package + CLAUDE.md → `f773172` WarmBandHero + hero → `df57050` /visit complete → `f0587df` Church Planting package → `b6ffa78` /mission/church-planting → `f2a5e00` ticker removed → `7fef38e` Care package → `3d72fc4` /help/care → `06d23d8` Mercy package → `8c4f3cb` /help/mercy-clinic → `babfdc3` Women package → `058a05b` /community/women → `0da9532` Women's Day email → **[2026-09-24]** `5c4afa4` LILY package → /community/lily-moms → staff CMS (`9c67132`…`993eda3`) → `010a103` Training package → /mission/training → `38fc8c9` Missions package → /mission/international → `5427bf1` HOPE package → /help/hope-counseling.
**[2026-07-05]** mobile nav (`47d11e9`/`6533063`) → `5b34285` eyebrow fix → `7402b1b`
/sermons (+`705e551`) → `fd27f93` Pages CMS config → Family Table via CMS (smoke test) →
`3ee46c5` event-label softening → `75f1974`/`69548c5` placeholder photos → state 07-05 +
freeze.
**[2026-07-07]** `55685c4`/`df159d3` copy for pastor review → `4c065b5` collections (Gate 1)
→ `a42b9a7` seed content → `2bdc160` /resources index (Gate 3a) → `ff6920e` list design
package → `979d5b4` YouTube remark transform → `4ab7c10` /resources/[slug] + blog dimming
(Gate 3b).
**[2026-07-12]** `1e2dc9b` Warm Band hero package → `40062f9` shot list v2. *(both unpushed)*
**[2026-07-13 → 2026-09-12]** dormant.
**[2026-09-13]** work resumes; this doc + `CLAUDE.md`.
