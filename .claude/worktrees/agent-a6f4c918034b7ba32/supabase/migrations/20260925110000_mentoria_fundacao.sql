-- ==============================================================================
-- MIGRAÇÃO DE FUNDAÇÃO DA MENTORIA INTELIGENTE — CONCURSOSAPP
-- Versão: 20260925_mentoria_fundacao.sql
-- Projeto: xvpqcibdarcelvcwnglq (https://xvpqcibdarcelvcwnglq.supabase.co)
-- Data: 25/09/2026
--
-- OBJETIVO:
-- 1. Criar as estruturas de dados para a Mentoria Inteligente (Release 1):
--    - public.mentoria_perfis: Perfil do estudante, concurso alvo, cargo, prova, preferências.
--    - public.mentoria_disponibilidade: Grade semanal de disponibilidade por dia (0=Dom..6=Sáb).
--    - public.mentoria_edital_topicos: Edital verticalizado com pesos, domínio e progresso.
--    - public.mentoria_planos: Planos de estudo / ciclos gerados.
--    - public.mentoria_tarefas: Tarefas diárias de estudo (Teoria, Questões, Revisão, Simulado).
--    - public.mentoria_sessoes_estudo: Sessões cronometradas com tempo líquido e pausas.
--    - public.mentoria_revisoes: Fila de revisões espaçadas inteligentes (D+1, D+7, D+30...).
-- 2. Habilitar Row Level Security (RLS) com isolamento estrito multi-tenant:
--    - Policies otimizadas com ((select auth.uid()) = usuario_id) para papel 'authenticated'.
--    - Zero cross-user data leakage.
--    - Bloqueio completo para requisições anônimas.
-- 3. Criar índices de performance de alta eficiência para consultas rápidas.
-- ==============================================================================

-- ── 1. TABELA: public.mentoria_perfis ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.mentoria_perfis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  concurso_id UUID REFERENCES public.provas(id) ON DELETE SET NULL,
  concurso_nome VARCHAR(250) NOT NULL,
  cargo_id UUID REFERENCES public.cargos_base(id) ON DELETE SET NULL,
  cargo_nome VARCHAR(200) NOT NULL,
  data_prova DATE,
  nivel VARCHAR(20) NOT NULL DEFAULT 'intermediario' CHECK (nivel IN ('iniciante', 'intermediario', 'avancado')),
  meta_horas_semana NUMERIC(5,2) NOT NULL DEFAULT 0,
  horario_preferido VARCHAR(20) NOT NULL DEFAULT 'noite' CHECK (horario_preferido IN ('manha', 'tarde', 'noite', 'madrugada', 'flexivel')),
  duracao_bloco_minutos INT NOT NULL DEFAULT 40 CHECK (duracao_bloco_minutos BETWEEN 10 AND 240),
  quantidade_questoes_bloco INT NOT NULL DEFAULT 15 CHECK (quantidade_questoes_bloco BETWEEN 5 AND 100),
  dias_descanso TEXT[] DEFAULT ARRAY[]::TEXT[],
  prioridade_estudo VARCHAR(30) NOT NULL DEFAULT 'equilibrado' CHECK (prioridade_estudo IN ('equilibrado', 'teoria', 'questoes', 'revisao')),
  ativo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  CONSTRAINT uq_mentoria_perfis_usuario UNIQUE (usuario_id)
);

CREATE INDEX IF NOT EXISTS idx_mentoria_perfis_usuario ON public.mentoria_perfis(usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_perfis_ativo ON public.mentoria_perfis(usuario_id, ativo);

ALTER TABLE public.mentoria_perfis ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_perfis_select_authenticated" ON public.mentoria_perfis;
DROP POLICY IF EXISTS "mentoria_perfis_insert_authenticated" ON public.mentoria_perfis;
DROP POLICY IF EXISTS "mentoria_perfis_update_authenticated" ON public.mentoria_perfis;
DROP POLICY IF EXISTS "mentoria_perfis_delete_authenticated" ON public.mentoria_perfis;

CREATE POLICY "mentoria_perfis_select_authenticated"
ON public.mentoria_perfis FOR SELECT TO authenticated
USING ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_perfis_insert_authenticated"
ON public.mentoria_perfis FOR INSERT TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_perfis_update_authenticated"
ON public.mentoria_perfis FOR UPDATE TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_perfis_delete_authenticated"
ON public.mentoria_perfis FOR DELETE TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 2. TABELA: public.mentoria_disponibilidade ───────────────────────────────
CREATE TABLE IF NOT EXISTS public.mentoria_disponibilidade (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  dia_semana INT NOT NULL CHECK (dia_semana BETWEEN 0 AND 6), -- 0=Domingo, 1=Segunda, ..., 6=Sábado
  minutos_disponiveis INT NOT NULL DEFAULT 0 CHECK (minutos_disponiveis BETWEEN 0 AND 1440),
  horario_preferido VARCHAR(20) DEFAULT 'noite',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  CONSTRAINT uq_mentoria_disp_usuario_dia UNIQUE (usuario_id, dia_semana)
);

CREATE INDEX IF NOT EXISTS idx_mentoria_disp_usuario ON public.mentoria_disponibilidade(usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_disp_usuario_dia ON public.mentoria_disponibilidade(usuario_id, dia_semana);

ALTER TABLE public.mentoria_disponibilidade ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_disponibilidade_select_authenticated" ON public.mentoria_disponibilidade;
DROP POLICY IF EXISTS "mentoria_disponibilidade_insert_authenticated" ON public.mentoria_disponibilidade;
DROP POLICY IF EXISTS "mentoria_disponibilidade_update_authenticated" ON public.mentoria_disponibilidade;
DROP POLICY IF EXISTS "mentoria_disponibilidade_delete_authenticated" ON public.mentoria_disponibilidade;

CREATE POLICY "mentoria_disponibilidade_select_authenticated"
ON public.mentoria_disponibilidade FOR SELECT TO authenticated
USING ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_disponibilidade_insert_authenticated"
ON public.mentoria_disponibilidade FOR INSERT TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_disponibilidade_update_authenticated"
ON public.mentoria_disponibilidade FOR UPDATE TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_disponibilidade_delete_authenticated"
ON public.mentoria_disponibilidade FOR DELETE TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 3. TABELA: public.mentoria_edital_topicos ─────────────────────────────────
CREATE TABLE IF NOT EXISTS public.mentoria_edital_topicos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  disciplina_id UUID NOT NULL REFERENCES public.disciplinas(id) ON DELETE CASCADE,
  assunto_id UUID NOT NULL REFERENCES public.assuntos(id) ON DELETE CASCADE,
  subassunto_id UUID REFERENCES public.subassuntos(id) ON DELETE SET NULL,
  peso VARCHAR(10) NOT NULL DEFAULT 'medio' CHECK (peso IN ('baixo', 'medio', 'alto', 'critico')),
  incidencia NUMERIC(5,2) DEFAULT 0,
  prioridade_manual VARCHAR(10) CHECK (prioridade_manual IN ('baixa', 'media', 'alta', 'critica')),
  estudado BOOLEAN NOT NULL DEFAULT false,
  percentual_dominio INT DEFAULT 0 CHECK (percentual_dominio BETWEEN 0 AND 100),
  status VARCHAR(20) NOT NULL DEFAULT 'nao_iniciado' CHECK (status IN ('nao_iniciado', 'estudando', 'revisando', 'dominado')),
  ultima_revisao TIMESTAMPTZ,
  proxima_revisao TIMESTAMPTZ,
  questoes_respondidas INT DEFAULT 0,
  taxa_acerto NUMERIC(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  CONSTRAINT uq_mentoria_topico_usuario UNIQUE (usuario_id, disciplina_id, assunto_id)
);

CREATE INDEX IF NOT EXISTS idx_mentoria_topicos_usuario ON public.mentoria_edital_topicos(usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_topicos_status ON public.mentoria_edital_topicos(usuario_id, status);
CREATE INDEX IF NOT EXISTS idx_mentoria_topicos_disc_ass ON public.mentoria_edital_topicos(usuario_id, disciplina_id, assunto_id);

ALTER TABLE public.mentoria_edital_topicos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_edital_topicos_select_authenticated" ON public.mentoria_edital_topicos;
DROP POLICY IF EXISTS "mentoria_edital_topicos_insert_authenticated" ON public.mentoria_edital_topicos;
DROP POLICY IF EXISTS "mentoria_edital_topicos_update_authenticated" ON public.mentoria_edital_topicos;
DROP POLICY IF EXISTS "mentoria_edital_topicos_delete_authenticated" ON public.mentoria_edital_topicos;

CREATE POLICY "mentoria_edital_topicos_select_authenticated"
ON public.mentoria_edital_topicos FOR SELECT TO authenticated
USING ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_edital_topicos_insert_authenticated"
ON public.mentoria_edital_topicos FOR INSERT TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_edital_topicos_update_authenticated"
ON public.mentoria_edital_topicos FOR UPDATE TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_edital_topicos_delete_authenticated"
ON public.mentoria_edital_topicos FOR DELETE TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 4. TABELA: public.mentoria_planos ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.mentoria_planos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  data_inicio DATE NOT NULL,
  data_fim DATE,
  status VARCHAR(20) NOT NULL DEFAULT 'ativo' CHECK (status IN ('ativo', 'concluido', 'arquivado')),
  versao INT NOT NULL DEFAULT 1,
  meta_semanal_minutos INT NOT NULL DEFAULT 0,
  minutos_concluidos INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_mentoria_planos_usuario ON public.mentoria_planos(usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_planos_status ON public.mentoria_planos(usuario_id, status);

ALTER TABLE public.mentoria_planos ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_planos_select_authenticated" ON public.mentoria_planos;
DROP POLICY IF EXISTS "mentoria_planos_insert_authenticated" ON public.mentoria_planos;
DROP POLICY IF EXISTS "mentoria_planos_update_authenticated" ON public.mentoria_planos;
DROP POLICY IF EXISTS "mentoria_planos_delete_authenticated" ON public.mentoria_planos;

CREATE POLICY "mentoria_planos_select_authenticated"
ON public.mentoria_planos FOR SELECT TO authenticated
USING ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_planos_insert_authenticated"
ON public.mentoria_planos FOR INSERT TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_planos_update_authenticated"
ON public.mentoria_planos FOR UPDATE TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_planos_delete_authenticated"
ON public.mentoria_planos FOR DELETE TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 5. TABELA: public.mentoria_tarefas ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.mentoria_tarefas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plano_id UUID REFERENCES public.mentoria_planos(id) ON DELETE CASCADE,
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  data DATE NOT NULL,
  ordem INT NOT NULL DEFAULT 1,
  tipo VARCHAR(30) NOT NULL CHECK (tipo IN ('TEORIA', 'QUESTOES', 'REVISAO', 'SIMULADO', 'CADERNO_ERROS')),
  disciplina_id UUID REFERENCES public.disciplinas(id) ON DELETE SET NULL,
  assunto_id UUID REFERENCES public.assuntos(id) ON DELETE SET NULL,
  subassunto_id UUID REFERENCES public.subassuntos(id) ON DELETE SET NULL,
  titulo VARCHAR(250) NOT NULL,
  duracao_prevista_minutos INT NOT NULL DEFAULT 30,
  duracao_real_segundos INT NOT NULL DEFAULT 0,
  quantidade_questoes INT DEFAULT 0,
  questoes_feitas INT DEFAULT 0,
  questoes_acertos INT DEFAULT 0,
  prioridade VARCHAR(20) NOT NULL DEFAULT 'media' CHECK (prioridade IN ('baixa', 'media', 'alta', 'critica')),
  motivo_recomendacao TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'em_andamento', 'concluida', 'adiada', 'cancelada')),
  iniciado_em TIMESTAMPTZ,
  concluido_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_mentoria_tarefas_usuario ON public.mentoria_tarefas(usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_tarefas_data ON public.mentoria_tarefas(usuario_id, data);
CREATE INDEX IF NOT EXISTS idx_mentoria_tarefas_status ON public.mentoria_tarefas(usuario_id, status);
CREATE INDEX IF NOT EXISTS idx_mentoria_tarefas_plano ON public.mentoria_tarefas(plano_id);

ALTER TABLE public.mentoria_tarefas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_tarefas_select_authenticated" ON public.mentoria_tarefas;
DROP POLICY IF EXISTS "mentoria_tarefas_insert_authenticated" ON public.mentoria_tarefas;
DROP POLICY IF EXISTS "mentoria_tarefas_update_authenticated" ON public.mentoria_tarefas;
DROP POLICY IF EXISTS "mentoria_tarefas_delete_authenticated" ON public.mentoria_tarefas;

CREATE POLICY "mentoria_tarefas_select_authenticated"
ON public.mentoria_tarefas FOR SELECT TO authenticated
USING ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_tarefas_insert_authenticated"
ON public.mentoria_tarefas FOR INSERT TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_tarefas_update_authenticated"
ON public.mentoria_tarefas FOR UPDATE TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_tarefas_delete_authenticated"
ON public.mentoria_tarefas FOR DELETE TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 6. TABELA: public.mentoria_sessoes_estudo ─────────────────────────────────
CREATE TABLE IF NOT EXISTS public.mentoria_sessoes_estudo (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tarefa_id UUID REFERENCES public.mentoria_tarefas(id) ON DELETE SET NULL,
  inicio TIMESTAMPTZ NOT NULL DEFAULT now(),
  fim TIMESTAMPTZ,
  segundos_liquidos INT NOT NULL DEFAULT 0,
  pausas INT NOT NULL DEFAULT 0,
  segundos_pausa INT NOT NULL DEFAULT 0,
  observacoes TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_mentoria_sessoes_usuario ON public.mentoria_sessoes_estudo(usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_sessoes_tarefa ON public.mentoria_sessoes_estudo(tarefa_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_sessoes_inicio ON public.mentoria_sessoes_estudo(usuario_id, inicio);

ALTER TABLE public.mentoria_sessoes_estudo ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_sessoes_estudo_select_authenticated" ON public.mentoria_sessoes_estudo;
DROP POLICY IF EXISTS "mentoria_sessoes_estudo_insert_authenticated" ON public.mentoria_sessoes_estudo;
DROP POLICY IF EXISTS "mentoria_sessoes_estudo_update_authenticated" ON public.mentoria_sessoes_estudo;
DROP POLICY IF EXISTS "mentoria_sessoes_estudo_delete_authenticated" ON public.mentoria_sessoes_estudo;

CREATE POLICY "mentoria_sessoes_estudo_select_authenticated"
ON public.mentoria_sessoes_estudo FOR SELECT TO authenticated
USING ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_sessoes_estudo_insert_authenticated"
ON public.mentoria_sessoes_estudo FOR INSERT TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_sessoes_estudo_update_authenticated"
ON public.mentoria_sessoes_estudo FOR UPDATE TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_sessoes_estudo_delete_authenticated"
ON public.mentoria_sessoes_estudo FOR DELETE TO authenticated
USING ((select auth.uid()) = usuario_id);


-- ── 7. TABELA: public.mentoria_revisoes ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.mentoria_revisoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  disciplina_id UUID NOT NULL REFERENCES public.disciplinas(id) ON DELETE CASCADE,
  assunto_id UUID NOT NULL REFERENCES public.assuntos(id) ON DELETE CASCADE,
  subassunto_id UUID REFERENCES public.subassuntos(id) ON DELETE SET NULL,
  origem VARCHAR(30) NOT NULL DEFAULT 'estudo_diario' CHECK (origem IN ('estudo_diario', 'caderno_erros', 'simulado', 'manual')),
  data_estudo DATE NOT NULL,
  proxima_revisao DATE NOT NULL,
  intervalo_dias INT NOT NULL DEFAULT 1,
  etapa INT NOT NULL DEFAULT 1,
  status VARCHAR(20) NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'concluida', 'atrasada', 'cancelada')),
  nivel_retencao VARCHAR(20) DEFAULT 'medio' CHECK (nivel_retencao IN ('baixo', 'medio', 'alto', 'excelente')),
  concluida_em TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_mentoria_revisoes_usuario ON public.mentoria_revisoes(usuario_id);
CREATE INDEX IF NOT EXISTS idx_mentoria_revisoes_proxima ON public.mentoria_revisoes(usuario_id, proxima_revisao, status);
CREATE INDEX IF NOT EXISTS idx_mentoria_revisoes_assunto ON public.mentoria_revisoes(usuario_id, disciplina_id, assunto_id);

ALTER TABLE public.mentoria_revisoes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentoria_revisoes_select_authenticated" ON public.mentoria_revisoes;
DROP POLICY IF EXISTS "mentoria_revisoes_insert_authenticated" ON public.mentoria_revisoes;
DROP POLICY IF EXISTS "mentoria_revisoes_update_authenticated" ON public.mentoria_revisoes;
DROP POLICY IF EXISTS "mentoria_revisoes_delete_authenticated" ON public.mentoria_revisoes;

CREATE POLICY "mentoria_revisoes_select_authenticated"
ON public.mentoria_revisoes FOR SELECT TO authenticated
USING ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_revisoes_insert_authenticated"
ON public.mentoria_revisoes FOR INSERT TO authenticated
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_revisoes_update_authenticated"
ON public.mentoria_revisoes FOR UPDATE TO authenticated
USING ((select auth.uid()) = usuario_id)
WITH CHECK ((select auth.uid()) = usuario_id);

CREATE POLICY "mentoria_revisoes_delete_authenticated"
ON public.mentoria_revisoes FOR DELETE TO authenticated
USING ((select auth.uid()) = usuario_id);
