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
    taxaAcerto: number = 50
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
        d.taxa_acerto ?? 50
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
      const blocosRestantes = totalBlocosDisponiveis - numDisciplinas;

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

          const blocosJaDistribuidos = distribuicaoFracionada.reduce((acc, curr) => acc + curr.inteiro, 0);
          const sobra = blocosRestantes - blocosJaDistribuidos;

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
   * 4. Determinação do Status da Sessão de Estudo (Condição Dupla na Release 4).
   *
   * Regra:
   * - Teoria / Revisão: >= 70% do tempo planejado concluído => 'concluida'
   * - Questões: >= 70% do tempo planejado E >= 1 questão respondida => 'concluida'
   * - Se tempo >= 70% mas questoes < 1 em bloco de QUESTOES => 'parcial'
   * - > 0% e < 70% => 'parcial'
   * - 0% => 'abandonada'
   */
  static determinarStatusSessao(
    tempoPlanejadoMinutos: number,
    tempoLiquidoSegundos: number,
    tipo?: MentoriaTarefaTipo,
    questoesRespondidas?: number
  ): MentoriaCicloStatusSessao {
    const planejadoSegundos = Math.max(1, tempoPlanejadoMinutos * 60);
    const liquidoSegundos = Math.max(0, tempoLiquidoSegundos);
    const percentual = (liquidoSegundos / planejadoSegundos) * 100;

    if (percentual >= 70) {
      if (tipo === "QUESTOES" && (!questoesRespondidas || questoesRespondidas < 1)) {
        return "parcial";
      }
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
              assunto_id: t.assunto_id || undefined,
              assunto_nome: t.assunto_nome || undefined,
              tipo: (t.tipo as MentoriaTarefaTipo) || "TEORIA",
              duracao_minutos: t.duracao_prevista_minutos || 40,
              quantidade_questoes_sugerida: t.quantidade_questoes || 15,
              prioridade_score: t.prioridade === "alta" ? 80 : t.prioridade === "baixa" ? 30 : 55,
              prioridade_nivel: (t.prioridade as "baixa" | "media" | "alta") || "media",
              motivo_explicabilidade: t.motivo_recomendacao ? t.motivo_recomendacao.split(" | ") : [],
              concluido: t.status === "concluida",
            }));
          }

          // Planos criados antes da inclusão de assuntos podem ter blocos sem
          // assunto_id/assunto_nome. Enriquece o plano ativo com a taxonomia real
          // do Supabase e persiste o snapshot corrigido para todas as telas usarem
          // exatamente a mesma sequência.
          if (blocos.length > 0 && blocos.some((b) => !b.assunto_id || !b.assunto_nome)) {
            const disciplinaIds = Array.from(new Set(blocos.map((b) => b.disciplina_id).filter(Boolean)));
            if (disciplinaIds.length > 0) {
              const { data: assuntosDb } = await supabase
                .from("assuntos")
                .select("id, disciplina_id, nome, ordem")
                .in("disciplina_id", disciplinaIds)
                .order("ordem", { ascending: true });

              const assuntosPorDisciplina = new Map<string, Array<{ id: string; nome: string }>>();
              for (const assunto of assuntosDb || []) {
                const lista = assuntosPorDisciplina.get(assunto.disciplina_id) || [];
                lista.push({ id: assunto.id, nome: assunto.nome });
                assuntosPorDisciplina.set(assunto.disciplina_id, lista);
              }

              const cursor = new Map<string, number>();
              let alterado = false;
              blocos = blocos.map((bloco) => {
                if (bloco.assunto_id && bloco.assunto_nome) return bloco;
                const lista = assuntosPorDisciplina.get(bloco.disciplina_id) || [];
                if (lista.length === 0) return bloco;
                const indice = cursor.get(bloco.disciplina_id) || 0;
                const assunto = lista[indice % lista.length];
                cursor.set(bloco.disciplina_id, indice + 1);
                alterado = true;
                return { ...bloco, assunto_id: assunto.id, assunto_nome: assunto.nome };
              });

              if (alterado) {
                await supabase
                  .from("mentoria_planos")
                  .update({ estrutura_ciclo: blocos, updated_at: new Date().toISOString() })
                  .eq("id", planoDb.id);
              }
            }
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

    // 2. Cache local só é contingência quando Supabase não está disponível.
    // Em sessão autenticada com backend configurado, o banco é a fonte autoritativa.
    if (!supabase) {
      const planoLocal = this.obterPlanoLocal(usuarioId);
      if (planoLocal) return planoLocal;
    }

    // 3. Se não existe no backend, gera automaticamente o primeiro ciclo
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

    // O diagnóstico serve para PONTUAR as disciplinas, não para definir sozinho
    // quais matérias pertencem ao ciclo. Antes, um diagnóstico parcial com duas
    // matérias gerava um ciclo permanentemente restrito a essas duas matérias.
    const diagnosticoPorDisciplina = new Map(
      (diagnostico?.disciplinas || [])
        .filter((d) => Boolean(d.disciplina_id))
        .map((d) => [d.disciplina_id, d] as const)
    );

    if (supabase) {
      try {
        // O edital selecionado é a fonte autoritativa das disciplinas do ciclo.
        // Não inferimos o conteúdo programático pelas questões do concurso.
        const { data: alvo } = await supabase
          .from("usuario_concurso_alvo")
          .select("edital_id")
          .eq("usuario_id", usuarioId)
          .maybeSingle();

        if (!alvo?.edital_id) {
          return { success: false, error: "Selecione um concurso, cargo e edital oficial no Perfil antes de gerar o plano." };
        }

        const { data: topicosEdital, error: topicosErr } = await supabase
          .from("edital_topicos")
          .select("disciplina_id, assunto_id, peso, incidencia, ordem, disciplinas(id,nome)")
          .eq("edital_id", alvo.edital_id)
          .order("ordem", { ascending: true });

        if (topicosErr) throw topicosErr;
        if (!topicosEdital || topicosEdital.length === 0) {
          return { success: false, error: "O edital selecionado ainda não possui conteúdo programático cadastrado. O plano não será preenchido com tópicos genéricos." };
        }

        const desempenhoPorDisciplina = new Map<string, { respondidas: number; acertos: number }>();
        try {
          const { data: respostas } = await supabase
            .from("respostas_usuarios")
            .select("correta, questoes!inner(disciplina_id)")
            .eq("usuario_id", usuarioId)
            .limit(5000);
          for (const resposta of respostas || []) {
            const relacao = resposta.questoes as unknown as { disciplina_id?: string } | { disciplina_id?: string }[] | null;
            const disciplinaId = Array.isArray(relacao) ? relacao[0]?.disciplina_id : relacao?.disciplina_id;
            if (!disciplinaId) continue;
            const atual = desempenhoPorDisciplina.get(disciplinaId) || { respondidas: 0, acertos: 0 };
            atual.respondidas += 1;
            if (resposta.correta) atual.acertos += 1;
            desempenhoPorDisciplina.set(disciplinaId, atual);
          }
        } catch (err) {
          console.warn("[MentoriaCicloService] Falha ao consolidar desempenho por disciplina:", err);
        }

        const porDisciplina = new Map<string, { nome: string; pesos: number[]; incidencias: number[] }>();
        for (const t of topicosEdital) {
          const rel = t.disciplinas as unknown as { id?: string; nome?: string } | { id?: string; nome?: string }[] | null;
          const disc = Array.isArray(rel) ? rel[0] : rel;
          if (!t.disciplina_id || !disc?.nome) continue;
          const atual = porDisciplina.get(t.disciplina_id) || { nome: disc.nome, pesos: [], incidencias: [] };
          if (typeof t.peso === "number") atual.pesos.push(t.peso);
          if (typeof t.incidencia === "number") atual.incidencias.push(t.incidencia);
          porDisciplina.set(t.disciplina_id, atual);
        }

        disciplinasInput = Array.from(porDisciplina.entries()).map(([id, meta]) => {
          const diag = diagnosticoPorDisciplina.get(id);
          const desempenho = desempenhoPorDisciplina.get(id);
          const taxaHistorica = desempenho && desempenho.respondidas > 0 ? Math.round((desempenho.acertos / desempenho.respondidas) * 100) : null;
          const pesoMedio = meta.pesos.length ? meta.pesos.reduce((a,b)=>a+b,0) / meta.pesos.length : 50;
          const incidenciaMedia = meta.incidencias.length ? meta.incidencias.reduce((a,b)=>a+b,0) / meta.incidencias.length : 50;
          const pesoBase = Math.max(1, Math.min(100, Math.round((pesoMedio + incidenciaMedia) / 2)));
          return {
            disciplina_id: id,
            disciplina_nome: meta.nome,
            score_diagnostico: diag?.score_final ?? taxaHistorica ?? 50,
            nivel_diagnostico: diag?.nivel_calculado ?? "intermediario",
            peso_base: pesoBase,
            taxa_acerto: taxaHistorica ?? diag?.percentual_acerto ?? 50,
          };
        });
      } catch (err) {
        console.warn("[MentoriaCicloService] Falha ao montar disciplinas do edital selecionado:", err);
        return { success: false, error: "Não foi possível carregar o conteúdo programático do edital selecionado." };
      }
    }

    if (disciplinasInput.length === 0) {
      return { success: false, error: "Nenhuma disciplina válida foi encontrada no edital selecionado." };
    }

    const duracaoBlocoMinutos = perfil.duracao_bloco_minutos || 40;
    const questoesPorBloco = perfil.quantidade_questoes_bloco || 15;

    // 4. Executa o Motor Matemático
    const prioridades = this.distribuirOrcamentoTempo(
      disciplinasInput,
      metaSemanalMinutos,
      duracaoBlocoMinutos
    );

    let blocos = this.gerarSequenciaBlocosCiclo(
      prioridades,
      duracaoBlocoMinutos,
      questoesPorBloco
    );

    // Vincula os blocos somente aos assuntos pertencentes ao edital alvo.
    if (supabase && blocos.length > 0) {
      try {
        const { data: alvo } = await supabase.from("usuario_concurso_alvo").select("edital_id").eq("usuario_id", usuarioId).maybeSingle();
        const { data: topicos } = alvo?.edital_id
          ? await supabase.from("edital_topicos").select("disciplina_id, assunto_id, ordem, assuntos(id,nome)").eq("edital_id", alvo.edital_id).order("ordem", { ascending: true })
          : { data: [] };

        const assuntosPorDisciplina = new Map<string, Array<{ id: string; nome: string }>>();
        for (const t of topicos || []) {
          const rel = t.assuntos as unknown as { id?: string; nome?: string } | { id?: string; nome?: string }[] | null;
          const assunto = Array.isArray(rel) ? rel[0] : rel;
          if (!t.disciplina_id || !t.assunto_id || !assunto?.nome) continue;
          const lista = assuntosPorDisciplina.get(t.disciplina_id) || [];
          lista.push({ id: t.assunto_id, nome: assunto.nome });
          assuntosPorDisciplina.set(t.disciplina_id, lista);
        }

        const cursor = new Map<string, number>();
        blocos = blocos.map((bloco) => {
          const lista = assuntosPorDisciplina.get(bloco.disciplina_id) || [];
          if (lista.length === 0) return bloco;
          const indice = cursor.get(bloco.disciplina_id) || 0;
          const assunto = lista[indice % lista.length];
          cursor.set(bloco.disciplina_id, indice + 1);
          return { ...bloco, assunto_id: assunto.id, assunto_nome: assunto.nome };
        });
      } catch (err) {
        console.warn("[MentoriaCicloService] Falha ao vincular assuntos do edital alvo:", err);
      }
    }

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
      ciclo_posicao_atual: 0,
      ciclo_concluidos_contagem: 0,
      prioridades_disciplinas: prioridades,
      estrutura_ciclo: blocos,
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
            assunto_id: b.assunto_id || null,
            titulo: b.assunto_nome ? `${b.disciplina_nome} — ${b.assunto_nome}` : b.disciplina_nome,
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

    // Esta rotina representa uma conclusão explicitamente confirmada pelo usuário.
    // O limiar de 70% continua útil como recomendação na UI, mas não deve
    // reclassificar uma conclusão confirmada como parcial.
    const status: MentoriaCicloStatusSessao = "concluida";

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

    // Uma chamada a registrarSessaoConcluida é uma conclusão confirmada e sempre avança.
    const deveAvancar = true;
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
            ciclo_posicao_atual: nova_posicao,
            ciclo_concluidos_contagem: novasVoltas,
            updated_at: agoraIso,
          })
          .eq("id", planoAtual.plano_id)
          .eq("usuario_id", input.usuario_id);

        // Sincroniza automaticamente o tópico do edital com o estudo realmente concluído.
        // A conclusão de qualquer bloco ligado a um assunto tira o tópico de "não iniciado".
        const blocoConcluido = planoAtual.blocos.find((b) => b.id === input.tarefa_id) || planoAtual.blocos[planoAtual.posicao_atual_index];
        const assuntoConcluidoId = blocoConcluido?.assunto_id || null;
        if (input.disciplina_id && assuntoConcluidoId) {
          const { data: topicoAtual } = await supabase
            .from("mentoria_edital_topicos")
            .select("id,status,percentual_dominio")
            .eq("usuario_id", input.usuario_id)
            .eq("disciplina_id", input.disciplina_id)
            .eq("assunto_id", assuntoConcluidoId)
            .maybeSingle();
          if (topicoAtual) {
            const statusAtual = topicoAtual.status || "nao_iniciado";
            await supabase.from("mentoria_edital_topicos").update({
              estudado: true,
              status: statusAtual === "nao_iniciado" ? "estudando" : statusAtual,
              percentual_dominio: Math.max(Number(topicoAtual.percentual_dominio) || 0, 30),
              updated_at: agoraIso,
            }).eq("id", topicoAtual.id).eq("usuario_id", input.usuario_id);
          }
        }

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
   * Registra uma sessão parcial interrompida ("Encerrar sem concluir").
   * Salva o tempo líquido no histórico de sessões e incrementa minutos estudados no plano,
   * mas NUNCA avança o ciclo, NUNCA incrementa voltas e NUNCA marca a tarefa como concluída.
   */
  static async registrarSessaoParcial(
    input: MentoriaRegistroSessaoInput
  ): Promise<{
    success: boolean;
    status: "parcial";
    nova_posicao: number;
    volta_completa: boolean;
  }> {
    const duracaoPlanejadaMinutos =
      input.duracao_planejada_minutos || input.duracao_prevista_minutos || 40;
    const duracaoLiquidaSegundos =
      input.duracao_liquida_segundos ?? input.segundos_liquidos ?? 0;
    const pausasQtd = input.pausas_quantidade ?? input.pausas ?? 0;
    const pausasSegundos = input.pausas_segundos_total ?? input.segundos_pausa ?? 0;
    const blocoOrdem = input.bloco_ordem ?? input.bloco_numero ?? 1;
    const questoesRespondidas = input.questoes_respondidas ?? input.questoes_feitas ?? 0;
    const questoesAcertadas = input.questoes_acertadas ?? input.questoes_acertos ?? 0;

    const supabase = this.getClient();
    const agoraIso = new Date().toISOString();

    // 1. Grava a sessão em mentoria_sessoes_estudo com status explicitamente parcial
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
            status: "parcial",
            bloco_numero: blocoOrdem,
            disciplina_id: input.disciplina_id,
            disciplina_nome: input.disciplina_nome,
            tipo: input.tipo || "TEORIA",
            duracao_planejada_minutos: duracaoPlanejadaMinutos,
            questoes_respondidas: questoesRespondidas,
            questoes_acertadas: questoesAcertadas,
            obs: input.observacoes || "Encerrado sem concluir",
          }),
        };

        const { error: sessErr } = await supabase.from("mentoria_sessoes_estudo").insert(sessaoPayload);
        if (sessErr) {
          console.warn("[MentoriaCicloService] Erro ao gravar mentoria_sessoes_estudo parcial:", sessErr.message);
        }
      } catch (err) {
        console.error("[MentoriaCicloService] Exceção ao gravar sessão parcial:", err);
      }
    }

    // 2. Carrega plano atual para atualizar apenas minutos estudados
    const planoAtual = await this.obterPlanoCiclo(input.usuario_id);
    if (!planoAtual) {
      return { success: true, status: "parcial", nova_posicao: 0, volta_completa: false };
    }

    const minutosAdicionados = Math.round(duracaoLiquidaSegundos / 60);
    const novosMinutosConcluidos = planoAtual.minutos_concluidos + minutosAdicionados;
    const posicaoMantida = planoAtual.posicao_atual_index;
    const voltasMantidas = planoAtual.ciclo_concluidos_voltas;

    // 3. Atualiza mentoria_planos (mantém posicao e contagem de voltas RIGOROSAMENTE inalteradas)
    if (supabase && planoAtual.plano_id && !planoAtual.plano_id.startsWith("plano-ciclo-")) {
      try {
        await supabase
          .from("mentoria_planos")
          .update({
            minutos_concluidos: novosMinutosConcluidos,
            ciclo_posicao_atual: posicaoMantida,
            ciclo_concluidos_contagem: voltasMantidas,
            updated_at: agoraIso,
          })
          .eq("id", planoAtual.plano_id)
          .eq("usuario_id", input.usuario_id);
      } catch (err) {
        console.error("[MentoriaCicloService] Erro ao atualizar minutos no plano:", err);
      }
    }

    // Atualiza objeto em memória e cache local mantendo o mesmo bloco
    planoAtual.posicao_atual_index = posicaoMantida;
    planoAtual.ciclo_concluidos_voltas = voltasMantidas;
    planoAtual.minutos_concluidos = novosMinutosConcluidos;
    planoAtual.bloco_atual = planoAtual.blocos[posicaoMantida] || null;
    planoAtual.proximo_bloco =
      planoAtual.blocos[(posicaoMantida + 1) % planoAtual.total_blocos_ciclo] || null;
    planoAtual.blocos_restantes_na_volta = Math.max(0, planoAtual.total_blocos_ciclo - posicaoMantida);

    this.salvarPlanoLocal(input.usuario_id, planoAtual);

    return {
      success: true,
      status: "parcial",
      nova_posicao: posicaoMantida,
      volta_completa: false,
    };
  }

  /**
   * Atualização manual de posição do ciclo (ex: pular bloco sob autorização do usuário).
   */
  static async pularBloco(usuarioId: string): Promise<{ success: boolean; plano?: MentoriaCicloPlanoCompleto; error?: string }> {
    const plano = await this.obterPlanoCiclo(usuarioId);
    if (!plano || plano.total_blocos_ciclo === 0) {
      return { success: false, error: "Nenhum ciclo ativo disponível." };
    }

    const { nova_posicao, volta_completa } = this.avancarPosicaoCiclo(
      plano.posicao_atual_index,
      plano.total_blocos_ciclo
    );
    const novasVoltas = plano.ciclo_concluidos_voltas + (volta_completa ? 1 : 0);
    const supabase = this.getClient();

    if (supabase && plano.plano_id && !plano.plano_id.startsWith("plano-ciclo-")) {
      try {
        const { data, error } = await supabase
          .from("mentoria_planos")
          .update({
            ciclo_posicao_atual: nova_posicao,
            ciclo_concluidos_contagem: novasVoltas,
            updated_at: new Date().toISOString(),
          })
          .eq("id", plano.plano_id)
          .eq("usuario_id", usuarioId)
          .select("id");

        if (error) {
          return { success: false, error: error.message };
        }
        if (!data || data.length !== 1) {
          return {
            success: false,
            error: "O ciclo não foi atualizado. Verifique sua permissão e tente novamente.",
          };
        }
      } catch (err) {
        console.error("[MentoriaCicloService] Erro ao pular bloco:", err);
        return { success: false, error: "Não foi possível persistir o novo bloco." };
      }
    }

    plano.posicao_atual_index = nova_posicao;
    plano.ciclo_concluidos_voltas = novasVoltas;
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
