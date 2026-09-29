-- Metas datadas e replanejamento do ciclo
alter table public.mentoria_tarefas add column if not exists data_planejada date;
alter table public.mentoria_tarefas add column if not exists ordem_dia integer;
alter table public.mentoria_tarefas add column if not exists replanejada_em timestamptz;
create index if not exists idx_mentoria_tarefas_plano_data on public.mentoria_tarefas(plano_id, data_planejada, ordem_dia);

-- Distribui tarefas pendentes sem data a partir de hoje, preservando a ordem do ciclo.
with pendentes as (
  select id, plano_id,
         row_number() over(partition by plano_id order by ordem, created_at, id) - 1 as rn
  from public.mentoria_tarefas
  where status <> 'concluida' and data_planejada is null
)
update public.mentoria_tarefas t
set data_planejada = current_date + (p.rn / 3)::int,
    ordem_dia = (p.rn % 3)::int + 1
from pendentes p where p.id=t.id;
