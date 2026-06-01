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
    title: 'Diagnóstico em 48h',
    description: 'Você mostra um processo manual. A gente mapeia gargalos, custo invisível e o primeiro ponto de automação.',
    icon: Calendar,
  },
  {
    number: 2,
    title: 'Protótipo simples',
    description: 'Você recebe uma primeira automação navegável, conectada ao fluxo real, para validar sem projeto longo.',
    icon: Wrench,
  },
  {
    number: 3,
    title: 'Plano de implantação',
    description: 'Se fizer sentido avançar, o valor do diagnóstico abate no sprint de implementação. Risco revertido.',
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
    outcome: 'Receita previsível com cobrança 24h, sem você precisar cobrar ninguém.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_PIX,
  },
  {
    icon: HelpCircle,
    tag: 'Perdido',
    problem: 'Todo mundo fala de IA mas eu não sei nem por onde começar',
    solution: 'Diagnóstico personalizado para descobrir exatamente onde IA pode gerar resultado agora, sem comprar ferramenta errada.',
    outcome: 'Em 48h você sai com clareza do que automatizar, protótipo simples e próximo passo.',
    ctaMessage: CTA_MESSAGES.PROBLEMA_INICIO,
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Camila Torres',
    role: 'Consultora de Imagem · Curitiba, PR',
    focus: 'WhatsApp no automático',
    impact: '4h por semana recuperadas',
    quote: 'Eu gastava 4h por semana só respondendo WhatsApp. Hoje gasto 30 minutos. Parece que contratei uma secretária que nunca dorme.',
  },
  {
    name: 'Renato Almeida',
    role: 'Engenheiro Civil · São Paulo, SP',
    focus: 'Orçamento sem dor de cabeça',
    impact: '1 dia por semana economizado',
    quote: 'Automatizamos os orçamentos que eu fazia no Excel. Economizo um dia inteiro por semana. Isso é dinheiro no bolso.',
  },
  {
    name: 'Marina Duarte',
    role: 'Empreendedora Digital · Florianópolis, SC',
    focus: 'Venda recorrente funcionando',
    impact: 'Landing + checkout em 7 dias',
    quote: 'Em 7 dias já tinha minha landing page com checkout funcionando. Não precisei aprender nada técnico. Só falei o que eu precisava.',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    name: 'meuflip',
    url: 'https://meuflip.com',
    image: '/images/cases/meuflip.png',
    category: 'SaaS para house flipping',
    status: 'Produto em operação',
    headline: 'De planilha bagunçada a sistema completo, com ROI de +24%.',
    description:
      'Plataforma que analisa viabilidade, custos e lucro de cada operação. Quem usava Excel e achismo agora tem controle real em 30 segundos.',
    evidence: ['+24% roi médio', '4h/sem poupadas', '30s análise completa'],
  },
  {
    name: 'MeuFoco',
    url: 'https://meufoco.app',
    image: '/images/cases/meufoco.png',
    category: 'SaaS de produtividade',
    status: 'Produto lançado',
    headline: 'Metas, hábitos, finanças e journaling numa plataforma só.',
    description:
      'Produto completo com módulos integrados, Life Score semanal e planos de entrada. Construído e lançado com a metodologia Widia.',
    evidence: ['4 módulos integrados', 'Life Score semanal', '0 → live lançado'],
  },
]

export const serviceItems: ServiceItem[] = [
  {
    name: 'Diagnóstico IA 48h',
    description: 'Mapeamos um processo manual, estimamos o custo do gargalo e entregamos um protótipo simples com IA.',
    format: 'R$1.500 · 48h',
    bestFor: 'Para quem precisa decidir rápido onde IA gera caixa, economia de tempo ou redução de retrabalho.',
    outcome: 'Mapa de automação, protótipo simples e plano de implantação. O valor abate se virar projeto.',
    ctaMessage: CTA_MESSAGES.DIAGNOSTICO,
    highlight: true,
  },
  {
    name: 'Projeto Pontual',
    description: 'Uma automação específica implementada e funcionando na sua operação. Escopo fechado, resultado concreto.',
    format: 'Sprint 7–14 dias',
    bestFor: 'Para quem já sabe o problema e quer resolver de uma vez.',
    outcome: 'Solução pronta para uso, testada e ajustada ao seu contexto. Sem código, sem complicação.',
    ctaMessage: CTA_MESSAGES.PROJETO_PONTUAL,
  },
  {
    name: 'Acompanhamento',
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
    answer: 'Zero. Nenhuma linha de código. A gente cuida de toda a parte técnica. Você só precisa explicar o que trava sua rotina.',
  },
  {
    question: 'Quanto tempo até eu ver resultado?',
    answer: 'O diagnóstico fica pronto em 48h. Você já sai com mapa, protótipo navegável e o próximo passo claro - antes de qualquer projeto maior.',
  },
  {
    question: 'Funciona pro meu tipo de negócio?',
    answer: 'Se você tem processos manuais e repetitivos, funciona. Atendimento, orçamento, conteúdo, cobrança - a gente escolhe o gargalo que mais custa e valida nele.',
  },
  {
    question: 'E se não funcionar?',
    answer: 'O diagnóstico existe justamente para descobrir isso antes de você investir mais. Se a automação não fizer sentido, você sai sabendo - com clareza, não no escuro.',
  },
  {
    question: 'Quanto custa?',
    answer: 'R$1.500 pelo Diagnóstico IA 48h. Se avançar para implantação, esse valor abate do projeto. Ou seja: o risco fica com a gente.',
  },
]

export const aboutBio = '20 anos construindo software para bancos, fintechs e SaaS. Já vi empresa grande gastar milhões em tecnologia que pequeno negócio agora consegue ter com IA por uma fração do custo. É isso que a Widia faz.'

export const aboutHighlights: AboutHighlight[] = [
  {
    label: 'Experiência',
    value: '20 anos de engenharia de software pesada',
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
