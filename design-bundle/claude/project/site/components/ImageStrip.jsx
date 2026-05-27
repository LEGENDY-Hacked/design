// Cinematic full-width image strip — a horizontal row of food/atmosphere
// photographs, no gaps, no copy. Acts as a visual breath between sections.

function ImageStrip() {
  const tiles = [
    { mood: "tea",            cap: "çay · Tulpenglas" },
    { mood: "interior",       cap: "der Raum" },
    { mood: "embers",         cap: "die Kohle" },
    { mood: "grill-closeup",  cap: "über Nacht mariniert" },
    { mood: "mezze",          cap: "Mezze · kalte Vorspeisen" },
    { mood: "bread",          cap: "warm · aus dem Ofen" },
  ];

  const [hoverIdx, setHoverIdx] = React.useState(-1);

  return (
    <section style={{
      background: "var(--cream-50)",
      padding: 0,
      borderTop: "1px solid rgba(14,11,10,0.06)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${tiles.length}, 1fr)`,
        gap: 0,
      }}>
        {tiles.map((t, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(-1)}
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "3 / 4",
              cursor: "pointer",
            }}>
            <div style={{
              position: "absolute", inset: 0,
              transform: hoverIdx === i ? "scale(1.06)" : "scale(1.0)",
              transition: "transform 900ms var(--ease-cinema)",
            }}>
              <PhotoFrame
                mood={t.mood}
                aspect="auto"
                caption=""
                style={{ position: "absolute", inset: 0, height: "100%" }}
              />
            </div>
            <div style={{
              position: "absolute", inset: 0,
              background: hoverIdx === i
                ? "linear-gradient(180deg, transparent 50%, rgba(14,11,10,0.85) 100%)"
                : "linear-gradient(180deg, transparent 60%, rgba(14,11,10,0.6) 100%)",
              transition: "background 400ms ease-out",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: 20, left: 18, right: 18,
              fontFamily: "var(--font-label)", fontSize: 10, fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--cream-100)",
              opacity: hoverIdx === i ? 1 : 0.7,
              transition: "opacity 300ms ease-out",
            }}>{t.cap}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { ImageStrip });
