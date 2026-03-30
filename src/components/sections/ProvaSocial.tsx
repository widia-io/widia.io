import { ArrowUpRight, Quote } from 'lucide-react'

import { caseStudies, testimonials } from '@/constants/sections'

export default function ProvaSocial() {
  const [featured, ...others] = testimonials

  return (
    <section className="section">
      <div className="container">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="section-kicker">prova em operação</span>
            <h2 className="font-display text-4xl leading-[0.98] text-[var(--graphite-ink)] sm:text-5xl">
              Produtos em produção e resultados percebidos por quem colocou a IA na rotina.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
            O valor aqui aparece em dois lugares: em produto que já foi para o ar e em rotina que
            ficou menos dependente de tarefa manual, improviso e retrabalho.
          </p>
        </div>

        <div className="mb-5 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <article
              key={caseStudy.name}
              className={`rounded-[32px] border p-6 sm:p-7 ${
                index === 0
                  ? 'bg-[var(--graphite-ink)] text-[var(--paper-bright)] border-[rgba(255,255,255,0.08)]'
                  : 'surface-card-strong'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        index === 0
                          ? 'border border-white/12 bg-white/8 text-white/84'
                          : 'border border-[var(--ledger-line)] bg-white/75 text-[var(--graphite-ink)]'
                      }`}
                    >
                      {caseStudy.category}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        index === 0
                          ? 'border border-white/12 bg-white/8 text-white/84'
                          : 'border border-[var(--ledger-line)] bg-white/75 text-[var(--graphite-ink)]'
                      }`}
                    >
                      {caseStudy.status}
                    </span>
                  </div>

                  <div>
                    <p className={`font-display text-[2rem] leading-none ${index === 0 ? 'text-white' : 'text-[var(--graphite-ink)]'}`}>
                      {caseStudy.name}
                    </p>
                    <p className={`mt-1 font-mono text-[11px] uppercase tracking-[0.2em] ${index === 0 ? 'text-white/55' : 'text-[var(--ink-soft)]'}`}>
                      {caseStudy.url.replace('https://', '')}
                    </p>
                  </div>
                </div>

                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                    index === 0
                      ? 'border border-white/12 bg-white/8 text-white hover:bg-white/12'
                      : 'border border-[var(--ledger-line)] bg-white/75 text-[var(--graphite-ink)] hover:bg-white'
                  }`}
                >
                  Ver site
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className={`font-display text-2xl leading-tight ${index === 0 ? 'text-white' : 'text-[var(--graphite-ink)]'}`}>
                  {caseStudy.headline}
                </h3>
                <p className={`text-[15px] leading-relaxed ${index === 0 ? 'text-white/72' : 'text-[var(--ink-soft)]'}`}>
                  {caseStudy.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.evidence.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      index === 0
                        ? 'border border-white/12 bg-white/8 text-white/84'
                        : 'border border-[var(--ledger-line)] bg-[var(--paper-ivory)] text-[var(--graphite-ink)]'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
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
