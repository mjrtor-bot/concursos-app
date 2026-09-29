-- Endurecimento da operação: view respeita RLS e policies impedem destinatários arbitrários.
drop view if exists public.gamificacao_conquistas;
create view public.gamificacao_conquistas with (security_invoker=true) as
select usuario_id,
 jsonb_build_array(
 jsonb_build_object('nome','Primeiros passos','descricao','Alcance 100 XP','conquistada',xp>=100),
 jsonb_build_object('nome','Ritmo forte','descricao','Alcance 500 XP','conquistada',xp>=500),
 jsonb_build_object('nome','Milhar','descricao','Alcance 1.000 XP','conquistada',xp>=1000),
 jsonb_build_object('nome','Alta performance','descricao','Alcance 2.500 XP','conquistada',xp>=2500)
 ) conquistas from public.gamificacao_perfis;

drop policy if exists "mensagens envio" on public.mentoria_mensagens;
create policy "mensagens envio validado" on public.mentoria_mensagens for insert to authenticated
with check (
 remetente_id=auth.uid() and (
  exists(select 1 from profiles me, profiles dest where me.id=auth.uid() and dest.id=destinatario_id and me.role='user' and dest.role in('admin','editor'))
  or exists(select 1 from profiles me, profiles dest where me.id=auth.uid() and dest.id=destinatario_id and me.role in('admin','editor') and dest.role='user')
 )
);
