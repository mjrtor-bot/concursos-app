"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { StatCard } from "@/components/ui/StatCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { MentoriaService } from "@/services/mentoriaService";
import { useConcurso } from "@/contexts/ConcursoContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  EstatisticasGerais,
  Questao,
  MissaoDiariaItem,
  MetasEstudoConfig,
} from "@/types";
import { DailyMissionCard } from "@/components/planejamento/DailyMissionCard";
import { StudyGoalsWidget } from "@/components/planejamento/StudyGoalsWidget";
import {
  CheckSquare,
  Percent,
  Flame,
  FileSpreadsheet,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Play,
  Clock,
  BookOpen,
  Target,
  Zap,
  Calendar,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const { concursoAtivo, prazoProva } = useConcurso();
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);
  const [questoesRecentes, setQuestoesRecentes] = useState<Questao[]>([]);
  const [missoes, setMissoes] = useState<MissaoDiariaItem[]>([]);
  const [metas, setMetas] = useState<MetasEstudoConfig | null>(null);
  const [loadingPlanejamento, setLoadingPlanejamento] = useState(true);

  useEffect(() => {
    async function carregar() {
      if (user) {
        try {
          setLoadingPlanejamento(true);
          const [, taxonomia, mList, met] = await Promise.all([
            DataService.sincronizarRespostasSupabase(),
            DataService.carregarDisciplinasTaxonomia(),
            MentoriaService.getMissoesDoDia(user.id),
            MentoriaService.getMetasEstudo(user.id),
          ]);
          setStats(DataService.getEstatisticas(taxonomia.disciplinas));
          setQuestoesRecentes(DataService.getQuestoes().slice(0, 3));
          setMissoes(mList);
          setMetas(met);
        } catch (err) {
          console.error("Erro ao carregar planejamento do dashboard:", err);
        } finally {
          setLoadingPlanejamento(false);
        }
      } else {
        setStats(DataService.getEstatisticas());
        setQuestoesRecentes(DataService.getQuestoes().slice(0, 3));
      }
    }
    carregar();
  }, [user]);

  if (!stats || !user) return null;

  // A primeira missão sempre representa o ponteiro persistido do ciclo.
  const missaoAtiva = missoes[0];

  return (
    <div className="space-y-6 pb-12">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-blue-950/10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold text-blue-100 mb-3 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Mentoria Inteligente Policial</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Olá, {user?.nome?.split(" ")[0] || "Concurseiro"}! 👋
          </h1>
          <p className="mt-2 text-sm text-blue-100/90 leading-relaxed">
            Você já resolveu <strong>{stats.questoes_hoje}</strong> de{" "}
            <strong>{metas?.meta_diaria_questoes || stats.meta_diaria}</strong> questões da sua meta diária.
            Mantenha a constância para garantir sua aprovação no{" "}
            <span className="font-semibold underline decoration-amber-400">
              {concursoAtivo?.sigla || "concurso dos seus sonhos"}
            </span>
            .
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/mentoria/hoje">
              <Button
                variant="white"
                size="md"
                leftIcon={<Play className="w-4 h-4 fill-blue-950 text-blue-950" />}
              >
                Iniciar Missão de Hoje
              </Button>
            </Link>
            <Link href="/mentoria/plano">
              <Button
                variant="outline"
                size="md"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Meu Planejamento
              </Button>
            </Link>
            <Link href="/questoes">
              <Button
                variant="outline"
                size="md"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                leftIcon={<CheckSquare className="w-4 h-4" />}
              >
                Banco de Questões
              </Button>
            </Link>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Target Concurso Highlight Card */}
      {concursoAtivo && (
        <Card className="border-blue-200/80 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/20 dark:from-slate-900 dark:to-slate-900">
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="primary" size="sm">
                    CONCURSO ALVO SELECIONADO
                  </Badge>
                  <Badge variant="success" size="sm">
                    {concursoAtivo.status.toUpperCase()}
                  </Badge>
                  <span className="text-xs font-semibold text-slate-500">
                    Banca: {concursoAtivo.banca}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                  {concursoAtivo.nome}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {concursoAtivo.orgao}
                  {concursoAtivo.vagas_totais > 0 ? ` • ${concursoAtivo.vagas_totais} vagas` : ""}
                  {concursoAtivo.salario_max > 0 ? ` • Salário até R$ ${concursoAtivo.salario_max.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : ""}
                </p>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 shrink-0 bg-white dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                {prazoProva.situacao === "futura" ? (
                  <div className="text-center">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase">
                      Contagem Regressiva
                    </p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                      {prazoProva.dias}
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      dias até a prova
                    </p>
                  </div>
                ) : prazoProva.situacao === "hoje" ? (
                  <div className="text-center">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase">
                      Dia da prova
                    </p>
                    <p className="text-sm font-extrabold text-amber-600 dark:text-amber-400">
                      É hoje! 🎯
                    </p>
                  </div>
                ) : prazoProva.situacao === "realizada" ? (
                  <div className="text-center">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase">
                      Situação da prova
                    </p>
                    <p className="text-sm font-extrabold text-slate-600 dark:text-slate-300">
                      Prova realizada
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-slate-400 mx-auto" />
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      Data a definir
                    </p>
                  </div>
                )}

                <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />

                <Link href={`/concursos/${concursoAtivo.id}`}>
                  <Button variant="secondary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Ver Edital & Cargos
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Missão do Dia em Destaque + Metas de Estudo (2 cols layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Missão Diária (2 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Missão Diária do Ciclo
              </h2>
            </div>
            <Link
              href="/mentoria/hoje"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              Ver Todas as Missões <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {missaoAtiva ? (
            <DailyMissionCard missao={missaoAtiva} />
          ) : (
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Seu ciclo está pronto para iniciar!
              </p>
              <Link href="/mentoria/hoje">
                <Button size="sm" className="bg-indigo-600 text-white font-bold">
                  Gerar Missão de Hoje
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Metas de Estudo (1 col) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Suas Metas
              </h2>
            </div>
            <Link
              href="/desempenho"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Desempenho
            </Link>
          </div>

          <StudyGoalsWidget metas={metas} loading={loadingPlanejamento} />
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Questões Resolvidas"
          value={stats.total_respondidas}
          subtitle={`${stats.questoes_hoje} resolvidas hoje`}
          icon={<CheckSquare className="w-5 h-5 text-blue-600" />}
          color="blue"
        />

        <StatCard
          title="Taxa de Acertos"
          value={stats.total_respondidas > 0 ? `${stats.taxa_acerto_geral}%` : "—"}
          subtitle={`${stats.total_acertos} acertos no total`}
          icon={<Percent className="w-5 h-5 text-emerald-600" />}
          color="emerald"
        />

        <StatCard
          title="Sequência de Estudos"
          value={`${stats.sequencia_dias} ${stats.sequencia_dias === 1 ? "Dia" : "Dias"}`}
          subtitle={stats.sequencia_dias > 0 ? "Constância ativa" : "Inicie sua sequência hoje"}
          icon={<Flame className="w-5 h-5 text-amber-500" />}
          color="amber"
        />

        <StatCard
          title="Caderno de Erros"
          value={stats.total_no_caderno_erros}
          subtitle={`${stats.erros_revisados} questões já revisadas`}
          icon={<AlertTriangle className="w-5 h-5 text-rose-600" />}
          color="rose"
        />
      </div>

      {/* Middle Section: Disciplinas Progress + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Desempenho por Disciplina (2 cols) */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div>
              <CardTitle>Desempenho por Disciplina</CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Taxa de acertos por matéria do seu concurso alvo
              </p>
            </div>
            <Link href="/desempenho">
              <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Ver Detalhes
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.por_disciplina.slice(0, 5).map((disc) => (
              <div key={disc.disciplina_id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {disc.disciplina_nome}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {disc.acertos}/{disc.total} acertos (
                    <strong
                      className={
                        disc.percentual >= 70
                          ? "text-emerald-600 dark:text-emerald-400"
                          : disc.percentual >= 50
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-rose-600 dark:text-rose-400"
                      }
                    >
                      {disc.percentual}%
                    </strong>
                    )
                  </span>
                </div>
                <ProgressBar
                  value={disc.percentual}
                  color={
                    disc.percentual >= 70
                      ? "emerald"
                      : disc.percentual >= 50
                      ? "amber"
                      : "rose"
                  }
                  size="sm"
                  showValue={false}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Study Hub (1 col) */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Central de Ação Rápida</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 flex-1">
            <Link
              href="/mentoria/edital"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors">
                  Edital Verticalizado
                </p>
                <p className="text-[11px] text-slate-500">
                  Matriz de tópicos e domínio
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              href="/caderno-de-erros"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:bg-rose-50/50 dark:hover:bg-rose-950/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-rose-600 transition-colors">
                  Caderno de Erros (SRS)
                </p>
                <p className="text-[11px] text-slate-500">
                  {stats.total_no_caderno_erros} pendências para dominar
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              href="/simulados"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 transition-colors">
                  Simulado Cronometrado
                </p>
                <p className="text-[11px] text-slate-500">
                  Teste seu tempo de prova
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Questions Preview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <CardTitle>Questões em Destaque</CardTitle>
              <p className="text-xs text-slate-500">
                Pratique questões do acervo de 5.760 itens policiais
              </p>
            </div>
          </div>
          <Link href="/questoes">
            <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              Ver Banco Completo
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="p-0 divide-y divide-slate-100 dark:divide-slate-800">
          {questoesRecentes.map((q) => (
            <div
              key={q.id}
              className="p-5 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <Badge variant="primary" size="sm">
                    {q.banca}
                  </Badge>
                  <Badge variant="outline" size="sm">
                    {q.ano}
                  </Badge>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {q.orgao}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 line-clamp-2">
                  {q.enunciado}
                </p>
              </div>

              <Link href={`/questoes?questaoId=${q.id}`} className="shrink-0">
                <Button size="sm" variant="secondary" rightIcon={<Play className="w-3.5 h-3.5 fill-current" />}>
                  Resolver
                </Button>
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
