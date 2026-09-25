import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  MentoriaCicloDisciplinaPrioridade,
  MentoriaCicloItem,
  MentoriaCicloPlanoCompleto,
  MentoriaCicloStatusSessao,
  MentoriaRegistroSessaoInput,
  MentoriaNivelCalculado,
  MentoriaTarefaTipo,
} from "@/types";
import { MentoriaService } from "./mentoriaService";
import { MentoriaDiagnosticoService } from "./mentoriaDiagnosticoService";

const STORAGE_CICLO_PREFIX = "concursos_app_ciclo_";

export class MentoriaCicloService {
  private static getClient() {
    if (!isSupabaseConfigured) return null;
    return createClient();
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── MOTOR MATEMÁTICO DETERMINÍSTICO DO CICLO ──────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  /**
   * 1. Cálculo de Score de Prioridade por Disciplina.
   *
   * Fórmula Normalizada [0, 100]:
   * - Deficiência = 100 - ScoreDiagnostico (peso 55%)
   * - Peso Edital / Relevância Concurso = PesoBase (peso 35%)
   * - Fator Taxa de Acerto Recente:
   *     < 50% => +10 pts
   *     < 70% => +5 pts
   *     >= 85% => -5 pts
   *     70%..84% => 0 pts
   *
   * ScoreBruto = (Deficiência * 0.55) + (PesoBase * 0.35) + FatorTaxaAcerto
   * PrioridadeScore = Clamp(0, 100, Math.round(ScoreBruto))
   */
  static calcularScorePrioridade(
    scoreDiagnostico: number,
    pesoBase: number = 50,
    taxaAcerto: number = 50,
    disciplinaNome: string = "Disciplina"
  ): {
    prioridade_score: number;
    prioridade_nivel: "baixa" | "media" | "alta";
    motivo_explicabilidade: string[];
  } {
    const scoreDiagNorm = Math.max(0, Math.min(100, Math.round(scoreDiagnostico)));
    const pesoBaseNorm = Math.max(1, Math.min(100, Math.round(pesoBase)));
    const taxaAcertoNorm = Math.max(0, Math.min(100, Math.round(taxaAcerto)));

    // 1. Deficiência baseada no diagnóstico
    const deficiencia = 100 - scoreDiagNorm;

    // 2. Fator de urgência por taxa de acerto
    let fatorTaxaAcerto = 0;
    let descTaxa = `Taxa de acerto recente de ${taxaAcertoNorm}% (impacto neutro)`;
    if (taxaAcertoNorm < 50) {
      fatorTaxaAcerto = 10;
      descTaxa = `Taxa de acerto baixa (${taxaAcertoNorm}%) aumenta a urgência em +10 pts`;
    } else if (taxaAcertoNorm < 70) {
      fatorTaxaAcerto = 5;
      descTaxa = `Taxa de acerto moderada (${taxaAcertoNorm}%) adiciona +5 pts de reforço`;
    } else if (taxaAcertoNorm >= 85) {
      fatorTaxaAcerto = -5;
      descTaxa = `Taxa de acerto elevada (${taxaAcertoNorm}%) atenua a prioridade em -5 pts`;
    }

    // 3. Score ponderado
    const bruto = (deficiencia * 0.55) + (pesoBaseNorm * 0.35) + fatorTaxaAcerto;
    const prioridadeScore = Math.max(0, Math.min(100, Math.round(bruto)));

    // 4. Classificação categórica
    let prioridadeNivel: "baixa" | "media" | "alta" = "media";
    if (prioridadeScore >= 70) {
      prioridadeNivel = "alta";
    } else if (prioridadeScore < 40) {
      prioridadeNivel = "baixa";
    }

    // 5. Explicabilidade matemática
    const explicabilidade = [
      `Nivelamento diagnóstico de ${scoreDiagNorm}/100 gerou deficiência de ${deficiencia} pts (peso 55%).`,
      `Peso estratégico no edital/concurso definido em ${pesoBaseNorm}/100 (peso 35%).`,
      descTaxa,
      `Score final de prioridade calculado em ${prioridadeScore}/100 (${prioridadeNivel.toUpperCase()}).`,
    ];

    return {
      prioridade_score: prioridadeScore,
      prioridade_nivel: prioridadeNivel,
      motivo_explicabilidade: explicabilidade,
    };
  }

  /**
   * 2. Distribuição de Orçamento de Tempo Semanal (Hamilton-Hare / Restos Maiores).
   *
   * Garante:
   * - Total de minutos distribuídos === Meta Semanal de Minutos
   * - Cada disciplina ativa recebe no mínimo 1 bloco (se houver blocos suficientes)
   * - Proporcionalidade exata baseada nos scores de prioridade
   */
  static distribuirOrcamentoTempo(
    disciplinasInput: Array<{
      disciplina_id: string;
      disciplina_nome: string;
      score_diagnostico: number;
      nivel_diagnostico: MentoriaNivelCalculado;
      peso_base?: number;
      taxa_acerto?: number;
    }>,
    metaSemanalMinutos: number,
    duracaoBlocoMinutos: number = 40
  ): MentoriaCicloDisciplinaPrioridade[] {
    if (!disciplinasInput || disciplinasInput.length === 0 || metaSemanalMinutos <= 0) {
      return [];
    }

    const blocoMin = Math.max(15, duracaoBlocoMinutos || 40);
    const totalBlocosDisponiveis = Math.max(1, Math.floor(metaSemanalMinutos / blocoMin));
    const numDisciplinas = disciplinasInput.length;

    // Calcula prioridades individuais
    const comPrioridade = disciplinasInput.map((d) => {
      const { prioridade_score, prioridade_nivel, motivo_explicabilidade } = this.calcularScorePrioridade(
        d.score_diagnostico,
        d.peso_base ?? 50,
        d.taxa_acerto ?? 50,
        d.disciplina_nome
      );
      return {
        disciplina_id: d.disciplina_id,
        disciplina_nome: d.disciplina_nome,
        score_diagnostico: d.score_diagnostico,
        nivel_diagnostico: d.nivel_diagnostico,
        peso_base: d.peso_base ?? 50,
        prioridade_score,
        prioridade_nivel,
        motivo_explicabilidade,
        blocos: 0,
        minutos: 0,
      };
    });

    // Ordena da maior para menor prioridade
    comPrioridade.sort((a, b) => b.prioridade_score - a.prioridade_score);

    // Caso tenhamos blocos suficientes para atender a regra de mínimo 1 bloco por disciplina
    if (totalBlocosDisponiveis >= numDisciplinas) {
      comPrioridade.forEach((d) => (d.blocos = 1));
      let blocosRestantes = totalBlocosDisponiveis - numDisciplinas;

      if (blocosRestantes > 0) {
        const somaScores = comPrioridade.reduce((acc, curr) => acc + curr.prioridade_score, 0);

        if (somaScores > 0) {
          // Método dos Restos Maiores (Hamilton-Hare)
          const distribuicaoFracionada = comPrioridade.map((d) => {
            const ideal = (d.prioridade_score / somaScores) * blocosRestantes;
            return {
              disciplina_id: d.disciplina_id,
              inteiro: Math.floor(ideal),
              resto: ideal - Math.floor(ideal),
            };
          });

          distribuicaoFracionada.forEach((df) => {
            const disc = comPrioridade.find((d) => d.disciplina_id === df.disciplina_id);
            if (disc) disc.blocos += df.inteiro;
          });

          let blocosJaDistribuidos = distribuicaoFracionada.reduce((acc, curr) => acc + curr.inteiro, 0);
          let sobra = blocosRestantes - blocosJaDistribuidos;

          // Distribui as sobras para os maiores restos
          distribuicaoFracionada.sort((a, b) => b.resto - a.resto);
          for (let i = 0; i < sobra; i++) {
            const targetId = distribuicaoFracionada[i % distribuicaoFracionada.length].disciplina_id;
            const targetDisc = comPrioridade.find((d) => d.disciplina_id === targetId);
            if (targetDisc) targetDisc.blocos += 1;
          }
        } else {
          for (let i = 0; i < blocosRestantes; i++) {
            comPrioridade[i % numDisciplinas].blocos += 1;
          }
        }
      }
    } else {
      // Restrição severa: aloca 1 bloco apenas para as disciplinas de maior prioridade
      for (let i = 0; i < totalBlocosDisponiveis; i++) {
        comPrioridade[i].blocos = 1;
      }
    }

    const totalMinutosCiclo = comPrioridade.reduce((acc, curr) => acc + (curr.blocos * blocoMin), 0);

    return comPrioridade.map((d) => {
      const minutosSemanais = d.blocos * blocoMin;
      const porcentagem = totalMinutosCiclo > 0
        ? Number(((minutosSemanais / totalMinutosCiclo) * 100).toFixed(1))
        : 0;

      return {
        disciplina_id: d.disciplina_id,
        disciplina_nome: d.disciplina_nome,
        score_diagnostico: d.score_diagnostico,
        nivel_diagnostico: d.nivel_diagnostico,
        peso_base: d.peso_base,
        prioridade_score: d.prioridade_score,
        prioridade_nivel: d.prioridade_nivel,
        minutos_semanais: minutosSemanais,
        blocos_semanais: d.blocos,
        porcentagem_tempo: porcentagem,
        motivo_explicabilidade: d.motivo_explicabilidade,
      };
    });
  }

  /**
   * 3. Intercalação Equilibrada de Disciplinas (Priority Gap Interleaving) e Tipos de Estudo.
   */
  static gerarSequenciaBlocosCiclo(
    disciplinasPriorizadas: MentoriaCicloDisciplinaPrioridade[],
    duracaoBlocoMinutos: number = 40,
    questoesPorBloco: number = 15
  ): MentoriaCicloItem[] {
    if (!disciplinasPriorizadas || disciplinasPriorizadas.length === 0) {
      return [];
    }

    const blocoMin = Math.max(15, duracaoBlocoMinutos || 40);
    const qtdQuestoesSugeridas = Math.max(5, questoesPorBloco || 15);

    const pool = disciplinasPriorizadas
      .filter((d) => d.blocos_semanais > 0)
      .map((d) => ({
        disciplina_id: d.disciplina_id,
        disciplina_nome: d.disciplina_nome,
        prioridade_score: d.prioridade_score,
        prioridade_nivel: d.prioridade_nivel,
        motivo_explicabilidade: d.motivo_explicabilidade,
        restantes: d.blocos_semanais,
        total_alocado: 0,
      }));

    const totalBlocos = pool.reduce((acc, curr) => acc + curr.restantes, 0);
    const sequencia: MentoriaCicloItem[] = [];
    let ultimaDisciplinaId = "";

    for (let i = 0; i < totalBlocos; i++) {
      const disponiveis = pool.filter((p) => p.restantes > 0);
      if (disponiveis.length === 0) break;

      let candidatos = disponiveis.filter((p) => p.disciplina_id !== ultimaDisciplinaId);
      if (candidatos.length === 0) {
        candidatos = disponiveis;
      }

      candidatos.sort((a, b) => {
        if (b.restantes !== a.restantes) {
          return b.restantes - a.restantes;
        }
        return b.prioridade_score - a.prioridade_score;
      });

      const escolhida = candidatos[0];
      escolhida.restantes -= 1;
      escolhida.total_alocado += 1;
      ultimaDisciplinaId = escolhida.disciplina_id;

      let tipoEstudo: MentoriaTarefaTipo = "TEORIA";
      if (escolhida.total_alocado === 1) {
        tipoEstudo = "TEORIA";
      } else if (escolhida.total_alocado === 2) {
        tipoEstudo = "QUESTOES";
      } else if (escolhida.total_alocado % 2 === 1) {
        tipoEstudo = "REVISAO";
      } else {
        tipoEstudo = "QUESTOES";
      }

      sequencia.push({
        id: `bloco-${i + 1}-${escolhida.disciplina_id.slice(0, 8)}`,
        ordem_bloco: i + 1,
        disciplina_id: escolhida.disciplina_id,
        disciplina_nome: escolhida.disciplina_nome,
        tipo: tipoEstudo,
        duracao_minutos: blocoMin,
        quantidade_questoes_sugerida: qtdQuestoesSugeridas,
        prioridade_score: escolhida.prioridade_score,
        prioridade_nivel: escolhida.prioridade_nivel,
        motivo_explicabilidade: escolhida.motivo_explicabilidade,
        concluido: false,
      });
    }

    return sequencia;
  }

  /**
   * 4. Determinação do Status da Sessão de Estudo.
   *
   * Regra:
   * - >= 70% do tempo planejado concluído => 'concluida'
   * - > 0% e < 70% => 'parcial'
   * - 0% => 'abandonada'
   */
  static determinarStatusSessao(
    tempoPlanejadoMinutos: number,
    tempoLiquidoSegundos: number
  ): MentoriaCicloStatusSessao {
    const planejadoSegundos = Math.max(1, tempoPlanejadoMinutos * 60);
    const liquidoSegundos = Math.max(0, tempoLiquidoSegundos);
    const percentual = (liquidoSegundos / planejadoSegundos) * 100;

    if (percentual >= 70) {
      return "concluida";
    }
    if (liquidoSegundos > 0) {
      return "parcial";
    }
    return "abandonada";
  }

  /**
   * 5. Avanço Contínuo da Posição do Ciclo (Index Pointer).
   */
  static avancarPosicaoCiclo(
    posicaoAtual: number,
    totalBlocos: number
  ): { nova_posicao: number; volta_completa: boolean } {
    if (totalBlocos <= 0) {
      return { nova_posicao: 0, volta_completa: false };
    }

    const proxima = (posicaoAtual + 1) % totalBlocos;
    const voltaCompleta = proxima === 0;

    return {
      nova_posicao: proxima,
      volta_completa: voltaCompleta,
    };
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── PERSISTÊNCIA E INTEGRAÇÃO SUPABASE + LOCALSTORAGE ─────────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  /**
   * Obter ou inicializar o Ciclo Adaptativo Completo para o usuário.
   */
  static async obterPlanoCiclo(usuarioId: string): Promise<MentoriaCicloPlanoCompleto | null> {
    if (!usuarioId) return null;

    const supabase = this.getClient();

    // 1. Tenta carregar plano ativo existente do Supabase
    if (supabase) {
      try {
        const { data: planoDb, error: pErr } = await supabase
          .from("mentoria_planos")
          .select("*")
          .eq("usuario_id", usuarioId)
          .eq("status", "ativo")
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (!pErr && planoDb) {
          // Busca tarefas associadas ao plano
          const { data: tarefasDb } = await supabase
            .from("mentoria_tarefas")
            .select("*")
            .eq("plano_id", planoDb.id)
            .order("ordem", { ascending: true });

          const prioridades = (planoDb.prioridades_disciplinas as MentoriaCicloDisciplinaPrioridade[]) || [];
          let blocos: MentoriaCicloItem[] = (planoDb.estrutura_ciclo as MentoriaCicloItem[]) || [];

          if (blocos.length === 0 && tarefasDb && tarefasDb.length > 0) {
            blocos = tarefasDb.map((t) => ({
              id: t.id,
              ordem_bloco: t.ordem,
              disciplina_id: t.disciplina_id || "disc-geral",
              disciplina_nome: t.titulo || "Disciplina",
              tipo: (t.tipo as MentoriaTarefaTipo) || "TEORIA",
              duracao_minutos: t.duracao_prevista_minutos || 40,
              quantidade_questoes_sugerida: t.quantidade_questoes || 15,
              prioridade_score: t.prioridade === "alta" ? 80 : t.prioridade === "baixa" ? 30 : 55,
              prioridade_nivel: (t.prioridade as "baixa" | "media" | "alta") || "media",
              motivo_explicabilidade: t.motivo_recomendacao ? t.motivo_recomendacao.split(" | ") : [],
              concluido: t.status === "concluida",
            }));
          }

          if (blocos.length > 0) {
            // Verifica se há cache local com a posição atual e voltas
            const cached = this.obterPlanoLocal(usuarioId);
            const posicaoAtual = planoDb.ciclo_posicao_atual ?? cached?.posicao_atual_index ?? 0;
            const voltasContagem = planoDb.ciclo_concluidos_contagem ?? cached?.ciclo_concluidos_voltas ?? 0;

            const blocoAtual = blocos[posicaoAtual] || blocos[0] || null;
            const proximoIndex = (posicaoAtual + 1) % blocos.length;
            const proximoBloco = blocos[proximoIndex] || null;
            const blocosRestantes = Math.max(0, blocos.length - posicaoAtual);

            const planoCompleto: MentoriaCicloPlanoCompleto = {
              plano_id: planoDb.id,
              usuario_id: usuarioId,
              versao: planoDb.versao || 1,
              data_inicio: planoDb.data_inicio || new Date().toISOString(),
              meta_semanal_minutos: planoDb.meta_semanal_minutos || cached?.meta_semanal_minutos || 720,
              minutos_concluidos: planoDb.minutos_concluidos || cached?.minutos_concluidos || 0,
              duracao_bloco_minutos: blocos[0]?.duracao_minutos || 40,
              total_blocos_ciclo: blocos.length,
              posicao_atual_index: posicaoAtual,
              ciclo_concluidos_voltas: voltasContagem,
              disciplinas_prioridades: prioridades.length > 0 ? prioridades : (cached?.disciplinas_prioridades || []),
              blocos,
              bloco_atual: blocoAtual,
              proximo_bloco: proximoBloco,
              blocos_restantes_na_volta: blocosRestantes,
            };

            this.salvarPlanoLocal(usuarioId, planoCompleto);
            return planoCompleto;
          }
        }
      } catch (err) {
        console.warn("[MentoriaCicloService] Falha ao consultar Supabase, consultando cache local:", err);
      }
    }

    // 2. Tenta recuperar do cache local
    const planoLocal = this.obterPlanoLocal(usuarioId);
    if (planoLocal) {
      return planoLocal;
    }

    // 3. Se não existe, gera automaticamente o primeiro ciclo
    const gerado = await this.gerarOuRecalcularCiclo(usuarioId);
    if (gerado.success && gerado.plano) {
      return gerado.plano;
    }

    return null;
  }

  /**
   * Recalcula ou cria o ciclo de estudos do usuário com dados reais do diagnóstico e disponibilidade.
   */
  static async gerarOuRecalcularCiclo(
    usuarioId: string
  ): Promise<{ success: boolean; plano?: MentoriaCicloPlanoCompleto; error?: string }> {
    if (!usuarioId) {
      return { success: false, error: "Usuário não autenticado." };
    }

    const supabase = this.getClient();

    // 1. Obter Perfil
    const perfil = await MentoriaService.getPerfil(usuarioId);
    if (!perfil) {
      return { success: false, error: "Perfil da mentoria não encontrado. Configure seu perfil primeiro." };
    }

    // 2. Obter Disponibilidade
    const disponibilidade = await MentoriaService.getDisponibilidade(usuarioId);
    const metaSemanalMinutos = disponibilidade.reduce((acc, curr) => acc + curr.minutos_disponiveis, 0);

    if (metaSemanalMinutos <= 0) {
      return {
        success: false,
        error: "Disponibilidade semanal zerada. Configure seus horários de estudo na aba Configurar.",
      };
    }

    // 3. Obter Diagnóstico Concluído ou Ativo
    const diagnostico = await MentoriaDiagnosticoService.getDiagnosticoAtivo(usuarioId);
    let disciplinasInput: Array<{
      disciplina_id: string;
      disciplina_nome: string;
      score_diagnostico: number;
      nivel_diagnostico: MentoriaNivelCalculado;
      peso_base?: number;
      taxa_acerto?: number;
    }> = [];

    if (diagnostico && diagnostico.disciplinas && diagnostico.disciplinas.length > 0) {
      disciplinasInput = diagnostico.disciplinas.map((d, index) => ({
        disciplina_id: d.disciplina_id || `disc-${index}`,
        disciplina_nome: d.disciplina_nome,
        score_diagnostico: d.score_final ?? 50,
        nivel_diagnostico: d.nivel_calculado ?? "intermediario",
        peso_base: 50,
        taxa_acerto: d.percentual_acerto ?? 50,
      }));
    } else {
      // Se não concluiu diagnóstico, busca disciplinas do concurso/sistema
      if (supabase) {
        try {
          const { data: dbDiscs } = await supabase.from("disciplinas").select("id, nome").limit(6);
          if (dbDiscs && dbDiscs.length > 0) {
            disciplinasInput = dbDiscs.map((d) => ({
              disciplina_id: d.id,
              disciplina_nome: d.nome,
              score_diagnostico: 50,
              nivel_diagnostico: "intermediario",
              peso_base: 50,
              taxa_acerto: 50,
            }));
          }
        } catch {
          // Ignore
        }
      }

      // Fallback padrão se não houver disciplinas
      if (disciplinasInput.length === 0) {
        disciplinasInput = [
          { disciplina_id: "disc-portugues", disciplina_nome: "Língua Portuguesa", score_diagnostico: 50, nivel_diagnostico: "intermediario", peso_base: 60, taxa_acerto: 50 },
          { disciplina_id: "disc-const", disciplina_nome: "Direito Constitucional", score_diagnostico: 40, nivel_diagnostico: "basico", peso_base: 70, taxa_acerto: 45 },
          { disciplina_id: "disc-admin", disciplina_nome: "Direito Administrativo", score_diagnostico: 45, nivel_diagnostico: "basico", peso_base: 70, taxa_acerto: 40 },
          { disciplina_id: "disc-rlm", disciplina_nome: "Raciocínio Lógico", score_diagnostico: 35, nivel_diagnostico: "iniciante", peso_base: 50, taxa_acerto: 30 },
        ];
      }
    }

    const duracaoBlocoMinutos = perfil.duracao_bloco_minutos || 40;
    const questoesPorBloco = perfil.quantidade_questoes_bloco || 15;

    // 4. Executa o Motor Matemático
    const prioridades = this.distribuirOrcamentoTempo(
      disciplinasInput,
      metaSemanalMinutos,
      duracaoBlocoMinutos
    );

    const blocos = this.gerarSequenciaBlocosCiclo(
      prioridades,
      duracaoBlocoMinutos,
      questoesPorBloco
    );

    if (blocos.length === 0) {
      return { success: false, error: "Não foi possível gerar os blocos de estudo." };
    }

    // 5. Determina a versão do plano
    let novaVersao = 1;
    let planoId = `plano-ciclo-${usuarioId}-${Date.now()}`;
    const hojeData = new Date().toISOString().split("T")[0];

    if (supabase) {
      try {
        const { data: planoAntigo } = await supabase
          .from("mentoria_planos")
          .select("id, versao")
          .eq("usuario_id", usuarioId)
          .eq("status", "ativo")
          .order("versao", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (planoAntigo) {
          novaVersao = (planoAntigo.versao || 1) + 1;
          // Arquiva o plano anterior
          await supabase
            .from("mentoria_planos")
            .update({ status: "arquivado" })
            .eq("id", planoAntigo.id);
        }
      } catch (err) {
        console.warn("[MentoriaCicloService] Erro ao verificar versão anterior do plano:", err);
      }
    }

    const agoraIso = new Date().toISOString();
    const payloadPlano = {
      usuario_id: usuarioId,
      data_inicio: hojeData,
      status: "ativo",
      versao: novaVersao,
      meta_semanal_minutos: metaSemanalMinutos,
      minutos_concluidos: 0,
      updated_at: agoraIso,
    };

    // 6. Grava plano no Supabase
    if (supabase) {
      try {
        const { data: insertedPlano, error: insErr } = await supabase
          .from("mentoria_planos")
          .insert(payloadPlano)
          .select()
          .single();

        if (insErr) {
          console.error("[MentoriaCicloService] Erro ao gravar plano no Supabase:", insErr.message);
        } else if (insertedPlano) {
          planoId = insertedPlano.id;

          // Grava tarefas do plano em mentoria_tarefas
          const tarefasPayload = blocos.map((b) => ({
            plano_id: planoId,
            usuario_id: usuarioId,
            data: hojeData,
            ordem: b.ordem_bloco,
            tipo: b.tipo,
            disciplina_id: b.disciplina_id.startsWith("disc-") ? null : b.disciplina_id,
            titulo: b.disciplina_nome,
            duracao_prevista_minutos: b.duracao_minutos,
            quantidade_questoes: b.quantidade_questoes_sugerida,
            prioridade: b.prioridade_nivel,
            motivo_recomendacao: b.motivo_explicabilidade.join(" | "),
            status: "pendente",
          }));

          await supabase.from("mentoria_tarefas").insert(tarefasPayload);
        }
      } catch (err) {
        console.error("[MentoriaCicloService] Exceção ao gravar plano:", err);
      }
    }

    const planoCompleto: MentoriaCicloPlanoCompleto = {
      plano_id: planoId,
      usuario_id: usuarioId,
      versao: novaVersao,
      data_inicio: agoraIso,
      meta_semanal_minutos: metaSemanalMinutos,
      minutos_concluidos: 0,
      duracao_bloco_minutos: duracaoBlocoMinutos,
      total_blocos_ciclo: blocos.length,
      posicao_atual_index: 0,
      ciclo_concluidos_voltas: 0,
      disciplinas_prioridades: prioridades,
      blocos,
      bloco_atual: blocos[0] || null,
      proximo_bloco: blocos[1] || blocos[0] || null,
      blocos_restantes_na_volta: blocos.length,
    };

    this.salvarPlanoLocal(usuarioId, planoCompleto);
    return { success: true, plano: planoCompleto };
  }

  /**
   * Registra a conclusão ou término de uma sessão de estudo real no cronômetro.
   */
  static async registrarSessaoConcluida(
    input: MentoriaRegistroSessaoInput
  ): Promise<{
    success: boolean;
    status: MentoriaCicloStatusSessao;
    nova_posicao: number;
    volta_completa: boolean;
    error?: string;
  }> {
    if (!input.usuario_id || !input.plano_id) {
      return { success: false, status: "abandonada", nova_posicao: 0, volta_completa: false, error: "Dados incompletos." };
    }

    const duracaoPlanejadaMinutos = input.duracao_planejada_minutos || input.duracao_prevista_minutos || 0;
    const duracaoLiquidaSegundos = input.duracao_liquida_segundos ?? input.segundos_liquidos ?? 0;
    const pausasQtd = input.pausas_quantidade ?? input.pausas ?? 0;
    const pausasSegundos = input.pausas_segundos_total ?? input.segundos_pausa ?? 0;
    const blocoOrdem = input.bloco_ordem ?? input.bloco_numero ?? 1;
    const questoesRespondidas = input.questoes_respondidas ?? input.questoes_feitas ?? 0;
    const questoesAcertadas = input.questoes_acertadas ?? input.questoes_acertos ?? 0;

    const status = this.determinarStatusSessao(
      duracaoPlanejadaMinutos,
      duracaoLiquidaSegundos
    );

    const supabase = this.getClient();
    const agoraIso = new Date().toISOString();

    // 1. Grava a sessão em mentoria_sessoes_estudo
    if (supabase) {
      try {
        const sessaoPayload = {
          usuario_id: input.usuario_id,
          tarefa_id: input.tarefa_id && !input.tarefa_id.startsWith("bloco-") ? input.tarefa_id : null,
          inicio: agoraIso,
          fim: agoraIso,
          segundos_liquidos: duracaoLiquidaSegundos,
          pausas: pausasQtd,
          segundos_pausa: pausasSegundos,
          observacoes: JSON.stringify({
            status,
            bloco_numero: blocoOrdem,
            disciplina_id: input.disciplina_id,
            disciplina_nome: input.disciplina_nome,
            tipo: input.tipo || "TEORIA",
            duracao_planejada_minutos: duracaoPlanejadaMinutos,
            questoes_respondidas: questoesRespondidas,
            questoes_acertadas: questoesAcertadas,
            obs: input.observacoes || "",
          }),
        };

        const { error: sessErr } = await supabase.from("mentoria_sessoes_estudo").insert(sessaoPayload);
        if (sessErr) {
          console.warn("[MentoriaCicloService] Erro ao gravar mentoria_sessoes_estudo:", sessErr.message);
        }
      } catch (err) {
        console.error("[MentoriaCicloService] Exceção ao gravar sessão:", err);
      }
    }

    // 2. Carrega plano atual para atualizar posição e minutos acumulados
    const planoAtual = await this.obterPlanoCiclo(input.usuario_id);
    if (!planoAtual) {
      return { success: true, status, nova_posicao: 0, volta_completa: false };
    }

    // Regra: Somente avança o ponteiro se a sessão foi concluída (>= 70% do tempo)
    const deveAvancar = status === "concluida";
    const { nova_posicao, volta_completa } = deveAvancar
      ? this.avancarPosicaoCiclo(
          planoAtual.posicao_atual_index,
          planoAtual.total_blocos_ciclo
        )
      : { nova_posicao: planoAtual.posicao_atual_index, volta_completa: false };

    const minutosAdicionados = Math.round(duracaoLiquidaSegundos / 60);
    const novosMinutosConcluidos = planoAtual.minutos_concluidos + minutosAdicionados;
    const novasVoltas = planoAtual.ciclo_concluidos_voltas + (volta_completa ? 1 : 0);

    // 3. Atualiza mentoria_planos
    if (supabase && planoAtual.plano_id && !planoAtual.plano_id.startsWith("plano-ciclo-")) {
      try {
        await supabase
          .from("mentoria_planos")
          .update({
            minutos_concluidos: novosMinutosConcluidos,
            updated_at: agoraIso,
          })
          .eq("id", planoAtual.plano_id)
          .eq("usuario_id", input.usuario_id);

        if (input.tarefa_id && deveAvancar) {
          await supabase
            .from("mentoria_tarefas")
            .update({
              status: "concluida",
              duracao_real_segundos: duracaoLiquidaSegundos,
              questoes_feitas: questoesRespondidas,
              questoes_acertos: questoesAcertadas,
              concluido_em: agoraIso,
            })
            .eq("id", input.tarefa_id);
        }
      } catch (err) {
        console.error("[MentoriaCicloService] Erro ao atualizar posição no plano:", err);
      }
    }

    // Atualiza objeto em memória e local
    planoAtual.posicao_atual_index = nova_posicao;
    planoAtual.ciclo_concluidos_voltas = novasVoltas;
    planoAtual.minutos_concluidos = novosMinutosConcluidos;
    planoAtual.bloco_atual = planoAtual.blocos[nova_posicao] || null;
    planoAtual.proximo_bloco = planoAtual.blocos[(nova_posicao + 1) % planoAtual.total_blocos_ciclo] || null;
    planoAtual.blocos_restantes_na_volta = Math.max(0, planoAtual.total_blocos_ciclo - nova_posicao);

    this.salvarPlanoLocal(input.usuario_id, planoAtual);

    return {
      success: true,
      status,
      nova_posicao,
      volta_completa,
    };
  }

  /**
   * Atualização manual de posição do ciclo (ex: pular bloco sob autorização do usuário).
   */
  static async pularBloco(usuarioId: string): Promise<{ success: boolean; plano?: MentoriaCicloPlanoCompleto }> {
    const plano = await this.obterPlanoCiclo(usuarioId);
    if (!plano) return { success: false };

    const { nova_posicao, volta_completa } = this.avancarPosicaoCiclo(
      plano.posicao_atual_index,
      plano.total_blocos_ciclo
    );

    plano.posicao_atual_index = nova_posicao;
    if (volta_completa) plano.ciclo_concluidos_voltas += 1;
    plano.bloco_atual = plano.blocos[nova_posicao] || null;
    plano.proximo_bloco = plano.blocos[(nova_posicao + 1) % plano.total_blocos_ciclo] || null;
    plano.blocos_restantes_na_volta = Math.max(0, plano.total_blocos_ciclo - nova_posicao);

    this.salvarPlanoLocal(usuarioId, plano);
    return { success: true, plano };
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // ── HELPERS DE STORAGE LOCAL (CACHE) ──────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════════

  private static obterPlanoLocal(usuarioId: string): MentoriaCicloPlanoCompleto | null {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem(`${STORAGE_CICLO_PREFIX}${usuarioId}`);
      if (!raw) return null;
      return JSON.parse(raw) as MentoriaCicloPlanoCompleto;
    } catch {
      return null;
    }
  }

  private static salvarPlanoLocal(usuarioId: string, plano: MentoriaCicloPlanoCompleto): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(`${STORAGE_CICLO_PREFIX}${usuarioId}`, JSON.stringify(plano));
    } catch (err) {
      console.warn("[MentoriaCicloService] Falha ao gravar cache local do ciclo:", err);
    }
  }
}
