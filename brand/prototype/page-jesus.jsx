// Who is Jesus? — invitational, pastoral, sized for reflection.

function WhoIsJesusPage({ onNav }) {
  const bigQuestions = [
    "What is the point of it all?",
    "Why do I matter?",
    "What is true love?",
    "Why is there so much injustice?",
    "Why do we struggle to be genuinely unselfish?",
    "Is there such a thing as a happy ending?",
    "What is the good life?",
  ];

  const claims = [
    { q: "Who did He claim to be?" },
    { q: "Was He the “Son of God”?" },
    { q: "Did He bear our sins?" },
    { q: "Did He rise from the dead?" },
  ];

  const resources = [
    { title: "The Reason for God", author: "Tim Keller", note: "A thoughtful case for Christianity, written for skeptics and seekers." },
    { title: "3-2-1: The Story of God, the World, and You", author: "Glen Scrivener", note: "A short, accessible introduction to the Christian story." },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="mono" style={{ color: "var(--ink-3)" }}>
            <span style={{ cursor: "default" }} onClick={() => onNav("home")}>Home</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>Who is Jesus?</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot"></span>An invitation
          </div>
          <h1 className="display-xl" style={{ maxWidth: "16ch", marginBottom: 36 }}>
            Who is Jesus?
          </h1>
          <p className="lede" style={{ maxWidth: "44ch" }}>
            If you're curious, struggling, or even skeptical, you're in the right place. You are welcome here — because you and your questions matter.
          </p>
        </div>
      </section>

      {/* Big questions */}
      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot"></span>The questions we're all asking
              </div>
              <h2 className="display-m" style={{ maxWidth: "16ch" }}>
                We are all asking big questions about what matters most.
              </h2>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "1px solid var(--line)" }}>
              {bigQuestions.map((q, i) => (
                <li key={i} style={{
                  padding: "22px 0",
                  borderBottom: "1px solid var(--line)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 24,
                  alignItems: "baseline",
                }}>
                  <span className="mono" style={{ color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontFamily: "var(--display)",
                    fontSize: 24,
                    lineHeight: 1.35,
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    color: "var(--ink)",
                  }}>
                    {q}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The claim */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot"></span>What we believe
          </div>
          <h2 className="display-l" style={{ maxWidth: "22ch", marginBottom: 36 }}>
            We believe the most important questions hinge around Jesus Christ.
          </h2>
          <p className="lede" style={{ maxWidth: "48ch", marginBottom: 48 }}>
            And while we still have questions of our own, the gospel keeps drawing us back to four:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {claims.map((c, i) => (
              <div key={i} style={{
                background: "var(--bg-2)",
                padding: "36px 28px",
                minHeight: 200,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div className="mono" style={{ color: "var(--accent)" }}>
                  Question {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{
                  fontFamily: "var(--display)",
                  fontSize: 22,
                  lineHeight: 1.35,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                }}>
                  {c.q}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The good news */}
      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot"></span>The good news
              </div>
              <h2 className="display-m" style={{ maxWidth: "14ch" }}>
                He came after us.
              </h2>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--display)",
                fontSize: 22,
                lineHeight: 1.55,
                fontWeight: 400,
                color: "var(--ink)",
                marginBottom: 28,
                maxWidth: "44ch",
                textWrap: "pretty",
              }}>
                The good news of the Bible is that even though we have all turned away from God — and even replaced Him in various ways — He came after us.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 20, maxWidth: "54ch" }}>
                In the person of Jesus Christ, we believe the Son of God<sup style={{ color: "var(--accent)", fontSize: "0.7em", marginLeft: 2 }}>*</sup> stepped into our world to live among us, suffer like us, fulfill the longings of our story, display God's love, satisfy God's justice, die for our sin, rise as King above all — and one day return in visible glory to administer true justice and renew our broken world.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)", maxWidth: "54ch" }}>
                As such, He offers His love and friendship to anyone who calls out to Him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footnote on Trinity */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{
            maxWidth: 760,
            marginLeft: "auto",
            background: "var(--bg-2)",
            border: "1px solid var(--line)",
            padding: "32px 36px",
          }}>
            <div className="mono" style={{ color: "var(--accent)", marginBottom: 12 }}>
              * On the Son of God
            </div>
            <p className="body" style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", margin: 0, maxWidth: "60ch" }}>
              When we say Jesus Christ is the Son of God, we mean that He has always existed as a member of the eternal community of the Triune God: Father, Son, and Holy Spirit. This is a mysterious and yet beautiful truth. If God has always existed in a Triune community, He has always been love — for He always had an object of love. The invitation to become a Christian is an invitation to enter the life and love of God, much like a dance that began before time itself.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee or tea CTA */}
      <section>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 0,
            border: "1px solid var(--line-strong)",
          }}>
            <div style={{ padding: "56px 48px", borderRight: "1px solid var(--line-strong)" }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot"></span>Want to talk?</div>
              <h2 className="display-m" style={{ marginBottom: 20, maxWidth: "16ch" }}>
                Coffee or tea, on us.
              </h2>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 28, maxWidth: "44ch" }}>
                If you'd like to talk more about Jesus, please reach out. Someone from our pastoral care team will follow up — we'd be glad to grab a cup and hear your story.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary">
                  Start a conversation <span className="arr">→</span>
                </button>
                <button className="btn btn-ghost" onClick={() => onNav("visit")}>
                  Visit a Sunday first
                </button>
              </div>
            </div>
            <div style={{ padding: "56px 48px", background: "var(--bg-2)" }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot"></span>Or just ask</div>
              <h2 className="display-m" style={{ marginBottom: 20, maxWidth: "14ch" }}>
                One question is enough.
              </h2>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 28, maxWidth: "44ch" }}>
                You don't need a polished question. Send what you've got — even half-formed — and we'll write you back.
              </p>
              <div style={{
                background: "var(--bg)",
                border: "1px solid var(--line-strong)",
                padding: 18,
                fontFamily: "var(--mono)",
                fontSize: 13,
                color: "var(--ink-3)",
                letterSpacing: "0.02em",
              }}>
                <div style={{ marginBottom: 14, color: "var(--ink-3)" }}>Your question or thought —</div>
                <div style={{
                  height: 80,
                  border: "1px dashed var(--line-strong)",
                  background: "var(--bg-2)",
                  marginBottom: 14,
                }}></div>
                <div style={{ marginBottom: 6 }}>Email —</div>
                <div style={{
                  height: 36,
                  border: "1px dashed var(--line-strong)",
                  background: "var(--bg-2)",
                  marginBottom: 16,
                }}></div>
                <div style={{
                  display: "inline-block",
                  background: "var(--ink)",
                  color: "var(--bg)",
                  padding: "10px 16px",
                  fontSize: 12,
                  fontWeight: 500,
                }}>
                  Send →
                </div>
                <div style={{ marginTop: 10, fontSize: 11, color: "var(--ink-4)" }}>
                  Form placeholder · wires to pastoral care inbox
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading list */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>
                <span className="dot"></span>Further reading
              </div>
              <h2 className="display-m" style={{ maxWidth: "14ch" }}>
                If you'd like to think about it more.
              </h2>
              <p className="body" style={{ marginTop: 20, fontSize: 16, lineHeight: 1.65, color: "var(--ink-3)", maxWidth: "40ch" }}>
                A couple of books we'd recommend if you'd like to do some reading on why Christianity makes sense.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
              {resources.map((r, i) => (
                <div key={i} style={{
                  background: "var(--bg-2)",
                  padding: "32px 32px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 28,
                  alignItems: "center",
                }}>
                  <div style={{
                    fontFamily: "var(--display)",
                    fontSize: 36,
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "var(--accent)",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="title" style={{ fontWeight: 500, fontSize: 22, marginBottom: 4 }}>
                      {r.title}
                    </div>
                    <div className="small" style={{ color: "var(--ink-3)", marginBottom: 8 }}>
                      by {r.author}
                    </div>
                    <p className="body" style={{ margin: 0, fontSize: 15, color: "var(--ink-2)", maxWidth: "52ch" }}>
                      {r.note}
                    </p>
                  </div>
                  <span className="row-arr" style={{ color: "var(--accent)" }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A prayer */}
      <section style={{ background: "var(--ink)", color: "var(--bg)", paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18, color: "rgba(255,255,255,0.6)" }}>
                <span className="dot"></span>If you are desiring faith
              </div>
              <h2 className="display-l" style={{ color: "var(--bg)", marginBottom: 24, maxWidth: "12ch" }}>
                A prayer you might pray.
              </h2>
              <p className="body" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "36ch", fontSize: 16, lineHeight: 1.65, margin: 0 }}>
                There is no formula or magic in these words — but if you find your heart pulled toward Jesus, this is one way to give it voice.
              </p>
            </div>

            <figure style={{
              margin: 0,
              padding: "44px 48px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.03)",
            }}>
              <blockquote style={{
                margin: 0,
                fontFamily: "var(--display)",
                fontSize: 22,
                lineHeight: 1.55,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--bg)",
                textWrap: "pretty",
              }}>
                Lord Jesus, I admit that I am weaker and more sinful than I ever dared admit, but through you I am more loved and accepted than I ever dared hope. I thank you for paying the debt on the cross, taking what I deserved in order to offer me complete forgiveness. Knowing that you have been raised from the dead, I wish to turn from my sins and receive you as my Savior and Lord.
              </blockquote>
              <div style={{
                marginTop: 28,
                fontFamily: "var(--display)",
                fontSize: 22,
                fontStyle: "italic",
                color: "var(--accent)",
                letterSpacing: "-0.01em",
              }}>
                Amen.
              </div>
            </figure>
          </div>

          <div style={{
            marginTop: 56,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.14)",
            display: "flex",
            gap: 32,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}>
            <p className="body" style={{ margin: 0, color: "rgba(255,255,255,0.78)", maxWidth: "48ch" }}>
              If you prayed something like this — or you'd just like to talk — we'd love to hear from you.
            </p>
            <button className="btn" style={{ background: "var(--accent)", color: "white" }}>
              Tell us <span className="arr">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: "var(--display)",
            fontSize: 32,
            lineHeight: 1.35,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            maxWidth: "22ch",
            margin: "0 auto",
            textWrap: "balance",
          }}>
            You don't have to have it figured out to start the conversation.
          </p>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { WhoIsJesusPage });
