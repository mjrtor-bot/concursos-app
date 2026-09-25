"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Target,
  Calendar,
  Layers,
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  RotateCw,
  Sliders,
  HelpCircle,
  TrendingUp,
  AlertCircle,
  Play,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import {
  MentoriaPerfil,
  MentoriaDisponibilidade,
  MentoriaCicloPlanoCompleto,
  MentoriaCicloItem,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MentoriaPlanoPage() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [disp, setDisp] = useState<MentoriaDisponibilidade[]>([]);
  const [planoCiclo, setPlanoCiclo] = useState<MentoriaCicloPlanoCompleto | null>(null);
  const [loading, setLoading] = useState(true);
  const [recalculando, setRecalculando] = useState(false);
  const [disciplinaExplicando, setDisciplinaExplicando] = useState<string | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState<{ tipo: "success" | "error"; texto: string } | null>(null);

  useEffect(() => {
    async function carregar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const [p, d, ciclo] = await Promise.all([
          MentoriaService.getPerfil(user.id),
          MentoriaService.getDisponibilidade(user.id),
          MentoriaCicloService.obterPlanoCiclo(user.id),
        ]);
        setPerfil(p);
        setDisp(d);
        setPlanoCiclo(ciclo);
      } catch (err) {
        console.error("Erro ao carregar plano de estudos adaptativo:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  async function handleRecalcularCiclo() {
    if (!user) return;
    setRecalculando(true);
    setFeedbackMsg(null);
    try {
      const res = await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      if (res.success && res.plano) {
        setPlanoCiclo(res.plano);
        setFeedbackMsg({
          tipo: "success",
          texto: `Ciclo recalculado com sucesso! Nova versão v${res.plano.versao} gerada com base no seu diagnóstico e disponibilidade.`,
        });
      } else {
        setFeedbackMsg({
          tipo: "error",
          texto: res.error || "Erro ao recalcular o ciclo.",
        });
      }
    } catch (err: any) {
      setFeedbackMsg({
        tipo: "error",
        texto: "Erro inesperado ao recalcular ciclo.",
      });
    } finally {
      setRecalculando(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Carregando Ciclo de Estudos Adaptativo...
        </p>
      </div>
    );
  }

  const nomesDias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const totalMinutosGrade = disp.reduce((acc, curr) => acc + curr.minutos_disponiveis, 0);
  const totalHorasGrade = (totalMinutosGrade / 60).toFixed(1);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Topo / Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/mentoria"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Dashboard da Mentoria
        </Link>
      </div>

      {/* Header Principal */}
      <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              <RotateCw className="w-3.5 h-3.5" />
              Ciclo Contínuo Adaptativo
            </span>
            {planoCiclo && (
              <Badge variant="secondary" className="font-semibold text-xs">
                Versão {planoCiclo.versao}
              </Badge>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
            Seu Ciclo de Estudos
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            {perfil
              ? `Foco em ${perfil.concurso_nome} (${perfil.cargo_nome}). O ciclo é contínuo: sem acúmulo de atraso em dias de imprevisto.`
              : "Monte seu ciclo de estudos estratégico baseado no seu diagnóstico real."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={handleRecalcularCiclo}
            disabled={recalculando}
            leftIcon={<RotateCw className={`w-4 h-4 ${recalculando ? "animate-spin" : ""}`} />}
          >
            {recalculando ? "Recalculando..." : "Recalcular Ciclo"}
          </Button>

          <Link href="/mentoria/configurar">
            <Button variant="outline" size="md" leftIcon={<Sliders className="w-4 h-4" />}>
              Ajustar Grade
            </Button>
          </Link>
        </div>
      </div>

      {/* Mensagem de Feedback */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-xl text-sm font-medium flex items-center justify-between gap-3 ${
            feedbackMsg.tipo === "success"
              ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
              : "bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800"
          }`}
        >
          <div className="flex items-center gap-2">
            {feedbackMsg.tipo === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            )}
            <span>{feedbackMsg.texto}</span>
          </div>
          <button
            onClick={() => setFeedbackMsg(null)}
            className="text-xs font-bold underline opacity-70 hover:opacity-100"
          >
            Fechar
          </button>
        </div>
      )}

      {/* Alerta se não houver perfil ou disponibilidade */}
      {(!perfil || totalMinutosGrade === 0) && (
        <Card className="border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20">
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">
                  Configure sua disponibilidade semanal
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Para gerar os blocos de estudo do seu ciclo, informe quantas horas você tem disponíveis por dia.
                </p>
              </div>
            </div>
            <Link href="/mentoria/configurar">
              <Button variant="primary" size="md">
                Configurar Grade
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* STATS RÁPIDOS DO CICLO */}
      {planoCiclo && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Posição no Ciclo
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">
                  {planoCiclo.posicao_atual_index + 1}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  de {planoCiclo.total_blocos_ciclo} blocos
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {planoCiclo.blocos_restantes_na_volta} blocos para fechar a volta
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Voltas Completas
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">
                  {planoCiclo.ciclo_concluidos_voltas}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  {planoCiclo.ciclo_concluidos_voltas === 1 ? "ciclo concluído" : "ciclos concluídos"}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Revisão contínua sem interrupções
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Duração por Bloco
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {planoCiclo.duracao_bloco_minutos}
                </span>
                <span className="text-sm font-semibold text-slate-500">minutos (líquidos)</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Foco imersivo em Pomodoro
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardContent className="p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Orçamento Semanal
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                  {(planoCiclo.meta_semanal_minutos / 60).toFixed(1)}h
                </span>
                <span className="text-sm font-semibold text-slate-500">distribuídas</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                100% alocado proporcionalmente
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* BLOCO ATIVO EM DESTAQUE */}
      {planoCiclo && planoCiclo.bloco_atual && (
        <Card className="border-2 border-blue-500 dark:border-blue-600 bg-gradient-to-r from-blue-50/50 via-white to-indigo-50/40 dark:from-blue-950/20 dark:via-slate-900 dark:to-indigo-950/20 shadow-md">
          <CardContent className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white">
                  <Play className="w-3 h-3 fill-current" />
                  Próximo a Estudar Agora
                </span>
                <Badge variant="outline" className="font-bold text-xs">
                  Bloco #{planoCiclo.bloco_atual.ordem_bloco}
                </Badge>
                <Badge
                  variant={
                    planoCiclo.bloco_atual.prioridade_nivel === "alta"
                      ? "error"
                      : planoCiclo.bloco_atual.prioridade_nivel === "media"
                      ? "warning"
                      : "primary"
                  }
                  className="font-bold text-xs capitalize"
                >
                  Prioridade {planoCiclo.bloco_atual.prioridade_nivel}
                </Badge>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-50">
                {planoCiclo.bloco_atual.disciplina_nome}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  {planoCiclo.bloco_atual.tipo === "TEORIA"
                    ? "Estudo Teórico / Doutrina"
                    : planoCiclo.bloco_atual.tipo === "QUESTOES"
                    ? `Bateria de ~${planoCiclo.bloco_atual.quantidade_questoes_sugerida} Questões`
                    : "Revisão Espaçada de Fixação"}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {planoCiclo.bloco_atual.duracao_minutos} minutos cronometrados
                </span>
              </div>
            </div>

            <Link href="/mentoria/hoje">
              <Button variant="primary" size="lg" className="w-full md:w-auto shadow-md" leftIcon={<Play className="w-4 h-4 fill-current" />}>
                Iniciar Sessão de Estudo
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* SEQUÊNCIA DE BLOCOS INTERCALADOS DO CICLO (ROADMAP) */}
      {planoCiclo && planoCiclo.blocos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Fila Sequencial do Ciclo (Ordem Intercalada)
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Intercalação balanceada para evitar fadiga cognitiva
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {planoCiclo.blocos.map((bloco, idx) => {
              const isAtivo = idx === planoCiclo.posicao_atual_index;
              const isPassado = idx < planoCiclo.posicao_atual_index;

              return (
                <div
                  key={bloco.id || idx}
                  className={`p-4 rounded-xl border transition-all ${
                    isAtivo
                      ? "bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 dark:border-blue-500 ring-2 ring-blue-500/20 shadow-sm"
                      : isPassado
                      ? "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-70"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          isAtivo
                            ? "bg-blue-600 text-white"
                            : isPassado
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {isPassado ? <Check className="w-3.5 h-3.5" /> : bloco.ordem_bloco}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {isAtivo ? "EM ANDAMENTO" : isPassado ? "CUMPRIDO" : `BLOCO ${bloco.ordem_bloco}`}
                      </span>
                    </div>

                    <Badge
                      variant={
                        bloco.tipo === "TEORIA"
                          ? "primary"
                          : bloco.tipo === "QUESTOES"
                          ? "success"
                          : "warning"
                      }
                      className="text-[10px] uppercase font-bold"
                    >
                      {bloco.tipo}
                    </Badge>
                  </div>

                  <p className="font-extrabold text-sm text-slate-900 dark:text-slate-100 line-clamp-1">
                    {bloco.disciplina_nome}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {bloco.duracao_minutos} min
                    </span>
                    <span className="font-semibold text-slate-600 dark:text-slate-400">
                      Score: {bloco.prioridade_score}/100
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MATRIZ DE PRIORIDADES E EXPLICABILIDADE MATEMÁTICA */}
      {planoCiclo && planoCiclo.disciplinas_prioridades.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Prioridades das Disciplinas e Distribuição do Tempo
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Baseado no Diagnóstico e Peso no Concurso
            </span>
          </div>

          <div className="space-y-3">
            {planoCiclo.disciplinas_prioridades.map((dp) => {
              const isExplicando = disciplinaExplicando === dp.disciplina_id;

              return (
                <Card key={dp.disciplina_id} className="border-slate-200 dark:border-slate-800 overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Nome e Indicadores */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                            {dp.disciplina_nome}
                          </h3>
                          <Badge
                            variant={
                              dp.prioridade_nivel === "alta"
                                ? "error"
                                : dp.prioridade_nivel === "media"
                                ? "warning"
                                : "primary"
                            }
                            className="font-bold text-xs uppercase"
                          >
                            Prioridade {dp.prioridade_nivel} ({dp.prioridade_score} pts)
                          </Badge>
                          <Badge variant="outline" className="text-xs font-semibold capitalize">
                            Diagnóstico: {dp.nivel_diagnostico} ({dp.score_diagnostico} pts)
                          </Badge>
                        </div>

                        {/* Barra de Proporção de Tempo */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>Alocação no ciclo: {dp.minutos_semanais} min ({dp.blocos_semanais} blocos)</span>
                            <span className="font-bold text-slate-700 dark:text-slate-300">{dp.porcentagem_tempo}% do tempo</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                dp.prioridade_nivel === "alta"
                                  ? "bg-red-500"
                                  : dp.prioridade_nivel === "media"
                                  ? "bg-amber-500"
                                  : "bg-blue-500"
                              }`}
                              style={{ width: `${Math.min(100, Math.max(5, dp.porcentagem_tempo))}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Botão de Explicabilidade */}
                      <div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            setDisciplinaExplicando(isExplicando ? null : dp.disciplina_id)
                          }
                          className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5"
                        >
                          <HelpCircle className="w-4 h-4 text-blue-600" />
                          Por que essa prioridade?
                          {isExplicando ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Bloco de Explicabilidade Transparente */}
                    {isExplicando && (
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4 rounded-xl space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Fórmula e Critérios de Decisão
                        </p>
                        <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                          {dp.motivo_explicabilidade && dp.motivo_explicabilidade.length > 0 ? (
                            dp.motivo_explicabilidade.map((motivo, mIdx) => (
                              <li key={mIdx} className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>{motivo}</span>
                              </li>
                            ))
                          ) : (
                            <li>Critério calculado: deficiência diagnóstica + peso base da matéria no edital.</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Grade de Disponibilidade Semanal de Referência */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Estrutura da Grade Semanal ({totalHorasGrade}h disponíveis)
          </h2>
          <Link href="/mentoria/configurar" className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline">
            Editar Horários
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {disp.map((d) => {
            const horas = (d.minutos_disponiveis / 60).toFixed(1);
            const isDescanso = d.minutos_disponiveis === 0;

            return (
              <Card
                key={d.dia_semana}
                className={`border-slate-200 dark:border-slate-800 ${
                  isDescanso ? "opacity-60 bg-slate-50/50 dark:bg-slate-900/50" : ""
                }`}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-xs text-slate-900 dark:text-slate-100">
                      {nomesDias[d.dia_semana]}
                    </p>
                    <p className="text-[11px] text-slate-500 capitalize">
                      {isDescanso ? "Descanso" : `Período: ${d.horario_preferido || "noite"}`}
                    </p>
                  </div>

                  <Badge variant={isDescanso ? "secondary" : "primary"} className="font-bold text-[11px]">
                    {isDescanso ? "Folga" : `${horas}h`}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
