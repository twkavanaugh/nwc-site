# Design package — Come Visit (`/visit`)

Build-ready spec for the **North Wake Church "Come Visit" page**, refined from the `VisitPage` prototype component (`page-other.jsx`) for the live **static Astro** site. The source of truth is **`come-visit.html`** in this folder. It's standalone, runnable, uses the production markup (no React, tweaks or routing), and has **zero JavaScript**.

**Copy:** the approved text is kept word for word. The only edits are the service-time correction (9:00 & 10:45 AM) in the facts strip and in the Stay step. §8 lists every piece of text and says where each one sits.

---

## 1. What the page is

A first-time guest's walkthrough of Sunday morning. It has five sections in this order:

1. **Hero (F · Warm Band):** eyebrow, headline, lede and the primary "Tell us you're coming" link on `--bg-2`, with a full-height exterior photo on the right.
2. **Facts strip:** a four-cell hairline grid with service times, address, length and kids.
3. **The flow of a Sunday:** four numbered steps (Arrive, Welcome, Worship, Stay), each with a photo.
4. **FAQ:** six questions in a two-column `<details>` accordion on `--bg-2`.
5. **Find us:** a static map image next to the address, the lede, "Open in Maps ↗" (external) and "Tell us you're coming".

**Hero decision:** I used the **F · Warm Band** split, as you recommended. Kids and other interior pages already use it, and it gives the prototype's orphaned 21/9 exterior photo a proper home. The standalone 21/9 photo section is gone and **that photo becomes the hero's right column.** This removes one full-width band without losing any content.

**Newsreader** is not used. The page has no devotional or Scripture moment, so the serif would be decoration rather than meaning.

**Dark bands:** none. Every section sits on `--bg` or `--bg-2`, so no inverse accent handling is needed here. If a dark band is added later, wrap it in `data-theme="dim"`. That swaps in the existing inverse token set, including `--accent: #d49271`, the lighter clay that passes contrast on dark. No new raw colors are needed.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg: #f6f3ed;   --bg-2: #ece7dc;   --bg-3: #e3ddce;
  --ink: #1a1814;  --ink-2: #3a352c;  --ink-3: #6e665a;  --ink-4: #a89f8e;
  --line: rgba(26,24,20,0.12);  --line-strong: rgba(26,24,20,0.22);
  --accent: #8a4d2e;  --accent-ink: #ffffff;
}
[data-theme="dim"] {            /* inverse set, for any future dark band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;             /* on-inverse clay; #8a4d2e fails on dark */
}
```

Where each token is used on this page:

| Token | Used for |
|---|---|
| `--bg` | page background, facts-cell fill, text on the primary button |
| `--bg-2` | hero band, FAQ band |
| `--bg-3` | photo-placeholder stripe base |
| `--ink` | headings, primary button fill, ghost-button hover border |
| `--ink-2` | lede and body copy |
| `--ink-3` | eyebrows, mono labels (5.2:1 on `--bg`, 4.7:1 on `--bg-2`) |
| `--ink-4` | **not used for text.** It fails 4.5:1 and exists only as a token. |
| `--line` | facts-grid hairlines, FAQ item dividers, hero bottom border |
| `--line-strong` | facts-strip outer rules, FAQ column top rule, ghost-button border |
| `--accent` | eyebrow dot, headline accent phrase, step numbers, FAQ `+`, primary button hover, focus ring |

**Colors with two jobs:** `--ink` is both text and the primary-button fill. `--bg` is both the page background and the primary-button text. `--accent` is text (headline phrase, step numbers, `+`) and also the primary-button hover *fill*. On that hover the text is `--bg`, which contrasts at 6.0:1.

**Photo scrims:** none. No text sits on a photo anywhere on this page. The placeholder stripe uses one `color-mix()` of existing tokens. It only lives on the placeholder and disappears when real photos arrive.

---

## 3. Typography

Fonts are **Inter Tight** (400, 500, 600) and **JetBrains Mono** (400). Newsreader is not loaded here.

| Element | Class | Size | Line-height | Weight | Tracking |
|---|---|---|---|---|---|
| Hero h1 | `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 | −0.03em |
| Section h2 | `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 | −0.025em |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 | −0.005em |
| Fact value | `.cv-fact dd` | 22px (18px at ≤560) | 1.3 | 500 | −0.012em |
| Step title | `.cv-step h3` | 20px | inherit | 600 | −0.012em |
| FAQ question | `summary` | 20px (18px at ≤560) | inherit | 500 | −0.012em |
| Body / FAQ answer | `.body` | **16px** | 1.6 | 400 | — |
| Button | `.btn` | 14px | — | 500 | −0.005em |
| Eyebrow | `.eyebrow` | 12px, uppercase | — | 600 | 0.18em |
| Mono label | `.mono` | 12px, uppercase | — | 400 | 0.04em |
| Placeholder label | `.ph-label` | 11px | — | 400 | 0.05em |

**The 16px floor:** all readable content is 16px or larger at every viewport. Text smaller than 16px (eyebrows, mono labels, placeholder labels) never carries meaning on its own:

- Facts labels ("Service times") sit next to values that make sense without them.
- Step numbers ("01") sit next to a 20px sans `<h3>` with the step name. This fixes the prototype, where "01 · Arrive" existed only in 12px mono.
- Placeholder labels are temporary.

**Buttons (14px):** these are UI controls, not content, and match the site-wide `.btn`.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (duplicates removed): 6, 10, 12, 14, 16, 18, 22, 24, 26, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96 px.

**Section rhythm:**
- Sections use `padding: 96px 0` by default (72px at ≤720).
- The hero has `padding: 0`. Its text column has `88/64/88px` padding, and the left padding is gutter-aware.
- The facts strip has `72px 0 0`.

**Hero left padding:** `max(40px, calc((100vw - 1320px) / 2 + 40px))`. This lines the text up with `.wrap` (1320px max, 40px gutter) while the band runs full width.

**Borders:** everything uses 1px hairlines with `--line` or `--line-strong`. There are **no box-shadows** anywhere.

**Radius:**
- Square corners throughout, including photos and the map.
- Buttons are pills (`999px`).
- The eyebrow dot is round (`50%`).
- The prototype's 4px `.ph` radius is dropped, so placeholders match the real photos.

**Focus ring:** `2px solid var(--accent)` with a 3px offset on every link, button and `<summary>`.

**Motion:** 160–200ms transitions on button lift, arrow nudge and FAQ `+` rotation. All motion is off under `prefers-reduced-motion`.

**Reused primitives:** `.wrap`, `.eyebrow` + `.dot`, `.display-l`, `.display-m`, `.lede`, `.body`, `.mono`, `.btn` / `.btn-primary` / `.btn-ghost`, `.section-head` (+ `.right`) and `.ph`. Classes specific to this page use the `.cv-` prefix.

---

## 5. Layout, section by section

**1 · Hero (`.cv-hero`)**
- Full-width `--bg-2` band with a bottom hairline.
- Grid is `minmax(0,1.15fr) minmax(0,1fr)` with `align-items: stretch`. Stretch is what makes the photo fill the full height of the band.
- Text column: eyebrow (36px below) → h1 (`max-width:12ch`, with "start to finish." in `--accent`) → lede (32px above) → action row (36px above).
- Photo column: `min-height: 560px`, flush against the top, right and bottom edges.

**2 · Facts strip (`.cv-facts`, a `<dl>`)**
- Four columns: `repeat(4, minmax(0,1fr))`.
- Hairline-grid technique: `gap:1px` over a `--line` background, with cells filled `--bg`.
- A `--line-strong` rule sits above and below. Each cell has 32/28px padding, with the `dt` label (10px below) above the `dd` value.
- **This technique collapses to 2×2 or 1 column without any per-cell border fixes.**

**3 · Flow (`.cv-flow`, an `<ol>`)**
- `.section-head` has the eyebrow and h2 (`max-width:14ch`) on the left and a `.body.right` intro (36ch) on the right, bottom-aligned, with 56px below.
- Four-column grid with a 32px gap.
- Each step, top to bottom: a 4:5 photo, then a head row with the mono accent number and the 20px h3 (baseline-aligned, 12px gap), then the body.

**4 · FAQ (`.cv-faq`)**
- `--bg-2` band, `.section-head` with the h2 "FAQ.".
- Two columns (`repeat(2, minmax(0,1fr))`) with an 80px column gap. Each column is its own stack with a `--line-strong` top rule.
- Each question is a `<details>` with a `--line` bottom border. The `<summary>` is a flex row (question, then the accent `+`) with 26px vertical padding.
- Answers are `.body`, `max-width:44ch`, with 26px bottom padding.
- The columns are separate stacks (not one grid with six cells) so opening one answer doesn't push the other column down. The source order is split row by row, so the desktop reading order matches the prototype.

**5 · Find us (`#find-us`, `.cv-find`)**
- Two equal columns with a 64px gap, vertically centered.
- Left: a 4:3 static map image, wrapped in the Maps link.
- Right: eyebrow → h2 address (with a line break) → lede (24px above) → action row (28px above).

---

## 6. Interactivity (all CSS, no JavaScript)

| Behavior | How it works | JavaScript? |
|---|---|---|
| FAQ open/close | native `<details>`/`<summary>`, `+` rotates 45° to × with `details[open]` | none |
| FAQ keyboard use | native: Tab to focus, Enter or Space to toggle | none |
| Button hover | `:hover` lifts 1px, primary fills `--accent`, arrow nudges | none |
| "Open in Maps ↗" | plain `<a target="_blank" rel="noopener">` with an sr-only "(opens in a new tab)" | none |
| Map image | same external link, with a descriptive `aria-label` | none |
| "Tell us you're coming" | plain link to `TELL-US-HREF` (see §8). There is **no form.** | none |
| Focus states | `:focus-visible` ring | none |

**Map:** there is no embedded map (no iframe, Mapbox or Google Maps widget).

**`:target`:** not needed on this page. `#find-us` is available as an anchor if other pages want to deep-link to it.

---

## 7. Responsive behavior

Breakpoints: **1080 / 880 / 720 / 560**.

**Desktop (over 1080px)**
- Everything is laid out as in §5.
- Hero split 1.15 : 1, facts in 4 columns, flow in 4 columns, FAQ in 2 columns, Find us in 2 columns.

**Tablet (721–1080px)**
- At ≤1080, facts become **2×2** and flow becomes **2×2** (48px row gap).
- At ≤880:
  - The hero stacks, with the photo on top at **4:3** and 56/40/64px text padding.
  - The FAQ becomes **1 column**. The two stacks sit one under the other; the second loses its top rule so the dividers stay continuous.
  - Find us stacks with the **text first and the map below**, so the address and buttons appear before the image.

**Phone (375px)**
- At ≤720:
  - Page gutter is 22px and section padding is 72px.
  - `.section-head` stacks, with 36px below.
  - Hero text padding is 44/22/56px.
- At ≤560:
  - **Facts strip:** one column of four rows. Each row is a two-column grid: a 120px mono label, then the value at 18px (label left, value right). The hairlines between rows stay. At 375px the address wraps to two lines in the value column.
  - **Flow:** one column with a 44px gap. Photos switch from **4:5 to 3:2** so four stacked steps don't run to roughly 1,700px of photo. Each step is photo → number + title → body.
  - **FAQ:** one column. Questions drop to 18px with 22px padding and answers stay at 16px. On a phone the order follows the columns: wear, kids, parking, singled out, length, online. If you prefer the original order on phones, write the markup as one list in the original order and use `columns: 2` on desktop instead.
  - **Find us buttons:** full-width, stacked.
  - Headings keep scaling fluidly, with `clamp()` minimums of 44px (h1) and 36px (h2).

---

## 8. Content slots

**FACT** means church data that must match reality and be kept in sync everywhere (ideally a single `site.ts` config). **COPY** means approved editorial text, kept word for word.

| Slot | Text | Type |
|---|---|---|
| Hero eyebrow | Come visit | COPY |
| Hero h1 | Your first Sunday, / accent: start to finish. | COPY |
| Hero lede | Walking into a new church can feel like a lot. We get it. Here's exactly what to expect — from the parking lot to the closing prayer — so you can show up ready to just be present. | COPY |
| Hero button | Tell us you're coming | COPY (reused from Find us) |
| Fact · Service times | **9:00 & 10:45 AM** | **FACT** (corrected) |
| Fact · Address | **1212 S Main St · Wake Forest, NC** | **FACT** |
| Fact · Length | **~75 minutes** | **FACT** |
| Fact · Kids | **Birth – 5th grade** | **FACT** |
| Flow eyebrow / h2 / intro | What to expect / The flow of a Sunday. / Same rhythm every week… | COPY |
| Step 01 Arrive | …main lot off **S Main St**… greeters in orange vests… reserved spots… | COPY, includes FACT (street) |
| Step 02 Welcome | …Welcome Wall in the lobby… Kids check-in. | COPY |
| Step 03 Worship | …about **75 minutes**… Communion **first Sunday of each month**. | COPY, includes FACTs |
| Step 04 Stay | …'Next Step' lunch after the **10:45 AM** service on the **second Sunday of every month**… | COPY, includes FACTs (corrected) |
| FAQ ×6 | questions and answers as in the file | COPY; includes FACTs: 75 min / 35-min sermon, birth–5th, check-in 30 min early |
| Find us h2 | **1212 S Main St / Wake Forest, NC** | **FACT** |
| Find us lede | 15 minutes north of Raleigh, just off Capital Blvd… | COPY, includes location FACT |
| Maps URL | `https://www.google.com/maps/search/?api=1&query=1212+S+Main+St+Wake+Forest+NC` | **FACT** |
| `TELL-US-HREF` | where "Tell us you're coming" goes | **NEEDS A DECISION.** There is no form backend. Options: a hosted form (Planning Center, Church Center or Google Form), a `mailto:`, or a `tel:` link. Used twice. |

**Phone number:** none appears in the approved copy, so it isn't on this page.

**Two things to fix in the content:**
1. The FAQ answer *"Every Sunday is livestreamed and archived — link below."* has **no link below it**. The prototype never had one. You can either add a livestream link (a proposed addition, needs approval) after the FAQ grid, or change the copy to "…on our Sermons page" and link that.
2. The hero reuses "Tell us you're coming" as its main call to action. This is existing approved copy, not new text.

---

## 9. Assets and photo slots

All photo slots are placeholders until real photography arrives. When a photo lands, replace the `.ph` block with `<img src alt loading="lazy" decoding="async">`. Use `loading="eager"` for the hero photo only. Keep the aspect ratios below.

| # | Slot | Aspect | Shot description (for the shot list) |
|---|---|---|---|
| 1 | Hero · exterior | fills the band (about 4:5 at desktop, min-height 560) · **4:3** when stacked | Main entrance on a Sunday morning: families walking in, doors open, soft morning light. Leave room for a center crop. |
| 2 | Step 01 · Arrive | 4:5 (3:2 on phone) | Greeter in an orange vest waving a car into the lot, S Main St side, guest spots visible. |
| 3 | Step 02 · Welcome | 4:5 (3:2 on phone) | The Welcome Wall in the lobby: a guest with coffee, a volunteer mid-conversation, campus maps in view. |
| 4 | Step 03 · Worship | 4:5 (3:2 on phone) | Congregation mid-song from behind or the side, faces toward the stage, warm house light. No close-up of one person. |
| 5 | Step 04 · Stay | 4:5 (3:2 on phone) | Next Step lunch: staff and guests around a table, relaxed and talking. |
| 6 | Find us · map | **4:3** | Static exported map image (PNG or WebP, about 1600×1200) of the campus at S Main St with Capital Blvd for context. Make sure the map-provider licence allows static use, or draw a simple custom map. No live embed. |

**Hero photo size:** export at 2000px or more on the long edge. All other photos at 1200px or more. Use WebP or AVIF with a JPG fallback, through `astro:assets` `<Image>` or `<Picture>`.

**Fonts:** Inter Tight (400/500/600) and JetBrains Mono (400). Self-host them in Astro if the live site already does.

**Icons:** none. `→`, `↗` and `+` are Unicode characters.

**Assets that need stable paths:** the map image and the hero photo, if they're used for Open Graph (`og:image` should point at the hero exterior).

---

## 10. Build checklist for Claude Code (Astro)

1. Create `src/pages/visit.astro` inside the existing site layout, which already has the nav and footer. Put the `.cv-*` CSS in a scoped `<style>`. Shared primitives (`.wrap`, `.eyebrow`, `.btn`, etc.) should already exist globally, so don't duplicate them.
2. Put the FACT slots (times, address, Maps URL, length, kids range, `TELL_US_HREF`) in a shared config such as `src/data/site.ts`, and read them in the page. Service times appear in two places here and elsewhere on the site.
3. **Reusable components to extract.** Each is a good candidate for sharing with other pages:
   - `<FactsStrip items>`: hairline grid of label/value pairs. Also fits Kids, Students, Events and Plan Your Visit.
   - `<FaqAccordion items columns=2>`: `<details>`-based. Also fits Kids health & safety, Membership, Hope Counseling and Feed.
   - `<FindUs address mapImage mapsUrl ctas>`: static map and address split. Also fits Plan Your Visit, the footer area and Feed (pantry location).
   - `<WarmBandHero>`: already specified in the Warm Band kit. This page is a standard instance of it.
   - `<StepRow steps>`: numbered photo steps. Also fits Membership pathway and Kids check-in.
4. Keep the correct HTML elements: facts use `<dl>`, flow steps use `<ol>`, FAQ uses `<details>`/`<summary>`, each section has an `aria-labelledby` heading, and external links get `rel="noopener"` plus the sr-only new-tab note.
5. Replace the `.ph` placeholders with `<Image>` as photos arrive (§9). Don't ship the stripe pattern to production.
6. Resolve `TELL-US-HREF` and the "link below" gap (§8) before launch.
7. Ship no JavaScript on this page: no client directives and no islands.
8. QA at 1440, 1024, 768 and 375 against `come-visit.html`. Check the 16px floor and keyboard use of the FAQ.
