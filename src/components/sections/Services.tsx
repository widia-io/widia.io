'use client'

import { useState } from 'react'
import { Cog, Shield, Brain, TrendingUp, CheckCircle } from 'lucide-react'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      icon: Cog,
      title: 'Desenvolvimento Sob Medida',
      description: 'Agentes inteligentes criados especificamente para seus processos únicos',
      features: [
        'Análise detalhada dos processos existentes',
        'Desenvolvimento customizado para necessidades específicas',
        'Integração seamless com sistemas atuais',
        'Treinamento especializado da equipe',
      ]
    },
    {
      id: 1,
      icon: TrendingUp,
      title: 'Integração com Processos Reais',
      description: 'Implementação direta em atendimento, operações e backoffice',
      features: [
        'Automação de atendimento ao cliente',
        'Otimização de operações internas',
        'Gestão inteligente de backoffice',
        'Relatórios em tempo real',
      ]
    },
    {
      id: 2,
      icon: Shield,
      title: 'Segurança AI-First',
      description: 'Implementação segura com visão estratégica de futuro',
      features: [
        'Arquitetura segura e escalável',
        'Compliance com regulamentações',
        'Monitoramento contínuo de segurança',
        'Backup e recuperação automática',
      ]
    },
    {
      id: 3,
      icon: Brain,
      title: 'Inteligência Estratégica',
      description: 'Análises e insights que transformam dados em decisões inteligentes',
      features: [
        'Análise preditiva avançada',
        'Dashboard interativo de métricas',
        'Insights personalizados para seu negócio',
        'Recommendations baseadas em IA',
      ]
    }
  ]

  return (
    <div id="servicos" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Como implementamos o modelo AI-First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Criamos e implementamos agentes inteligentes que integram processos reais: 
            atendimento, operações e backoffice.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <IconComponent size={20} />
                  <div className="text-left">
                    <div className="font-semibold text-sm lg:text-base">
                      {service.title}
                    </div>
                    <div className="text-xs lg:text-sm opacity-80 hidden lg:block">
                      {service.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-black text-white p-3 rounded-lg">
                    {(() => {
                      const IconComponent = services[activeTab].icon
                      return <IconComponent size={24} />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      {services[activeTab].title}
                    </h3>
                    <p className="text-gray-600">
                      {services[activeTab].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/5527996112436?text=Olá,%20quero%20saber%20mais!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Saiba mais sobre este serviço
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-64 lg:h-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-500">
                    {(() => {
                      const IconComponent = services[activeTab].icon
                      return <IconComponent size={48} className="mx-auto mb-4" />
                    })()}
                    <p className="text-lg font-medium">{services[activeTab].title}</p>
                    <p className="text-sm">Visualização do Serviço</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}