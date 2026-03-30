import { ArrowRight } from 'lucide-react'

import { buildWhatsAppLink } from '@/lib/whatsapp'
import { serviceItems } from '@/constants/sections'

export default function Services() {
  return (
    <section id="servicos" className="section section-anchor">
      <div className="container">
        <div className="surface-panel trace-grid rounded-[34px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="space-y-6">
              <span className="section-kicker">formas de entrar</span>
              <div className="space-y-4">
                <h2 className="font-display text-4xl leading-[0.98] text-[var(--graphite-ink)] sm:text-5xl">
                  Escolha o ritmo que faz sentido para o momento da sua operação.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
                  Tem negócio que precisa só de clareza para começar. Tem negócio que já está
                  pronto para uma entrega pontual. E tem rotina que pede evolução contínua.
                </p>
              </div>

              <div className="surface-card rounded-[28px] p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  entrada recomendada
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-ink)]">
                  Se você ainda não sabe onde a IA encaixa melhor, comece pela sessão gratuita.
                  Ela é o jeito mais rápido de sair do campo da ideia e entrar na decisão certa.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {serviceItems.map((item, index) => (
                <article
                  key={item.name}
                  className={`rounded-[30px] border p-6 sm:p-7 ${
                    item.highlight
                      ? 'border-[var(--signal-blue)] bg-white shadow-[0_18px_38px_rgba(47,97,245,0.12)]'
                      : 'surface-card'
                  }`}
                >
                  <div className="grid gap-5 lg:grid-cols-[0.18fr_0.58fr_0.24fr] lg:items-start">
                    <div className="space-y-3">
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                        {`0${index + 1}`}
                      </p>
                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${
                          item.highlight
                            ? 'bg-[var(--signal-blue-soft)] text-[var(--signal-blue)]'
                            : 'border border-[var(--ledger-line)] bg-white/70 text-[var(--graphite-ink)]'
                        }`}
                      >
                        {item.format}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-[1.7rem] leading-tight text-[var(--graphite-ink)]">
                          {item.name}
                        </h3>
                        {item.highlight && (
                          <span className="rounded-full bg-[var(--graphite-ink)] px-3 py-1 text-xs font-medium text-[var(--paper-bright)]">
                            recomendado
                          </span>
                        )}
                      </div>

                      <p className="text-[15px] leading-relaxed text-[var(--ink-soft)]">
                        {item.description}
                      </p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[22px] border border-[var(--ledger-line)] bg-[var(--paper-ivory)] px-4 py-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                            ideal para
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--graphite-ink)]">
                            {item.bestFor}
                          </p>
                        </div>
                        <div className="rounded-[22px] border border-[var(--ledger-line)] bg-[var(--paper-ivory)] px-4 py-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                            o que entrega
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--graphite-ink)]">
                            {item.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex lg:justify-end">
                      <a
                        href={buildWhatsAppLink(item.ctaMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={item.highlight ? 'action-primary w-full lg:w-auto' : 'action-secondary w-full lg:w-auto'}
                      >
                        {item.highlight ? 'Agendar agora' : 'Saiba mais'}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
