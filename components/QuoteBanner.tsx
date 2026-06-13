import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section
      className="relative h-[55vh] overflow-hidden md:h-[65vh]"
      aria-label="Náš příslib"
    >
      <Image
        src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=2000&q=80"
        alt="Elegantní pražský byt po dokončené rekonstrukci"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/60 to-foreground/75" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Large typographic quote mark */}
        <div
          className="mb-2 select-none font-display text-[8rem] leading-none text-primary-foreground/15 md:text-[12rem]"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote className="-mt-8 max-w-3xl text-center md:-mt-12">
          <p className="text-[clamp(1.5rem,4vw,3.25rem)] leading-snug text-primary-foreground md:leading-tight">
            Proměňujeme prostory ve místa,{" "}
            <em className="font-light italic">na která se těšíte.</em>
          </p>
        </blockquote>

        <div className="mt-8 flex items-center gap-5">
          <div className="h-px w-8 bg-primary-foreground/30" aria-hidden="true" />
          <a
            href="#kontakt"
            className="label-eyebrow inline-flex items-center gap-2 border border-primary-foreground/40 px-7 py-3 text-[0.65rem] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Domluvit konzultaci
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
          <div className="h-px w-8 bg-primary-foreground/30" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
