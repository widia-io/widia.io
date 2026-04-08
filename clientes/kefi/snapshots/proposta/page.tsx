import WidiaLogo from '@/components/ui/WidiaLogo'
import { PrintButton } from '@/components/ui/PrintButton'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import {
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Shield,
  Code,
  MessageCircle,
  Sparkles,
  LayoutDashboard,
  Megaphone,
  Tag,
  Globe,
  ArrowRight,
} from 'lucide-react'

const executiveSummaryCards = [
  {
    icon: DollarSign,
    accent: 'var(--proof-green)',
    soft: 'var(--proof-green-soft)',
    value: 'R$ 1.000',
    label: 'Valor fechado · pagamento único',
  },
  {
    icon: Clock,
    accent: 'var(--signal-blue)',
    soft: 'var(--signal-blue-soft)',
    value: '7 a 10 dias',
    label: 'Prazo de entrega',
  },
  {
    icon: LayoutDashboard,
    accent: 'var(--amber-note)',
    soft: 'var(--amber-note-soft)',
    value: 'Painel admin',
    label: 'Você mesma gerencia o catálogo',
  },
  {
    icon: Globe,
    accent: 'var(--graphite-ink)',
    soft: 'rgba(23, 25, 30, 0.08)',
    value: '1 ano grátis',
    label: 'Domínio + hospedagem inclusos',
  },
] as const

const currentScenario = [
  'Venda passa 100% por DM do Instagram e WhatsApp',
  'Sem site próprio — catálogo disperso em posts e stories',
  'Envio pra todo Brasil sem canal centralizado pra mostrar a marca',
  'Identidade visual já forte, mas sem vitrine digital à altura',
] as const

type ScopeBlock = {
  key: string
  number: string
  icon: typeof Sparkles
  accent: string
  soft: string
  title: string
  tag?: string
  description?: string
  items: readonly string[]
  footer?: { icon: typeof Tag; text: string }
}

const scopeBlocks: readonly ScopeBlock[] = [
  {
    key: 'landing',
    number: '01',
    icon: Sparkles,
    accent: 'var(--amber-note)',
    soft: 'var(--amber-note-soft)',
    title: 'Site institucional',
    items: [
      'Landing page responsiva na identidade KEFI (sand, serifas, tom slow fashion)',
      'História, valores e pilares da marca (Conforto, Qualidade, Consciência)',
      'Seção de coleção em destaque puxando produtos cadastrados no painel',
      'Botão "Comprar no WhatsApp" em todas as seções',
      'Depoimentos de clientes',
      'SEO básico + integração Google Analytics',
      '2 rodadas de ajuste de design inclusas',
    ],
  },
  {
    key: 'admin',
    number: '02',
    icon: LayoutDashboard,
    accent: 'var(--signal-blue)',
    soft: 'var(--signal-blue-soft)',
    title: 'Painel administrativo',
    tag: 'autonomia total',
    description: 'Área privada onde a Tamyres gerencia tudo sozinha, sem depender de desenvolvedor.',
    items: [
      'Login seguro exclusivo pra Tamyres',
      'Cadastrar, editar e remover produtos com foto, nome, descrição e preço',
      'Upload de múltiplas fotos por produto (drag and drop)',
      'Marcar produtos como destaque ou esgotado',
      'Organizar por categoria (tops, leggings, conjuntos, etc.)',
      'Tudo sem precisar mexer em código ou chamar suporte',
    ],
  },
  {
    key: 'promo',
    number: '03',
    icon: Megaphone,
    accent: 'var(--proof-green)',
    soft: 'var(--proof-green-soft)',
    title: 'Promoções, cupons e banner',
    items: [
      'Cadastro de promoções com título, descrição e desconto',
      'Criação de vouchers/cupons com código personalizado',
      'Banner automático no topo do site quando há promoção ativa',
      'Agendamento: defina data de início e fim da promoção',
      'Ativar / desativar promoções com um clique',
    ],
    footer: {
      icon: Tag,
      text: 'Na prática: ao ativar uma promoção no painel, um banner aparece automaticamente no topo do site com o código do cupom. Ao fim da data programada, some sozinho.',
    },
  },
]

const timeline = [
  'Briefing e coleta de referências visuais, fotos e textos base',
  'Design alinhado à identidade KEFI',
  'Desenvolvimento da landing + painel administrativo',
  'Cadastro inicial dos produtos junto com a Tamyres',
  '2 rodadas de ajustes',
  'Publicação, configuração do domínio e go-live',
] as const

const terms = [
  {
    icon: DollarSign,
    title: 'Pagamento',
    text: 'R$ 1.000 em pagamento único, quitado integralmente na entrega do site no ar. Sem entrada, sem sinal.',
  },
  {
    icon: Globe,
    title: '1 ano de hospedagem grátis',
    text: 'Domínio .com.br + hospedagem Vercel + SSL por conta da Widia durante o primeiro ano.',
  },
  {
    icon: Code,
    title: 'Código e dados são seus',
    text: 'Tudo fica em nome da KEFI. Você pode migrar pra outro provedor quando quiser.',
  },
  {
    icon: CheckCircle2,
    title: 'Suporte pós-entrega',
    text: '30 dias de ajustes pequenos inclusos após o go-live. Depois disso, manutenção opcional a R$ 150/mês.',
  },
] as const

const nextSteps = [
  'Confirmação da proposta e kickoff',
  'Envio de fotos das peças, textos base e referências visuais',
  'Desenvolvimento (7 a 10 dias úteis)',
  'Revisão, ajustes e cadastro inicial dos produtos',
  'Go-live e pagamento dos R$ 1.000',
] as const

export default function TamyresKefiProposal() {
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
                    backgroundColor: 'var(--proof-green-soft)',
                    borderColor: 'rgba(33, 131, 99, 0.28)',
                    color: 'var(--proof-green)',
                  }}
                >
                  <CheckCircle2 size={12} />
                  Proposta fechada
                </span>
                <h1 className="font-display text-4xl leading-[1.02] text-[var(--graphite-ink)] sm:text-5xl lg:text-[56px]">
                  KEFI — Site institucional com painel administrativo
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
                  Marca autoral de slow fashion fitness com identidade visual forte, pronta pra ganhar uma
                  vitrine digital à altura.
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  v1.1 · Abril 2026 · Para Tamyres — KEFI
                </p>
              </div>
            </div>
            <div className="print:hidden">
              <PrintButton />
            </div>
          </div>
        </header>

        <section className="surface-panel trace-grid rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="resumo-executivo">
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="section-kicker">resumo executivo</span>
            </div>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Site institucional + painel próprio, tudo na identidade da KEFI.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              Um site institucional completo com <strong>painel administrativo próprio</strong> pra você
              gerenciar o catálogo, cadastrar promoções e cupons sem depender de ninguém. Tudo na identidade
              visual da marca, com 1 ano de hospedagem incluso.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {executiveSummaryCards.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.label} className="surface-card rounded-[24px] p-5">
                    <div
                      className="inline-flex rounded-2xl p-3"
                      style={{ backgroundColor: card.soft, color: card.accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <p className="font-display mt-4 text-2xl leading-tight text-[var(--graphite-ink)]">
                      {card.value}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{card.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 surface-card rounded-[24px] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                amostra do visual
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
                Dá uma olhada em{' '}
                <a
                  href="/preview/tamyres-kefi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  /preview/tamyres-kefi
                  <ArrowRight size={14} />
                </a>{' '}
                — é uma prévia de como o site ficará, já na identidade da KEFI.
              </p>
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="diagnostico">
          <div className="relative">
            <span className="section-kicker">01 · diagnóstico</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              A KEFI já tem marca. Falta vitrine própria.
            </h2>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="surface-card rounded-[24px] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  cenário atual
                </p>
                <ul className="mt-4 space-y-3">
                  {currentScenario.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                      <AlertCircle
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--amber-note)' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card-strong rounded-[24px] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  a oportunidade
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
                  A KEFI já construiu o mais difícil: <strong>identidade visual coerente</strong>, posicionamento
                  claro (slow fashion + bem-estar) e um tom de voz reconhecível. Um site na mesma linguagem do
                  feed, com painel próprio pra gerenciar produtos e promoções, transforma o Instagram em porta
                  de entrada e dá autonomia total pra Tamyres.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="escopo">
          <div className="relative">
            <span className="section-kicker">02 · escopo contratado</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Três entregas, um único pacote.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
              Site institucional, painel administrativo e sistema de promoções com banner automático.
            </p>

            <div className="mt-8 space-y-5">
              {scopeBlocks.map((block) => {
                const Icon = block.icon
                return (
                  <div key={block.key} className="surface-card rounded-[28px] p-6 sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className="rounded-2xl p-3"
                          style={{ backgroundColor: block.soft, color: block.accent }}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                            entrega {block.number}
                          </p>
                          <div className="mt-1 flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-2xl text-[var(--graphite-ink)]">{block.title}</h3>
                            {block.tag ? (
                              <span
                                className="inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                                style={{ backgroundColor: block.soft, color: block.accent }}
                              >
                                {block.tag}
                              </span>
                            ) : null}
                          </div>
                          {block.description ? (
                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)]">
                              {block.description}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-[var(--ink-soft)]"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: block.accent }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {block.footer ? (
                      <div
                        className="mt-5 flex items-start gap-3 rounded-[20px] p-4"
                        style={{ backgroundColor: block.soft }}
                      >
                        <block.footer.icon
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: block.accent }}
                        />
                        <p className="text-sm leading-relaxed text-[var(--graphite-ink)]">{block.footer.text}</p>
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="cronograma">
          <div className="relative">
            <span className="section-kicker">03 · cronograma</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              7 a 10 dias úteis, do briefing ao ar.
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
                  6 etapas
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {timeline.map((item, index) => (
                  <div key={item} className="surface-card rounded-[20px] p-4">
                    <div className="flex items-start gap-3">
                      <span
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold"
                        style={{ backgroundColor: 'var(--graphite-ink)', color: 'var(--paper-bright)' }}
                      >
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[var(--graphite-ink)]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="surface-panel rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="termos">
          <div className="relative">
            <span className="section-kicker">04 · termos e condições</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              Tudo claro, nada entre linhas.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {terms.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="surface-card rounded-[24px] p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="rounded-2xl p-3"
                        style={{ backgroundColor: 'rgba(23, 25, 30, 0.06)', color: 'var(--graphite-ink)' }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-display text-lg text-[var(--graphite-ink)]">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{item.text}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              className="mt-6 surface-card rounded-[24px] p-6"
              style={{ backgroundColor: 'var(--proof-green-soft)', borderColor: 'rgba(33, 131, 99, 0.28)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="rounded-2xl p-3"
                  style={{ backgroundColor: 'rgba(33, 131, 99, 0.18)', color: 'var(--proof-green)' }}
                >
                  <Shield size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--proof-green)]">
                    resumo do investimento
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--graphite-ink)] sm:text-[15px]">
                    <strong>R$ 1.000 em pagamento único, 100% na entrega do site no ar.</strong> Domínio,
                    hospedagem e SSL por conta da Widia durante o primeiro ano. A partir do 2º ano: custo de
                    ~R$ 40/ano (domínio) que você assume, ou contrata manutenção a R$ 150/mês.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-panel trace-grid rounded-[34px] px-6 py-8 sm:px-10 sm:py-10" id="proximos-passos">
          <div className="relative">
            <span className="section-kicker">05 · próximos passos</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--graphite-ink)] sm:text-4xl">
              É só confirmar que a gente começa.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {nextSteps.map((step, index) => (
                <div key={step} className="surface-card rounded-[24px] p-5">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold"
                      style={{ backgroundColor: 'var(--signal-blue-soft)', color: 'var(--signal-blue)' }}
                    >
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--graphite-ink)]">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center print:hidden">
              <a
                href={buildWhatsAppLink('Oi Bruno! Topei a proposta do site da KEFI, bora começar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="action-primary group text-base"
              >
                <MessageCircle size={18} />
                Confirmar e começar
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/preview/tamyres-kefi" target="_blank" rel="noopener noreferrer" className="action-secondary text-base">
                Ver prévia do site
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
            © widia.io · proposta confidencial · contato@widia.io
          </p>
        </footer>
      </div>
    </div>
  )
}
