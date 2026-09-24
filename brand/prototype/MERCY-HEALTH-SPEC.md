# Design package — Mercy Health Clinic (`/mercy-health`)

This is the build-ready spec for the **North Wake Church "Mercy Health Clinic" page** (Help group), for the live **static Astro** site. The page is a condensed version of **mercyhealthnw.org** (Home, About and Volunteer pages), and it links out to the full clinic site.

**`mercy-health.html`** in this folder is the source of truth. It runs standalone, uses production markup (no React, no tweaks, no routing), and contains **zero JavaScript**.

---

## 1. What the page is

A single informational page on the church site about the clinic that North Wake hosts and leads. It covers:
- what the clinic is
- when and where it runs
- who qualifies, and what is and isn't treated
- why it exists
- how to get involved

The clinic's own site stays the authority. The page links to it in the hero, in each Get involved card, and in the closing band.

The page has eight sections:

0. **Breadcrumb:** Home / Help / Mercy Health Clinic
1. **Hero (Help-group split):** mission, a "Visit mercyhealthnw.org ↗" button and a tap-to-call button, with a 4:5 photo.
2. **Facts strip:** four cells (Cost, When, Where, Who) plus a note on holiday closures and the patient portal.
3. **Who we are:** a three-panel hairline grid of What we offer, Who we serve and Outside our scope. The third panel sits on `--bg-2` so the exclusions read as a separate list.
4. **Why we serve:** Luke 10:37 as a centered Newsreader quote, with a two-sentence summary.
5. **Core values:** six values in a 3×2 hairline grid.
6. **Get involved:** Volunteer, Partner and Give cards, each with a 2px ink rule and an external text link.
7. **Contact band (dark):** a link to the full site, plus phone, fax and address.

**Hero:** this page uses the **Help-group split**, not the Warm Band, so it matches Feed, Hope Counseling and Care Ministry.

**Newsreader** is used once, for the Scripture quote.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* inverse set — contact band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay, about 7.0:1 on charcoal */
}
```

**Dark band:** the contact section is `<section data-theme="dim">`, styled only with `var(--bg)`, `var(--ink)` and `var(--accent)`.
- Its `.btn-primary` renders as a cream fill with charcoal text, and turns light clay on hover.
- The accent domain text is light clay.
- The component contains no raw hex values.

**Clinic brand colors:** Mercy Health's red heart logo and palette are **not** used. The page sits inside the church's design system, and the clinic's identity lives on its own site. If the clinic asks for its logo, see §9.

**Where each token is used:**

| Token | Role |
|---|---|
| `--bg` | page, fact cells, panels, value cells, dark band (inverse) |
| `--bg-2` | Outside our scope panel, Why we serve band |
| `--ink` | headings, card rules, "Outside our scope" label, Who we serve text, button fill |
| `--ink-2` | lede, body, exclusion list items |
| `--ink-3` | eyebrows, mono labels, breadcrumb (5.2:1) |
| `--ink-4` | breadcrumb `/` separators only |
| `--accent` | h1 accent phrase, eyebrow dots, panel labels, scripture italic, text links, breadcrumb current page |

**Tokens that do two jobs:**
- `--ink` is used for both text and the button fill.
- `--accent` is used for text, text links and the button hover fill.

**Scrims:** none. No text sits on a photo.

---

## 3. Typography

Fonts: **Inter Tight** (400/500/600/700), **JetBrains Mono** (400) and **Newsreader** (400 + italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 |
| Section h2 | `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 |
| Card h3 (Get involved) | `.display-s` | `clamp(28px,3.4vw,48px)` | 1.05 | **700** |
| Value / panel titles | `.title` | 20px | — | 600 |
| Offer list items | sans | 20px | — | 600 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Fact value | sans | 19px | 1.35 | 500 |
| Contact values | sans | 19px | — | 500 |
| Who we serve | sans | 18px | 1.6 | 400 |
| Card body | sans | 17px | 1.6 | 400 |
| Body / exclusions / values | `.body` | **16px** | 1.6 / 1.45 | 400 |
| Scripture | **serif** | `clamp(34px,4.4vw,60px)` | 1.15 | 400 (+ italic) |
| Text link | sans | 16px | — | 500, underlined |
| Button | `.btn` | 14px | — | 500 |
| Eyebrow / mono | 12px uppercase | — | — | 600 / 400 |

**Accessibility floor:** all readable content is at least 16px. Mono labels (below 16px) always sit next to self-explanatory content. Buttons use the site-wide 14px UI size.

---

## 4. Spacing, borders, radius, primitives

**Spacing values used:** 2, 4, 9, 10, 12, 14, 16, 18, 22, 24, 28, 30, 32, 36, 40, 56, 64, 72, 80, 96 px.

**Section spacing:**
- Sections default to `96px 0`, or `72px` at ≤720px.
- **Breadcrumb:** 32px top.
- **Hero:** 56px top, 0 bottom.
- **Facts:** 80px top, 0 bottom.
- **Get involved:** 0 top. A hairline plus 56px padding acts as the divider.

**Borders:**
- 1px hairlines throughout.
- The Get involved cards use a **2px `--ink` top rule**, the same device as Church Planting and Care.
- No shadows anywhere.

**Radius:**
- Square corners everywhere.
- Buttons are pills (`999px`).
- The eyebrow dot is round.

**Hairline grids** (facts, scope panels, values): `gap:1px` over a `--line` background, with filled cells.

**Primitives:**
- **Reused:** `.wrap`, `.wrap-narrow`, `.eyebrow` + `.dot`, `.display-l/-m/-s`, `.title`, `.lede`, `.body`, `.mono`, `.btn-primary/-ghost`, `.section-head`, `.ph`.
- **New shared primitive:** `.text-link` (accent, 1px underline, turns ink on hover).
- **Page prefix:** all page-specific classes start with `.mh-`.

---

## 5. Layout, section by section

**0 · Breadcrumb**
- `nav.crumbs > ol`, separators added with `li + li::before`.
- The current page is marked with `aria-current`.
- "Help" is plain text because it's a menu group, not a page.

**1 · Hero**
- Grid `1.3fr 1fr`, gap 64, bottom-aligned.
- Left column: eyebrow (28px gap), then h1 (15ch, "our neighbors in need." in accent), then lede (28px gap), then buttons (32px gap, 12px between buttons).
- Right column: 4:5 photo.

**2 · Facts**
- Four-column hairline `<dl>` with a `--line-strong` rule above and below.
- Cells are `28/24px`.
- A `.body` note sits 16px below; "not" is in `<strong>` ink.

**3 · Who we are**
- `.section-head`: h2 on the left (16ch); the 501(c)(3) and church-leadership sentence on the right (40ch).
- Below it, a three-panel grid with panels padded `36/32px`:
  - **What we offer:** four 20px/600 list rows with hairlines.
  - **Who we serve:** two 18px ink paragraphs; the county names are bold.
  - **Outside our scope:** on `--bg-2`, with its label in `--ink` rather than accent to signal a limit. Eight 16px rows with hairlines.

**4 · Why we serve**
- `--bg-2` band, centered, `.wrap-narrow`.
- Eyebrow, then a `<blockquote>` (serif, with the quoted words in italic accent), then the lede (58ch).

**5 · Core values**
- `.section-head`, then a 3-column hairline grid.
- Cells are `30/28/32px`, each with an h3 and a body line.

**6 · Get involved**
- A hairline on top, then eyebrow, then h2, then a three-column grid (gap 32).
- Each card: 2px ink rule, then h3 in `.display-s` 700, then 17px body, then a text link pinned to the bottom (`margin-top:auto`).
- Every card has one short line, so the links line up across cards.

**7 · Contact (dark band)**
- Grid `1.3fr 1fr`, gap 64, bottom-aligned.
- Left column: eyebrow, then h2 in `.display-m` (14ch), then the button (32px gap).
- In the h2, **"mercyhealthnw.org." has a `<wbr>` before ".org" and `overflow-wrap:anywhere`**. It's a single long word, and without these it overflows the column. Keep both.
- Right column: a `<dl>` of Telephone, Fax and Address. Each row is a grid (`110px` label, then value).

---

## 6. Interactivity inventory (all CSS, no JavaScript)

| Behavior | Mechanism | JS? |
|---|---|---|
| External links (site, volunteer, partner, donate) | `<a target="_blank" rel="noopener">` plus sr-only "(opens in a new tab)" | none |
| Tap to call | `tel:+19198674237` | none |
| Breadcrumb "Home" | plain link | none |
| Hover states | button lift and fill; text-link color change | none |
| Focus | `:focus-visible` 2px accent ring | none |

- **No forms.** Appointments, volunteer applications and donations all happen on the clinic's site or on PayPal.
- **No embedded map.**

---

## 7. Responsive behavior

Breakpoints: **1080 / 880 / 720 / 560**.

**Desktop (over 1080px):** layout as described in §5.

**Tablet (721–1080px)**

At ≤1080:
- **Facts:** 2×2.
- **Scope panels:** 2 columns. *Outside our scope* spans the full row underneath, since it's the longest list.
- **Values:** 2 columns.

At ≤880:
- **Hero:** stacks, with the photo at **4:3** below the text.
- **Get involved:** 1 column, gap 40.
- **Contact band:** stacks, with the heading and button above the contact list.

**Phone (375px)**

At ≤720:
- Page gutters 22px, sections 72px.
- `.section-head` stacks.
- Panel padding `28/22px`.

At ≤560:
- **Facts, scope and values:** 1 column.
- **Contact rows:** the label sits above the value.
- **Buttons:** full width, stacked.
- **Domain in the h2:** can break at ".org" (via `<wbr>`), so it never overflows 375px.

---

## 8. Content slots and sources

**FACT** = clinic data that must match the clinic's site; keep it in shared data and re-check it against mercyhealthnw.org each season. **SOURCE** = text taken from mercyhealthnw.org. **DISTILLED** = the clinic's content, condensed or reworded. **LABEL** = a design-added heading.

| Slot | Text | Type · source |
|---|---|---|
| Eyebrow | Mercy Health Clinic of North Wake | SOURCE (Home) |
| h1 | Free medical and dental care for / our neighbors in need. | LABEL (built from the mission) |
| Lede | To share the love of Jesus Christ with our North Wake County region neighbors in need by delivering free medical and dental care. | SOURCE (Home, mission) |
| Fact · Cost | 100% free — visits, dental, labs & medications | FACT · DISTILLED (About) |
| Fact · When | 2nd & 4th Tuesdays · 6:00–8:30 pm | **FACT** (Home) |
| Fact · Where | North Wake Church · 1212 S Main St | **FACT** |
| Fact · Who | Adults 18+ · household income below 200% FPL | **FACT** (Home) |
| Facts note | Clinics are not held the fourth Tuesday of November and December. Appointments can be secured through the clinic's patient portal. | **FACT** · SOURCE (Home) |
| Who h2 | A Gospel-centered free health care clinic. | SOURCE (Home, "Who We Are") |
| Who intro | North Wake Church provides leadership and space… 501(c)(3)… volunteers… donations. | DISTILLED (About, four lines combined) |
| What we offer ×4 | primary care / limited dental / health education / case management | SOURCE (Home) |
| Who we serve | North Wake region incl. Franklin, Granville, Vance; adults 18+ below 200% FPL | SOURCE (Home). "the federal poverty levels" is normalized to "the federal poverty level" |
| Outside our scope ×8 | as listed | SOURCE (Home), word for word |
| Why eyebrow / quote | Luke 10:37 · And Jesus said to him, "You go, and do likewise." | SOURCE (About, ESV) |
| Why lede | Mercy Health is founded on the Great Commandment… "the one who showed mercy." | DISTILLED (About, "Why We Serve") |
| Core values ×6 | titles and lines | SOURCE (Home), word for word |
| Volunteer card | Primary care providers, licensed RNs, clinic administration, medical translators, and systems and data managers. | DISTILLED (Volunteer, "Current Needs") |
| **Partner card** | Churches, businesses, and organizations can come alongside the clinic's work in our community. | **WRITTEN BY DESIGN**. The Partner page was not reviewed, so the clinic must approve this. |
| Give card | The clinic is 100% funded by donations — every gift goes toward free care for a neighbor. | DISTILLED (About) plus a design phrase |
| Contact h2 | The full story lives at mercyhealthnw.org. | LABEL |
| Phone / fax / address | (919) 867-4237 · (919) 229-0442 · 1212 S Main St, Wake Forest, NC 27587 | **FACT** (site footer) |
| URLs | site `https://www.mercyhealthnw.org/`, `/volunteer/`, `/partner/`, donate `https://www.paypal.com/donate/?hosted_button_id=THURN7FA7YKUU` | **FACT** |

**Deliberately left out** (kept on the clinic's site):
- **Provider, leadership and board names.** They change often.
- **The full Good Samaritan passage.** It's summarized instead.
- **The volunteer PDF forms and coordinator email.** The Volunteer card links to the page where they live.

**Needed before launch:**
1. **Patient portal URL.** The clinic's site mentions it but doesn't link it publicly. With the link, add a primary "Book an appointment ↗" button in the hero, which would be the single most useful action for patients.
2. **Clinic approval** of the Partner card copy and the distilled lines.
3. **A freshness process.** Hours and closures are time-sensitive, so decide who updates this page when the clinic's schedule changes.

---

## 9. Assets and photo slots

| # | Slot | Aspect | Shot description |
|---|---|---|---|
| 1 | Hero · clinic evening | **4:5** (4:3 when stacked ≤880) | Volunteers setting up or running a Tuesday-evening clinic at North Wake: an exam-room doorway, the check-in table, a provider in conversation. **Do not show identifiable patients** (HIPAA and dignity); use volunteers, hands, equipment or the space. |

- **Only one photo slot.** Replace `.ph` with `<img>` (`loading="eager"`, `object-fit:cover`, width and height set), 1200px or more on the short edge, WebP/AVIF with a JPG fallback, via `astro:assets`.
- **Clinic logo (optional):** mercyhealthnw.org has a red-heart mark (`MercyHealthClinic_RedHeart`). Only add it with the clinic's permission. Use it small (32–40px), beside the hero eyebrow, and never recolor it.
- **Fonts:** Inter Tight (including 700), JetBrains Mono, Newsreader.
- **Icons:** none. `↗` is a Unicode character.

---

## 10. Build checklist for Claude Code (Astro)

1. **Page file:** create `src/pages/mercy-health.astro` (or match the live Help route) in the existing layout. Put the `.mh-*`, `.crumbs` and `.text-link` CSS in a scoped `<style>`. Primitives and both token sets should already be global; add `[data-theme="dim"]` globally if it's missing.
2. **Breadcrumb:** if the live site already uses the approved **inset breadcrumb bar**, use that component here too, so all Help pages match.
3. **Dark band:** keep it as `data-theme="dim"` plus tokens, with a plain `.btn-primary`. No hex values.
4. **Clinic data:** keep hours, closures, eligibility, contact details and URLs in `src/data/mercy.ts`. That keeps them easy to update and to check against the clinic's site.
5. **Semantics:**
   - breadcrumb: `nav > ol`
   - facts and contact details: `<dl>`
   - offer, exclusions and values: `<ul>`
   - the Scripture: `<blockquote>`
   - one h1; sections labelled with `aria-labelledby`
   - external links get `rel="noopener"` and the sr-only new-tab note
6. **Reusable components** (candidates to share with other pages):
   - `<HelpHero>`: the Help-group split, shared with Feed, Hope and Care.
   - `<FactsStrip>`: shared with Come Visit and Care.
   - `<PanelTrio>`: a three-panel hairline grid with a "limit" variant. Good for any "what we do / who / what we don't" set, such as Hope Counseling's scope of care.
   - `<ScriptureBand>`: centered serif quote plus lede.
   - `<ValueGrid>`: shared with Hope's commitments.
   - `<RuledCards>`: 2px-rule cards with text links, shared with Church Planting's realities.
   - `<InverseContactBand>`.
7. **No JavaScript:** ship no client directives or islands.
8. **Before launch:** resolve §8 (portal link, clinic approval, update owner).
9. **QA:** check at 1440, 1024, 768 and 375 against `mercy-health.html`. In particular, confirm the contact h2 domain never overflows and the scope grid's third panel spans the full width at tablet sizes.
