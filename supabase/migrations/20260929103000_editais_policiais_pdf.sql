-- Biblioteca de editais policiais e uploads privados de PDF
CREATE TABLE IF NOT EXISTS public.editais_catalogo (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prova_id UUID REFERENCES public.provas(id) ON DELETE SET NULL,
  orgao_nome VARCHAR(200) NOT NULL,
  sigla VARCHAR(50),
  uf VARCHAR(2),
  esfera VARCHAR(20) NOT NULL CHECK (esfera IN ('federal','estadual','municipal')),
  carreira VARCHAR(40) NOT NULL CHECK (carreira IN ('PF','PRF','POLICIA_CIVIL','POLICIA_MILITAR','BOMBEIROS','POLICIA_PENAL','GUARDA_MUNICIPAL','OUTRA')),
  cargo VARCHAR(200) NOT NULL,
  banca VARCHAR(150),
  edital_numero VARCHAR(80),
  data_publicacao DATE NOT NULL,
  data_prova DATE,
  status VARCHAR(30) NOT NULL CHECK (status IN ('aberto','previsto','prova_realizada','encerrado','expirado')),
  fonte_url TEXT NOT NULL,
  pdf_url TEXT,
  total_disciplinas INT NOT NULL DEFAULT 0,
  total_topicos INT NOT NULL DEFAULT 0,
  ativo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_editais_catalogo_publicacao ON public.editais_catalogo(data_publicacao DESC);
CREATE INDEX IF NOT EXISTS idx_editais_catalogo_carreira_uf ON public.editais_catalogo(carreira, uf);
ALTER TABLE public.editais_catalogo ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "editais_catalogo_read" ON public.editais_catalogo;
CREATE POLICY "editais_catalogo_read" ON public.editais_catalogo FOR SELECT TO authenticated USING (ativo = true);

CREATE TABLE IF NOT EXISTS public.editais_usuario (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  nome VARCHAR(250) NOT NULL,
  orgao_nome VARCHAR(200),
  cargo VARCHAR(200),
  uf VARCHAR(2),
  arquivo_path TEXT NOT NULL,
  arquivo_nome TEXT NOT NULL,
  arquivo_tamanho BIGINT NOT NULL CHECK (arquivo_tamanho > 0 AND arquivo_tamanho <= 20971520),
  mime_type VARCHAR(100) NOT NULL CHECK (mime_type = 'application/pdf'),
  status VARCHAR(30) NOT NULL DEFAULT 'aguardando_processamento'
    CHECK (status IN ('aguardando_processamento','processando','aguardando_revisao','confirmado','erro')),
  erro_processamento TEXT,
  estrutura_extraida JSONB,
  confirmado_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_editais_usuario_owner ON public.editais_usuario(usuario_id, created_at DESC);
ALTER TABLE public.editais_usuario ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "editais_usuario_select_own" ON public.editais_usuario;
DROP POLICY IF EXISTS "editais_usuario_insert_own" ON public.editais_usuario;
DROP POLICY IF EXISTS "editais_usuario_update_own" ON public.editais_usuario;
DROP POLICY IF EXISTS "editais_usuario_delete_own" ON public.editais_usuario;
CREATE POLICY "editais_usuario_select_own" ON public.editais_usuario FOR SELECT TO authenticated USING ((select auth.uid()) = usuario_id);
CREATE POLICY "editais_usuario_insert_own" ON public.editais_usuario FOR INSERT TO authenticated WITH CHECK ((select auth.uid()) = usuario_id);
CREATE POLICY "editais_usuario_update_own" ON public.editais_usuario FOR UPDATE TO authenticated USING ((select auth.uid()) = usuario_id) WITH CHECK ((select auth.uid()) = usuario_id);
CREATE POLICY "editais_usuario_delete_own" ON public.editais_usuario FOR DELETE TO authenticated USING ((select auth.uid()) = usuario_id);

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('editais-usuario','editais-usuario',false,20971520,ARRAY['application/pdf'])
ON CONFLICT (id) DO UPDATE SET public=false, file_size_limit=20971520, allowed_mime_types=ARRAY['application/pdf'];

DROP POLICY IF EXISTS "editais_pdf_select_own" ON storage.objects;
DROP POLICY IF EXISTS "editais_pdf_insert_own" ON storage.objects;
DROP POLICY IF EXISTS "editais_pdf_delete_own" ON storage.objects;
CREATE POLICY "editais_pdf_select_own" ON storage.objects FOR SELECT TO authenticated
USING (bucket_id='editais-usuario' AND (storage.foldername(name))[1]=(select auth.uid())::text);
CREATE POLICY "editais_pdf_insert_own" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id='editais-usuario' AND (storage.foldername(name))[1]=(select auth.uid())::text);
CREATE POLICY "editais_pdf_delete_own" ON storage.objects FOR DELETE TO authenticated
USING (bucket_id='editais-usuario' AND (storage.foldername(name))[1]=(select auth.uid())::text);

COMMENT ON TABLE public.editais_catalogo IS 'Catálogo global de editais oficiais; popular somente com fonte oficial verificada.';
COMMENT ON TABLE public.editais_usuario IS 'PDFs privados enviados por usuários; nunca promovidos automaticamente à taxonomia global.';
