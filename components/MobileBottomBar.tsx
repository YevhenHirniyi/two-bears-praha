"use client";

import { useLang } from "@/lib/LangContext";

export default function MobileBottomBar() {
  const { t } = useLang();
  const mb = t.mobileBar;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background shadow-[0_-6px_20px_-10px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href="tel:+420776219323"
        className="label-eyebrow flex items-center justify-center gap-2 py-4 text-[0.66rem] text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
        aria-label={mb.callAria}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        +420 776 219 323
      </a>
      <a
        href="#kontakt"
        className="label-eyebrow flex items-center justify-center gap-2 bg-foreground py-4 text-[0.66rem] text-background transition-opacity hover:opacity-85"
      >
        {mb.cta}
      </a>
    </div>
  );
}
