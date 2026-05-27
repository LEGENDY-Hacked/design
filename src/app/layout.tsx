import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lezzet-i Mangal — Wo Feuer auf Tradition trifft · Marburg",
  description:
    "Authentischer türkischer Holzkohlegrill, nur wenige Schritte vom Marburger Hauptbahnhof. Täglich 9:00–24:00 geöffnet. Tisch reservieren oder anrufen unter 06421 9338996.",
  icons: {
    icon: "/logos/brand-monogram.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
