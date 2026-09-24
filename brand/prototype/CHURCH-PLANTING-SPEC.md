# Design package — Church Planting (`/church-planting`)

This is the build-ready spec for the **North Wake Church "Church Planting" page** (under Mission), for the live **static Astro** site. The source of truth is **`church-planting.html`** in this folder. It is standalone, runnable, uses production markup (no React, tweaks or routing) and contains **zero JavaScript**.

**Copy:** the church's approved text is used **word for word**. §8 lists every string and marks which are FACTS, which are COPY and which are **section labels added by design**.

---

## 1. What the page is

A page that tells the heritage story and names the church's planting work. It has five sections, in this order:

1. **Hero (F · Warm Band):** eyebrow, headline, and a one-line lede ("This is largely due to two realities.") on `--bg-2`, with a full-height photo on the right.
2. **Two realities + bridge:**
   - Two columns, **01 Our heritage** and **02 Our conviction**, each topped by a 2px ink rule and a large bold clay numeral.
   - Below them, a **dark bridge band** carrying "So based on our heritage and conviction, …" with the opening clause in on-dark clay.
3. **The churches:** a two-panel hairline grid on `--bg-2`, one panel for **Self Sustaining Churches** and one for **Church Planting Partners**. Each panel has a definition line and a list of three churches (name on the left, city on the right). A note paragraph follows the grid.
4. **Kingdom work:** the conviction sentence as a centered **Newsreader** serif statement.
5. **How we engage:** the closing paragraph beside a six-cell grid. Three cells are "What we do" (Celebrating, Supporting, Developing) and three are "How we do it" (Diligent prayer, Generous investment, Ongoing development).

**Hero decision:** F · Warm Band, for consistency with Kids, Come Visit and the other interior pages. The h1 uses `.display-m` rather than `.display-l`, because the headline is a full sentence of about 80 characters. At `.display-l` it would run 5–6 lines beside the photo.

**Newsreader** is used once, for the Kingdom work statement, because it is the page's single statement of conviction. That matches how the site already uses the serif for devotional moments. It appears nowhere else on the page.

**The page has no calls to action**, because the approved copy names no next step. §8 flags this.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* inverse set — used on the bridge band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay */
}
```

**How the dark band works:** the bridge band carries `data-theme="dim"` and is styled only with `var(--bg)`, `var(--ink)` and `var(--accent)`. Inside the band those tokens resolve to charcoal `#1a1814`, cream `#f4efe5` and light clay `#d49271`. So there are **no raw colors in the component**, and the accent text passes contrast on dark: `#d49271` on `#1a1814` is about 7.0:1. The default `#8a4d2e` on `#1a1814` is about 2.6:1 and would fail.

> The React prototype (`page-planting.jsx`) hard-codes `#d49271` and `var(--ink)` on this band. The production file replaces that with the `data-theme="dim"` pattern described above. Build from the production file.

Where each token is used on this page:

| Token | Used for |
|---|---|
| `--bg` | page background, church-list panels, "What we do" cells |
| `--bg-2` | hero band, churches band, "How we do it" cells |
| `--bg-3` | placeholder stripe only |
| `--ink` | headings, church names, **2px reality rules** |
| `--ink-2` | body and lede text |
| `--ink-3` | eyebrows, mono labels, church city/state (5.2:1) |
| `--ink-4` | not used for text |
| `--line` | hairline grids, church-row dividers |
| `--line-strong` | top rule of each church list, top rule of the How we engage section |
| `--accent` | numerals 01/02, headline accent phrase, eyebrow dots, list kickers, "What we do" labels, serif italic phrase |

**Tokens with two roles:** `--ink` is both the text color and the 2px rule above each reality. `--accent` is text everywhere it appears, including the 56–88px numerals, which are decorative (`aria-hidden`).

**Scrims:** none. No text sits on a photo anywhere on the page.

---

## 3. Typography

**Inter Tight** (400/500/600/700), **JetBrains Mono** (400) and **Newsreader** (400 and 400 italic).

| Element | Font | Size | Line-height | Weight | Tracking |
|---|---|---|---|---|---|
| Hero h1 | sans `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 | −0.025em |
| Reality numerals | sans | `clamp(56px,6vw,88px)` | 0.9 | **700** | −0.04em |
| Reality h2 | sans `.display-s` | `clamp(28px,3.4vw,48px)` | 1.05 | **700** | −0.02em |
| Reality body | sans | 18px (17px at ≤560) | 1.65 | 400 | — |
| Bridge statement | sans | `clamp(24px,2.4vw,34px)` | 1.3 | 500 | −0.018em |
| Churches h2 | sans `.display-m` | as above | 1.02 | 600 | −0.025em |
| List title h3 | sans `.display-s` | as above | 1.05 | 600 | −0.02em |
| List definition | sans | 17px | 1.6 | 400 | — |
| Church name | sans | 20px | 1.3 | 600 | −0.012em |
| Church city | sans | 16px | 1.6 | 400 | — |
| Churches note | sans | 18px (17px at ≤560) | 1.65 | 400 | — |
| Kingdom statement | **serif** | `clamp(28px,3.4vw,46px)` | 1.25 | 400 (+ italic) | −0.015em |
| Lede | sans `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 | −0.005em |
| Engage cell title | sans | 20px | 1.25 | 600 | −0.012em |
| Engage cell body | sans `.body` | **16px** | 1.6 | 400 | — |
| Eyebrow | sans | 12px, uppercase | — | 600 | 0.18em |
| Mono label | mono | 12px, uppercase | — | 400 | 0.04–0.14em |

**16px minimum:** every piece of readable content is 16px or larger at every viewport.

The mono text below 16px never carries meaning alone:
- The list kickers ("Self sustaining") repeat the h3 directly beneath them.
- "What we do / How we do it" is backed up by the cell titles, and by the full paragraph beside the grid.
- The bridge label ("Heritage + conviction") is decorative framing for the statement.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (deduplicated): 4, 6, 10, 12, 14, 18, 20, 22, 24, 28, 32, 36, 40, 44, 56, 60, 64, 72, 88, 96 px.

**Section rhythm:**
- Sections use `96px 0` (`72px` at ≤720).
- The hero has `padding: 0`. Its text column uses `88/64/88px` with the gutter-aware left padding `max(40px, calc((100vw - 1320px)/2 + 40px))`.
- The How we engage section has `padding-top: 0`, because the hairline above it acts as the divider.

**Borders:**
- 1px `--line` and `--line-strong` hairlines throughout.
- The single heavier rule is the **2px `--ink` top border** on each reality column. It is deliberate: those two headings are the page's strongest structural marks.
- There are **no shadows** anywhere.

**Radius:** square corners everywhere. There are no buttons on this page. The eyebrow dot is round (`50%`).

**Hairline grids:** the church lists and the engage grid use `gap:1px` over a `--line` background with filled cells. This collapses cleanly at any column count.

**Primitives reused:** `.wrap`, `.wrap-narrow`, `.eyebrow` + `.dot`, `.display-m`, `.display-s`, `.lede`, `.body`, `.mono`, `.section-head` (+ `.right`) and `.ph`. Page-specific classes use the `.cp-` prefix.

---

## 5. Layout, section by section

**1 · Hero (`.cp-hero`)**
- Grid: `minmax(0,1.15fr) minmax(0,1fr)` with `align-items: stretch`.
- Text column: eyebrow (32px gap) → h1 (`max-width:16ch`, "and will always be." in accent) → lede (28px gap).
- Photo: `min-height:520px`, flush to the edges.

**2 · Two realities (`.cp-two`)**
- Two columns with a 64px gap.
- Each `article`: 2px ink top rule → 28px → numeral → 20px → h2 → 20px → body (`max-width:50ch`).
- **Bridge band (`.cp-bridge`, `data-theme="dim"`):**
  - 88px below the columns.
  - Grid: `minmax(0,1fr) minmax(0,3fr)` with a 64px gap. Padding `56/56/60px`, running the full `.wrap` width.
  - Mono label on the left, 10px top offset to align with the first line of the statement.
  - Statement on the right, with the opening clause in `--accent`.

**3 · The churches (`.cp-churches`)**
- Full-width `--bg-2` band with top and bottom hairlines.
- `.section-head`: eyebrow + h2 (`max-width:16ch`) on the left, the intro sentence on the right.
- `.cp-lists`: two-column hairline grid. Each `.cp-list` panel is a flex column with `40/36/36px` padding:
  - kicker → h3 → definition (40ch)
  - then a `ul` pinned to the bottom (`margin-top:auto`), so both lists align even if the definitions wrap to different heights.
- Each church row: grid `minmax(0,1fr) auto`, name and city baseline-aligned, 20px vertical padding, hairline below.
- Note paragraph 40px below the grid (`max-width:64ch`).

**4 · Kingdom work (`.cp-kingdom`)**
- `.wrap-narrow` (920px), centered.
- Eyebrow, then the serif statement with `text-wrap:balance`. The closing phrase is in italic accent.

**5 · How we engage (`.cp-engage`)**
- 1px `--line-strong` top rule with 56px padding above the content.
- Grid: `minmax(0,1fr) minmax(0,1.6fr)` with a 64px gap.
- Left column: eyebrow + lede paragraph (40ch).
- Right column: `ul.cp-engage-grid`, three columns in a hairline grid:
  - Row 1 is "What we do" on `--bg`, with accent labels.
  - Row 2 is "How we do it" on `--bg-2`, with ink-3 labels.
  - Cells: `28/24px` padding, `min-height:140px`.

---

## 6. Interactivity inventory

| Behavior | Mechanism | JS? |
|---|---|---|
| — | The page is entirely static: no accordions, hovers, links or buttons. | none |

There are **no interactive elements**. Section 8 covers the missing next-step link and the fact that the church names are plain text for now.

---

## 7. Responsive behavior

Breakpoints are **1240 / 880 / 720 / 560**.

**Desktop (above 1240px):**
- Everything as laid out in §5.

**1240px and below:**
- How we engage stacks, with the paragraph above and the grid below at full width. The grid stays at **three columns**, so cells stay wide enough for "Ongoing development" at 20px.

**Tablet (880px and below):**
- **Hero** stacks, photo first, at **4:3**, with `56/40/64px` text padding.
- **Two realities** become one column with a 56px gap between the two articles.
- **Bridge band** stacks, with the label above the statement. Padding becomes `40/28/44px`, with 72px above.
- **Church lists** become one column.
- **Engage grid** becomes two columns.

**Phone, 375px (720px and below):**
- Gutter 22px, section padding 72px. `.section-head` stacks. List panel padding becomes `32/22/28px`.

**560px and below:**
- **Engage grid:** one column; `min-height` is removed.
- **Church rows:** stack with the name above and the city below, left-aligned, 4px gap. This keeps "Iglesia Biblica Sublime Gracia" from being crushed beside its city.
- Reality and note body text: 17px.
- Numerals scale down to 56px and the bridge statement to 24px through `clamp()`.

---

## 8. Content slots

- **FACT:** verifiable data. Keep it in structured data (a content collection) so it can be updated in one place.
- **COPY:** approved text, used word for word.
- **LABEL:** a short heading added by the design; the church should approve it.

| Slot | Text | Type |
|---|---|---|
| Hero eyebrow | Mission · Church planting | LABEL |
| Hero h1 | Church planting is at the very center of who North Wake is / *accent:* and will always be. | COPY |
| Hero lede | This is largely due to two realities. | COPY |
| Reality 01 heading | Our heritage | LABEL |
| Reality 01 body | First, we as a church family were planted in Wake Forest in the **early 90’s** by another older and more established church. Our very history and heritage depends on the courage of **Providence Church (Raleigh NC)** … | COPY with FACTS inside |
| Reality 02 heading | Our conviction | LABEL |
| Reality 02 body | Second, we believe this is the burden and responsibility of vibrant churches; to expand Christ’s kingdom into place where God is working. | COPY |
| Bridge label | Heritage + conviction | LABEL |
| Bridge statement | So based on our heritage and conviction, we likewise have planted several churches … making disciples. | COPY |
| Churches eyebrow / h2 | The churches / Churches we’ve planted and partner with. | LABEL |
| Churches intro | We could identify those remaining churches into a couple of categories. | COPY |
| List A title + definition | Self Sustaining Churches / Those who have grown to no longer require our support and care. | COPY |
| List A churches | Covenant Life Church — Tampa, Florida · Restoration Church — Washington D.C. · Exchange Church — Rolesville, North Carolina | **FACT** |
| List B title + definition | Church Planting Partners / Those whom we continue to partner with to encourage their daily flourishing. | COPY |
| List B churches | Mosaic Church — Provo, Utah · Kings Village Church — Clemmons, North Carolina · Iglesia Biblica Sublime Gracia — Washington D.C. | **FACT** |
| Churches note | Some of these works we have planted directly out of our fellowship, others … process. | COPY |
| Kingdom eyebrow | Kingdom work | LABEL |
| Kingdom statement | We believe that church planting is kingdom work, … *accent:* Christ’s mission to reach all people everywhere. | COPY |
| Engage eyebrow | How we engage | LABEL |
| Engage paragraph | We continue to engage in church planting through … on going development of the next generation of church planters. | COPY |
| Engage cells ×6 | Celebrating / Supporting / Developing / Diligent prayer / Generous investment / Ongoing development, with short tails | COPY excerpts (each phrase repeats text from the paragraph); the cell labels "What we do" / "How we do it" are LABELs |

**Three wording issues, left as supplied and flagged for approval:**
1. "into **place** where God is working": probably should be "places".
2. "**on going** development" in the paragraph: probably should be "ongoing". The engage cell already reads "Ongoing".
3. "early **90’s**": the usual form is "early ’90s".

**Other decisions for the church:**
- **No call to action.** Consider a closing link such as "Support church planting" (giving) or "Talk with us about planting" (contact), if a destination exists.
- **Church names are not linked.** If the partner churches have websites, turn each name into an external link (`target="_blank" rel="noopener"`, with ↗). The row layout already has room for it.
- **Data model:** in Astro, store the churches as an array such as `{ name, city, state, category: 'self-sustaining' | 'partner', url? }`. That way, when a partner becomes self-sustaining, it is a one-line data change.

---

## 9. Assets and photo slots

| # | Slot | Aspect | Shot description |
|---|---|---|---|
| 1 | Hero · church plant | fills the band (about 4:5 at desktop, `min-height:520`), **4:3** when stacked | A church plant on launch or an early Sunday: a small congregation gathered in a rented or new space, or a planter with the North Wake sending team. If no original photo exists, use a recent photo of a partner church (with permission). |

This is the only photo slot. When the photo arrives, replace the `.ph` block with an `<img>` (`loading="eager"`, `object-fit:cover`, width and height set). Export it at 2000px or wider, as WebP or AVIF with a JPG fallback, via `astro:assets`.

**Fonts:** Inter Tight (400/500/600/**700**; weight 700 is needed for the reality numerals and headings), JetBrains Mono (400) and Newsreader (400 + italic 400). Self-host them if the live site already does.

**Icons and logos:** none.

---

## 10. Build checklist for Claude Code (Astro)

1. Create `src/pages/church-planting.astro` inside the existing site layout. Match the route and slug to the live site's Mission menu. Put the `.cp-*` CSS in a scoped `<style>`. The shared primitives and both token sets (`:root` and `[data-theme="dim"]`) should already be global; add `[data-theme="dim"]` globally if it is missing.
2. Keep the **bridge band as `data-theme="dim"` plus tokens**. Do not hard-code `#1a1814`, `#f4efe5` or `#d49271`.
3. Store the churches as data (see §8) and render both lists from it, filtered by category.
4. Use correct HTML elements: `article` for each reality, `ul`/`li` for the church lists and engage cells, one h1, h2s for section titles, h3s for list titles. Numerals get `aria-hidden="true"`, because the headings carry the meaning.
5. **Reusable components** (candidates to share with other pages):
   - `<WarmBandHero>`: already specified in the Warm Band kit.
   - `<NumberedPair>`: the two realities. Fits any page with "two convictions", such as Feed.
   - `<InverseStatement>`: the dark bridge band. Useful for any emphasis sentence on any page.
   - `<CategorizedList>`: the two-panel name/place lists. Could serve Missions partners, Local Outreach partners and Leadership.
   - `<SerifStatement>`: the centered Newsreader conviction. Already used in similar form on Mission/Vision and Who Is Jesus.
   - `<HairlineCellGrid>`: the engage grid. Same technique as the Come Visit facts strip.
6. Ship no JavaScript: no client directives and no islands.
7. Get the three wording issues and the call-to-action question (§8) resolved before launch.
8. QA at 1440, 1024, 768 and 375 against `church-planting.html`. Check that "Ongoing development" and "Iglesia Biblica Sublime Gracia" never overflow their cells.
