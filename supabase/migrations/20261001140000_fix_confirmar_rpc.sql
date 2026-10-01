-- Fix production RPC used by /api/editais/confirmar.
CREATE EXTENSION IF NOT EXISTS unaccent;

CREATE OR REPLACE FUNCTION public.confirmar_edital_usuario(
    p_upload_id uuid,
    p_edital_id uuid,
    p_usuario_id uuid,
    p_estrutura jsonb
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_disciplina record;
    v_disciplina_id uuid;
    v_assunto_id uuid;
    v_assunto_nome text;
    v_total_topicos int := 0;
    v_ordem int := 0;
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM public.editais_usuario
        WHERE id = p_upload_id
          AND usuario_id = p_usuario_id
          AND status = 'aguardando_revisao'
          AND estrutura_extraida IS NOT NULL
    ) THEN
        RAISE EXCEPTION 'Upload não encontrado ou em estado inválido para confirmação.';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM public.editais_concurso
        WHERE id = p_edital_id
    ) THEN
        RAISE EXCEPTION 'Edital de destino não encontrado.';
    END IF;

    FOR v_disciplina IN
        SELECT * FROM jsonb_to_recordset(
            COALESCE(p_estrutura->'disciplinas','[]'::jsonb)
        ) AS x(nome text, assuntos jsonb)
    LOOP
        INSERT INTO public.disciplinas (nome, slug)
        VALUES (v_disciplina.nome, public.slugify(v_disciplina.nome))
        ON CONFLICT (slug) DO UPDATE SET nome = excluded.nome
        RETURNING id INTO v_disciplina_id;

        FOR v_assunto_nome IN
            SELECT value #>> '{}'
            FROM jsonb_array_elements(
                COALESCE(v_disciplina.assuntos,'[]'::jsonb)
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

    UPDATE public.editais_usuario
       SET status = 'confirmado',
           confirmado_em = now(),
           updated_at = now()
     WHERE id = p_upload_id
       AND usuario_id = p_usuario_id
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