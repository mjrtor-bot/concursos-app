alter table public.mentoria_planos
  add column if not exists edital_id uuid references public.editais_concurso(id) on delete set null;

create index if not exists idx_mentoria_planos_edital
  on public.mentoria_planos(usuario_id, edital_id, status);

comment on column public.mentoria_planos.edital_id is
  'Edital oficial que originou o ciclo. Planos legados sem edital_id permanecem no histórico, mas não devem alimentar o plano ativo.';
