create table if not exists public.questoes_externas (
 id uuid primary key default gen_random_uuid(), usuario_id uuid not null references auth.users(id) on delete cascade,
 disciplina_id text, assunto_id text, fonte text, quantidade integer not null check(quantidade>0),
 acertos integer not null default 0 check(acertos>=0), data date not null default current_date,
 observacao text, created_at timestamptz not null default now(), check(acertos<=quantidade)
);
alter table public.questoes_externas enable row level security;
create policy "questoes externas proprias" on public.questoes_externas for all to authenticated using(usuario_id=auth.uid()) with check(usuario_id=auth.uid());

create table if not exists public.mentoria_mural (
 id uuid primary key default gen_random_uuid(), autor_id uuid not null references auth.users(id) on delete cascade,
 titulo text not null, mensagem text not null, ativo boolean not null default true, created_at timestamptz not null default now()
);
alter table public.mentoria_mural enable row level security;
create policy "mural leitura autenticados" on public.mentoria_mural for select to authenticated using(ativo=true);
create policy "mural admin escrita" on public.mentoria_mural for all to authenticated
using(exists(select 1 from profiles p where p.id=auth.uid() and p.role in('admin','editor')))
with check(exists(select 1 from profiles p where p.id=auth.uid() and p.role in('admin','editor')));

create table if not exists public.mentoria_mensagens (
 id uuid primary key default gen_random_uuid(), remetente_id uuid not null references auth.users(id) on delete cascade,
 destinatario_id uuid not null references auth.users(id) on delete cascade, mensagem text not null,
 lida_em timestamptz, created_at timestamptz not null default now()
);
alter table public.mentoria_mensagens enable row level security;
create policy "mensagens participantes" on public.mentoria_mensagens for select to authenticated using(remetente_id=auth.uid() or destinatario_id=auth.uid());
create policy "mensagens envio" on public.mentoria_mensagens for insert to authenticated with check(remetente_id=auth.uid());
create policy "mensagens destinatario atualiza" on public.mentoria_mensagens for update to authenticated using(destinatario_id=auth.uid());

create or replace view public.gamificacao_conquistas as
select usuario_id,
 jsonb_build_array(
 jsonb_build_object('nome','Primeiros passos','descricao','Alcance 100 XP','conquistada',xp>=100),
 jsonb_build_object('nome','Ritmo forte','descricao','Alcance 500 XP','conquistada',xp>=500),
 jsonb_build_object('nome','Milhar','descricao','Alcance 1.000 XP','conquistada',xp>=1000),
 jsonb_build_object('nome','Alta performance','descricao','Alcance 2.500 XP','conquistada',xp>=2500)
 ) conquistas from public.gamificacao_perfis;
