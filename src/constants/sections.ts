import {
  MessageCircle,
  FileSpreadsheet,
  Instagram,
  CreditCard,
  HelpCircle,
  Calendar,
  Wrench,
  Rocket,
} from 'lucide-react'
import { AboutHighlight, Step, ProblemCard, Testimonial, ServiceItem, FAQItem } from '@/types/sections'
import { CTA_MESSAGES } from './cta-messages'

export const steps: Step[] = [
  {
    number: 1,
    title: 'Sessão gratuita de 1h',
    description: 'A gente entra na rotina, entende gargalos e prioriza onde a IA começa a destravar valor de verdade.',
    icon: Calendar,
  },
  {
    number: 2,
    title: 'Solução sob medida',
    description: 'Desenhamos o fluxo, construímos a automação e conectamos ao que você já usa no dia a dia.',
    icon: Wrench,
  },
  {
    number: 3,
    title: 'Acompanhamento até funcionar',
    description: 'Você começa a usar com apoio próximo, ajustes finos e evolução contínua da operação.',
    icon: Rocket,
  },
]

export const problemCards: ProblemCard[] = [
  {
    icon: MessageCircle,
    tag: 'Atendimento',
    problem: 'Respondo cliente por cliente no WhatsApp',
    solution: 'Assistente que faz triagem, organiza recorrências e reduz o peso das respostas manuais.',
    outcome: 'Atendimento inicial sem fila e menos dependente de você para tudo.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_WHATSAPP,
  },
  {
    icon: FileSpreadsheet,
    tag: 'Financeiro',
    problem: 'Perco horas fazendo orçamento no Excel',
    solution: 'Automação de planilhas e regras que transforma cálculo manual em processo repetível.',
    outcome: 'Orçamentos em minutos, com menos retrabalho e mais clareza de margem.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_EXCEL,
  },
  {
    icon: Instagram,
    tag: 'Conteúdo',
    problem: 'Não consigo criar conteúdo pro Instagram',
    solution: 'IA que estrutura pautas, roteiros e legendas no seu tom, sem travar a agenda.',
    outcome: 'Produção de conteúdo mais consistente sem depender de inspiração de última hora.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_INSTAGRAM,
  },
  {
    icon: CreditCard,
    tag: 'Cobrança',
    problem: 'Quero cobrar recorrente mas faço tudo no Pix',
    solution: 'Landing page e checkout automatizado para organizar assinatura, cobrança e acompanhamento.',
    outcome: 'Fluxo de venda mais previsível, com cobrança recorrente funcionando de ponta a ponta.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_PIX,
  },
  {
    icon: HelpCircle,
    tag: 'Direção',
    problem: 'Não sei nem por onde começar com IA',
    solution: 'Sessão de diagnóstico personalizada para enxergar gargalos, prioridades e primeiro passo viável.',
    outcome: 'Você sai com clareza do que resolver agora e do que pode esperar.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_INICIO,
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Consultora de Imagem',
    role: 'Curitiba, PR',
    focus: 'WhatsApp sob controle',
    impact: '4h por semana recuperadas',
    quote: 'Antes eu gastava 4h por semana respondendo WhatsApp. Agora gasto 30 minutos.',
  },
  {
    name: 'Engenheiro Civil',
    role: 'São Paulo, SP',
    focus: 'Orçamento sem retrabalho',
    impact: '1 dia por semana economizado',
    quote: 'Automatizamos os orçamentos que eu fazia no Excel. Economizo um dia inteiro por semana.',
  },
  {
    name: 'Empreendedora Digital',
    role: 'Florianópolis, SC',
    focus: 'Venda recorrente organizada',
    impact: 'Landing + checkout em 7 dias',
    quote: 'Em 7 dias já tinha minha landing page com checkout funcionando. Não precisei aprender nada técnico.',
  },
]

export const serviceItems: ServiceItem[] = [
  {
    name: 'Sessão Diagnóstico',
    description: '1h gratuita para mapear gargalos, oportunidades e o ponto certo de entrada.',
    format: '1 encontro',
    bestFor: 'Para quem quer clareza antes de investir em qualquer automação.',
    outcome: 'Sai com prioridades nítidas e um próximo passo viável.',
    ctaMessage: CTA_MESSAGES.SESSAO_GRATUITA,
    highlight: true,
  },
  {
    name: 'Projeto Pontual',
    description: 'Uma automação, assistente ou ferramenta desenhada para um problema específico do fluxo.',
    format: 'Entrega fechada',
    bestFor: 'Para destravar um gargalo concreto sem abrir uma frente gigante.',
    outcome: 'Você recebe uma solução pronta para uso e ajustada ao contexto.',
    ctaMessage: CTA_MESSAGES.PROJETO_PONTUAL,
  },
  {
    name: 'Acompanhamento Mensal',
    description: 'Suporte contínuo e novas automações conforme a operação amadurece.',
    format: 'Ritmo contínuo',
    bestFor: 'Para quem quer evoluir sem voltar ao improviso operacional.',
    outcome: 'A operação ganha cadência, ajustes finos e novas camadas de automação.',
    ctaMessage: CTA_MESSAGES.ACOMPANHAMENTO,
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Preciso saber programar?',
    answer: 'Não. A gente cuida de toda a parte técnica. Você só precisa explicar o que precisa resolver.',
  },
  {
    question: 'Quanto tempo demora pra ter resultado?',
    answer: 'A maioria dos projetos entrega resultado no primeiro mês. Projetos simples ficam prontos em 1-2 semanas.',
  },
  {
    question: 'Funciona pro meu tipo de negócio?',
    answer: 'Se você tem tarefas repetitivas, atendimento ao cliente ou processos manuais, provavelmente sim. Na sessão gratuita a gente avalia juntos.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'A sessão diagnóstico é gratuita. Projetos pontuais têm valor fixo combinado antes. Acompanhamento mensal é por assinatura.',
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'A gente acompanha até funcionar. Se não resolver seu problema, você não paga.',
  },
]

export const aboutBio = '19 anos de engenharia de software, de pagamentos bancários a SaaS. Hoje ajudo pequenas empresas a fazerem com IA o que antes só empresa grande conseguia.'

export const aboutHighlights: AboutHighlight[] = [
  {
    label: 'Trajetória',
    value: '19 anos em engenharia de software',
  },
  {
    label: 'Território',
    value: 'De pagamentos bancários a SaaS',
  },
  {
    label: 'Hoje',
    value: 'IA aplicada à rotina de pequenas empresas',
  },
]
