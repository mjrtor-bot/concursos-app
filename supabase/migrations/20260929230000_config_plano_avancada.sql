-- Preferências avançadas do plano de estudos
create table if not exists public.mentoria_config_plano (
  usuario_id uuid primary key references auth.users(id) on delete cascade,
  materias_simultaneas integer not null default 3 check (materias_simultaneas between 1 and 20),
  velocidade text not null default 'normal' check (velocidade in ('leve','normal','intensiva')),
  etapas text[] not null default array['estudo','resumo','revisao','exercicio'],
  disciplinas_ativas uuid[] not null default '{}',
  assuntos_ativos uuid[] not null default '{}',
  data_final date,
  pausado boolean not null default false,
  updated_at timestamptz not null default now()
);
alter table public.mentoria_config_plano enable row level security;
drop policy if exists "config_plano_select_own" on public.mentoria_config_plano;
create policy "config_plano_select_own" on public.mentoria_config_plano for select using (auth.uid()=usuario_id);
drop policy if exists "config_plano_insert_own" on public.mentoria_config_plano;
create policy "config_plano_insert_own" on public.mentoria_config_plano for insert with check (auth.uid()=usuario_id);
drop policy if exists "config_plano_update_own" on public.mentoria_config_plano;
create policy "config_plano_update_own" on public.mentoria_config_plano for update using (auth.uid()=usuario_id) with check (auth.uid()=usuario_id);
