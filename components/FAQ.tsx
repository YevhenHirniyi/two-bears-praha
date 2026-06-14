"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-body text-sm font-medium text-foreground md:text-base">
          {q}
        </span>
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 10 10" fill="none" className="h-3 w-3">
            <path
              d="M5 1v8M1 5h8"
              stroke={open ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 pr-8 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;

  return (
    <section
      id="faq"
      className="bg-background py-16 md:py-28"
      aria-label={f.aria}
    >
      <div className="container-max section-px">
        <div className="grid gap-14 md:grid-cols-[1fr_1.7fr]">
          {/* Left */}
          <div>
            <p className="label-eyebrow mb-4 text-[0.6rem] text-muted-foreground">
              {f.eyebrow}
            </p>
            <h2 className="mb-5 text-4xl text-foreground md:text-5xl">
              {f.heading}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {f.phoneTextBefore}{" "}
              <a
                href="tel:+420776219323"
                className="text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                +420 776 219 323
              </a>{" "}
              {f.phoneTextAfter}
            </p>
            <a
              href="#kontakt"
              className="label-eyebrow inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85"
            >
              {f.cta}
            </a>
          </div>

          {/* Right: accordion */}
          <div className="divide-y divide-border/50">
            {f.items.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
