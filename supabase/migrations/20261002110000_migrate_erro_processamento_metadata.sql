-- Migração de metadados legados armazenados em erro_processamento para as colunas dedicadas
UPDATE public.editais_usuario
SET openai_response_id = (erro_processamento::jsonb)->>'response_id',
    openai_file_id = (erro_processamento::jsonb)->>'file_id',
    provider_status = COALESCE((erro_processamento::jsonb)->>'provider_status', (erro_processamento::jsonb)->>'status', 'queued'),
    erro_processamento = NULL
WHERE status = 'processando'
  AND erro_processamento IS NOT NULL
  AND erro_processamento LIKE '{%'
  AND (erro_processamento::jsonb ? 'response_id');
