# Design package — Resources page (List View)

Build-ready spec for the **North Wake Church Resources index**, list-view variant, for an **Astro static rebuild**. Everything here reflects the real production file `Resources Index (List View).html` — the full source is reproduced in §9, and `resources-list.html` in this folder is the exact same file, standalone and runnable.

**The one non-negotiable:** filtering is **100% CSS, zero JavaScript**, driven by `:target` and anchor links. Don't reach for a JS filter — see §6.

---

## 1. What the page is

The church's self-serve library: a single unified catalog of three item types —

| Type | Glyph | Kicker label | Action label | Meaning |
|---|---|---|---|---|
| Download | `↓` | `Download · PDF` | `Download PDF →` | a file (packet, form, reading plan) |
| Link | `↗` | `External link` | `Visit site ↗` / `Register ↗` | off-site URL |
| Read | `→` | `Read on site` | `Read post →` | a staff-written page (may carry up to 5 labeled download attachments) |

Every item has: title, 1–2 sentence description, one or more category tags, and a type. Categories are a flat list; the seed set is **New Here, Families, Discipleship, Care, Missions, Forms**.

---

## 2. Design tokens (exact values — these ARE the site tokens)

```css
:root {
  --bg:          #f6f3ed;              /* page background — warm paper */
  --bg-2:        #ece7dc;              /* hover fill / deeper warm panel */
  --bg-3:        #e3ddce;              /* reserved card/divider (unused on this page) */
  --ink:         #1a1814;              /* primary text; also the active-chip FILL */
  --ink-2:       #3a352c;              /* strong secondary text (nav, lede) */
  --ink-3:       #6e665a;              /* body/description text, eyebrows */
  --ink-4:       #a89f8e;              /* tertiary — tag text, kickers, counts */
  --line:        rgba(26,24,20,0.12);  /* hairline borders / row dividers */
  --line-strong: rgba(26,24,20,0.22);  /* stronger hairline — chips, glyph ring */
  --accent:      #8a4d2e;              /* clay — used sparingly */
  --accent-ink:  #ffffff;              /* text on accent fills (not needed here) */
}
```

**Colors that pull double duty — flag for the dev:**
- `--ink` `#1a1814` is both the default **text color** AND the **fill of the active filter chip** (with `--bg` as its text). 
- `--bg` `#f6f3ed` is the page background AND the text color inside an active chip.
- `--accent` `#8a4d2e` is used ONLY for: the eyebrow dot, the type glyph inside its ring, the brand cross mark, and the action link text. Nowhere as a fill or a large area.

**Dark variant** exists in the parent site as `[data-theme="dim"]` (bg `#1a1814`, ink `#f4efe5`, accent lightens to `#d49271`). Not used on this page, but honor the token names so the page inherits it if the theme is toggled globally.

---

## 3. Typography

**Families** (Google Fonts, already imported):
- `--sans`: **Inter Tight** — weights **400, 500, 600, 700** actually used. Display + body + UI.
- `--mono`: **JetBrains Mono** — weights **400, 500**. Eyebrows, kickers, tags, counts, chips.
- `--serif`: **Newsreader** (400 + 400 italic) — loaded but **unused on this page**. Reserve for devotional/scripture moments elsewhere. Don't introduce it here.

Import (exact):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap" rel="stylesheet">
```

**Type scale — every distinct size, with role, line-height, weight, tracking:**

| Element | font | size | line-height | weight | letter-spacing | transform |
|---|---|---|---|---|---|---|
| Hero `h1` | sans | `clamp(44px, 6vw, 82px)` | 1.02 | 700 | −0.03em | — |
| Hero lede `p` | sans | 20px | 1.6 | 400 | — | — |
| Row title `h3` | sans | 21px | 1.2 | 700 | −0.02em | — |
| Row description `p` | sans | **16px** | 1.5 | 400 | — | — |
| Nav links | sans | 14px | — | 400 (active 500) | — | — |
| Nav CTA | sans | 13px | — | 500 | — | — |
| Brand wordmark | sans | 18px | — | 700 | −0.02em | — |
| Eyebrow | mono | 12px | — | 400 | 0.18em | uppercase |
| Chip | mono | 12px | — | 400 | 0.06em | uppercase |
| Chips "Filter" label | mono | 11px | — | 400 | 0.16em | uppercase |
| Catalog count | mono | 12px | — | 400 | 0.10em | uppercase |
| Type kicker (in row) | mono | 10.5px | — | 500 | 0.14em | uppercase |
| Tag | mono | 10.5px | — | 400 | 0.08em | uppercase |
| Footer muted | mono | 11px | — | 400 | 0.10em | uppercase |

**Accessibility floor:** all content/description text is **≥16px**. Mono labels go as low as 10.5px but never carry meaning alone — every type has a text kicker AND a glyph AND an action label; every card has visible text tags.

---

## 4. Spacing, borders, radius, primitives

**Spacing values in use** (deduped): `5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 40, 44, 48, 52, 64, 72, 80, 150, 220` px. Notable: content gutter `48px` (→ `28px` under 860px); hero top pad `72px`; row vertical pad `26px`; catalog grid gap `32px`; bottom margin `80px`.

**Border radius:** **square corners everywhere** (`0`) — EXCEPT two intentionally pill-shaped elements: the filter chips and the nav CTA both use `border-radius: 999px`, and the circular type glyph + eyebrow dot use `border-radius: 50%`. No other rounding anywhere.

**Borders / dividers (the shadow substitute — there are NO box-shadows):**
- Row divider: `1px solid var(--line)` (`border-bottom` on each `.card`).
- Catalog top edge: `1px solid var(--line-strong)`.
- Filter bar: `1px solid var(--line)` top and bottom.
- Nav + footer: `1px solid var(--line)` bottom / top.
- Chip / glyph ring / nav CTA: `1px solid var(--line-strong)`.
- Tag: `1px solid var(--line)`.

**Repeated visual primitives:**
- **Eyebrow** = mono 12px uppercase + a 6px accent dot, `gap:10px`. Above hero and above catalog.
- **Type glyph** = 44px circle, `1px solid var(--line-strong)`, accent-colored arrow inside, 18px.
- **Hover** = row background shifts `--bg` → `--bg-2`, 120ms.
- **Active chip** = ink fill, bg text, ink border.

---

## 5. Layout — section by section

Container: `.wrap` = `max-width: 1240px; margin: 0 auto; padding: 0 48px`.

**Nav** (sticky, `top:0`, `z-index:20`, bg `--bg`, 68px tall): flex space-between — brand (cross mark + wordmark) | nav links (`gap:30px`) | pill CTA. Links hidden under 860px.

**Hero** (`padding: 72px 0 8px`): eyebrow → `h1` (`max-width:16ch`) → lede `p` (`max-width:54ch`).

**Filter bar** (full-bleed inside `.wrap` via `margin-left/right:-48px`; top+bottom hairline): a `.chips` flex row (`gap:8px`, wraps) — a "Filter" mono label then 7 chips (All + 6 categories), each showing a count.

**Catalog head** (`padding: 40px 0 20px`, flex baseline space-between): "Library" eyebrow | count line ("Showing all resources" / swaps to category name).

**Catalog** = the list. Top edge `1px solid var(--line-strong)`, `margin-bottom:80px`. Each `.card` is a **CSS grid row**:

```css
.card {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) 220px 150px;  /* glyph | title+desc | tags | action */
  align-items: center; gap: 32px;
  padding: 26px 12px;
  border-bottom: 1px solid var(--line);
}
```

The `<a class="card">` has FOUR grid children: `.card-type` (glyph), `.card-main` (h3 + p), `.card-tags`, `.card-action`. (`.card-top` from the grid variant is gone — `display:contents` remnant is harmless but can be dropped.)

**Footer** (`1px solid var(--line)` top, `padding: 40px 0 64px`): two mono muted lines, space-between.

**This "row" component is the one reusable pattern on the page** — 12 instances, one per resource. The glyph, kicker, and action label are the only parts that vary by type.

---

## 6. Static filtering — how the zero-JS mechanism works (READ THIS)

The filter is pure CSS `:target`. Do **not** replace it with JS.

**DOM order matters.** Inside `.filter-root` there are, in order:
1. Seven empty anchor targets: `<a id="all">…<a id="forms">` (class `.tgt`, `height:0`).
2. `.filter-bar` containing the chips (chips are `<a href="#new-here">` etc).
3. `.catalog-wrap` containing `.catalog-head` (count) and `.catalog` (rows).

Because the targets are **earlier siblings** of the filter bar and catalog, the general sibling combinator `~` lets a `:target` state reach forward to style the chips and hide rows:

```css
/* hide non-matching rows for the active category */
#families:target ~ .catalog-wrap .card:not(.cat-families) { display: none; }

/* light up the active chip; every card carries cat-* classes */
#families:target ~ .filter-bar .chip-families { background: var(--ink); color: var(--bg); border-color: var(--ink); }
```

- **"All" default state:** `.chip-all` is styled active in the base CSS; when ANY category is targeted, a grouped selector de-emphasizes All back to outline.
- **Count label swap:** `.count` holds one `.all-name` span + six `.active-name` spans; `:target` toggles which is `display:inline`.
- **`scroll-margin-top:120px`** on `.tgt` keeps the sticky nav from covering content on jump.
- Each card lists its categories as classes: `class="card cat-new-here cat-forms"`. A card in N categories has N `cat-*` classes and survives the `:not()` hide for each.

**Astro translation notes:**
- This works as-is in static HTML — Astro just emits the same markup + CSS. No island, no client directive.
- The chip **counts** (`<span class="n">12</span>`) and the catalog **total** are hardcoded to seed data. In the real build, compute them from the content collection at build time.
- When you generate cards from a CMS/content collection, emit the `cat-*` classes from each item's categories, and emit the glyph/kicker/action from its `type`. Keep the target-anchor list in sync with the category list (one `<a id="…" class="tgt">` per category, plus `#all`).
- **Known limitation to keep:** filter state lives in the URL hash, so it's shareable and back-button-friendly, but it does not combine categories (single-select, like radio buttons). That's intended. Multi-select would require JS — don't add it unless asked.

---

## 7. Interactivity inventory (CSS-only vs JS)

| Behavior | Mechanism | CSS-only? |
|---|---|---|
| Category filtering | `:target` + `~` combinator | ✅ yes |
| Active chip highlight | `:target` grouped selectors | ✅ yes |
| Count label swap | `:target` toggling `display` | ✅ yes |
| Row hover fill | `:hover` | ✅ yes |
| Chip hover border | `:hover` | ✅ yes |
| Sticky nav | `position:sticky` | ✅ yes |
| Responsive reflow | media queries | ✅ yes |

**Nothing on this page needs JavaScript.** The whole page is static.

---

## 8. Responsive behavior

Breakpoints: **860px** and **560px**.

- **> 860px:** full 4-column rows `52px / 1fr / 220px / 150px`; nav links visible; 48px gutters.
- **≤ 860px:** nav links hidden (mobile menu is a separate site-level concern, not built here); gutters → 28px; rows become 3-column `44px / 1fr / 130px` and the **tags column is hidden** (`.card-tags{display:none}`) — glyph, title+desc, action remain.
- **≤ 560px:** rows become 2-column `40px / 1fr`; the action link drops to a second line under the description (`grid-column:2`, left-aligned) with a 12px row gap.

Hero `h1` scales fluidly via `clamp(44px,6vw,82px)` — no breakpoint needed.

---

## 9. Full production source

The complete file is included in this folder as **`resources-list.html`** (identical to the live `Resources Index (List View).html`, standalone, no external deps beyond the Google Fonts link). Open it directly to see the real rendered page and to lift exact CSS/HTML. It contains:

- The full `<style>` block (all tokens, component CSS, the `:target` filter rules, media queries).
- The static nav, hero, filter bar, the seven `.tgt` anchors, all 12 seed `.card` rows with their `cat-*` classes, and the footer.

Treat that file as the source of truth; this markdown is the map to it.

---

## 10. Assets

| Asset | Use | Notes |
|---|---|---|
| — (none) | — | The page uses **no images or icon files**. The brand "cross" mark and all type glyphs (`↓ ↗ →`) are CSS/Unicode. Fonts load from Google Fonts. |

If self-hosting fonts in the Astro build (recommended for a church site — privacy + performance), swap the Google Fonts `<link>` for local `@font-face` on Inter Tight (400/500/600/700), JetBrains Mono (400/500), and Newsreader (400 + italic). The logo cross can stay CSS or be replaced with the real North Wake wordmark SVG used elsewhere on the site.

---

## 11. Build checklist for Claude Code (Astro)

1. Create `src/pages/resources.astro`; paste the `<style>` block into a global or scoped style (tokens should live in a shared `:root`, ideally already defined site-wide).
2. Model resources as a content collection: `{ title, description, type: 'download'|'link'|'read', categories: string[], href, attachments?: [{label, href}] (≤5, read-type only) }`.
3. Render the `.tgt` anchor list + chips from the category list; compute counts at build.
4. Map `type` → glyph (`↓/↗/→`), kicker (`Download · PDF`/`External link`/`Read on site`), and action label.
5. Emit `cat-<slug>` classes on each `.card` from its categories.
6. Keep the `:target` CSS exactly — it's the filter engine.
7. Post-detail (read type) is a **separate template** not in this package; ask if you want it — it renders the staff page body plus up to 5 labeled download attachments.
