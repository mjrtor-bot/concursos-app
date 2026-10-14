-- Estrutura preparatoria de autenticacao na Contabo.
-- Nao cria usuarios, senhas ou sessoes e nao modifica Supabase.
BEGIN;
CREATE SCHEMA IF NOT EXISTS mentoria_auth;
CREATE TABLE IF NOT EXISTS mentoria_auth.users (
  id uuid PRIMARY KEY,
  email text NOT NULL,
  display_name text,
  password_hash text,
  password_algorithm text,
  email_verified_at timestamptz,
  disabled_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT users_email_nonempty CHECK (length(trim(email)) > 3),
  CONSTRAINT users_password_pair CHECK ((password_hash IS NULL) = (password_algorithm IS NULL))
);
CREATE UNIQUE INDEX IF NOT EXISTS mentoria_auth_users_email_ci ON mentoria_auth.users (lower(email));
CREATE TABLE IF NOT EXISTS mentoria_auth.sessions (
  id uuid PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES mentoria_auth.users(id) ON DELETE CASCADE,
  token_hash text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  CONSTRAINT session_expiry CHECK (expires_at > created_at)
);
CREATE INDEX IF NOT EXISTS mentoria_auth_sessions_user_idx ON mentoria_auth.sessions(user_id);
CREATE TABLE IF NOT EXISTS mentoria_auth.user_roles (
  user_id uuid NOT NULL REFERENCES mentoria_auth.users(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('user','editor','admin')),
  PRIMARY KEY (user_id, role)
);
COMMIT;