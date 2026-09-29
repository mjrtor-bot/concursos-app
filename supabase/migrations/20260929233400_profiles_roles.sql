create table if not exists public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 nome text not null default '',
 email text not null default '',
 role text not null default 'user' check (role in ('user','admin','editor')),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
insert into public.profiles(id,nome,email,role,created_at,updated_at)
select u.id,coalesce(u.raw_user_meta_data->>'nome',u.raw_user_meta_data->>'full_name',''),coalesce(u.email,''),
case when coalesce(u.raw_app_meta_data->>'role','user') in ('user','admin','editor') then coalesce(u.raw_app_meta_data->>'role','user') else 'user' end,
coalesce(u.created_at,now()),now()
from auth.users u on conflict(id) do update set nome=excluded.nome,email=excluded.email,role=excluded.role,updated_at=now();

create or replace function public.handle_auth_user_profile() returns trigger language plpgsql security definer set search_path=public as $$
begin
 insert into public.profiles(id,nome,email,role,created_at,updated_at)
 values(new.id,coalesce(new.raw_user_meta_data->>'nome',new.raw_user_meta_data->>'full_name',''),coalesce(new.email,''),
 case when coalesce(new.raw_app_meta_data->>'role','user') in ('user','admin','editor') then coalesce(new.raw_app_meta_data->>'role','user') else 'user' end,
 coalesce(new.created_at,now()),now())
 on conflict(id) do update set nome=excluded.nome,email=excluded.email,role=excluded.role,updated_at=now();
 return new;
end $$;
drop trigger if exists on_auth_user_profile_sync on auth.users;
create trigger on_auth_user_profile_sync after insert or update of email,raw_user_meta_data,raw_app_meta_data on auth.users for each row execute function public.handle_auth_user_profile();

create policy "profiles leitura autenticada" on public.profiles for select to authenticated using(true);
create policy "profiles atualizacao admin" on public.profiles for update to authenticated
using(exists(select 1 from public.profiles me where me.id=auth.uid() and me.role in('admin','editor')))
with check(role in('user','admin','editor'));
