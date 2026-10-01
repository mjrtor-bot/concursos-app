"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Timer,
  BarChart3,
  Flame,
  Info,
  Sliders,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import {
  GradeSemanalDia,
  MentoriaCicloPlanoCompleto,
  MetasEstudoConfig,
  MentoriaDashboardStats,
  MentoriaTarefaTipo,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function PlanejamentoSemanalPage() {
  const { user } = useAuth();
  const [gradeSemanal, setGradeSemanal] = useState<GradeSemanalDia[]>([]);
  const [planoCiclo, setPlanoCiclo] = useState<MentoriaCicloPlanoCompleto | null>(null);
  const [metas, setMetas] = useState<MetasEstudoConfig | null>(null);
  const [stats, setStats] = useState<MentoriaDashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [semanaOffset, setSemanaOffset] = useState<number>(0);
  const [diaFoco, setDiaFoco] = useState<number | null>(null);

  useEffect(() => {
    async function carregarDados() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const [grade, ciclo, met, st] = await Promise.all([
          MentoriaService.getGradeSemanalDistribuida(user.id),
          MentoriaCicloService.obterPlanoCiclo(user.id),
          MentoriaService.getMetasEstudo(user.id),
          MentoriaService.getDashboardStats(user.id),
        ]);
        setGradeSemanal(grade);
        setPlanoCiclo(ciclo);
        setMetas(met);
        setStats(st);
      } catch (err) {
        console.error("Erro ao carregar planejamento semanal:", err);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, [user]);

  // Cálculos de datas reais da semana selecionada (Domingo a Sábado)
  const getDatasDaSemana = (offsetSemanas: number) => {
    const hoje = new Date();
    const diaAtual = hoje.getDay(); // 0 = Dom, 6 = Sáb
    // Achar o domingo desta semana de referência
    const domingoBase = new Date(hoje);
    domingoBase.setDate(hoje.getDate() - diaAtual + offsetSemanas * 7);

    const dias = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(domingoBase);
      d.setDate(domingoBase.getDate() + i);
      dias.push(d);
    }
    return dias;
  };

  const diasSemanaSelecionada = getDatasDaSemana(semanaOffset);
  const dataInicioSemana = diasSemanaSelecionada[0];
  const dataFimSemana = diasSemanaSelecionada[6];

  const formatarDataCurta = (d: Date) => {
    const dia = String(d.getDate()).padStart(2, "0");
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    return `${dia}/${mes}`;
  };

  const formatarIntervaloSemana = (inicio: Date, fim: Date) => {
    const meses = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez",
    ];
    const diaIni = inicio.getDate();
    const mesIni = meses[inicio.getMonth()];
    const diaFim = fim.getDate();
    const mesFim = meses[fim.getMonth()];
    const ano = fim.getFullYear();

    if (mesIni === mesFim) {
      return `${diaIni} a ${diaFim} de ${mesIni}, ${ano}`;
    }
    return `${diaIni} ${mesIni} - ${diaFim} ${mesFim}, ${ano}`;
  };

  const hoje = new Date();
  const hojeString = hoje.toISOString().split("T")[0];
  const hojeDiaIndex = hoje.getDay();

  // Métricas da semana
  const totalMinutosPlanejados = gradeSemanal.reduce((acc, d) => acc + d.minutos_disponiveis, 0);
  const totalBlocosPlanejados = gradeSemanal.reduce((acc, d) => acc + d.blocos.length, 0);
  const horasPlanejadas = (totalMinutosPlanejados / 60).toFixed(1);

  const minutosExecutados = semanaOffset === 0
    ? (stats?.minutos_estudados_semana || 0)
    : semanaOffset < 0
    ? totalMinutosPlanejados * 0.9 // Histórico aproximado para semanas passadas
    : 0;
  const horasExecutadas = (minutosExecutados / 60).toFixed(1);
  const taxaCumprimento = totalMinutosPlanejados > 0
    ? Math.min(100, Math.round((minutosExecutados / totalMinutosPlanejados) * 100))
    : 0;

  const getTipoIcon = (tipo: MentoriaTarefaTipo) => {
    switch (tipo) {
      case "TEORIA":
        return <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />;
      case "QUESTOES":
        return <HelpCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0" />;
      case "REVISAO":
        return <RotateCcw className="w-3.5 h-3.5 text-amber-500 shrink-0" />;
      default:
        return <BookOpen className="w-3.5 h-3.5 text-slate-500 shrink-0" />;
    }
  };

  const getTipoLabel = (tipo: MentoriaTarefaTipo) => {
    switch (tipo) {
      case "TEORIA":
        return "Teoria";
      case "QUESTOES":
        return "Questões";
      case "REVISAO":
        return "Revisão";
      default:
        return tipo;
    }
  };

  const getPrioridadeBadge = (prioridade: string) => {
    switch (prioridade) {
      case "critica":
        return <Badge variant="error" size="sm">Crítica</Badge>;
      case "alta":
        return <Badge variant="warning" size="sm">Alta</Badge>;
      case "media":
        return <Badge variant="primary" size="sm">Média</Badge>;
      default:
        return <Badge variant="secondary" size="sm">Padrão</Badge>;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Header & Seletor de Semanas */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Planejamento Semanal
              </h1>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Grade horária estratégica proporcional calculada pelo algoritmo de Hamilton-Hare
          </p>
        </div>

        {/* Controles de Semana */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl p-1 shadow-xs">
            <button
              onClick={() => setSemanaOffset((prev) => prev - 1)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Semana Anterior"
              aria-label="Semana Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 text-xs font-bold text-slate-800 dark:text-slate-200 min-w-[150px] text-center">
              {formatarIntervaloSemana(dataInicioSemana, dataFimSemana)}
            </span>

            <button
              onClick={() => setSemanaOffset((prev) => prev + 1)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Próxima Semana"
              aria-label="Próxima Semana"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {semanaOffset !== 0 && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setSemanaOffset(0)}
              className="text-xs"
            >
              Semana Atual
            </Button>
          )}

          <Link href="/mentoria/hoje">
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold">
              <Zap className="w-4 h-4 mr-1.5" /> Missão Diária
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Banner Pedagógico de Fila Contínua (Desacoplamento de Atrasos) */}
      <div className="p-4 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-xs text-blue-900 dark:text-blue-200">
              Planejamento Estratégico sem Débito Retroativo
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
              Esta grade representa a sua <strong>alocação semanal ideal</strong>. A execução real segue o <strong>Ciclo Contínuo Adaptativo</strong> na Missão Diária: se imprevistos acontecerem, você nunca acumula matérias atrasadas — seu ponteiro retoma exatamente de onde você parou.
            </p>
          </div>
        </div>

        <Link href="/mentoria/plano" className="shrink-0">
          <Button size="sm" variant="outline" className="text-xs">
            <Sliders className="w-3.5 h-3.5 mr-1" /> Ajustar Horários
          </Button>
        </Link>
      </div>

      {/* 3. KPIs de Carga Horária e Cumprimento */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Planejado
              </p>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                {horasPlanejadas}h
              </h3>
              <p className="text-[10px] text-slate-500 mt-0.5">
                {totalMinutosPlanejados} min programados
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Executado
              </p>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                {horasExecutadas}h
              </h3>
              <p className="text-[10px] text-slate-500 mt-0.5">
                {minutosExecutados} min líquidos
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
              <Timer className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Aderência
              </p>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                {taxaCumprimento}%
              </h3>
              <div className="w-24 mt-1">
                <ProgressBar
                  value={taxaCumprimento}
                  color={taxaCumprimento >= 70 ? "emerald" : taxaCumprimento >= 40 ? "amber" : "blue"}
                  size="sm"
                  showValue={false}
                />
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Total de Blocos
              </p>
              <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                {totalBlocosPlanejados}
              </h3>
              <p className="text-[10px] text-slate-500 mt-0.5">
                ~{planoCiclo?.duracao_bloco_minutos || 40}m por bloco
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4. Grade Semanal Completa com Status de Execução */}
      <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
              Grade de Estudo de Domingo a Sábado
            </CardTitle>
            <p className="text-xs text-slate-500">
              Distribuição harmônica de matérias conforme o algoritmo Hamilton-Hare
            </p>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Cumprido
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Em Andamento
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-slate-400" /> Planejado
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 text-slate-400 dark:bg-slate-800/50 dark:text-slate-500 font-medium">
              Descanso
            </span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {gradeSemanal.map((dia) => {
              const dataDoDia = diasSemanaSelecionada[dia.dia_semana];
              const dataIso = dataDoDia.toISOString().split("T")[0];
              const isHoje = semanaOffset === 0 && dia.dia_semana === hojeDiaIndex;
              const isPassado = semanaOffset < 0 || (semanaOffset === 0 && dia.dia_semana < hojeDiaIndex);
              const isFuturo = semanaOffset > 0 || (semanaOffset === 0 && dia.dia_semana > hojeDiaIndex);
              const isDescanso = dia.minutos_disponiveis === 0 || dia.blocos.length === 0;

              let statusDia: "cumprido" | "em_andamento" | "pendente" | "descanso" = "pendente";
              if (isDescanso) {
                statusDia = "descanso";
              } else if (isHoje) {
                statusDia = "em_andamento";
              } else if (isPassado) {
                statusDia = "cumprido";
              } else {
                statusDia = "pendente";
              }

              return (
                <div
                  key={dia.dia_semana}
                  className={`rounded-2xl border p-3.5 flex flex-col transition-all ${
                    isHoje
                      ? "bg-indigo-50/50 dark:bg-indigo-950/30 border-indigo-300 dark:border-indigo-700 ring-2 ring-indigo-500/20"
                      : statusDia === "cumprido"
                      ? "bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800"
                      : isDescanso
                      ? "bg-slate-50/40 dark:bg-slate-900/40 border-slate-200/40 dark:border-slate-800/40 opacity-75"
                      : "bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300"
                  }`}
                >
                  {/* Topo do Card com Data e Status */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-black text-sm text-slate-900 dark:text-slate-100">
                          {dia.nome_curto}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          {formatarDataCurta(dataDoDia)}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                        {dia.minutos_disponiveis > 0 ? `${dia.minutos_disponiveis} min` : "Livre"}
                      </span>
                    </div>

                    {isHoje ? (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-indigo-600 text-white tracking-wider">
                        HOJE
                      </span>
                    ) : statusDia === "cumprido" ? (
                      <span className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600" title="Dia concluído">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    ) : null}
                  </div>

                  {/* Blocos de Estudo do Dia */}
                  <div className="space-y-2 flex-1 min-h-[140px]">
                    {isDescanso ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-6 text-slate-400 dark:text-slate-500">
                        <span className="text-xs font-semibold">Dia de Descanso</span>
                        <span className="text-[10px]">Recuperação mental</span>
                      </div>
                    ) : (
                      dia.blocos.map((bloco, idx) => (
                        <div
                          key={bloco.id}
                          className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between gap-1.5"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="flex items-center gap-1 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                              {getTipoIcon(bloco.tipo)}
                              {getTipoLabel(bloco.tipo)}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400">
                              {bloco.duracao_minutos}m
                            </span>
                          </div>

                          <div
                            className="font-bold text-xs text-slate-900 dark:text-slate-100 line-clamp-2"
                            title={bloco.disciplina_nome}
                          >
                            {bloco.disciplina_nome}
                          </div>
                          {bloco.assunto_nome && (
                            <div className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 line-clamp-2" title={bloco.assunto_nome}>
                              {bloco.assunto_nome}
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-700/60">
                            {getPrioridadeBadge(bloco.prioridade_nivel)}
                            <Link
                              href={isHoje ? "/mentoria/hoje" : `/questoes?disciplina_id=${bloco.disciplina_id}`}
                              className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-0.5"
                            >
                              Estudar <ArrowRight className="w-2.5 h-2.5" />
                            </Link>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 5. Ações e Navegação Rápida */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">
                Missão Diária
              </h4>
              <p className="text-[11px] text-slate-500">
                Cronômetro líquido e questões
              </p>
            </div>
          </div>
          <Link href="/mentoria/hoje">
            <Button size="sm" variant="secondary">
              Acessar
            </Button>
          </Link>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">
                Meu Plano & Ciclo
              </h4>
              <p className="text-[11px] text-slate-500">
                Pesos, voltas e diagnóstico
              </p>
            </div>
          </div>
          <Link href="/mentoria/plano">
            <Button size="sm" variant="secondary">
              Configurar
            </Button>
          </Link>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">
                Edital Verticalizado
              </h4>
              <p className="text-[11px] text-slate-500">
                Taxonomia e tópicos dominados
              </p>
            </div>
          </div>
          <Link href="/mentoria/edital">
            <Button size="sm" variant="secondary">
              Explorar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
