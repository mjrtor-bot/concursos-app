"use client";

import React from "react";
import { FiltroQuestoes, Disciplina, Assunto } from "@/types";
import { Button } from "@/components/ui/Button";
import { Search, Filter, RotateCcw, X, Sparkles } from "lucide-react";

interface QuestionFilterProps {
  filtro: FiltroQuestoes;
  onFiltroChange: (novoFiltro: FiltroQuestoes) => void;
  disciplinas: Disciplina[];
  assuntos: Assunto[];
  onLimparFiltros: () => void;
  totalEncontradas?: number;
}

export function QuestionFilter({
  filtro,
  onFiltroChange,
  disciplinas,
  assuntos,
  onLimparFiltros,
  totalEncontradas,
}: QuestionFilterProps) {
  const bancas = [
    "FGV",
    "Cebraspe (CESPE)",
    "Fundação Cesgranrio",
    "Fundação Vunesp",
    "FCC - Fundação Carlos Chagas",
    "Instituto AOCP",
    "Quadrix",
  ];

  const anos = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

  const assuntosFiltrados = filtro.disciplina_id
    ? assuntos.filter((a) => a.disciplina_id === filtro.disciplina_id)
    : assuntos;

  const handleChange = (campo: keyof FiltroQuestoes, valor: unknown) => {
    onFiltroChange({
      ...filtro,
      [campo]: valor === "todos" || valor === "todas" || valor === "" ? undefined : valor,
      // Reset assunto if disciplina changes
      ...(campo === "disciplina_id" ? { assunto_id: undefined } : {}),
    });
  };

  const temFiltrosAtivos = Boolean(
    filtro.disciplina_id ||
      filtro.assunto_id ||
      filtro.banca ||
      filtro.ano ||
      filtro.tipo ||
      filtro.dificuldade ||
      filtro.status ||
      (filtro.origem && filtro.origem !== "todas") ||
      filtro.termo_busca
  );

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
          <Filter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          Filtros de Questões
          {totalEncontradas !== undefined && (
            <span className="text-xs font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
              {totalEncontradas} {totalEncontradas === 1 ? "questão" : "questões"}
            </span>
          )}
        </div>

        {temFiltrosAtivos && (
          <button
            onClick={onLimparFiltros}
            className="text-xs text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Limpar filtros
          </button>
        )}
      </div>

      {/* Search text */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Pesquisar por palavra-chave no enunciado, explicação ou órgão..."
          value={filtro.termo_busca || ""}
          onChange={(e) => handleChange("termo_busca", e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
        />
        {filtro.termo_busca && (
          <button
            onClick={() => handleChange("termo_busca", "")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Filter Selects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 text-xs">
        {/* Origem (Oficiais vs Autorais IA) */}
        <div>
          <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-purple-500" />
            Origem
          </label>
          <select
            value={filtro.origem || "todas"}
            onChange={(e) => handleChange("origem", e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-purple-500 text-slate-900 dark:text-slate-100 font-medium"
          >
            <option value="todas">Todas as Questões</option>
            <option value="oficiais">Provas Oficiais Anteriores</option>
            <option value="autorais_ia">Autorais / Criadas por IA</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
            Status
          </label>
          <select
            value={filtro.status || "todas"}
            onChange={(e) => handleChange("status", e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todas">Todas</option>
            <option value="nao_resolvidas">Não Resolvidas</option>
            <option value="acertadas">Acertadas</option>
            <option value="erradas">Erradas</option>
            <option value="favoritas">Favoritas</option>
          </select>
        </div>

        {/* Disciplina */}
        <div>
          <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
            Disciplina
          </label>
          <select
            value={filtro.disciplina_id || "todos"}
            onChange={(e) => handleChange("disciplina_id", e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todos">Todas as Matérias</option>
            {disciplinas.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Assunto */}
        <div>
          <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
            Assunto
          </label>
          <select
            value={filtro.assunto_id || "todos"}
            onChange={(e) => handleChange("assunto_id", e.target.value)}
            disabled={!filtro.disciplina_id}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 disabled:opacity-50"
          >
            <option value="todos">Todos os Assuntos</option>
            {assuntosFiltrados.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Banca */}
        <div>
          <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
            Banca
          </label>
          <select
            value={filtro.banca || "todas"}
            onChange={(e) => handleChange("banca", e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todas">Todas as Bancas</option>
            {bancas.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Ano */}
        <div>
          <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
            Ano
          </label>
          <select
            value={filtro.ano ? String(filtro.ano) : "todos"}
            onChange={(e) => handleChange("ano", e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todos">Todos os Anos</option>
            {anos.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Modalidade */}
        <div>
          <label className="block font-medium text-slate-600 dark:text-slate-400 mb-1">
            Modalidade
          </label>
          <select
            value={filtro.tipo || "todos"}
            onChange={(e) => handleChange("tipo", e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todos">Todas</option>
            <option value="multipla_escolha">Múltipla Escolha</option>
            <option value="certo_errado">Certo ou Errado</option>
          </select>
        </div>
      </div>
    </div>
  );
}
