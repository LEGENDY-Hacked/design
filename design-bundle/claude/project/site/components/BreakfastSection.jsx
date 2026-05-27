// The Turkish Breakfast Experience — cinematic dedicated section.

function BreakfastSection({ onReserve }) {
  const feature = window.BREAKFAST_DISHES.find(d => d.feature);
  const rest    = window.BREAKFAST_DISHES.filter(d => !d.feature);

  return (
    <section id="breakfast" style={{
      background: "var(--charcoal-900)",
      color: "var(--cream-100)",
      borderTop: "1px solid var(--border-dark)",
      borderBottom: "1px solid var(--border-dark)",
    }}>
      {/* Full-bleed hero photo for the section */}
      <div style={{ position: "relative", height: 520, overflow: "hidden" }}>
        <PhotoFrame mood="breakfast" aspect="auto" caption="" style={{ position: "absolute", inset: 0, height: "100%" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(14,11,10,0.6) 90%, var(--charcoal-900) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: "0 48px", textAlign: "center",
        }}>
          <Eyebrow style={{ marginBottom: 20 }}>Das Türkische Frühstück — Täglich ab 9:00</Eyebrow>
          <BrassRule style={{ marginBottom: 28 }} />
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 104px)",
            fontWeight: 500,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: "var(--cream-100)",
            margin: 0,
            textWrap: "balance",
            maxWidth: 1000,
          }}>
            Ein ruhiger <span style={{ fontStyle: "italic", color: "var(--brass-300)" }}>Samstag</span><br/>
            über den ganzen Tisch ausgebreitet.
          </h2>
        </div>
      </div>

      {/* Body — feature + supporting */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 96,
          alignItems: "start",
        }}>
          {/* Feature dish */}
          <article style={{
            background: "var(--charcoal-800)",
            border: "1px solid var(--border-brass)",
            borderRadius: 4,
            padding: 40,
            display: "flex", flexDirection: "column", gap: 20,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, right: 0,
              background: "var(--brass-500)", color: "var(--charcoal-900)",
              fontFamily: "var(--font-label)", fontSize: 9, fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              padding: "8px 16px",
            }}>Das volle Ritual</div>
            <span style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontSize: 16, color: "var(--brass-500)", letterSpacing: "-0.01em",
            }}>No.&nbsp;{feature.no}</span>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500,
                letterSpacing: "-0.02em", lineHeight: 1.0, color: "var(--cream-100)",
                margin: 0,
              }}>{feature.name}</h3>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: 36,
                color: "var(--cream-100)", letterSpacing: "-0.015em",
              }}>{feature.price}</span>
            </div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65,
              color: "var(--cream-100)", margin: 0, marginTop: 8,
              maxWidth: 540,
            }}>{feature.desc}</p>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16,
            }}>
              {["Käse", "Oliven", "Eier", "Sucuk", "Marmeladen", "Honig", "Kaymak", "frisches Brot", "endloser çay"].map(item => (
                <span key={item} style={{
                  padding: "6px 12px",
                  border: "1px solid var(--border-dark)",
                  borderRadius: 2,
                  fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "var(--ash-300)",
                }}>{item}</span>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <Button onClick={onReserve}>Frühstück buchen</Button>
            </div>
          </article>

          {/* Supporting list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <Eyebrow style={{ marginBottom: 24 }}>Auch zum Frühstück</Eyebrow>
            {rest.map((d, i) => (
              <div key={d.no} style={{
                padding: "28px 0",
                borderBottom: i === rest.length - 1 ? "none" : "1px solid var(--border-dark)",
                display: "flex", flexDirection: "column", gap: 8,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontStyle: "italic",
                      fontSize: 13, color: "var(--brass-500)",
                    }}>No.&nbsp;{d.no}</span>
                    <h4 style={{
                      fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500,
                      letterSpacing: "-0.01em", lineHeight: 1.15, color: "var(--cream-100)",
                      margin: 0,
                    }}>{d.name}</h4>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 19,
                    color: "var(--cream-100)",
                  }}>{d.price}</span>
                </div>
                {d.desc && (
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                    color: "var(--ash-300)", margin: 0,
                  }}>{d.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BreakfastSection });
