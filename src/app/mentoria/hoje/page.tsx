"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Play,
  Clock,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckSquare2,
  RotateCcw,
  Pause,
  RotateCw,
  Award,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  TrendingUp,
  Check,
  FileText,
  Save,
  AlertTriangle,
  Brain,
  Target,
  ListCheck,
  ChevronLeft,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import { MentoriaQuestoesService } from "@/services/mentoriaQuestoesService";
import { DataService } from "@/services/dataService";
import {
  MentoriaPerfil,
  MentoriaCicloPlanoCompleto,
  MentoriaCicloItem,
  MentoriaCicloStatusSessao,
  Questao,
  MentoriaRevisaoItem,
  MentoriaTopicoFraco,
  MentoriaQuestoesSelecaoResultado,
  Assunto,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuestionCard } from "@/components/questoes/QuestionCard";

export default function MentoriaHojePage() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [planoCiclo, setPlanoCiclo] = useState<MentoriaCicloPlanoCompleto | null>(null);
  const [loading, setLoading] = useState(true);

  // ── ESTADO DO CRONÔMETRO DE ESTUDO REAL ────────────────────────────────────
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [cronometroIniciado, setCronometroIniciado] = useState(false);
  const [segundosLiquidos, setSegundosLiquidos] = useState(0);
  const [pausasContador, setPausasContador] = useState(0);
  const [segundosPausaTotal, setSegundosPausaTotal] = useState(0);
  const [tempoInicioSessao, setTempoInicioSessao] = useState<string | null>(null);

  // Formulário de finalização da sessão
  const [questoesRespondidas, setQuestoesRespondidas] = useState<number>(0);
  const [questoesAcertadas, setQuestoesAcertadas] = useState<number>(0);
  const [observacoesSessao, setObservacoesSessao] = useState<string>("");
  const [finalizando, setFinalizando] = useState(false);
  const [resultadoUltimaSessao, setResultadoUltimaSessao] = useState<{
    status: MentoriaCicloStatusSessao;
    volta_completa: boolean;
    minutos_estudados: number;
    disciplina_nome: string;
  } | null>(null);

  // ── ESTADOS DO ESTUDO GUIADO (RELEASE 4) ───────────────────────────────────
  // Modo Questões
  const [questoesPool, setQuestoesPool] = useState<Questao[]>([]);
  const [indiceQuestaoAtual, setIndiceQuestaoAtual] = useState<number>(0);
  const [loadingQuestoes, setLoadingQuestoes] = useState<boolean>(false);
  const [selecaoResultado, setSelecaoResultado] = useState<MentoriaQuestoesSelecaoResultado | null>(null);
  const [historicoRespostasSessao, setHistoricoRespostasSessao] = useState<
    Map<string, { correta: boolean; alternativaId: string }>
  >(new Map());

  // Modo Revisão
  const [revisoesPendentes, setRevisoesPendentes] = useState<MentoriaRevisaoItem[]>([]);
  const [topicosFracos, setTopicosFracos] = useState<MentoriaTopicoFraco[]>([]);
  const [loadingRevisoes, setLoadingRevisoes] = useState<boolean>(false);
  const [revisaoQuestaoAtiva, setRevisaoQuestaoAtiva] = useState<Questao | null>(null);

  // Modo Teoria
  const [assuntosDisciplina, setAssuntosDisciplina] = useState<Assunto[]>([]);
  const [anotacoesTeoria, setAnotacoesTeoria] = useState<string>("");
  const [anotacoesSalvas, setAnotacoesSalvas] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Carregamento inicial do perfil e ciclo
  useEffect(() => {
    async function carregar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const [p, ciclo] = await Promise.all([
          MentoriaService.getPerfil(user.id),
          MentoriaCicloService.obterPlanoCiclo(user.id),
        ]);
        setPerfil(p);
        setPlanoCiclo(ciclo);
      } catch (err) {
        console.error("Erro ao carregar dados do estudo de hoje:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  // Carregamento dinâmico de dados baseado no bloco ativo
  useEffect(() => {
    async function carregarDadosBloco() {
      if (!user || !planoCiclo?.bloco_atual) return;
      const bloco = planoCiclo.bloco_atual;

      if (bloco.tipo === "QUESTOES") {
        setLoadingQuestoes(true);
        try {
          const resultado = await MentoriaQuestoesService.selecionarQuestoesParaBloco({
            usuarioId: user.id,
            disciplinaId: bloco.disciplina_id,
            disciplinaNome: bloco.disciplina_nome,
            quantidade: Math.max(10, bloco.quantidade_questoes_sugerida || 15),
            nivelUsuario: perfil?.nivel_calculado || "intermediario",
            tipoBloco: "QUESTOES",
          });
          setSelecaoResultado(resultado);
          setQuestoesPool(resultado.questoes);
          setIndiceQuestaoAtual(0);
        } catch (err) {
          console.error("Erro ao carregar questões para bloco ativo:", err);
        } finally {
          setLoadingQuestoes(false);
        }
      } else if (bloco.tipo === "REVISAO") {
        setLoadingRevisoes(true);
        try {
          const [revisoes, fracos, resultadoQuestoes] = await Promise.all([
            MentoriaQuestoesService.obterRevisoesPendentes(user.id, bloco.disciplina_id),
            MentoriaQuestoesService.identificarTopicosFracos(user.id, bloco.disciplina_id),
            MentoriaQuestoesService.selecionarQuestoesParaBloco({
              usuarioId: user.id,
              disciplinaId: bloco.disciplina_id,
              disciplinaNome: bloco.disciplina_nome,
              quantidade: 10,
              nivelUsuario: perfil?.nivel_calculado || "intermediario",
              tipoBloco: "REVISAO",
              apenasErros: true,
            }),
          ]);
          setRevisoesPendentes(revisoes);
          setTopicosFracos(fracos);
          setQuestoesPool(resultadoQuestoes.questoes);
          if (resultadoQuestoes.questoes.length > 0) {
            setRevisaoQuestaoAtiva(resultadoQuestoes.questoes[0]);
          }
        } catch (err) {
          console.error("Erro ao carregar dados de revisão:", err);
        } finally {
          setLoadingRevisoes(false);
        }
      } else if (bloco.tipo === "TEORIA") {
        const assuntos = DataService.getAssuntos(bloco.disciplina_id);
        setAssuntosDisciplina(assuntos);
      }
    }

    carregarDadosBloco();
  }, [user, planoCiclo?.bloco_atual?.id, planoCiclo?.bloco_atual?.disciplina_id, perfil?.nivel_calculado]);

  // Cronômetro de tempo líquido ativo
  useEffect(() => {
    if (cronometroAtivo) {
      timerRef.current = setInterval(() => {
        setSegundosLiquidos((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [cronometroAtivo]);

  // Cronômetro de tempo de pausa
  useEffect(() => {
    if (!cronometroAtivo && cronometroIniciado) {
      pauseTimerRef.current = setInterval(() => {
        setSegundosPausaTotal((prev) => prev + 1);
      }, 1000);
    } else {
      if (pauseTimerRef.current) clearInterval(pauseTimerRef.current);
    }
    return () => {
      if (pauseTimerRef.current) clearInterval(pauseTimerRef.current);
    };
  }, [cronometroAtivo, cronometroIniciado]);

  function handleIniciar() {
    if (!cronometroIniciado) {
      setCronometroIniciado(true);
      setTempoInicioSessao(new Date().toISOString());
    }
    setCronometroAtivo(true);
  }

  function handlePausar() {
    setCronometroAtivo(false);
    setPausasContador((prev) => prev + 1);
  }

  function handleZerar() {
    setCronometroAtivo(false);
    setCronometroIniciado(false);
    setSegundosLiquidos(0);
    setPausasContador(0);
    setSegundosPausaTotal(0);
    setTempoInicioSessao(null);
    setHistoricoRespostasSessao(new Map());
  }

  // Resolução de questão no bloco
  async function handleRespostaQuestao(correta: boolean, questao: Questao, revisaoId?: string) {
    if (!user) return;

    // Se o cronômetro não estiver ativo, inicia automaticamente para contar tempo real
    if (!cronometroIniciado) {
      setCronometroIniciado(true);
      setTempoInicioSessao(new Date().toISOString());
      setCronometroAtivo(true);
    }

    // Atualiza contadores locais
    setQuestoesRespondidas((prev) => prev + 1);
    if (correta) {
      setQuestoesAcertadas((prev) => prev + 1);
    }

    // Registra no mapa da sessão
    setHistoricoRespostasSessao((prev) => {
      const next = new Map(prev);
      next.set(questao.id, { correta, alternativaId: "" });
      return next;
    });

    // Se foi resposta de questão de revisão, atualiza a lista de pendentes
    if (revisaoId && correta) {
      setRevisoesPendentes((prev) => prev.filter((r) => r.id !== revisaoId));
    }

    // Registra no ciclo de mentoria e revisões espaçadas
    try {
      if (revisaoId) {
        await MentoriaQuestoesService.processarProgressoRevisao(user.id, revisaoId, correta);
      } else if (!correta) {
        if (questao.disciplina_id && questao.assunto_id) {
          await MentoriaQuestoesService.agendarRevisaoErro(
            user.id,
            questao.disciplina_id,
            questao.assunto_id,
            "caderno_erros"
          );
        }
      }
    } catch (err) {
      console.warn("Erro ao sincronizar revisão espaçada:", err);
    }
  }

  function handleProximaQuestao() {
    if (indiceQuestaoAtual < questoesPool.length - 1) {
      setIndiceQuestaoAtual((prev) => prev + 1);
    }
  }

  function handleQuestaoAnterior() {
    if (indiceQuestaoAtual > 0) {
      setIndiceQuestaoAtual((prev) => prev - 1);
    }
  }

  // Conclusão e Avanço do Bloco
  async function handleFinalizarSessao() {
    if (!user || !planoCiclo || !planoCiclo.bloco_atual) return;

    setFinalizando(true);
    try {
      const bloco = planoCiclo.bloco_atual;
      const res = await MentoriaCicloService.registrarSessaoConcluida({
        usuario_id: user.id,
        plano_id: planoCiclo.plano_id,
        tarefa_id: bloco.id,
        disciplina_id: bloco.disciplina_id,
        disciplina_nome: bloco.disciplina_nome,
        bloco_ordem: bloco.ordem_bloco,
        tipo: bloco.tipo,
        duracao_planejada_minutos: bloco.duracao_minutos,
        duracao_liquida_segundos: segundosLiquidos,
        questoes_respondidas: questoesRespondidas,
        questoes_acertadas: questoesAcertadas,
        pausas_quantidade: pausasContador,
        pausas_segundos_total: segundosPausaTotal,
        observacoes: anotacoesTeoria ? `${observacoesSessao}\n[Anotações]: ${anotacoesTeoria}` : observacoesSessao,
      });

      if (res.success) {
        setResultadoUltimaSessao({
          status: res.status,
          volta_completa: res.volta_completa,
          minutos_estudados: Math.round(segundosLiquidos / 60),
          disciplina_nome: bloco.disciplina_nome,
        });

        // Recarrega o plano atualizado com o ponteiro avançado
        const planoAtualizado = await MentoriaCicloService.obterPlanoCiclo(user.id);
        if (planoAtualizado) {
          setPlanoCiclo(planoAtualizado);
        }

        // Reseta cronômetro e formulário
        handleZerar();
        setQuestoesRespondidas(0);
        setQuestoesAcertadas(0);
        setObservacoesSessao("");
        setAnotacoesTeoria("");
        setAnotacoesSalvas(false);
      }
    } catch (err) {
      console.error("Erro ao registrar sessão concluída:", err);
    } finally {
      setFinalizando(false);
    }
  }

  const formatarTempo = (totalSegundos: number) => {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  };

  const hojeFormatado = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500">Carregando sessão do ciclo...</p>
      </div>
    );
  }

  const blocoAtual = planoCiclo?.bloco_atual;
  const duracaoPlanejadaSegundos = (blocoAtual?.duracao_minutos || 40) * 60;
  const percentualConcluido = Math.min(
    100,
    Math.round((segundosLiquidos / duracaoPlanejadaSegundos) * 100)
  );

  // Validação pedagógica de dupla condição (tempo >= 70% E questões >= 1 para blocos de questões)
  const atingiuTempoMinimo = percentualConcluido >= 70;
  const blocoQuestoesSemResolucao =
    blocoAtual?.tipo === "QUESTOES" && atingiuTempoMinimo && questoesRespondidas === 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Topo / Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/mentoria"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Dashboard da Mentoria
        </Link>

        <Link
          href="/mentoria/plano"
          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
        >
          Ver Visão Completa do Ciclo
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Header do Estudo de Hoje */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider capitalize">
              {hojeFormatado}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            Estudo Guiado & Execução do Ciclo
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Foco direcionado: estude no seu ritmo. O ciclo avança continuamente conforme sua execução real.
          </p>
        </div>

        {planoCiclo && (
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 px-3.5 py-2 rounded-xl">
            <RotateCw className="w-4 h-4 text-blue-600" />
            <div className="text-xs">
              <span className="font-extrabold text-blue-900 dark:text-blue-200">
                Bloco {planoCiclo.posicao_atual_index + 1} de {planoCiclo.total_blocos_ciclo}
              </span>
              <p className="text-slate-500 font-medium">Volta {planoCiclo.ciclo_concluidos_voltas + 1} do ciclo</p>
            </div>
          </div>
        )}
      </div>

      {/* BANNER DE RESULTADO DA SESSÃO ANTERIOR */}
      {resultadoUltimaSessao && (
        <Card className="border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/30">
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-emerald-950 dark:text-emerald-100">
                  Sessão registrada com sucesso! ({resultadoUltimaSessao.status.toUpperCase()})
                </h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">
                  Você concluiu {resultadoUltimaSessao.minutos_estudados} minutos de {resultadoUltimaSessao.disciplina_nome}. O ponteiro do ciclo avançou automaticamente para o próximo bloco!
                </p>
                {resultadoUltimaSessao.volta_completa && (
                  <p className="text-xs font-black text-indigo-700 dark:text-indigo-300 mt-1 flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Parabéns! Você completou uma volta inteira do Ciclo de Estudos!
                  </p>
                )}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setResultadoUltimaSessao(null)}
              className="font-bold text-xs"
            >
              Dispensar
            </Button>
          </CardContent>
        </Card>
      )}

      {/* BLOCO ATIVO & CRONÔMETRO INTEGRADO */}
      {blocoAtual ? (
        <div className="space-y-6">
          <Card className="border-2 border-blue-500 dark:border-blue-600 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 fill-white" />
                <span className="text-xs font-black uppercase tracking-wider">
                  BLOCO ATIVO DO CICLO #{blocoAtual.ordem_bloco}
                </span>
              </div>
              <Badge variant="secondary" className="font-bold text-xs capitalize">
                Prioridade {blocoAtual.prioridade_nivel} ({blocoAtual.prioridade_score} pts)
              </Badge>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-6">
              {/* Informações da Disciplina */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
                    {blocoAtual.disciplina_nome}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Badge
                      variant={
                        blocoAtual.tipo === "TEORIA"
                          ? "primary"
                          : blocoAtual.tipo === "QUESTOES"
                          ? "success"
                          : "warning"
                      }
                      className="font-bold text-xs"
                    >
                      {blocoAtual.tipo === "TEORIA"
                        ? "ESTUDO TEÓRICO"
                        : blocoAtual.tipo === "QUESTOES"
                        ? "QUESTÕES COMENTADAS"
                        : "REVISÃO ESPAÇADA"}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      Meta: {blocoAtual.duracao_minutos} minutos
                    </span>
                    {blocoAtual.tipo === "QUESTOES" && (
                      <span className="flex items-center gap-1">
                        <CheckSquare2 className="w-3.5 h-3.5 text-emerald-600" />
                        Sugerido: ~{blocoAtual.quantidade_questoes_sugerida} questões
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={`/questoes?busca=${encodeURIComponent(blocoAtual.disciplina_nome)}`}>
                    <Button variant="outline" size="sm" className="font-bold text-xs">
                      Abrir Banco Geral
                    </Button>
                  </Link>
                </div>
              </div>

              {/* CRONÔMETRO DE SESSÃO */}
              <div className="p-6 bg-slate-900 dark:bg-slate-950 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-inner">
                <div className="space-y-1">
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    TEMPO LÍQUIDO CRONOMETRADO
                  </p>
                  <p className="text-4xl sm:text-5xl font-mono font-black text-emerald-400 tracking-tight">
                    {formatarTempo(segundosLiquidos)}
                  </p>
                  <p className="text-xs text-slate-400">
                    Progresso do bloco: {percentualConcluido}% ({Math.round(segundosLiquidos / 60)} de {blocoAtual.duracao_minutos} min)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {!cronometroAtivo ? (
                    <Button
                      size="lg"
                      onClick={handleIniciar}
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold shadow-lg"
                      leftIcon={<Play className="w-5 h-5 fill-white" />}
                    >
                      {cronometroIniciado ? "Continuar" : "Iniciar Bloco"}
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      onClick={handlePausar}
                      className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-extrabold shadow-lg"
                      leftIcon={<Pause className="w-5 h-5" />}
                    >
                      Pausar
                    </Button>
                  )}

                  {cronometroIniciado && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleFinalizarSessao}
                      disabled={finalizando || segundosLiquidos === 0}
                      className="w-full sm:w-auto font-bold border-slate-700 text-white hover:bg-slate-800"
                    >
                      {finalizando ? "Registrando..." : "Finalizar & Avançar"}
                    </Button>
                  )}

                  {segundosLiquidos > 0 && !cronometroAtivo && (
                    <button
                      onClick={handleZerar}
                      title="Zerar cronômetro"
                      className="p-2.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Alerta de Validação Pedagógica Dupla */}
              {blocoQuestoesSemResolucao && (
                <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <p className="font-bold">Atenção para Conclusão Integral do Bloco de Questões:</p>
                    <p>
                      Você atingiu a meta de tempo líquido ({percentualConcluido}%), mas ainda não resolveu nenhuma questão abaixo.
                      Para que a sessão seja registrada com status <strong>Concluída</strong>, resolva pelo menos 1 questão. Caso finalize agora sem questões, o status será registrado como <strong>Parcial</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* Métricas ao Vivo da Sessão */}
              {cronometroIniciado && (
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="block text-slate-500 font-bold mb-1">Questões Resolvidas</span>
                    <span className="text-lg font-black text-slate-900 dark:text-slate-100">
                      {questoesRespondidas}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="block text-slate-500 font-bold mb-1">Acertos</span>
                    <span className="text-lg font-black text-emerald-600">
                      {questoesAcertadas}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="block text-slate-500 font-bold mb-1">Taxa de Acerto</span>
                    <span className="text-lg font-black text-blue-600">
                      {questoesRespondidas > 0
                        ? `${Math.round((questoesAcertadas / questoesRespondidas) * 100)}%`
                        : "0%"}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="block text-slate-500 font-bold mb-1">Pausas Realizadas</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {pausasContador} ({Math.round(segundosPausaTotal / 60)} min)
                    </span>
                  </div>
                </div>
              )}

              {/* Motivo de Explicabilidade do Bloco */}
              {blocoAtual.motivo_explicabilidade && blocoAtual.motivo_explicabilidade.length > 0 && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Por que estou estudando este bloco agora?
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {blocoAtual.motivo_explicabilidade.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* ══════════════════════════════════════════════════════════════════════ */}
          {/* ── EXECUÇÃO GUIADA CONFORME O TIPO DO BLOCO ────────────────────────── */}
          {/* ══════════════════════════════════════════════════════════════════════ */}

          {/* ── 1. BLOCO DE QUESTÕES ── */}
          {blocoAtual.tipo === "QUESTOES" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckSquare2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                    Banco de Questões Selecionadas para o Bloco
                  </h3>
                </div>

                {selecaoResultado && (
                  <Badge variant="outline" className="text-xs font-semibold">
                    {questoesPool.length} questões disponíveis
                  </Badge>
                )}
              </div>

              {loadingQuestoes ? (
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-8 text-center space-y-3">
                    <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-xs text-slate-500 font-medium">
                      Selecionando questões inteligentes para seu nível ({perfil?.nivel_calculado || "intermediario"})...
                    </p>
                  </CardContent>
                </Card>
              ) : questoesPool.length > 0 ? (
                <div className="space-y-4">
                  {/* Seletor Rápido de Questões */}
                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between gap-3 overflow-x-auto">
                    <div className="flex items-center gap-1.5 flex-nowrap">
                      {questoesPool.map((q, idx) => {
                        const respondida = historicoRespostasSessao.has(q.id);
                        const acerto = respondida ? historicoRespostasSessao.get(q.id)?.correta : null;
                        const isAtiva = idx === indiceQuestaoAtual;

                        return (
                          <button
                            key={q.id || idx}
                            onClick={() => setIndiceQuestaoAtual(idx)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all shrink-0 flex items-center justify-center ${
                              isAtiva
                                ? "bg-emerald-600 text-white ring-2 ring-emerald-400"
                                : respondida
                                ? acerto
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                                  : "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300"
                                : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleQuestaoAnterior}
                        disabled={indiceQuestaoAtual === 0}
                        className="p-1.5"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                        {indiceQuestaoAtual + 1} / {questoesPool.length}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleProximaQuestao}
                        disabled={indiceQuestaoAtual === questoesPool.length - 1}
                        className="p-1.5"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Card da Questão Ativa Reutilizando QuestionCard */}
                  <QuestionCard
                    questao={questoesPool[indiceQuestaoAtual]}
                    numeroQuestao={indiceQuestaoAtual + 1}
                    totalQuestoes={questoesPool.length}
                    onRespostaSalva={(correta) =>
                      handleRespostaQuestao(correta, questoesPool[indiceQuestaoAtual])
                    }
                    onProxima={handleProximaQuestao}
                  />
                </div>
              ) : (
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-8 text-center space-y-3">
                    <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                      Nenhuma questão encontrada para {blocoAtual.disciplina_nome}
                    </h4>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Não há questões cadastradas para esta disciplina no momento. Você pode realizar a leitura teórica e finalizar o bloco normalmente.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* ── 2. BLOCO DE REVISÃO ── */}
          {blocoAtual.tipo === "REVISAO" && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                  Central de Revisão Espaçada (D+1, D+7, D+30) & Caderno de Erros
                </h3>
              </div>

              {loadingRevisoes ? (
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-8 text-center space-y-3">
                    <div className="w-8 h-8 border-3 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-xs text-slate-500 font-medium">Buscando tópicos de revisão pendentes...</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Tópicos com Revisões Pendentes */}
                  {revisoesPendentes.length > 0 && (
                    <Card className="border-amber-200 dark:border-amber-900/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-bold flex items-center justify-between">
                          <span>Revisões Espaçadas Vencidas ou para Hoje ({revisoesPendentes.length})</span>
                          <Badge variant="warning" size="sm">Atenção Prioritária</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {revisoesPendentes.map((rev) => (
                          <div
                            key={rev.id}
                            className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between text-xs"
                          >
                            <div className="space-y-0.5">
                              <span className="font-bold text-slate-900 dark:text-slate-100">
                                Etapa {rev.etapa} (Intervalo {rev.intervalo_dias}d)
                              </span>
                              <p className="text-slate-500">
                                Próxima revisão: {rev.proxima_revisao} • Origem: {rev.origem}
                              </p>
                            </div>
                            <Badge variant="outline">
                              Status: {rev.status}
                            </Badge>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Tópicos Fracos Identificados */}
                  {topicosFracos.length > 0 && (
                    <Card className="border-rose-200 dark:border-rose-950/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-bold text-rose-950 dark:text-rose-200 flex items-center gap-2">
                          <Brain className="w-4 h-4 text-rose-600" />
                          Tópicos com Maior Taxa de Erro na Disciplina
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {topicosFracos.slice(0, 3).map((tf) => (
                          <div
                            key={tf.assunto_id}
                            className="p-3 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 rounded-xl flex items-center justify-between text-xs"
                          >
                            <div>
                              <p className="font-bold text-slate-900 dark:text-slate-100">
                                {tf.assunto_nome || `Tópico ${tf.assunto_id}`}
                              </p>
                              <p className="text-slate-500">
                                {tf.total_erros} erros em {tf.total_respostas} resoluções ({tf.taxa_erro}% erro)
                              </p>
                            </div>
                            <Badge variant="error">
                              {tf.taxa_erro}% Erro
                            </Badge>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Questões de Erro para Refazer */}
                  {questoesPool.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <CheckSquare2 className="w-4 h-4 text-emerald-600" />
                        Questões do Caderno de Erros para Fixação
                      </h4>
                      <QuestionCard
                        questao={questoesPool[indiceQuestaoAtual]}
                        numeroQuestao={indiceQuestaoAtual + 1}
                        totalQuestoes={questoesPool.length}
                        onRespostaSalva={(correta) =>
                          handleRespostaQuestao(
                            correta,
                            questoesPool[indiceQuestaoAtual],
                            revisoesPendentes[0]?.id
                          )
                        }
                        onProxima={handleProximaQuestao}
                      />
                    </div>
                  )}

                  {revisoesPendentes.length === 0 && topicosFracos.length === 0 && questoesPool.length === 0 && (
                    <Card className="border-slate-200 dark:border-slate-800">
                      <CardContent className="p-8 text-center space-y-3">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                          Nenhuma revisão pendente para {blocoAtual.disciplina_nome}
                        </h4>
                        <p className="text-xs text-slate-500 max-w-md mx-auto">
                          Seu caderno de erros e revisões espaçadas estão em dia para esta matéria. Você pode aproveitar o tempo para revisar seus resumos e anotações teóricas.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── 3. BLOCO DE TEORIA ── */}
          {blocoAtual.tipo === "TEORIA" && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                  Roteiro de Estudo Teórico & Resumo da Sessão
                </h3>
              </div>

              {/* Tópicos da Disciplina */}
              {assuntosDisciplina.length > 0 && (
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                      <ListCheck className="w-4 h-4 text-blue-600" />
                      Tópicos Recomendados para Esta Disciplina
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {assuntosDisciplina.slice(0, 6).map((assunto) => (
                        <div
                          key={assunto.id}
                          className="p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800 text-xs flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                          <span className="font-medium text-slate-800 dark:text-slate-200 truncate">
                            {assunto.nome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Box de Anotações e Resumo Teórico */}
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      Anotações de Estudo / Resumo Próprio
                    </span>
                    {anotacoesSalvas && (
                      <Badge variant="success" size="sm" className="text-[10px]">
                        Anotações Salvas
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <textarea
                    rows={6}
                    value={anotacoesTeoria}
                    onChange={(e) => {
                      setAnotacoesTeoria(e.target.value);
                      setAnotacoesSalvas(false);
                    }}
                    placeholder="Escreva seus principais pontos de atenção, mnemônicos, artigos de lei ou fórmulas estudadas neste bloco..."
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] text-slate-500">
                      Suas anotações serão salvas junto com o histórico de conclusão deste bloco.
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setAnotacoesSalvas(true)}
                      disabled={!anotacoesTeoria.trim()}
                      className="font-bold text-xs"
                      leftIcon={<Save className="w-3.5 h-3.5" />}
                    >
                      Salvar Resumo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* PRÓXIMOS BLOCOS NA FILA CONTÍNUA */}
          {planoCiclo.blocos.length > 1 && (
            <div className="space-y-3 pt-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Próximos Blocos do Ciclo
              </h3>

              <div className="space-y-2">
                {planoCiclo.blocos.slice(0, 4).map((bloco, idx) => {
                  if (idx === planoCiclo.posicao_atual_index) return null;

                  return (
                    <div
                      key={bloco.id || idx}
                      className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs flex items-center justify-center">
                          {bloco.ordem_bloco}
                        </span>
                        <div>
                          <p className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                            {bloco.disciplina_nome}
                          </p>
                          <p className="text-xs text-slate-500">
                            {bloco.tipo} • {bloco.duracao_minutos} minutos • Prioridade {bloco.prioridade_nivel}
                          </p>
                        </div>
                      </div>

                      <Badge variant="outline" className="text-xs font-semibold">
                        Aguardando
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-full flex items-center justify-center mx-auto">
              <RotateCw className="w-6 h-6" />
            </div>
            <h3 className="font-black text-lg text-slate-900 dark:text-slate-100">
              Nenhum ciclo ativo no momento
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Gere seu ciclo de estudos adaptativo para receber o roteiro diário com cronômetro integrado.
            </p>
            <Link href="/mentoria/plano">
              <Button variant="primary" size="md">
                Gerar Meu Ciclo de Estudos
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Orientação Pedagógica sobre Dia Perdido */}
      <Card className="border-blue-200 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/20">
        <CardContent className="p-5 flex items-start gap-3.5">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-blue-950 dark:text-blue-100">
              Princípio do Ciclo Contínuo Adaptativo
            </h4>
            <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
              O ciclo não depende do dia do calendário. Se você teve um imprevisto e não pôde estudar hoje, você <strong>não acumula matéria atrasada</strong> nem perde tarefas. Quando você puder voltar aos estudos, basta abrir esta página e continuar exatamente do próximo bloco pendente.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
