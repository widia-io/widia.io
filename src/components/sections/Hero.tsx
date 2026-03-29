import {
  ArrowRight,
  CreditCard,
  FileSpreadsheet,
  Instagram,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

import { buildWhatsAppLink } from '@/lib/whatsapp'
import { CTA_MESSAGES } from '@/constants/cta-messages'
import { steps } from '@/constants/sections'

const intakeSignals = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: 'triagem e resposta inicial',
    accent: 'var(--proof-green)',
    soft: 'var(--proof-green-soft)',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel',
    detail: 'orçamento e regra manual',
    accent: 'var(--amber-note)',
    soft: 'var(--amber-note-soft)',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    detail: 'roteiros e cadência de conteúdo',
    accent: 'var(--signal-blue)',
    soft: 'var(--signal-blue-soft)',
  },
  {
    icon: CreditCard,
    title: 'Pix e assinatura',
    detail: 'cobrança recorrente organizada',
    accent: 'var(--graphite-ink)',
    soft: 'rgba(23, 25, 30, 0.08)',
  },
]

const outcomeSignals = [
  'atendimento sem fila',
  'orçamentos em minutos',
  'checkout recorrente pronto',
]

const proofPills = [
  { label: 'Sem código', color: 'var(--signal-blue)' },
  { label: 'Resultado no primeiro mês', color: 'var(--proof-green)' },
  { label: 'Suporte dedicado', color: 'var(--amber-note)' },
]

export default function Hero() {
  const whatsAppLink = buildWhatsAppLink(CTA_MESSAGES.HERO)

  return (
    <section className="section pt-6 lg:pt-10">
      <div className="container">
        <div className="surface-panel trace-grid rounded-[34px] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-2xl space-y-6">
              <span className="section-kicker">atelier operacional para pequenas empresas</span>

              <div className="space-y-5">
                <h1 className="font-display text-5xl leading-[0.96] text-[var(--graphite-ink)] sm:text-6xl lg:text-7xl">
                  IA aplicada ao que trava sua operação.
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
                  Atendimento, orçamentos, conteúdo e cobrança deixam de depender de improviso.
                  A Widia entra no fluxo, organiza a rotina e acompanha até funcionar.
                </p>
              </div>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-primary group text-base sm:text-[15px]"
                >
                  Agendar sessão gratuita de 1h
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#como-funciona" className="action-secondary text-base sm:text-[15px]">
                  Ver como funciona
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {proofPills.map((pill) => (
                  <div key={pill.label} className="metric-pill justify-center sm:justify-start">
                    <span className="signal-dot" style={{ backgroundColor: pill.color }} />
                    <span>{pill.label}</span>
                  </div>
                ))}
              </div>

              <div className="surface-card rounded-[28px] p-4 sm:p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  Sem código. Sem complicação.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
                  Você continua usando o que já conhece. A diferença é que o fluxo passa a
                  trabalhar a seu favor, com mais clareza, menos repetição e apoio próximo.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="surface-card-strong trace-grid rounded-[30px] p-5 sm:p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                      painel de orquestração
                    </p>
                    <h2 className="font-display mt-3 text-2xl leading-tight text-[var(--graphite-ink)] sm:text-3xl">
                      O que entra no fluxo da Widia
                    </h2>
                  </div>
                  <div className="rounded-full border border-[var(--ledger-line)] bg-white/70 p-3 text-[var(--signal-blue)]">
                    <Sparkles size={18} />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {intakeSignals.map((signal) => {
                    const Icon = signal.icon
                    return (
                      <div
                        key={signal.title}
                        className="surface-card rounded-[24px] p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="rounded-2xl p-3"
                            style={{ backgroundColor: signal.soft, color: signal.accent }}
                          >
                            <Icon size={18} />
                          </div>
                          <div className="space-y-1">
                            <p className="font-display text-lg text-[var(--graphite-ink)]">
                              {signal.title}
                            </p>
                            <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                              {signal.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[var(--ledger-line)]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    widia em ação
                  </span>
                  <div className="h-px flex-1 bg-[var(--ledger-line)]" />
                </div>

                <div className="surface-card rounded-[26px] p-4 sm:p-5">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {steps.map((step) => {
                      const Icon = step.icon
                      return (
                        <div key={step.number} className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-[var(--signal-blue-soft)] p-2.5 text-[var(--signal-blue)]">
                              <Icon size={16} />
                            </div>
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                              {`0${step.number}`}
                            </span>
                          </div>
                          <p className="font-display text-lg leading-tight text-[var(--graphite-ink)]">
                            {step.title}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {outcomeSignals.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-[var(--ledger-line)] bg-white/70 px-4 py-3"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                        {`resultado 0${index + 1}`}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[var(--graphite-ink)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
