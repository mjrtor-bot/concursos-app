"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { useConcurso } from "@/contexts/ConcursoContext";
import { Badge } from "@/components/ui/Badge";
import { Check, Search, Calendar, Award, Building2, FileText, Sparkles, BookOpen } from "lucide-react";
import { ConcursoStatus } from "@/types";

interface ConcursoSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConcursoSelectorModal({
  isOpen,
  onClose,
}: ConcursoSelectorModalProps) {
  const { concursos, concursoAtivo, selecionarConcursoAtivo } = useConcurso();
  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState<string>("todos");
  const [tipoFiltro, setTipoFiltro] = useState<"todos" | "importados" | "oficiais">("todos");
  const [selecionandoId, setSelecionandoId] = useState<string | null>(null);

  const importadosCount = concursos.filter((c) => c.eh_importado).length;

  const filtrados = concursos.filter((c) => {
    const termo = busca.trim().toLowerCase();
    const matchesBusca = !termo ||
      c.nome.toLowerCase().includes(termo) ||
      c.orgao.toLowerCase().includes(termo) ||
      c.sigla.toLowerCase().includes(termo) ||
      (c.uf && c.uf.toLowerCase().includes(termo)) ||
      (c.banca && c.banca.toLowerCase().includes(termo)) ||
      Boolean(c.cargos_nomes && c.cargos_nomes.some((cargo) => cargo.toLowerCase().includes(termo)));

    const matchesStatus =
      statusFiltro === "todos" ? true : c.status === statusFiltro;

    const matchesTipo =
      tipoFiltro === "todos"
        ? true
        : tipoFiltro === "importados"
        ? Boolean(c.eh_importado)
        : !c.eh_importado;

    return matchesBusca && matchesStatus && matchesTipo;
  });

  const getStatusBadge = (status: ConcursoStatus, ehImportado?: boolean) => {
    if (ehImportado) {
      return (
        <Badge variant="primary" className="bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
          Edital Importado (PDF)
        </Badge>
      );
    }
    switch (status) {
      case "aberto":
        return <Badge variant="success">Edital Aberto</Badge>;
      case "previsto":
        return <Badge variant="warning">Previsto / Autorizado</Badge>;
      case "em_andamento":
        return <Badge variant="primary">Em Andamento</Badge>;
      case "encerrado":
        return <Badge variant="secondary">Encerrado</Badge>;
    }
  };

  const handleSelect = async (id: string) => {
    setSelecionandoId(id);
    try {
      await selecionarConcursoAtivo(id);
      onClose();
    } finally {
      setSelecionandoId(null);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Escolha seu Concurso Alvo"
      description="Selecione o concurso para o qual você está se preparando para personalizar questões, matérias, cronograma e simulados."
      size="lg"
    >
      <div className="space-y-4">
        {/* Filtro por Origem (se houver importados) */}
        {importadosCount > 0 && (
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => setTipoFiltro("todos")}
              className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
                tipoFiltro === "todos"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Todos ({concursos.length})
            </button>
            <button
              type="button"
              onClick={() => setTipoFiltro("importados")}
              className={`flex-1 py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                tipoFiltro === "importados"
                  ? "bg-purple-600 text-white shadow-xs"
                  : "text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/30"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Meus Editais ({importadosCount})
            </button>
            <button
              type="button"
              onClick={() => setTipoFiltro("oficiais")}
              className={`flex-1 py-1.5 px-3 rounded-lg transition-all ${
                tipoFiltro === "oficiais"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Catálogo Oficial ({concursos.length - importadosCount})
            </button>
          </div>
        )}

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por órgão, cargo ou sigla..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
            />
          </div>
          <select
            value={statusFiltro}
            onChange={(e) => setStatusFiltro(e.target.value)}
            className="px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todos">Todos os Status</option>
            <option value="aberto">Edital Aberto</option>
            <option value="previsto">Previsto</option>
            <option value="em_andamento">Em Andamento</option>
          </select>
        </div>

        {/* Concursos list */}
        <div className="grid gap-2.5 max-h-[420px] overflow-y-auto pr-1">
          {filtrados.length === 0 ? (
            <p className="text-center py-8 text-sm text-slate-500">
              Nenhum concurso encontrado para sua busca.
            </p>
          ) : (
            filtrados.map((c) => {
              const isSelected = concursoAtivo?.id === c.id;
              const isBusy = selecionandoId === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => !isBusy && handleSelect(c.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-blue-500/10 border-blue-500 dark:border-blue-500 shadow-xs"
                      : c.eh_importado
                      ? "bg-purple-50/40 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/60 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50/70"
                      : "bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {c.sigla}
                      </span>
                      {getStatusBadge(c.status, c.eh_importado)}
                      {c.uf && (
                        <Badge variant="outline" size="sm">
                          {c.uf}
                        </Badge>
                      )}
                      {c.banca && (
                        <Badge variant="outline" size="sm">
                          {c.banca}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">
                      {c.nome}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {c.orgao}
                      </span>
                      {c.salario_max > 0 && (
                        <span className="flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          Até R$ {c.salario_max.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                      )}
                      {c.data_prova && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          Prova: {new Date(c.data_prova).toLocaleDateString("pt-BR")}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0">
                    {isSelected ? (
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <button
                        disabled={isBusy}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {isBusy ? "Salvando..." : "Selecionar"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Modal>
  );
}
