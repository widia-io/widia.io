import { ArrowRight } from 'lucide-react'

import { buildWhatsAppLink } from '@/lib/whatsapp'
import { CTA_MESSAGES } from '@/constants/cta-messages'

const sessionOutputs = [
  'mapa dos gargalos que mais custam tempo e dinheiro',
  'plano claro de quais automações implementar primeiro',
  'estimativa real de horas e custo que você vai economizar',
]

export default function CTAFinal() {
  const whatsAppLink = buildWhatsAppLink(CTA_MESSAGES.CTA_FINAL)

  return (
    <section className="section pt-8">
      <div className="container">
        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.08)] bg-[var(--graphite-ink)] px-6 py-8 text-[var(--paper-bright)] sm:px-8 lg:px-12 lg:py-12">
          <div className="absolute inset-y-0 left-0 w-56 bg-[radial-gradient(circle_at_center,rgba(47,97,245,0.28),transparent_70%)] blur-2xl" />
          <div className="absolute inset-y-0 right-0 w-56 bg-[radial-gradient(circle_at_center,rgba(171,111,44,0.22),transparent_70%)] blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/10 bg-white/7 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
                100% gratuita · sem compromisso
              </span>

              <div className="space-y-4">
                <h2 className="font-display text-4xl leading-[0.98] text-white sm:text-5xl">
                  Cada dia sem IA é dinheiro que você está deixando na mesa.
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-white/72">
                  Em 1h a gente mostra exatamente onde sua operação está sangrando tempo
                  e dinheiro com trabalho manual. Você sai com um plano claro para automatizar.
                  Sem custo, sem compromisso, sem enrolação.
                </p>
              </div>

              <div>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-secondary bg-white text-[var(--graphite-ink)]"
                >
                  Quero minha sessão gratuita agora
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/7 p-6 backdrop-blur-md sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                o que você leva da sessão
              </p>

              <div className="mt-5 space-y-4">
                {sessionOutputs.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                      {`0${index + 1}`}
                    </span>
                    <p className="text-sm leading-relaxed text-white/82 sm:text-[15px]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
