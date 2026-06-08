"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "Realizace", href: "#realizace" },
  { label: "Postup", href: "#postup" },
  { label: "O nás", href: "#o-nas" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (menuOpen) setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-transparent transition-all duration-500 ${
          scrolled && !menuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="section-px">
          <div className="flex h-[72px] items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 opacity-100 transition-opacity hover:opacity-70"
              aria-label="Two Bears Renovation – domovská stránka"
              onClick={handleLogoClick}
            >
              <Logo light={true} />
            </Link>

            {/* Nav links — desktop */}
            <nav
              className="hidden items-center gap-6 md:flex lg:gap-8"
              aria-label="Hlavní navigace"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`label-eyebrow text-[0.62rem] transition-colors duration-500 ${
                    "text-primary-foreground/60 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: phone + CTA — desktop */}
            <div className="hidden items-center gap-4 md:flex lg:gap-5">
              <a
                href="tel:+420776219323"
                className={`label-eyebrow flex items-center gap-1.5 text-[0.6rem] transition-colors duration-500 ${
                  "text-primary-foreground/65 hover:text-primary-foreground"
                }`}
              >
                <PhoneIcon />
                +420 776 219 323
              </a>
              <a
                href="#kontakt"
                className={`label-eyebrow inline-flex items-center rounded-full px-6 py-2.5 text-[0.62rem] transition-colors duration-300 ${
                  "bg-primary-foreground/90 text-foreground hover:bg-primary-foreground"
                }`}
              >
                Domluvit konzultaci
              </a>
            </div>

            {/* Mobile: burger button */}
            <button
              className={`flex h-8 w-8 flex-col items-center justify-center gap-[5px] transition-colors duration-500 md:hidden ${
                "text-primary-foreground"
              }`}
              aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={`block h-px w-3.5 origin-center bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[4.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-3.5 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-3.5 origin-center bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-foreground transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-1 flex-col justify-center px-8 pb-32">
          <nav aria-label="Mobilní navigace">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block py-4 font-display text-4xl font-light text-white/75 transition-all duration-300 hover:text-white ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </>
  );
}

function PhoneIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
