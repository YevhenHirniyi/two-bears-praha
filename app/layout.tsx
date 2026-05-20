import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Two Bears Renovations | Rekonstrukce bytů Praha na klíč",
  description:
    "Kompletní rekonstrukce bytů v Praze na klíč — od návrhu až po předání hotového bytu. Pevná cena, vlastní pracovní parta, zkušenosti s desítkami pražských bytů.",
  keywords:
    "rekonstrukce bytu Praha, rekonstrukce koupelny Praha, rekonstrukce kuchyně Praha, bytová rekonstrukce na klíč, stavební firma Praha",
  openGraph: {
    title: "Two Bears Renovations | Rekonstrukce bytů Praha na klíč",
    description:
      "Kompletní rekonstrukce bytů v Praze. Pevná cena, jeden kontakt, termín dodržíme.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
