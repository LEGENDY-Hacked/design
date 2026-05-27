// Sticky top nav. Transparent at top, blurs into dark on scroll.

function Nav({ onReserve }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Speisekarte", href: "#dishes" },
    { label: "Geschichte", href: "#story" },
    { label: "Frühstück", href: "#breakfast" },
    { label: "Besuchen", href: "#visit" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: "20px 48px",
      background: scrolled ? "rgba(14, 11, 10, 0.78)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-dark)" : "1px solid transparent",
      transition: "background 400ms ease-out, backdrop-filter 400ms ease-out, border-color 400ms ease-out, padding 400ms ease-out",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Brand */}
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
        <img src="design-system/assets/logos/brand-monogram.png" alt="Nurettin Usta — Lezzet-i Mangal" style={{ width: 44, height: 44, objectFit: "contain" }} />
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: 20,
          fontWeight: 500,
          color: "var(--cream-100)",
          letterSpacing: "-0.01em",
        }}>
          Lezzet-<span style={{ color: "var(--ember-500)", fontStyle: "italic" }}>i</span> Mangal
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", alignItems: "center", gap: 40 }} className="nav-links-desktop">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--cream-100)",
            textDecoration: "none",
            opacity: 0.85,
            transition: "opacity 200ms ease-out, color 200ms ease-out",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = "var(--brass-500)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = 0.85; e.currentTarget.style.color = "var(--cream-100)"; }}
          >{l.label}</a>
        ))}
      </div>

      <Button onClick={onReserve} size="sm">Reservieren</Button>
    </nav>
  );
}

Object.assign(window, { Nav });
