// Sermons archive page — thin shell around a BranchCast embed slot.

function SermonsPage({ onNav }) {
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
            <span style={{ color: "var(--accent)" }}>Sermons</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot"></span>Sermons
          </div>
          <h1 className="display-xl" style={{ marginBottom: 32, maxWidth: "16ch" }}>
            Messages taught Sunday. Archived for the long haul.
          </h1>
          <p className="lede" style={{ maxWidth: "52ch" }}>
            Browse the full sermon archive — search by date, filter by speaker, series, or book of the Bible. Listen, download, or share.
          </p>
        </div>
      </section>

      {/* BranchCast embed slot */}
      <section>
        <div className="wrap">
          <div style={{
            border: "1px dashed var(--line-strong)",
            background: "var(--bg-2)",
            padding: "12px",
          }}>
            <div className="mono" style={{
              padding: "6px 10px",
              color: "var(--ink-3)",
              borderBottom: "1px dashed var(--line-strong)",
              marginBottom: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span>Embed slot · BranchCast widget</span>
              <span style={{ color: "var(--accent)" }}>powered by branchcast</span>
            </div>
            {/* Skeleton mock of the BranchCast archive widget */}
            <div style={{ background: "var(--bg)", padding: "32px 36px" }}>
              <div style={{
                fontFamily: "var(--display)",
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: 24,
              }}>
                North Wake Church Sermons
              </div>
              {/* Filters row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div style={{ height: 44, border: "1px solid var(--line-strong)", padding: "12px 14px" }} className="mono">Search by date</div>
                <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", alignItems: "center" }}>
                  <span className="mono" style={{ color: "var(--ink-3)" }}>Sort:</span>
                  <div style={{ height: 44, border: "1px solid var(--line-strong)", padding: "12px 14px", minWidth: 140 }} className="mono">Descending ▾</div>
                  <div style={{ height: 44, border: "1px solid var(--line-strong)", padding: "12px 14px", minWidth: 140 }} className="mono">Sort By ▾</div>
                </div>
              </div>
              <div style={{ height: 48, border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span className="mono" style={{ padding: "0 14px", color: "var(--ink-3)" }}>Search sermons</span>
                <span style={{
                  background: "var(--accent)",
                  color: "var(--bg)",
                  padding: "13px 18px",
                  fontSize: 14,
                }}>⌕</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 28 }}>
                {[
                  { l: "Speaker", v: "All Speakers" },
                  { l: "Series", v: "All Series" },
                  { l: "Book", v: "All Books" },
                ].map((f, i) => (
                  <div key={i}>
                    <div className="mono" style={{ color: "var(--ink-3)", marginBottom: 6, fontSize: 11 }}>{f.l.toUpperCase()}</div>
                    <div style={{ height: 44, border: "1px solid var(--line-strong)", padding: "12px 14px" }} className="mono">{f.v} ▾</div>
                  </div>
                ))}
              </div>

              {/* Sermon rows */}
              {[
                { title: "Romans 15:1–7", speaker: "Robert Darby", series: "Be Different: Romans", ref: "Romans 14:13–23", dur: "39:20" },
                { title: "Romans 14:1–12", speaker: "Carson Cobb", series: "Be Different: Romans", ref: "Romans 14:1–12", dur: "39:36" },
                { title: "Romans 13:8–14", speaker: "Carson Cobb", series: "Be Different: Romans", ref: "Romans 13:8–14", dur: "41:12" },
                { title: "Romans 13:1–7", speaker: "Robert Darby", series: "Be Different: Romans", ref: "Romans 13:1–7", dur: "37:48" },
              ].map((s, i) => (
                <div key={i} style={{
                  borderTop: "1px solid var(--line)",
                  padding: "20px 0",
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: 18,
                  alignItems: "center",
                }}>
                  <div style={{
                    width: 60, height: 60,
                    background: "var(--ink)",
                    color: "var(--bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    lineHeight: 1.2,
                    fontFamily: "var(--display)",
                    fontWeight: 600,
                  }}>
                    ROMANS<br/>BE DIFFERENT
                  </div>
                  <div>
                    <div className="title" style={{ fontWeight: 500, marginBottom: 4 }}>{s.title}</div>
                    <div className="mono" style={{ color: "var(--accent)" }}>
                      {s.speaker} · {s.series} · {s.ref}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 12 }}>
                      <button style={{
                        width: 36, height: 36,
                        border: "1px solid var(--line-strong)",
                        background: "var(--bg)",
                        cursor: "pointer",
                      }}>▶</button>
                      <span className="mono" style={{ color: "var(--ink-3)", fontSize: 11 }}>0:00</span>
                      <div style={{ flex: 1, height: 4, background: "var(--line)", position: "relative" }}>
                        <div style={{ position: "absolute", left: 0, top: -3, width: 10, height: 10, borderRadius: 999, background: "var(--accent)" }}></div>
                      </div>
                      <span className="mono" style={{ color: "var(--ink-3)", fontSize: 11 }}>{s.dur}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mono" style={{
              padding: "10px 12px",
              color: "var(--ink-3)",
              borderTop: "1px dashed var(--line-strong)",
              marginTop: 12,
            }}>
              ↑ Mockup of the BranchCast widget. In production, replace this slot with the BranchCast embed code (iframe or script widget).
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe / Apple / Spotify */}
      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Subscribe</div>
              <h2 className="display-m" style={{ maxWidth: "12ch" }}>
                Take it with you.
              </h2>
            </div>
            <div>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 28, maxWidth: "54ch" }}>
                The Sunday sermon ships every week as a podcast. Subscribe wherever you listen.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-ghost">Apple Podcasts <span className="arr">→</span></button>
                <button className="btn btn-ghost">Spotify <span className="arr">→</span></button>
                <button className="btn btn-ghost">RSS feed <span className="arr">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { SermonsPage });
