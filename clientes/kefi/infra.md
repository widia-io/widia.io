# Infraestrutura — KEFI

## Servidor

- **Host:** `82.112.245.152`
- **Acesso:** `ssh root@82.112.245.152`
- **Supabase:** instalado via Docker Compose (reaproveitando `/Users/bruno/Developer/infra/supabase`)
- **Portainer + Grafana + Prometheus:** já rodando (não mexer)

## Separação lógica no Supabase (MANDATÓRIO)

O Supabase do servidor é compartilhado entre projetos Widia. Cada projeto tem **schema Postgres dedicado** — nunca jogar tabelas no `public`.

Schemas existentes no servidor:
| Schema | Projeto |
|---|---|
| `widia_omni` | Widia Omni |
| `symphony` | Symphony M1 |
| **`kefi`** | **KEFI (este projeto)** |

### Por que schema e não database separado

- Supabase Auth + Storage vivem no mesmo cluster; separar DB quebraria a integração
- Schemas isolam tabelas, índices, policies
- RLS por schema é trivial
- Backup/restore granular

## Script de inicialização

Seguindo o padrão de `volumes/db/init/99-widia.sql` e `100-symphony.sql`, criar:

**Caminho:** `/Users/bruno/Developer/infra/supabase/volumes/db/init/101-kefi.sql`

Conteúdo completo em [database.md](./database.md).

Após adicionar o arquivo, também é preciso **montá-lo no `docker-compose.yml`** do infra:

```yaml
services:
  db:
    volumes:
      - db-data:/var/lib/postgresql/data
      - ./volumes/db/init/99-widia.sql:/docker-entrypoint-initdb.d/migrations/99-widia.sql:ro
      - ./volumes/db/init/100-symphony.sql:/docker-entrypoint-initdb.d/migrations/100-symphony.sql:ro
      - ./volumes/db/init/101-kefi.sql:/docker-entrypoint-initdb.d/migrations/101-kefi.sql:ro
```

Em seguida:

```bash
# Local
cd /Users/bruno/Developer/infra/supabase
docker compose down
docker compose up -d

# Remoto (servidor)
ssh root@82.112.245.152
cd /opt/infra/supabase  # ou caminho equivalente
git pull
docker compose up -d
# OU aplicar direto via psql sem reiniciar:
docker exec -i supabase-db psql -U postgres -d postgres < volumes/db/init/101-kefi.sql
```

## Storage bucket

Criar via Supabase Studio ou SQL:

```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('kefi-produtos', 'kefi-produtos', true)
ON CONFLICT (id) DO NOTHING;
```

Policies em [database.md](./database.md).

## Variáveis de ambiente (.env do app KEFI)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://<api-subdomain>.widia.io
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key do servidor>
SUPABASE_SERVICE_ROLE_KEY=<service role key — NUNCA commitar>

# Schema
NEXT_PUBLIC_SUPABASE_SCHEMA=kefi

# App
NEXT_PUBLIC_SITE_URL=https://kefi.com.br
KEFI_ADMIN_EMAILS=tamyres@exemplo.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Configurando o schema no cliente Supabase JS

```ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    db: { schema: 'kefi' },
  },
)
```

**Importante:** o schema precisa estar exposto no PostgREST via `PGRST_DB_SCHEMAS` no docker-compose. Verificar se já inclui `kefi`:

```yaml
rest:
  environment:
    PGRST_DB_SCHEMAS: public,storage,graphql_public,widia_omni,symphony,kefi
```

## Domínio

- **Registro:** Registro.br `.com.br` (~R$ 40/ano, coberto pelo 1º ano)
- **Apontamento:** DNS para Vercel OU para o servidor do Hostinger
- **SSL:** Let's Encrypt automático (Vercel) ou Caddy/Traefik no servidor

### Opções de hospedagem da app Next.js

**Opção A — Vercel (recomendado pra simplicidade):**
- Deploy automático via GitHub
- SSL grátis
- Edge + ISR
- Custo: grátis no free tier pra tráfego baixo

**Opção B — Docker no servidor Hostinger:**
- Container Next.js atrás de Caddy/Traefik
- Usa mesma rede do Supabase (latência zero)
- Mais controle, requer mais manutenção

**Decisão:** começar com **Vercel** — mais rápido pra entregar e mais barato pra escala baixa.

## Backup

- Snapshot automático do volume `db-data` do Docker (verificar se já configurado no servidor)
- Storage: fotos ficam no Supabase Storage, incluídas no mesmo backup
