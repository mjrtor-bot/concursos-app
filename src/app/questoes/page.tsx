"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { QuestionCard } from "@/components/questoes/QuestionCard";
import { QuestionFilter } from "@/components/questoes/QuestionFilter";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { Questao, FiltroQuestoes, Disciplina, Assunto } from "@/types";
import {
  CheckSquare2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  BookOpen,
} from "lucide-react";

function QuestoesContent() {
  const searchParams = useSearchParams();
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [assuntos, setAssuntos] = useState<Assunto[]>([]);

  const [filtro, setFiltro] = useState<FiltroQuestoes>({
    disciplina_id: searchParams.get("disciplina_id") || undefined,
    assunto_id: searchParams.get("assunto_id") || undefined,
    concurso_id: searchParams.get("concurso_id") || undefined,
    banca: searchParams.get("banca") || undefined,
    status: "todas",
  });

  useEffect(() => {
    setDisciplinas(DataService.getDisciplinas());
    setAssuntos(DataService.getAssuntos());
  }, []);

  useEffect(() => {
    const list = DataService.getQuestoes(filtro);
    setQuestoes(list);

    // If param questaoId is provided, jump to it
    const targetQId = searchParams.get("questaoId");
    if (targetQId) {
      const idx = list.findIndex((q) => q.id === targetQId);
      if (idx >= 0) {
        setCurrentIndex(idx);
        return;
      }
    }

    setCurrentIndex(0);
  }, [filtro, searchParams]);

  const handleProxima = () => {
    if (currentIndex < questoes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAnterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLimparFiltros = () => {
    setFiltro({ status: "todas" });
  };

  const questaoAtual = questoes[currentIndex];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Banco de Questões
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Resolva questões de provas anteriores com resolução comentada por especialistas
          </p>
        </div>
      </div>

      {/* Filter Component */}
      <QuestionFilter
        filtro={filtro}
        onFiltroChange={setFiltro}
        disciplinas={disciplinas}
        assuntos={assuntos}
        onLimparFiltros={handleLimparFiltros}
        totalEncontradas={questoes.length}
      />

      {/* Main Question Interface */}
      {questoes.length === 0 ? (
        <EmptyState
          icon={<CheckSquare2 className="w-8 h-8" />}
          title="Nenhuma questão encontrada com estes filtros"
          description="Tente ajustar ou limpar os filtros de matéria, banca ou status para visualizar mais questões."
          actionLabel="Limpar Filtros"
          onAction={handleLimparFiltros}
        />
      ) : (
        <div className="space-y-4">
          {/* Question Navigator bar */}
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 rounded-2xl">
            <Button
              variant="outline"
              size="sm"
              onClick={handleAnterior}
              disabled={currentIndex === 0}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
            >
              Anterior
            </Button>

            {/* Questions pagination dots/numbers */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[280px] sm:max-w-md px-2 py-1">
              {questoes.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const resp = DataService.getRespostaByQuestaoId(q.id);

                let dotColor =
                  "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400";
                if (resp) {
                  dotColor = resp.correta
                    ? "bg-emerald-500 text-white"
                    : "bg-rose-500 text-white";
                }
                if (isCurrent) {
                  dotColor =
                    "bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition-all ${dotColor}`}
                    title={`Questão ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleProxima}
              disabled={currentIndex === questoes.length - 1}
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              Próxima
            </Button>
          </div>

          {/* Active Question Card */}
          {questaoAtual && (
            <QuestionCard
              key={questaoAtual.id}
              questao={questaoAtual}
              numeroQuestao={currentIndex + 1}
              totalQuestoes={questoes.length}
              onProxima={
                currentIndex < questoes.length - 1 ? handleProxima : undefined
              }
            />
          )}
        </div>
      )}
    </div>
  );
}

export default function QuestoesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-slate-500">Carregando questões...</div>}>
      <QuestoesContent />
    </Suspense>
  );
}
