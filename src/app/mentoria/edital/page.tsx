"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  ArrowLeft,
  Search,
  Filter,
  CheckCircle2,
  Circle,
  AlertCircle,
  Layers,
  Sparkles,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaPerfil } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MentoriaEditalPage() {
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
        console.error("Erro ao carregar edital verticalizado:", err);
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
        <p className="text-sm font-medium text-slate-500">Carregando edital verticalizado...</p>
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
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <FileText className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">MATRIZ DE CONTEÚDO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            Edital Verticalizado
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {perfil ? `Mapeamento dos tópicos para ${perfil.concurso_nome} (${perfil.cargo_nome})` : "Configure seu plano de estudos"}
          </p>
        </div>

        <Link href="/questoes">
          <Button variant="outline" size="md" leftIcon={<BookOpen className="w-4 h-4" />}>
            Praticar por Disciplina
          </Button>
        </Link>
      </div>

      {/* Estado Vazio Informativo (Zero-Mock) */}
      <Card className="border-dashed border-2 border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50">
        <CardContent className="p-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Edital em Construção Inteligente
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              O mapeamento verticalizado dos tópicos com peso de incidência e acompanhamento de domínio será vinculado automaticamente aos seus blocos de estudo.
            </p>
          </div>
          <div className="pt-2">
            <Link href="/mentoria/hoje">
              <Button size="md" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                Ir para o Estudo de Hoje
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
