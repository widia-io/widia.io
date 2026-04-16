import type { Proposal } from './types'

export const vitoriaAver: Proposal = {
  slug: 'vitoria-aver',
  clientLabel: 'Para Vitória Aver — Academy de lash design',
  version: 'v1.0 · Abril 2026',
  kicker: 'Proposta comercial',
  hero: {
    title: 'Vitória IA — Sua assistente que responde as alunas 24/7 com sua voz e seu método',
    subtitle:
      'Uma IA treinada com o conteúdo da Academy, acessível por link, que tira dúvidas técnicas das suas mentoradas a qualquer hora, sem você precisar estar online.',
  },
  context:
    'Vitória, você construiu uma Academy com método próprio pra formar lash designers. Só que quanto mais alunas entram, mais DM e WhatsApp você precisa responder. E boa parte das perguntas se repete: curvatura, mapping, precificação, pós-venda, objeções de cliente. Seu tempo está virando o gargalo do seu negócio. E uma aluna que espera 6 horas pra uma dúvida travada é uma aluna com mais chance de desistir. A proposta é criar uma versão sua que nunca dorme, treinada com seu conteúdo, respondendo com sua voz, liberando seu tempo pra produzir, vender e viver.',
  solution: {
    intro:
      'Uma interface web simples (ex: ia.vitoriaaver.com.br) onde suas alunas fazem login e conversam com a Vitória IA. Ela responde baseada em:',
    bullets: [
      'Aulas gravadas do curso (transcritas)',
      'PDFs e materiais de apoio',
      'Respostas suas que você escolher alimentar',
      'Método e tom de voz calibrados junto com você',
    ],
  },
  howItWorks: {
    intro: 'Arquitetura em 4 camadas:',
    layers: [
      {
        number: '01',
        title: 'Base de conhecimento (RAG)',
        desc: 'Conteúdo processado e armazenado em banco vetorial (PostgreSQL + pgvector) pra busca semântica.',
      },
      {
        number: '02',
        title: 'Cérebro (LLM)',
        desc: 'Claude ou GPT-4 recebendo os trechos relevantes + system prompt com seu tom de voz.',
      },
      {
        number: '03',
        title: 'Interface web',
        desc: 'Responsiva, login pras alunas, histórico de conversas salvo.',
      },
      {
        number: '04',
        title: 'Painel admin',
        desc: 'Dashboard com perguntas frequentes, dúvidas não respondidas, e ajustes de resposta.',
      },
    ],
    note: 'Quando a IA não souber responder, ela avisa a aluna e te notifica. Hospedagem em VPS próprio da Widia.',
  },
  included: [
    'Interface web completa e responsiva',
    'Processamento e indexação do conteúdo (horas de aula + PDFs, volume definido na call)',
    'Calibragem de tom de voz com 2 ciclos de ajuste',
    'Painel admin pra gestão',
    'Sistema de login pras alunas',
    'Deploy e domínio configurado',
    'Treinamento de uso (1h via call)',
    '30 dias de suporte pós-entrega',
    'Até 5.000 perguntas/mês em modelos econômicos (Claude Haiku ou GPT-4o mini)',
  ],
  timeline: [
    {
      label: 'Semana 1 — Discovery e setup',
      desc: 'Mergulhar no seu método e preparar a base técnica.',
      bullets: [
        'Kickoff call: alinhar escopo final, entregáveis e acessos',
        'Coleta do material (aulas gravadas, PDFs, áudios, prints de DMs)',
        'Call de imersão no tom de voz e no método Vitória Aver',
        'Definição da lista piloto (3 a 5 alunas pra teste)',
        'Setup de infraestrutura: servidor, banco vetorial, domínio',
      ],
    },
    {
      label: 'Semana 2 — Construção',
      desc: 'Processar o conteúdo e montar a primeira versão funcional.',
      bullets: [
        'Transcrição das aulas gravadas (áudio vira texto)',
        'Processamento e indexação dos materiais na base de conhecimento',
        'Montagem do cérebro (integração LLM + sua base)',
        'Interface de chat com login e histórico de conversas',
        'Painel admin v1 (perguntas frequentes + dúvidas não respondidas)',
        'Primeira versão ponta a ponta rodando em ambiente privado',
      ],
    },
    {
      label: 'Semana 3 — Calibragem e teste piloto',
      desc: 'Ajustar a voz até ficar igual à sua e validar com alunas reais.',
      bullets: [
        '1º ciclo de calibragem: você avalia 20 a 30 respostas, eu ajusto',
        'Refinamento do tom de voz e das regras de resposta',
        '2º ciclo de calibragem com ajustes finos',
        'Liberação pras alunas piloto, coleta de feedback',
        'Últimos ajustes antes do go-live',
      ],
    },
    {
      label: 'Entrega (final da semana 3 / início da 4)',
      desc: 'Virada de chave e handover.',
      bullets: [
        'Aprovação final de escopo e tom de voz',
        'Treinamento de uso (1h via call, gravada)',
        'Liberação pra todas as alunas da Academy',
        'Handover do painel admin',
        'Início dos 30 dias de suporte pós-entrega',
      ],
    },
  ],
  investment: {
    setup: [
      { item: 'Setup — 40% na aprovação', value: 'R$ 1.800' },
      { item: 'Setup — 60% na entrega', value: 'R$ 2.700' },
    ],
    recurring: [
      { item: 'Mensalidade — infra, manutenção e até 5.000 perguntas/mês', value: 'R$ 600/mês' },
    ],
    note: 'Setup total: R$ 4.500 (40% na aprovação, 60% na entrega). A mensalidade cobre infraestrutura, manutenção e até 5.000 perguntas/mês processadas em modelos econômicos (Claude Haiku ou GPT-4o mini). Acima desse volume, o custo da API é pago direto ao provedor pela cliente — ajudamos na configuração da conta. Primeira mensalidade só após entrega aprovada.',
  },
  nextSteps: [
    'Validar proposta',
    'Assinatura do contrato',
    'Discovery de conteúdo',
    'Em 3 semanas, Vitória IA no ar',
  ],
  whatsappMessage: 'Oi Bruno! Vi a proposta da Vitória IA e quero conversar sobre os próximos passos.',
}
