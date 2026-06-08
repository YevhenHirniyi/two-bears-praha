import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Výpis z obchodního rejstříku | Two Bears Renovation s.r.o.",
  description:
    "Výpis z obchodního rejstříku společnosti Two Bears Renovation s.r.o., IČO 236 84 038, vedený Městským soudem v Praze, oddíl C, vložka 431208.",
};

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "Datum vzniku a zápisu", value: "4. září 2025" },
  {
    label: "Spisová značka",
    value: "C 431208 vedená u Městského soudu v Praze",
  },
  { label: "Obchodní firma", value: "Two Bears Renovation s.r.o." },
  {
    label: "Sídlo",
    value: "Mokropeská č.ev. 574, 252 28 Černošice",
  },
  { label: "Identifikační číslo", value: "236 84 038" },
  { label: "Právní forma", value: "Společnost s ručením omezeným" },
];

const predmetPodnikani = [
  "Provozování vodovodů a kanalizací a úprava a rozvod vody",
  "Přípravné a dokončovací stavební práce, specializované stavební činnosti",
  "Sklenářské práce, rámování a paspartování",
  "Zprostředkování obchodu a služeb",
  "Velkoobchod a maloobchod",
  "Nákup, prodej, správa a údržba nemovitostí",
];

const jednatele = [
  {
    name: "MARIIA KOROBAILO",
    narozena: "12. října 1997",
    adresa: "Mokropeská č.ev. 574, 252 28 Černošice",
    vznik: "4. září 2025",
  },
  {
    name: "BOHDAN BOIKIV",
    narozena: "29. července 1992",
    adresa: "Mokropeská č.ev. 574, 252 28 Černošice",
    vznik: "4. září 2025",
  },
];

const spolecnici = [
  {
    name: "MARIIA KOROBAILO",
    narozena: "12. října 1997",
    adresa: "Mokropeská č.ev. 574, 252 28 Černošice",
    vklad: "10 000,- Kč",
    splaceno: "100 %",
    podil: "50 %",
  },
  {
    name: "BOHDAN BOIKIV",
    narozena: "29. července 1992",
    adresa: "Mokropeská č.ev. 574, 252 28 Černošice",
    vklad: "10 000,- Kč",
    splaceno: "100 %",
    podil: "50 %",
  },
];

export default function VypisPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[72px]">
        <div className="container-max section-px py-16 md:py-24">

          {/* Page header */}
          <div className="mb-12 border-t border-border pt-10">
            <p className="label-eyebrow mb-3 text-[0.6rem] text-muted-foreground">
              Obchodní rejstřík
            </p>
            <h1 className="mb-2 text-4xl text-foreground md:text-5xl">
              Výpis z obchodního rejstříku
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              vedeného Městským soudem v Praze, oddíl C, vložka 431208
            </p>
            <p className="mt-1 text-xs text-muted-foreground/60">
              Výpis vyhotoven: 4. září 2025 · Elektronicky označen Městským soudem v Praze
            </p>
          </div>

          <div className="max-w-3xl space-y-0">

            {/* Základní údaje */}
            <Section title="Základní údaje">
              <table className="w-full">
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label} className="border-b border-border/50">
                      <td className="w-52 py-3.5 pr-6 align-top text-sm font-medium text-foreground/70 md:w-64">
                        {r.label}
                      </td>
                      <td className="py-3.5 text-sm text-foreground">
                        {r.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            {/* Předmět podnikání */}
            <Section title="Předmět podnikání">
              <ul className="space-y-2.5">
                {predmetPodnikani.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Statutární orgán */}
            <Section title="Statutární orgán">
              <div className="space-y-6">
                {jednatele.map((j, i) => (
                  <div key={j.name} className="border-l-2 border-primary/25 pl-5">
                    <p className="label-eyebrow mb-3 text-[0.54rem] text-muted-foreground">
                      Jednatel {i + 1}
                    </p>
                    <table className="w-full">
                      <tbody>
                        <Row label="Jméno" value={j.name} />
                        <Row label="Datum narození" value={j.narozena} />
                        <Row label="Adresa" value={j.adresa} />
                        <Row label="Den vzniku funkce" value={j.vznik} />
                      </tbody>
                    </table>
                  </div>
                ))}
                <div className="border-t border-border/50 pt-4">
                  <table className="w-full">
                    <tbody>
                      <Row label="Počet jednatelů" value="2" />
                      <Row label="Způsob jednání" value="Každý jednatel zastupuje společnost samostatně." />
                    </tbody>
                  </table>
                </div>
              </div>
            </Section>

            {/* Společníci */}
            <Section title="Společníci">
              <div className="space-y-6">
                {spolecnici.map((s, i) => (
                  <div key={s.name} className="border-l-2 border-primary/25 pl-5">
                    <p className="label-eyebrow mb-3 text-[0.54rem] text-muted-foreground">
                      Společník {i + 1}
                    </p>
                    <table className="w-full">
                      <tbody>
                        <Row label="Jméno" value={s.name} />
                        <Row label="Datum narození" value={s.narozena} />
                        <Row label="Adresa" value={s.adresa} />
                        <Row label="Vklad" value={s.vklad} />
                        <Row label="Splaceno" value={s.splaceno} />
                        <Row label="Obchodní podíl" value={s.podil} />
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </Section>

            {/* Základní kapitál */}
            <Section title="Základní kapitál">
              <p className="text-sm text-foreground">20 000,- Kč</p>
            </Section>

            {/* Legal note */}
            <div className="mt-10 border-t border-border pt-8">
              <p className="text-xs leading-relaxed text-muted-foreground/60">
                Tento výpis z obchodního rejstříku byl elektronicky označen „Městský soud v Praze"
                dne 4. 9. 2025 v 11:58:25. EPVid: Lilky2Yuhqa0zJ7Yq5SEaTJUEnOTTi9v.
                Výpis vyhotoven: 4. září 2025 11:58. Strana 1/1.
              </p>
              <a
                href="https://or.justice.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="label-eyebrow mt-4 inline-flex items-center gap-2 text-[0.6rem] text-primary/70 transition-colors hover:text-primary"
              >
                Ověřit v obchodním rejstříku justice.cz
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                </svg>
              </a>
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
    <div className="border-t border-border py-8">
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-border/40">
      <td className="w-44 py-2.5 pr-6 align-top text-sm text-foreground/60 md:w-56">
        {label}
      </td>
      <td className="py-2.5 text-sm text-foreground">{value}</td>
    </tr>
  );
}
