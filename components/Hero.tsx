"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-foreground"
      style={{ height: "100svh" }}
      aria-label="Úvod"
    >
      <Image
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85"
        alt="Luxusní rekonstrukce bytu Praha – moderní interiér po rekonstrukci"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Cinematic bottom-up overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/45 to-foreground/10" />

      {/* Content — vertically centered, left-anchored */}
      <div
        className="relative z-10 flex h-full flex-col justify-center section-px"
        style={{ paddingTop: "var(--header-height)" }}
      >
        <div className="max-w-xl">
          {/* Decorative eyebrow row */}
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-10 shrink-0 bg-primary-foreground/35" aria-hidden="true" />
            <p className="label-eyebrow text-[0.58rem] tracking-[0.16em] text-primary-foreground/50">
              Rekonstrukce bytů Praha na klíč
            </p>
          </div>

          <h1 className="mb-9 text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.88] tracking-tight text-primary-foreground">
            Kompletní rekonstrukce bytu{" "}
            <em className="font-light italic">na klíč.</em>
          </h1>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <a
              href="#kontakt"
              className="label-eyebrow inline-flex items-center justify-center border border-primary-foreground/50 px-8 py-3.5 text-[0.68rem] text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground hover:text-foreground"
            >
              Domluvit nezávaznou konzultaci
            </a>
            <a
              href="#realizace"
              className="label-eyebrow group inline-flex items-center gap-2 py-1.5 text-[0.68rem] text-primary-foreground/55 transition-colors hover:text-primary-foreground"
            >
              <span className="border-b border-primary-foreground/25 pb-0.5 transition-colors group-hover:border-primary-foreground/55">
                Prohlédnout realizace
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Vertical studio label — right edge */}
      <div
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 opacity-30 md:right-10 md:flex lg:right-14"
        aria-hidden="true"
      >
        <div className="h-16 w-px bg-primary-foreground" />
        <span
          className="label-eyebrow text-[0.44rem] text-primary-foreground"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
        >
          Praha · Rekonstrukce · 2016
        </span>
        <div className="h-16 w-px bg-primary-foreground" />
      </div>
    </section>
  );
}
