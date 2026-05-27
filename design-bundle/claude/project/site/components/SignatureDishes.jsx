// Signature Dishes — 4-card grid.

function DishCard({ dish }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--charcoal-800)",
        border: "1px solid var(--border-dark)",
        borderRadius: 4,
        overflow: "hidden",
        display: "flex", flexDirection: "column",
        transition: "border-color 600ms ease-out",
        borderColor: hover ? "rgba(201,169,97,0.3)" : "var(--border-dark)",
        cursor: "pointer",
      }}>
      <div style={{ overflow: "hidden" }}>
        <div style={{
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 700ms var(--ease-cinema)",
        }}>
          <PhotoFrame mood={dish.photo} aspect="3 / 4" caption="" />
        </div>
      </div>
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{
          fontFamily: "var(--font-display)", fontStyle: "italic",
          fontSize: 14, color: "var(--brass-500)", letterSpacing: "-0.01em",
        }}>No.&nbsp;{dish.no}</span>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 14 }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500,
            letterSpacing: "-0.015em", lineHeight: 1.1, color: "var(--cream-100)",
            margin: 0,
          }}>{dish.name}</h3>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: 22,
            color: "var(--cream-100)", letterSpacing: "-0.01em", whiteSpace: "nowrap",
          }}>{dish.price}</span>
        </div>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6,
          color: "var(--ash-300)", margin: 0, marginTop: 4,
        }}>{dish.desc}</p>
      </div>
    </article>
  );
}

function SignatureDishes({ onReserve }) {
  return (
    <Section id="dishes" dark={true} style={{ padding: "160px 48px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 48,
        alignItems: "end",
        marginBottom: 72,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Eyebrow>Vom Grill · Unsere Spezialitäten</Eyebrow>
          <BrassRule />
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 72px)",
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
            color: "var(--cream-100)",
            margin: 0,
            maxWidth: 720,
          }}>
            Die vier Gerichte, die wir zuerst <span style={{ fontStyle: "italic", color: "var(--ember-500)" }}>bestellen</span> würden.
          </h2>
        </div>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 14,
          color: "var(--ash-300)", maxWidth: 280, lineHeight: 1.6, margin: 0,
          letterSpacing: "0.02em",
        }}>
          Hauptgerichte zwischen €15–18. Serviert mit Reis oder Pommes, frischem Salat und warmem Brot aus dem Ofen.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
      }}>
        {window.SIGNATURE_DISHES.map((d) => (
          <DishCard key={d.no} dish={d} />
        ))}
      </div>

      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center", gap: 24,
        marginTop: 80,
      }}>
        <Button onClick={onReserve} size="md">Tisch reservieren</Button>
        <span style={{
          fontFamily: "var(--font-body)", fontSize: 13,
          color: "var(--ash-300)", letterSpacing: "0.04em",
        }}>
          oder einfach reinkommen — <span style={{ fontStyle: "italic", color: "var(--cream-100)" }}>Reservieren ist nicht nötig</span>
        </span>
      </div>
    </Section>
  );
}

Object.assign(window, { SignatureDishes, DishCard });
