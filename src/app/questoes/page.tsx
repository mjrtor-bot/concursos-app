"use client";

import React, { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { QuestionCard } from "@/components/questoes/QuestionCard";
import { QuestionFilter } from "@/components/questoes/QuestionFilter";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { Questao, FiltroQuestoes, Disciplina, Assunto, OrigemQuestaoFiltro } from "@/types";
import { useConcurso } from "@/contexts/ConcursoContext";
import {
  CheckSquare2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ChevronsLeft,
  ChevronsRight,
  AlertCircle,
} from "lucide-react";

const PAGE_SIZE = 20; // questões por lote buscado da API

function QuestoesContent() {
  const searchParams = useSearchParams();
  const { concursoAtivo } = useConcurso();

  // ── Estado principal ─────────────────────────────────────────────────────
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // índice na página atual
  const [apiPage, setApiPage] = useState(1); // página atual da API
  const [totalQuestoes, setTotalQuestoes] = useState<number | undefined>(undefined); // total real do Supabase/filtro
  const [totalApiPages, setTotalApiPages] = useState(1);

  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [assuntos, setAssuntos] = useState<Assunto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [avisoFallback, setAvisoFallback] = useState<string | null>(null);
  const [disciplinaSemQuestoes, setDisciplinaSemQuestoes] = useState(false);

  const [filtro, setFiltro] = useState<FiltroQuestoes>(() => {
    const rawOrigem = searchParams.get("origem");
    const origemValida: OrigemQuestaoFiltro =
      rawOrigem === "oficiais" || rawOrigem === "autorais_ia" || rawOrigem === "todas"
        ? rawOrigem
        : "todas";
    const rawEscopo = searchParams.get("escopo");
    const escopoValido: "meu_edital" | "todos" | undefined =
      rawEscopo === "meu_edital" || rawEscopo === "todos" ? rawEscopo : undefined;

    return {
      disciplina_id: searchParams.get("disciplina_id") || undefined,
      assunto_id: searchParams.get("assunto_id") || undefined,
      concurso_id: searchParams.get("concurso_id") || undefined,
      edital_id: searchParams.get("edital_id") || undefined,
      escopo: escopoValido,
      banca: searchParams.get("banca") || undefined,
      origem: origemValida,
      status: "todas",
    };
  });

  // O padrão deve exibir o acervo disponível; filtros restritivos só entram por ação explícita do usuário.

  // ── Taxonomia (disciplinas / assuntos) ───────────────────────────────────
  useEffect(() => {
    let isMounted = true;

    async function carregarTaxonomia() {
      try {
        await DataService.sincronizarRespostasSupabase();
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
      } catch {
        if (isMounted) {
          setDisciplinas(DataService.getDisciplinas());
          setAssuntos(DataService.getAssuntos());
        }
      }
    }

    carregarTaxonomia();
    return () => { isMounted = false; };
  }, []);

  // ── Monta os URLSearchParams para a API ──────────────────────────────────
  const buildParams = useCallback(
    (page: number) => {
      const params = new URLSearchParams();

      if (filtro.escopo) {
        params.set("escopo", filtro.escopo);
      } else if (concursoAtivo) {
        params.set("escopo", "meu_edital");
      }

      if (filtro.concurso_id) {
        params.set("concurso_id", filtro.concurso_id);
      } else if (concursoAtivo?.id) {
        params.set("concurso_id", concursoAtivo.id);
      }

      if (filtro.edital_id) {
        params.set("edital_id", filtro.edital_id);
      }

      if (filtro.disciplina_id && filtro.disciplina_id !== "todos") {
        params.set("disciplina_id", filtro.disciplina_id);
      }

      if (filtro.assunto_id && filtro.assunto_id !== "todos") {
        params.set("assunto_id", filtro.assunto_id);
      }
      if (filtro.banca && filtro.banca !== "todas")
        params.set("banca", filtro.banca);
      if (filtro.ano) params.set("ano", String(filtro.ano));
      if (filtro.tipo && filtro.tipo !== "todos") params.set("tipo", filtro.tipo);
      if (filtro.dificuldade && filtro.dificuldade !== "todos")
        params.set("dificuldade", filtro.dificuldade);
      if (filtro.origem && filtro.origem !== "todas")
        params.set("origem", filtro.origem);
      if (filtro.status && filtro.status !== "todas") params.set("status", filtro.status);
      if (filtro.termo_busca && filtro.termo_busca.trim())
        params.set("termo_busca", filtro.termo_busca.trim());
      params.set("page", String(page));
      params.set("pageSize", String(PAGE_SIZE));
      return params;
    },
    [filtro, assuntos, concursoAtivo]
  );

  // ── Busca questões (reseta para página 1 quando filtro muda) ─────────────
  const buscarQuestoes = useCallback(
    async (page = 1) => {
      try {
        const params = buildParams(page);
        const response = await fetch(`/api/questoes?${params.toString()}`);

        if (response.ok) {
          const data = await response.json();
          if (data.success && Array.isArray(data.questoes)) {
            const lista: Questao[] = data.questoes;

            setQuestoes(lista);
            setApiPage(data.page ?? page);
            setTotalQuestoes(data.total ?? lista.length);
            setTotalApiPages(data.totalPages ?? 1);
            setAvisoFallback(data.fallback_disciplina && data.aviso ? data.aviso : null);
            setDisciplinaSemQuestoes(Boolean(data.disciplina_sem_questoes));

            // Navega até a questão específica se presente na URL
            const targetQId = searchParams.get("questaoId");
            if (targetQId && page === 1) {
              const idx = lista.findIndex((q) => q.id === targetQId);
              setCurrentIndex(idx >= 0 ? idx : 0);
            } else {
              setCurrentIndex(0);
            }
            return;
          }
        }

        console.error("[QuestoesPage] API de questões indisponível");
        const lista: Questao[] = [];
        setQuestoes(lista);
        setTotalQuestoes(0);
        setTotalApiPages(1);
        setApiPage(1);
        setCurrentIndex(0);
        setAvisoFallback(null);
        setDisciplinaSemQuestoes(false);
      } catch (error) {
        console.error("[QuestoesPage] Erro ao buscar questões:", error);
        const lista: Questao[] = [];
        setQuestoes(lista);
        setTotalQuestoes(0);
        setTotalApiPages(1);
        setApiPage(1);
        setCurrentIndex(0);
        setAvisoFallback(null);
        setDisciplinaSemQuestoes(false);
      } finally {
        setIsLoading(false);
        setIsLoadingPage(false);
      }
    },
    [buildParams, searchParams]
  );

  // Recarrega desde a página 1 quando os filtros mudam
  useEffect(() => {
    let ignore = false;
    async function carregar() {
      try {
        const params = buildParams(1);
        const response = await fetch(`/api/questoes?${params.toString()}`);
        if (ignore) return;

        if (response.ok) {
          const data = await response.json();
          if (ignore) return;
          if (data.success && Array.isArray(data.questoes)) {
            const lista: Questao[] = data.questoes;
            setQuestoes(lista);
            setApiPage(data.page ?? 1);
            setTotalQuestoes(data.total ?? lista.length);
            setTotalApiPages(data.totalPages ?? 1);
            setAvisoFallback(data.fallback_disciplina && data.aviso ? data.aviso : null);
            setDisciplinaSemQuestoes(Boolean(data.disciplina_sem_questoes));

            const targetQId = searchParams.get("questaoId");
            if (targetQId) {
              const idx = lista.findIndex((q) => q.id === targetQId);
              setCurrentIndex(idx >= 0 ? idx : 0);
            } else {
              setCurrentIndex(0);
            }
            return;
          }
        }

        setQuestoes([]);
        setTotalQuestoes(0);
        setTotalApiPages(1);
        setApiPage(1);
        setCurrentIndex(0);
        setAvisoFallback(null);
        setDisciplinaSemQuestoes(false);
      } catch {
        if (!ignore) {
          setQuestoes([]);
          setTotalQuestoes(0);
          setTotalApiPages(1);
          setApiPage(1);
          setCurrentIndex(0);
          setAvisoFallback(null);
          setDisciplinaSemQuestoes(false);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    carregar();
    return () => {
      ignore = true;
    };
  }, [buildParams, searchParams]);

  // ── Navegação dentro da página atual ────────────────────────────────────
  const handleProxima = async () => {
    if (currentIndex < questoes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (apiPage < totalApiPages) {
      // Avança para a próxima página da API
      await buscarQuestoes(apiPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAnterior = async () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (apiPage > 1) {
      // Volta para a página anterior e posiciona no último item
      await buscarQuestoes(apiPage - 1);
      // currentIndex será 0 após o carregamento; posicionamos no final no próximo tick
      setTimeout(() => setCurrentIndex(PAGE_SIZE - 1), 100);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleIrParaPagina = async (page: number) => {
    if (page < 1 || page > totalApiPages || page === apiPage) return;
    await buscarQuestoes(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLimparFiltros = () => {
    setFiltro({ status: "todas", origem: "todas" });
    setAvisoFallback(null);
    setDisciplinaSemQuestoes(false);
  };

  const filtroSomenteOficiais = filtro.origem === "oficiais";

  // ── Números globais para exibição ────────────────────────────────────────
  const questaoGlobalNumero = (apiPage - 1) * PAGE_SIZE + currentIndex + 1;
  const isUltimaQuestao =
    currentIndex === questoes.length - 1 && apiPage === totalApiPages;
  const isPrimeiraQuestao = currentIndex === 0 && apiPage === 1;

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
            Pratique com questões autorais e, quando disponíveis, questões oficiais com procedência identificada
          </p>
        </div>
      </div>

      {/* Filter Component — exibe total real do Supabase */}
      <QuestionFilter
        filtro={filtro}
        onFiltroChange={setFiltro}
        disciplinas={disciplinas}
        assuntos={assuntos}
        onLimparFiltros={handleLimparFiltros}
        totalEncontradas={totalQuestoes}
        concursoNome={concursoAtivo ? `${concursoAtivo.orgao} - ${concursoAtivo.nome}` : undefined}
      />

      {/* Aviso de fallback para disciplina quando o assunto não tem questões */}
      {avisoFallback && (
        <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-center gap-3 text-amber-800 dark:text-amber-300 text-sm font-medium">
          <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <span>{avisoFallback}</span>
        </div>
      )}

      {/* Main Question Interface */}
      {isLoading ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Carregando questões do acervo...
          </p>
        </div>
      ) : questoes.length === 0 ? (
        disciplinaSemQuestoes ? (
          <EmptyState
            icon={<CheckSquare2 className="w-8 h-8" />}
            title="Nenhuma questão encontrada para esta disciplina"
            description="Ainda não há questões cadastradas para esta disciplina no acervo. Tente selecionar outra disciplina ou limpar os filtros."
            actionLabel="Limpar Filtros"
            onAction={handleLimparFiltros}
          />
        ) : (
          <EmptyState
            icon={<CheckSquare2 className="w-8 h-8" />}
            title="Nenhuma questão encontrada com estes filtros"
            description={filtroSomenteOficiais ? "Não há questões oficiais com procedência cadastradas para estes filtros. Selecione Todas as Questões ou Autorais / Criadas por IA para usar o acervo disponível." : "Tente ajustar ou limpar os filtros de matéria, banca ou status para visualizar mais questões."}
            actionLabel="Limpar Filtros"
            onAction={handleLimparFiltros}
          />
        )
      ) : (
        <div className="space-y-4">
          {/* Barra de navegação */}
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 rounded-2xl gap-2">
            {/* Anterior */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleAnterior}
              disabled={isPrimeiraQuestao || isLoadingPage}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
            >
              Anterior
            </Button>

            {/* Indicador de posição + paginação da API */}
            <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                Questão{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {questaoGlobalNumero.toLocaleString("pt-BR")}
                </span>{" "}
                de{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {(totalQuestoes ?? questoes.length).toLocaleString("pt-BR")}
                </span>
              </span>

              {/* Mini-paginação por páginas da API */}
              {totalApiPages > 1 && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleIrParaPagina(1)}
                    disabled={apiPage === 1 || isLoadingPage}
                    className="p-0.5 text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Primeira página"
                  >
                    <ChevronsLeft className="w-3.5 h-3.5" />
                  </button>

                  {/* Botões de página — exibe no máx. 5 em torno da atual */}
                  {(() => {
                    const visiblePages: number[] = [];
                    const half = 2;
                    let start = Math.max(1, apiPage - half);
                    const end = Math.min(totalApiPages, start + 4);
                    if (end - start < 4) start = Math.max(1, end - 4);
                    for (let p = start; p <= end; p++) visiblePages.push(p);
                    return visiblePages.map((p) => (
                      <button
                        key={p}
                        onClick={() => handleIrParaPagina(p)}
                        disabled={p === apiPage || isLoadingPage}
                        className={`w-6 h-6 rounded text-xs font-bold transition-all ${
                          p === apiPage
                            ? "bg-blue-600 text-white cursor-default"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                        } disabled:opacity-60`}
                      >
                        {isLoadingPage && p === apiPage ? (
                          <Loader2 className="w-3 h-3 animate-spin mx-auto" />
                        ) : (
                          p
                        )}
                      </button>
                    ));
                  })()}

                  <button
                    onClick={() => handleIrParaPagina(totalApiPages)}
                    disabled={apiPage === totalApiPages || isLoadingPage}
                    className="p-0.5 text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Última página"
                  >
                    <ChevronsRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Próxima */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleProxima}
              disabled={isUltimaQuestao || isLoadingPage}
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              Próxima
            </Button>
          </div>

          {/* Dots da página atual (navegação rápida dentro do lote) */}
          {questoes.length > 1 && (
            <div className="flex items-center gap-1 overflow-x-auto px-1">
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
                    title={`Questão ${(apiPage - 1) * PAGE_SIZE + idx + 1}`}
                  >
                    {(apiPage - 1) * PAGE_SIZE + idx + 1}
                  </button>
                );
              })}
            </div>
          )}

          {/* Active Question Card */}
          {questaoAtual && (
            <QuestionCard
              key={questaoAtual.id}
              questao={questaoAtual}
              numeroQuestao={questaoGlobalNumero}
              totalQuestoes={totalQuestoes ?? questoes.length}
              onProxima={!isUltimaQuestao ? handleProxima : undefined}
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
