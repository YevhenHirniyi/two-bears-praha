const services = [
  {
    num: "01",
    title: "Kompletní rekonstrukce na klíč",
    description: "Kompletní rekonstrukce bytů a domů od návrhu po finální realizaci.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary/70" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Fasády a venkovní úpravy",
    description: "Zateplení, omítky, renovace a modernizace fasád.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary/70" aria-hidden="true">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 9h20M9 3v18" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Terasy",
    description: "Terasy, pergoly, dlažby a další venkovní stavby na míru.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary/70" aria-hidden="true">
        <path d="M3 20h18M5 20V10l7-7 7 7v10" />
        <path d="M9 20v-6h6v6" />
        <path d="M1 10h22" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Stavební práce a realizace",
    description: "Stavební úpravy, přístavby, nástavby a kompletní realizace.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary/70" aria-hidden="true">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
        <path d="M12 14v-2m0 0h-2m2 0h2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Kompletní servis od návrhu po realizaci",
    description: "Postaráme se o vše za vás. Vy si užijete výsledek bez starostí.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary/70" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="bg-background py-16 md:py-28" aria-label="Naše služby">
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-12 border-t border-border pt-10 md:mb-16">
          <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
            Co pro vás zajistíme
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-4xl text-foreground md:text-5xl">
              Komplexní řešení pro váš domov
            </h2>
            <p className="max-w-sm text-base text-muted-foreground">
              Od kompletních rekonstrukcí po fasády, terasy a stavební práce. Jeden partner pro celý proces.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mb-10 grid gap-px border border-border/40 bg-border/30 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.num}
              className="flex flex-col items-center bg-background px-6 py-10 text-center transition-colors hover:bg-secondary/30"
            >
              <div className="mb-5">{service.icon}</div>
              <span className="label-eyebrow mb-2 block text-[0.54rem] text-muted-foreground/50">
                {service.num}
              </span>
              <h3 className="label-eyebrow mb-3 text-[0.62rem] tracking-[0.12em] text-foreground">
                {service.title.toUpperCase()}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sub-services */}
        <div className="border border-border/60 bg-secondary/40 p-6 md:p-8">
          <p className="label-eyebrow mb-5 text-[0.6rem] text-muted-foreground">
            Zahrnujeme také
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 md:grid-cols-4">
            {[
              "Rekonstrukce bytů",
              "Fasády a zateplení",
              "Terasy a pergoly",
              "Přístavby a nástavby",
              "Obklady a dlažby",
              "Malování a omítky",
              "Stavební úpravy",
              "Venkovní realizace",
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
            Nezávazně poptat realizaci
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
