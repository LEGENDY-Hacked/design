"use client";

import { useState, useEffect } from "react";
import { Button } from "./primitives";

interface NavProps {
  onReserve: () => void;
}

export default function Nav({ onReserve }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Speisekarte", href: "#dishes" },
    { label: "Geschichte", href: "#story" },
    { label: "Frühstück", href: "#breakfast" },
    { label: "Besuchen", href: "#visit" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "20px 48px",
        background: scrolled ? "rgba(14, 11, 10, 0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-dark)"
          : "1px solid transparent",
        transition:
          "background 400ms ease-out, border-color 400ms ease-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Brand */}
      <a
        href="#top"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          textDecoration: "none",
        }}
      >
        <img
          src="/logos/brand-monogram.png"
          alt="Nurettin Usta — Lezzet-i Mangal"
          style={{ width: 44, height: 44, objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 500,
            color: "var(--cream-100)",
            letterSpacing: "-0.01em",
          }}
        >
          Lezzet-
          <span style={{ color: "var(--ember-500)", fontStyle: "italic" }}>i</span>{" "}
          Mangal
        </span>
      </a>

      {/* Desktop links */}
      <div
        className="nav-links-desktop"
        style={{ display: "flex", alignItems: "center", gap: 40 }}
      >
        {links.map((l) => (
          <NavLink key={l.href} href={l.href} label={l.label} />
        ))}
      </div>

      <div className="nav-reserve-desktop">
        <Button onClick={onReserve} size="sm">
          Reservieren
        </Button>
      </div>

      {/* Mobile burger */}
      <button
        className="nav-burger"
        style={{
          background: "transparent",
          border: 0,
          cursor: "pointer",
          padding: 8,
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
        onClick={() => setOpen(!open)}
        aria-label="Menü öffnen"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 24,
              height: 1.5,
              background: "var(--cream-100)",
              transition: "transform 300ms ease-out, opacity 300ms ease-out",
              transform:
                open && i === 0
                  ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : open && i === 1
                  ? "scaleX(0)"
                  : open && i === 2
                  ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none",
              opacity: open && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(14,11,10,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-dark)",
            padding: "24px 24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cream-100)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid var(--border-dark)",
                display: "block",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: 20 }}>
            <Button
              onClick={() => {
                setOpen(false);
                onReserve();
              }}
            >
              Reservieren
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: hover ? "var(--brass-500)" : "var(--cream-100)",
        textDecoration: "none",
        opacity: hover ? 1 : 0.85,
        transition: "opacity 200ms ease-out, color 200ms ease-out",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </a>
  );
}
