"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FileText,
  Loader2,
  Target,
  Sparkles,
  Trash2,
  AlertCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { useConcurso } from "@/contexts/ConcursoContext";
import { useToast } from "@/contexts/ToastContext";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import { useAuth } from "@/contexts/AuthContext";

type Edital = {
  id: string;
  nome: string;
  orgao?: string | null;
  banca?: string | null;
  cargo?: string | null;
  uf?: string | null;
  status: string;
  arquivo_nome?: string | null;
  arquivo_tamanho?: number | null;
  erro_processamento?: string | null;
  edital_id?: string | null;
  created_at: string;
  updated_at?: string;
  confirmado_em?: string | null;
  total_disciplinas: number;
  total_topicos: number;
};

type StatusFilter = "todos" | "confirmado" | "aguardando_revisao" | "outros";

export default function EditaisImportadosPage() {
  const { user } = useAuth();
  const { recarregarConcursoAlvo, concursoAtivo } = useConcurso();
  const { success, error: toastError } = useToast();
  const [editais, setEditais] = useState<Edital[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [aplicandoId, setAplicandoId] = useState<string | null>(null);
  const [excluindoId, setExcluindoId] = useState<string | null>(null);
  const [filtroStatus, setFiltroStatus] = useState<StatusFilter>("todos");
  const [busca, setBusca] = useState("");

  async function carregar() {
    setLoading(true);
    setErro("");
    try {
      const r = await fetch("/api/editais/importados", { cache: "no-store" });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Falha ao carregar seus editais.");
      setEditais(j.editais || []);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Falha ao carregar seus editais.");
    } finally {
      setLoading(false);
    }
  }

  async function usarComoAlvo(id: string) {
    setAplicandoId(id);
    try {
      const res = await fetch(`/api/editais/${id}/usar`, { method: "POST" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Falha ao definir como concurso alvo.");

      await recarregarConcursoAlvo();
      if (user?.id) {
        await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      }
      success("Edital importado definido como seu Concurso Alvo com sucesso!");
    } catch (e) {
      toastError(e instanceof Error ? e.message : "Não foi possível aplicar este edital.");
    } finally {
      setAplicandoId(null);
    }
  }

  async function excluirEdital(id: string, nomeOuCargo: string) {
    if (!window.confirm(`Tem certeza que deseja excluir o edital "${nomeOuCargo}"?`)) {
      return;
    }
    setExcluindoId(id);
    try {
      const res = await fetch(`/api/editais/importados?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Falha ao excluir o edital.");

      setEditais((prev) => prev.filter((e) => e.id !== id));
      success("Edital excluído com sucesso.");
    } catch (e) {
      toastError(e instanceof Error ? e.message : "Não foi possível excluir o edital.");
    } finally {
      setExcluindoId(null);
    }
  }

  useEffect(() => {
    let ignore = false;
    async function init() {
      try {
        const r = await fetch("/api/editais/importados", { cache: "no-store" });
        const j = await r.json();
        if (ignore) return;
        if (!r.ok) throw new Error(j.error || "Falha ao carregar seus editais.");
        setEditais(j.editais || []);
      } catch (e) {
        if (!ignore) {
          setErro(e instanceof Error ? e.message : "Falha ao carregar seus editais.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    void init();
    return () => {
      ignore = true;
    };
  }, []);

  const contagens = useMemo(() => {
    const confirmados = editais.filter((e) => e.status === "confirmado").length;
    const aguardando = editais.filter((e) => e.status === "aguardando_revisao").length;
    const outros = editais.filter((e) => !["confirmado", "aguardando_revisao"].includes(e.status)).length;
    return { confirmados, aguardando, outros, total: editais.length };
  }, [editais]);

  const editaisFiltrados = useMemo(() => {
    return editais.filter((ed) => {
      const matchesFiltro =
        filtroStatus === "todos"
          ? true
          : filtroStatus === "confirmado"
          ? ed.status === "confirmado"
          : filtroStatus === "aguardando_revisao"
          ? ed.status === "aguardando_revisao"
          : !["confirmado", "aguardando_revisao"].includes(ed.status);

      const termo = busca.trim().toLowerCase();
      const matchesBusca =
        !termo ||
        (ed.nome && ed.nome.toLowerCase().includes(termo)) ||
        (ed.orgao && ed.orgao.toLowerCase().includes(termo)) ||
        (ed.cargo && ed.cargo.toLowerCase().includes(termo)) ||
        (ed.uf && ed.uf.toLowerCase().includes(termo)) ||
        (ed.banca && ed.banca.toLowerCase().includes(termo)) ||
        (ed.arquivo_nome && ed.arquivo_nome.toLowerCase().includes(termo));

      return matchesFiltro && matchesBusca;
    });
  }, [editais, filtroStatus, busca]);

  const renderStatusBadge = (ed: Edital) => {
    switch (ed.status) {
      case "confirmado":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3 h-3" /> Confirmado
          </span>
        );
      case "aguardando_revisao":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-950/60 px-2.5 py-1 text-xs font-bold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <Clock className="w-3 h-3" /> Aguardando Revisão
          </span>
        );
      case "processando":
      case "aguardando_processamento":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-950/60 px-2.5 py-1 text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <Loader2 className="w-3 h-3 animate-spin" /> Processando IA
          </span>
        );
      case "revisao_sem_conteudo":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 dark:bg-orange-950/60 px-2.5 py-1 text-xs font-bold text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
            <AlertTriangle className="w-3 h-3" /> Sem Conteúdo
          </span>
        );
      case "erro":
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 dark:bg-rose-950/60 px-2.5 py-1 text-xs font-bold text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
            <AlertCircle className="w-3 h-3" /> Erro na Extração
          </span>
        );
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/mentoria/edital/biblioteca"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para Biblioteca de Editais
        </Link>
        <Link
          href="/mentoria/edital/biblioteca#importar"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-700 shadow-xs transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          Importar novo PDF
        </Link>
      </div>

      <header className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Biblioteca Pessoal
            </p>
            <h1 className="text-2xl font-black text-slate-900 dark:text-slate-50">
              Meus Editais Importados
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Gerencie seus editais em PDF processados pela inteligência artificial para o seu plano de estudos.
            </p>
          </div>
        </div>
      </header>

      {/* Tabs de Filtro e Busca */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold overflow-x-auto">
          <button
            type="button"
            onClick={() => setFiltroStatus("todos")}
            className={`py-1.5 px-3 rounded-lg transition-all whitespace-nowrap ${
              filtroStatus === "todos"
                ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Todos ({contagens.total})
          </button>
          <button
            type="button"
            onClick={() => setFiltroStatus("confirmado")}
            className={`py-1.5 px-3 rounded-lg transition-all whitespace-nowrap ${
              filtroStatus === "confirmado"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Confirmados ({contagens.confirmados})
          </button>
          <button
            type="button"
            onClick={() => setFiltroStatus("aguardando_revisao")}
            className={`py-1.5 px-3 rounded-lg transition-all whitespace-nowrap ${
              filtroStatus === "aguardando_revisao"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Aguardando Revisão ({contagens.aguardando})
          </button>
          {contagens.outros > 0 && (
            <button
              type="button"
              onClick={() => setFiltroStatus("outros")}
              className={`py-1.5 px-3 rounded-lg transition-all whitespace-nowrap ${
                filtroStatus === "outros"
                  ? "bg-slate-700 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Em Análise / Erros ({contagens.outros})
            </button>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Filtrar por órgão, cargo, banca..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full md:w-64 pl-3.5 pr-4 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
          <p className="text-xs text-slate-500">Carregando seus editais importados...</p>
        </div>
      ) : erro ? (
        <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 p-4 text-red-700 dark:text-red-300 text-sm">
          {erro}
        </div>
      ) : editaisFiltrados.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center bg-white/50 dark:bg-slate-900/50">
          <FileText className="w-12 h-12 mx-auto text-slate-400" />
          <h2 className="mt-4 font-black text-slate-900 dark:text-slate-100 text-base">
            {editais.length === 0 ? "Nenhum edital importado ainda" : "Nenhum edital encontrado neste filtro"}
          </h2>
          <p className="mt-1 text-xs text-slate-500 max-w-md mx-auto">
            {editais.length === 0
              ? "Envie o PDF do seu edital na biblioteca para que a IA extraia o conteúdo programático completo."
              : "Tente alterar os termos de busca ou mudar a aba de status selecionada."}
          </p>
          {editais.length === 0 && (
            <Link
              href="/mentoria/edital/biblioteca#importar"
              className="inline-flex items-center gap-2 mt-5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Importar meu primeiro edital
            </Link>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {editaisFiltrados.map((ed) => {
            const isAplicando = aplicandoId === ed.id;
            const isExcluindo = excluindoId === ed.id;
            const isAtivo = concursoAtivo?.eh_importado && concursoAtivo?.nome.includes(ed.nome);

            return (
              <article
                key={ed.id}
                className={`rounded-2xl border transition-all p-5 flex flex-col justify-between ${
                  isAtivo
                    ? "bg-blue-50/30 dark:bg-blue-950/20 border-blue-400 dark:border-blue-800 shadow-xs"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                          {ed.orgao || "Órgão não informado"}
                        </span>
                        {ed.uf && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {ed.uf}
                          </span>
                        )}
                        {isAtivo && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                            Alvo Atual
                          </span>
                        )}
                      </div>
                      <h2 className="mt-1 text-base font-black text-slate-900 dark:text-slate-100 truncate">
                        {ed.cargo || ed.nome || "Cargo não informado"}
                      </h2>
                    </div>
                    <div className="shrink-0">{renderStatusBadge(ed)}</div>
                  </div>

                  {/* Informações detalhadas */}
                  <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                      <dt className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">Banca</dt>
                      <dd className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                        {ed.banca || "Personalizada"}
                      </dd>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                      <dt className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">Tipo</dt>
                      <dd className="font-semibold text-slate-800 dark:text-slate-200">
                        Edital Privado (PDF)
                      </dd>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                      <dt className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">Disciplinas</dt>
                      <dd className="font-semibold text-slate-800 dark:text-slate-200">
                        {ed.total_disciplinas > 0 ? ed.total_disciplinas : "—"}
                      </dd>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                      <dt className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">Tópicos</dt>
                      <dd className="font-semibold text-slate-800 dark:text-slate-200">
                        {ed.total_topicos > 0 ? ed.total_topicos : "—"}
                      </dd>
                    </div>
                  </dl>

                  {ed.status === "revisao_sem_conteudo" && (
                    <div className="mt-3 p-2.5 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 text-[11px] text-orange-800 dark:text-orange-300 flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-orange-600" />
                      <span>
                        {ed.erro_processamento ||
                          "O PDF enviado parece ser apenas um extrato ou edital de abertura sem o Anexo II de conteúdo programático."}
                      </span>
                    </div>
                  )}

                  {ed.status === "erro" && (
                    <div className="mt-3 p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-[11px] text-rose-800 dark:text-rose-300 flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
                      <span className="truncate">
                        {ed.erro_processamento || "Ocorreu uma falha no processamento deste arquivo."}
                      </span>
                    </div>
                  )}

                  <p className="mt-3 truncate text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <FileText className="w-3 h-3 shrink-0" />
                    <span className="truncate">{ed.arquivo_nome || "arquivo.pdf"}</span>
                    <span className="ml-auto shrink-0">
                      {ed.created_at ? new Date(ed.created_at).toLocaleDateString("pt-BR") : ""}
                    </span>
                  </p>
                </div>

                {/* Barra de Ações */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 flex-wrap">
                    {ed.status === "confirmado" && (
                      <>
                        <button
                          type="button"
                          disabled={isAplicando}
                          onClick={() => usarComoAlvo(ed.id)}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors shadow-xs"
                        >
                          {isAplicando ? (
                            <>
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              Definindo...
                            </>
                          ) : (
                            <>
                              <Target className="h-3.5 w-3.5" />
                              Definir Alvo
                            </>
                          )}
                        </button>

                        <Link
                          href={`/mentoria/edital?importado=${ed.id}`}
                          className="inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                          <BookOpen className="h-3.5 w-3.5" /> Ver Verticalizado
                        </Link>
                      </>
                    )}

                    {ed.status === "aguardando_revisao" && (
                      <Link
                        href="/mentoria/edital/biblioteca"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        <Clock className="h-3.5 w-3.5" /> Revisar na Biblioteca
                      </Link>
                    )}

                    {(ed.status === "erro" || ed.status === "revisao_sem_conteudo") && (
                      <Link
                        href="/mentoria/edital/biblioteca#importar"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 transition-colors shadow-xs"
                      >
                        <Sparkles className="h-3.5 w-3.5" /> Reimportar PDF
                      </Link>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={isExcluindo}
                    onClick={() => excluirEdital(ed.id, ed.cargo || ed.nome || "Edital")}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors ml-auto"
                    title="Excluir este edital importado"
                  >
                    {isExcluindo ? (
                      <Loader2 className="w-4 h-4 animate-spin text-rose-600" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
