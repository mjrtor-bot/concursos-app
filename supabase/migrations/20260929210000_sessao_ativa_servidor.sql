-- Persistência server-side da sessão ativa da Missão Diária
create table if not exists public.mentoria_sessoes_ativas (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid not null references auth.users(id) on delete cascade,
  plano_id uuid,
  tarefa_id text not null,
  cronometro_iniciado boolean not null default false,
  cronometro_ativo boolean not null default false,
  segundos_liquidos integer not null default 0 check (segundos_liquidos >= 0),
  pausas_contador integer not null default 0 check (pausas_contador >= 0),
  segundos_pausa_total integer not null default 0 check (segundos_pausa_total >= 0),
  tempo_inicio_sessao timestamptz,
  questoes_respondidas integer not null default 0,
  questoes_acertadas integer not null default 0,
  observacoes text not null default '',
  anotacoes text not null default '',
  updated_at timestamptz not null default now(),
  unique(usuario_id, tarefa_id)
);
alter table public.mentoria_sessoes_ativas enable row level security;
drop policy if exists "sessao_ativa_select_own" on public.mentoria_sessoes_ativas;
create policy "sessao_ativa_select_own" on public.mentoria_sessoes_ativas for select using (auth.uid() = usuario_id);
drop policy if exists "sessao_ativa_insert_own" on public.mentoria_sessoes_ativas;
create policy "sessao_ativa_insert_own" on public.mentoria_sessoes_ativas for insert with check (auth.uid() = usuario_id);
drop policy if exists "sessao_ativa_update_own" on public.mentoria_sessoes_ativas;
create policy "sessao_ativa_update_own" on public.mentoria_sessoes_ativas for update using (auth.uid() = usuario_id) with check (auth.uid() = usuario_id);
drop policy if exists "sessao_ativa_delete_own" on public.mentoria_sessoes_ativas;
create policy "sessao_ativa_delete_own" on public.mentoria_sessoes_ativas for delete using (auth.uid() = usuario_id);
create index if not exists idx_mentoria_sessoes_ativas_usuario on public.mentoria_sessoes_ativas(usuario_id, updated_at desc);
