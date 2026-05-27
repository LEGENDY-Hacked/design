"use client";

import React, { CSSProperties, useState } from "react";

// ── Shared photo library ──────────────────────────────────────────────────────
export const PHOTO_LIBRARY: Record<string, string | null> = {
  fire:              "/images/fire.jpg",
  "fire-alt":        "/images/fire-alt.jpg",
  "lamb-skewer":     "/images/lamb-skewer.jpg",
  adana:             "/images/adana.jpg",
  "chicken-skewer":  "/images/chicken-skewer.jpg",
  kunefe:            "/images/kunefe.jpg",
  breakfast:         "/images/breakfast.jpg",
  "breakfast-spread":"/images/breakfast.jpg",
  menemen:           "/images/menemen.jpg",
  soup:              "/images/soup.jpg",
  wrap:              "/images/wrap.jpg",
  doner:             "/images/doner.jpg",
  pide:              "/images/pide.jpg",
  tea:               "/images/tea.jpg",
  embers:            "/images/embers.jpg",
  interior:          "/images/interior.jpg",
  chef:              "/images/chef.jpg",
  bread:             "/images/bread.jpg",
  mezze:             "/images/mezze.jpg",
  "grill-closeup":   "/images/grill-closeup.jpg",
  hands:             "/images/hands.jpg",
  map:               null,
};

const MOOD_GRADIENTS: Record<string, string> = {
  "lamb-skewer": `radial-gradient(ellipse at 30% 70%, rgba(226,88,34,0.55), transparent 55%),
                  radial-gradient(ellipse at 70% 30%, rgba(192,57,43,0.4), transparent 50%),
                  linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
  adana:         `radial-gradient(ellipse at 50% 65%, rgba(192,57,43,0.65), transparent 50%),
                  radial-gradient(ellipse at 20% 30%, rgba(232,123,74,0.35), transparent 55%),
                  linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
  "chicken-skewer": `radial-gradient(ellipse at 40% 60%, rgba(232,198,139,0.45), transparent 55%),
                     radial-gradient(ellipse at 75% 40%, rgba(226,88,34,0.35), transparent 50%),
                     linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
  kunefe:        `radial-gradient(ellipse at 50% 60%, rgba(232,198,139,0.55), transparent 55%),
                  radial-gradient(ellipse at 35% 35%, rgba(192,57,43,0.25), transparent 50%),
                  linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
  breakfast:     `radial-gradient(ellipse at 50% 50%, rgba(232,198,139,0.35), transparent 65%),
                  radial-gradient(ellipse at 25% 25%, rgba(226,88,34,0.25), transparent 50%),
                  radial-gradient(ellipse at 75% 75%, rgba(176,141,74,0.3), transparent 50%),
                  linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
  fire:          `radial-gradient(ellipse at 50% 100%, rgba(232,123,74,0.85), transparent 50%),
                  radial-gradient(ellipse at 50% 85%, rgba(226,88,34,0.7), transparent 35%),
                  radial-gradient(ellipse at 30% 40%, rgba(192,57,43,0.4), transparent 55%),
                  linear-gradient(180deg, #0E0B0A 0%, #1a0a05 70%, #2a0d04 100%)`,
  tea:           `radial-gradient(ellipse at 50% 60%, rgba(232,123,74,0.45), transparent 50%),
                  linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
  wrap:          `radial-gradient(ellipse at 45% 55%, rgba(232,198,139,0.4), transparent 55%),
                  radial-gradient(ellipse at 70% 35%, rgba(192,57,43,0.3), transparent 50%),
                  linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
  map:           `linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
};

// ── PhotoFrame ────────────────────────────────────────────────────────────────
interface PhotoFrameProps {
  caption?: string;
  mood?: string;
  aspect?: string;
  src?: string | null;
  position?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export function PhotoFrame({
  caption,
  mood = "lamb-skewer",
  aspect = "4 / 3",
  src,
  position = "center",
  style,
  children,
}: PhotoFrameProps) {
  const photoUrl = src !== undefined ? src : PHOTO_LIBRARY[mood];
  const bg = MOOD_GRADIENTS[mood] || MOOD_GRADIENTS["lamb-skewer"];

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: aspect,
        width: "100%",
        background: bg,
        overflow: "hidden",
        ...style,
      }}
    >
      {photoUrl && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${photoUrl})`,
            backgroundSize: "cover",
            backgroundPosition: position,
            filter: "saturate(1.05) contrast(1.05)",
          }}
        />
      )}
      {photoUrl && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(14,11,10,0.05) 0%, rgba(14,11,10,0.18) 100%)",
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/textures/grain.svg')",
          backgroundSize: "240px 240px",
          opacity: 0.08,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
      {caption && (
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 16,
            fontFamily: "var(--font-body)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontStyle: "italic",
            color: "rgba(245,237,224,0.55)",
            textShadow: "0 1px 8px rgba(0,0,0,0.6)",
            zIndex: 2,
          }}
        >
          {caption}
        </div>
      )}
      {children}
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────────────────────
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  as?: "button" | "a";
  href?: string;
}

export function Button({ children, onClick, size = "md", type = "button", as: Tag = "button", href }: ButtonProps) {
  const [hover, setHover] = useState(false);
  const sizeMap = {
    sm: { padding: "12px 22px", fontSize: 12 },
    md: { padding: "16px 32px", fontSize: 13 },
    lg: { padding: "20px 40px", fontSize: 14 },
  };
  const style: CSSProperties = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    borderRadius: 2,
    border: 0,
    cursor: "pointer",
    transition: "background 200ms ease-out",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    whiteSpace: "nowrap",
    background: hover ? "var(--brass-300)" : "var(--brass-500)",
    color: "var(--charcoal-900)",
    boxShadow: "inset 0 1px 0 rgba(255,232,180,0.5), 0 1px 0 rgba(0,0,0,0.3)",
    ...sizeMap[size],
  };
  if (Tag === "a") {
    return (
      <a style={style} href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {children}
      </a>
    );
  }
  return (
    <button style={style} type={type} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </button>
  );
}

// ── GhostButton ───────────────────────────────────────────────────────────────
interface GhostButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  as?: "button" | "a";
  href?: string;
}

export function GhostButton({ children, onClick, size = "md", dark = true, as: Tag = "button", href }: GhostButtonProps) {
  const [hover, setHover] = useState(false);
  const sizeMap = {
    sm: { padding: "11px 21px", fontSize: 12 },
    md: { padding: "15px 31px", fontSize: 13 },
    lg: { padding: "19px 39px", fontSize: 14 },
  };
  const fg = dark ? "var(--cream-100)" : "var(--charcoal-900)";
  const fgHover = dark ? "var(--cream-50)" : "var(--charcoal-900)";
  const borderBase = dark ? "rgba(245,237,224,0.4)" : "rgba(14,11,10,0.4)";
  const borderHover = dark ? "var(--cream-100)" : "var(--charcoal-900)";
  const style: CSSProperties = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    borderRadius: 2,
    cursor: "pointer",
    transition: "color 200ms ease-out, border-color 200ms ease-out",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    whiteSpace: "nowrap",
    background: "transparent",
    color: hover ? fgHover : fg,
    border: `1px solid ${hover ? borderHover : borderBase}`,
    ...sizeMap[size],
  };
  if (Tag === "a") {
    return (
      <a style={style} href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {children}
      </a>
    );
  }
  return (
    <button style={style} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}
    </button>
  );
}

// ── Eyebrow ───────────────────────────────────────────────────────────────────
interface EyebrowProps {
  children: React.ReactNode;
  color?: string;
  style?: CSSProperties;
}
export function Eyebrow({ children, color, style }: EyebrowProps) {
  return (
    <div
      style={{
        fontFamily: "var(--font-label)",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: color || "var(--brass-500)",
        lineHeight: 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── BrassRule ─────────────────────────────────────────────────────────────────
interface BrassRuleProps {
  width?: number;
  color?: string;
  style?: CSSProperties;
}
export function BrassRule({ width = 40, color, style }: BrassRuleProps) {
  return (
    <div
      style={{
        width,
        height: 1,
        background: color || "var(--brass-500)",
        ...style,
      }}
    />
  );
}

// ── Stars ─────────────────────────────────────────────────────────────────────
export function Star({ size = 14, color = "var(--brass-500)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5 14.97 8.52 21.6 9.49l-4.8 4.68 1.13 6.6L12 17.66 6.07 20.77 7.2 14.17 2.4 9.49l6.63-.97z"
        fill={color}
      />
    </svg>
  );
}

export function Stars({ count = 5, size = 14, gap = 2 }: { count?: number; size?: number; gap?: number }) {
  return (
    <div style={{ display: "inline-flex", gap, alignItems: "center" }}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={size} />
      ))}
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
interface SectionProps {
  children: React.ReactNode;
  dark?: boolean;
  narrow?: boolean;
  style?: CSSProperties;
  id?: string;
}
export function Section({ children, dark = true, narrow = false, style, id }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        background: dark ? "var(--charcoal-900)" : "var(--cream-50)",
        color: dark ? "var(--cream-100)" : "var(--charcoal-900)",
        padding: "128px 48px",
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: narrow ? 720 : 1280,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {children}
      </div>
    </section>
  );
}
