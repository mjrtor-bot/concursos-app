"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { EstatisticasGerais } from "@/types";
import {
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Flame,
  FileSpreadsheet,
  Target,
} from "lucide-react";

export default function DesempenhoPage() {
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);

  useEffect(() => {
    setStats(DataService.getEstatisticas());
  }, []);

  if (!stats) return null;

  // Find lowest and highest performing discipline
  const sortedDiscs = [...stats.por_disciplina].filter((d) => d.total > 0).sort(
    (a, b) => a.percentual - b.percentual
  );
  const piorDisciplina = sortedDiscs[0];
  const melhorDisciplina = sortedDiscs[sortedDiscs.length - 1];

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                Meu Desempenho & Métricas
              </h1>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Acompanhe sua evolução quantitativa e qualitativa com métricas em tempo real
            </p>
          </div>
        </div>

        {/* Global KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Taxa de Acerto Geral"
            value={`${stats.taxa_acerto_geral}%`}
            subtitle={`${stats.total_acertos} acertos de ${stats.total_respondidas}`}
            icon={<TrendingUp className="w-5 h-5 text-emerald-600" />}
            color="emerald"
          />

          <StatCard
            title="Tempo Médio por Questão"
            value={`${stats.tempo_medio_questao_segundos}s`}
            subtitle="Ideal para concurso: ~75s"
            icon={<Clock className="w-5 h-5 text-blue-600" />}
            color="blue"
          />

          <StatCard
            title="Simulados Concluídos"
            value={stats.simulados_concluidos}
            subtitle={`Média geral: ${stats.media_simulados}%`}
            icon={<FileSpreadsheet className="w-5 h-5 text-purple-600" />}
            color="purple"
          />

          <StatCard
            title="Sequência de Estudos"
            value={`${stats.sequencia_dias} Dias`}
            subtitle="Hábito diário ativo"
            icon={<Flame className="w-5 h-5 text-amber-500" />}
            color="amber"
          />
        </div>

        {/* AI Study Recommendation Diagnosis */}
        {piorDisciplina && (
          <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-900 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-blue-700 dark:text-blue-300 uppercase tracking-wider text-[11px]">
                    Diagnóstico Inteligente
                  </span>
                  <Badge variant="warning" size="sm">
                    Atenção Recomendada
                  </Badge>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  Reforço Prioritário: {piorDisciplina.disciplina_nome}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                  Sua taxa de acertos atual em {piorDisciplina.disciplina_nome} é de{" "}
                  <strong>{piorDisciplina.percentual}%</strong> ({piorDisciplina.erros} erros).
                  Recomendamos resolver 15 questões focadas nesta matéria hoje.
                </p>
              </div>
            </div>

            <Link
              href={`/questoes?disciplina_id=${piorDisciplina.disciplina_id}`}
              className="shrink-0"
            >
              <Button size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Treinar {piorDisciplina.disciplina_nome}
              </Button>
            </Link>
          </div>
        )}

        {/* Middle: 7-Day History + Bancas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 7 Days History */}
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Histórico de Questões dos Últimos 7 Dias</CardTitle>
                <p className="text-xs text-slate-500">
                  Consistência diária de resolução
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-7 gap-2 pt-4">
                {stats.historico_recente.map((item, idx) => {
                  const maxDay = 10;
                  const heightPercent = Math.min(
                    100,
                    Math.max(15, (item.total / maxDay) * 100)
                  );

                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <div className="w-full h-28 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-end p-1.5 overflow-hidden">
                        <div
                          className="w-full bg-blue-600 dark:bg-blue-500 rounded-lg transition-all duration-500 hover:bg-blue-500"
                          style={{ height: `${heightPercent}%` }}
                          title={`${item.total} questões (${item.acertos} acertos)`}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                        {item.data}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {item.total} q.
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Desempenho por Banca Examinadora */}
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Desempenho por Banca Examinadora</CardTitle>
                <p className="text-xs text-slate-500">
                  Seu aproveitamento nas principais instituições de concursos
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.por_banca.map((banca) => (
                <div key={banca.banca} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {banca.banca}
                    </span>
                    <span className="text-slate-500">
                      {banca.acertos}/{banca.total} acertos (
                      <strong
                        className={
                          banca.percentual >= 70
                            ? "text-emerald-600 dark:text-emerald-400"
                            : banca.percentual >= 50
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-rose-600 dark:text-rose-400"
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
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Matriz Completa de Disciplinas</CardTitle>
              <p className="text-xs text-slate-500">
                Acompanhamento completo de questões resolvidas, acertos, erros e tempo médio
              </p>
            </div>
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
                {stats.por_disciplina.map((disc) => (
                  <tr
                    key={disc.disciplina_id}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                  >
                    <td className="px-5 py-3.5 font-semibold text-slate-900 dark:text-slate-100">
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
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
  );
}
