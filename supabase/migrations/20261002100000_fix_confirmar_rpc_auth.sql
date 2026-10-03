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
