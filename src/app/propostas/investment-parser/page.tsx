import WidiaLogo from '@/components/ui/WidiaLogo'
import { PrintButton } from '@/components/ui/PrintButton'
import { FileText, Clock, DollarSign, CheckCircle2, Calendar, Zap, Shield, Code, Package, ArrowRight } from 'lucide-react'

export default function InvestmentParserProposal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Moderno com Gradiente */}
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
                  Investment Parser Platform
                </h1>
                <p className="text-sm text-gray-500 font-medium">
                  Versão 2.1 • Outubro 2025 • Cliente: Widia
                </p>
              </div>
            </div>
            <div className="print:hidden">
              <PrintButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* Resumo Executivo - Hero Card */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 shadow-lg" id="resumo-executivo">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-white" size={24} />
            <h2 className="text-3xl font-extrabold">Resumo Executivo</h2>
          </div>
          <p className="text-gray-200 text-lg mb-6 leading-relaxed">
            Extração de Investimentos (Bradesco em 5 dias, com entrega de código-fonte) e implantação por fases via N8N + Google Drive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Clock className="text-green-400 mb-2" size={20} />
              <div className="text-2xl font-bold">5 dias</div>
              <div className="text-sm text-gray-300">PoC Bradesco</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <DollarSign className="text-green-400 mb-2" size={20} />
              <div className="text-2xl font-bold">R$ 0</div>
              <div className="text-sm text-gray-300">PoC sem custo</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Package className="text-blue-400 mb-2" size={20} />
              <div className="text-2xl font-bold">2 Fases</div>
              <div className="text-sm text-gray-300">Implementação</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <Code className="text-purple-400 mb-2" size={20} />
              <div className="text-2xl font-bold">4 Bancos</div>
              <div className="text-sm text-gray-300">Bradesco, Itaú, XP, BTG</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 rounded-xl p-6 border border-white/10">
            <div>
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-400" />
                Prazos
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Bradesco (PoC): 5 dias corridos</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Fase 1: até 10 dias úteis</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Fase 2: até 7 dias úteis</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <DollarSign size={18} className="text-blue-400" />
                Custos
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>PoC Bradesco: sem custo</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Fase 1: R$ 1.000</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Fase 2: R$ 1.500</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <Package size={18} className="text-purple-400" />
                Entregáveis
              </h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Código-fonte completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Workflows N8N (.json)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Documentação completa</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Escopo e Fases */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="escopo-fases">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              1
            </div>
            Escopo e Fases
          </h2>

          <div className="space-y-6">
            {/* PoC Bradesco */}
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">1.1 PoC Bradesco (5 dias, sem custo)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Implementação/ajuste do extractor Bradesco com saída CSV padronizada</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Entrega do código-fonte e scripts de execução local</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Documentação de setup (pré-requisitos, instalação, execução, troubleshooting)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Testes locais com PDFs de exemplo fornecidos pelo cliente</span>
                </li>
              </ul>

              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">✅ Critérios de aceite (PoC)</p>
                <ul className="space-y-1 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Processar PDFs do Bradesco fornecidos e gerar CSV consistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Reprodutibilidade: execução local pelo cliente seguindo a documentação</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fase 1 */}
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">1.2 Fase 1 — N8N + Google Drive (Bradesco e Itaú)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Workflow no N8N com leitura automática de PDFs (Google Drive)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Roteamento por banco (Bradesco e Itaú) e execução do script</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Escrita do CSV resultante no Google Drive</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Logs básicos e documentação de operação</span>
                </li>
              </ul>
            </div>

            {/* Fase 2 */}
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="text-lg font-bold text-black mb-3">1.3 Fase 2 — N8N + Google Drive (XP e BTG)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Extensão do workflow para XP e BTG no mesmo padrão da Fase 1</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Validação com PDFs de exemplo e documentação de operação</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Arquitetura e Fluxos */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="arquitetura-fluxos">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              2
            </div>
            Arquitetura e Fluxos
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <Code size={20} />
                2.1 PoC Local (execução via scripts)
              </h3>

              <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-lg mb-4 overflow-x-auto">
                PDF local → Script Python (Extractor Bradesco) → CSV local
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-black mb-3">📋 Pré-requisitos sugeridos</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>Python 3.10+ e <code className="bg-gray-200 px-2 py-1 rounded text-xs">pip</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>Dependências via <code className="bg-gray-200 px-2 py-1 rounded text-xs">requirements.txt</code></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-black mb-3">⚡ Execução (exemplo)</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="text-gray-600 mb-1">Instalação:</p>
                      <code className="block bg-gray-800 text-green-400 p-2 rounded overflow-x-auto">
                        pip install -r requirements.txt
                      </code>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Execução:</p>
                      <code className="block bg-gray-800 text-green-400 p-2 rounded overflow-x-auto">
                        python extract_with_llm_complete.py --input input/bradesco.pdf --output output/bradesco.csv
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <Zap size={20} />
                2.2 N8N (Fases 1 e 2)
              </h3>

              <div className="bg-white text-blue-600 font-mono text-sm p-4 rounded-lg mb-4 overflow-x-auto border border-blue-200">
                Google Drive (input) → N8N (trigger + roteamento) → Script → Google Drive (output)
              </div>

              <p className="font-semibold text-black mb-3">🔧 Componentes</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="text-sm text-gray-700">✓ Trigger Google Drive para detectar novos PDFs</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="text-sm text-gray-700">✓ Switch/roteamento por banco</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="text-sm text-gray-700">✓ Execução do script Python correspondente</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-100">
                  <p className="text-sm text-gray-700">✓ Upload do CSV no Google Drive</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entregáveis por Fase */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="entregaveis">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              3
            </div>
            Entregáveis por Fase
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                  PoC
                </div>
                <div>
                  <p className="font-bold text-black">Bradesco</p>
                  <p className="text-xs text-gray-600">Sem custo</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Código-fonte dos scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>CSVs de exemplo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Guia de troubleshooting</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                  F1
                </div>
                <div>
                  <p className="font-bold text-black">Bradesco + Itaú</p>
                  <p className="text-xs text-gray-600">R$ 1.000</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Workflow N8N (.json)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Scripts para Itaú</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>N8N provisionado</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                  F2
                </div>
                <div>
                  <p className="font-bold text-black">XP + BTG</p>
                  <p className="text-xs text-gray-600">R$ 1.500</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Extensão workflow N8N</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Scripts XP e BTG</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Documentação atualizada</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cronograma */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="cronograma">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              4
            </div>
            Cronograma
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-transparent rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-green-600" size={24} />
                <h3 className="font-bold text-black text-lg">PoC Bradesco — 5 dias</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <span className="text-gray-700">Alinhamento, coleta de PDFs e setup local</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2-4
                  </div>
                  <span className="text-gray-700">Implementação/ajustes, testes com PDFs do cliente</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    5
                  </div>
                  <span className="text-gray-700">Entrega dos scripts, documentação e handover</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-blue-600" size={24} />
                <h3 className="font-bold text-black text-lg">Fase 1 — até 10 dias úteis</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Provisionamento do N8N e credenciais do Google Drive</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Implementação do workflow (trigger, roteamento, execução, upload)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Testes com PDFs reais e ajustes. Go-live e handover</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-transparent rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-purple-600" size={24} />
                <h3 className="font-bold text-black text-lg">Fase 2 — até 7 dias úteis</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Extensão do workflow para XP e BTG</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Ajustes/implementações de extractors e configuração de rotas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Testes com PDFs reais, go-live e atualização de documentação</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Custos e Condições */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="custos-condicoes">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              5
            </div>
            Custos e Condições
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 text-center">
              <DollarSign className="mx-auto text-green-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-black mb-1">R$ 0</div>
              <div className="text-sm text-gray-600">PoC Bradesco</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 text-center">
              <DollarSign className="mx-auto text-blue-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-black mb-1">R$ 1.000</div>
              <div className="text-sm text-gray-600">Fase 1</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 text-center">
              <DollarSign className="mx-auto text-purple-600 mb-2" size={32} />
              <div className="text-3xl font-bold text-black mb-1">R$ 1.500</div>
              <div className="text-sm text-gray-600">Fase 2</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-black mb-4 text-lg">💳 Mensalidade (a partir do go-live da Fase 1)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-black mb-2">Infraestrutura e operação</p>
                <p className="text-2xl font-bold text-black mb-1">R$ 120<span className="text-sm text-gray-600">/mês</span></p>
                <p className="text-xs text-gray-600">N8N/Coolify, servidor Python, logs, backups, monitoramento básico</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-black mb-2">Uso dos agentes (LLM/OpenRouter)</p>
                <p className="text-lg font-bold text-black mb-1">Repasse a custo</p>
                <p className="text-xs text-gray-600 mb-2">Conforme consumo mensal</p>
                <p className="text-xs bg-blue-50 text-blue-800 p-2 rounded">
                  <strong>Exemplo:</strong> 200 PDFs/mês ≈ R$ 83 (LLM) + R$ 120 (fixo) = <strong>R$ 203/mês</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg p-4 mt-6">
            <div className="flex items-start gap-3">
              <Shield className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <div className="text-sm text-green-900">
                <p className="font-semibold mb-1">📌 Observações importantes</p>
                <p>N8N hospedado pela Widia; se o cliente usar instância própria, a mensalidade de infraestrutura pode ser revista. Escopos como enriquecimento/monitoramento avançado podem ser propostos separadamente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Termos e PI */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="termos-pi">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              6
            </div>
            Termos e Propriedade Intelectual
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Code, text: 'Código-fonte dos scripts do Bradesco entregue para execução local' },
              { icon: FileText, text: 'Workflows N8N entregues em formato exportável (.json)' },
              { icon: Shield, text: 'Dados processados pertencem exclusivamente ao cliente' },
              { icon: CheckCircle2, text: 'Confidencialidade: NDA bilateral mediante solicitação' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <item.icon className="text-black flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Próximos Passos */}
        <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 shadow-lg" id="proximos-passos">
          <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center text-sm font-bold">
              7
            </div>
            Próximos Passos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: 1, text: 'Validação deste escopo (PoC gratuito do Bradesco + definição das Fases)' },
              { num: 2, text: 'Envio de PDFs de exemplo do Bradesco para testes iniciais' },
              { num: 3, text: 'Kickoff do PoC (D0) e entrega em até 5 dias' },
              { num: 4, text: 'Apresentação de resultados e, se aprovado, detalhamento de esforço/custos para Fase 1 e Fase 2' },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.num}
                </div>
                <p className="text-gray-100 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Adendo */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" id="adendo">
          <h2 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
              8
            </div>
            Adendo — Extensão para Extração de Novos Bancos
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700 mb-4 font-medium">
              Inclusão de novos bancos/corretoras além de Bradesco, Itaú, XP e BTG.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-black mb-2 text-sm">📦 Entregáveis</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Extractor do novo banco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Atualização do workflow N8N</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Documentação atualizada</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-black mb-2 text-sm">⚙️ Condições</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Pré-requisitos:</strong> 3–5 PDFs de exemplo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Prazo típico:</strong> 3–7 dias úteis por banco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Orçamento:</strong> Após análise dos PDFs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 print:mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © Widia.io — Identidade visual conforme guia de marca. Contato: <a href="mailto:contato@widia.io" className="text-blue-600 hover:underline">contato@widia.io</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
