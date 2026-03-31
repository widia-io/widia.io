import WidiaLogo from '@/components/ui/WidiaLogo'
import { PrintButton } from '@/components/ui/PrintButton'
import {
  FileText,
  Clock,
  DollarSign,
  CheckCircle2,
  Calendar,
  Zap,
  Shield,
  Code,
  Package,
} from 'lucide-react'

const executiveSummaryCards = [
  {
    icon: Clock,
    iconClassName: 'text-green-400',
    value: '5–7 dias',
    label: 'Entrega Fase 1',
  },
  {
    icon: DollarSign,
    iconClassName: 'text-green-400',
    value: 'R$ 1.500',
    label: 'Landing Page + Checkout',
  },
  {
    icon: Package,
    iconClassName: 'text-blue-400',
    value: '3 planos',
    label: 'Essencial, Presença, Imagem Total',
  },
  {
    icon: Code,
    iconClassName: 'text-purple-400',
    value: '100% automatizado',
    label: 'Cobrança via Stripe',
  },
] as const

const currentScenario = [
  'Toda venda passa pelo WhatsApp ou link do Instagram',
  'Cobrança manual via Pix, sem recorrência automatizada',
  'Sem previsibilidade de receita',
  '77K seguidores sem canal de conversão estruturado',
] as const

const phaseOneScope = [
  'Página completa com apresentação dos 3 planos de assinatura',
  'Design alinhado à identidade visual do @alanemichele.estilo (azul cobalto + tipografia do feed)',
  'Integração com Stripe: cobrança recorrente mensal e anual',
  'Gestão de cupons e desconto',
  'Responsiva para mobile',
  'Hospedagem inclusa',
] as const

const phaseOneAcceptanceCriteria = [
  'Cliente consegue assinar qualquer plano sem falar com a Alane',
  'Cobrança recorrente ativa e testada',
  '2 rodadas de ajuste de design incluídas',
] as const

const phaseTwoScope = [
  'Agente de IA responde instantaneamente novos contatos',
  'Qualifica o lead (plano de interesse, orçamento, dúvidas)',
  'Explica os planos automaticamente',
  'Agenda call ou envia link de checkout',
  'Sem perder nenhum lead, 24/7',
] as const

const phaseThreeScope = [
  'Templates de roteiro para Reels baseados em tema',
  'Variações de legenda preservando tom de voz',
  'Estrutura de carrosséis educativos (como os que ela já faz)',
  'Ela valida, a IA gera — 3x mais conteúdo no mesmo tempo',
] as const

const deliverables = [
  {
    badge: 'F1',
    title: 'Landing Page + Stripe',
    price: 'R$ 1.500 único',
    className: 'from-blue-50 to-cyan-50 border-blue-200',
    badgeClassName: 'bg-blue-600',
    iconClassName: 'text-blue-600',
    items: [
      'Landing page com os 3 planos de assinatura',
      'Checkout Stripe com recorrência mensal e anual',
      'Cupons, responsividade e hospedagem inclusa',
    ],
  },
  {
    badge: 'F2',
    title: 'Assistente WhatsApp',
    price: 'R$ 500 setup',
    className: 'from-green-50 to-emerald-50 border-green-200',
    badgeClassName: 'bg-green-600',
    iconClassName: 'text-green-600',
    items: [
      'Triagem automática de novos leads no WhatsApp',
      'Qualificação por interesse, orçamento e dúvidas',
      'Agendamento de call ou envio do link de checkout',
    ],
  },
  {
    badge: 'F3',
    title: 'Conteúdo com IA',
    price: 'R$ 400 setup',
    className: 'from-purple-50 to-pink-50 border-purple-200',
    badgeClassName: 'bg-purple-600',
    iconClassName: 'text-purple-600',
    items: [
      'Roteiros de Reels por tema',
      'Legendas com variações de tom de voz',
      'Estruturas de carrosséis educativos prontas para validação',
    ],
  },
] as const

const phaseOneTimeline = [
  'Alinhamento, coleta de referências visuais e definição dos planos',
  'Desenvolvimento da landing page e integração Stripe',
  'Revisão com a cliente (2 rodadas)',
  'Go-live e entrega',
] as const

const phaseTwoTimeline = [
  'Setup do agente e fluxo de triagem',
  'Testes com simulações de leads reais',
  'Ajustes e ativação',
] as const

const costRows = [
  { category: 'Setup (único)', item: 'Fase 1 (Landing + Stripe)', value: 'R$ 1.500' },
  { category: 'Setup (único)', item: 'Fase 2 (WhatsApp IA)', value: 'R$ 500' },
  { category: 'Setup (único)', item: 'Fase 3 (Conteúdo IA)', value: 'R$ 400' },
  { category: 'Mensalidade', item: 'Manutenção + hospedagem', value: 'R$ 200/mês' },
  { category: 'Mensalidade', item: 'Assistente WhatsApp (Fase 2)', value: 'R$ 300/mês' },
  { category: 'Mensalidade', item: 'Conteúdo IA (Fase 3)', value: 'R$ 200/mês' },
] as const

const terms = [
  {
    icon: Code,
    text: 'Código-fonte da landing page entregue ao cliente',
  },
  {
    icon: FileText,
    text: 'Domínio e hospedagem gerenciados pela Widia (pode migrar a qualquer momento)',
  },
  {
    icon: Shield,
    text: 'Dados dos assinantes pertencem exclusivamente à cliente',
  },
  {
    icon: CheckCircle2,
    text: 'Confidencialidade garantida',
  },
] as const

const nextSteps = [
  'Validação deste escopo em call (30–40 min)',
  'Definição dos planos e preços finais',
  'Aprovação e pagamento de 50% do setup',
  'Kickoff da Fase 1 (D0) — entrega em até 7 dias úteis',
  'Revisão e go-live',
] as const

export default function AlaneMicheleProposal() {
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
                  Clube Alane Michele — Estrutura de Receita Recorrente
                </h1>
                <p className="text-sm text-gray-500 font-medium">1.0 · Março 2026 · Cliente: Alane Michele</p>
              </div>
            </div>
            <div className="print:hidden">
              <PrintButton />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 shadow-lg" id="resumo-executivo">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-white" size={24} />
            <h2 className="text-3xl font-extrabold">Resumo Executivo</h2>
          </div>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            A audiência já existe. O produto já existe. Falta estrutura para monetizar de forma recorrente e previsível.
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
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="diagnostico">
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
                    <CheckCircle2 size={18} className="text-black mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">1.2 A oportunidade</h3>
              <p className="text-gray-700 leading-relaxed">
                A audiência já existe. O produto já existe. Falta estrutura para monetizar de forma recorrente e previsível.
              </p>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">📈 Exemplo de previsibilidade</p>
                <p className="text-sm text-blue-800">50 assinantes no plano Presença = R$ 19.850/mês de MRR.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="escopo-fases">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              2
            </div>
            Escopo e Fases
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">2.1 Fase 1 — Landing Page + Checkout (5–7 dias úteis)</h3>
              <ul className="space-y-2">
                {phaseOneScope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">✅ Critérios de aceite</p>
                <ul className="space-y-1 text-sm text-blue-800">
                  {phaseOneAcceptanceCriteria.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">2.2 Fase 2 — Assistente de Triagem no WhatsApp (após Fase 1)</h3>
              <ul className="space-y-2">
                {phaseTwoScope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">2.3 Fase 3 — Geração de Conteúdo com IA (bônus)</h3>
              <ul className="space-y-2">
                {phaseThreeScope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="entregaveis">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              3
            </div>
            Entregáveis por Fase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div key={item.badge} className={`bg-gradient-to-br ${item.className} rounded-xl p-6 border-2`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-10 h-10 ${item.badgeClassName} text-white rounded-lg flex items-center justify-center font-bold`}>
                    {item.badge}
                  </div>
                  <div>
                    <p className="font-bold text-black">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.price}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {item.items.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className={`${item.iconClassName} mt-0.5 flex-shrink-0`} />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="cronograma">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              4
            </div>
            Cronograma
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-blue-600" size={24} />
                <h3 className="font-bold text-black text-lg">Fase 1 — 5 a 7 dias úteis</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {phaseOneTimeline.map((item, index) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-transparent rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-green-600" size={24} />
                <h3 className="font-bold text-black text-lg">Fase 2 — após aprovação da Fase 1</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {phaseTwoTimeline.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="custos-condicoes">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              5
            </div>
            Custos e Condições
          </h2>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Categoria</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Item</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Valor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {costRows.map((row) => (
                    <tr key={`${row.category}-${row.item}`}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-600">{row.category}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{row.item}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-black">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-black text-white">
                    <td className="px-4 py-4 text-sm font-semibold">Exemplo Fase 1 ativa</td>
                    <td className="px-4 py-4 text-sm">R$ 1.500 setup + R$ 200/mês</td>
                    <td className="px-4 py-4 text-sm font-bold">R$ 3.900 no primeiro ano</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg p-4 mt-6">
            <div className="flex items-start gap-3">
              <Shield className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div className="text-sm text-green-900">
                <p className="font-semibold mb-1">📌 Condições</p>
                <ul className="space-y-1">
                  <li>Pagamento do setup: 50% na aprovação, 50% na entrega</li>
                  <li>Sem fidelidade — cancele quando quiser</li>
                  <li>2 rodadas de ajuste visual incluídas na Fase 1</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="propriedade-termos">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              6
            </div>
            Propriedade e Termos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {terms.map((item) => (
              <div key={item.text} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <item.icon className="text-black flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 shadow-lg" id="proximos-passos">
          <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center text-sm font-bold">
              7
            </div>
            Próximos Passos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nextSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-100 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 print:mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © Widia.io — Identidade visual conforme guia de marca. Contato:{' '}
            <a href="mailto:contato@widia.io" className="text-blue-600 hover:underline">
              contato@widia.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
