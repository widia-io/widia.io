// Pra adicionar proposta nova: criar `content/<slug>.ts` copiando vitoria-aver.ts,
// importar + registrar em `content/index.ts`. Slug do arquivo define a URL.
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Compass,
  Layers,
  LifeBuoy,
  MessageCircle,
  Package,
  Sparkles,
  Wrench,
} from 'lucide-react'
import WidiaLogo from '@/components/ui/WidiaLogo'
import { PrintButton } from '@/components/ui/PrintButton'
import { BlurredPrice } from '@/components/ui/BlurredPrice'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { getProposal, getProposalSlugs } from './content'

export function generateStaticParams() {
  return getProposalSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const proposal = getProposal(params.slug)
  if (!proposal) return {}
  return {
    title: `${proposal.hero.title} | Proposta Widia`,
    description: proposal.hero.subtitle,
  }
}

export default function ProposalPage({ params }: { params: { slug: string } }) {
  const proposal = getProposal(params.slug)
  if (!proposal) notFound()

  return (
    <div className="relative min-h-screen pb-20 pt-10 lg:pt-14">
      <div className="container space-y-8">
        <header className="surface-panel trace-grid rounded-[34px] px-6 py-8 sm:px-10 sm:py-10">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-5">
              <WidiaLogo className="flex-shrink-0" />
              <div className="flex flex-col gap-3">
                <span
                  className="section-kicker"
                  style={{
                    backgroundColor: 'var(--signal-blue-soft)',
                    borderColor: 'rgba(47, 97, 245, 0.28)',
                    color: 'var(--signal-blue)',
                  }}
                >
                  <Sparkles size={12} />
                  {proposal.kicker}
                </span>
                <h1 className="font-display text-3xl leading-[1.05] text-[var(--graphite-ink)] sm:text-4xl lg:text-[48px]">
                  {proposal.hero.title}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
                  {proposal.hero.subtitle}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  {proposal.version} · {proposal.clientLabel}
                </p>
              </div>
            </div>
            <div className="print:hidden">
              <PrintButton />
            </div>
          </div>
        </header>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="contexto">
          <div className="relative">
            <span className="section-kicker">01 · entendimento do contexto</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              O que está em jogo.
            </h2>
            <div className="mt-6 surface-card-strong rounded-[24px] p-6 sm:p-7">
              <p className="text-base leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
                {proposal.context}
              </p>
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="solucao">
          <div className="relative">
            <span className="section-kicker">02 · a solução</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              A proposta em alto nível.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {proposal.solution.intro}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {proposal.solution.bullets.map((item) => (
                <li key={item} className="surface-card rounded-[20px] p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--proof-green)' }}
                    />
                    <span className="text-sm leading-relaxed text-[var(--graphite-ink)]">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="como-funciona">
          <div className="relative">
            <span className="section-kicker">03 · como funciona</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Por baixo do capô, sem mistério.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)]">
              {proposal.howItWorks.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proposal.howItWorks.layers.map((layer) => (
                <div key={layer.number} className="surface-card rounded-[24px] p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-2xl p-3"
                      style={{ backgroundColor: 'var(--signal-blue-soft)', color: 'var(--signal-blue)' }}
                    >
                      <Layers size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                        camada {layer.number}
                      </p>
                      <p className="font-display mt-1 text-xl text-[var(--graphite-ink)]">{layer.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{layer.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {proposal.howItWorks.note ? (
              <div
                className="mt-6 flex items-start gap-3 rounded-[20px] p-4"
                style={{ backgroundColor: 'var(--amber-note-soft)' }}
              >
                <Compass size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--amber-note)' }} />
                <p className="text-sm leading-relaxed text-[var(--graphite-ink)]">{proposal.howItWorks.note}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="incluso">
          <div className="relative">
            <span className="section-kicker">04 · o que está incluso</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Tudo dentro do pacote.
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {proposal.included.map((item) => (
                <li key={item} className="surface-card rounded-[20px] p-4">
                  <div className="flex items-start gap-3">
                    <Package
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--graphite-ink)' }}
                    />
                    <span className="text-sm leading-relaxed text-[var(--graphite-ink)]">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="cronograma">
          <div className="relative">
            <span className="section-kicker">05 · cronograma</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Do kickoff ao go-live.
            </h2>

            <div className="mt-8 surface-card-strong rounded-[28px] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-2xl p-3"
                  style={{ backgroundColor: 'var(--signal-blue-soft)', color: 'var(--signal-blue)' }}
                >
                  <Calendar size={18} />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  {proposal.timeline.length} etapas
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {proposal.timeline.map((phase, index) => (
                  <div key={phase.label} className="surface-card rounded-[20px] p-4">
                    <div className="flex items-start gap-3">
                      <span
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold"
                        style={{ backgroundColor: 'var(--graphite-ink)', color: 'var(--paper-bright)' }}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-display text-base text-[var(--graphite-ink)]">{phase.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{phase.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="investimento">
          <div className="relative">
            <span className="section-kicker">06 · investimento</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Valores — clique pra revelar.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]">
              Os valores abaixo estão borrados por padrão. Clique em cada um pra revelar.
            </p>

            <div className="mt-8 space-y-4">
              {proposal.investment.setup.map((row) => (
                <div key={row.item} className="surface-card rounded-[24px] p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                        setup
                      </p>
                      <p className="font-display mt-1 text-lg text-[var(--graphite-ink)]">{row.item}</p>
                    </div>
                    <BlurredPrice className="font-display text-2xl text-[var(--graphite-ink)]">
                      {row.value}
                    </BlurredPrice>
                  </div>
                </div>
              ))}

              {proposal.investment.recurring.map((row) => (
                <div key={row.item} className="surface-card rounded-[24px] p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                        recorrente
                      </p>
                      <p className="font-display mt-1 text-lg text-[var(--graphite-ink)]">{row.item}</p>
                    </div>
                    <BlurredPrice className="font-display text-2xl text-[var(--graphite-ink)]">
                      {row.value}
                    </BlurredPrice>
                  </div>
                </div>
              ))}
            </div>

            {proposal.investment.note ? (
              <div
                className="mt-6 flex items-start gap-3 rounded-[20px] p-4"
                style={{ backgroundColor: 'var(--proof-green-soft)' }}
              >
                <LifeBuoy size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--proof-green)' }} />
                <p className="text-sm leading-relaxed text-[var(--graphite-ink)]">{proposal.investment.note}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="proximos-passos">
          <div className="relative">
            <span className="section-kicker">07 · próximos passos</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Como a gente começa.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {proposal.nextSteps.map((step, index) => (
                <div key={step} className="surface-card rounded-[24px] p-5">
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold"
                      style={{ backgroundColor: 'var(--proof-green)', color: 'var(--paper-bright)' }}
                    >
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--graphite-ink)]">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
              <div className="flex items-start gap-3">
                <Wrench size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--ink-soft)' }} />
                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                  Dúvidas, ajustes ou quer agendar a call? Só chamar no WhatsApp.
                </p>
              </div>
              <a
                href={buildWhatsAppLink(proposal.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition-colors"
                style={{ backgroundColor: 'var(--graphite-ink)', color: 'var(--paper-bright)' }}
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-4 text-center print:mt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
            © Widia.io · contato@widia.io
          </p>
        </footer>
      </div>
    </div>
  )
}
