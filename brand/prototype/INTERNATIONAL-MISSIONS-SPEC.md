# Design package — International Missions (`/international-missions`)

This is the build-ready spec for the **North Wake Church "International Missions" page** (Mission group), for the live **static Astro** site.

The source of truth is **`international-missions.html`** in this folder. It runs on its own, uses the production markup (no React, tweaks or routing), and contains **zero JavaScript**. The church's copy is used word for word; §8 lists every string.

---

## 1. What the page is

This page tells the story of North Wake's sending heart: the eternal hope of Revelation 7:9, sending as discipleship, four concrete practices, the Entermission conference, and the Break Bread preparation program. It cross-links to **Church Planting** and **Ministry Training**, so the three Mission pages work together.

The page has six sections, with a deliberate light/dark rhythm:

| # | Section | Ground |
|---|---|---|
| 1 | Hero (F · Warm Band): eyebrow, h1, lede, full-height photo | warm `--bg-2` |
| 2 | Our hope · Revelation 7:9: centered serif statement over the **flags photo** | **dark photo band** |
| 3 | Going in love, near and far: serif h2, two paragraphs, "Our model" note | light `--bg` |
| 4 | Showing God's heart for the nations: four cards (Pray, Give, Focus, Equip) with bold figures | light `--bg` (a hairline separates it from section 3) |
| 5 | Entermission: large serif wordmark, lede, and a list of three focus areas | **dark inverse band** |
| 6 | The Break Bread Program: h2, body, and a link to the Missionary Sending Pathway | light `--bg` |

**Why the flags photo sits at Revelation 7:9:** the verse speaks of "peoples from every nation, tribe, and language," and a crowd of national flags illustrates that literally. The dark photo band also separates cleanly from the warm hero. That fixes the earlier problem where two warm bands sat next to each other with a cream stripe between them.

**Hero:** F · Warm Band, the same as Church Planting and Ministry Training.

**Newsreader** is used for:
- the Revelation 7:9 statement
- the "Going in love, near and far" h2
- the "Entermission" wordmark

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* inverse set — Rev 7:9 text + Entermission band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay, about 7.0:1 on charcoal */
}
```

**Photo scrim. This is the one literal-value exception on the page.**

```css
radial-gradient(ellipse 70% 80% at 50% 50%,
  rgba(26,24,20,0.86) 0%, rgba(26,24,20,0.72) 55%, rgba(26,24,20,0.55) 100%)
```

- `rgba(26,24,20,…)` is `--ink` (#1a1814) with alpha applied.
- It's **radial** and darkest in the center, behind the statement, so the colorful flags show most at the edges.
- The flags image is bright and busy, which is why the scrim is heavier here (0.86 center) than on the Women's and LILY bands.

**Text on the photo:** the inner `.wrap-narrow` carries `data-theme="dim"`. Its text is cream `--ink`, the eyebrow is `--ink-2`, and the italic accent is light clay `#d49271`.

**Entermission band:** a full `<section data-theme="dim">`, built from tokens only.

| Token | Role |
|---|---|
| `--bg` | page, Near/Ways/Bread sections, way cards, Entermission band (inverse) |
| `--bg-2` | hero band |
| `--ink` | headings, 2px rules, note text, Near body, figures |
| `--ink-2` | lede and body copy |
| `--ink-3` | eyebrows and mono labels |
| `--accent` | h1 accent, serif italics, way labels, list numbers, cross-links, eyebrow dots |

---

## 3. Typography

Fonts: **Inter Tight** (400/500/600/700), **JetBrains Mono** (400) and **Newsreader** (400 + italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | sans `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 |
| Rev 7:9 statement | **serif** | `clamp(30px,3.8vw,52px)` | 1.22 | 400 (+ italic) |
| Near h2 | **serif** `.serif-h` | `clamp(40px,5vw,72px)` | 1.04 | 400 (+ italic) |
| Near body | sans | 19px | 1.6 | 400 |
| Ways h2 | sans `.display-m` | as scale | 1.02 | 600 |
| Way figure | sans | `clamp(28px,2.8vw,40px)` | 1.0 | **700** |
| Way body | `.body` | **16px** | 1.6 | 400 |
| Entermission wordmark | **serif** | `clamp(56px,7vw,112px)` | 0.98 | 400 (+ italic) |
| Entermission list item | sans | 20px | — | 500 |
| Break Bread h2 | sans `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 |
| Break Bread body | sans | 18px | 1.6 | 400 |
| Note body | sans | 17px | 1.6 | 400 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Cross-link | sans | 15px | — | 400 |
| Button | `.btn` | 14px | — | 500 |
| Eyebrow / mono | 12px, uppercase | — | — | 600 / 400 |

**Accessibility:**
- All readable content is 16px or larger.
- The 15px "Church Planting →" link is a supporting link next to a 20px item.
- The 14px button follows the site-wide UI size.
- The Rev 7:9 statement uses `text-wrap:balance`.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (deduplicated): 8, 12, 14, 18, 20, 22, 24, 28, 32, 36, 40, 56, 64, 72, 88, 96, 112, 140 px.

**Section rhythm:**
- Default: `96px 0` (`72px` at ≤720).
- **Rev 7:9 band:** `140px` (`112px` at ≤880, `88px` at ≤720). It's the page's hero moment after the hero.
- **Ways:** `padding-top:0`, with a `--line-strong` rule and `72px` of space above the grid, so it separates from Near without changing background.

**Borders:**
- 1px hairlines.
- 2px `--ink` rules above the Near and Break Bread body copy.
- A `--line-strong` outlined note box.
- No shadows.

**Radius:** square corners throughout, a pill button, and a round eyebrow dot.

**Hairline grid:** the ways grid uses `gap:1px` over `--line`.

**Primitives reused:** `.wrap`, `.wrap-narrow`, `.eyebrow` + `.dot`, `.display-l/-m`, `.lede`, `.body`, `.mono`, `.btn-ghost`, `.section-head`, `.ph`, `.serif-h`. Page-specific classes use the `.im-` prefix.

---

## 5. Layout, section by section

**1 · Hero**
- Grid: `1.15fr/1fr`, `align-items:stretch`.
- Text column: eyebrow → 32px → h1 (15ch, "to the ends of the earth." in accent) → 28px → lede.
- Photo: `min-height:520px`.

**2 · Our hope**
- Full-bleed section with `background:url(flags) center 35%/cover`, an absolutely positioned scrim, and a relative inner `.wrap-narrow[data-theme=dim]`.
- Content is centered: eyebrow → 32px → `<blockquote>` in serif, with the closing clause in italic accent.

**3 · Near and far**
- Grid: `1fr/1.5fr`, gap 72.
- Left: eyebrow and serif h2 (11ch).
- Right:
  - 2px rule → 28px
  - two 19px ink paragraphs (58ch), 22px apart
  - 28px → `.im-note`: an outlined grid with "Our model" in mono on the left and a 17px sentence on the right.

**4 · Four ways**
- `--line-strong` top rule, then 72px of space.
- `.section-head` with the h2 (15ch) and a right-hand intro.
- `ul.im-ways`: a 4-column hairline grid. Each card is a flex column with `32/28/36px` padding: accent mono label → 700-weight figure → body.

**5 · Entermission**
- Grid: `1.2fr/1fr`, gap 64, bottom-aligned.
- Left: eyebrow → serif wordmark "Enter*mission.*" → lede (48ch).
- Right: mono label ("Three consecutive Sundays · every year") → `ol` of three rows. Each row is a grid of `40px` number / item / optional link. Row 02 links to Church Planting.

**6 · Break Bread**
- Grid: `1.2fr/1fr`, gap 64, bottom-aligned.
- Left: eyebrow and h2 in `.display-l` (12ch, "Program." in accent).
- Right: 2px rule → two 18px paragraphs → ghost button linking to `/ministry-training#missionary-sending`.

---

## 6. Interactivity inventory (all CSS, no JavaScript)

| Behavior | Mechanism | JS? |
|---|---|---|
| Church Planting cross-link | `<a href="/church-planting">` | none |
| Missionary Sending cross-link | `<a href="/ministry-training#missionary-sending">` (anchor from the Training kit) | none |
| Hover / focus | ghost-button border, link color, `:focus-visible` ring | none |

There are **no forms** and no external links.

---

## 7. Responsive behavior

Breakpoints: **1080 / 880 / 720 / 560**.

**Desktop (above 1080px):** the layout described in §5.

**Tablet (≤1080 and ≤880)**
- **≤1080:** the ways grid becomes **2×2**.
- **≤880:**
  - The hero stacks, with the photo on top at 4:3.
  - Near, Entermission and Break Bread stack, with a 40px gap.
  - Rev 7:9 padding drops to 112px.

**Phone (375px; ≤720 and ≤560)**
- **≤720:**
  - 22px gutters; sections 72px.
  - Rev 7:9 padding 88px.
  - `.section-head` stacks.
  - Ways top padding 56px.
- **≤560:**
  - **Ways:** one column.
  - **Note box:** stacks, with the label above the sentence.
  - **Entermission rows:** the number and item stay on one line, and the "Church Planting →" link moves under the item.
  - **Break Bread button:** full width, and allowed to wrap. Its label is long, so `white-space:normal` is set here only.
  - **Headings:** the Rev 7:9 statement shrinks to 30px and the Entermission wordmark to 56px (via `clamp()`).

**Flags photo crop:** at `center 35%` it keeps the upper flag field in view. On tall mobile bands, `cover` crops the sides. The central flags remain, and the scrim keeps the text readable.

---

## 8. Content slots

**Legend:**
- **FACT:** verifiable data; keep it in shared data.
- **COPY:** church text, used word for word.
- **LABEL:** added by the design; needs approval.

| Slot | Text | Type |
|---|---|---|
| Hero eyebrow | Mission · International missions | LABEL |
| Hero h1 | Proclaiming the love of Jesus / *accent:* to the ends of the earth. | LABEL (built from copy) |
| Hero lede | North Wake Church has a heartbeat to faithfully proclaim the love of Jesus Christ to the ends of the earth. | COPY |
| Hope eyebrow | Our hope · Revelation 7:9 | LABEL (from "Rev 7:9") |
| Hope statement | We eagerly hope and long for the day in heaven … every nation, tribe, and language. | COPY |
| Near eyebrow / h2 | Sending as discipleship / Going in love, near and far. | LABEL (from copy phrases) |
| Near ¶1–2 | Therefore, our mission statement … / And once sent, … God's love for all. | COPY |
| Note | Our model / This process of sending members … overseas service. | LABEL / COPY |
| Ways eyebrow / h2 / intro | Through our church ministries / Showing God's heart for the nations. / We seek to show God's heart for the nations through our church ministries. | LABEL / LABEL / COPY |
| Way labels | Pray · Give · Focus · Equip | LABEL |
| Way figures | Every Sunday · ~40 families · 3 Sundays · Break Bread | **FACT** (from copy) |
| Way bodies ×4 | the four copy sentences (Sunday prayer, giving, Entermission Sundays, Break Bread) | COPY |
| Entermission eyebrow | Annual missions conference | LABEL |
| Entermission wordmark | Enter*mission.* | COPY name, with LABEL styling (italic split) |
| Entermission lede | Entermission is the opportunity … and throughout the world. | COPY |
| Entermission list | Three consecutive Sundays · every year / Local engagement · Church plants around the USA · Throughout the world | FACT label + COPY excerpts |
| Break Bread eyebrow / h2 | Feeling led to serve overseas? / The Break Bread Program. | LABEL (from copy) |
| Break Bread body ×2 | For those that are feeling led … / This is a program intending … cross-cultural setting. | COPY |
| Button | See the Missionary Sending Pathway | LABEL |

**Copy notes:**
- **Equip / Break Bread duplication:** the "Equip" way card and the Break Bread section share one sentence ("For those that are feeling led…"). This is deliberate, because the card is a summary and the section is the destination. Change the card's line if the repetition bothers you.
- **"Far Flung Family":** the church's own term. It appears in the Pray card. Consider linking it later to a missionary update page or prayer guide, if one exists.
- **Revelation 7:9:** the page quotes the church's sentence *about* the verse, not the verse itself. If you want the verse, add the ESV text as a small line under the statement. It's roughly: *"After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages…"* Confirm the translation before adding it.
- **"Entermission" styling:** the italic split ("Enter" + *"mission."*) is a design choice, so confirm it with the missions team. If the conference has its own logo, use that instead.

**Still needed:**
1. **A contact for missions and for joining Break Bread.** Right now the only next step is the link to the Training page. A `mailto:` for a missions pastor would complete the page.
2. **Entermission dates:** optional, but a "Next Entermission: [month]" line in the list label would help visitors in season.
3. Church approval of the LABEL rows.

---

## 9. Assets and photo slots

| # | Asset | Use | Notes |
|---|---|---|---|
| 1 | `assets/missions-flags.jpg` | Rev 7:9 band background | **Supplied** (Unsplash, Vladislav Klapin): national flags on poles against a bright sky. Ship it as WebP, about 2400px wide. Confirm the Unsplash licence (free commercial use). **Sensitivity:** some flags are identifiable, so check none are politically sensitive for your missionaries' contexts. If any are, swap in an abstract or crowd image. |
| 2 | Hero · commissioning | fills the band (about 4:5 at desktop, `min-height:520`); **4:3** when stacked | **Placeholder.** The congregation laying hands on or praying over departing missionaries during a commissioning. Warm and joyful. **Security:** many Far Flung Family members serve in sensitive locations. Never show identifiable faces, names or locations of workers in restricted-access countries. Photograph from behind, or choose only workers cleared for public imagery. |

To add a photo, replace `.ph` with `<img>` via `astro:assets`: `loading="eager"`, `object-fit:cover`, with width and height set.

**Fonts:** Inter Tight (including 700), JetBrains Mono, and Newsreader 400 + italic.

**Icons:** none.

---

## 10. Build checklist for Claude Code (Astro)

1. **Create the page.** Add `src/pages/international-missions.astro` in the existing layout.
   - Put the `.im-*` CSS in a scoped `<style>`.
   - `.serif-h` should be global, since it's shared with Women's, LILY and Training.
   - Tokens and `[data-theme="dim"]` should already be global.
2. **Rev 7:9 band.** Apply `data-theme="dim"` to the **inner wrapper only**. Keep the radial scrim as the single documented literal value.
3. **Cross-links.** Make sure these routes exist and match: `/church-planting` and `/ministry-training#missionary-sending` (anchor ID from the Training kit).
4. **Semantics.**
   - Rev 7:9 is a `<blockquote>`.
   - The ways are a `ul`, and the Entermission focus areas are an `ol`.
   - The note uses `role="note"`.
   - One h1 per page, and every section has `aria-labelledby` or `aria-label`.
5. **Reusable components** (candidates to share with other pages):
   - `<WarmBandHero>`
   - `<PhotoStatementBand>`: full-bleed photo, radial scrim and centered serif text. It could serve any scripture moment on the site.
   - `<SerifStatementSplit>`: the Near section.
   - `<StatCardGrid>`: the four ways.
   - `<InverseFeatureBand>`: Entermission. It could be reused for any annual event.
   - `<CalloutNote>`: shared with Care.
6. **No JavaScript.** Ship the page without any.
7. **Before launch.** Resolve §8 (contact, optional dates, label approval) and clear both photo-sensitivity checks in §9.
8. **QA.** Check at 1440, 1024, 768 and 375 against `international-missions.html`.
   - The Rev 7:9 statement must keep AA contrast over the brightest part of the flags at every crop.
   - The Entermission wordmark must never overflow at 375.
