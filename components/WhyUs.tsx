"use client";

import { useLang } from "@/lib/LangContext";

export default function WhyUs() {
  const { t } = useLang();
  const w = t.whyUs;

  return (
    <section
      id="proc-my"
      className="bg-background py-16 md:py-28"
      aria-label={w.aria}
    >
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-12 border-t border-border pt-10 md:mb-16">
          <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
            {w.eyebrow}
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-sm text-4xl text-foreground md:text-5xl">
              {w.heading}
            </h2>
            <p className="max-w-sm text-base text-muted-foreground">
              {w.subtext}
            </p>
          </div>
        </div>

        {/* Reasons — left-border accent cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {w.reasons.map((r, idx) => (
            <div
              key={idx}
              className="border-l-2 border-primary/30 bg-secondary/40 py-7 pl-6 pr-5 transition-colors hover:border-primary/55"
            >
              <span className="label-eyebrow mb-4 block text-[0.54rem] text-primary/60">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2.5 text-xl text-foreground">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
