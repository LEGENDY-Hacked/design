// On the Go — quick-bite mini section.

function OnTheGo() {
  return (
    <section style={{
      background: "var(--cream-50)",
      color: "var(--charcoal-900)",
      padding: "128px 48px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "end",
          marginBottom: 56,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow color="var(--brass-600)">Zum Mitnehmen</Eyebrow>
            <BrassRule color="var(--brass-600)" />
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.4vw, 60px)",
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "var(--charcoal-900)",
              margin: 0,
            }}>
              Du gehst am Bahnhof vorbei?<br/>
              <span style={{ fontStyle: "italic", color: "var(--ember-600)" }}>Schnapp dir einen Dürüm.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            color: "var(--smoke-500)", lineHeight: 1.7, margin: 0,
            maxWidth: 420, justifySelf: "end",
          }}>
            Schnell vom Tresen. Bis Mitternacht geöffnet. Alle Speisen auch <span style={{ fontStyle: "italic", color: "var(--charcoal-900)" }}>zum Mitnehmen</span>.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          borderTop: "1px solid rgba(14,11,10,0.1)",
        }}>
          {window.ON_THE_GO_DISHES.map((d, i) => (
            <div key={d.no} style={{
              padding: "40px 32px",
              borderRight: i < 2 ? "1px solid rgba(14,11,10,0.1)" : "none",
              borderBottom: "1px solid rgba(14,11,10,0.1)",
              display: "flex", flexDirection: "column", gap: 12,
              background: "transparent",
              transition: "background 300ms ease-out",
              cursor: "pointer",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(232,221,201,0.4)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span style={{
                fontFamily: "var(--font-display)", fontStyle: "italic",
                fontSize: 14, color: "var(--brass-600)",
              }}>No.&nbsp;{d.no}</span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500,
                  letterSpacing: "-0.015em", lineHeight: 1.1, color: "var(--charcoal-900)",
                  margin: 0,
                }}>{d.name}</h3>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: 22,
                  color: "var(--charcoal-900)",
                }}>{d.price}</span>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6,
                color: "var(--smoke-500)", margin: 0, marginTop: 4,
              }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { OnTheGo });
