"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["Vše", "Byty", "Koupelny", "Kuchyně"] as const;
type Filter = (typeof filters)[number];

const projects: {
  title: string;
  location: string;
  category: Exclude<Filter, "Vše">;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: "Rekonstrukce bytu 2+kk",
    location: "Praha, Vinohrady",
    category: "Byty",
    image: "/photos/p2-living.jpg",
    imageAlt: "Rekonstrukce obývacího pokoje ve 2+kk na Vinohradech",
  },
  {
    title: "Kompletní rekonstrukce",
    location: "Praha, Vinohrady",
    category: "Byty",
    image: "/photos/p4-empty.jpg",
    imageAlt: "Kompletní rekonstrukce bytu na Vinohradech — světlý pokoj s parkety",
  },
  {
    title: "Rekonstrukce koupelny",
    location: "Praha, Smíchov",
    category: "Koupelny",
    image: "/photos/p7-bath-detail.png",
    imageAlt: "Rekonstrukce koupelny na Smíchově — tyrkysové obklady, zlaté armatury",
  },
  {
    title: "Rekonstrukce kuchyně",
    location: "Praha, Holešovice",
    category: "Kuchyně",
    image: "/photos/p8-kitchen.jpg",
    imageAlt: "Rekonstrukce kuchyně v Holešovicích — luxusní provedení s mramorovou podlahou",
  },
  {
    title: "Rekonstrukce bytu 3+kk",
    location: "Praha, Nusle",
    category: "Byty",
    image: "/photos/p1-hallway.jpg",
    imageAlt: "Rekonstrukce bytu 3+kk v Nuslích — chodba s leštěnou podlahou a LED osvětlením",
  },
  {
    title: "Generální rekonstrukce",
    location: "Praha, Dejvice",
    category: "Byty",
    image: "/photos/p5-marble.jpg",
    imageAlt: "Generální rekonstrukce prostorného bytu v Dejvicích — velký prostor s mramorovou podlahou",
  },
];

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
              Rekonstrukce bytů Praha – realizace
            </p>
            <h2 className="max-w-xl text-4xl text-background md:text-5xl">
              Naše realizace
            </h2>
          </div>
          <p className="max-w-sm text-base text-background/50">
            Prohlédněte si naše dokončené rekonstrukce bytů v Praze — od
            kompletních přestaveb po dílčí rekonstrukce koupelen a kuchyní.
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

        {/* Grid — taller portrait cards */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={`${project.title}-${project.location}`}
              className="group relative cursor-pointer overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-foreground/55 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <h3 className="mb-1 text-xl text-background">
                    {project.title}
                  </h3>
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
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="label-eyebrow inline-flex items-center gap-2 border border-background/25 px-8 py-3.5 text-[0.68rem] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            Konzultovat váš projekt
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
