-- ==============================================================================
-- CONCURSOS-APP: MIGRATIONS CONSOLIDADAS PARA REVISÃO
-- Projeto Supabase: xvpqcibdarcelvcwnglq
-- Todas as operações são 100% idempotentes e seguras para execução em lote.
-- ==============================================================================

-- ==============================================================================
-- 1. Migration: 20260930160000_profiles_role_protecao_e_fks.sql
-- Descrição: Proteção da coluna role, sincronização segura auth.users -> profiles,
--            RLS de equipe/usuário e correção de FKs para integridade referencial.
-- ==============================================================================

-- 1) Sincronização auth.users -> profiles NÃO sobrescreve role em updates.
CREATE OR REPLACE FUNCTION public.handle_auth_user_profile() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles(id, nome, email, role, meta_diaria_questoes, created_at, updated_at)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'nome', new.raw_user_meta_data->>'full_name', ''),
    COALESCE(new.email, ''),
    CASE WHEN COALESCE(new.raw_app_meta_data->>'role','user') IN ('user','admin','editor')
         THEN COALESCE(new.raw_app_meta_data->>'role','user') ELSE 'user' END,
    COALESCE(nullif(new.raw_user_meta_data->>'meta_diaria_questoes','')::int, 30),
    COALESCE(new.created_at, now()), now()
  )
  ON CONFLICT (id) DO UPDATE SET
    nome = COALESCE(nullif(excluded.nome, ''), public.profiles.nome),
    email = excluded.email,
    meta_diaria_questoes = COALESCE(nullif(new.raw_user_meta_data->>'meta_diaria_questoes','')::int, public.profiles.meta_diaria_questoes),
    updated_at = now();
  RETURN new;
END $$;

-- 2) Funções auxiliares (security definer evita recursão de RLS).
CREATE OR REPLACE FUNCTION public.is_staff() RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS(SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin','editor'));
$$;

CREATE OR REPLACE FUNCTION public.is_admin() RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS(SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin');
$$;

-- Nomes públicos para ranking (sem e-mail/role).
CREATE OR REPLACE FUNCTION public.perfis_nomes(ids uuid[]) RETURNS table(id uuid, nome text)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT p.id, p.nome FROM public.profiles p WHERE p.id = ANY(ids);
$$;
REVOKE ALL ON FUNCTION public.perfis_nomes(uuid[]) FROM public;
GRANT EXECUTE ON FUNCTION public.perfis_nomes(uuid[]) TO authenticated;

-- 3) Proteção da coluna role.
CREATE OR REPLACE FUNCTION public.proteger_role_profile() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF new.role IS DISTINCT FROM old.role THEN
    -- Contexto sem usuário (service role / triggers internos) é permitido.
    IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
      RAISE EXCEPTION 'Somente administradores podem alterar o perfil de acesso.' USING errcode = '42501';
    END IF;
    IF old.role = 'admin' AND (SELECT count(*) FROM public.profiles WHERE role = 'admin' AND id <> old.id) = 0 THEN
      RAISE EXCEPTION 'Não é permitido remover o último administrador.' USING errcode = '42501';
    END IF;
  END IF;
  IF new.id IS DISTINCT FROM old.id THEN
    RAISE EXCEPTION 'id imutável' USING errcode = '42501';
  END IF;
  RETURN new;
END $$;
DROP TRIGGER IF EXISTS trg_proteger_role_profile ON public.profiles;
CREATE TRIGGER trg_proteger_role_profile BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.proteger_role_profile();

-- 4) Policies de profiles.
DROP POLICY IF EXISTS "profiles leitura autenticada" ON public.profiles;
DROP POLICY IF EXISTS "profiles atualizacao admin" ON public.profiles;
DROP POLICY IF EXISTS "profiles leitura propria ou equipe" ON public.profiles;
DROP POLICY IF EXISTS "profiles atualizacao propria" ON public.profiles;
DROP POLICY IF EXISTS "profiles atualizacao equipe" ON public.profiles;

CREATE POLICY "profiles leitura propria ou equipe" ON public.profiles FOR SELECT TO authenticated
USING (id = auth.uid() OR public.is_staff() OR role IN ('admin','editor'));

CREATE POLICY "profiles atualizacao propria" ON public.profiles FOR UPDATE TO authenticated
USING (id = auth.uid()) WITH CHECK (id = auth.uid());

CREATE POLICY "profiles atualizacao equipe" ON public.profiles FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (role IN ('user','admin','editor'));

-- 5) FK para permitir embed profiles -> usuario_concurso_alvo (Admin > Usuários).
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'usuario_concurso_alvo_profile_fkey') THEN
    ALTER TABLE public.usuario_concurso_alvo
      ADD CONSTRAINT usuario_concurso_alvo_profile_fkey FOREIGN KEY (usuario_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
  END IF;
END $$;

-- 6) Normalização das FKs de mentoria_perfis para tabelas oficiais de concursos/cargos.
UPDATE public.mentoria_perfis SET concurso_id = NULL WHERE concurso_id IS NOT NULL AND concurso_id NOT IN (SELECT id FROM public.concursos);
UPDATE public.mentoria_perfis SET cargo_id = NULL WHERE cargo_id IS NOT NULL AND cargo_id NOT IN (SELECT id FROM public.concurso_cargos);

ALTER TABLE public.mentoria_perfis DROP CONSTRAINT IF EXISTS mentoria_perfis_concurso_id_fkey;
ALTER TABLE public.mentoria_perfis ADD CONSTRAINT mentoria_perfis_concurso_id_fkey FOREIGN KEY (concurso_id) REFERENCES public.concursos(id) ON DELETE SET NULL;

ALTER TABLE public.mentoria_perfis DROP CONSTRAINT IF EXISTS mentoria_perfis_cargo_id_fkey;
ALTER TABLE public.mentoria_perfis ADD CONSTRAINT mentoria_perfis_cargo_id_fkey FOREIGN KEY (cargo_id) REFERENCES public.concurso_cargos(id) ON DELETE SET NULL;


-- ==============================================================================
-- 2. Migration: 20260930163000_disciplinas_contagem.sql
-- Descrição: Função server-side para contagem rápida de questões por disciplina.
-- ==============================================================================

CREATE OR REPLACE FUNCTION public.disciplinas_contagem_questoes()
RETURNS table(disciplina_id uuid, total bigint)
LANGUAGE sql STABLE SECURITY INVOKER SET search_path = public AS $$
  SELECT q.disciplina_id, count(*)::bigint
  FROM public.questoes q
  WHERE q.disciplina_id IS NOT NULL
    AND COALESCE(q.anulada, false) = false
    AND COALESCE(q.auditoria_status, '') <> 'irrecuperavel'
  GROUP BY q.disciplina_id;
$$;

REVOKE ALL ON FUNCTION public.disciplinas_contagem_questoes() FROM public;
GRANT EXECUTE ON FUNCTION public.disciplinas_contagem_questoes() TO authenticated, anon;


-- ==============================================================================
-- 3. Migration: 20261001120000_editais_usuario_tracking.sql
-- Descrição: Colunas de tracking do processamento OpenAI e CHECK de status.
-- ==============================================================================

ALTER TABLE public.editais_usuario
  ADD COLUMN IF NOT EXISTS openai_response_id text,
  ADD COLUMN IF NOT EXISTS openai_file_id text,
  ADD COLUMN IF NOT EXISTS provider_status text,
  ADD COLUMN IF NOT EXISTS processamento_iniciado_em timestamptz;

ALTER TABLE public.editais_usuario DROP CONSTRAINT IF EXISTS editais_usuario_status_check;
ALTER TABLE public.editais_usuario ADD CONSTRAINT editais_usuario_status_check CHECK (
  status IN ('aguardando_processamento', 'processando', 'aguardando_revisao', 'confirmado', 'erro', 'revisao_sem_conteudo')
);

CREATE INDEX IF NOT EXISTS idx_editais_usuario_openai_response_id
  ON public.editais_usuario(openai_response_id);

CREATE INDEX IF NOT EXISTS idx_editais_usuario_processamento_iniciado_em
  ON public.editais_usuario(processamento_iniciado_em);


-- ==============================================================================
-- 4. Migration: 20261002100000_fix_confirmar_rpc_auth.sql
-- Descrição: Função slugify(v text), colunas de autoria (criado_por, visibilidade),
--            suporte a subassuntos em edital_topicos com UNIQUE NULLS NOT DISTINCT (Postgres 17)
--            e RPC confirmar_edital_usuario com 4 níveis, seleção de cargo e segurança.
-- ==============================================================================

-- 1. Função public.slugify para normalização preservando nome do parâmetro 'v'
CREATE OR REPLACE FUNCTION public.slugify(v text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE STRICT
AS $$
DECLARE
    v_clean text;
BEGIN
    -- Converte para minúsculas e remove espaços nas pontas
    v_clean := lower(trim(v));
    -- Remove acentuação comum em português
    v_clean := translate(
        v_clean,
        'áàâãäéèêëíìîïóòôõöúùûüçñÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ',
        'aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN'
    );
    -- Converte qualquer caractere não alfanumérico em traço
    v_clean := regexp_replace(v_clean, '[^a-z0-9]+', '-', 'g');
    -- Remove traços duplicados ou nas extremidades
    v_clean := regexp_replace(v_clean, '^-+|-+$', '', 'g');

    IF v_clean = '' THEN
        RETURN 'item-' || substr(md5(coalesce(v, '')), 1, 8);
    END IF;

    RETURN v_clean;
END;
$$;

-- 2. Colunas de autoria, visibilidade e subassuntos para suporte à taxonomia em 4 níveis
ALTER TABLE public.concursos
  ADD COLUMN IF NOT EXISTS criado_por uuid REFERENCES public.profiles(id) ON DELETE SET NULL;

ALTER TABLE public.editais_concurso
  ADD COLUMN IF NOT EXISTS criado_por uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS visibilidade text DEFAULT 'publico';

ALTER TABLE public.edital_topicos
  ADD COLUMN IF NOT EXISTS subassunto_id uuid REFERENCES public.subassuntos(id) ON DELETE SET NULL;

ALTER TABLE public.edital_topicos DROP CONSTRAINT IF EXISTS edital_topicos_edital_id_disciplina_id_assunto_id_key;
ALTER TABLE public.edital_topicos DROP CONSTRAINT IF EXISTS edital_topicos_edital_disciplina_assunto_subassunto_key;
ALTER TABLE public.edital_topicos DROP CONSTRAINT IF EXISTS edital_topicos_unico;
DROP INDEX IF EXISTS public.idx_edital_topicos_unique_subassunto;
ALTER TABLE public.edital_topicos ADD CONSTRAINT edital_topicos_unico UNIQUE NULLS NOT DISTINCT (edital_id, disciplina_id, assunto_id, subassunto_id);

-- 3. Drop de versões anteriores da RPC confirmar_edital_usuario
DROP FUNCTION IF EXISTS public.confirmar_edital_usuario(uuid, uuid, uuid, jsonb);
DROP FUNCTION IF EXISTS public.confirmar_edital_usuario(uuid, uuid);
DROP FUNCTION IF EXISTS public.confirmar_edital_usuario(uuid, uuid, text);

-- 4. Nova versão segura da RPC confirmar_edital_usuario (SECURITY DEFINER + auth.uid() + 4 níveis de taxonomia + seleção de cargo)
CREATE OR REPLACE FUNCTION public.confirmar_edital_usuario(
    p_upload_id uuid,
    p_edital_id uuid,
    p_cargo text DEFAULT NULL
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_usuario_id uuid;
    v_upload record;
    v_edital record;
    v_user_role text;
    v_disciplina record;
    v_disciplina_id uuid;
    v_assunto record;
    v_assunto_id uuid;
    v_subassunto_nome text;
    v_subassunto_id uuid;
    v_total_topicos int := 0;
    v_ordem int := 0;
    v_disciplinas_json jsonb;
BEGIN
    -- 1. Obter usuário autenticado
    v_usuario_id := auth.uid();
    IF v_usuario_id IS NULL THEN
        RAISE EXCEPTION 'Usuário não autenticado.';
    END IF;

    -- 2. Validar upload pertencente ao usuário e em estado aguardando_revisao
    SELECT * INTO v_upload
      FROM public.editais_usuario
     WHERE id = p_upload_id
       AND usuario_id = v_usuario_id
       AND status = 'aguardando_revisao';

    IF NOT FOUND OR v_upload.estrutura_extraida IS NULL THEN
        RAISE EXCEPTION 'Upload não encontrado ou em estado inválido para confirmação.';
    END IF;

    -- 3. Validar edital de destino
    SELECT ec.*, c.status AS concurso_status, c.criado_por AS concurso_criador INTO v_edital
      FROM public.editais_concurso ec
      JOIN public.concursos c ON c.id = ec.concurso_id
     WHERE ec.id = p_edital_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Edital de destino não encontrado.';
    END IF;

    -- 4. Validar permissões
    SELECT role INTO v_user_role
      FROM public.profiles
     WHERE id = v_usuario_id;

    -- Regra A: Editais publicados/oficiais exigem admin ou editor
    IF (v_edital.status IN ('publicado', 'retificado', 'encerrado') OR v_edital.concurso_status IN ('publicado', 'encerrado'))
       AND COALESCE(v_user_role, 'user') NOT IN ('admin', 'editor') THEN
        RAISE EXCEPTION 'Apenas administradores e editores podem confirmar tópicos em editais publicados.';
    END IF;

    -- Regra B: Editais não publicados exigem ser o criador do edital ou admin/editor
    IF (v_edital.status NOT IN ('publicado', 'retificado', 'encerrado'))
       AND v_edital.criado_por IS NOT NULL
       AND v_edital.criado_por <> v_usuario_id
       AND COALESCE(v_user_role, 'user') NOT IN ('admin', 'editor') THEN
        RAISE EXCEPTION 'Apenas o criador do edital ou administradores podem confirmar tópicos neste edital.';
    END IF;

    -- 5. Extração e gravação hierárquica (4 níveis: Cargos -> Disciplinas -> Assuntos -> Subassuntos/Tópicos)
    -- Seleção do cargo caso haja múltiplos cargos estruturados
    IF v_upload.estrutura_extraida ? 'cargos' AND jsonb_array_length(v_upload.estrutura_extraida->'cargos') > 0 THEN
        IF jsonb_array_length(v_upload.estrutura_extraida->'cargos') > 1 AND (p_cargo IS NULL OR trim(p_cargo) = '') THEN
            RAISE EXCEPTION 'O edital possui múltiplos cargos. Selecione um cargo para confirmar.';
        END IF;

        IF p_cargo IS NOT NULL AND trim(p_cargo) <> '' THEN
            SELECT c.disciplinas INTO v_disciplinas_json
              FROM jsonb_to_recordset(v_upload.estrutura_extraida->'cargos') AS c(nome text, disciplinas jsonb)
             WHERE lower(trim(c.nome)) = lower(trim(p_cargo))
             LIMIT 1;

            IF v_disciplinas_json IS NULL THEN
                RAISE EXCEPTION 'Cargo "%" não encontrado na estrutura extraída do edital.', p_cargo;
            END IF;
        ELSE
            -- Apenas 1 cargo e p_cargo é null
            v_disciplinas_json := COALESCE((v_upload.estrutura_extraida->'cargos'->0)->'disciplinas', '[]'::jsonb);
        END IF;
    ELSE
        v_disciplinas_json := COALESCE(v_upload.estrutura_extraida->'disciplinas', '[]'::jsonb);
    END IF;

    -- Inserir disciplinas, assuntos e subassuntos/tópicos
    FOR v_disciplina IN
        SELECT * FROM jsonb_to_recordset(v_disciplinas_json) AS x(nome text, assuntos jsonb)
    LOOP
        IF v_disciplina.nome IS NULL OR trim(v_disciplina.nome) = '' THEN
            CONTINUE;
        END IF;

        INSERT INTO public.disciplinas (nome, slug)
        VALUES (v_disciplina.nome, public.slugify(v_disciplina.nome))
        ON CONFLICT (slug) DO UPDATE SET nome = excluded.nome
        RETURNING id INTO v_disciplina_id;

        FOR v_assunto IN
            SELECT
                CASE
                    WHEN jsonb_typeof(elem) = 'object' THEN elem->>'nome'
                    ELSE elem #>> '{}'
                END AS nome,
                CASE
                    WHEN jsonb_typeof(elem) = 'object' THEN COALESCE(elem->'subassuntos', elem->'topicos', '[]'::jsonb)
                    ELSE '[]'::jsonb
                END AS subtopicos
            FROM jsonb_array_elements(COALESCE(v_disciplina.assuntos, '[]'::jsonb)) AS elem
        LOOP
            IF v_assunto.nome IS NULL OR trim(v_assunto.nome) = '' THEN
                CONTINUE;
            END IF;

            v_ordem := v_ordem + 1;

            INSERT INTO public.assuntos (disciplina_id, nome, slug)
            VALUES (
                v_disciplina_id,
                v_assunto.nome,
                public.slugify(v_assunto.nome)
            )
            ON CONFLICT (disciplina_id, slug)
            DO UPDATE SET nome = excluded.nome
            RETURNING id INTO v_assunto_id;

            -- Se houver subtópicos/subassuntos (nível 4)
            IF v_assunto.subtopicos IS NOT NULL AND jsonb_array_length(v_assunto.subtopicos) > 0 THEN
                FOR v_subassunto_nome IN
                    SELECT value #>> '{}' FROM jsonb_array_elements(v_assunto.subtopicos)
                LOOP
                    IF v_subassunto_nome IS NULL OR trim(v_subassunto_nome) = '' THEN
                        CONTINUE;
                    END IF;

                    INSERT INTO public.subassuntos (assunto_id, nome, slug)
                    VALUES (
                        v_assunto_id,
                        v_subassunto_nome,
                        public.slugify(v_subassunto_nome)
                    )
                    ON CONFLICT (assunto_id, slug)
                    DO UPDATE SET nome = excluded.nome
                    RETURNING id INTO v_subassunto_id;

                    INSERT INTO public.edital_topicos (
                        edital_id, disciplina_id, assunto_id, subassunto_id, ordem
                    )
                    VALUES (
                        p_edital_id,
                        v_disciplina_id,
                        v_assunto_id,
                        v_subassunto_id,
                        v_ordem
                    )
                    ON CONFLICT (edital_id, disciplina_id, assunto_id, subassunto_id)
                    DO UPDATE SET ordem = excluded.ordem;

                    v_total_topicos := v_total_topicos + 1;
                END LOOP;
            ELSE
                -- Inserção padrão a nível de assunto (sem subassunto)
                INSERT INTO public.edital_topicos (
                    edital_id, disciplina_id, assunto_id, subassunto_id, ordem
                )
                VALUES (
                    p_edital_id,
                    v_disciplina_id,
                    v_assunto_id,
                    NULL,
                    v_ordem
                )
                ON CONFLICT (edital_id, disciplina_id, assunto_id, subassunto_id)
                DO UPDATE SET ordem = excluded.ordem;

                v_total_topicos := v_total_topicos + 1;
            END IF;
        END LOOP;
    END LOOP;

    -- 6. Atualizar status do upload para confirmado
    UPDATE public.editais_usuario
       SET status = 'confirmado',
           edital_id = p_edital_id,
           confirmado_em = now(),
           updated_at = now()
     WHERE id = p_upload_id
       AND usuario_id = v_usuario_id
       AND status = 'aguardando_revisao';

    IF NOT FOUND THEN
        RAISE EXCEPTION 'O edital já foi confirmado ou mudou de estado.';
    END IF;

    RETURN jsonb_build_object(
        'ok', true,
        'total_topicos', v_total_topicos
    );
END;
$$;

REVOKE ALL ON FUNCTION public.confirmar_edital_usuario(uuid, uuid, text) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.confirmar_edital_usuario(uuid, uuid, text) TO authenticated;


-- ==============================================================================
-- 5. Migration: 20261002110000_migrate_erro_processamento_metadata.sql
-- Descrição: Migração de metadados legados em JSON e limpeza de uploads órfãos.
--            (JÁ APLICADA NO BANCO)
-- ==============================================================================

-- 1. Migração de metadados legados armazenados em erro_processamento para as colunas dedicadas
UPDATE public.editais_usuario
SET openai_response_id = (erro_processamento::jsonb)->>'response_id',
    openai_file_id = (erro_processamento::jsonb)->>'file_id',
    provider_status = COALESCE((erro_processamento::jsonb)->>'provider_status', (erro_processamento::jsonb)->>'status', 'queued'),
    erro_processamento = NULL
WHERE status = 'processando'
  AND erro_processamento IS NOT NULL
  AND erro_processamento LIKE '{%'
  AND (erro_processamento::jsonb ? 'response_id');

-- 2. Limpeza de uploads em processamento órfãos (sem ID da OpenAI)
UPDATE public.editais_usuario
SET status = 'erro',
    erro_processamento = 'Processamento interrompido sem identificador da OpenAI. Envie o PDF novamente.',
    updated_at = now()
WHERE status = 'processando'
  AND openai_response_id IS NULL;

-- 3. Limpeza de uploads aguardando processamento que expiraram (> 30 minutos)
UPDATE public.editais_usuario
SET status = 'erro',
    erro_processamento = 'O processamento não foi iniciado. Envie o PDF novamente.',
    updated_at = now()
WHERE status = 'aguardando_processamento'
  AND created_at < now() - interval '30 minutes';
