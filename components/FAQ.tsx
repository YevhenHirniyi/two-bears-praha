"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Jak dlouho trvá kompletní rekonstrukce bytu 2+kk?",
    a: "Kompletní rekonstrukce bytu 2+kk trvá obvykle 6–10 týdnů v závislosti na rozsahu prací, stavu původního bytu a dostupnosti materiálů. Přesný harmonogram dostanete v nabídce ještě před podpisem smlouvy.",
  },
  {
    q: "Kolik stojí rekonstrukce bytu v Praze?",
    a: "Cena se odvíjí od velikosti bytu, rozsahu prací a úrovně materiálů. Orientačně počítejte 8 000–15 000 Kč/m² za kompletní rekonstrukci. Přesnou a závaznou cenu stanovíme po osobní prohlídce — zdarma a bez závazků.",
  },
  {
    q: "Pracujete v panelových domech?",
    a: "Ano, máme bohaté zkušenosti s rekonstrukcemi panelových bytů. Dobře známe specifika panelové výstavby — bourání příček, výměnu jader, nové rozvody. Panelové byty tvoří velkou část naší práce.",
  },
  {
    q: "Potřebuji souhlas SVJ nebo majitele domu?",
    a: "U zásahů do nosných konstrukcí nebo společných rozvodů budovy ano. Pomůžeme vám připravit žádost o souhlas SVJ a posoudíme, co konkrétně ke schválení potřebujete — s tím máme praxi.",
  },
  {
    q: "Mohu byt během rekonstrukce obývat?",
    a: "Závisí na rozsahu prací. U dílčích rekonstrukcí (koupelna, kuchyně) je to často možné s dočasným omezením. U kompletní rekonstrukce doporučujeme byt po dobu prací uvolnit — práce budou rychlejší a výsledek kvalitnější.",
  },
  {
    q: "Jaká je záloha a jak probíhají platby?",
    a: "Záloha při podpisu smlouvy je 20–30 % z ceny zakázky. Zbytek platíte postupně dle dosaženého stavebního stavu, který společně odsouhlasíme. Závěrečná platba až po předání hotového bytu.",
  },
  {
    q: "Zajišťujete stavební materiál?",
    a: "Ano, dodávku veškerého materiálu zajišťujeme v rámci ceny na klíč. Máme prověřené dodavatele a dobré ceny. Pokud máte konkrétní přání na materiály nebo výrobce, rádi je zakomponujeme.",
  },
  {
    q: `Co přesně zahrnuje rekonstrukce „na klíč"?`,
    a: "Rekonstrukce na klíč zahrnuje vše od projektu a stavebního povolení (je-li třeba) přes realizaci všech řemesel až po závěrečný úklid a předání dokumentace. Výstupem je byt připravený k nastěhování — bez nutnosti cokoliv dalšího řešit.",
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

          {/* Right: accordion — no card wrapper, just clean list */}
          <div className="divide-y divide-border/50">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
