"use client";

import Link from "next/link";
import { BookOpen, BarChart3, Target, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <header className="px-6 py-5 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            ConcursosApp
          </span>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition"
          >
            Criar Conta
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Prepare-se para o concurso dos seus sonhos</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Transforme sua{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              preparação
            </span>{" "}
            para concursos
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            Banco de questões inteligente, simulados cronometrados, plano de estudos personalizado e
            tudo que você precisa para garantir sua aprovação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition shadow-lg shadow-blue-500/20"
            >
              Acessar Plataforma
            </Link>
            <Link
              href="/cadastro"
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              Criar Conta Gratuita
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Banco de Questões Inteligente
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Mais de 10.000 questões de concursos passados com filtros avançados por banca,
              disciplina e dificuldade.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Análise de Desempenho
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Gráficos e estatísticas detalhadas para identificar seus pontos fortes e
              fracos em cada disciplina.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Comunidade Ativa
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Conecte-se com outros concurseiros, compartilhe dicas e mantenha a motivação
              durante sua preparação.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ConcursosApp • Plataforma de preparação para concursos públicos • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
