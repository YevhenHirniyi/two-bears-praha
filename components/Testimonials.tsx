"use client";

import { useLang } from "@/lib/LangContext";

export default function Testimonials() {
  const { t } = useLang();
  const tm = t.testimonials;

  return (
    <section
      className="bg-secondary/40 py-16 md:py-28"
      aria-label={tm.aria}
    >
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-10 border-t border-border pt-10 md:mb-12">
          <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
            {tm.eyebrow}
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl text-foreground md:text-5xl">{tm.heading}</h2>
            <p className="max-w-sm text-base text-muted-foreground">
              {tm.subtext}
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mb-10 grid grid-cols-2 gap-px border border-border/40 bg-border/20 md:grid-cols-4">
          {tm.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center bg-secondary/40 px-4 py-6 text-center md:py-8">
              <div className="mb-1 font-display text-xl text-foreground md:text-2xl">{s.value}</div>
              <div className="label-eyebrow text-[0.52rem] text-muted-foreground">{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {tm.items.map((item, idx) => (
            <blockquote
              key={idx}
              className="relative overflow-hidden bg-card p-8 md:p-10"
            >
              {/* Decorative large quote mark */}
              <div
                className="mb-1 select-none font-display text-[5rem] leading-none text-border/70"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="mb-5 flex gap-0.5" aria-label={tm.ratingAria}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 16 16"
                    className="h-3 w-3 fill-primary"
                    aria-hidden="true"
                  >
                    <path d="M8 1.5l1.55 3.6 3.95.57-2.86 2.78.67 3.93L8 10.27l-3.31 1.81.67-3.93L2.5 5.67l3.95-.57L8 1.5z" />
                  </svg>
                ))}
              </div>

              <p className="mb-8 font-display text-lg italic leading-relaxed text-foreground/80 md:text-xl">
                &bdquo;{item.quote}&ldquo;
              </p>

              <footer className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/8">
                  <span className="label-eyebrow text-[0.55rem] text-primary/70">
                    {item.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold leading-tight text-foreground">
                    {item.name}
                  </p>
                  <p className="label-eyebrow text-[0.5rem] text-muted-foreground/70">
                    {item.project}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-border/50 pt-12 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="mb-1 text-xl text-foreground md:text-2xl">
              {tm.ctaHeading}
            </p>
            <p className="text-sm text-muted-foreground">
              {tm.ctaSubtext}
            </p>
          </div>
          <a
            href="#kontakt"
            className="label-eyebrow inline-flex shrink-0 items-center gap-2 bg-foreground px-8 py-3.5 text-[0.68rem] text-background transition-opacity hover:opacity-85"
          >
            {tm.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
