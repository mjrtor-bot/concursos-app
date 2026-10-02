-- Corrige rebaixamento indevido de role ao atualizar metadados do usuário,
-- restringe leitura de profiles, protege a coluna role e corrige FKs usadas pela UI.

-- 1) Sincronização auth.users -> profiles NÃO sobrescreve role em updates.
create or replace function public.handle_auth_user_profile() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, nome, email, role, meta_diaria_questoes, created_at, updated_at)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nome', new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.email, ''),
    case when coalesce(new.raw_app_meta_data->>'role','user') in ('user','admin','editor')
         then coalesce(new.raw_app_meta_data->>'role','user') else 'user' end,
    coalesce(nullif(new.raw_user_meta_data->>'meta_diaria_questoes','')::int, 30),
    coalesce(new.created_at, now()), now()
  )
  on conflict (id) do update set
    nome = coalesce(nullif(excluded.nome, ''), public.profiles.nome),
    email = excluded.email,
    meta_diaria_questoes = coalesce(nullif(new.raw_user_meta_data->>'meta_diaria_questoes','')::int, public.profiles.meta_diaria_questoes),
    updated_at = now();
  return new;
end $$;

-- 2) Funções auxiliares (security definer evita recursão de RLS).
create or replace function public.is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role in ('admin','editor'));
$$;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- Nomes públicos para ranking (sem e-mail/role).
create or replace function public.perfis_nomes(ids uuid[]) returns table(id uuid, nome text)
language sql stable security definer set search_path = public as $$
  select p.id, p.nome from public.profiles p where p.id = any(ids);
$$;
revoke all on function public.perfis_nomes(uuid[]) from public;
grant execute on function public.perfis_nomes(uuid[]) to authenticated;

-- 3) Proteção da coluna role.
create or replace function public.proteger_role_profile() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.role is distinct from old.role then
    -- Contexto sem usuário (service role / triggers internos) é permitido.
    if auth.uid() is not null and not public.is_admin() then
      raise exception 'Somente administradores podem alterar o perfil de acesso.' using errcode = '42501';
    end if;
    if old.role = 'admin' and (select count(*) from public.profiles where role = 'admin' and id <> old.id) = 0 then
      raise exception 'Não é permitido remover o último administrador.' using errcode = '42501';
    end if;
  end if;
  if new.id is distinct from old.id then
    raise exception 'id imutável' using errcode = '42501';
  end if;
  return new;
end $$;
drop trigger if exists trg_proteger_role_profile on public.profiles;
create trigger trg_proteger_role_profile before update on public.profiles
for each row execute function public.proteger_role_profile();

-- 4) Policies de profiles.
drop policy if exists "profiles leitura autenticada" on public.profiles;
drop policy if exists "profiles atualizacao admin" on public.profiles;
drop policy if exists "profiles leitura propria ou equipe" on public.profiles;
drop policy if exists "profiles atualizacao propria" on public.profiles;
drop policy if exists "profiles atualizacao equipe" on public.profiles;

create policy "profiles leitura propria ou equipe" on public.profiles for select to authenticated
using (id = auth.uid() or public.is_staff() or role in ('admin','editor'));

create policy "profiles atualizacao propria" on public.profiles for update to authenticated
using (id = auth.uid()) with check (id = auth.uid());

create policy "profiles atualizacao equipe" on public.profiles for update to authenticated
using (public.is_admin()) with check (role in ('user','admin','editor'));

-- 5) FK para permitir embed profiles -> usuario_concurso_alvo (Admin > Usuários).
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'usuario_concurso_alvo_profile_fkey') then
    alter table public.usuario_concurso_alvo
      add constraint usuario_concurso_alvo_profile_fkey foreign key (usuario_id) references public.profiles(id) on delete cascade;
  end if;
end $$;

-- 6) mentoria_perfis apontava concurso_id para provas e cargo_id para cargos_base;
--    a UI envia ids de concursos/concurso_cargos, o upsert falhava e o app caía no cache local.
update public.mentoria_perfis set concurso_id = null where concurso_id is not null and concurso_id not in (select id from public.concursos);
update public.mentoria_perfis set cargo_id = null where cargo_id is not null and cargo_id not in (select id from public.concurso_cargos);
alter table public.mentoria_perfis drop constraint if exists mentoria_perfis_concurso_id_fkey;
alter table public.mentoria_perfis drop constraint if exists mentoria_perfis_cargo_id_fkey;
alter table public.mentoria_perfis add constraint mentoria_perfis_concurso_id_fkey foreign key (concurso_id) references public.concursos(id) on delete set null;
alter table public.mentoria_perfis add constraint mentoria_perfis_cargo_id_fkey foreign key (cargo_id) references public.concurso_cargos(id) on delete set null;
