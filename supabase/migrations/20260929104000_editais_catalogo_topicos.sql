CREATE TABLE IF NOT EXISTS public.editais_catalogo_topicos (
  edital_id UUID NOT NULL REFERENCES public.editais_catalogo(id) ON DELETE CASCADE,
  disciplina_id UUID NOT NULL REFERENCES public.disciplinas(id) ON DELETE RESTRICT,
  assunto_id UUID NOT NULL REFERENCES public.assuntos(id) ON DELETE RESTRICT,
  subassunto_id UUID REFERENCES public.subassuntos(id) ON DELETE SET NULL,
  ordem INT NOT NULL DEFAULT 0,
  PRIMARY KEY (edital_id, disciplina_id, assunto_id)
);
CREATE INDEX IF NOT EXISTS idx_editais_catalogo_topicos_edital ON public.editais_catalogo_topicos(edital_id, ordem);
ALTER TABLE public.editais_catalogo_topicos ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "editais_catalogo_topicos_read" ON public.editais_catalogo_topicos;
CREATE POLICY "editais_catalogo_topicos_read" ON public.editais_catalogo_topicos FOR SELECT TO authenticated USING (true);
