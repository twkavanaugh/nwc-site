// Mission / Vision — Know · Grow · Go.
// Editorial layout — type-led, with the three great loves as the structural spine.

function MissionPage({ onNav }) {
  const loves = [
    {
      key: "Know",
      verb: "We Love God",
      lede: "Loving God in response to His great love for us is the great privilege and calling of every Christian. It is what Jesus called “the greatest commandment.”",
      practices: [
        "We dwell with Him daily.",
        "We gather as a church to worship.",
        "We study the Bible.",
      ],
    },
    {
      key: "Grow",
      verb: "We Love one another",
      lede: "Knowing the love of God leads to love for the family of God — the church. Jesus said that Christians validate their faith before a watching world by their love for one another.",
      practices: [
        "We fellowship with one another in community.",
        "We serve the needs of the church.",
        "We embody our faith at home.",
      ],
    },
    {
      key: "Go",
      verb: "We Love our neighbor",
      lede: "The love of God in Jesus is too good to be kept to one group or people.",
      practices: [
        "We bear witness to the gospel.",
        "We steward our resources for generosity.",
        "We send church members to do gospel ministry elsewhere.",
      ],
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="mono" style={{ color: "var(--ink-3)" }}>
            <span style={{ cursor: "default" }} onClick={() => onNav("home")}>Home</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span>About</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>Mission &amp; Vision</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot"></span>The heartbeat of North Wake
          </div>
          <h1 className="display-xl" style={{ maxWidth: "20ch", marginBottom: 36 }}>
            We are a family of faith that exists to <em style={{ fontStyle: "italic", color: "var(--accent)" }}>know, grow,</em> and <em style={{ fontStyle: "italic", color: "var(--accent)" }}>go</em>.
          </h1>
          <p className="lede" style={{ maxWidth: "48ch" }}>
            To know the love of God in Jesus Christ, to grow in love for one another, and to go in love to reach our neighbors near and far.
          </p>
        </div>
      </section>

      {/* Three loves stamp */}
      <section>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--line)",
            border: "1px solid var(--line)",
          }}>
            {[
              { word: "KNOW", sub: "the love of God in Jesus Christ" },
              { word: "GROW", sub: "in love for one another" },
              { word: "GO", sub: "in love to reach our neighbors" },
            ].map((s, i) => (
              <div key={i} style={{
                background: "var(--bg)",
                padding: "56px 36px",
                textAlign: "center",
              }}>
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 18 }}>
                  0{i + 1}
                </div>
                <div style={{
                  fontFamily: "var(--display)",
                  fontWeight: 500,
                  fontSize: 96,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                  marginBottom: 18,
                }}>
                  {s.word}
                </div>
                <div className="body" style={{ fontSize: 17, color: "var(--ink-2)", maxWidth: "26ch", margin: "0 auto" }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The framing — three great loves, one greater love */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot"></span>What it means
              </div>
              <h2 className="display-m" style={{ maxWidth: "16ch" }}>
                Three great loves, fueled by the One Greatest Love.
              </h2>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--display)",
                fontSize: 22,
                lineHeight: 1.55,
                fontWeight: 400,
                color: "var(--ink)",
                marginBottom: 24,
                maxWidth: "44ch",
                textWrap: "pretty",
              }}>
                Christian love is not mere sentiment or niceness. God's love is a strong, holy love that leads to deep life change.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 16, maxWidth: "54ch" }}>
                As we come to know and believe the love God has for us in Jesus Christ by the work of the Holy Spirit, our hearts will be deeply changed such that we overflow with genuine love for God and others.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 24, maxWidth: "54ch" }}>
                So, our ministries and values are shaped around our three great loves, all in response to the One Great Love of God in Jesus Christ.
              </p>
              <button className="btn btn-ghost" onClick={() => onNav("jesus")}>
                If you aren’t familiar with this, read “Who is Jesus?” <span className="arr">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The three loves — detailed */}
      <section>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot"></span>The three great loves</div>
          <h2 className="display-l" style={{ marginBottom: 56, maxWidth: "20ch" }}>
            Because God has so loved us…
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {loves.map((l, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr 1.4fr",
                gap: 56,
                padding: "48px 0",
                borderTop: "1px solid var(--line-strong)",
                alignItems: "start",
              }}>
                {/* Big keyword */}
                <div style={{ minWidth: 220 }}>
                  <div className="mono" style={{ color: "var(--accent)", marginBottom: 10 }}>
                    0{i + 1} · {l.key}
                  </div>
                  <div style={{
                    fontFamily: "var(--display)",
                    fontSize: 64,
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: "-0.035em",
                    color: "var(--ink)",
                  }}>
                    {l.verb.split(" ").map((w, j) => (
                      <div key={j}>{w}</div>
                    ))}
                  </div>
                </div>

                {/* Lede */}
                <div>
                  <p style={{
                    fontFamily: "var(--display)",
                    fontSize: 21,
                    lineHeight: 1.5,
                    fontWeight: 400,
                    color: "var(--ink)",
                    margin: 0,
                    maxWidth: "32ch",
                    textWrap: "pretty",
                  }}>
                    {l.lede}
                  </p>
                </div>

                {/* Practices */}
                <div>
                  <div className="mono" style={{ color: "var(--ink-3)", marginBottom: 14 }}>How we live it</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {l.practices.map((p, j) => (
                      <li key={j} style={{
                        padding: "16px 0",
                        borderBottom: j === l.practices.length - 1 ? "none" : "1px solid var(--line)",
                        display: "grid",
                        gridTemplateColumns: "20px 1fr",
                        gap: 16,
                        alignItems: "baseline",
                      }}>
                        <span className="mono" style={{ color: "var(--accent)" }}>+</span>
                        <span className="body" style={{ fontSize: 17, color: "var(--ink)", lineHeight: 1.5 }}>
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTAs */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => onNav("visit")}>
              Plan a visit <span className="arr">→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => onNav("groups")}>
              Find community
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { MissionPage });
