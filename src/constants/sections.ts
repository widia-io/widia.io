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
import { AboutHighlight, CaseStudy, Step, ProblemCard, Testimonial, ServiceItem, FAQItem } from '@/types/sections'
import { CTA_MESSAGES } from './cta-messages'

export const steps: Step[] = [
  {
    number: 1,
    title: 'Diagnóstico gratuito de 1h',
    description: 'A gente entra na sua operação, identifica onde você está perdendo dinheiro e monta o plano de ataque.',
    icon: Calendar,
  },
  {
    number: 2,
    title: 'Implementação sob medida',
    description: 'Construímos a automação que resolve seu problema real, conectada ao que você já usa. Sem enrolação.',
    icon: Wrench,
  },
  {
    number: 3,
    title: 'Resultado garantido',
    description: 'Você começa a economizar horas e dinheiro desde a primeira semana. A gente acompanha até funcionar de verdade.',
    icon: Rocket,
  },
]

export const problemCards: ProblemCard[] = [
  {
    icon: MessageCircle,
    tag: 'Atendimento',
    problem: 'Gasto 4h por dia respondendo WhatsApp no manual',
    solution: 'Assistente de IA que faz triagem, responde dúvidas frequentes e organiza filas. Você só entra quando precisa.',
    outcome: 'Clientes atendidos em segundos, não em horas. Até 4h/dia recuperadas.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_WHATSAPP,
  },
  {
    icon: FileSpreadsheet,
    tag: 'Financeiro',
    problem: 'Perco um dia inteiro fazendo orçamento no Excel',
    solution: 'Automação que transforma seus dados em orçamentos prontos, com cálculo de margem e envio automático.',
    outcome: 'Orçamentos em 3 minutos. Zero retrabalho. Margem visível na hora.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_EXCEL,
  },
  {
    icon: Instagram,
    tag: 'Conteúdo',
    problem: 'Não posto há semanas porque não tenho tempo',
    solution: 'IA que cria pautas, roteiros e legendas no seu tom de voz. Você só aprova e publica.',
    outcome: 'Conteúdo consistente toda semana, sem depender de inspiração ou agência cara.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_INSTAGRAM,
  },
  {
    icon: CreditCard,
    tag: 'Cobrança',
    problem: 'Cobro tudo no Pix manual e perco cliente todo mês',
    solution: 'Landing page com checkout automatizado, cobrança recorrente e acompanhamento de inadimplência.',
    outcome: 'Receita previsível com cobrança funcionando 24h, sem você precisar cobrar ninguém.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_PIX,
  },
  {
    icon: HelpCircle,
    tag: 'Perdido',
    problem: 'Todo mundo fala de IA mas eu não sei nem por onde começar',
    solution: 'Diagnóstico personalizado para descobrir exatamente onde IA já pode gerar resultado no seu negócio.',
    outcome: 'Em 1h você sai com clareza total do que fazer agora e o que pode esperar.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_INICIO,
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Consultora de Imagem',
    role: 'Curitiba, PR',
    focus: 'WhatsApp no automático',
    impact: '4h por semana recuperadas',
    quote: 'Eu gastava 4h por semana só respondendo WhatsApp. Hoje gasto 30 minutos. Parece que contratei uma secretária que nunca dorme.',
  },
  {
    name: 'Engenheiro Civil',
    role: 'São Paulo, SP',
    focus: 'Orçamento sem dor de cabeça',
    impact: '1 dia por semana economizado',
    quote: 'Automatizamos os orçamentos que eu fazia no Excel. Economizo um dia inteiro por semana. Isso é dinheiro no bolso.',
  },
  {
    name: 'Empreendedora Digital',
    role: 'Florianópolis, SC',
    focus: 'Venda recorrente funcionando',
    impact: 'Landing + checkout em 7 dias',
    quote: 'Em 7 dias já tinha minha landing page com checkout funcionando. Não precisei aprender nada técnico. Só falei o que eu precisava.',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    name: 'meuflip',
    url: 'https://meuflip.com',
    category: 'SaaS para house flipping',
    status: 'Produto em operação',
    headline: 'De planilha bagunçada para sistema completo com ROI de +24%.',
    description:
      'Plataforma que analisa viabilidade, custos e lucro de cada operação. Quem usava Excel e achismo agora tem controle real em 30 segundos.',
    evidence: ['ROI médio de +24%', '4h/sem poupadas', 'Análise completa em 30s'],
  },
  {
    name: 'MeuFoco',
    url: 'https://meufoco.app',
    category: 'SaaS de produtividade',
    status: 'Produto lançado',
    headline: 'Metas, hábitos, finanças e journaling numa plataforma só. Do zero ao produto lançado.',
    description:
      'Produto completo com módulos integrados, Life Score semanal e planos de entrada. Construído e lançado com a metodologia Widia.',
    evidence: ['Metas + hábitos + tarefas', 'Módulo financeiro incluso', 'Planos grátis, Pro e Premium'],
  },
]

export const serviceItems: ServiceItem[] = [
  {
    name: 'Sessão Diagnóstico',
    description: '1h gratuita para encontrar onde seu negócio está sangrando tempo e dinheiro com processos manuais.',
    format: 'Gratuita',
    bestFor: 'Para quem quer parar de adivinhar e saber exatamente onde IA gera resultado.',
    outcome: 'Você sai com um mapa claro: o que automatizar primeiro, quanto vai economizar e o próximo passo.',
    ctaMessage: CTA_MESSAGES.SESSAO_GRATUITA,
    highlight: true,
  },
  {
    name: 'Projeto Pontual',
    description: 'Uma automação específica implementada e funcionando na sua operação. Entrega fechada, resultado concreto.',
    format: 'Entrega em até 2 semanas',
    bestFor: 'Para quem já sabe o problema e quer resolver de uma vez.',
    outcome: 'Solução pronta para uso, testada e ajustada ao seu contexto. Sem código, sem complicação.',
    ctaMessage: CTA_MESSAGES.PROJETO_PONTUAL,
  },
  {
    name: 'Acompanhamento Mensal',
    description: 'Suporte contínuo + novas automações conforme seu negócio cresce. Como ter um time de tecnologia sem o custo de um.',
    format: 'Evolução contínua',
    bestFor: 'Para quem não quer voltar ao improviso e quer escalar a operação com IA.',
    outcome: 'Operação que melhora todo mês. Mais automação, menos gargalo, mais lucro.',
    ctaMessage: CTA_MESSAGES.ACOMPANHAMENTO,
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Preciso saber programar?',
    answer: 'Zero. Nada. Nenhuma linha de código. A gente cuida de toda a parte técnica. Você só precisa explicar o que trava sua rotina.',
  },
  {
    question: 'Quanto tempo até eu ver resultado?',
    answer: 'A maioria dos clientes vê resultado na primeira semana. Projetos simples ficam prontos em 7 dias. Projetos maiores em 2-4 semanas.',
  },
  {
    question: 'Funciona pro meu tipo de negócio?',
    answer: 'Se você tem tarefas repetitivas, atendimento ao cliente ou processos manuais que tomam seu tempo, sim. Na sessão gratuita a gente avalia juntos em 1h.',
  },
  {
    question: 'E se não funcionar?',
    answer: 'A gente acompanha até funcionar. Simples assim. Se a automação não resolver seu problema, você não paga. Sem risco para você.',
  },
  {
    question: 'Quanto custa?',
    answer: 'A sessão diagnóstico é 100% gratuita. Projetos pontuais têm valor fixo combinado antes de começar. Acompanhamento mensal é por assinatura acessível. Sem surpresa.',
  },
]

export const aboutBio = '19 anos construindo software para bancos, fintechs e SaaS. Já vi empresa grande gastar milhões em tecnologia que pequeno negócio agora consegue ter com IA por uma fração do custo. É isso que a Widia faz.'

export const aboutHighlights: AboutHighlight[] = [
  {
    label: 'Experiência',
    value: '19 anos de engenharia de software pesada',
  },
  {
    label: 'Passagem',
    value: 'Bancos, fintechs e startups de SaaS',
  },
  {
    label: 'Missão',
    value: 'Dar pra pequena empresa o que só grande tinha',
  },
]
