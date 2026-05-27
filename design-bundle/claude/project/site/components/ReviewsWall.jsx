// Reviews wall — masonry of 7 real Google reviews + verified badge.

function ReviewsWall() {
  return (
    <section style={{
      background: "var(--cream-50)",
      color: "var(--charcoal-900)",
      padding: "144px 48px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: 18, marginBottom: 72, textAlign: "center",
        }}>
          <Eyebrow color="var(--brass-600)">Von Stammgästen · Von Fremden</Eyebrow>
          <BrassRule color="var(--brass-600)" />
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 76px)",
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "var(--charcoal-900)",
            margin: 0,
            maxWidth: 900,
            textWrap: "balance",
          }}>
            Die Gäste erwähnen immer wieder den <span style={{ fontStyle: "italic", color: "var(--ember-600)" }}>Tee</span>,<br/>
            die Portionen und das Personal.
          </h2>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 14px",
            borderRadius: 2, border: "1px solid rgba(176,141,74,0.3)",
            background: "rgba(176,141,74,0.06)",
            color: "var(--brass-600)",
            fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase",
            marginTop: 8,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Verifizierte Google-Bewertungen
          </div>
        </div>

        {/* CSS-columns masonry */}
        <div style={{
          columnCount: 3,
          columnGap: 24,
        }}>
          {window.REVIEWS.map((r, i) => (
            <article key={i} style={{
              breakInside: "avoid",
              marginBottom: 24,
              padding: "28px 28px 32px",
              border: "1px solid rgba(14,11,10,0.1)",
              borderRadius: 4,
              background: "transparent",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Stars size={13} />
                <span style={{
                  fontFamily: "var(--font-label)", fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "var(--brass-600)",
                }}>Google</span>
              </div>
              <p style={{
                fontFamily: "var(--font-display)", fontStyle: "italic",
                fontSize: r.span === 2 ? 22 : 19,
                lineHeight: 1.4,
                color: "var(--charcoal-900)",
                letterSpacing: "-0.005em",
                margin: 0,
              }}>"{r.quote}"</p>
              <div style={{
                display: "flex", flexDirection: "column", gap: 2,
                paddingTop: 14, borderTop: "1px solid rgba(14,11,10,0.08)",
              }}>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
                  color: "var(--charcoal-900)", letterSpacing: "0.02em",
                }}>{r.name}</span>
                <span style={{
                  fontFamily: "var(--font-label)", fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "var(--smoke-500)",
                }}>Verifizierter Gast</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ReviewsWall });
