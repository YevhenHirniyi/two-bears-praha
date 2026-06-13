import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Individuální přístup",
    description: "Každý projekt řešíme individuálně podle vašich představ a potřeb.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Kompletní servis",
    description: "Postaráme se o celý proces – od návrhu a plánování až po finální předání.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Kvalita a záruka",
    description: "Používáme kvalitní materiály a prověřené postupy. Na všechny práce poskytujeme záruku 2 roky.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary/60" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Otevřená komunikace",
    description: "Pravidelně vás informujeme o postupu a průběhu prací. Vše řešíme férově a bez skrytých poplatků.",
  },
];

export default function About() {
  return (
    <section
      id="o-nas"
      className="overflow-hidden bg-background"
      aria-label="O nás"
    >
      <div className="container-max">
        <div className="grid md:grid-cols-2">
          {/* Left: tall image */}
          <div className="relative min-h-[320px] md:min-h-[560px]">
            <Image
              src="/photos/praha-stodulky-a/1.jpeg"
              alt="Dokončený interiér po rekonstrukci — Two Bears Renovation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-foreground/6" />
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center section-px py-16 md:py-28 md:pl-14 lg:pl-20">
            <p className="label-eyebrow mb-4 text-[0.6rem] text-muted-foreground">
              O nás
            </p>
            <h2 className="mb-6 text-4xl leading-tight text-foreground md:text-5xl">
              Rekonstrukce a stavební realizace{" "}
              <em className="font-light italic">bez starostí.</em>
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Ve Two Bears Renovation věříme, že kvalitní realizace začíná důvěrou a dobrou komunikací.
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Pomáháme klientům od prvního nápadu až po finální předání – ať už jde o kompletní rekonstrukci, stavební úpravy nebo venkovní realizace.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Každý projekt řešíme individuálně. Hledáme nejlepší řešení, komunikujeme otevřeně a dbáme na kvalitu každého detailu.
            </p>
            <p className="mb-8 text-base font-medium leading-relaxed text-primary">
              Jeden partner. Jeden proces. Jeden výsledek, za kterým si stojíme.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 shrink-0 bg-border" aria-hidden="true" />
              <span className="label-eyebrow text-[0.54rem] tracking-[0.15em] text-muted-foreground/60">
                Praha a okolí · Rekonstrukce a stavební realizace
              </span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-px border-t border-border/40 bg-border/20 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 bg-background px-6 py-8 md:px-8 md:py-10">
              {f.icon}
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
