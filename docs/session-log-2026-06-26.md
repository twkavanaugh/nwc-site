# Session Log — 2026-06-26

## TL;DR
Started from nothing (no repo, no Astro, no GitHub). Ended with a complete,
building Astro 5 site: full token foundation, global stylesheet with self-hosted
fonts, shared layout chrome (Layout/Nav/Footer), and the **entire homepage built
and reviewed** (3 gated passes). Build is green; homepage passed visual review.
Next: pick the next page to build, OR do the GitHub remote + Render deploy so
there's a live preview.

## Environment / workflow (IMPORTANT for next session)
- **Build agent: Claude Code (CC) directly.** NOT Replit. CC runs on the user's
  **personal MacBook Air** (the work machine blocks the toolchain via ThreatLocker
  — esbuild gets SIGKILLed on npm install; do not attempt builds there).
- Working dir: `/Users/toddkavanaugh/Documents/NWC Site`  (repo root).
  NOTE: a separate `Heritage-Metal-Site` project also exists under Documents —
  always confirm `pwd` is NWC Site before any CC action.
- Roles: Claude (chat) = SME/prompt-writer + reviewer; CC = build agent; user reviews
  in the browser between steps. GitHub will be source of truth (remote not yet created).
- Cadence: ONE gated step at a time. CC prompts are single self-contained inline
  code blocks. User runs the dev server in a **separate terminal** (label [Terminal]
  vs [CC] when giving commands).

## Stack
- Astro **5.x** (pinned ^5.0.0 — deliberately NOT 7.x; matches the user's proven
  Heritage build + the Project Playbook. CC's npx had bumped to 7 during scaffold;
  reverted to 5 as a logged decision.) Astro 5.18.2 currently installed.
- Static output, zero client JS. Deploy target: Render (from pushed git). Not yet configured.
- Fonts self-hosted via @fontsource-variable (Inter Tight + JetBrains Mono).
- Design source: committed React/Babel prototype in `brand/prototype/` (read directly by CC).

## What shipped (commit order)
1. `chore: scaffold repo structure and Astro project` — repo layout (site/, brand/,
   docs/, ai/), minimal Astro 5, business.ts SSOT, ADR-0001. (Built first on the
   work machine, blocked by ThreatLocker, re-scaffolded clean on personal machine.)
2. `chore: add church design-tokens source of truth` — brand/design-tokens.md.
3. `feat: generate tokens.css from design-tokens source` — two-layer tokens.css
   (raw palette → semantic aliases, var() only).
4. `feat: foundational global stylesheet + self-hosted fonts` — global.css + @font-face
   aliasing the variable fonts to the token family names (Inter Tight / JetBrains Mono).
5. `chore: add design prototype reference files` — all prototype files in brand/prototype/.
6. `feat: shared layout chrome (Layout, Nav, Footer)` — Layout.astro, Nav.astro,
   Footer.astro; .btn moved to global.css; index.astro uses Layout.
7. `feat: homepage pass 1 — overlay hero, marquee, service times`.
8. `feat: homepage pass 2 — mission triad, plan-visit, community, latest sermon`.
9. `feat: homepage pass 3 — care, events/jesus; link all community cards`.

## Current state — pages
| Route | Status |
|---|---|
| `/` (homepage) | ✅ COMPLETE — all 3 passes, reviewed, faithful to prototype |
| All other routes (nav links to them) | ❌ 404 — not built yet (expected) |

Nav links to the full route map (nested: /about/*, /mission/*, /help/*, /community/*,
/events, /sermons, /blog, /resources, /visit, /who-is-jesus). Give = external
https://onrealm.org/NorthWake/-/form/give/now. Most targets 404 until built.

## Foundation (done, proven)
- `brand/design-tokens.md` — human source of truth. Two layers: raw palette (only
  place literals live) → semantic aliases (var() only). Light theme only (dark dropped).
- `site/src/styles/tokens.css` — generated ONE-WAY from the md; never hand-edit.
- Inverse tokens (--bg-inverse, --ink-on-inverse[-2], --line-on-inverse[-strong],
  --border-on-inverse) exist specifically so dark bands don't hardcode white rgba.
  **Proven on the homepage Care band** — mapped cleanly, zero inline white.
- Type: Inter Tight (display @ 700, body 400/500), JetBrains Mono. Söhne rejected (commercial).
- `site/src/data/business.ts` — SSOT for NAP/phone/email/url. Footer + service-times
  location import from it. (url https://northwake.com still flagged to confirm.)

## Component inventory
- `Layout.astro` — doc shell; props: title (default "North Wake Church"), description.
  Imports global.css; renders Nav + slot + Footer.
- `Nav.astro` — sticky translucent nav, CSS .brand-mark (no logo asset yet), CSS-only
  hover dropdowns, pathname-based active state (no JS). Buttons: Give (external),
  Plan a Visit (/visit).
- `Footer.astro` — 5-col; NAP from business.ts; computed year; brand-mark CSS duplicated
  from Nav (extract a Brand component later).
- Homepage sections are page-local in index.astro. Shared classes promoted to global.css:
  .btn*, .section-head, .row-arr, .row-link.

## KNOWN DEBT / DEFERRED FIXES (no current risk; address before launch)
- **Dropdown hover usability** — CSS-only panels collapse when moving cursor from
  trigger to sub-items (6px gap + no JS close-timer, which the prototype had).
  FIX: CSS hover-bridge (invisible padding/pseudo-element) + wider target; keep JS-free.
  **Priority: launch blocker — nav is hard to use right now.**
- **Mobile nav** — links hidden <980px, no hamburger yet.
- **tel:/mailto:** on footer phone/email — easy UX win.
- **Inert buttons** — "Get directions" (homepage), "Subscribe" (footer) need real targets.
- **Brand mark** — CSS-drawn placeholder; swap for a real logo asset (/assets) when available.
  Also currently duplicated Nav+Footer → extract a Brand component.
- **Hero image** — Overlay hero points at /home-hero.jpg (not present); renders over
  --bg-2 fallback with a removable "hero image pending" marker. Drop real photo into
  site/public/ to finish (TODO comment marks the removable bit).
- **npm audit** — 2 advisories (1 high) in Astro 5.x line; did NOT audit-fix (would break
  pin). Revisit in hardening; low risk for static marketing site.
- **brand/prototype/.gitkeep** — now redundant alongside real files; sweep in a cleanup commit.

## OPEN DECISIONS / BLOCKERS (mostly content)
- **UNVERIFIED CONTENT — confirm with church before launch** (the content-meeting checklist):
  - Service times: Sundays 9:00 & 11:00 AM (+ marquee "Sundays 9 & 11 AM").
  - NAP: 1212 S Main St, Wake Forest NC 27587 / (919) 556-1546 / office@northwake.com
    (in business.ts; canonical url https://northwake.com unconfirmed).
  - Homepage logistics: "Free parking · Kids check-in 30 min before service",
    "Welcome Wall" coffee/greeter detail, "birth–5th grade in both services".
  - Find Community ministry facts: group counts, class schedules, student/kids times,
    "rooted in Colossians 1", etc.
  - Latest sermon: "Be Different — a journey through Romans", "Spring 2026" — placeholder;
    needs real current series (candidate for CMS/content collection).
  - Events: Ministry Intensive (May 31), Membership Class (May 3), Women's Day (Oct 24),
    Baptism Sunday (Jun 1) — dates placeholder-likely.
  - Care ministry names/scope + "Who is Jesus?" evangelistic copy/tone.
  - Marquee phrases: "Kids welcome", "Coffee on us", "Come as you are".
- **Astro 5 vs 7** — settled at 5 for now; no action unless a reason arises.

## Working principles that held (restate — they drift)
- One gated task at a time; review in browser before the next. The gate is the quality mechanism.
- Build against REAL committed prototype source (brand/prototype/), not descriptions.
- Two-layer tokens; components consume semantic tokens only (no raw hex, no var(--raw-*)).
  Documented exceptions: hero photo-scrim rgba; shadow-dropdown composite value.
- Foundation before propagation: tokens → global → chrome → pages. Each proven before next.
- CSS-only interactivity; crawler-visible static HTML (verified hrefs in dist each step).
- Honest placeholders only; nothing invented; keep the UNVERIFIED CONTENT list growing.
- CC instructions = one self-contained inline code block. Confirm pwd before acting.
- Label [Terminal] vs [CC] when giving the user commands.

## NEXT TASK (single decided action)
Two reasonable options — user picks at start of next session:
A) **Build the next page.** Strongest candidates (have real prototype + approved content):
   /about/mission (Know/Grow/Go, type-led, reinforces homepage) or /community/students
   (content marked "approved" in the prototype). Build section-gated like the homepage.
B) **Stand up the GitHub remote + Render deploy** now, so there's a live URL to preview
   and the deploy path is proven early (playbook: remote build is the resilient path).
   Prereq: create GitHub repo, push main, connect Render (Root Dir = site,
   Build = npm install && npm run build, Publish = dist).
Recommendation: do (B) deploy next — it's low effort now, proves the resilient path
early, and gives a shareable preview before more pages pile up. Then resume page-building.
