"use client";

import React, { useState } from "react";
import { Flame, Trophy, CalendarCheck, TrendingUp, Info } from "lucide-react";
import { ConstanciaTelemetria, ActivityHeatmapPoint } from "@/types";

interface ActivityHeatmapProps {
  telemetria?: ConstanciaTelemetria | null;
  loading?: boolean;
}

export function ActivityHeatmap({ telemetria, loading = false }: ActivityHeatmapProps) {
  const [hoveredPoint, setHoveredPoint] = useState<ActivityHeatmapPoint | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-xs animate-pulse">
        <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-md mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-slate-100 dark:bg-slate-800/60 rounded-xl" />
          ))}
        </div>
        <div className="h-28 bg-slate-100 dark:bg-slate-800/40 rounded-xl" />
      </div>
    );
  }

  const dados = telemetria || {
    sequencia_atual_dias: 0,
    melhor_sequencia_dias: 0,
    total_dias_estudados: 0,
    taxa_constancia_ultimos_30_dias: 0,
    heatmap_90_dias: [],
  };

  const getCorIntensidade = (intensidade: number) => {
    switch (intensidade) {
      case 1:
        return "bg-emerald-200 dark:bg-emerald-950/80 hover:ring-2 hover:ring-emerald-400";
      case 2:
        return "bg-emerald-400 dark:bg-emerald-800 hover:ring-2 hover:ring-emerald-300";
      case 3:
        return "bg-emerald-500 dark:bg-emerald-600 hover:ring-2 hover:ring-emerald-200";
      case 4:
        return "bg-emerald-600 dark:bg-emerald-400 shadow-xs shadow-emerald-500/20 hover:ring-2 hover:ring-emerald-300";
      default:
        return "bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700";
    }
  };

  const formatarDataBr = (dataIso: string) => {
    try {
      const [ano, mes, dia] = dataIso.split("-");
      const data = new Date(Number(ano), Number(mes) - 1, Number(dia));
      return data.toLocaleDateString("pt-BR", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      });
    } catch {
      return dataIso;
    }
  };

  const getTextoIntensidade = (p: ActivityHeatmapPoint) => {
    if (p.minutos_estudados === 0 && p.questoes_resolvidas === 0) {
      return "Nenhum registro de estudo neste dia.";
    }
    const horas = Math.floor(p.minutos_estudados / 60);
    const mins = p.minutos_estudados % 60;
    const tempoTxt = horas > 0 ? `${horas}h ${mins > 0 ? `${mins}m` : ""}` : `${mins} min`;
    return `${tempoTxt} de estudo líquido • ${p.questoes_resolvidas} questões`;
  };

  // Organizar os 90 pontos em colunas semanais (7 dias por coluna)
  const heatmap = dados.heatmap_90_dias || [];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-xs relative">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Constância & Frequência Policial
            </h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
              Últimos 90 dias
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Aprovação em carreiras policiais é construída dia a dia. Monitore seu ritmo de execução real.
          </p>
        </div>
      </div>

      {/* Indicadores de Constância (KPIs) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {/* Sequência Atual */}
        <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent dark:from-amber-500/15 dark:via-orange-500/5 dark:to-transparent border border-amber-200/60 dark:border-amber-800/50 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Sequência Atual
            </div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {dados.sequencia_atual_dias}{" "}
              <span className="text-xs font-normal text-slate-500">
                {dados.sequencia_atual_dias === 1 ? "dia" : "dias"}
              </span>
            </div>
          </div>
        </div>

        {/* Melhor Sequência */}
        <div className="bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-transparent dark:from-yellow-500/15 dark:via-amber-500/5 dark:to-transparent border border-yellow-200/60 dark:border-yellow-800/50 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-yellow-500/20 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Recorde
            </div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {dados.melhor_sequencia_dias}{" "}
              <span className="text-xs font-normal text-slate-500">
                {dados.melhor_sequencia_dias === 1 ? "dia" : "dias"}
              </span>
            </div>
          </div>
        </div>

        {/* Total de Dias Estudados */}
        <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-500/15 dark:via-indigo-500/5 dark:to-transparent border border-blue-200/60 dark:border-blue-800/50 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Dias Ativos
            </div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              {dados.total_dias_estudados}{" "}
              <span className="text-xs font-normal text-slate-500">dias</span>
            </div>
          </div>
        </div>

        {/* Constância 30 Dias */}
        <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-500/15 dark:via-teal-500/5 dark:to-transparent border border-emerald-200/60 dark:border-emerald-800/50 rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Constância (30d)
            </div>
            <div className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {dados.taxa_constancia_ultimos_30_dias}%
            </div>
          </div>
        </div>
      </div>

      {/* Grid Interativo do Heatmap */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[620px]">
          <div className="flex items-center gap-1.5 flex-wrap">
            {heatmap.map((p, idx) => (
              <div
                key={p.data || idx}
                onMouseEnter={(e) => {
                  setHoveredPoint(p);
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: rect.left + rect.width / 2, y: rect.top });
                }}
                onMouseLeave={() => setHoveredPoint(null)}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] transition-all duration-150 cursor-pointer ${getCorIntensidade(
                  p.intensidade
                )}`}
                title={`${p.data}: ${p.minutos_estudados}min, ${p.questoes_resolvidas} questões`}
              />
            ))}
          </div>

          {/* Legenda */}
          <div className="flex items-center justify-between mt-3 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <Info className="w-3.5 h-3.5" />
              <span>Passe o cursor sobre os dias para ver detalhes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px]">Menos</span>
              <div className="w-3 h-3 rounded-[2px] bg-slate-100 dark:bg-slate-800" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-200 dark:bg-emerald-950/80" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-400 dark:bg-emerald-800" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-500 dark:bg-emerald-600" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-600 dark:bg-emerald-400" />
              <span className="text-[11px]">Mais</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip Flutuante */}
      {hoveredPoint && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full -mt-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg py-1.5 px-3 shadow-xl border border-slate-800 dark:border-slate-200"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <div className="font-semibold">{formatarDataBr(hoveredPoint.data)}</div>
          <div className="text-[11px] opacity-90">{getTextoIntensidade(hoveredPoint)}</div>
        </div>
      )}
    </div>
  );
}
