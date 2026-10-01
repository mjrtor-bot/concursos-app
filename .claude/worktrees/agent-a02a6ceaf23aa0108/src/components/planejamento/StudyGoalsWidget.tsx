"use client";

import React, { useState } from "react";
import { Target, Clock, CheckCircle2, Award, ArrowUpRight, Flame } from "lucide-react";
import { MetasEstudoConfig } from "@/types";
import Link from "next/link";

interface StudyGoalsWidgetProps {
  metas?: MetasEstudoConfig | null;
  loading?: boolean;
  onOpenTimer?: () => void;
}

export function StudyGoalsWidget({ metas, loading = false, onOpenTimer }: StudyGoalsWidgetProps) {
  const [tab, setTab] = useState<"hoje" | "semana">("hoje");

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-xs animate-pulse">
        <div className="h-5 w-36 bg-slate-200 dark:bg-slate-800 rounded mb-4" />
        <div className="space-y-4">
          <div className="h-16 bg-slate-100 dark:bg-slate-800/60 rounded-xl" />
          <div className="h-16 bg-slate-100 dark:bg-slate-800/60 rounded-xl" />
        </div>
      </div>
    );
  }

  const dados = metas || {
    meta_diaria_questoes: 30,
    meta_diaria_minutos: 120,
    meta_semanal_questoes: 210,
    meta_semanal_minutos: 840,
    questoes_concluidas_hoje: 0,
    minutos_liquidos_hoje: 0,
    percentual_questoes_hoje: 0,
    percentual_minutos_hoje: 0,
    atingiu_meta_questoes_hoje: false,
    atingiu_meta_horas_hoje: false,
  };

  const formatarTempo = (minutos: number) => {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    if (h === 0) return `${m}min`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
  };

  const pctQuestoesHoje = Math.min(100, Math.round(dados.percentual_questoes_hoje || 0));
  const pctHorasHoje = Math.min(100, Math.round(dados.percentual_minutos_hoje || 0));

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Top Header with Tabs */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Metas de Estudo
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Controle de rendimento líquido diário e semanal
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60 text-xs">
          <button
            onClick={() => setTab("hoje")}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              tab === "hoje"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            Hoje
          </button>
          <button
            onClick={() => setTab("semana")}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              tab === "semana"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            Semana
          </button>
        </div>
      </div>

      {tab === "hoje" ? (
        <div className="space-y-4">
          {/* Meta 1: Questões Hoje */}
          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Questões Resolvidas
                </span>
                {dados.atingiu_meta_questoes_hoje && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                    <CheckCircle2 className="w-3 h-3" /> Meta Batida
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                {dados.questoes_concluidas_hoje} / {dados.meta_diaria_questoes} q
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  dados.atingiu_meta_questoes_hoje
                    ? "bg-emerald-500"
                    : "bg-indigo-600 dark:bg-indigo-500"
                }`}
                style={{ width: `${pctQuestoesHoje}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <span>{pctQuestoesHoje}% da meta diária</span>
              <Link
                href="/questoes"
                className="inline-flex items-center gap-0.5 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Resolver questões <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Meta 2: Horas Líquidas Hoje */}
          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Horas Líquidas de Estudo
                </span>
                {dados.atingiu_meta_horas_hoje && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                    <Award className="w-3 h-3" /> Meta Batida
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                {formatarTempo(dados.minutos_liquidos_hoje)} / {formatarTempo(dados.meta_diaria_minutos)}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  dados.atingiu_meta_horas_hoje
                    ? "bg-emerald-500"
                    : "bg-emerald-600 dark:bg-emerald-500"
                }`}
                style={{ width: `${pctHorasHoje}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <span>{pctHorasHoje}% concluído</span>
              {onOpenTimer ? (
                <button
                  onClick={onOpenTimer}
                  className="inline-flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                >
                  Cronômetro Líquido <ArrowUpRight className="w-3 h-3" />
                </button>
              ) : (
                <Link
                  href="/mentoria/hoje"
                  className="inline-flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                >
                  Iniciar Sessão <ArrowUpRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Semana: Questões & Horas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                Meta Semanal de Questões
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {dados.meta_semanal_questoes} q
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Média diária sugerida: {Math.round(dados.meta_semanal_questoes / 7)} questões/dia
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/30">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                Meta Semanal de Horas
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {formatarTempo(dados.meta_semanal_minutos)}
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Média diária sugerida: {formatarTempo(Math.round(dados.meta_semanal_minutos / 7))}/dia
              </p>
            </div>
          </div>

          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 rounded-xl flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-300">
            <Flame className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <span>
              Manter o ritmo semanal garante a conclusão de todo o edital antes da prova.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
