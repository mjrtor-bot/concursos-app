"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  BarChart3,
  Award,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaDashboardStats } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MentoriaEvolucaoPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<MentoriaDashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const s = await MentoriaService.getDashboardStats(user.id);
        setStats(s);
      } catch (err) {
        console.error("Erro ao carregar métricas de evolução:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500">Carregando dados de evolução...</p>
      </div>
    );
  }

  const horasLiquidas = stats ? (stats.minutos_estudados_semana / 60).toFixed(1) : "0.0";
  const metaHoras = stats ? (stats.meta_semanal_minutos / 60).toFixed(1) : "0.0";

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Topo / Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/mentoria"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Dashboard da Mentoria
        </Link>
      </div>

      {/* Header */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">MÉTRICAS & DIAGNÓSTICO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            Evolução e Desempenho
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Acompanhamento analítico da sua constância de estudo e taxa de retenção.
          </p>
        </div>

        <Link href="/desempenho">
          <Button variant="outline" size="md" leftIcon={<BarChart3 className="w-4 h-4" />}>
            Estatísticas Gerais
          </Button>
        </Link>
      </div>

      {/* Grid de Métricas Principais (Zero-Mock) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                TEMPO LÍQUIDO (SEMANA)
              </span>
              <Clock className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-slate-100">
                {horasLiquidas}h
              </span>
              <span className="text-xs text-slate-400 font-semibold">/ {metaHoras}h meta</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                QUESTÕES RESOLVIDAS
              </span>
              <Target className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-slate-100">
                {stats?.questoes_resolvidas_semana || 0}
              </span>
              <span className="text-xs text-slate-400 font-semibold">nesta semana</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                TAXA DE ACERTO REAL
              </span>
              <Award className="w-4 h-4 text-amber-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-slate-100">
                {stats?.taxa_acerto_semana || 0}%
              </span>
              <span className="text-xs text-slate-400 font-semibold">eficiência de resposta</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Aderência Semanal */}
      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Cumprimento do Cronograma por Dia
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-7 gap-2">
            {stats?.progresso_semana.map((dia) => {
              const metaHorasDia = (dia.minutos_meta / 60).toFixed(1);
              const estHorasDia = (dia.minutos_estudados / 60).toFixed(1);
              const folga = dia.minutos_meta === 0;

              return (
                <div
                  key={dia.dia_semana}
                  className={`p-3 rounded-xl text-center border transition-all ${
                    folga
                      ? "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60"
                      : dia.concluido
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <p className="text-xs font-bold">{dia.nome_curto}</p>
                  <p className="text-sm font-extrabold mt-1">
                    {folga ? "Folga" : `${estHorasDia}h`}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {folga ? "—" : `Meta ${metaHorasDia}h`}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
