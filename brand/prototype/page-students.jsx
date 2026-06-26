// Students ministry — rebuilt with approved content from North Wake.

function StudentsPage({ onNav }) {
  const rhythms = [
    {
      tag: "Weekly · Sunday AM",
      title: "Sunday Mornings",
      lede: "Opening the Scriptures together.",
      body: "Students gather to open the Scriptures with teaching that is faithful and accessible. Our teaching rhythm alternates between books of the Bible and engaging relevant topics. Every message is Christ-centered — helping students see who Jesus is, what he has done, and how that changes everything.",
      ph: "Sunday teaching",
    },
    {
      tag: "Weekly · Sunday PM",
      title: "Sunday Evenings",
      lede: "Grow Groups & Real Talk.",
      body: "Students gather in Grow Groups by grade, mirroring adult community at North Wake. Every other week, students meet in 'Real Talk' Groups split by gender — a safe space for authenticity and vulnerability.",
      ph: "Grow Group · students",
    },
    {
      tag: "Annual · Spring",
      title: "Spring Mission Trip",
      lede: "Sent out together.",
      body: "Each spring our students serve alongside others — often partnering with North Wake church plants. These trips broaden worldviews, grow hearts of service, and build deep friendships among students.",
      ph: "Mission trip",
    },
    {
      tag: "Annual · Summer",
      title: "Camp",
      lede: "The Word, worship, friendships.",
      body: "Camp is an opportunity to hear the Word preached, grow in friendship, and worship alongside other churches. God has chosen to transform many students' lives through summer camp — and we're eager to see him keep working through faithful proclamation and strong community.",
      ph: "Summer camp",
    },
    {
      tag: "Annual · Fall",
      title: "Fall Retreat",
      lede: "Solitude with the Lord.",
      body: "One weekend each fall, students spend time in solitude with the Lord walking through a devotional — extended prayer, deep engagement with Scripture, and a step away from the hustle of ordinary life. A long-running student favorite.",
      ph: "Fall retreat",
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
            <span style={{ color: "var(--accent)" }}>Students</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>Students · 6th – 12th grade
              </div>
              <h1 className="display-l" style={{ maxWidth: "16ch" }}>
                Helping students grow into <span style={{ color: "var(--accent)" }}>mature followers of Christ.</span>
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                Our student ministry exists to see students and their families know the love of God in Jesus Christ, grow in love for one another, and go in love to reach neighbors near and far.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Visit a Sunday <span className="arr">→</span></button>
                <button className="btn btn-ghost">Parent info</button>
              </div>
            </div>
            <Placeholder label="Students · gathering" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* Heartbeat / Vision */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>The heartbeat</div>
              <h2 className="display-m" style={{ maxWidth: "14ch" }}>Our vision for students.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              As a ministry of North Wake Church, we extend the mission of the church — helping students grow into mature followers of Christ within the life of the local body.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, marginTop: 0 }}>
                Our aim is to see students grow to maturity in Christ — hearts deeply saturated in the gospel, bearing fruit over time in their lives and in the lives of those around them.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65 }}>
                We pursue this by faithfully proclaiming Christ through the teaching of Scripture, connecting students to meaningful relationships with one another and with mature leaders in the church, and depending in prayer on the Lord to transform their lives.
              </p>
            </div>

            <figure
              style={{
                margin: 0,
                paddingLeft: 28,
                borderLeft: "2px solid var(--accent)",
              }}
            >
              <div className="mono" style={{ marginBottom: 14, color: "var(--accent)" }}>Colossians 1:28–29</div>
              <blockquote style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 500, fontSize: 19, lineHeight: 1.5, letterSpacing: "-0.01em", color: "var(--ink-2)" }}>
                "Him we proclaim, warning everyone and teaching everyone with all wisdom, that we may present everyone mature in Christ. For this I toil, struggling with all his energy that he powerfully works within me."
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section style={{ background: "var(--bg-2)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 36 }}><span className="dot"></span>How we pursue it</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {[
              { n: "01", h: "Proclaim Christ", b: "Faithful, Christ-centered teaching of Scripture — every week, every series." },
              { n: "02", h: "Build community", b: "Connecting students to meaningful relationships with peers and with mature adult leaders." },
              { n: "03", h: "Depend in prayer", b: "Trusting the Lord to transform students' lives through his Word, his Spirit, and his people." },
            ].map((p, i) => (
              <div key={i}>
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>{p.n}</div>
                <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 14 }}>{p.h}</h3>
                <p className="body" style={{ margin: 0, maxWidth: "32ch" }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section style={{ paddingTop: 96, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 }}>
            <Placeholder label="Worship · candid" ratio="4/3" />
            <Placeholder label="Real Talk group" ratio="4/3" />
            <Placeholder label="Camp" ratio="4/3" />
          </div>
        </div>
      </section>

      {/* Regular rhythms — compact card grid */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Regular rhythms</div>
              <h2 className="display-m">When we gather.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Discipleship happens through repetition. Across the week and across the year, here's how a student plugs in.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {rhythms.map((r, i) => (
              <article
                key={i}
                style={{
                  background: "var(--bg)",
                  padding: "36px 32px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 300,
                }}
              >
                <div className="mono" style={{ color: "var(--accent)" }}>{r.tag}</div>
                <h3 className="title" style={{ fontWeight: 500, fontSize: 24, letterSpacing: "-0.015em" }}>{r.title}</h3>
                <div style={{ color: "var(--ink-2)", fontWeight: 500, fontSize: 16, lineHeight: 1.45 }}>{r.lede}</div>
                <p style={{ margin: 0, color: "var(--ink-3)", fontSize: 16, lineHeight: 1.55 }}>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
            <span className="dot"></span>The next step
          </div>
          <h2 className="display-l" style={{ marginBottom: 24 }}>Come this Sunday.</h2>
          <p className="lede" style={{ margin: "0 auto", maxWidth: "48ch" }}>
            New students are welcome any week. We'll save you a seat — and we'll help your parents know what to expect, too.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary">Tell us you're coming <span className="arr">→</span></button>
            <button className="btn btn-ghost">Email the student team</button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { StudentsPage });
