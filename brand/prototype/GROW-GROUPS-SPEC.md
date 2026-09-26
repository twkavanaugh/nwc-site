# Design package — Grow Groups (`/grow-groups`)

This is the build-ready spec for the **North Wake Church "Grow Groups" page** (Community group), for the live **static Astro** site.

The source of truth is **`grow-groups.html`** in this folder. It is standalone, runnable, uses production markup (no React, tweaks or routing), and contains **zero JavaScript**.

In the prototype, this page replaces the earlier Grow Groups page. The old version is still viewable at `#groups-original`.

---

## 1. What the page is

The page explains what Grow Groups are and why they exist, then lists every group by day. **Contact goes through the church office.** Leaders' personal phone numbers are deliberately **not published**, to protect their privacy and to let the office help people find the right group.

Seven sections, numbered 0–6:

| # | Section | Background |
|---|---|---|
| 0 | Breadcrumb: Home / Community / Grow Groups | `--bg` |
| 1 | Hero (F · Warm Band): eyebrow, h1, lede, "Find a group", full-height photo | warm `--bg-2` |
| 2 | Facts strip: When · Where · Days · Groups | `--bg` |
| 3 | The heartbeat: serif h2 on the left, three paragraphs on the right | `--bg` |
| 4 | Regular rhythms: four numbered cards, then a "What participation looks like" note | warm `--bg-2` |
| 5 | Directory: day jump links, then a 3-column table per day (Group · Time · Location) | `--bg` |
| 6 | Get in touch: office email and phone, "Email the office" button | **dark inverse band** |

**Hero style:** the F · Warm Band, consistent with the other Community sub-pages.

**Newsreader serif** is used for:
- the heartbeat h2
- the day headings (Sunday, Wednesday, Thursday)
- the contact h2

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
  --accent:#d49271;
}
```

The page uses **no literal color values** and no photo scrim. The contact band is `<section data-theme="dim">`, built from tokens only.

| Token | Role |
|---|---|
| `--bg` | page, fact cells, rhythm cards, note, contact band (inverse) |
| `--bg-2` | hero band, rhythms band, table row hover |
| `--ink` | headings, 2px rules (heartbeat and each table top), note text, group names, button fill |
| `--ink-2` | lede, body, locations |
| `--ink-3` | eyebrows, mono labels, table headers, day counts |
| `--ink-4` | breadcrumb separators; the mobile `·` between time and location |
| `--accent` | h1 accent phrase, serif italics, rhythm numbers, directory intro link, eyebrow dots |

---

## 3. Typography

Fonts: **Inter Tight** (400/500/600/700), **JetBrains Mono** (400), **Newsreader** (400 and italic).

| Element | Font / class | Size | Line-height | Weight |
|---|---|---|---|---|
| Hero h1 | sans `.display-l` | `clamp(44px,6.4vw,104px)` | 0.98 | 600 |
| Lede | `.lede` | `clamp(18px,1.6vw,22px)` | 1.5 | 400 |
| Fact value | sans | 20px | 1.3 | 500 |
| Heartbeat h2 | **serif** | `clamp(38px,4.4vw,64px)` | 1.06 | 400 (+ italic) |
| Heartbeat body | sans | 19px (first paragraph, ink) / 18px | 1.6 | 400 |
| Rhythms / Directory h2 | sans `.display-m` | `clamp(36px,4.8vw,72px)` | 1.02 | 600 |
| Rhythm number | sans | 34px | 1.0 | **700** |
| Rhythm title | `.title` | 22px | — | 600 |
| Rhythm body / note | sans | 17px | 1.6 | 400 |
| Day heading | **serif** | `clamp(32px,3.4vw,48px)` | 1.0 | 400 |
| Group name (row `th`) | sans | 18px | 1.35 | 600 |
| Time / location | sans | 17px (time uses tabular numerals) | — | 400 |
| Table header / day jump | mono | 12px uppercase | — | 400 |
| Contact h2 | **serif** | `clamp(40px,5vw,76px)` | 1.04 | 400 (+ italic) |
| Contact value | sans | `clamp(18px,2vw,24px)` | — | 500 |
| Button | `.btn` | 14px | — | 500 |

All readable content is **16px or larger**. Mono labels are always paired with readable text.

---

## 4. Spacing, borders, radius, primitives

**Spacing values** (deduplicated): 4, 6, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96 px.

**Section spacing:**
- Default: `96px 0` (`72px` at ≤720).
- Hero band: 32px top margin.
- Facts: 80px top, 0 bottom.
- Day blocks: 64px apart.

**Borders:**
- 1px hairlines everywhere.
- **2px `--ink` rules** above the heartbeat body and on top of each day's table.
- A `--line-strong` outlined note.
- Table: a `--line-strong` rule under the header, `--line` rules between rows.
- No shadows.

**Radius:**
- Square corners throughout.
- Pill-shaped: day jump links and buttons.
- Round: the eyebrow dot.

**Hairline grids:** facts (4 columns) and rhythms (4 columns) use `gap:1px` over `--line`.

**Primitives reused:** `.wrap`, `.eyebrow` + `.dot`, `.display-l/-m`, `.title`, `.lede`, `.body`, `.mono`, `.btn-primary`, `.section-head`, `.ph`, `.serif-h`. Page-specific classes use the `.gg-` prefix.

---

## 5. Layout, section by section

**0 · Breadcrumb:** `nav.crumbs > ol`. "Community" is plain text, not a link.

**1 · Hero**
- Grid `1.15fr / 1fr`, stretched.
- Gutter-aware left padding on the text column.
- Text column: eyebrow → h1 (14ch, "wholehearted followers of Jesus." in accent) → lede → "Find a group" (anchor to `#directory`).
- Photo: `min-height:520px`.

**2 · Facts:** a 4-column hairline `<dl>`.

**3 · Heartbeat**
- Grid `1fr / 1.5fr`, gap 72.
- Left column: eyebrow + serif h2 (13ch).
- Right column: a 2px rule, then 28px, then three paragraphs (60ch, 20px apart).

**4 · Rhythms**
- `.section-head`: h2 on the left, intro on the right.
- `ol.gg-rhythms`: a 4-column hairline grid. Each card is padded `30/26/34px`:
  - top row: accent number (700) with the frequency label in mono on the right
  - title
  - 17px body
- `.gg-note` sits 32px below the grid.

**5 · Directory** (`#directory`)
- `.section-head`: the intro links to `#contact`.
- `nav.gg-days`: jump links to `#sunday`, `#wednesday` and `#thursday`, each showing its group count.
- Per day (`.gg-day`, `scroll-margin-top:90px`):
  - a head row with the serif day name and a mono count
  - a `<table>` with columns **Group (58%, `th scope=row`) · Time (nowrap, tabular) · Location (right-aligned)**
- Rows get a `--bg-2` background on hover.

**6 · Get in touch** (`#contact`)
- Grid `1.3fr / 1fr`, bottom-aligned.
- Left column: eyebrow → serif h2 → lede.
- Right column:
  - a `<dl>` with Email (`mailto:`) and Call (`tel:`)
  - an "Email the office" button (`mailto:` with the subject "Grow Groups")

---

## 6. Interactivity (all CSS, no JavaScript)

| Behavior | Mechanism |
|---|---|
| Find a group, day jumps, "Reach out to the church office" | anchor links + `scroll-margin-top` + CSS smooth scroll (turned off under reduced motion) |
| Email / Call | `mailto:office@northwake.com` (with a subject on the button), `tel:+19195561546` |
| Row hover, button/link hover, focus | `:hover`, `:focus-visible` ring |

No filters, no search and no forms. The directory is short enough (17 rows across 3 days) that day jump links are enough.

---

## 7. Responsive behavior

Breakpoints: **1080 / 980 / 880 / 720 / 680 / 560**.

**Desktop (above 1080px):** as described in §5.

**Tablet:**
- **≤1080:** facts and rhythms become **2×2**.
- **≤980:** the contact band stacks (40px gap).
- **≤880:**
  - The hero stacks, with the photo on top at 4:3.
  - The heartbeat stacks (36px gap).

**Phone (375px):**
- **≤720:**
  - 22px gutters and 72px sections.
  - `.section-head` stacks.
- **≤680 — table → stacked rows:**
  - `thead` is visually hidden but stays readable to screen readers.
  - Each `tr` becomes a wrapping flex row:
    - the group name on its own line (18px, 600)
    - then **"6:30 PM · Wake Forest"** on one line, with a `--ink-4` `·` separator from `td + td::before`
  - The note and contact rows stack.
- **≤560:**
  - Facts and rhythms go to 1 column.
  - Buttons go full-width.
  - Day jump links wrap. With only three days, they fit on one or two lines.
- **Long names:** two-couple group names wrap naturally. Time and location never wrap.

---

## 8. Content slots

Legend:
- **FACT:** data that must match reality. Keep it in `src/data/grow-groups.ts` and update it each season.
- **COPY:** church text, used word for word.
- **LABEL:** added by the design; needs sign-off.

| Slot | Text | Type |
|---|---|---|
| Hero eyebrow | Community · Grow Groups | LABEL |
| Hero h1 | Ordinary people, growing into / *accent:* wholehearted followers of Jesus. | LABEL (distilled from copy ¶1 s1) |
| Hero lede | Grow Groups at North Wake exist to help ordinary people … meaningful Christian community. | COPY |
| Facts ×4 | Weekly · In homes · Sunday, Wednesday & Thursday · 17 groups across Wake Forest & nearby | **FACT** (derived from the copy and the directory; **the count updates automatically from data**) |
| Heartbeat eyebrow / h2 | The heartbeat / Shaped not just in what we know, *but in what we love.* | LABEL / COPY phrase |
| Heartbeat ¶1–3 | At the heart of this ministry … / We believe spiritual growth … / Our hope is that … | COPY (¶1 split into 3) |
| Rhythms eyebrow / h2 / intro | Regular rhythms / Life together, week by week. / Grow Groups typically meet weekly … | LABEL / LABEL / COPY |
| Rhythm cards ×4 | Open God's Word · Pray honestly · Serve and care · Share the hope, with frequency labels Weekly / Weekly / Through the year / Always | LABEL titles; bodies are COPY excerpts from ¶2 (lightly trimmed) |
| Note | What participation looks like / Showing up consistently … everyday life. | LABEL / COPY |
| Directory intro | Every group welcomes visitors. Reach out to the church office … | LABEL |
| **Directory rows ×17** | name · day · time · location | **FACT** |
| Contact h2 / lede | Want to know more or *get in touch?* / Call or email the church office … | LABEL (from your wording) |
| Office | office@northwake.com · 919.556.1546 | **FACT** (confirmed) |

**Directory normalization (applied to the source list):**
- "GG" suffix removed from every group name.
- "WF" changed to "Wake Forest."
- Times formatted as `6:30 PM`.
- Groups sorted by time within each day.
- "LIFT" kept as the group's name.
- Mike & Erin Day had no "GG" in the source; this made no difference after normalization.

**Removed on purpose:** all 17 leaders' personal phone numbers. Keep them in an internal office list, **not** in the site repo, so they can't leak through source code or git history.

**Suggested data shape:**
```ts
{ day: "Wednesday", time: "18:30", place: "Wake Forest", name: "Eddy & Erica Wu" }
```
Render the time as `6:30 PM`. Group rows by day in the order Sunday → Saturday, and sort by time within each day. Hide a day entirely if it has no groups. Compute the per-day and total counts at build time.

**Needed before launch:**
1. Church approval of the LABEL rows.
2. **Optional:** add a short, one-line note per group, for example "young families" or "empty nesters," if the office wants people to self-select. The table can take a fourth column, or a line under the name on mobile.

---

## 9. Assets and photo slots

| # | Slot | Aspect | Shot description |
|---|---|---|---|
| 1 | Hero · Grow Group | fills the band (about 4:5 at desktop, `min-height:520`); **4:3** when stacked | A Grow Group gathered around a living-room or kitchen table: Bibles open, coffee mugs, warm lamp light, genuine conversation. Show real group members, with consent. Avoid posed, looking-at-the-camera shots. |

Replace `.ph` with `<img>` via `astro:assets`, using `loading="eager"`, `object-fit:cover` and explicit width and height.

**Fonts:** Inter Tight (including 700), JetBrains Mono, Newsreader 400 and italic.

**Icons:** none.

---

## 10. Build checklist for Claude Code (Astro)

1. **Page file:** create `src/pages/grow-groups.astro` (or match the live route) in the existing layout.
   - Scope the `.gg-*` and `.crumbs` CSS to the page.
   - Tokens, `[data-theme="dim"]` and `.serif-h` should already be global.
2. **Data:** render the directory from `src/data/grow-groups.ts` at build time.
   - Group rows by day and sort by time.
   - Generate the jump links and counts from the same data.
   - **Do not add a phone field.**
3. **Semantics:**
   - A real `<table>` per day, with `th scope=col` headers and `th scope=row` group names.
   - `nav` for the day jumps and the breadcrumb.
   - `dl` for facts and contact details.
   - `ol` for the rhythms.
   - `role=note` on the participation note.
   - One `h1` per page.
4. **Mobile table:** keep the ≤680 stacked-row CSS exactly as written. Hide `thead` visually, not with `display:none`, so screen readers keep the column headers.
5. **Reusable components** (candidates to share with other pages):
   - `<WarmBandHero>`
   - `<FactsStrip>`
   - `<SerifStatementSplit>` (the heartbeat section)
   - `<NumberedCardGrid>`
   - `<CalloutNote>`
   - `<DayGroupedTable>`: reusable for any schedule, e.g. Adult Discipleship classes
   - `<InverseContactBand>`: shared with Membership
6. **No JavaScript.**
7. **QA** at 1440, 1024, 768 and 375 against `grow-groups.html`. Check that:
   - two-couple names wrap cleanly
   - on mobile, time and location stay on one line
   - jump links land below the sticky nav
