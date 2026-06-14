"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { useLang } from "@/lib/LangContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function CookieBanner() {
  const { t } = useLang();
  const ck = t.cookie;
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored !== null) {
      setConsent(stored === "accepted");
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent(true);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent(false);
  }

  return (
    <>
      {consent === true && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Souhlas s cookies"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-background/10 bg-foreground"
        >
          <div className="container-max section-px flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-body text-sm leading-relaxed text-background/65">
              {ck.text}{" "}
              <a
                href="/ochrana-osobnich-udaju"
                className="text-background/80 underline underline-offset-2 transition-colors hover:text-background"
              >
                {ck.learnMore}
              </a>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={reject}
                className="label-eyebrow border border-background/20 px-5 py-2.5 text-[0.65rem] text-background/55 transition-colors hover:border-background/40 hover:text-background/80"
              >
                {ck.reject}
              </button>
              <button
                onClick={accept}
                className="label-eyebrow bg-primary px-6 py-2.5 text-[0.65rem] text-primary-foreground transition-colors hover:bg-primary/85"
              >
                {ck.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
