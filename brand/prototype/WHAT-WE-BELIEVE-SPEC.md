# Design package — What We Believe (`/what-we-believe`)

This is the build-ready spec for the **North Wake Church "What We Believe" page** (About group), for the live **static Astro** site.

The source of truth is **`what-we-believe.html`** in this folder. It runs on its own, uses production markup (no React, tweaks or hash routing), and contains **zero JavaScript**.

**Content rule (non-negotiable):** every word of the statement of faith, the affiliation paragraph, the link labels, the Scripture references and their punctuation is reproduced **exactly as supplied**. Don't edit, summarize or "fix" any of it. That includes the inline reference on The Trinity and the duplicate "Rom. 8:9" on The Holy Spirit (see §8).

---

## 1. What the page is

The page holds the church's doctrinal statement, with its supporting perspectives and policy documents. The design treats it as a **reference document**:
- the statement itself is the main content
- the supporting documents and the safety information are clearly secondary
- cooperation, affiliation and membership are a quiet footnote

It has six sections, numbered 0–5:

| # | Section | Background | Weight |
|---|---|---|---|
| 0 | Breadcrumb: Home / About / What We Believe | `--bg` | — |
| 1 | Hero: worship photo, dark scrim, serif h1 "What We *Believe*" + intro | **dark photo** | high |
| 2 | Our Statement of Faith: **dark sticky index** on the left (7 numbered entries), articles on the right | `--bg` | **primary** |
| 3 | Perspectives & Church Documents: 2 grouped link lists | warm `--bg-2` | secondary |
| 4 | Safety & Reporting Concerns: domestic abuse statement + APOC box | `--bg` | secondary |
| 5 | Cooperation and Affiliation + Membership: small mono labels, 16px body | `--bg` | **footnote** |

**Header:** the worship photo (string lights, cross, worship team) sits under a left-weighted charcoal scrim. The serif h1 matches the devotional voice the site uses on Jesus, Mission and Women.

**Newsreader** is used for:
- the h1
- the article headings and numerals
- the Scripture references (italic)

---

## 2. Design tokens

```css
:root { --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce; --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
        --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22); --accent:#8a4d2e; --accent-ink:#ffffff; }
[data-theme="dim"] { --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620; --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
        --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22); --accent:#d49271; color:var(--ink); }
```

> **Bug to avoid:** `[data-theme="dim"]` must also set **`color: var(--ink)`**. Without it, child text that doesn't declare its own color inherits the body's already-resolved dark ink. That makes the hero h1 invisible on the photo; it happened once in the prototype. Add it to the global rule.

**Dark areas use only the `dim` token set:**
- the **hero text wrapper** (`.wwb-hero-inner`)
- the **sticky index panel** (`.wwb-index`, with `background: var(--bg)`, which resolves to `#1a1814`)

**Photo scrim** (the single literal-value exception):
```css
linear-gradient(90deg, rgba(26,24,20,0.90) 0%, rgba(26,24,20,0.78) 45%, rgba(26,24,20,0.62) 100%)
```
`rgba(26,24,20,…)` is `--ink` (`#1a1814`) with alpha applied. The scrim is darkest on the left, behind the headline, and lightest on the right, so the stage, cross and lights stay visible.

**Token roles:**

| Token | Role |
|---|---|
| `--bg` | page, article area, docs cards, footnote; **index panel + hero** under `dim` |
| `--bg-2` | Perspectives band, APOC box |
| `--ink` | article body (19px), headings, 2px rules, APOC text, button fill |
| `--ink-2` | lede, footnote body |
| `--ink-3` | eyebrows, mono labels, **Scripture references** |
| `--accent` | h1 italic, article numerals, index numbers, group labels, link arrows, inline links, eyebrow dot |

---

## 3. Typography

| Element | Font | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | **serif** | `clamp(52px,7.6vw,120px)` | 0.98 | 400 (+ italic) |
| Hero lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Index h2 | sans `.display-m` | `clamp(30px,3vw,42px)` | 1.02 | 600 |
| Index entry | sans | 16px | — | 500 |
| Article numeral | **serif italic** | 30px | 1.0 | 400 |
| Article h3 | **serif** | `clamp(30px,3vw,42px)` | 1.08 | 400 |
| Article body | sans | **19px** (18px on phones) | 1.65 | 400, `text-wrap:pretty`, 64ch |
| Scripture reference | **serif italic** | 17px | 1.6 | 400 |
| Section h2 (docs, safety) | sans `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 |
| Doc link | sans | 18px (Domestic Abuse 20px) | 1.4 | 500 |
| Group label / file type | mono | 12px uppercase | — | 500 / 400 |
| APOC body | sans | 18px | 1.6 | 400 |
| Footnote labels | mono | 12px uppercase | — | 400 |
| Footnote body | `.body` | **16px** | 1.6 | 400 |
| Button | `.btn` | 14px | — | 500 |

**Reading floor:** all readable content is 16px or larger. The articles run at 19px, because this is the page's long-form reading. File-type labels (Page, Sermons, PDF) are always paired with the link text, and the sr-only text also says "PDF".

---

## 4. Spacing, borders, radius

**Spacing values in use:** 8, 10, 12, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40, 44, 48, 64, 72, 96, 120 px.

**Section spacing:**
- default `96px 0` (`72px` at ≤720)
- hero `120 / 96px` (`72 / 64` at ≤880)
- footnote `0 0 72px`, so it sits close under Safety

**Borders:**
- 1px hairlines everywhere
- **2px `--ink` rules** above the articles and above the safety body
- an outlined APOC box
- the footnote opens with a single `--line-strong` hairline
- no shadows

**Radius:**
- square corners throughout, including the index panel and the docs cards
- pill shape on the button only
- round eyebrow dot

**Docs grid:** a 2-column hairline grid (`gap:1px` over `--line`).

---

## 5. Layout, section by section

**1 · Hero**
- The section has the photo as its background (`center 62%/cover`). On top of it: an absolute scrim, then a relative `.wrap[data-theme=dim]`.
- Inner grid: `1.3fr / 1fr`, gap 64, bottom-aligned.
- Left column: eyebrow → h1. Right column: lede (44ch).

**2 · Statement of Faith**
- Grid: `1fr / 2.2fr`, gap 72, top-aligned.
- **Left column: `aside.wwb-index[data-theme=dim]`**
  - sticky at `top:110px`
  - padding `32/28/24`
  - h2, then `nav > ol` of 7 anchor rows (mono number + label)
- **Right column: `.wwb-articles`**, starting with a 2px rule. Each article:
  - is a grid of `72px` numeral + content
  - has padding `44/48` and a hairline below
  - uses `scroll-margin-top:96px`, so anchor jumps clear the sticky nav
- Article contents: h3 → 20px gap → paragraphs (18px apart) → the reference block 18px below, in italic serif `--ink-3`.
- **The Trinity** keeps its reference **inline** at the end of its sentence, because that's how the source punctuates it. The sentence ends "…and worship (Matt. … 5:3-4)."

**3 · Perspectives & Church Documents**
- `--bg-2` band; h2 (16ch) with 48px below.
- 2-column hairline grid: **Faith & Practice** (4 links) | **Church Life & Governance** (2 links).
- Each link row is a grid: `title / file type / ↗`.

**4 · Safety & Reporting Concerns**
- Grid: `1fr / 1.6fr`.
- Left column: h2 (11ch).
- Right column:
  - a 2px rule
  - the Domestic Abuse link row (20px)
  - 28px gap, then the APOC box: mono label → paragraph → "Learn more about APOC ↗" button

**5 · Footnote**
- A hairline, then 28px gap.
- Grid: `2fr / 1fr`.
- Left: "Cooperation and Affiliation" mono label + 16px paragraph with two inline links.
- Right: "Membership" mono label + a text link to `/membership`.

---

## 6. Interactivity (all CSS, no JavaScript)

| Behavior | Mechanism |
|---|---|
| Index → article jump | anchors (`#the-bible` … `#the-church`) + `scroll-margin-top` + CSS smooth scroll (off under reduced-motion) |
| Sticky index | `position:sticky` (static at ≤980) |
| External docs, sermons, APOC, SBC, BF&M | `target=_blank rel=noopener`, with an sr-only "(opens in a new tab)" note (or "(PDF, opens in a new tab)") |
| Membership | internal link to `/membership` |
| Hover / focus | link title turns accent, arrow nudges; `:focus-visible` ring |

There are no forms and no accordions. The statement stays fully expanded, so it's readable, printable and indexable.

---

## 7. Responsive behavior

Breakpoints: **980 / 880 / 720 / 560**.

**Desktop (> 980px):** the layout in §5.

**Tablet (≤ 980px)**
- Faith and Safety stack.
- The index panel stops being sticky and sits above the articles as a **2-column dark contents list**.
- **≤ 880px:**
  - The hero stacks: h1, then lede, with padding `72/64`.
  - The docs grid goes to 1 column.

**Phone (375px)**
- **≤ 720px:** 22px gutters; sections 72px.
- **≤ 560px:**
  - **Index:** 1-column list, padding `26/20/18`.
  - **Articles:**
    - drop the numeral column (the numeral sits above the h3)
    - padding `36/40`
    - body text 18px
  - **Docs cards:** padding `24/20/20`.
  - **APOC:**
    - padding `22/20`
    - button goes full width
  - **Footnote:** stacks.
  - **Long document titles** wrap; the file type and ↗ stay on the first line's baseline.
  - **The hero photo** crops the sides at `cover`. The band and cross stay in frame at `center 62%`.

---

## 8. Content

**Page content:** COPY (verbatim) unless marked otherwise.

| Slot | Type |
|---|---|
| Page title "What We Believe" (h1, with "Believe" italicised as a style choice) | COPY |
| Intro paragraph | COPY |
| "Our Statement of Faith" and all seven subsection titles | COPY |
| All statement paragraphs and Scripture references | COPY (**verbatim, including punctuation**) |
| "Perspectives & Church Documents", "Faith & Practice", "Church Life & Governance" | COPY |
| All link labels and destinations | COPY / FACT |
| "Safety & Reporting Concerns", the APOC paragraph, "Learn more about APOC" | COPY |
| "Cooperation and Affiliation" paragraph, plus its 2 linked phrases | COPY |
| "Membership" + "Learn more about membership at North Wake" → `/membership` | COPY |
| Eyebrow "About · Statement of faith" | **LABEL**, design-added; remove it if not wanted |
| "APOC · Abuse Point of Contact" box label | **LABEL**, design-added (from the copy) |
| File-type tags "Page / Sermons / PDF" | **LABEL**, design-added, derived from the URLs |
| Article numerals 01–07 | decorative (`aria-hidden`) |

**Flag for the church. Left unchanged, as instructed:**
1. The Holy Spirit's references list **"Rom. 8:9" twice**.
2. The Holy Spirit's references cite **1 Cor. 15:3-8**, which is about the resurrection. That's probably a carry-over from the Jesus Christ references.

Correct the source text on the live site before launch if the church agrees.

**Links not verified (keep them as supplied):**
- **Baptism sermons:** `http://www.northwake.com/sermons/category/baptism/`. This is `http`, and the route needs confirming on the new site.
- **Church discipline:** the old `rackcdn.com` URL. It's legacy hosting, so re-host the PDF on the new site.

**Recommended:** move every PDF onto the Astro site (`/docs/…`), so the links don't depend on WordPress, Mailchimp or Rackspace hosting.

---

## 9. Assets

| Asset | Use | Notes |
|---|---|---|
| `assets/beliefs-worship.jpg` | hero background, `center 62%/cover` | **Supplied** (NWC worship photo, 1920×1280). Ship it as WebP, about 2400px wide. **Check that the lyrics on the projection screen read acceptably through the scrim.** If they distract, raise the scrim's middle stop toward `0.84`, or move the position to `center 70%`. Confirm the worship team members have consented to being shown. |

- **Fonts:** Inter Tight, JetBrains Mono, Newsreader 400 + italic.
- **Icons:** none (the arrows are Unicode).

---

## 10. Build checklist for Claude Code (Astro)

1. **Page setup**
   - Create `src/pages/what-we-believe.astro`, or match the live About route and redirect any old URL.
   - Keep the `.wwb-*` and `.crumbs` CSS scoped to the page.
   - Tokens, plus `[data-theme="dim"]` **with `color:var(--ink)`**, should be global.
2. **Breadcrumb:** if the live site already uses the approved inset breadcrumb bar, use that instead of `.crumbs`.
3. **Statement content:** put it in a content file, e.g. `src/content/beliefs.md` or a data array with fields `{ id, title, paragraphs[], refs, refInline? }`, and render it from there.
   - **Never transform the text.** No smart-quote replacement or punctuation normalisation beyond what the source already has.
4. **Anchor IDs:** use `the-bible`, `the-trinity`, `creation`, `jesus-christ`, `the-holy-spirit`, `sin`, `the-church`. These are stable for deep linking.
5. **Semantics**
   - `aside > nav > ol` for the contents index
   - an `article` per doctrine, with an `h3`
   - one `h1` on the page
   - `aria-hidden` on the numerals
   - the sr-only "(PDF, opens in a new tab)" note on every PDF link
6. **Reusable components:**
   - `<PhotoHero>`, a variant of the dim photo hero shared with the home "worship-dark" hero
   - `<StickyIndexArticles>`, which would also suit the Constitution or any long policy page
   - `<DocLinkList>`, shared with the Resources list rows
   - `<CalloutNote>`
   - `<FootnoteRow>`
7. **No JavaScript.**
8. **Before launch:** resolve the §8 flags (reference typos, unverified links, PDF re-hosting) and the §9 photo check.
9. **QA** at 1440, 1024, 768 and 375 against `what-we-believe.html`. Check that:
   - the hero h1 is cream, not dark
   - index jumps land below the sticky nav
   - the dark index panel reads as a contents list at tablet width
   - the footnote stays visually quiet
