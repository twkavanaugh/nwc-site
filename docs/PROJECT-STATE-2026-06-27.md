# North Wake Church Site — Project State (2026-06-27)

**Purpose of this file:** complete, current context so a fresh chat (Claude as SME/
prompt-writer) can resume at full speed without the prior conversation. Drop into
Project knowledge. Supersedes `docs/session-log-2026-06-26.md` (which predates the
students page and the deploy).

---

## TL;DR — where things stand
A static Astro 5 marketing site for North Wake Church (Wake Forest, NC). Foundation
complete, two pages built and reviewed (homepage + students), and **the site is LIVE
on Render**, auto-deploying from GitHub `main` on every push. Next work is more pages
(every nav link points at a real route; most 404 until built) and, before launch, a
hardening + content-verification pass.

**Live URL:** [FILL IN — the *.onrender.com URL Render assigned]
**Repo:** https://github.com/twkavanaugh/nwc-site  (currently public)

---

## Roles & workflow (how we work — keep doing this)
- **Claude (chat)** = SME, prompt-writer, reviewer. Writes CC instructions as ONE
  self-contained inline code block. Explains the *why*, pushes back honestly, flags
  ONE next action (not a roadmap).
- **Claude Code (CC)** = build agent. Runs on the user's **personal MacBook Air**.
- **User (Todd)** = directs strategy, runs commands, reviews each step in the browser.
- **Cadence:** ONE gated task at a time. Review in the browser before the next step.
  The gate is the quality mechanism (prevents the ~50%-fidelity failure from building
  unreviewed).
- **Command labeling:** prefix **[Terminal]** for commands Todd runs himself, **[CC]**
  for prompts handed to Claude Code. Always.
- **`pwd` discipline:** CC must confirm it's in the NWC Site repo before acting (a
  separate `Heritage-Metal-Site` project also exists on the machine — they collided
  once; always verify).

## Environment
- Repo root: `/Users/toddkavanaugh/Documents/NWC Site`
- Build agent: **Claude Code directly** (NOT Replit — earlier assumption, corrected).
- The user's **work machine blocks the toolchain via ThreatLocker** (SIGKILLs esbuild
  on npm install) — all builds happen on the **personal MacBook Air**.
- Dev server: `[Terminal]` `cd "…/NWC Site/site" && npm run dev` → localhost:4321.
  Run it in its own terminal window (long-running). Stop with Ctrl+C.

## Stack
- **Astro 5.x** (pinned `^5.0.0` — deliberately NOT 7.x; matches the user's proven
  Heritage build + Project Playbook. 5.18.2 installed.)
- Static output, zero client JS. CSS-only interactivity (dropdowns, marquee).
- Fonts self-hosted via `@fontsource-variable` (Inter Tight + JetBrains Mono),
  `@font-face`-aliased in global.css to the token family names.
- Design source: committed React/Babel prototype in `brand/prototype/` (read by CC).

## Deploy (LIVE — proven)
- **GitHub:** `twkavanaugh/nwc-site`, branch `main`. Auth via fine-grained PAT
  (Contents: read/write). Pushes work; future pushes are just `git push`.
- **Render:** Static Site `nwc-site` under the **North Wake Church** Render workspace
  (created under Todd's Yahoo email for easy later transfer). Config:
  Root Directory `site` · Build `npm install && npm run build` · Publish `dist` ·
  Auto-Deploy On Commit. Builds from pushed source.
- **Deploy flow:** `git push` → Render auto-builds from `main` → live. No terminal/CC
  Render login exists; Render lives in browser + GitHub connection only.

## ⚠️ OWNERSHIP / HANDOFF OBLIGATION (do not lose this)
The site is being built under **Todd's personal accounts** (GitHub `twkavanaugh`,
Render under a Yahoo email). Decision: build now, **transfer to church-owned accounts
at handoff**. This is an explicit, REQUIRED handoff step:
- Transfer the GitHub repo to a church-owned account/org (GitHub transfer is clean).
- Transfer/reassign the Render account to the church (swap account email to a church
  address; remove Todd). More involved than GitHub — must be done deliberately.
"Transfer later" only protects against lock-in if it actually happens at handoff.

---

## Pages — current state
| Route | Status |
|---|---|
| `/` (homepage) | ✅ COMPLETE — 3 gated passes, reviewed, faithful to prototype |
| `/community/students` | ✅ COMPLETE — single gated pass, reviewed |
| All other nav routes | ❌ 404 — not built yet (expected; nav links are real) |

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

Prototype page sources available in `brand/prototype/` for: home, students, membership,
feed, mature, mission, sermons, hope, jesus, kids, event, event-standard, blog, other.
(Several nav targets have NO prototype page yet — e.g. leadership, most /mission/*,
mercy-clinic, women, men, lily-moms, young-adults, grow-groups, adult-discipleship.)

## Foundation (done, proven)
- `brand/design-tokens.md` — HUMAN SOURCE OF TRUTH. Two layers: raw palette (only place
  literals live) → semantic aliases (var() only). Light theme only (dark dropped).
- `site/src/styles/tokens.css` — generated ONE-WAY from the md; NEVER hand-edit.
- **Inverse tokens** (`--bg-inverse`, `--ink-on-inverse[-2]`, `--line-on-inverse[-strong]`,
  `--border-on-inverse`) exist so dark bands don't hardcode white rgba. PROVEN on the
  homepage Care band — mapped cleanly, zero inline white.
- Type: Inter Tight (display @ **700**, body 400/500), JetBrains Mono. Söhne rejected
  (commercial/unlicensable).
- `site/src/styles/global.css` — foundational layer: resets, type scale, containers,
  section rhythm, fonts (@font-face), shared classes promoted as they recur:
  **`.btn*`, `.section-head`, `.row-arr`, `.row-link`, `.ph*`** now live here.
- `site/src/data/business.ts` — SSOT for NAP/phone/email/url. Footer + page locations
  import from it. (canonical url `https://northwake.com` still UNCONFIRMED.)

## Components
- `Layout.astro` — doc shell; props `title` (default "North Wake Church"), `description`.
  Imports global.css; renders Nav + slot + Footer.
- `Nav.astro` — sticky translucent nav; CSS `.brand-mark` (no logo asset yet); CSS-only
  hover dropdowns; pathname-based active state (no JS). Give (external) + Plan a Visit.
- `Footer.astro` — 5-col; NAP from business.ts; computed year; brand-mark CSS duplicated
  from Nav (→ extract a Brand component later).
- Pages are page-local in their `.astro` files; shared patterns promoted to global.css.

## Token/architecture rules (held throughout — keep enforcing)
- Components consume SEMANTIC tokens only — no raw hex, no `var(--raw-*)`.
- Documented literal EXCEPTIONS: hero photo-scrim `rgba(0,0,0,…)`; `--shadow-dropdown`
  composite shadow value. Both flagged, both legitimate (not theme colors).
- Build against REAL committed prototype source (`brand/prototype/`), not descriptions.
- Foundation before propagation. Prove each layer (byte-equivalence on CSS moves).
- Honest placeholders only; nothing invented; grow the UNVERIFIED CONTENT list.
- Accessibility improvements added beyond prototype: marquee `prefers-reduced-motion`
  guard; mobile grid collapses; keyboard-accessible dropdown triggers.

## Recurring patterns flagged for future component extraction (built page-local so far)
- **Breadcrumb** (1st seen on students; every interior page has one).
- **Eyebrow + accent dot** (duplicated index + students → promote to global next).
- **Pull-quote figure** (accent left-border; students Colossians; Mature/Feed reuse).
- **Rhythms / hairline-gap card grid** (students + homepage community).
- **Brand mark** (duplicated Nav + Footer → extract a Brand component).

## KNOWN DEBT / DEFERRED FIXES (address before launch; no current risk)
- **Dropdown hover usability — LAUNCH BLOCKER.** CSS-only panels collapse when moving
  the cursor from trigger to sub-items (gap + no JS close-timer the prototype had).
  Confirmed hard to use. FIX: CSS hover-bridge (invisible padding/pseudo-element) +
  wider target; keep JS-free.
- **Mobile nav** — links hidden <980px, no hamburger yet.
- **tel:/mailto:** on footer + page contacts — easy UX/a11y win.
- **Inert buttons** — "Get directions" (home), "Subscribe" (footer), "Parent info" &
  "Email the student team" (students) need real targets/emails (do NOT invent emails).
- **Brand mark** — CSS placeholder; swap for real logo asset when available; de-dupe.
- **Hero image** — Overlay hero points at `/home-hero.jpg` (absent); renders over
  `--bg-2` fallback + removable "hero image pending" marker (TODO-commented). Drop real
  photo into `site/public/` to finish.
- **npm audit** — 2 advisories (1 high) in Astro 5.x line; NOT audit-fixed (would break
  pin). Revisit in hardening; low risk for static site.
- **Repo visibility** — currently PUBLIC; consider flipping to private (build notes/
  history are browsable). One click in GitHub settings; Render unaffected.
- **`/community` index** — breadcrumb "Community" currently points at
  `/community/grow-groups` as a stand-in; a real section index may be wanted.
- **brand/prototype/.gitkeep** — redundant; sweep in a cleanup commit.

## UNVERIFIED CONTENT — confirm with church before launch (the content-meeting agenda)
- **Service times:** Sundays 9:00 & 11:00 AM (homepage band + marquee).
- **NAP:** 1212 S Main St, Wake Forest NC 27587 / (919) 556-1546 / office@northwake.com
  (in business.ts; canonical url `https://northwake.com` unconfirmed).
- **Homepage logistics:** "Free parking · Kids check-in 30 min before service",
  "Welcome Wall" detail, "birth–5th grade in both services".
- **Find Community facts:** group counts, class schedules, student/kids times.
- **Latest sermon:** "Be Different — a journey through Romans", "Spring 2026" —
  PLACEHOLDER; needs real current series (candidate for CMS/content collection).
- **Events:** Ministry Intensive (May 31), Membership Class (May 3), Women's Day
  (Oct 24), Baptism Sunday (Jun 1) — dates placeholder-likely.
- **Care ministry** names/scope + "Who is Jesus?" evangelistic copy/tone.
- **Marquee phrases:** "Kids welcome", "Coffee on us", "Come as you are".
- **Students page:** grade range (6th–12th), rhythm specifics, Colossians 1:28–29
  wording/translation, ministry copy ("mature followers of Christ", Proclaim/Build/Depend).

## NEXT TASK (single decided action for the new chat)
Resume **page-building**. Strongest next candidates (have real prototype + reuse the
patterns students established → faster): `/community/mature-adults`, `/help/feed`,
`/community/kids` (ministry-page template), or `/about/mission` (Know/Grow/Go, the
site "spine"). Build section-gated like before. Eventually: a hardening pass (dropdown
fix, mobile nav, schema, sitemap, etc.) AFTER content lands.

## Commit history (chronological)
scaffold → design-tokens.md → tokens.css → global.css+fonts → prototype files →
layout chrome (Layout/Nav/Footer) → homepage pass 1/2/3 → session log →
students page → (then GitHub remote + Render deploy, infra not in git).
