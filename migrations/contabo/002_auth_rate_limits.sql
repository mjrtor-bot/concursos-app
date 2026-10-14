BEGIN;
CREATE TABLE IF NOT EXISTS mentoria_auth.rate_limits (
  key text PRIMARY KEY,
  attempts integer NOT NULL DEFAULT 0,
  window_start timestamptz NOT NULL DEFAULT now()
);
COMMIT;