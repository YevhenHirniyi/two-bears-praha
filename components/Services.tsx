import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Kompletní rekonstrukce bytu",
    description:
      "Generální rekonstrukce od návrhu po předání klíčů. Koordinujeme všechna řemesla, dodáváme pevnou cenu a garantujeme termín. Ideální pro byty 1+kk až 4+kk.",
    image: "/photos/p2-living.jpg",
    imageAlt: "Dokončená rekonstrukce obývacího pokoje v pražském bytě",
  },
  {
    num: "02",
    title: "Rekonstrukce koupelny",
    description:
      "Kompletní přestavba koupelny včetně obkladů, dlažby, instalatérských prací a nové elektroinstalace. Od malé koupelny po prostorné koupelno s vanou.",
    image: "/photos/p6-bath.jpg",
    imageAlt: "Nová koupelna po rekonstrukci — bílé obklady, vana, elegantní provedení",
  },
  {
    num: "03",
    title: "Rekonstrukce kuchyně",
    description:
      "Nová kuchyně na míru — bourání příček, nové rozvody, obklady, dlažba, instalace spotřebičů. Spolupracujeme s návrháři kuchyní nebo realizujeme dle vašeho návrhu.",
    image: "/photos/p8-kitchen.jpg",
    imageAlt: "Luxusní rekonstrukce kuchyně s mramorovou podlahou a šedými skříňkami",
  },
  {
    num: "04",
    title: "Elektro, voda, podlahy a povrchy",
    description:
      "Nová elektroinstalace, rozvody vody a odpadů, topení, podlahové krytiny, obklady, sádrokarton, malování. Vše dle aktuálních norem s atestací.",
    image: "/photos/p1-hallway.jpg",
    imageAlt: "Rekonstruovaná chodba s leštěnou mramorovou podlahou a LED osvětlením",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="bg-background py-16 md:py-28" aria-label="Naše služby">
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-12 border-t border-border pt-10 md:mb-16">
          <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
            Stavební firma Praha
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-4xl text-foreground md:text-5xl">
              Rekonstrukce bytů na klíč
            </h2>
            <p className="max-w-sm text-base text-muted-foreground">
              Specializujeme se výhradně na bytové rekonstrukce v Praze. Každou
              zakázku vedeme jako celek — od prvního měření po finální úklid.
            </p>
          </div>
        </div>

        {/* First card — horizontal editorial layout */}
        <article className="group mb-3 overflow-hidden border border-border/60 bg-card md:grid md:grid-cols-[5fr_4fr]">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[300px]">
            <Image
              src={services[0].image}
              alt={services[0].imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
            <span className="label-eyebrow mb-4 block text-[0.54rem] text-muted-foreground/50">
              {services[0].num}
            </span>
            <h3 className="mb-4 text-2xl text-foreground md:text-3xl">
              {services[0].title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9rem]">
              {services[0].description}
            </p>
          </div>
        </article>

        {/* Remaining 3 cards — 3-column grid */}
        <div className="mb-10 grid gap-3 md:grid-cols-3">
          {services.slice(1).map((service) => (
            <article
              key={service.num}
              className="group overflow-hidden border border-border/60 bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-7">
                <span className="label-eyebrow mb-3 block text-[0.54rem] text-muted-foreground/50">
                  {service.num}
                </span>
                <h3 className="mb-2.5 text-xl text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Sub-services */}
        <div className="border border-border/60 bg-secondary/40 p-6 md:p-8">
          <p className="label-eyebrow mb-5 text-[0.6rem] text-muted-foreground">
            Zahrnujeme také
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 md:grid-cols-4">
            {[
              "Elektroinstalace",
              "Voda a odpady",
              "Topení a radiátory",
              "Podlahy a dlažby",
              "Obklady a mozaiky",
              "Sádrokarton",
              "Malování",
              "Dokončovací práce",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 font-body text-sm text-muted-foreground"
              >
                <span className="h-px w-4 shrink-0 bg-primary/40" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#kontakt"
            className="label-eyebrow inline-flex items-center gap-2 border border-foreground/20 px-8 py-3.5 text-[0.68rem] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            Nezávazně poptat rekonstrukci
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
