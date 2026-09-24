"use client";

import React, { useState, useEffect, Suspense, useCallback } from "react";
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
  Loader2,
} from "lucide-react";

function QuestoesContent() {
  const searchParams = useSearchParams();
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [assuntos, setAssuntos] = useState<Assunto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filtro, setFiltro] = useState<FiltroQuestoes>({
    disciplina_id: searchParams.get("disciplina_id") || undefined,
    assunto_id: searchParams.get("assunto_id") || undefined,
    concurso_id: searchParams.get("concurso_id") || undefined,
    banca: searchParams.get("banca") || undefined,
    origem: (searchParams.get("origem") as any) || "todas",
    status: "todas",
  });

  // Carrega Disciplinas e Assuntos (API com fallback para DataService)
  useEffect(() => {
    let isMounted = true;

    async function carregarTaxonomia() {
      try {
        const [resDisc, resAss] = await Promise.all([
          fetch("/api/disciplinas").catch(() => null),
          fetch("/api/assuntos").catch(() => null),
        ]);

        if (resDisc && resDisc.ok) {
          const jsonDisc = await resDisc.json();
          if (jsonDisc.success && jsonDisc.disciplinas && isMounted) {
            setDisciplinas(jsonDisc.disciplinas);
          }
        } else if (isMounted) {
          setDisciplinas(DataService.getDisciplinas());
        }

        if (resAss && resAss.ok) {
          const jsonAss = await resAss.json();
          if (jsonAss.success && jsonAss.assuntos && isMounted) {
            setAssuntos(jsonAss.assuntos);
          }
        } else if (isMounted) {
          setAssuntos(DataService.getAssuntos());
        }
      } catch (err) {
        if (isMounted) {
          setDisciplinas(DataService.getDisciplinas());
          setAssuntos(DataService.getAssuntos());
        }
      }
    }

    carregarTaxonomia();

    return () => {
      isMounted = false;
    };
  }, []);

  // Busca de questões com suporte a API server-side e filtragem com DataService
  const buscarQuestoes = useCallback(async () => {
    setIsLoading(true);
    try {
      // Monta query params para a API
      const params = new URLSearchParams();
      if (filtro.disciplina_id && filtro.disciplina_id !== "todos") {
        params.set("disciplina_id", filtro.disciplina_id);
      }
      if (filtro.assunto_id && filtro.assunto_id !== "todos") {
        params.set("assunto_id", filtro.assunto_id);
      }
      if (filtro.banca && filtro.banca !== "todas") {
        params.set("banca", filtro.banca);
      }
      if (filtro.ano) {
        params.set("ano", String(filtro.ano));
      }
      if (filtro.tipo && filtro.tipo !== "todos") {
        params.set("tipo", filtro.tipo);
      }
      if (filtro.dificuldade && filtro.dificuldade !== "todos") {
        params.set("dificuldade", filtro.dificuldade);
      }
      if (filtro.origem && filtro.origem !== "todas") {
        params.set("origem", filtro.origem);
      }
      if (filtro.termo_busca && filtro.termo_busca.trim()) {
        params.set("termo_busca", filtro.termo_busca.trim());
      }
      params.set("pageSize", "100");

      let lista: Questao[] = [];

      try {
        const response = await fetch(`/api/questoes?${params.toString()}`);
        if (response.ok) {
          const data = await response.json();
          if (data.success && Array.isArray(data.questoes)) {
            lista = data.questoes;
          }
        }
      } catch (e) {
        // Fallback para DataService em caso de erro na requisição
        lista = DataService.getQuestoes(filtro);
      }

      if (lista.length === 0) {
        // Se a API não retornou ou estamos no modo mock local puro
        lista = DataService.getQuestoes(filtro);
      } else if (filtro.status && filtro.status !== "todas") {
        // Aplica filtro de status de resposta do usuário local
        lista = lista.filter((q) => {
          const resp = DataService.getRespostaByQuestaoId(q.id);
          const isFav = DataService.isFavorita(q.id);

          if (filtro.status === "nao_resolvidas") return !resp;
          if (filtro.status === "acertadas") return resp?.correta === true;
          if (filtro.status === "erradas") return resp?.correta === false;
          if (filtro.status === "favoritas") return isFav;
          return true;
        });
      }

      setQuestoes(lista);

      // Se houver parâmetro de busca direta por questaoId, navega até ela
      const targetQId = searchParams.get("questaoId");
      if (targetQId) {
        const idx = lista.findIndex((q) => q.id === targetQId);
        if (idx >= 0) {
          setCurrentIndex(idx);
          setIsLoading(false);
          return;
        }
      }

      setCurrentIndex(0);
    } catch (error) {
      console.error("[QuestoesPage] Erro ao carregar questões:", error);
      const fallbackList = DataService.getQuestoes(filtro);
      setQuestoes(fallbackList);
      setCurrentIndex(0);
    } finally {
      setIsLoading(false);
    }
  }, [filtro, searchParams]);

  useEffect(() => {
    buscarQuestoes();
  }, [buscarQuestoes]);

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
    setFiltro({ status: "todas", origem: "todas" });
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
      {isLoading ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Carregando questões do acervo...
          </p>
        </div>
      ) : questoes.length === 0 ? (
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
    <Suspense
      fallback={
        <div className="p-8 text-center text-sm text-slate-500 flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-600" /> Carregando módulo de questões...
        </div>
      }
    >
      <QuestoesContent />
    </Suspense>
  );
}
