'use client'

import { useState } from 'react'
import WidiaLogo from '@/components/ui/WidiaLogo'
import { PrintButton } from '@/components/ui/PrintButton'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import {
  FileText,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Zap,
  Shield,
  Code,
  Package,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  Store,
  Eye,
  EyeOff,
} from 'lucide-react'

const executiveSummaryCards = [
  {
    icon: DollarSign,
    iconClassName: 'text-green-400',
    value: 'A partir de R$ 500',
    label: 'Site institucional',
  },
  {
    icon: Clock,
    iconClassName: 'text-blue-400',
    value: '5–7 dias',
    label: 'Entrega Plano 1',
  },
  {
    icon: Package,
    iconClassName: 'text-amber-400',
    value: '3 planos',
    label: 'Presença · Vitrine · Loja',
  },
  {
    icon: Sparkles,
    iconClassName: 'text-purple-400',
    value: 'Pago se gostar',
    label: 'Risco zero no Plano 1',
  },
] as const

const currentScenario = [
  'Venda passa 100% por DM do Instagram e WhatsApp',
  'Sem site próprio — catálogo disperso em posts e stories',
  'Envio pra todo Brasil sem canal centralizado pra mostrar a marca',
  'Identidade visual já forte, mas sem vitrine digital à altura',
] as const

type Plano = {
  key: string
  numero: string
  nome: string
  preco: string
  precoDetalhe: string
  prazo: string
  icon: typeof ShoppingBag
  color: 'amber' | 'blue' | 'purple'
  destaque?: string
  escopo: readonly string[]
}

const planos: readonly Plano[] = [
  {
    key: 'plano1',
    numero: '01',
    nome: 'Presença Institucional',
    preco: 'R$ 500',
    precoDetalhe: 'pagamento único · pago só se aprovar',
    prazo: '5 a 7 dias',
    icon: Sparkles,
    color: 'amber',
    destaque: 'Ponto de entrada · risco zero',
    escopo: [
      'Landing page responsiva na identidade KEFI (sand, serifas, tom slow fashion)',
      'História, valores e pilares da marca (Conforto, Qualidade, Consciência)',
      'Galeria de peças em destaque com fotos e preços',
      'Botão "Comprar no WhatsApp" em todas as seções',
      'SEO básico + integração Google Analytics',
      'Domínio .com.br + hospedagem Vercel inclusos no 1º ano',
      '2 rodadas de ajuste de design inclusas',
    ],
  },
  {
    key: 'plano2',
    numero: '02',
    nome: 'Vitrine Online',
    preco: 'R$ 1.500 — R$ 2.000',
    precoDetalhe: 'pagamento único · 50% início / 50% entrega',
    prazo: '10 a 15 dias',
    icon: ShoppingBag,
    color: 'blue',
    destaque: 'Mais profissional sem virar e-commerce',
    escopo: [
      'Tudo do Plano 1 +',
      'Catálogo estruturado com fotos, preços e variações (tamanho / cor)',
      'Botão "Comprar no WhatsApp" por produto, com mensagem pré-preenchida',
      'Painel simples pra Tamyres editar produtos sem precisar de dev',
      'Integração com Instagram Shopping',
      'Filtros por categoria e coleção',
    ],
  },
  {
    key: 'plano3',
    numero: '03',
    nome: 'Loja Virtual Completa',
    preco: 'R$ 3.000 — R$ 4.000',
    precoDetalhe: 'pagamento único · 50% início / 50% entrega',
    prazo: '25 a 30 dias',
    icon: Store,
    color: 'purple',
    destaque: 'E-commerce completo, venda 100% automatizada',
    escopo: [
      'Tudo do Plano 2 +',
      'Carrinho + checkout próprio no site',
      'Pagamento integrado: Pix, cartão e boleto (Stripe ou Mercado Pago)',
      'Gestão de estoque básica',
      'Cálculo de frete automático (Melhor Envio / Correios)',
      'Emissão de etiquetas e rastreamento',
      'Painel de pedidos com status',
    ],
  },
] as const

const recorrentes = [
  {
    nome: 'Conteúdo com IA',
    valor: 'R$ 500 — 800/mês',
    descricao: 'Posts, legendas e roteiros de Reels gerados com IA mantendo o tom da marca. Você valida, a IA gera — 3x mais conteúdo.',
  },
  {
    nome: 'Automação WhatsApp',
    valor: 'R$ 400 — 600/mês',
    descricao: 'Resposta automática inteligente, catálogo interativo e follow-up pós-venda. Sem perder nenhum lead, 24/7.',
  },
  {
    nome: 'Landing pages sazonais',
    valor: 'R$ 300 cada',
    descricao: 'Páginas específicas pra Black Friday, Dia das Mães, lançamentos de coleção. Prontas em 3 dias.',
  },
] as const

const timeline = [
  'Briefing e coleta de referências visuais',
  'Wireframe e definição de seções',
  'Design alinhado à identidade KEFI',
  'Desenvolvimento e conteúdo',
  '2 rodadas de ajustes com a Tamyres',
  'Publicação e go-live',
] as const

const terms = [
  {
    icon: Shield,
    title: 'Risco zero no Plano 1',
    text: 'Você só paga os R$ 500 se aprovar o resultado final. Sem entrada, sem sinal.',
  },
  {
    icon: FileText,
    title: 'Domínio + hospedagem inclusos',
    text: 'No Plano 1, a Widia registra domínio .com.br e hospeda no Vercel durante o 1º ano. Sem custo extra.',
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
  'Call de alinhamento (20–30 min) pra entender o momento da KEFI',
  'Decisão do plano ideal (começar pelo 1 e evoluir depois funciona muito bem)',
  'Coleta de referências visuais, fotos das peças e textos base',
  'Kickoff — começo em até 48h após a aprovação',
  'Entrega, revisões e go-live',
] as const

function BlurredPrice({
  children,
  className = '',
  revealed = false,
}: {
  children: React.ReactNode
  className?: string
  revealed?: boolean
}) {
  const blurClass = revealed
    ? ''
    : 'blur-[7px] [filter:blur(7px)] hover:blur-[5px]'
  return (
    <span
      className={`inline-flex select-none transition duration-300 ${blurClass} ${className}`}
      aria-label={revealed ? undefined : 'Valor apresentado na call de alinhamento'}
    >
      {children}
    </span>
  )
}

const colorMap = {
  amber: {
    border: 'border-amber-500',
    bg: 'bg-amber-50',
    bgBorder: 'border-amber-200',
    text: 'text-amber-600',
    textDeep: 'text-amber-900',
    pillBg: 'bg-amber-100',
    pillText: 'text-amber-800',
  },
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-50',
    bgBorder: 'border-blue-200',
    text: 'text-blue-600',
    textDeep: 'text-blue-900',
    pillBg: 'bg-blue-100',
    pillText: 'text-blue-800',
  },
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-50',
    bgBorder: 'border-purple-200',
    text: 'text-purple-600',
    textDeep: 'text-purple-900',
    pillBg: 'bg-purple-100',
    pillText: 'text-purple-800',
  },
} as const

export default function TamyresKefiProposal() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10 print:relative">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <WidiaLogo className="flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-xs font-semibold w-fit">
                  <FileText size={12} />
                  Proposta Comercial
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
                  KEFI — Presença digital com propósito
                </h1>
                <p className="text-sm text-gray-600">
                  Marca autoral de slow fashion fitness com identidade visual forte, pronta pra ganhar uma vitrine digital à altura.
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  1.0 · Abril 2026 · Para: Tamyres — KEFI
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 print:hidden">
              <button
                type="button"
                onClick={() => setRevealed((v) => !v)}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                aria-pressed={revealed}
              >
                {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
                {revealed ? 'Ocultar valores' : 'Mostrar valores'}
              </button>
              <PrintButton />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <section
          className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 shadow-lg"
          id="resumo-executivo"
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-white" size={24} />
            <h2 className="text-3xl font-extrabold">Resumo Executivo</h2>
          </div>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            A marca KEFI já tem identidade, tem público e tem produto. Falta um canal próprio pra transformar
            seguidor em cliente sem depender só de DM. Três caminhos possíveis, três valores — começando pelo
            ponto de entrada de R$ 500 <strong>que você só paga se gostar</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {executiveSummaryCards.map((card) => (
              <div key={card.label} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                <card.icon className={`${card.iconClassName} mb-2`} size={20} />
                <div className="text-2xl font-bold">{card.value}</div>
                <div className="text-sm text-gray-300">{card.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white/5 border border-white/15 rounded-xl p-4 text-sm text-gray-200">
            <p>
              <strong className="text-white">Exemplo pronto:</strong> dá uma olhada em{' '}
              <a
                href="/preview/tamyres-kefi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 text-amber-300 hover:text-amber-200"
              >
                /preview/tamyres-kefi
              </a>{' '}
              — é uma amostra do que entregamos no Plano 1, já na identidade da KEFI.
            </p>
          </div>
        </section>

        <section
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          id="diagnostico"
        >
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              1
            </div>
            Diagnóstico
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">1.1 Cenário atual</h3>
              <ul className="space-y-2">
                {currentScenario.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <AlertCircle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">1.2 A oportunidade</h3>
              <p className="text-gray-700 leading-relaxed">
                A KEFI já construiu o mais difícil: <strong>identidade visual coerente</strong>, posicionamento claro (slow fashion
                + bem-estar) e um tom de voz reconhecível. Um site na mesma linguagem do feed transforma o Instagram em
                porta de entrada e dá um canal próprio pra mostrar a marca sem depender do algoritmo.
              </p>

              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-amber-900 mb-2">🌱 Por que começar pelo Plano 1</p>
                <p className="text-sm text-amber-800">
                  Porque é barato, rápido (5–7 dias), sem risco (pago só se aprovar) e já valida se vale a pena
                  evoluir pra vitrine ou loja completa depois. Você não paga pelo que não precisa agora.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          id="planos"
        >
          <h2 className="text-2xl font-extrabold text-black mb-2 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              2
            </div>
            Planos e Escopo
          </h2>
          <p className="text-gray-600 mb-6 ml-11">
            Três níveis — do institucional simples ao e-commerce completo. Você pode começar por qualquer um e
            evoluir quando fizer sentido.
          </p>

          <div className="space-y-6">
            {planos.map((plano) => {
              const c = colorMap[plano.color]
              return (
                <div key={plano.key} className={`border-l-4 ${c.border} pl-6 py-2`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider ${c.text} mb-1`}>
                        Plano {plano.numero}
                      </div>
                      <h3 className="text-xl font-bold text-black flex items-center gap-2">
                        <plano.icon size={20} className={c.text} />
                        {plano.nome}
                      </h3>
                      {plano.destaque ? (
                        <span className={`inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-full ${c.pillBg} ${c.pillText}`}>
                          {plano.destaque}
                        </span>
                      ) : null}
                    </div>
                    <div className="md:text-right">
                      <div className="text-2xl font-extrabold text-black">
                        <BlurredPrice revealed={revealed}>{plano.preco}</BlurredPrice>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{plano.precoDetalhe}</div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center gap-1 md:justify-end">
                        <Clock size={12} />
                        Entrega: {plano.prazo}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {plano.escopo.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                        <CheckCircle2 size={16} className={`${c.text} mt-0.5 flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <Shield className="text-green-600 flex-shrink-0 mt-1" size={22} />
              <div className="text-sm text-green-900">
                <p className="font-semibold mb-2">
                  💚 Sugestão: comece pelo Plano 1 (R$ 500, risco zero)
                </p>
                <p className="leading-relaxed">
                  Entregamos o institucional em até 7 dias. Se você gostar, paga. Do contrário, não paga nada.
                  Se depois quiser evoluir pra vitrine ou loja completa, abatemos o valor do Plano 1 do próximo
                  upgrade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          id="servicos-recorrentes"
        >
          <h2 className="text-2xl font-extrabold text-black mb-2 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              3
            </div>
            Serviços recorrentes (opcionais)
          </h2>
          <p className="text-gray-600 mb-6 ml-11">
            Nenhum é obrigatório. São opções mensais pra quem quer acelerar resultado depois que o site estiver no ar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recorrentes.map((servico) => (
              <div
                key={servico.nome}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-black mb-1">{servico.nome}</h3>
                <div className="text-sm font-semibold text-amber-700 mb-3">
                  <BlurredPrice revealed={revealed}>{servico.valor}</BlurredPrice>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{servico.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          id="cronograma"
        >
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              4
            </div>
            Como funciona (Plano 1)
          </h2>

          <div className="bg-gradient-to-r from-amber-50 to-transparent rounded-xl p-6 border-l-4 border-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-amber-600" size={24} />
              <h3 className="font-bold text-black text-lg">5 a 7 dias úteis · 6 etapas</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {timeline.map((item, index) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 pt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          id="termos"
        >
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              5
            </div>
            Termos e Infraestrutura
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {terms.map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-gray-50 p-5 rounded-lg border border-gray-200">
                <item.icon className="text-black flex-shrink-0 mt-0.5" size={22} />
                <div>
                  <div className="font-bold text-black text-sm mb-1">{item.title}</div>
                  <div className="text-gray-700 text-sm leading-relaxed">{item.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-900 mb-1">📌 Sobre domínio e hospedagem</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              No Plano 1, a Widia cobre domínio <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded">.com.br</code>{' '}
              (~R$ 40/ano) + hospedagem Vercel + SSL durante o primeiro ano. A partir do 2º ano você pode assumir
              (transferimos tudo pro seu nome) ou contratar manutenção a R$ 150/mês.
            </p>
          </div>
        </section>

        <section
          className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 shadow-lg"
          id="proximos-passos"
        >
          <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center text-sm font-bold">
              6
            </div>
            Próximos Passos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nextSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20"
              >
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-100 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center print:hidden">
            <a
              href={buildWhatsAppLink(
                'Oi Bruno! Vi a proposta do site da KEFI e quero agendar a call de alinhamento.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={22} />
              Agendar call no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 print:mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © Widia.io — Proposta confidencial para KEFI. Contato:{' '}
            <a href="mailto:contato@widia.io" className="text-blue-600 hover:underline">
              contato@widia.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
