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
  ChevronRight,
  Check,
  FileText,
  Save,
  AlertTriangle,
  Brain,
  ListCheck,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  PlusCircle,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import { MentoriaQuestoesService } from "@/services/mentoriaQuestoesService";
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
  MissaoDiariaItem,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { QuestionCard } from "@/components/questoes/QuestionCard";
import { DailyMissionCard } from "@/components/planejamento/DailyMissionCard";

export default function MentoriaHojePage() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [planoCiclo, setPlanoCiclo] = useState<MentoriaCicloPlanoCompleto | null>(null);
  const [loading, setLoading] = useState(true);
  const [hojeFormatado] = useState(() => {
    try {
      return new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());
    } catch {
      return "";
    }
  });

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
  const [, setRevisaoQuestaoAtiva] = useState<Questao | null>(null);

  // Modo Teoria
  const [assuntoRoteiro, setAssuntoRoteiro] = useState<Assunto | null>(null);
  const [conteudosAssunto, setConteudosAssunto] = useState<Array<{id:string;titulo:string;orientacao?:string;lei_seca?:string;lei_seca_url?:string;pdf_url?:string;video_url?:string}>>([]);
  const [anotacoesTeoria, setAnotacoesTeoria] = useState<string>("");
  const [anotacoesSalvas, setAnotacoesSalvas] = useState<boolean>(false);
  const [salvandoResumo, setSalvandoResumo] = useState<boolean>(false);
  const { success: toastSuccess, error: toastError, info: toastInfo } = useToast();

  // ── ESTADO DE LANÇAMENTO DE QUESTÕES FORA DO BLOCO (EXTERNAS) ────────────────
  const [isModalQuestoesExternasOpen, setIsModalQuestoesExternasOpen] = useState<boolean>(false);
  const [questoesExternasQtd, setQuestoesExternasQtd] = useState<number>(10);
  const [questoesExternasAcertos, setQuestoesExternasAcertos] = useState<number>(8);
  const [questoesExternasFonte, setQuestoesExternasFonte] = useState<string>("PDF / Livro / Outra Plataforma");
  const [questoesExternasObs, setQuestoesExternasObs] = useState<string>("");
  const [salvandoQuestoesExternas, setSalvandoQuestoesExternas] = useState<boolean>(false);

  // ── ESTADOS DE SELEÇÃO DE BLOCO INICIAL ────────────────────────────────────
  const [expandirTodosBlocos, setExpandirTodosBlocos] = useState<boolean>(false);
  const [blocoParaIniciar, setBlocoParaIniciar] = useState<MentoriaCicloItem | null>(null);
  const [trocandoBloco, setTrocandoBloco] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const finalizacaoEmAndamentoRef = useRef(false);

  const duracaoPlanejadaSegundos = (planoCiclo?.bloco_atual?.duracao_minutos || 40) * 60;
  const minimoNecessarioSegundos = Math.ceil(duracaoPlanejadaSegundos * 0.7);
  const percentualConcluido = Math.min(
    100,
    Math.floor((segundosLiquidos / duracaoPlanejadaSegundos) * 100)
  );
  const atingiuTempoMinimo = segundosLiquidos >= minimoNecessarioSegundos;
  const podeConcluirBloco = Boolean(
    planoCiclo?.bloco_atual &&
    cronometroIniciado &&
    segundosLiquidos > 0
  );
  const estadoBloco = !cronometroIniciado
    ? "NÃO INICIADO"
    : cronometroAtivo
    ? "EM EXECUÇÃO"
    : "PAUSADO";

  const formatarMinutos = (segundos: number) => {
    const minutos = Math.floor(segundos / 60);
    const resto = segundos % 60;
    return resto === 0 ? `${minutos} min` : `${minutos}min ${String(resto).padStart(2, "0")}s`;
  };

  // Carregamento inicial do perfil e ciclo
  useEffect(() => {
    let ignore = false;
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
        if (!ignore) {
          setPerfil(p);
          setPlanoCiclo(ciclo);
        }
      } catch (err) {
        console.error("Erro ao carregar dados do estudo de hoje:", err);
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    void carregar();
    return () => {
      ignore = true;
    };
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
            assuntoId: bloco.assunto_id || undefined,
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
              assuntoId: bloco.assunto_id || undefined,
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
        setAssuntoRoteiro(null);
        if (!bloco.assunto_id) return;

        try {
          const response = await fetch(
            `/api/assuntos?disciplina_id=${encodeURIComponent(bloco.disciplina_id)}`,
            { cache: "no-store" }
          );
          if (!response.ok) return;

          const json = await response.json();
          const assunto = Array.isArray(json.assuntos)
            ? json.assuntos.find((item: Assunto) => item.id === bloco.assunto_id)
            : null;
          setAssuntoRoteiro(assunto || null);
          const conteudoResponse = await fetch(`/api/mentoria/conteudos?assunto_id=${encodeURIComponent(bloco.assunto_id)}`, { cache: "no-store" });
          if (conteudoResponse.ok) {
            const conteudoJson = await conteudoResponse.json();
            setConteudosAssunto(Array.isArray(conteudoJson.conteudos) ? conteudoJson.conteudos : []);
          } else setConteudosAssunto([]);
        } catch (err) {
          console.warn("Não foi possível carregar a referência do assunto do bloco:", err);
        }
      }
    }

    carregarDadosBloco();
  }, [user, planoCiclo?.bloco_atual?.id, planoCiclo?.bloco_atual?.disciplina_id, perfil?.nivel_calculado]);

  // Sessão ativa autoritativa no servidor. O navegador mantém apenas o estado visual corrente.
  useEffect(() => {
    if (!user || !planoCiclo?.bloco_atual) return;
    let cancelado = false;
    fetch(`/api/mentoria/sessao-ativa?tarefaId=${encodeURIComponent(planoCiclo.bloco_atual.id)}`, { cache: "no-store" })
      .then((r) => r.ok ? r.json() : null)
      .then((json) => {
        if (cancelado || !json?.sessao) return;
        const sessao = json.sessao;
        setCronometroIniciado(Boolean(sessao.cronometro_iniciado));
        setCronometroAtivo(false);
        setSegundosLiquidos(Math.max(0, sessao.segundos_liquidos || 0));
        setPausasContador(sessao.pausas_contador || 0);
        setSegundosPausaTotal(sessao.segundos_pausa_total || 0);
        setTempoInicioSessao(sessao.tempo_inicio_sessao || null);
        setQuestoesRespondidas(sessao.questoes_respondidas || 0);
        setQuestoesAcertadas(sessao.questoes_acertadas || 0);
        setObservacoesSessao(sessao.observacoes || "");
        setAnotacoesTeoria(sessao.anotacoes || "");
      }).catch((err) => console.warn("Falha ao restaurar sessão ativa:", err));
    return () => { cancelado = true; };
  }, [user, planoCiclo?.bloco_atual?.id]);

  useEffect(() => {
    if (!user || !planoCiclo?.bloco_atual || !cronometroIniciado) return;
    const timer = window.setTimeout(() => {
      fetch("/api/mentoria/sessao-ativa", {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plano_id: planoCiclo.plano_id, tarefa_id: planoCiclo.bloco_atual!.id,
          cronometro_iniciado: cronometroIniciado, cronometro_ativo: cronometroAtivo,
          segundos_liquidos: segundosLiquidos, pausas_contador: pausasContador,
          segundos_pausa_total: segundosPausaTotal, tempo_inicio_sessao: tempoInicioSessao,
          questoes_respondidas: questoesRespondidas, questoes_acertadas: questoesAcertadas,
          observacoes: observacoesSessao, anotacoes: anotacoesTeoria,
        }),
      }).catch((err) => console.warn("Falha ao persistir sessão ativa:", err));
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [user, planoCiclo?.plano_id, planoCiclo?.bloco_atual?.id, cronometroIniciado, cronometroAtivo, segundosLiquidos, pausasContador, segundosPausaTotal, tempoInicioSessao, questoesRespondidas, questoesAcertadas, observacoesSessao, anotacoesTeoria]);

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

  function limparSessaoLocal() {
    if (!planoCiclo?.bloco_atual) return;
    fetch(`/api/mentoria/sessao-ativa?tarefaId=${encodeURIComponent(planoCiclo.bloco_atual.id)}`, { method: "DELETE" })
      .catch((err) => console.warn("Falha ao limpar sessão ativa:", err));
  }

  function handleZerar() {
    setCronometroAtivo(false);
    setCronometroIniciado(false);
    setSegundosLiquidos(0);
    setPausasContador(0);
    setSegundosPausaTotal(0);
    setTempoInicioSessao(null);
    setHistoricoRespostasSessao(new Map());
    limparSessaoLocal();
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

  function getMensagemBloqueioConclusao() {
    if (!cronometroIniciado) {
      return "Inicie o bloco antes de concluí-lo.";
    }
    return null;
  }

  // Conclusão e Avanço do Bloco
  async function handleFinalizarSessao() {
    if (!user || !planoCiclo || !planoCiclo.bloco_atual || finalizacaoEmAndamentoRef.current) return;

    const mensagemBloqueio = getMensagemBloqueioConclusao();
    if (mensagemBloqueio) {
      window.alert(mensagemBloqueio);
      return;
    }

    const avisos: string[] = [];
    if (!atingiuTempoMinimo) {
      avisos.push(
        `Você estudou ${formatarMinutos(segundosLiquidos)}. A meta recomendada para este bloco é ${formatarMinutos(minimoNecessarioSegundos)} líquidos.`
      );
    }
    if (planoCiclo.bloco_atual.tipo === "QUESTOES" && questoesRespondidas < 1) {
      avisos.push("Você ainda não respondeu nenhuma questão neste bloco.");
    }
    if (avisos.length > 0) {
      const confirmou = window.confirm(
        `${avisos.join("\n\n")}\n\nDeseja finalizar mesmo assim? O progresso real será registrado.`
      );
      if (!confirmou) return;
    }

    finalizacaoEmAndamentoRef.current = true;
    setFinalizando(true);
    setCronometroAtivo(false);
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
      finalizacaoEmAndamentoRef.current = false;
      setFinalizando(false);
    }
  }

  async function handleEncerrarSemConcluir() {
    if (!user || !planoCiclo || !planoCiclo.bloco_atual || finalizacaoEmAndamentoRef.current) return;

    finalizacaoEmAndamentoRef.current = true;
    setFinalizando(true);
    setCronometroAtivo(false);
    try {
      const bloco = planoCiclo.bloco_atual;
      const res = await MentoriaCicloService.registrarSessaoParcial({
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
        observacoes: anotacoesTeoria
          ? `[Encerrado sem concluir]\n${observacoesSessao}\n[Anotações]: ${anotacoesTeoria}`
          : `[Encerrado sem concluir]\n${observacoesSessao}`,
      });

      if (res.success) {
        setResultadoUltimaSessao({
          status: "parcial",
          volta_completa: false,
          minutos_estudados: Math.round(segundosLiquidos / 60),
          disciplina_nome: bloco.disciplina_nome,
        });
        const planoAtualizado = await MentoriaCicloService.obterPlanoCiclo(user.id);
        if (planoAtualizado) setPlanoCiclo(planoAtualizado);
        handleZerar();
        setQuestoesRespondidas(0);
        setQuestoesAcertadas(0);
        setObservacoesSessao("");
        setAnotacoesTeoria("");
        setAnotacoesSalvas(false);
      }
    } catch (err) {
      console.error("Erro ao encerrar sessão sem concluir:", err);
    } finally {
      finalizacaoEmAndamentoRef.current = false;
      setFinalizando(false);
    }
  }

  const handleSolicitarTrocaBloco = (bloco: MentoriaCicloItem) => {
    if (cronometroIniciado) {
      toastInfo("Finalize a sessão atual para trocar de bloco");
      return;
    }
    setBlocoParaIniciar(bloco);
  };

  const handleConfirmarTrocaBloco = async () => {
    if (!blocoParaIniciar || !user || trocandoBloco) return;
    setTrocandoBloco(true);

    try {
      const res = await fetch("/api/mentoria/ciclo/selecionar-bloco", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bloco_id: blocoParaIniciar.id }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 409) {
        toastError(data.error || "Finalize ou descarte a sessão em andamento antes de trocar de bloco.");
        setBlocoParaIniciar(null);
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Erro ao alterar bloco inicial.");
      }

      // Sincroniza plano local/offline se aplicável
      await MentoriaCicloService.selecionarBlocoInicial(user.id, blocoParaIniciar.id);

      // Recarrega o plano atualizado
      const planoAtualizado = await MentoriaCicloService.obterPlanoCiclo(user.id);
      if (planoAtualizado) {
        setPlanoCiclo(planoAtualizado);
      }

      // Reseta cronômetro e formulário local
      handleZerar();
      setQuestoesRespondidas(0);
      setQuestoesAcertadas(0);
      setObservacoesSessao("");
      setAnotacoesTeoria("");
      setAnotacoesSalvas(false);

      window.scrollTo({ top: 0, behavior: "smooth" });
      toastSuccess("Bloco inicial do ciclo alterado com sucesso.");
      setBlocoParaIniciar(null);
    } catch (err: any) {
      console.error("Erro ao selecionar bloco inicial:", err);
      toastError(err?.message || "Não foi possível alterar o bloco inicial.");
    } finally {
      setTrocandoBloco(false);
    }
  };

  const handleSalvarQuestoesExternas = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !planoCiclo?.bloco_atual) return;
    const bloco = planoCiclo.bloco_atual;

    const qtd = Number(questoesExternasQtd);
    const acertos = Number(questoesExternasAcertos);

    if (!questoesExternasFonte.trim()) {
      toastError("Informe a fonte ou material das questões.");
      return;
    }
    if (!qtd || qtd < 1) {
      toastError("Informe uma quantidade válida de questões.");
      return;
    }
    if (acertos < 0 || acertos > qtd) {
      toastError("O número de acertos deve ser entre 0 e a quantidade total.");
      return;
    }

    setSalvandoQuestoesExternas(true);
    try {
      const res = await fetch("/api/questoes-externas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          disciplina_id: bloco.disciplina_id,
          assunto_id: bloco.assunto_id || null,
          fonte: questoesExternasFonte.trim(),
          quantidade: qtd,
          acertos: acertos,
          data: new Date().toISOString().slice(0, 10),
          observacao:
            questoesExternasObs.trim() ||
            `Realizado no bloco #${bloco.ordem_bloco} (${bloco.disciplina_nome}${
              bloco.assunto_nome ? ` - ${bloco.assunto_nome}` : ""
            })`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erro ao registrar questões externas.");
      }

      // Atualiza os contadores da sessão ao vivo
      setQuestoesRespondidas((prev) => prev + qtd);
      setQuestoesAcertadas((prev) => prev + acertos);

      if (questoesExternasObs.trim()) {
        setObservacoesSessao((prev) =>
          prev
            ? `${prev}\n[Externas: ${qtd}q (${acertos} acertos) - ${questoesExternasFonte}]: ${questoesExternasObs}`
            : `[Externas: ${qtd}q (${acertos} acertos) - ${questoesExternasFonte}]: ${questoesExternasObs}`
        );
      }

      toastSuccess(`+${qtd} questões registradas com sucesso (+XP)!`);
      setIsModalQuestoesExternasOpen(false);
      setQuestoesExternasObs("");
    } catch (err: any) {
      console.error("Erro ao salvar questões externas:", err);
      toastError(err?.message || "Não foi possível registrar as questões.");
    } finally {
      setSalvandoQuestoesExternas(false);
    }
  };

  const formatarTempo = (totalSegundos: number) => {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500">Carregando sessão do ciclo...</p>
      </div>
    );
  }

  const blocoAtual = planoCiclo?.bloco_atual;

  const missaoAtual: MissaoDiariaItem | null =
    blocoAtual && planoCiclo
      ? {
          id: blocoAtual.id,
          plano_id: planoCiclo.plano_id,
          bloco_ordem: blocoAtual.ordem_bloco,
          tipo: blocoAtual.tipo,
          disciplina_id: blocoAtual.disciplina_id,
          disciplina_nome: blocoAtual.disciplina_nome,
          assunto_id: blocoAtual.assunto_id,
          assunto_nome: blocoAtual.assunto_nome,
          subassunto_id: blocoAtual.subassunto_id,
          subassunto_nome: blocoAtual.subassunto_nome,
          topico_nome: blocoAtual.topico_nome,
          duracao_minutos: blocoAtual.duracao_minutos,
          quantidade_questoes: blocoAtual.quantidade_questoes_sugerida || 15,
          prioridade: blocoAtual.prioridade_nivel,
          status: cronometroIniciado ? "em_andamento" : "pendente",
          motivo_explicabilidade: blocoAtual.motivo_explicabilidade || [],
          progresso_percentual: percentualConcluido,
          taxa_acerto:
            questoesRespondidas > 0
              ? Math.round((questoesAcertadas / questoesRespondidas) * 100)
              : undefined,
          anotacoes: anotacoesTeoria,
        }
      : null;

  // Persiste o resumo imediatamente no servidor (mesma linha da sessão ativa do bloco).
  const salvarResumo = async () => {
    if (!planoCiclo?.bloco_atual || !anotacoesTeoria.trim() || salvandoResumo) return;
    setSalvandoResumo(true);
    try {
      const res = await fetch("/api/mentoria/sessao-ativa", {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plano_id: planoCiclo.plano_id, tarefa_id: planoCiclo.bloco_atual.id,
          cronometro_iniciado: cronometroIniciado, cronometro_ativo: cronometroAtivo,
          segundos_liquidos: segundosLiquidos, pausas_contador: pausasContador,
          segundos_pausa_total: segundosPausaTotal, tempo_inicio_sessao: tempoInicioSessao,
          questoes_respondidas: questoesRespondidas, questoes_acertadas: questoesAcertadas,
          observacoes: observacoesSessao, anotacoes: anotacoesTeoria,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Falha ao salvar o resumo.");
      setAnotacoesSalvas(true);
      toastSuccess("Resumo salvo na sua conta.");
    } catch (err) {
      toastInfo("Não foi possível salvar o resumo", err instanceof Error ? err.message : "Tente novamente.");
    } finally {
      setSalvandoResumo(false);
    }
  };

  // Validação pedagógica de dupla condição (tempo >= 70% E questões >= 1 para blocos de questões)
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
      {blocoAtual && missaoAtual ? (
        <div className="space-y-6">
          <DailyMissionCard
            missao={missaoAtual}
            onIniciar={handleIniciar}
            onConcluir={async () => {
              if (user?.id) {
                const plano = await MentoriaCicloService.obterPlanoCiclo(user.id);
                if (plano) {
                  setPlanoCiclo(plano);
                }
              }
            }}
          />

          <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden bg-white dark:bg-slate-900">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 fill-white" />
                <span className="text-xs font-black uppercase tracking-wider">
                  PAINEL DE EXECUÇÃO EM TEMPO REAL • BLOCO #{blocoAtual.ordem_bloco}
                </span>
              </div>
              <Badge variant="secondary" className="font-bold text-xs capitalize">
                {estadoBloco}
              </Badge>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-6">
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
                    Tempo planejado: {blocoAtual.duracao_minutos} min • Mínimo 70%: {formatarMinutos(minimoNecessarioSegundos)} • Realizado: {percentualConcluido}%
                  </p>
                  <p className="text-xs font-bold text-slate-300">
                    Estado do bloco: {estadoBloco}
                  </p>
                  {atingiuTempoMinimo && (
                    <p className="text-xs font-black text-emerald-300">Tempo mínimo atingido</p>
                  )}
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
                      {finalizando ? "Registrando..." : "Finalizar Bloco"}
                    </Button>
                  )}

                  {cronometroIniciado && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleEncerrarSemConcluir}
                      disabled={finalizando}
                      className="w-full sm:w-auto font-bold border-rose-700 text-rose-100 hover:bg-rose-950/40"
                    >
                      Encerrar sem concluir
                    </Button>
                  )}

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setIsModalQuestoesExternasOpen(true)}
                    className="w-full sm:w-auto font-bold border-indigo-500/50 text-indigo-300 hover:bg-indigo-950/60 hover:text-white"
                    leftIcon={<PlusCircle className="w-5 h-5 text-indigo-400" />}
                  >
                    Lançar Questões Fora do Bloco (PDF/Livro)
                  </Button>
                </div>
              </div>

              {/* Alerta de Validação Pedagógica Dupla */}
              {blocoQuestoesSemResolucao && (
                <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <p className="font-bold">Atenção para Conclusão Integral do Bloco de Questões:</p>
                    <p>
                      Você atingiu a meta de tempo líquido ({percentualConcluido}%), mas ainda não resolveu nenhuma questão no sistema.
                      Se você resolveu questões em material externo (PDF, livro, apostila), clique em <strong>&quot;Lançar Questões Fora do Bloco&quot;</strong> acima para registrar seus acertos e pontuação.
                    </p>
                  </div>
                </div>
              )}

              {/* Métricas ao Vivo da Sessão */}
              {cronometroIniciado && (
                <>
                  {!podeConcluirBloco && getMensagemBloqueioConclusao() && (
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-xl text-xs font-semibold text-amber-900 dark:text-amber-200">
                      {getMensagemBloqueioConclusao()}
                    </div>
                  )}
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
                </>
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <CheckSquare2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                    Banco de Questões Selecionadas para o Bloco
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsModalQuestoesExternasOpen(true)}
                    className="text-xs font-bold border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40"
                    leftIcon={<PlusCircle className="w-3.5 h-3.5" />}
                  >
                    Lançar Questões do PDF / Material
                  </Button>
                  {selecaoResultado && (
                    <Badge variant="outline" className="text-xs font-semibold">
                      {questoesPool.length} questões no sistema
                    </Badge>
                  )}
                </div>
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

              {/* Foco e referência do assunto persistido no ciclo */}
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <ListCheck className="w-4 h-4 text-blue-600" />
                    Roteiro deste bloco
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
                    <p className="font-bold text-slate-900 dark:text-slate-100">
                      Foco: {blocoAtual.assunto_nome || "Assunto definido no ciclo"}
                    </p>
                    <p className="mt-1.5 leading-relaxed text-slate-600 dark:text-slate-400">
                      {assuntoRoteiro?.descricao ||
                        "Estude este assunto em ciclos curtos: leia a teoria, registre os pontos-chave e consolide o entendimento nas anotações abaixo."}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Use a referência acima como guia do bloco atual; ela não altera a fila contínua do ciclo.
                  </p>
                  {conteudosAssunto.map((conteudo) => (
                    <div key={conteudo.id} className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20 space-y-3">
                      <p className="font-black text-sm text-slate-900 dark:text-slate-100">{conteudo.titulo}</p>
                      {conteudo.orientacao && <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">{conteudo.orientacao}</p>}
                      {conteudo.lei_seca && <div className="text-xs"><strong>Lei seca / referência:</strong><p className="mt-1 whitespace-pre-wrap text-slate-600 dark:text-slate-400">{conteudo.lei_seca}</p></div>}
                      <div className="flex flex-wrap gap-2">
                        {conteudo.lei_seca_url && <a href={conteudo.lei_seca_url} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline">Abrir legislação</Button></a>}
                        {conteudo.pdf_url && <a href={conteudo.pdf_url} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline">Abrir PDF</Button></a>}
                        {conteudo.video_url && <a href={conteudo.video_url} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline">Assistir vídeo</Button></a>}
                      </div>
                    </div>
                  ))}
                  {conteudosAssunto.length === 0 && <p className="text-xs text-amber-700 dark:text-amber-300">Ainda não há material complementar cadastrado para este assunto.</p>}
                </CardContent>
              </Card>

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
                      onClick={salvarResumo}
                      disabled={!anotacoesTeoria.trim() || salvandoResumo}
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

          {/* BLOCOS DO CICLO COM SELEÇÃO DE BLOCO INICIAL */}
          {planoCiclo.blocos.length > 1 && (() => {
            const totalBlocos = planoCiclo.blocos.length;
            const blocosOrdenados = Array.from({ length: totalBlocos }, (_, i) =>
              planoCiclo.blocos[(planoCiclo.posicao_atual_index + i) % totalBlocos]
            );
            const blocosVisiveis = expandirTodosBlocos
              ? blocosOrdenados
              : blocosOrdenados.slice(0, 5);
            const temMaisBlocos = totalBlocos > 5;

            return (
              <div className="space-y-3 pt-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  Blocos do Ciclo
                  <span className="text-xs font-normal text-slate-500 ml-1">
                    ({totalBlocos} {totalBlocos === 1 ? "bloco" : "blocos"})
                  </span>
                </h3>

                <div className="space-y-2">
                  {blocosVisiveis.map((bloco) => {
                    const ehAtual = bloco.id === planoCiclo.bloco_atual?.id;
                    return (
                      <div
                        key={bloco.id}
                        className={`p-3.5 bg-white dark:bg-slate-900 border rounded-xl flex items-center justify-between gap-2 ${
                          ehAtual
                            ? "border-indigo-400 dark:border-indigo-600 ring-1 ring-indigo-200 dark:ring-indigo-900"
                            : "border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${
                              ehAtual
                                ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                            }`}
                          >
                            {bloco.ordem_bloco}
                          </span>
                          <div className="min-w-0">
                            <p className="font-extrabold text-sm text-slate-900 dark:text-slate-100 truncate">
                              {bloco.disciplina_nome}
                            </p>
                            {bloco.assunto_nome && (
                              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5 truncate">
                                {bloco.assunto_nome}
                              </p>
                            )}
                            <p className="text-xs text-slate-500">
                              {bloco.tipo} • {bloco.duracao_minutos} min • Prioridade {bloco.prioridade_nivel}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0">
                          {ehAtual ? (
                            <Badge variant="primary" className="text-xs font-bold !bg-indigo-600 !text-white !border-indigo-600">
                              Atual
                            </Badge>
                          ) : (
                            <button
                              type="button"
                              disabled={cronometroIniciado || trocandoBloco}
                              title={
                                cronometroIniciado
                                  ? "Finalize a sessão atual para trocar de bloco"
                                  : `Começar pelo bloco ${bloco.ordem_bloco}`
                              }
                              onClick={() => handleSolicitarTrocaBloco(bloco)}
                              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap px-2 py-1 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
                            >
                              Começar por este
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {temMaisBlocos && (
                  <button
                    type="button"
                    onClick={() => setExpandirTodosBlocos((prev) => !prev)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mx-auto"
                  >
                    {expandirTodosBlocos ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" />
                        Recolher
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" />
                        Ver todos os {totalBlocos} blocos
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })()}

          {/* Modal de confirmação de troca de bloco */}
          <Modal
            isOpen={!!blocoParaIniciar}
            onClose={() => !trocandoBloco && setBlocoParaIniciar(null)}
            title="Alterar bloco inicial"
            description={blocoParaIniciar ? `Começar pelo bloco ${blocoParaIniciar.ordem_bloco}: ${blocoParaIniciar.disciplina_nome}` : ""}
            size="sm"
          >
            <div className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Os blocos anteriores continuam no ciclo e voltam na próxima volta.
              </p>
              <div className="flex gap-3 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setBlocoParaIniciar(null)}
                  disabled={trocandoBloco}
                >
                  Cancelar
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleConfirmarTrocaBloco}
                  disabled={trocandoBloco}
                >
                  {trocandoBloco ? "Alterando..." : "Confirmar"}
                </Button>
              </div>
            </div>
          </Modal>

          {/* Modal de Lançamento de Questões Externas (Fora da Plataforma / PDF / Livro) */}
          <Modal
            isOpen={isModalQuestoesExternasOpen}
            onClose={() => !salvandoQuestoesExternas && setIsModalQuestoesExternasOpen(false)}
            title="Lançar Questões Feitas Fora do Bloco"
            description="Registre as questões que você resolveu em PDFs, livros ou outros materiais para contabilizar no ciclo ativo e ganhar XP."
            size="md"
          >
            <form onSubmit={handleSalvarQuestoesExternas} className="space-y-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Vínculo do Bloco Atual
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">
                    {blocoAtual.disciplina_nome}
                  </Badge>
                  {blocoAtual.assunto_nome && (
                    <Badge variant="outline">
                      {blocoAtual.assunto_nome}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Fonte / Material das Questões *
                </label>
                <input
                  type="text"
                  required
                  value={questoesExternasFonte}
                  onChange={(e) => setQuestoesExternasFonte(e.target.value)}
                  placeholder="Ex: PDF do Estratégia, Livro Sinopses, Gran Cursos..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Total de Questões *
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={500}
                    required
                    value={questoesExternasQtd}
                    onChange={(e) => setQuestoesExternasQtd(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Acertos *
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={questoesExternasQtd}
                    required
                    value={questoesExternasAcertos}
                    onChange={(e) => setQuestoesExternasAcertos(Math.max(0, Math.min(questoesExternasQtd, Number(e.target.value))))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-emerald-600 dark:text-emerald-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pré-visualização de Desempenho e XP */}
              <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-900/50 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500">Taxa de acerto calculada: </span>
                  <strong className="text-indigo-700 dark:text-indigo-300">
                    {questoesExternasQtd > 0 ? `${Math.round((questoesExternasAcertos / questoesExternasQtd) * 100)}%` : "0%"}
                  </strong>
                </div>
                <Badge variant="success" size="sm" className="font-bold">
                  +{Math.min(100, Number(questoesExternasQtd) + Number(questoesExternasAcertos))} XP
                </Badge>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Observações / Tópicos de Atenção (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={questoesExternasObs}
                  onChange={(e) => setQuestoesExternasObs(e.target.value)}
                  placeholder="Ex: Errei 2 questões sobre prazo prescricional e súmula 123..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsModalQuestoesExternasOpen(false)}
                  disabled={salvandoQuestoesExternas}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={salvandoQuestoesExternas}
                  className="bg-indigo-600 hover:bg-indigo-700 font-bold"
                >
                  {salvandoQuestoesExternas ? "Registrando..." : "Registrar Questões (+XP)"}
                </Button>
              </div>
            </form>
          </Modal>
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
