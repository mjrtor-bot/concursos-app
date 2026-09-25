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

export type QuestaoAlternativa = Alternativa;

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
  cargo?: string | null;
  disciplina?: Disciplina | string;
  assunto?: Assunto | string;
  explicacao: string;
  texto_apoio?: string | null;
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

// ── Tipos de Mentoria Inteligente (Release 1 - Fundação) ──
export type MentoriaNivel = "iniciante" | "intermediario" | "avancado";
export type MentoriaHorario = "manha" | "tarde" | "noite" | "madrugada" | "flexivel";
export type MentoriaPrioridade = "equilibrado" | "teoria" | "questoes" | "revisao";
export type MentoriaTarefaTipo = "TEORIA" | "QUESTOES" | "REVISAO" | "SIMULADO" | "CADERNO_ERROS";
export type MentoriaTarefaPrioridade = "baixa" | "media" | "alta" | "critica";
export type MentoriaTarefaStatus = "pendente" | "em_andamento" | "concluida" | "adiada" | "cancelada";
export type MentoriaRevisaoStatus = "pendente" | "concluida" | "atrasada" | "cancelada";
export type MentoriaRevisaoRetencao = "baixo" | "medio" | "alto" | "excelente";

export interface MentoriaPerfil {
  id: string;
  usuario_id: string;
  concurso_id?: string | null;
  concurso_nome: string;
  cargo_id?: string | null;
  cargo_nome: string;
  data_prova?: string | null;
  nivel: MentoriaNivel;
  nivel_calculado?: MentoriaNivelCalculado;
  meta_horas_semana: number;
  horario_preferido: MentoriaHorario;
  duracao_bloco_minutos: number;
  quantidade_questoes_bloco: number;
  dias_descanso: string[];
  prioridade_estudo: MentoriaPrioridade;
  diagnostico_concluido?: boolean;
  diagnostico_data?: string | null;
  diagnostico_id?: string | null;
  score_geral?: number;
  ativo: boolean;
  created_at: string;
  updated_at: string;
}

export interface MentoriaDisponibilidade {
  id: string;
  usuario_id: string;
  dia_semana: number; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  minutos_disponiveis: number;
  horario_preferido?: MentoriaHorario;
  created_at: string;
  updated_at: string;
}

export interface MentoriaEditalTopico {
  id: string;
  usuario_id: string;
  disciplina_id: string;
  assunto_id: string;
  subassunto_id?: string | null;
  peso: "baixo" | "medio" | "alto" | "critico";
  incidencia: number;
  prioridade_manual?: "baixa" | "media" | "alta" | "critica";
  estudado: boolean;
  percentual_dominio: number;
  status: "nao_iniciado" | "estudando" | "revisando" | "dominado";
  ultima_revisao?: string | null;
  proxima_revisao?: string | null;
  questoes_respondidas: number;
  taxa_acerto: number;
  created_at: string;
  updated_at: string;
}

export interface MentoriaPlano {
  id: string;
  usuario_id: string;
  data_inicio: string;
  data_fim?: string | null;
  status: "ativo" | "concluido" | "arquivado";
  versao: number;
  meta_semanal_minutos: number;
  minutos_concluidos: number;
  created_at: string;
  updated_at: string;
}

export interface MentoriaTarefa {
  id: string;
  plano_id?: string | null;
  usuario_id: string;
  data: string; // YYYY-MM-DD
  ordem: number;
  tipo: MentoriaTarefaTipo;
  disciplina_id?: string | null;
  assunto_id?: string | null;
  subassunto_id?: string | null;
  titulo: string;
  duracao_prevista_minutos: number;
  duracao_real_segundos: number;
  quantidade_questoes: number;
  questoes_feitas: number;
  questoes_acertos: number;
  prioridade: MentoriaTarefaPrioridade;
  motivo_recomendacao?: string | null;
  status: MentoriaTarefaStatus;
  iniciado_em?: string | null;
  concluido_em?: string | null;
  created_at: string;
  updated_at: string;
}

export interface MentoriaSessaoEstudo {
  id: string;
  usuario_id: string;
  tarefa_id?: string | null;
  inicio: string;
  fim?: string | null;
  segundos_liquidos: number;
  pausas: number;
  segundos_pausa: number;
  observacoes?: string | null;
  created_at: string;
}

export interface MentoriaRevisao {
  id: string;
  usuario_id: string;
  disciplina_id: string;
  assunto_id: string;
  subassunto_id?: string | null;
  origem: "estudo_diario" | "caderno_erros" | "simulado" | "manual";
  data_estudo: string;
  proxima_revisao: string;
  intervalo_dias: number;
  etapa: number;
  status: MentoriaRevisaoStatus;
  nivel_retencao?: MentoriaRevisaoRetencao;
  concluida_em?: string | null;
  created_at: string;
  updated_at: string;
}

export interface MentoriaDiaProgresso {
  dia_semana: number; // 0=Dom..6=Sab
  nome_curto: string; // "Seg", "Ter", etc.
  minutos_meta: number;
  minutos_estudados: number;
  concluido: boolean;
}

export interface MentoriaDashboardStats {
  tem_perfil: boolean;
  perfil: MentoriaPerfil | null;
  dias_restantes_prova: number | null;
  meta_diaria_minutos: number;
  meta_semanal_minutos: number;
  minutos_estudados_semana: number;
  questoes_resolvidas_semana: number;
  taxa_acerto_semana: number;
  revisoes_pendentes_count: number;
  cobertura_edital_percentual: number;
  topicos_estudados_count: number;
  topicos_total_count: number;
  progresso_semana: MentoriaDiaProgresso[];
}

// ── Tipos de Mentoria Diagnóstico e Nivelamento (Release 2) ──
export type MentoriaAutoavaliacao = "nunca_estudei" | "basico" | "intermediario" | "avancado";
export type MentoriaNivelCalculado = "iniciante" | "basico" | "intermediario" | "avancado";
export type MentoriaDiagnosticoStatus = "em_andamento" | "concluido" | "abandonado";

export interface MentoriaDiagnosticoHistorico {
  ja_estuda: boolean;
  tempo_estudo?: string; // "menos_6_meses" | "6_12_meses" | "1_2_anos" | "mais_2_anos"
  ja_aprovado: boolean;
  horas_semanais_atuais: number;
  preferencia_estudo: "teoria" | "questoes" | "equilibrado";
  maiores_dificuldades: string[];
  observacoes?: string;
}

export interface MentoriaDiagnosticoDisciplina {
  id: string;
  diagnostico_id: string;
  usuario_id: string;
  disciplina_id?: string | null;
  disciplina_nome: string;
  autoavaliacao: MentoriaAutoavaliacao;
  questoes_ofertadas: number;
  questoes_respondidas: number;
  acertos: number;
  percentual_acerto: number;
  tempo_medio_segundos: number;
  historico_previo_questoes: number;
  historico_previo_acertos: number;
  score_final: number;
  nivel_calculado: MentoriaNivelCalculado;
  created_at?: string;
  updated_at?: string;
}

export interface MentoriaDiagnosticoResposta {
  id?: string;
  diagnostico_id: string;
  usuario_id: string;
  disciplina_id?: string | null;
  disciplina_nome: string;
  questao_id: string;
  alternativa_id: string;
  correta: boolean;
  tempo_segundos: number;
  created_at?: string;
}

export interface MentoriaDiagnostico {
  id: string;
  usuario_id: string;
  concurso_nome?: string | null;
  cargo_nome?: string | null;
  iniciado_em: string;
  concluido_em?: string | null;
  status: MentoriaDiagnosticoStatus;
  historico_dados: MentoriaDiagnosticoHistorico;
  score_geral: number;
  nivel_geral: MentoriaNivelCalculado;
  resumo_resultado?: {
    total_questoes: number;
    total_acertos: number;
    taxa_acerto_geral: number;
    tempo_medio_questao: number;
    disciplinas_fortes: string[];
    disciplinas_criticas: string[];
    recomendacoes: string[];
  };
  disciplinas?: MentoriaDiagnosticoDisciplina[];
  created_at?: string;
  updated_at?: string;
}

// ── Tipos de Ciclo de Estudos Adaptativo (Release 3) ──
export type MentoriaCicloStatusSessao = "concluida" | "parcial" | "abandonada";

export interface MentoriaCicloItem {
  id: string;
  ordem_bloco: number; // 1, 2, 3, ..., N
  disciplina_id: string;
  disciplina_nome: string;
  tipo: MentoriaTarefaTipo; // "TEORIA" | "QUESTOES" | "REVISAO"
  duracao_minutos: number;
  quantidade_questoes_sugerida: number;
  prioridade_score: number; // 0-100 normalizado e clamped
  prioridade_nivel: MentoriaTarefaPrioridade; // "baixa" | "media" | "alta" | "critica"
  motivo_explicabilidade: string[]; // Fatores matemáticos e diagnósticos
  concluido?: boolean;
}

export interface MentoriaCicloDisciplinaPrioridade {
  disciplina_id: string;
  disciplina_nome: string;
  score_diagnostico: number; // 0-100
  nivel_diagnostico: MentoriaNivelCalculado;
  peso_base: number; // peso do edital ou padrão (25..100)
  prioridade_score: number; // 0..100
  prioridade_nivel: MentoriaTarefaPrioridade;
  minutos_semanais: number;
  blocos_semanais: number;
  porcentagem_tempo: number;
  motivo_explicabilidade: string[];
}

export interface MentoriaCicloPlanoCompleto {
  plano_id: string;
  usuario_id: string;
  versao: number;
  data_inicio: string;
  meta_semanal_minutos: number;
  minutos_concluidos: number;
  duracao_bloco_minutos: number;
  total_blocos_ciclo: number;
  posicao_atual_index: number; // 0 .. total_blocos_ciclo - 1
  ciclo_concluidos_voltas: number;
  disciplinas_prioridades: MentoriaCicloDisciplinaPrioridade[];
  blocos: MentoriaCicloItem[];
  bloco_atual: MentoriaCicloItem | null;
  proximo_bloco: MentoriaCicloItem | null;
  blocos_restantes_na_volta: number;
}

export interface MentoriaCicloCalculoInput {
  usuario_id: string;
  duracao_bloco_minutos: number;
  quantidade_questoes_bloco: number;
  prioridade_estudo?: MentoriaPrioridade; // "equilibrado" | "teoria" | "questoes" | "revisao"
  disponibilidade: MentoriaDisponibilidade[];
  diagnostico_disciplinas?: MentoriaDiagnosticoDisciplina[];
  disciplinas_edital?: { id: string; nome: string; peso?: "baixo" | "medio" | "alto" | "critico" }[];
}

export interface MentoriaRegistroSessaoInput {
  usuario_id: string;
  plano_id: string;
  tarefa_id?: string | null;
  bloco_numero?: number;
  bloco_ordem?: number;
  disciplina_id: string;
  disciplina_nome?: string;
  tipo: MentoriaTarefaTipo;
  segundos_liquidos?: number;
  duracao_liquida_segundos?: number;
  duracao_prevista_minutos?: number;
  duracao_planejada_minutos?: number;
  pausas?: number;
  pausas_quantidade?: number;
  segundos_pausa?: number;
  pausas_segundos_total?: number;
  observacoes?: string;
  questoes_feitas?: number;
  questoes_respondidas?: number;
  questoes_acertos?: number;
  questoes_acertadas?: number;
}

// ----------------------------------------------------
// RELEASE 4 - ESTUDO GUIADO + BANCO DE QUESTÕES + ERROS
// ----------------------------------------------------

export interface MentoriaQuestoesSelecaoOpcoes {
  usuarioId: string;
  disciplinaId: string;
  disciplinaNome?: string;
  quantidade?: number;
  nivelUsuario?: MentoriaNivelCalculado;
  tipoBloco?: MentoriaTarefaTipo;
  assuntoId?: string;
  apenasErros?: boolean;
}

export interface MentoriaQuestoesSelecaoResultado {
  questoes: Questao[];
  totalDisponivel: number;
  motivoSelecao: string;
  topicosCobertos: string[];
  estatisticasPool: {
    totalNaoRespondidas: number;
    totalErrosAnteriores: number;
    totalAcertosAnteriores: number;
  };
}

export interface MentoriaTopicoFraco {
  assunto_id: string;
  assunto_nome?: string;
  disciplina_id: string;
  total_respostas: number;
  total_erros: number;
  taxa_erro: number;
  percentual_acerto: number;
}

export interface MentoriaRevisaoItem {
  id: string;
  usuario_id: string;
  questao_id?: string;
  disciplina_id?: string;
  assunto_id?: string;
  origem: "caderno_erros" | "sessao_estudo" | "diagnostico" | "manual";
  etapa: number;
  intervalo_dias: number;
  proxima_revisao: string;
  status: "pendente" | "concluida" | "atrasada";
  questao?: Questao;
  created_at?: string;
  updated_at?: string;
}




