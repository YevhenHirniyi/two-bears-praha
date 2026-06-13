"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["Vše", "Rekonstrukce", "Koupelny"] as const;
type Filter = (typeof filters)[number];

const projects: {
  title: string;
  location: string;
  category: Exclude<Filter, "Vše">;
  images: string[];
  imageAlt: string;
}[] = [
  {
    title: "Rekonstrukce bytu",
    location: "Praha 12",
    category: "Rekonstrukce",
    images: [1, 2, 3, 4].map((i) => `/photos/praha-12-a/${i}.jpeg`),
    imageAlt: "Rekonstrukce bytu Praha 12",
  },
  {
    title: "Rekonstrukce bytu 3+kk",
    location: "Praha 12",
    category: "Rekonstrukce",
    images: [1, 2, 3, 4].map((i) => `/photos/praha-12-b/${i}.jpeg`),
    imageAlt: "Rekonstrukce bytu 3+kk Praha 12",
  },
  {
    title: "Kompletní rekonstrukce",
    location: "Praha 12",
    category: "Rekonstrukce",
    images: [1, 2, 4].map((i) => `/photos/praha-12-c/${i}.jpeg`),
    imageAlt: "Kompletní rekonstrukce bytu Praha 12",
  },
  {
    title: "Rekonstrukce bytu",
    location: "Praha 4",
    category: "Rekonstrukce",
    images: [1, 2, 4, 6].map((i) => `/photos/praha-4/${i}.jpeg`),
    imageAlt: "Rekonstrukce bytu Praha 4",
  },
  {
    title: "Rekonstrukce bytu",
    location: "Praha 8, Střížkov",
    category: "Rekonstrukce",
    images: [1, 2, 3, 4].map((i) => `/photos/praha-8-strizkov/${i}.jpeg`),
    imageAlt: "Rekonstrukce bytu Praha 8 Střížkov",
  },
  {
    title: "Rekonstrukce bytu",
    location: "Praha, Stodůlky",
    category: "Rekonstrukce",
    images: [1, 3, 6, 9].map((i) => `/photos/praha-stodulky-a/${i}.jpeg`),
    imageAlt: "Rekonstrukce bytu Praha Stodůlky",
  },
  {
    title: "Kompletní rekonstrukce",
    location: "Praha, Stodůlky",
    category: "Rekonstrukce",
    images: [1, 3, 6, 8].map((i) => `/photos/praha-stodulky-b/${i}.jpeg`),
    imageAlt: "Kompletní rekonstrukce bytu Praha Stodůlky",
  },
  {
    title: "Rekonstrukce bytu",
    location: "Měšice u Prahy",
    category: "Rekonstrukce",
    images: [1, 2, 4].map((i) => `/photos/mesice-u-prahy/${i}.jpeg`),
    imageAlt: "Rekonstrukce bytu Měšice u Prahy",
  },
  {
    title: "Rekonstrukce koupelny",
    location: "Měšice u Prahy",
    category: "Koupelny",
    images: [1, 2, 3].map((i) => `/photos/mesice-koupelna/${i}.jpeg`),
    imageAlt: "Rekonstrukce koupelny Měšice u Prahy",
  },
  {
    title: "Rekonstrukce koupelny",
    location: "Praha 8, Střížkov",
    category: "Koupelny",
    images: [1, 2, 4].map((i) => `/photos/strizkov-koupelna/${i}.jpeg`),
    imageAlt: "Rekonstrukce koupelny Praha 8 Střížkov",
  },
  {
    title: "Rekonstrukce koupelny",
    location: "Praha, Stodůlky",
    category: "Koupelny",
    images: [1, 2, 3].map((i) => `/photos/stodulky-koupelna/${i}.jpeg`),
    imageAlt: "Rekonstrukce koupelny Praha Stodůlky",
  },
  {
    title: "Rekonstrukce bytu",
    location: "Chomutov",
    category: "Rekonstrukce",
    images: [1, 3, 5, 7].map((i) => `/photos/chomutov/${i}.jpeg`),
    imageAlt: "Rekonstrukce bytu Chomutov",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % total);
  };

  return (
    <article className="group relative cursor-pointer overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
        <Image
          src={project.images[index]}
          alt={project.imageAlt}
          fill
          className="object-cover transition-all duration-700 md:group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Prev / Next arrows — show when multiple images */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Předchozí foto"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/50 p-2 text-background opacity-0 transition-opacity duration-200 hover:bg-foreground/80 group-hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Další foto"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/50 p-2 text-background opacity-0 transition-opacity duration-200 hover:bg-foreground/80 group-hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-14 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 md:bottom-16">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                  aria-label={`Foto ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === index ? "w-4 bg-background" : "w-1.5 bg-background/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end bg-foreground/55 p-6 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
        <div>
          <h3 className="mb-1 text-xl text-background">{project.title}</h3>
          <p className="label-eyebrow text-[0.58rem] text-background/55">
            {project.location}
          </p>
        </div>
      </div>
      {/* Always-visible label on mobile */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 to-transparent p-5 md:hidden">
        <h3 className="text-base text-background">{project.title}</h3>
        <p className="label-eyebrow text-[0.56rem] text-background/55">{project.location}</p>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("Vše");

  const visible =
    active === "Vše" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="realizace"
      className="bg-foreground py-16 text-background md:py-28"
      aria-label="Naše realizace"
    >
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-eyebrow mb-3 text-[0.6rem] text-background/40">
              Praha a okolí · realizace
            </p>
            <h2 className="max-w-xl text-4xl text-background md:text-5xl">
              Naše práce mluví za nás.
            </h2>
          </div>
          <p className="max-w-sm text-base text-background/50">
            Podívejte se na projekty, které jsme dokončili pro naše klienty. Každá realizace je pro nás závazek — dbáme na detail a čisté provedení.
          </p>
        </div>

        {/* Filter tabs — underline indicator style */}
        <div className="mb-10 flex overflow-x-auto border-b border-background/15">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`label-eyebrow shrink-0 border-b-2 px-5 py-3 text-[0.63rem] transition-all duration-200 ${
                active === f
                  ? "border-background text-background"
                  : "border-transparent text-background/38 hover:text-background/65"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={`${project.title}-${project.location}`} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="label-eyebrow inline-flex items-center gap-2 border border-background/25 px-8 py-3.5 text-[0.68rem] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            Domluvit konzultaci
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
