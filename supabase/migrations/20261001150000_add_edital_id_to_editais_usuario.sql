ALTER TABLE public.editais_usuario
  ADD COLUMN IF NOT EXISTS edital_id uuid;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'editais_usuario_edital_id_fkey'
  ) THEN
    ALTER TABLE public.editais_usuario
      ADD CONSTRAINT editais_usuario_edital_id_fkey
      FOREIGN KEY (edital_id)
      REFERENCES public.editais_concurso(id)
      ON DELETE SET NULL;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_editais_usuario_edital_id
  ON public.editais_usuario(edital_id);
