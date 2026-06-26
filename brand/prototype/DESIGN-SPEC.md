# North Wake Church — Build-Ready Design Specification

**For: developer rebuild in Astro.**
**Source of truth:** the files in this bundle. `styles.css` is the real production stylesheet. Each `page-*.jsx` / `shell.jsx` is the real component source (React + inline styles, transpiled in-browser by Babel in the prototype). This document extracts exact token values and maps structure; where a value lives only as an inline style in a `.jsx` file, this doc gives the real number and names the file.

> **Architecture note for the Astro port.** The prototype is a single-page app: one `North Wake Church.html` shell that hash-routes between page components (`#home`, `#visit`, …). In Astro you'll split these into real routes/pages. The global look lives in `styles.css` (utility + token classes); per-section layout lives as **inline styles** inside each page component. Recommendation: keep `styles.css` almost verbatim as your global stylesheet, and convert the inline-styled sections into Astro components (the repeating ones are listed in §3).

---

## 1. DESIGN TOKENS

All tokens are CSS custom properties defined in `styles.css` `:root`. The prototype also has a `[data-theme="dim"]` dark override block and a runtime Tweaks panel that rewrites these vars via JS — **for the production build, ignore the Tweaks runtime and use the `:root` values below. They are the locked "Warm Sand · Clay" palette.**

### 1.1 Color palette (exact hex / rgba + role)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f6f3ed` | Page background (warm white) |
| `--bg-2` | `#ece7dc` | Alt section background, hover fills, sand panels |
| `--bg-3` | `#e3ddce` | Placeholder stripe base / card-divider tone |
| `--ink` | `#1a1814` | Primary text (charcoal) **— also used as a FILL** (primary button bg, dark sections) |
| `--ink-2` | `#3a352c` | Body text, secondary foreground |
| `--ink-3` | `#6e665a` | Tertiary text, captions, labels |
| `--ink-4` | `#a89f8e` | Quaternary text (breadcrumb separators, "coming soon") |
| `--line` | `rgba(26,24,20,0.12)` | Hairline borders, dividers |
| `--line-strong` | `rgba(26,24,20,0.22)` | Stronger borders, card outlines, ghost-button border |
| `--accent` | `#8a4d2e` | Accent (quiet clay): dots, links, arrows, hover fills **— also used as a FILL** (accent buttons, accent CTA aside) |
| `--accent-ink` | `#ffffff` | Foreground on accent fills |

**Colors used for BOTH text and fill (flag for the dev):**
- `--ink` `#1a1814` — text everywhere **and** the fill of `.btn-primary` and full dark sections (Care, Child Dedication, Grow Groups CTA, Who-is-Jesus prayer). On dark sections, foreground flips to `--bg`.
- `--accent` `#8a4d2e` — link/arrow/dot text color **and** the fill of `.btn-accent` and the "Who is Jesus?" aside on the homepage. On accent fills, foreground is white.

**White / black literals that appear inline (not tokenized):**
- `#ffffff` / `white` — text on dark & accent fills.
- `rgba(255,255,255,0.06–0.88)` — text/border/fill tiers inside dark sections (e.g. card borders `rgba(255,255,255,0.14)`, hover `rgba(255,255,255,0.28)`, body text `rgba(255,255,255,0.72)`).
- Dark-section image gradient overlays: `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)` and the overlay-hero gradient `linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.75) 100%)`.
- One literal brand color: the Feed "teal box" swatch `#3fb6ad` (page-feed.jsx).

**Dark-theme variants** (`[data-theme="dim"]` in styles.css — present but not currently activated; useful if you want a dark mode):
`--bg #1a1814`, `--bg-2 #221f1a`, `--bg-3 #2a2620`, `--ink #f4efe5`, `--ink-2 #d8d2c4`, `--ink-3 #9c9484`, `--ink-4 #6e665a`, `--line rgba(244,239,229,0.12)`, `--line-strong rgba(244,239,229,0.22)`, `--accent #d49271`.

**Alternate palettes** (offered in the prototype's Tweaks panel — provided in case you want them as theme options; each is `{bg, ink, accent}`):
- Warm sand · clay *(LOCKED DEFAULT)* — `#f6f3ed` / `#1a1814` / `#8a4d2e`
- Sand · forest — `#f3eee2` / `#171a14` / `#2f5d3a`
- Cream · oxblood — `#f5efe4` / `#1c1612` / `#7a2e2a`
- Cream · saffron — `#f6efde` / `#1c1812` / `#b8631e`
- Linen · plum — `#f3eee8` / `#1a1518` / `#5e2f4a`

### 1.2 Typography

**Families (CSS vars):**
- `--sans` (body/UI): `"Inter Tight", "Söhne", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif`
- `--display` (headings): `"Inter Tight", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif`
- `--mono` (labels/captions): `"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace`

**Webfonts loaded** (Google Fonts in the HTML `<head>`): `Inter Tight` weights 400/500/600/700; `JetBrains Mono` 400/500. (The Tweaks panel can swap display→Söhne etc., but the locked build uses Inter Tight.)

**Global type defaults** (`body`): line-height `1.5`, `letter-spacing: -0.005em`, `font-feature-settings: "ss01","cv11"`, antialiased.

**Heading base** (`h1–h4`): `font-family: var(--display)`, `font-weight: 600`, `letter-spacing: -0.025em`, `line-height: 1.02`.

**Full type scale** (class → size / line-height / weight / tracking). Display sizes are fluid `clamp(min, vw, max)`:

| Class | font-size | line-height | weight | letter-spacing | Used for |
|---|---|---|---|---|---|
| `.display-xl` | `clamp(56px, 9vw, 156px)` | 0.95 | 600 | -0.035em | Page hero H1 (home, mission, beliefs, jesus, sermons) |
| `.display-l` | `clamp(44px, 6.4vw, 104px)` | 0.98 | 600 | -0.03em | Sub-page hero H1, big dark-section H2 |
| `.display-m` | `clamp(36px, 4.8vw, 72px)` | 1.02 | 600 | -0.025em | Section headlines (H2) |
| `.display-s` | `clamp(28px, 3.4vw, 48px)` | 1.05 | 600 | -0.02em | Card/sub-section headings (H3), big numerals |
| `.title` | `22px` | (inherit 1.5) | 600 | -0.012em | Card titles, list-row titles, facts values |
| `.lede` | `clamp(18px, 1.6vw, 22px)` | 1.5 | 400 | -0.005em | Intro paragraphs (max-width 56ch) |
| `.body` | `16px` | 1.6 | (400) | (inherit) | Body copy |
| `.small` | `14px` | 1.55 | (400) | (inherit) | Captions, secondary detail |
| `.mono` | `12px` | (inherit) | (400) | 0.04em, uppercase | Eyebrow-adjacent labels, metadata |
| `.eyebrow` | `12px` | (inherit) | 600 | 0.18em, uppercase | Section kicker (with accent dot) |
| `.kbd` | `11px` | (inherit) | (400) | 0.04em, uppercase | Rare inline keycap-style label |
| `.footer h5` | `11px` | (inherit) | 600 | 0.16em, uppercase | Footer column headings |
| `.brand-name` | `17px` | (inherit) | 600 | -0.012em | Wordmark text (now replaced by logo image in nav) |
| `.nav-link` | `14px` | (inherit) | 500 | -0.005em | Nav items |
| `.btn` | `14px` | (inherit) | 500 | -0.005em | All buttons |
| `.marquee` | `clamp(20px, 2.4vw, 32px)` | (nowrap) | 600 | -0.02em | Homepage ticker |

> **Note:** many in-component headings use the `.display-*` classes but override `font-weight: 500` inline (lighter than the class's 600) for a softer editorial feel — e.g. card titles, hero subheads. The dev should treat **500** as the common heading weight in body content and **600** for the largest hero display type. Inline `font-size` overrides also appear (e.g. `.title` bumped to 24/26 in some cards, body bumped to 17/18 in ledes). These are per-section; the real values are in each `page-*.jsx`.

### 1.3 Spacing scale (deduplicated, px)

Margins / padding / gaps actually used across the system:
`4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 96, 120`

Key recurring applications:
- **Section vertical rhythm:** `section { padding: 96px 0 }`; `.tight { 72px 0 }`; first section `padding-top: 56px`.
- **Container padding:** `40px` desktop, `22px` ≤720px.
- **Section header bottom margin:** `56px` (→ `36px` ≤720px).
- **Footer:** `margin-top 120px`, `padding 80px 0 32px`, grid gap `48px`, bottom block padding-top `32px`.
- **Common grid gaps:** `64px` and `80px` (two-column content), `32px` (card rows), `24px` (tight card rows), `16px` (image strips), `1px` (hairline-separated grids — see §1.6).
- **Card padding:** commonly `36px 32px 32px` or `40px 36px` or `44px 48px`.
- **Button padding:** `14px 22px` default; nav/compact buttons `10px 18px`.

### 1.4 Border radius

| Element | Radius |
|---|---|
| Buttons `.btn`, pills `.tag`, `.nav-link` | `999px` (full pill) |
| Brand mark circle, accent dots | `50%` |
| `.ph` image placeholder | `4px` |
| `.ph .ph-label` chip | `3px` |
| Some image wrappers / asides (inline) | `6px` |
| Beliefs pull-quote / misc inline cards | `2px` |
| **Most section cards, info grids, embed slots, facts boxes** | **`0` — square corners (no radius set)** |

So: **pills are fully round; a few media/aside blocks use 4–6px; the dominant card style is square (0).** State this explicitly to the dev — the squared cards are intentional and part of the editorial look.

### 1.5 Shadows

- **No drop shadows on content/cards.** The design is shadow-free by intent; separation comes from `--line` / `--bg-2`.
- **One exception** — the nav dropdown menu (shell.jsx, inline): `box-shadow: 0 12px 40px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04)`.
- The Tweaks panel (prototype-only UI, **do not ship**) has its own shadow.

### 1.6 Repeated visual primitives

- **Hairline-grid pattern:** card grids set `background: var(--line); border: 1px solid var(--line); gap: 1px` on the grid, and each cell uses `background: var(--bg)` (or `--bg-2`). The 1px gap shows the line color through, producing crisp single-pixel rules between cells. Used on: home community grid, home Care grid, mission KNOW/GROW/GO stamp, students rhythms, kids schedule, mature experiences, sermons mock, jesus claims. **Reusable — make it a component/utility.**
- **Accent dot eyebrow:** `.eyebrow` + `<span class="dot">` (6px accent circle, 10px right margin).
- **Borders:** hairlines are `1px solid var(--line)`; stronger card outlines `1px solid var(--line-strong)`; accent rule on quotes `2–3px solid var(--accent)` (left border).
- **Selection:** `::selection { background: var(--accent); color: #fff }`.

---

## 2. GLOBAL CHROME

### 2.1 Header / nav  *(source: `shell.jsx` → `Nav`, `NavDropdown`; styles in `styles.css` `.nav*`)*

**Structure (left→right):**
1. **Brand** — logo image `assets/nw-mark.png` at `height:32px` (cropped cross mark). Clicking → home. (CSS also retains a `.brand-mark`/`.brand-name` CSS-drawn fallback wordmark, unused now.)
2. **Primary links:** `Home` · `About ▾` · `Mission ▾` · `Help ▾` · `Community ▾` · `Resources ▾` · `Come Visit` · `Blog` · `Who is Jesus`
3. **CTA cluster (right):** `Give` (ghost) + `Plan a Visit` (primary).

**Dropdown contents** (each item links to a route or is a non-clickable stub shown dimmed):
- **About:** Our Beliefs ✓, Leadership, Mission / Vision ✓, Membership ✓
- **Mission:** International Missions, Church Planting, Local Outreach, Ministry Training, Serve the Church
- **Help:** Hope Counseling ✓, Mercy Health Clinic, Feed Ministry ✓, Care Ministry
- **Community:** Grow Groups ✓, Adult Discipleship, Kids ✓, Students ✓, Women, Men, LILY Moms, Young Adults, Mature Adults ✓
- **Resources:** Events ✓, Sermons ✓, Blog ✓, Other Resources
(✓ = built page; others are stubs styled at `--ink-4` with no arrow.)

**Bar styling:** `position: sticky; top:0; z-index:50`; translucent `background: color-mix(in srgb, var(--bg) 78%, transparent)` with `backdrop-filter: blur(16px) saturate(140%)`; `border-bottom: 1px solid var(--line)`. Inner row: flex space-between, `padding:18px 40px`, `max-width:1440px`.

**Behavior / interactivity (JS required):**
- Dropdowns open on **hover** with a 120ms close-delay timer (JS state in `NavDropdown`). The caret rotates on open. In Astro this can be **CSS-only** (`:hover` + `:focus-within` on the group) if you accept losing the close-delay; the dropdown panel itself is static markup. The fade-in uses the `fadeUp` keyframe.
- Active-state highlight on the current route (JS-driven in the SPA; in Astro use `Astro.url.pathname` to set `.active`).
- **Responsive:** `@media (max-width: 980px) { .nav-links { display:none } }` — the link row is hidden on narrow screens and **no mobile menu is implemented yet**. *(Description, not source: you'll need to build a hamburger/drawer for mobile — call this out as net-new work.)*

### 2.2 Footer  *(source: `shell.jsx` → `Footer`; styles `.footer*`)*

5-column grid `grid-template-columns: 1.4fr repeat(4, 1fr)`, `gap:48px` (→ `1fr 1fr` ≤880px).
- **Col 1 (brand):** logo image `assets/nw-logo.png` at `width:214px`; mission sentence; `Subscribe` (ghost) + `Plan a Visit` (primary) buttons.
- **Col 2 "Visit":** Service Times, What to Expect, Directions, Kids & Students, Parking.
- **Col 3 "Belong":** Grow Groups ✓, Membership ✓, Adult Discipleship, Women's Ministry, Men's Ministry.
- **Col 4 "Care":** Hope Counseling, Mercy Health Clinic, Feed Ministry ✓, Care Ministry, Prayer Requests.
- **Col 5 "Connect":** Sermons, Blog, Events, Contact, Give — plus a contact block: **Address** 1212 S Main St, Wake Forest, NC 27587 · **Phone** (919) 556-1546 · **Email** office@northwake.com.
- **Bottom bar:** `© 2026 North Wake Church · A family of faith` (left) / `Est. 19## · Wake Forest, NC` (right — year is a deliberate placeholder).
Column headings `.footer h5` (11px/600/0.16em/uppercase). List hover → `--accent`.

---

## 3. REUSABLE COMPONENTS (call these out for the Astro component library)

These patterns repeat across pages — build once, reuse:

1. **Breadcrumb** — mono row `Home / Section / Page` (accent on current). Every sub-page.
2. **Section header (`.section-head`)** — flex space-between, left = eyebrow + `.display-m` headline, right = `.body` blurb (max 36ch). Drops to column ≤720px. Used on nearly every section.
3. **Eyebrow** — accent dot + uppercase mono-ish label. Ubiquitous.
4. **Hairline card grid** (see §1.6) — N-up cards separated by 1px rules. Home community, Care, mission stamp, students/kids/mature/groups grids, sermons mock.
5. **Hero variants** (home, `page-home.jsx`): `editorial` (big stacked type + wide 21:8 image band), `split` (text + 4:5 portrait), `overlay` *(LOCKED DEFAULT — full-bleed image, ~78vh, white text over gradient)*, `minimal` (centered type, no image). The home `HomePage({hero})` switches on a prop.
6. **Sub-page hero** — eyebrow + `.display-l` headline (with one accent-colored phrase) + `.lede` + button row, paired with a `.ph` portrait (`4/5`). Students, Membership, Feed, Mature, Hope, Kids, Groups.
7. **Pull-quote / scripture block** — left `2–3px solid var(--accent)` border, mono ref label, display-font quote. Students, Groups, Mature, Kids, Beliefs, Mission, Jesus, Blog post.
8. **Numbered list rows** — `auto 1fr` grid, accent number/`+`, title + body. Membership steps, mission practices, beliefs, kids dedication.
9. **Facts box** — bordered card, `auto 1fr` definition grid with 1px dividers, big date/number, primary action. Event pages, mature schedule, hope "basics".
10. **CTA band** — full dark (`--ink`) or accent section, centered or 2-col, eyebrow + `.display-l` + `.lede` + buttons. Ends most pages.
11. **`.row-link`** — full-width clickable row, hover slides `padding-left:8px` and arrow `translateX(4px)`. Events list, beliefs docs, feed resources, blog list, sermons subscribe.
12. **`.ph` placeholder** — striped labeled image stand-in (see §4); every page until real photos land.
13. **`.marquee`** — infinite ticker (home only).
14. **Buttons** — `.btn-primary` (ink→accent on hover), `.btn-ghost` (outline), `.btn-accent`. Universal.

---

## 4. ASSETS

| Asset | Path | Use | Stable path needed? |
|---|---|---|---|
| Nav mark | `assets/nw-mark.png` (67×68, cropped from logo) | Nav brand, 32px tall | Yes — brand |
| Full logo | `assets/nw-logo.png` (550×79) | Footer wordmark, 214px wide | Yes — brand |
| Hero photo | `assets/home-hero.jpg` | Home hero (all variants) | Swap for real photography |
| Webfonts | Google Fonts CDN | Inter Tight, JetBrains Mono | Self-host for Astro/perf |

**All other imagery is placeholder** (`.ph` component, `shell.jsx` → `Placeholder`): a CSS striped box with a mono label naming the intended shot (e.g. "Students · gathering", "Welcome Walk-Up Candid", "Building exterior · Sunday morning"). Every `.ph` marks a spot that needs real custom photography. Aspect ratios in use: `4/5`, `4/3`, `16/9`, `16/10`, `21/9`, `21/8`, `1/1`, `5/4`.

**Icons:** none as files — arrows are the literal `→` glyph; the brand cross + accent dots are CSS/SVG. The bundler thumbnail (in the standalone export) is an inline SVG cross.

**No structured-data / og-image** is wired yet — recommend adding a social card + favicon from the logo during the build.

---

## 5. RESPONSIVE BEHAVIOR

**Breakpoints actually defined in `styles.css`:**
- **`max-width: 980px`** — nav primary links hidden (`.nav-links { display:none }`). ⚠️ no mobile menu exists yet (net-new work).
- **`max-width: 880px`** — footer grid `1.4fr repeat(4,1fr)` → `1fr 1fr`.
- **`max-width: 720px`** — container padding `40px`→`22px`; `.section-head` becomes column (`align-items:flex-start; gap:18px; margin-bottom:36px`).

**Fluid (no breakpoint needed):** all `.display-*`, `.lede`, and `.marquee` sizes are `clamp()`-based and scale continuously with viewport width.

**Not yet handled (description, flag as work):** the many inline multi-column section grids in `page-*.jsx` (e.g. `gridTemplateColumns: "1.3fr 1fr"`, `repeat(3,1fr)`, `repeat(4,1fr)`) are **fixed** and do **not** currently collapse on mobile — they'll overflow/squish below ~720px. For the Astro build, each of these needs a mobile rule to stack to 1 column (or 2 for 4-up grids). This is the single biggest responsive gap; treat as required work, not a port-as-is.

---

## 6. INTERACTIVITY — CSS-only vs JS

| Feature | Where | CSS-only? |
|---|---|---|
| Marquee ticker | home | **CSS-only** (`@keyframes marquee`, 50s linear infinite) |
| `fade-up` entrance | hero/sections | **CSS-only** (`@keyframes fadeUp`) |
| Button hover (lift, color, arrow slide) | global | **CSS-only** |
| `.row-link` hover slide | lists | **CSS-only** |
| `.nav-link` / footer hover | chrome | **CSS-only** |
| Nav dropdowns | header | **JS** for hover-intent close-delay + active state; can be **CSS-only** via `:focus-within`/`:hover` if delay is dropped |
| Card hover bg/border swaps | community, Care, sermon card | **JS** in prototype (`onMouseEnter/Leave` inline) — **trivially CSS-only** (`:hover`) in the rebuild; convert these |
| FAQ accordion | Come Visit | uses native `<details>/<summary>` — **CSS-only/native** |
| Page routing | whole app | **JS** (hash router) in prototype → replace with **Astro file-based routing** |
| Blog index→post, event data | blog/events | **JS** data objects in prototype → in Astro use content collections / props |
| Tweaks panel | prototype overlay | **JS — do NOT ship.** Strip entirely; bake the locked tokens into `:root`. |

---

## 7. FILES IN THIS BUNDLE

- `styles.css` — **real production stylesheet** (global tokens, utilities, chrome). Port near-verbatim.
- `shell.jsx` — Nav, NavDropdown, Footer, Placeholder, Marquee (real markup + inline styles).
- `page-home.jsx` — home + all hero variants + every home section.
- `page-other.jsx` — Come Visit, Our Beliefs, Grow Groups.
- `page-students.jsx`, `page-kids.jsx`, `page-mature.jsx`, `page-membership.jsx`, `page-feed.jsx`, `page-hope.jsx` — ministry/care pages.
- `page-mission.jsx`, `page-jesus.jsx`, `page-sermons.jsx` — mission, seeker, sermon archive (BranchCast embed slot).
- `page-event.jsx`, `page-event-standard.jsx` — two event detail templates (data-driven).
- `page-blog.jsx` — blog index + post template (block renderer: paragraph / scripture / pullquote / heading).
- `North Wake Church.html` — the app shell (routing, Google Fonts link, Tweaks defaults). Use it to see load order + the locked `TWEAK_DEFAULTS` (= production token values).
- `assets/` — logo, mark, hero photo.

**These `.jsx` files ARE the real rendered markup + CSS** (inline styles are literal). They are not regenerated approximations. Where this document describes rather than shows (mobile menu, mobile grid collapse, og/favicon), it is explicitly marked as net-new work, not existing source.

---

## 8. RECOMMENDED ASTRO PORT ORDER

1. Drop `styles.css` in as global CSS; strip the Tweaks runtime; keep `:root` Warm Sand · Clay tokens (self-host fonts).
2. Build `Nav` + `Footer` as Astro components (add the missing mobile menu).
3. Build the §3 reusable components (SectionHeader, Eyebrow, Hairline grid, Hero, FactsBox, PullQuote, RowLink, CTABand, Placeholder, Button, Tag).
4. Port pages as routes, converting inline-styled sections to the components above and adding mobile grid-collapse rules.
5. Wire data: blog → content collection; events → collection or CMS; sermons → BranchCast embed; group finder → gated/member link.
