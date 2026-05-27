import { Eyebrow } from "./primitives";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--charcoal-900)",
        color: "var(--cream-100)",
        padding: "96px 48px 48px",
        borderTop: "1px solid var(--border-dark)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 64,
            paddingBottom: 64,
            borderBottom: "1px solid var(--border-dark)",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <img
              src="/logos/wordmark.svg"
              alt="Lezzet-i Mangal"
              width={280}
              height={70}
              style={{ width: 280, height: "auto" }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: 17,
                lineHeight: 1.4,
                color: "var(--ash-300)",
                margin: 0,
                maxWidth: 380,
              }}
            >
              Herzlich willkommen — Lamm vom Holzkohlegrill, türkisches Frühstück
              und kostenloser çay, nur wenige Schritte vom Hauptbahnhof.
            </p>
          </div>

          {/* Visit */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Eyebrow>Besuchen</Eyebrow>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <li
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--cream-100)",
                  lineHeight: 1.55,
                }}
              >
                Bahnhofstraße 22, 35037 Marburg
              </li>
              <li>
                <a
                  href="tel:064219338996"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--brass-500)",
                    textDecoration: "none",
                  }}
                >
                  06421 9338996
                </a>
              </li>
              <li
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--cream-100)",
                }}
              >
                Täglich · 9:00 – 24:00
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Eyebrow>Speisekarte</Eyebrow>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {["Vom Grill", "Frühstück", "Zum Mitnehmen", "Nachspeise", "Außer Haus"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href="#dishes"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "var(--cream-100)",
                        textDecoration: "none",
                        opacity: 0.85,
                      }}
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Find */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Eyebrow>Finde uns</Eyebrow>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {["Instagram", "Google Maps", "TripAdvisor"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "var(--cream-100)",
                      textDecoration: "none",
                      opacity: 0.85,
                    }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "var(--smoke-500)",
                lineHeight: 1.55,
                margin: 0,
                marginTop: 8,
                fontStyle: "italic",
              }}
            >
              Alle Speisen auch zum Mitnehmen.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 32,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--brass-500)",
            }}
          >
            Kohle · Tradition · Marburg
          </span>
          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "var(--smoke-500)",
              letterSpacing: "0.04em",
            }}
          >
            <span>© {new Date().getFullYear()} Lezzet-i Mangal · Nurettin Usta</span>
            <a href="#" style={{ color: "var(--smoke-500)", textDecoration: "none" }}>
              Impressum
            </a>
            <a href="#" style={{ color: "var(--smoke-500)", textDecoration: "none" }}>
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
