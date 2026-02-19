import type { Plan } from '@/types/pricing'

export const plans: Plan[] = [
  {
    name: 'Starter AI',
    price: 'A partir de R$ 2.900',
    period: 'mês',
    description: 'Perfeito para pequenos negócios começarem sua jornada AI',
    features: [
      '1 agente inteligente focado',
      '2h de consultoria inicial',
      'Setup e configuração completos',
      'Suporte via WhatsApp',
      'Sem taxa de setup',
    ],
    buttonText: 'Começar Agora',
    isPopular: false,
  },
  {
    name: 'Growth AI',
    price: 'A partir de R$ 6.900',
    period: 'mês',
    description: 'Escale sua operação com automação inteligente completa',
    features: [
      'Até 3 agentes personalizados',
      'Análise completa de processos',
      '5h de consultoria estratégica',
      'Treinamento da equipe incluído',
      'Relatórios de performance',
    ],
    buttonText: 'Agendar Demo',
    isPopular: true,
  },
  {
    name: 'Enterprise AI',
    price: 'Sob consulta',
    period: '',
    description: 'Transformação completa com estratégia AI-First sob medida',
    features: [
      'Agentes ilimitados',
      'Estratégia AI-First completa',
      'Consultoria dedicada',
      'Integração com sistemas existentes',
      'SLA e suporte prioritário',
    ],
    buttonText: 'Falar com Especialista',
    isPopular: false,
  },
]
