-- Conteúdo pedagógico por assunto: roteiro, lei seca e materiais externos.
create table if not exists public.assunto_conteudos (
  id uuid primary key default gen_random_uuid(),
  assunto_id uuid not null references public.assuntos(id) on delete cascade,
  titulo text not null,
  orientacao text,
  lei_seca text,
  lei_seca_url text,
  pdf_url text,
  video_url text,
  ordem integer not null default 0,
  ativo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists assunto_conteudos_assunto_idx on public.assunto_conteudos(assunto_id, ordem);
alter table public.assunto_conteudos enable row level security;
drop policy if exists "conteudos leitura autenticada" on public.assunto_conteudos;
create policy "conteudos leitura autenticada" on public.assunto_conteudos for select to authenticated using (ativo = true);
