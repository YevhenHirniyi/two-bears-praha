const items = [
  { value: "150+", label: "Dokončených rekonstrukcí" },
  { value: "8 let", label: "Zkušeností v Praze" },
  { value: "98 %", label: "Spokojených klientů" },
  { value: "Pevná", label: "Cena bez překvapení" },
];

export default function TrustStrip() {
  return (
    <section className="bg-secondary/60" aria-label="Klíčové hodnoty">
      <div className="container-max section-px">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col items-start px-2 py-10 md:px-6 md:py-14 ${
                idx < items.length - 1 ? "border-r border-border/60" : ""
              }`}
            >
              <div className="mb-3 h-0.5 w-8 bg-primary/50" aria-hidden="true" />
              <div className="mb-1.5 font-display text-[2.4rem] leading-none text-foreground md:text-[3rem]">
                {item.value}
              </div>
              <div className="label-eyebrow text-[0.54rem] text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
