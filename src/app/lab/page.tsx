import Link from 'next/link'
import { ArrowRight, FlaskConical, Sparkles } from 'lucide-react'
import WidiaLogo from '@/components/ui/WidiaLogo'
import { getAllLabCases } from './[slug]/content'

function formatDate(iso: string): string {
  const date = new Date(iso + 'T12:00:00')
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function LabIndexPage() {
  const cases = getAllLabCases()

  return (
    <div className="relative min-h-screen pb-20 pt-10 lg:pt-14">
      <div className="container space-y-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)] transition-colors hover:text-[var(--graphite-ink)]"
          >
            ← widia.io
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
              <FlaskConical size={12} />
              Lab
            </span>
            <h1 className="font-display text-3xl leading-[1.05] text-[var(--graphite-ink)] sm:text-4xl lg:text-[56px]">
              Casos reais. <br />
              Menos hype, mais aplicação.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              Experimentos práticos de IA aplicada a negócios: o que funcionou, o que quebrou, em quanto tempo, por quanto
              custou. Sem promessa milagrosa, só o processo real.
            </p>
          </div>
        </header>

        <section className="space-y-4">
          {cases.length === 0 ? (
            <div className="surface-panel rounded-[34px] px-6 py-10 text-center sm:px-10">
              <p className="text-base text-[var(--ink-soft)]">Em breve o primeiro caso.</p>
            </div>
          ) : (
            cases.map((labCase) => (
              <Link
                key={labCase.slug}
                href={`/lab/${labCase.slug}`}
                className="surface-panel block rounded-[34px] px-6 py-8 transition-all hover:-translate-y-0.5 sm:px-10 sm:py-10"
              >
                <div className="relative flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
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
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                      {formatDate(labCase.publishedAt)}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl leading-tight text-[var(--graphite-ink)] sm:text-3xl">
                    {labCase.hero.title}
                  </h2>
                  <p className="max-w-3xl text-base leading-relaxed text-[var(--ink-soft)]">
                    {labCase.hero.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {labCase.metrics.slice(0, 3).map((metric) => (
                      <span
                        key={metric.label}
                        className="surface-card rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--graphite-ink)]"
                      >
                        {metric.label}: {metric.value}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--graphite-ink)]">
                    Abrir case <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))
          )}
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
