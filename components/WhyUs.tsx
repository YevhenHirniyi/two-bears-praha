const reasons = [
  {
    num: "01",
    title: "Ověření řemeslníci, stálý tým",
    description:
      "Spolupracujeme s prověřenými řemeslníky, kteří se na bytové rekonstrukce specializují. Stálý okruh lidí zajišťuje konzistentní kvalitu na každé zakázce.",
  },
  {
    num: "02",
    title: "Pevná cena, žádná překvapení",
    description:
      "Cenu stanovíme na základě osobní prohlídky a podrobného výkazu prací. Co nabídneme, to zaplatíte — ani korunu víc bez vašeho souhlasu.",
  },
  {
    num: "03",
    title: "Jeden kontakt od začátku do konce",
    description:
      "K vašemu projektu přidělíme jednoho projektového vedoucího. Jeden telefon, jedna zpráva — vždy víte, na koho se obrátit.",
  },
  {
    num: "04",
    title: "Zkušenosti s desítkami pražských bytů",
    description:
      "Rekonstruujeme výhradně v Praze. Známe místní dodavatele, normy i specifika panelových a cihlových domů v každé čtvrti.",
  },
  {
    num: "05",
    title: "Čistý průběh prací",
    description:
      "Chráníme váš majetek — zakrýváme podlahy, chráníme výtah a společné prostory. Po práci dáváme byt do pořádku.",
  },
  {
    num: "06",
    title: "Záruka na odvedenou práci",
    description:
      "Na všechny práce poskytujeme záruku. Pokud po předání zjistíte nedostatek, přijedeme a vyřešíme ho bez otálení.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="proc-my"
      className="bg-background py-16 md:py-28"
      aria-label="Proč Two Bears"
    >
      <div className="container-max section-px">
        {/* Header */}
        <div className="mb-12 border-t border-border pt-10 md:mb-16">
          <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
            Proč Two Bears
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-sm text-4xl text-foreground md:text-5xl">
              Co nás odlišuje
            </h2>
            <p className="max-w-sm text-base text-muted-foreground">
              V Praze jsou desítky stavebních firem. Tady je šest důvodů, proč si
              klienti vybírají právě nás — a vracejí se.
            </p>
          </div>
        </div>

        {/* Reasons — left-border accent cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="border-l-2 border-primary/30 bg-secondary/40 py-7 pl-6 pr-5 transition-colors hover:border-primary/55"
            >
              <span className="label-eyebrow mb-4 block text-[0.54rem] text-primary/60">
                {r.num}
              </span>
              <h3 className="mb-2.5 text-xl text-foreground">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
