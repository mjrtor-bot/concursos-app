-- Adicionar colunas de tracking para processamento da OpenAI de forma idempotente
ALTER TABLE public.editais_usuario
  ADD COLUMN IF NOT EXISTS openai_response_id text,
  ADD COLUMN IF NOT EXISTS openai_file_id text,
  ADD COLUMN IF NOT EXISTS provider_status text,
  ADD COLUMN IF NOT EXISTS processamento_iniciado_em timestamptz;

-- Permitir estado revisao_sem_conteudo no CHECK constraint
DO $$
BEGIN
  ALTER TABLE public.editais_usuario DROP CONSTRAINT IF EXISTS editais_usuario_status_check;
  ALTER TABLE public.editais_usuario ADD CONSTRAINT editais_usuario_status_check CHECK (
    status IN ('aguardando_processamento', 'processando', 'aguardando_revisao', 'confirmado', 'erro', 'revisao_sem_conteudo')
  );
EXCEPTION
  WHEN others THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_editais_usuario_openai_response_id
  ON public.editais_usuario(openai_response_id);

CREATE INDEX IF NOT EXISTS idx_editais_usuario_processamento_iniciado_em
  ON public.editais_usuario(processamento_iniciado_em);
