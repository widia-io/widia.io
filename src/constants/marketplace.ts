import type { Agent, FilterCategory } from '@/types/marketplace'

export const categories: FilterCategory[] = [
  'Todos',
  'Vendas',
  'Suporte',
  'Atendimento',
  'Produtividade',
  'Financeiro',
]

export const agents: Agent[] = [
  {
    category: 'Vendas',
    price: 'R$ 5.200,00',
    name: 'Assistente de Vendas Inteligente',
    description:
      'Transforme sua prospecção em um processo automatizado e eficiente. Este assistente qualifica leads, agenda reuniões e mantém seu pipeline sempre organizado.',
    features: [
      'Conversas inteligentes que qualificam prospects',
      'Agendamento automático sem fricção',
      'Base de dados sempre atualizada e organizada',
      'Transferência inteligente para fechamento',
      'Dashboard completo de vendas',
    ],
    additional: 'Possível adicionar funcionalidades: A orçar',
  },
  {
    category: 'Suporte',
    price: 'R$ 6.800,00',
    name: 'Central de Atendimento Automatizada',
    description:
      'Ofereça suporte excepcional 24/7. Sistema inteligente que resolve dúvidas, gerencia tickets e mantém seus clientes sempre satisfeitos.',
    features: [
      'Suporte ininterrupto todos os dias',
      'Central unificada de atendimentos',
      'Conexão total com seus canais de comunicação',
    ],
    additional: 'Adicional por Canal: R$ 990,00',
  },
  {
    category: 'Atendimento',
    price: 'R$ 5.500,00',
    name: 'Recepcionista Virtual com Agenda',
    description:
      'Elimine a complexidade do agendamento manual. Seu assistente pessoal gerencia horários, confirma compromissos e otimiza sua agenda automaticamente.',
    features: [
      'Marcação de horários por conversa natural',
      'Integração com suas agendas favoritas',
      'Histórico completo de agendamentos',
    ],
    additional: 'Possível adicionar funcionalidades: A orçar',
  },
  {
    category: 'Produtividade',
    price: 'R$ 4.800,00',
    name: 'Gestor de Produtividade Pessoal',
    description:
      'Maximize seu desempenho diário. Receba lembretes inteligentes, acompanhe metas e mantenha o foco no que realmente importa para seu crescimento.',
    features: [
      'Notificações personalizadas no momento certo',
      'Acompanhamento de rotinas e objetivos',
      'Conecta com suas ferramentas favoritas',
    ],
    additional: 'Adicional Upgrade Multiusuário: R$6.600,00',
  },
  {
    category: 'Vendas',
    price: 'R$ 6.200,00',
    name: 'Hunter de Clientes Automatizado',
    description:
      'Descubra e conquiste novos clientes no piloto automático. Identifica oportunidades, inicia conversas e nutre relacionamentos comerciais estratégicos.',
    features: [
      'Mineração inteligente de potenciais clientes',
      'Comunicação personalizada em massa',
      'Pipeline de vendas sempre atualizado',
    ],
    additional: 'Adicionais: Agente de Atendimento: R$3.500,00 - Agente SDR: R$2.200,00',
  },
  {
    category: 'Financeiro',
    price: 'R$ 6.500,00',
    name: 'Controlador Financeiro Digital',
    description:
      'Mantenha suas finanças sob controle total. Monitore fluxo de caixa, receba alertas importantes e tome decisões financeiras mais inteligentes.',
    features: [
      'Controle unificado de todas as finanças',
      'Relatórios e alertas automáticos',
      'Visão clara da saúde financeira',
    ],
    additional: 'Adicional Upgrade Multiusuário: R$4.600,00',
  },
  {
    category: 'Produtividade',
    price: 'R$ 7.800,00',
    name: 'Parceiro Virtual para Freelancers',
    description:
      'O braço direito que todo profissional autônomo precisa. Organiza projetos, cria contratos profissionais e mantém sua vida freelancer impecável.',
    features: [
      'Gestão completa de projetos e prazos',
      'Sistema inteligente de notificações',
      'Criação profissional de documentos',
      'Vida organizada, negócios prósperos',
    ],
    additional: 'Possível adicionar funcionalidades: A orçar',
  },
]

export const categoryColors: Record<Agent['category'], string> = {
  Vendas: 'bg-blue-100 text-blue-800',
  Suporte: 'bg-green-100 text-green-800',
  Atendimento: 'bg-purple-100 text-purple-800',
  Produtividade: 'bg-orange-100 text-orange-800',
  Financeiro: 'bg-red-100 text-red-800',
}
