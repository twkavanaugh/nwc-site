// Mission / Vision — Direction D "Devotional".
// Quiet, reverent, centered narrow column. Newsreader serif used for italic accents.
// Requires the Newsreader font to be loaded in the host HTML <head> (falls back to Georgia).

const MV2_SERIF = '"Newsreader", Georgia, "Times New Roman", serif';

function MissionPage2({ onNav }) {
  const movements = [
    {
      num: "i.",
      love: "We love God",
      word: "Know",
      body: "Loving God in response to His great love for us is the great privilege and calling of every Christian — what Jesus called the greatest commandment. Because we love God, we dwell with Him daily, gather as a church to worship, and study the Bible.",
    },
    {
      num: "ii.",
      love: "We love one another",
      word: "Grow",
      body: "Knowing the love of God leads to love for the family of God—the church. Jesus said Christians validate their faith before a watching world by their love for one another. Because of this, we fellowship with one another in community, serve the needs of the church, and embody our faith at home.",
    },
    {
      num: "iii.",
      love: "We love our neighbor",
      word: "Go",
      body: "The love of God in Jesus is too good to be kept to one group or people. Because we love our neighbor, we bear witness to the gospel, steward our resources for generosity, and send church members to do gospel ministry elsewhere.",
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

      {/* Hero statement */}
      <section style={{ paddingTop: 104, paddingBottom: 0 }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 40, justifyContent: "center", display: "flex" }}>
            <span className="dot"></span>What is the heartbeat of North Wake Church?
          </div>
          <p style={{
            fontFamily: MV2_SERIF,
            fontSize: "clamp(28px, 4vw, 52px)",
            lineHeight: 1.35,
            fontWeight: 400,
            color: "var(--ink)",
            textWrap: "balance",
            margin: "0 auto",
            maxWidth: "20ch",
          }}>
            We are a family of faith that exists to <span style={{ fontStyle: "italic", color: "var(--accent)" }}>know</span>, <span style={{ fontStyle: "italic", color: "var(--accent)" }}>grow</span>, and <span style={{ fontStyle: "italic", color: "var(--accent)" }}>go</span> in love.
          </p>
        </div>
      </section>

      {/* Mission sentence */}
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div style={{ width: 48, height: 1, background: "var(--line-strong)", margin: "0 auto 40px" }}></div>
          <p className="body" style={{ fontSize: 20, lineHeight: 1.75, color: "var(--ink-2)", maxWidth: "54ch", margin: "0 auto" }}>
            To know the love of God in Jesus Christ, to grow in love for one another, and to go in love to reach our neighbors near and far.
          </p>
          <p className="body" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-3)", maxWidth: "46ch", margin: "20px auto 0" }}>
            In other words, we seek to live out three great loves, fueled by the One Greatest Love.
          </p>
        </div>
      </section>

      {/* Framing paragraph */}
      <section style={{ paddingTop: 24, paddingBottom: 16 }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <p className="body" style={{ fontSize: 18, lineHeight: 1.8, color: "var(--ink-2)", maxWidth: "58ch", margin: "0 auto" }}>
            Christian love is not mere sentiment or niceness. God's love is a strong, holy love that leads to deep life change. As we come to know and believe the love God has for us in Jesus Christ by the work of the Holy Spirit, our hearts will be deeply changed such that we overflow with genuine love for God and others. So, our ministries and values are shaped around our three great loves, all in response to the One Great Love of God in Jesus Christ.
          </p>
          <div style={{ marginTop: 32 }}>
            <button className="btn btn-ghost" onClick={() => onNav("jesus")}>
              If this is unfamiliar, read “Who is Jesus?” <span className="arr">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Three movements */}
      <section style={{ padding: "0 0 32px" }}>
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", padding: "48px 0 8px" }}>
            <div style={{ fontFamily: MV2_SERIF, fontStyle: "italic", fontSize: "clamp(22px, 2.6vw, 30px)", color: "var(--ink)" }}>
              Because God has so loved us…
            </div>
          </div>

          {movements.map((m, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "56px 0",
                borderTop: "1px solid var(--line)",
                borderBottom: i === movements.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div style={{ fontFamily: MV2_SERIF, fontStyle: "italic", fontSize: 22, color: "var(--accent)", marginBottom: 18 }}>
                {m.num} {m.love}
              </div>
              <h2 style={{
                fontFamily: "var(--display)",
                fontWeight: 600,
                fontSize: "clamp(40px, 6vw, 72px)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                margin: "0 0 24px",
              }}>
                {m.word}
              </h2>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)", maxWidth: "50ch", margin: "0 auto" }}>
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section style={{ padding: "80px 0 96px" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: MV2_SERIF,
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.6vw, 32px)",
            lineHeight: 1.5,
            color: "var(--ink)",
            maxWidth: "32ch",
            margin: "0 auto",
            textWrap: "balance",
          }}>
            “Three great loves, all in response to the One Great Love of God in Jesus Christ.”
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
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

Object.assign(window, { MissionPage2 });
