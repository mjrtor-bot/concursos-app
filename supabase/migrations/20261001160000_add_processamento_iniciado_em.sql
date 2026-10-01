ALTER TABLE public.editais_usuario
  ADD COLUMN IF NOT EXISTS processamento_iniciado_em timestamptz;

CREATE INDEX IF NOT EXISTS idx_editais_usuario_processamento_iniciado_em
  ON public.editais_usuario(processamento_iniciado_em);
