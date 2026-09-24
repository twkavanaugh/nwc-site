# Design package — LILY Moms (`/lilymoms`)

This is the build-ready spec for the **North Wake Church "LILY Moms" page** (Life in the Little Years), which sits in the Community group, for the live **static Astro** site.

The source of truth is **`lily-moms.html`** in this folder. It runs on its own, uses the production markup (no React, tweaks or routing), and contains **zero JavaScript**. It reflects the approved choices: the **dark lily photo** behind "A LILY morning" and the **warm band** that separates the heartbeat from the hero.

**Copy:** the ministry's "Updated text" is used word for word. The "The Ask" brief was guidance for the ministry, not page copy. §8 maps every string.

---

## 1. What the page is

LILY Moms is a community for moms of children from pregnancy through kindergarten. The page answers four questions for a mom with little or no church background:
- who it's for
- what happens on a LILY morning
- what it costs
- how to register

It closes by recruiting paid and volunteer childcare teachers for LILY Kids.

The page has seven sections:

0. **Breadcrumb:** Home / Community / LILY Moms.
1. **Hero:** the Community-group split layout. It adds the **LILY Moms logo** above the eyebrow, followed by the headline, lede, Register and Email buttons, and a 4:5 photo.
2. **Our heartbeat (warm band):** a full-width `--bg-2` band set 72px below the hero. The serif h2 "Deep joy. *Real exhaustion.*" sits beside the serif lead sentence and belief paragraph.
3. **Facts strip:** four cells in a hairline grid: Who, When, Season, Time.
4. **A LILY morning (dark photo):**
   - The dark pink-lily photo sits under a charcoal scrim.
   - The header is cream serif text.
   - Below it are four opaque numbered cards (Breakfast, A talk, Conversation, Creative activities) and two attached note panels (Playdates, Childcare).
5. **Join us:** the serif h2 "Come as *you are.*", a Register button, the questions email, and a fees list ($20 / $60 / $100) set in large figures.
6. **Serve with LILY Kids (dark band):** recruitment copy, an Email LILY Kids button, and a details list (hours, ages, pay, contact).

**Header:** the Community-group split, matching Women's, Mature Adults and Grow Groups. The logo is the only addition.

**Serif:** Newsreader is used for the three section h2s (Heartbeat, Morning, Join us) and the heartbeat lead sentence. This matches the Women's Ministry page and gives LILY the same warmer voice.

**Why the warm band:** the heartbeat sits on `--bg-2` with hairlines, which clearly ends the hero. The page then alternates light → band → light → dark photo → light → dark, which gives it a steady rhythm.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* inverse set — morning header + LILY Kids band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay, ~7.0:1 on charcoal */
}
```

**Inverse usage:**
- **LILY Kids band:** `<section data-theme="dim">`, which gives cream text on charcoal, a light-clay accent, and a cream `.btn-primary`.
- **Morning section:** **only the header wrapper** (`.section-head[data-theme=dim]`) is inverse, so the eyebrow, heading and intro turn cream on the photo. The **cards stay outside** the wrapper and keep the light tokens, so they remain opaque cream with dark text.

**Photo scrim (the one literal exception):**
```css
linear-gradient(180deg, rgba(26,24,20,0.74) 0%, rgba(26,24,20,0.46) 42%, rgba(26,24,20,0.30) 100%)
```
`rgba(26,24,20,…)` is `--ink` (#1a1814) with alpha applied. The scrim is darkest behind the heading and lightest behind the cards, so the lilies show through the 1px grid gaps.

**LILY logo colors (brand exception):** the logo keeps its own **teal (#77C8C4 approx.) and orchid (#B874B0 approx.)**. It is used as a flat image and is **never recolored**, and these colors are **not** added to the site tokens or used anywhere else on the page. The ministry keeps its own identity, and the page stays within the church system.

**Token roles:**

| Token | Role |
|---|---|
| `--bg` | page, cards, fact cells, dark bands (inverse) |
| `--bg-2` | **Heartbeat band**, morning note panels |
| `--ink` | headings, 2px heartbeat rule, note text, fee figures, button fill |
| `--ink-2` | lede, body, fee labels |
| `--ink-3` | eyebrows, mono labels, breadcrumb |
| `--ink-4` | breadcrumb separators only |
| `--accent` | h1 accent, serif italics, step numerals, note labels, links, eyebrow dots |

---

## 3. Typography

Fonts: **Inter Tight** (400/500/600/700), **JetBrains Mono** (400) and **Newsreader** (400 + italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | sans `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 |
| Heartbeat h2 | **serif** | `clamp(40px,5vw,76px)` | 1.04 | 400 (+ italic) |
| Heartbeat lead | **serif** | `clamp(22px,2.2vw,30px)` | 1.4 | 400 |
| Heartbeat body | sans | 19px | 1.6 | 400 |
| Morning h2 (on photo) | **serif** | `clamp(48px,6.4vw,96px)` | 1.02 | 400 (+ italic) |
| Morning intro (on photo) | sans | 18px | 1.6 | 400 |
| Step numeral | sans | `clamp(40px,4vw,56px)` | 0.9 | **700** |
| Step title | `.title` | 22px | — | 600 |
| Step / note body | `.body` | 16 / 17px | 1.6 | 400 |
| Join h2 | **serif** | `clamp(40px,5vw,76px)` | 1.04 | 400 (+ italic) |
| Fee figure | sans | 32px | — | 600 |
| Fee label | sans | 18px | — | 400 |
| Fact value | sans | 19px | 1.35 | 500 |
| Kids h2 | sans `.display-l` | as hero | 0.98 | 600 |
| Kids detail value | sans | `clamp(16px,1.8vw,19px)` | — | 500 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Button | `.btn` | 14px | — | 500 |
| Eyebrow / mono | 12px uppercase | — | — | 600 / 400 |

**Accessibility:**
- All readable content is 16px or larger.
- Every mono label sits next to self-explanatory content.
- Step numerals are `aria-hidden`.
- The morning h2 uses `text-wrap:balance`.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (deduplicated): 1, 4, 8, 10, 12, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 56, 64, 72, 96 px.

**Section rhythm:**
- Default section padding is `96px 0` (`72px` at ≤720px).
- Breadcrumb: 32px top.
- Hero: 56px top, 0 bottom.
- The **heartbeat band** has a `72px` top margin, so there is clear space between the hero photo and the band edge (56px at ≤720px).

**Borders:**
- 1px hairlines throughout.
- A 2px `--ink` rule above the heartbeat text.
- The morning cards and notes form **one continuous hairline grid**. The notes attach with `margin-top:1px` and `border-top:0`.
- No shadows.

**Radius:** square corners throughout, pill buttons, and round eyebrow dots. The logo artwork has its own rounded strokes.

**Primitives:**
- Reused: `.wrap`, `.eyebrow` + `.dot`, `.display-l`, `.title`, `.lede`, `.body`, `.mono`, `.btn-primary/-ghost`, `.section-head`, `.ph`, `.text-link`.
- **New shared helper:** `.serif-h` (Newsreader 400, −0.02em, with an accent `em`). Consider promoting it globally, since the Women's page uses the same pattern.
- Page-specific classes use the `.lily-` prefix.

---

## 5. Layout, section by section

**0 · Breadcrumb:** `nav.crumbs > ol`. "Community" is plain text.

**1 · Hero**
- Grid `1.3fr 1fr`, gap 64, bottom-aligned.
- **Left column, top to bottom:**
  - Logo: 112px wide, 32px margin below.
  - Eyebrow: 28px below.
  - h1: 14ch, "little years alone." in accent.
  - Lede: 28px below.
  - Actions: 32px below.
- **Right column:** 4:5 photo.

**2 · Heartbeat (`.lily-heart-sec`)**
- Full-width `--bg-2` band with top and bottom hairlines, and a 72px margin above.
- Grid `minmax(0,1fr) minmax(0,1.6fr)`, gap 72, top-aligned.
- Left: eyebrow and serif h2 (10ch).
- Right: 2px ink rule, 28px space, serif lead (40ch), 24px space, then the 19px body (54ch).

**3 · Facts:** a 4-column hairline `<dl>` with `--line-strong` rules. Cells use `28/24px` padding.

**4 · A LILY morning (`.lily-morning-sec`)**
- Full-bleed photo (`center 45%/cover`, with `--ink` as the fallback), overlaid by an absolutely positioned scrim.
- Content sits in a relative `.wrap`.
- **Header (inverse):** serif h2 (12ch, balanced) on the left, 18px cream intro on the right.
- **Steps:** `ol.lily-steps`, a 4-column hairline grid with `32/28/36px` cards: numeral → title → body.
- **Notes:** `.lily-extras`, a 2-column hairline grid attached directly under the steps. Panels are `--bg-2`, padded `26/28/28px`: accent mono label → ink body.

**5 · Join us**
- Grid `minmax(0,1.2fr) minmax(0,1fr)`, gap 64, bottom-aligned.
- Left: eyebrow, serif h2 (12ch), Register button, then the questions line with the email as a `.text-link`.
- Right: fees `<dl>`, with the label on the left and a 32px figure on the right. Each row is flex space-between with a hairline.

**6 · Serve with LILY Kids (dark band)**
- Grid `1.2fr 1fr`, gap 64, top-aligned.
- Left: eyebrow, h2 in `.display-l` ("kids?" in accent), lede, then the button.
- Right: details `<dl>` (140px label column), followed by the full service paragraph.
- The email address has a `<wbr>` after the "@".

---

## 6. Interactivity inventory (all CSS, no JavaScript)

| Behavior | Mechanism | JS? |
|---|---|---|
| Register (×2) | link to `LILY-REGISTER-URL` (external registration) | none |
| Email LILY Moms (×2) | `mailto:NWlilymoms@gmail.com` | none |
| Email LILY Kids (×2) | `mailto:NWLilyKids@gmail.com` | none |
| Hover / focus | button lift/fill, link color, `:focus-visible` ring | none |

There is **no form on the page**. Registration happens at the external URL (see §8).

---

## 7. Responsive behavior

Breakpoints: **1080 / 880 / 720 / 560**.

**Desktop (above 1080px):** the §5 layout.

**Tablet**
- **≤1080px:** facts go to 2×2; steps go to 2×2. Notes stay in 2 columns.
- **≤880px:** the hero, heartbeat, Join us and Kids sections all stack, with a 40px gap. The hero photo becomes 4:3.

**Phone (375px)**
- **≤720px:**
  - 22px gutters; section padding 72px.
  - The heartbeat band's top margin drops to 56px.
  - `.section-head` stacks.
  - Step padding becomes `28/22/30px`; note padding becomes 22px.
- **≤560px:**
  - Facts, steps and notes each become 1 column.
  - Kids details stack, with the label above the value.
  - Buttons go full width.
  - The fee rows stay as label-left / figure-right, which fits at 375px.
  - The morning h2 shrinks to 48px and breaks into balanced lines.
  - The logo stays at 112px.

---

## 8. Content slots

- **FACT:** keep in shared data, for example `src/data/ministries.ts`.
- **COPY:** the ministry's Updated text, word for word.
- **LABEL:** added by design, and needs approval.

| Slot | Text | Type |
|---|---|---|
| Logo alt | LILY Moms | — |
| Hero eyebrow | Life in the Little Years · Pregnancy through kindergarten | LABEL (from copy) |
| Hero h1 | No mom should walk through these / little years alone. | LABEL (distilled from "no mom should walk through these little years alone") |
| Hero lede | LILY Moms—short for Life in the Little Years—is a welcoming community for moms with children from pregnancy through kindergarten. | COPY |
| Heartbeat eyebrow / h2 | Our heartbeat / Deep joy. Real exhaustion. | LABEL (h2 distilled from copy) |
| Heartbeat lead | Motherhood with little ones can bring both deep joy and real exhaustion. | COPY |
| Heartbeat body | We believe no mom should walk through these little years alone and we strive to provide a safe place … unique season of life. | COPY |
| Facts ×4 | pregnancy through kindergarten · 1st & 3rd Wednesdays · October through May · 9:00–11:30 a.m. · North Wake Church | **FACT** |
| Morning eyebrow / h2 | Regular rhythms / What a LILY morning looks like. | LABEL |
| Morning intro | We meet on the 1st and 3rd Wednesdays from October through May, 9:00–11:30 a.m. at North Wake Church. | COPY + **FACT** |
| Steps ×4 | Breakfast (yes—uninterrupted!) · A talk from an experienced speaker… · We discuss motherhood, faith… · creative activities, opportunities to connect | COPY, split across cards; the titles are LABELs |
| Note · playdates | There are also monthly playdates outside of our bi-monthly meetings. | COPY (lightly trimmed: "creative activities, opportunities to connect" moved to step 04) |
| Note · childcare | While moms gather, children enjoy safe and engaging childcare… | COPY |
| Join eyebrow / h2 | Join us / Come as you are. | LABEL (h2 from copy: "come as you are") |
| Fees | Annual registration $20 · Fall semester $60 · Spring semester $100 | **FACT** |
| Questions | Further questions? Email us at NWlilymoms@gmail.com | COPY + **FACT** |
| Kids eyebrow / h2 | Serve with LILY Kids / Love caring for kids? | COPY |
| Kids lede | Join our LILY Kids team! We're looking for teachers … October–May. | COPY |
| Kids details | 8:30–11:45 a.m. · Babies–age five · $35 per meeting · NWLilyKids@gmail.com | **FACT** (repeated from copy) |
| Kids paragraph | Teachers serve 8:30–11:45 a.m. creating a safe, fun environment … volunteers are always welcome. | COPY |
| `LILY-REGISTER-URL` | Register destination | **FACT, URL needed** |

**Needed before launch:**
1. The **registration URL**. It is used twice, and until it is in place the page's main action doesn't work.
2. Ministry approval of the LABEL rows, especially the hero h1, "Deep joy. Real exhaustion." and the step titles.
3. **Seasonal freshness:** the fees and the October–May season are FACTs. Confirm them every August.
4. The details list repeats the hours and pay from the Kids paragraph. If that feels redundant, drop either the list or the paragraph.

---

## 9. Assets and photo slots

| # | Asset | Use | Notes |
|---|---|---|---|
| 1 | `assets/lily-moms-logo.png` | Hero logo, 112px wide | **Supplied.** 1671×1500 transparent PNG. Ship a 2× crop (~224px) or an **SVG if the ministry has one**. Don't recolor it and don't put it on dark backgrounds (the teal fails there). Stable path, suitable for use in structured data or social cards. |
| 2 | `assets/lily-flowers-dark.jpg` | Morning section background | **Supplied** (Unsplash, Benson John): pink lilies on a dark, soft-focus ground. Ship a ~2400px-wide WebP. Confirm the Unsplash licence (free commercial use). |
| 3 | Hero photo | **4:5** (4:3 when stacked at ≤880px) | **Placeholder.** Moms sharing breakfast and conversation at a LILY morning (coffee, plates, relaxed laughter). **Photograph children only with parental consent**, and avoid identifiable kids unless it's approved. Hands, mugs and table scenes are a safe option. |

Replace `.ph` with `<img>` (`loading="eager"`, `object-fit:cover`, width and height set) via `astro:assets`.

**Fonts:** Inter Tight (including 700), JetBrains Mono, Newsreader 400 + italic.

**Icons:** none.

---

## 10. Build checklist for Claude Code (Astro)

1. Create `src/pages/lilymoms.astro` (or match the live route) inside the existing layout. Scope the `.lily-*`, `.crumbs`, `.serif-h` and `.text-link` CSS to the page. Tokens and `[data-theme="dim"]` should already be global.
2. If the live site uses the approved inset breadcrumb bar, use it here.
3. **Morning section:** apply `data-theme="dim"` to the **header wrapper only**. The cards must stay outside it. Keep the scrim as the single documented literal.
4. Keep the logo as an `<img>` with its brand colors. Don't tokenize or recolor it.
5. Store the fees, schedule, season, emails and register URL in shared data.
6. **Semantics:**
   - Breadcrumb: `nav > ol`.
   - Facts, fees and Kids details: `dl`.
   - Morning steps: `ol`.
   - Logo `alt="LILY Moms"`.
   - One h1.
   - Step numerals `aria-hidden`.
7. **Reusable components:**
   - `<MinistryHero logo?>`: add an optional logo slot to the Community/Help hero.
   - `<PhotoBandCards>`: shared with Women's Ministry.
   - `<FeeList>`: also fits camps and retreats.
   - `<InverseDetailBand>`: shared with Mercy and Women's.
   - `<SerifHeading>`.
8. Ship no JavaScript.
9. Resolve the §8 items before launch.
10. QA at 1440, 1024, 768 and 375 against `lily-moms.html`. Check the following:
    - The heartbeat band clearly separates from the hero.
    - The morning heading keeps AA contrast across the photo.
    - No email wraps mid-word.
