"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { GradeSemanalDia, MentoriaTarefaTipo } from "@/types";
import Link from "next/link";

interface WeeklyScheduleGridProps {
  grade?: GradeSemanalDia[];
  loading?: boolean;
}

export function WeeklyScheduleGrid({ grade = [], loading = false }: WeeklyScheduleGridProps) {
  const [diaSelecionado, setDiaSelecionado] = useState<number>(0);
  const [hojeDiaSemana, setHojeDiaSemana] = useState<number | null>(null);

  useEffect(() => {
    const frame = window.setTimeout(() => {
      const hoje = new Date().getDay();
      setDiaSelecionado(hoje);
      setHojeDiaSemana(hoje);
    });
    return () => window.clearTimeout(frame);
  }, []);

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-xs animate-pulse">
        <div className="h-6 w-52 bg-slate-200 dark:bg-slate-800 rounded-md mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-40 bg-slate-100 dark:bg-slate-800/50 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  const getTipoIcon = (tipo: MentoriaTarefaTipo) => {
    switch (tipo) {
      case "TEORIA":
        return <BookOpen className="w-3 h-3 text-blue-500 shrink-0" />;
      case "QUESTOES":
        return <HelpCircle className="w-3 h-3 text-indigo-500 shrink-0" />;
      case "REVISAO":
        return <RotateCcw className="w-3 h-3 text-amber-500 shrink-0" />;
      default:
        return <BookOpen className="w-3 h-3 text-slate-500 shrink-0" />;
    }
  };

  const getPrioridadeColor = (p: string) => {
    switch (p) {
      case "critica":
        return "border-l-rose-500";
      case "alta":
        return "border-l-amber-500";
      case "media":
        return "border-l-blue-500";
      default:
        return "border-l-slate-400";
    }
  };

  const totalBlocosSemana = grade.reduce((acc, dia) => acc + dia.blocos.length, 0);
  const totalMinutosDisponiveis = grade.reduce(
    (acc, dia) => acc + dia.minutos_disponiveis,
    0
  );
  const totalMinutosSemana = grade.reduce(
    (acc, dia) => acc + dia.minutos_planejados,
    0
  );
  const totalMinutosRestantes = grade.reduce(
    (acc, dia) => acc + dia.minutos_restantes,
    0
  );

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-xs">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Planejamento Semanal Distribuído
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Grade horária calculada via algoritmo de Hamilton-Hare com base no seu diagnóstico
            </p>
          </div>
        </div>

        {/* Resumo Semanal */}
        <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
            {Math.floor(totalMinutosSemana / 60)}h {totalMinutosSemana % 60 > 0 ? `${totalMinutosSemana % 60}m` : ""} em blocos
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
            {totalBlocosSemana} blocos de estudo
          </span>
        </div>
      </div>

      {/* Grid de Dias (Desktop: 7 colunas / Mobile: abas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
        {grade.map((dia) => {
          const isHoje = hojeDiaSemana !== null && dia.dia_semana === hojeDiaSemana;
          const isSelecionado = dia.dia_semana === diaSelecionado;

          return (
            <div
              key={dia.dia_semana}
              onClick={() => setDiaSelecionado(dia.dia_semana)}
              className={`rounded-xl border p-3.5 flex flex-col transition-all cursor-pointer ${
                isHoje
                  ? "bg-indigo-50/40 dark:bg-indigo-950/30 border-indigo-300 dark:border-indigo-700 ring-1 ring-indigo-400/40"
                  : isSelecionado
                  ? "bg-slate-50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-700"
                  : "bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300"
              }`}
            >
              {/* Topo do Card do Dia */}
              <div className="flex items-center justify-between gap-1 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {dia.nome_curto}
                  </span>
                  {isHoje && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-indigo-600 text-white">
                      HOJE
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {dia.minutos_planejados} / {dia.minutos_disponiveis}m
                </span>
              </div>

              {/* Lista de Blocos do Dia */}
              <div className="space-y-1.5 flex-1 min-h-[90px]">
                {dia.blocos.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-[11px] text-slate-400 italic py-4">
                    Descanso / Livre
                  </div>
                ) : (
                  dia.blocos.map((bloco) => (
                    <div
                      key={bloco.id}
                      className={`p-1.5 rounded-md bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 border-l-3 ${getPrioridadeColor(
                        bloco.prioridade_nivel
                      )} text-xs shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors`}
                    >
                      <div className="flex items-center gap-1 mb-0.5">
                        {getTipoIcon(bloco.tipo)}
                        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                          {bloco.duracao_minutos}m
                        </span>
                      </div>
                      <div className="font-semibold text-[11px] text-slate-800 dark:text-slate-200 truncate" title={bloco.disciplina_nome}>
                        {bloco.disciplina_nome}
                      </div>
                      {bloco.assunto_nome && (
                        <div className="mt-0.5 text-[10px] font-medium text-indigo-600 dark:text-indigo-400 truncate" title={bloco.assunto_nome}>
                          {bloco.assunto_nome}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota Explicativa */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>
            {totalMinutosRestantes > 0
              ? `${totalMinutosDisponiveis} min disponíveis: ${totalMinutosSemana} min em blocos e ${totalMinutosRestantes} min livres.`
              : "Distribuição proporcional garantindo que nenhuma matéria fique mais de 3 dias sem contato."}
          </span>
        </div>
        <Link
          href="/mentoria/plano"
          className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
        >
          Ver Detalhes do Ciclo <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
