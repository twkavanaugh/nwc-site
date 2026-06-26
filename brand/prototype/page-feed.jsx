// Feed Ministry page

function FeedPage({ onNav }) {
  return (
    <>
      {/* Breadcrumb */}
      <section style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="mono" style={{ color: "var(--ink-3)" }}>
            <span style={{ cursor: "default" }} onClick={() => onNav("home")}>Home</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span>Help</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>Feed Ministry</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>Feed Ministry · Food pantry
              </div>
              <h1 className="display-l" style={{ maxWidth: "16ch" }}>
                More than groceries — <span style={{ color: "var(--accent)" }}>community, prayer,</span> presence.
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                Feed is a food pantry ministry at North Wake Church. We come together to find community and connection with God — believing his love extends to physical, emotional, and spiritual needs.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Stop by Feed <span className="arr">→</span></button>
                <button className="btn btn-ghost">Volunteer</button>
              </div>
            </div>
            <Placeholder label="Feed · candid" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* Two convictions */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>What is Feed</div>
              <h2 className="display-m" style={{ maxWidth: "14ch" }}>Two convictions shape everything.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Poverty is much more than a monetary issue, so we don't just hand out toiletries and groceries. We engage in real conversation, real prayer, and real witness.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {[
              {
                n: "01",
                h: "God's love extends to every kind of need.",
                b: "Physical hunger, emotional weight, spiritual longing — none of it falls outside the reach of Christ. We try to meet people where each of those needs sits.",
              },
              {
                n: "02",
                h: "God is present among the poor and needy.",
                b: "We don't bring God to the pantry — we meet him there. Scripture has been pointing us toward this for a long time, and our experience confirms it week after week.",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 36px 32px",
                  border: "1px solid var(--line-strong)",
                  borderRadius: 6,
                  background: "var(--bg-2)",
                }}
              >
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 16 }}>{c.n} · Conviction</div>
                <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 16, maxWidth: "20ch" }}>{c.h}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we serve */}
      <section style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>
            <span className="dot"></span>How we serve
          </div>
          <h2 className="display-m" style={{ color: "var(--bg)", maxWidth: "20ch", marginBottom: 28 }}>
            Conversation, prayer, witness — alongside the groceries.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", maxWidth: "60ch", margin: 0 }}>
            We get to know people by engaging in meaningful conversations, praying for each person, and witnessing to the gospel. We believe and experience that God is at work in this world and in the lives of those in need.
          </p>
        </div>
      </section>

      {/* How to engage — 3 paths */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>How to engage</div>
              <h2 className="display-m">Three ways in.</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {/* Path 1: Receive */}
            <div style={{ background: "var(--bg)", padding: "36px 32px 32px", display: "flex", flexDirection: "column", gap: 14, minHeight: 320 }}>
              <div className="mono" style={{ color: "var(--accent)" }}>01 · Receive</div>
              <h3 className="title" style={{ fontWeight: 500, fontSize: 24, letterSpacing: "-0.015em" }}>Stop by — we want to meet you.</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
                No matter who you are or what situation you're in, we're here to help with any needs you have — food insecurity, basic necessities, or connecting you to other resources.
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)", fontWeight: 500 }}>
                Just stop by whenever we're open. We'd love to get to know you.
              </p>
            </div>

            {/* Path 2: Donate */}
            <div style={{ background: "var(--bg)", padding: "36px 32px 32px", display: "flex", flexDirection: "column", gap: 14, minHeight: 320 }}>
              <div className="mono" style={{ color: "var(--accent)" }}>02 · Donate</div>
              <h3 className="title" style={{ fontWeight: 500, fontSize: 24, letterSpacing: "-0.015em" }}>Drop groceries in the teal box.</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
                Grab some extra groceries when you go shopping and drop them off at the teal box in the church lobby. The simplest way to support Feed every week.
              </p>
              <div style={{ marginTop: "auto", paddingTop: 14, display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--ink-3)" }}>
                <span style={{ width: 14, height: 14, borderRadius: 3, background: "#3fb6ad", border: "1px solid rgba(0,0,0,0.1)" }}></span>
                Look for the teal box · church lobby
              </div>
            </div>

            {/* Path 3: Volunteer */}
            <div style={{ background: "var(--bg)", padding: "36px 32px 32px", display: "flex", flexDirection: "column", gap: 14, minHeight: 320 }}>
              <div className="mono" style={{ color: "var(--accent)" }}>03 · Volunteer</div>
              <h3 className="title" style={{ fontWeight: 500, fontSize: 24, letterSpacing: "-0.015em" }}>Serve alongside the team.</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
                Interested in joining the Feed team? Reach out to either of our coordinators — they'll walk you through how to get started.
              </p>
              <div style={{ marginTop: "auto", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href="mailto:tylerp@northwake.com"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", border: "1px solid var(--line-strong)", borderRadius: 6, fontSize: 14 }}
                >
                  <span><span style={{ color: "var(--ink-3)" }}>Tyler · </span>tylerp@northwake.com</span>
                  <span style={{ color: "var(--accent)" }}>→</span>
                </a>
                <a
                  href="mailto:mccaberose6@gmail.com"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", border: "1px solid var(--line-strong)", borderRadius: 6, fontSize: 14 }}
                >
                  <span><span style={{ color: "var(--ink-3)" }}>Rose · </span>mccaberose6@gmail.com</span>
                  <span style={{ color: "var(--accent)" }}>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>When & where</div>
              <h2 className="display-m">Hours of operation.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Feed is open multiple times each month at North Wake Church Building 2.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {/* Hours */}
            <div style={{ borderTop: "1px solid var(--line-strong)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center", padding: "26px 0", borderBottom: "1px solid var(--line)" }}>
                <div className="display-s" style={{ fontWeight: 500, color: "var(--accent)", minWidth: 110 }}>Sun</div>
                <div>
                  <div className="title" style={{ fontWeight: 500 }}>Every Sunday</div>
                  <div style={{ fontSize: 14, color: "var(--ink-3)", marginTop: 4 }}>Year-round, weekly</div>
                </div>
                <div className="title" style={{ fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>8:30 – 10:15 AM</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center", padding: "26px 0", borderBottom: "1px solid var(--line)" }}>
                <div className="display-s" style={{ fontWeight: 500, color: "var(--accent)", minWidth: 110 }}>Sat</div>
                <div>
                  <div className="title" style={{ fontWeight: 500 }}>1st & 3rd Saturdays</div>
                  <div style={{ fontSize: 14, color: "var(--ink-3)", marginTop: 4 }}>Twice a month</div>
                </div>
                <div className="title" style={{ fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>8:30 – 10:00 AM</div>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Placeholder label="Building 2 · entrance" ratio="16/9" />
              <div style={{ padding: "20px 24px", border: "1px solid var(--line-strong)", borderRadius: 6 }}>
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 6 }}>Location</div>
                <div className="title" style={{ fontWeight: 500, marginBottom: 4 }}>North Wake Church · Building 2</div>
                <div style={{ fontSize: 14, color: "var(--ink-3)" }}>1212 S Main St · Wake Forest, NC 27587</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
            <span className="dot"></span>You're welcome here
          </div>
          <h2 className="display-l" style={{ marginBottom: 24 }}>We'd love to meet you.</h2>
          <p className="lede" style={{ margin: "0 auto", maxWidth: "48ch" }}>
            Whether you need a hand or want to lend one, the door is open. Stop by any Sunday morning — no appointment, no pressure.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary">Plan a visit to Feed <span className="arr">→</span></button>
            <button className="btn btn-ghost">Email Tyler or Rose</button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { FeedPage });
