-- Adicionar coluna edital_id na tabela editais_usuario
ALTER TABLE public.editais_usuario
ADD COLUMN edital_id UUID REFERENCES public.editais_concurso(id);
