-- ============================================================================
-- MIGRATION: 20260925_mentoria_diagnostico.sql
-- MÓDULO: MENTORIA INTELIGENTE — RELEASE 2: DIAGNÓSTICO INICIAL E NIVELAMENTO
-- ============================================================================

-- 1. TABELA DE DIAGNÓSTICOS DO ALUNO
CREATE TABLE IF NOT EXISTS public.mentoria_diagnosticos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  concurso_nome VARCHAR(250),
  cargo_nome VARCHAR(200),
  iniciado_em TIMESTAMPTZ DEFAULT now() NOT NULL,
  concluido_em TIMESTAMPTZ,
  status VARCHAR(30) NOT NULL DEFAULT 'em_andamento' CHECK (status IN ('em_andamento', 'concluido', 'abandonado')),
  historico_dados JSONB DEFAULT '{}'::jsonb NOT NULL,
  score_geral NUMERIC(5,2) DEFAULT 0 NOT NULL,
  nivel_geral VARCHAR(30) DEFAULT 'iniciante' NOT NULL CHECK (nivel_geral IN ('iniciante', 'basico', 'intermediario', 'avancado')),
  resumo_resultado JSONB DEFAULT '{}'::jsonb NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Índices de Performance
CREATE INDEX IF NOT EXISTS idx_mentoria_diag_usuario ON public.mentoria_diagnosticos (usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_diag_status ON public.mentoria_diagnosticos (usuario_id, status);

-- RLS para mentoria_diagnosticos
ALTER TABLE public.mentoria_diagnosticos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_diag_select_authenticated" ON public.mentoria_diagnosticos;
CREATE POLICY "mentoria_diag_select_authenticated"
  ON public.mentoria_diagnosticos FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_insert_authenticated" ON public.mentoria_diagnosticos;
CREATE POLICY "mentoria_diag_insert_authenticated"
  ON public.mentoria_diagnosticos FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_update_authenticated" ON public.mentoria_diagnosticos;
CREATE POLICY "mentoria_diag_update_authenticated"
  ON public.mentoria_diagnosticos FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = usuario_id)
  WITH CHECK ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_delete_authenticated" ON public.mentoria_diagnosticos;
CREATE POLICY "mentoria_diag_delete_authenticated"
  ON public.mentoria_diagnosticos FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = usuario_id);


-- 2. TABELA DE AUTOAVALIAÇÃO E DESEMPENHO POR DISCIPLINA DO DIAGNÓSTICO
CREATE TABLE IF NOT EXISTS public.mentoria_diagnostico_disciplinas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  diagnostico_id UUID NOT NULL REFERENCES public.mentoria_diagnosticos(id) ON DELETE CASCADE,
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  disciplina_id UUID REFERENCES public.disciplinas(id) ON DELETE SET NULL,
  disciplina_nome VARCHAR(200) NOT NULL,
  autoavaliacao VARCHAR(30) NOT NULL DEFAULT 'nunca_estudei' CHECK (autoavaliacao IN ('nunca_estudei', 'basico', 'intermediario', 'avancado')),
  questoes_ofertadas INT NOT NULL DEFAULT 0,
  questoes_respondidas INT NOT NULL DEFAULT 0,
  acertos INT NOT NULL DEFAULT 0,
  percentual_acerto NUMERIC(5,2) NOT NULL DEFAULT 0,
  tempo_medio_segundos NUMERIC(6,2) NOT NULL DEFAULT 0,
  historico_previo_questoes INT NOT NULL DEFAULT 0,
  historico_previo_acertos INT NOT NULL DEFAULT 0,
  score_final NUMERIC(5,2) NOT NULL DEFAULT 0,
  nivel_calculado VARCHAR(30) NOT NULL DEFAULT 'iniciante' CHECK (nivel_calculado IN ('iniciante', 'basico', 'intermediario', 'avancado')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  CONSTRAINT uq_diag_disciplina UNIQUE (diagnostico_id, disciplina_nome)
);

-- Índices de Performance
CREATE INDEX IF NOT EXISTS idx_diag_disc_diagnostico ON public.mentoria_diagnostico_disciplinas (diagnostico_id);
CREATE INDEX IF NOT EXISTS idx_diag_disc_usuario ON public.mentoria_diagnostico_disciplinas (usuario_id);

-- RLS para mentoria_diagnostico_disciplinas
ALTER TABLE public.mentoria_diagnostico_disciplinas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_diag_disc_select_auth" ON public.mentoria_diagnostico_disciplinas;
CREATE POLICY "mentoria_diag_disc_select_auth"
  ON public.mentoria_diagnostico_disciplinas FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_disc_insert_auth" ON public.mentoria_diagnostico_disciplinas;
CREATE POLICY "mentoria_diag_disc_insert_auth"
  ON public.mentoria_diagnostico_disciplinas FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_disc_update_auth" ON public.mentoria_diagnostico_disciplinas;
CREATE POLICY "mentoria_diag_disc_update_auth"
  ON public.mentoria_diagnostico_disciplinas FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = usuario_id)
  WITH CHECK ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_disc_delete_auth" ON public.mentoria_diagnostico_disciplinas;
CREATE POLICY "mentoria_diag_disc_delete_auth"
  ON public.mentoria_diagnostico_disciplinas FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = usuario_id);


-- 3. TABELA DE RESPOSTAS DA BATERIA DIAGNÓSTICA
CREATE TABLE IF NOT EXISTS public.mentoria_diagnostico_respostas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  diagnostico_id UUID NOT NULL REFERENCES public.mentoria_diagnosticos(id) ON DELETE CASCADE,
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  disciplina_id UUID REFERENCES public.disciplinas(id) ON DELETE SET NULL,
  disciplina_nome VARCHAR(200) NOT NULL,
  questao_id UUID NOT NULL REFERENCES public.questoes(id) ON DELETE CASCADE,
  alternativa_id UUID NOT NULL REFERENCES public.questoes_alternativas(id) ON DELETE CASCADE,
  correta BOOLEAN NOT NULL,
  tempo_segundos INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  CONSTRAINT uq_diag_questao_usuario UNIQUE (diagnostico_id, questao_id)
);

-- Índices de Performance
CREATE INDEX IF NOT EXISTS idx_diag_resp_diagnostico ON public.mentoria_diagnostico_respostas (diagnostico_id);
CREATE INDEX IF NOT EXISTS idx_diag_resp_usuario ON public.mentoria_diagnostico_respostas (usuario_id);

-- RLS para mentoria_diagnostico_respostas
ALTER TABLE public.mentoria_diagnostico_respostas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_diag_resp_select_auth" ON public.mentoria_diagnostico_respostas;
CREATE POLICY "mentoria_diag_resp_select_auth"
  ON public.mentoria_diagnostico_respostas FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_resp_insert_auth" ON public.mentoria_diagnostico_respostas;
CREATE POLICY "mentoria_diag_resp_insert_auth"
  ON public.mentoria_diagnostico_respostas FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_resp_update_auth" ON public.mentoria_diagnostico_respostas;
CREATE POLICY "mentoria_diag_resp_update_auth"
  ON public.mentoria_diagnostico_respostas FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = usuario_id)
  WITH CHECK ((select auth.uid()) = usuario_id);

DROP POLICY IF EXISTS "mentoria_diag_resp_delete_auth" ON public.mentoria_diagnostico_respostas;
CREATE POLICY "mentoria_diag_resp_delete_auth"
  ON public.mentoria_diagnostico_respostas FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = usuario_id);


-- 4. ADIÇÃO DE CAMPOS DE DIAGNÓSTICO EM mentoria_perfis
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'mentoria_perfis' AND column_name = 'diagnostico_concluido') THEN
    ALTER TABLE public.mentoria_perfis ADD COLUMN diagnostico_concluido BOOLEAN DEFAULT false NOT NULL;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'mentoria_perfis' AND column_name = 'diagnostico_data') THEN
    ALTER TABLE public.mentoria_perfis ADD COLUMN diagnostico_data TIMESTAMPTZ;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'mentoria_perfis' AND column_name = 'diagnostico_id') THEN
    ALTER TABLE public.mentoria_perfis ADD COLUMN diagnostico_id UUID REFERENCES public.mentoria_diagnosticos(id) ON DELETE SET NULL;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'mentoria_perfis' AND column_name = 'score_geral') THEN
    ALTER TABLE public.mentoria_perfis ADD COLUMN score_geral NUMERIC(5,2) DEFAULT 0 NOT NULL;
  END IF;
END $$;
