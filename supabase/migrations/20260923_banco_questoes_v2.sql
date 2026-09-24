-- ==============================================================================
-- MIGRAÇÃO SUPABASE / POSTGRESQL: BANCO DE QUESTÕES V2 (ESCALA 500.000+ QUESTÕES)
-- Modelagem em 3FN, Deduplicação Determinística, RLS, FTS e Auditoria
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. TAXONOMIA DE CONTEÚDO (Disciplinas, Assuntos e Subassuntos)
CREATE TABLE IF NOT EXISTS public.disciplinas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(150) NOT NULL UNIQUE,
    slug VARCHAR(150) NOT NULL UNIQUE,
    descricao TEXT,
    icone VARCHAR(50) DEFAULT 'BookOpen',
    cor VARCHAR(30) DEFAULT 'blue',
    ordem INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.assuntos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    disciplina_id UUID NOT NULL REFERENCES public.disciplinas(id) ON DELETE CASCADE,
    nome VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL,
    descricao TEXT,
    ordem INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    CONSTRAINT uq_assunto_disciplina_slug UNIQUE (disciplina_id, slug)
);

CREATE TABLE IF NOT EXISTS public.subassuntos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assunto_id UUID NOT NULL REFERENCES public.assuntos(id) ON DELETE CASCADE,
    nome VARCHAR(200) NOT NULL,
    slug VARCHAR(200) NOT NULL,
    ordem INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    CONSTRAINT uq_subassunto_assunto_slug UNIQUE (assunto_id, slug)
);

-- 2. ENTIDADES ORGANIZACIONAIS (Bancas, Órgãos, Cargos e Provas Oficiais)
CREATE TABLE IF NOT EXISTS public.bancas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(150) NOT NULL,
    sigla VARCHAR(50) NOT NULL UNIQUE,
    site_oficial TEXT,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.orgaos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(200) NOT NULL,
    sigla VARCHAR(50) NOT NULL,
    esfera VARCHAR(20) NOT NULL CHECK (esfera IN ('federal', 'estadual', 'municipal')),
    uf VARCHAR(2),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    CONSTRAINT uq_orgao_sigla_uf UNIQUE (sigla, uf)
);

CREATE TABLE IF NOT EXISTS public.cargos_base (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(200) NOT NULL UNIQUE,
    nivel_escolaridade VARCHAR(30) NOT NULL CHECK (nivel_escolaridade IN ('fundamental', 'medio', 'superior')),
    area_atuacao VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS public.provas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    banca_id UUID NOT NULL REFERENCES public.bancas(id) ON DELETE RESTRICT,
    orgao_id UUID NOT NULL REFERENCES public.orgaos(id) ON DELETE RESTRICT,
    cargo_base_id UUID REFERENCES public.cargos_base(id) ON DELETE SET NULL,
    ano INT NOT NULL CHECK (ano BETWEEN 1990 AND 2035),
    nome_concurso VARCHAR(250) NOT NULL,
    caderno_tipo VARCHAR(50),
    edital_numero VARCHAR(50),
    data_aplicacao DATE,
    fonte_url TEXT,
    licenca_tipo VARCHAR(100) DEFAULT 'domínio público / divulgação oficial',
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. TABELA CENTRAL DE QUESTÕES
CREATE TABLE IF NOT EXISTS public.questoes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    disciplina_id UUID NOT NULL REFERENCES public.disciplinas(id) ON DELETE RESTRICT,
    assunto_id UUID NOT NULL REFERENCES public.assuntos(id) ON DELETE RESTRICT,
    subassunto_id UUID REFERENCES public.subassuntos(id) ON DELETE SET NULL,
    prova_id UUID REFERENCES public.provas(id) ON DELETE SET NULL,
    banca_id UUID REFERENCES public.bancas(id) ON DELETE RESTRICT,
    orgao_id UUID REFERENCES public.orgaos(id) ON DELETE RESTRICT,
    cargo_id UUID REFERENCES public.cargos_base(id) ON DELETE SET NULL,
    banca_nome VARCHAR(100),
    orgao_nome VARCHAR(100),
    cargo_nome VARCHAR(150),
    ano INT NOT NULL CHECK (ano BETWEEN 1990 AND 2035),
    tipo VARCHAR(30) NOT NULL CHECK (tipo IN ('multipla_escolha', 'certo_errado')),
    dificuldade VARCHAR(20) NOT NULL DEFAULT 'medio' CHECK (dificuldade IN ('facil', 'medio', 'dificil')),
    enunciado TEXT NOT NULL,
    texto_apoio TEXT,
    explicacao TEXT NOT NULL,

    -- Metadados de Autoria e IA
    is_autoral_ia BOOLEAN NOT NULL DEFAULT false,
    modelo_ia VARCHAR(100),
    prompt_versao VARCHAR(50),
    revisada_por_especialista BOOLEAN NOT NULL DEFAULT false,
    especialista_revisor_id UUID,

    -- Flags de Integridade e Status
    anulada BOOLEAN NOT NULL DEFAULT false,
    desatualizada BOOLEAN NOT NULL DEFAULT false,
    motivo_desatualizacao TEXT,
    versao INT NOT NULL DEFAULT 1,

    -- Hash Criptográfico para Deduplicação Determinística
    fingerprint_hash CHAR(64) NOT NULL UNIQUE,

    -- Estatísticas Agregadas
    total_respostas INT NOT NULL DEFAULT 0,
    total_acertos INT NOT NULL DEFAULT 0,
    taxa_acerto NUMERIC(5,2) GENERATED ALWAYS AS (
        CASE WHEN total_respostas > 0 THEN ROUND((total_acertos::NUMERIC / total_respostas::NUMERIC) * 100, 2) ELSE 0 END
    ) STORED,

    -- Full-Text Search Vector
    busca_vetor TSVECTOR GENERATED ALWAYS AS (
        to_tsvector('portuguese', coalesce(enunciado, '') || ' ' || coalesce(texto_apoio, '') || ' ' || coalesce(explicacao, ''))
    ) STORED,

    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 4. ALTERNATIVAS DE QUESTÕES
CREATE TABLE IF NOT EXISTS public.questoes_alternativas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    questao_id UUID NOT NULL REFERENCES public.questoes(id) ON DELETE CASCADE,
    letra CHAR(1) CHECK (letra IN ('A', 'B', 'C', 'D', 'E')),
    texto TEXT NOT NULL,
    correta BOOLEAN NOT NULL DEFAULT false,
    ordem INT NOT NULL,
    explicacao_especifica TEXT,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    CONSTRAINT uq_questao_letra UNIQUE (questao_id, letra)
);

-- 5. RESPOSTAS DOS USUÁRIOS (Imutabilidade de Progresso)
CREATE TABLE IF NOT EXISTS public.respostas_usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    questao_id UUID NOT NULL REFERENCES public.questoes(id) ON DELETE RESTRICT,
    alternativa_id UUID REFERENCES public.questoes_alternativas(id) ON DELETE RESTRICT,
    resposta_certo_errado VARCHAR(10) CHECK (resposta_certo_errado IN ('certo', 'errado')),
    correta BOOLEAN NOT NULL,
    tempo_resposta_segundos INT NOT NULL DEFAULT 0,
    questao_versao INT NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 6. CADERNO DE ERROS, FAVORITOS E ANOTAÇÕES
CREATE TABLE IF NOT EXISTS public.caderno_erros (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    questao_id UUID NOT NULL REFERENCES public.questoes(id) ON DELETE CASCADE,
    total_erros INT NOT NULL DEFAULT 1,
    revisado BOOLEAN NOT NULL DEFAULT false,
    anotacao TEXT,
    ultimo_erro_em TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    CONSTRAINT uq_usuario_questao_caderno UNIQUE (usuario_id, questao_id)
);

CREATE TABLE IF NOT EXISTS public.questoes_favoritas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    questao_id UUID NOT NULL REFERENCES public.questoes(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    CONSTRAINT uq_usuario_questao_favorita UNIQUE (usuario_id, questao_id)
);

CREATE TABLE IF NOT EXISTS public.questoes_anotacoes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    questao_id UUID NOT NULL REFERENCES public.questoes(id) ON DELETE CASCADE,
    texto TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    CONSTRAINT uq_usuario_questao_anotacao UNIQUE (usuario_id, questao_id)
);

-- 7. AUDITORIA E HISTÓRICO DE ALTERAÇÕES
CREATE TABLE IF NOT EXISTS public.questoes_historico_alteracoes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    questao_id UUID NOT NULL REFERENCES public.questoes(id) ON DELETE CASCADE,
    autor_alteracao_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    versao_anterior INT NOT NULL,
    enunciado_anterior TEXT NOT NULL,
    explicacao_anterior TEXT NOT NULL,
    motivo_alteracao TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 8. ÍNDICES DE PERFORMANCE PARA ESCALA DE 500k+ REGISTROS
CREATE INDEX IF NOT EXISTS idx_questoes_disciplina_assunto ON public.questoes(disciplina_id, assunto_id);
CREATE INDEX IF NOT EXISTS idx_questoes_banca_ano ON public.questoes(banca_id, ano DESC);
CREATE INDEX IF NOT EXISTS idx_questoes_orgao_cargo ON public.questoes(orgao_id, cargo_id);
CREATE INDEX IF NOT EXISTS idx_questoes_tipo_dificuldade ON public.questoes(tipo, dificuldade);
CREATE INDEX IF NOT EXISTS idx_questoes_autoral_ia ON public.questoes(is_autoral_ia);
CREATE INDEX IF NOT EXISTS idx_questoes_fingerprint ON public.questoes(fingerprint_hash);

-- Índice Parcial para Questões Ativas
CREATE INDEX IF NOT EXISTS idx_questoes_ativas ON public.questoes(disciplina_id, assunto_id, ano DESC)
WHERE anulada = false AND desatualizada = false;

-- Índice GIN para Busca Textual Full-Text Search
CREATE INDEX IF NOT EXISTS idx_questoes_busca_vetor ON public.questoes USING GIN(busca_vetor);

-- Índices para Respostas e Caderno de Erros
CREATE INDEX IF NOT EXISTS idx_respostas_usuario_questao ON public.respostas_usuarios(usuario_id, questao_id);
CREATE INDEX IF NOT EXISTS idx_respostas_usuario_data ON public.respostas_usuarios(usuario_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_caderno_erros_usuario_revisado ON public.caderno_erros(usuario_id, revisado, ultimo_erro_em DESC);

-- 9. ROW LEVEL SECURITY (RLS) - HABILITAÇÃO
ALTER TABLE public.disciplinas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assuntos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subassuntos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bancas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orgaos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cargos_base ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.provas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questoes_alternativas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.respostas_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.caderno_erros ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questoes_favoritas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questoes_anotacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questoes_historico_alteracoes ENABLE ROW LEVEL SECURITY;

-- 10. POLÍTICAS DE RLS (IDEMPOTENTES COM DROP POLICY IF EXISTS)

-- Catálogo de Conteúdo: Leitura Pública
DROP POLICY IF EXISTS "Leitura pública de disciplinas" ON public.disciplinas;
CREATE POLICY "Leitura pública de disciplinas" ON public.disciplinas FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de assuntos" ON public.assuntos;
CREATE POLICY "Leitura pública de assuntos" ON public.assuntos FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de subassuntos" ON public.subassuntos;
CREATE POLICY "Leitura pública de subassuntos" ON public.subassuntos FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de bancas" ON public.bancas;
CREATE POLICY "Leitura pública de bancas" ON public.bancas FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de orgaos" ON public.orgaos;
CREATE POLICY "Leitura pública de orgaos" ON public.orgaos FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de cargos" ON public.cargos_base;
CREATE POLICY "Leitura pública de cargos" ON public.cargos_base FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de provas" ON public.provas;
CREATE POLICY "Leitura pública de provas" ON public.provas FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de questoes" ON public.questoes;
CREATE POLICY "Leitura pública de questoes" ON public.questoes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Leitura pública de alternativas" ON public.questoes_alternativas;
CREATE POLICY "Leitura pública de alternativas" ON public.questoes_alternativas FOR SELECT USING (true);

-- Dados do Usuário: Acesso Isolado e Seguro por auth.uid()
DROP POLICY IF EXISTS "Acesso proprio a respostas" ON public.respostas_usuarios;
CREATE POLICY "Acesso proprio a respostas" ON public.respostas_usuarios
    FOR ALL
    USING (auth.uid() = usuario_id)
    WITH CHECK (auth.uid() = usuario_id);

DROP POLICY IF EXISTS "Acesso proprio a caderno erros" ON public.caderno_erros;
CREATE POLICY "Acesso proprio a caderno erros" ON public.caderno_erros
    FOR ALL
    USING (auth.uid() = usuario_id)
    WITH CHECK (auth.uid() = usuario_id);

DROP POLICY IF EXISTS "Acesso proprio a questoes favoritas" ON public.questoes_favoritas;
CREATE POLICY "Acesso proprio a questoes favoritas" ON public.questoes_favoritas
    FOR ALL
    USING (auth.uid() = usuario_id)
    WITH CHECK (auth.uid() = usuario_id);

DROP POLICY IF EXISTS "Acesso proprio a anotacoes" ON public.questoes_anotacoes;
CREATE POLICY "Acesso proprio a anotacoes" ON public.questoes_anotacoes
    FOR ALL
    USING (auth.uid() = usuario_id)
    WITH CHECK (auth.uid() = usuario_id);

-- Auditoria e Histórico de Alterações
DROP POLICY IF EXISTS "Leitura de historico por autenticados" ON public.questoes_historico_alteracoes;
CREATE POLICY "Leitura de historico por autenticados" ON public.questoes_historico_alteracoes
    FOR SELECT
    TO authenticated
    USING (true);

DROP POLICY IF EXISTS "Insercao de historico por autor autenticado" ON public.questoes_historico_alteracoes;
CREATE POLICY "Insercao de historico por autor autenticado" ON public.questoes_historico_alteracoes
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = autor_alteracao_id);

