# Specs funcionais — KEFI

## Rotas

### Públicas
| Rota | Descrição |
|---|---|
| `/` | Landing institucional (hero, sobre, coleção, manifesto, depoimentos, CTA) |
| `/produtos` | Grid completo de produtos com filtro por categoria (opcional MVP) |
| `/produtos/[slug]` | Página individual do produto (opcional MVP, pode abrir modal) |

### Privadas (admin)
| Rota | Descrição |
|---|---|
| `/admin/login` | Magic link por email (Supabase Auth) |
| `/admin` | Dashboard (contagem de produtos, promo ativa, atalhos) |
| `/admin/produtos` | Listagem + CRUD |
| `/admin/produtos/novo` | Formulário de criação |
| `/admin/produtos/[id]` | Formulário de edição |
| `/admin/categorias` | CRUD de categorias |
| `/admin/promocoes` | CRUD de promoções + vouchers |

## Componentes principais

### `<PromoBanner />`
- Renderizado no topo do layout público
- Busca promoção ativa via RSC (Server Component)
- Query: `active = true AND now() BETWEEN start_at AND end_at` (ORDER BY priority LIMIT 1)
- Exibe: título, descrição curta, código do voucher, CTA "copiar código"
- Se nenhuma promo ativa → renderiza `null`

### `<ProductCard />`
- Imagem principal (primeira foto do array)
- Nome, categoria, preço
- Badge "destaque" ou "esgotado"
- Botão "Comprar no WhatsApp" → `wa.me/5511992751778?text=Oi%20KEFI!%20Quero%20o%20{nome}`

### `<ProductForm />` (admin)
- Campos: nome, descrição, preço, categoria (select), destaque (switch), esgotado (switch)
- Upload múltiplo (drag-drop) — usa Supabase Storage
- Reordenação de fotos por drag-drop
- Preview ao lado

### `<PromoForm />` (admin)
- Campos: título, descrição, código do voucher, percentual/valor desconto
- Datas: `start_at`, `end_at` (datetime-local)
- Flag: `active`
- Preview do banner em tempo real

## Auth (Supabase)

- Provider: **Magic Link por email**
- Apenas usuários pré-autorizados (lista em `kefi.admin_users` ou via `email IN (...)` no middleware)
- Middleware Next.js protege `/admin/*` redirecionando pra `/admin/login` se não autenticado
- Session via cookies HTTP-only (SSR-compatible)

**Usuário inicial:** Tamyres (email a coletar no kickoff)

## Storage (Supabase)

- Bucket: `kefi-produtos` (privado, com policies)
- Estrutura: `{produto_id}/{uuid}.{ext}`
- Políticas:
  - `SELECT`: público (URLs públicas via `getPublicUrl()`)
  - `INSERT/UPDATE/DELETE`: apenas authenticated com role admin

## Regras de negócio

### Produto
- Exibir no site apenas se `active = true`
- Ordenação default: destaque primeiro, depois `created_at DESC`
- "Esgotado" não esconde — apenas marca visualmente e desabilita o CTA

### Promoção
- Apenas 1 promoção ativa por vez na query do banner (ORDER BY priority DESC, created_at DESC)
- Ao criar uma nova ativa, não desativa as outras — a query cuida
- Código do voucher: texto livre (ex: `KEFI10`, `MARCAS15`)

### Categoria
- Lista fixa inicial (sugerida): Tops, Leggings, Conjuntos, Shorts, Acessórios
- Editável via admin

## Validações (client + server)

| Campo | Validação |
|---|---|
| Produto.nome | obrigatório, 2–120 chars |
| Produto.preco | obrigatório, > 0 |
| Produto.fotos | mínimo 1 |
| Promo.codigo | obrigatório, uppercase, sem espaços |
| Promo.end_at | deve ser > start_at |

## SEO

- `<title>`: "KEFI — Movimento com propósito" (home)
- Meta description com pitch da marca
- Open Graph com imagem do feed
- `sitemap.xml` + `robots.txt`
- Google Analytics 4 (ID a criar)
