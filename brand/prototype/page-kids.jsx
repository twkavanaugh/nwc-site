// Kids ministry page — North Wake Kids.

function KidsPage({ onNav }) {
  const illness = [
    "Fever (any oral temperature over 100°)",
    "Vomiting or diarrhea",
    "Runny nose with yellow / green discharge",
    "Persistent cough",
    "Sore throat",
    "COVID symptoms",
    "Croup",
    "Unexplained rash",
    "Childhood disease symptoms — scarlet fever, measles, mumps, chicken pox, whooping cough",
    "Skin infection — impetigo, boils, ringworm",
    "Eye infection — pink-eye or drainage",
    "Lice, or evidence of lice / nits within the past 2 weeks",
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
            <span style={{ color: "var(--accent)" }}>Kids</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>North Wake Kids · Babies – 5th grade
              </div>
              <h1 className="display-l" style={{ maxWidth: "16ch" }}>
                Know the love of Jesus. <span style={{ color: "var(--accent)" }}>Grow in love for one another. Go to share it.</span>
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                North Wake Kids exists to give every child a place to know God in Jesus, grow in love for one another, and be sent out to share that love with friends and family.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Plan your visit <span className="arr">→</span></button>
                <button className="btn btn-ghost">Email the kids team</button>
              </div>
            </div>
            <Placeholder label="Kids ministry · candid" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* Sunday schedule */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Sunday mornings</div>
              <h2 className="display-m" style={{ maxWidth: "14ch" }}>Two services. Both built for kids.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Each Sunday, trained teachers gather kids to learn more about our great God — through age-appropriate teaching, worship, and play.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            <article style={{ background: "var(--bg)", padding: "44px 40px 40px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 18 }}>Service · 9:00 AM</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 18, letterSpacing: "-0.015em" }}>9 AM hour</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 16, alignItems: "baseline", borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                  <span className="mono" style={{ color: "var(--ink-3)", minWidth: 110 }}>Babies – Pre-K</span>
                  <span className="body" style={{ margin: 0 }}>Classes by age group with trained teachers.</span>
                </li>
                <li style={{ display: "flex", gap: 16, alignItems: "baseline", borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                  <span className="mono" style={{ color: "var(--ink-3)", minWidth: 110 }}>K – 5th</span>
                  <span className="body" style={{ margin: 0 }}>Kid's Worship Hour — currently <em>Roamin' Through Romans</em>.</span>
                </li>
              </ul>
            </article>
            <article style={{ background: "var(--bg)", padding: "44px 40px 40px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 18 }}>Service · 10:45 AM</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 18, letterSpacing: "-0.015em" }}>10:45 AM hour</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                <li style={{ display: "flex", gap: 16, alignItems: "baseline", borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                  <span className="mono" style={{ color: "var(--ink-3)", minWidth: 110 }}>Babies – 5th</span>
                  <span className="body" style={{ margin: 0 }}>Full classes for every age, using The Gospel Project curriculum.</span>
                </li>
                <li style={{ display: "flex", gap: 16, alignItems: "baseline", borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                  <span className="mono" style={{ color: "var(--ink-3)", minWidth: 110 }}>Parents</span>
                  <span className="body" style={{ margin: 0 }}>Drop kids off, then head into the worship service together.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Mission verse + statement */}
      <section style={{ background: "var(--bg-2)", paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>
            <figure
              style={{
                margin: 0,
                paddingLeft: 28,
                borderLeft: "2px solid var(--accent)",
              }}
            >
              <div className="mono" style={{ marginBottom: 14, color: "var(--accent)" }}>Psalm 78:6</div>
              <blockquote style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 500, fontSize: 28, lineHeight: 1.35, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                "…that the next generation might know."
              </blockquote>
            </figure>

            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>The heartbeat</div>
              <h2 className="display-m" style={{ maxWidth: "16ch", marginBottom: 24 }}>
                Know. Grow. Go.
              </h2>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: "52ch" }}>
                We want kids to <strong>know</strong> the love of God in Jesus, <strong>grow</strong> in love for one another, and be sent to <strong>go</strong> share the love of Jesus with friends and family. Each Sunday morning brings children together with trained teachers to learn more about our great God.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section style={{ paddingTop: 96, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 16 }}>
            <Placeholder label="Classroom" ratio="4/3" />
            <Placeholder label="Kid's worship" ratio="4/3" />
            <Placeholder label="Drop-off" ratio="4/3" />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>What we're studying</div>
              <h2 className="display-m" style={{ maxWidth: "14ch" }}>Curriculum.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Two strong, gospel-centered tracks running in parallel — chosen so kids and parents can talk through the same big story together.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <article style={{ border: "1px solid var(--line-strong)", padding: "40px 36px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>Kid's Worship · K–5th · 9 AM</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 16, letterSpacing: "-0.015em" }}>Roamin' Through Romans</h3>
              <p className="body" style={{ margin: 0, color: "var(--ink-2)" }}>
                Kids walk through the book of Romans together — the same letter the whole church is preaching through this season.
              </p>
            </article>
            <article style={{ border: "1px solid var(--line-strong)", padding: "40px 36px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>All preschool · 9 AM &nbsp;·&nbsp; All classes · 10:45 AM</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 16, letterSpacing: "-0.015em" }}>The Gospel Project</h3>
              <p className="body" style={{ margin: 0, color: "var(--ink-2)", marginBottom: 18 }}>
                A weekly Bible study that helps kids dive deep into the big story of the Bible — God's plan to rescue his people through his Son, Jesus Christ.
              </p>
              <div style={{ display: "flex", gap: 18, fontSize: 14 }}>
                <a className="mono" style={{ color: "var(--accent)" }}>Preschool track →</a>
                <a className="mono" style={{ color: "var(--accent)" }}>Grade school track →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Child dedication — featured timely callout */}
      <section style={{ background: "var(--ink)", color: "var(--bg)", paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18, color: "rgba(255,255,255,0.6)" }}>
                <span className="dot"></span>Upcoming · May 10, 2026
              </div>
              <h2 className="display-l" style={{ color: "var(--bg)", marginBottom: 24, maxWidth: "12ch" }}>
                Child dedication.
              </h2>
              <p className="body" style={{ color: "rgba(255,255,255,0.78)", maxWidth: "38ch", fontSize: 17, lineHeight: 1.65 }}>
                On Sunday, May 10, families have the opportunity in both services to dedicate their children. Email the kids team with your child's full name and the service hour you'd like to attend.
              </p>
              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="mono" style={{ color: "var(--accent)" }}>children@northwake.com</div>
                <a className="mono" style={{ color: "rgba(255,255,255,0.6)" }}>Photo release form →</a>
              </div>
            </div>

            <div>
              <p className="body" style={{ color: "rgba(255,255,255,0.86)", fontSize: 17, lineHeight: 1.65, marginTop: 0 }}>
                At North Wake we greatly value the role parents and the church body play in raising children to be wholehearted followers of Christ. The public dedication of children serves three purposes:
              </p>

              <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  {
                    n: "01",
                    h: "Parents commit publicly.",
                    b: "Parents commit themselves to raise their children in the way of the Lord, inviting the encouragement, accountability, and prayer support of the congregation.",
                    ref: "Eph. 6:4",
                  },
                  {
                    n: "02",
                    h: "Parents present their children to the Lord.",
                    b: "Acknowledging that children are a gift from the Lord — and hoping in God to use them mightily to bring honor to his name and to expand his kingdom.",
                    ref: "1 Sam. 1:27–28",
                  },
                  {
                    n: "03",
                    h: "Parents seek God's blessing.",
                    b: "Following the example of those who brought little children to Jesus — publicly seeking his blessing on the next generation.",
                    ref: "Mark 10:13–16",
                  },
                ].map((p, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 24, alignItems: "start", borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 22 }}>
                    <div className="mono" style={{ color: "var(--accent)" }}>{p.n}</div>
                    <div>
                      <h3 className="title" style={{ color: "var(--bg)", fontWeight: 500, marginTop: 0, marginBottom: 8 }}>{p.h}</h3>
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.6, marginBottom: 8 }}>{p.b}</p>
                      <span className="mono" style={{ color: "rgba(255,255,255,0.5)" }}>{p.ref}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children in worship — Mother's Room, Worship Guide */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Children in worship</div>
              <h2 className="display-m" style={{ maxWidth: "16ch" }}>Practical help during the service.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Two small things that make a big difference for parents on Sunday morning.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <article style={{ border: "1px solid var(--line-strong)", padding: "40px 36px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>Off the worship center</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 16, letterSpacing: "-0.015em" }}>Mother's Room</h3>
              <p className="body" style={{ margin: 0, color: "var(--ink-2)" }}>
                A private room connected to the worship center for feeding, soothing, or stepping out with a fussy little one. A speaker keeps the music and message playing throughout.
              </p>
            </article>
            <article style={{ border: "1px solid var(--line-strong)", padding: "40px 36px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>On the lobby table</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 16, letterSpacing: "-0.015em" }}>Worship Guide for Kids</h3>
              <p className="body" style={{ margin: 0, color: "var(--ink-2)" }}>
                Grab a paper guide and a pack of crayons on your way in to help your kids engage with the service alongside you.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section style={{ background: "var(--bg-2)", paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Health &amp; safety</div>
              <h2 className="display-m" style={{ maxWidth: "16ch" }}>Your child's safety, taken seriously.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              We take safety and security in kids ministry seriously — for parents, for kids, and for the volunteers who love them well.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <article style={{ background: "var(--bg)", border: "1px solid var(--line-strong)", padding: "40px 36px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>Accreditation in process</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 16, letterSpacing: "-0.015em" }}>ECAP — Evangelical Council for Abuse Prevention</h3>
              <p className="body" style={{ margin: 0, color: "var(--ink-2)", marginBottom: 16 }}>
                North Wake is currently in the accreditation process with ECAP. Our Child Safety Team oversees and supports volunteers in implementing our child protection policies.
              </p>
              <div className="mono" style={{ color: "var(--accent)" }}>childsafety@northwake.com</div>
            </article>
            <article style={{ background: "var(--bg)", border: "1px solid var(--line-strong)", padding: "40px 36px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>Illness policy</div>
              <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 16, letterSpacing: "-0.015em" }}>Stay home if&nbsp;…</h3>
              <p className="body" style={{ margin: 0, color: "var(--ink-2)", marginBottom: 18 }}>
                Children should not be in Sunday school if they have shown any of the following within the previous 24 hours.
              </p>
              <ul style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px 24px",
                fontSize: 14,
                color: "var(--ink-2)",
              }}>
                {illness.map((item, i) => (
                  <li key={i} style={{ paddingLeft: 14, position: "relative", lineHeight: 1.5 }}>
                    <span style={{ position: "absolute", left: 0, top: 9, width: 6, height: 1, background: "var(--accent)" }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mono" style={{ color: "var(--ink-3)", marginTop: 22, fontStyle: "italic" }}>When in doubt, sit an extra week out.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA — connect */}
      <section>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
            <span className="dot"></span>Connect with us
          </div>
          <h2 className="display-l" style={{ marginBottom: 24 }}>Questions? Just ask.</h2>
          <p className="lede" style={{ margin: "0 auto", maxWidth: "48ch" }}>
            We'd love to help you plan your first Sunday — or answer anything about classes, drop-off, or what to expect.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary">Email children@northwake.com <span className="arr">→</span></button>
            <button className="btn btn-ghost">Follow @northwakekids</button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { KidsPage });
