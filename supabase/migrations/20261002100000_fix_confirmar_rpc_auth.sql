-- 1. Criação da função public.slugify para normalização de nomes de disciplinas e assuntos
CREATE OR REPLACE FUNCTION public.slugify(v_text text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE STRICT
AS $$
DECLARE
    v_clean text;
BEGIN
    -- Converte para minúsculas e remove espaços nas pontas
    v_clean := lower(trim(v_text));
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
        RETURN 'item-' || substr(md5(coalesce(v_text, '')), 1, 8);
    END IF;

    RETURN v_clean;
END;
$$;

-- 2. Drop da versão antiga com 4 parâmetros se existir
DROP FUNCTION IF EXISTS public.confirmar_edital_usuario(uuid, uuid, uuid, jsonb);

-- 3. Nova versão segura da RPC confirmar_edital_usuario (SECURITY DEFINER + auth.uid())
CREATE OR REPLACE FUNCTION public.confirmar_edital_usuario(
    p_upload_id uuid,
    p_edital_id uuid
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
    v_assunto_id uuid;
    v_assunto_nome text;
    v_total_topicos int := 0;
    v_ordem int := 0;
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
    SELECT ec.*, c.status AS concurso_status INTO v_edital
      FROM public.editais_concurso ec
      JOIN public.concursos c ON c.id = ec.concurso_id
     WHERE ec.id = p_edital_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Edital de destino não encontrado.';
    END IF;

    -- 4. Validar permissões para edital publicado/oficial
    SELECT role INTO v_user_role
      FROM public.profiles
     WHERE id = v_usuario_id;

    IF (v_edital.status IN ('publicado', 'retificado', 'encerrado') OR v_edital.concurso_status IN ('publicado', 'encerrado'))
       AND COALESCE(v_user_role, 'user') NOT IN ('admin', 'editor') THEN
        RAISE EXCEPTION 'Apenas administradores e editores podem confirmar tópicos em editais publicados.';
    END IF;

    -- 5. Inserir disciplinas, assuntos e tópicos
    FOR v_disciplina IN
        SELECT * FROM jsonb_to_recordset(
            COALESCE(v_upload.estrutura_extraida->'disciplinas', '[]'::jsonb)
        ) AS x(nome text, assuntos jsonb)
    LOOP
        INSERT INTO public.disciplinas (nome, slug)
        VALUES (v_disciplina.nome, public.slugify(v_disciplina.nome))
        ON CONFLICT (slug) DO UPDATE SET nome = excluded.nome
        RETURNING id INTO v_disciplina_id;

        FOR v_assunto_nome IN
            SELECT value #>> '{}'
            FROM jsonb_array_elements(
                COALESCE(v_disciplina.assuntos, '[]'::jsonb)
            )
        LOOP
            v_ordem := v_ordem + 1;

            INSERT INTO public.assuntos (disciplina_id, nome, slug)
            VALUES (
                v_disciplina_id,
                v_assunto_nome,
                public.slugify(v_assunto_nome)
            )
            ON CONFLICT (disciplina_id, slug)
            DO UPDATE SET nome = excluded.nome
            RETURNING id INTO v_assunto_id;

            INSERT INTO public.edital_topicos (
                edital_id, disciplina_id, assunto_id, ordem
            )
            VALUES (
                p_edital_id,
                v_disciplina_id,
                v_assunto_id,
                v_ordem
            )
            ON CONFLICT (edital_id, disciplina_id, assunto_id)
            DO UPDATE SET ordem = excluded.ordem;

            v_total_topicos := v_total_topicos + 1;
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

-- Permissões
REVOKE ALL ON FUNCTION public.confirmar_edital_usuario(uuid, uuid) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.confirmar_edital_usuario(uuid, uuid) TO authenticated;
