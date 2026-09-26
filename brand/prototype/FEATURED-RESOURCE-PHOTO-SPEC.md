# Design package — Featured Resource · A Photo (Resources page)

This is an **add-on** to the **Resources List View** package, for the live **static Astro** site. It adds a text-driven, photo-backed **Featured Resource card** in the right-hand column of the Resources hero.

Nothing else on the page changes: nav, search, filter bar, `:target` filtering and the list rows all stay as they are.

The source of truth is **`featured-resource-photo.html`**. It is a standalone, runnable file containing the hero plus the card, in production markup, with **zero JavaScript**. The prototype it came from is `Resources Featured A Photo.html`, which stacks three override layers. This kit collapses them into one clean rule set, so build from the kit, not the prototype.

---

## 1. What it is

The card promotes one resource at the top of the library. It is a single link (`<a class="feat">`), so the whole card is clickable. Top to bottom it shows:

- a **"Featured resource"** clay label with a dot, and the item's type ("Read on site") on the right
- open photo space, where the landscape shows through
- the title, in **Newsreader serif**
- the description, **clamped to 3 lines**
- three details (Format · Led by · Category)
- a cream pill button, **"Read the post →"**

**Placement:** the hero becomes a 2-column grid. The existing headline and lede sit on the left; the card sits on the right, bottom-aligned with the lede. The card fills space that used to be empty, so it adds no height on desktop.

**Photo:** a wide landscape of forested ridges running out to a hazy valley and sky. It reads as calm, open and unhurried, which fits a library of discipleship resources and suggests "room to grow."

---

## 2. Design tokens

The card uses existing tokens only. It carries **`data-theme="dim"`**, so inside the card:

| Token (dim) | Value | Used for |
|---|---|---|
| `--bg` | `#1a1814` | photo fallback colour; button text |
| `--ink` | `#f4efe5` | title, details, **button fill** |
| `--ink-2` | `#d8d2c4` | description, type label |
| `--ink-3` | `#9c9484` | detail labels |
| `--line-strong` / `--line` | `rgba(244,239,229,.22/.12)` | rules above/below the details |
| `--accent` | `#d49271` | "Featured resource" label and dot, button **hover** fill |

Add `[data-theme="dim"]` globally if it isn't there already; other page kits use it too.

**Photo scrim** (the one literal exception): `rgba(26,24,20,…)` is `--ink` #1a1814 with alpha applied.

```css
linear-gradient(180deg,
  rgba(26,24,20,0.35) 0%, rgba(26,24,20,0.55) 32%,
  rgba(26,24,20,0.86) 62%, rgba(26,24,20,0.94) 100%)
```

The scrim is light at the top, so the sky and clouds read. It is dense from about 60% down, where all the text sits: that area is 86–94% charcoal. That keeps cream text well above AA contrast wherever the ridgeline falls.

**Contrast:**
- light clay label on the dense scrim: about 6.5:1
- `--ink-3` detail labels: about 5:1
- cream text: more than 12:1

---

## 3. Typography

| Element | Font | Size | Line-height | Weight | Other |
|---|---|---|---|---|---|
| Kicker / type label | mono | 11px | — | 500 / 400 | 0.14em, uppercase |
| Title | **Newsreader** | `clamp(30px,2.8vw,40px)` | 1.1 | 400 | −0.015em |
| Description | Inter Tight | **17px** | 1.55 | 400 | **3-line clamp** |
| Detail label | mono | 10.5px | — | 400 | 0.12em, uppercase |
| Detail value | Inter Tight | **16px** | — | 500 | — |
| Button | Inter Tight | 14px | — | 500 | pill, matches site `.btn` |

The hero headline and lede are unchanged: 700 `clamp(44px,6vw,82px)` / 20px.

**Accessibility:** readable text is 16px or larger. The mono labels are never the only carrier of meaning, because the title and details state everything.

---

## 4. Spacing, borders, radius

**Hero grid:** `minmax(0,1.25fr) minmax(0,1fr)`, 64px gap, `align-items:end`.

**Card:**
- `min-height:520px`
- padding `34/32/32px`
- flex column; the top row has `margin-bottom:auto`, which pins the rest of the content to the bottom, plus 40px bottom padding

**Vertical rhythm:** title → 14px → description → 22px → details → 22px → button.

**Details grid:** 3 columns, each with `12/12/12/0` padding. `--line-strong` rule above, `--line` rule below.

**Radius:**
- the card has square corners
- the button is a pill (`999px`)
- the dot is round

There are no shadows and no border on the card; the photo defines its edge.

---

## 5. Markup

```html
<div class="hero-grid">
  <div><!-- existing eyebrow, h1, lede --></div>
  <a class="feat" data-theme="dim" href="/resources/<slug>" aria-labelledby="feat-title">
    <div class="feat-top"><span class="feat-kicker">Featured resource</span><span class="feat-type">Read on site</span></div>
    <h2 class="feat-title" id="feat-title">…</h2>
    <p class="feat-desc">…</p>
    <dl class="feat-meta"><div><dt>Format</dt><dd>…</dd></div><div><dt>Led by</dt><dd>…</dd></div><div><dt>Category</dt><dd>…</dd></div></dl>
    <span class="feat-cta">Read the post <span aria-hidden="true">→</span></span>
  </a>
</div>
```

The button is a `<span>` inside the card link. That avoids nesting one link inside another; the whole card is the single link.

---

## 6. Interactivity (all CSS, no JavaScript)

| Behavior | Mechanism |
|---|---|
| Whole card clickable | one `<a>` wrapping the card |
| Hover | scrim eases to 92% opacity (photo brightens slightly), button fills clay, arrow nudges 3px |
| Focus | `:focus-visible` 2px accent ring on the card |
| Reduced motion | transitions off |

**Filtering interaction:** the card sits in the hero, **outside** the `:target` filter root. It stays visible whichever category chip is active. That's intended, since it's a site-level feature, not a catalogue item. Keep the featured item listed in the catalogue as well.

---

## 7. Responsive behavior

**Desktop (above 960px):** two columns. The card is at least 520px tall, bottom-aligned with the lede.

**Tablet (960px and below):**
- the hero stacks: headline and lede, then the card at full width (40px gap)
- the card's minimum height becomes 460px
- at 860px and below, gutters shrink to 28px

**Phone (375px, 560px and below):**
- card minimum height 420px, padding `26/20/24px`
- the details grid goes to 2 columns: Format + Led by on the first row, Category on the second
- the title shrinks to 30px
- the 3-line clamp still applies

On a phone the card lands about one screen down, below the intro and above search and filters. It is visible without dominating the page.

---

## 8. Content slots

Each featured item needs:

| Slot | Example | Notes |
|---|---|---|
| `href` | `/resources/delighting-in-the-company-of-god` | the item's own page, or an external URL for link-type items |
| Type label | Read on site | derive from the item type: `Download · PDF` / `External link` / `Read on site` |
| Title | Delighting in the Company of God | keep to 2 lines or fewer at desktop (about 40 characters is ideal) |
| Description | A six-week training experience … | **clamped to 3 lines**. Write a short version for the featured spot so nothing gets cut, for example: *"A six-week training led by Larry Trotter on practices for enjoying the company of God."* |
| Details ×3 | Format · Six weeks / Led by · Larry Trotter / Category · Discipleship | **I made up the Format and Led by values from the description; confirm them.** Show exactly three details, or hide the row. |
| Button label | Read the post | derive from type: `Download PDF` / `Visit site ↗` / `Read the post` |

**Data model:** add `featured: true` (and an optional `featuredDescription`) to one item in the resources collection. Render the card from that item at build time. If no item is featured, don't render the card, and the hero falls back to the single column.

---

## 9. Assets

| Asset | Use | Notes |
|---|---|---|
| `assets/resources-landscape.jpg` | card background, `center 62%/cover` | Supplied (Unsplash, Marlon Reyes): forested ridges, a hazy valley and a cloudy sky, in portrait orientation. Crop to about 1200×1400 and ship as WebP. The portrait framing suits the tall card well. **Confirm the Unsplash licence** (free commercial use). |

**Fonts:** Inter Tight, JetBrains Mono, Newsreader 400 (all already loaded site-wide).

---

## 10. Build checklist for Claude Code (Astro)

1. In the existing Resources page, wrap the hero's eyebrow, h1 and lede in `.hero-grid > div`, and add the `<a class="feat">` as the second column. Copy the CSS from the `/* NEW */` block of `featured-resource-photo.html`.
2. **Photo scrim:** keep it as the single documented literal value. Everything else should use tokens via `data-theme="dim"`.
3. Render the card from the collection item flagged `featured: true`, and use `featuredDescription` when present.
4. Don't nest links: the button is a `<span>`.
5. **The filter bar fix from the updated List View package must be in place.** The margin must be `-48px` in CSS and `-28px` at 860px and below, never inline. Otherwise the page scrolls sideways on mobile.
6. Ship no JavaScript.
7. QA at 1440, 1024, 768 and 375 against `featured-resource-photo.html`. Check that:
   - the description never shows more than 3 lines
   - the text stays on the dense part of the scrim
   - the button stays a pill, not stretched full width
