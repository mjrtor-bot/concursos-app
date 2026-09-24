import {
  Concurso,
  Cargo,
  Edital,
  Disciplina,
  Assunto,
  Questao,
  RespostaUsuario,
  ItemCadernoErros,
  Simulado,
  SimuladoTentativa,
  EstatisticasGerais,
  FiltroQuestoes,
  Profile,
} from "@/types";
import {
  MOCK_CONCURSOS,
  MOCK_CARGOS,
  MOCK_EDITAIS,
  MOCK_DISCIPLINAS,
  MOCK_ASSUNTOS,
  MOCK_QUESTOES,
  MOCK_SIMULADOS,
  MOCK_PROFILE,
} from "@/data/mockData";

const STORAGE_KEYS = {
  PROFILE: "concursos_app_profile",
  RESPOSTAS: "concursos_app_respostas",
  CADERNO_ERROS: "concursos_app_caderno_erros",
  FAVORITOS: "concursos_app_favoritos",
  SIMULADOS_TENTATIVAS: "concursos_app_simulados_tentativas",
  CONCURSO_ATIVO: "concursos_app_concurso_ativo",
  ANOTACOES: "concursos_app_anotacoes",
  SIMULADOS_CUSTOM: "concursos_app_simulados_custom",
};

// Helper for safe client localStorage
function getFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from storage:`, error);
    return defaultValue;
  }
}

function setToStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing ${key} to storage:`, error);
  }
}

// Data service
export const DataService = {
  // ── Profile & Auth ──
  getProfile(): Profile {
    return getFromStorage<Profile>(STORAGE_KEYS.PROFILE, MOCK_PROFILE);
  },

  updateProfile(updates: Partial<Profile>): Profile {
    const current = this.getProfile();
    const updated = { ...current, ...updates };
    setToStorage(STORAGE_KEYS.PROFILE, updated);
    return updated;
  },

  // ── Concurso Ativo ──
  getConcursoAtivoId(): string {
    const profile = this.getProfile();
    return getFromStorage<string>(
      STORAGE_KEYS.CONCURSO_ATIVO,
      profile.concurso_alvo_id || MOCK_CONCURSOS[0].id
    );
  },

  setConcursoAtivoId(id: string): void {
    setToStorage(STORAGE_KEYS.CONCURSO_ATIVO, id);
    this.updateProfile({ concurso_alvo_id: id });
  },

  // ── Concursos ──
  getConcursos(): Concurso[] {
    return MOCK_CONCURSOS;
  },

  getConcursoById(id: string): Concurso | undefined {
    return MOCK_CONCURSOS.find((c) => c.id === id);
  },

  // ── Cargos ──
  getCargos(concursoId?: string): Cargo[] {
    if (concursoId) {
      return MOCK_CARGOS.filter((c) => c.concurso_id === concursoId);
    }
    return MOCK_CARGOS;
  },

  getCargoById(id: string): Cargo | undefined {
    return MOCK_CARGOS.find((c) => c.id === id);
  },

  // ── Editais ──
  getEditais(concursoId?: string): Edital[] {
    if (concursoId) {
      return MOCK_EDITAIS.filter((e) => e.concurso_id === concursoId);
    }
    return MOCK_EDITAIS;
  },

  // ── Disciplinas & Assuntos ──
  getDisciplinas(): Disciplina[] {
    return [...MOCK_DISCIPLINAS].sort((a, b) => a.ordem - b.ordem);
  },

  getDisciplinaById(id: string): Disciplina | undefined {
    return MOCK_DISCIPLINAS.find((d) => d.id === id);
  },

  getAssuntos(disciplinaId?: string): Assunto[] {
    if (disciplinaId) {
      return MOCK_ASSUNTOS.filter((a) => a.disciplina_id === disciplinaId).sort(
        (a, b) => a.ordem - b.ordem
      );
    }
    return [...MOCK_ASSUNTOS].sort((a, b) => a.ordem - b.ordem);
  },

  getAssuntoById(id: string): Assunto | undefined {
    return MOCK_ASSUNTOS.find((a) => a.id === id);
  },

  // ── Questões ──
  getQuestoes(filtro?: FiltroQuestoes): Questao[] {
    let result = [...MOCK_QUESTOES];
    const respostas = this.getRespostas();
    const favoritos = this.getFavoritos();

    if (!filtro) return result;

    if (filtro.disciplina_id) {
      result = result.filter((q) => q.disciplina_id === filtro.disciplina_id);
    }

    if (filtro.assunto_id) {
      result = result.filter((q) => q.assunto_id === filtro.assunto_id);
    }

    if (filtro.banca && filtro.banca !== "todas") {
      result = result.filter((q) =>
        q.banca.toLowerCase().includes(filtro.banca!.toLowerCase())
      );
    }

    if (filtro.ano && filtro.ano !== "todos") {
      result = result.filter((q) => q.ano === Number(filtro.ano));
    }

    if (filtro.concurso_id) {
      result = result.filter((q) => q.concurso_id === filtro.concurso_id);
    }

    if (filtro.tipo && filtro.tipo !== "todos") {
      result = result.filter((q) => q.tipo === filtro.tipo);
    }

    if (filtro.dificuldade && filtro.dificuldade !== "todos") {
      result = result.filter((q) => q.dificuldade === filtro.dificuldade);
    }

    if (filtro.termo_busca && filtro.termo_busca.trim() !== "") {
      const termo = filtro.termo_busca.toLowerCase();
      result = result.filter(
        (q) =>
          q.enunciado.toLowerCase().includes(termo) ||
          q.orgao.toLowerCase().includes(termo) ||
          (q.cargo && q.cargo.toLowerCase().includes(termo)) ||
          q.explicacao.toLowerCase().includes(termo)
      );
    }

    if (filtro.status && filtro.status !== "todas") {
      const respostasMap = new Map(respostas.map((r) => [r.questao_id, r]));

      if (filtro.status === "nao_resolvidas") {
        result = result.filter((q) => !respostasMap.has(q.id));
      } else if (filtro.status === "acertadas") {
        result = result.filter(
          (q) => respostasMap.has(q.id) && respostasMap.get(q.id)!.correta
        );
      } else if (filtro.status === "erradas") {
        result = result.filter(
          (q) => respostasMap.has(q.id) && !respostasMap.get(q.id)!.correta
        );
      } else if (filtro.status === "favoritas") {
        result = result.filter((q) => favoritos.includes(q.id));
      }
    }

    return result;
  },

  getQuestaoById(id: string): Questao | undefined {
    return MOCK_QUESTOES.find((q) => q.id === id);
  },

  // ── Respostas do Usuário ──
  getRespostas(): RespostaUsuario[] {
    return getFromStorage<RespostaUsuario[]>(STORAGE_KEYS.RESPOSTAS, []);
  },

  getRespostaByQuestaoId(questaoId: string): RespostaUsuario | undefined {
    const respostas = this.getRespostas();
    // Return latest answer for this question
    return respostas
      .filter((r) => r.questao_id === questaoId)
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )[0];
  },

  registrarResposta(
    questaoId: string,
    alternativaId: string,
    tempoRespostaSegundos: number = 0
  ): { resposta: RespostaUsuario; correta: boolean; questao: Questao } {
    const questao = this.getQuestaoById(questaoId);
    if (!questao) throw new Error(`Questão ${questaoId} não encontrada`);

    let correta = false;
    if (questao.tipo === "multipla_escolha") {
      const alt = questao.alternativas.find((a) => a.id === alternativaId);
      correta = Boolean(alt?.correta);
    } else {
      // certo_errado
      const alt = questao.alternativas.find((a) => a.id === alternativaId);
      correta = Boolean(alt?.correta);
    }

    const profile = this.getProfile();
    const novaResposta: RespostaUsuario = {
      id: `resp-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      usuario_id: profile.id,
      questao_id: questaoId,
      alternativa_id: alternativaId,
      correta,
      tempo_resposta: tempoRespostaSegundos,
      created_at: new Date().toISOString(),
    };

    const respostas = this.getRespostas();
    respostas.push(novaResposta);
    setToStorage(STORAGE_KEYS.RESPOSTAS, respostas);

    // Update Caderno de Erros
    if (!correta) {
      this.adicionarAoCadernoErros(questaoId);
    } else {
      // If user got it right now and it was in error notebook, check if we should mark reviewed
      this.marcarErroComoRevisado(questaoId);
    }

    return { resposta: novaResposta, correta, questao };
  },

  // ── Caderno de Erros ──
  getCadernoErros(): ItemCadernoErros[] {
    const itens = getFromStorage<ItemCadernoErros[]>(
      STORAGE_KEYS.CADERNO_ERROS,
      []
    );
    // Enrich with question object
    return itens
      .map((item) => ({
        ...item,
        questao: this.getQuestaoById(item.questao_id),
      }))
      .filter((item) => item.questao !== undefined);
  },

  adicionarAoCadernoErros(questaoId: string): void {
    const itens = getFromStorage<ItemCadernoErros[]>(
      STORAGE_KEYS.CADERNO_ERROS,
      []
    );
    const existingIndex = itens.findIndex((i) => i.questao_id === questaoId);
    const profile = this.getProfile();

    if (existingIndex >= 0) {
      itens[existingIndex].total_erros += 1;
      itens[existingIndex].ultimo_erro_em = new Date().toISOString();
      itens[existingIndex].revisado = false;
    } else {
      itens.push({
        id: `err-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        usuario_id: profile.id,
        questao_id: questaoId,
        total_erros: 1,
        ultimo_erro_em: new Date().toISOString(),
        revisado: false,
      });
    }

    setToStorage(STORAGE_KEYS.CADERNO_ERROS, itens);
  },

  marcarErroComoRevisado(questaoId: string): void {
    const itens = getFromStorage<ItemCadernoErros[]>(
      STORAGE_KEYS.CADERNO_ERROS,
      []
    );
    const existing = itens.find((i) => i.questao_id === questaoId);
    if (existing) {
      existing.revisado = true;
      setToStorage(STORAGE_KEYS.CADERNO_ERROS, itens);
    }
  },

  removerDoCadernoErros(questaoId: string): void {
    const itens = getFromStorage<ItemCadernoErros[]>(
      STORAGE_KEYS.CADERNO_ERROS,
      []
    );
    const filtrados = itens.filter((i) => i.questao_id !== questaoId);
    setToStorage(STORAGE_KEYS.CADERNO_ERROS, filtrados);
  },

  salvarAnotacaoErro(questaoId: string, anotacao: string): void {
    const itens = getFromStorage<ItemCadernoErros[]>(
      STORAGE_KEYS.CADERNO_ERROS,
      []
    );
    const item = itens.find((i) => i.questao_id === questaoId);
    if (item) {
      item.anotacao = anotacao;
      setToStorage(STORAGE_KEYS.CADERNO_ERROS, itens);
    }
  },

  // ── Favoritos ──
  getFavoritos(): string[] {
    return getFromStorage<string[]>(STORAGE_KEYS.FAVORITOS, []);
  },

  toggleFavorito(questaoId: string): boolean {
    const favs = this.getFavoritos();
    const exists = favs.includes(questaoId);
    let updated: string[];

    if (exists) {
      updated = favs.filter((id) => id !== questaoId);
    } else {
      updated = [...favs, questaoId];
    }

    setToStorage(STORAGE_KEYS.FAVORITOS, updated);
    return !exists;
  },

  isFavorita(questaoId: string): boolean {
    return this.getFavoritos().includes(questaoId);
  },

  // ── Simulados ──
  getSimulados(): Simulado[] {
    const custom = getFromStorage<Simulado[]>(STORAGE_KEYS.SIMULADOS_CUSTOM, []);
    return [...custom, ...MOCK_SIMULADOS];
  },

  getSimuladoById(id: string): Simulado | undefined {
    return this.getSimulados().find((s) => s.id === id);
  },

  salvarSimulado(simulado: Simulado): void {
    const custom = getFromStorage<Simulado[]>(STORAGE_KEYS.SIMULADOS_CUSTOM, []);
    const index = custom.findIndex((s) => s.id === simulado.id);
    if (index >= 0) {
      custom[index] = simulado;
    } else {
      custom.unshift(simulado);
    }
    setToStorage(STORAGE_KEYS.SIMULADOS_CUSTOM, custom);
  },

  // ── Anotações de Estudo Gerais ──
  getAnotacoes(): Record<string, string> {
    return getFromStorage<Record<string, string>>(STORAGE_KEYS.ANOTACOES, {});
  },

  getAnotacaoQuestao(questaoId: string): string {
    const notas = this.getAnotacoes();
    return notas[questaoId] || "";
  },

  salvarAnotacaoQuestao(questaoId: string, texto: string): void {
    const notas = this.getAnotacoes();
    if (!texto.trim()) {
      delete notas[questaoId];
    } else {
      notas[questaoId] = texto;
    }
    setToStorage(STORAGE_KEYS.ANOTACOES, notas);
  },

  getTentativasSimulado(): SimuladoTentativa[] {
    return getFromStorage<SimuladoTentativa[]>(
      STORAGE_KEYS.SIMULADOS_TENTATIVAS,
      []
    );
  },

  getTentativaById(id: string): SimuladoTentativa | undefined {
    const tentativas = this.getTentativasSimulado();
    return tentativas.find((t) => t.id === id);
  },

  salvarTentativaSimulado(tentativa: SimuladoTentativa): void {
    const tentativas = this.getTentativasSimulado();
    const index = tentativas.findIndex((t) => t.id === tentativa.id);

    if (index >= 0) {
      tentativas[index] = tentativa;
    } else {
      tentativas.push(tentativa);
    }

    setToStorage(STORAGE_KEYS.SIMULADOS_TENTATIVAS, tentativas);
  },

  // ── Estatísticas Dinâmicas ──
  getEstatisticas(): EstatisticasGerais {
    const respostas = this.getRespostas();
    const profile = this.getProfile();
    const cadernoErros = this.getCadernoErros();
    const simuladosTentativas = this.getTentativasSimulado().filter(
      (t) => t.status === "concluido"
    );

    const totalRespondidas = respostas.length;
    const totalAcertos = respostas.filter((r) => r.correta).length;
    const totalErros = totalRespondidas - totalAcertos;
    const taxaAcertoGeral =
      totalRespondidas > 0 ? Math.round((totalAcertos / totalRespondidas) * 100) : 0;

    const tempoTotal = respostas.reduce((acc, r) => acc + (r.tempo_resposta || 60), 0);
    const tempoMedio =
      totalRespondidas > 0 ? Math.round(tempoTotal / totalRespondidas) : 65;

    // Daily count today
    const hojeStr = new Date().toISOString().split("T")[0];
    const questoesHoje = respostas.filter(
      (r) => r.created_at && r.created_at.startsWith(hojeStr)
    ).length;

    // Per discipline
    const disciplinas = this.getDisciplinas();
    const porDisciplina = disciplinas
      .map((disc) => {
        const questoesDisc = MOCK_QUESTOES.filter((q) => q.disciplina_id === disc.id);
        const questoesIds = new Set(questoesDisc.map((q) => q.id));
        const respostasDisc = respostas.filter((r) => questoesIds.has(r.questao_id));

        const total = respostasDisc.length;
        const acertos = respostasDisc.filter((r) => r.correta).length;
        const erros = total - acertos;
        const percentual = total > 0 ? Math.round((acertos / total) * 100) : 0;
        const tempoDisc = respostasDisc.reduce(
          (acc, r) => acc + (r.tempo_resposta || 60),
          0
        );

        return {
          disciplina_id: disc.id,
          disciplina_nome: disc.nome,
          disciplina_cor: disc.cor,
          total,
          acertos,
          erros,
          percentual,
          tempo_medio_segundos: total > 0 ? Math.round(tempoDisc / total) : 60,
        };
      })
      .filter((d) => d.total > 0 || true); // Include all disciplines for radar/charts

    // Per Banca
    const bancas = ["FGV", "Cebraspe (CESPE)", "Fundação Cesgranrio", "Fundação Vunesp", "FCC - Fundação Carlos Chagas"];
    const porBanca = bancas.map((banca) => {
      const questoesBanca = MOCK_QUESTOES.filter((q) => q.banca === banca);
      const qIds = new Set(questoesBanca.map((q) => q.id));
      const respostasBanca = respostas.filter((r) => qIds.has(r.questao_id));
      const total = respostasBanca.length;
      const acertos = respostasBanca.filter((r) => r.correta).length;
      const percentual = total > 0 ? Math.round((acertos / total) * 100) : 0;
      return { banca, total, acertos, percentual };
    });

    // Recent 7 days history
    const historicoRecente: { data: string; acertos: number; total: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dataIso = d.toISOString().split("T")[0];
      const diaSemana = d.toLocaleDateString("pt-BR", { weekday: "short" });

      const respDia = respostas.filter((r) => r.created_at.startsWith(dataIso));
      historicoRecente.push({
        data: diaSemana.replace(".", ""),
        acertos: respDia.filter((r) => r.correta).length,
        total: respDia.length,
      });
    }

    const mediaSimulados =
      simuladosTentativas.length > 0
        ? Math.round(
            simuladosTentativas.reduce((acc, t) => acc + t.percentual, 0) /
              simuladosTentativas.length
          )
        : 0;

    return {
      total_respondidas: totalRespondidas,
      total_acertos: totalAcertos,
      total_erros: totalErros,
      taxa_acerto_geral: taxaAcertoGeral,
      tempo_medio_questao_segundos: tempoMedio,
      sequencia_dias: Math.max(1, Math.min(7, totalRespondidas > 0 ? 4 : 1)),
      questoes_hoje: questoesHoje,
      meta_diaria: profile.meta_diaria_questoes || 30,
      simulados_concluidos: simuladosTentativas.length,
      media_simulados: mediaSimulados,
      total_no_caderno_erros: cadernoErros.length,
      erros_revisados: cadernoErros.filter((e) => e.revisado).length,
      por_disciplina: porDisciplina,
      por_banca: porBanca,
      historico_recente: historicoRecente,
    };
  },

  // ── Limpeza e inicialização limpa ──
  inicializarDadosDemonstracaoSeNecessario(): void {
    if (typeof window === "undefined") return;

    // Purga automática de respostas mock/seed antigas do navegador do usuário
    try {
      const respostasRaw = window.localStorage.getItem(STORAGE_KEYS.RESPOSTAS);
      if (respostasRaw) {
        const respostas = JSON.parse(respostasRaw) as RespostaUsuario[];
        const respostasLimpa = respostas.filter(
          (r) => !r.id.startsWith("seed-") && r.usuario_id !== "user-demo-1"
        );
        if (respostasLimpa.length !== respostas.length) {
          window.localStorage.setItem(
            STORAGE_KEYS.RESPOSTAS,
            JSON.stringify(respostasLimpa)
          );
        }
      }

      const errosRaw = window.localStorage.getItem(STORAGE_KEYS.CADERNO_ERROS);
      if (errosRaw) {
        const erros = JSON.parse(errosRaw) as ItemCadernoErros[];
        const errosLimpos = erros.filter(
          (e) => !e.id.startsWith("err-seed-") && e.usuario_id !== "user-demo-1"
        );
        if (errosLimpos.length !== erros.length) {
          window.localStorage.setItem(
            STORAGE_KEYS.CADERNO_ERROS,
            JSON.stringify(errosLimpos)
          );
        }
      }
    } catch {
      // Ignorar erros de parse se houver
    }
  },

  resetarDadosParaPadrao(): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEYS.RESPOSTAS);
    window.localStorage.removeItem(STORAGE_KEYS.CADERNO_ERROS);
    window.localStorage.removeItem(STORAGE_KEYS.FAVORITOS);
    window.localStorage.removeItem(STORAGE_KEYS.SIMULADOS_TENTATIVAS);
    window.localStorage.removeItem(STORAGE_KEYS.PROFILE);
    window.localStorage.removeItem(STORAGE_KEYS.CONCURSO_ATIVO);
    window.localStorage.removeItem(STORAGE_KEYS.ANOTACOES);
    window.localStorage.removeItem(STORAGE_KEYS.SIMULADOS_CUSTOM);
  },

  // Reset total: remove todas as respostas mas mantém perfil
  resetarRespostas(): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEYS.RESPOSTAS);
    window.localStorage.removeItem(STORAGE_KEYS.CADERNO_ERROS);
    window.localStorage.removeItem(STORAGE_KEYS.FAVORITOS);
  },

  // Inicializar sem respostas seed (para começar do zero)
  inicializarSemRespostas(): void {
    if (typeof window === "undefined") return;
    const respostasExistentes = this.getRespostas();
    if (respostasExistentes.length === 0) {
      setToStorage(STORAGE_KEYS.PROFILE, MOCK_PROFILE);
    }
  },
};
