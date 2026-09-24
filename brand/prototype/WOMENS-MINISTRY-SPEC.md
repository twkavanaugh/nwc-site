# Design package — Women's Ministry (`/womensministry`)

This is the build-ready spec for the **North Wake Church "Women's Ministry" page**, which sits in the Community group. It is for the live **static Astro** site. The route matches the URL in the church's copy: `www.northwake.com/womensministry`.

The source of truth is **`womens-ministry.html`** in this folder. It runs on its own, uses production markup (no React, no tweaks, no routing), and has **zero JavaScript**.

**Copy:** all church-supplied text is used word for word. §8 maps every string and marks which labels were added by design.

---

## 1. What the page is

The home page for North Wake Women. It states the ministry's purpose, lists the six ways to get connected across the year, and gives the contact and social channels.

It has five sections:

0. **Breadcrumb:** Home / Community / Women's Ministry
1. **Hero (Community-group split):** eyebrow, headline, lede, buttons for "See upcoming events" and "Email the ministry", and a 4:5 photo.
2. **Why we exist:**
   - a large Newsreader heading, **"Know. *Glorify.* Grow. *Go.*"**
   - the full purpose statement in serif
   - a four-part breakdown (01–04) with 2px ink rules
3. **Ways to get connected:** a **full-bleed floral photo background** under a dark scrim, with a large cream serif heading **"Ways to get *connected.*"**. Below it, six opaque cream cards in a 3×2 hairline grid, each with a timing label, a title and a description. The Women's Day card links to its event page.
4. **Stay connected (dark band):** a question headline, buttons for email and all events, and an email / Instagram / Facebook list.

**Header decision:** this page uses the **Community-group split** (breadcrumb, then a `1.3fr/1fr` hero with a bottom-aligned 4:5 photo). It matches the Mature Adults and Grow Groups ministry pages.

**Newsreader serif:** it appears in three places: the large Know · Glorify · Grow · Go heading, the purpose statement, and the "Ways to get connected" heading on the photo. The ministry chose this deliberately to give the page a softer, more personal voice than the all-sans ministry pages. The italic clay words (*Glorify*, *Go*, *know the love of God*) are the only decorative flourish.

---

## 2. Design tokens (exact existing values)

```css
:root {
  --bg:#f6f3ed; --bg-2:#ece7dc; --bg-3:#e3ddce;
  --ink:#1a1814; --ink-2:#3a352c; --ink-3:#6e665a; --ink-4:#a89f8e;
  --line:rgba(26,24,20,0.12); --line-strong:rgba(26,24,20,0.22);
  --accent:#8a4d2e; --accent-ink:#ffffff;
}
[data-theme="dim"] {   /* inverse set — Stay connected band */
  --bg:#1a1814; --bg-2:#221f1a; --bg-3:#2a2620;
  --ink:#f4efe5; --ink-2:#d8d2c4; --ink-3:#9c9484; --ink-4:#6e665a;
  --line:rgba(244,239,229,0.12); --line-strong:rgba(244,239,229,0.22);
  --accent:#d49271;    /* on-inverse clay, ~7.0:1 on charcoal */
}
```

**Dark band:** the band is `<section data-theme="dim">` and uses tokens only.
- The primary button renders cream on charcoal.
- The ghost button gets a cream outline.
- The accent headline phrase uses light clay.
- No raw hex values appear in the component.

**Token roles on this page:**

| Token | Role |
|---|---|
| `--bg` | page, way cards, dark band (inverse) |
| `--bg-2` | (not used as a section fill on this page) |
| `--ink` | headings, serif statement, 2px purpose rules, button fill |
| `--ink-2` | lede and body |
| `--ink-3` | eyebrows, mono labels, breadcrumb (5.2:1) |
| `--ink-4` | breadcrumb `/` separators only |
| `--accent` | italic serif words, hero accent phrase, purpose numbers, timing labels, text link, eyebrow dots, breadcrumb current |

**Colors with two jobs:** `--ink` is both text and button fill. `--accent` is both text and the button hover fill.

**Photo scrim, an explicit literal exception.** The Ways section has one scrim over the floral photo:
```css
linear-gradient(180deg, rgba(26,24,20,0.72) 0%, rgba(26,24,20,0.45) 45%, rgba(26,24,20,0.35) 100%)
```
`rgba(26,24,20,…)` is `--ink` (#1a1814) with alpha applied. CSS can't set alpha on a token without `color-mix()`, so this is the one sanctioned raw value on the page. It is darkest (0.72) at the top, behind the heading, and lighter (0.35) behind the cards so the flowers show through the 1px gaps.

**Text on the photo:** the section-head wrapper carries `data-theme="dim"`, so the eyebrow, heading and intro resolve to cream `--ink` (#f4efe5) / `--ink-2`, with the accent word in light clay `#d49271`. The cards sit **outside** that wrapper, so they keep the light tokens: opaque `--bg` cream with dark text. Readability doesn't depend on the photo.

---

## 3. Typography

Fonts: **Inter Tight** (400/500/600/700), **JetBrains Mono** (400) and **Newsreader** (400, plus italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | sans `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 |
| **Why h2 (Know · Glorify · Grow · Go)** | **serif** | `clamp(48px,6.4vw,96px)` | 1.02 | 400 (+ italic) |
| **Purpose statement** | **serif** | `clamp(22px,2.3vw,32px)` | 1.4 | 400 (+ italic) |
| Purpose h3 | sans `.display-s` | `clamp(28px,3.4vw,48px)` | 1.05 | **700** |
| Purpose body | sans | 17px | 1.6 | 400 |
| **Ways h2 (on photo)** | **serif** | `clamp(48px,6.4vw,96px)` | 1.02 | 400 (+ italic) |
| Stay h2 | sans `.display-l` | as scale | — | 600 |
| Ways intro (on photo) | sans | 18px | 1.6 | 400 |
| Way title | sans `.title` | 22px | — | 600 |
| Way body | `.body` | **16px** | 1.6 | 400 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Contact value | sans | `clamp(16px,1.8vw,19px)` | — | 500 |
| Text link | sans | 16px | — | 500, underline |
| Button | `.btn` | 14px | — | 500 |
| Eyebrow / mono | 12px uppercase | — | — | 600 / 400 |

Letter-spacing:
- Serif h2: −0.02em
- Statement: −0.01em
- Sans display sizes: follow the global scale

**Minimum size:** readable content is 16px or larger everywhere.

**Mono text below 16px:**
- The timing labels always sit next to a title and a description that repeat the timing (for example, "Annually around April").
- The purpose numbers are `aria-hidden`.

**Balanced wrapping:** the serif h2 has `max-width:24ch; text-wrap:balance` so "Go." never ends up alone on a line.

---

## 4. Spacing, borders, radius, primitives

**Spacing values used:** 2, 4, 10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 32, 34, 40, 44, 56, 64, 72, 96 px.

**Section rhythm:**
- Sections: `96px 0`, or `72px` at 720px and below.
- Breadcrumb: 32px top.
- Hero: 56px top, 0 bottom.

**Borders:**
- 1px hairlines throughout.
- 2px `--ink` top rules on the four purpose items, the same device as on Church Planting, Care and Mercy.
- No shadows.

**Radius:** square corners everywhere, pill buttons, and a round eyebrow dot.

**Hairline grid:** the ways grid uses `gap:1px` over a `--line` background with filled cells.

**Primitives reused:** `.wrap`, `.eyebrow` + `.dot`, `.display-l/-m/-s`, `.title`, `.lede`, `.body`, `.mono`, `.btn-primary/-ghost`, `.section-head`, `.ph`, `.text-link`. Page-specific classes use the `.wm-` prefix.

---

## 5. Layout, section by section

**0 · Breadcrumb:** a `nav.crumbs > ol` with separators drawn by `::before`. "Community" is plain text because it is a menu group, not a page.

**1 · Hero**
- Grid `1.3fr 1fr`, gap 64, bottom-aligned.
- Left column: eyebrow (28px below) → h1 (14ch, with "likeness of Christ," in accent) → lede (28px below) → button row (32px below).
- Right column: a 4:5 photo.

**2 · Why we exist**
- `.section-head` holds the eyebrow and the serif h2.
- Below it sits the serif statement: 46ch wide, 56px bottom margin, "know the love of God" in italic accent.
- Then `ol.wm-purpose`: four columns, gap 32. Each item has a 2px ink rule → 22px → mono number → h3 (700) → 17px body.

**3 · Ways to get connected**
- A full-bleed section with the floral photo (`center/cover`, `--ink` fallback) plus the absolutely positioned scrim; the content `.wrap` sits above it (`position:relative`).
- `.section-head.wm-ways-head[data-theme=dim]`: the serif h2 (12ch, balanced) on the left, the 18px cream intro on the right.
- `ul.wm-ways`: a 3-column hairline grid. Each card is a flex column, `32/30/34px` padding, `min-height:220px`.
- Card order: accent timing label → title → body. The Women's Day card adds a text link, pinned to the bottom of the card with `margin-top:auto`.

**4 · Stay connected (dark band)**
- Grid `minmax(0,1.2fr) minmax(0,1fr)`, gap 64, bottom-aligned.
- Left column: eyebrow → h2 in `.display-l` (12ch) → buttons.
- Right column: a `<dl>` with a 110px label column and the value.
- The email has a **`<wbr>` after the "@"** and uses `overflow-wrap:break-word`, so it can only break at the @.

---

## 6. Interactivity inventory (all CSS, no JavaScript)

| Behavior | Mechanism | JS? |
|---|---|---|
| Email | `mailto:womensministry@northwake.com` (used 3 times) | none |
| Events | `/events` internal link (used 2 times) | none |
| Women's Day details | internal link to the Women's Day event page | none |
| Instagram / Facebook | external `<a target="_blank" rel="noopener">` plus sr-only new-tab note | none |
| Hover / focus | button lift and fill, text-link color, `:focus-visible` ring | none |

There are **no forms** on this page.

---

## 7. Responsive behavior

Breakpoints: **1100 / 1080 / 880 / 720 / 560**.

**Desktop (above 1100px):** the full layout from §5.

**Tablet**
- **1100px and below:** contact rows stack, label above value, 4px gap.
- **1080px and below:**
  - Purpose goes to a **2×2** grid (40/32px gaps).
  - The ways grid goes to **2 columns** (three rows of two).
- **880px and below:**
  - The hero stacks, with the photo at **4:3** below the text.
  - The Stay connected band stacks.

**Phone (375px)**
- **720px and below:**
  - 22px gutters, 72px section padding.
  - `.section-head` stacks.
  - The statement's bottom margin drops to 44px.
  - Way cards use `28/22/30px` padding.
- **560px and below:**
  - Purpose and ways go to **1 column**, and way cards drop their `min-height`.
  - Buttons go full width.
  - The serif h2 shrinks to its 48px minimum. It sits on two balanced lines ("Know. Glorify. / Grow. Go.") and doesn't overflow.
  - The email still breaks only after the @.

---

## 8. Content slots

- **FACT:** keep in shared data, for example `src/data/ministries.ts`.
- **COPY:** approved text, used word for word.
- **LABEL:** added by design; the church should approve it.

| Slot | Text | Type |
|---|---|---|
| Breadcrumb | Home / Community / Women's Ministry | LABEL (nav) |
| Hero eyebrow | Women's Ministry · North Wake Women | LABEL (from copy terms) |
| Hero h1 | Growing into the / *accent:* likeness of Christ, / together. | LABEL (distilled from purpose) |
| Hero lede | North Wake Women's Ministry hosts several gatherings throughout the year to help you connect with others, be encouraged in your faith, and grow in Christ. | COPY |
| Buttons | See upcoming events · Email the ministry · All church events | LABEL |
| Why eyebrow / h2 | Why we exist / Know. Glorify. Grow. Go. | LABEL (h2 distilled from purpose verbs) |
| Purpose statement | North Wake Women's Ministry exists to help women know the love of God, … kingdom of God. | COPY |
| Purpose ×4 | Know / Glorify / Grow / Go, each with a phrase from the statement | COPY excerpts (the phrases repeat the statement) + LABEL titles |
| Ways eyebrow / h2 | Throughout the year / Ways to get connected. | LABEL / COPY (the h2 is the copy heading) |
| Ways intro | Gatherings to help you connect with others, be encouraged in your faith, and grow in Christ. | COPY excerpt (the lede sentence, condensed) |
| Way titles ×6 | Women Caring for Women · Women's Spring Retreat · Women's Day · Women's Bible Studies · Fellowship Nights · Mentorship | COPY |
| Way descriptions ×6 | as supplied (sentence-cased, with a period added) | COPY |
| Timing labels ×6 | Twice a year · Annually · around April · October · Ongoing · Throughout the year · One on one | LABEL / FACT (derived from descriptions) |
| Stay h2 | Questions? We'd love to hear from you. | LABEL (built on "Questions:") |
| Email | **womensministry@northwake.com** | **FACT** |
| Instagram | **@northwakewomen** → `https://www.instagram.com/northwakewomen/` | **FACT** |
| Facebook | **North Wake-Women** → `#FACEBOOK-URL` | **FACT, URL needed** |
| Events URL | `/events` (= `www.northwake.com/events`) | **FACT** |
| Women's Day link | `#WOMENS-DAY-EVENT-URL` | **FACT, URL needed** |

**Copy mapping notes:**
- **`www.northwake.com/womensministry` isn't displayed.** It is this page's own URL, so it's the route.
- **`www.northwake.com/events` isn't printed either.** The two events buttons link to it instead.
- **Spring Retreat:** the source text ("annually around April") is both the timing label and the description. Consider adding a one-line description ("A weekend away to rest, worship and…") if the ministry has one.

**Needed before launch:**
1. The **Facebook page URL** for "North Wake-Women".
2. The **Women's Day event page URL**, or remove the link if there isn't a standing page.
3. Church approval of the LABEL rows, especially the hero h1 and the timing labels.
4. The **postcard PDF** the ministry supplied wasn't used for layout or dates. If it contains this year's dates (for example, the retreat or Women's Day dates), consider adding them to the timing labels.

---

## 9. Assets and photo slots

| # | Slot | Aspect | Shot description |
|---|---|---|---|
| 2 | **Ways background** · `assets/women-flowers.jpg` | full-bleed, `center/cover`, section height set by content (~900–1400px) | **Supplied:** a moody dark bouquet of dahlias, chrysanthemums and zinnias in cream, blush and marigold (Unsplash, Dallas Reedy). Ship a WebP about 2400px wide. Confirm the Unsplash licence (free commercial use, attribution appreciated). |
| 1 | Hero · women's gathering | **4:5** (4:3 when stacked at 880px and below) | Women of mixed ages in warm conversation at a fellowship night or Bible study (coffee cups, open Bibles, natural light). Candid, not posed. Get consent from anyone recognizable. |

**Hero photo:** slot 1 is a placeholder; slot 2 is a real asset included in `assets/`. Replace `.ph` with `<img>` (`loading="eager"`, `object-fit:cover`, width/height set), 1200px or larger on the short edge, WebP or AVIF with a JPG fallback, via `astro:assets`.

**Optional later:** small photos for the Spring Retreat and Women's Day cards. The grid can take a 3:2 image above each card's timing label without changing its structure.

**Fonts:** Inter Tight (including 700), JetBrains Mono, and Newsreader 400 plus italic.

**Icons:** none. `→` and `↗` are Unicode characters.

---

## 10. Build checklist for Claude Code (Astro)

1. **Page file:** create `src/pages/womensministry.astro` inside the existing layout.
   - Put the `.wm-*`, `.crumbs` and `.text-link` CSS in a scoped `<style>`.
   - Tokens (`:root` plus `[data-theme="dim"]`) and primitives should already be global.
2. **Breadcrumb:** if the live site uses the approved **inset breadcrumb bar**, use that component here to match.
3. **Dark band:** keep it as `data-theme="dim"` plus tokens. Don't hard-code hex values.
4. **Data files:**
   - Store the six gatherings as data: `{ title, timing, description, href? }`. Seasonal dates can then be updated in one place.
   - Store the contact channels in shared data.
5. **Semantic markup:**
   - `ol` for the purpose items, `ul` for the ways, `dl` for contacts.
   - The serif h2 is a real `<h2>`.
   - Put `aria-hidden` on the purpose numbers.
   - External links get the new-tab note.
6. **Reusable components** (candidates to share with other pages):
   - `<MinistryHero>`: the Community/Help split.
   - `<SerifMotto>`: the large serif h2 plus statement. It fits Men, Young Adults and LILY Moms.
   - `<RuledSteps>`: the 2px-rule numbered items, also used on Church Planting and Care.
   - `<PhotoBandCards>`: the ways section (photo + scrim + inverse header + light cards).
   - `<TimedCardGrid>`: the ways grid. It fits the Men's, Students' and Young Adults' gatherings.
   - `<InverseContactBand>`: shared with Mercy.
7. **JavaScript:** ship none.
8. **Before launch:** resolve §8 (Facebook URL, Women's Day URL, label approval, postcard dates).
9. **QA:** check at 1440, 1024, 768 and 375 against `womens-ministry.html`.
   - The serif h2 must never leave "Go." alone on a line.
   - The email must only ever break after the @.
   - Heading contrast on the photo must stay AA at every crop, and faces are not a concern (it's a floral photo), but check the brightest center dahlia never sits behind the h2.
