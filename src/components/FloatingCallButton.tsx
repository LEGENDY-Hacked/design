"use client";

import { useState, useEffect } from "react";

export default function FloatingCallButton() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => !p), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <a
      href="tel:064219338996"
      aria-label="Anrufen 06421 9338996"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 60,
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "var(--charcoal-800)",
        color: "var(--brass-500)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 12px 36px rgba(0,0,0,0.55), 0 0 0 1px var(--brass-600), ${
          pulse ? "0 0 0 12px rgba(201,169,97,0.0)" : "0 0 0 0px rgba(201,169,97,0.2)"
        }`,
        transition: "box-shadow 2200ms cubic-bezier(0.16, 1, 0.3, 1)",
        textDecoration: "none",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    </a>
  );
}
