"use client";

import { useLang } from "@/lib/LangContext";

const icons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary/60" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary/60" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary/60" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary/60" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
];

export default function TrustStrip() {
  const { t } = useLang();

  return (
    <section className="bg-secondary/60" aria-label="Klíčové hodnoty">
      <div className="container-max section-px">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {t.trust.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start px-2 py-8 md:px-6 md:py-12 ${
                idx < t.trust.length - 1 ? "border-r border-border/60" : ""
              }`}
            >
              <div className="mb-3">{icons[idx]}</div>
              <div className="mb-0.5 font-body text-sm font-semibold text-foreground">
                {item.line1}
              </div>
              <div className="label-eyebrow text-[0.54rem] text-muted-foreground">
                {item.line2}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
