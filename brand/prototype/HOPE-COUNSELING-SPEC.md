# Design package — HOPE Counseling Center (`/hope-counseling`)

This is the build-ready spec for the **North Wake Church "HOPE Counseling" page** (Help group), for the live **static Astro** site. The page is a one-page summary of **thehopecounselingcenter.org** (its Home, About, Services, Counselors, FAQ and Contact pages), and it links back to the full site for requests and the FAQ.

The source of truth is **`hope-counseling.html`** in this folder. It is standalone, runnable, uses production markup (no React, tweaks or routing), and contains **zero JavaScript**.

> This version replaces the earlier HOPE page. The prototype keeps the old page available under **Tweaks → HOPE Counseling → Original**.

---

## 1. What the page is

HOPE is a donation-based, church-based biblical counseling ministry. It is not a licensed clinical service. The page is built for someone who is hurting and looking for help, and it answers four questions quickly and gently:

- **What is it?** Mission and Scripture basis.
- **Is it for me?** Who counsels, what HOPE helps with, and what it doesn't.
- **What happens?** Three expectations, then three steps to begin.
- **What does it cost?** Donation basis plus a $35 refundable deposit.

**Nine sections** (numbered 0–8 to match the file):

| # | Section | Ground |
|---|---|---|
| 0 | Breadcrumb: Home / Help / HOPE Counseling | `--bg` |
| 1 | Hero (Help-group split): eyebrow, h1, lede, Request + Call buttons, 4:5 photo | `--bg` |
| 2 | Facts strip: Cost, Deposit, When, Response | `--bg` |
| 3 | Counselee testimony over the **light-through-trees photo** | **dark photo band** |
| 4 | Who we are: history, volunteers, oversight, plus a "Please know" licensing note | `--bg` |
| 5 | What to expect: three ruled cards with Scripture references | `--bg` (hairline divider) |
| 6 | What we help with: Emotional, Relational, Group, Outside our scope | warm `--bg-2` |
| 7 | How to begin: serif h2, "first step" line, 3 numbered steps, Request + FAQ buttons | `--bg` |
| 8 | Contact: Scheduler phone, address, donations, link to full site | **dark inverse band** |

**Header:** the Help-group split, matching Feed, Care and Mercy.

**Why the photo sits behind the testimony:** light breaking through trees suggests hope arriving in a dark place. That is exactly what the testimony describes. It is the page's single photo moment.

**Newsreader** is used for:
- the testimony
- the Scripture references
- the "How to begin" h2

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* inverse set — testimony text + contact band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay, about 7.0:1 on charcoal */
}
```

**Photo scrim (the single literal-value exception):**
```css
radial-gradient(ellipse 72% 78% at 50% 52%,
  rgba(26,24,20,0.84) 0%, rgba(26,24,20,0.70) 55%, rgba(26,24,20,0.50) 100%)
```
- `rgba(26,24,20,…)` is `--ink` (#1a1814) with alpha applied.
- It is darkest in the centre, behind the quote and the brightest part of the sunburst.
- It lightens toward the edges so the golden rays still glow.

**Where the dark theme applies:**
- **Testimony:** only the inner `.wrap-narrow` carries `data-theme="dim"`. Its text is cream `--ink`, with `--ink-2` for the second line and eyebrow, and the italic is light clay.
- **Contact band:** the whole `<section data-theme="dim">`.

**Colors used:**

| Token | Role |
|---|---|
| `--bg` | page, fact cells, service panels, contact band (inverse) |
| `--bg-2` | Services band |
| `--bg-3` | "Outside our scope" panel, a deliberately deeper tone to signal a limit |
| `--ink` | headings, 2px rules, note text, service items, button fill |
| `--ink-2` | lede, body, out-of-scope items |
| `--ink-3` | eyebrows, mono labels, breadcrumb |
| `--ink-4` | breadcrumb separators only |
| `--accent` | h1 accent, serif italics, Scripture references, numbers, panel labels, eyebrow dots |

---

## 3. Typography

**Fonts:** Inter Tight (400/500/600/700), JetBrains Mono (400), Newsreader (400 and italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | sans `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 |
| Testimony | **serif** | `clamp(30px,3.8vw,54px)` | 1.22 | 400 (+ italic) |
| Testimony second line | sans | 18px | 1.5 | 400 |
| Who / Expect / Services / Contact h2 | sans `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 |
| Begin h2 | **serif** `.serif-h` | `clamp(40px,5vw,72px)` | 1.04 | 400 (+ italic) |
| Expect h3 | sans `.display-s` | `clamp(28px,3.4vw,48px)` | 1.05 | **700** |
| Scripture reference | **serif italic** | 17px | — | 400, `nowrap` |
| Who lead / body | sans | 19 / 18px | 1.6 | 400 |
| Service item | sans | 19px (Group 17px, limits 16px) | 1.4 | 600 / 400 |
| Step number | sans | 40px | 0.9 | **700** |
| Step title | `.title` | 22px | — | 600 |
| Step / expect / note body | sans | 17px | 1.6 | 400 |
| Fact value | sans | 19px | 1.35 | 500 |
| Contact value | sans | `clamp(16px,1.8vw,19px)` | — | 500 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Button | `.btn` | 14px | — | 500 |
| Eyebrow / mono | 12px uppercase | — | — | 600 / 400 |

**Accessibility:**
- Readable content is 16px or larger everywhere.
- The prototype set the testimony's second line in mono. Here it is 18px sans instead, so a quotation never relies on micro-type.
- Scripture references use `nowrap`, so "Proverbs 18:13" never breaks.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (deduplicated): 6, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 40, 56, 64, 72, 80, 88, 96, 112, 150 px.

**Section spacing:**
- Default: `96px 0` (`72px` at ≤720).
- Breadcrumb: 32px top.
- Hero: 56px top.
- Facts: 80px top.
- **Testimony:** 96px top margin, 150px padding (112 / 88 on smaller screens).
- Expect: `padding-top:0`, with a `--line-strong` rule and 72px of space instead.

**Borders:**
- 1px hairlines throughout.
- 2px `--ink` rules above the Who body and each Expect card.
- A `--line-strong` outlined "Please know" note.
- No shadows.

**Radius:**
- Square corners throughout.
- Buttons are pills.
- The eyebrow dot is round.

**Hairline grids** (facts, services): `gap:1px` over `--line`.

**Primitives reused:** `.wrap`, `.wrap-narrow`, `.eyebrow` + `.dot`, `.display-l/-m/-s`, `.title`, `.lede`, `.body`, `.mono`, `.btn-primary/-ghost`, `.section-head`, `.ph`, `.serif-h`. Page-specific classes use the `.hc-` prefix.

---

## 5. Layout, section by section

**0 · Breadcrumb:** `nav.crumbs > ol`. "Help" is plain text.

**1 · Hero:**
- Grid: `1.3fr 1fr`, gap 64, bottom-aligned.
- Left column: eyebrow → 28px → h1 (14ch, "and hope." in accent) → 28px → lede → 32px → actions.
- Right column: 4:5 photo.

**2 · Facts:** a 4-column hairline `<dl>`. Cells are `28/24px`.

**3 · Testimony:**
- Full-bleed photo (`center 55%/cover`, with `--ink` as fallback), plus the absolute scrim and a relative inner wrapper (`.wrap-narrow[data-theme=dim]`).
- Contents are centred: eyebrow → 32px → serif `<blockquote>` (balanced, with the second sentence in italic accent) → 28px → the 18px second line.

**4 · Who we are:**
- Grid: `1fr / 1.5fr`, gap 72.
- Left column: eyebrow and h2 (12ch).
- Right column: 2px rule → 28px → lead (19px ink) → 20px → body (18px) → 28px → `.hc-note` (outlined grid, "Please know" above a 17px sentence).

**5 · What to expect:**
- Hairline divider, then 72px of space, then `.section-head` with the h2.
- `ol.hc-expect`: 3 columns, gap 32.
- Each card:
  - 2px rule → 22px
  - top row (flex-wrap: mono number + serif-italic reference, with a 6/14px gap) → 16px
  - h3 (700) → 12px
  - 17px body

**6 · What we help with:**
- `--bg-2` band.
- `.section-head`: h2 on the left, intro on the right.
- `.hc-scope`: a 4-column hairline grid of panels (`32/28px`, accent mono label, then list rows with hairlines):
  - Emotional
  - Relational
  - Group
  - Outside our scope: on `--bg-3`, with an ink label and 16px ink-2 items

**7 · How to begin:**
- Grid: `1fr / 1.6fr`, gap 72.
- Left column: eyebrow → serif h2 (11ch) → 24px → the "first step" line (38ch).
- Right column: `ol.hc-steps` rows (grid: 72px number, then title + body, with hairlines) → 28px → Request + FAQ buttons.

**8 · Contact:**
- Grid: `1.3fr / 1fr`, gap 64, bottom-aligned.
- Left column: eyebrow → h2 (the domain has a `<wbr>` before "center.org" and `overflow-wrap:anywhere`) → button.
- Right column: `<dl>` with Scheduler, Address and Donations.

---

## 6. Interactivity inventory (all CSS, no JavaScript)

| Behavior | Mechanism | JS? |
|---|---|---|
| Request counseling (×2) | external `/request-counseling` on HOPE's site, `target=_blank` + sr-only note | none |
| Call Scheduler (×2) | `tel:+19195561546,509` (the comma pauses, then dials the extension) | none |
| Read the FAQ | external `/faq` | none |
| Visit the HOPE site | external root | none |
| Donations | `#NORTHWAKE-GIVING-URL` (placeholder) | none |
| Hover / focus | button lift and fill, `:focus-visible` ring | none |

**No forms.** Counseling requests stay on HOPE's own confidential form, which is the right place for sensitive intake data.

---

## 7. Responsive behavior

Breakpoints: **1080 / 880 / 720 / 560**.

**Desktop (>1080px):** layout as in §5.

**Tablet:**
- **≤1080:** facts become **2×2**; services become **2×2** (Emotional + Relational, then Group + Outside).
- **≤880:**
  - Hero, Who, Begin and Contact stack, with a 40px gap.
  - The hero photo becomes 4:3.
  - Expect becomes 1 column (40px gap).
  - Testimony padding becomes 112px.

**Phone (375px):**
- **≤720:**
  - Gutters 22px; sections 72px.
  - Testimony: 72px top margin, 88px padding.
  - `.section-head` stacks.
  - Expect top padding 56px; panel padding `28/22px`.
- **≤560:**
  - Facts and services go to 1 column. "Outside our scope" stays last, so readers see it after the services.
  - The note and contact rows stack.
  - The step number column is 52px.
  - Buttons are full width.
  - The testimony shrinks to 30px.
  - Scripture references stay on one line and wrap under the number if needed.

**Photo crop:** at `center 55%` the sunburst stays roughly centred behind the quote on every crop. The radial scrim is keyed to that same point.

---

## 8. Content slots and sources

- **FACT:** HOPE data that must match their site. Keep it in shared data and re-check it every season.
- **SOURCE:** HOPE's own words from thehopecounselingcenter.org.
- **DISTILLED:** condensed or lightly reworded from their site.
- **LABEL:** added by the design.

| Slot | Text | Type · source |
|---|---|---|
| Eyebrow | The HOPE Counseling Center · A ministry of North Wake | SOURCE (Home) |
| h1 | Compassion, mercy, practical help — / and hope. | LABEL (from Home mission) |
| Lede | We want to pass on to others … (2 Corinthians 1:3-4). We believe God provides … through his Son, Jesus Christ. | SOURCE + DISTILLED (Home; 2nd sentence condensed) |
| Buttons | Request counseling · Call 919.556.1546 x509 | LABEL / **FACT** |
| Facts ×4 | Donation basis — no set fee · $35 cash, refundable · Mon–Fri 9–5, some after hours · replies within 24 hours | **FACT** · DISTILLED (FAQ, Contact) |
| Testimony | "At HOPE, it was immediately different. Scripture was the authority and my heart was the target." / "The words of Christ diagnosed me better than anyone else." | SOURCE (Home). The opening clause ("I had received counseling from several well meaning therapists. However,") is trimmed. Get approval for the trim. |
| Who h2 | A church-based counseling center. | SOURCE (About) |
| Who body | 2001 origin · volunteers · Elder oversight | DISTILLED (About) |
| Please know | Not licensed … Master's in Biblical Counseling or Divinity … | DISTILLED (About, Counselors) |
| Expect ×3 | Listening counselor (Prov 18:13) · Scripture (Isa 9:6) · Work (2 Tim 3:16–17) | DISTILLED (About, "Expect…" list); the references are SOURCE |
| Services | Emotional ×5 · Relational ×4 · Living Waters · Outside scope ×3 | SOURCE (Services); "psychotic features" is restated as an exclusion |
| Begin h2 / lead | The first step toward change. / We believe the first step toward change is to admit you have a problem … | LABEL / SOURCE (Home) |
| Steps ×3 | Request → Scheduler within 24 hrs → Begin (pen, journal, Bible, $35 deposit) | DISTILLED (Request, Contact, FAQ) |
| Contact | 919.556.1546 x509 · 1212 S. Main Street, Wake Forest, NC 27587 · donations via North Wake | **FACT** (Contact, FAQ) |
| URLs | `/`, `/request-counseling`, `/faq` on thehopecounselingcenter.org | **FACT** |

**Deliberately left out** (it stays on HOPE's site, which the page links to):
- the fair-market price comparison ($75–$125 per session)
- the sliding-scale details
- counselor bios
- the FAQ on counselor availability and caseloads
- full Scripture quotations

**Needed before launch:**
1. The **North Wake giving URL** for Donations.
2. **HOPE team approval** of all DISTILLED text, the trimmed testimony, and the "Please know" wording. Get this especially for the licensing note, which has legal weight.
3. A decision on whether the testimony's author has consented to its use on the church site.
4. A **retirement plan for the old HOPE page**. The prototype's "Original" version isn't part of this package.

---

## 9. Assets and photo slots

| # | Asset | Use | Notes |
|---|---|---|---|
| 1 | `assets/hope-light.jpg` | Testimony band background | **Supplied** (Unsplash, Kamal Bilal): sunlight bursting through trees, warm gold, with teal sky at the edges. Ship a ~2400px-wide WebP. Confirm the Unsplash licence (free commercial use). |
| 2 | Hero · counseling room | **4:5** (4:3 stacked) | **Placeholder.** An empty, welcoming counseling room at North Wake: two chairs, soft window light, a Bible and tissues on a side table. **Never photograph counselees**, and avoid staged "therapy session" imagery. The space itself should communicate safety and confidentiality. |

Replace `.ph` with `<img>` (`loading="eager"`, `object-fit:cover`, width and height set) via `astro:assets`.

**Fonts:** Inter Tight (including 700), JetBrains Mono, Newsreader 400 and italic.

**Icons:** none.

---

## 10. Build checklist for Claude Code (Astro)

1. **Page file:** create `src/pages/hope-counseling.astro` in the existing layout. Match the live Help route, and redirect the old HOPE URL if it changes.
   - Scope the `.hc-*` and `.crumbs` CSS to the page.
   - Tokens, `[data-theme="dim"]` and `.serif-h` should already be global.
2. **Breadcrumb:** if the live site uses the approved inset breadcrumb bar, use it here.
3. **Testimony band:** apply `data-theme="dim"` to the inner wrapper only. Keep the radial scrim as the single documented literal.
4. **Shared data:** keep HOPE's facts, phone number and URLs in `src/data/hope.ts`, so they can be checked against their site.
5. **Semantics:**
   - `nav > ol` for the breadcrumb
   - `dl` for the facts and contact details
   - `blockquote` for the testimony
   - `ol` for the expectations and steps
   - `ul` for the service lists
   - `role="note"` on the licensing note
   - one `h1`
   - `aria-hidden` on the step numbers
   - the new-tab note on external links
6. **Reusable components** (candidates to share with other pages):
   - `<HelpHero>`: shared with Feed, Care and Mercy.
   - `<FactsStrip>`
   - `<PhotoStatementBand>`: shared with International Missions.
   - `<RuledCards>`, with an optional `ref` slot for Scripture references.
   - `<PanelGrid>`, with a `limit` variant: shared with Mercy's scope.
   - `<NumberedSteps>`: shared with Care.
   - `<InverseContactBand>`
7. **No JavaScript:** ship none.
8. **Before launch:** resolve everything listed under "Needed before launch" in §8, especially HOPE approval of the licensing note and testimony consent.
9. **QA** at 1440, 1024, 768 and 375 against `hope-counseling.html`. Check that:
   - the testimony keeps AA contrast over the sunburst at every crop
   - Scripture references never break
   - the domain in the contact h2 never overflows
