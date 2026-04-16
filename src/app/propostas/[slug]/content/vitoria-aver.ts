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
        desc: 'Next.js, responsivo, login pras alunas, histórico salvo.',
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
  ],
  timeline: [
    {
      label: 'Semana 1',
      desc: 'Discovery do conteúdo, mapeamento do método, setup.',
    },
    {
      label: 'Semana 2',
      desc: 'Processamento do conteúdo, primeira versão funcionando.',
    },
    {
      label: 'Semana 3',
      desc: 'Calibragem de voz, ajustes, teste com alunas piloto.',
    },
    {
      label: 'Entrega',
      desc: 'Final da semana 3 / início da 4.',
    },
  ],
  investment: {
    setup: [{ item: 'Setup (pagamento único)', value: 'R$ 4.500' }],
    recurring: [{ item: 'Mensalidade (infra + manutenção)', value: 'R$ 600/mês' }],
    note: 'Primeira mensalidade só após entrega aprovada.',
  },
  nextSteps: [
    'Validar proposta',
    'Assinatura do contrato',
    'Discovery de conteúdo',
    'Em 3 semanas, Vitória IA no ar',
  ],
  whatsappMessage: 'Oi Bruno! Vi a proposta da Vitória IA e quero conversar sobre os próximos passos.',
}
