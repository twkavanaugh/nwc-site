// Home page — modern editorial, sans-only, neutral + clay accent.
// Priorities: Plan a Visit, Find Community.

function HeroEditorial({ onNav }) {
  return (
    <section style={{ paddingTop: 72, paddingBottom: 0, position: "relative" }}>
      <div className="wrap">
        <div className="eyebrow fade-up" style={{ marginBottom: 36 }}>
          <span className="dot"></span>A family of faith · Wake Forest, NC
        </div>
        <h1 className="display-xl fade-up" style={{ animationDelay: "60ms", maxWidth: "16ch" }}>
          Know.<br />
          Grow.<br />
          <span style={{ color: "var(--accent)" }}>Go</span> in love.
        </h1>
        <div
          className="fade-up"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 80,
            alignItems: "end",
            animationDelay: "140ms",
          }}
        >
          <p className="lede" style={{ margin: 0 }}>
            North Wake Church is a community shaped by the gospel — gathering each Sunday to worship Jesus, scattering through the week to love our neighbors near and far. Whether you're a long-time follower or just starting to ask questions, there's a seat at the table for you.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => onNav("visit")}>
              Plan a visit <span className="arr">→</span>
            </button>
            <button className="btn btn-ghost">Watch Sunday's sermon</button>
          </div>
        </div>
        {/* Wide image band beneath the type */}
        <div
          className="fade-up"
          style={{
            marginTop: 64,
            aspectRatio: "21 / 8",
            width: "100%",
            backgroundImage: "url('assets/home-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            backgroundColor: "var(--bg-2)",
            animationDelay: "220ms",
          }}
          aria-label="People gathered at North Wake Church"
        ></div>
      </div>
    </section>
  );
}

function HeroOverlay({ onNav }) {
  return (
    <section style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div style={{ position: "relative", width: "100%", minHeight: "78vh", display: "flex" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('assets/home-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "var(--bg-2)",
        }} aria-label="People gathered at North Wake Church"></div>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.75) 100%)",
        }}></div>
        <div className="wrap" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingTop: 96, paddingBottom: 72, width: "100%" }}>
          <div className="eyebrow fade-up" style={{ color: "rgba(255,255,255,0.78)", marginBottom: 28 }}>
            <span className="dot" style={{ background: "var(--accent)" }}></span>A family of faith · Wake Forest, NC
          </div>
          <h1 className="display-xl fade-up" style={{ color: "white", maxWidth: "16ch", animationDelay: "60ms" }}>
            Know. Grow. <span style={{ color: "var(--accent)" }}>Go</span> in love.
          </h1>
          <div className="fade-up" style={{ marginTop: 36, display: "flex", gap: 40, alignItems: "flex-end", flexWrap: "wrap", animationDelay: "140ms" }}>
            <p className="lede" style={{ margin: 0, color: "rgba(255,255,255,0.88)", maxWidth: "46ch" }}>
              Gathering each Sunday to worship Jesus, scattering through the week to love our neighbors near and far. There's a seat at the table for you.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={() => onNav("visit")}>
                Plan a visit <span className="arr">→</span>
              </button>
              <button className="btn" style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.4)", backdropFilter: "blur(8px)" }}>
                Watch Sunday's sermon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMinimal({ onNav }) {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 96, position: "relative" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="eyebrow fade-up" style={{ marginBottom: 40, display: "flex", justifyContent: "center" }}>
          <span className="dot"></span>A family of faith · Wake Forest, NC
        </div>
        <h1 className="display-xl fade-up" style={{ animationDelay: "60ms", maxWidth: "18ch", margin: "0 auto" }}>
          Know. Grow. <span style={{ color: "var(--accent)" }}>Go</span> in love.
        </h1>
        <p className="lede fade-up" style={{ margin: "36px auto 0", maxWidth: "52ch", animationDelay: "140ms" }}>
          North Wake Church is a community shaped by the gospel. Whether you're a long-time follower or just starting to ask questions, there's a seat at the table for you.
        </p>
        <div className="fade-up" style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40, flexWrap: "wrap", animationDelay: "200ms" }}>
          <button className="btn btn-primary" onClick={() => onNav("visit")}>
            Plan a visit <span className="arr">→</span>
          </button>
          <button className="btn btn-ghost">Watch Sunday's sermon</button>
        </div>
      </div>
    </section>
  );
}

function HeroSplit({ onNav }) {
  return (
    <section style={{ paddingTop: 56, paddingBottom: 0 }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 32 }}>
              <span className="dot"></span>Welcome home
            </div>
            <h1 className="display-l" style={{ maxWidth: "14ch" }}>
              Welcome to <span style={{ color: "var(--accent)" }}>North Wake Church.</span>
            </h1>
            <p className="lede" style={{ marginTop: 32 }}>
              Whoever you are — questioning, returning, faithful, weary — there's a seat at the table. North Wake is a family of faith in Wake Forest, learning to follow Jesus together.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <button className="btn btn-primary" onClick={() => onNav("visit")}>Plan a visit <span className="arr">→</span></button>
              <button className="btn btn-ghost">What we believe</button>
            </div>
          </div>
          <div style={{
            aspectRatio: "4 / 5",
            width: "100%",
            backgroundImage: "url('assets/home-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "var(--bg-2)",
          }} aria-label="People gathered at North Wake Church"></div>
        </div>
      </div>
    </section>
  );
}

function ServiceTimes({ onNav }) {
  return (
    <section className="tight" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            gap: 56,
            paddingTop: 32,
            paddingBottom: 32,
            borderTop: "1px solid var(--line-strong)",
            borderBottom: "1px solid var(--line-strong)",
          }}
        >
          <div>
            <div className="mono" style={{ marginBottom: 6 }}>Sundays</div>
            <div className="display-s" style={{ fontWeight: 500 }}>9:00 <span style={{ color: "var(--ink-3)" }}>·</span> 11:00 AM</div>
          </div>
          <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 56 }}>
            <div className="mono" style={{ marginBottom: 6 }}>Location</div>
            <div className="title" style={{ fontWeight: 500 }}>1212 S Main St · Wake Forest, NC</div>
            <div className="small" style={{ marginTop: 4 }}>Free parking · Kids check-in opens 30 min before service</div>
          </div>
          <button className="btn btn-ghost">
            Get directions <span className="arr">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function MissionTriad() {
  const items = [
    {
      verb: "Know",
      headline: "the love of God in Jesus Christ.",
      body: "We orient every Sunday and every week around the gospel — that God meets us in Jesus, and that meeting changes everything.",
      ph: "Worship · candid",
    },
    {
      verb: "Grow",
      headline: "in love for one another.",
      body: "We don't grow in isolation. In Grow Groups, classes, and shared meals, we open Scripture, pray honestly, and bear each other's burdens.",
      ph: "Grow Group · home",
    },
    {
      verb: "Go",
      headline: "in love to reach our neighbors near and far.",
      body: "From Wake Forest to the nations, we send and serve — through local outreach, mercy ministry, and global missions.",
      ph: "Local outreach · serving",
    },
  ];
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot"></span>Why we exist
            </div>
            <h2 className="display-m" style={{ maxWidth: "14ch" }}>Three words shape everything we do.</h2>
          </div>
          <p className="body right" style={{ margin: 0 }}>
            Our mission isn't a slogan — it's the orbit our church moves in. Sunday gathering, weekday community, sent into Wake Forest and beyond.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {items.map((it, i) => (
            <article key={i} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Placeholder label={it.ph} ratio="4/5" />
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span className="mono" style={{ color: "var(--accent)" }}>0{i + 1}</span>
                <span className="display-s" style={{ color: "var(--accent)", fontWeight: 600 }}>{it.verb}</span>
              </div>
              <h3 className="title" style={{ maxWidth: "20ch", fontWeight: 500 }}>{it.headline}</h3>
              <p className="body" style={{ margin: 0, maxWidth: "34ch" }}>{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FindCommunity({ onNav }) {
  const groups = [
    { name: "Grow Groups", meta: "12 active groups · weekly", body: "Mid-sized groups meeting in homes across Wake Forest. Share a meal, open Scripture, pray honestly, repeat.", page: "groups" },
    { name: "Adult Discipleship", meta: "8-week classes · Sundays 9 AM", body: "Theology and life classes for every season — from foundations of the faith to parenting, marriage, and money." },
    { name: "Students", meta: "6th–12th · Wednesdays 6:30 PM", body: "A ministry for students and families to follow Jesus together — rooted in Colossians 1: presenting everyone mature in Christ.", page: "students" },
    { name: "Kids", meta: "Birth–5th · Sunday mornings", body: "A safe, joyful place where kids hear that Jesus loves them and learn to love him back. Check-in 30 min before service." },
    { name: "Women", meta: "Bible studies · retreats", body: "Studies in the Word, friendships across generations, and gatherings that point women to the steadfast love of Christ." },
    { name: "Men", meta: "Breakfast · book studies", body: "Men sharpening men — meeting over coffee and Scripture to grow into faithful husbands, fathers, and friends." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot"></span>Find community
            </div>
            <h2 className="display-m" style={{ maxWidth: "16ch" }}>North Wake is a people, not a building.</h2>
          </div>
          <p className="body right" style={{ margin: 0 }}>
            Sunday is a doorway, but life happens around the table. Find your people — a Grow Group, a class, a ministry that fits the season you're in.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
          {groups.map((g, i) => {
            const clickable = !!g.page;
            return (
            <div
              key={i}
              onClick={() => { if (clickable) onNav(g.page); }}
              style={{
                background: "var(--bg-2)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                cursor: clickable ? "default" : "default",
                transition: "background 200ms ease",
                minHeight: 240,
                opacity: clickable ? 1 : 0.7,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
            >
              <div className="mono">{g.meta}</div>
              <h3 className="display-s" style={{ fontWeight: 500 }}>{g.name}</h3>
              <p className="body" style={{ margin: 0, color: "var(--ink-3)" }}>{g.body}</p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16 }}>
                <span className="small" style={{ color: clickable ? "var(--accent)" : "var(--ink-4)", fontWeight: 500 }}>
                  {clickable ? "Learn more" : "Coming soon"}
                </span>
                <span className="row-arr" style={{ color: clickable ? "var(--accent)" : "var(--ink-4)" }}>→</span>
              </div>
            </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <button className="btn btn-ghost" onClick={() => onNav("groups")}>
            See all ministries <span className="arr">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function PlanVisitTeaser({ onNav }) {
  const points = [
    { k: "01", h: "Come as you are", b: "Jeans, a suit, somewhere in between — we don't dress to impress, we come to worship." },
    { k: "02", h: "Find a friendly face", b: "Grab a coffee at the Welcome Wall. Our team is there to help you find your seat (and your people)." },
    { k: "03", h: "Worship together", b: "Songs, prayer, and a sermon that takes the Bible seriously and your questions seriously, too." },
    { k: "04", h: "Kids are well cared for", b: "Safe, joyful, gospel-centered programming for birth through 5th grade in both services." },
  ];
  return (
    <section>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 100 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot"></span>Plan a visit
            </div>
            <h2 className="display-m" style={{ maxWidth: "12ch" }}>What to expect on Sunday.</h2>
            <p className="lede" style={{ marginTop: 28 }}>
              Walking into a new church can feel like a lot. Here's exactly what your first Sunday at North Wake will look like — no surprises.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <button className="btn btn-primary" onClick={() => onNav("visit")}>I'm new — start here <span className="arr">→</span></button>
            </div>
            <div style={{ marginTop: 56 }}>
              <Placeholder label="Welcome Walk-Up Candid" ratio="1/1" />
            </div>
          </div>
          <div>
            {points.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 28,
                  padding: "32px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <span className="mono" style={{ color: "var(--accent)", paddingTop: 4 }}>{p.k}</span>
                <div>
                  <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 12 }}>{p.h}</h3>
                  <p className="body" style={{ margin: 0, maxWidth: "44ch" }}>{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LatestSermon({ onNav }) {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot"></span>Now preaching
            </div>
            <h2 className="display-m" style={{ maxWidth: "16ch" }}>
              Sundays preached, weekly archived.
            </h2>
          </div>
          <p className="body right" style={{ margin: 0, color: "var(--ink-3)" }}>
            We're walking through a sermon series each season. Listen along, or browse the full archive by speaker, series, or book.
          </p>
        </div>

        <div
          onClick={() => onNav("sermons")}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 0,
            border: "1px solid var(--line-strong)",
            cursor: "default",
            transition: "border-color 200ms ease, background 200ms ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-2)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
        >
          <div style={{
            aspectRatio: "1 / 1",
            background: "var(--bg-2)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid var(--line-strong)",
          }}>
            <div className="mono" style={{ position: "absolute", top: 18, left: 18, color: "var(--ink-3)" }}>Series artwork</div>
            <div style={{
              fontFamily: "var(--display)",
              fontSize: 56,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              color: "var(--ink)",
              lineHeight: 0.95,
              textAlign: "center",
            }}>
              Be<br/>Different
            </div>
            <div className="mono" style={{ position: "absolute", bottom: 18, left: 18, color: "var(--accent)" }}>Romans</div>
          </div>

          <div style={{ padding: "44px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="mono" style={{ color: "var(--ink-3)" }}>
              Current series · Spring 2026
            </div>
            <h3 className="display-m" style={{ maxWidth: "16ch", margin: 0 }}>
              Be Different — a journey through Romans.
            </h3>
            <p className="body" style={{ margin: 0, fontSize: 17, color: "var(--ink-2)", maxWidth: "52ch", lineHeight: 1.65 }}>
              Paul's letter to the Romans, preached week by week — the gospel that re-orders everything: how we relate to God, to one another, and to a watching world.
            </p>
            <div style={{
              marginTop: 20,
              paddingTop: 24,
              borderTop: "1px solid var(--line)",
              display: "flex",
              gap: 16,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span className="mono" style={{ color: "var(--accent)" }}>
                Listen to the latest message →
              </span>
              <button className="btn btn-ghost" onClick={(e) => { e.stopPropagation(); onNav("sermons"); }}>
                Sermon archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Care({ onNav }) {
  const cards = [
    { name: "Hope Counseling Center", tag: "Counseling", body: "Christ-centered, Scripture-driven biblical counseling for the church and the community.", page: "hope" },
    { name: "Mercy Health Clinic", tag: "Health", body: "Free and low-cost medical care offered as a tangible expression of God's love." },
    { name: "Feed Ministry", tag: "Food pantry", body: "More than groceries — meaningful conversations, prayer, and witness alongside material help.", page: "feed" },
    { name: "Care Ministry", tag: "Care", body: "Meals, visits, and presence for members walking through illness, grief, and hard seasons." },
  ];
  return (
    <section style={{ background: "var(--ink)", color: "var(--bg)" }}>
      <div className="wrap">
        <div className="section-head" style={{ color: "var(--bg)" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18, color: "rgba(255,255,255,0.6)" }}>
              <span className="dot"></span>Find help
            </div>
            <h2 className="display-m" style={{ maxWidth: "16ch", color: "var(--bg)" }}>
              When life is hard, you don't walk alone.
            </h2>
          </div>
          <p className="body right" style={{ margin: 0, color: "rgba(255,255,255,0.72)" }}>
            North Wake operates four ministries that exist to serve the wounded, the hungry, and the worn-out — members and neighbors alike.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {cards.map((c, i) => (
            <div
              key={i}
              onClick={c.page ? () => onNav(c.page) : undefined}
              style={{
                padding: "32px 28px 28px",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 280,
                background: "rgba(255,255,255,0.02)",
                transition: "background 200ms ease, border-color 200ms ease",
                cursor: c.page ? "pointer" : "default",
              }}
              onMouseEnter={(e) => {
                if (!c.page) return;
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              }}
              onMouseLeave={(e) => {
                if (!c.page) return;
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
              }}
            >
              <span className="mono" style={{ color: "var(--accent)" }}>{c.tag}</span>
              <h3 className="title" style={{ marginTop: 4, fontWeight: 500 }}>{c.name}</h3>
              <p className="small" style={{ margin: 0, color: "rgba(255,255,255,0.7)", lineHeight: 1.55 }}>{c.body}</p>
              <div style={{ marginTop: "auto", paddingTop: 20, color: c.page ? "var(--accent)" : "rgba(255,255,255,0.35)", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>{c.page ? "Learn more" : "Coming soon"}</span>
                {c.page && <span>→</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsAndJesus({ onNav }) {
  const events = [
    { d: "May", n: "31", title: "Ministry Intensive Internship · 2026–27", time: "Applications open · Info session", page: "event" },
    { d: "May", n: "03", title: "Membership Class · Spring Cohort", time: "Sundays · 9:00 AM", page: "membership" },
    { d: "Oct", n: "24", title: "Women's Day · Women Encouraging Women", time: "8:30 AM – 3:30 PM", page: "event-standard" },
    { d: "Jun", n: "01", title: "Baptism Sunday", time: "Both services" },
  ];
  return (
    <section>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot"></span>What's next
            </div>
            <h2 className="display-m" style={{ marginBottom: 40 }}>Upcoming.</h2>
            <div>
              {events.map((e, i) => {
                const clickable = !!e.page;
                return (
                <div
                  key={i}
                  className="row-link"
                  onClick={() => { if (clickable) onNav(e.page); }}
                  style={{ opacity: clickable ? 1 : 0.7 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
                    <div style={{ width: 64 }}>
                      <div className="mono" style={{ color: clickable ? "var(--accent)" : "var(--ink-3)" }}>{e.d}</div>
                      <div className="display-s" style={{ fontWeight: 500, lineHeight: 1 }}>{e.n}</div>
                    </div>
                    <div>
                      <div className="title" style={{ fontWeight: 500, marginBottom: 4 }}>{e.title}</div>
                      <div className="small">{e.time}</div>
                    </div>
                  </div>
                  <span className="row-arr" style={{ color: clickable ? "var(--accent)" : "var(--ink-4)" }}>→</span>
                </div>
                );
              })}
            </div>
            <div style={{ marginTop: 32 }}>
              <button className="btn btn-ghost">Full calendar <span className="arr">→</span></button>
            </div>
          </div>
          <aside
            style={{
              background: "var(--accent)",
              color: "white",
              padding: "56px 48px",
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.7)", marginBottom: 18 }}>
              <span className="dot" style={{ background: "white" }}></span>For the seeker
            </div>
            <h3 className="display-m" style={{ color: "white", maxWidth: "10ch", marginBottom: 24 }}>Who is Jesus?</h3>
            <p className="body" style={{ color: "rgba(255,255,255,0.86)", margin: 0, marginBottom: 28 }}>
              Maybe you're not a Christian. Maybe you used to be. Maybe you've never thought about it seriously. This is a page written for honest questions — no jargon, no pressure.
            </p>
            <div style={{ marginTop: "auto" }}>
              <button
                className="btn"
                style={{ background: "white", color: "var(--accent)" }}
              >
                Read it <span className="arr">→</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNav, hero }) {
  const Hero = hero === "overlay" ? HeroOverlay
    : hero === "split" ? HeroSplit
    : hero === "minimal" ? HeroMinimal
    : HeroEditorial;
  return (
    <>
      <Hero onNav={onNav} />
      <Marquee words={["Sundays 9 & 11 AM", "Wake Forest, NC", "Kids welcome", "Coffee on us", "Come as you are"]} />
      <ServiceTimes onNav={onNav} />
      <MissionTriad />
      <PlanVisitTeaser onNav={onNav} />
      <FindCommunity onNav={onNav} />
      <LatestSermon onNav={onNav} />
      <Care onNav={onNav} />
      <EventsAndJesus onNav={onNav} />
    </>
  );
}

Object.assign(window, { HomePage });
