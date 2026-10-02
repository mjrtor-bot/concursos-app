"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  FileWarning,
  Layers,
  ChevronDown,
  ChevronRight,
  Database,
  ArrowLeft,
  Search,
  Filter,
  RefreshCw,
} from "lucide-react";

interface TopicoItem {
  topico_id: string;
  assunto_id: string;
  assunto_nome: string;
  peso: number;
  incidencia: number;
  ordem: number;
  questoes_assunto: number;
  status_cobertura: "coberto" | "parcial" | "sem_questoes";
}

interface DisciplinaItem {
  disciplina_id: string;
  disciplina_nome: string;
  questoes_total_disciplina: number;
  topicos: TopicoItem[];
}

interface EditalRelatorio {
  edital: {
    id: string;
    numero?: string | null;
    titulo: string;
    banca?: string | null;
    status: string;
    publicado_em?: string | null;
    prova_em?: string | null;
    concurso_nome: string;
    orgao: string;
    uf: string;
    cargo_nome: string;
  };
  metricas: {
    total_topicos: number;
    topicos_com_questoes: number;
    topicos_sem_questoes: number;
    cobertura_percentual: number;
    disciplinas_sem_questoes: string[];
  };
  disciplinas: DisciplinaItem[];
}

interface AuditoriaItem {
  id: string;
  numero?: string | null;
  titulo: string;
  banca?: string | null;
  status: string;
  concurso_nome: string;
  cargo_nome: string;
}

interface DuplicadoGrupo {
  chave: string;
  total: number;
  itens: AuditoriaItem[];
}

interface CoberturaData {
  total_editais: number;
  relatorios: EditalRelatorio[];
  auditoria: {
    editais_zerados: AuditoriaItem[];
    editais_duplicados: DuplicadoGrupo[];
  };
}

export default function AdminCoberturaPage() {
  const [data, setData] = useState<CoberturaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const [filtroBusca, setFiltroBusca] = useState("");
  const [editalAberto, setEditalAberto] = useState<string | null>(null);
  const [apenasDeficitarios, setApenasDeficitarios] = useState(false);

  async function carregar() {
    setLoading(true);
    setErro("");
    try {
      const res = await fetch("/api/admin/cobertura", { cache: "no-store" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Falha ao carregar relatório de cobertura");
      setData(json);
      if (json.relatorios?.length > 0 && !editalAberto) {
        setEditalAberto(json.relatorios[0].edital.id);
      }
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void carregar();
  }, []);

  const relatoriosFiltrados = (data?.relatorios || []).filter((r) => {
    const termo = filtroBusca.toLowerCase();
    const matchBusca =
      !termo ||
      r.edital.titulo.toLowerCase().includes(termo) ||
      r.edital.concurso_nome.toLowerCase().includes(termo) ||
      r.edital.cargo_nome.toLowerCase().includes(termo) ||
      (r.edital.banca || "").toLowerCase().includes(termo);

    const matchDeficit = !apenasDeficitarios || r.metricas.cobertura_percentual < 100;
    return matchBusca && matchDeficit;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              href="/admin/editais"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar para Editais
            </Link>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
            <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            Relatório de Cobertura (Tópicos × Questões)
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Mapeamento da densidade de questões por edital, disciplinas descobertas e auditoria de cadastros.
          </p>
        </div>
        <button
          onClick={carregar}
          disabled={loading}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shadow-xs"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-blue-600" : ""}`} />
          Atualizar Dados
        </button>
      </div>

      {erro && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 text-sm">
          {erro}
        </div>
      )}

      {/* KPI Cards */}
      {data && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total de Editais</span>
            <span className="text-2xl font-black text-slate-900 dark:text-slate-100">{data.total_editais}</span>
            <span className="text-xs text-slate-500 block mt-0.5">Cadastrados no sistema</span>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Com Conteúdo</span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {data.total_editais - (data.auditoria.editais_zerados?.length || 0)}
            </span>
            <span className="text-xs text-slate-500 block mt-0.5">Possuem tópicos vinculados</span>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">Editais Zerados</span>
            <span className="text-2xl font-black text-amber-700 dark:text-amber-400">
              {data.auditoria.editais_zerados?.length || 0}
            </span>
            <span className="text-xs text-amber-600/80 dark:text-amber-400/80 block mt-0.5">0 tópicos vinculados</span>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/40">
            <span className="text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider block">Duplicidades</span>
            <span className="text-2xl font-black text-purple-700 dark:text-purple-400">
              {data.auditoria.editais_duplicados?.length || 0}
            </span>
            <span className="text-xs text-purple-600/80 dark:text-purple-400/80 block mt-0.5">Grupos com registros múltiplos</span>
          </div>
        </div>
      )}

      {/* Auditoria de Editais (C4) */}
      {data && (data.auditoria.editais_zerados.length > 0 || data.auditoria.editais_duplicados.length > 0) && (
        <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/15 p-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <div>
              <h2 className="font-bold text-base text-amber-950 dark:text-amber-200">
                Auditoria de Editais (Revisão Administrativa)
              </h2>
              <p className="text-xs text-amber-800 dark:text-amber-300/80">
                Registros identificados para conferência. Não remova registros sem validação prévia.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Editais Vazios */}
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-amber-900/40 p-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <FileWarning className="w-4 h-4" />
                Editais com 0 Tópicos ({data.auditoria.editais_zerados.length})
              </h3>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {data.auditoria.editais_zerados.map((ed) => (
                  <div
                    key={ed.id}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs"
                  >
                    <div className="font-bold text-slate-800 dark:text-slate-200">{ed.titulo}</div>
                    <div className="text-slate-500 dark:text-slate-400 mt-0.5">
                      {ed.concurso_nome} · {ed.cargo_nome} · {ed.banca || "Sem banca"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editais Duplicados */}
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-amber-900/40 p-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Grupos Potencialmente Duplicados ({data.auditoria.editais_duplicados.length})
              </h3>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {data.auditoria.editais_duplicados.map((g, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1"
                  >
                    <div className="font-bold text-slate-800 dark:text-slate-200 flex justify-between">
                      <span>{g.itens[0]?.concurso_nome} — {g.itens[0]?.cargo_nome}</span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">{g.total} registros</span>
                    </div>
                    <ul className="text-slate-500 dark:text-slate-400 space-y-0.5 list-disc pl-4">
                      {g.itens.map((it) => (
                        <li key={it.id}>
                          {it.titulo} ({it.status}) — ID: <code className="text-[10px]">{it.id.slice(0, 8)}...</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filtros e Busca */}
      <div className="flex flex-col sm:flex-row items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por concurso, cargo, edital ou banca..."
            value={filtroBusca}
            onChange={(e) => setFiltroBusca(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => setApenasDeficitarios(!apenasDeficitarios)}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border transition-colors ${
            apenasDeficitarios
              ? "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800"
              : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100"
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          Apenas com Déficit (&lt;100%)
        </button>
      </div>

      {/* Lista de Relatórios por Edital */}
      <div className="space-y-4">
        {relatoriosFiltrados.map((rel) => {
          const isOpen = editalAberto === rel.edital.id;
          const { edital, metricas, disciplinas } = rel;

          return (
            <div
              key={edital.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs"
            >
              {/* Card Header Accordion */}
              <div
                onClick={() => setEditalAberto(isOpen ? null : edital.id)}
                className="p-5 cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {edital.concurso_nome}
                    </span>
                    {edital.uf && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {edital.uf}
                      </span>
                    )}
                    {edital.banca && (
                      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                        Banca: <b>{edital.banca}</b>
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    {isOpen ? <ChevronDown className="w-4 h-4 text-blue-600" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                    {edital.titulo}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Cargo: <b>{edital.cargo_nome}</b> · Status: <span className="capitalize">{edital.status}</span>
                  </p>
                </div>

                {/* Métricas e Barra de Cobertura */}
                <div className="flex items-center gap-4 min-w-[280px]">
                  <div className="flex-1 space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600 dark:text-slate-400">Cobertura do Edital</span>
                      <span
                        className={
                          metricas.cobertura_percentual >= 80
                            ? "text-emerald-600 dark:text-emerald-400"
                            : metricas.cobertura_percentual >= 40
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-red-600 dark:text-red-400"
                        }
                      >
                        {metricas.cobertura_percentual}% ({metricas.topicos_com_questoes}/{metricas.total_topicos} tópicos)
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          metricas.cobertura_percentual >= 80
                            ? "bg-emerald-500"
                            : metricas.cobertura_percentual >= 40
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${metricas.cobertura_percentual}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion Content */}
              {isOpen && (
                <div className="p-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 space-y-6">
                  {/* Alerta de Disciplinas sem Questões (C2) */}
                  {metricas.disciplinas_sem_questoes.length > 0 && (
                    <div className="p-4 rounded-xl bg-red-50/80 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/50 text-xs text-red-800 dark:text-red-300 space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        Disciplinas do Edital sem nenhuma questão cadastrada no banco:
                      </div>
                      <p className="text-red-700/90 dark:text-red-300/80">
                        {metricas.disciplinas_sem_questoes.join(", ")}.
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 italic">
                        Nota de conformidade: não mapear automaticamente disciplinas distintas. O banco deve receber novas questões autorais ou oficiais para cobrir essas disciplinas.
                      </p>
                    </div>
                  )}

                  {/* Tabela de Disciplinas e Tópicos */}
                  <div className="space-y-4">
                    {disciplinas.map((disc) => (
                      <div
                        key={disc.disciplina_id}
                        className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                      >
                        <div className="px-4 py-3 bg-slate-100/70 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
                          <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            {disc.disciplina_nome}
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                              disc.questoes_total_disciplina > 0
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                                : "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300"
                            }`}
                          >
                            {disc.questoes_total_disciplina} questões na disciplina
                          </span>
                        </div>

                        <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                          {disc.topicos.map((topico) => (
                            <div
                              key={topico.topico_id}
                              className="px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                            >
                              <div className="space-y-0.5">
                                <span className="font-medium text-slate-800 dark:text-slate-200">
                                  {topico.assunto_nome}
                                </span>
                                <div className="text-[10px] text-slate-400 flex items-center gap-3">
                                  <span>Peso: <b>{topico.peso}</b></span>
                                  <span>Incidência: <b>{topico.incidencia}%</b></span>
                                  <span>Ordem: <b>{topico.ordem}</b></span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-start sm:self-auto">
                                {topico.questoes_assunto > 0 ? (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold text-[10px] border border-emerald-200/60 dark:border-emerald-900/40">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    {topico.questoes_assunto} questões
                                  </span>
                                ) : topico.status_cobertura === "parcial" ? (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-semibold text-[10px] border border-amber-200/60 dark:border-amber-900/40">
                                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                                    0 no assunto (possui na disciplina)
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-semibold text-[10px] border border-red-200/60 dark:border-red-900/40">
                                    <FileWarning className="w-3 h-3 text-red-600" />
                                    0 questões no banco
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {disciplinas.length === 0 && (
                      <div className="p-6 text-center text-xs text-slate-500 dark:text-slate-400">
                        Nenhum tópico cadastrado para este edital. Importe o conteúdo programático via PDF ou CSV.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {relatoriosFiltrados.length === 0 && !loading && (
          <div className="p-8 text-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-500">
            Nenhum edital encontrado com os filtros informados.
          </div>
        )}
      </div>
    </div>
  );
}
