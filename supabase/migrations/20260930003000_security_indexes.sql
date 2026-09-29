revoke all on function public.handle_auth_user_profile() from public, anon, authenticated;
revoke all on function public.registrar_xp(text,integer,text) from public, anon;
grant execute on function public.registrar_xp(text,integer,text) to authenticated;

create index if not exists idx_questoes_externas_usuario on public.questoes_externas(usuario_id);
create index if not exists idx_mentoria_mural_autor on public.mentoria_mural(autor_id);
create index if not exists idx_mentoria_mensagens_remetente on public.mentoria_mensagens(remetente_id);
create index if not exists idx_mentoria_mensagens_destinatario on public.mentoria_mensagens(destinatario_id);
create index if not exists idx_usuario_concurso_alvo_concurso on public.usuario_concurso_alvo(concurso_id);
create index if not exists idx_usuario_concurso_alvo_cargo on public.usuario_concurso_alvo(cargo_id);
create index if not exists idx_usuario_concurso_alvo_edital on public.usuario_concurso_alvo(edital_id);
create index if not exists idx_editais_concurso_cargo_fk on public.editais_concurso(cargo_id);
create index if not exists idx_edital_topicos_disciplina_fk on public.edital_topicos(disciplina_id);
create index if not exists idx_edital_topicos_assunto_fk on public.edital_topicos(assunto_id);
