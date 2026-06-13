import Link from "next/link";
import { Logo } from "@/components/Logo";

const serviceLinks = [
  "Kompletní rekonstrukce na klíč",
  "Fasády a venkovní úpravy",
  "Terasy a venkovní stavby",
  "Stavební práce a realizace",
  "Kompletní servis od návrhu po realizaci",
];

const quickLinks = [
  { label: "Domů", href: "/" },
  { label: "Realizace", href: "#realizace" },
  { label: "Postup prací", href: "#postup" },
  { label: "O nás", href: "#o-nas" },
  { label: "Časté dotazy", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const areas = [
  "Vinohrady", "Žižkov", "Holešovice", "Smíchov", "Nusle",
  "Dejvice", "Strašnice", "Vršovice", "Krč", "Libeň", "Karlín",
];

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-foreground text-background/65 pb-16 md:pb-0" role="contentinfo">
      {/* Thin warm accent line */}
      <div className="h-px bg-primary/50" aria-hidden="true" />

      <div className="container-max section-px py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
          {/* Brand + contact */}
          <div>
            <div className="mb-6">
              <Link href="/" aria-label="Two Bears Renovation – domovská stránka">
                <Logo light={true} size="lg" />
              </Link>
            </div>
            <p className="mb-7 max-w-xs font-body text-sm leading-relaxed text-background/50">
              Rekonstrukce, fasády, terasy a stavební realizace v Praze a okolí. Odborný tým, pevná cena, jeden kontakt od prvního měření po předání.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+420776219323"
                className="flex items-center gap-2.5 font-body text-sm text-background/55 transition-colors hover:text-background"
              >
                <PhoneIcon className="h-3.5 w-3.5 shrink-0 text-background/30" />
                +420 776 219 323
              </a>
              <a
                href="mailto:rekonstrukcebytu888@gmail.com"
                className="flex items-center gap-2.5 font-body text-sm text-background/55 transition-colors hover:text-background"
              >
                <MailIcon className="h-3.5 w-3.5 shrink-0 text-background/30" />
                rekonstrukcebytu888@gmail.com
              </a>
              <address className="mt-2 font-body text-sm not-italic leading-relaxed text-background/65">
                Two Bears Renovation s.r.o.<br />
                IČO: 236 84 038<br />
                Mokropeská č.ev. 574, 252 28 Černošice<br />
                Zapsáno v OR vedeném Městským soudem v Praze,<br />
                oddíl C, vložka 431208
              </address>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-eyebrow mb-5 text-[0.57rem] text-background/35">
              Služby
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#sluzby"
                    className="font-body text-sm text-background/75 transition-colors hover:text-background"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + Areas */}
          <div className="flex flex-col gap-10">
            <div>
              <h4 className="label-eyebrow mb-5 text-[0.57rem] text-background/35">
                Rychlé odkazy
              </h4>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-body text-sm text-background/75 transition-colors hover:text-background"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label-eyebrow mb-4 text-[0.57rem] text-background/35">
                Kde pracujeme
              </h4>
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                {areas.map((a) => (
                  <li key={a}>
                    <span className="font-body text-xs text-background/70">{a}</span>
                  </li>
                ))}
                <li>
                  <span className="font-body text-xs text-background/30">+ celá Praha</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/8">
        <div className="container-max section-px py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-xs text-background/28">
              © {new Date().getFullYear()} Two Bears Renovation s.r.o. Všechna práva vyhrazena.
            </p>
            <div className="flex gap-5">
              <a href="/ochrana-osobnich-udaju" className="font-body text-xs text-background/28 transition-colors hover:text-background/55">
                Ochrana osobních údajů
              </a>
              <a href="/obchodni-podminky" className="font-body text-xs text-background/28 transition-colors hover:text-background/55">
                Obchodní podmínky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
