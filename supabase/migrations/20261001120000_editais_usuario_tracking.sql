-- Adicionar colunas de tracking para processamento da OpenAI
ALTER TABLE public.editais_usuario
ADD COLUMN openai_response_id TEXT,
ADD COLUMN openai_file_id TEXT,
ADD COLUMN provider_status TEXT,
ADD COLUMN processamento_iniciado_em TIMESTAMPTZ;

-- Permitir estado revisao_sem_conteudo no CHECK constraint
ALTER TABLE public.editais_usuario DROP CONSTRAINT IF EXISTS editais_usuario_status_check;
ALTER TABLE public.editais_usuario ADD CONSTRAINT editais_usuario_status_check CHECK (
    status IN ('aguardando_processamento', 'processando', 'aguardando_revisao', 'confirmado', 'erro', 'revisao_sem_conteudo')
);
