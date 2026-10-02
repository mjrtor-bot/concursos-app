-- Contagem de questões publicáveis por disciplina (usada para esconder disciplinas vazias nos filtros).
create or replace function public.disciplinas_contagem_questoes()
returns table(disciplina_id uuid, total bigint)
language sql stable security invoker set search_path = public as $$
  select q.disciplina_id, count(*)::bigint
  from public.questoes q
  where q.disciplina_id is not null
    and coalesce(q.anulada, false) = false
    and coalesce(q.auditoria_status, '') <> 'irrecuperavel'
  group by q.disciplina_id;
$$;
grant execute on function public.disciplinas_contagem_questoes() to authenticated, anon;
