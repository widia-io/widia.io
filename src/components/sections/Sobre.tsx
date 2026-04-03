import Logo from '@/components/Logo'
import { aboutBio, aboutHighlights } from '@/constants/sections'

export default function Sobre() {
  return (
    <section id="sobre" className="section section-anchor">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="overflow-hidden rounded-[34px] border border-[var(--ledger-line)] bg-[var(--graphite-ink)] p-6 text-[var(--paper-bright)] sm:p-7">
            <div className="flex min-h-[420px] flex-col justify-between rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(47,97,245,0.26),transparent_34%),radial-gradient(circle_at_bottom,rgba(171,111,44,0.2),transparent_38%),linear-gradient(180deg,#1e2128_0%,#14161b_100%)] p-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                  dossiê do fundador
                </p>
              </div>

              <div className="space-y-5">
                <Logo variant="compact" size="lg" />
                <div className="space-y-3">
                  <p className="font-display text-4xl leading-none text-white sm:text-5xl">
                    Bruno
                    <br />
                    Gonzaga
                  </p>
                  <p className="text-sm text-white/70">
                    Estrutura pronta para receber retrato real sem precisar redesenhar a seção.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="section-kicker">quem está por trás</span>
            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-[0.98] text-[var(--graphite-ink)] sm:text-5xl">
                19 anos de engenharia pesada. Agora trabalhando pra você.
              </h2>
              <p className="text-lg leading-relaxed text-[var(--ink-soft)]">
                {aboutBio}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutHighlights.map((item) => (
                <article key={item.label} className="surface-card rounded-[26px] p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--graphite-ink)]">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>

            <div className="surface-card rounded-[28px] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                a filosofia
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--graphite-ink)]">
                Empresa grande gasta milhões em tecnologia que você pode ter agora por uma
                fração do custo. A Widia existe para isso: pegar o que só gigante tinha acesso
                e colocar funcionando no seu negócio. Sem enrolação, sem código, sem complicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
