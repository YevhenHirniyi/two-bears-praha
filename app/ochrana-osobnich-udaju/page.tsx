import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Two Bears Renovation",
  description:
    "Informace o zpracování osobních údajů společností Two Bears Renovation s.r.o. v souladu s GDPR.",
};

export default function OchranaOsobnichUdajuPage() {
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
              Ochrana osobních údajů
            </h1>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              Platné od 1. 1. 2024 · Verze 1.0
            </p>

            <div className="prose-legal mt-12">
              <Section title="1. Správce osobních údajů">
                <p>
                  Správcem osobních údajů je společnost <strong>Two Bears Renovation s.r.o.</strong>,
                  IČO: 236 84 038, se sídlem Mokropeská č.ev. 574, 252 28 Černošice, zapsaná
                  v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 431208
                  (dále jen „správce").
                </p>
                <p className="mt-3">
                  Kontakt: <a href="mailto:rekonstrukcebytu888@gmail.com" className="text-primary underline-offset-2 hover:underline">rekonstrukcebytu888@gmail.com</a> ·{" "}
                  <a href="tel:+420776219323" className="text-primary underline-offset-2 hover:underline">+420 776 219 323</a>
                </p>
              </Section>

              <Section title="2. Jaké osobní údaje zpracováváme">
                <p>Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře nebo jiným způsobem:</p>
                <ul>
                  <li>Jméno a příjmení</li>
                  <li>E-mailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Adresa nemovitosti (pro účely nacenění)</li>
                  <li>Popis poptávané rekonstrukce</li>
                </ul>
              </Section>

              <Section title="3. Účel a právní základ zpracování">
                <p>Vaše osobní údaje zpracováváme za těmito účely:</p>
                <ul>
                  <li>
                    <strong>Odpověď na poptávku / uzavření smlouvy</strong> — právní základ:
                    čl. 6 odst. 1 písm. b) GDPR (plnění smlouvy nebo přijetí opatření před uzavřením smlouvy).
                  </li>
                  <li>
                    <strong>Plnění zákonných povinností</strong> — právní základ: čl. 6 odst. 1
                    písm. c) GDPR (účetní a daňové předpisy).
                  </li>
                  <li>
                    <strong>Oprávněný zájem správce</strong> — zasílání informací o průběhu
                    zakázky a navazující komunikace (čl. 6 odst. 1 písm. f) GDPR).
                  </li>
                </ul>
              </Section>

              <Section title="4. Doba uchování údajů">
                <p>
                  Osobní údaje uchováváme po dobu nezbytně nutnou pro splnění účelu, nejdéle však:
                </p>
                <ul>
                  <li>Po dobu trvání smluvního vztahu a 3 roky po jeho ukončení (pro případ reklamací).</li>
                  <li>10 let pro doklady podléhající archivační povinnosti dle zákona o účetnictví.</li>
                  <li>Po odvolání souhlasu (pokud je zpracování založeno na souhlasu).</li>
                </ul>
              </Section>

              <Section title="5. Příjemci osobních údajů">
                <p>
                  Vaše osobní údaje neprodáváme ani neposkytujeme třetím stranám za obchodním
                  účelem. Údaje mohou být sdíleny výhradně s:
                </p>
                <ul>
                  <li>Subdodavateli a řemeslníky zapojenými do realizace zakázky (v nezbytném rozsahu).</li>
                  <li>Poskytovateli cloudových služeb a e-mailové platformy (zpracovatelé dle čl. 28 GDPR).</li>
                  <li>Účetní kanceláří správce.</li>
                </ul>
                <p className="mt-3">
                  Osobní údaje nejsou předávány mimo Evropský hospodářský prostor.
                </p>
              </Section>

              <Section title="6. Vaše práva">
                <p>Máte právo:</p>
                <ul>
                  <li><strong>Přístupu</strong> — požádat o kopii osobních údajů, které o vás zpracováváme.</li>
                  <li><strong>Opravy</strong> — požádat o opravu nesprávných nebo neúplných údajů.</li>
                  <li><strong>Výmazu</strong> — požádat o vymazání údajů („právo být zapomenut"), pokud odpadl účel zpracování.</li>
                  <li><strong>Omezení zpracování</strong> — požádat o dočasné omezení zpracování.</li>
                  <li><strong>Přenositelnosti</strong> — obdržet své údaje ve strojově čitelném formátu.</li>
                  <li><strong>Námitky</strong> — vznést námitku proti zpracování na základě oprávněného zájmu.</li>
                  <li><strong>Odvolání souhlasu</strong> — kdykoli odvolat souhlas se zpracováním, aniž by tím byla dotčena zákonnost zpracování před odvoláním.</li>
                </ul>
                <p className="mt-3">
                  Žádost uplatňujte e-mailem na{" "}
                  <a href="mailto:rekonstrukcebytu888@gmail.com" className="text-primary underline-offset-2 hover:underline">
                    rekonstrukcebytu888@gmail.com
                  </a>. Odpovíme do 30 dnů.
                </p>
              </Section>

              <Section title="7. Právo podat stížnost">
                <p>
                  Pokud se domníváte, že zpracování vašich osobních údajů porušuje GDPR, máte
                  právo podat stížnost u dozorového orgánu — Úřadu pro ochranu osobních údajů
                  (ÚOOÚ), Pplk. Sochora 27, 170 00 Praha 7,{" "}
                  <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">
                    www.uoou.cz
                  </a>.
                </p>
              </Section>

              <Section title="8. Soubory cookie">
                <p>
                  Naše webové stránky používají pouze technické cookies nezbytné pro správné
                  fungování webu. Nepoužíváme analytické ani marketingové cookies vyžadující
                  váš souhlas.
                </p>
              </Section>

              <Section title="9. Změny zásad">
                <p>
                  Tyto zásady můžeme příležitostně aktualizovat. Aktuální verze je vždy dostupná
                  na této stránce. Datum poslední aktualizace je uvedeno v záhlaví dokumentu.
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
