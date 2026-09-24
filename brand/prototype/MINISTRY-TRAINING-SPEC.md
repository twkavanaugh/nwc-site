# Design package — Ministry Training (`/ministry-training`)

This is the build-ready spec for the **North Wake Church "Ministry Training" page** (Mission group), for the live **static Astro** site.

The source of truth is **`ministry-training.html`** in this folder. It runs standalone, uses production markup (no React, tweaks, or routing), and contains **zero JavaScript**.

The church-supplied copy is used word for word, with light list formatting. §8 maps every string.

---

## 1. What the page is

This page explains North Wake's three training pathways. They are presented as a progression **from general to specific**, as the copy describes: personal ministry for every follower, then vocational tracks (elder preparation and missionary sending).

The page has five parts:

1. **Hero (F · Warm Band):** eyebrow, headline, lede, and a full-height photo on the right.
2. **Our approach + pathway strip:**
   - A serif h2, "From general *to specific.*", beside the privilege statement and the approach sentence.
   - Below it, a **three-cell strip** (01 → 02 → 03) that works as in-page navigation to each pathway.
3. **01 · Personal Ministry Pathway** (on `--bg`)
4. **02 · Elder Preparation Pathway** (warm `--bg-2` band)
5. **03 · Missionary Sending Pathway** (dark inverse band)

**Pathway layout (the core component):** all three pathway sections share one layout.
- **Left column, sticky while you scroll:**
  - a large numeral
  - "Pathway" eyebrow
  - the pathway name
  - a small facts list (Length, For, Credit, Toward, Process, To)
- **Right column:** the full copy, broken up by one visual device per pathway:
  - Personal: a numbered **question list** in serif, plus a **SEBTS credit badge**.
  - Elder: a **Prepare · Assess · Deploy** verb strip, and a closing serif line.
  - Missionary: three numbered **value cards**, and a closing serif line.

**Why the backgrounds step light → warm → dark:** each pathway gets its own clearly separated section, and the page visibly gets "deeper" as the training gets more specific. This mirrors the copy's general-to-specific idea.

**Hero:** F · Warm Band, the same as Church Planting (also in the Mission group). The h1 is set in `.display-m` because the headline is a long phrase.

**Newsreader** is used for:
- the approach h2
- the privilege statement
- the five questions
- the two closing lines

These are the page's reflective, devotional moments. Everything structural is set in sans.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* inverse set — Missionary Sending band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay, about 7.0:1 on charcoal */
}
```

**Dark band:** `<section data-theme="dim">` is built from tokens only.
- Numeral and italics are light clay.
- Value cards use `--bg-2`, which resolves to `#221f1a` (slightly lifted charcoal) in the dark theme.
- Text is cream.

**No raw colors and no scrims** anywhere on this page.

| Token | Role |
|---|---|
| `--bg` | page, Personal section, Prepare/Assess/Deploy cells, first strip cell, dark band (inverse) |
| `--bg-2` | hero band, Elder band, strip cells 2–3, value cards (inverse) |
| `--ink` | headings, 2px approach rule, serif text, badge text |
| `--ink-2` | lede and body copy |
| `--ink-3` | eyebrows, mono labels, strip sub-labels |
| `--accent` | numerals, hero accent phrase, serif italics, question and value numbers, strip arrows, eyebrow dots, strip title hover |

**Colors with two jobs:** strip cell 1 is `--bg` and cells 2–3 are `--bg-2`. That shading is deliberate: it previews the "general → specific" steps.

---

## 3. Typography

**Fonts:** Inter Tight (400/500/600/700), JetBrains Mono (400), Newsreader (400 + italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | sans `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 |
| Approach h2 | **serif** `.serif-h` | `clamp(40px,5vw,72px)` | 1.04 | 400 (+ italic) |
| Serif statements / closers | **serif** `.serif-p` | `clamp(22px,2.2vw,30px)` | 1.4 | 400 (+ italic) |
| Questions | **serif** | `clamp(19px,1.8vw,23px)` | 1.35 | 400 |
| Pathway numeral | sans | `clamp(56px,6vw,88px)` | 0.9 | **700** |
| Pathway h2 | sans `.display-s` | `clamp(28px,3.4vw,48px)` | 1.05 | **700** |
| Pathway copy | sans `.tr-copy` | 18px (17px at ≤720) | 1.65 | 400 |
| Approach body | sans | 19px | 1.6 | 400 |
| Meta value | sans | 17px | 1.4 | 500 |
| Strip title | `.title` | 22px | — | 600 |
| Verbs (Prepare…) | sans | 22px | — | 600 |
| Value card | sans | 19px | 1.3 | 600 |
| Badge text | sans | 17px | — | 400 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Eyebrow / mono | 12px, uppercase | — | — | 600 / 400 |

**Accessibility:**
- All readable content is 16px or larger.
- Numerals are `aria-hidden`; the h2 carries the name.
- The small mono numbers next to questions and values are decorative. The list semantics (`ol`) carry the order.

---

## 4. Spacing, borders, radius, primitives

**Spacing values used:** 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 32, 40, 56, 64, 72, 88, 96 px.

**Section rhythm:**
- Sections are `96px 0` (`72px` at ≤720px).
- The hero has `padding:0`. Its text column uses 88/64/88px padding plus the gutter-aware left edge `max(40px, calc((100vw - 1320px)/2 + 40px))`.
- The Personal section has `padding-top:0`. A `--line-strong` top rule plus 72px of padding separates it from the approach.

**Borders:**
- 1px hairlines everywhere.
- A 2px `--ink` rule above the approach statement.
- No shadows.

**Radius:** square corners throughout. The eyebrow dot is round. There are no buttons on this page.

**Hairline grids** (strip, verbs, values): `gap:1px` over a `--line` background, with filled cells.

**Sticky sidebar:** `.tr-side{position:sticky; top:120px}` keeps each pathway's title and facts in view while its copy scrolls (desktop only).

**Primitives reused:** `.wrap`, `.eyebrow` + `.dot`, `.display-m/-s`, `.title`, `.lede`, `.body`, `.mono`, `.ph`, and the shared `.serif-h` / `.serif-p` helpers (also used on LILY and Women's). Page-specific classes use the `.tr-` prefix.

---

## 5. Layout, section by section

**1 · Hero:**
- Grid `minmax(0,1.15fr) minmax(0,1fr)` with `align-items:stretch`.
- Text column: eyebrow → 32px → h1 (15ch, with "minister to others." in accent) → 28px → lede.
- Photo column: `min-height:520px`, flush against the band's edges.

**2 · Approach:**
- Grid `1fr / 1.5fr`, gap 72, top-aligned, with 56px below.
- Left: eyebrow and serif h2 (11ch).
- Right: 2px rule → 28px → serif statement (42ch) → 22px → 19px body (52ch).
- **Strip:** `ol.tr-strip`, a 3-column hairline grid. Each cell is a full-bleed anchor (28/28/30px padding) containing:
  - a top row: mono number on the left, arrow on the right (→ → ↓)
  - the title
  - an ink-3 sub-label

**3 · Pathway sections** (`.tr-pathway`, `scroll-margin-top:80px`):
- Grid `minmax(0,1fr) minmax(0,1.6fr)`, gap 72, top-aligned.
- **Left (`.tr-side`, sticky):**
  - numeral → 18px → eyebrow → 14px → h2 (12ch, weight 700)
  - then 28px → a meta `dl` (96px label column; each row has 14px vertical padding and a hairline)
- **Right:** `.tr-copy` paragraphs (62ch, 22px apart), plus one device per pathway:
  - **Personal:** `ol.tr-questions`, rows with a 40px number column, serif question, and hairlines. Below the copy, the `.tr-badge` (outlined inline box: "SEBTS" mono + sentence).
  - **Elder:** `.tr-verbs`, a flex hairline row of three 22px cells. Closes with a serif line ("sobriety and patience." in italic accent).
  - **Missionary:** `ol.tr-values`, a 3-column hairline grid of `--bg-2` cards (number + 19px value). Closes with a serif line ("glory of Christ." in italic accent).

---

## 6. Interactivity inventory (all CSS, no JavaScript)

| Behavior | Mechanism | JS? |
|---|---|---|
| Strip → jump to pathway | anchors `#personal-ministry`, `#elder-preparation`, `#missionary-sending` + `scroll-margin-top:80px` + CSS `scroll-behavior:smooth` | none |
| Sticky pathway sidebar | `position:sticky` | none |
| Strip hover | title color → accent | none |
| Focus | `:focus-visible` ring | none |
| Reduced motion | smooth scroll and transitions off | none |

> The React prototype scrolls with JS `scrollTo`. Production uses plain anchors, which also makes the pathway URLs shareable, e.g. `/ministry-training#elder-preparation`.

**No CTA or form.** The supplied copy names no application or contact route. See §8.

---

## 7. Responsive behavior

Breakpoints: **880 / 720 / 560**.

**Desktop (>880px):** as described in §5. Sidebars are sticky.

**Tablet (≤880px):**
- The hero stacks, with the photo on top at **4:3**.
- Approach stacks, with the h2 above the statement.
- The strip becomes **1 column**, and its arrows rotate to ↓ to show vertical flow.
- Pathways stack: the numeral, title and facts sit above the copy. **Sticky is turned off** (`position:static`), so the sidebar doesn't cover content.

**Phone (375px, ≤720px):**
- Page gutters are 22px and section padding is 72px.
- Personal's top padding is 56px.
- Value cards become 1 column.
- Pathway copy drops to 17px.

**≤560px:**
- The SEBTS badge stacks, with the label above the sentence.
- The Prepare/Assess/Deploy cells go full width and stack.
- Numerals scale down to 56px through `clamp()`.

---

## 8. Content slots

- **FACT:** keep these in shared data.
- **COPY:** church text, word for word.
- **LABEL:** added by design; needs approval.

| Slot | Text | Type |
|---|---|---|
| Hero eyebrow | Mission · Ministry training | LABEL |
| Hero h1 | Training followers of Jesus to / *accent:* minister to others. | COPY excerpt (from sentence 1) |
| Hero lede | To that end North Wake Church has multiple pathways for preparing others to make disciples wherever they are or wherever they might go. | COPY |
| Approach eyebrow / h2 | Our approach / From general to specific. | LABEL (distilled from the approach sentence) |
| Approach statement | Training followers of Jesus to minister to others is one of the greatest privileges and responsibilities that God has given the church. | COPY |
| Approach body | Our approach is to move from general training in personal ministry to specific training in areas of vocational ministry. | COPY |
| Strip ×3 | titles + sub-labels (General · every follower of Jesus / Specific · ordained ministry / Specific · the ends of the earth) | LABEL |
| Pathway h2 ×3 | Personal Ministry Pathway / Elder Preparation Pathway / Missionary Sending Pathway | COPY |
| Meta · Personal | 9 months · All followers of Jesus · Available for SEBTS students | **FACT** (from copy) |
| Meta · Elder | 9-month cohort · Men seeking ordained ministry · Church planting, pastoral ministry, or other ordained assignments | **FACT** (from copy) |
| Meta · Missionary | Men, women, and families · Assessment, coaching, and support · The ends of the earth | **FACT** (from copy) |
| Personal copy | paragraph 1 (through "Including;") + questions ×5 + "We seek to address…" + credit sentence | COPY; the questions are formatted as a list |
| Elder copy | "This pathway offers…" + Prepare/Assess/Deploy strip + "These objectives…" + closing serif line | COPY; the verbs repeat words from the copy |
| Missionary copy | "Sending men, women…" + "We have learned… candidates:" + values ×3 + "All of these values…" + closing serif line | COPY. One sentence is split around the value list: the lead-in ends with a colon and the values are sentence-cased. |

**Wording issues (left as supplied, flagged):**
1. "that to which all followers of Jesus have been called **into**": probably "called **to**".
2. "when it **come** to": should be "**comes**".
3. "over a **9 months** period": should be "9-**month**".
4. "Including;": uses a semicolon. A colon reads better before the list.
5. "This 9 month elder trainee cohort": should be "9-month". The meta list already reads "9-month cohort".
6. "through  a deeply" in the source had a double space; it's normalized.

**Still needed:**
- **A next step.** There's no contact, application, or interest link for any pathway. Suggested: one closing band, or a per-pathway link (e.g. "Ask about the Personal Ministry Pathway →" as a `mailto:`), once an owner or email exists.
- **SEBTS:** consider spelling it out on first use (Southeastern Baptist Theological Seminary) for readers without church background, or link to it.
- Church approval of the LABEL rows.

---

## 9. Assets and photo slots

| # | Slot | Aspect | Shot description |
|---|---|---|---|
| 1 | Hero · mentorship | fills the band (about 4:5 on desktop, `min-height:520`); **4:3** when stacked | A mentor and trainee over an open Bible and notebook at a table, mid-conversation. Warm, focused, candid. It could also be a small cohort around a table. |

This is the only photo slot. Replace `.ph` with `<img>` (`loading="eager"`, `object-fit:cover`, width/height set), 2000px wide or more, WebP/AVIF, via `astro:assets`.

**Optional later:** a small photo per pathway (for example, a sending commissioning for Missionary). The right column can take a 3:2 image above the copy.

**Fonts:** Inter Tight (including 700), JetBrains Mono, Newsreader 400 + italic.

**Icons:** none. The arrows are Unicode characters.

---

## 10. Build checklist for Claude Code (Astro)

1. Create `src/pages/ministry-training.astro` inside the existing layout.
   - Put the `.tr-*` CSS in a scoped `<style>`.
   - Promote `.serif-h` / `.serif-p` to global if they aren't already (LILY and Women's use them too).
   - Tokens and `[data-theme="dim"]` should already be global.
2. Keep the anchor IDs stable: `personal-ministry`, `elder-preparation`, `missionary-sending`. Other pages (Church Planting, Missions) can deep-link to them.
3. Model the pathways as data: `{ id, n, title, meta: [{label, value}], blocks: [...] }`. Render them through one `<PathwaySection>` component with a `tone` prop (`light | warm | dark`), where `dark` sets `data-theme="dim"`.
4. **Semantics:**
   - The strip is an `ol` of anchors.
   - Each pathway is a `section` with `aria-labelledby`.
   - Meta lists are `dl`.
   - Questions and values are `ol`.
   - Numerals are `aria-hidden`.
   - The page has one h1.
5. **Reusable components** (candidates to share with other pages):
   - `<WarmBandHero>`
   - `<SerifStatementSplit>`: the approach block, also used on Church Planting and LILY.
   - `<PathwayStrip>`: numbered anchor strip, reusable for any multi-track page.
   - `<PathwaySection>`: sticky sidebar + copy, with tone variants.
   - `<HairlineCells>`: the verbs and values grids.
6. Ship no JavaScript. Sticky positioning and smooth scrolling are pure CSS.
7. Resolve §8 before launch: the wording fixes, a next-step route, and SEBTS clarity.
8. QA at 1440, 1024, 768 and 375 against `ministry-training.html`. Check that:
   - the sticky sidebar never overlaps the next section's top rule
   - the strip anchors land below the sticky nav
   - the dark band's value cards stay readable
