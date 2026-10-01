-- ============================================================================
-- MIGRATION: 20260925130000_mentoria_ciclo.sql
-- DESCRIÇÃO: Release 3 — Ciclo de Estudos Adaptativo da Mentoria Inteligente
-- ============================================================================

-- ── 1. EXPANSÃO DE TABELAS PARA O CICLO CONTÍNUO ─────────────────────────────

-- Adicionar campos de controle do ciclo em mentoria_planos se não existirem
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_planos' AND column_name='ciclo_posicao_atual') THEN
    ALTER TABLE public.mentoria_planos ADD COLUMN ciclo_posicao_atual INT NOT NULL DEFAULT 0;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_planos' AND column_name='ciclo_total_blocos') THEN
    ALTER TABLE public.mentoria_planos ADD COLUMN ciclo_total_blocos INT NOT NULL DEFAULT 0;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_planos' AND column_name='ciclo_concluidos_contagem') THEN
    ALTER TABLE public.mentoria_planos ADD COLUMN ciclo_concluidos_contagem INT NOT NULL DEFAULT 0;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_planos' AND column_name='estrutura_ciclo') THEN
    ALTER TABLE public.mentoria_planos ADD COLUMN estrutura_ciclo JSONB DEFAULT '[]'::jsonb;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_planos' AND column_name='prioridades_disciplinas') THEN
    ALTER TABLE public.mentoria_planos ADD COLUMN prioridades_disciplinas JSONB DEFAULT '[]'::jsonb;
  END IF;
END $$;

-- Adicionar campos de controle em mentoria_sessoes_estudo se não existirem
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_sessoes_estudo' AND column_name='status') THEN
    ALTER TABLE public.mentoria_sessoes_estudo ADD COLUMN status VARCHAR(20) DEFAULT 'concluida' CHECK (status IN ('concluida', 'parcial', 'abandonada'));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_sessoes_estudo' AND column_name='bloco_numero') THEN
    ALTER TABLE public.mentoria_sessoes_estudo ADD COLUMN bloco_numero INT DEFAULT 1;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_sessoes_estudo' AND column_name='disciplina_id') THEN
    ALTER TABLE public.mentoria_sessoes_estudo ADD COLUMN disciplina_id UUID REFERENCES public.disciplinas(id) ON DELETE SET NULL;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='mentoria_sessoes_estudo' AND column_name='tipo') THEN
    ALTER TABLE public.mentoria_sessoes_estudo ADD COLUMN tipo VARCHAR(30) DEFAULT 'TEORIA';
  END IF;
END $$;
