"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";

type Step = 1 | 2 | 3;

type FormData = {
  name: string;
  email: string;
  phone: string;
  type: string;
  layout: string;
  city: string;
  timeline: string;
  message: string;
};

const empty: FormData = {
  name: "", email: "", phone: "", type: "",
  layout: "", city: "", timeline: "", message: "",
};

export default function ContactForm() {
  const { t } = useLang();
  const c = t.contact;

  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(empty);

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function submit() {
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || c.errorDefault);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errorDefault);
    } finally {
      setSending(false);
    }
  }

  const stepLabels = c.steps;

  return (
    <section
      id="kontakt"
      className="bg-secondary/30 py-16 md:py-28"
      aria-label={c.aria}
    >
      <div className="container-max section-px">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="label-eyebrow mb-4 text-[0.6rem] text-primary/80">
              {c.eyebrow}
            </p>
            <h2 className="mb-4 text-4xl text-foreground md:text-5xl">
              {c.heading}
            </h2>
            <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.subtext}
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
                <h3 className="text-2xl text-foreground md:text-3xl">{c.success.heading}</h3>
                <p className="max-w-md text-muted-foreground">
                  {c.success.text}
                </p>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div className="mb-10 flex items-center justify-between">
                  {stepLabels.map((label, idx) => {
                    const num = idx + 1;
                    return (
                      <div key={num} className="flex flex-1 items-center">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 ${
                              step >= num
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-transparent text-muted-foreground"
                            }`}
                          >
                            {step > num ? (
                              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden="true">
                                <path d="m3 8 3.5 3.5L13 4.5" />
                              </svg>
                            ) : (
                              <span className="label-eyebrow text-[0.58rem]">{num}</span>
                            )}
                          </div>
                          <span className="label-eyebrow mt-2 hidden text-[0.48rem] text-muted-foreground md:block">
                            {label}
                          </span>
                        </div>
                        {idx < stepLabels.length - 1 && (
                          <div
                            className={`mx-2 h-px flex-1 transition-colors duration-300 ${
                              step > num ? "bg-primary/50" : "bg-border"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field id="name" label={c.fields.name} type="text" placeholder={c.fields.namePlaceholder} autoComplete="name" value={form.name} onChange={set("name")} />
                      <Field id="email" label={c.fields.email} type="email" placeholder={c.fields.emailPlaceholder} autoComplete="email" value={form.email} onChange={set("email")} />
                    </div>
                    <Field id="phone" label={c.fields.phone} type="tel" placeholder={c.fields.phonePlaceholder} autoComplete="tel" value={form.phone} onChange={set("phone")} />
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!form.name || !form.email}
                        className="label-eyebrow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-50"
                      >
                        {c.buttons.next}
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
                        {c.fields.type}
                      </label>
                      <select value={form.type} onChange={set("type")} className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none">
                        <option value="">{c.fields.typeDefault}</option>
                        {c.fields.typeOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                          {c.fields.layout}
                        </label>
                        <select value={form.layout} onChange={set("layout")} className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none">
                          <option value="">{c.fields.layoutDefault}</option>
                          {c.fields.layoutOptions.map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <Field id="city" label={c.fields.city} type="text" placeholder={c.fields.cityPlaceholder} value={form.city} onChange={set("city")} />
                    </div>
                    <div className="flex justify-between pt-2">
                      <button type="button" onClick={() => setStep(1)} className="label-eyebrow inline-flex items-center gap-2 border border-border px-6 py-3 text-[0.68rem] text-foreground transition-colors hover:bg-secondary">
                        {c.buttons.back}
                      </button>
                      <button type="button" onClick={() => setStep(3)} className="label-eyebrow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85">
                        {c.buttons.next}
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
                        {c.fields.timeline}
                      </label>
                      <select value={form.timeline} onChange={set("timeline")} className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none">
                        <option value="">{c.fields.timelineDefault}</option>
                        {c.fields.timelineOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                        {c.fields.message}{" "}
                        <span className="normal-case tracking-normal">{c.fields.messageOptional}</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={set("message")}
                        className="w-full resize-none border-0 border-b border-input bg-transparent pb-2 font-body text-sm text-foreground focus:border-primary focus:outline-none placeholder:text-muted-foreground/50"
                        placeholder={c.fields.messagePlaceholder}
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600">{error}</p>
                    )}

                    <div className="flex justify-between pt-2">
                      <button type="button" onClick={() => setStep(2)} className="label-eyebrow inline-flex items-center gap-2 border border-border px-6 py-3 text-[0.68rem] text-foreground transition-colors hover:bg-secondary">
                        {c.buttons.back}
                      </button>
                      <button
                        type="button"
                        onClick={submit}
                        disabled={sending}
                        className="label-eyebrow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[0.68rem] text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
                      >
                        {sending ? c.buttons.sending : c.buttons.submit}
                        {!sending && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                          </svg>
                        )}
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
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        value={value}
        onChange={onChange}
        className="w-full border-0 border-b border-input bg-transparent pb-2.5 font-body text-sm text-foreground focus:border-primary focus:outline-none placeholder:text-muted-foreground/45"
      />
    </div>
  );
}
