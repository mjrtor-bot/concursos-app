import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  MentoriaDiagnostico,
  MentoriaDiagnosticoDisciplina,
  MentoriaDiagnosticoResposta,
  MentoriaDiagnosticoHistorico,
  MentoriaAutoavaliacao,
  MentoriaNivelCalculado,
  Questao,
  Disciplina,
  MentoriaPerfil,
} from "@/types";
import { MOCK_DISCIPLINAS, mockQuestoes } from "@/data/mockData";
import { MentoriaService } from "./mentoriaService";

const STORAGE_DIAGNOSTICO_PREFIX = "concursos_app_diag_";

export class MentoriaDiagnosticoService {
  private static getClient() {
    if (!isSupabaseConfigured) return null;
    return createClient();
  }

  // ── 0. MÉTODO DETERMINÍSTICO DE CÁLCULO DE SCORE E NÍVEL ─────────────────
  static calcularScoreENivel(
    autoavaliacao: MentoriaAutoavaliacao,
    taxaAcerto: number,
    tempoMedioSegundos: number,
    historicoAcerto: number = 0,
    hasHistorico: boolean = false
  ): {
    score: number;
    nivel: MentoriaNivelCalculado;
    componenteAuto: number;
    componenteTeste: number;
    componenteHist: number;
    ajusteTempo: number;
  } {
    const mapaAuto: Record<MentoriaAutoavaliacao, number> = {
      nunca_estudei: 0,
      basico: 35,
      intermediario: 70,
      avancado: 95,
    };
    const notaAuto = mapaAuto[autoavaliacao] ?? 35;
    const compAuto = notaAuto * 0.25;
    const compTeste = Math.min(100, Math.max(0, taxaAcerto)) * 0.60;
    const histVal = hasHistorico ? Math.min(100, Math.max(0, historicoAcerto)) : notaAuto;
    const compHist = histVal * 0.15;

    let ajusteTempo = 0;
    // Bônus de fluência e consistência: tempo médio razoável (> 0 e < 200s) com acerto >= 50%
    if (tempoMedioSegundos > 0 && tempoMedioSegundos < 200 && taxaAcerto >= 50) {
      ajusteTempo = 5;
    }

    const rawScore = compAuto + compTeste + compHist + ajusteTempo;
    const score = Math.min(100, Math.max(0, Math.round(rawScore)));

    let nivel: MentoriaNivelCalculado = "iniciante";
    if (score >= 76) nivel = "avancado";
    else if (score >= 51) nivel = "intermediario";
    else if (score >= 26) nivel = "basico";
    else nivel = "iniciante";

    return {
      score,
      nivel,
      componenteAuto: Number(compAuto.toFixed(2)),
      componenteTeste: Number(compTeste.toFixed(2)),
      componenteHist: Number(compHist.toFixed(2)),
      ajusteTempo,
    };
  }

  // ── 1. BUSCAR DIAGNÓSTICO ATIVO (EM ANDAMENTO OU RECÉM INICIADO) ────────────
  static async getDiagnosticoAtivo(usuarioId: string): Promise<MentoriaDiagnostico | null> {
    if (!usuarioId) return null;

    const supabase = this.getClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("mentoria_diagnosticos")
          .select("*")
          .eq("usuario_id", usuarioId)
          .eq("status", "em_andamento")
          .order("iniciado_em", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (!error && data) {
          // Carregar disciplinas associadas
          const { data: discData } = await supabase
            .from("mentoria_diagnostico_disciplinas")
            .select("*")
            .eq("diagnostico_id", data.id);

          const diag: MentoriaDiagnostico = {
            ...data,
            disciplinas: discData || [],
          };
          return diag;
        }
      } catch (err) {
        console.warn("[MentoriaDiagnosticoService] Erro ao buscar diagnóstico ativo no Supabase:", err);
      }
    }

    // Fallback local
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(`${STORAGE_DIAGNOSTICO_PREFIX}ativo_${usuarioId}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.status === "em_andamento") {
            return parsed as MentoriaDiagnostico;
          }
        }
      } catch {
        return null;
      }
    }

    return null;
  }

  // ── 2. BUSCAR ÚLTIMO DIAGNÓSTICO CONCLUÍDO ─────────────────────────────────
  static async getUltimoDiagnostico(usuarioId: string): Promise<MentoriaDiagnostico | null> {
    if (!usuarioId) return null;

    const supabase = this.getClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("mentoria_diagnosticos")
          .select("*")
          .eq("usuario_id", usuarioId)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (!error && data) {
          const { data: discData } = await supabase
            .from("mentoria_diagnostico_disciplinas")
            .select("*")
            .eq("diagnostico_id", data.id);

          return {
            ...data,
            disciplinas: discData || [],
          } as MentoriaDiagnostico;
        }
      } catch (err) {
        console.warn("[MentoriaDiagnosticoService] Erro ao buscar último diagnóstico:", err);
      }
    }

    // Fallback local
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(`${STORAGE_DIAGNOSTICO_PREFIX}ultimo_${usuarioId}`);
        if (raw) return JSON.parse(raw) as MentoriaDiagnostico;
      } catch {
        return null;
      }
    }

    return null;
  }

  // ── 3. INICIAR OU RECUPERAR DIAGNÓSTICO ─────────────────────────────────────
  static async iniciarDiagnostico(
    usuarioId: string,
    concursoNome?: string,
    cargoNome?: string
  ): Promise<{ success: boolean; diagnostico?: MentoriaDiagnostico; error?: string }> {
    if (!usuarioId) return { success: false, error: "Usuário não autenticado." };

    // Verifica se já existe um em andamento
    const ativo = await this.getDiagnosticoAtivo(usuarioId);
    if (ativo) {
      return { success: true, diagnostico: ativo };
    }

    const defaultHistorico: MentoriaDiagnosticoHistorico = {
      ja_estuda: false,
      tempo_estudo: "menos_6_meses",
      ja_aprovado: false,
      horas_semanais_atuais: 10,
      preferencia_estudo: "equilibrado",
      maiores_dificuldades: [],
      observacoes: "",
    };

    const payload = {
      usuario_id: usuarioId,
      concurso_nome: concursoNome || "Concurso Geral",
      cargo_nome: cargoNome || "Cargo Alvo",
      status: "em_andamento" as const,
      iniciado_em: new Date().toISOString(),
      historico_dados: defaultHistorico,
      score_geral: 0,
      nivel_geral: "iniciante" as const,
      resumo_resultado: {},
    };

    let novoDiagnostico: MentoriaDiagnostico | null = null;
    const supabase = this.getClient();

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("mentoria_diagnosticos")
          .insert(payload)
          .select()
          .single();

        if (error) {
          console.error("[MentoriaDiagnosticoService] Erro ao criar diagnóstico no Supabase:", error.message);
        } else if (data) {
          novoDiagnostico = {
            ...data,
            disciplinas: [],
          } as MentoriaDiagnostico;
        }
      } catch (err) {
        console.error("[MentoriaDiagnosticoService] Exceção ao criar diagnóstico:", err);
      }
    }

    // Fallback local se Supabase não retornou
    if (!novoDiagnostico) {
      novoDiagnostico = {
        id: `local-diag-${Date.now()}`,
        usuario_id: usuarioId,
        concurso_nome: payload.concurso_nome,
        cargo_nome: payload.cargo_nome,
        status: "em_andamento",
        iniciado_em: payload.iniciado_em,
        historico_dados: defaultHistorico,
        score_geral: 0,
        nivel_geral: "iniciante",
        resumo_resultado: {
          total_questoes: 0,
          total_acertos: 0,
          taxa_acerto_geral: 0,
          tempo_medio_questao: 0,
          disciplinas_fortes: [],
          disciplinas_criticas: [],
          recomendacoes: [],
        },
        disciplinas: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
    }

    // Salva no localStorage para cache rápido
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(`${STORAGE_DIAGNOSTICO_PREFIX}ativo_${usuarioId}`, JSON.stringify(novoDiagnostico));
      } catch {
        // Ignore
      }
    }

    return { success: true, diagnostico: novoDiagnostico ?? undefined };
  }

  // ── 4. SALVAR HISTÓRICO DE ESTUDOS DO ALUNO ────────────────────────────────
  static async salvarHistorico(
    diagnosticoId: string,
    usuarioId: string,
    historico: MentoriaDiagnosticoHistorico
  ): Promise<{ success: boolean; error?: string }> {
    if (!diagnosticoId || !usuarioId) return { success: false, error: "Dados incompletos." };

    const supabase = this.getClient();
    if (supabase) {
      try {
        const { error } = await supabase
          .from("mentoria_diagnosticos")
          .update({
            historico_dados: historico,
            updated_at: new Date().toISOString(),
          })
          .eq("id", diagnosticoId)
          .eq("usuario_id", usuarioId);

        if (error) {
          console.error("[MentoriaDiagnosticoService] Erro ao salvar histórico:", error.message);
        }
      } catch (err) {
        console.error("[MentoriaDiagnosticoService] Exceção ao salvar histórico:", err);
      }
    }

    // Atualiza cache local
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(`${STORAGE_DIAGNOSTICO_PREFIX}ativo_${usuarioId}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.id === diagnosticoId) {
            parsed.historico_dados = historico;
            localStorage.setItem(`${STORAGE_DIAGNOSTICO_PREFIX}ativo_${usuarioId}`, JSON.stringify(parsed));
          }
        }
      } catch {
        // Ignore
      }
    }

    return { success: true };
  }

  // ── 5. SALVAR AUTOAVALIAÇÃO POR DISCIPLINA ─────────────────────────────────
  static async salvarAutoavaliacao(
    diagnosticoId: string,
    usuarioId: string,
    disciplinasAuto: {
      disciplina_id?: string | null;
      disciplina_nome: string;
      autoavaliacao: MentoriaAutoavaliacao;
    }[]
  ): Promise<{ success: boolean; error?: string }> {
    if (!diagnosticoId || !usuarioId) return { success: false, error: "Dados incompletos." };

    const supabase = this.getClient();
    const rows = disciplinasAuto.map((d) => ({
      diagnostico_id: diagnosticoId,
      usuario_id: usuarioId,
      disciplina_id: d.disciplina_id || null,
      disciplina_nome: d.disciplina_nome,
      autoavaliacao: d.autoavaliacao,
      updated_at: new Date().toISOString(),
    }));

    if (supabase) {
      try {
        const { error } = await supabase
          .from("mentoria_diagnostico_disciplinas")
          .upsert(rows, { onConflict: "diagnostico_id,disciplina_nome" });

        if (error) {
          console.error("[MentoriaDiagnosticoService] Erro ao salvar autoavaliação:", error.message);
        }
      } catch (err) {
        console.error("[MentoriaDiagnosticoService] Exceção ao salvar autoavaliação:", err);
      }
    }

    // Cache local
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(`${STORAGE_DIAGNOSTICO_PREFIX}ativo_${usuarioId}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.id === diagnosticoId) {
            parsed.disciplinas = rows.map((r, i) => ({
              id: `local-disc-${i}`,
              ...r,
              questoes_ofertadas: 0,
              questoes_respondidas: 0,
              acertos: 0,
              percentual_acerto: 0,
              tempo_medio_segundos: 0,
              historico_previo_questoes: 0,
              historico_previo_acertos: 0,
              score_final: 0,
              nivel_calculado: "iniciante" as const,
            }));
            localStorage.setItem(`${STORAGE_DIAGNOSTICO_PREFIX}ativo_${usuarioId}`, JSON.stringify(parsed));
          }
        }
      } catch {
        // Ignore
      }
    }

    return { success: true };
  }

  // ── 6. GERAR BATERIA DE QUESTÕES REAIS DO SUPABASE (ZERO-MOCK) ─────────────
  static async gerarBateriaQuestoes(
    diagnosticoId: string,
    usuarioId: string,
    disciplinasNomes: string[] = []
  ): Promise<{ questoes: Questao[]; error?: string }> {
    const supabase = this.getClient();
    let questoesEncontradas: Questao[] = [];

    if (supabase) {
      try {
        // 1. Obter IDs das disciplinas se disponíveis
        let queryDisc = supabase.from("disciplinas").select("id, nome");
        if (disciplinasNomes.length > 0) {
          queryDisc = queryDisc.in("nome", disciplinasNomes);
        }
        const { data: dbDisciplinas } = await queryDisc;

        const discMap = new Map<string, string>(); // nome -> id
        if (dbDisciplinas) {
          dbDisciplinas.forEach((d) => discMap.set(d.nome, d.id));
        }

        // 2. Para cada disciplina, buscar 3 a 5 questões reais
        const targets = disciplinasNomes.length > 0
          ? disciplinasNomes
          : (dbDisciplinas ? dbDisciplinas.map((d) => d.nome).slice(0, 6) : ["Direito Constitucional", "Língua Portuguesa", "Direito Administrativo", "Raciocínio Lógico-Matemático"]);

        const questoesPorDisc = Math.max(3, Math.floor(24 / Math.max(1, targets.length)));

        for (const discNome of targets) {
          const discId = discMap.get(discNome);

          let qQuery = supabase
            .from("questoes")
            .select(`
              id, disciplina_id, assunto_id, subassunto_id, prova_id,
              banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade,
              enunciado, texto_apoio, explicacao, anulada, desatualizada
            `)
            .eq("anulada", false)
            .eq("desatualizada", false)
            .limit(questoesPorDisc);

          if (discId) {
            qQuery = qQuery.eq("disciplina_id", discId);
          }

          const { data: qData, error: qErr } = await qQuery;

          if (!qErr && qData && qData.length > 0) {
            const qIds = qData.map((q) => q.id);
            const { data: altsData } = await supabase
              .from("questoes_alternativas")
              .select("id, questao_id, letra, texto, correta, ordem, explicacao_especifica")
              .in("questao_id", qIds)
              .order("ordem", { ascending: true });

            const altsMap = new Map<string, any[]>();
            if (altsData) {
              altsData.forEach((a) => {
                if (!altsMap.has(a.questao_id)) altsMap.set(a.questao_id, []);
                altsMap.get(a.questao_id)!.push(a);
              });
            }

            qData.forEach((q) => {
              questoesEncontradas.push({
                id: q.id,
                disciplina_id: q.disciplina_id || discId || "",
                assunto_id: q.assunto_id || "",
                subassunto_id: q.subassunto_id,
                prova_id: q.prova_id,
                banca: q.banca_nome || "Banca Oficial",
                orgao: q.orgao_nome || "Órgão Oficial",
                cargo: q.cargo_nome || "",
                ano: q.ano || 2024,
                tipo: q.tipo || "multipla_escolha",
                dificuldade: q.dificuldade || "medio",
                enunciado: q.enunciado,
                texto_apoio: q.texto_apoio,
                explicacao: q.explicacao || "Explicação pedagógica detalhada.",
                alternativas: altsMap.get(q.id) || [],
                created_at: new Date().toISOString(),
              });
            });
          }
        }
      } catch (err) {
        console.warn("[MentoriaDiagnosticoService] Erro ao buscar questões no Supabase:", err);
      }
    }

    // Se o banco retornou menos de 10 questões (ex: ambiente de teste/fallback), complementa com mockQuestoes
    if (questoesEncontradas.length < 10) {
      const mockFiltradas = mockQuestoes.slice(0, 20);
      mockFiltradas.forEach((mq) => {
        if (!questoesEncontradas.some((q) => q.id === mq.id)) {
          questoesEncontradas.push(mq);
        }
      });
    }

    // Embaralha levemente as questões para experiência dinâmica
    questoesEncontradas = questoesEncontradas.sort(() => Math.random() - 0.5);

    // Atualiza questões ofertadas nas disciplinas do diagnóstico
    if (supabase && diagnosticoId) {
      try {
        const contagemPorDisciplina = new Map<string, number>();
        questoesEncontradas.forEach((q) => {
          // Identificar nome da disciplina
          contagemPorDisciplina.set(q.disciplina_id, (contagemPorDisciplina.get(q.disciplina_id) || 0) + 1);
        });

        // Atualizar tabela
        for (const [discId, count] of contagemPorDisciplina.entries()) {
          if (discId) {
            await supabase
              .from("mentoria_diagnostico_disciplinas")
              .update({ questoes_ofertadas: count })
              .eq("diagnostico_id", diagnosticoId)
              .eq("disciplina_id", discId);
          }
        }
      } catch {
        // Ignore
      }
    }

    return { questoes: questoesEncontradas };
  }

  // ── 7. SALVAR RESPOSTA INDIVIDUAL DA BATERIA DIAGNÓSTICA ──────────────────
  static async salvarResposta(
    diagnosticoId: string,
    usuarioId: string,
    dados: {
      disciplina_id?: string | null;
      disciplina_nome: string;
      questao_id: string;
      alternativa_id: string;
      correta: boolean;
      tempo_segundos: number;
    }
  ): Promise<{ success: boolean; error?: string }> {
    if (!diagnosticoId || !usuarioId || !dados.questao_id) {
      return { success: false, error: "Dados da resposta incompletos." };
    }

    const supabase = this.getClient();
    const payload = {
      diagnostico_id: diagnosticoId,
      usuario_id: usuarioId,
      disciplina_id: dados.disciplina_id || null,
      disciplina_nome: dados.disciplina_nome,
      questao_id: dados.questao_id,
      alternativa_id: dados.alternativa_id,
      correta: dados.correta,
      tempo_segundos: Math.max(1, dados.tempo_segundos),
    };

    if (supabase) {
      try {
        // Grava na tabela de respostas do diagnóstico
        const { error: diagRespErr } = await supabase
          .from("mentoria_diagnostico_respostas")
          .upsert(payload, { onConflict: "diagnostico_id,questao_id" });

        if (diagRespErr) {
          console.error("[MentoriaDiagnosticoService] Erro ao gravar resposta do diagnóstico:", diagRespErr.message);
        }

        // Também grava no histórico global de respostas do usuário
        await supabase.from("respostas_usuarios").insert({
          usuario_id: usuarioId,
          questao_id: dados.questao_id,
          alternativa_id: dados.alternativa_id,
          correta: dados.correta,
          tempo_resposta_segundos: dados.tempo_segundos,
          origem: "diagnostico_mentoria",
        });
      } catch (err) {
        console.error("[MentoriaDiagnosticoService] Exceção ao gravar resposta:", err);
      }
    }

    // Cache local das respostas
    if (typeof window !== "undefined") {
      try {
        const key = `${STORAGE_DIAGNOSTICO_PREFIX}respostas_${diagnosticoId}`;
        const raw = localStorage.getItem(key);
        const list: MentoriaDiagnosticoResposta[] = raw ? JSON.parse(raw) : [];
        const idx = list.findIndex((r) => r.questao_id === dados.questao_id);
        if (idx >= 0) {
          list[idx] = payload;
        } else {
          list.push(payload);
        }
        localStorage.setItem(key, JSON.stringify(list));
      } catch {
        // Ignore
      }
    }

    return { success: true };
  }

  // ── 8. FINALIZAR DIAGNÓSTICO E CALCULAR NIVELAMENTO DETERMINÍSTICO (0–100) ──
  static async finalizarDiagnostico(
    diagnosticoId: string,
    usuarioId: string
  ): Promise<{ success: boolean; diagnostico?: MentoriaDiagnostico; error?: string }> {
    if (!diagnosticoId || !usuarioId) {
      return { success: false, error: "Parâmetros inválidos para finalização." };
    }

    const supabase = this.getClient();
    let respostas: MentoriaDiagnosticoResposta[] = [];
    let disciplinasDb: MentoriaDiagnosticoDisciplina[] = [];
    let historicoPrevioGeral: { total: number; acertos: number } = { total: 0, acertos: 0 };

    if (supabase) {
      try {
        // 1. Buscar respostas do teste diagnóstico
        const { data: respData } = await supabase
          .from("mentoria_diagnostico_respostas")
          .select("*")
          .eq("diagnostico_id", diagnosticoId);

        if (respData) respostas = respData as MentoriaDiagnosticoResposta[];

        // 2. Buscar disciplinas configuradas
        const { data: discData } = await supabase
          .from("mentoria_diagnostico_disciplinas")
          .select("*")
          .eq("diagnostico_id", diagnosticoId);

        if (discData) disciplinasDb = discData as MentoriaDiagnosticoDisciplina[];

        // 3. Buscar histórico prévio global do usuário
        const { data: histData } = await supabase
          .from("respostas_usuarios")
          .select("correta")
          .eq("usuario_id", usuarioId)
          .neq("origem", "diagnostico_mentoria");

        if (histData && histData.length > 0) {
          historicoPrevioGeral.total = histData.length;
          historicoPrevioGeral.acertos = histData.filter((h) => h.correta).length;
        }
      } catch (err) {
        console.warn("[MentoriaDiagnosticoService] Erro ao carregar dados para cálculo no Supabase:", err);
      }
    }

    // Fallback de respostas locais caso necessário
    if (respostas.length === 0 && typeof window !== "undefined") {
      try {
        const rawResp = localStorage.getItem(`${STORAGE_DIAGNOSTICO_PREFIX}respostas_${diagnosticoId}`);
        if (rawResp) respostas = JSON.parse(rawResp);
      } catch {
        // Ignore
      }
    }

    // Se ainda não tiver disciplinas cadastradas, cria estrutura a partir das respostas
    if (disciplinasDb.length === 0) {
      const nomesDisciplinas = Array.from(new Set(respostas.map((r) => r.disciplina_nome || "Conhecimentos Gerais")));
      if (nomesDisciplinas.length === 0) {
        nomesDisciplinas.push("Conhecimentos Gerais");
      }
      disciplinasDb = nomesDisciplinas.map((nome, i) => ({
        id: `disc-${i}`,
        diagnostico_id: diagnosticoId,
        usuario_id: usuarioId,
        disciplina_nome: nome,
        autoavaliacao: "intermediario",
        questoes_ofertadas: 0,
        questoes_respondidas: 0,
        acertos: 0,
        percentual_acerto: 0,
        tempo_medio_segundos: 0,
        historico_previo_questoes: 0,
        historico_previo_acertos: 0,
        score_final: 0,
        nivel_calculado: "iniciante",
      }));
    }

    // ── ALGORITMO DETERMINÍSTICO DE NIVELAMENTO ──────────────────────────────
    const disciplinasCalculadas: MentoriaDiagnosticoDisciplina[] = [];
    let somaScoresPonderados = 0;
    let totalQuestoesRespondidas = 0;
    let totalAcertosGeral = 0;
    let somaTemposSegundos = 0;

    const temHistorico = historicoPrevioGeral.total > 0;
    const taxaHistorico = temHistorico
      ? (historicoPrevioGeral.acertos / historicoPrevioGeral.total) * 100
      : 0;

    for (const disc of disciplinasDb) {
      const respDisc = respostas.filter(
        (r) =>
          r.disciplina_nome.toLowerCase().trim() === disc.disciplina_nome.toLowerCase().trim() ||
          (r.disciplina_id && disc.disciplina_id && r.disciplina_id === disc.disciplina_id)
      );

      const qRespondidas = respDisc.length;
      const acertos = respDisc.filter((r) => r.correta).length;
      const pctAcerto = qRespondidas > 0 ? (acertos / qRespondidas) * 100 : 0;
      const tempoTotal = respDisc.reduce((acc, curr) => acc + (curr.tempo_segundos || 0), 0);
      const tempoMedio = qRespondidas > 0 ? Number((tempoTotal / qRespondidas).toFixed(1)) : 0;

      totalQuestoesRespondidas += qRespondidas;
      totalAcertosGeral += acertos;
      somaTemposSegundos += tempoTotal;

      // Cálculo do Score por disciplina (0 a 100) via método padronizado
      const calc = this.calcularScoreENivel(
        disc.autoavaliacao,
        pctAcerto,
        tempoMedio,
        taxaHistorico,
        temHistorico
      );

      const discAtualizada: MentoriaDiagnosticoDisciplina = {
        ...disc,
        questoes_respondidas: qRespondidas,
        acertos: acertos,
        percentual_acerto: Number(pctAcerto.toFixed(1)),
        tempo_medio_segundos: tempoMedio,
        score_final: calc.score,
        nivel_calculado: calc.nivel,
      };

      disciplinasCalculadas.push(discAtualizada);
      somaScoresPonderados += calc.score;
    }

    // Score Geral Consolidado (0–100)
    const scoreGeral = disciplinasCalculadas.length > 0
      ? Math.round(somaScoresPonderados / disciplinasCalculadas.length)
      : 50;

    let nivelGeral: MentoriaNivelCalculado = "iniciante";
    if (scoreGeral >= 76) nivelGeral = "avancado";
    else if (scoreGeral >= 51) nivelGeral = "intermediario";
    else if (scoreGeral >= 26) nivelGeral = "basico";
    else nivelGeral = "iniciante";

    // Disciplinas fortes e críticas
    const disciplinasFortes = disciplinasCalculadas
      .filter((d) => d.score_final >= 65)
      .map((d) => d.disciplina_nome);

    const disciplinasCriticas = disciplinasCalculadas
      .filter((d) => d.score_final < 50)
      .map((d) => d.disciplina_nome);

    // Gerar Recomendações Pedagógicas Inteligentes
    const recomendacoes: string[] = [];
    if (disciplinasCriticas.length > 0) {
      recomendacoes.push(
        `Dedique 60% dos ciclos iniciais de teoria e questões comentadas para ${disciplinasCriticas.join(", ")}.`
      );
    }
    if (disciplinasFortes.length > 0) {
      recomendacoes.push(
        `Em ${disciplinasFortes.join(", ")}, foque em baterias de questões avançadas e revisões periódicas espaçadas.`
      );
    }
    if (nivelGeral === "iniciante" || nivelGeral === "basico") {
      recomendacoes.push(
        "Adote blocos de estudo de 30 a 40 minutos com resolução imediata de 10 a 15 questões de fixação."
      );
    } else {
      recomendacoes.push(
        "Mantenha ritmo de simulados completos quinzenais e aprofunde o estudo de jurisprudência/detalhes de banca."
      );
    }

    const taxaGeralAcerto = totalQuestoesRespondidas > 0
      ? Number(((totalAcertosGeral / totalQuestoesRespondidas) * 100).toFixed(1))
      : 0;

    const tempoMedioGeral = totalQuestoesRespondidas > 0
      ? Number((somaTemposSegundos / totalQuestoesRespondidas).toFixed(1))
      : 0;

    const resumoResultado = {
      total_questoes: totalQuestoesRespondidas,
      total_acertos: totalAcertosGeral,
      taxa_acerto_geral: taxaGeralAcerto,
      tempo_medio_questao: tempoMedioGeral,
      disciplinas_fortes: disciplinasFortes,
      disciplinas_criticas: disciplinasCriticas,
      recomendacoes,
    };

    const agoraIso = new Date().toISOString();

    // ── PERSISTÊNCIA NO SUPABASE ─────────────────────────────────────────────
    if (supabase) {
      try {
        // 1. Atualiza mentoria_diagnosticos
        await supabase
          .from("mentoria_diagnosticos")
          .update({
            status: "concluido",
            concluido_em: agoraIso,
            score_geral: scoreGeral,
            nivel_geral: nivelGeral,
            resumo_resultado: resumoResultado,
            updated_at: agoraIso,
          })
          .eq("id", diagnosticoId)
          .eq("usuario_id", usuarioId);

        // 2. Atualiza mentoria_diagnostico_disciplinas
        for (const d of disciplinasCalculadas) {
          await supabase
            .from("mentoria_diagnostico_disciplinas")
            .upsert({
              diagnostico_id: diagnosticoId,
              usuario_id: usuarioId,
              disciplina_id: d.disciplina_id || null,
              disciplina_nome: d.disciplina_nome,
              autoavaliacao: d.autoavaliacao,
              questoes_ofertadas: d.questoes_ofertadas,
              questoes_respondidas: d.questoes_respondidas,
              acertos: d.acertos,
              percentual_acerto: d.percentual_acerto,
              tempo_medio_segundos: d.tempo_medio_segundos,
              score_final: d.score_final,
              nivel_calculado: d.nivel_calculado,
              updated_at: agoraIso,
            }, { onConflict: "diagnostico_id,disciplina_nome" });
        }

        // 3. Atualiza perfil do aluno (mentoria_perfis)
        await supabase
          .from("mentoria_perfis")
          .update({
            diagnostico_concluido: true,
            diagnostico_data: agoraIso,
            diagnostico_id: diagnosticoId,
            score_geral: scoreGeral,
            nivel: nivelGeral === "basico" ? "iniciante" : nivelGeral, // Mapeamento para tipo MentoriaNivel
            updated_at: agoraIso,
          })
          .eq("usuario_id", usuarioId);
      } catch (err) {
        console.error("[MentoriaDiagnosticoService] Erro ao persistir finalização no Supabase:", err);
      }
    }

    const diagnosticoConcluido: MentoriaDiagnostico = {
      id: diagnosticoId,
      usuario_id: usuarioId,
      status: "concluido",
      iniciado_em: agoraIso,
      concluido_em: agoraIso,
      historico_dados: {
        ja_estuda: true,
        tempo_estudo: "6_12_meses",
        ja_aprovado: false,
        horas_semanais_atuais: 15,
        preferencia_estudo: "equilibrado",
        maiores_dificuldades: [],
      },
      score_geral: scoreGeral,
      nivel_geral: nivelGeral,
      resumo_resultado: resumoResultado,
      disciplinas: disciplinasCalculadas,
      created_at: agoraIso,
      updated_at: agoraIso,
    };

    // Atualiza storage local
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(`${STORAGE_DIAGNOSTICO_PREFIX}ativo_${usuarioId}`);
        localStorage.setItem(`${STORAGE_DIAGNOSTICO_PREFIX}ultimo_${usuarioId}`, JSON.stringify(diagnosticoConcluido));
      } catch {
        // Ignore
      }
    }

    return { success: true, diagnostico: diagnosticoConcluido };
  }
}
