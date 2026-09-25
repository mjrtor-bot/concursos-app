"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Play,
  Clock,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckSquare2,
  RotateCcw,
  Pause,
  RotateCw,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaPerfil } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MentoriaHojePage() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [loading, setLoading] = useState(true);

  // Estado do Cronômetro de Estudo Líquido
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [segundosLiquidos, setSegundosLiquidos] = useState(0);

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
        console.error("Erro ao carregar perfil:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  // Efeito do Cronômetro
  useEffect(() => {
    let intervalo: NodeJS.Timeout | null = null;
    if (cronometroAtivo) {
      intervalo = setInterval(() => {
        setSegundosLiquidos((prev) => prev + 1);
      }, 1000);
    } else if (intervalo) {
      clearInterval(intervalo);
    }
    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [cronometroAtivo]);

  const formatarTempo = (totalSegundos: number) => {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  };

  const hojeFormatado = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500">Carregando plano de hoje...</p>
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
          Voltar para a Mentoria
        </Link>
      </div>

      {/* Header do Dia */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider capitalize">{hojeFormatado}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            Estudo de Hoje & Cronômetro
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Foco direcionado: execute os blocos de estudo com registro de tempo líquido real.
          </p>
        </div>

        {/* Cronômetro Flutuante */}
        <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-700 flex items-center gap-4 shadow-lg">
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">TEMPO LÍQUIDO</p>
            <p className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">
              {formatarTempo(segundosLiquidos)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {!cronometroAtivo ? (
              <Button
                size="sm"
                onClick={() => setCronometroAtivo(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                leftIcon={<Play className="w-4 h-4 fill-white" />}
              >
                Iniciar
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={() => setCronometroAtivo(false)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold"
                leftIcon={<Pause className="w-4 h-4" />}
              >
                Pausar
              </Button>
            )}
            {segundosLiquidos > 0 && !cronometroAtivo && (
              <button
                onClick={() => setSegundosLiquidos(0)}
                title="Zerar cronômetro"
                className="p-2 text-slate-400 hover:text-white rounded-lg"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Roteiro e Fila Diária de Tarefas */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Blocos de Estudo Planejados
        </h2>

        {/* Bloco 1: Teoria / Conteúdo */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="primary" className="text-[10px] uppercase font-bold">
                    TEORIA & LEGISLAÇÃO
                  </Badge>
                  <span className="text-xs text-slate-400">Bloco 1 • 40 min</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mt-1">
                  Direito Constitucional — Direitos e Garantias Fundamentais
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Art. 5º da CF/88 (Direitos Individuais e Coletivos)
                </p>
              </div>
            </div>

            <Link href="/questoes?disciplina=dir-constitucional">
              <Button size="sm" variant="outline" className="font-bold shrink-0">
                Acessar Conteúdo
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Bloco 2: Questões Práticas */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">
                <CheckSquare2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="success" className="text-[10px] uppercase font-bold">
                    QUESTÕES DE FIXAÇÃO
                  </Badge>
                  <span className="text-xs text-slate-400">Bloco 2 • 15 questões</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mt-1">
                  Bateria de Exercícios Focados
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Resolver questões recentes para avaliar a taxa de assimilação
                </p>
              </div>
            </div>

            <Link href="/questoes">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold shrink-0">
                Resolver Agora
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Bloco 3: Revisão Espaçada */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="warning" className="text-[10px] uppercase font-bold">
                    REVISÃO PROGRAMADA (D+7)
                  </Badge>
                  <span className="text-xs text-slate-400">Bloco 3 • 20 min</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mt-1">
                  Direito Administrativo — Atos Administrativos
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Revisão ativa de requisitos, atributos e extinção dos atos
                </p>
              </div>
            </div>

            <Link href="/mentoria/revisoes">
              <Button size="sm" variant="outline" className="font-bold shrink-0">
                Abrir Fila
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
