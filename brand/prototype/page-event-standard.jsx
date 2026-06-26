// Standard event template — single-day event with title/subtitle, simple body, facts box, register link.
// Currently populated with: Women's Day — Women Encouraging Women.

function StandardEventPage({ onNav }) {
  // In production this data would come from a CMS / route param.
  const event = {
    eyebrow: "Women's Ministry · One-day event",
    title: "Women's Day",
    subtitle: "Women Encouraging Women",
    body: [
      "Join us for a full day of workshops (taught by North Wake ladies), delicious food & fellowship.",
      "More details to come!",
    ],
    dateLong: "Saturday, October 24, 2026",
    dateShort: { d: "Oct", n: "24" },
    time: "8:30 AM – 3:30 PM",
    place: "North Wake Church",
    placeAddress: "1212 S Main St · Wake Forest, NC",
    cost: "Free",
    registerHref: "#",
    contactEmail: "women@northwake.com",
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

      {/* Hero with facts box */}
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

              {/* Title + subtitle pair */}
              <h1 className="display-l" style={{ marginBottom: 16, maxWidth: "14ch" }}>
                {event.title}
              </h1>
              <p style={{
                margin: 0,
                fontFamily: "var(--display)",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: 28,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "var(--accent)",
                marginBottom: 36,
              }}>
                {event.subtitle}
              </p>

              {/* Body */}
              <div style={{ maxWidth: "52ch", marginBottom: 36 }}>
                {event.body.map((p, i) => (
                  <p key={i} className="body" style={{ fontSize: 18, lineHeight: 1.65, marginBottom: 16, color: "var(--ink-2)" }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={event.registerHref} className="btn btn-primary" style={{ textDecoration: "none" }}>
                  Register <span className="arr">→</span>
                </a>
                <a href={`mailto:${event.contactEmail}`} className="btn btn-ghost" style={{ textDecoration: "none" }}>
                  Ask a question
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
              {/* Big date stamp */}
              <div style={{
                paddingBottom: 24,
                marginBottom: 24,
                borderBottom: "1px solid var(--line)",
                display: "flex",
                alignItems: "baseline",
                gap: 16,
              }}>
                <div className="mono" style={{ color: "var(--accent)" }}>{event.dateShort.d}</div>
                <div style={{
                  fontFamily: "var(--display)",
                  fontWeight: 500,
                  fontSize: 64,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                }}>
                  {event.dateShort.n}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "18px 24px", alignItems: "baseline" }}>
                <div className="small" style={{ color: "var(--ink-3)" }}>Date</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 19 }}>{event.dateLong}</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Time</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 19 }}>{event.time}</div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Place</div>
                <div>
                  <div className="title" style={{ fontWeight: 500, fontSize: 19 }}>{event.place}</div>
                  <div className="small" style={{ color: "var(--ink-3)", marginTop: 4 }}>{event.placeAddress}</div>
                </div>

                <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line)" }}></div>

                <div className="small" style={{ color: "var(--ink-3)" }}>Cost</div>
                <div className="title" style={{ fontWeight: 500, fontSize: 19 }}>{event.cost}</div>
              </div>

              {/* Register button */}
              <div style={{ marginTop: 28 }}>
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
                  <span>Register for {event.title}</span>
                  <span>→</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to events */}
      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <button className="btn btn-ghost" onClick={() => onNav("home")}>
            ← Browse all events
          </button>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { StandardEventPage });
