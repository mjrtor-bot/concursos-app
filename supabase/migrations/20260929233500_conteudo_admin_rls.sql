-- Permite gestão dos conteúdos somente a administradores/editores autenticados.
drop policy if exists "conteudos escrita admin" on public.assunto_conteudos;
create policy "conteudos escrita admin" on public.assunto_conteudos
for all to authenticated
using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','editor')))
with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','editor')));
