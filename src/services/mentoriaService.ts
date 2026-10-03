import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  MentoriaPerfil,
  MentoriaDisponibilidade,
  MentoriaEditalTopico,
  MentoriaDashboardStats,
  MentoriaDiaProgresso,
  MentoriaNivel,
  MentoriaHorario,
  MentoriaPrioridade,
  ActivityHeatmapPoint,
  ConstanciaTelemetria,
  MetasEstudoConfig,
  MissaoDiariaItem,
  GradeSemanalDia,
  MentoriaTarefaStatus,
  EditalVerticalizadoItem,
  EditalVerticalizadoResumo,
} from "@/types";
import { MentoriaCicloService } from "./mentoriaCicloService";

// ── Chaves de Armazenamento Local de Contingência ─────────────────────────────
const STORAGE_KEYS = {
  PERFIL: "concursos_app_mentoria_perfil",
  DISPONIBILIDADE: "concursos_app_mentoria_disp",
  TOPICOS: "concursos_app_mentoria_topicos",
  PLANOS: "concursos_app_mentoria_planos",
  TAREFAS: "concursos_app_mentoria_tarefas",
  SESSOES: "concursos_app_mentoria_sessoes",
  REVISOES: "concursos_app_mentoria_revisoes",
};

/**
 * Retorna a data no fuso horário oficial de Brasília (America/Sao_Paulo / UTC-3) no formato YYYY-MM-DD
 */
export function getDataBrasilia(dateInput: Date | string = new Date()): string {
  try {
    const d = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(d);
  } catch {
    const d = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    return d.toISOString().split("T")[0];
  }
}

export class MentoriaService {
  // ── Helper: Obter cliente Supabase ─────────────────────────────────────────
  private static getClient() {
    if (!isSupabaseConfigured) return null;
    return createClient();
  }

  private static getFromStorage<T>(key: string, defaultValue: T): T {
    if (typeof window === "undefined") return defaultValue;
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  private static setToStorage<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore
    }
  }

  // ── 1. PERFIL DO ESTUDANTE ─────────────────────────────────────────────────
  static async getPerfil(usuarioId: string): Promise<MentoriaPerfil | null> {
    if (!usuarioId) return null;

    const supabase = this.getClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("mentoria_perfis")
          .select("*")
          .eq("usuario_id", usuarioId)
          .eq("ativo", true)
          .maybeSingle();

        if (!error) {
          // Supabase respondeu: ele é a fonte autoritativa. Sem linha = sem perfil
          // (não reaproveita cache local antigo, que pode ser de outro concurso).
          if (typeof window !== "undefined") {
            try {
              if (data) localStorage.setItem(`${STORAGE_KEYS.PERFIL}_${usuarioId}`, JSON.stringify(data));
              else localStorage.removeItem(`${STORAGE_KEYS.PERFIL}_${usuarioId}`);
            } catch {
              // Ignore storage errors
            }
          }
          return (data as MentoriaPerfil) ?? null;
        }
      } catch (err) {
        console.warn("[MentoriaService] Falha ao consultar Supabase, consultando cache local:", err);
      }
    }

    // Fallback de cache local
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(`${STORAGE_KEYS.PERFIL}_${usuarioId}`);
        if (raw) return JSON.parse(raw) as MentoriaPerfil;
      } catch {
        return null;
      }
    }

    return null;
  }

  static async salvarPerfil(
    usuarioId: string,
    perfilData: {
      concurso_id?: string | null;
      concurso_nome: string;
      cargo_id?: string | null;
      cargo_nome: string;
      data_prova?: string | null;
      nivel: MentoriaNivel;
      horario_preferido: MentoriaHorario;
      duracao_bloco_minutos: number;
      quantidade_questoes_bloco: number;
      dias_descanso: string[];
      prioridade_estudo: MentoriaPrioridade;
      meta_horas_semana?: number;
    },
    disponibilidadeGrade?: { dia_semana: number; minutos_disponiveis: number; horario_preferido?: MentoriaHorario }[]
  ): Promise<{ success: boolean; perfil?: MentoriaPerfil; error?: string }> {
    if (!usuarioId) return { success: false, error: "Usuário não autenticado." };

    // Calcular meta de horas semanais a partir da grade
    let metaHoras = perfilData.meta_horas_semana || 0;
    if (disponibilidadeGrade && disponibilidadeGrade.length > 0) {
      const totalMinutos = disponibilidadeGrade.reduce((acc, curr) => acc + curr.minutos_disponiveis, 0);
      metaHoras = Number((totalMinutos / 60).toFixed(1));
    }

    const payload: Partial<MentoriaPerfil> = {
      usuario_id: usuarioId,
      concurso_id: perfilData.concurso_id || null,
      concurso_nome: perfilData.concurso_nome.trim(),
      cargo_id: perfilData.cargo_id || null,
      cargo_nome: perfilData.cargo_nome.trim(),
      data_prova: perfilData.data_prova || null,
      nivel: perfilData.nivel,
      horario_preferido: perfilData.horario_preferido,
      duracao_bloco_minutos: perfilData.duracao_bloco_minutos,
      quantidade_questoes_bloco: perfilData.quantidade_questoes_bloco,
      dias_descanso: perfilData.dias_descanso || [],
      prioridade_estudo: perfilData.prioridade_estudo,
      meta_horas_semana: metaHoras,
      ativo: true,
      updated_at: new Date().toISOString(),
    };

    let savedPerfil: MentoriaPerfil | null = null;
    const supabase = this.getClient();

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("mentoria_perfis")
          .upsert(payload, { onConflict: "usuario_id" })
          .select()
          .single();

        if (error) {
          console.error("[MentoriaService] Erro ao salvar perfil no Supabase:", error.message);
          return { success: false, error: `Não foi possível salvar o perfil da mentoria: ${error.message}` };
        } else if (data) {
          savedPerfil = data as MentoriaPerfil;
        }
      } catch (err) {
        console.error("[MentoriaService] Exceção ao salvar perfil no Supabase:", err);
        return { success: false, error: "Falha de conexão ao salvar o perfil da mentoria." };
      }
    }

    // Se falhou no Supabase ou está offline, cria objeto local
    if (!savedPerfil) {
      savedPerfil = {
        id: `local-perfil-${usuarioId}`,
        usuario_id: usuarioId,
        concurso_id: payload.concurso_id ?? null,
        concurso_nome: payload.concurso_nome ?? "",
        cargo_id: payload.cargo_id ?? null,
        cargo_nome: payload.cargo_nome ?? "",
        data_prova: payload.data_prova ?? null,
        nivel: payload.nivel ?? "intermediario",
        meta_horas_semana: payload.meta_horas_semana ?? 0,
        horario_preferido: payload.horario_preferido ?? "noite",
        duracao_bloco_minutos: payload.duracao_bloco_minutos ?? 40,
        quantidade_questoes_bloco: payload.quantidade_questoes_bloco ?? 15,
        dias_descanso: payload.dias_descanso ?? [],
        prioridade_estudo: payload.prioridade_estudo ?? "equilibrado",
        ativo: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
    }

    // Salva no localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(`${STORAGE_KEYS.PERFIL}_${usuarioId}`, JSON.stringify(savedPerfil));
      } catch {
        // Ignore
      }
    }

    // Salvar grade de disponibilidade se fornecida
    if (disponibilidadeGrade && disponibilidadeGrade.length > 0) {
      await this.salvarDisponibilidade(usuarioId, disponibilidadeGrade);
    }

    return { success: true, perfil: savedPerfil };
  }

  static async atualizarPerfil(
    usuarioId: string,
    updates: Partial<MentoriaPerfil>
  ): Promise<{ success: boolean; perfil?: MentoriaPerfil; error?: string }> {
    if (!usuarioId) return { success: false, error: "Usuário não autenticado." };
    const supabase = this.getClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("mentoria_perfis")
          .update({ ...updates, updated_at: new Date().toISOString() })
          .eq("usuario_id", usuarioId)
          .select()
          .single();

        if (error) {
          console.error("[MentoriaService] Erro ao atualizar perfil no Supabase:", error.message);
          return { success: false, error: error.message };
        }
        if (data && typeof window !== "undefined") {
          localStorage.setItem(`${STORAGE_KEYS.PERFIL}_${usuarioId}`, JSON.stringify(data));
        }
        return { success: true, perfil: data as MentoriaPerfil };
      } catch (err: any) {
        return { success: false, error: err.message };
      }
    }
    return { success: true };
  }

  // ── 2. DISPONIBILIDADE SEMANAL ─────────────────────────────────────────────
  static async getDisponibilidade(usuarioId: string): Promise<MentoriaDisponibilidade[]> {
    if (!usuarioId) return [];

    const supabase = this.getClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("mentoria_disponibilidade")
          .select("*")
          .eq("usuario_id", usuarioId)
          .order("dia_semana", { ascending: true });

        if (!error && data && data.length > 0) {
          if (typeof window !== "undefined") {
            try {
              localStorage.setItem(`${STORAGE_KEYS.DISPONIBILIDADE}_${usuarioId}`, JSON.stringify(data));
            } catch {
              // Ignore
            }
          }
          return data as MentoriaDisponibilidade[];
        }
      } catch (err) {
        console.warn("[MentoriaService] Erro ao buscar disponibilidade no Supabase:", err);
      }
    }

    // Fallback de cache local
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(`${STORAGE_KEYS.DISPONIBILIDADE}_${usuarioId}`);
        if (raw) return JSON.parse(raw) as MentoriaDisponibilidade[];
      } catch {
        return [];
      }
    }

    // Retorna grade padrão zerada de 7 dias
    return [
      { id: "0", usuario_id: usuarioId, dia_semana: 0, minutos_disponiveis: 0, created_at: "", updated_at: "" },
      { id: "1", usuario_id: usuarioId, dia_semana: 1, minutos_disponiveis: 120, created_at: "", updated_at: "" },
      { id: "2", usuario_id: usuarioId, dia_semana: 2, minutos_disponiveis: 120, created_at: "", updated_at: "" },
      { id: "3", usuario_id: usuarioId, dia_semana: 3, minutos_disponiveis: 120, created_at: "", updated_at: "" },
      { id: "4", usuario_id: usuarioId, dia_semana: 4, minutos_disponiveis: 120, created_at: "", updated_at: "" },
      { id: "5", usuario_id: usuarioId, dia_semana: 5, minutos_disponiveis: 120, created_at: "", updated_at: "" },
      { id: "6", usuario_id: usuarioId, dia_semana: 6, minutos_disponiveis: 180, created_at: "", updated_at: "" },
    ];
  }

  static async salvarDisponibilidade(
    usuarioId: string,
    grade: { dia_semana: number; minutos_disponiveis: number; horario_preferido?: MentoriaHorario }[]
  ): Promise<{ success: boolean; error?: string }> {
    if (!usuarioId) return { success: false, error: "Usuário não autenticado." };

    const payload = grade.map((g) => ({
      usuario_id: usuarioId,
      dia_semana: g.dia_semana,
      minutos_disponiveis: Math.max(0, Math.min(1440, g.minutos_disponiveis)),
      horario_preferido: g.horario_preferido || "noite",
      updated_at: new Date().toISOString(),
    }));

    const supabase = this.getClient();
    if (supabase) {
      try {
        const { error } = await supabase
          .from("mentoria_disponibilidade")
          .upsert(payload, { onConflict: "usuario_id,dia_semana" });

        if (error) {
          console.error("[MentoriaService] Erro ao salvar disponibilidade no Supabase:", error.message);
        }
      } catch (err) {
        console.error("[MentoriaService] Exceção ao salvar disponibilidade no Supabase:", err);
      }
    }

    // Salva no localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(`${STORAGE_KEYS.DISPONIBILIDADE}_${usuarioId}`, JSON.stringify(payload));
      } catch {
        // Ignore
      }
    }

    return { success: true };
  }

  // ── 3. DASHBOARD STATS (ZERO-MOCK REAL DATA) ───────────────────────────────
  static async getDashboardStats(usuarioId: string): Promise<MentoriaDashboardStats> {
    if (!usuarioId) {
      return this.getEmptyStats();
    }

    const perfil = await this.getPerfil(usuarioId);
    if (!perfil) {
      return this.getEmptyStats();
    }

    const disponibilidade = await this.getDisponibilidade(usuarioId);

    // 1. Dias restantes até a prova
    let diasRestantes: number | null = null;
    if (perfil.data_prova) {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      const dataProva = new Date(perfil.data_prova + "T00:00:00");
      const diffTime = dataProva.getTime() - hoje.getTime();
      diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // 2. Metas diária e semanal reais
    const hojeDiaSemana = new Date().getDay(); // 0 = Dom, 1 = Seg...
    const dispHoje = disponibilidade.find((d) => d.dia_semana === hojeDiaSemana);
    const metaDiariaMinutos = dispHoje ? dispHoje.minutos_disponiveis : 0;
    const metaSemanalMinutos = this.calcularCargaPlanejada(
      disponibilidade,
      perfil.duracao_bloco_minutos || 40
    ).minutos_configurados;

    // 3. Questões e acertos reais da semana corrente
    let questoesSemana = 0;
    let acertosSemana = 0;
    let minutosEstudadosSemana = 0;

    // Calcular início da semana atual (Domingo ou Segunda)
    const agora = new Date();
    const inicioSemana = new Date(agora);
    inicioSemana.setDate(agora.getDate() - agora.getDay());
    inicioSemana.setHours(0, 0, 0, 0);

    const supabase = this.getClient();
    if (supabase) {
      try {
        // Respostas da semana
        const { data: respostas } = await supabase
          .from("respostas_usuarios")
          .select("correta, tempo_resposta_segundos, created_at")
          .eq("usuario_id", usuarioId)
          .gte("created_at", inicioSemana.toISOString());

        if (respostas && respostas.length > 0) {
          questoesSemana = respostas.length;
          acertosSemana = respostas.filter((r) => r.correta).length;
          const tempoSegundos = respostas.reduce((acc, curr) => acc + (curr.tempo_resposta_segundos || 0), 0);
          minutosEstudadosSemana += Math.round(tempoSegundos / 60);
        }

        // Sessões de estudo da semana
        const { data: sessoes } = await supabase
          .from("mentoria_sessoes_estudo")
          .select("segundos_liquidos")
          .eq("usuario_id", usuarioId)
          .gte("inicio", inicioSemana.toISOString());

        if (sessoes && sessoes.length > 0) {
          const segs = sessoes.reduce((acc, curr) => acc + (curr.segundos_liquidos || 0), 0);
          minutosEstudadosSemana += Math.round(segs / 60);
        }
      } catch (err) {
        console.warn("[MentoriaService] Falha ao consultar métricas da semana no Supabase:", err);
      }
    }

    // 4. Taxa de acerto real
    const taxaAcertoSemana = questoesSemana > 0 ? Math.round((acertosSemana / questoesSemana) * 100) : 0;

    // 5. Revisões pendentes
    let revisoesPendentes = 0;
    if (supabase) {
      try {
        const { count } = await supabase
          .from("mentoria_revisoes")
          .select("*", { count: "exact", head: true })
          .eq("usuario_id", usuarioId)
          .in("status", ["pendente", "atrasada"]);

        revisoesPendentes = count || 0;
      } catch {
        // Fallback
      }
    }

    // 6. Cobertura do edital
    let topicosEstudados = 0;
    let topicosTotal = 0;
    if (supabase) {
      try {
        const { data: topicos } = await supabase
          .from("mentoria_edital_topicos")
          .select("estudado, status")
          .eq("usuario_id", usuarioId);

        if (topicos && topicos.length > 0) {
          topicosTotal = topicos.length;
          topicosEstudados = topicos.filter((t) => t.estudado || t.status === "dominado").length;
        }
      } catch {
        // Fallback
      }
    }
    const coberturaPercentual = topicosTotal > 0 ? Math.round((topicosEstudados / topicosTotal) * 100) : 0;

    // 7. Progresso semanal por dia
    const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const progressoSemana: MentoriaDiaProgresso[] = [];

    for (let i = 0; i < 7; i++) {
      const dispDia = disponibilidade.find((d) => d.dia_semana === i);
      const metaMin = dispDia ? dispDia.minutos_disponiveis : 0;
      // Dia atual ou passado: se o dia já passou e cumpriu
      const minutosReal = i === hojeDiaSemana ? minutosEstudadosSemana : 0;
      progressoSemana.push({
        dia_semana: i,
        nome_curto: nomesDias[i],
        minutos_meta: metaMin,
        minutos_estudados: minutosReal,
        concluido: metaMin > 0 && minutosReal >= metaMin,
      });
    }

    return {
      tem_perfil: true,
      perfil,
      dias_restantes_prova: diasRestantes,
      meta_diaria_minutos: metaDiariaMinutos,
      meta_semanal_minutos: metaSemanalMinutos,
      minutos_estudados_semana: minutosEstudadosSemana,
      questoes_resolvidas_semana: questoesSemana,
      taxa_acerto_semana: taxaAcertoSemana,
      revisoes_pendentes_count: revisoesPendentes,
      cobertura_edital_percentual: coberturaPercentual,
      topicos_estudados_count: topicosEstudados,
      topicos_total_count: topicosTotal,
      progresso_semana: progressoSemana,
    };
  }

  // Helper para empty state
  private static getEmptyStats(): MentoriaDashboardStats {
    const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    return {
      tem_perfil: false,
      perfil: null,
      dias_restantes_prova: null,
      meta_diaria_minutos: 0,
      meta_semanal_minutos: 0,
      minutos_estudados_semana: 0,
      questoes_resolvidas_semana: 0,
      taxa_acerto_semana: 0,
      revisoes_pendentes_count: 0,
      cobertura_edital_percentual: 0,
      topicos_estudados_count: 0,
      topicos_total_count: 0,
      progresso_semana: nomesDias.map((nome, i) => ({
        dia_semana: i,
        nome_curto: nome,
        minutos_meta: 0,
        minutos_estudados: 0,
        concluido: false,
      })),
    };
  }

  // ── 4. CONSTÂNCIA E TELEMETRIA DE 90 DIAS (HEATMAP REAL) ───────────────────
  static async getConstanciaTelemetria(usuarioId: string): Promise<ConstanciaTelemetria> {
    const diasMapa = new Map<string, { minutos: number; questoes: number }>();
    const hojeRef = new Date();

    // Inicializar os últimos 90 dias com fuso horário de Brasília
    const datasOrdenadas: string[] = [];
    for (let i = 89; i >= 0; i--) {
      const d = new Date(hojeRef);
      d.setDate(hojeRef.getDate() - i);
      const dataIso = getDataBrasilia(d);
      datasOrdenadas.push(dataIso);
      diasMapa.set(dataIso, { minutos: 0, questoes: 0 });
    }

    const dataInicio90Dias = datasOrdenadas[0];

    // 1. Respostas reais do Supabase
    const supabase = this.getClient();
    if (supabase && usuarioId) {
      try {
        const { data: respostas } = await supabase
          .from("respostas_usuarios")
          .select("created_at, tempo_resposta_segundos")
          .eq("usuario_id", usuarioId)
          .gte("created_at", dataInicio90Dias + "T00:00:00");

        if (respostas) {
          for (const r of respostas) {
            const dataIso = r.created_at ? getDataBrasilia(r.created_at) : "";
            if (diasMapa.has(dataIso)) {
              const entry = diasMapa.get(dataIso)!;
              entry.questoes += 1;
              entry.minutos += Math.round((r.tempo_resposta_segundos || 60) / 60);
            }
          }
        }

        // Sessões de estudo reais
        const { data: sessoes } = await supabase
          .from("mentoria_sessoes_estudo")
          .select("inicio, segundos_liquidos")
          .eq("usuario_id", usuarioId)
          .gte("inicio", dataInicio90Dias + "T00:00:00");

        if (sessoes) {
          for (const s of sessoes) {
            const dataIso = s.inicio ? getDataBrasilia(s.inicio) : "";
            if (diasMapa.has(dataIso)) {
              const entry = diasMapa.get(dataIso)!;
              entry.minutos += Math.round((s.segundos_liquidos || 0) / 60);
            }
          }
        }
      } catch (err) {
        console.warn("[MentoriaService] Falha ao consultar telemetria no Supabase:", err);
      }
    }

    // 2. Integração com dados locais se no navegador (Zero data loss)
    if (typeof window !== "undefined") {
      try {
        const rawRespostas = localStorage.getItem("concursos_app_respostas");
        if (rawRespostas) {
          const locais = JSON.parse(rawRespostas);
          if (Array.isArray(locais)) {
            for (const r of locais) {
              const dataIso = r.created_at ? getDataBrasilia(r.created_at) : "";
              if (diasMapa.has(dataIso) && (!usuarioId || r.usuario_id === usuarioId || !r.usuario_id)) {
                const entry = diasMapa.get(dataIso)!;
                // Só incrementa se não veio do Supabase
                if (!supabase) {
                  entry.questoes += 1;
                  entry.minutos += Math.round((r.tempo_resposta || 60) / 60);
                }
              }
            }
          }
        }
      } catch {
        // Ignore local parse errors
      }
    }

    // 3. Montar Heatmap e calcular intensidades
    const heatmap: ActivityHeatmapPoint[] = datasOrdenadas.map((dataIso) => {
      const { minutos, questoes } = diasMapa.get(dataIso) || { minutos: 0, questoes: 0 };
      let intensidade: 0 | 1 | 2 | 3 | 4 = 0;

      if (minutos >= 120 || questoes >= 50) {
        intensidade = 4;
      } else if (minutos >= 60 || questoes >= 30) {
        intensidade = 3;
      } else if (minutos >= 30 || questoes >= 15) {
        intensidade = 2;
      } else if (minutos > 0 || questoes > 0) {
        intensidade = 1;
      }

      return {
        data: dataIso,
        minutos_estudados: minutos,
        questoes_resolvidas: questoes,
        intensidade,
      };
    });

    // 4. Calcular Métricas de Constância (Streaks)
    let totalDiasEstudados = 0;
    let streakAtual = 0;
    let melhorStreak = 0;
    let currentRun = 0;

    for (let i = 0; i < heatmap.length; i++) {
      const pt = heatmap[i];
      if (pt.intensidade > 0) {
        totalDiasEstudados++;
        currentRun++;
        if (currentRun > melhorStreak) {
          melhorStreak = currentRun;
        }
      } else {
        currentRun = 0;
      }
    }

    // Streak atual: contar de hoje para trás no fuso de Brasília
    const hojeIso = getDataBrasilia(new Date());
    const indexHoje = datasOrdenadas.indexOf(hojeIso);
    if (indexHoje !== -1) {
      let i = indexHoje;
      // Se hoje ainda não estudou, verifica se ontem estudou para manter o streak ativo
      if (heatmap[i].intensidade === 0 && i > 0 && heatmap[i - 1].intensidade > 0) {
        i = i - 1;
      }
      while (i >= 0 && heatmap[i].intensidade > 0) {
        streakAtual++;
        i--;
      }
    }

    // Taxa de constância nos últimos 30 dias
    const ultimos30 = heatmap.slice(-30);
    const diasEstudados30 = ultimos30.filter((pt) => pt.intensidade > 0).length;
    const taxaConstancia30 = Math.round((diasEstudados30 / 30) * 100);

    return {
      sequencia_atual_dias: streakAtual,
      melhor_sequencia_dias: Math.max(melhorStreak, streakAtual),
      total_dias_estudados: totalDiasEstudados,
      taxa_constancia_ultimos_30_dias: taxaConstancia30,
      heatmap_90_dias: heatmap,
    };
  }

  static calcularCargaPlanejada(
    disponibilidade: Pick<MentoriaDisponibilidade, "dia_semana" | "minutos_disponiveis">[],
    duracaoBlocoMinutos: number
  ): { minutos_configurados: number; blocos_completos: number; minutos_planejados: number; minutos_restantes: number } {
    const minutosConfigurados = disponibilidade.reduce(
      (acc, dia) => acc + Math.max(0, dia.minutos_disponiveis || 0),
      0
    );
    const duracaoBloco = Math.max(1, duracaoBlocoMinutos || 40);
    const blocosCompletos = Math.floor(minutosConfigurados / duracaoBloco);
    const minutosPlanejados = blocosCompletos * duracaoBloco;

    return {
      minutos_configurados: minutosConfigurados,
      blocos_completos: blocosCompletos,
      minutos_planejados: minutosPlanejados,
      minutos_restantes: minutosConfigurados - minutosPlanejados,
    };
  }

  // ── 5. METAS DE ESTUDO DIÁRIAS E SEMANAIS ──────────────────────────────────
  static async getMetasEstudo(usuarioId: string): Promise<MetasEstudoConfig> {
    const perfil = await this.getPerfil(usuarioId);
    const disponibilidade = await this.getDisponibilidade(usuarioId);

    const hojeDiaSemana = new Date().getDay();
    const dispHoje = disponibilidade.find((d) => d.dia_semana === hojeDiaSemana);

    const metaDiariaQuestoes = perfil?.quantidade_questoes_bloco ? perfil.quantidade_questoes_bloco * 2 : 30;
    const metaDiariaMinutos = dispHoje ? dispHoje.minutos_disponiveis : 120;

    const metaSemanalQuestoes = metaDiariaQuestoes * 6;
    const metaSemanalMinutos = this.calcularCargaPlanejada(
      disponibilidade,
      perfil?.duracao_bloco_minutos || 40
    ).minutos_configurados;

    const hojeIso = getDataBrasilia(new Date());
    let questoesHoje = 0;
    let minutosLiquidosHoje = 0;

    const supabase = this.getClient();
    if (supabase && usuarioId) {
      try {
        const { data: respostasHoje } = await supabase
          .from("respostas_usuarios")
          .select("tempo_resposta_segundos")
          .eq("usuario_id", usuarioId)
          .gte("created_at", hojeIso + "T00:00:00");

        if (respostasHoje) {
          questoesHoje = respostasHoje.length;
          const tempoSegundos = respostasHoje.reduce((acc, r) => acc + (r.tempo_resposta_segundos || 60), 0);
          minutosLiquidosHoje += Math.round(tempoSegundos / 60);
        }

        const { data: sessoesHoje } = await supabase
          .from("mentoria_sessoes_estudo")
          .select("segundos_liquidos")
          .eq("usuario_id", usuarioId)
          .gte("inicio", hojeIso + "T00:00:00");

        if (sessoesHoje) {
          const segs = sessoesHoje.reduce((acc, s) => acc + (s.segundos_liquidos || 0), 0);
          minutosLiquidosHoje += Math.round(segs / 60);
        }
      } catch (err) {
        console.warn("[MentoriaService] Falha ao consultar metas no Supabase:", err);
      }
    }



    const pctQuestoes = metaDiariaQuestoes > 0 ? Math.min(100, Math.round((questoesHoje / metaDiariaQuestoes) * 100)) : 0;
    const pctMinutos = metaDiariaMinutos > 0 ? Math.min(100, Math.round((minutosLiquidosHoje / metaDiariaMinutos) * 100)) : 0;

    return {
      meta_diaria_questoes: metaDiariaQuestoes,
      meta_diaria_minutos: metaDiariaMinutos,
      meta_semanal_questoes: metaSemanalQuestoes,
      meta_semanal_minutos: metaSemanalMinutos,
      questoes_concluidas_hoje: questoesHoje,
      minutos_liquidos_hoje: minutosLiquidosHoje,
      percentual_questoes_hoje: pctQuestoes,
      percentual_minutos_hoje: pctMinutos,
      atingiu_meta_questoes_hoje: questoesHoje >= metaDiariaQuestoes,
      atingiu_meta_horas_hoje: metaDiariaMinutos > 0 && minutosLiquidosHoje >= metaDiariaMinutos,
    };
  }

  // ── 6. GRADE SEMANAL DISTRIBUÍDA COM BLOCOS DE ESTUDO ──────────────────────
  static async getGradeSemanalDistribuida(usuarioId: string): Promise<GradeSemanalDia[]> {
    const disponibilidade = await this.getDisponibilidade(usuarioId);
    const plano = await MentoriaCicloService.obterPlanoCiclo(usuarioId);

    const nomesDias = [
      { nome: "Domingo", curto: "Dom" },
      { nome: "Segunda-feira", curto: "Seg" },
      { nome: "Terça-feira", curto: "Ter" },
      { nome: "Quarta-feira", curto: "Qua" },
      { nome: "Quinta-feira", curto: "Qui" },
      { nome: "Sexta-feira", curto: "Sex" },
      { nome: "Sábado", curto: "Sáb" },
    ];

    const duracaoBloco = plano?.duracao_bloco_minutos || 40;
    const blocosDisponiveis = plano?.blocos || [];
    const carga = this.calcularCargaPlanejada(disponibilidade, duracaoBloco);
    const limiteBlocos = Math.min(carga.blocos_completos, blocosDisponiveis.length);
    const sequencia = Array.from({ length: limiteBlocos }, (_, index) => {
      const posicao = (plano!.posicao_atual_index + index) % blocosDisponiveis.length;
      return blocosDisponiveis[posicao];
    });
    let sequenciaPointer = 0;

    return nomesDias.map((diaInfo, diaIndex) => {
      const disp = disponibilidade.find((d) => d.dia_semana === diaIndex);
      const minutosDisponiveis = Math.max(0, disp?.minutos_disponiveis || 0);
      const numBlocosDia = Math.floor(minutosDisponiveis / duracaoBloco);
      const blocosDia: GradeSemanalDia["blocos"] = [];

      for (let b = 0; b < numBlocosDia && sequenciaPointer < sequencia.length; b++) {
        const blocoModelo = sequencia[sequenciaPointer++];
        blocosDia.push({
          id: `grade-${diaIndex}-${b}-${blocoModelo.id}`,
          ordem: b + 1,
          disciplina_id: blocoModelo.disciplina_id,
          disciplina_nome: blocoModelo.disciplina_nome,
          assunto_id: blocoModelo.assunto_id,
          assunto_nome: blocoModelo.assunto_nome,
          tipo: blocoModelo.tipo,
          duracao_minutos: duracaoBloco,
          prioridade_nivel: blocoModelo.prioridade_nivel,
        });
      }

      const minutosPlanejados = blocosDia.length * duracaoBloco;
      return {
        dia_semana: diaIndex,
        nome_dia: diaInfo.nome,
        nome_curto: diaInfo.curto,
        minutos_disponiveis: minutosDisponiveis,
        minutos_planejados: minutosPlanejados,
        minutos_restantes: Math.max(0, minutosDisponiveis - minutosPlanejados),
        blocos: blocosDia,
      };
    });
  }

  // ── 7. MISSÕES DO DIA COM FILA CONTÍNUA E PROGRESSO REAL ───────────────────
  static async getMissoesDoDia(usuarioId: string): Promise<MissaoDiariaItem[]> {
    const plano = await MentoriaCicloService.obterPlanoCiclo(usuarioId);
    if (!plano || plano.blocos.length === 0) {
      return [];
    }

    const hojeDiaSemana = new Date().getDay();
    const disponibilidade = await this.getDisponibilidade(usuarioId);
    const dispHoje = disponibilidade.find((d) => d.dia_semana === hojeDiaSemana);
    const minutosHoje = Math.max(0, dispHoje?.minutos_disponiveis || 0);
    const duracaoBloco = plano.duracao_bloco_minutos || 40;
    const qtdBlocosHoje = Math.min(6, Math.floor(minutosHoje / duracaoBloco));

    if (qtdBlocosHoje === 0) {
      return [];
    }

    const missoes: MissaoDiariaItem[] = [];
    const posAtual = plano.posicao_atual_index;

    // Buscar respostas de hoje para calcular progresso real por disciplina e assunto (com equivalencias)
    const hojeIso = getDataBrasilia(new Date());
    const respostasHojeDiscMap = new Map<string, number>();
    const respostasHojeAssuntoMap = new Map<string, number>();
    const taxaAcertoMap = new Map<string, number>();
    const statsAssuntoMap = new Map<string, { total: number; acertos: number }>();
    const equivMapMissoes = new Map<string, Set<string>>();
    const tarefasUsuarioMap = new Map<string, any>();
    const tarefasOrdemMap = new Map<number, any>();

    const supabase = this.getClient();
    if (supabase && usuarioId) {
      try {
        const [{ data: respostasHoje }, { data: todasRespostas }, { data: equivs }, { data: tarefasUsuario }] = await Promise.all([
          supabase
            .from("respostas_usuarios")
            .select("disciplina_id, questao_id, correta, created_at, questoes(assunto_id)")
            .eq("usuario_id", usuarioId)
            .gte("created_at", hojeIso + "T00:00:00"),
          supabase
            .from("respostas_usuarios")
            .select("disciplina_id, correta, questoes(assunto_id)")
            .eq("usuario_id", usuarioId),
          supabase
            .from("assunto_equivalencias")
            .select("assunto_questao_id, assunto_edital_id"),
          supabase
            .from("mentoria_tarefas")
            .select("id, plano_id, ordem, status, concluido_em, disciplina_id, assunto_id")
            .eq("usuario_id", usuarioId),
        ]);

        if (tarefasUsuario) {
          for (const t of tarefasUsuario as any[]) {
            if (t.id) tarefasUsuarioMap.set(t.id, t);
            if (typeof t.ordem === "number") tarefasOrdemMap.set(t.ordem, t);
          }
        }

        if (equivs) {
          for (const eq of equivs as any[]) {
            if (eq.assunto_edital_id && eq.assunto_questao_id) {
              if (!equivMapMissoes.has(eq.assunto_edital_id)) equivMapMissoes.set(eq.assunto_edital_id, new Set([eq.assunto_edital_id]));
              equivMapMissoes.get(eq.assunto_edital_id)!.add(eq.assunto_questao_id);
              if (!equivMapMissoes.has(eq.assunto_questao_id)) equivMapMissoes.set(eq.assunto_questao_id, new Set([eq.assunto_questao_id]));
              equivMapMissoes.get(eq.assunto_questao_id)!.add(eq.assunto_edital_id);
            }
          }
        }

        if (respostasHoje) {
          for (const r of respostasHoje as any[]) {
            if (r.disciplina_id) {
              respostasHojeDiscMap.set(r.disciplina_id, (respostasHojeDiscMap.get(r.disciplina_id) || 0) + 1);
            }
            const questaoRel = r.questoes as unknown as { assunto_id?: string } | { assunto_id?: string }[] | null;
            const questao = Array.isArray(questaoRel) ? questaoRel[0] : questaoRel;
            const aId = questao?.assunto_id;
            if (aId) {
              respostasHojeAssuntoMap.set(aId, (respostasHojeAssuntoMap.get(aId) || 0) + 1);
            }
          }
        }

        if (todasRespostas && todasRespostas.length > 0) {
          const statsMap = new Map<string, { total: number; acertos: number }>();
          for (const r of todasRespostas as any[]) {
            if (r.disciplina_id) {
              const current = statsMap.get(r.disciplina_id) || { total: 0, acertos: 0 };
              current.total += 1;
              if (r.correta) current.acertos += 1;
              statsMap.set(r.disciplina_id, current);
            }
            const questaoRel = r.questoes as unknown as { assunto_id?: string } | { assunto_id?: string }[] | null;
            const questao = Array.isArray(questaoRel) ? questaoRel[0] : questaoRel;
            const aId = questao?.assunto_id;
            if (aId) {
              const curA = statsAssuntoMap.get(aId) || { total: 0, acertos: 0 };
              curA.total += 1;
              if (r.correta) curA.acertos += 1;
              statsAssuntoMap.set(aId, curA);
            }
          }
          statsMap.forEach((val, discId) => {
            if (val.total > 0) {
              taxaAcertoMap.set(discId, Math.round((val.acertos / val.total) * 100));
            }
          });
        }
      } catch {
        // Ignore
      }
    }

    for (let i = 0; i < qtdBlocosHoje; i++) {
      const index = (posAtual + i) % plano.blocos.length;
      const bloco = plano.blocos[index];
      const isPrimeiroBloco = i === 0;

      // Calcular status e progresso
      const tDb = (bloco.id && tarefasUsuarioMap.get(bloco.id)) || tarefasOrdemMap.get(bloco.ordem_bloco || (i + 1));
      const isConcluida = tDb?.status === "concluida" || bloco.concluido === true;
      const status: MentoriaTarefaStatus = isConcluida ? "concluida" : isPrimeiroBloco ? "em_andamento" : "pendente";
      let progresso = isConcluida ? 100 : 0;

      let questoesFeitas = 0;
      if (bloco.assunto_id) {
        const matchingAssuntoIds = equivMapMissoes.get(bloco.assunto_id) || new Set([bloco.assunto_id]);
        for (const aId of matchingAssuntoIds) {
          questoesFeitas += respostasHojeAssuntoMap.get(aId) || 0;
        }
      }
      if (questoesFeitas === 0 && bloco.disciplina_id) {
        questoesFeitas = respostasHojeDiscMap.get(bloco.disciplina_id) || 0;
      }

      if (bloco.tipo === "QUESTOES") {
        progresso = Math.min(100, Math.round((questoesFeitas / (bloco.quantidade_questoes_sugerida || 15)) * 100));
      }

      let taxaAcerto: number | undefined = undefined;
      if (bloco.assunto_id) {
        const matchingAssuntoIds = equivMapMissoes.get(bloco.assunto_id) || new Set([bloco.assunto_id]);
        let totAss = 0;
        let acAss = 0;
        for (const aId of matchingAssuntoIds) {
          const st = statsAssuntoMap.get(aId);
          if (st) {
            totAss += st.total;
            acAss += st.acertos;
          }
        }
        if (totAss > 0) {
          taxaAcerto = Math.round((acAss / totAss) * 100);
        }
      }
      if (taxaAcerto === undefined && bloco.disciplina_id) {
        taxaAcerto = taxaAcertoMap.get(bloco.disciplina_id);
      }

      missoes.push({
        id: bloco.id || `missao-${i + 1}-${bloco.disciplina_id.slice(0, 8)}`,
        plano_id: plano.plano_id,
        bloco_ordem: i + 1,
        tipo: bloco.tipo,
        disciplina_id: bloco.disciplina_id,
        disciplina_nome: bloco.disciplina_nome,
        assunto_id: bloco.assunto_id,
        assunto_nome: bloco.assunto_nome,
        duracao_minutos: bloco.duracao_minutos,
        quantidade_questoes: bloco.quantidade_questoes_sugerida || 15,
        prioridade: bloco.prioridade_nivel,
        status,
        motivo_explicabilidade: bloco.motivo_explicabilidade || [],
        progresso_percentual: progresso,
        data_planejada: hojeIso,
        taxa_acerto: taxaAcerto !== undefined ? taxaAcerto : undefined,
        atrasada: false,
      });
    }

    return missoes;
  }

  // ── 8. EDITAL VERTICALIZADO E MATRIZ DE DOMÍNIO DE TÓPICOS ─────────────────
  static async getEditalVerticalizado(usuarioId: string): Promise<EditalVerticalizadoResumo> {
    const supabase = this.getClient();
    let topicosSalvos: MentoriaEditalTopico[] = [];
    const respostasUsuario: { assunto_id: string; correta: boolean; created_at: string }[] = [];

    // Sem backend, preserva somente o cache do próprio usuário; não exibe
    // taxonomia genérica como se fosse o edital oficial selecionado.
    if (!supabase) {
      topicosSalvos = usuarioId
        ? this.getFromStorage<MentoriaEditalTopico[]>(`${STORAGE_KEYS.TOPICOS}_${usuarioId}`, [])
        : [];
      return {
        total_topicos: 0,
        topicos_estudados: 0,
        topicos_dominados: 0,
        percentual_conclusao: 0,
        taxa_acerto_global: 0,
        disciplinas: [],
      };
    }

    try {
      const { data: alvo } = await supabase
        .from("usuario_concurso_alvo")
        .select("edital_id")
        .eq("usuario_id", usuarioId)
        .maybeSingle();

      if (!alvo?.edital_id) {
        return { total_topicos: 0, topicos_estudados: 0, topicos_dominados: 0, percentual_conclusao: 0, taxa_acerto_global: 0, disciplinas: [] };
      }

      const [resTopicosEdital, resTopicosSalvos, resRespostas, resEquivs] = await Promise.all([
        supabase
          .from("edital_topicos")
          .select("disciplina_id, assunto_id, peso, incidencia, ordem, disciplinas(id,nome), assuntos(id,nome)")
          .eq("edital_id", alvo.edital_id)
          .order("ordem", { ascending: true }),
        supabase.from("mentoria_edital_topicos").select("*").eq("usuario_id", usuarioId),
        supabase.from("respostas_usuarios").select("correta, created_at, questoes(assunto_id)").eq("usuario_id", usuarioId),
        supabase.from("assunto_equivalencias").select("assunto_questao_id, assunto_edital_id"),
      ]);

      if (resTopicosEdital.error) throw resTopicosEdital.error;
      if (resRespostas.error) {
        console.error("[mentoriaService] Erro ao carregar respostas_usuarios para estatísticas:", resRespostas.error);
      }
      topicosSalvos = (resTopicosSalvos.data || []) as MentoriaEditalTopico[];

      const equivMap = new Map<string, Set<string>>();
      for (const eq of (resEquivs.data || []) as any[]) {
        if (eq.assunto_edital_id && eq.assunto_questao_id) {
          if (!equivMap.has(eq.assunto_edital_id)) equivMap.set(eq.assunto_edital_id, new Set([eq.assunto_edital_id]));
          equivMap.get(eq.assunto_edital_id)!.add(eq.assunto_questao_id);

          if (!equivMap.has(eq.assunto_questao_id)) equivMap.set(eq.assunto_questao_id, new Set([eq.assunto_questao_id]));
          equivMap.get(eq.assunto_questao_id)!.add(eq.assunto_edital_id);
        }
      }

      const statsPorAssunto = new Map<string, { total: number; acertos: number; ultimaData?: string }>();
      for (const r of (resRespostas.data || []) as any[]) {
        const questaoRel = r.questoes as unknown as { assunto_id?: string } | { assunto_id?: string }[] | null;
        const questao = Array.isArray(questaoRel) ? questaoRel[0] : questaoRel;
        const assuntoId = questao?.assunto_id;
        if (!assuntoId) continue;
        const cur = statsPorAssunto.get(assuntoId) || { total: 0, acertos: 0 };
        cur.total += 1;
        if (r.correta) cur.acertos += 1;
        if (!cur.ultimaData || (r.created_at && r.created_at > cur.ultimaData)) cur.ultimaData = r.created_at;
        statsPorAssunto.set(assuntoId, cur);
      }

      const mapaSalvos = new Map(topicosSalvos.map((t) => [t.assunto_id, t]));
      const grupos = new Map<string, { nome: string; topicos: EditalVerticalizadoItem[] }>();

      for (const row of resTopicosEdital.data || []) {
        const dRel = row.disciplinas as unknown as { id?: string; nome?: string } | { id?: string; nome?: string }[] | null;
        const aRel = row.assuntos as unknown as { id?: string; nome?: string } | { id?: string; nome?: string }[] | null;
        const disc = Array.isArray(dRel) ? dRel[0] : dRel;
        const assunto = Array.isArray(aRel) ? aRel[0] : aRel;
        if (!row.disciplina_id || !row.assunto_id || !disc?.nome || !assunto?.nome) continue;

        const salvo = mapaSalvos.get(row.assunto_id);
        const matchingIds = equivMap.get(row.assunto_id) || new Set([row.assunto_id]);
        let totalAssunto = 0;
        let acertosAssunto = 0;
        let ultimaDataAssunto: string | undefined = undefined;

        for (const assId of matchingIds) {
          const s = statsPorAssunto.get(assId);
          if (s) {
            totalAssunto += s.total;
            acertosAssunto += s.acertos;
            if (s.ultimaData && (!ultimaDataAssunto || s.ultimaData > ultimaDataAssunto)) {
              ultimaDataAssunto = s.ultimaData;
            }
          }
        }
        const stats = { total: totalAssunto, acertos: acertosAssunto, ultimaData: ultimaDataAssunto };
        const taxa = stats.total > 0 ? Math.round((stats.acertos / stats.total) * 100) : 0;
        let status: "nao_iniciado" | "estudando" | "revisando" | "dominado" = "nao_iniciado";
        let estudado = false;
        let dominio = 0;
        if (salvo) {
          status = salvo.status;
          estudado = salvo.estudado || salvo.status !== "nao_iniciado";
          dominio = salvo.percentual_dominio || (status === "dominado" ? 100 : taxa);
        } else if (stats.total >= 15 && taxa >= 80) {
          status = "dominado"; estudado = true; dominio = Math.min(100, taxa);
        } else if (stats.total >= 5) {
          status = "revisando"; estudado = true; dominio = Math.min(80, Math.round(taxa * 0.8));
        } else if (stats.total > 0) {
          status = "estudando"; estudado = true; dominio = Math.min(50, Math.round((stats.total / 10) * 50));
        }

        const pesoNum = typeof row.peso === "number" ? row.peso : 50;
        const peso: "baixo" | "medio" | "alto" | "critico" =
          pesoNum >= 85 ? "critico" : pesoNum >= 65 ? "alto" : pesoNum >= 35 ? "medio" : "baixo";

        const item: EditalVerticalizadoItem = {
          id: salvo?.id || `topico-${row.disciplina_id}-${row.assunto_id}`,
          disciplina_id: row.disciplina_id,
          disciplina_nome: disc.nome,
          assunto_id: row.assunto_id,
          assunto_nome: assunto.nome,
          peso,
          incidencia_percentual: typeof row.incidencia === "number" ? row.incidencia : 0,
          estudado,
          status,
          percentual_dominio: dominio,
          questoes_respondidas: stats.total,
          questoes_acertadas: stats.acertos,
          taxa_acerto: taxa,
          ultima_atividade: stats.ultimaData || salvo?.updated_at || null,
        };

        const grupo = grupos.get(row.disciplina_id) || { nome: disc.nome, topicos: [] };
        // Evita duplicidade do mesmo assunto dentro do mesmo edital.
        if (!grupo.topicos.some((t) => t.assunto_id === row.assunto_id)) grupo.topicos.push(item);
        grupos.set(row.disciplina_id, grupo);
      }

      let total = 0, estudados = 0, dominados = 0, questoes = 0, acertos = 0;
      const disciplinas = Array.from(grupos.entries()).map(([disciplina_id, g]) => {
        const e = g.topicos.filter((t) => t.estudado).length;
        const d = g.topicos.filter((t) => t.status === "dominado").length;
        const q = g.topicos.reduce((n, t) => n + t.questoes_respondidas, 0);
        const ac = g.topicos.reduce((n, t) => n + t.questoes_acertadas, 0);
        total += g.topicos.length; estudados += e; dominados += d; questoes += q; acertos += ac;
        return {
          disciplina_id,
          disciplina_nome: g.nome,
          total_topicos: g.topicos.length,
          topicos_estudados: e,
          topicos_dominados: d,
          percentual_conclusao: g.topicos.length ? Math.round((e / g.topicos.length) * 100) : 0,
          taxa_acerto_media: q ? Math.round((ac / q) * 100) : 0,
          topicos: g.topicos,
        };
      });

      return {
        total_topicos: total,
        topicos_estudados: estudados,
        topicos_dominados: dominados,
        percentual_conclusao: total ? Math.round((estudados / total) * 100) : 0,
        taxa_acerto_global: questoes ? Math.round((acertos / questoes) * 100) : 0,
        disciplinas,
      };
    } catch (err) {
      console.error("[MentoriaService] Erro ao carregar edital verticalizado oficial:", err);
      return { total_topicos: 0, topicos_estudados: 0, topicos_dominados: 0, percentual_conclusao: 0, taxa_acerto_global: 0, disciplinas: [] };
    }
  }

  static async atualizarTopicoStatus(
    usuarioId: string,
    disciplinaId: string,
    assuntoId: string,
    novoStatus: "nao_iniciado" | "estudando" | "revisando" | "dominado"
  ): Promise<boolean> {
    const supabase = this.getClient();
    const estudado = novoStatus !== "nao_iniciado";
    const percentual = novoStatus === "dominado" ? 100 : novoStatus === "revisando" ? 75 : novoStatus === "estudando" ? 40 : 0;
    const now = new Date().toISOString();

    if (supabase && usuarioId) {
      try {
        const { error } = await supabase.from("mentoria_edital_topicos").upsert(
          {
            usuario_id: usuarioId,
            disciplina_id: disciplinaId,
            assunto_id: assuntoId,
            status: novoStatus,
            estudado,
            percentual_dominio: percentual,
            updated_at: now,
          },
          { onConflict: "usuario_id,disciplina_id,assunto_id" }
        );
        if (!error) return true;
      } catch {
        // Fallback local
      }
    }

    // Salvar localmente
    const storageKey = `${STORAGE_KEYS.TOPICOS}_${usuarioId}`;
    const topicos = this.getFromStorage<MentoriaEditalTopico[]>(storageKey, []);
    const idx = topicos.findIndex((t: MentoriaEditalTopico) => t.assunto_id === assuntoId);
    if (idx >= 0) {
      topicos[idx].status = novoStatus;
      topicos[idx].estudado = estudado;
      topicos[idx].percentual_dominio = percentual;
      topicos[idx].updated_at = now;
    } else {
      topicos.push({
        id: `topico-${Date.now()}`,
        usuario_id: usuarioId,
        disciplina_id: disciplinaId,
        assunto_id: assuntoId,
        peso: "medio",
        incidencia: 10,
        estudado,
        percentual_dominio: percentual,
        status: novoStatus,
        questoes_respondidas: 0,
        taxa_acerto: 0,
        created_at: now,
        updated_at: now,
      });
    }
    this.setToStorage(storageKey, topicos);
    return true;
  }
}


