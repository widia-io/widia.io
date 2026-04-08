# Database — KEFI

Schema dedicado `kefi` no Supabase compartilhado. Segue o padrão dos outros projetos (`widia_omni`, `symphony`).

## Arquivo de migração

**Caminho:** `/Users/bruno/Developer/infra/supabase/volumes/db/init/101-kefi.sql`

```sql
-- KEFI — schema dedicado
-- Projeto: site institucional + painel admin pra marca KEFI (Tamyres)

CREATE SCHEMA IF NOT EXISTS kefi;

GRANT ALL ON SCHEMA kefi TO postgres;
GRANT USAGE ON SCHEMA kefi TO authenticated, anon, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA kefi GRANT ALL ON TABLES TO postgres, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA kefi GRANT SELECT ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA kefi GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA kefi GRANT ALL ON SEQUENCES TO postgres, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA kefi GRANT USAGE ON SEQUENCES TO authenticated, anon;

-- =====================================================
-- Extensões necessárias
-- =====================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- Função auxiliar: updated_at automático
-- =====================================================
CREATE OR REPLACE FUNCTION kefi.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- =====================================================
-- admin_users: whitelist de emails que podem acessar /admin
-- =====================================================
CREATE TABLE IF NOT EXISTS kefi.admin_users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Seed do email inicial (substituir no kickoff)
-- INSERT INTO kefi.admin_users (email) VALUES ('tamyres@exemplo.com');

-- =====================================================
-- categorias
-- =====================================================
CREATE TABLE IF NOT EXISTS kefi.categorias (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome text NOT NULL,
  slug text NOT NULL UNIQUE,
  ordem integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER tr_kefi_categorias_updated
  BEFORE UPDATE ON kefi.categorias
  FOR EACH ROW EXECUTE FUNCTION kefi.set_updated_at();

-- Seed inicial (ajustar no onboarding)
INSERT INTO kefi.categorias (nome, slug, ordem) VALUES
  ('Tops', 'tops', 1),
  ('Leggings', 'leggings', 2),
  ('Conjuntos', 'conjuntos', 3),
  ('Shorts', 'shorts', 4),
  ('Acessórios', 'acessorios', 5)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- produtos
-- =====================================================
CREATE TABLE IF NOT EXISTS kefi.produtos (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome text NOT NULL,
  slug text NOT NULL UNIQUE,
  descricao text,
  preco numeric(10, 2) NOT NULL CHECK (preco >= 0),
  categoria_id uuid REFERENCES kefi.categorias(id) ON DELETE SET NULL,
  destaque boolean NOT NULL DEFAULT false,
  esgotado boolean NOT NULL DEFAULT false,
  active boolean NOT NULL DEFAULT true,
  ordem integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_kefi_produtos_active_destaque
  ON kefi.produtos (active, destaque DESC, ordem, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_kefi_produtos_categoria
  ON kefi.produtos (categoria_id);

CREATE TRIGGER tr_kefi_produtos_updated
  BEFORE UPDATE ON kefi.produtos
  FOR EACH ROW EXECUTE FUNCTION kefi.set_updated_at();

-- =====================================================
-- produto_fotos: múltiplas fotos por produto, ordenáveis
-- =====================================================
CREATE TABLE IF NOT EXISTS kefi.produto_fotos (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  produto_id uuid NOT NULL REFERENCES kefi.produtos(id) ON DELETE CASCADE,
  storage_path text NOT NULL,
  url text NOT NULL,
  alt text,
  ordem integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_kefi_produto_fotos_produto
  ON kefi.produto_fotos (produto_id, ordem);

-- =====================================================
-- promocoes: descontos com janela temporal + voucher
-- =====================================================
CREATE TABLE IF NOT EXISTS kefi.promocoes (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo text NOT NULL,
  descricao text,
  codigo text NOT NULL,
  tipo_desconto text NOT NULL CHECK (tipo_desconto IN ('percentual', 'valor')),
  valor_desconto numeric(10, 2) NOT NULL CHECK (valor_desconto > 0),
  start_at timestamptz NOT NULL,
  end_at timestamptz NOT NULL,
  active boolean NOT NULL DEFAULT true,
  prioridade integer NOT NULL DEFAULT 0,
  banner_cor text DEFAULT '#C89A7B',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT chk_end_after_start CHECK (end_at > start_at)
);

CREATE INDEX IF NOT EXISTS idx_kefi_promocoes_active_window
  ON kefi.promocoes (active, start_at, end_at);
CREATE INDEX IF NOT EXISTS idx_kefi_promocoes_prioridade
  ON kefi.promocoes (prioridade DESC, created_at DESC);

CREATE TRIGGER tr_kefi_promocoes_updated
  BEFORE UPDATE ON kefi.promocoes
  FOR EACH ROW EXECUTE FUNCTION kefi.set_updated_at();

-- =====================================================
-- View: promo atualmente ativa (usada pelo banner)
-- =====================================================
CREATE OR REPLACE VIEW kefi.promocao_ativa AS
SELECT *
FROM kefi.promocoes
WHERE active = true
  AND now() BETWEEN start_at AND end_at
ORDER BY prioridade DESC, created_at DESC
LIMIT 1;

GRANT SELECT ON kefi.promocao_ativa TO anon, authenticated;

-- =====================================================
-- Row Level Security
-- =====================================================
ALTER TABLE kefi.produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE kefi.produto_fotos ENABLE ROW LEVEL SECURITY;
ALTER TABLE kefi.categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE kefi.promocoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE kefi.admin_users ENABLE ROW LEVEL SECURITY;

-- Função helper: verifica se o usuário logado é admin do KEFI
CREATE OR REPLACE FUNCTION kefi.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM kefi.admin_users
    WHERE email = (auth.jwt() ->> 'email')
  );
$$;

-- Leitura pública: produtos ativos, fotos, categorias, promo ativa
CREATE POLICY "public read produtos ativos"
  ON kefi.produtos FOR SELECT
  TO anon, authenticated
  USING (active = true);

CREATE POLICY "public read produto_fotos"
  ON kefi.produto_fotos FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "public read categorias"
  ON kefi.categorias FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "public read promocoes ativas"
  ON kefi.promocoes FOR SELECT
  TO anon, authenticated
  USING (active = true AND now() BETWEEN start_at AND end_at);

-- Escrita: apenas admins
CREATE POLICY "admins full produtos"
  ON kefi.produtos FOR ALL
  TO authenticated
  USING (kefi.is_admin())
  WITH CHECK (kefi.is_admin());

CREATE POLICY "admins full produto_fotos"
  ON kefi.produto_fotos FOR ALL
  TO authenticated
  USING (kefi.is_admin())
  WITH CHECK (kefi.is_admin());

CREATE POLICY "admins full categorias"
  ON kefi.categorias FOR ALL
  TO authenticated
  USING (kefi.is_admin())
  WITH CHECK (kefi.is_admin());

CREATE POLICY "admins full promocoes"
  ON kefi.promocoes FOR ALL
  TO authenticated
  USING (kefi.is_admin())
  WITH CHECK (kefi.is_admin());

CREATE POLICY "admins read admin_users"
  ON kefi.admin_users FOR SELECT
  TO authenticated
  USING (kefi.is_admin());
```

## Storage bucket + policies

```sql
-- Bucket público (URLs lêem direto)
INSERT INTO storage.buckets (id, name, public)
VALUES ('kefi-produtos', 'kefi-produtos', true)
ON CONFLICT (id) DO NOTHING;

-- Leitura pública
CREATE POLICY "public read kefi-produtos"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'kefi-produtos');

-- Upload/update/delete apenas para admins KEFI
CREATE POLICY "admin write kefi-produtos"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'kefi-produtos' AND kefi.is_admin());

CREATE POLICY "admin update kefi-produtos"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'kefi-produtos' AND kefi.is_admin());

CREATE POLICY "admin delete kefi-produtos"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'kefi-produtos' AND kefi.is_admin());
```

## PostgREST exposure

No `docker-compose.yml` do infra, o serviço `rest` precisa expor o schema `kefi`:

```yaml
rest:
  environment:
    PGRST_DB_SCHEMAS: public,storage,graphql_public,widia_omni,symphony,kefi
```

Sem isso, o cliente Supabase JS com `{ db: { schema: 'kefi' } }` vai receber `404` em todas as queries.

## Aplicação

**Primeira vez (servidor novo):**
```bash
cd /Users/bruno/Developer/infra/supabase
# adicionar 101-kefi.sql ao volumes/db/init/
# atualizar docker-compose.yml (volumes e PGRST_DB_SCHEMAS)
docker compose down
docker compose up -d
```

**Em servidor já rodando (não quero reiniciar):**
```bash
docker exec -i supabase-db psql -U postgres -d postgres < volumes/db/init/101-kefi.sql
# depois atualizar docker-compose.yml e:
docker compose up -d rest   # recarrega só o PostgREST com novo schema exposto
```

## Teste rápido

```sql
-- Conectar no DB e testar
\dn                          -- listar schemas, ver 'kefi'
\dt kefi.*                   -- listar tabelas do schema
SELECT * FROM kefi.categorias;
SELECT * FROM kefi.promocao_ativa;
```
