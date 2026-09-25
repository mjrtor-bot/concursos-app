import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  MentoriaPerfil,
  MentoriaDisponibilidade,
  MentoriaEditalTopico,
  MentoriaPlano,
  MentoriaTarefa,
  MentoriaSessaoEstudo,
  MentoriaRevisao,
  MentoriaDashboardStats,
  MentoriaDiaProgresso,
  MentoriaNivel,
  MentoriaHorario,
  MentoriaPrioridade,
} from "@/types";

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

export class MentoriaService {
  // ── Helper: Obter cliente Supabase ─────────────────────────────────────────
  private static getClient() {
    if (!isSupabaseConfigured) return null;
    return createClient();
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

        if (!error && data) {
          // Atualiza cache local
          if (typeof window !== "undefined") {
            try {
              localStorage.setItem(`${STORAGE_KEYS.PERFIL}_${usuarioId}`, JSON.stringify(data));
            } catch {
              // Ignore storage errors
            }
          }
          return data as MentoriaPerfil;
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
        } else if (data) {
          savedPerfil = data as MentoriaPerfil;
        }
      } catch (err) {
        console.error("[MentoriaService] Exceção ao salvar perfil no Supabase:", err);
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
    const metaSemanalMinutos = disponibilidade.reduce((acc, curr) => acc + curr.minutos_disponiveis, 0);

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
}
