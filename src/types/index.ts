// ── Domain types for concursos-app ──

export interface Profile {
  id: string;
  email: string;
  nome: string;
  avatar_url?: string | null;
  concurso_alvo_id?: string | null;
  cargo_alvo_id?: string | null;
  meta_diaria_questoes?: number;
  role?: "user" | "admin" | "editor";
  created_at: string;
}

export type ConcursoStatus = "aberto" | "encerrado" | "previsto" | "em_andamento";
export type ConcursoNivel = "fundamental" | "medio" | "superior";
export type ConcursoEsfera = "federal" | "estadual" | "municipal";

export interface Concurso {
  id: string;
  nome: string;
  orgao: string;
  sigla: string;
  ano: number;
  nivel: ConcursoNivel;
  esfera: ConcursoEsfera;
  status: ConcursoStatus;
  banca: string;
  descricao: string;
  vagas_totais: number;
  salario_max: number;
  data_inscricao_inicio?: string | null;
  data_inscricao_fim?: string | null;
  data_prova: string | null;
  edital_url?: string | null;
  taxa_inscricao?: number | null;
  uf?: string | null; // null for federal
  created_at: string;
}

export interface Cargo {
  id: string;
  concurso_id: string;
  nome: string;
  vagas: number;
  vagas_cr?: number; // cadastro reserva
  salario: number;
  escolaridade: ConcursoNivel;
  requisitos?: string;
  created_at: string;
}

export interface Edital {
  id: string;
  concurso_id: string;
  titulo: string;
  numero: string;
  ano: number;
  url: string;
  publicado_em: string;
  tipo: "abertura" | "retificacao" | "resultado" | "gabarito";
  created_at: string;
}

// ── Taxonomia Hierárquica ──
export interface Disciplina {
  id: string;
  nome: string;
  slug: string;
  descricao: string;
  icone: string;
  cor: string;
  ordem: number;
  created_at: string;
}

export interface Assunto {
  id: string;
  disciplina_id: string;
  nome: string;
  slug: string;
  descricao?: string;
  ordem: number;
  questoes_count?: number;
  created_at: string;
}

export interface Subassunto {
  id: string;
  assunto_id: string;
  nome: string;
  slug: string;
  ordem: number;
  created_at: string;
}

export interface Banca {
  id: string;
  nome: string;
  sigla: string;
  site_oficial?: string;
  created_at?: string;
}

export interface Orgao {
  id: string;
  nome: string;
  sigla: string;
  esfera: ConcursoEsfera;
  uf?: string | null;
  created_at?: string;
}

export interface CargoBase {
  id: string;
  nome: string;
  nivel_escolaridade: ConcursoNivel;
  area_atuacao?: string;
  created_at?: string;
}

export interface Prova {
  id: string;
  banca_id: string;
  orgao_id: string;
  cargo_base_id?: string;
  ano: number;
  nome_concurso: string;
  caderno_tipo?: string;
  edital_numero?: string;
  data_aplicacao?: string;
  fonte_url?: string;
  licenca_tipo?: string;
  created_at?: string;
}

export type QuestaoTipo = "multipla_escolha" | "certo_errado";
export type QuestaoDificuldade = "facil" | "medio" | "dificil";
export type OrigemQuestaoFiltro = "todas" | "oficiais" | "autorais_ia";

export interface Alternativa {
  id: string;
  questao_id?: string;
  letra?: "A" | "B" | "C" | "D" | "E";
  texto: string;
  correta: boolean;
  ordem: number;
  explicacao_especifica?: string;
}

export interface Questao {
  id: string;
  disciplina_id: string;
  assunto_id: string;
  subassunto_id?: string | null;
  concurso_id?: string | null;
  prova_id?: string | null;
  enunciado: string;
  tipo: QuestaoTipo;
  dificuldade: QuestaoDificuldade;
  banca: string;
  ano: number;
  orgao: string;
  cargo?: string;
  explicacao: string;
  texto_apoio?: string;
  taxa_acerto_comunidade?: number;
  total_respostas_comunidade?: number;
  alternativas: Alternativa[];

  // Metadados de Autoria, IA e Integridade
  is_autoral_ia?: boolean;
  modelo_ia?: string | null;
  prompt_versao?: string | null;
  revisada_por_especialista?: boolean;
  anulada?: boolean;
  desatualizada?: boolean;
  motivo_desatualizacao?: string | null;
  versao?: number;
  fingerprint_hash?: string;

  created_at: string;
  updated_at?: string;
}

export interface RespostaUsuario {
  id: string;
  usuario_id: string;
  questao_id: string;
  alternativa_id: string; // "certo" | "errado" for CE or id
  correta: boolean;
  tempo_resposta: number; // in seconds
  questao_versao?: number;
  created_at: string;
}

export interface ItemCadernoErros {
  id: string;
  usuario_id: string;
  questao_id: string;
  total_erros: number;
  ultimo_erro_em: string;
  revisado: boolean;
  anotacao?: string;
  questao?: Questao;
}

export interface Simulado {
  id: string;
  titulo: string;
  descricao: string;
  concurso_id?: string | null;
  tempo_limite_minutos: number; // e.g. 120 (2h)
  questoes_ids: string[];
  total_questoes: number;
  dificuldade: QuestaoDificuldade;
  criado_por_sistema: boolean;
  created_at: string;
}

export interface RespostaSimulado {
  questao_id: string;
  alternativa_selecionada_id: string | null;
  marcada_para_revisao: boolean;
  tempo_gasto: number;
}

export interface SimuladoTentativa {
  id: string;
  simulado_id: string;
  usuario_id: string;
  iniciado_em: string;
  finalizado_em?: string | null;
  tempo_total_segundos: number;
  pontuacao: number; // 0-100 or total correct
  total_acertos: number;
  total_erros: number;
  total_em_branco: number;
  percentual: number;
  respostas: Record<string, RespostaSimulado>;
  status: "em_andamento" | "concluido" | "abandonado";
}

export interface EstatisticaPorDisciplina {
  disciplina_id: string;
  disciplina_nome: string;
  disciplina_cor: string;
  total: number;
  acertos: number;
  erros: number;
  percentual: number;
  tempo_medio_segundos: number;
}

export interface EstatisticasGerais {
  total_respondidas: number;
  total_acertos: number;
  total_erros: number;
  taxa_acerto_geral: number;
  tempo_medio_questao_segundos: number;
  sequencia_dias: number;
  questoes_hoje: number;
  meta_diaria: number;
  simulados_concluidos: number;
  media_simulados: number;
  total_no_caderno_erros: number;
  erros_revisados: number;
  por_disciplina: EstatisticaPorDisciplina[];
  por_banca: { banca: string; total: number; acertos: number; percentual: number }[];
  historico_recente: { data: string; acertos: number; total: number }[];
}

export interface FiltroQuestoes {
  disciplina_id?: string;
  assunto_id?: string;
  subassunto_id?: string;
  banca?: string;
  ano?: number | string;
  concurso_id?: string;
  tipo?: QuestaoTipo | "todos";
  dificuldade?: QuestaoDificuldade | "todos";
  status?: "todas" | "nao_resolvidas" | "acertadas" | "erradas" | "favoritas";
  origem?: OrigemQuestaoFiltro;
  termo_busca?: string;
  anulada?: boolean;
  desatualizada?: boolean;
  page?: number;
  pageSize?: number;
}

export interface ConcursoComDetalhes extends Concurso {
  cargos: Cargo[];
  editais: Edital[];
  disciplinas: Disciplina[];
}

// ── Tipos de Importação e Lote ──
export interface ImportItemError {
  linha: number;
  campo?: string;
  mensagem?: string;
  motivo?: string;
  dado?: unknown;
}

export interface ImportReport {
  totalLidos: number;
  totalLinhas?: number;
  sucesso: boolean;
  sucessos: number;
  inseridas?: number;
  duplicadasIgnoradas: number;
  duplicadasAtualizadas: number;
  invalidas: number;
  erros: ImportItemError[];
  tempoGastoMs: number;
}

export interface ImportOptions {
  politicaDuplicatas: "ignorar" | "atualizar" | "rejeitar_tudo";
  marcarComoIA?: boolean;
  modeloIA?: string;
  revisadaPorPadrao?: boolean;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasMore: boolean;
}
