-- Helper function to slugify strings
CREATE OR REPLACE FUNCTION public.slugify(v TEXT) RETURNS TEXT AS $$
    SELECT lower(regexp_replace(regexp_replace(unaccent(v), '[^a-zA-Z0-9]', '-', 'g'), '-+', '-', 'g'));
$$ LANGUAGE SQL IMMUTABLE;

-- Create RPC function to atomically process and persist edital topics
CREATE OR REPLACE FUNCTION public.confirmar_edital_usuario(
    p_upload_id UUID,
    p_edital_id UUID,
    p_usuario_id UUID,
    p_estrutura JSONB
) RETURNS JSONB AS $$
DECLARE
    v_disciplina RECORD;
    v_disciplina_id UUID;
    v_assunto_id UUID;
    v_assunto_nome TEXT;
    v_total_topicos INT := 0;
    v_ordem INT := 0;
BEGIN
    -- Validate upload status
    IF NOT EXISTS (
        SELECT 1 FROM public.editais_usuario
        WHERE id = p_upload_id
        AND usuario_id = p_usuario_id
        AND status = 'aguardando_confirmacao'
    ) THEN
        RAISE EXCEPTION 'Upload não encontrado ou em estado inválido.';
    END IF;

    -- Validate target edital
    IF NOT EXISTS (SELECT 1 FROM public.editais_concurso WHERE id = p_edital_id) THEN
        RAISE EXCEPTION 'Edital de destino não encontrado.';
    END IF;

    -- Iterate disciplines
    FOR v_disciplina IN SELECT * FROM jsonb_to_recordset(p_estrutura->'disciplinas') AS x(nome TEXT, assuntos JSONB)
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
$$ LANGUAGE plpgsql;
