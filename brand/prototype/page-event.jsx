// Event detail page — reusable template for any event
// Currently populated with: Ministry Intensive Internship (2026-2027)

function EventPage({ onNav }) {
  // In production this data would come from a CMS / route param.
  const event = {
    eyebrow: "Internship · 10 months · 2026–2027",
    title: "Ministry Intensive Internship",
    subtitle: "A 10-month program for those seeking greater service to the body of Christ.",
    date: "May 31",
    dateLong: "Saturday, May 31, 2026",
    time: "8:00 AM – 11:30 PM",
    timeNote: "Kickoff & orientation",
    place: "North Wake Church",
    placeAddress: "1212 S Main St · Wake Forest, NC 27587",
    duration: "10 months",
    durationNote: "May 2026 – March 2027",
    cost: "Free",
    costNote: "SEBTS credit available",
    deadline: "Applications close April 30, 2026",
    contactName: "Noah",
    contactEmail: "noahj@northwake.com",
    seminaryNote: "This can be done for credit for seminary students at SEBTS — 2 semesters of credit available for participating in the internship.",
    registerHref: "#",
    bodyParagraphs: [
      "The Ministry Intensive at North Wake is a 10-month internship designed to further equip those who are interested in greater service to the Body of Christ in many different areas. Interns will be paired with a staff member in order to be mentored in certain aspects of ministry based on their desired focus and availability.",
      "There is also a group component that allows the interns to meet and discuss readings that focus on growing in ministry to others. The miscellaneous readings, assignments, and projects given work together to provide a holistic experience for our interns as they seek to grow in their service to the body.",
      "If you are in the process of being sent out by North Wake or hope to be ordained by North Wake in your pursuit of pastoral ministry, the ministry intensive is an essential step in each of those processes.",
    ],
    whoFor: [
      "Anyone seeking greater service to the body of Christ",
      "Those being sent out by North Wake",
      "Those pursuing ordination at North Wake",
      "SEBTS students wanting seminary credit",
    ],
    whatsIncluded: [
      "1-on-1 mentorship with a staff member",
      "Group discussion sessions on ministry readings",
      "Curated readings, assignments & projects",
      "A focus area shaped to your gifts & availability",
    ],
  };

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="mono" style={{ color: "var(--ink-3)" }}>
            <span style={{ cursor: "default" }} onClick={() => onNav("home")}>Home</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span>Resources</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span>Events</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>{event.title}</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              {/* Image placeholder — left column */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 3",
                background: "var(--bg-2)",
                border: "1px solid var(--line-strong)",
                backgroundImage: "repeating-linear-gradient(135deg, transparent 0, transparent 18px, var(--line) 18px, var(--line) 19px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 36,
              }}>
                <div style={{
                  background: "var(--bg)",
                  border: "1px solid var(--line-strong)",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <div style={{ width: 16, height: 16, border: "1.5px solid var(--accent)", display: "grid", placeItems: "center" }}>
                    <div style={{ width: 4, height: 4, background: "var(--accent)", borderRadius: "50%" }}></div>
                  </div>
                  <div className="mono" style={{ color: "var(--ink-2)" }}>Event image · placeholder</div>
                </div>
              </div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>{event.eyebrow}
              </div>
              <h1 className="display-l" style={{ maxWidth: "16ch", marginBottom: 28 }}>
                {event.title}
              </h1>
              <p className="lede" style={{ marginBottom: 36 }}>
                {event.subtitle}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={event.registerHref} className="btn btn-primary" style={{ textDecoration: "none" }}>
                  Apply now <span className="arr">→</span>
                </a>
                <a href={`mailto:${event.contactEmail}`} className="btn btn-ghost" style={{ textDecoration: "none" }}>
                  Email {event.contactName}
                </a>
              </div>
            </div>

            {/* Facts box */}
            <aside style={{
              border: "1px solid var(--line-strong)",
              background: "var(--bg)",
              padding: "32px 32px 28px",
              position: "sticky",
              top: 24,
            }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 22 }}>Event details</div>

              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "18px 24px", alignItems: "baseline" }}>
                <div className="small" style={{ color: "var(--ink-3)" }}>Date</div>
                <div>
                  <div className="title" style={{ fontWeight: 500, fontSize: 20 }}>{event.dateLong}</div>
                </div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Time</div>
                <div>
                  <div className="title" style={{ fontWeight: 500, fontSize: 20 }}>{event.time}</div>
                  {event.timeNote && (
                    <div className="small" style={{ color: "var(--ink-3)", marginTop: 4 }}>{event.timeNote}</div>
                  )}
                </div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Place</div>
                <div>
                  <div className="title" style={{ fontWeight: 500, fontSize: 20 }}>{event.place}</div>
                  <div className="small" style={{ color: "var(--ink-3)", marginTop: 4 }}>{event.placeAddress}</div>
                </div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Length</div>
                <div>
                  <div className="title" style={{ fontWeight: 500, fontSize: 20 }}>{event.duration}</div>
                  {event.durationNote && (
                    <div className="small" style={{ color: "var(--ink-3)", marginTop: 4 }}>{event.durationNote}</div>
                  )}
                </div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Cost</div>
                <div>
                  <div className="title" style={{ fontWeight: 500, fontSize: 20 }}>{event.cost}</div>
                  {event.costNote && (
                    <div className="small" style={{ color: "var(--ink-3)", marginTop: 4 }}>{event.costNote}</div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                <a
                  href={event.registerHref}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "var(--ink)",
                    color: "var(--bg)",
                    padding: "14px 20px",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    letterSpacing: "-0.005em",
                  }}
                >
                  <span>Apply now</span>
                  <span>→</span>
                </a>
                <div className="small" style={{ marginTop: 14, color: "var(--ink-3)", textAlign: "center" }}>
                  {event.deadline}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Seminary credit callout */}
      {event.seminaryNote && (
        <section>
          <div className="wrap">
            <div style={{
              maxWidth: 880,
              borderLeft: "3px solid var(--accent)",
              paddingLeft: 28,
              fontFamily: "var(--display)",
              fontSize: 22,
              lineHeight: 1.4,
              fontWeight: 500,
              letterSpacing: "-0.015em",
              color: "var(--ink)",
              textWrap: "balance",
            }}>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 10, fontFamily: "var(--mono)", fontSize: 11, fontWeight: 400, letterSpacing: "0.06em" }}>
                * Note for seminary students
              </div>
              {event.seminaryNote}
            </div>
          </div>
        </section>
      )}

      {/* Body content */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>About the program</div>
              <h2 className="display-m" style={{ marginBottom: 32, maxWidth: "16ch" }}>
                A holistic experience for ministry growth.
              </h2>
              {event.bodyParagraphs.map((p, i) => (
                <p key={i} className="body" style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 20 }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Side panels: who for, what's included */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ background: "var(--bg)", padding: "28px 28px 24px", border: "1px solid var(--line-strong)" }}>
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 16 }}>Who it's for</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {event.whoFor.map((line, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "baseline", fontSize: 16, lineHeight: 1.45, color: "var(--ink-2)" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", transform: "translateY(-2px)" }}></span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "var(--bg)", padding: "28px 28px 24px", border: "1px solid var(--line-strong)" }}>
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 16 }}>What's included</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {event.whatsIncluded.map((line, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "baseline", fontSize: 16, lineHeight: 1.45, color: "var(--ink-2)" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", transform: "translateY(-2px)" }}></span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            border: "1px solid var(--line-strong)",
          }}>
            <div style={{ padding: "56px 48px", borderRight: "1px solid var(--line-strong)" }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot"></span>Ready to apply?</div>
              <h2 className="display-m" style={{ marginBottom: 20, maxWidth: "14ch" }}>
                Take the next step.
              </h2>
              <p className="body" style={{ marginBottom: 28, color: "var(--ink-2)", maxWidth: "44ch" }}>
                Applications take about 15 minutes. Once submitted, Noah will reach out to schedule a conversation and walk you through the next steps.
              </p>
              <a href={event.registerHref} className="btn btn-primary" style={{ textDecoration: "none" }}>
                Apply now <span className="arr">→</span>
              </a>
              <div className="small" style={{ marginTop: 20, color: "var(--ink-3)" }}>
                {event.deadline}
              </div>
            </div>

            <div style={{ padding: "56px 48px", background: "var(--bg-2)" }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot"></span>Have questions?</div>
              <h2 className="display-m" style={{ marginBottom: 20, maxWidth: "14ch" }}>
                Talk to {event.contactName}.
              </h2>
              <p className="body" style={{ marginBottom: 28, color: "var(--ink-2)", maxWidth: "44ch" }}>
                Want more information before applying? {event.contactName} would love to answer your questions and help you discern whether this is the right fit.
              </p>
              <a
                href={`mailto:${event.contactEmail}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 14,
                  padding: "12px 16px",
                  border: "1px solid var(--line-strong)",
                  background: "var(--bg)",
                  fontSize: 15,
                  textDecoration: "none",
                  color: "var(--ink)",
                  minWidth: 280,
                }}
              >
                <span>{event.contactEmail}</span>
                <span style={{ color: "var(--accent)" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to events */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <button className="btn btn-ghost" onClick={() => onNav("home")}>
            ← Browse all events
          </button>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { EventPage });
