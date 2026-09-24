"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { Disciplina, Assunto, EstatisticasGerais } from "@/types";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle2,
  ListOrdered,
  Sparkles,
  Layers,
} from "lucide-react";

export default function DisciplinasPage() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [assuntos, setAssuntos] = useState<Assunto[]>([]);
  const [expandedDiscId, setExpandedDiscId] = useState<string | null>(null);
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);

  useEffect(() => {
    const discs = DataService.getDisciplinas();
    const ass = DataService.getAssuntos();
    const s = DataService.getEstatisticas();

    setDisciplinas(discs);
    setAssuntos(ass);
    setStats(s);

    if (discs.length > 0) {
      setExpandedDiscId(discs[0].id);
    }
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedDiscId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Disciplinas & Assuntos
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Grade curricular organizada com tópicos detalhados e questões comentadas
            </p>
          </div>
          <Link href="/questoes">
            <Button
              size="md"
              leftIcon={<Play className="w-4 h-4 fill-white" />}
            >
              Resolver Todas as Questões
            </Button>
          </Link>
        </div>

        {/* Disciplinas Accordion List */}
        <div className="space-y-4">
          {disciplinas.map((disciplina) => {
            const isExpanded = expandedDiscId === disciplina.id;
            const assuntosDaDisc = assuntos.filter(
              (a) => a.disciplina_id === disciplina.id
            );
            const discStat = stats?.por_disciplina.find(
              (d) => d.disciplina_id === disciplina.id
            );

            return (
              <Card
                key={disciplina.id}
                id={disciplina.slug}
                className="overflow-hidden transition-all"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(disciplina.id)}
                  className="p-5 sm:p-6 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{
                        backgroundColor: `${disciplina.cor}15`,
                        color: disciplina.cor,
                        border: `1px solid ${disciplina.cor}30`,
                      }}
                    >
                      <BookOpen className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                          {disciplina.nome}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          {assuntosDaDisc.length} tópicos
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl line-clamp-1">
                        {disciplina.descricao}
                      </p>
                    </div>
                  </div>

                  {/* Progress info & Toggle chevron */}
                  <div className="flex items-center gap-4 shrink-0 justify-between sm:justify-end">
                    {discStat && discStat.total > 0 && (
                      <div className="text-right hidden sm:block">
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {discStat.acertos}/{discStat.total} acertos
                        </p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                          {discStat.percentual}% de aproveitamento
                        </p>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/questoes?disciplina_id=${disciplina.id}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          rightIcon={<Play className="w-3.5 h-3.5" />}
                        >
                          Praticar Matéria
                        </Button>
                      </Link>

                      <button
                        className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
                        aria-label={isExpanded ? "Recolher" : "Expandir"}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Assuntos List */}
                {isExpanded && (
                  <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-4 sm:p-6 space-y-3 animate-in fade-in duration-200">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      Assuntos do Conteúdo Programático
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {assuntosDaDisc.map((assunto, idx) => (
                        <div
                          key={assunto.id}
                          className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-start justify-between gap-3 shadow-2xs hover:border-blue-400 dark:hover:border-blue-500 transition-all"
                        >
                          <div className="space-y-1 flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <h5 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate">
                                {assunto.nome}
                              </h5>
                            </div>
                            {assunto.descricao && (
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-7 line-clamp-2">
                                {assunto.descricao}
                              </p>
                            )}
                          </div>

                          <Link
                            href={`/questoes?disciplina_id=${disciplina.id}&assunto_id=${assunto.id}`}
                            className="shrink-0"
                          >
                            <Button
                              size="sm"
                              variant="secondary"
                              className="text-[11px] px-2.5 py-1"
                            >
                              Resolver
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
  );
}
