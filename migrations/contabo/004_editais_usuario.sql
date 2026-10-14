CREATE TABLE IF NOT EXISTS mentoria_recovery.editais_usuario (
 id uuid PRIMARY KEY, usuario_id uuid NOT NULL REFERENCES mentoria_auth.users(id),
 origem_usuario_id uuid, nome varchar, orgao_nome varchar, cargo varchar, uf varchar,
 arquivo_path text, arquivo_nome text, arquivo_tamanho bigint, mime_type varchar,
 status varchar, erro_processamento text, estrutura_extraida jsonb, confirmado_em timestamptz,
 created_at timestamptz, updated_at timestamptz, edital_id uuid,
 processamento_iniciado_em timestamptz, openai_response_id text, openai_file_id text, provider_status text
);
CREATE INDEX IF NOT EXISTS idx_contabo_editais_usuario ON mentoria_recovery.editais_usuario(usuario_id,created_at DESC);
