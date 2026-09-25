"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Compass,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  BookOpen,
  Layers,
  Sparkles,
  ArrowRight,
  Settings,
  Flame,
  Target,
  FileCheck,
  Brain,
  History,
  Play,
  RotateCcw,
  BrainCircuit,
  Award,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaDashboardStats } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function MentoriaDashboardPage() {
  const { user } = useAuth();
  const { concursoAtivo } = useConcurso();
  const [stats, setStats] = useState<MentoriaDashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const dados = await MentoriaService.getDashboardStats(user.id);
        setStats(dados);
      } catch (err) {
        console.error("Erro ao carregar estatísticas da mentoria:", err);
      } finally {
        setLoading(false);
      }
    }
    carregarDados();
  }, [user]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Carregando dados da sua mentoria...
        </p>
      </div>
    );
  }

  // ── ONBOARDING / EMPTY STATE: Se o usuário ainda não configurou o perfil de estudos ──
  if (!stats || !stats.tem_perfil || !stats.perfil) {
    return (
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Banner de Boas-vindas da Mentoria */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-500/20">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 backdrop-blur-md rounded-full text-xs font-semibold text-blue-200 border border-blue-400/30">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Mentoria Inteligente — Release 1</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Sua rota personalizada até a aprovação.
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Bem-vindo à Mentoria Inteligente do ConcursosApp. Aqui você não estuda no escuro: nós organizamos sua grade semanal, calculamos o tempo líquido ideal, estruturamos suas revisões espaçadas e verticalizamos o edital.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/mentoria/configurar">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/30 px-6 py-3"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Configurar Meu Perfil de Estudos
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-radial from-blue-500/10 to-transparent pointer-events-none" />
        </div>

        {/* Pilares da Mentoria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-blue-500/40 transition-colors">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                1. Ciclos & Metas Reais
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Defina sua carga horária por dia da semana e receba um plano adaptado aos seus horários livres.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-blue-500/40 transition-colors">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                2. Revisão Espaçada Ativa
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Nunca mais esqueça a matéria. O algoritmo agenda revisões inteligentes em D+1, D+7 e D+30 com base na sua curva de retenção.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-blue-500/40 transition-colors">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                3. Edital Verticalizado
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Acompanhe o percentual de domínio em cada disciplina e priorize matérias com maior peso e incidência na sua banca.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ── DASHBOARD ATIVO: Usuário com perfil configurado e métricas reais ──
  const perfil = stats.perfil;
  const horasEstudadas = (stats.minutos_estudados_semana / 60).toFixed(1);
  const horasMeta = (stats.meta_semanal_minutos / 60).toFixed(1);
  const percentualHoras = stats.meta_semanal_minutos > 0
    ? Math.min(100, Math.round((stats.minutos_estudados_semana / stats.meta_semanal_minutos) * 100))
    : 0;

  return (
    <div className="space-y-8">
      {/* Header do Estudante & Concurso Alvo */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant="primary" className="bg-blue-600 text-white font-bold">
              MENTORIA ATIVA
            </Badge>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Nível {perfil.nivel}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            {perfil.concurso_nome}
          </h1>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Cargo Alvo: <strong className="text-slate-900 dark:text-slate-200">{perfil.cargo_nome}</strong>
            {" • "}
            Preferência: <span className="capitalize">{perfil.horario_preferido}</span>
            {" • "}
            Blocos: <strong>{perfil.duracao_bloco_minutos}min</strong> ({perfil.quantidade_questoes_bloco} questões)
          </p>
        </div>

        <div className="flex items-center gap-3">
          {stats.dias_restantes_prova !== null && (
            <div className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 rounded-xl text-blue-800 dark:text-blue-300">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">CONTAGEM REGRESSIVA</p>
                <p className="text-sm font-black">
                  {stats.dias_restantes_prova > 0
                    ? `Faltam ${stats.dias_restantes_prova} dias`
                    : stats.dias_restantes_prova === 0
                    ? "É HOJE! 🎯"
                    : "Prova realizada"}
                </p>
              </div>
            </div>
          )}

          <Link href="/mentoria/configurar">
            <Button
              variant="outline"
              size="md"
              leftIcon={<Settings className="w-4 h-4" />}
              className="font-medium"
            >
              Ajustar Perfil
            </Button>
          </Link>
        </div>
      </div>

      {/* Banner / Card de Diagnóstico Inicial e Nivelamento (Release 2) */}
      {!perfil.diagnostico_concluido ? (
        <div className="p-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 rounded-2xl border border-indigo-500/30 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/30 rounded-full text-indigo-200 text-xs font-bold uppercase tracking-wider border border-indigo-400/30">
              <BrainCircuit className="w-3.5 h-3.5" />
              Diagnóstico Pendente
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              Descubra seu nível exato com o Diagnóstico Inicial
            </h2>
            <p className="text-sm text-indigo-200/90 leading-relaxed">
              Responda a uma bateria rápida de questões reais do banco para que o algoritmo calibre seus ciclos de estudo, identifique seus pontos cegos e priorize matérias críticas.
            </p>
          </div>

          <Link href="/mentoria/diagnostico" className="shrink-0">
            <Button
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/30 whitespace-nowrap"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Fazer Diagnóstico Agora
            </Button>
          </Link>
        </div>
      ) : (
        <div className="p-4 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl border border-indigo-900/60 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                Nivelamento Confirmado
              </p>
              <p className="text-sm font-semibold text-slate-200">
                Score Global: <strong className="text-white font-black">{perfil.score_geral || 70}/100</strong> • Nível <strong className="capitalize text-indigo-300">{perfil.nivel}</strong>
              </p>
            </div>
          </div>

          <Link href="/mentoria/diagnostico">
            <Button variant="outline" size="sm" className="text-indigo-200 border-indigo-800 hover:bg-indigo-900/50">
              Ver Relatório Completo
            </Button>
          </Link>
        </div>
      )}

      {/* Grid de Métricas Principais Reais (Zero-Mock) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Meta e Horas Semanais */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span>TEMPO SEMANAL</span>
              <Clock className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-slate-50">
                {horasEstudadas}h
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                / {horasMeta}h previstas
              </span>
            </div>
            {/* Barra de progresso */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all"
                style={{ width: `${percentualHoras}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {percentualHoras}% da meta semanal atingida
            </p>
          </CardContent>
        </Card>

        {/* Questões e Taxa de Acerto na Semana */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span>QUESTÕES DA SEMANA</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-slate-50">
                {stats.questoes_resolvidas_semana}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">questões</span>
            </div>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {stats.taxa_acerto_semana}% de aproveitamento real
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {stats.questoes_resolvidas_semana > 0
                ? "Resoluções contabilizadas"
                : "Nenhuma questão respondida ainda nesta semana"}
            </p>
          </CardContent>
        </Card>

        {/* Revisões Espaçadas Pendentes */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span>REVISÕES AGENDADAS</span>
              <RotateCcw className="w-4 h-4 text-amber-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-slate-50">
                {stats.revisoes_pendentes_count}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">pendentes</span>
            </div>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
              {stats.revisoes_pendentes_count > 0 ? (
                <span className="text-amber-600 dark:text-amber-400 font-semibold">
                  Tópicos aguardando revisão D+1/D+7
                </span>
              ) : (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Em dia! Sem revisões acumuladas
                </span>
              )}
            </p>
            <Link
              href="/mentoria/revisoes"
              className="inline-block text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline pt-1"
            >
              Ver fila de revisões →
            </Link>
          </CardContent>
        </Card>

        {/* Cobertura do Edital */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <span>COBERTURA DO EDITAL</span>
              <BookOpen className="w-4 h-4 text-purple-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-slate-50">
                {stats.cobertura_edital_percentual}%
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                ({stats.topicos_estudados_count}/{stats.topicos_total_count || 0})
              </span>
            </div>
            {/* Barra de progresso */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-600 h-full rounded-full transition-all"
                style={{ width: `${stats.cobertura_edital_percentual}%` }}
              />
            </div>
            <Link
              href="/mentoria/edital"
              className="inline-block text-[11px] font-bold text-purple-600 dark:text-purple-400 hover:underline pt-1"
            >
              Ver edital verticalizado →
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Grade Semanal de Foco (Dom a Sáb) */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Distribuição da Semana
            </span>
            <span className="text-xs font-normal text-slate-500">
              Hoje: {stats.meta_diaria_minutos > 0 ? `${stats.meta_diaria_minutos}min previstos` : "Dia livre"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
            {stats.progresso_semana.map((dia) => {
              const hojeDiaIndex = new Date().getDay();
              const isHoje = dia.dia_semana === hojeDiaIndex;

              return (
                <div
                  key={dia.dia_semana}
                  className={`p-3 rounded-xl border transition-all ${
                    isHoje
                      ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 ring-2 ring-blue-500/20"
                      : "border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
                  }`}
                >
                  <p className={`text-xs font-bold ${isHoje ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400"}`}>
                    {dia.nome_curto}
                  </p>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">
                    {dia.minutos_meta > 0 ? `${dia.minutos_meta}m` : "—"}
                  </p>
                  <div className="mt-2 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                    {dia.minutos_meta === 0 ? "Folga" : `${dia.minutos_estudados}m est.`}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Hub de Módulos da Mentoria Inteligente */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Módulos da Mentoria
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/mentoria/diagnostico" className="group">
            <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Diagnóstico & Nivelamento
                    </h3>
                    <Badge variant={perfil.diagnostico_concluido ? "success" : "warning"} className="text-[10px] py-0 px-1.5 font-bold">
                      {perfil.diagnostico_concluido ? "Concluído" : "Pendente"}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Avaliação diagnóstica com bateria real de questões para calibrar seu nível de entrada.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mentoria/hoje" className="group">
            <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Estudo de Hoje & Cronômetro
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Acesse as tarefas recomendadas para o dia e cronometre suas sessões com tempo líquido.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mentoria/plano" className="group">
            <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Plano de Estudos & Ciclos
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Cronograma semanal e ciclo adaptativo distribuído por matérias e pesos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mentoria/edital" className="group">
            <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-purple-500/50 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Edital Verticalizado
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Mapeamento completo do conteúdo programático com incidência e domínio.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mentoria/revisoes" className="group">
            <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Revisões Espaçadas (D+1, D+7, D+30)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Fila de repetição espaçada ativa para retenção de longo prazo na memória.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mentoria/evolucao" className="group">
            <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Evolução & Desempenho
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Histórico de horas líquidas, acertos por disciplina e curva de aprendizado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mentoria/configurar" className="group">
            <Card className="h-full border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md transition-all">
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                    Configurações & Disponibilidade
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Altere sua carga horária por dia, dias de folga, banca e duração dos blocos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
