'use client'

import { useState } from 'react'
import { Bot, Check, CreditCard, Banknote } from 'lucide-react'

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', 'Vendas', 'Suporte', 'Atendimento', 'Produtividade', 'Financeiro']

  const agents = [
    {
      category: 'Vendas',
      price: 'R$ 5.200,00',
      name: 'Agente SDR com CRM Integrado',
      description: 'Solução ideal para automatizar a qualificação de leads e o agendamento de vendas. Integra de forma inteligente com seus potenciais clientes no WhatsApp e Instagram.',
      features: [
        'Qualificação automática de leads via chat',
        'Envio automático de links para agendamento',
        'Registro detalhado dos leads no CRM',
        'Envio do lead qualificado para o Closer',
        '1 Painel CRM Interativo'
      ],
      additional: 'Possível adicionar funcionalidades: A orçar'
    },
    {
      category: 'Suporte',
      price: 'R$ 6.800,00',
      name: 'Agente de Suporte (1 Canal)',
      description: 'Ideal para e-commerce, cursos ou negócios com alto volume de dúvidas. Responde automaticamente a perguntas frequentes via WhatsApp, Instagram e e-mail.',
      features: [
        'Atendimento automático 24/7',
        'Gestão centralizada de tickets e histórico',
        'Integração entre WhatsApp, Instagram, e-mail e planilha de controle'
      ],
      additional: 'Adicional por Canal: R$ 990,00'
    },
    {
      category: 'Atendimento',
      price: 'R$ 5.500,00',
      name: 'Agente de Atendimento + Agenda',
      description: 'Simplifique o agendamento de serviços para seus clientes. Seja pelo WhatsApp ou Instagram, este agente guia o cliente para marcar compromissos.',
      features: [
        'Agendamento via conversa automatizada',
        'Sincronização com Google Calendar, Outlook, Calendly ou Cal.com',
        'Registro de atendimentos para controle e análise'
      ],
      additional: 'Possível adicionar funcionalidades: A orçar'
    },
    {
      category: 'Produtividade',
      price: 'R$ 4.800,00',
      name: 'Agente de Produtividade',
      description: 'Organize tarefas, hábitos e compromissos com lembretes automáticos enviados via WhatsApp, mantendo você sempre focado. Ideal para controlar múltiplos projetos.',
      features: [
        'Envio de lembretes diários e semanais',
        'Controle de hábitos e ciclos produtivos',
        'Integração com ferramentas populares: Notion, ClickUp, Trello, Google Calendar'
      ],
      additional: 'Adicional Upgrade Multiusuário: R$6.600,00'
    },
    {
      category: 'Vendas',
      price: 'R$ 6.200,00',
      name: 'Agente de Prospecção Ativa',
      description: 'Automatize a busca por potenciais clientes no Google Maps, envie mensagens personalizadas e acompanhe todo o processo de follow-up.',
      features: [
        'Pesquisa de leads com Google Maps e API HasData',
        'Envio e gestão de mensagens via WhatsApp',
        'Registro e acompanhamento de leads no CRM'
      ],
      additional: 'Adicionais: Agente de Atendimento: R$3.500,00 - Agente SDR: R$2.200,00'
    },
    {
      category: 'Financeiro',
      price: 'R$ 6.500,00',
      name: 'Agente Financeiro Inteligente',
      description: 'Tenha seu fluxo de caixa sempre atualizado, com resumos e lembretes enviados diretamente para o seu WhatsApp. Organize entradas, saídas e pagamentos de forma simples.',
      features: [
        'Registros financeiros centralizados',
        'Envio de resumos e alertas via WhatsApp',
        'Dashboard financeiro integrado para visualização clara'
      ],
      additional: 'Adicional Upgrade Multiusuário: R$4.600,00'
    },
    {
      category: 'Produtividade',
      price: 'R$ 7.800,00',
      name: 'Assistente Pessoal Freelancer',
      description: 'Tenha sua rotina otimizada, com gerenciamento de tarefas diárias, lembretes e organização pessoal, além de poder gerar contratos de forma rápida e prática.',
      features: [
        'Gerenciamento centralizado de tarefas e compromissos',
        'Envio de lembretes e alertas automáticos via WhatsApp',
        'Geração rápida e personalizável de contratos',
        'Organização pessoal e profissional em um só lugar'
      ],
      additional: 'Possível adicionar funcionalidades: A orçar'
    }
  ]

  const filteredAgents = selectedCategory === 'Todos' 
    ? agents 
    : agents.filter(agent => agent.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Vendas': 'bg-blue-100 text-blue-800',
      'Suporte': 'bg-green-100 text-green-800',
      'Atendimento': 'bg-purple-100 text-purple-800',
      'Produtividade': 'bg-orange-100 text-orange-800',
      'Financeiro': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-8">
              <Bot size={16} />
              Marketplace de Agentes
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Escolha o <span className="border-b-4 border-black">Agente</span>{' '}
              ideal para seu negócio
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Explore nossa coleção de agentes de IA especializados, cada um desenvolvido para 
              resolver desafios específicos do seu negócio com máxima eficiência.
            </p>

            <a
              href="https://wa.me/5527996112436?text=Olá,%20quero%20saber%20mais!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Fale com um especialista
            </a>
          </div>

          <div className="mb-12">
            <p className="text-lg font-medium text-black mb-4">Filtrar por categoria:</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {filteredAgents.map((agent, index) => (
              <div key={index} className="card">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(agent.category)}`}>
                        {agent.category}
                      </span>
                      <span className="text-2xl font-bold text-black">{agent.price}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                      {agent.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {agent.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-black mb-3">
                        Funcionalidades:
                      </h4>
                      <div className="space-y-3">
                        {agent.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <Check size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {agent.additional && (
                      <p className="text-sm text-gray-500 italic mb-6">
                        {agent.additional}
                      </p>
                    )}

                    <a
                      href="https://wa.me/5527996112436?text=Olá,%20quero%20saber%20mais!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Quero o meu agente
                    </a>
                  </div>

                  <div className="lg:w-80 flex items-center justify-center">
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center text-gray-500">
                        <Bot size={48} className="mx-auto mb-4" />
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-sm">Preview do Agente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center">
                Formas de Pagamento
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-xl mb-4">
                    <Banknote size={48} className="mx-auto mb-4 text-black" />
                    <h3 className="text-xl font-bold text-black mb-2">PIX ou Transferência</h3>
                    <p className="text-gray-600">50% na assinatura do contrato + 50% na entrega</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-xl mb-4">
                    <CreditCard size={48} className="mx-auto mb-4 text-black" />
                    <h3 className="text-xl font-bold text-black mb-2">Cartão de Crédito</h3>
                    <p className="text-gray-600">Parcelado em até 3x sem juros ou 12x com juros via link de pagamento</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-600 mb-6">
                Oferecemos flexibilidade para que você possa investir na automação e IA do seu negócio.
              </p>

              <div className="text-center">
                <a
                  href="https://wa.me/5527996112436?text=Olá,%20quero%20saber%20mais!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Solicitar orçamento personalizado
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}