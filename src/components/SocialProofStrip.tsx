import { Stars } from "./primitives";
import { SHORT_QUOTES } from "@/data/reviews";

export default function SocialProofStrip() {
  return (
    <div
      style={{
        background: "var(--charcoal-800)",
        borderTop: "1px solid var(--border-dark)",
        borderBottom: "1px solid var(--border-dark)",
        padding: "28px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
          gap: 48,
        }}
      >
        {/* Rating chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 18px",
            borderRight: "1px solid var(--border-dark)",
            paddingRight: 32,
          }}
        >
          <Stars />
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--cream-100)",
                letterSpacing: "0.04em",
              }}
            >
              4,6 · 187 Bewertungen
            </span>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ash-300)",
              }}
            >
              Verifiziert · Google
            </span>
          </div>
        </div>

        {/* Quotes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            overflow: "hidden",
          }}
        >
          {SHORT_QUOTES.map((q, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "var(--cream-100)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.005em",
                }}
              >
                &ldquo;{q.quote}&rdquo;
              </span>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--brass-500)",
                }}
              >
                — {q.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
