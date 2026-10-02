"use client";

import React from "react";
import {
  BookOpen,
  HelpCircle,
  RotateCcw,
  AlertTriangle,
  FileCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  Play,
  Sparkles,
} from "lucide-react";
import { MissaoDiariaItem, MentoriaTarefaTipo } from "@/types";
import Link from "next/link";

interface DailyMissionCardProps {
  missao: MissaoDiariaItem;
  onIniciar?: (missao: MissaoDiariaItem) => void;
  onConcluir?: (missaoId: string) => void;
  onAdiar?: (missaoId: string) => void;
}

export function DailyMissionCard({
  missao,
  onIniciar,
  onConcluir,
  onAdiar,
}: DailyMissionCardProps) {
  const getTipoInfo = (tipo: MentoriaTarefaTipo) => {
    switch (tipo) {
      case "TEORIA":
        return {
          label: "Teoria Policial",
          icon: BookOpen,
          bg: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/60",
          badgeColor: "bg-blue-600 text-white",
        };
      case "QUESTOES":
        return {
          label: "Bateria de Questões",
          icon: HelpCircle,
          bg: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60",
          badgeColor: "bg-indigo-600 text-white",
        };
      case "REVISAO":
        return {
          label: "Revisão Espaçada (SRS)",
          icon: RotateCcw,
          bg: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60",
          badgeColor: "bg-amber-600 text-white",
        };
      case "CADERNO_ERROS":
        return {
          label: "Caderno de Erros",
          icon: AlertTriangle,
          bg: "bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/60",
          badgeColor: "bg-rose-600 text-white",
        };
      case "SIMULADO":
        return {
          label: "Simulado Policial",
          icon: FileCheck,
          bg: "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/60",
          badgeColor: "bg-purple-600 text-white",
        };
      default:
        return {
          label: "Estudo",
          icon: BookOpen,
          bg: "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200",
          badgeColor: "bg-slate-600 text-white",
        };
    }
  };

  const getPrioridadeBadge = (p: string) => {
    switch (p) {
      case "critica":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            Prioridade Crítica
          </span>
        );
      case "alta":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            Prioridade Alta
          </span>
        );
      case "media":
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
            Média
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            Normal
          </span>
        );
    }
  };

  const tipoInfo = getTipoInfo(missao.tipo);
  const Icone = tipoInfo.icon;
  const concluida = missao.status === "concluida";

  return (
    <div
      className={`border rounded-2xl p-4 sm:p-5 transition-all duration-200 ${
        concluida
          ? "bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-80"
          : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        {/* Lado Esquerdo: Info da Missão */}
        <div className="flex items-start gap-3.5">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${tipoInfo.bg}`}
          >
            {concluida ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Icone className="w-5 h-5" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold ${tipoInfo.badgeColor}`}
              >
                Bloco {missao.bloco_ordem} • {tipoInfo.label}
              </span>
              {getPrioridadeBadge(missao.prioridade)}
            </div>

            <h4
              className={`text-base font-bold text-slate-900 dark:text-slate-100 ${
                concluida ? "line-through text-slate-500 dark:text-slate-400" : ""
              }`}
            >
              {missao.disciplina_nome}
            </h4>

            {missao.assunto_nome && (
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Tópico: <span className="font-medium text-slate-800 dark:text-slate-200">{missao.assunto_nome}</span>
              </p>
            )}

            {/* Metadados: Duração e Questões */}
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {missao.duracao_minutos} min previstos
              </span>
              <span>•</span>
              <span className="font-medium">
                Meta: {missao.quantidade_questoes} questões
              </span>
            </div>

            {/* Explicabilidade da IA */}
            {missao.motivo_explicabilidade && missao.motivo_explicabilidade.length > 0 && (
              <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                {missao.motivo_explicabilidade.map((motivo, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                    {motivo}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Lado Direito: Ações */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/80 shrink-0">
          {concluida ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4" /> Concluída
            </span>
          ) : (
            <>
              {onIniciar ? (
                <button
                  onClick={() => onIniciar(missao)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-white" /> Iniciar Missão
                </button>
              ) : (
                <Link
                  href={`/mentoria/hoje?bloco=${missao.bloco_ordem}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-white" /> Iniciar Estudo
                </Link>
              )}

              <div className="flex items-center gap-1.5">
                <Link
                  href={`/questoes?disciplina=${missao.disciplina_id}`}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Questões <ChevronRight className="w-3 h-3" />
                </Link>

                {onAdiar && (
                  <button
                    onClick={() => onAdiar(missao.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Adiar missão"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}

                {onConcluir && (
                  <button
                    onClick={() => onConcluir(missao.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Marcar como concluída manualmente"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
