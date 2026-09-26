# Design package — Membership (`/membership`)

This is the build-ready spec for the **North Wake Church "Membership" page** (About group), for the live **static Astro** site.

The source of truth is **`membership.html`** in this folder. It is standalone and runnable, uses the production markup (no React, tweaks or routing), and contains **zero JavaScript**.

This page replaces the earlier Membership page. In the prototype, the old version is still available at `#membership-original`.

---

## 1. What the page is

The page walks someone considering membership through the church's **five-step process**, clearly and warmly. The approach is:
- The process is presented as a relationship ("walked together"), not paperwork.
- The one required first action — **contact the church office** — shows up four times: in the hero, in step 1, in the process intro, and in the closing band.

**Five sections** (numbered 0–4 in the file):

| # | Section | Ground |
|---|---|---|
| 0 | Breadcrumb: Home / About / Membership | `--bg` |
| 1 | Hero (F · Warm Band): eyebrow, h1, lede, 2 buttons, full-height photo | warm `--bg-2` |
| 2 | Facts strip: The process · Conversation · New Members Course · To complete it | `--bg` |
| 3 | The membership process: sticky serif intro on the left, numbered 1–5 timeline on the right | `--bg` |
| 4 | Contact: serif "We'd love to *walk with you.*", office address, buttons | **dark inverse band** |

**Header:** this page uses the F · Warm Band. That matches the other About and Mission sub-pages, and the header concept you approved.

**Newsreader serif** is used for:
- the process h2
- the a / b / c letters
- the contact h2

The page's pastoral lines get the site's devotional voice.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* contact band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay — about 7.0:1 on charcoal */
}
```

- **No literal color values.** There is no photo scrim on this page.
- **Contact band:** `<section data-theme="dim">`, built only from tokens. Its `.btn-primary` automatically renders as a cream fill with charcoal text.

| Token | Role |
|---|---|
| `--bg` | page, fact cells, connect cards, step number circles (these mask the timeline line), contact band (inverse) |
| `--bg-2` | hero band, "Missed a class?" note |
| `--ink` | headings, 2px process rule, number circle borders, "Required" tag, note text, button fill |
| `--ink-2` | lede, body |
| `--ink-3` | eyebrows, mono labels, connect card body |
| `--ink-4` | breadcrumb `/` separators only |
| `--line-strong` | timeline connector, facts rules, requirement list top rule, note border |
| `--accent` | h1 accent word, serif italics, a/b/c letters, A/B/C letters, course link, eyebrow dots |

**The "Required" tag** deliberately uses `--ink`, not `--accent`. It is the one hard requirement on the page, so it gets full-strength ink.

---

## 3. Typography

Fonts: **Inter Tight** (400/500/600), **JetBrains Mono** (400), **Newsreader** (400 and italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | sans `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Fact value | sans | 20px | 1.3 | 500 |
| Process h2 | **serif** `.serif-h` | `clamp(40px,4.6vw,68px)` | 1.04 | 400 (+ italic) |
| Process intro | sans | 17px | 1.6 | 400 |
| Step h3 | sans `.display-s` | `clamp(28px,3.4vw,48px)` | 1.05 | 600 |
| Step number | sans | 20px (16px on phones) | — | 600 |
| Step body | sans | 18px | 1.6 | 400 |
| Connect letter | **serif italic** | 20px | — | 400 |
| Connect title / body | sans | 17px / 16px | 1.3 / 1.6 | 600 / 400 |
| Requirement | sans | 18px | 1.4 | 500 |
| Note / course link | sans | 16px | 1.6 | 400 / 500 |
| Contact h2 | **serif** | `clamp(44px,5.6vw,88px)` | 1.02 | 400 (+ italic) |
| Address | sans | 22px | 1.35 | 500 |
| Button | `.btn` | 14px | — | 500 |
| Eyebrow / mono / tag | 12px uppercase | — | — | 600 / 400 |

**Accessibility:**
- All readable text is **16px or larger**.
- Step numbers and letters are `aria-hidden`. Each h3 carries an sr-only "Step N:" prefix, so screen readers still announce the order.
- "Missed a class?" is paired with the full sentence.
- "Required" is paired with the requirement text.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (deduplicated): 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 44, 48, 56, 64, 72, 80, 88, 96 px.

**Section rhythm:**
- Default is `96px 0` (`72px` at ≤720).
- The hero band gets a `32px` top margin under the breadcrumb.
- The facts section has `80px` top padding and no bottom padding.

**Borders:**
- 1px hairlines everywhere.
- A **2px `--ink` rule** sits above the timeline (the same device used on Care, Missions and Training).
- **Timeline connector:** a 1px `--line-strong` vertical line (a `::after` pseudo-element). It runs from below each number circle to the next step and stops at the last step.
- **Number circles:** a 1px `--ink` ring on a `--bg` fill.
- **"Required" tag:** 1px `--ink` border.
- No shadows.

**Radius:**
- Square corners everywhere else.
- Number circles are round (`50%`).
- Buttons are pills (`999px`).
- The eyebrow dot is round.

**Hairline grids:** the facts strip (4 columns) and the connect cards (3 columns) use `gap:1px` over `--line`.

**Primitives reused:** `.wrap`, `.eyebrow` + `.dot`, `.display-l`, `.display-s`, `.lede`, `.body`, `.mono`, `.btn-primary` / `.btn-ghost`, `.ph`, `.serif-h`. Page classes use the `.mb-` prefix; the breadcrumb uses `.crumbs`.

---

## 5. Layout, section by section

**0 · Breadcrumb.** `nav.crumbs > ol`. "About" is plain text (it's a menu group, not a page).

**1 · Hero.**
- Grid `1.15fr / 1fr`, `align-items:stretch`.
- The text column uses a gutter-aware left padding: `max(40px, calc((100vw - 1320px)/2 + 40px))`.
- Text column order: eyebrow → 28px → h1 (14ch, "belonging" in accent) → 28px → lede → 32px → actions.
- Photo column: `min-height:520px`.

**2 · Facts.** A 4-column hairline `<dl>`. Cells are `28/24px`.

**3 · Process.**
- Grid `1fr / 2fr`, gap 72.
- **Left column** (`position:sticky; top:120px`): eyebrow → serif h2 (10ch) → 20px → intro (34ch).
- **Right column:** `ol.mb-steps` — a 2px rule, then 40px, then the steps.
- **Each step:** a grid of `96px` (56px number circle) and body, gap 40, 56px below. The body has 8px top padding so the h3 lines up with the circle's center.
  - **Step 2** adds `ul.mb-connect`: 3 hairline cards (`22/20/24px`). Each card has a serif letter, a title and a body.
  - **Step 4** adds:
    - `ul.mb-reqs`: rows on a grid of `32px` letter / text / optional tag.
    - `.mb-note`: an outlined `--bg-2` grid with the label on the left and the sentence on the right.
    - `.mb-link`: an underlined external link.

**4 · Contact** (`#contact`).
- Grid `1.3fr / 1fr`, gap 64, bottom-aligned.
- **Left:** eyebrow ("Step one") → serif h2 (12ch) → 24px → lede.
- **Right:** `.mb-office` — a `--line-strong` top rule → "Church office" label → `<address>` → buttons.

---

## 6. Interactivity (all CSS, no JavaScript)

| Behavior | Mechanism | JS? |
|---|---|---|
| Hero "Contact the church office" | anchor `#contact`, `scroll-margin-top` + CSS smooth scroll (off under reduced-motion) | none |
| Sticky process intro | `position:sticky` (static at ≤980) | none |
| New Members Course (×3) | external link to `https://northwake.com/new-member-course/`, `target=_blank` + sr-only note | none |
| Contact button | **`#CHURCH-OFFICE-CONTACT` placeholder**, see §8 | none |
| Hover / focus | button lift, fill and arrow; link color; `:focus-visible` ring | none |

- **No form.** Step 1 is simply "contact the church office".
- The "My Story" Google Form is sent by the office later, so it is intentionally **not** linked from the page.

---

## 7. Responsive behavior

Breakpoints: **980 / 880 / 720 / 560**.

**Desktop (above 980px):** everything as described in §5.

**Tablet (≤980 and ≤880)**
- **≤980:**
  - The process and contact sections stack, with a 48px gap.
  - The intro stops being sticky and sits above the timeline.
- **≤880:**
  - The hero stacks, with the photo on top at 4:3 and text padding `56/40/64px`.
  - The facts strip becomes 2×2.
  - The connect cards become 1 column.

**Phone (375px; ≤720 and ≤560)**
- **≤720:** 22px gutters, 72px sections, facts section top padding 64px.
- **≤560:**
  - Hero text padding becomes `44/22/56px`.
  - The facts strip becomes 1 column.
  - **Timeline:**
    - The grid becomes `44px / 1fr` with a 16px gap.
    - Number circles shrink to 40px (16px type).
    - The connector moves to `left:19px; top:48px`, so it stays centered on the smaller circle.
  - **Requirement rows:** the letter, text and tag stay on one line. The tag moves to the end, and the text wraps if needed.
  - **"Missed a class?" note:** it stacks.
  - **Buttons:** they go full width.
  - **Headings:**
    - The serif h2s shrink to 40px (process) and 44px (contact) via `clamp()`.
    - Step h3s shrink to 28px.

---

## 8. Content slots

Key:
- **FACT** — process data that must match what the office actually does. Keep it in shared data.
- **SOURCE** — from the church office's process notes.
- **REUSED** — approved copy from the previous Membership page.
- **LABEL** — written for this design; stays within the church's existing wording and needs sign-off.

| Slot | Text | Type |
|---|---|---|
| Hero eyebrow | Considering membership | REUSED |
| Hero h1 | A way of *belonging*, growing, and sharing life together. | REUSED |
| Hero lede | If you're exploring North Wake and wondering … we'd love to walk with you. | REUSED |
| Facts ×4 | Five steps · A brief 30 minutes with a staff leader · Six classes · Attend at least 4 of 6 | **FACT** (SOURCE) |
| Process h2 | Five steps, *walked together.* | REUSED (old page) |
| Process intro | It begins simply — by letting the church office know you'd like to pursue or consider membership. | LABEL (from source step 1) |
| Step 1 | Contact the church office / Simply contact the church office … | LABEL title / SOURCE |
| Step 2 intro | Our office will let you know the dates for the next New Members Course and encourage you to: | SOURCE (reworded to face the reader) |
| Step 2 a / b / c | Grow Group · Adult Discipleship Course · "My Story" | SOURCE |
| Step 2 card bodies | We'll send you a Grow Groups brochure … / information on current courses / a short online form … | LABEL (rewritten from the internal notes "Karen sends…") |
| Step 3 | A get-to-know-each-other conversation / We'll then schedule a brief, 30-minute conversation with a staff leader … | SOURCE (notes about who schedules it removed) |
| Step 4 A / B / C | Attend at least 4 of the 6 classes · Turn in all required documents · Sign the membership covenant (**Required**) | SOURCE / **FACT** |
| Missed a class? | If fewer than 4 classes are attended, you'll attend the missing classes at the next course … | SOURCE (reworded to second person) |
| Step 5 | Presented and affirmed / New members are presented to and affirmed by the congregation. | SOURCE |
| Contact h2 / lede | We'd love to *walk with you.* / Simply contact the church office … | REUSED phrase / SOURCE |
| Office address | 1212 S Main St, Wake Forest, NC | **FACT** |
| Course URL | `https://northwake.com/new-member-course/` | **FACT** |

**Internal notes removed on purpose.** These stay off the public page:
- "Karen sends brochure"
- "Karen sends info"
- "Karen sends GoogleForm"
- "Karen emails; Jake manages"

The page uses "our office" / "we" instead, so staff changes never require a copy edit.

**Removed from the old page:** the invented course dates ("Spring 2026 · May 3 – Jun 7", etc.). Dates now live on the linked New Members Course page.

**Needed before launch:**
1. **Church office contact.** Provide an email or phone number for `#CHURCH-OFFICE-CONTACT`, used in the hero and contact band. A `mailto:` is the natural choice.
2. **Church approval** of every LABEL row.
3. **Confirm with the office:** is "at least 4 of the 6 classes" still current? And what are the "required documents"? Consider listing them, or linking to them on the course page.
4. **Old page:** retire `#membership-original` and redirect any old URL.

---

## 9. Assets and photo slots

| # | Slot | Aspect | Shot description |
|---|---|---|---|
| 1 | Hero · new members welcomed | fills the band (about 4:5 on desktop, `min-height:520`); **4:3** when stacked | New members standing at the front during a Sunday service, being presented to and welcomed by the congregation (step 5). The mood is warm and joyful. Show backs or profiles, or shoot with the members' consent. |

This is the only photo on the page. To add it, replace `.ph` with `<img>` via `astro:assets`:
- `loading="eager"`
- `object-fit:cover`
- explicit width and height
- export 1400px or wider on the short edge, as WebP

**Fonts:** Inter Tight, JetBrains Mono, Newsreader 400 and italic.

**Icons:** none (`→` / `↗` are Unicode).

---

## 10. Build checklist for Claude Code (Astro)

1. **Page file.** Create `src/pages/membership.astro` in the existing layout.
   - Scope the `.mb-*` and `.crumbs` CSS to the page.
   - Tokens, `[data-theme="dim"]` and `.serif-h` should already be global.
2. **Breadcrumb.** If the live site uses the approved inset breadcrumb bar, use it here instead of `.crumbs`.
3. **Shared data.** Keep the FACT values (course URL, office address, 30 minutes, 6 classes, 4-of-6 rule) in shared data, for example `src/data/membership.ts`.
4. **Timeline connector.** Keep it as `.mb-step:not(:last-child)::after`, with the number circle's `--bg` fill sitting over it. Don't use images or SVG.
5. **Semantics.**
   - `nav > ol` for the breadcrumb.
   - `dl` for the facts strip.
   - `ol.mb-steps` for the steps, with an sr-only "Step N:" in each h3.
   - `ul` for the connect cards and the requirements.
   - `role="note"` on the note.
   - `<address>` for the office address.
   - One h1 per page.
   - The new-tab note on every external link.
6. **Reusable components.** Candidates to build once and share with other pages:
   - `<WarmBandHero>`
   - `<FactsStrip>`
   - `<StickyIntroSplit>`
   - `<NumberedTimeline>` — with the connector and an optional sub-content slot. It also fits Care's apply steps and Hope's "How to begin".
   - `<HairlineCards>`
   - `<RequirementList>`, with an optional tag
   - `<CalloutNote>`
   - `<InverseContactBand>`
7. **JavaScript.** Ship none.
8. **Before launch.** Resolve everything under "Needed before launch" in §8: the contact link, label sign-off and the office confirmations.
9. **QA.** Check at 1440, 1024, 768 and 375 against `membership.html`:
   - The timeline connector stays centered on the circles at every size.
   - The sticky intro releases at ≤980.
   - The "Required" tag never wraps under its text on a 375px phone.
