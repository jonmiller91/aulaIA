# Variáveis de ambiente e segurança

Este projeto usa Vite. Valores reais ficam no `.env` **local**. O GitHub recebe só o `.env.example` (modelo, sem secrets).

## O que sobe no commit

| Arquivo | GitHub | Função |
|---------|--------|--------|
| `.gitignore` | sim | Bloqueia `.env` e pastas de build |
| `.env.example` | sim | Contrato das variáveis |
| `.env` | **não** | Chaves reais da máquina de cada pessoa |
| `docs/ambiente.md` | sim | Esta documentação |

O `.env` já está preenchido neste workspace com as chaves **públicas** do Supabase (URL + publishable + anon). Depois do clone, cada pessoa copia o exemplo:

```bash
cp .env.example .env
```

e cola os valores do painel do Supabase (Settings → API) ou pede as chaves ao time.

`DATABASE_URL` (connection string do Postgres) só é necessária se for usar Prisma CLI. Não coloque no frontend.

## Chaves no frontend (Vite)

Só use prefixo `VITE_`. Sem esse prefixo, a variável **não** chega ao `import.meta.env`.

```ts
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.VITE_SUPABASE_ANON_KEY;
```

| Variável | Onde usar | Sensível? |
|----------|-----------|-----------|
| `VITE_SUPABASE_URL` | Cliente JS | Não — URL pública da API |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Cliente JS (preferida) | Não — protegida por RLS |
| `VITE_SUPABASE_ANON_KEY` | Cliente JS (legado) | Não — mesma regra do anon JWT |
| `service_role` | **Nunca no frontend** | Sim — bypassa RLS |

A `service_role` não entra no `.env` deste app. Ela só existe no dashboard do Supabase / backend / Edge Functions.

## Produção — Vercel (engrenagem)

No deploy, o `.env` do repositório **não existe**. As mesmas variáveis `VITE_*` precisam estar no painel:

1. Abra o projeto na Vercel.
2. **Settings** (engrenagem) → **Environment Variables**.
3. Cadastre:

   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_ANON_KEY` (opcional, se o código ainda ler a chave anon)

4. Marque Production, Preview e Development conforme o ambiente.
5. Faça um novo deploy para o build enxergar as variáveis.

Sem isso, o site em produção sobe sem cliente Supabase configurado.

## Banco (já provisionado)

| Recurso | Detalhe |
|---------|---------|
| `public.vehicles` | Acervo (9 veículos; `id` = slug) |
| `public.vehicle_images` | Galeria |
| `public.inquiries` | Leads / propostas |
| `public.agendamentos` | Visitas ao showroom |
| `public.profiles` | Perfil do lojista (ligado a `auth.users`) |
| Storage `vehicle-images` | Fotos do painel |
| RLS | Anon lê só `publicado`; autenticado gerencia o acervo |

Login em `/admin`: conta Auth `adm@email.com` (perfil `admin`).

O schema Prisma do projeto está em `prisma/schema.prisma` (espelho do Postgres; sessões ficam no Auth, não em tabela própria).

## Regras

- Não commitar `.env`, `.env.local` nem dumps de keys.
- Não colar `service_role` em código, README ou issues.
- RLS continua obrigatório: chave publishable/anon no browser não substitui policy.
- Depois de alterar `.env` local, reinicie `npm run dev`.
