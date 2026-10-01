"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { MentoriaService } from "@/services/mentoriaService";
import { useAuth } from "@/contexts/AuthContext";
import {
  EstatisticasGerais,
  ConstanciaTelemetria,
  MetasEstudoConfig,
  MentoriaDashboardStats,
} from "@/types";
import { FonteTaxonomiaDisciplinas } from "@/services/dataService";
import { ActivityHeatmap } from "@/components/planejamento/ActivityHeatmap";
import {
  BarChart3,
  TrendingUp,
  Clock,
  AlertTriangle,
  ArrowRight,
  Flame,
  FileSpreadsheet,
  Timer,
  Zap,
  RotateCcw,
  Award,
} from "lucide-react";

export default function DesempenhoPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);
  const [telemetria, setTelemetria] = useState<ConstanciaTelemetria | null>(null);
  const [metas, setMetas] = useState<MetasEstudoConfig | null>(null);
  const [dashStats, setDashStats] = useState<MentoriaDashboardStats | null>(null);
  const [fonteTaxonomia, setFonteTaxonomia] = useState<FonteTaxonomiaDisciplinas>("indisponivel");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        if (user) {
          await DataService.sincronizarRespostasSupabase();
        }
        const taxonomia = await DataService.carregarDisciplinasTaxonomia();
        setFonteTaxonomia(taxonomia.fonte);
        const st = DataService.getEstatisticas(taxonomia.disciplinas);
        setStats(st);

        if (user) {
          const [tel, met, dStats] = await Promise.all([
            MentoriaService.getConstanciaTelemetria(user.id),
            MentoriaService.getMetasEstudo(user.id),
            MentoriaService.getDashboardStats(user.id),
          ]);
          setTelemetria(tel);
          setMetas(met);
          setDashStats(dStats);
        }
      } catch (err) {
        console.error("Erro ao carregar telemetria de desempenho:", err);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, [user]);

  if (loading || !stats) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Carregando desempenho...
        </p>
      </div>
    );
  }

  // Find lowest and highest performing discipline
  const sortedDiscs = [...stats.por_disciplina]
    .filter((d) => d.total > 0)
    .sort((a, b) => a.percentual - b.percentual);
  const piorDisciplina = sortedDiscs[0];
  const melhorDisciplina = sortedDiscs[sortedDiscs.length - 1];

  const horasLiquidasSemana = dashStats
    ? (dashStats.minutos_estudados_semana / 60).toFixed(1)
    : "0.0";
  const horasLiquidasHoje = metas
    ? (metas.minutos_liquidos_hoje / 60).toFixed(1)
    : "0.0";

  return (
    <div className="space-y-6 pb-12">
      {/* Header Principal */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                Meu Desempenho & Constância
              </h1>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Telemetria analítica com base no banco de questões policiais e sessões líquidas cronometradas
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/mentoria/hoje">
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold">
              <Zap className="w-4 h-4 mr-1.5" /> Estudar Agora
            </Button>
          </Link>
          <Link href="/mentoria/edital">
            <Button size="sm" variant="outline">
              Edital Verticalizado
            </Button>
          </Link>
        </div>
      </div>

      {/* Global KPIs (6 Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <StatCard
          title="Taxa de Acerto"
          value={stats.total_respondidas > 0 ? `${stats.taxa_acerto_geral}%` : "—"}
          subtitle={stats.total_respondidas > 0 ? `${stats.total_acertos}/${stats.total_respondidas} q.` : "0 questões respondidas"}
          icon={<TrendingUp className="w-5 h-5 text-emerald-600" />}
          color="emerald"
        />

        <StatCard
          title="Tempo por Questão"
          value={stats.total_respondidas > 0 ? `${stats.tempo_medio_questao_segundos}s` : "—"}
          subtitle={stats.total_respondidas > 0 ? "Meta policial: ≤ 75s" : "Sem dados registrados"}
          icon={<Clock className="w-5 h-5 text-blue-600" />}
          color="blue"
        />

        <StatCard
          title="Horas Líquidas"
          value={`${horasLiquidasSemana}h`}
          subtitle={`${horasLiquidasHoje}h estudadas hoje`}
          icon={<Timer className="w-5 h-5 text-indigo-600" />}
          color="blue"
        />

        <StatCard
          title="Sequência Atual"
          value={`${(telemetria?.sequencia_atual_dias ?? stats.sequencia_dias) || 0} Dias`}
          subtitle={`Recorde: ${(telemetria?.melhor_sequencia_dias ?? stats.sequencia_dias) || 0}d`}
          icon={<Flame className="w-5 h-5 text-amber-500" />}
          color="amber"
        />

        <StatCard
          title="Simulados"
          value={stats.simulados_concluidos}
          subtitle={stats.simulados_concluidos > 0 ? `Média: ${stats.media_simulados}%` : "Nenhum simulado realizado"}
          icon={<FileSpreadsheet className="w-5 h-5 text-purple-600" />}
          color="purple"
        />

        <StatCard
          title="Revisões SRS"
          value={dashStats?.revisoes_pendentes_count || 0}
          subtitle="pendências para hoje"
          icon={<RotateCcw className="w-5 h-5 text-rose-500" />}
          color="rose"
        />
      </div>

      {/* Heatmap de Constância dos Últimos 90 Dias */}
      <ActivityHeatmap telemetria={telemetria} loading={loading} />

      {/* Diagnóstico Inteligente da IA (Prioridade e Pontos Fortes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {piorDisciplina && (
          <div className="p-5 bg-gradient-to-r from-rose-50 to-amber-50 dark:from-rose-950/20 dark:to-amber-950/20 border border-rose-200/80 dark:border-rose-900/60 rounded-2xl flex flex-col justify-between gap-3">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-[10px] text-rose-700 dark:text-rose-300 uppercase tracking-wider">
                    Ponto de Vulnerabilidade
                  </span>
                  <Badge variant="warning" size="sm">
                    Atenção
                  </Badge>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Reforço em {piorDisciplina.disciplina_nome}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Aproveitamento atual de <strong>{piorDisciplina.percentual}%</strong> ({piorDisciplina.erros} erros em {piorDisciplina.total} q.). O algoritmo aumentará os blocos desta matéria no seu ciclo.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Link href={`/questoes?disciplina_id=${piorDisciplina.disciplina_id}`}>
                <Button size="sm" variant="danger" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Treinar {piorDisciplina.disciplina_nome}
                </Button>
              </Link>
            </div>
          </div>
        )}

        {melhorDisciplina && (
          <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200/80 dark:border-emerald-900/60 rounded-2xl flex flex-col justify-between gap-3">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-[10px] text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                    Ponto Forte Consolidado
                  </span>
                  <Badge variant="success" size="sm">
                    Excelente
                  </Badge>
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Domínio em {melhorDisciplina.disciplina_nome}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Aproveitamento de <strong>{melhorDisciplina.percentual}%</strong> ({melhorDisciplina.acertos} acertos). Esta disciplina está em modo de manutenção e revisões espaçadas.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Link href="/mentoria/edital">
                <Button size="sm" variant="outline" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Ver no Edital
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Histórico 7 Dias + Bancas Examinadoras */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Histórico Recente */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
          <CardHeader>
            <div>
              <CardTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
                Histórico de Questões dos Últimos 7 Dias
              </CardTitle>
              <p className="text-xs text-slate-500">
                Volume diário de resolução e ritmo de estudo
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-7 gap-2 pt-2">
              {stats.historico_recente.map((item, idx) => {
                const maxDay = Math.max(10, ...stats.historico_recente.map((h) => h.total));
                const heightPercent = Math.min(100, Math.max(12, (item.total / maxDay) * 100));

                return (
                  <div key={idx} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-full h-32 bg-slate-100 dark:bg-slate-800/80 rounded-xl flex items-end p-1.5 overflow-hidden">
                      <div
                        className="w-full bg-indigo-600 dark:bg-indigo-500 rounded-lg transition-all duration-500 hover:bg-indigo-500"
                        style={{ height: `${heightPercent}%` }}
                        title={`${item.total} questões (${item.acertos} acertos)`}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                      {item.data}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                      {item.total} q.
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Desempenho por Banca Examinadora */}
        <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
          <CardHeader>
            <div>
              <CardTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
                Aproveitamento por Banca Examinadora
              </CardTitle>
              <p className="text-xs text-slate-500">
                Desempenho filtrado nas principais bancas de carreiras policiais
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3.5">
            {stats.por_banca.map((banca) => (
              <div key={banca.banca} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {banca.banca}
                  </span>
                  <span className="text-slate-500">
                    {banca.acertos}/{banca.total} acertos (
                    <strong
                      className={
                        banca.percentual >= 70
                          ? "text-emerald-600 dark:text-emerald-400 font-bold"
                          : banca.percentual >= 50
                          ? "text-amber-600 dark:text-amber-400 font-bold"
                          : "text-rose-600 dark:text-rose-400 font-bold"
                      }
                    >
                      {banca.percentual}%
                    </strong>
                    )
                  </span>
                </div>
                <ProgressBar
                  value={banca.percentual}
                  color={
                    banca.percentual >= 70
                      ? "emerald"
                      : banca.percentual >= 50
                      ? "amber"
                      : "rose"
                  }
                  size="sm"
                  showValue={false}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Detailed Disciplinas Matrix */}
      <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
              Matriz Completa de Disciplinas Policiais
            </CardTitle>
            <p className="text-xs text-slate-500">
              Acompanhamento de questões resolvidas, acertos, erros e aproveitamento
            </p>
            <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
              {fonteTaxonomia === "supabase"
                ? "Taxonomia carregada do banco de questões."
                : fonteTaxonomia === "cache"
                ? "Taxonomia exibida a partir do último cache do banco de questões."
                : fonteTaxonomia === "mock"
                ? "Taxonomia demonstrativa: o banco de questões ainda não forneceu disciplinas."
                : "A matriz usa os metadados das respostas disponíveis."}
            </p>
          </div>

          <Link href="/mentoria/edital">
            <Button variant="outline" size="sm">
              Ver Edital Verticalizado
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/60 border-y border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase font-semibold">
              <tr>
                <th className="px-5 py-3">Disciplina</th>
                <th className="px-4 py-3 text-center">Respondidas</th>
                <th className="px-4 py-3 text-center">Acertos</th>
                <th className="px-4 py-3 text-center">Erros</th>
                <th className="px-4 py-3">Aproveitamento</th>
                <th className="px-4 py-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {stats.por_disciplina.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                    Ainda não há disciplinas associadas às suas respostas.
                  </td>
                </tr>
              ) : (
                stats.por_disciplina.map((disc) => (
                  <tr
                    key={disc.disciplina_id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                  >
                    <td className="px-5 py-3.5 font-bold text-slate-900 dark:text-slate-100">
                      {disc.disciplina_nome}
                    </td>
                    <td className="px-4 py-3.5 text-center font-medium">
                      {disc.total}
                    </td>
                    <td className="px-4 py-3.5 text-center text-emerald-600 dark:text-emerald-400 font-bold">
                      {disc.acertos}
                    </td>
                    <td className="px-4 py-3.5 text-center text-rose-600 dark:text-rose-400 font-bold">
                      {disc.erros}
                    </td>
                    <td className="px-4 py-3.5 min-w-[140px]">
                      <div className="flex items-center gap-2">
                        <ProgressBar
                          value={disc.percentual}
                          color={
                            disc.percentual >= 70
                              ? "emerald"
                              : disc.percentual >= 50
                              ? "amber"
                              : "rose"
                          }
                          size="sm"
                          showValue={false}
                        />
                        <span className="font-bold text-[11px] w-8">
                          {disc.percentual}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <Link href={`/questoes?disciplina_id=${disc.disciplina_id}`}>
                        <Button size="sm" variant="secondary">
                          Praticar
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
