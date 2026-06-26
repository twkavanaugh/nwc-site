// Hope Counseling Center page
// Sensitive content — designed for clarity, warmth, and trust.

function HopeCounselingPage({ onNav }) {
  const helpsWith = [
    "Anxiety",
    "Depression",
    "Grief & loss",
    "Trauma",
    "Insecurity & shame",
    "Anger",
    "Premarital counseling",
    "Marital difficulties",
    "Parenting struggles",
    "Relational conflict",
  ];

  const notFor = [
    "Psychosis",
    "Detox-level substance abuse",
    "Situations requiring licensed clinical intervention",
  ];

  const commitments = [
    {
      tag: "Mature counselors",
      h: "Trained, discerning Christians",
      b: "Many of our counselors have formal theological training in biblical counseling. We're not licensed psychologists or psychiatrists — we work cooperatively with medical and mental-health professionals when appropriate.",
    },
    {
      tag: "Christ-centered",
      h: "A person, not a program",
      b: "Real hope is found in Jesus Christ. We point people to him — through Scripture, prayer, and the transforming work of the Holy Spirit — rather than to a method or formula.",
    },
    {
      tag: "Heart-level",
      h: "Lasting change, not behavior management",
      b: "We seek to address the deeper spiritual roots of struggle, not just the surface symptoms. The goal is heart change that lasts.",
    },
    {
      tag: "Compassionate",
      h: "Counseling people, not problems",
      b: "We enter each person's story with gentleness and respect, modeling the compassion of Christ. You'll be heard before you're advised.",
    },
    {
      tag: "Whole person",
      h: "Body, mind, and soul",
      b: "We consider the whole person and remain dependent on the Holy Spirit for true transformation. We refer to medical or licensed care when that's what's needed.",
    },
    {
      tag: "Community",
      h: "The church surrounds the work",
      b: "Healing happens best in community. We encourage engagement in the broader life and support of the local church alongside counseling.",
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
            <span>Help</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>Hope Counseling Center</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>The HOPE Counseling Center · A ministry of North Wake
              </div>
              <h1 className="display-l" style={{ maxWidth: "16ch" }}>
                Coming alongside hurting people with the comfort found in <span style={{ color: "var(--accent)" }}>Jesus Christ.</span>
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                A church-based biblical counseling ministry, offering Christ-centered, Scripture-driven care to our community and educational support to the local church. Open to anyone 18 and older, on a donation basis.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Request counseling <span className="arr">→</span></button>
                <button className="btn btn-ghost">How it works</button>
              </div>
            </div>
            <Placeholder label="HOPE · safe room" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* Pull-quote */}
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
              Real hope is found in a person, Jesus Christ — not in a program. The Bible points us to him, and lasting change comes through a growing relationship with him.
            </p>
          </div>
        </div>
      </section>

      {/* Mission narrative */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Our mission</div>
              <h2 className="display-m" style={{ maxWidth: "18ch" }}>Christ-centered care, made accessible.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              We exist to come alongside hurting people with the same comfort believers have received in Christ — and to equip the local church to do the same.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, marginTop: 0 }}>
                The HOPE Counseling Center serves the community first, by providing Christ-centered, Scripture-driven counseling, and the local church second, with educational services that address the real struggles people face in everyday life. We are not a licensed clinical practice — we are a church ministry, staffed by mature, trained Christian counselors who seek lasting heart change rather than surface behavioral improvement.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65 }}>
                Our approach is biblical and relational. We thoughtfully apply the truths of Scripture to the complexities of life, integrating careful listening, prayer, practical application, and heart-level reflection. While similar in structure to cognitive-behavioral methods, our foundation is the authority and sufficiency of Scripture and the transforming work of the Holy Spirit.
              </p>
            </div>

            <figure style={{ margin: 0, paddingLeft: 28, borderLeft: "2px solid var(--accent)" }}>
              <div className="mono" style={{ marginBottom: 14, color: "var(--accent)" }}>What we hold to</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Mature, discerning counselors",
                  "Christ-centered, not program-driven",
                  "Heart change over behavior management",
                  "Dependence on prayer",
                  "Engagement with the local church",
                  "Care for the whole person",
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

      {/* Scope: what we help with / what we don't */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Scope of care</div>
              <h2 className="display-m" style={{ maxWidth: "18ch" }}>What we help with — and where we refer.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Honesty about scope is part of good care. Below is the kind of struggle we regularly walk through with people, and the situations where we'll connect you with a licensed professional instead.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32 }}>
            {/* What we help with */}
            <div style={{ border: "1px solid var(--line-strong)", padding: "36px 36px 32px" }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 20 }}>We regularly walk with people through</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px" }}>
                {helpsWith.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, fontFamily: "var(--display)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", transform: "translateY(-2px)" }}></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="small" style={{ marginTop: 28, marginBottom: 0, color: "var(--ink-3)", lineHeight: 1.6 }}>
                Counseling is offered to individuals age 18 and older who desire meaningful change.
              </p>
            </div>

            {/* What we don't do */}
            <div style={{ background: "var(--bg-2)", padding: "36px 36px 32px" }}>
              <div className="mono" style={{ color: "var(--ink-3)", marginBottom: 20 }}>We do not provide care for</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {notFor.map((item, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "baseline", fontFamily: "var(--display)", fontSize: 17, lineHeight: 1.45, fontWeight: 500, color: "var(--ink-2)", letterSpacing: "-0.005em" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-3)", paddingTop: 2 }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="small" style={{ marginTop: 24, marginBottom: 0, color: "var(--ink-3)", lineHeight: 1.6 }}>
                In these cases, we'll gladly refer you to trusted licensed professionals in the community. We work cooperatively with medical and mental-health providers when appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core commitments */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Our commitments</div>
              <h2 className="display-m" style={{ maxWidth: "18ch" }}>Six things you can count on from us.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              These convictions shape every counseling relationship — how we listen, what we offer, and how we walk with you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {commitments.map((r, i) => (
              <article key={i} style={{ background: "var(--bg)", padding: "36px 32px 32px", display: "flex", flexDirection: "column", gap: 14, minHeight: 260 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span className="display-s" style={{ color: "var(--accent)", fontWeight: 500 }}>0{i + 1}</span>
                  <span className="mono" style={{ color: "var(--ink-3)" }}>{r.tag}</span>
                </div>
                <h3 className="title" style={{ fontWeight: 500, fontSize: 22, letterSpacing: "-0.015em", marginTop: 0 }}>{r.h}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>{r.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practical info card */}
      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot"></span>Practical information</div>
              <h2 className="display-l" style={{ maxWidth: "14ch", marginBottom: 24 }}>
                Accessible, on a <span style={{ color: "var(--accent)" }}>donation basis.</span>
              </h2>
              <p className="lede" style={{ marginBottom: 24 }}>
                Financial limitations should not prevent someone from receiving care. Counseling is offered on a donation basis, and our scope is shaped by who we are — a church ministry, not a clinical practice.
              </p>
              <p className="body" style={{ marginBottom: 0, color: "var(--ink-2)", maxWidth: "52ch" }}>
                We are not licensed psychologists or psychiatrists, we do not prescribe medication, and we do not process insurance. When licensed care is what someone needs, we'll help them find it.
              </p>
            </div>

            <div style={{
              background: "var(--bg)",
              border: "1px solid var(--line-strong)",
              padding: "36px 36px 32px",
              display: "grid",
              gap: 0,
            }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 20 }}>The basics</div>

              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px 28px", alignItems: "baseline" }}>
                <div className="small" style={{ color: "var(--ink-3)" }}>Who</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>Adults 18 & older</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)", margin: "4px 0" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Cost</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>Donation basis</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)", margin: "4px 0" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Approach</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>Biblical counseling</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)", margin: "4px 0" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Insurance</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>Not processed</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)", margin: "4px 0" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Medication</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 22 }}>Not prescribed</div>
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div className="small" style={{ color: "var(--ink-3)", marginBottom: 2 }}>Get started</div>
                  <div className="body" style={{ color: "var(--ink)", fontWeight: 500 }}>Request counseling form</div>
                </div>
                <span style={{ color: "var(--accent)" }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis disclaimer */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{
            border: "1px solid var(--line-strong)",
            background: "var(--bg-2)",
            padding: "24px 28px",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: 24,
            alignItems: "center",
          }}>
            <div className="mono" style={{ color: "var(--accent)" }}>If you're in crisis</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}>
              If you or someone you love is in immediate danger or experiencing a mental-health emergency, please call 911 or the 988 Suicide & Crisis Lifeline. Hope Counseling is not equipped for emergency intervention.
            </p>
            <span style={{ color: "var(--ink-3)" }}>→</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, justifyContent: "center", display: "flex" }}>
            <span className="dot"></span>The next step
          </div>
          <h2 className="display-l" style={{ color: "var(--bg)", marginBottom: 24 }}>
            Hope is a person, and he is near.
          </h2>
          <p className="lede" style={{ color: "rgba(255,255,255,0.78)", margin: "0 auto", maxWidth: "52ch" }}>
            We'd be honored to walk with you. Reach out through the form below — someone from our team will respond personally, listen carefully, and help you understand the next step.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn" style={{ background: "var(--accent)", color: "white" }}>Request counseling <span className="arr">→</span></button>
            <button className="btn" style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>Email the team</button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { HopeCounselingPage });
