"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Database,
  PlusCircle,
  Upload,
  Search,
  Filter,
  Sparkles,
  ShieldCheck,
  Ban,
  AlertTriangle,
  CheckCircle2,
  Trash2,
  Edit3,
  BookOpen,
  Building2,
  Calendar,
  Layers,
  FileCheck,
  RefreshCw,
} from "lucide-react";
import { Questao, Disciplina, Assunto } from "@/types";
import { DataService } from "@/services/dataService";
import { mockDisciplinas, mockAssuntos } from "@/data/mockData";
import { Button } from "@/components/ui/Button";

export default function AdminQuestoesPage() {
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>(mockDisciplinas);
  const [assuntos, setAssuntos] = useState<Assunto[]>(mockAssuntos);
  const [loading, setLoading] = useState(true);

  // Filtros administrativos
  const [termoBusca, setTermoBusca] = useState("");
  const [disciplinaFiltro, setDisciplinaFiltro] = useState("todos");
  const [origemFiltro, setOrigemFiltro] = useState<"todas" | "oficiais" | "ia">("todas");
  const [statusFiltro, setStatusFiltro] = useState<"todas" | "ativas" | "anuladas" | "desatualizadas">("todas");
  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 10;

  const [feedbackMsg, setFeedbackMsg] = useState<{ tipo: "sucesso" | "erro"; texto: string } | null>(null);

  const carregarDados = () => {
    try {
      const lista = DataService.getTodasQuestoes();
      setQuestoes(lista);
      const discs = DataService.getDisciplinas();
      if (discs && discs.length > 0) setDisciplinas(discs);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const showFeedback = (tipo: "sucesso" | "erro", texto: string) => {
    setFeedbackMsg({ tipo, texto });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  // Ações de alteração de status
  const handleToggleAnulada = (q: Questao) => {
    const novoStatus = !q.anulada;
    DataService.atualizarQuestao(q.id, { anulada: novoStatus });
    carregarDados();
    showFeedback("sucesso", `Questão #${q.id.substring(0, 8)} ${novoStatus ? "anulada" : "restaurada"} com sucesso.`);
  };

  const handleToggleDesatualizada = (q: Questao) => {
    const novoStatus = !q.desatualizada;
    DataService.atualizarQuestao(q.id, {
      desatualizada: novoStatus,
      motivo_desatualizacao: novoStatus ? "Legislação ou entendimento jurisprudencial superado." : null,
    });
    carregarDados();
    showFeedback("sucesso", `Questão #${q.id.substring(0, 8)} ${novoStatus ? "marcada como desatualizada" : "marcada como atualizada"}.`);
  };

  const handleToggleRevisaoEspecialista = (q: Questao) => {
    const novoStatus = !q.revisada_por_especialista;
    DataService.atualizarQuestao(q.id, { revisada_por_especialista: novoStatus });
    carregarDados();
    showFeedback("sucesso", `Revisão de especialista ${novoStatus ? "confirmada" : "removida"}.`);
  };

  const handleRemoverQuestao = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta questão do catálogo? Caso haja respostas de alunos, recomenda-se mantê-la ou marcá-la como anulada.")) {
      const removida = DataService.removerQuestao(id);
      if (removida) {
        carregarDados();
        showFeedback("sucesso", "Questão removida do catálogo.");
      } else {
        showFeedback("erro", "Não foi possível remover a questão (pode ser parte do mock padrão de demonstração).");
      }
    }
  };

  // Métricas do Catálogo
  const totalQuestoes = questoes.length;
  const totalOficiais = questoes.filter((q) => !q.is_autoral_ia).length;
  const totalIA = questoes.filter((q) => q.is_autoral_ia).length;
  const totalRevisadas = questoes.filter((q) => q.revisada_por_especialista).length;
  const totalAnuladas = questoes.filter((q) => q.anulada).length;
  const totalDesatualizadas = questoes.filter((q) => q.desatualizada).length;

  // Filtragem
  const questoesFiltradas = questoes.filter((q) => {
    if (disciplinaFiltro !== "todos" && q.disciplina_id !== disciplinaFiltro) return false;
    if (origemFiltro === "oficiais" && q.is_autoral_ia) return false;
    if (origemFiltro === "ia" && !q.is_autoral_ia) return false;
    if (statusFiltro === "ativas" && (q.anulada || q.desatualizada)) return false;
    if (statusFiltro === "anuladas" && !q.anulada) return false;
    if (statusFiltro === "desatualizadas" && !q.desatualizada) return false;
    if (termoBusca.trim()) {
      const termo = termoBusca.toLowerCase().trim();
      const match =
        q.enunciado.toLowerCase().includes(termo) ||
        q.banca.toLowerCase().includes(termo) ||
        q.orgao.toLowerCase().includes(termo) ||
        (q.cargo && q.cargo.toLowerCase().includes(termo));
      if (!match) return false;
    }
    return true;
  });

  const totalPaginas = Math.ceil(questoesFiltradas.length / itensPorPagina) || 1;
  const questoesExibidas = questoesFiltradas.slice((pagina - 1) * itensPorPagina, pagina * itensPorPagina);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header Administrativo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Database className="w-4 h-4" />
            Módulo Administrativo
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mt-1">
            Gestão do Catálogo de Questões
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Controle de inventário, deduplicação, auditoria de autoria IA e importação em lote.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link href="/admin/usuarios">
            <Button variant="outline" className="flex items-center gap-2 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              Usuários & Permissões
            </Button>
          </Link>

          <Link href="/admin/questoes/importar">
            <Button variant="outline" className="flex items-center gap-2 text-xs font-semibold">
              <Upload className="w-4 h-4" />
              Importar Lote (CSV/JSON)
            </Button>
          </Link>

          <Link href="/admin/questoes/nova">
            <Button className="flex items-center gap-2 text-xs font-semibold shadow-md shadow-blue-500/20">
              <PlusCircle className="w-4 h-4" />
              Cadastrar Questão Manual
            </Button>
          </Link>
        </div>
      </div>

      {/* Feedback Toast */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium transition-all ${
            feedbackMsg.tipo === "sucesso"
              ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800"
              : "bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800"
          }`}
        >
          {feedbackMsg.tipo === "sucesso" ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertTriangle className="w-5 h-5 shrink-0" />}
          {feedbackMsg.texto}
        </div>
      )}

      {/* Grid de Métricas do Catálogo */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <span className="text-xs font-medium text-slate-500 block">Total Geral</span>
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">{totalQuestoes}</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">questões catalogadas</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 block flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" /> Oficiais
          </span>
          <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalOficiais}</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">provas anteriores</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <span className="text-xs font-medium text-purple-600 dark:text-purple-400 block flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Autorais IA
          </span>
          <span className="text-2xl font-bold text-purple-700 dark:text-purple-300">{totalIA}</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">com rastreabilidade</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 block flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Revisadas
          </span>
          <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{totalRevisadas}</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">por especialistas</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <span className="text-xs font-medium text-rose-600 dark:text-rose-400 block flex items-center gap-1">
            <Ban className="w-3.5 h-3.5" /> Anuladas
          </span>
          <span className="text-2xl font-bold text-rose-700 dark:text-rose-300">{totalAnuladas}</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">pela banca</span>
        </div>

        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <span className="text-xs font-medium text-amber-600 dark:text-amber-400 block flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> Desatualizadas
          </span>
          <span className="text-2xl font-bold text-amber-700 dark:text-amber-300">{totalDesatualizadas}</span>
          <span className="text-[11px] text-slate-400 block mt-0.5">lei/jurisprudência</span>
        </div>
      </div>

      {/* Painel de Filtros e Busca */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar por trecho do enunciado, banca, órgão ou cargo..."
              value={termoBusca}
              onChange={(e) => {
                setTermoBusca(e.target.value);
                setPagina(1);
              }}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={disciplinaFiltro}
              onChange={(e) => {
                setDisciplinaFiltro(e.target.value);
                setPagina(1);
              }}
              className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 font-medium"
            >
              <option value="todos">Todas as Matérias</option>
              {disciplinas.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option>
              ))}
            </select>

            <select
              value={origemFiltro}
              onChange={(e) => {
                setOrigemFiltro(e.target.value as any);
                setPagina(1);
              }}
              className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 font-medium"
            >
              <option value="todas">Todas as Origens</option>
              <option value="oficiais">Oficiais</option>
              <option value="ia">Autorais IA</option>
            </select>

            <select
              value={statusFiltro}
              onChange={(e) => {
                setStatusFiltro(e.target.value as any);
                setPagina(1);
              }}
              className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 font-medium"
            >
              <option value="todas">Todos os Status</option>
              <option value="ativas">Apenas Ativas</option>
              <option value="anuladas">Anuladas</option>
              <option value="desatualizadas">Desatualizadas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabela de Questões */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            Catálogo Cadastrado ({questoesFiltradas.length} encontradas)
          </div>
          <button
            onClick={carregarDados}
            className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Recarregar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200/60 dark:border-slate-800/60">
              <tr>
                <th className="px-4 py-3">Questão / Enunciado</th>
                <th className="px-4 py-3">Disciplina / Assunto</th>
                <th className="px-4 py-3">Banca / Ano / Órgão</th>
                <th className="px-4 py-3">Origem & Status</th>
                <th className="px-4 py-3 text-right">Ações Rápidas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {questoesExibidas.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-slate-500">
                    Nenhuma questão encontrada com os filtros selecionados.
                  </td>
                </tr>
              ) : (
                questoesExibidas.map((q) => {
                  const discNome = disciplinas.find((d) => d.id === q.disciplina_id)?.nome || q.disciplina_id;
                  const assNome = assuntos.find((a) => a.id === q.assunto_id)?.nome || q.assunto_id;

                  return (
                    <tr key={q.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-4 py-3.5 max-w-md">
                        <div className="font-mono text-[10px] text-slate-400 mb-0.5">
                          ID: {q.id.substring(0, 16)}... | v{q.versao || 1}
                        </div>
                        <p className="font-medium text-slate-900 dark:text-slate-100 line-clamp-2 leading-relaxed">
                          {q.enunciado}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-slate-500">
                            {q.tipo === "multipla_escolha" ? "Múltipla Escolha (5 alt)" : "Certo ou Errado"}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 bg-slate-100 dark:bg-slate-800 rounded font-medium">
                            {q.dificuldade.toUpperCase()}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="font-semibold text-slate-900 dark:text-slate-100 block">{discNome}</span>
                        <span className="text-[11px] text-slate-500 block truncate max-w-[180px]">{assNome}</span>
                      </td>

                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="font-bold text-slate-800 dark:text-slate-200 block">{q.banca}</span>
                        <span className="text-[11px] text-slate-500 block">
                          {q.ano} • {q.orgao}
                        </span>
                        {q.cargo && <span className="text-[10px] text-slate-400 block">{q.cargo}</span>}
                      </td>

                      <td className="px-4 py-3.5 whitespace-nowrap space-y-1">
                        {q.is_autoral_ia ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-md border border-purple-200/50">
                            <Sparkles className="w-3 h-3 text-purple-500" />
                            Autoral IA ({q.modelo_ia || "Claude"})
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md border border-blue-200/50">
                            <Building2 className="w-3 h-3 text-blue-500" />
                            Prova Oficial
                          </span>
                        )}

                        <div className="flex items-center gap-1">
                          {q.revisada_por_especialista && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded">
                              <ShieldCheck className="w-3 h-3" /> Revisada
                            </span>
                          )}
                          {q.anulada && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] font-medium text-rose-600 bg-rose-50 dark:bg-rose-950/40 px-1.5 py-0.5 rounded">
                              <Ban className="w-3 h-3" /> Anulada
                            </span>
                          )}
                          {q.desatualizada && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded">
                              <AlertTriangle className="w-3 h-3" /> Desatualizada
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="px-4 py-3.5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleToggleRevisaoEspecialista(q)}
                            title={q.revisada_por_especialista ? "Remover selo de revisão" : "Marcar como revisada por especialista"}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              q.revisada_por_especialista
                                ? "bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300"
                                : "text-slate-400 hover:text-emerald-600 border-transparent hover:border-slate-200"
                            }`}
                          >
                            <ShieldCheck className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleToggleAnulada(q)}
                            title={q.anulada ? "Restaurar questão anulada" : "Marcar como anulada pela banca"}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              q.anulada
                                ? "bg-rose-100 text-rose-700 border-rose-300 dark:bg-rose-950 dark:text-rose-300"
                                : "text-slate-400 hover:text-rose-600 border-transparent hover:border-slate-200"
                            }`}
                          >
                            <Ban className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleToggleDesatualizada(q)}
                            title={q.desatualizada ? "Marcar como atualizada" : "Marcar como desatualizada (jurisprudência/lei)"}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              q.desatualizada
                                ? "bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-950 dark:text-amber-300"
                                : "text-slate-400 hover:text-amber-600 border-transparent hover:border-slate-200"
                            }`}
                          >
                            <AlertTriangle className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleRemoverQuestao(q.id)}
                            title="Remover questão do catálogo"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Paginação */}
        {totalPaginas > 1 && (
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              Página <strong>{pagina}</strong> de <strong>{totalPaginas}</strong>
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={pagina <= 1}
                onClick={() => setPagina((p) => Math.max(1, p - 1))}
              >
                Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={pagina >= totalPaginas}
                onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
              >
                Próxima
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
