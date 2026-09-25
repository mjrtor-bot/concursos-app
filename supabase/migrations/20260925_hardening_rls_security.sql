-- ==============================================================================
-- MIGRAÇÃO DE HARDENING DE ROW LEVEL SECURITY (RLS) — CONCURSOSAPP
-- Versão: 20260925_hardening_rls_security.sql
-- Projeto: xvpqcibdarcelvcwnglq (https://xvpqcibdarcelvcwnglq.supabase.co)
-- Data: 25/09/2026
--
-- OBJETIVO:
-- 1. Substituir policies genéricas ALL/public com (auth.uid() = usuario_id) por
--    policies explícitas, granulares e otimizadas com subquery ((select auth.uid()) = usuario_id)
--    restringidas ao papel 'authenticated' nas tabelas de dados privados do usuário:
--      - public.respostas_usuarios (SELECT, INSERT, UPDATE, DELETE)
--      - public.caderno_erros (SELECT, INSERT, UPDATE, DELETE)
--      - public.questoes_favoritas (SELECT, INSERT, UPDATE, DELETE)
--      - public.questoes_anotacoes (SELECT, INSERT, UPDATE, DELETE)
-- 2. Resolver a pendência do Security Advisor "RLS Enabled No Policy" na tabela
--    public.questoes_historico_alteracoes, restringindo leitura e gravação exclusivamente
--    a administradores autorizados via role no JWT metadata.
-- 3. Assegurar isolamento absoluto multi-tenant (Zero Cross-User Leakage) e
--    bloqueio integral ao papel anon/public para dados privados.
-- ==============================================================================

-- ── 1. TABELA: public.respostas_usuarios ──────────────────────────────────────
ALTER TABLE public.respostas_usuarios ENABLE ROW LEVEL SECURITY;

-- Remover policies legadas genéricas / duplicadas
DROP POLICY IF EXISTS "Acesso proprio a respostas" ON public.respostas_usuarios;
DROP POLICY IF EXISTS "respostas_usuarios_select_authenticated" ON public.respostas_usuarios;
DROP POLICY IF EXISTS "respostas_usuarios_insert_authenticated" ON public.respostas_usuarios;
DROP POLICY IF EXISTS "respostas_usuarios_update_authenticated" ON public.respostas_usuarios;
DROP POLICY IF EXISTS "respostas_usuarios_delete_authenticated" ON public.respostas_usuarios;

-- SELECT: Usuário autenticado visualiza somente suas próprias respostas
CREATE POLICY "respostas_usuarios_select_authenticated"
ON public.respostas_usuarios
FOR SELECT
TO authenticated
USING ((select auth.uid()) = usuario_id);

-- INSERT: Usuário autenticado grava apenas respostas associadas ao seu próprio UID
CREATE POLICY "respostas_usuarios_insert_authenticated"
ON public.respostas_usuarios
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

-- UPDATE: Usuário autenticado pode atualizar apenas suas próprias respostas
CREATE POLICY "respostas_usuarios_update_authenticated"
ON public.respostas_usuarios
FOR UPDATE
TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

-- DELETE: Usuário autenticado pode excluir apenas suas próprias respostas
CREATE POLICY "respostas_usuarios_delete_authenticated"
ON public.respostas_usuarios
FOR DELETE
TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 2. TABELA: public.caderno_erros ──────────────────────────────────────────
ALTER TABLE public.caderno_erros ENABLE ROW LEVEL SECURITY;

-- Remover policies legadas genéricas / duplicadas
DROP POLICY IF EXISTS "Acesso proprio a caderno erros" ON public.caderno_erros;
DROP POLICY IF EXISTS "caderno_erros_select_authenticated" ON public.caderno_erros;
DROP POLICY IF EXISTS "caderno_erros_insert_authenticated" ON public.caderno_erros;
DROP POLICY IF EXISTS "caderno_erros_update_authenticated" ON public.caderno_erros;
DROP POLICY IF EXISTS "caderno_erros_delete_authenticated" ON public.caderno_erros;

-- SELECT: Usuário autenticado acessa somente seu próprio caderno de erros
CREATE POLICY "caderno_erros_select_authenticated"
ON public.caderno_erros
FOR SELECT
TO authenticated
USING ((select auth.uid()) = usuario_id);

-- INSERT: Usuário autenticado insere itens apenas vinculados ao seu próprio UID
CREATE POLICY "caderno_erros_insert_authenticated"
ON public.caderno_erros
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

-- UPDATE: Usuário autenticado pode atualizar status/revisão dos seus próprios erros
CREATE POLICY "caderno_erros_update_authenticated"
ON public.caderno_erros
FOR UPDATE
TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

-- DELETE: Usuário autenticado pode remover itens do seu próprio caderno de erros
CREATE POLICY "caderno_erros_delete_authenticated"
ON public.caderno_erros
FOR DELETE
TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 3. TABELA: public.questoes_favoritas ──────────────────────────────────────
ALTER TABLE public.questoes_favoritas ENABLE ROW LEVEL SECURITY;

-- Remover policies legadas genéricas / duplicadas
DROP POLICY IF EXISTS "Acesso proprio a questoes favoritas" ON public.questoes_favoritas;
DROP POLICY IF EXISTS "questoes_favoritas_select_authenticated" ON public.questoes_favoritas;
DROP POLICY IF EXISTS "questoes_favoritas_insert_authenticated" ON public.questoes_favoritas;
DROP POLICY IF EXISTS "questoes_favoritas_update_authenticated" ON public.questoes_favoritas;
DROP POLICY IF EXISTS "questoes_favoritas_delete_authenticated" ON public.questoes_favoritas;

-- SELECT: Usuário autenticado consulta apenas suas questões favoritadas
CREATE POLICY "questoes_favoritas_select_authenticated"
ON public.questoes_favoritas
FOR SELECT
TO authenticated
USING ((select auth.uid()) = usuario_id);

-- INSERT: Usuário autenticado favorita questões apenas em seu próprio UID
CREATE POLICY "questoes_favoritas_insert_authenticated"
ON public.questoes_favoritas
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

-- UPDATE: Usuário autenticado atualiza apenas seus próprios favoritos
CREATE POLICY "questoes_favoritas_update_authenticated"
ON public.questoes_favoritas
FOR UPDATE
TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

-- DELETE: Usuário autenticado desfavorita questões do seu próprio UID
CREATE POLICY "questoes_favoritas_delete_authenticated"
ON public.questoes_favoritas
FOR DELETE
TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 4. TABELA: public.questoes_anotacoes ──────────────────────────────────────
ALTER TABLE public.questoes_anotacoes ENABLE ROW LEVEL SECURITY;

-- Remover policies legadas genéricas / duplicadas
DROP POLICY IF EXISTS "Acesso proprio a anotacoes" ON public.questoes_anotacoes;
DROP POLICY IF EXISTS "questoes_anotacoes_select_authenticated" ON public.questoes_anotacoes;
DROP POLICY IF EXISTS "questoes_anotacoes_insert_authenticated" ON public.questoes_anotacoes;
DROP POLICY IF EXISTS "questoes_anotacoes_update_authenticated" ON public.questoes_anotacoes;
DROP POLICY IF EXISTS "questoes_anotacoes_delete_authenticated" ON public.questoes_anotacoes;

-- SELECT: Usuário autenticado lê somente suas próprias anotações privadas
CREATE POLICY "questoes_anotacoes_select_authenticated"
ON public.questoes_anotacoes
FOR SELECT
TO authenticated
USING ((select auth.uid()) = usuario_id);

-- INSERT: Usuário autenticado cria anotações vinculadas ao seu UID
CREATE POLICY "questoes_anotacoes_insert_authenticated"
ON public.questoes_anotacoes
FOR INSERT
TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

-- UPDATE: Usuário autenticado edita apenas suas próprias anotações
CREATE POLICY "questoes_anotacoes_update_authenticated"
ON public.questoes_anotacoes
FOR UPDATE
TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

-- DELETE: Usuário autenticado exclui apenas suas próprias anotações
CREATE POLICY "questoes_anotacoes_delete_authenticated"
ON public.questoes_anotacoes
FOR DELETE
TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 5. TABELA: public.questoes_historico_alteracoes (AUDITORIA ADMIN) ─────────
-- Solução para o Security Advisor: RLS Enabled No Policy / Bloqueio a usuários comuns
ALTER TABLE public.questoes_historico_alteracoes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Leitura de historico por autenticados" ON public.questoes_historico_alteracoes;
DROP POLICY IF EXISTS "Insercao de historico por autor autenticado" ON public.questoes_historico_alteracoes;
DROP POLICY IF EXISTS "questoes_historico_alteracoes_select_admin" ON public.questoes_historico_alteracoes;
DROP POLICY IF EXISTS "questoes_historico_alteracoes_insert_admin" ON public.questoes_historico_alteracoes;

-- SELECT: Apenas administradores podem auditar o histórico de alterações
CREATE POLICY "questoes_historico_alteracoes_select_admin"
ON public.questoes_historico_alteracoes
FOR SELECT
TO authenticated
USING (
  coalesce((select auth.jwt() -> 'user_metadata' ->> 'role'), '') = 'admin' OR
  coalesce((select auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
);

-- INSERT: Apenas administradores autenticados podem registrar logs de alteração
CREATE POLICY "questoes_historico_alteracoes_insert_admin"
ON public.questoes_historico_alteracoes
FOR INSERT
TO authenticated
WITH CHECK (
  (select auth.uid()) = autor_alteracao_id AND (
    coalesce((select auth.jwt() -> 'user_metadata' ->> 'role'), '') = 'admin' OR
    coalesce((select auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
  )
);
