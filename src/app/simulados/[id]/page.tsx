"use client";

import React, { use, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { QuestionCard } from "@/components/questoes/QuestionCard";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { DataService } from "@/services/dataService";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { Simulado, Questao, SimuladoTentativa, RespostaSimulado } from "@/types";
import {
  Clock,
  Flag,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
  AlertTriangle,
} from "lucide-react";

export default function SimuladoExecucaoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { user } = useAuth();
  const { error, success } = useToast();

  const [simulado, setSimulado] = useState<Simulado | null>(null);
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Simulado attempt state
  const [tentativaId] = useState<string>(
    () => `tentativa-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
  );
  const [respostas, setRespostas] = useState<Record<string, RespostaSimulado>>({});
  const [tempoRestanteSegundos, setTempoRestanteSegundos] = useState<number>(3600);
  const [isFinalizarModalOpen, setIsFinalizarModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Simulado
  useEffect(() => {
    const sim = DataService.getSimuladoById(id);
    if (!sim) {
      // Check if it's a dynamic one generated in memory
      const customSims = DataService.getSimulados();
      const found = customSims.find((s) => s.id === id);
      if (!found) {
        notFound();
        return;
      }
      setSimulado(found);
      carregarQuestoes(found);
      setTempoRestanteSegundos(found.tempo_limite_minutos * 60);
      return;
    }

    setSimulado(sim);
    carregarQuestoes(sim);
    setTempoRestanteSegundos(sim.tempo_limite_minutos * 60);
  }, [id]);

  const carregarQuestoes = (sim: Simulado) => {
    const qList: Questao[] = [];
    sim.questoes_ids.forEach((qId) => {
      const q = DataService.getQuestaoById(qId);
      if (q) qList.push(q);
    });
    setQuestoes(qList);
  };

  // Finalize Submission
  const handleFinalizar = useCallback(() => {
    if (!simulado || isSubmitting) return;
    setIsSubmitting(true);

    let acertos = 0;
    let erros = 0;
    let emBranco = 0;

    questoes.forEach((q) => {
      const resp = respostas[q.id];
      if (!resp || !resp.alternativa_selecionada_id) {
        emBranco += 1;
      } else {
        const alt = q.alternativas.find(
          (a) => a.id === resp.alternativa_selecionada_id
        );
        if (alt?.correta) {
          acertos += 1;
        } else {
          erros += 1;
        }

        // Register in DataService answers so stats update
        DataService.registrarResposta(
          q.id,
          resp.alternativa_selecionada_id,
          resp.tempo_gasto || 60,
          q
        );
      }
    });

    const percentual =
      questoes.length > 0 ? Math.round((acertos / questoes.length) * 100) : 0;
    const tempoGasto = simulado.tempo_limite_minutos * 60 - tempoRestanteSegundos;

    const tentativa: SimuladoTentativa = {
      id: tentativaId,
      simulado_id: simulado.id,
      usuario_id: user?.id || "",
      iniciado_em: new Date(Date.now() - tempoGasto * 1000).toISOString(),
      finalizado_em: new Date().toISOString(),
      tempo_total_segundos: tempoGasto,
      pontuacao: acertos,
      total_acertos: acertos,
      total_erros: erros,
      total_em_branco: emBranco,
      percentual,
      respostas,
      status: "concluido",
    };

    DataService.salvarTentativaSimulado(tentativa);
    success("Simulado finalizado com sucesso!");
    router.push(`/simulados/${simulado.id}/resultado?tentativaId=${tentativaId}`);
  }, [simulado, isSubmitting, questoes, respostas, tempoRestanteSegundos, tentativaId, user?.id, success, router]);

  // Countdown timer
  useEffect(() => {
    if (tempoRestanteSegundos <= 0) {
      handleFinalizar();
      return;
    }

    const interval = setInterval(() => {
      setTempoRestanteSegundos((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinalizar();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [tempoRestanteSegundos, handleFinalizar]);

  if (!simulado || questoes.length === 0) return null;

  const questaoAtual = questoes[currentIdx];
  const respostaAtual = respostas[questaoAtual.id];

  const handleSelectAlternativa = (altId: string) => {
    setRespostas((prev) => ({
      ...prev,
      [questaoAtual.id]: {
        questao_id: questaoAtual.id,
        alternativa_selecionada_id: altId,
        marcada_para_revisao: prev[questaoAtual.id]?.marcada_para_revisao || false,
        tempo_gasto: (prev[questaoAtual.id]?.tempo_gasto || 0) + 5,
      },
    }));
  };

  const handleToggleRevisao = () => {
    setRespostas((prev) => {
      const atual = prev[questaoAtual.id] || {
        questao_id: questaoAtual.id,
        alternativa_selecionada_id: null,
        marcada_para_revisao: false,
        tempo_gasto: 0,
      };
      return {
        ...prev,
        [questaoAtual.id]: {
          ...atual,
          marcada_para_revisao: !atual.marcada_para_revisao,
        },
      };
    });
  };

  // Timer format (HH:MM:SS)
  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours > 0 ? `${hours.toString().padStart(2, "0")}:` : ""}${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const totalRespondidas = Object.values(respostas).filter(
    (r) => r.alternativa_selecionada_id !== null
  ).length;

  return (
    <div className="space-y-6">
        {/* Top Floating Simulado Bar */}
        <div className="sticky top-20 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-lg flex items-center justify-between gap-4">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
              {simulado.titulo}
            </h2>
            <p className="text-xs text-slate-500">
              Questão {currentIdx + 1} de {questoes.length} • {totalRespondidas}/{questoes.length} respondidas
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Countdown Clock */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-sm font-bold border ${
                tempoRestanteSegundos < 300
                  ? "bg-rose-500/10 text-rose-600 border-rose-500/30 animate-pulse"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"
              }`}
            >
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{formatTimer(tempoRestanteSegundos)}</span>
            </div>

            <Button
              variant="danger"
              size="sm"
              onClick={() => setIsFinalizarModalOpen(true)}
              leftIcon={<Send className="w-3.5 h-3.5" />}
            >
              Entregar Prova
            </Button>
          </div>
        </div>

        {/* Question Grid Map */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <span>Mapa de Questões do Simulado:</span>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> Respondida
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Revisar
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" /> Pendente
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {questoes.map((q, idx) => {
              const resp = respostas[q.id];
              const isSelected = idx === currentIdx;
              const isRespondida = Boolean(resp?.alternativa_selecionada_id);
              const isMarcadaRevisao = Boolean(resp?.marcada_para_revisao);

              let badgeStyle =
                "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";

              if (isRespondida) {
                badgeStyle = "bg-blue-600 text-white border-blue-600";
              }
              if (isMarcadaRevisao) {
                badgeStyle =
                  "bg-amber-500 text-white border-amber-500 ring-2 ring-amber-300";
              }
              if (isSelected) {
                badgeStyle += " ring-2 ring-blue-500 ring-offset-2";
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold border transition-all flex items-center justify-center relative ${badgeStyle}`}
                >
                  {idx + 1}
                  {isMarcadaRevisao && (
                    <Flag className="w-2.5 h-2.5 absolute top-1 right-1 text-white fill-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Question */}
        <div className="space-y-4">
          <QuestionCard
            key={questaoAtual.id}
            questao={questaoAtual}
            numeroQuestao={currentIdx + 1}
            totalQuestoes={questoes.length}
            modoSimulado={true}
            respostaInicial={respostaAtual?.alternativa_selecionada_id}
            onSelecionarAlternativaSimulado={handleSelectAlternativa}
          />

          {/* Bottom navigation & Flag button */}
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
            >
              Anterior
            </Button>

            <Button
              variant={respostaAtual?.marcada_para_revisao ? "secondary" : "outline"}
              size="sm"
              onClick={handleToggleRevisao}
              leftIcon={
                <Flag
                  className={`w-4 h-4 ${
                    respostaAtual?.marcada_para_revisao
                      ? "text-amber-500 fill-amber-500"
                      : "text-slate-400"
                  }`}
                />
              }
            >
              {respostaAtual?.marcada_para_revisao
                ? "Marcada para Revisar"
                : "Marcar para Revisar"}
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                setCurrentIdx((prev) => Math.min(questoes.length - 1, prev + 1))
              }
              disabled={currentIdx === questoes.length - 1}
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              Próxima
            </Button>
          </div>
        </div>

        {/* Modal: Confirm Finalize */}
        <Modal
          isOpen={isFinalizarModalOpen}
          onClose={() => setIsFinalizarModalOpen(false)}
          title="Finalizar e Entregar Simulado"
          description="Confirme o envio da sua prova para gerar o relatório de pontuação e gabarito comentado."
        >
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-2 text-xs">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Resumo da sua prova:
              </p>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <span>Total de Questões:</span>
                <span className="font-bold">{questoes.length}</span>
              </div>
              <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
                <span>Questões Respondidas:</span>
                <span className="font-bold">{totalRespondidas}</span>
              </div>
              <div className="flex items-center justify-between text-rose-600 dark:text-rose-400">
                <span>Questões em Branco:</span>
                <span className="font-bold">
                  {questoes.length - totalRespondidas}
                </span>
              </div>
            </div>

            {questoes.length - totalRespondidas > 0 && (
              <div className="flex items-start gap-2 p-3 bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 rounded-xl text-xs">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Você ainda tem {questoes.length - totalRespondidas} questões sem
                  resposta. Deseja entregar mesmo assim?
                </span>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="ghost"
                onClick={() => setIsFinalizarModalOpen(false)}
              >
                Voltar à Prova
              </Button>
              <Button variant="danger" onClick={handleFinalizar}>
                Confirmar e Entregar
              </Button>
            </div>
          </div>
        </Modal>
      </div>
  );
}
