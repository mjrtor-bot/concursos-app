-- 1. Migração de metadados legados armazenados em erro_processamento para as colunas dedicadas
UPDATE public.editais_usuario
SET openai_response_id = (erro_processamento::jsonb)->>'response_id',
    openai_file_id = (erro_processamento::jsonb)->>'file_id',
    provider_status = COALESCE((erro_processamento::jsonb)->>'provider_status', (erro_processamento::jsonb)->>'status', 'queued'),
    erro_processamento = NULL
WHERE status = 'processando'
  AND erro_processamento IS NOT NULL
  AND erro_processamento LIKE '{%'
  AND (erro_processamento::jsonb ? 'response_id');

-- 2. Limpeza de uploads em processamento órfãos (sem ID da OpenAI)
UPDATE public.editais_usuario
SET status = 'erro',
    erro_processamento = 'Processamento interrompido sem identificador da OpenAI. Envie o PDF novamente.',
    updated_at = now()
WHERE status = 'processando'
  AND openai_response_id IS NULL;

-- 3. Limpeza de uploads aguardando processamento que expiraram (> 30 minutos)
UPDATE public.editais_usuario
SET status = 'erro',
    erro_processamento = 'O processamento não foi iniciado. Envie o PDF novamente.',
    updated_at = now()
WHERE status = 'aguardando_processamento'
  AND created_at < now() - interval '30 minutes';
