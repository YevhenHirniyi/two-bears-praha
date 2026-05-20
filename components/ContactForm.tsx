"use client";

import { useState } from "react";

type Step = 1 | 2 | 3;

const steps = [
  { num: 1, label: "Kontaktní údaje" },
  { num: 2, label: "Detaily projektu" },
  { num: 3, label: "Závěrečné detaily" },
];

export default function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="kontakt"
      className="bg-secondary/30 py-16 md:py-28"
      aria-label="Poptávka rekonstrukce"
    >
      <div className="container-max section-px">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="label-eyebrow mb-4 text-[0.6rem] text-primary/80">
              Poptávka rekonstrukce bytu
            </p>
            <h2 className="mb-4 text-4xl text-foreground md:text-5xl">
              Bezplatná konzultace
            </h2>
            <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Pošlete nám poptávku a připravíme vám nabídku na rekonstrukci bytu na
              klíč s pevnou cenou — do pěti pracovních dní.
            </p>
          </div>

          {/* Form area */}
          <div className="bg-card px-8 py-10 md:px-12 md:py-12">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/8">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl text-foreground md:text-3xl">Poptávka odeslána</h3>
                <p className="max-w-md text-muted-foreground">
                  Děkujeme za váš zájem. Ozveme se vám do 24 hodin v pracovní dny.
                </p>
              </div>
            ) : (
              <>
                {/* Step indicator — minimal numbered dots */}
                <div className="mb-10 flex items-center justify-between">
                  {steps.map((s, idx) => (
                    <div key={s.num} className="flex flex-1 items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 ${
                            step >= s.num
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-transparent text-muted-foreground"
                          }`}
                        >
                          {step > s.num ? (
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                              <path d="m3 8 3.5 3.5L13 4.5" />
                            </svg>
                          ) : (
                            <span className="label-eyebrow text-[0.58rem]">{s.num}</span>
                          )}
                        </div>
                        <span className="label-eyebrow mt-2 hidden text-[0.48rem] text-muted-foreground md:block">
                          {s.label}
                        </span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div
                          className={`mx-2 h-px flex-1 transition-colors duration-300 ${
                            step > s.num ? "bg-primary/50" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field id="name" label="Celé jméno *" type="text" placeholder="Bogdan Medved" autoComplete="name" />
                      <Field id="email" label="E-mailová adresa *" type="email" placeholder="bogdan@priklad.cz" autoComplete="email" />
                    </div>
                    <Field id="phone" label="Telefonní číslo" type="tel" placeholder="+420 776 219 323" autoComplete="tel" />
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="label-eyebrow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85"
                      >
                        Pokračovat
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                        Typ rekonstrukce *
                      </label>
                      <select className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none">
                        <option value="">Vyberte typ…</option>
                        <option>Kompletní rekonstrukce bytu</option>
                        <option>Rekonstrukce koupelny</option>
                        <option>Rekonstrukce kuchyně</option>
                        <option>Elektroinstalace</option>
                        <option>Podlahy a obklady</option>
                        <option>Jiné / zatím nevím</option>
                      </select>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                          Dispozice bytu
                        </label>
                        <select className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none">
                          <option value="">Vyberte…</option>
                          <option>Garsonka / 1+kk</option>
                          <option>1+1</option>
                          <option>2+kk</option>
                          <option>2+1</option>
                          <option>3+kk</option>
                          <option>3+1</option>
                          <option>4+kk a větší</option>
                        </select>
                      </div>
                      <Field id="city" label="Adresa / část Prahy" type="text" placeholder="Vinohrady, Praha 2" />
                    </div>
                    <div className="flex justify-between pt-2">
                      <button type="button" onClick={() => setStep(1)} className="label-eyebrow inline-flex items-center gap-2 border border-border px-6 py-3 text-[0.68rem] text-foreground transition-colors hover:bg-secondary">
                        Zpět
                      </button>
                      <button type="button" onClick={() => setStep(3)} className="label-eyebrow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85">
                        Pokračovat
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                        Plánovaný termín zahájení
                      </label>
                      <select className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none">
                        <option value="">Vyberte…</option>
                        <option>Do 1 měsíce</option>
                        <option>1–3 měsíce</option>
                        <option>3–6 měsíců</option>
                        <option>Zatím jen zjišťuji ceny</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                        Doplňující informace{" "}
                        <span className="normal-case tracking-normal">(nepovinné)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full resize-none border-0 border-b border-input bg-transparent pb-2 font-body text-sm text-foreground focus:border-primary focus:outline-none placeholder:text-muted-foreground/50"
                        placeholder="Stav bytu, co chcete změnit, zvláštní požadavky…"
                      />
                    </div>
                    <div className="flex justify-between pt-2">
                      <button type="button" onClick={() => setStep(2)} className="label-eyebrow inline-flex items-center gap-2 border border-border px-6 py-3 text-[0.68rem] text-foreground transition-colors hover:bg-secondary">
                        Zpět
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitted(true)}
                        className="label-eyebrow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85"
                      >
                        Odeslat poptávku
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                          <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-body text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none placeholder:text-muted-foreground/45"
      />
    </div>
  );
}
