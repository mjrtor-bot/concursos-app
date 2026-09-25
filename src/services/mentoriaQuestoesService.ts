import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  Questao,
  QuestaoAlternativa,
  MentoriaNivelCalculado,
  MentoriaTarefaTipo,
  MentoriaQuestoesSelecaoOpcoes,
  MentoriaQuestoesSelecaoResultado,
  MentoriaTopicoFraco,
  MentoriaRevisaoItem,
  RespostaUsuario,
  ItemCadernoErros,
} from "@/types";
import { DataService } from "./dataService";

interface QuestaoCandidataScore {
  questao: Questao;
  scoreTotal: number;
  pesos: {
    naoRespondida: number;
    erroAnterior: number;
    topicoFraco: number;
    dificuldade: number;
    penalidadeRecencia: number;
  };
  motivos: string[];
}

export class MentoriaQuestoesService {
  private static getClient() {
    if (!isSupabaseConfigured) return null;
    return createClient();
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── 1. MOTOR MATEMÁTICO DETERMINÍSTICO DE SELEÇÃO ─────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  /**
   * Calcula o score de relevância de uma questão para o aluno específico.
   *
   * Pesos:
   * - Não respondida: +40 pts
   * - Erro anterior / No Caderno de Erros: +30 pts
   * - Tópico fraco (taxa de erro > 40%): +20 pts
   * - Adequação à dificuldade diagnóstica: +10 pts
   * - Penalidade de recência: -100 (< 24h), -50 (24h-48h)
   */
  static calcularScoreQuestao(
    questao: Questao,
    historicoRespostas: RespostaUsuario[],
    idsCadernoErros: Set<string>,
    idsTopicosFracos: Set<string>,
    nivelUsuario: MentoriaNivelCalculado = "intermediario"
  ): QuestaoCandidataScore {
    const respostasDestaQuestao = historicoRespostas
      .filter((r) => r.questao_id === questao.id)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    const ultimaResposta = respostasDestaQuestao[0];
    const nuncaRespondida = respostasDestaQuestao.length === 0;

    let pesoNaoRespondida = 0;
    let pesoErroAnterior = 0;
    let pesoTopicoFraco = 0;
    let pesoDificuldade = 0;
    let penalidadeRecencia = 0;
    const motivos: string[] = [];

    // 1. Ineditismo / Não respondida (+40)
    if (nuncaRespondida) {
      pesoNaoRespondida = 40;
      motivos.push("Questão inédita (+40 pts)");
    }

    // 2. Erro anterior / Caderno de Erros (+30)
    const estaNoCaderno = idsCadernoErros.has(questao.id);
    const errouUltima = ultimaResposta && !ultimaResposta.correta;
    if (estaNoCaderno || errouUltima) {
      pesoErroAnterior = 30;
      motivos.push("Erro anterior relevante (+30 pts)");
    }

    // 3. Tópico com deficiência / Tópico Fraco (+20)
    if (questao.assunto_id && idsTopicosFracos.has(questao.assunto_id)) {
      pesoTopicoFraco = 20;
      motivos.push("Assunto de baixa taxa de acerto (+20 pts)");
    }

    // 4. Calibragem de Dificuldade conforme Nível Diagnóstico (+10)
    const dif = (questao.dificuldade || "medio").toLowerCase();
    if (nivelUsuario === "iniciante" || nivelUsuario === "basico") {
      if (dif === "facil") {
        pesoDificuldade = 10;
        motivos.push("Dificuldade fácil para nível básico (+10 pts)");
      } else if (dif === "medio") {
        pesoDificuldade = 5;
        motivos.push("Dificuldade média aceitável (+5 pts)");
      } else if (dif === "dificil") {
        pesoDificuldade = -5;
        motivos.push("Dificuldade avançada atenuada (-5 pts)");
      }
    } else if (nivelUsuario === "avancado") {
      if (dif === "dificil") {
        pesoDificuldade = 10;
        motivos.push("Dificuldade alta calibrada para nível avançado (+10 pts)");
      } else if (dif === "medio") {
        pesoDificuldade = 8;
        motivos.push("Dificuldade média desafiadora (+8 pts)");
      } else if (dif === "facil") {
        pesoDificuldade = -5;
        motivos.push("Dificuldade básica atenuada (-5 pts)");
      }
    } else {
      // Intermediário (default)
      if (dif === "medio") {
        pesoDificuldade = 10;
        motivos.push("Dificuldade média calibrada (+10 pts)");
      } else if (dif === "facil") {
        pesoDificuldade = 5;
        motivos.push("Dificuldade fácil como aquecimento (+5 pts)");
      } else if (dif === "dificil") {
        pesoDificuldade = 5;
        motivos.push("Dificuldade alta como desafio (+5 pts)");
      }
    }

    // 5. Janela de Recência / Penalidade de Repetição Imediata
    if (ultimaResposta && ultimaResposta.created_at) {
      const dataResp = new Date(ultimaResposta.created_at).getTime();
      const horasAtras = (Date.now() - dataResp) / (1000 * 60 * 60);

      if (horasAtras < 24) {
        penalidadeRecencia = -100;
        motivos.push("Respondida há menos de 24h (-100 pts de recência)");
      } else if (horasAtras < 48) {
        penalidadeRecencia = -50;
        motivos.push("Respondida há menos de 48h (-50 pts de recência)");
      }
    }

    const scoreTotal =
      pesoNaoRespondida +
      pesoErroAnterior +
      pesoTopicoFraco +
      pesoDificuldade +
      penalidadeRecencia;

    return {
      questao,
      scoreTotal,
      pesos: {
        naoRespondida: pesoNaoRespondida,
        erroAnterior: pesoErroAnterior,
        topicoFraco: pesoTopicoFraco,
        dificuldade: pesoDificuldade,
        penalidadeRecencia,
      },
      motivos,
    };
  }

  /**
   * Diversificação e Distribuição Round-Robin por Tópicos para evitar Overfitting.
   */
  static diversificarQuestoesPorTopico(
    candidatosScored: QuestaoCandidataScore[],
    quantidadeDesejada: number
  ): Questao[] {
    if (candidatosScored.length <= quantidadeDesejada) {
      return candidatosScored.map((c) => c.questao);
    }

    // Agrupa por assunto_id (ou 'sem_assunto')
    const grupos = new Map<string, QuestaoCandidataScore[]>();
    for (const item of candidatosScored) {
      const chave = item.questao.assunto_id || "geral";
      if (!grupos.has(chave)) {
        grupos.set(chave, []);
      }
      grupos.get(chave)!.push(item);
    }

    // Ordena cada balde pelo score decrescente
    for (const [_, lista] of grupos) {
      lista.sort((a, b) => b.scoreTotal - a.scoreTotal);
    }

    const selecionadas: Questao[] = [];
    const keys = Array.from(grupos.keys());
    let rodada = 0;

    // Round-robin entre os tópicos disponíveis
    while (selecionadas.length < quantidadeDesejada && grupos.size > 0) {
      const chave = keys[rodada % keys.length];
      const lista = grupos.get(chave);

      if (lista && lista.length > 0) {
        const item = lista.shift()!;
        selecionadas.push(item.questao);
        if (lista.length === 0) {
          grupos.delete(chave);
        }
      }

      rodada++;
      if (rodada > 1000) break; // Trava de segurança
    }

    // Se ainda faltar, preenche com as melhores remanescentes
    if (selecionadas.length < quantidadeDesejada) {
      const restantes = candidatosScored.filter(
        (c) => !selecionadas.some((s) => s.id === c.questao.id)
      );
      restantes.sort((a, b) => b.scoreTotal - a.scoreTotal);
      for (const r of restantes) {
        if (selecionadas.length >= quantidadeDesejada) break;
        selecionadas.push(r.questao);
      }
    }

    return selecionadas;
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── 2. SELEÇÃO DE QUESTÕES PARA O BLOCO DO CICLO ──────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  /**
   * Seleciona questões reais e balanceadas para um bloco de estudo da Mentoria.
   */
  static async selecionarQuestoesParaBloco(
    opcoes: MentoriaQuestoesSelecaoOpcoes
  ): Promise<MentoriaQuestoesSelecaoResultado> {
    const {
      usuarioId,
      disciplinaId,
      disciplinaNome,
      quantidade = 10,
      nivelUsuario = "intermediario",
      tipoBloco = "QUESTOES",
      assuntoId,
      apenasErros = false,
    } = opcoes;

    const supabase = this.getClient();

    // 1. Obter questões candidatas da disciplina
    let questoesCandidatas: Questao[] = [];

    if (supabase) {
      try {
        let query = supabase
          .from("questoes")
          .select(
            `
            id,
            enunciado,
            ano,
            tipo,
            dificuldade,
            explicacao,
            is_autoral_ia,
            anulada,
            desatualizada,
            disciplina_id,
            assunto_id,
            subassunto_id,
            banca_id,
            orgao_id,
            cargo_id,
            questoes_alternativas (
              id,
              texto,
              correta,
              ordem,
              letra
            )
          `
          )
          .eq("anulada", false)
          .eq("desatualizada", false);

        if (disciplinaId && !disciplinaId.startsWith("disc-")) {
          query = query.eq("disciplina_id", disciplinaId);
        }

        if (assuntoId && !assuntoId.startsWith("ass-")) {
          query = query.eq("assunto_id", assuntoId);
        }

        const { data, error } = await query.limit(200);

        if (!error && data && data.length > 0) {
          questoesCandidatas = data.map((q: any) => ({
            id: q.id,
            enunciado: q.enunciado,
            ano: q.ano || 2024,
            tipo: q.tipo || "multipla_escolha",
            dificuldade: q.dificuldade || "medio",
            explicacao: q.explicacao || "",
            is_autoral_ia: Boolean(q.is_autoral_ia),
            anulada: Boolean(q.anulada),
            desatualizada: Boolean(q.desatualizada),
            disciplina_id: q.disciplina_id,
            assunto_id: q.assunto_id,
            subassunto_id: q.subassunto_id,
            banca: "Banca Oficial",
            orgao: "Órgão Oficial",
            cargo: "Cargo",
            disciplina: disciplinaNome || "Disciplina",
            assunto: "Assunto",
            created_at: q.created_at || new Date().toISOString(),
            alternativas: (q.questoes_alternativas || []).map((alt: any) => ({
              id: alt.id,
              texto: alt.texto,
              correta: Boolean(alt.correta),
              letra: alt.letra,
              ordem: alt.ordem,
            })),
          }));
        }
      } catch (err) {
        console.warn("[MentoriaQuestoesService] Erro ao buscar questões no Supabase:", err);
      }
    }

    // Fallback para DataService se Supabase não retornou dados
    if (questoesCandidatas.length === 0) {
      const todas = DataService.getTodasQuestoes();
      questoesCandidatas = todas.filter((q) => {
        if (q.anulada || q.desatualizada) return false;
        if (disciplinaId && q.disciplina_id !== disciplinaId) return false;
        if (assuntoId && q.assunto_id !== assuntoId) return false;
        return true;
      });
    }

    // Se ainda estiver vazio e disciplinaId tiver slug/prefixo genérico
    if (questoesCandidatas.length === 0) {
      const todas = DataService.getTodasQuestoes();
      questoesCandidatas = todas.filter((q) => !q.anulada && !q.desatualizada);
    }

    // 2. Obter Histórico de Respostas do Usuário
    let historicoRespostas: RespostaUsuario[] = [];
    if (supabase && usuarioId) {
      try {
        const { data: respData } = await supabase
          .from("respostas_usuarios")
          .select("id, usuario_id, questao_id, alternativa_id, correta, tempo_resposta_segundos, created_at")
          .eq("usuario_id", usuarioId)
          .order("created_at", { ascending: false })
          .limit(500);

        if (respData) {
          historicoRespostas = respData.map((r: any) => ({
            id: r.id,
            usuario_id: r.usuario_id,
            questao_id: r.questao_id,
            alternativa_id: r.alternativa_id,
            correta: Boolean(r.correta),
            tempo_resposta: r.tempo_resposta_segundos || 0,
            created_at: r.created_at,
          }));
        }
      } catch (err) {
        console.warn("[MentoriaQuestoesService] Erro ao buscar histórico de respostas:", err);
      }
    }
    if (historicoRespostas.length === 0) {
      historicoRespostas = DataService.getRespostas();
    }

    // 3. Obter Caderno de Erros do Usuário
    const idsCadernoErros = new Set<string>();
    if (supabase && usuarioId) {
      try {
        const { data: errData } = await supabase
          .from("caderno_erros")
          .select("questao_id")
          .eq("usuario_id", usuarioId)
          .eq("revisado", false);

        if (errData) {
          errData.forEach((e: any) => idsCadernoErros.add(e.questao_id));
        }
      } catch (err) {
        console.warn("[MentoriaQuestoesService] Erro ao buscar caderno de erros:", err);
      }
    }
    if (idsCadernoErros.size === 0) {
      const localErros = DataService.getCadernoErros();
      localErros.filter((e) => !e.revisado).forEach((e) => idsCadernoErros.add(e.questao_id));
    }

    // 4. Identificar Tópicos Fracos
    const topicosFracos = await this.identificarTopicosFracos(usuarioId, disciplinaId);
    const idsTopicosFracos = new Set<string>(
      topicosFracos.filter((t) => t.taxa_erro >= 40).map((t) => t.assunto_id)
    );

    // Se o filtro pede APENAS ERROS (ex: Bloco de Revisão)
    if (apenasErros || tipoBloco === "REVISAO") {
      const questoesErros = questoesCandidatas.filter(
        (q) => idsCadernoErros.has(q.id) || historicoRespostas.some((r) => r.questao_id === q.id && !r.correta)
      );

      // Se houver erros suficientes, foca neles
      if (questoesErros.length > 0) {
        questoesCandidatas = questoesErros;
      }
    }

    // 5. Aplica Scoring Matemático em cada questão candidata
    const scoredList: QuestaoCandidataScore[] = questoesCandidatas.map((q) =>
      this.calcularScoreQuestao(
        q,
        historicoRespostas,
        idsCadernoErros,
        idsTopicosFracos,
        nivelUsuario
      )
    );

    // Ordena primariamente pelo score Total decrescente
    scoredList.sort((a, b) => b.scoreTotal - a.scoreTotal);

    // 6. Aplica Diversificação Round-Robin por Tópicos
    const selecionadas = this.diversificarQuestoesPorTopico(scoredList, quantidade);

    // Estatísticas do pool gerado
    const idsRespondidos = new Set(historicoRespostas.map((r) => r.questao_id));
    const totalNaoRespondidas = selecionadas.filter((q) => !idsRespondidos.has(q.id)).length;
    const totalErrosAnteriores = selecionadas.filter(
      (q) => idsCadernoErros.has(q.id) || historicoRespostas.some((r) => r.questao_id === q.id && !r.correta)
    ).length;
    const totalAcertosAnteriores = selecionadas.filter(
      (q) => historicoRespostas.some((r) => r.questao_id === q.id && r.correta)
    ).length;

    const topicosSet = new Set<string>();
    selecionadas.forEach((q) => {
      if (q.assunto_id) topicosSet.add(q.assunto_id);
      if (q.assunto) {
        const nomeAssunto = typeof q.assunto === "string" ? q.assunto : q.assunto.nome;
        if (nomeAssunto) topicosSet.add(nomeAssunto);
      }
    });

    return {
      questoes: selecionadas,
      totalDisponivel: questoesCandidatas.length,
      motivoSelecao: `Seleção adaptativa de ${selecionadas.length} questões para ${disciplinaNome || "disciplina"} calibrada para nível ${nivelUsuario.toUpperCase()}.`,
      topicosCobertos: Array.from(topicosSet),
      estatisticasPool: {
        totalNaoRespondidas,
        totalErrosAnteriores,
        totalAcertosAnteriores,
      },
    };
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── 3. IDENTIFICAÇÃO DETERMINÍSTICA DE TÓPICOS FRACOS ─────────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  /**
   * Analisa as respostas do usuário agrupadas por assunto para identificar tópicos com alta taxa de erro.
   */
  static async identificarTopicosFracos(
    usuarioId: string,
    disciplinaId?: string
  ): Promise<MentoriaTopicoFraco[]> {
    const supabase = this.getClient();
    const mapaTopicos = new Map<
      string,
      { total: number; erros: number; disciplina_id: string; assunto_nome?: string }
    >();

    if (supabase && usuarioId) {
      try {
        let query = supabase
          .from("respostas_usuarios")
          .select(
            `
            correta,
            questoes (
              id,
              disciplina_id,
              assunto_id
            )
          `
          )
          .eq("usuario_id", usuarioId);

        const { data, error } = await query.limit(1000);

        if (!error && data) {
          for (const item of data as any[]) {
            const q = item.questoes;
            if (!q || !q.assunto_id) continue;
            if (disciplinaId && q.disciplina_id !== disciplinaId) continue;

            const chave = q.assunto_id;
            if (!mapaTopicos.has(chave)) {
              mapaTopicos.set(chave, {
                total: 0,
                erros: 0,
                disciplina_id: q.disciplina_id,
              });
            }

            const registro = mapaTopicos.get(chave)!;
            registro.total += 1;
            if (!item.correta) {
              registro.erros += 1;
            }
          }
        }
      } catch (err) {
        console.warn("[MentoriaQuestoesService] Erro ao analisar tópicos fracos:", err);
      }
    }

    // Se o banco não tiver ou estiver offline, usa respostas locais
    if (mapaTopicos.size === 0) {
      const respostas = DataService.getRespostas();
      for (const r of respostas) {
        const q = DataService.getQuestaoById(r.questao_id);
        if (!q || !q.assunto_id) continue;
        if (disciplinaId && q.disciplina_id !== disciplinaId) continue;

        const chave = q.assunto_id;
        if (!mapaTopicos.has(chave)) {
          mapaTopicos.set(chave, {
            total: 0,
            erros: 0,
            disciplina_id: q.disciplina_id || "",
            assunto_nome: typeof q.assunto === "string" ? q.assunto : q.assunto?.nome,
          });
        }

        const registro = mapaTopicos.get(chave)!;
        registro.total += 1;
        if (!r.correta) {
          registro.erros += 1;
        }
      }
    }

    const resultado: MentoriaTopicoFraco[] = [];
    for (const [assuntoIdKey, stats] of mapaTopicos.entries()) {
      if (stats.total === 0) continue;
      const taxaErro = Math.round((stats.erros / stats.total) * 100);
      const percentualAcerto = 100 - taxaErro;

      resultado.push({
        assunto_id: assuntoIdKey,
        assunto_nome: stats.assunto_nome,
        disciplina_id: stats.disciplina_id,
        total_respostas: stats.total,
        total_erros: stats.erros,
        taxa_erro: taxaErro,
        percentual_acerto: percentualAcerto,
      });
    }

    // Ordena pelo maior percentual de erro
    resultado.sort((a, b) => b.taxa_erro - a.taxa_erro);
    return resultado;
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── 4. REVISÕES ESPAÇADAS DETERMINÍSTICAS (D+1, D+7, D+30) ────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  /**
   * Obtém as revisões espaçadas pendentes ou atrasadas do usuário.
   */
  static async obterRevisoesPendentes(
    usuarioId: string,
    disciplinaId?: string
  ): Promise<MentoriaRevisaoItem[]> {
    if (!usuarioId) return [];

    const supabase = this.getClient();
    const hojeStr = new Date().toISOString().split("T")[0];

    if (supabase) {
      try {
        let query = supabase
          .from("mentoria_revisoes")
          .select(
            `
            id,
            usuario_id,
            disciplina_id,
            assunto_id,
            subassunto_id,
            origem,
            data_estudo,
            proxima_revisao,
            intervalo_dias,
            etapa,
            status,
            nivel_retencao,
            created_at,
            updated_at
          `
          )
          .eq("usuario_id", usuarioId)
          .in("status", ["pendente", "atrasada"])
          .lte("proxima_revisao", hojeStr);

        if (disciplinaId && !disciplinaId.startsWith("disc-")) {
          query = query.eq("disciplina_id", disciplinaId);
        }

        const { data, error } = await query.order("proxima_revisao", { ascending: true });

        if (!error && data) {
          return data.map((r: any) => ({
            id: r.id,
            usuario_id: r.usuario_id,
            disciplina_id: r.disciplina_id,
            assunto_id: r.assunto_id,
            subassunto_id: r.subassunto_id,
            origem: r.origem || "estudo_diario",
            etapa: r.etapa || 1,
            intervalo_dias: r.intervalo_dias || 1,
            proxima_revisao: r.proxima_revisao,
            status: r.status,
            created_at: r.created_at,
            updated_at: r.updated_at,
          }));
        }
      } catch (err) {
        console.warn("[MentoriaQuestoesService] Erro ao buscar revisões pendentes no Supabase:", err);
      }
    }

    return [];
  }

  /**
   * Máquina de Estados da Repetição Espaçada:
   * - Se acertou a revisão:
   *     Etapa 1 (D+1) -> Etapa 2 (D+7, proxima_revisao = hoje + 7 dias)
   *     Etapa 2 (D+7) -> Etapa 3 (D+30, proxima_revisao = hoje + 30 dias)
   *     Etapa 3 (D+30) -> Concluída (status = 'concluida')
   * - Se errou a revisão:
   *     Reseta para Etapa 1 (D+1, proxima_revisao = hoje + 1 dia, status = 'pendente')
   */
  static async processarProgressoRevisao(
    usuarioId: string,
    revisaoId: string,
    acertou: boolean
  ): Promise<{ success: boolean; novaEtapa: number; status: string; proximaRevisao: string }> {
    const supabase = this.getClient();
    const hoje = new Date();

    let novaEtapa = 1;
    let intervaloDias = 1;
    let novoStatus: "pendente" | "concluida" = "pendente";

    if (supabase && usuarioId && revisaoId) {
      try {
        const { data: revAtual } = await supabase
          .from("mentoria_revisoes")
          .select("*")
          .eq("id", revisaoId)
          .eq("usuario_id", usuarioId)
          .maybeSingle();

        if (revAtual) {
          if (acertou) {
            if (revAtual.etapa === 1) {
              novaEtapa = 2;
              intervaloDias = 7;
            } else if (revAtual.etapa === 2) {
              novaEtapa = 3;
              intervaloDias = 30;
            } else {
              novaEtapa = 4;
              intervaloDias = 0;
              novoStatus = "concluida";
            }
          } else {
            // Reset no erro
            novaEtapa = 1;
            intervaloDias = 1;
            novoStatus = "pendente";
          }

          const proxData = new Date(hoje);
          proxData.setDate(proxData.getDate() + intervaloDias);
          const proxDataStr = proxData.toISOString().split("T")[0];

          await supabase
            .from("mentoria_revisoes")
            .update({
              etapa: novaEtapa,
              intervalo_dias: intervaloDias,
              proxima_revisao: proxDataStr,
              status: novoStatus,
              concluida_em: novoStatus === "concluida" ? hoje.toISOString() : null,
              updated_at: hoje.toISOString(),
            })
            .eq("id", revisaoId);

          return {
            success: true,
            novaEtapa,
            status: novoStatus,
            proximaRevisao: proxDataStr,
          };
        }
      } catch (err) {
        console.warn("[MentoriaQuestoesService] Erro ao atualizar progresso de revisão:", err);
      }
    }

    const proxData = new Date(hoje);
    proxData.setDate(proxData.getDate() + 1);
    return {
      success: true,
      novaEtapa: 1,
      status: "pendente",
      proximaRevisao: proxData.toISOString().split("T")[0],
    };
  }

  /**
   * Agenda uma nova revisão D+1 automaticamente quando o usuário erra uma questão ou tópico.
   */
  static async agendarRevisaoErro(
    usuarioId: string,
    disciplinaId: string,
    assuntoId: string,
    origem: "caderno_erros" | "estudo_diario" = "caderno_erros"
  ): Promise<boolean> {
    if (!usuarioId || !disciplinaId || !assuntoId) return false;
    const isUuid = (val?: string) =>
      Boolean(val && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val));

    if (!isUuid(disciplinaId) || !isUuid(assuntoId)) return false;

    const supabase = this.getClient();
    if (!supabase) return false;

    try {
      const hoje = new Date();
      const amanha = new Date(hoje);
      amanha.setDate(amanha.getDate() + 1);
      const amanhaStr = amanha.toISOString().split("T")[0];
      const hojeStr = hoje.toISOString().split("T")[0];

      // Verifica se já existe uma revisão pendente para este assunto
      const { data: revExistente } = await supabase
        .from("mentoria_revisoes")
        .select("id, status")
        .eq("usuario_id", usuarioId)
        .eq("disciplina_id", disciplinaId)
        .eq("assunto_id", assuntoId)
        .in("status", ["pendente", "atrasada"])
        .maybeSingle();

      if (revExistente) {
        // Já tem revisão agendada, não duplica
        return true;
      }

      // Cria nova revisão D+1
      await supabase.from("mentoria_revisoes").insert({
        usuario_id: usuarioId,
        disciplina_id: disciplinaId,
        assunto_id: assuntoId,
        origem,
        data_estudo: hojeStr,
        proxima_revisao: amanhaStr,
        intervalo_dias: 1,
        etapa: 1,
        status: "pendente",
        nivel_retencao: "medio",
      });

      return true;
    } catch (err) {
      console.warn("[MentoriaQuestoesService] Erro ao agendar revisão de erro:", err);
      return false;
    }
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── 5. REGISTRO COMPLETO DE RESPOSTA NO ESTUDO GUIADO ─────────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  /**
   * Registra a resolução de questão no Estudo Guiado:
   * 1. Salva em respostas_usuarios (Supabase + Local).
   * 2. Se errou, atualiza Caderno de Erros e agenda revisão D+1.
   * 3. Se acertou e veio de revisão, avança etapa D+1 -> D+7 -> D+30.
   */
  static async registrarRespostaEstudo(input: {
    usuarioId: string;
    questao: Questao;
    alternativaId: string;
    tempoRespostaSegundos?: number;
    revisaoId?: string;
  }): Promise<{ correta: boolean; resposta: RespostaUsuario }> {
    const { usuarioId, questao, alternativaId, tempoRespostaSegundos = 0, revisaoId } = input;

    // Registra via DataService (gerencia memória e persistência)
    const resultado = DataService.registrarResposta(
      questao.id,
      alternativaId,
      tempoRespostaSegundos,
      questao
    );

    const correta = resultado.correta;

    // Integração automática com Mentoria Revisões Espaçadas
    if (!correta) {
      if (questao.disciplina_id && questao.assunto_id) {
        await this.agendarRevisaoErro(
          usuarioId,
          questao.disciplina_id,
          questao.assunto_id,
          "caderno_erros"
        );
      }
    } else {
      // Acertou: se tiver ID de revisão associado, progride o espaçamento
      if (revisaoId) {
        await this.processarProgressoRevisao(usuarioId, revisaoId, true);
      }
    }

    return {
      correta,
      resposta: resultado.resposta,
    };
  }
}
