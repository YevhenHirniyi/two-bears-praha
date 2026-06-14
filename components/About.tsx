"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";

const featureIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section
      id="o-nas"
      className="overflow-hidden bg-background"
      aria-label={a.aria}
    >
      <div className="container-max">
        <div className="grid md:grid-cols-2">
          {/* Left: tall image */}
          <div className="relative min-h-[320px] md:min-h-[560px]">
            <Image
              src="/photos/praha-stodulky-a/1.jpeg"
              alt={a.imgAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-foreground/6" />
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center section-px py-16 md:py-28 md:pl-14 lg:pl-20">
            <p className="label-eyebrow mb-4 text-[0.6rem] text-muted-foreground">
              {a.eyebrow}
            </p>
            <h2 className="mb-6 text-4xl leading-tight text-foreground md:text-5xl">
              {a.heading}{" "}
              <em className="font-light italic">{a.headingEm}</em>
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {a.p1}
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {a.p2}
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {a.p3}
            </p>
            <p className="mb-8 text-base font-medium leading-relaxed text-primary">
              {a.tagline}
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 shrink-0 bg-border" aria-hidden="true" />
              <span className="label-eyebrow text-[0.54rem] tracking-[0.15em] text-muted-foreground/60">
                {a.footerLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-px border-t border-border/40 bg-border/20 md:grid-cols-4">
          {a.features.map((f, idx) => (
            <div key={idx} className="flex flex-col gap-3 bg-background px-6 py-8 md:px-8 md:py-10">
              {featureIcons[idx]}
              <h3 className="label-eyebrow text-[0.58rem] tracking-[0.14em] text-foreground">
                {f.title.toUpperCase()}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
