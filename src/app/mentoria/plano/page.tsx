"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Target,
  Calendar,
  Layers,
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  RotateCw,
  Plus,
  Sliders,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaPerfil, MentoriaDisponibilidade } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MentoriaPlanoPage() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [disp, setDisp] = useState<MentoriaDisponibilidade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const [p, d] = await Promise.all([
          MentoriaService.getPerfil(user.id),
          MentoriaService.getDisponibilidade(user.id),
        ]);
        setPerfil(p);
        setDisp(d);
      } catch (err) {
        console.error("Erro ao carregar plano de estudos:", err);
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
        <p className="text-sm font-medium text-slate-500">Carregando plano de estudos...</p>
      </div>
    );
  }

  const nomesDias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

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
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Target className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">CICLOS & PLANEJAMENTO</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            Plano de Estudos Semanal
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {perfil ? `Preparação estratégica para ${perfil.concurso_nome} (${perfil.cargo_nome})` : "Configure seu plano de estudos"}
          </p>
        </div>

        <Link href="/mentoria/configurar">
          <Button variant="outline" size="md" leftIcon={<Sliders className="w-4 h-4" />}>
            Ajustar Grade
          </Button>
        </Link>
      </div>

      {/* Grade de Dias e Distribuição */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Estrutura da Semana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {disp.map((d) => {
            const horas = (d.minutos_disponiveis / 60).toFixed(1);
            const isDescanso = d.minutos_disponiveis === 0;

            return (
              <Card
                key={d.dia_semana}
                className={`border-slate-200 dark:border-slate-800 ${
                  isDescanso ? "opacity-75 bg-slate-50/50 dark:bg-slate-900/50" : ""
                }`}
              >
                <CardContent className="p-5 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                      {nomesDias[d.dia_semana]}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 capitalize">
                      {isDescanso ? "Dia de descanso e recuperação" : `Período preferido: ${d.horario_preferido || "noite"}`}
                    </p>
                  </div>

                  <div className="text-right">
                    <Badge variant={isDescanso ? "secondary" : "primary"} className="font-bold text-xs">
                      {isDescanso ? "Folga" : `${horas}h líquidas`}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
