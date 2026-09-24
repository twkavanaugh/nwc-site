# Design package — Care Ministry (`/care`)

This is the build-ready spec for the **North Wake Church "Care Ministry" page**, which sits in the Help group next to Feed and Hope Counseling, for the live **static Astro** site. The source of truth is **`care-ministry.html`** in this folder. It is standalone, runnable, uses the production markup (no React, tweaks or routing), and contains **zero JavaScript**.

**Copy:** every sentence of the church's text is used word for word. A few sentences were split or combined to fit the step cards; §8 maps every string.

---

## 1. What the page is

This is the public page for the **North Wake Care Team's emergency financial assistance**: help covering portions of housing or utility expenses, with prayer. It exists to tell a neighbor in need, quickly and warmly:
- what help is offered
- why the church offers it
- exactly how to apply in person

It has six sections:

0. **Breadcrumb:** Home / Help / Care Ministry
1. **Hero:** the Help-group split. Text sits on the left; a 4:5 photo sits on the right, bottom-aligned.
2. **Facts strip:** four cells in a hairline grid: Helps with · Funds released · Application · Interview.
3. **Our heart:** a section title on the left and two stacked purpose statements on the right. The second statement is set in Newsreader serif.
4. **How to apply:** three numbered steps in a hairline grid, followed by a **"Please note"** box for the 12-month reapply rule.
5. **Where to apply:** a dark band giving the location (Building Five) and address, with a "Get directions ↗" link.

**Hero decision:** this page does **not** use the F · Warm Band hero. It deliberately uses the **Help-group split** that Feed and Hope Counseling already use: a breadcrumb, then a `1.3fr/1fr` grid with a 4:5 photo, bottom-aligned, on `--bg`. The brief asked for the header to match its group, so the three Help pages read as one family.

**Newsreader** appears once, in the gospel sentence ("…their profound need for Jesus Christ…"). That sentence is the spiritual heart of the page, so it gets the site's devotional voice.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {  /* inverse set — the "Where to apply" band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;   /* on-inverse clay */
}
```

**The dark band** is `<section data-theme="dim">`, styled only with `var(--bg)` and `var(--ink)`. Inside it:
- **Background:** `--bg` resolves to charcoal `#1a1814`, and `--ink` resolves to cream `#f4efe5`.
- **Accent phrase and eyebrow dot:** these use `--accent`, which becomes `#d49271` (about 7.0:1 on charcoal). The default `#8a4d2e` would fail contrast here, at about 2.6:1.
- **"Get directions" button:** it is a regular `.btn-primary`. Because of the inverse tokens it renders as cream fill with charcoal text, and on hover it fills with light clay. No overrides and no raw colors are needed.

> Prototype note: `page-care.jsx` sets `background: var(--ink)` inline on the button. The production file uses plain `.btn-primary`, which gives the same result through tokens. Build from the production file.

**Tokens in use:**

| Token | Used for |
|---|---|
| `--bg` | page, fact cells, step cards, note box, heart items, dark band (inverse) |
| `--bg-2` | How to apply band |
| `--bg-3` | placeholder stripe only |
| `--ink` | headings, note box text and label, 2px heart rule, button fill |
| `--ink-2` | lede, body |
| `--ink-3` | eyebrows, mono labels, breadcrumb (5.2:1) |
| `--ink-4` | breadcrumb `/` separators only (decorative) |
| `--line` / `--line-strong` | hairline grids, facts rules, note box border, address rule |
| `--accent` | headline accent phrase, eyebrow dots, step numerals, heart labels, "Jesus Christ" italic, breadcrumb current page |

**Tokens that do two jobs:**
- `--ink` is both text and the button fill.
- `--bg` is both the page background and the button text.
- The **note box deliberately uses `--ink`**, not `--ink-2`, for its label and text. The reapply rule is the one eligibility condition a reader must not miss, so it gets full-strength ink inside a stronger `--line-strong` border.

**Scrims:** none. No text sits on a photo.

---

## 3. Typography

**Inter Tight** (400/500/600/700), **JetBrains Mono** (400), **Newsreader** (400 + italic).

| Element | Font / class | Size | Line-height | Weight | Tracking |
|---|---|---|---|---|---|
| Breadcrumb | mono `.mono` | 12px, uppercase | — | 400 | 0.04em |
| Hero h1 | sans `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 | −0.03em |
| Lede | sans `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 | −0.005em |
| Fact value | sans | 20px | 1.3 | 500 | −0.012em |
| Section h2 | sans `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 | −0.025em |
| Heart statement 1 | sans `.body` | 19px (18px at ≤560) | 1.6 | 400 | — |
| Heart statement 2 | **serif** | `clamp(22px,2.2vw,30px)` | 1.35 | 400 (+ italic) | −0.01em |
| Step numeral | sans | `clamp(44px,4.4vw,64px)` | 0.9 | **700** | −0.04em |
| Step h3 | sans `.title` | 22px | — | 600 | −0.012em |
| Step body / note | sans `.body` | 17px | 1.6 | 400 | — |
| Where h2 | sans `.display-l` | as hero | 0.98 | 600 | −0.03em |
| Address | sans | 22px | 1.35 | 500 | −0.012em |
| Button | sans `.btn` | 14px | — | 500 | −0.005em |
| Eyebrow | sans | 12px, uppercase | — | 600 | 0.18em |

**16px floor:** every piece of readable content is at least 16px at every viewport.

Text below 16px never carries meaning on its own:
- **Breadcrumb:** it is navigation, and the h1 carries the page identity.
- **Fact labels:** each is paired with a self-explanatory value.
- **"Please note":** the sentence next to it states the full rule.
- **Heart labels:** the statements stand on their own.

**Button (14px):** it is UI and matches the site-wide `.btn`.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (deduplicated): 8, 10, 12, 18, 20, 22, 24, 28, 32, 36, 40, 56, 64, 72, 80, 96 px.

**Section rhythm:**
- **Default:** sections use `96px 0` (`72px` at ≤720).
- **Breadcrumb:** `32px` top.
- **Hero:** `56px` top, `0` bottom (`40px` top at ≤720).
- **Facts section:** `80px` top, `0` bottom (`64px` top at ≤720).

**Borders:**
- 1px hairlines everywhere.
- Two deliberate heavier marks:
  - the **2px `--ink` rule** above the Our heart statements (the same device as Church Planting's realities)
  - the **`--line-strong` border** around the Please note box
- No shadows anywhere.

**Radius:**
- Square corners everywhere, including photos, cards and the note box.
- Pill button (`999px`).
- Round eyebrow dot.

**Hairline grids:** the facts strip and step cards use `gap:1px` over a `--line` background with filled cells. This collapses cleanly from 4 → 2 → 1 or 3 → 1 columns.

**Anchors:** "How to apply" in the hero links to `#how-to-apply`. The target has `scroll-margin-top:80px` to clear the sticky nav. Smooth scrolling is done with CSS (`html{scroll-behavior:smooth}`) and turns off under `prefers-reduced-motion`.

**Primitives reused:** `.wrap`, `.eyebrow` + `.dot`, `.display-l`, `.display-m`, `.title`, `.lede`, `.body`, `.mono`, `.btn` / `.btn-primary`, `.section-head` (+ `.right`), and `.ph`. Page classes use the `.care-` prefix. The breadcrumb uses `.crumbs`.

---

## 5. Layout, section by section

**0 · Breadcrumb (`nav.crumbs`)**
- An `<ol>` inside `.wrap`, flex with a 10px gap.
- The `/` separators come from `li + li::before` in `--ink-4`.
- The current page is `aria-current="page"` in `--accent`.
- "Help" is plain text, because it is a menu group, not a page.

**1 · Hero (`.care-hero`)**
- Grid `1.3fr 1fr`, gap 64, `align-items:end`, so the photo's bottom edge lines up with the button row.
- Left column: eyebrow (28px gap) → h1 (`max-width:15ch`, with "Wake Forest." in accent) → lede (28px gap) → action row (32px gap).
- Right column: a 4:5 photo.

**2 · Facts strip (`.care-facts`, `<dl>`)**
- 4 columns in a hairline grid, with a `--line-strong` rule above and below.
- Cells are padded `28/24px`: the `dt` label, a 10px gap, then the `dd` value.

**3 · Our heart (`.care-heart`)**
- Grid `minmax(0,1fr) minmax(0,1.4fr)`, gap 72, top-aligned.
- Left column: eyebrow + h2 (`max-width:12ch`, with "Lasting hope." in accent).
- Right column: a 2px ink rule, then two items separated by a hairline:
  - mono accent label → sans statement (19px, 54ch)
  - mono accent label → serif statement (40ch, with "Jesus Christ" in italic accent)

**4 · How to apply (`#how-to-apply`, `.care-apply`)**
- A full-width `--bg-2` band.
- `.section-head`: eyebrow + h2 on the left; "Funds are released quarterly." on the right.
- `ol.care-steps`: a 3-column hairline grid. Each card is padded `36/32/40px`: numeral → 20px → h3 → 12px → body.
- **Note box:** 32px below the steps. Grid `auto minmax(0,1fr)`, gap 20, baseline-aligned, padded `24/28px`, `--bg` fill with a `--line-strong` border, and `role="note"`.

**5 · Where to apply (`data-theme="dim"`, `.care-where`)**
- Grid `minmax(0,1.3fr) minmax(0,1fr)`, gap 64, bottom-aligned.
- Left column: eyebrow + h2 in `.display-l` (14ch, with "Building Five." in accent).
- Right column: a `--line-strong` top rule, 24px padding, then the "Address" label → `<address>` (22px) → 28px → the "Get directions ↗" button.

---

## 6. Interactivity inventory (all CSS, no JavaScript)

| Behavior | Mechanism | JavaScript? |
|---|---|---|
| "How to apply" jump | anchor `#how-to-apply` + `scroll-margin-top` + CSS `scroll-behavior:smooth` | none |
| "Get directions ↗" | external `<a target="_blank" rel="noopener">`, with sr-only "(opens in a new tab)" | none |
| Breadcrumb "Home" | plain link | none |
| Button hover | lift 1px, fill turns accent, arrow nudges | none |
| Focus states | `:focus-visible` 2px accent ring | none |

**No form.** Applications are taken **in person only**, as the copy states. Nothing on the page should imply an online application.

> The prototype scrolls with JavaScript (`scrollTo`). Production uses the CSS anchor version described above.

---

## 7. Responsive behavior

Breakpoints are **1080 / 880 / 720 / 560**.

**Desktop (over 1080px):** everything is laid out as described in §5.

**Tablet (721–1080px):**
- **≤1080:** the facts strip becomes **2×2**.
- **≤880:**
  - The hero stacks: text first, then the photo at **4:3**.
  - Our heart stacks, with the title above the statements.
  - The step cards become **1 column**.
  - Where to apply stacks: h2 first, then the address block.
  - The gap in stacked sections becomes 40px.

**Phone (375px):**
- **≤720:**
  - Gutters are 22px and sections are 72px.
  - `.section-head` stacks, and step card padding becomes `28/22/32px`.
- **≤560:**
  - **Facts strip:** 1 column of four full-width rows, each with its label above its value.
  - **Step cards:** already 1 column. The numeral scales down to 44px.
  - **Note box:** stacks, with "Please note" above the sentence and padding `20/22px`.
  - **Heart statement 1:** 18px.
  - **"Get directions":** a full-width button.
  - **Display headings:** these scale down with `clamp()` to their minimums of 44px (h1 and Where h2) and 36px (other h2s).

---

## 8. Content slots

**FACT** means church data that must match reality; keep it in `site.ts` or a data file. **COPY** means approved text, used word for word. **LABEL** means a heading added by the design, which needs church approval.

| Slot | Text | Type |
|---|---|---|
| Breadcrumb | Home / Help / Care Ministry | LABEL (nav) |
| Hero eyebrow | North Wake Care Team · Emergency financial assistance | LABEL (built from copy terms) |
| Hero h1 | Demonstrating love for our neighbors in / *accent:* Wake Forest. | LABEL (distilled from ¶1 sentence 1) |
| Hero lede | The North Wake Care Team seeks to demonstrate love … housing or utility expenses. | COPY (¶1 s1) |
| Hero button | How to apply | LABEL |
| Fact · Helps with | Portions of housing or utility expenses | **FACT** (from ¶1 s1) |
| Fact · Funds released | Quarterly | **FACT** |
| Fact · Application | In person · about 10 minutes | **FACT** |
| Fact · Interview | Typically 45 minutes | **FACT** |
| Heart eyebrow / h2 | Our heart / Tangible help. Lasting hope. | LABEL |
| Heart labels | For physical needs / Beyond physical needs | LABEL |
| Heart statement 1 | These funds, collected from North Wake Church, … assistance from the local church. | COPY (¶1 s2) |
| Heart statement 2 | Beyond caring for physical needs, our great desire … receiving prayer from team members. | COPY (¶1 s3) |
| Apply eyebrow / h2 | How to apply / Three steps, in person. | LABEL |
| Apply intro | Funds are released quarterly. | COPY (¶2 s1) |
| Step titles | Apply in person / Meet and pray / Funds dispersed | LABEL |
| Step 01 body | Please complete an application in person at our church office reception desk in **Building Five**. The application takes **10 minutes** to complete. | COPY (¶2 s2, first clause, **+ s5 first half**), includes FACTs |
| Step 02 body | The care team schedules a meeting to pray for applicants. The interview typically takes **45 minutes** with our care team. | COPY (¶2 s2, second clause, **lightly recast**, + s5 second half) |
| Step 03 body | Funds are released **quarterly**, and dispersed on a **first-come, first-served** basis until they are depleted for each quarter. | COPY (¶2 s1 + s3, **combined**) |
| Note | Applicants who received funding from North Wake in the **last 12 months** must wait to reapply until that 12-month period has passed. | COPY (¶2 s4), includes FACT |
| Where eyebrow / h2 | Where to apply / Church office reception desk, Building Five. | LABEL / **FACT** |
| Address | **1212 S Main St / Wake Forest, NC** | **FACT** |
| Maps URL | `https://www.google.com/maps/search/?api=1&query=1212+S+Main+St+Wake+Forest+NC` | **FACT** |

**Edits to flag for church sign-off:** these are the only places the supplied wording was restructured.
- **Step 01/02:** the source sentence *"Please complete an application in person at our church office reception desk in Building Five before the care team schedules a meeting to pray for applicants."* is split across the two steps. "before" is dropped, and the second half is recast as "The care team schedules a meeting to pray for applicants."
- **Step 01/02:** *"The application takes 10 minutes to complete and the interview typically takes 45 minutes with our care team."* is split between the same two steps.
- **Step 03:** combines ¶2 sentences 1 and 3.
- **Duplicate text:** "Funds are released quarterly." appears twice, once as the section intro and once in step 03. Pick one if the repetition bothers you.

**Missing, recommended before launch:**
- **Office hours** for the reception desk. Applying is in person only, so people need to know when to come.
- **A phone number or email** for questions.
- **Where Building Five is** on campus (a campus map link or a one-line landmark), since first-time visitors won't know.

**Typo in the source:** "Funds are **dispersed**" is used as supplied. The standard word here is "**disbursed**". Recommend correcting it (it appears in step 03).

---

## 9. Assets and photo slots

| # | Slot | Aspect | Shot description |
|---|---|---|---|
| 1 | Hero · care team | **4:5** (4:3 when stacked ≤880) | A Care Team member praying with, or sitting across from, a neighbor at a table in the church office. The mood is warm and dignified. **Faces should be turned away or show consenting volunteers only; never an identifiable recipient.** |

It is the only photo slot. When the photo arrives, replace the `.ph` block with `<img>` (`loading="eager"`, `object-fit:cover`, explicit width and height), exported at 1200px or wider on the short edge, in WebP or AVIF with a JPG fallback, via `astro:assets`.

**Privacy note:** this page describes financial hardship. Hero photography must not show people identifiable as recipients. Staged photos with volunteers, or photos of hands, tables and the office, are the safe choice.

**Fonts:** Inter Tight (400/500/600/**700**; 700 is for the step numerals), JetBrains Mono (400), Newsreader (400 + italic).

**Icons:** none. `→` and `↗` are Unicode characters.

---

## 10. Build checklist for Claude Code (Astro)

1. Create `src/pages/care.astro` (or match the live site's Help route) in the existing layout. Put the `.care-*` and `.crumbs` CSS in a scoped `<style>`. The shared primitives and **both token sets** should already be global; add `[data-theme="dim"]` globally if it is missing.
2. **Breadcrumb:** if the live site has already shipped the approved **inset breadcrumb bar** (the full-width bar flush under the nav, from the Kids page work), use that component here instead of the plain `.crumbs` markup, so all Help pages match the live standard. The trail content stays Home / Help / Care Ministry.
3. Keep the dark band as `data-theme="dim"` + tokens + plain `.btn-primary`. Don't hard-code any hex values.
4. Read the FACT slots (address, Maps URL, Building Five, quarterly timing, the 10- and 45-minute durations, the 12-month rule) from shared data where possible.
5. **Use the correct HTML elements:**
   - `nav[aria-label=Breadcrumb] > ol`
   - `<dl>` for facts
   - `<ol>` for steps
   - `role="note"` on the reapply box
   - `<address>` for the address
   - `aria-hidden` on the decorative numerals
   - one h1
6. **Reusable components:** candidates to share with other pages.
   - `<HelpHero>`: the Help-group split hero. Use it for Feed, Hope, Care and Mercy Health Clinic.
   - `<FactsStrip>`: the same pattern as Come Visit.
   - `<NumberedSteps>`: the hairline step grid. Also fits Membership and Hope Counseling's process.
   - `<CalloutNote>`: the Please note box. Good for any eligibility or policy line.
   - `<InverseLocationBand>`: the dark "where" band. Feed's pantry location could use it.
   - `<Breadcrumb>`: see item 2.
7. Ship no JavaScript: no client directives or islands, and CSS-only smooth scrolling.
8. Resolve §8 before launch: the step restructuring sign-off, "dispersed" vs "disbursed", and adding office hours, contact details and a Building Five wayfinding note.
9. QA at 1440, 1024, 768 and 375 against `care-ministry.html`. Check that the note box stays readable and that the hero photo bottom-aligns with the button row.
