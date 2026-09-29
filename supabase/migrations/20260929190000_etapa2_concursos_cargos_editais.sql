-- Etapa 2: modelo normalizado concurso -> cargo -> edital -> topicos
create table if not exists public.concursos (
 id uuid primary key default gen_random_uuid(), nome text not null, orgao text not null, esfera text, uf char(2),
 status text not null default 'rascunho' check (status in ('rascunho','publicado','encerrado')),
 fonte_oficial_url text, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.concurso_cargos (
 id uuid primary key default gen_random_uuid(), concurso_id uuid not null references public.concursos(id) on delete cascade,
 nome text not null, escolaridade text, vagas integer, salario numeric(12,2), fonte_oficial_url text,
 ativo boolean not null default true, created_at timestamptz not null default now(), unique(concurso_id,nome)
);
create table if not exists public.editais_concurso (
 id uuid primary key default gen_random_uuid(), concurso_id uuid not null references public.concursos(id) on delete cascade,
 cargo_id uuid not null references public.concurso_cargos(id) on delete cascade, numero text, titulo text not null,
 publicado_em date, prova_em date, fonte_oficial_url text not null check (fonte_oficial_url ~ '^https?://'),
 pdf_url text, status text not null default 'publicado' check(status in ('rascunho','publicado','retificado','encerrado')),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.edital_topicos (
 id uuid primary key default gen_random_uuid(), edital_id uuid not null references public.editais_concurso(id) on delete cascade,
 disciplina_id uuid not null references public.disciplinas(id), assunto_id uuid references public.assuntos(id),
 peso numeric(8,3), incidencia numeric(8,3), ordem integer not null default 0, created_at timestamptz not null default now(),
 unique(edital_id,disciplina_id,assunto_id)
);
create table if not exists public.usuario_concurso_alvo (
 usuario_id uuid primary key references auth.users(id) on delete cascade, concurso_id uuid not null references public.concursos(id),
 cargo_id uuid not null references public.concurso_cargos(id), edital_id uuid references public.editais_concurso(id),
 updated_at timestamptz not null default now()
);
alter table public.concursos enable row level security; alter table public.concurso_cargos enable row level security;
alter table public.editais_concurso enable row level security; alter table public.edital_topicos enable row level security;
alter table public.usuario_concurso_alvo enable row level security;
create policy concursos_leitura on public.concursos for select to authenticated using (status in ('publicado','encerrado'));
create policy cargos_leitura on public.concurso_cargos for select to authenticated using (ativo);
create policy editais_leitura on public.editais_concurso for select to authenticated using (status in ('publicado','retificado','encerrado'));
create policy edital_topicos_leitura on public.edital_topicos for select to authenticated using (exists(select 1 from public.editais_concurso e where e.id=edital_id and e.status in ('publicado','retificado','encerrado')));
create policy alvo_proprio_select on public.usuario_concurso_alvo for select to authenticated using (auth.uid()=usuario_id);
create policy alvo_proprio_insert on public.usuario_concurso_alvo for insert to authenticated with check (auth.uid()=usuario_id and exists(select 1 from public.concurso_cargos c where c.id=cargo_id and c.concurso_id=concurso_id) and (edital_id is null or exists(select 1 from public.editais_concurso e where e.id=edital_id and e.concurso_id=concurso_id and e.cargo_id=cargo_id)));
create policy alvo_proprio_update on public.usuario_concurso_alvo for update to authenticated using (auth.uid()=usuario_id) with check (auth.uid()=usuario_id and exists(select 1 from public.concurso_cargos c where c.id=cargo_id and c.concurso_id=concurso_id) and (edital_id is null or exists(select 1 from public.editais_concurso e where e.id=edital_id and e.concurso_id=concurso_id and e.cargo_id=cargo_id)));
create policy alvo_proprio_delete on public.usuario_concurso_alvo for delete to authenticated using (auth.uid()=usuario_id);
create index if not exists idx_concurso_cargos_concurso on public.concurso_cargos(concurso_id);
create index if not exists idx_editais_concurso_cargo on public.editais_concurso(concurso_id,cargo_id);
create index if not exists idx_edital_topicos_edital on public.edital_topicos(edital_id,ordem);
