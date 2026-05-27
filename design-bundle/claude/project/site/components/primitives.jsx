// Shared primitives for the Lezzet-i Mangal website.
// Exports: Button, GhostButton, Eyebrow, BrassRule, Stars, PhotoFrame, Section

const primitiveStyles = {
  btn: {
    fontFamily: "var(--font-body)",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    padding: "16px 32px",
    borderRadius: 2,
    border: 0,
    cursor: "pointer",
    transition: "background 200ms ease-out, color 200ms ease-out, border-color 200ms ease-out",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

function Button({ children, onClick, size = "md", as = "button", href, ...rest }) {
  const sizeMap = {
    sm: { padding: "12px 22px", fontSize: 12 },
    md: { padding: "16px 32px", fontSize: 13 },
    lg: { padding: "20px 40px", fontSize: 14 },
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...primitiveStyles.btn,
    ...sizeMap[size],
    background: hover ? "var(--brass-300)" : "var(--brass-500)",
    color: "var(--charcoal-900)",
    boxShadow: "inset 0 1px 0 rgba(255,232,180,0.5), 0 1px 0 rgba(0,0,0,0.3)",
  };
  const Tag = as;
  return (
    <Tag style={style} onClick={onClick} href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </Tag>
  );
}

function GhostButton({ children, onClick, size = "md", as = "button", href, dark = true, ...rest }) {
  const sizeMap = {
    sm: { padding: "11px 21px", fontSize: 12 },
    md: { padding: "15px 31px", fontSize: 13 },
    lg: { padding: "19px 39px", fontSize: 14 },
  };
  const [hover, setHover] = React.useState(false);
  const fg = dark ? "var(--cream-100)" : "var(--charcoal-900)";
  const fgHover = dark ? "var(--cream-50)" : "var(--charcoal-900)";
  const borderBase = dark ? "rgba(245,237,224,0.4)" : "rgba(14,11,10,0.4)";
  const borderHover = dark ? "var(--cream-100)" : "var(--charcoal-900)";
  const style = {
    ...primitiveStyles.btn,
    ...sizeMap[size],
    background: "transparent",
    color: hover ? fgHover : fg,
    border: `1px solid ${hover ? borderHover : borderBase}`,
  };
  const Tag = as;
  return (
    <Tag style={style} onClick={onClick} href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children, color, style }) {
  return (
    <div style={{
      fontFamily: "var(--font-label)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: color || "var(--brass-500)",
      lineHeight: 1,
      ...style,
    }}>{children}</div>
  );
}

function BrassRule({ width = 40, color, style }) {
  return (
    <div style={{
      width,
      height: 1,
      background: color || "var(--brass-500)",
      ...style,
    }} />
  );
}

function Star({ size = 14, color = "var(--brass-500)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5 14.97 8.52 21.6 9.49l-4.8 4.68 1.13 6.6L12 17.66 6.07 20.77 7.2 14.17 2.4 9.49l6.63-.97z" fill={color} />
    </svg>
  );
}

function Stars({ count = 5, size = 14, gap = 2 }) {
  return (
    <div style={{ display: "inline-flex", gap, alignItems: "center" }}>
      {Array.from({ length: count }, (_, i) => <Star key={i} size={size} />)}
    </div>
  );
}

// Real Unsplash photography keyed by mood. Gradient placeholders
// remain as a graceful fallback if any image fails to load.
const PHOTO_LIBRARY = {
  // Hero — lamb being turned on charcoal embers
  "fire":             "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=2200&q=85&auto=format&fit=crop",
  "fire-alt":         "https://images.unsplash.com/photo-1544025162-d76694265947?w=2200&q=85&auto=format&fit=crop",
  // Signature dishes
  "lamb-skewer":      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1400&q=85&auto=format&fit=crop",
  "adana":            "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1400&q=85&auto=format&fit=crop",
  "chicken-skewer":   "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=1400&q=85&auto=format&fit=crop",
  "kunefe":           "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1400&q=85&auto=format&fit=crop",
  // Breakfast
  "breakfast":        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=2200&q=85&auto=format&fit=crop",
  "breakfast-spread": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1600&q=85&auto=format&fit=crop",
  "menemen":          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=85&auto=format&fit=crop",
  "soup":             "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=85&auto=format&fit=crop",
  // Wrap & on-the-go
  "wrap":             "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1400&q=85&auto=format&fit=crop",
  "doner":            "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=1400&q=85&auto=format&fit=crop",
  "pide":             "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1400&q=85&auto=format&fit=crop",
  // Atmosphere
  "tea":              "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=1400&q=85&auto=format&fit=crop",
  "embers":           "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=1600&q=85&auto=format&fit=crop",
  "interior":         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85&auto=format&fit=crop",
  "chef":             "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=85&auto=format&fit=crop",
  "bread":            "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=1400&q=85&auto=format&fit=crop",
  "mezze":            "https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=1400&q=85&auto=format&fit=crop",
  "grill-closeup":    "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1600&q=85&auto=format&fit=crop",
  "hands":            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2200&q=85&auto=format&fit=crop",
  "map":              null,
};

// Photographic frame. Renders a real Unsplash photo on top of an
// ember-lit gradient. If the image fails to load, the gradient remains.
function PhotoFrame({ caption, mood = "lamb-skewer", aspect = "4 / 3", src, position = "center", style, children }) {
  const [loaded, setLoaded] = React.useState(false);
  const [errored, setErrored] = React.useState(false);
  const photoUrl = src !== undefined ? src : PHOTO_LIBRARY[mood];

  // mood -> background gradient palette
  const moods = {
    "lamb-skewer": `radial-gradient(ellipse at 30% 70%, rgba(226,88,34,0.55), transparent 55%),
                    radial-gradient(ellipse at 70% 30%, rgba(192,57,43,0.4), transparent 50%),
                    linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
    "adana":       `radial-gradient(ellipse at 50% 65%, rgba(192,57,43,0.65), transparent 50%),
                    radial-gradient(ellipse at 20% 30%, rgba(232,123,74,0.35), transparent 55%),
                    linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
    "chicken-skewer": `radial-gradient(ellipse at 40% 60%, rgba(232,198,139,0.45), transparent 55%),
                       radial-gradient(ellipse at 75% 40%, rgba(226,88,34,0.35), transparent 50%),
                       linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
    "kunefe":      `radial-gradient(ellipse at 50% 60%, rgba(232,198,139,0.55), transparent 55%),
                    radial-gradient(ellipse at 35% 35%, rgba(192,57,43,0.25), transparent 50%),
                    linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
    "breakfast":   `radial-gradient(ellipse at 50% 50%, rgba(232,198,139,0.35), transparent 65%),
                    radial-gradient(ellipse at 25% 25%, rgba(226,88,34,0.25), transparent 50%),
                    radial-gradient(ellipse at 75% 75%, rgba(176,141,74,0.3), transparent 50%),
                    linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
    "fire":        `radial-gradient(ellipse at 50% 100%, rgba(232,123,74,0.85), transparent 50%),
                    radial-gradient(ellipse at 50% 85%, rgba(226,88,34,0.7), transparent 35%),
                    radial-gradient(ellipse at 30% 40%, rgba(192,57,43,0.4), transparent 55%),
                    linear-gradient(180deg, #0E0B0A 0%, #1a0a05 70%, #2a0d04 100%)`,
    "tea":         `radial-gradient(ellipse at 50% 60%, rgba(232,123,74,0.45), transparent 50%),
                    linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
    "wrap":        `radial-gradient(ellipse at 45% 55%, rgba(232,198,139,0.4), transparent 55%),
                    radial-gradient(ellipse at 70% 35%, rgba(192,57,43,0.3), transparent 50%),
                    linear-gradient(135deg, #1a130f 0%, #0E0B0A 100%)`,
    "map":         `linear-gradient(135deg, #231C18 0%, #0E0B0A 100%)`,
  };
  return (
    <div style={{
      position: "relative",
      aspectRatio: aspect,
      width: "100%",
      background: moods[mood] || moods["lamb-skewer"],
      overflow: "hidden",
      ...style,
    }}>
      {photoUrl && !errored && (
        <img
          src={photoUrl}
          alt={caption || ""}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: position,
            opacity: loaded ? 1 : 0,
            transition: "opacity 800ms var(--ease-cinema)",
            filter: "saturate(1.05) contrast(1.05)",
          }}
        />
      )}
      {/* warm color grade on top of photo */}
      {photoUrl && !errored && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(14,11,10,0.05) 0%, rgba(14,11,10,0.18) 100%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }} />
      )}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('design-system/assets/textures/grain.svg')",
        backgroundSize: "240px 240px",
        opacity: errored ? 0.18 : 0.08,
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }} />
      {caption && (
        <div style={{
          position: "absolute", bottom: 14, left: 16,
          fontFamily: "var(--font-body)", fontSize: 10,
          letterSpacing: "0.2em", textTransform: "uppercase",
          fontStyle: "italic",
          color: "rgba(245,237,224,0.55)",
          textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          zIndex: 2,
        }}>{caption}</div>
      )}
      {children}
    </div>
  );
}

function Section({ children, dark = true, narrow = false, style, ...rest }) {
  return (
    <section style={{
      background: dark ? "var(--charcoal-900)" : "var(--cream-50)",
      color: dark ? "var(--cream-100)" : "var(--charcoal-900)",
      padding: "128px 48px",
      position: "relative",
      ...style,
    }} {...rest}>
      <div style={{
        maxWidth: narrow ? 720 : 1280,
        margin: "0 auto",
        position: "relative",
      }}>{children}</div>
    </section>
  );
}

Object.assign(window, { Button, GhostButton, Eyebrow, BrassRule, Star, Stars, PhotoFrame, Section });
