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
  const [novoQtd, setNovoQtd] = useState("30");
  const [isGerando, setIsGerando] = useState(false);

  useEffect(() => {
    setSimulados(DataService.getSimulados());
    setTentativas(DataService.getTentativasSimulado());
  }, []);

  const handleCriarSimulado = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGerando(true);
    try {
      const targetQtd = parseInt(novoQtd, 10) || 30;
      let selecionadas: string[] = [];

      // 1. Tenta buscar do banco de questões completo (/api/questoes)
      try {
        const res = await fetch(`/api/questoes?pageSize=${targetQtd}&anulada=false&desatualizada=false`);
        const json = await res.json();
        if (json.success && Array.isArray(json.questoes) && json.questoes.length > 0) {
          DataService.salvarQuestoesLote(json.questoes);
          const shuffled = [...json.questoes].sort(() => 0.5 - Math.random());
          selecionadas = shuffled.slice(0, targetQtd).map((q: any) => q.id);
        }
      } catch (err) {
        console.warn("Falha ao buscar questões via API para simulado, usando fallback:", err);
      }

      // 2. Fallback caso API offline
      if (selecionadas.length === 0) {
        const todasQuestoes = DataService.getQuestoes();
        const qtd = Math.min(todasQuestoes.length, targetQtd);
        const shuffled = [...todasQuestoes].sort(() => 0.5 - Math.random());
        selecionadas = shuffled.slice(0, qtd).map((q) => q.id);
      }

      if (selecionadas.length === 0) throw new Error("Não há questões válidas disponíveis para gerar o simulado.");

      const novoSimulado: Simulado = {
        id: `sim-custom-${Date.now()}`,
        titulo: novoTitulo || `Simulado Personalizado (${selecionadas.length} questões)`,
        descricao: `Simulado criado sob medida com ${selecionadas.length} questões e limite de ${novoTempo} minutos.`,
        tempo_limite_minutos: parseInt(novoTempo, 10) || 60,
        questoes_ids: selecionadas,
        total_questoes: selecionadas.length,
        dificuldade: "medio",
        criado_por_sistema: false,
        created_at: new Date().toISOString(),
      };

      DataService.salvarSimulado(novoSimulado);
      setSimulados(DataService.getSimulados());
      setIsModalNovoSimulado(false);
      setNovoTitulo("");
      success(`Simulado com ${selecionadas.length} questões criado com sucesso! Pronto para começar.`);
    } catch (err) {
      console.error("Erro ao criar simulado:", err);
    } finally {
      setIsGerando(false);
    }
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
                  <option value="15">15 Questões (Rápido - 30 min)</option>
                  <option value="30">30 Questões (Bloco - 60 min)</option>
                  <option value="60">60 Questões (Meio Simulado - 120 min)</option>
                  <option value="120">120 Questões (Simulado Completo PF/PRF - 210 min)</option>
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
                  <option value="120">120 Minutos (2 Horas)</option>
                  <option value="210">210 Minutos (3h30 - Padrão Cespe)</option>
                  <option value="240">240 Minutos (4 Horas)</option>
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
              <Button type="submit" variant="primary" disabled={isGerando}>
                {isGerando ? "Carregando Questões..." : "Criar e Começar"}
              </Button>
            </div>
          </form>
        </Modal>
      </div>
  );
}
