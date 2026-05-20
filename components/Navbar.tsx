"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Domů", href: "/" },
  { label: "Služby", href: "#sluzby" },
  { label: "Realizace", href: "#realizace" },
  { label: "Postup", href: "#postup" },
  { label: "O nás", href: "#o-nas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("realizace");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setOverDark(entry.isIntersecting),
      { rootMargin: "-72px 0px -85% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const t = !scrolled || overDark;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        t
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/97 backdrop-blur-xl"
      }`}
    >
      <div className="section-px">
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="Two Bears Renovations – domovská stránka"
          >
            <Logo light={t} />
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
                  t
                    ? "text-primary-foreground/60 hover:text-primary-foreground"
                    : "text-foreground/55 hover:text-foreground"
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
                t
                  ? "text-primary-foreground/65 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <PhoneIcon />
              +420 776 219 323
            </a>
            <a
              href="#kontakt"
              className={`label-eyebrow inline-flex items-center rounded-full px-6 py-2.5 text-[0.62rem] transition-colors duration-300 ${
                t
                  ? "bg-primary-foreground/90 text-foreground hover:bg-primary-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/85"
              }`}
            >
              Domluvit konzultaci
            </a>
          </div>

          {/* Mobile: phone icon */}
          <a
            href="tel:+420776219323"
            className={`flex h-8 w-8 items-center justify-center rounded-sm border transition-colors duration-500 md:hidden ${
              t
                ? "border-primary-foreground/30 text-primary-foreground"
                : "border-border text-foreground"
            }`}
            aria-label="Zavolat"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
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
