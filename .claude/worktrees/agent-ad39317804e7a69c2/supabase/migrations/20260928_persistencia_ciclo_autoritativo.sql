-- Persistência autoritativa do ciclo adaptativo.
-- Aplicar somente após revisão; nenhuma alteração destrutiva.
alter table public.mentoria_planos
  add column if not exists ciclo_posicao_atual integer not null default 0,
  add column if not exists ciclo_concluidos_contagem integer not null default 0,
  add column if not exists prioridades_disciplinas jsonb not null default '[]'::jsonb,
  add column if not exists estrutura_ciclo jsonb not null default '[]'::jsonb;

comment on column public.mentoria_planos.ciclo_posicao_atual is 'Índice zero-based do único bloco atual do ciclo';
comment on column public.mentoria_planos.estrutura_ciclo is 'Snapshot do ciclo com disciplina, assunto, tipo e prioridade';

-- RLS já está habilitada; reforça ownership caso o ambiente seja recriado.
alter table public.mentoria_planos enable row level security;
