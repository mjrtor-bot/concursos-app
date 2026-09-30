-- Auditoria de segurança 2026-09-29
-- Fecha bypass direto do cliente, preservando leitura de questões válidas.
drop policy if exists "Leitura pública de questoes" on public.questoes;
create policy "Leitura autenticada de questoes validas"
on public.questoes for select to authenticated
using (
  auditoria_status is distinct from 'irrecuperavel'
  and coalesce(anulada,false)=false
  and coalesce(desatualizada,false)=false
);

-- Alternativas continuam legíveis pelo aluno autenticado apenas quando a questão-pai é válida.
-- IMPORTANTE: o campo correta ainda existe na tabela; a aplicação deve evoluir para RPC/endpoint
-- de correção server-side antes de ocultá-lo por coluna sem quebrar o fluxo atual.
drop policy if exists "Leitura pública de alternativas" on public.questoes_alternativas;
create policy "Leitura autenticada alternativas questoes validas"
on public.questoes_alternativas for select to authenticated
using (
  exists (
    select 1 from public.questoes q
    where q.id = questoes_alternativas.questao_id
      and q.auditoria_status is distinct from 'irrecuperavel'
      and coalesce(q.anulada,false)=false
      and coalesce(q.desatualizada,false)=false
  )
);

-- XP não pode ser inserido/alterado diretamente pelo cliente.
drop policy if exists "eventos gamificacao proprio" on public.gamificacao_eventos;
drop policy if exists "perfil gamificacao proprio" on public.gamificacao_perfis;

revoke insert, update, delete on public.gamificacao_eventos from authenticated;
revoke insert, update, delete on public.gamificacao_perfis from authenticated;
revoke execute on function public.registrar_xp(text,integer,text) from public, anon, authenticated;

-- Índice apontado pelo advisor.
create index if not exists idx_mentoria_planos_edital_id
  on public.mentoria_planos(edital_id);
