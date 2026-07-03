# Design package — "Serif on Image" sub-page hero

A reusable hero for ministry/interior pages: a full-width photograph with a dark overlay, and a centered **Newsreader** serif headline in the devotional voice. This is variant **E** from the Kids hero explorations. It's a pattern — swap the photo, eyebrow, headline, lede, and buttons per page.

---

## 1. Anatomy

```
┌────────────────────────────────────────────────────────┐
│  [ full-bleed photo, darkened with a charcoal overlay ] │
│                                                        │
│              • EYEBROW (mono, light)                    │
│         Serif headline with italic accent words        │
│              Lede sentence (serif, light)              │
│            [ Primary btn ]  [ Ghost btn ]              │
│                                                        │
└────────────────────────────────────────────────────────┘
```

- Full-width band (edge to edge), content centered and constrained to the narrow measure (`--wrap-narrow`, ~760–820px).
- The image is the background; a dark gradient overlay guarantees text contrast.
- Type is **light** (cream) so it reads on the photo; accent words use a **light clay** tint (not the standard dark `--accent`, which would fail contrast on a dark image).

---

## 2. Design tokens used

| Role | Value | Notes |
|---|---|---|
| Headline / lede font | `--serif` = `"Newsreader", Georgia, "Times New Roman", serif` | already loaded site-wide |
| Eyebrow / kicker font | `--mono` | existing token |
| Body/UI font | `--sans` (Inter Tight) | buttons only |
| Headline text | `#f6f3ed` (cream — equals `--bg`) | on dark image |
| Accent words (italic) | `#e8b394` (light clay) | **image-only tint**; do NOT use `--accent` `#8a4d2e` here (too dark on photo) |
| Lede text | `rgba(246,243,237,0.85)` | cream at 85% |
| Eyebrow text | `rgba(255,255,255,0.75)` | |
| Overlay | `linear-gradient(180deg, rgba(26,24,20,0.62) 0%, rgba(26,24,20,0.48) 50%, rgba(26,24,20,0.66) 100%)` | `rgba(26,24,20,…)` is `--ink` |
| Primary button | bg `#f6f3ed`, text `--ink` | inverted vs. site default |
| Ghost button | transparent, text `#f6f3ed`, border `rgba(246,243,237,0.4)` | |

No new named tokens required. If you want these reusable, add `--on-image-fg: #f6f3ed;` and `--on-image-accent: #e8b394;`.

---

## 3. Type scale (must match the light "Serif devotional" variant exactly)

| Element | font-size | line-height | weight | other |
|---|---|---|---|---|
| Headline `h1` | `clamp(42px, 6vw, 88px)` | `1.05` | `400` | `letter-spacing:-0.02em; max-width:18ch; text-wrap:balance` |
| Accent words | inherit | — | `400` | `font-style:italic` |
| Lede `p` | `clamp(18px, 1.8vw, 23px)` | `1.6` | `400` | `max-width:44ch; margin-top:28px` |
| Eyebrow | `12px` | — | `600` | `letter-spacing:0.18em; text-transform:uppercase` |

Vertical rhythm: eyebrow → 36px → headline → 28px → lede → 36px → buttons. Section padding `88px` top and bottom.

---

## 4. Reference markup (production HTML/CSS, framework-agnostic)

```html
<section class="hero-on-image">
  <div class="hero-on-image__media" role="img" aria-label="Kids ministry on a Sunday morning"></div>
  <div class="hero-on-image__scrim"></div>
  <div class="hero-on-image__inner">
    <div class="eyebrow eyebrow--light"><span class="dot"></span>North Wake Kids · Babies – 5th grade</div>
    <h1 class="hero-on-image__title">
      A place to <em>know</em>, <em>grow</em>, and <em>go</em> — sized for kids.
    </h1>
    <p class="hero-on-image__lede">
      Every Sunday we help children — babies through 5th grade — meet the love of God in Jesus, and learn to share it.
    </p>
    <div class="hero-on-image__actions">
      <a class="btn btn--on-image-primary" href="/visit">Plan your visit <span class="arr">→</span></a>
      <a class="btn btn--on-image-ghost" href="mailto:children@northwake.com">Email the kids team</a>
    </div>
  </div>
</section>
```

```css
.hero-on-image { position: relative; overflow: hidden; }
.hero-on-image__media {
  position: absolute; inset: 0;
  background: url('/assets/kids-photo.jpg') center 30% / cover no-repeat, var(--bg-2);
}
.hero-on-image__scrim {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(26,24,20,0.62) 0%,
    rgba(26,24,20,0.48) 50%,
    rgba(26,24,20,0.66) 100%);
}
.hero-on-image__inner {
  position: relative;
  max-width: 820px; margin: 0 auto;
  padding: 88px 40px; text-align: center;
}
.eyebrow--light { color: rgba(255,255,255,0.75); justify-content: center; display: flex; }

.hero-on-image__title {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(42px, 6vw, 88px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #f6f3ed;
  margin: 0 auto;
  max-width: 18ch;
  text-wrap: balance;
}
.hero-on-image__title em { font-style: italic; color: #e8b394; }

.hero-on-image__lede {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(18px, 1.8vw, 23px);
  line-height: 1.6;
  color: rgba(246,243,237,0.85);
  margin: 28px auto 0;
  max-width: 44ch;
}
.hero-on-image__actions {
  display: flex; gap: 12px; justify-content: center;
  margin-top: 36px; flex-wrap: wrap;
}
.btn--on-image-primary { background: #f6f3ed; color: var(--ink); }
.btn--on-image-ghost {
  background: transparent; color: #f6f3ed;
  border: 1px solid rgba(246,243,237,0.4);
}
```

> The site's current implementation uses React with inline styles; this CSS-class version is the clean target for the Astro rebuild. Behavior is identical; it's presentation-only, no JS.

---

## 5. React/JSX drop-in (matches the current codebase)

If applying inside the existing `page-*.jsx` files, replace the page's `{/* Hero */}` `<section>` with:

```jsx
{/* Hero — serif on image */}
<section style={{ padding: 0, position: "relative" }}>
  <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "url('assets/kids-photo.jpg') center 30%/cover no-repeat, var(--bg-2)" }}></div>
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,24,20,0.62) 0%, rgba(26,24,20,0.48) 50%, rgba(26,24,20,0.66) 100%)" }}></div>
    <div className="wrap-narrow" style={{ position: "relative", textAlign: "center", paddingTop: 88, paddingBottom: 88 }}>
      <div className="eyebrow" style={{ marginBottom: 36, display: "flex", justifyContent: "center", color: "rgba(255,255,255,0.75)" }}>
        <span className="dot"></span>North Wake Kids · Babies – 5th grade
      </div>
      <h1 style={{ fontFamily: '"Newsreader", Georgia, serif', fontWeight: 400, fontSize: "clamp(42px,6vw,88px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#f6f3ed", margin: "0 auto", maxWidth: "18ch", textWrap: "balance" }}>
        A place to <span style={{ fontStyle: "italic", color: "#e8b394" }}>know</span>, <span style={{ fontStyle: "italic", color: "#e8b394" }}>grow</span>, and <span style={{ fontStyle: "italic", color: "#e8b394" }}>go</span> — sized for kids.
      </h1>
      <p style={{ fontFamily: '"Newsreader", Georgia, serif', fontWeight: 400, fontSize: "clamp(18px,1.8vw,23px)", lineHeight: 1.6, color: "rgba(246,243,237,0.85)", margin: "28px auto 0", maxWidth: "44ch" }}>
        Every Sunday we help children — babies through 5th grade — meet the love of God in Jesus, and learn to share it.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
        <button className="btn" style={{ background: "#f6f3ed", color: "var(--ink)" }}>Plan your visit <span className="arr">→</span></button>
        <button className="btn" style={{ background: "transparent", color: "#f6f3ed", border: "1px solid rgba(246,243,237,0.4)" }}>Email the kids team</button>
      </div>
    </div>
  </div>
</section>
```

---

## 6. Per-page content slots

To reuse the pattern on another sub-page, change only these:

| Slot | Kids example |
|---|---|
| Background image | `assets/kids-photo.jpg` |
| `background-position` | `center 30%` (raise/lower to keep faces in frame) |
| Eyebrow | `North Wake Kids · Babies – 5th grade` |
| Headline | `A place to know, grow, and go — sized for kids.` |
| Italic accent words | `know`, `grow`, `go` |
| Lede | one sentence, ≤ ~44ch per line |
| Primary button | `Plan your visit` |
| Ghost button | `Email the kids team` |

---

## 7. Assets

| Asset | Path | Use | Notes |
|---|---|---|---|
| Hero photo | `assets/kids-photo.jpg` | hero background | needs a version at least ~2000px wide; subject not centered too low (overlay is darkest at bottom) |

---

## 8. Responsive & accessibility

- **Fluid type** via `clamp()` — no breakpoint needed for the headline; it scales from 42px to 88px between mobile and desktop.
- On narrow screens the buttons wrap (they're `flex-wrap: wrap`), and the `88px` vertical padding can drop to ~56px under 720px if desired.
- **Contrast:** the 48–66% charcoal overlay keeps cream text well above WCAG AA on typical photography. If a given photo is very light, deepen the overlay's mid-stop from `0.48` toward `0.58` rather than lightening the text.
- Put the real subject description in the media element's `aria-label` (or use a real `<img>` with `alt` if you prefer semantic markup over a CSS background).
- The accent tint `#e8b394` is decorative emphasis; meaning is not carried by color alone (the words read fine without it).

---

## 9. Do / Don't

- **Do** keep the headline on the narrow measure — full-width serif at this size gets hard to read.
- **Do** use the light clay `#e8b394` for accent words on image; **don't** use the standard `--accent` `#8a4d2e` here (fails contrast on a dark ground).
- **Don't** add a drop shadow to the text — the overlay does the contrast work; shadows muddy the serif.
- **Don't** let the image go un-darkened; the pattern depends on the scrim.

---

## Audit corrections (2026-07-03)

Verified with WCAG 2.x against worst-case pure-white photo regions during the
`/community/kids` pilot. **This section supersedes the corresponding original
values above it** (§2 tokens, §3 type scale, §4/§5 reference markup):

- **Scrim mid-stop `0.48` → `0.58`** is the production default (top `0.62` /
  bottom `0.66` unchanged). This lifts the headline over its 3:1 large-text bar at
  the band's lightest point.
- **Lede and eyebrow render at FULL `--on-image-fg`** (no alpha). The original
  `0.85` lede / `0.90` eyebrow alphas thinned the cream and failed contrast; drop
  them for the rollout.
- **Accent words (`#e8b394` / `--on-image-accent`) are deliberately exempt** —
  decorative emphasis, meaning is not carried by color (per WCAG decorative-text
  treatment). Do not darken the scrim further just to chase the accent ratio.
- **Residual risk (accepted):** even at full opacity, cream text over a *fully
  blown-out white* region lands ~3.9–4.5:1 — the lede's strict 4.5:1 (and the
  eyebrow's) is not guaranteed in that pathological case. This is accepted and
  mitigated at the content layer by the shot list's "no blown-out / bright areas
  dead center" framing rule. Over real (darker-than-white) photography the stack
  clears its bars with wide margin.
