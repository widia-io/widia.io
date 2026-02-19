import { Cog, Shield, Brain, TrendingUp } from 'lucide-react'

import type { Service } from '@/types/services'

export const services: Service[] = [
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
    ],
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
    ],
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
    ],
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
    ],
  },
]
