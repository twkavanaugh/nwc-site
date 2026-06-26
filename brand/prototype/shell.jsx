// Shared shell components: Nav, Footer, Placeholder, Marquee
// Exposed on window for cross-script use.

const { useState, useEffect, useMemo, useRef } = React;

// Each dropdown item is { label, page? (optional route key) } — items with `page` are clickable
const NAV = [
  {
    label: "About",
    dropdown: [
      { label: "Our Beliefs", page: "beliefs" },
      { label: "Leadership" },
      { label: "Mission / Vision", page: "mission" },
      { label: "Membership", page: "membership" },
    ],
  },
  {
    label: "Mission",
    dropdown: [
      { label: "International Missions" },
      { label: "Church Planting" },
      { label: "Local Outreach" },
      { label: "Ministry Training" },
      { label: "Serve the Church" },
    ],
  },
  {
    label: "Help",
    dropdown: [
      { label: "Hope Counseling", page: "hope" },
      { label: "Mercy Health Clinic" },
      { label: "Feed Ministry", page: "feed" },
      { label: "Care Ministry" },
    ],
  },
  {
    label: "Community",
    dropdown: [
      { label: "Grow Groups", page: "groups" },
      { label: "Adult Discipleship" },
      { label: "Kids", page: "kids" },
      { label: "Students", page: "students" },
      { label: "Women" },
      { label: "Men" },
      { label: "LILY Moms" },
      { label: "Young Adults" },
      { label: "Mature Adults", page: "mature" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Events", page: "event" },
      { label: "Sermons", page: "sermons" },
      { label: "Blog", page: "blog" },
      { label: "Other Resources" },
    ],
  },
];

function NavDropdown({ item, current, onNav }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const isActive = item.dropdown.some((d) => d.page && d.page === current);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className={"nav-link" + (isActive ? " active" : "")}>
        {item.label}
        <span className="caret" style={{ transform: open ? "rotate(225deg) translateY(1px)" : undefined, transition: "transform 200ms ease" }}></span>
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            minWidth: 240,
            background: "var(--bg)",
            border: "1px solid var(--line-strong)",
            borderRadius: 10,
            padding: 6,
            boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04)",
            zIndex: 60,
            animation: "fadeUp 180ms cubic-bezier(0.2,0.7,0.1,1) both",
          }}
        >
          {item.dropdown.map((d, i) => {
            const clickable = !!d.page;
            const active = clickable && d.page === current;
            return (
              <div
                key={i}
                onClick={() => {
                  if (clickable) {
                    onNav(d.page);
                    setOpen(false);
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                  color: clickable ? "var(--ink)" : "var(--ink-4)",
                  cursor: clickable ? "default" : "default",
                  transition: "background 140ms ease, color 140ms ease",
                  background: active ? "var(--bg-2)" : "transparent",
                }}
                onMouseEnter={(e) => { if (clickable) e.currentTarget.style.background = "var(--bg-2)"; }}
                onMouseLeave={(e) => { if (clickable) e.currentTarget.style.background = active ? "var(--bg-2)" : "transparent"; }}
              >
                <span>{d.label}</span>
                {clickable && (
                  <span style={{ color: "var(--accent)", fontSize: 13, opacity: active ? 1 : 0.55 }}>→</span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Nav({ current, onNav }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => onNav("home")}>
          <img src="assets/nw-mark.png" alt="North Wake Church" className="brand-logo brand-logo-nav" />
        </div>
        <div className="nav-links">
          <div
            className={"nav-link" + (current === "home" ? " active" : "")}
            onClick={() => onNav("home")}
          >
            Home
          </div>
          {NAV.map((item) => (
            <NavDropdown key={item.label} item={item} current={current} onNav={onNav} />
          ))}
          <div
            className={"nav-link" + (current === "visit" ? " active" : "")}
            onClick={() => onNav("visit")}
          >
            Come Visit
          </div>
          <div
            className={"nav-link" + (current === "blog" || current === "blog-post" ? " active" : "")}
            onClick={() => onNav("blog")}
          >
            Blog
          </div>
          <div
            className={"nav-link" + (current === "jesus" ? " active" : "")}
            onClick={() => onNav("jesus")}
          >
            Who is Jesus
          </div>
        </div>
        <div className="nav-cta">
          <button className="btn btn-ghost" style={{ padding: "10px 18px", fontSize: 13 }}>Give</button>
          <button
            className="btn btn-primary"
            style={{ padding: "10px 18px", fontSize: 13 }}
            onClick={() => onNav("visit")}
          >
            Plan a Visit
            <span className="arr">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Placeholder({ label, ratio = "16/9", dark = false, style = {}, className = "" }) {
  return (
    <div className={`ph ${dark ? "ph-dark" : ""} ${className}`} style={{ aspectRatio: ratio, ...style }}>
      <span className="ph-label">{label}</span>
    </div>
  );
}

function Marquee({ words }) {
  const seq = (
    <span>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span>{w}</span>
          <span className="sep">✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{seq}{seq}</div>
    </div>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 22 }}>
              <img src="assets/nw-logo.png" alt="North Wake Church" className="brand-logo brand-logo-footer" />
            </div>
            <p className="body" style={{ maxWidth: "32ch", color: "var(--ink-3)", margin: 0 }}>
              A family of faith in Wake Forest, North Carolina — knowing, growing, and going in the love of Jesus Christ.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 8 }}>
              <button className="btn btn-ghost" style={{ padding: "10px 18px", fontSize: 13 }}>Subscribe</button>
              <button className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => onNav("visit")}>Plan a Visit</button>
            </div>
          </div>
          <div>
            <h5>Visit</h5>
            <ul>
              <li>Service Times</li>
              <li>What to Expect</li>
              <li>Directions</li>
              <li>Kids & Students</li>
              <li>Parking</li>
            </ul>
          </div>
          <div>
            <h5>Belong</h5>
            <ul>
              <li onClick={() => onNav("groups")}>Grow Groups</li>
              <li onClick={() => onNav("membership")}>Membership</li>
              <li>Adult Discipleship</li>
              <li>Women's Ministry</li>
              <li>Men's Ministry</li>
            </ul>
          </div>
          <div>
            <h5>Care</h5>
            <ul>
              <li>Hope Counseling</li>
              <li>Mercy Health Clinic</li>
              <li onClick={() => onNav("feed")}>Feed Ministry</li>
              <li>Care Ministry</li>
              <li>Prayer Requests</li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li>Sermons</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Contact</li>
              <li>Give</li>
            </ul>
            <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <div className="mono" style={{ marginBottom: 4 }}>Address</div>
                <div className="small" style={{ color: "var(--ink-2)" }}>1212 S Main St<br />Wake Forest, NC 27587</div>
              </div>
              <div>
                <div className="mono" style={{ marginBottom: 4 }}>Phone</div>
                <div className="small" style={{ color: "var(--ink-2)" }}>(919) 556-1546</div>
              </div>
              <div>
                <div className="mono" style={{ marginBottom: 4 }}>Email</div>
                <div className="small" style={{ color: "var(--ink-2)" }}>office@northwake.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 North Wake Church · A family of faith</span>
          <span className="mono">Est. 19## · Wake Forest, NC</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, Placeholder, Marquee, NAV });
