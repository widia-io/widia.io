import { Quote } from 'lucide-react'

import { testimonials } from '@/constants/sections'

export default function ProvaSocial() {
  const [featured, ...others] = testimonials

  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="section-kicker">prova em operação</span>
            <h2 className="font-display text-4xl leading-[0.98] text-[var(--graphite-ink)] sm:text-5xl">
              Resultado percebido por quem colocou a IA dentro da rotina.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            O valor aqui não aparece em jargão. Ele aparece em tempo recuperado, decisão mais
            clara e operação menos dependente de improviso.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="overflow-hidden rounded-[34px] border border-[var(--ledger-line)] bg-[var(--graphite-ink)] p-7 text-[var(--paper-bright)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/85">
                {featured.focus}
              </span>
              <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/85">
                {featured.impact}
              </span>
            </div>

            <Quote size={28} className="mt-8 text-white/30" />

            <p className="font-display mt-5 text-3xl leading-[1.05] text-white sm:text-[2.6rem]">
              &ldquo;{featured.quote}&rdquo;
            </p>

            <div className="mt-8 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                  cliente
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{featured.name}</p>
                <p className="text-sm text-white/68">{featured.role}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                  efeito na rotina
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/82">
                  Menos tempo gasto em tarefa repetitiva, mais energia para o trabalho que realmente
                  move o negócio.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {others.map((testimonial) => (
              <article
                key={testimonial.name}
                className="surface-card-strong rounded-[30px] p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--ledger-line)] bg-white/75 px-3 py-1.5 text-xs font-medium text-[var(--graphite-ink)]">
                    {testimonial.focus}
                  </span>
                  <span className="rounded-full border border-[var(--ledger-line)] bg-white/75 px-3 py-1.5 text-xs font-medium text-[var(--graphite-ink)]">
                    {testimonial.impact}
                  </span>
                </div>

                <Quote size={22} className="mt-6 text-[var(--ledger-line-strong)]" />

                <p className="mt-4 text-lg leading-relaxed text-[var(--graphite-ink)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 border-t border-[var(--ledger-line)] pt-4">
                  <p className="text-sm font-semibold text-[var(--graphite-ink)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--ink-soft)]">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
