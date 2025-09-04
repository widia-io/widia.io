'use client'

import { Check, Star } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Essencial AI',
      price: 'R$ 9.800',
      period: 'a partir de',
      description: 'Análise e otimização de 1 processo em uma área da empresa',
      features: [
        'Análise completa de 1 processo específico',
        '3h de consultoria estratégica',
        'Implementação de 1 agente inteligente',
        '1h de treinamento interno',
        'Contrato de 30 dias'
      ],
      buttonText: 'Pedir Orçamento',
      isPopular: false,
    },
    {
      name: 'Growth AI',
      price: 'R$ 16.900',
      period: 'mês/a partir de',
      description: 'Análise de todas as áreas da empresa com ajuste de processos',
      features: [
        'Análise completa de todas as áreas',
        'Implementação de 2 agentes por mês',
        '5h de consultoria estratégica',
        '2h de treinamento interno por ciclo',
        'Contrato mensal opcional'
      ],
      buttonText: 'Pedir Orçamento',
      isPopular: true,
    },
    {
      name: 'Custom AI',
      price: 'Sob consulta',
      period: 'a partir de',
      description: 'Soluções totalmente sob medida com estratégia AI-First exclusiva',
      features: [
        'Imersão completa nos processos',
        'Estratégia AI-First personalizada',
        'Múltiplos agentes integrados',
        'Consultoria e treinamento sob medida',
        'Suporte dedicado'
      ],
      buttonText: 'Pedir Orçamento',
      isPopular: false,
    }
  ]

  return (
    <section id="valores" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
            Torne-se AI-First
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para transformar sua empresa com inteligência artificial estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.isPopular
                  ? 'border-black shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star size={16} fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check 
                      size={20} 
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.isPopular ? 'text-black' : 'text-green-600'
                      }`} 
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5527996112436?text=Olá,%20quero%20saber%20mais!"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full justify-center ${
                  plan.isPopular 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <blockquote className="text-2xl lg:text-3xl font-bold text-black mb-8">
            &ldquo;O futuro não é automático. É inteligente.&rdquo;
          </blockquote>
          
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Pronto para se tornar AI-First?
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Transforme sua operação com agentes inteligentes sob medida para o seu negócio.
            </p>
            <a
              href="https://wa.me/5527996112436?text=Olá,%20quero%20saber%20mais!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Comece sua transformação
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}