create table if not exists public.gamificacao_perfis (
 usuario_id uuid primary key references auth.users(id) on delete cascade,
 xp integer not null default 0, nivel integer not null default 1,
 updated_at timestamptz not null default now()
);
create table if not exists public.gamificacao_eventos (
 id uuid primary key default gen_random_uuid(), usuario_id uuid not null references auth.users(id) on delete cascade,
 tipo text not null, xp integer not null default 0, referencia_id text, created_at timestamptz not null default now(),
 unique(usuario_id,tipo,referencia_id)
);
alter table public.gamificacao_perfis enable row level security;
alter table public.gamificacao_eventos enable row level security;
create policy "perfil gamificacao leitura" on public.gamificacao_perfis for select to authenticated using (true);
create policy "perfil gamificacao proprio" on public.gamificacao_perfis for all to authenticated using (usuario_id=auth.uid()) with check (usuario_id=auth.uid());
create policy "eventos gamificacao leitura propria" on public.gamificacao_eventos for select to authenticated using (usuario_id=auth.uid());
create policy "eventos gamificacao proprio" on public.gamificacao_eventos for insert to authenticated with check (usuario_id=auth.uid());

create or replace function public.registrar_xp(p_tipo text,p_xp integer,p_referencia_id text default null)
returns table(xp_total integer,nivel_atual integer) language plpgsql security definer set search_path=public as $$
declare uid uuid:=auth.uid(); total integer; niv integer;
begin
 if uid is null then raise exception 'not authenticated'; end if;
 insert into gamificacao_eventos(usuario_id,tipo,xp,referencia_id) values(uid,p_tipo,greatest(0,p_xp),p_referencia_id)
 on conflict(usuario_id,tipo,referencia_id) do nothing;
 select coalesce(sum(xp),0) into total from gamificacao_eventos where usuario_id=uid;
 niv:=greatest(1,floor(sqrt(total::numeric/100))::integer+1);
 insert into gamificacao_perfis(usuario_id,xp,nivel,updated_at) values(uid,total,niv,now())
 on conflict(usuario_id) do update set xp=excluded.xp,nivel=excluded.nivel,updated_at=now();
 return query select total,niv;
end $$;
