'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

import { CTA_MESSAGES } from '@/constants/cta-messages'
import { faqItems } from '@/constants/sections'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const whatsAppLink = buildWhatsAppLink(CTA_MESSAGES.SESSAO_GRATUITA)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-6">
            <span className="section-kicker">tira-dúvidas</span>
            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-[0.98] text-[var(--graphite-ink)] sm:text-5xl">
                Ainda tem dúvida? A gente responde aqui.
              </h2>
              <p className="text-lg leading-relaxed text-[var(--ink-soft)]">
                Se sua pergunta não estiver aqui, agenda a sessão gratuita. Em 1h a gente tira
                todas as suas dúvidas e já mostra onde IA encaixa no seu negócio.
              </p>
            </div>

            <div className="surface-card rounded-[28px] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                não achou sua resposta?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-ink)]">
                Fala com a gente direto no WhatsApp. Sem robô, sem fila. Resposta real de quem
                entende do assunto.
              </p>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link mt-5"
              >
                Falar no WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="surface-card-strong rounded-[34px] p-3 sm:p-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-[24px] border px-5 transition-all duration-200 ${
                  openIndex === index
                    ? 'border-[var(--ledger-line)] bg-white/78'
                    : 'border-transparent bg-transparent'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-[var(--graphite-ink)]">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[var(--ink-soft)] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pb-5 -mt-1">
                    <p className="text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
