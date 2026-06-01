import type { LabCase } from './types'

export const ecommerce1h: LabCase = {
  slug: 'ecommerce-1h',
  tag: 'case · e-commerce',
  publishedAt: '2026-04-16',
  hero: {
    title: 'E-commerce completo em 1 hora com Opus 4.7',
    subtitle:
      'Storefront, admin, catálogo, promoções e checkout stub. Do prompt inicial ao deploy em 60 minutos.',
    tldr:
      'Zero linhas de código escritas manualmente. Um único agente (Claude Opus 4.7) orquestrando stack moderno. Custo total de API abaixo de US$ 8. Deploy em Vercel, dados em Supabase.',
  },
  metrics: [
    { label: 'tempo total', value: '60 min' },
    { label: 'custo API', value: '< US$ 8' },
    { label: 'código escrito à mão', value: '0 linhas' },
    { label: 'produtos cadastrados', value: '24' },
  ],
  stack: [
    { name: 'Next.js 15', role: 'App Router · RSC · Server Actions' },
    { name: 'Tailwind 4 + shadcn', role: 'design system instantâneo' },
    { name: 'Supabase', role: 'auth + postgres + storage' },
    { name: 'Stripe', role: 'checkout + webhooks' },
    { name: 'Vercel', role: 'deploy + edge functions' },
    { name: 'Claude Opus 4.7', role: 'agente principal (arquitetura + código)' },
  ],
  timeline: [
    {
      range: '0–10min',
      title: 'Briefing e paleta',
      desc: 'Descrição do negócio, público, referências. Definição de paleta, tipografia e tom em um único prompt estruturado.',
      bullets: [
        'Brief de negócio em 1 parágrafo',
        'Paleta e tipografia baseadas em referência visual',
        'Decisão de stack (Next.js + Tailwind + Supabase)',
      ],
    },
    {
      range: '10–25min',
      title: 'Scaffolding + storefront',
      desc: 'Scaffolding Next.js com App Router, configuração do Tailwind e primeira versão da home + listagem de produtos.',
      bullets: [
        'Hero, navegação e footer responsivos',
        'Página de categoria com grid e filtros',
        'Página de produto com variações',
      ],
    },
    {
      range: '25–40min',
      title: 'Admin completo',
      desc: 'Painel administrativo com CRUD de produtos, categorias, promoções e avaliações. Login protegido.',
      bullets: [
        'Dashboard com contadores e promoção ativa',
        'CRUD de produto com upload de imagens',
        'Editor de categorias e cupons',
      ],
    },
    {
      range: '40–55min',
      title: 'Checkout + integrações',
      desc: 'Integração Stripe em modo teste, webhook de pedidos, e-mail transacional stub. Cupom aplicável no carrinho.',
      bullets: [
        'Checkout Stripe com frete fixo',
        'Webhook salvando pedido no Supabase',
        'Regra de cupom primeira-compra',
      ],
    },
    {
      range: '55–60min',
      title: 'Deploy e revisão',
      desc: 'Deploy em Vercel conectado ao Supabase de produção, variáveis de ambiente e smoke test dos fluxos críticos.',
      bullets: [
        'Deploy em domínio temporário',
        'Smoke test: cadastro, listagem, checkout teste',
        'Entrega do repositório ao cliente',
      ],
    },
  ],
  prompts: [
    {
      label: 'Prompt 1 · Scaffolding com regras',
      context:
        'Usado logo após o briefing. Define não só o que construir, mas o que NÃO fazer (evita que o agente alucine dependências).',
      body:
        'Crie uma estrutura Next.js 15 com App Router, Tailwind 4 e shadcn. Regras: (1) nada de Pages Router; (2) server components por padrão, client só onde precisa; (3) tipar tudo com TypeScript estrito; (4) zero dependência além das que eu pedir explicitamente. Comece pela home.',
    },
    {
      label: 'Prompt 2 · Admin como máquina de estado',
      context:
        'Pra admin não virar bagunça, descrever o CRUD como máquina de estado evita que o agente invente UX.',
      body:
        'O admin tem 4 estados por produto: rascunho, ativo, esgotado, arquivado. Transições permitidas: rascunho→ativo, ativo→esgotado, esgotado→ativo, qualquer→arquivado. Cada transição mostra um toast. Nada de modal de confirmação exceto em arquivar.',
    },
    {
      label: 'Prompt 3 · Checklist de encerramento',
      context:
        'Prompt final antes do deploy. Pede auditoria do próprio código do agente contra checklist explícito.',
      body:
        'Antes de eu fazer deploy, passe por esta checklist item por item e me diga o que está OK e o que precisa ajuste: (1) variáveis de ambiente documentadas; (2) webhook Stripe valida assinatura; (3) RLS ativo em todas as tabelas Supabase; (4) imagens têm fallback; (5) build passa sem warning TypeScript.',
    },
  ],
  gotchas: [
    {
      title: 'RLS esquecido por padrão',
      desc:
        'Supabase cria tabelas sem Row Level Security por default. O agente gerou migrations corretas, mas precisei pedir explicitamente pra auditar RLS antes do deploy. Sem isso, qualquer um consegue ler o banco via API pública.',
    },
    {
      title: 'Edge runtime quebra libs pesadas',
      desc:
        'O agente tentou colocar o webhook Stripe em Edge Runtime. Stripe SDK em Node é mais seguro. Um prompt corrigindo "use Node runtime para qualquer rota que toque Stripe" resolveu.',
    },
    {
      title: 'Imagens lentas sem CDN',
      desc:
        'Upload direto no Supabase Storage funcionou mas ficou lento em primeira visita. Configurar Image Optimization do Next com loader customizado resolveu em 5 minutos.',
    },
  ],
  context:
    'Este case foi executado durante teste prático do Opus 4.7 em 16 de abril de 2026, poucas horas após o release. O objetivo foi mensurar o ganho concreto no fluxo agentic end-to-end comparado a versões anteriores — não uma demo de marketing.',
  modelNote:
    'Observação sobre Opus 4.7: a diferença percebida vs 4.5 foi principalmente no ciclo de correção. O modelo acertou mais na primeira tentativa em problemas multi-arquivo (refactors que tocam schema + tipo + UI ao mesmo tempo). Context window grande ajudou a manter todo o escopo em memória sem recortar.',
  nextStep: {
    kicker: 'Vai construir algo parecido?',
    label: 'Conheça o curso IA Aplicada para Negócios',
    href: '/cursos/ia-aplicada-negocios',
  },
}
