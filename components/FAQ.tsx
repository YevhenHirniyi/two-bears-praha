"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Jak dlouho trvá kompletní rekonstrukce?",
    a: "Kompletní rekonstrukce obvykle trvá přibližně 2 až 6 měsíců. Délka realizace závisí na rozsahu práce, technickém stavu objektu a dostupnosti materiálů. Některé materiály mohou mít delší dodací lhůty – v určitých případech až několik měsíců. Celkový termín vždy přizpůsobujeme konkrétnímu projektu a zvolenému řešení.",
  },
  {
    q: "Kolik stojí rekonstrukce v Praze?",
    a: "Cena se odvíjí od rozsahu prací, výběru materiálů a technického stavu bytu. Po prohlídce vám připravíme transparentní cenovou nabídku na míru bez skrytých poplatků.",
  },
  {
    q: "Jak probíhá spolupráce?",
    a: "Nejprve nás kontaktujte a domluvíme si osobní schůzku. Na místě náš technik posoudí stav objektu, provede přesné zaměření, poskytne konzultaci a detailně s vámi probere vaše představy, potřeby a očekávání. Na základě schůzky pro vás připravíme cenovou nabídku a společně vybereme nejvhodnější řešení. V případě potřeby vám pomůžeme vybrat materiály, styl a směr realizace tak, aby výsledek odpovídal vašim představám. Následně společně projdeme všechny etapy realizace a nastavíme harmonogram i platební podmínky. Platby probíhají postupně podle jednotlivých dokončených etap — vše je předem uvedeno ve smlouvě. Po dokončení realizace proběhne společné předání projektu formou předávacího protokolu a od tohoto okamžiku začíná běžet záruka 2 roky na provedené práce.",
  },
  {
    q: "Musím si materiál zajistit sám, nebo ho dodáte vy?",
    a: "Veškerý stavební materiál zajišťujeme my a je součástí předem domluvené cenové nabídky. Povrchové materiály (například obklady, dlažby, podlahy, dveře nebo dekorativní prvky) si obvykle vybírá a pořizuje klient podle vlastních preferencí. Po vzájemné domluvě však můžeme zajistit i dodání těchto materiálů a postarat se o celý proces za vás. Rádi vám zároveň pomůžeme s výběrem tak, aby výsledek odpovídal kvalitě, rozpočtu i vašim představám.",
  },
  {
    q: "Pomůžete nám najít nejlepší řešení?",
    a: "Ano. Nasloucháme vašim potřebám a navrhujeme praktická, funkční a estetická řešení na míru vašemu rozpočtu a životnímu stylu. Naším cílem je, aby výsledek předčil vaše očekávání.",
  },
  {
    q: "Musíme být během realizace na místě?",
    a: "Nemusíte. Většinu věcí zařídíme za vás a pravidelně vás budeme informovat o průběhu. Stačí nám zajistit přístup do bytu.",
  },
  {
    q: "Jak probíhají platby?",
    a: "Platby probíhají etapově podle postupu prací. Dohodneme se na férovém harmonogramu, který vám bude vyhovovat. Vše je detailně uvedeno ve smlouvě.",
  },
  {
    q: "Co když se během realizace rozhodneme něco změnit?",
    a: "Je to možné. Změny řešíme pružně a vždy s vámi vše předem prokonzultujeme, abyste věděli, jaký bude dopad na cenu a termín.",
  },
  {
    q: "Poskytujete záruku na provedené práce?",
    a: "Ano, na všechny naše práce poskytujeme záruku 2 roky. Používáme kvalitní materiály a stojíme si za svou prací.",
  },
  {
    q: "Působíte pouze v Praze, nebo i v okolí?",
    a: "Naše hlavní působnost je Praha a okolí do 100 km. Ve vybraných případech realizujeme projekty i ve větší vzdálenosti – vždy po individuální domluvě.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-body text-sm font-medium text-foreground md:text-base">
          {q}
        </span>
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 10 10" fill="none" className="h-3 w-3">
            <path
              d="M5 1v8M1 5h8"
              stroke={open ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 pr-8 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-background py-16 md:py-28"
      aria-label="Časté dotazy"
    >
      <div className="container-max section-px">
        <div className="grid gap-14 md:grid-cols-[1fr_1.7fr]">
          {/* Left */}
          <div>
            <p className="label-eyebrow mb-4 text-[0.6rem] text-muted-foreground">
              Časté dotazy
            </p>
            <h2 className="mb-5 text-4xl text-foreground md:text-5xl">
              Máte otázky?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Nenašli jste odpověď? Zavolejte na{" "}
              <a
                href="tel:+420776219323"
                className="text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                +420 776 219 323
              </a>{" "}
              nebo nám napište — odpovíme do 4 hodin v pracovní dny.
            </p>
            <a
              href="#kontakt"
              className="label-eyebrow inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Domluvit konzultaci
            </a>
          </div>

          {/* Right: accordion */}
          <div className="divide-y divide-border/50">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
