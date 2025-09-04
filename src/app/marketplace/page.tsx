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
      name: 'Assistente de Vendas Inteligente',
      description: 'Transforme sua prospecção em um processo automatizado e eficiente. Este assistente qualifica leads, agenda reuniões e mantém seu pipeline sempre organizado.',
      features: [
        'Conversas inteligentes que qualificam prospects',
        'Agendamento automático sem fricção',
        'Base de dados sempre atualizada e organizada',
        'Transferência inteligente para fechamento',
        'Dashboard completo de vendas'
      ],
      additional: 'Possível adicionar funcionalidades: A orçar'
    },
    {
      category: 'Suporte',
      price: 'R$ 6.800,00',
      name: 'Central de Atendimento Automatizada',
      description: 'Ofereça suporte excepcional 24/7. Sistema inteligente que resolve dúvidas, gerencia tickets e mantém seus clientes sempre satisfeitos.',
      features: [
        'Suporte ininterrupto todos os dias',
        'Central unificada de atendimentos',
        'Conexão total com seus canais de comunicação'
      ],
      additional: 'Adicional por Canal: R$ 990,00'
    },
    {
      category: 'Atendimento',
      price: 'R$ 5.500,00',
      name: 'Recepcionista Virtual com Agenda',
      description: 'Elimine a complexidade do agendamento manual. Seu assistente pessoal gerencia horários, confirma compromissos e otimiza sua agenda automaticamente.',
      features: [
        'Marcação de horários por conversa natural',
        'Integração com suas agendas favoritas',
        'Histórico completo de agendamentos'
      ],
      additional: 'Possível adicionar funcionalidades: A orçar'
    },
    {
      category: 'Produtividade',
      price: 'R$ 4.800,00',
      name: 'Gestor de Produtividade Pessoal',
      description: 'Maximize seu desempenho diário. Receba lembretes inteligentes, acompanhe metas e mantenha o foco no que realmente importa para seu crescimento.',
      features: [
        'Notificações personalizadas no momento certo',
        'Acompanhamento de rotinas e objetivos',
        'Conecta com suas ferramentas favoritas'
      ],
      additional: 'Adicional Upgrade Multiusuário: R$6.600,00'
    },
    {
      category: 'Vendas',
      price: 'R$ 6.200,00',
      name: 'Hunter de Clientes Automatizado',
      description: 'Descubra e conquiste novos clientes no piloto automático. Identifica oportunidades, inicia conversas e nutre relacionamentos comerciais estratégicos.',
      features: [
        'Mineração inteligente de potenciais clientes',
        'Comunicação personalizada em massa',
        'Pipeline de vendas sempre atualizado'
      ],
      additional: 'Adicionais: Agente de Atendimento: R$3.500,00 - Agente SDR: R$2.200,00'
    },
    {
      category: 'Financeiro',
      price: 'R$ 6.500,00',
      name: 'Controlador Financeiro Digital',
      description: 'Mantenha suas finanças sob controle total. Monitore fluxo de caixa, receba alertas importantes e tome decisões financeiras mais inteligentes.',
      features: [
        'Controle unificado de todas as finanças',
        'Relatórios e alertas automáticos',
        'Visão clara da saúde financeira'
      ],
      additional: 'Adicional Upgrade Multiusuário: R$4.600,00'
    },
    {
      category: 'Produtividade',
      price: 'R$ 7.800,00',
      name: 'Parceiro Virtual para Freelancers',
      description: 'O braço direito que todo profissional autônomo precisa. Organiza projetos, cria contratos profissionais e mantém sua vida freelancer impecável.',
      features: [
        'Gestão completa de projetos e prazos',
        'Sistema inteligente de notificações',
        'Criação profissional de documentos',
        'Vida organizada, negócios prósperos'
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
              Encontre a <span className="border-b-4 border-black">Solução IA</span>{' '}
              perfeita para sua empresa
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Descubra assistentes inteligentes personalizados que automatizam tarefas, 
              economizam tempo e impulsionam seus resultados de forma extraordinária.
            </p>

            <a
              href="https://wa.me/5541995203400?text=Olá,%20quero%20saber%20mais!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Converse com nosso time
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
                      href="https://wa.me/5541995203400?text=Olá,%20quero%20saber%20mais!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Implementar esta solução
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
                  href="https://wa.me/5541995203400?text=Olá,%20quero%20saber%20mais!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Falar sobre meu projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}