-- Migration: Suporte a PDFs de materiais de estudo por assunto
-- Bucket privado "materiais-assuntos" e colunas em assunto_conteudos

-- 1. Bucket privado em storage.buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('materiais-assuntos', 'materiais-assuntos', false, 52428800, ARRAY['application/pdf'])
ON CONFLICT (id) DO UPDATE SET
  public = false,
  file_size_limit = 52428800,
  allowed_mime_types = ARRAY['application/pdf'];

-- 2. Policies em storage.objects
DROP POLICY IF EXISTS "materiais_assuntos_select_auth" ON storage.objects;
DROP POLICY IF EXISTS "materiais_assuntos_insert_admin" ON storage.objects;
DROP POLICY IF EXISTS "materiais_assuntos_update_admin" ON storage.objects;
DROP POLICY IF EXISTS "materiais_assuntos_delete_admin" ON storage.objects;

-- SELECT para usuários autenticados
CREATE POLICY "materiais_assuntos_select_auth" ON storage.objects
FOR SELECT TO authenticated
USING (bucket_id = 'materiais-assuntos');

-- INSERT para admin (profiles.role='admin')
CREATE POLICY "materiais_assuntos_insert_admin" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'materiais-assuntos'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = (select auth.uid())
      AND p.role = 'admin'
  )
);

-- UPDATE para admin (profiles.role='admin')
CREATE POLICY "materiais_assuntos_update_admin" ON storage.objects
FOR UPDATE TO authenticated
USING (
  bucket_id = 'materiais-assuntos'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = (select auth.uid())
      AND p.role = 'admin'
  )
)
WITH CHECK (
  bucket_id = 'materiais-assuntos'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = (select auth.uid())
      AND p.role = 'admin'
  )
);

-- DELETE para admin (profiles.role='admin')
CREATE POLICY "materiais_assuntos_delete_admin" ON storage.objects
FOR DELETE TO authenticated
USING (
  bucket_id = 'materiais-assuntos'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = (select auth.uid())
      AND p.role = 'admin'
  )
);

-- 3. Adicionar colunas em public.assunto_conteudos sem DROP
ALTER TABLE public.assunto_conteudos
ADD COLUMN IF NOT EXISTS pdf_path text,
ADD COLUMN IF NOT EXISTS pdf_nome text,
ADD COLUMN IF NOT EXISTS pdf_tamanho bigint;

COMMENT ON COLUMN public.assunto_conteudos.pdf_path IS 'Caminho do arquivo no bucket privado materiais-assuntos';
COMMENT ON COLUMN public.assunto_conteudos.pdf_nome IS 'Nome original do arquivo PDF anexado';
COMMENT ON COLUMN public.assunto_conteudos.pdf_tamanho IS 'Tamanho em bytes do arquivo PDF anexado';
