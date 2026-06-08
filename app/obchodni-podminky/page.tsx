import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Obchodní podmínky | Two Bears Renovation",
  description:
    "Všeobecné obchodní podmínky společnosti Two Bears Renovation s.r.o. pro rekonstrukce bytů v Praze.",
};

export default function ObchodniPodminkyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <div className="container-max section-px py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="label-eyebrow mb-4 text-[0.62rem] text-muted-foreground">
              Právní informace
            </p>
            <h1 className="font-display text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl">
              Obchodní podmínky
            </h1>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              Platné od 1. 1. 2024 · Verze 1.0
            </p>

            <div className="mt-12">
              <Section title="1. Základní ustanovení">
                <p>
                  Tyto všeobecné obchodní podmínky (dále jen „VOP") upravují smluvní vztahy mezi
                  společností <strong>Two Bears Renovation s.r.o.</strong>, IČO: 236 84 038, se
                  sídlem Mokropeská č.ev. 574, 252 28 Černošice, zapsanou v obchodním rejstříku
                  vedeném Městským soudem v Praze, oddíl C, vložka 431208 (dále jen „zhotovitel"),
                  a objednatelem rekonstrukčních prací (dále jen „objednatel").
                </p>
                <p className="mt-3">
                  Tyto VOP se řídí zákonem č. 89/2012 Sb., občanský zákoník, ve znění pozdějších
                  předpisů, zejména ustanoveními o smlouvě o dílo (§ 2586 a násl.).
                </p>
              </Section>

              <Section title="2. Vznik smluvního vztahu">
                <p>
                  Smluvní vztah vzniká podpisem písemné smlouvy o dílo oběma smluvními stranami.
                  Podmínkou uzavření smlouvy je předchozí prohlídka nemovitosti zástupcem
                  zhotovitele a odsouhlasení cenové nabídky objednatelem.
                </p>
                <p className="mt-3">
                  Cenová nabídka zaslaná objednateli je platná 30 dnů ode dne doručení, pokud není
                  v nabídce uvedena jiná lhůta.
                </p>
              </Section>

              <Section title="3. Předmět díla a rozsah prací">
                <p>
                  Předmět díla je přesně vymezen ve smlouvě o dílo a jejích přílohách (rozpočet,
                  technická specifikace, případně projektová dokumentace). Jakékoliv změny rozsahu
                  prací musí být sjednány písemným dodatkem ke smlouvě před jejich zahájením.
                </p>
                <p className="mt-3">
                  Vícepráce nad rámec sjednané smlouvy budou provedeny pouze na základě písemného
                  souhlasu objednatele a po dohodě o jejich ceně.
                </p>
              </Section>

              <Section title="4. Cena a platební podmínky">
                <p>
                  Cena díla je sjednána jako pevná (paušální) a je uvedena ve smlouvě o dílo. Cena
                  se může změnit výhradně na základě písemného dodatku.
                </p>
                <p className="mt-3">Standardní platební harmonogram:</p>
                <ul>
                  <li>Záloha 30 % ceny díla před zahájením prací.</li>
                  <li>Průběžná platba 40 % ceny díla po dosažení sjednaného milníku.</li>
                  <li>Doplatek 30 % ceny díla po předání a převzetí dokončeného díla.</li>
                </ul>
                <p className="mt-3">
                  Konkrétní platební harmonogram je uveden ve smlouvě o dílo. Faktury jsou splatné
                  do 14 dnů ode dne vystavení.
                </p>
              </Section>

              <Section title="5. Provádění díla">
                <p>
                  Zhotovitel se zavazuje provést dílo v termínu uvedeném ve smlouvě, s odbornou
                  péčí, v souladu s obecně závaznými předpisy a technickými normami.
                </p>
                <p className="mt-3">
                  Objednatel je povinen zajistit zhotoviteli přístup na staveniště v dohodnutých
                  termínech a bez zbytečných překážek. Prodlení zaviněné objednatelem prodlužuje
                  termín dokončení o dobu zdržení.
                </p>
                <p className="mt-3">
                  Zhotovitel je oprávněn pověřit provedením části díla subdodavatele; za jejich
                  práci odpovídá jako za práci vlastní.
                </p>
              </Section>

              <Section title="6. Předání a převzetí díla">
                <p>
                  O předání a převzetí díla se sepisuje předávací protokol podepsaný oběma
                  smluvními stranami. Objednatel je povinen se dostavit k předání ve sjednaném
                  termínu. Drobné vady, které samy o sobě nebrání užívání díla, neopravňují
                  objednatele k odmítnutí převzetí; jsou zaznamenány do protokolu a zhotovitel
                  je odstraní ve sjednané lhůtě.
                </p>
              </Section>

              <Section title="7. Záruka a odpovědnost za vady">
                <p>
                  Zhotovitel poskytuje na provedené dílo záruku za jakost v délce <strong>24 měsíců</strong>{" "}
                  ode dne podpisu předávacího protokolu, pokud není ve smlouvě sjednáno jinak.
                </p>
                <p className="mt-3">
                  Záruka se nevztahuje na vady způsobené:
                </p>
                <ul>
                  <li>Nesprávným užíváním nebo nedostatečnou údržbou ze strany objednatele.</li>
                  <li>Zásahem třetí osoby po předání díla.</li>
                  <li>Živelnou pohromou nebo vyšší mocí.</li>
                  <li>Materiálem dodaným samotným objednatelem.</li>
                </ul>
                <p className="mt-3">
                  Reklamaci je objednatel povinen uplatnit písemně bez zbytečného odkladu poté,
                  co vadu zjistil. Zhotovitel je povinen se k reklamaci vyjádřit do 10 pracovních
                  dnů.
                </p>
              </Section>

              <Section title="8. Odpovědnost za škodu">
                <p>
                  Zhotovitel odpovídá za škodu vzniklou při provádění prací z jeho zavinění.
                  Zhotovitel neodpovídá za škody způsobené skrytými vadami stavby nebo instalací,
                  o nichž nebyl informován.
                </p>
                <p className="mt-3">
                  Zhotovitel je pojištěn odpovědností za škodu způsobenou třetím osobám při
                  výkonu podnikatelské činnosti.
                </p>
              </Section>

              <Section title="9. Odstoupení od smlouvy">
                <p>
                  Smluvní strany mohou od smlouvy odstoupit z důvodů stanovených zákonem nebo
                  sjednaných ve smlouvě. Objednatel má právo odstoupit od smlouvy bez udání
                  důvodu; v takovém případě je povinen uhradit zhotoviteli náklady již vynaložené
                  na dílo a přiměřenou část odměny za doposud provedenou práci.
                </p>
              </Section>

              <Section title="10. Ochrana osobních údajů">
                <p>
                  Zpracování osobních údajů objednatele se řídí samostatnými{" "}
                  <Link href="/ochrana-osobnich-udaju" className="text-primary underline-offset-2 hover:underline">
                    Zásadami ochrany osobních údajů
                  </Link>.
                </p>
              </Section>

              <Section title="11. Řešení sporů">
                <p>
                  Smluvní strany se zavazují řešit případné spory přednostně smírnou cestou.
                  Nebude-li smírného řešení dosaženo, jsou příslušné obecné soudy České republiky.
                  Rozhodným právem je právní řád České republiky.
                </p>
              </Section>

              <Section title="12. Závěrečná ustanovení">
                <p>
                  Tyto VOP jsou platné a účinné od 1. 1. 2024. Zhotovitel si vyhrazuje právo VOP
                  měnit; změna se nevztahuje na smlouvy uzavřené před nabytím účinnosti nového
                  znění. Aktuální znění VOP je vždy zveřejněno na webových stránkách zhotovitele.
                </p>
              </Section>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Zpět na hlavní stránku
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-display text-xl font-medium text-foreground md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-2 font-body text-sm leading-relaxed text-foreground/75 [&_a]:text-primary [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}
