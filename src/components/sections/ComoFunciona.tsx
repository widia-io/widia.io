import { steps } from '@/constants/sections'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section section-anchor">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <span className="section-kicker">simples e direto</span>
            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-[0.98] text-[var(--graphite-ink)] sm:text-5xl">
                3 passos para sua operação rodar no automático.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
                Sem curso, sem teoria, sem enrolação. A gente entra na sua operação,
                constrói a automação e acompanha até você ver resultado real.
              </p>
            </div>

            <div className="surface-card rounded-[28px] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                o compromisso da Widia
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-ink)]">
                Se a automação não resolver seu problema, você não paga. Simples assim.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-[var(--ledger-line)] lg:hidden" />
            <div className="absolute left-10 right-10 top-10 hidden h-px bg-[var(--ledger-line)] lg:block" />

            <div className="grid gap-5 lg:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon
                const offset = index === 1 ? 'lg:translate-y-10' : index === 2 ? 'lg:translate-y-4' : ''

                return (
                  <article
                    key={step.number}
                    className={`surface-card rounded-[30px] p-6 ${offset}`}
                  >
                    <div className="relative z-10 space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="rounded-[22px] bg-[var(--signal-blue-soft)] p-3 text-[var(--signal-blue)]">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                          {`passo 0${step.number}`}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-display text-2xl leading-tight text-[var(--graphite-ink)]">
                          {step.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-[var(--ink-soft)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
