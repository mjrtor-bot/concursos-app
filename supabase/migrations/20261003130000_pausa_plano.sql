-- Migração para suporte a períodos de pausa de plano de estudos
ALTER TABLE public.mentoria_config_plano
ADD COLUMN IF NOT EXISTS data_inicio_pausa DATE,
ADD COLUMN IF NOT EXISTS data_fim_pausa DATE;
