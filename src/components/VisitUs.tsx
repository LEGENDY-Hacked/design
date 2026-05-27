"use client";

import { useState, CSSProperties } from "react";
import { Eyebrow, BrassRule, Button } from "./primitives";

function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    party: 2,
    date: "",
    time: "19:00",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Send reservation details to owner via WhatsApp
    const msg =
      `🍽️ *Neue Tischreservierung*\n\n` +
      `👤 Name: ${form.name}\n` +
      `👥 Personen: ${form.party}\n` +
      `📅 Datum: ${form.date}\n` +
      `🕐 Uhrzeit: ${form.time}\n` +
      `📞 Telefon: ${form.phone || "–"}`;

    const waUrl = `https://wa.me/4917682054220?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  const fieldStyle: CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "var(--cream-100)",
    background: "transparent",
    border: 0,
    borderBottom: "1px solid rgba(245,237,224,0.25)",
    padding: "12px 0",
    outline: "none",
    width: "100%",
    transition: "border-color 200ms ease-out",
  };

  const labelStyle: CSSProperties = {
    fontFamily: "var(--font-label)",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--ash-300)",
  };

  if (submitted) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "32px 0" }}>
        <Eyebrow>Danke</Eyebrow>
        <BrassRule />
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 28,
            lineHeight: 1.3,
            color: "var(--cream-100)",
            margin: 0,
          }}
        >
          Dein Tisch für {form.party} ist reserviert.
          <br />
          Wir sehen uns am {form.date || "Tag"} um {form.time}.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "var(--ash-300)",
          }}
        >
          WhatsApp wurde geöffnet — tippe auf Senden, um die Reservierung abzuschicken.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>Name</label>
        <input
          style={fieldStyle}
          required
          value={form.name}
          onChange={update("name")}
          placeholder="Dein Name"
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={labelStyle}>Personen</label>
          <input
            style={fieldStyle}
            type="number"
            min="1"
            max="20"
            value={form.party}
            onChange={update("party")}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={labelStyle}>Uhrzeit</label>
          <input
            style={fieldStyle}
            type="time"
            value={form.time}
            onChange={update("time")}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>Datum</label>
        <input
          style={fieldStyle}
          type="date"
          value={form.date}
          onChange={update("date")}
          required
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={labelStyle}>Telefon</label>
        <input
          style={fieldStyle}
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder="06421 ..."
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        <Button type="submit">Tisch reservieren</Button>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--smoke-500)",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          Oder direkt anrufen —{" "}
          <a
            href="tel:064219338996"
            style={{
              color: "var(--brass-500)",
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            06421 9338996
          </a>
          . Marburger reservieren am Telefon.
        </p>
      </div>
    </form>
  );
}

export default function VisitUs() {
  return (
    <section
      id="visit"
      style={{
        background: "var(--charcoal-900)",
        color: "var(--cream-100)",
        padding: "128px 48px",
        borderTop: "1px solid var(--border-dark)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Map + address */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Eyebrow>Besuche uns · Bahnhofstraße 22</Eyebrow>
              <BrassRule />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 5vw, 72px)",
                  fontWeight: 500,
                  lineHeight: 0.98,
                  letterSpacing: "-0.025em",
                  color: "var(--cream-100)",
                  margin: 0,
                }}
              >
                Zwei Minuten zu Fuß vom{" "}
                <span style={{ fontStyle: "italic", color: "var(--ember-500)" }}>
                  Hauptbahnhof
                </span>
                .
              </h2>
            </div>

            {/* Google Map */}
            <div
              style={{
                position: "relative",
                height: 420,
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid var(--border-dark)",
                background: "var(--charcoal-800)",
              }}
            >
              <iframe
                title="Lezzet-i Mangal — Bahnhofstraße 22, 35037 Marburg"
                src="https://www.google.com/maps?q=Bahnhofstra%C3%9Fe+22,+35037+Marburg&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: "block",
                  filter: "saturate(0.78) contrast(0.95) brightness(0.92)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Open in Maps chip */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Bahnhofstra%C3%9Fe+22%2C+35037+Marburg"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  bottom: 14,
                  right: 14,
                  background: "var(--charcoal-900)",
                  color: "var(--brass-500)",
                  padding: "10px 14px",
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid var(--brass-600)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Route planen
              </a>
            </div>

            {/* Address block */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
                paddingTop: 8,
              }}
            >
              {[
                ["Adresse", "Bahnhofstraße 22, 35037 Marburg", null],
                ["Telefon", "06421 9338996", "tel:064219338996"],
                ["Öffnungszeiten", "Täglich · 9:00 – 24:00\nKüche durchgehend", null],
              ].map(([label, val, href], i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--brass-500)",
                    }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: "var(--brass-500)",
                        textDecoration: "none",
                      }}
                    >
                      {val}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: "var(--cream-100)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {val}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Reservation form */}
          <div
            style={{
              background: "var(--charcoal-800)",
              border: "1px solid var(--border-dark)",
              borderRadius: 4,
              padding: "40px 36px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <Eyebrow>Reservieren</Eyebrow>
              <BrassRule />
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 30,
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--cream-100)",
                  margin: 0,
                }}
              >
                Tisch sichern —{" "}
                <span style={{ fontStyle: "italic", color: "var(--brass-300)" }}>
                  jetzt buchen
                </span>
                .
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--ash-300)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Spontane Gäste willkommen. Wir setzen Gäste bis kurz vor Mitternacht
                an den Tisch.
              </p>
            </div>
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
