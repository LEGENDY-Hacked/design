import { Eyebrow, BrassRule, PhotoFrame, Button } from "./primitives";

interface TableAwaitsProps {
  onReserve: () => void;
}

export default function TableAwaits({ onReserve }: TableAwaitsProps) {
  return (
    <section
      style={{
        background: "var(--cream-50)",
        color: "var(--charcoal-900)",
        padding: "144px 48px 168px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        {/* Three-column composition */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 48,
          }}
        >
          {/* Left */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              textAlign: "right",
              gap: 16,
            }}
          >
            <Eyebrow color="var(--brass-600)">Bahnhofstraße 22</Eyebrow>
            <BrassRule
              color="var(--brass-600)"
              style={{ marginLeft: "auto" }}
            />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 9vw, 144px)",
                fontWeight: 500,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "var(--charcoal-900)",
                margin: 0,
              }}
            >
              Dein Tisch
              <br />
              <span style={{ fontStyle: "italic" }}>wartet</span>
            </h2>
          </div>

          {/* Center plate */}
          <div
            style={{
              position: "relative",
              width: "clamp(220px, 24vw, 360px)",
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow:
                "0 40px 80px -20px rgba(14,11,10,0.35), 0 0 0 12px rgba(245,237,224,1), 0 0 0 13px rgba(14,11,10,0.06)",
            }}
          >
            <PhotoFrame
              mood="lamb-skewer"
              aspect="auto"
              caption=""
              style={{ position: "absolute", inset: 0, height: "100%" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                boxShadow: "inset 0 0 0 1px rgba(201,169,97,0.5)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Right */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--brass-600)",
              }}
            >
              Täglich geöffnet · 9 – 24
            </span>
            <BrassRule color="var(--brass-600)" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 9vw, 144px)",
                fontWeight: 500,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "var(--charcoal-900)",
                margin: 0,
              }}
            >
              auf <span style={{ fontStyle: "italic" }}>dich</span>.
            </h2>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            marginTop: 80,
            flexWrap: "wrap",
          }}
        >
          <Button onClick={onReserve} size="lg">
            Tisch reservieren
          </Button>
          <a
            href="tel:064219338996"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--charcoal-900)",
              textDecoration: "none",
              padding: "20px 12px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Oder anrufen 06421 9338996</span>
          </a>
        </div>
      </div>
    </section>
  );
}
