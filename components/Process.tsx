const steps = [
  {
    num: "01",
    title: "Nezávazná konzultace",
    description:
      "Zavolejte nebo napište — domluvíme se na prohlídce vašeho bytu. Prvotní konzultace je zdarma a k ničemu vás nezavazuje.",
    detail: "Zdarma, bez závazků",
  },
  {
    num: "02",
    title: "Cenová nabídka a plán",
    description:
      "Do pěti pracovních dní dostanete přehlednou nabídku s pevnou cenou, harmonogramem prací a výčtem zahrnutých řemesel. Žádné skryté položky.",
    detail: "Do 5 pracovních dní",
  },
  {
    num: "03",
    title: "Realizace na klíč",
    description:
      "Náš tým nastoupí v dohodnutý termín. Jeden projektový vedoucí koordinuje vše od bourání po dokončovací práce — nemusíte řešit organizaci řemeslníků.",
    detail: "Jeden kontakt, celý průběh",
  },
  {
    num: "04",
    title: "Předání hotového bytu",
    description:
      "Projdeme spolu hotový byt, opravíme případné nedostatky, předáme veškerou dokumentaci. Poskytujeme záruku na odvedenou práci.",
    detail: "Záruka na práci v ceně",
  },
];

export default function Process() {
  return (
    <section
      id="postup"
      className="bg-background py-16 md:py-28"
      aria-label="Jak pracujeme"
    >
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-16 border-t border-border pt-10 md:mb-20">
          <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
            Jak pracujeme
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-lg text-4xl text-foreground md:text-5xl">
              Čtyři kroky ke hotovému bytu
            </h2>
            <p className="max-w-xs text-base text-muted-foreground">
              Navrhli jsme postup tak, aby byl pro vás co nejjednodušší a
              nejpředvídatelnější.
            </p>
          </div>
        </div>

        {/* Steps — horizontal grid on desktop */}
        <div className="mb-16 grid gap-10 md:grid-cols-4 md:gap-0">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`${
                idx < steps.length - 1
                  ? "md:border-r md:border-border md:pr-8 lg:pr-10"
                  : ""
              } ${idx > 0 ? "md:pl-8 lg:pl-10" : ""}`}
            >
              {/* Large decorative number */}
              <div
                className="mb-4 select-none font-display text-[4.5rem] leading-none text-border md:text-[5.5rem]"
                aria-hidden="true"
              >
                {step.num}
              </div>
              <p className="label-eyebrow mb-2 text-[0.54rem] text-primary/65">
                {step.detail}
              </p>
              <h3 className="mb-3 text-xl text-foreground md:text-2xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#kontakt"
            className="label-eyebrow inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Domluvit nezávaznou konzultaci
          </a>
          <a
            href="tel:+420776219323"
            className="label-eyebrow inline-flex items-center justify-center gap-2 border border-border px-8 py-3.5 text-[0.68rem] text-foreground transition-colors hover:bg-secondary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +420 776 219 323
          </a>
        </div>
      </div>
    </section>
  );
}
