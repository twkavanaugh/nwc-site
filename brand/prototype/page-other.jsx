// Come Visit, Our Beliefs, Grow Groups pages.

function VisitPage({ onNav }) {
  const expect = [
    { k: "Arrive", b: "Pull into our main lot off S Main St — greeters in orange vests will wave you in. Plenty of free parking, with reserved spots up front for first-time guests." },
    { k: "Welcome", b: "Stop by the Welcome Wall in the lobby. Grab a coffee, get a campus map, and meet someone who can answer questions or walk you to Kids check-in." },
    { k: "Worship", b: "Service runs about 75 minutes — songs (modern and traditional), Scripture reading, prayer, and a sermon. Communion is offered the first Sunday of each month." },
    { k: "Stay", b: "We host a 'Next Step' lunch after the 11 AM service on the second Sunday of every month. It's the easiest way to ask the staff anything you want." },
  ];
  const faqs = [
    { q: "What should I wear?", a: "Whatever you'd wear to dinner with friends. Most people land somewhere between jeans-and-a-shirt and business casual." },
    { q: "Will I be singled out?", a: "Nope. We don't ask first-time guests to stand up, raise hands, or wear anything that marks them out." },
    { q: "What about my kids?", a: "We have safe, joyful programming for birth through 5th grade in both services. Check-in opens 30 minutes early — we'll walk you there." },
    { q: "How long is the service?", a: "About 75 minutes, including a sermon of around 35 minutes." },
    { q: "Is there parking?", a: "Yes — free, with reserved guest spots near the main entrance." },
    { q: "Can I just watch online first?", a: "Absolutely. Every Sunday is livestreamed and archived — link below." },
  ];

  return (
    <>
      <section style={{ paddingTop: 72, paddingBottom: 56 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 36 }}>
            <span className="dot"></span>Come visit
          </div>
          <h1 className="display-l" style={{ maxWidth: "16ch" }}>
            Your first Sunday, <span style={{ color: "var(--accent)" }}>start to finish.</span>
          </h1>
          <p className="lede" style={{ marginTop: 32, maxWidth: "60ch" }}>
            Walking into a new church can feel like a lot. We get it. Here's exactly what to expect — from the parking lot to the closing prayer — so you can show up ready to just be present.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 16, paddingBottom: 80 }}>
        <div className="wrap">
          <Placeholder label="Building exterior · Sunday morning" ratio="21/9" />
        </div>
      </section>

      <section style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--line-strong)" }}>
            {[
              { l: "Service times", v: "9:00 & 11:00 AM" },
              { l: "Address", v: "1212 S Main St · Wake Forest, NC" },
              { l: "Length", v: "~75 minutes" },
              { l: "Kids", v: "Birth – 5th grade" },
            ].map((x, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRight: i < 3 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line-strong)" }}>
                <div className="mono" style={{ marginBottom: 8 }}>{x.l}</div>
                <div className="title" style={{ fontWeight: 500 }}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>What to expect</div>
              <h2 className="display-m" style={{ maxWidth: "14ch" }}>The flow of a Sunday.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Same rhythm every week, no surprises. Whether it's your first time or your hundredth, here's what your morning looks like.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {expect.map((x, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Placeholder label={`${x.k} · candid`} ratio="4/5" />
                <span className="mono" style={{ color: "var(--accent)" }}>0{i + 1} · {x.k}</span>
                <p className="body" style={{ margin: 0 }}>{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Common questions</div>
              <h2 className="display-m">FAQ.</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
            {faqs.map((f, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid var(--line)",
                  padding: "26px 0",
                }}
              >
                <summary
                  style={{
                    cursor: "default",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--display)",
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: "-0.012em",
                  }}
                >
                  {f.q}
                  <span style={{ color: "var(--accent)", fontSize: 20 }}>+</span>
                </summary>
                <p className="body" style={{ marginTop: 14, marginBottom: 0, maxWidth: "44ch" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <Placeholder label="Map · Wake Forest campus" ratio="4/3" />
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Find us</div>
              <h2 className="display-m">1212 S Main St<br/>Wake Forest, NC</h2>
              <p className="lede" style={{ marginTop: 24 }}>
                15 minutes north of Raleigh, just off Capital Blvd. Free parking on site, with first-time guest spots near the main entrance.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Open in Maps <span className="arr">→</span></button>
                <button className="btn btn-ghost">Tell us you're coming</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BeliefsPage({ onNav }) {
  const beliefs = [
    {
      n: "01",
      h: "The Bible",
      b: "We believe that the Bible was written by divinely inspired men and is God's revelation of himself and his will to man. The Bible in its entirety is the Word of God, and as such is wholly true in everything it affirms. The Scriptures are the unique, full and final authority on all matters of faith and practice.",
      refs: "2 Tim. 3:16; 2 Pet. 1:20–21; Ps. 18:30; 119:96",
    },
    {
      n: "02",
      h: "The Trinity",
      b: "We believe that the Godhead exists eternally in three persons — Father, Son, and Holy Spirit — and that these three are one God, and are worthy of precisely the same confidence, obedience, and worship.",
      refs: "Matt. 28:18–19; Mk. 12:29; Jn. 1:14; Acts 5:3–4",
    },
    {
      n: "03",
      h: "Creation",
      b: "We believe that God created all things and that by his sovereign power he continues to sustain his creation.",
      refs: "Gen. 1:1; Col. 1:17",
    },
    {
      n: "04",
      h: "Jesus Christ",
      b: "We believe that Jesus Christ in the flesh was fully God and fully man, that he was born of a virgin and that he lived a sinless life, in which he taught and worked mighty works and wonders and signs as recorded in the four gospels, that he was crucified, died as a penalty for our sins and was later raised from the dead bodily on the third day. Later, he ascended to the Father's right hand where he is head of the church and intercedes for believers, and from whence He is coming again personally, bodily, and visibly to this earth to consummate His kingdom.",
      refs: "Heb. 1:2; 4:15; 1 Cor. 15:3–8; Rom. 8:34; Matt. 16:27",
    },
    {
      n: "05",
      h: "The Holy Spirit",
      b: "We believe that the Holy Spirit is a person, is God and possesses all the divine attributes. He convicts the world of sin. He indwells all believers, and baptizes and seals all believers at the moment of salvation. He uniquely endows each believer with gifts for the building up of the body. He guides believers in understanding and applying the Scriptures and empowers us to lead a life of Christ-like character.",
      refs: "Jn. 16:7–15; Rom. 8:9; 1 Cor. 12:13; Eph. 4:30; Jn. 16:13; Gal. 5:22–23",
    },
    {
      n: "06",
      h: "Sin",
      b: "We believe that all men have defied God and have chosen to go their own independent way and, thereby, stand condemned by God. We believe that God, by his sovereign choice and his love for mankind, sent Jesus into the world to bring people back into fellowship with God, and that this salvation, with its forgiveness of sin, is a gift, wholly a work of God's grace, not the result of human works, and that this salvation must be personally appropriated by repentance and faith. We believe that a true believer is eternally secure, that he cannot lose his salvation, but that sin may interrupt the joy of his fellowship with God and bring the loving discipline of his heavenly Father.",
      refs: "Rom. 3:23; 5:8; Eph. 2:8; Mk. 1:15; 1 Jn. 5:12–13; Jn. 10:28; Heb. 12:5–6",
    },
    {
      n: "07",
      h: "The Church",
      b: "We believe there is one church universal, which is comprised of all who place their faith in the Lord Jesus Christ alone. The Scriptures command believers to gather together to devote themselves to worship, prayer, teaching of the Word, observance of baptism and the Lord's Supper, fellowship, service to the body, and outreach to the world. Wherever God's people meet regularly in obedience to these commands, there is the local expression of the church. Under the watch care of elders and deacons, its members are to work together in love and unity, intent on the one ultimate purpose of glorifying God.",
      refs: "Rom. 3:22; Acts 2:42–47; Matt. 28:19; Lk. 22:19; Heb. 10:24–25; Gal. 6:10; Acts 1:8; 1 Tim. 3:1; 1 Pet. 5:1–3; 1 Jn. 4:7; Eph. 3:21",
    },
  ];

  const moreInfo = [
    { label: "Marriage, Divorce & Remarriage Statement (Aug 2023)" },
    { label: "Redemptive Church Discipline Policy" },
    { label: "Constitution and Bylaws of North Wake Church" },
    { label: "The Roles of Men and Women at North Wake" },
    { label: "Statement on Domestic Abuse" },
    { label: "APOC (Abuse Point of Contact) Team" },
  ];

  return (
    <>
      <section style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="mono" style={{ color: "var(--ink-3)" }}>
            <span style={{ cursor: "default" }} onClick={() => onNav("home")}>Home</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span>About</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>Our Beliefs</span>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot"></span>Our beliefs
          </div>
          <h1 className="display-xl" style={{ marginBottom: 32, maxWidth: "16ch" }}>
            What we believe.
          </h1>
          <p className="lede">
            The convictions below shape every Sunday, every Grow Group, and every conversation we have as a church.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap-narrow">
          {beliefs.map((b, i) => (
            <article
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: 48,
                padding: "48px 0",
                borderTop: "1px solid var(--line-strong)",
                borderBottom: i === beliefs.length - 1 ? "1px solid var(--line-strong)" : "none",
              }}
            >
              <div>
                <div className="mono" style={{ color: "var(--accent)" }}>{b.n}</div>
              </div>
              <div>
                <h2 className="display-s" style={{ fontWeight: 500, marginBottom: 18 }}>{b.h}</h2>
                <p className="body" style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, maxWidth: "62ch", color: "var(--ink)" }}>{b.b}</p>
                <div className="mono" style={{ color: "var(--ink-3)", fontSize: 12 }}>
                  {b.refs}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* More Information */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot"></span>More information</div>
          <h2 className="display-m" style={{ marginBottom: 36, maxWidth: "20ch" }}>
            Position papers and policy documents.
          </h2>
          <div style={{ borderTop: "1px solid var(--line-strong)" }}>
            {moreInfo.map((m, i) => (
              <div key={i} className="row-link" style={{ padding: "20px 0", borderBottom: "1px solid var(--line)" }}>
                <span className="title" style={{ fontWeight: 500 }}>{m.label}</span>
                <span className="row-arr" style={{ color: "var(--accent)" }}>→</span>
              </div>
            ))}
          </div>
          <p className="small" style={{ marginTop: 28, color: "var(--ink-3)", maxWidth: "60ch" }}>
            The APOC (Abuse Point of Contact) team exists to respond appropriately to any reports of harassment and abuse perpetrated by any leadership at North Wake Church.
          </p>
        </div>
      </section>

      {/* Baptism */}
      <section>
        <div className="wrap-narrow">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Baptism</div>
              <h2 className="display-m" style={{ maxWidth: "12ch" }}>On baptism.</h2>
            </div>
            <div>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 24, maxWidth: "54ch" }}>
                For our perspective on baptism, read our position paper. To listen to a sermon on “The Ordinance of Baptism,” you can stream it from our sermon archive.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-ghost">Read our position on baptism <span className="arr">→</span></button>
                <button className="btn btn-ghost">Listen to the sermon <span className="arr">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation and Affiliation */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Cooperation &amp; affiliation</div>
          <p style={{
            fontFamily: "var(--display)",
            fontSize: 22,
            lineHeight: 1.55,
            fontWeight: 400,
            color: "var(--ink)",
            margin: 0,
            maxWidth: "54ch",
            textWrap: "pretty",
          }}>
            North Wake Church is a cooperating member of the Southern Baptist Convention. We accept <em style={{ fontStyle: "italic", color: "var(--accent)" }}>The Baptist Faith and Message, 2000</em> — an affirmation of basic Christian beliefs — as a general statement of our faith.
          </p>
        </div>
      </section>

      {/* Closing CTAs */}
      <section>
        <div className="wrap-narrow">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div onClick={() => onNav("jesus")} style={{
              padding: "36px 32px",
              border: "1px solid var(--line-strong)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              cursor: "default",
            }}>
              <div className="mono" style={{ color: "var(--accent)" }}>For the curious</div>
              <h3 className="title" style={{ fontWeight: 500 }}>Who is Jesus?</h3>
              <p className="small" style={{ margin: 0 }}>A page written for honest questions — no jargon, no pressure.</p>
              <div style={{ marginTop: 20, color: "var(--accent)", fontSize: 13 }}>Read it →</div>
            </div>
            <div onClick={() => onNav("membership")} style={{
              padding: "36px 32px",
              border: "1px solid var(--line-strong)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              cursor: "default",
            }}>
              <div className="mono" style={{ color: "var(--accent)" }}>For members</div>
              <h3 className="title" style={{ fontWeight: 500 }}>Membership at North Wake</h3>
              <p className="small" style={{ margin: 0 }}>Church covenant, the membership process, and upcoming class dates.</p>
              <div style={{ marginTop: 20, color: "var(--accent)", fontSize: 13 }}>Membership →</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GroupsPage({ onNav }) {
  const rhythms = [
    { tag: "Weekly", h: "Open the Word together", b: "Reflect on and apply the passage from that week's sermon, discussing it honestly and prayerfully through the lens of your real lives." },
    { tag: "Weekly", h: "Pray honestly", b: "Real prayer for real things — jobs, marriages, doubt, grief, joys — without the polished veneer." },
    { tag: "Ongoing", h: "Bear burdens, celebrate victories", b: "Walk through joyful and difficult seasons side by side. Mentoring, encouragement, and mutual support that deepen with time." },
    { tag: "Throughout the year", h: "Serve & disciple", b: "Shared service opportunities, one-another discipleship, and practical care — putting love into action together." },
    { tag: "Always", h: "Pray for boldness", b: "Groups regularly pray for opportunity to share the hope of the gospel with neighbors, coworkers, and friends." },
    { tag: "Ordinary life", h: "Show up and be known", b: "Participation looks like consistent presence, being known and cared for, and learning to follow Jesus in everyday rhythms." },
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
            <span style={{ color: "var(--accent)" }}>Grow Groups</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="dot"></span>Grow Groups · Community ministry
              </div>
              <h1 className="display-l" style={{ maxWidth: "18ch" }}>
                Ordinary people, growing into <span style={{ color: "var(--accent)" }}>wholehearted followers</span> of Jesus.
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                Spiritual growth isn't meant to happen in isolation — it happens through shared life. Grow Groups exist to help us love God deeply, care for one another genuinely, and live with growing concern for our neighbors.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-primary">Find a group <span className="arr">→</span></button>
                <button className="btn btn-ghost">Talk to the community team</button>
              </div>
            </div>
            <Placeholder label="Grow Group · home gathering" ratio="4/5" />
          </div>
        </div>
      </section>

      {/* Heartbeat narrative */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>The heartbeat</div>
              <h2 className="display-m" style={{ maxWidth: "16ch" }}>Shaped not just in what we know — but in what we love.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              At the heart of this ministry is a longing to see God form people who love him deeply, care for one another genuinely, and live on mission wherever they're placed.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, marginTop: 0 }}>
                Grow Groups exist to help ordinary people grow into wholehearted followers of Jesus through meaningful Christian community. We believe spiritual growth is not meant to happen in isolation — it happens through shared life: opening God's Word together, praying honestly, bearing burdens, celebrating victories, and encouraging one another toward Christlikeness.
              </p>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65 }}>
                Our hope is that, over time, people are shaped not just in what they know, but in what they love — developing real affection for God, resilient faith in everyday life, and a readiness to live on mission wherever God has placed them.
              </p>
            </div>

            <figure style={{ margin: 0, paddingLeft: 28, borderLeft: "2px solid var(--accent)" }}>
              <div className="mono" style={{ marginBottom: 14, color: "var(--accent)" }}>What we long to see</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Real affection for God",
                  "Resilient faith in everyday life",
                  "Readiness to live on mission",
                  "Genuine care for one another",
                  "Growing concern for our neighbors",
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
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 }}>
            <Placeholder label="Around the table" ratio="4/3" />
            <Placeholder label="In the Word" ratio="4/3" />
            <Placeholder label="Praying together" ratio="4/3" />
          </div>
        </div>
      </section>

      {/* What it looks like — rhythms grid */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>What it looks like</div>
              <h2 className="display-m">Weekly in homes, throughout the year.</h2>
            </div>
            <p className="body right" style={{ margin: 0 }}>
              Groups meet weekly in homes across different days of the week — creating space to reflect, pray, serve, and enjoy life together.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
            {rhythms.map((r, i) => (
              <article key={i} style={{ background: "var(--bg)", padding: "36px 32px 32px", display: "flex", flexDirection: "column", gap: 14, minHeight: 240 }}>
                <div className="mono" style={{ color: "var(--accent)" }}>{r.tag}</div>
                <h3 className="title" style={{ fontWeight: 500, fontSize: 22, letterSpacing: "-0.015em" }}>{r.h}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>{r.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Find a group — member portal */}
      <section style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 80,
            alignItems: "center",
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot"></span>Find a group</div>
              <h2 className="display-m" style={{ maxWidth: "12ch" }}>
                Interested in finding a group?
              </h2>
            </div>
            <div>
              <p className="body" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: "52ch", marginTop: 0 }}>
                Members can search the directory by day, neighborhood, and life stage to find a group that fits. New here? Tell us a little about your season and we'll help match you.
              </p>
              <div style={{
                marginTop: 36,
                padding: "32px 32px",
                background: "var(--bg)",
                border: "1px solid var(--line-strong)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 24,
              }}>
                <div>
                  <div className="mono" style={{ color: "var(--accent)", marginBottom: 8 }}>For members</div>
                  <div className="title" style={{ fontWeight: 500 }}>Browse the live group directory</div>
                </div>
                <button className="btn btn-primary">Log in to search <span className="arr">→</span></button>
              </div>
              <div style={{
                marginTop: 16,
                padding: "32px 32px",
                background: "transparent",
                border: "1px solid var(--line-strong)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 24,
              }}>
                <div>
                  <div className="mono" style={{ color: "var(--ink-3)", marginBottom: 8 }}>New here?</div>
                  <div className="title" style={{ fontWeight: 500 }}>Talk to the community team and we'll help you find a fit</div>
                </div>
                <button className="btn btn-ghost">Get connected <span className="arr">→</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24, justifyContent: "center", display: "flex" }}>
            <span className="dot"></span>The next step
          </div>
          <h2 className="display-l" style={{ color: "var(--bg)", marginBottom: 24 }}>
            One conversation away.
          </h2>
          <p className="lede" style={{ color: "rgba(255,255,255,0.78)", margin: "0 auto", maxWidth: "50ch" }}>
            Tell us a little about your season of life, and our community team will personally connect you with a group that's a fit. No pressure, no commitment.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center" }}>
            <button className="btn" style={{ background: "var(--accent)", color: "white" }}>I'm interested <span className="arr">→</span></button>
            <button className="btn" style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}>Email the team</button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { VisitPage, BeliefsPage, GroupsPage });
