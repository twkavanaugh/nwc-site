// The 1212 Blog — index + post detail.
// Data-driven so new posts are just data entries; the template renders them.

const BLOG_POSTS = [
  {
    slug: "love-does-no-harm",
    title: "Love Does No Harm",
    group: "Meditation for Preparation",
    author: "Mary Kathryn Lassetter",
    date: "April 14, 2026",
    dateShort: { d: "Apr", n: "14" },
    categories: ["Leader Blog", "Meditation for Preparation"],
    excerpt: "Love your neighbor. Seems like it should be simple — but when feelings get hurt and disagreements come, it stands as one of the hardest commandments to follow.",
    featured: true,
    blocks: [
      {
        type: "scripture",
        intro: "Read",
        ref: "Romans 13:8–14",
        text: "Owe no one anything, except to love each other, for the one who loves another has fulfilled the law. For the commandments, “You shall not commit adultery, You shall not murder, You shall not steal, You shall not covet,” and any other commandment, are summed up in this word: “You shall love your neighbor as yourself.” Love does no wrong to a neighbor; therefore love is the fulfilling of the law.\n\nBesides this you know the time, that the hour has come for you to wake from sleep. For salvation is nearer to us now than when we first believed. The night is far gone; the day is at hand. So then let us cast off the works of darkness and put on the armor of light. Let us walk properly as in the daytime, not in orgies and drunkenness, not in sexual immorality and sensuality, not in quarreling and jealousy. But put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires.",
      },
      {
        type: "paragraph",
        text: "Love your neighbor. Seems like it should be simple and straightforward right? But when the disagreements come, feelings get hurt, wrongs are done, or someone just annoys you over and over again, this stands as one of the hardest commandments to follow.",
      },
      {
        type: "paragraph",
        text: "We want to be comfortable. We desire to have calm, to have good things, and to have people like us. But life doesn't always work that way; in fact, it rarely works that way, and when things get hard in our own lives, it becomes harder to love those around us. We find it takes more energy to love than to get angry or do whatever is easiest at that time. And before we know it our words, deeds, and actions have led us to cause harm to those we are called to love.",
      },
      {
        type: "paragraph",
        text: "Another thing that can lead us to harming those we are called to love is our strong sense of what we perceive as “justice.” When my kids were little I had to ban the phrase “that isn't fair” from our home. I am not even sure where they learned this phrase, but they would throw it into any situation that didn't suit their desires, especially if they felt someone else was getting what they wanted. Somewhere along this line of thought there was a clear conclusion that they had been wronged by their sibling, and this wrong then “justified” their feelings of anger or resentment.",
      },
      {
        type: "paragraph",
        text: "Sadly, in the world we live in, we often feel “justified” in speaking our opinions or feelings regardless of how it may offend, hurt, or degrade the other person. “Love does no harm.” When we are properly loving those around us, especially within the body of the church, are we ensuring that we are doing no harm? Do we seek to ensure we are not harming our neighbors?",
      },
      {
        type: "paragraph",
        text: "Do we justify the harm we cause by saying we have been harmed, so we can harm in return? Do we harm those we worship with and serve with by our words or deeds? Do we feel no consequences of the harm we cause? I cannot see how causing harm in the body of Christ has no consequences. Not just internally, but also with those we are working to reach for Christ. If we cannot love well those that we call sisters and brothers in Christ, then how are we going to love those of the world?",
      },
      {
        type: "pullquote",
        text: "What would it look like to cause no harm? What would it cost you? Cost us? Would you lose your pride? Position? Opinion? Is that worth it?",
      },
      {
        type: "paragraph",
        text: "Is keeping the commands of Christ worth laying down our pride, opinions, emotions? I hope our answer to this is yes, it is worth it. He is worth it. The unity of the body of Christ is worth it.",
      },
      {
        type: "paragraph",
        text: "What do you need to do today or this week to rebuild trust and care for those to whom you have caused harm?",
      },
      {
        type: "paragraph",
        text: "On the flip side is this question: how do we cause no harm? We show love and kindness to those around us. We learn how to listen well, to see those around us the way Christ sees them. We have empathy for the path they are on. We encourage those around us, and we pray for them. We let them know we love them and want to support and care for them.",
      },
      {
        type: "paragraph",
        text: "Maybe this week we don't need to focus on the harm we have caused or even focus on not causing harm, but instead, we truly put effort into loving one another well. We seek to extend kindness even when we haven't been extended kindness. We seek to show sympathy to someone who has had a hard week. What can you do this week? How can you show love? How can you encourage unity instead of causing harm?",
      },
      {
        type: "paragraph",
        text: "Let us seek to love well and encourage one another this week.",
      },
    ],
  },
  // Placeholder posts for the index — clicking them returns to the same post for demo
  {
    slug: "the-weight-of-waiting",
    title: "The Weight of Waiting",
    group: "Meditation for Preparation",
    author: "David Park",
    date: "April 7, 2026",
    dateShort: { d: "Apr", n: "07" },
    categories: ["Leader Blog", "Meditation for Preparation"],
    excerpt: "Scripture is full of waiting — and waiting is rarely passive. What if the wait is part of the work?",
  },
  {
    slug: "honest-prayer-on-hard-days",
    title: "Honest Prayer on Hard Days",
    group: "Pastoral Care",
    author: "Karen Boswell",
    date: "March 31, 2026",
    dateShort: { d: "Mar", n: "31" },
    categories: ["Pastoral Care"],
    excerpt: "When the script of polished prayers fails, the Psalms give us permission — and language — for honest words.",
  },
  {
    slug: "what-grow-groups-are-actually-for",
    title: "What Grow Groups Are Actually For",
    group: "Discipleship",
    author: "Pastor John",
    date: "March 24, 2026",
    dateShort: { d: "Mar", n: "24" },
    categories: ["Discipleship", "Grow Groups"],
    excerpt: "It's not a Bible study with snacks. It's not therapy. It's something stranger and older — and far more durable than either.",
  },
  {
    slug: "thinking-about-baptism",
    title: "Thinking About Baptism?",
    group: "Membership",
    author: "Pastor Mark",
    date: "March 17, 2026",
    dateShort: { d: "Mar", n: "17" },
    categories: ["Membership"],
    excerpt: "If you've been wondering what baptism means, or whether it's for you, here's a short guide and an invitation to talk.",
  },
];

// =============================================================================
// BLOG INDEX PAGE
// =============================================================================
function BlogPage({ onNav }) {
  const [filter, setFilter] = React.useState("All");

  const allCategories = React.useMemo(() => {
    const set = new Set();
    BLOG_POSTS.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = filter === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.categories.includes(filter));

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  const goToPost = (slug) => {
    // Persist current slug, navigate to post page
    window.__currentBlogSlug = slug;
    onNav("blog-post");
  };

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: 64, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 28 }}>
            <span className="dot"></span>The 1212 Blog
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
            <h1 className="display-l" style={{ maxWidth: "18ch" }}>
              Words from our pastors, leaders, and counselors.
            </h1>
            <p className="lede" style={{ marginBottom: 8 }}>
              Meditations, teaching, and pastoral reflections — written for the people of North Wake and anyone else who'd find them useful.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap">
          <div style={{
            display: "flex",
            gap: 0,
            flexWrap: "wrap",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "16px 22px",
                  border: "none",
                  background: "transparent",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: filter === cat ? "var(--accent)" : "var(--ink-3)",
                  fontWeight: filter === cat ? 600 : 400,
                  cursor: "default",
                  borderBottom: filter === cat ? "2px solid var(--accent)" : "2px solid transparent",
                  marginBottom: -1,
                  transition: "color 150ms ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section style={{ paddingTop: 56, paddingBottom: 0 }}>
          <div className="wrap">
            <div
              onClick={() => goToPost(featured.slug)}
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1fr",
                gap: 56,
                alignItems: "center",
                cursor: "default",
              }}
            >
              {/* Image placeholder */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "5 / 4",
                background: "var(--bg-2)",
                border: "1px solid var(--line-strong)",
                backgroundImage: "repeating-linear-gradient(135deg, transparent 0, transparent 18px, var(--line) 18px, var(--line) 19px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{
                  background: "var(--bg)",
                  border: "1px solid var(--line-strong)",
                  padding: "8px 14px",
                }}>
                  <div className="mono" style={{ color: "var(--ink-2)" }}>Post image · placeholder</div>
                </div>
              </div>

              {/* Featured copy */}
              <div>
                <div className="mono" style={{ color: "var(--accent)", marginBottom: 18 }}>
                  Featured · {featured.group}
                </div>
                <h2 className="display-m" style={{ marginBottom: 20, fontWeight: 500 }}>
                  {featured.title}
                </h2>
                <p className="body" style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 28, maxWidth: "44ch" }}>
                  {featured.excerpt}
                </p>
                <div className="small" style={{ color: "var(--ink-3)", marginBottom: 24 }}>
                  By {featured.author} · {featured.date}
                </div>
                <button className="btn btn-ghost" onClick={(e) => { e.stopPropagation(); goToPost(featured.slug); }}>
                  Read post <span className="arr">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* List of posts */}
      <section>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="dot"></span>More posts
          </div>
          <div>
            {rest.map((p, i) => (
              <div
                key={p.slug}
                onClick={() => goToPost(p.slug)}
                className="row-link"
                style={{ alignItems: "stretch", padding: "32px 0", gap: 32 }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 32, alignItems: "baseline", flex: 1 }}>
                  {/* Date stamp */}
                  <div>
                    <div className="mono" style={{ color: "var(--accent)", marginBottom: 4 }}>{p.dateShort.d}</div>
                    <div style={{
                      fontFamily: "var(--display)",
                      fontWeight: 500,
                      fontSize: 36,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "var(--ink)",
                    }}>{p.dateShort.n}</div>
                  </div>
                  {/* Post info */}
                  <div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                      {p.categories.map((c, j) => (
                        <span key={j} className="mono" style={{
                          padding: "4px 10px",
                          border: "1px solid var(--line-strong)",
                          color: "var(--ink-3)",
                        }}>
                          {c}
                        </span>
                      ))}
                    </div>
                    <h3 className="display-s" style={{ fontWeight: 500, marginBottom: 10, maxWidth: "32ch" }}>
                      {p.title}
                    </h3>
                    <p className="body" style={{ margin: 0, color: "var(--ink-3)", maxWidth: "60ch" }}>
                      {p.excerpt}
                    </p>
                    <div className="small" style={{ marginTop: 12, color: "var(--ink-3)" }}>
                      By {p.author}
                    </div>
                  </div>
                </div>
                <span className="row-arr" style={{ color: "var(--accent)", alignSelf: "center" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// =============================================================================
// BLOG POST PAGE
// =============================================================================
function BlogPostPage({ onNav }) {
  const slug = window.__currentBlogSlug || "love-does-no-harm";
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

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
            <span style={{ cursor: "default" }} onClick={() => onNav("blog")}>The 1212 Blog</span>
            <span style={{ margin: "0 10px", color: "var(--ink-4)" }}>/</span>
            <span style={{ color: "var(--accent)" }}>{post.title}</span>
          </div>
        </div>
      </section>

      {/* Title block */}
      <section style={{ paddingTop: 56, paddingBottom: 0 }}>
        <div className="wrap" style={{ maxWidth: 880 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
            {post.categories.map((c, j) => (
              <span key={j} className="mono" style={{
                padding: "4px 10px",
                border: "1px solid var(--line-strong)",
                color: "var(--accent)",
              }}>
                {c}
              </span>
            ))}
          </div>
          <h1 className="display-l" style={{ marginBottom: 24, maxWidth: "20ch" }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", paddingBottom: 28, borderBottom: "1px solid var(--line)" }}>
            <div>
              <div className="mono" style={{ color: "var(--ink-3)", marginBottom: 4 }}>By</div>
              <div className="title" style={{ fontWeight: 500 }}>{post.author}</div>
            </div>
            <div style={{ width: 1, height: 36, background: "var(--line)" }}></div>
            <div>
              <div className="mono" style={{ color: "var(--ink-3)", marginBottom: 4 }}>Published</div>
              <div className="title" style={{ fontWeight: 500 }}>{post.date}</div>
            </div>
            <div style={{ width: 1, height: 36, background: "var(--line)" }}></div>
            <div>
              <div className="mono" style={{ color: "var(--ink-3)", marginBottom: 4 }}>Group</div>
              <div className="title" style={{ fontWeight: 500 }}>{post.group}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body — render blocks */}
      <section style={{ paddingTop: 48 }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          {(post.blocks || []).map((b, i) => <PostBlock key={i} block={b} />)}
          {!post.blocks && (
            <p className="body" style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-3)", fontStyle: "italic" }}>
              This post is a placeholder for layout demonstration.
            </p>
          )}
        </div>
      </section>

      {/* Author footer */}
      <section style={{ paddingTop: 32 }}>
        <div className="wrap" style={{ maxWidth: 740 }}>
          <div style={{
            borderTop: "1px solid var(--line-strong)",
            paddingTop: 32,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 24,
            alignItems: "center",
          }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "var(--bg-2)",
              border: "1px solid var(--line-strong)",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--display)",
              fontSize: 24,
              fontWeight: 500,
              color: "var(--ink-3)",
            }}>
              {post.author.split(" ").map((s) => s[0]).join("").slice(0, 2)}
            </div>
            <div>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 6 }}>About the author</div>
              <div className="title" style={{ fontWeight: 500, marginBottom: 4 }}>{post.author}</div>
              <div className="small" style={{ color: "var(--ink-3)" }}>Contributor to The 1212 Blog · {post.group}</div>
            </div>
          </div>
        </div>
      </section>

      {/* More posts CTA */}
      <section>
        <div className="wrap" style={{ textAlign: "center" }}>
          <button className="btn btn-ghost" onClick={() => onNav("blog")}>
            ← All blog posts
          </button>
        </div>
      </section>
    </>
  );
}

// Block renderer — supports paragraph, scripture, pullquote, heading
function PostBlock({ block }) {
  if (block.type === "paragraph") {
    return (
      <p style={{
        fontFamily: "var(--display)",
        fontSize: 20,
        lineHeight: 1.65,
        marginBottom: 24,
        color: "var(--ink)",
        fontWeight: 400,
        textWrap: "pretty",
      }}>
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h3 className="display-s" style={{ fontWeight: 500, margin: "40px 0 16px", maxWidth: "30ch" }}>
        {block.text}
      </h3>
    );
  }

  if (block.type === "scripture") {
    // Split into paragraphs by \n\n
    const paras = block.text.split("\n\n");
    return (
      <div style={{
        background: "var(--bg-2)",
        borderLeft: "3px solid var(--accent)",
        padding: "28px 32px",
        marginBottom: 32,
      }}>
        <div className="mono" style={{ color: "var(--accent)", marginBottom: 6 }}>
          {block.intro || "Scripture"}
        </div>
        <div className="title" style={{ fontWeight: 500, fontSize: 19, marginBottom: 16 }}>
          {block.ref}
        </div>
        {paras.map((p, i) => (
          <p key={i} style={{
            fontFamily: "var(--display)",
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--ink-2)",
            margin: i === paras.length - 1 ? 0 : "0 0 14px",
            fontStyle: "italic",
          }}>
            {p}
          </p>
        ))}
      </div>
    );
  }

  if (block.type === "pullquote") {
    return (
      <blockquote style={{
        margin: "40px 0",
        paddingLeft: 28,
        borderLeft: "3px solid var(--accent)",
        fontFamily: "var(--display)",
        fontSize: 26,
        lineHeight: 1.4,
        fontWeight: 500,
        letterSpacing: "-0.015em",
        color: "var(--ink)",
        textWrap: "balance",
      }}>
        {block.text}
      </blockquote>
    );
  }

  return null;
}

Object.assign(window, { BlogPage, BlogPostPage });
