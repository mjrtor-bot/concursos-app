"use client";

import React, { use, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/ui/StatCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DataService } from "@/services/dataService";
import { Simulado, SimuladoTentativa, Questao, Disciplina } from "@/types";
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  ArrowRight,
  Sparkles,
  BookOpen,
  Check,
  AlertTriangle,
} from "lucide-react";

function SimuladoResultadoContent({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const tentativaId = searchParams.get("tentativaId");

  const [simulado, setSimulado] = useState<Simulado | null>(null);
  const [tentativa, setTentativa] = useState<SimuladoTentativa | null>(null);
  const [questoes, setQuestoes] = useState<Questao[]>([]);

  useEffect(() => {
    const sim = DataService.getSimuladoById(id);
    if (sim) {
      setSimulado(sim);
      const qList: Questao[] = [];
      sim.questoes_ids.forEach((qId) => {
        const q = DataService.getQuestaoById(qId);
        if (q) qList.push(q);
      });
      setQuestoes(qList);
    }

    if (tentativaId) {
      const t = DataService.getTentativaById(tentativaId);
      if (t) setTentativa(t);
    }
  }, [id, tentativaId]);

  if (!simulado || !tentativa) {
    return (
      <div className="text-center py-16 space-y-3">
        <p className="text-slate-500 text-sm">Carregando relatório do simulado...</p>
        <Link href="/simulados">
          <Button variant="outline" size="sm">
            Voltar para Simulados
          </Button>
        </Link>
      </div>
    );
  }

  const formatMinutos = (segundos: number) => {
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${mins}m ${secs}s`;
  };

  const isAprovado = tentativa.percentual >= 70;

  return (
    <div className="space-y-6">
      {/* Top Banner with Performance Summary */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border shadow-lg overflow-hidden relative text-white ${
          isAprovado
            ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700"
            : "bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-800"
        }`}
      >
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white mb-2">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Resultado Oficial do Simulado</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {isAprovado
              ? "Excelente Desempenho! 🎉"
              : "Simulado Concluído com Sucesso!"}
          </h1>

          <p className="text-sm text-white/90 leading-relaxed">
            Você completou o <strong>{simulado.titulo}</strong> com um
            aproveitamento de <strong>{tentativa.percentual}%</strong>. Revise as
            questões erradas abaixo para fixar o gabarito.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            <Link href={`/simulados/${simulado.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                leftIcon={<RotateCcw className="w-4 h-4" />}
              >
                Refazer Este Simulado
              </Button>
            </Link>
            <Link href="/caderno-de-erros">
              <Button
                size="sm"
                className="bg-white text-slate-900 hover:bg-white/90 font-bold"
                leftIcon={<AlertTriangle className="w-4 h-4 text-rose-600" />}
              >
                Ir para Caderno de Erros
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard
          title="Taxa de Acerto"
          value={`${tentativa.percentual}%`}
          subtitle={isAprovado ? "Acima do corte estimado" : "Meta recomendada: 70%"}
          icon={<Award className="w-5 h-5 text-emerald-600" />}
          color="emerald"
        />

        <StatCard
          title="Acertos"
          value={`${tentativa.total_acertos}/${questoes.length}`}
          subtitle={`${tentativa.total_erros} erros cometidos`}
          icon={<CheckCircle2 className="w-5 h-5 text-blue-600" />}
          color="blue"
        />

        <StatCard
          title="Tempo Gasto"
          value={formatMinutos(tentativa.tempo_total_segundos)}
          subtitle={`Limite: ${simulado.tempo_limite_minutos} min`}
          icon={<Clock className="w-5 h-5 text-purple-600" />}
          color="purple"
        />

        <StatCard
          title="Em Branco"
          value={tentativa.total_em_branco}
          subtitle="Questões não assinaladas"
          icon={<AlertTriangle className="w-5 h-5 text-amber-600" />}
          color="amber"
        />
      </div>

      {/* Question by Question Review */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <CardTitle>Gabarito e Correção Questão a Questão</CardTitle>
              <p className="text-xs text-slate-500">
                Analise sua escolha, a resposta correta e a explicação detalhada
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {questoes.map((questao, idx) => {
            const resp = tentativa.respostas[questao.id];
            const altSelecionada = questao.alternativas.find(
              (a) => a.id === resp?.alternativa_selecionada_id
            );
            const isCorreta = Boolean(altSelecionada?.correta);

            return (
              <div
                key={questao.id}
                className={`p-5 rounded-2xl border-2 transition-all space-y-4 ${
                  isCorreta
                    ? "bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-500/40"
                    : "bg-rose-50/30 dark:bg-rose-950/10 border-rose-500/40"
                }`}
              >
                {/* Question Info Header */}
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                      Questão {idx + 1}
                    </span>
                    <Badge variant={isCorreta ? "success" : "error"} size="sm">
                      {isCorreta ? "Você Acertou ✓" : "Você Errou ✗"}
                    </Badge>
                    <Badge variant="primary" size="sm">
                      {questao.banca}
                    </Badge>
                    <Badge variant="outline" size="sm">
                      {questao.ano}
                    </Badge>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {questao.enunciado}
                </p>

                {/* Alternativas list */}
                <div className="space-y-2">
                  {questao.alternativas.map((alt) => {
                    const isUserChoice =
                      alt.id === resp?.alternativa_selecionada_id;
                    const isRightOption = alt.correta;

                    let rowStyle =
                      "bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400";

                    if (isRightOption) {
                      rowStyle =
                        "bg-emerald-500/10 border-emerald-500 dark:border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold";
                    } else if (isUserChoice && !isRightOption) {
                      rowStyle =
                        "bg-rose-500/10 border-rose-500 dark:border-rose-500 text-rose-950 dark:text-rose-100";
                    }

                    return (
                      <div
                        key={alt.id}
                        className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-3 ${rowStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold">
                            {alt.letra || (alt.texto === "Certo" ? "C" : "E")})
                          </span>
                          <span>{alt.texto}</span>
                        </div>

                        <div className="shrink-0 flex items-center gap-2 text-[11px] font-bold">
                          {isUserChoice && (
                            <span className="text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">
                              Sua Escolha
                            </span>
                          )}
                          {isRightOption && (
                            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Gabarito
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-4 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Resolução Comentada:
                  </span>
                  <p className="whitespace-pre-line leading-relaxed">
                    {questao.explicacao}
                  </p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export default function SimuladoResultadoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-slate-500">Carregando resultado...</div>}>
      <SimuladoResultadoContent id={id} />
    </Suspense>
  );
}
