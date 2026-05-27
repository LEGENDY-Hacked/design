import { Section, Eyebrow, BrassRule } from "./primitives";

export default function Story() {
  return (
    <Section id="story" dark={false} style={{ padding: "160px 48px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 96,
          alignItems: "start",
        }}
      >
        {/* Left sticky column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "sticky",
            top: 120,
          }}
        >
          <Eyebrow color="var(--brass-600)">Die Geschichte</Eyebrow>
          <BrassRule color="var(--brass-600)" />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4.4vw, 64px)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--charcoal-900)",
              margin: 0,
            }}
          >
            Ein jahrhundertealtes{" "}
            <span style={{ fontStyle: "italic", color: "var(--ember-600)" }}>
              Ritual
            </span>
            ,
            <br />
            ehrlich bewahrt.
          </h2>
        </div>

        {/* Right text column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: 28,
              lineHeight: 1.35,
              color: "var(--charcoal-900)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Mangal — offene Holzkohle. Der Grill ist älter als das Land, älter als
            die Sprache, älter als die Stadt, die er wärmt.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--charcoal-900)",
              margin: 0,
              maxWidth: 620,
            }}
          >
            Lamm wird über Nacht in Olivenöl, Sumach und Zwiebeln mariniert. Brot
            wird warm aus dem Ofen geholt. Tee wird großzügig ausgeschenkt — nicht
            als Geste, sondern als Regel:{" "}
            <span style={{ fontStyle: "italic" }}>çay geht aufs Haus, immer</span>.
            Das Feuer wird von Hand gepflegt. Nichts wird überstürzt.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--charcoal-900)",
              margin: 0,
              maxWidth: 620,
            }}
          >
            In Marburg hat diese Tradition ein Zuhause — in der Bahnhofstraße.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingTop: 16,
              borderTop: "1px solid rgba(14,11,10,0.1)",
              marginTop: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--brass-600)",
              }}
            >
              Herzlich willkommen
            </span>
            <span style={{ color: "rgba(14,11,10,0.4)" }}>·</span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "var(--smoke-500)",
                letterSpacing: "0.04em",
              }}
            >
              Nurettin Usta · Bahnhofstraße 22
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
