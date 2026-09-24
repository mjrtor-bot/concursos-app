"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { DataService } from "@/services/dataService";
import { useConcurso } from "@/contexts/ConcursoContext";
import { useToast } from "@/contexts/ToastContext";
import { Simulado, SimuladoTentativa, Concurso } from "@/types";
import {
  FileSpreadsheet,
  Clock,
  CheckCircle2,
  Play,
  PlusCircle,
  Award,
  BarChart,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function SimuladosPage() {
  const { concursos } = useConcurso();
  const { success } = useToast();
  const [simulados, setSimulados] = useState<Simulado[]>([]);
  const [tentativas, setTentativas] = useState<SimuladoTentativa[]>([]);
  const [isModalNovoSimulado, setIsModalNovoSimulado] = useState(false);

  // Custom Simulado form state
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoTempo, setNovoTempo] = useState("60");
  const [novoQtd, setNovoQtd] = useState("5");

  useEffect(() => {
    setSimulados(DataService.getSimulados());
    setTentativas(DataService.getTentativasSimulado());
  }, []);

  const handleCriarSimulado = (e: React.FormEvent) => {
    e.preventDefault();
    const todasQuestoes = DataService.getQuestoes();
    const qtd = Math.min(todasQuestoes.length, parseInt(novoQtd) || 5);
    const shuffled = [...todasQuestoes].sort(() => 0.5 - Math.random());
    const selecionadas = shuffled.slice(0, qtd).map((q) => q.id);

    const novoSimulado: Simulado = {
      id: `sim-custom-${Date.now()}`,
      titulo: novoTitulo || `Simulado Personalizado (${qtd} questões)`,
      descricao: `Simulado criado sob medida com ${qtd} questões e limite de ${novoTempo} minutos.`,
      tempo_limite_minutos: parseInt(novoTempo) || 60,
      questoes_ids: selecionadas,
      total_questoes: selecionadas.length,
      dificuldade: "medio",
      criado_por_sistema: false,
      created_at: new Date().toISOString(),
    };

    DataService.salvarSimulado(novoSimulado);
    setSimulados(DataService.getSimulados());
    setIsModalNovoSimulado(false);
    success("Simulado criado com sucesso! Pronto para começar.");
  };

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                Simulados Cronometrados
              </h1>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Treine sob condições reais de prova com contagem regressiva e relatório detalhado de desempenho
            </p>
          </div>

          <Button
            onClick={() => setIsModalNovoSimulado(true)}
            size="md"
            leftIcon={<PlusCircle className="w-4 h-4" />}
          >
            Gerar Simulado Personalizado
          </Button>
        </div>

        {/* Simulados Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {simulados.map((simulado) => {
            const concurso = simulado.concurso_id
              ? DataService.getConcursoById(simulado.concurso_id)
              : null;
            const tentativasDeste = tentativas.filter(
              (t) => t.simulado_id === simulado.id && t.status === "concluido"
            );
            const ultimaTentativa = tentativasDeste[tentativasDeste.length - 1];

            return (
              <Card
                key={simulado.id}
                hover
                className="flex flex-col justify-between overflow-hidden"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="primary" size="sm">
                        {simulado.total_questoes} Questões
                      </Badge>
                      <Badge variant="secondary" size="sm">
                        <Clock className="w-3 h-3" />
                        {simulado.tempo_limite_minutos} min
                      </Badge>
                      {concurso && (
                        <Badge variant="outline" size="sm">
                          {concurso.sigla}
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {simulado.titulo}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {simulado.descricao}
                    </p>
                  </div>

                  {/* Previous Attempt score if done */}
                  {ultimaTentativa && (
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-xl flex items-center justify-between text-xs">
                      <span className="text-emerald-800 dark:text-emerald-300 font-medium">
                        Última nota:
                      </span>
                      <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                        {ultimaTentativa.percentual}% ({ultimaTentativa.total_acertos}/{simulado.total_questoes})
                      </span>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {tentativasDeste.length > 0
                        ? `${tentativasDeste.length} tentativas realizadas`
                        : "Nunca realizado"}
                    </span>

                    <Link href={`/simulados/${simulado.id}`}>
                      <Button
                        size="sm"
                        variant="primary"
                        leftIcon={<Play className="w-3.5 h-3.5 fill-white" />}
                      >
                        Iniciar Prova
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal: Gerar Simulado Personalizado */}
        <Modal
          isOpen={isModalNovoSimulado}
          onClose={() => setIsModalNovoSimulado(false)}
          title="Gerar Simulado Personalizado"
          description="Monte uma prova adaptada ao seu tempo disponível e objetivos de estudo."
        >
          <form onSubmit={handleCriarSimulado} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Título do Simulado
              </label>
              <input
                type="text"
                placeholder="Ex: Simulado Geral de Sexta-feira"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Quantidade de Questões
                </label>
                <select
                  value={novoQtd}
                  onChange={(e) => setNovoQtd(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                >
                  <option value="5">5 Questões (Rápido)</option>
                  <option value="8">8 Questões (Médio)</option>
                  <option value="12">12 Questões (Completo)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Tempo Limite (minutos)
                </label>
                <select
                  value={novoTempo}
                  onChange={(e) => setNovoTempo(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                >
                  <option value="30">30 Minutos</option>
                  <option value="60">60 Minutos (1 Hora)</option>
                  <option value="90">90 Minutos (1h30)</option>
                  <option value="120">120 Minutos (2 Horas)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsModalNovoSimulado(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Criar e Começar
              </Button>
            </div>
          </form>
        </Modal>
      </div>
  );
}
