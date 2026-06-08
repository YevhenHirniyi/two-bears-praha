const testimonials = [
  {
    id: "t1",
    name: "Klient, Praha 2 – Vinohrady",
    project: "Kompletní rekonstrukce 2+kk",
    quote:
      "Rekonstrukci jsme zadali Two Bears a jsme spokojeni. Pevná cena, dodržený termín, výsledek odpovídal domluvě. Komunikace po celou dobu prací byla bezproblémová.",
    initials: "K",
  },
  {
    id: "t2",
    name: "Majitel bytu, Praha 3 – Žižkov",
    project: "Kompletní rekonstrukce 3+kk",
    quote:
      "Firma, která nezmizí po podpisu smlouvy. Po celou dobu prací jsme měli přehled, co se kde děje, a byt byl předán v domluvený termín. Doporučuji.",
    initials: "M",
  },
  {
    id: "t3",
    name: "Klientka, Praha 5 – Smíchov",
    project: "Rekonstrukce koupelny",
    quote:
      "Koupelnu jsme chtěli moderní a zpracovanou do detailu. Výsledek předčil očekávání — práce na obkladech jsou precizní. Celý průběh byl bezproblémový.",
    initials: "K",
  },
  {
    id: "t4",
    name: "Majitelka bytu, Praha 7 – Holešovice",
    project: "Rekonstrukce kuchyně a chodby",
    quote:
      "Domluvená cena, dodržená smlouva, čistý průběh prací. Přesně to, co jsem hledala. Oceňuji hlavně přehlednost a pořádek, který po sobě tým zanechal.",
    initials: "M",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-secondary/40 py-16 md:py-28"
      aria-label="Reference klientů"
    >
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-12 border-t border-border pt-10 md:mb-14">
          <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
            Co říkají klienti
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl text-foreground md:text-5xl">Reference</h2>
            <p className="max-w-sm text-base text-muted-foreground">
              Zpětná vazba od klientů, kteří nám svěřili rekonstrukci svého bytu.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
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
              <div className="mb-5 flex gap-0.5" aria-label="Hodnocení 5 z 5">
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
                &bdquo;{t.quote}&ldquo;
              </p>

              <footer className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/8">
                  <span className="label-eyebrow text-[0.55rem] text-primary/70">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold leading-tight text-foreground">
                    {t.name}
                  </p>
                  <p className="label-eyebrow text-[0.5rem] text-muted-foreground/70">
                    {t.project}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
