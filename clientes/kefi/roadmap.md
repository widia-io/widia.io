# Roadmap — KEFI

Implementação em fases. Tudo dentro do prazo de 7–10 dias úteis.

## Fase 0 — Kickoff (1 dia)

- [ ] Confirmação formal da proposta (WhatsApp)
- [ ] Coleta do email da Tamyres pra cadastrar em `kefi.admin_users`
- [ ] Coleta de fotos das peças atuais (cada peça: 3–6 fotos)
- [ ] Coleta de textos: sobre a marca, frases, depoimentos reais
- [ ] Escolha do domínio `.com.br` e registro
- [ ] Definição da stack final (confirmado: Next.js + Supabase + Vercel)

## Fase 1 — Infra (0.5 dia)

- [ ] Criar `/Users/bruno/Developer/infra/supabase/volumes/db/init/101-kefi.sql` (ver [database.md](./database.md))
- [ ] Atualizar `docker-compose.yml` do infra: montar o arquivo e adicionar `kefi` em `PGRST_DB_SCHEMAS`
- [ ] Aplicar no servidor: `ssh root@82.112.245.152` + `docker exec supabase-db psql < 101-kefi.sql`
- [ ] Recarregar PostgREST (`docker compose up -d rest`)
- [ ] Criar bucket `kefi-produtos` + policies
- [ ] Cadastrar email da Tamyres em `kefi.admin_users`
- [ ] Testar conexão: `SELECT * FROM kefi.categorias;`

## Fase 2 — Scaffold do app (1 dia)

- [ ] Criar repo separado `kefi-site` (ou pasta dentro de `widia/active/`)
- [ ] Init Next.js 15 + TypeScript + Tailwind
- [ ] Instalar: `@supabase/supabase-js`, `@supabase/ssr`, `lucide-react`, `zod`, `react-hook-form`
- [ ] Setup cliente Supabase com `{ db: { schema: 'kefi' } }`
- [ ] Middleware de auth (`/admin/*`)
- [ ] Layout público com `<PromoBanner />` no topo
- [ ] Portar visual do `/preview/tamyres-kefi` como base do layout público
- [ ] Deploy inicial na Vercel (vazio, só pra validar pipeline)

## Fase 3 — Landing pública (1.5 dias)

- [ ] Hero com copy real
- [ ] Seção sobre a marca
- [ ] Seção de pilares (Conforto, Qualidade, Consciência)
- [ ] Seção de coleção em destaque (lê de `kefi.produtos WHERE destaque = true`)
- [ ] Manifesto / quote
- [ ] Depoimentos
- [ ] CTA final + footer
- [ ] `<PromoBanner />` lendo `kefi.promocao_ativa`
- [ ] Responsividade (mobile first)

## Fase 4 — Admin: auth + produtos (2 dias)

- [ ] `/admin/login` com magic link
- [ ] Middleware bloqueia `/admin/*` se não logado ou não em `kefi.admin_users`
- [ ] `/admin` dashboard simples (contadores + atalhos)
- [ ] `/admin/produtos` listagem com filtro por categoria
- [ ] `/admin/produtos/novo` — formulário + upload múltiplo pro bucket
- [ ] `/admin/produtos/[id]` — edição + reordenar fotos
- [ ] Delete com confirmação
- [ ] `/admin/categorias` — CRUD simples

## Fase 5 — Admin: promoções (1 dia)

- [ ] `/admin/promocoes` listagem
- [ ] Formulário de criação/edição
- [ ] Campos: título, descrição, código, tipo + valor desconto, janela temporal, prioridade, cor do banner
- [ ] Preview do banner em tempo real
- [ ] Toggle ativar/desativar
- [ ] Delete

## Fase 6 — Refino + QA (1 dia)

- [ ] Cadastro inicial dos produtos junto com a Tamyres (sessão live/screenshare)
- [ ] Ajustes de copy e visual pedidos pela Tamyres (1ª rodada)
- [ ] Testes em mobile real (iOS + Android)
- [ ] SEO: meta tags, OG, sitemap
- [ ] Google Analytics 4
- [ ] Verificar acessibilidade básica (contraste, labels, alt)

## Fase 7 — Go-live (0.5 dia)

- [ ] Configurar domínio `.com.br` apontando pra Vercel
- [ ] SSL ativo
- [ ] Preencher redes sociais com link do site
- [ ] 2ª rodada de ajustes (se houver)
- [ ] **Recebimento dos R$ 1.000**

## Pós-entrega (30 dias)

- [ ] Suporte pra ajustes pequenos
- [ ] Monitorar analytics
- [ ] Recolher feedback pra evolução (vitrine → loja completa é o próximo passo natural)

## Checklist de risco (evitar escopo-creep)

Se a Tamyres pedir durante o projeto, **marcar como "proposta 2"**, não incluir nesta entrega:

- [ ] Carrinho / checkout
- [ ] Pagamento integrado
- [ ] Cálculo de frete
- [ ] Etiquetas de envio
- [ ] Integração Instagram Shopping
- [ ] Automação de WhatsApp
- [ ] Geração de conteúdo com IA
- [ ] Multi-idioma
- [ ] Blog / conteúdo editorial
