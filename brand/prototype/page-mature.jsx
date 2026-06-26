// Mature Adults Ministry page

function MatureAdultsPage({ onNav }) {
  const experiences = [
    {
      tag: "Connection",
      h: "Build meaningful friendships",
      b: "Real relationships with others who share similar life experiences and a common faith. The kind of friends you call when news — good or hard — comes.",
    },
    {
      tag: "Fun activities",
      h: "Joyful gatherings & outings",
      b: "Engaging mornings together, day trips, shared meals, and seasonal events. Laughter and good company are part of the design.",
    },
    {
      tag: "Welcoming community",
      h: "A warm, inviting atmosphere",
      b: "Everyone is valued and included. Whether you've been at North Wake for years or you walked in last Sunday, there's a seat for you.",
    },
    {
      tag: "Spiritual growth",
      h: "Deepening your walk with the Lord",
      b: "Encouragement, fellowship, and shared faith — strengthening one another in this rich, seasoned chapter of life.",
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
            <span>Community</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>Mature Adults</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>Mature Adults · Community ministry
              </div>
              <h1 className="display-l" style={{ maxWidth: "16ch" }}>
                Growing in faith. Building friendships. <span style={{ color: "var(--accent)" }}>Enjoying life together.</span>
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                A place where fellowship, faith, and fun come together. Designed for those in a more seasoned season of life who desire meaningful connection, joyful activities, and deeper spiritual growth.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Join us this month <span className="arr">→</span></button>
                <button className="btn btn-ghost">Get in touch</button>
              </div>
            </div>
            <Placeholder label="Mature Adults · gathering" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* Pull-quote / opening conviction */}
      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 56, alignItems: "start", maxWidth: 1100, margin: "0 auto" }}>
            <div className="mono" style={{ color: "var(--accent)", paddingTop: 12 }}>Our conviction</div>
            <p style={{
              margin: 0,
              fontFamily: "var(--display)",
              fontWeight: 400,
              fontSize: 38,
              lineHeight: 1.25,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              textWrap: "balance",
            }}>
              Every stage of life is a gift from God. This ministry celebrates the wisdom, experience, and vibrant spirit within our mature community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Heart */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Our heart</div>
              <h2 className="display-m" style={{ maxWidth: "16ch" }}>The heartbeat of this ministry is simple.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              A welcoming environment where friendships grow, laughter is shared, and our relationship with the Lord continues to deepen.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, marginTop: 0 }}>
                Through time together we encourage one another, build lasting relationships, and support each other in our faith journeys. Sundays are the doorway — but the deeper work of friendship and discipleship happens around tables, on outings, and in honest conversation.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65 }}>
                This is a season of life with much to give and much to receive. We carry decades of God's faithfulness with us — and we still have things to learn, friendships to make, and a Lord to know more deeply.
              </p>
            </div>

            <figure style={{ margin: 0, paddingLeft: 28, borderLeft: "2px solid var(--accent)" }}>
              <div className="mono" style={{ marginBottom: 14, color: "var(--accent)" }}>What we long to see</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Friendships that grow",
                  "Laughter shared often",
                  "Faith that keeps deepening",
                  "Encouragement, given and received",
                  "Lasting relationships across the years",
                ].map((line, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "baseline", fontFamily: "var(--display)", fontSize: 19, lineHeight: 1.45, fontWeight: 500, color: "var(--ink-2)", letterSpacing: "-0.01em" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", transform: "translateY(-3px)" }}></span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </figure>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section style={{ paddingTop: 16, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 16 }}>
            <Placeholder label="Around the table" ratio="4/5" />
            <Placeholder label="Outings together" ratio="16/10" />
            <Placeholder label="Studying the Word" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* What you'll experience */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>What you'll experience</div>
              <h2 className="display-m">Four things you can count on.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Connection, fun, welcome, and growth — woven into every gathering. Come once and see for yourself.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {experiences.map((r, i) => (
              <article key={i} style={{ background: "var(--bg)", padding: "44px 40px", display: "flex", flexDirection: "column", gap: 16, minHeight: 240 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                  <span className="display-s" style={{ color: "var(--accent)", fontWeight: 500 }}>0{i + 1}</span>
                  <span className="mono" style={{ color: "var(--ink-3)" }}>{r.tag}</span>
                </div>
                <h3 className="title" style={{ fontWeight: 500, fontSize: 26, letterSpacing: "-0.02em", marginTop: 0 }}>{r.h}</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)" }}>{r.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us — schedule card */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot"></span>Join us</div>
              <h2 className="display-l" style={{ maxWidth: "14ch", marginBottom: 24 }}>
                Twice a month, <span style={{ color: "var(--accent)" }}>mornings together.</span>
              </h2>
              <p className="lede" style={{ marginBottom: 32 }}>
                Whether you're looking to meet new friends, participate in enjoyable activities, or simply spend time with others who share your faith — this is a place for you. Come grow in community, deepen your relationship with the Lord, and enjoy the journey together.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary">RSVP for the next gathering <span className="arr">→</span></button>
                <button className="btn btn-ghost">Email the team</button>
              </div>
            </div>

            <div style={{
              background: "var(--bg)",
              border: "1px solid var(--line-strong)",
              padding: "36px 36px 32px",
              display: "grid",
              gap: 0,
            }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 20 }}>When we gather</div>

              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px 28px", alignItems: "baseline" }}>
                <div className="small" style={{ color: "var(--ink-3)" }}>Cadence</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>Twice a month</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)", margin: "4px 0" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Days</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>1st & 3rd Tuesdays</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)", margin: "4px 0" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Time</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>Mornings</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)", margin: "4px 0" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Where</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>North Wake Church</div>
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div className="small" style={{ color: "var(--ink-3)", marginBottom: 2 }}>Next gathering</div>
                  <div className="body" style={{ color: "var(--ink)", fontWeight: 500 }}>Tuesday, May 5 · 10:00 AM</div>
                </div>
                <span style={{ color: "var(--accent)" }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, justifyContent: "center", display: "flex" }}>
            <span className="dot"></span>You're welcome here
          </div>
          <h2 className="display-l" style={{ color: "var(--bg)", marginBottom: 24 }}>
            Come, and bring a friend.
          </h2>
          <p className="lede" style={{ color: "rgba(255,255,255,0.78)", margin: "0 auto", maxWidth: "50ch" }}>
            Every stage of life is a gift. We'd love to share this one with you — around the table, in the Word, and out enjoying everything God has given.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn" style={{ background: "var(--accent)", color: "white" }}>RSVP <span className="arr">→</span></button>
            <button className="btn" style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>Email the team</button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { MatureAdultsPage });
