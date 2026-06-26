// Membership page

function MembershipPage({ onNav }) {
  const steps = [
    {
      n: "01",
      h: "Start the conversation",
      b: "Reach out to the church office to let us know you're interested. We'll help you take the next step — no forms or commitment up front, just a friendly first email.",
    },
    {
      n: "02",
      h: "Begin getting connected",
      b: "We'll share details for the next New Members Course and invite you to plug in alongside it.",
      list: [
        "Join a smaller community (Grow Group)",
        "Attend a class focused on learning and spiritual growth",
        "Share a bit of your story with us through a short form",
      ],
    },
    {
      n: "03",
      h: "Meet one-on-one",
      b: "You'll have a relaxed, 30-minute conversation with a staff member — just a chance to get to know each other and ask questions.",
    },
    {
      n: "04",
      h: "Attend the New Members Course",
      b: "This course helps you understand who we are and what we believe. To move forward, you'll:",
      list: [
        "Attend at least 4 of the 6 sessions",
        "Complete a few simple forms",
        "Review and sign a membership covenant",
      ],
      note: "If you miss sessions, you can make them up in a future course.",
    },
    {
      n: "05",
      h: "Be welcomed into membership",
      b: "New members are joyfully affirmed by the church community — a public moment of belonging in front of the family you're joining.",
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
            <span style={{ color: "var(--accent)" }}>Membership</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>Considering membership
              </div>
              <h1 className="display-l" style={{ maxWidth: "16ch" }}>
                A way of <span style={{ color: "var(--accent)" }}>belonging,</span> growing, and sharing life together.
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                If you're exploring North Wake and wondering what it looks like to make this your church home, we'd love to walk with you. Membership here isn't just a step — it's a way of belonging.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Start the conversation <span className="arr">→</span></button>
                <button className="btn btn-ghost">See upcoming courses</button>
              </div>
            </div>
            <Placeholder label="Membership · welcomed in" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* Process — vertical timeline */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>The process</div>
              <h2 className="display-m">Five steps, walked together.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              No surprises and no pressure. Each step is paced so you can keep living your normal life while getting to know our church.
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--line-strong)" }}>
            {steps.map((s, i) => (
              <article
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 48,
                  padding: "44px 0",
                  borderBottom: "1px solid var(--line)",
                  alignItems: "start",
                }}
              >
                <div>
                  <div className="mono" style={{ color: "var(--accent)", marginBottom: 6 }}>Step</div>
                  <div className="display-m" style={{ fontWeight: 500, color: "var(--accent)", lineHeight: 1 }}>{s.n}</div>
                </div>
                <div style={{ maxWidth: "62ch" }}>
                  <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 14 }}>{s.h}</h3>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)" }}>{s.b}</p>
                  {s.list && (
                    <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                      {s.list.map((li, j) => (
                        <li key={j} style={{
                          display: "grid",
                          gridTemplateColumns: "auto 1fr",
                          gap: 14,
                          alignItems: "baseline",
                          fontSize: 16,
                          lineHeight: 1.55,
                          color: "var(--ink-2)",
                        }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", transform: "translateY(-2px)" }}></span>
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.note && (
                    <div style={{
                      marginTop: 20,
                      padding: "12px 16px",
                      background: "var(--bg-2)",
                      borderLeft: "2px solid var(--accent)",
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: "var(--ink-3)",
                      fontStyle: "italic",
                    }}>
                      {s.note}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming courses */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>What's next</div>
              <h2 className="display-m">Upcoming New Members Courses.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Three cohorts a year, each running six weeks on Sunday mornings.
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--line-strong)" }}>
            {[
              { season: "Spring 2026", dates: "May 3 – Jun 7", time: "Sundays · 9:00 AM", spots: "Registration open" },
              { season: "Summer 2026", dates: "Aug 9 – Sep 13", time: "Sundays · 9:00 AM", spots: "Registration opens Jul 1" },
              { season: "Fall 2026", dates: "Oct 18 – Nov 22", time: "Sundays · 9:00 AM", spots: "Registration opens Sep 1" },
            ].map((c, i) => (
              <div key={i} className="row-link">
                <div style={{ display: "grid", gridTemplateColumns: "200px 200px 1fr", gap: 32, alignItems: "center" }}>
                  <div>
                    <div className="mono" style={{ color: "var(--accent)", marginBottom: 4 }}>Cohort</div>
                    <div className="title" style={{ fontWeight: 500 }}>{c.season}</div>
                  </div>
                  <div>
                    <div className="mono" style={{ marginBottom: 4 }}>Dates</div>
                    <div style={{ fontSize: 16 }}>{c.dates}</div>
                  </div>
                  <div>
                    <div className="mono" style={{ marginBottom: 4 }}>Time</div>
                    <div style={{ fontSize: 16 }}>{c.time}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span className="tag" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>{c.spots}</span>
                  <span className="row-arr">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
            <span className="dot"></span>The first email
          </div>
          <h2 className="display-l" style={{ marginBottom: 24 }}>Tell us you're considering it.</h2>
          <p className="lede" style={{ margin: "0 auto", maxWidth: "48ch" }}>
            One short message gets the conversation started. Karen at the church office will follow up with everything you need.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary">Email the church office <span className="arr">→</span></button>
            <button className="btn btn-ghost">Visit a Sunday first</button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { MembershipPage });
