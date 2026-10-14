CREATE TABLE IF NOT EXISTS mentoria_recovery.usuario_edital_alvo (
 usuario_id uuid PRIMARY KEY REFERENCES mentoria_auth.users(id) ON DELETE CASCADE,
 edital_usuario_id uuid NOT NULL REFERENCES mentoria_recovery.editais_usuario(id),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_contabo_usuario_edital_alvo_edital ON mentoria_recovery.usuario_edital_alvo(edital_usuario_id);
