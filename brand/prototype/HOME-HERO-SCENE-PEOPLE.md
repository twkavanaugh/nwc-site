# Claude Code task — add the "Scene + People" home hero

Add a new home-page hero (devotional voice, watercolor-of-Wake-Forest background, then a framed photo of people below the fold) and make it the active hero. This matches the approved design.

## Asset

- The watercolor background image is **`wake-forest-bcg.png`**. Place it at **`assets/wake-forest-bcg.png`**.
- The people photo reuses the existing hero photo at **`assets/home-hero.jpg`** (swap for a real Sunday-gathering shot when available).

## Where the hero lives

All hero variants are functions in **`page-home.jsx`**. `HomePage({ onNav, hero })` picks one via a `hero` string. The active hero + the Tweaks options live in **`North Wake Church.html`** (`TWEAK_DEFAULTS.hero` and the `<TweakRadio … options={[…]}>` for "Hero variant").

## Step 1 — add the component to `page-home.jsx`

Paste this function in alongside the other `Hero*` functions (e.g. right before `function ServiceTimes`):

```jsx
function HeroSceneWithPeople({ onNav }) {
  const serif = '"Newsreader", Georgia, "Times New Roman", serif';
  return (
    <>
      {/* Watercolor devotional hero — the place */}
      <section style={{ padding: 0, position: "relative" }}>
        <div style={{ position: "relative", width: "100%", minHeight: "76vh", display: "flex", overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('assets/wake-forest-bcg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            backgroundColor: "#f3ecdf",
          }} aria-label="Watercolor of downtown Wake Forest"></div>
          {/* Soft cream scrim, top + bottom, for text legibility */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(246,243,237,0.72) 0%, rgba(246,243,237,0.28) 40%, rgba(246,243,237,0.92) 100%)",
          }}></div>
          <div className="wrap-narrow" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", width: "100%", paddingTop: 72, paddingBottom: 72 }}>
            <div className="eyebrow fade-up" style={{ marginBottom: 40, display: "flex", justifyContent: "center" }}>
              <span className="dot"></span>A family of faith · Wake Forest, NC
            </div>
            <h1
              className="fade-up"
              style={{
                fontFamily: serif,
                fontWeight: 400,
                fontSize: "clamp(46px, 7.5vw, 120px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: 0,
                maxWidth: "16ch",
                textWrap: "balance",
                animationDelay: "60ms",
              }}
            >
              A place to <span style={{ fontStyle: "italic", color: "var(--accent)" }}>know</span>, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>grow</span>, and <span style={{ fontStyle: "italic", color: "var(--accent)" }}>go</span> in love.
            </h1>
            <p
              className="fade-up"
              style={{
                fontFamily: serif,
                fontWeight: 400,
                fontSize: "clamp(19px, 2vw, 25px)",
                lineHeight: 1.6,
                color: "var(--ink-2)",
                margin: "32px auto 0",
                maxWidth: "40ch",
                animationDelay: "140ms",
              }}
            >
              Right here in downtown Wake Forest — gathering each Sunday to worship Jesus, and scattering through the week to love our neighbors near and far.
            </p>
            <div
              className="fade-up"
              style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40, flexWrap: "wrap", animationDelay: "200ms" }}
            >
              <button className="btn btn-primary" onClick={() => onNav("visit")}>
                Plan a visit <span className="arr">→</span>
              </button>
              <button className="btn btn-ghost">Watch Sunday's sermon</button>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: the place → the people. Serif line carries the eye down into the photo. */}
      <section style={{ paddingTop: 72, paddingBottom: 0 }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div style={{ width: 1, height: 48, background: "var(--line-strong)", margin: "0 auto 28px" }}></div>
          <p style={{
            fontFamily: serif,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(24px, 3vw, 38px)",
            lineHeight: 1.35,
            letterSpacing: "-0.015em",
            color: "var(--ink)",
            maxWidth: "24ch",
            margin: "0 auto",
            textWrap: "balance",
          }}>
            But a church was never the streets — it's the people who fill them.
          </p>
        </div>
      </section>

      {/* The people — full-bleed photo with a quiet caption, framed by the line above */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <div style={{
              aspectRatio: "21 / 9",
              width: "100%",
              backgroundImage: "url('assets/home-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
              backgroundColor: "var(--bg-2)",
            }} aria-label="People gathered at North Wake Church"></div>
            <div style={{
              position: "absolute",
              left: 0, right: 0, bottom: 0,
              padding: "40px 40px 28px",
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
            }}>
              <div style={{
                fontFamily: serif,
                fontStyle: "italic",
                fontSize: "clamp(18px, 1.8vw, 24px)",
                color: "rgba(255,255,255,0.95)",
                maxWidth: "30ch",
              }}>
                One family, gathered around the gospel.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

## Step 2 — register it in the `HomePage` switch (`page-home.jsx`)

Find the `const Hero = …` ternary inside `HomePage` and add the `scene-people` case:

```jsx
const Hero = hero === "devotional" ? HeroDevotional
  : hero === "scene" ? HeroDevotionalScene
  : hero === "scene-people" ? HeroSceneWithPeople
  : HeroOverlay;
```

(If your version doesn't already have `HeroDevotionalScene`, just add `hero === "scene-people" ? HeroSceneWithPeople :` ahead of the final fallback.)

## Step 3 — make it active + add the Tweak option (`North Wake Church.html`)

1. In `TWEAK_DEFAULTS`, set the hero:
   ```js
   "hero": "scene-people",
   ```
2. In the Hero-variant `TweakRadio`, add `"scene-people"` to the options array, e.g.:
   ```jsx
   options={["overlay", "devotional", "scene", "scene-people"]}
   ```

## Requirements / acceptance

- Font: the headline, lede, transition line, and photo caption all use **Newsreader** (already loaded in the page `<head>`; if not, add it — weights 300/400, italic 400). Body/UI stays in the existing sans.
- The watercolor fills the hero behind the text; the cream gradient scrim must keep the charcoal (`--ink`) text legible and fade the bottom of the watercolor to the page background.
- Order is **place → transition line → people photo**. Do not place the photo directly against the hero with no transition; the italic line is what makes it feel intentional.
- Colors use the existing tokens (`--ink`, `--ink-2`, `--accent`, `--line-strong`, `--bg-2`). Don't hardcode new colors except the listed scrim rgba and the `#f3ecdf` watercolor fallback.
- Verify at desktop and a narrow (~375px) width: text wraps, buttons wrap, the 21:9 photo and its caption stay readable.
