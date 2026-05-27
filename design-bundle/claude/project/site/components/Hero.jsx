// Hero. Full-bleed. Fire-on-charcoal placeholder. Grain. Vignette. Subtle parallax.

function Hero({ onReserve, onMenu }) {
  const heroImgRef = React.useRef(null);

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      if (!heroImgRef.current) return;
      const y = window.scrollY * 0.3;
      heroImgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "relative",
      height: "100vh",
      minHeight: 720,
      width: "100%",
      overflow: "hidden",
      background: "var(--charcoal-900)",
      color: "var(--cream-100)",
    }}>
      {/* Photo layer (placeholder until real footage drops in) */}
      <div ref={heroImgRef} style={{
        position: "absolute", inset: 0,
        transform: "scale(1.08)",
        willChange: "transform",
      }}>
        <PhotoFrame
          mood="fire"
          aspect="auto"
          caption=""
          style={{ position: "absolute", inset: 0, height: "100%" }}
        />
      </div>

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(14,11,10,0.65) 80%, var(--charcoal-900) 100%)",
        pointerEvents: "none",
      }} />

      {/* Bottom protection gradient */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "40%",
        background: "linear-gradient(180deg, transparent 0%, rgba(14,11,10,0.6) 60%, var(--charcoal-900) 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 48px 96px",
        maxWidth: 1280, margin: "0 auto",
      }}>
        <Eyebrow style={{ marginBottom: 24 }}>Marburg · Bahnhofstraße 22 · Täglich geöffnet</Eyebrow>
        <BrassRule style={{ marginBottom: 32 }} />
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(56px, 9vw, 132px)",
          fontWeight: 500,
          lineHeight: 0.95,
          letterSpacing: "-0.025em",
          margin: 0,
          color: "var(--cream-100)",
          maxWidth: 1100,
          textWrap: "balance",
        }}>
          Lezzet-<span style={{ color: "var(--ember-500)", fontStyle: "italic" }}>i</span> Mangal —<br/>
          Wo Feuer auf <span style={{ fontStyle: "italic", color: "var(--brass-300)" }}>Tradition</span> trifft.
        </h1>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 20,
          fontWeight: 400,
          lineHeight: 1.55,
          color: "rgba(245,237,224,0.85)",
          marginTop: 32,
          maxWidth: 580,
        }}>
          Authentischer türkischer Holzkohlegrill, nur wenige Schritte vom Marburger Hauptbahnhof.
          Täglich von neun Uhr morgens bis Mitternacht.
        </p>

        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Button onClick={onReserve} size="lg">Tisch reservieren</Button>
          <GhostButton onClick={onMenu} size="lg">Speisekarte ansehen</GhostButton>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        color: "var(--brass-500)", opacity: 0.7,
      }}>
        <span style={{
          fontFamily: "var(--font-label)", fontSize: 10, fontWeight: 500,
          letterSpacing: "0.32em", textTransform: "uppercase",
        }}>Scrollen</span>
        <div style={{ width: 1, height: 32, background: "var(--brass-500)", opacity: 0.5 }} />
      </div>
    </header>
  );
}

Object.assign(window, { Hero });
