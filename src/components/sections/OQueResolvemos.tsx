import { ArrowRight } from 'lucide-react'

import { buildWhatsAppLink } from '@/lib/whatsapp'
import { problemCards } from '@/constants/sections'

export default function OQueResolvemos() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <span className="section-kicker">você se reconhece?</span>
            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-[0.98] text-[var(--graphite-ink)] sm:text-5xl">
                Se algum desses problemas é seu, a IA resolve em dias.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
                Cada hora que você gasta em tarefa manual é dinheiro jogado fora.
                Veja onde a maioria dos nossos clientes estava antes de automatizar.
              </p>
            </div>

            <div className="surface-card rounded-[28px] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                problemas mais comuns
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {problemCards.map((card) => (
                  <span
                    key={card.tag}
                    className="rounded-full border border-[var(--ledger-line)] bg-white/65 px-3 py-1.5 text-xs font-medium text-[var(--graphite-ink)]"
                  >
                    {card.tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {problemCards.map((card, index) => {
            const Icon = card.icon
              const offset = index % 2 === 1 ? 'lg:ml-10' : 'lg:mr-10'
              const tones = [
                {
                  accent: 'var(--signal-blue)',
                  soft: 'var(--signal-blue-soft)',
                },
                {
                  accent: 'var(--amber-note)',
                  soft: 'var(--amber-note-soft)',
                },
                {
                  accent: 'var(--proof-green)',
                  soft: 'var(--proof-green-soft)',
                },
              ]
              const tone = tones[index % tones.length]

              return (
                <article
                  key={card.problem}
                  className={`surface-card-strong rounded-[30px] p-6 sm:p-7 ${offset}`}
                >
                  <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="rounded-[22px] p-3"
                          style={{ backgroundColor: tone.soft, color: tone.accent }}
                        >
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                          {card.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl leading-tight text-[var(--graphite-ink)] sm:text-[2rem]">
                        &ldquo;{card.problem}&rdquo;
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[15px] leading-relaxed text-[var(--ink-soft)] sm:text-base">
                        {card.solution}
                      </p>

                      <div className="rounded-[24px] border border-[var(--ledger-line)] bg-[var(--paper-ivory)] px-4 py-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                          resultado esperado
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--graphite-ink)]">
                          {card.outcome}
                        </p>
                      </div>

                      <a
                        href={buildWhatsAppLink(card.ctaMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                      >
                        Quero resolver isso
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
