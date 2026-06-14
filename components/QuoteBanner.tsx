"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";

export default function QuoteBanner() {
  const { t } = useLang();
  const q = t.quoteBanner;

  return (
    <section
      className="relative h-[55vh] overflow-hidden md:h-[65vh]"
      aria-label={q.aria}
    >
      <Image
        src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=2000&q=80"
        alt={q.imgAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/60 to-foreground/75" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Large typographic quote mark */}
        <div
          className="mb-2 select-none font-display text-[8rem] leading-none text-primary-foreground/15 md:text-[12rem]"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote className="-mt-8 max-w-3xl text-center md:-mt-12">
          <p className="text-[clamp(1.5rem,4vw,3.25rem)] leading-snug text-primary-foreground md:leading-tight">
            {q.quoteP1}{" "}
            <em className="font-light italic">{q.quoteEm}</em>
          </p>
        </blockquote>

        <div className="mt-8 flex items-center gap-5">
          <div className="h-px w-8 bg-primary-foreground/30" aria-hidden="true" />
          <a
            href="#kontakt"
            className="label-eyebrow inline-flex items-center gap-2 border border-primary-foreground/40 px-7 py-3 text-[0.65rem] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {q.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
          <div className="h-px w-8 bg-primary-foreground/30" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
