import Image from "next/image";

export default function About() {
  return (
    <section
      id="o-nas"
      className="overflow-hidden bg-background"
      aria-label="O nás"
    >
      <div className="container-max">
        <div className="grid md:grid-cols-2">
          {/* Left: tall image */}
          <div className="relative min-h-[320px] md:min-h-[560px]">
            <Image
              src="/photos/p-living-room.jpg"
              alt="Dokončený obývací pokoj v Praze — Two Bears Renovations"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-foreground/6" />
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center section-px py-16 md:py-28 md:pl-14 lg:pl-20">
            <p className="label-eyebrow mb-4 text-[0.6rem] text-muted-foreground">
              Rekonstrukční firma Praha
            </p>
            <h2 className="mb-6 text-4xl leading-tight text-foreground md:text-5xl">
              Rekonstrukce bytů,{" "}
              <em className="font-light italic">jak mají vypadat</em>
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Two Bears Renovations je pražská stavební parta, která se od roku 2016 specializuje
              výhradně na rekonstrukce bytů. Nepracujeme s náhodně sesbíranými
              subdodavateli — máme vlastní, prověřený tým, který u nás pracuje
              dlouhodobě.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Každý projekt řídí jeden projektový vedoucí — jediný člověk, kterého
              musíte kontaktovat od první schůzky až po předání klíčů. Pevná cena,
              jasný harmonogram, žádné skryté poplatky.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-10 shrink-0 bg-border" aria-hidden="true" />
              <span className="label-eyebrow text-[0.54rem] tracking-[0.15em] text-muted-foreground/60">
                Praha · od roku 2016
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
