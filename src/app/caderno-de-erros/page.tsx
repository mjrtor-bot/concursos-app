"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { QuestionCard } from "@/components/questoes/QuestionCard";
import { DataService } from "@/services/dataService";
import { ItemCadernoErros, Disciplina } from "@/types";
import { useToast } from "@/contexts/ToastContext";
import {
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  BookOpen,
  Trash2,
  Pencil,
  Sparkles,
  Save,
  Check,
} from "lucide-react";

export default function CadernoErrosPage() {
  const { success, info } = useToast();
  const [itens, setItens] = useState<ItemCadernoErros[]>([]);
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [filtroDisciplina, setFiltroDisciplina] = useState<string>("todas");
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [questaoAtivaRefazer, setQuestaoAtivaRefazer] = useState<ItemCadernoErros | null>(null);
  const [editandoNotaId, setEditandoNotaId] = useState<string | null>(null);
  const [notaTexto, setNotaTexto] = useState("");

  const carregarDados = () => {
    const list = DataService.getCadernoErros();
    setItens(list);
    setDisciplinas(DataService.getDisciplinas());
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const itensFiltrados = itens.filter((item) => {
    if (!item.questao) return false;
    const matchesDisc =
      filtroDisciplina === "todas" || item.questao.disciplina_id === filtroDisciplina;
    const matchesStatus =
      filtroStatus === "todos"
        ? true
        : filtroStatus === "pendentes"
        ? !item.revisado
        : item.revisado;

    return matchesDisc && matchesStatus;
  });

  const totalErros = itens.length;
  const totalRevisados = itens.filter((i) => i.revisado).length;
  const taxaRecuperacao =
    totalErros > 0 ? Math.round((totalRevisados / totalErros) * 100) : 0;

  const handleRemover = (questaoId: string) => {
    DataService.removerDoCadernoErros(questaoId);
    carregarDados();
    info("Questão removida do seu caderno de erros.");
  };

  const handleSalvarNota = (questaoId: string) => {
    DataService.salvarAnotacaoErro(questaoId, notaTexto);
    setEditandoNotaId(null);
    carregarDados();
    success("Anotação salva com sucesso!");
  };

  const handleIniciarRefazer = (item: ItemCadernoErros) => {
    setQuestaoAtivaRefazer(item);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                Caderno de Erros
              </h1>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Revise e domine todas as questões em que você errou anteriormente para garantir sua evolução
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            title="Total no Caderno"
            value={totalErros}
            subtitle="Questões que precisam de atenção"
            icon={<AlertTriangle className="w-5 h-5 text-rose-600" />}
            color="rose"
          />

          <StatCard
            title="Erros Dominados / Revisados"
            value={totalRevisados}
            subtitle={`${totalErros - totalRevisados} pendentes de revisão`}
            icon={<CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            color="emerald"
          />

          <StatCard
            title="Taxa de Recuperação"
            value={`${taxaRecuperacao}%`}
            subtitle="Percentual de erros superados"
            icon={<RotateCcw className="w-5 h-5 text-blue-600" />}
            color="blue"
          />
        </div>

        {/* Refazer Modal/Card Area (when user clicked to retry a question) */}
        {questaoAtivaRefazer?.questao && (
          <div className="p-4 sm:p-6 bg-blue-50/60 dark:bg-blue-950/20 border-2 border-blue-500 rounded-3xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  Modo de Refação: Supere este Erro
                </h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuestaoAtivaRefazer(null)}
              >
                Fechar Refação
              </Button>
            </div>

            <QuestionCard
              questao={questaoAtivaRefazer.questao}
              onRespostaSalva={(correta) => {
                if (correta) {
                  success("Excelente! Você dominou este conteúdo!");
                  carregarDados();
                }
              }}
            />
          </div>
        )}

        {/* Filters */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row gap-3">
          <select
            value={filtroDisciplina}
            onChange={(e) => setFiltroDisciplina(e.target.value)}
            className="px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todas">Todas as Disciplinas</option>
            {disciplinas.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nome}
              </option>
            ))}
          </select>

          <select
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            className="px-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
          >
            <option value="todos">Todos os Status</option>
            <option value="pendentes">Apenas Não Dominadas</option>
            <option value="revisados">Apenas Revisadas / Dominadas</option>
          </select>
        </div>

        {/* Items List */}
        {itensFiltrados.length === 0 ? (
          <EmptyState
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-500" />}
            title="Seu Caderno de Erros está limpo!"
            description="Você não possui erros pendentes com estes filtros. Continue resolvendo questões e os deslizes serão organizados aqui para revisão."
          />
        ) : (
          <div className="space-y-4">
            {itensFiltrados.map((item) => {
              const q = item.questao!;
              const isEditingNota = editandoNotaId === item.id;

              return (
                <Card
                  key={item.id}
                  className={`overflow-hidden border-l-4 ${
                    item.revisado
                      ? "border-l-emerald-500"
                      : "border-l-rose-500"
                  }`}
                >
                  <CardContent className="p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap text-xs">
                        <Badge
                          variant={item.revisado ? "success" : "error"}
                          size="sm"
                        >
                          {item.revisado ? "Dominada ✓" : "Revisão Pendente"}
                        </Badge>
                        <Badge variant="primary" size="sm">
                          {q.banca}
                        </Badge>
                        <Badge variant="outline" size="sm">
                          Ano {q.ano}
                        </Badge>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {q.orgao}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          • Errado {item.total_erros}x
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => handleIniciarRefazer(item)}
                          leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                        >
                          Refazer Agora
                        </Button>
                        <button
                          onClick={() => handleRemover(q.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Remover do Caderno"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                      {q.enunciado}
                    </p>

                    {/* Anotação Pessoal */}
                    <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 rounded-xl text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                          <Pencil className="w-3 h-3" />
                          Minha Nota de Estudo / Por que errei:
                        </span>
                        {!isEditingNota && (
                          <button
                            onClick={() => {
                              setEditandoNotaId(item.id);
                              setNotaTexto(item.anotacao || "");
                            }}
                            className="text-[11px] underline text-amber-700 dark:text-amber-400 hover:opacity-80"
                          >
                            {item.anotacao ? "Editar" : "Adicionar Nota"}
                          </button>
                        )}
                      </div>

                      {isEditingNota ? (
                        <div className="space-y-2 mt-2">
                          <textarea
                            value={notaTexto}
                            onChange={(e) => setNotaTexto(e.target.value)}
                            placeholder="Escreva uma dica, macete ou o motivo do erro para lembrar..."
                            rows={2}
                            className="w-full p-2 text-xs bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-hidden"
                          />
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditandoNotaId(null)}
                            >
                              Cancelar
                            </Button>
                            <Button
                              size="sm"
                              variant="success"
                              onClick={() => handleSalvarNota(q.id)}
                              leftIcon={<Save className="w-3 h-3" />}
                            >
                              Salvar
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-slate-700 dark:text-slate-300 italic">
                          {item.anotacao ||
                            "Nenhuma anotação pessoal ainda. Clique em 'Adicionar Nota' para registrar seu aprendizado."}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
  );
}
