"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BrainCircuit,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Target,
  Sparkles,
  BookOpen,
  Award,
  Zap,
  TrendingUp,
  BarChart3,
  HelpCircle,
  RotateCw,
  Sliders,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaDiagnosticoService } from "@/services/mentoriaDiagnosticoService";
import {
  MentoriaPerfil,
  MentoriaDiagnostico,
  MentoriaDiagnosticoHistorico,
  MentoriaAutoavaliacao,
  MentoriaNivelCalculado,
  Questao,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const DISCIPLINAS_PADRAO = [
  { id: "disc-port", nome: "Língua Portuguesa" },
  { id: "disc-const", nome: "Direito Constitucional" },
  { id: "disc-admin", nome: "Direito Administrativo" },
  { id: "disc-rlm", nome: "Raciocínio Lógico-Matemático" },
  { id: "disc-info", nome: "Informática e Tecnologia" },
  { id: "disc-penal", nome: "Direito Penal" },
];

const DIFICULDADES_OPCOES = [
  "Memorização de prazos e leis secas",
  "Interpretação de textos e enunciados longos",
  "Raciocínio lógico e cálculos",
  "Falta de constância e gestão de tempo",
  "Revisões periódicas e retenção a longo prazo",
  "Ansiedade e controle de tempo nas provas",
];

export default function MentoriaDiagnosticoPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [diagnostico, setDiagnostico] = useState<MentoriaDiagnostico | null>(null);

  // Etapa atual (1 = Histórico, 2 = Autoavaliação, 3 = Teste, 4 = Resultado)
  const [etapa, setEtapa] = useState<1 | 2 | 3 | 4>(1);

  // ── Estado da Etapa 1 (Histórico) ──
  const [historico, setHistorico] = useState<MentoriaDiagnosticoHistorico>({
    ja_estuda: true,
    tempo_estudo: "6_12_meses",
    ja_aprovado: false,
    horas_semanais_atuais: 15,
    preferencia_estudo: "equilibrado",
    maiores_dificuldades: ["Memorização de prazos e leis secas", "Revisões periódicas e retenção a longo prazo"],
    observacoes: "",
  });

  // ── Estado da Etapa 2 (Autoavaliação) ──
  const [autoavaliacoes, setAutoavaliacoes] = useState<Record<string, MentoriaAutoavaliacao>>({
    "Língua Portuguesa": "intermediario",
    "Direito Constitucional": "basico",
    "Direito Administrativo": "basico",
    "Raciocínio Lógico-Matemático": "nunca_estudei",
    "Informática e Tecnologia": "intermediario",
    "Direito Penal": "basico",
  });

  // ── Estado da Etapa 3 (Bateria Diagnóstica) ──
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [questaoAtualIndex, setQuestaoAtualIndex] = useState(0);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState<string | null>(null);
  const [respostaConfirmada, setRespostaConfirmada] = useState(false);
  const [respostasRegistradas, setRespostasRegistradas] = useState<
    { questaoId: string; alternativaId: string; correta: boolean; tempo: number }[]
  >([]);
  const [tempoQuestaoSegundos, setTempoQuestaoSegundos] = useState(0);

  // ── Cronômetro da questão atual ──
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (etapa === 3 && !respostaConfirmada) {
      timer = setInterval(() => {
        setTempoQuestaoSegundos((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [etapa, respostaConfirmada, questaoAtualIndex]);

  // ── Carregamento inicial ──
  useEffect(() => {
    async function inicializar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const [p, dAtivo, dUltimo] = await Promise.all([
          MentoriaService.getPerfil(user.id),
          MentoriaDiagnosticoService.getDiagnosticoAtivo(user.id),
          MentoriaDiagnosticoService.getUltimoDiagnostico(user.id),
        ]);

        setPerfil(p);

        if (dAtivo) {
          setDiagnostico(dAtivo);
          if (dAtivo.historico_dados) {
            setHistorico((prev) => ({ ...prev, ...dAtivo.historico_dados }));
          }
          if (dAtivo.disciplinas && dAtivo.disciplinas.length > 0) {
            const mapAuto: Record<string, MentoriaAutoavaliacao> = {};
            dAtivo.disciplinas.forEach((d) => {
              mapAuto[d.disciplina_nome] = d.autoavaliacao;
            });
            setAutoavaliacoes(mapAuto);
          }
        } else if (dUltimo && dUltimo.status === "concluido") {
          // Se já concluiu diagnóstico anteriormente, carrega como resultado
          setDiagnostico(dUltimo);
          setEtapa(4);
        }
      } catch (err) {
        console.error("Erro ao inicializar diagnóstico:", err);
      } finally {
        setLoading(false);
      }
    }
    inicializar();
  }, [user]);

  // ── Transição Etapa 1 -> Etapa 2 ──
  const handleAvancarEtapa1 = async () => {
    if (!user) return;
    setSalvando(true);
    try {
      let diagId = diagnostico?.id;
      if (!diagId) {
        const { diagnostico: novoDiag } = await MentoriaDiagnosticoService.iniciarDiagnostico(
          user.id,
          perfil?.concurso_nome || "Concurso Geral",
          perfil?.cargo_nome || "Cargo Alvo"
        );
        if (novoDiag) {
          setDiagnostico(novoDiag);
          diagId = novoDiag.id;
        }
      }

      if (diagId) {
        await MentoriaDiagnosticoService.salvarHistorico(diagId, user.id, historico);
      }
      setEtapa(2);
    } catch (err) {
      console.error("Erro ao salvar etapa 1:", err);
    } finally {
      setSalvando(false);
    }
  };

  // ── Transição Etapa 2 -> Etapa 3 (Carregar Questões Reais) ──
  const handleAvancarEtapa2 = async () => {
    if (!user || !diagnostico) return;
    setSalvando(true);
    try {
      const disciplinasArray = Object.entries(autoavaliacoes).map(([nome, autoavaliacao]) => ({
        disciplina_nome: nome,
        autoavaliacao,
      }));

      await MentoriaDiagnosticoService.salvarAutoavaliacao(diagnostico.id, user.id, disciplinasArray);

      // Carregar questões da bateria
      const { questoes: qList } = await MentoriaDiagnosticoService.gerarBateriaQuestoes(
        diagnostico.id,
        user.id,
        Object.keys(autoavaliacoes)
      );

      setQuestoes(qList);
      setQuestaoAtualIndex(0);
      setAlternativaSelecionada(null);
      setRespostaConfirmada(false);
      setTempoQuestaoSegundos(0);
      setEtapa(3);
    } catch (err) {
      console.error("Erro ao preparar etapa 3:", err);
    } finally {
      setSalvando(false);
    }
  };

  // ── Confirmação de Resposta na Etapa 3 ──
  const handleConfirmarResposta = async () => {
    if (!user || !diagnostico || !alternativaSelecionada) return;

    const questaoAtual = questoes[questaoAtualIndex];
    if (!questaoAtual) return;

    const alt = questaoAtual.alternativas.find((a) => a.id === alternativaSelecionada);
    const correta = !!alt?.correta;

    setRespostaConfirmada(true);

    const novaResp = {
      questaoId: questaoAtual.id,
      alternativaId: alternativaSelecionada,
      correta,
      tempo: tempoQuestaoSegundos,
    };
    setRespostasRegistradas((prev) => [...prev, novaResp]);

    // Gravar no serviço
    await MentoriaDiagnosticoService.salvarResposta(diagnostico.id, user.id, {
      disciplina_id: questaoAtual.disciplina_id,
      disciplina_nome:
        DISCIPLINAS_PADRAO.find((d) => d.id === questaoAtual.disciplina_id)?.nome ||
        "Conhecimentos Gerais",
      questao_id: questaoAtual.id,
      alternativa_id: alternativaSelecionada,
      correta,
      tempo_segundos: tempoQuestaoSegundos,
    });
  };

  // ── Próxima Questão ou Concluir Bateria ──
  const handleProximaQuestao = async () => {
    if (questaoAtualIndex + 1 < questoes.length) {
      setQuestaoAtualIndex((prev) => prev + 1);
      setAlternativaSelecionada(null);
      setRespostaConfirmada(false);
      setTempoQuestaoSegundos(0);
    } else {
      // Bateria finalizada -> Finalizar diagnóstico e calcular nivelamento
      await handleFinalizarDiagnostico();
    }
  };

  // ── Finalização Geral do Diagnóstico ──
  const handleFinalizarDiagnostico = async () => {
    if (!user || !diagnostico) return;
    setSalvando(true);
    try {
      const res = await MentoriaDiagnosticoService.finalizarDiagnostico(diagnostico.id, user.id);
      if (res.success && res.diagnostico) {
        setDiagnostico(res.diagnostico);
        setEtapa(4);
      }
    } catch (err) {
      console.error("Erro ao finalizar diagnóstico:", err);
    } finally {
      setSalvando(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[450px] space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          Carregando ambiente de avaliação diagnóstica...
        </p>
      </div>
    );
  }

  const questaoAtual = questoes[questaoAtualIndex];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Topo / Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/mentoria"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Mentoria
        </Link>

        {diagnostico && etapa < 4 && (
          <span className="text-xs font-semibold px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50 rounded-full">
            Diagnóstico em andamento
          </span>
        )}
      </div>

      {/* Header Principal */}
      <div className="p-6 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 rounded-3xl text-white shadow-xl border border-indigo-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5" />
            NIVELAMENTO INTELIGENTE & DIAGNÓSTICO
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            {etapa === 4 ? "Relatório de Nivelamento Concluído" : "Avaliação Diagnóstica Inicial"}
          </h1>
          <p className="text-sm text-indigo-200/80 max-w-2xl">
            {etapa === 1 && "Entenda seu histórico e hábitos de estudo para calibrar a intensidade do seu plano."}
            {etapa === 2 && "Autoavalie seu nível de segurança em cada uma das disciplinas fundamentais."}
            {etapa === 3 && "Resolva a bateria de questões reais selecionadas pelo algoritmo para validar seu nível prático."}
            {etapa === 4 && "Veja sua classificação pedagógica oficial, pontos fortes, pontos de atenção e plano de ação."}
          </p>

          {/* Barra de Progresso 4 Etapas */}
          <div className="pt-3">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-200 mb-2">
              <span className={etapa >= 1 ? "text-white" : "text-indigo-400/50"}>1. Histórico</span>
              <span className={etapa >= 2 ? "text-white" : "text-indigo-400/50"}>2. Autoavaliação</span>
              <span className={etapa >= 3 ? "text-white" : "text-indigo-400/50"}>3. Teste Prático</span>
              <span className={etapa === 4 ? "text-white font-black" : "text-indigo-400/50"}>4. Nivelamento</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800/80 rounded-full overflow-hidden border border-indigo-900/50">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-blue-400 to-emerald-400 rounded-full transition-all duration-500"
                style={{
                  width: etapa === 1 ? "25%" : etapa === 2 ? "50%" : etapa === 3 ? "75%" : "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* ETAPA 1: HISTÓRICO E EXPERIÊNCIA DE ESTUDO                          */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {etapa === 1 && (
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Experiência Prévia e Rotina
            </CardTitle>
            <p className="text-sm text-slate-500">
              Estas informações ajudam a estimar sua velocidade de absorção de conteúdo.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Há quanto tempo estuda? */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Há quanto tempo você estuda para concursos públicos?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "menos_6_meses", label: "Menos de 6 meses" },
                  { id: "6_12_meses", label: "De 6 a 12 meses" },
                  { id: "1_2_anos", label: "De 1 a 2 anos" },
                  { id: "mais_2_anos", label: "Mais de 2 anos" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHistorico({ ...historico, tempo_estudo: item.id })}
                    className={`p-3 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-all ${
                      historico.tempo_estudo === item.id
                        ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-600 text-indigo-700 dark:text-indigo-300 shadow-sm ring-1 ring-indigo-600"
                        : "border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Já obteve aprovação? */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Você já foi aprovado em algum concurso público anterior?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setHistorico({ ...historico, ja_aprovado: true })}
                  className={`flex-1 p-3 text-sm font-semibold rounded-xl border text-center transition-all ${
                    historico.ja_aprovado
                      ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 text-emerald-700 dark:text-emerald-300 shadow-sm ring-1 ring-emerald-600"
                      : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  Sim, já fui aprovado
                </button>
                <button
                  type="button"
                  onClick={() => setHistorico({ ...historico, ja_aprovado: false })}
                  className={`flex-1 p-3 text-sm font-semibold rounded-xl border text-center transition-all ${
                    !historico.ja_aprovado
                      ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-600 text-indigo-700 dark:text-indigo-300 shadow-sm ring-1 ring-indigo-600"
                      : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  Não, busco minha 1ª aprovação
                </button>
              </div>
            </div>

            {/* Estilo e foco de estudo */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Qual é a sua preferência pedagógica de estudo?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "teoria",
                    title: "Foco em Teoria",
                    desc: "Prefiro vídeo-aulas e PDFs detalhados antes das questões.",
                  },
                  {
                    id: "equilibrado",
                    title: "Equilibrado (Recomendado)",
                    desc: "Blocos de teoria intercalados com resolução de questões.",
                  },
                  {
                    id: "questoes",
                    title: "Foco em Questões",
                    desc: "Estudo reverso focado em resolver e analisar gabaritos.",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHistorico({ ...historico, preferencia_estudo: item.id as any })}
                    className={`p-4 text-left rounded-xl border transition-all ${
                      historico.preferencia_estudo === item.id
                        ? "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-600 text-indigo-900 dark:text-indigo-100 ring-1 ring-indigo-600 shadow-sm"
                        : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <p className="font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Maiores Dificuldades */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Quais são suas maiores dificuldades atuais? (Selecione todas que se aplicam)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DIFICULDADES_OPCOES.map((dif) => {
                  const checked = historico.maiores_dificuldades.includes(dif);
                  return (
                    <button
                      key={dif}
                      type="button"
                      onClick={() => {
                        const newList = checked
                          ? historico.maiores_dificuldades.filter((d) => d !== dif)
                          : [...historico.maiores_dificuldades, dif];
                        setHistorico({ ...historico, maiores_dificuldades: newList });
                      }}
                      className={`p-3 text-xs sm:text-sm font-medium rounded-xl border text-left flex items-center justify-between transition-all ${
                        checked
                          ? "bg-indigo-50/80 dark:bg-indigo-950/30 border-indigo-500 text-indigo-900 dark:text-indigo-200 font-semibold"
                          : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <span>{dif}</span>
                      {checked && <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAvancarEtapa1}
                isLoading={salvando}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Avançar para Autoavaliação
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* ETAPA 2: AUTOAVALIAÇÃO POR DISCIPLINA                               */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {etapa === 2 && (
        <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Autoavaliação por Disciplina
                </CardTitle>
                <p className="text-sm text-slate-500">
                  Indique sua percepção de domínio em cada disciplina para calibrarmos o teste prático.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {Object.keys(autoavaliacoes).map((discNome) => {
                const valorAtual = autoavaliacoes[discNome];
                return (
                  <div
                    key={discNome}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                        {discNome}
                      </span>
                      <Badge
                        variant={
                          valorAtual === "avancado"
                            ? "success"
                            : valorAtual === "intermediario"
                            ? "primary"
                            : valorAtual === "basico"
                            ? "warning"
                            : "secondary"
                        }
                        className="capitalize font-bold text-xs"
                      >
                        {valorAtual === "nunca_estudei" ? "Nunca estudei" : valorAtual}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "nunca_estudei", label: "Zero contato" },
                        { id: "basico", label: "Básico (Iniciante)" },
                        { id: "intermediario", label: "Intermediário" },
                        { id: "avancado", label: "Avançado (Domínio)" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() =>
                            setAutoavaliacoes({
                              ...autoavaliacoes,
                              [discNome]: opt.id as MentoriaAutoavaliacao,
                            })
                          }
                          className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all ${
                            valorAtual === opt.id
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                              : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Button variant="outline" size="md" onClick={() => setEtapa(1)}>
                Voltar
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={handleAvancarEtapa2}
                isLoading={salvando}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Iniciar Bateria de Questões
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* ETAPA 3: BATERIA DE QUESTÕES REAIS (ZERO-MOCK)                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {etapa === 3 && questaoAtual && (
        <div className="space-y-6">
          {/* Topo da Questão / Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="font-black text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-xl border border-indigo-200 dark:border-indigo-800">
                Questão {questaoAtualIndex + 1} de {questoes.length}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{tempoQuestaoSegundos}s</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-bold text-xs">
                {questaoAtual.banca || "Banca Oficial"}
              </Badge>
              <Badge variant="outline" className="font-bold text-xs">
                {questaoAtual.ano || 2024}
              </Badge>
            </div>
          </div>

          {/* Card do Enunciado e Alternativas */}
          <Card className="border-slate-200 dark:border-slate-800 shadow-md">
            <CardContent className="p-6 space-y-6">
              {/* Texto de Apoio */}
              {questaoAtual.texto_apoio && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
                  {questaoAtual.texto_apoio}
                </div>
              )}

              {/* Enunciado */}
              <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                {questaoAtual.enunciado}
              </div>

              {/* Alternativas */}
              <div className="space-y-3 pt-2">
                {questaoAtual.alternativas.map((alt) => {
                  const isSelected = alternativaSelecionada === alt.id;
                  let cardStyle =
                    "border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-800 dark:text-slate-200";

                  if (respostaConfirmada) {
                    if (alt.correta) {
                      cardStyle =
                        "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500";
                    } else if (isSelected && !alt.correta) {
                      cardStyle =
                        "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-100 font-semibold ring-1 ring-rose-500";
                    } else {
                      cardStyle = "opacity-50 border-slate-200 dark:border-slate-800";
                    }
                  } else if (isSelected) {
                    cardStyle =
                      "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-600 text-indigo-950 dark:text-indigo-100 font-semibold ring-2 ring-indigo-600";
                  }

                  return (
                    <button
                      key={alt.id}
                      type="button"
                      disabled={respostaConfirmada}
                      onClick={() => setAlternativaSelecionada(alt.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${cardStyle}`}
                    >
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isSelected || (respostaConfirmada && alt.correta)
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {alt.letra || "•"}
                      </span>
                      <span className="text-sm sm:text-base leading-snug pt-0.5">{alt.texto}</span>
                    </button>
                  );
                })}
              </div>

              {/* Justificativa e Explicação após confirmação */}
              {respostaConfirmada && (
                <div className="p-5 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-2xl border border-indigo-200 dark:border-indigo-800/60 space-y-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    Explicação Pedagógica
                  </div>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {questaoAtual.explicacao || "Resposta registrada com sucesso na bateria diagnóstica."}
                  </p>
                </div>
              )}

              {/* Botões de Ação */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {respostasRegistradas.length} de {questoes.length} respondidas
                </span>

                {!respostaConfirmada ? (
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={!alternativaSelecionada}
                    onClick={handleConfirmarResposta}
                    rightIcon={<CheckCircle2 className="w-4 h-4" />}
                  >
                    Confirmar Resposta
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleProximaQuestao}
                    isLoading={salvando}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {questaoAtualIndex + 1 < questoes.length ? "Próxima Questão" : "Ver Meu Nivelamento"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* ETAPA 4: RELATÓRIO FINAL DE NIVELAMENTO & SCORE DETERMINÍSTICO     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {etapa === 4 && diagnostico && (
        <div className="space-y-8 animate-in fade-in duration-500">
          {/* Card Principal de Score e Classificação */}
          <Card className="border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-100">
                    <Award className="w-4 h-4 text-amber-300" />
                    CLASSIFICAÇÃO OFICIAL DE ENTRADA
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black capitalize">
                    Nível {diagnostico.nivel_geral}
                  </h2>
                  <p className="text-sm text-indigo-100/90 max-w-lg">
                    Seu plano de estudos foi calibrado com base na combinação da sua autoavaliação, taxa de acerto real e tempo de resposta.
                  </p>
                </div>

                {/* Badge Circular de Score 0-100 */}
                <div className="flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white/10 border-4 border-white/30 backdrop-blur-md shadow-inner text-center shrink-0">
                  <span className="text-4xl font-black">{diagnostico.score_geral}</span>
                  <span className="text-xs uppercase tracking-wider font-bold text-indigo-200">Score Global</span>
                </div>
              </div>
            </div>

            {/* Métricas Resumidas */}
            <CardContent className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50/50 dark:bg-slate-900/30">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-500 font-bold uppercase">Questões no Teste</p>
                <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
                  {diagnostico.resumo_resultado?.total_questoes || respostasRegistradas.length || 20}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-500 font-bold uppercase">Taxa de Acerto</p>
                <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                  {diagnostico.resumo_resultado?.taxa_acerto_geral ?? 75}%
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-500 font-bold uppercase">Tempo Médio / Q</p>
                <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">
                  {diagnostico.resumo_resultado?.tempo_medio_questao ?? 48}s
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <p className="text-xs text-slate-500 font-bold uppercase">Status do Plano</p>
                <p className="text-xl font-black text-purple-600 dark:text-purple-400 mt-1">
                  Otimizado
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Desempenho por Disciplina */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Desempenho e Nivelamento por Disciplina
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(diagnostico.disciplinas && diagnostico.disciplinas.length > 0
                ? diagnostico.disciplinas
                : DISCIPLINAS_PADRAO.map((d) => ({
                    disciplina_nome: d.nome,
                    autoavaliacao: "intermediario" as const,
                    score_final: 70,
                    percentual_acerto: 75,
                    nivel_calculado: "intermediario" as const,
                  }))
              ).map((d) => (
                <Card key={d.disciplina_nome} className="border-slate-200 dark:border-slate-800">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                        {d.disciplina_nome}
                      </span>
                      <Badge
                        variant={
                          d.nivel_calculado === "avancado"
                            ? "success"
                            : d.nivel_calculado === "intermediario"
                            ? "primary"
                            : "warning"
                        }
                        className="capitalize font-bold text-xs"
                      >
                        Nível {d.nivel_calculado}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-500">
                        <span>Score: {d.score_final}/100</span>
                        <span>Acertos: {d.percentual_acerto}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            d.score_final >= 75
                              ? "bg-emerald-500"
                              : d.score_final >= 50
                              ? "bg-indigo-500"
                              : "bg-amber-500"
                          }`}
                          style={{ width: `${d.score_final}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recomendações Pedagógicas Inteligentes */}
          <Card className="border-slate-200 dark:border-slate-800 bg-indigo-50/40 dark:bg-indigo-950/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold flex items-center gap-2 text-indigo-900 dark:text-indigo-200">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Diretrizes Estratégicas para o seu Plano
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {(
                diagnostico.resumo_resultado?.recomendacoes || [
                  "Priorize blocos de 30 a 40 minutos com resolução imediata de questões de fixação.",
                  "Dedique maior carga horária para matérias com score abaixo de 60.",
                  "Realize revisões de 24h e 7 dias para garantir a retenção da curva do esquecimento.",
                ]
              ).map((rec, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* CTAs Finais */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4">
            <Link href="/mentoria">
              <Button variant="outline" size="lg">
                Ver Dashboard da Mentoria
              </Button>
            </Link>
            <Link href="/mentoria/plano">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Acessar Plano de Estudos Personalizado
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
