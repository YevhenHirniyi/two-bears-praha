import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { LangProvider } from "@/lib/LangContext";
import CookieBanner from "@/components/CookieBanner";
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
  title: "Two Bears Renovation | Rekonstrukce, fasády a terasy Praha",
  description:
    "Kompletní rekonstrukce, fasády, terasy a stavební realizace v Praze a okolí do 100 km. Pevná cena, ověření řemeslníci, jeden kontakt od prvního měření po předání.",
  keywords:
    "rekonstrukce Praha, fasády Praha, terasy Praha, stavební firma Praha, kompletní rekonstrukce na klíč, rekonstrukce bytu Praha, stavební práce Praha",
  openGraph: {
    title: "Two Bears Renovation | Rekonstrukce, fasády a terasy Praha",
    description:
      "Rekonstrukce, fasády, terasy a stavební realizace v Praze. Pevná cena, jeden kontakt, termín dodržíme.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <LangProvider>
          {children}
          <CookieBanner />
        </LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
