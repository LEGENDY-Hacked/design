// Three trust points — value, tea, location.

function ValueHospitality() {
  const points = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M5 7h11.5a3.5 3.5 0 0 1 0 7H7a3.5 3.5 0 0 0 0 7h12"/>
        </svg>
      ),
      eyebrow: "Großzügiger Wert",
      title: "Ein volles Grillgericht für €15–17.",
      body: "Hauptgerichte kommen mit Reis oder Pommes, frischem Salat und warmem Brot. Du wirst satt nach Hause gehen.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a3 3 0 0 1 0 6h-1"/>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
          <path d="M6 2v3M10 2v3M14 2v3"/>
        </svg>
      ),
      eyebrow: "Aufs Haus",
      title: "Türkischer Tee, zu jedem Essen.",
      body: "Çay ist kein Extra. Er kommt an deinen Tisch und wird nachgefüllt, bis du sagst, es reicht.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      eyebrow: "Zwei Minuten vom Bahnhof",
      title: "Täglich bis Mitternacht geöffnet.",
      body: "Bahnhofstraße 22. Vom Zug aus links abbiegen, der Kohle folgen.",
    },
  ];

  return (
    <section style={{
      background: "var(--charcoal-900)",
      color: "var(--cream-100)",
      padding: "128px 48px",
      borderTop: "1px solid var(--border-dark)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 0,
      }}>
        {points.map((p, i) => (
          <div key={i} style={{
            padding: "8px 40px",
            borderLeft: i > 0 ? "1px solid var(--border-dark)" : "none",
            display: "flex", flexDirection: "column", gap: 18,
          }}>
            <div style={{ color: "var(--brass-500)" }}>{p.icon}</div>
            <Eyebrow style={{ marginTop: 8 }}>{p.eyebrow}</Eyebrow>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: 30, fontWeight: 500,
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "var(--cream-100)", margin: 0,
              maxWidth: 320,
            }}>{p.title}</h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65,
              color: "var(--ash-300)", margin: 0, maxWidth: 320,
            }}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { ValueHospitality });
