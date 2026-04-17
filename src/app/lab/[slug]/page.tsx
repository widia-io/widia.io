// Pra adicionar case novo: criar `content/<slug>.ts` copiando ecommerce-1h.ts,
// importar + registrar em `content/index.ts`. Slug do arquivo define a URL.
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Clock,
  Code2,
  Compass,
  Gauge,
  Lightbulb,
  ListOrdered,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'
import WidiaLogo from '@/components/ui/WidiaLogo'
import { getLabCase, getLabCaseSlugs } from './content'

export function generateStaticParams() {
  return getLabCaseSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const labCase = getLabCase(params.slug)
  if (!labCase) return {}
  return {
    title: `${labCase.hero.title} | Lab widia.io`,
    description: labCase.hero.subtitle,
  }
}

function formatDate(iso: string): string {
  const date = new Date(iso + 'T12:00:00')
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function LabCasePage({ params }: { params: { slug: string } }) {
  const labCase = getLabCase(params.slug)
  if (!labCase) notFound()

  return (
    <div className="relative min-h-screen pb-20 pt-10 lg:pt-14">
      <div className="container space-y-8">
        <div className="flex items-center justify-between">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--graphite-ink)]"
          >
            <ArrowLeft size={16} /> voltar pro Lab
          </Link>
          <WidiaLogo />
        </div>

        <header className="surface-panel trace-grid rounded-[34px] px-6 py-8 sm:px-10 sm:py-10">
          <div className="relative flex flex-col gap-5">
            <span
              className="section-kicker"
              style={{
                backgroundColor: 'var(--signal-blue-soft)',
                borderColor: 'rgba(47, 97, 245, 0.28)',
                color: 'var(--signal-blue)',
              }}
            >
              <Sparkles size={12} />
              {labCase.tag}
            </span>
            <h1 className="font-display text-3xl leading-[1.05] text-[var(--graphite-ink)] sm:text-4xl lg:text-[48px]">
              {labCase.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              {labCase.hero.subtitle}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
              publicado em {formatDate(labCase.publishedAt)}
            </p>

            <div className="mt-2 surface-card-strong rounded-[24px] p-6 sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">tl;dr</p>
              <p className="mt-2 text-base leading-relaxed text-[var(--graphite-ink)] sm:text-[15px]">
                {labCase.hero.tldr}
              </p>
            </div>
          </div>
        </header>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="numeros">
          <div className="relative">
            <span className="section-kicker">
              <Gauge size={12} /> os números
            </span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              O que mediu, em fatos.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {labCase.metrics.map((metric) => (
                <div key={metric.label} className="surface-card rounded-[24px] p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                    {metric.label}
                  </p>
                  <p className="font-display mt-2 text-2xl text-[var(--graphite-ink)] sm:text-3xl">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="stack">
          <div className="relative">
            <span className="section-kicker">
              <Boxes size={12} /> stack
            </span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              O que compôs o resultado.
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {labCase.stack.map((item) => (
                <li key={item.name} className="surface-card rounded-[20px] p-5">
                  <p className="font-display text-lg text-[var(--graphite-ink)]">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{item.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="timeline">
          <div className="relative">
            <span className="section-kicker">
              <Clock size={12} /> timeline real
            </span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Minuto a minuto.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)]">
              Nenhuma etapa foi cortada ou omitida. A ordem abaixo reflete o fluxo real executado.
            </p>

            <div className="mt-8 space-y-4">
              {labCase.timeline.map((phase, index) => (
                <div key={phase.range} className="surface-card rounded-[24px] p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold"
                      style={{ backgroundColor: 'var(--graphite-ink)', color: 'var(--paper-bright)' }}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                        {phase.range}
                      </p>
                      <p className="font-display mt-1 text-lg text-[var(--graphite-ink)] sm:text-xl">
                        {phase.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{phase.desc}</p>
                      {phase.bullets && phase.bullets.length > 0 ? (
                        <ul className="mt-4 space-y-2">
                          {phase.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--graphite-ink)]"
                            >
                              <ArrowRight
                                size={14}
                                className="mt-1 flex-shrink-0"
                                style={{ color: 'var(--signal-blue)' }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="prompts">
          <div className="relative">
            <span className="section-kicker">
              <ListOrdered size={12} /> prompts que fizeram diferença
            </span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Os prompts, na íntegra.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)]">
              Copie, adapte ao seu contexto. A estrutura importa mais do que as palavras exatas.
            </p>

            <div className="mt-8 space-y-5">
              {labCase.prompts.map((prompt) => (
                <article key={prompt.label} className="surface-card-strong rounded-[24px] p-6 sm:p-7">
                  <p className="font-display text-xl text-[var(--graphite-ink)]">{prompt.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{prompt.context}</p>
                  <pre className="mt-5 whitespace-pre-wrap rounded-[16px] bg-[var(--canvas-ash)] p-5 font-mono text-[13px] leading-relaxed text-[var(--graphite-ink)]">
                    {prompt.body}
                  </pre>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="gotchas">
          <div className="relative">
            <span className="section-kicker">
              <ShieldAlert size={12} /> o que deu errado
            </span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Nem tudo saiu redondo.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)]">
              Três tropeços reais durante a execução e como foram resolvidos.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-1">
              {labCase.gotchas.map((item) => (
                <div key={item.title} className="surface-card rounded-[24px] p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-2xl p-3"
                      style={{ backgroundColor: 'var(--amber-note-soft)', color: 'var(--amber-note)' }}
                    >
                      <ShieldAlert size={18} />
                    </div>
                    <div>
                      <p className="font-display text-lg text-[var(--graphite-ink)]">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="contexto">
          <div className="relative">
            <span className="section-kicker">
              <Compass size={12} /> contexto
            </span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Por que esse case existe.
            </h2>
            <div className="mt-6 surface-card-strong rounded-[24px] p-6 sm:p-7">
              <p className="text-base leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
                {labCase.context}
              </p>
            </div>

            {labCase.modelNote ? (
              <div
                className="mt-5 flex items-start gap-3 rounded-[20px] p-5"
                style={{ backgroundColor: 'var(--signal-blue-soft)' }}
              >
                <Lightbulb size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--signal-blue)' }} />
                <p className="text-sm leading-relaxed text-[var(--graphite-ink)]">{labCase.modelNote}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="proximo-passo">
          <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div
                className="rounded-2xl p-3"
                style={{ backgroundColor: 'var(--proof-green-soft)', color: 'var(--proof-green)' }}
              >
                <Code2 size={18} />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  {labCase.nextStep.kicker}
                </p>
                <p className="font-display mt-1 text-xl text-[var(--graphite-ink)] sm:text-2xl">
                  {labCase.nextStep.label}
                </p>
              </div>
            </div>
            <Link
              href={labCase.nextStep.href}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition-colors"
              style={{ backgroundColor: 'var(--graphite-ink)', color: 'var(--paper-bright)' }}
            >
              Ver detalhes
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <footer className="pt-4 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
            © widia.io · contato@widia.io
          </p>
        </footer>
      </div>
    </div>
  )
}
