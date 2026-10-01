CREATE EXTENSION IF NOT EXISTS unaccent;

-- Helper function to slugify strings
CREATE OR REPLACE FUNCTION public.slugify(v TEXT) RETURNS TEXT AS $$
    SELECT lower(regexp_replace(regexp_replace(public.unaccent(v), '[^a-zA-Z0-9]', '-', 'g'), '-+', '-', 'g'));
$$ LANGUAGE SQL IMMUTABLE;

-- Create RPC function to atomically process and persist edital topics
CREATE OR REPLACE FUNCTION public.confirmar_edital_usuario(
    p_upload_id UUID,
    p_edital_id UUID
) RETURNS JSONB AS $$
DECLARE
    v_disciplina RECORD;
    v_disciplina_id UUID;
    v_assunto_id UUID;
    v_assunto_nome TEXT;
    v_total_topicos INT := 0;
    v_ordem INT := 0;
    v_usuario_id UUID;
    v_estrutura JSONB;
BEGIN
    -- Validate upload status
    SELECT usuario_id, estrutura_extraida INTO v_usuario_id, v_estrutura
    FROM public.editais_usuario
    WHERE id = p_upload_id
    AND status = 'aguardando_revisao';

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Upload não encontrado ou em estado inválido.';
    END IF;

    -- Security validation: Ensure user is authorized (admin/editor or owner)
    IF NOT EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid()
        AND (role IN ('admin', 'editor') OR id = v_usuario_id)
    ) THEN
        RAISE EXCEPTION 'Não autorizado.';
    END IF;

    -- Validate target edital
    IF NOT EXISTS (SELECT 1 FROM public.editais_concurso WHERE id = p_edital_id) THEN
        RAISE EXCEPTION 'Edital de destino não encontrado.';
    END IF;

    -- Iterate disciplines
    FOR v_disciplina IN SELECT * FROM jsonb_to_recordset(v_estrutura->'disciplinas') AS x(nome TEXT, assuntos JSONB)
    LOOP
        -- Find or create discipline
        INSERT INTO public.disciplinas (nome, slug)
        VALUES (v_disciplina.nome, public.slugify(v_disciplina.nome))
        ON CONFLICT (slug) DO UPDATE SET nome = EXCLUDED.nome
        RETURNING id INTO v_disciplina_id;

        -- Iterate subjects within discipline
        FOR v_assunto_nome IN SELECT value #>> '{}' FROM jsonb_array_elements(v_disciplina.assuntos)
        LOOP
            v_ordem := v_ordem + 1;

            -- Find or create subject
            INSERT INTO public.assuntos (disciplina_id, nome, slug)
            VALUES (v_disciplina_id, v_assunto_nome, public.slugify(v_assunto_nome))
            ON CONFLICT (disciplina_id, slug) DO UPDATE SET nome = EXCLUDED.nome
            RETURNING id INTO v_assunto_id;

            -- Upsert topic
            INSERT INTO public.edital_topicos (edital_id, disciplina_id, assunto_id, ordem)
            VALUES (p_edital_id, v_disciplina_id, v_assunto_id, v_ordem)
            ON CONFLICT (edital_id, disciplina_id, assunto_id)
            DO UPDATE SET ordem = EXCLUDED.ordem;

            v_total_topicos := v_total_topicos + 1;
        END LOOP;
    END LOOP;

    -- Finalize upload
    UPDATE public.editais_usuario
    SET status = 'confirmado',
        confirmado_em = now(),
        updated_at = now()
    WHERE id = p_upload_id;

    RETURN jsonb_build_object('ok', true, 'total_topicos', v_total_topicos);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Revoke and re-grant permissions
REVOKE EXECUTE ON FUNCTION public.confirmar_edital_usuario FROM public, anon;
GRANT EXECUTE ON FUNCTION public.confirmar_edital_usuario TO authenticated;
