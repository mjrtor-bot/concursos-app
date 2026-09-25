"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  RotateCcw,
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Layers,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaPerfil } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MentoriaRevisoesPage() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const p = await MentoriaService.getPerfil(user.id);
        setPerfil(p);
      } catch (err) {
        console.error("Erro ao carregar fila de revisões:", err);
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
        <p className="text-sm font-medium text-slate-500">Carregando fila de revisões...</p>
      </div>
    );
  }

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
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
            <RotateCcw className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">RETENÇÃO & CURVA DO ESQUECIMENTO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            Fila de Revisões Espaçadas
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Ciclos de repetição ativa nos intervalos de 24 horas (D+1), 7 dias (D+7) e 30 dias (D+30).
          </p>
        </div>

        <Link href="/mentoria/hoje">
          <Button variant="outline" size="md" leftIcon={<Clock className="w-4 h-4" />}>
            Revisar Hoje
          </Button>
        </Link>
      </div>

      {/* Resumo dos Intervalos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              CICLO D+1 (24 Horas)
            </span>
            <p className="text-2xl font-black text-slate-900 dark:text-slate-100">0</p>
            <p className="text-xs text-slate-500">Fixação imediata pós-estudo</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              CICLO D+7 (Semanal)
            </span>
            <p className="text-2xl font-black text-slate-900 dark:text-slate-100">0</p>
            <p className="text-xs text-slate-500">Consolidação na memória média</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              CICLO D+30 (Mensal)
            </span>
            <p className="text-2xl font-black text-slate-900 dark:text-slate-100">0</p>
            <p className="text-xs text-slate-500">Retenção de longo prazo</p>
          </CardContent>
        </Card>
      </div>

      {/* Estado Vazio Informativo (Zero-Mock) */}
      <Card className="border-dashed border-2 border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50">
        <CardContent className="p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Nenhuma revisão pendente para hoje
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Conforme você estuda tópicos e resolve blocos de exercícios na mentoria, os gatilhos automáticos de revisão serão enfileirados aqui.
            </p>
          </div>
          <div className="pt-2">
            <Link href="/mentoria/hoje">
              <Button size="md" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                Iniciar Sessão de Estudo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
