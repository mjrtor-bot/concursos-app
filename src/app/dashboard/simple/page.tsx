"use client";

import { useEffect, useState } from "react";
import { DataService } from "@/services/dataService";
import { EstatisticasGerais } from "@/types";
import Link from "next/link";

export default function SimpleDashboardPage() {
  const [stats, setStats] = useState<EstatisticasGerais | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inicializar dados
    DataService.inicializarDadosDemonstracaoSeNecessario();

    const s = DataService.getEstatisticas();
    setStats(s);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <p className="text-red-600">Erro ao carregar estatísticas</p>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
            Voltar para página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                ConcursosApp Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Visualização simplificada das estatísticas
              </p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Voltar para Home
            </Link>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400">Questões Resolvidas</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {stats.total_respondidas}
            </p>
            <p className="text-xs text-slate-500">{stats.questoes_hoje} hoje</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400">Taxa de Acertos</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {stats.taxa_acerto_geral}%
            </p>
            <p className="text-xs text-slate-500">{stats.total_acertos} acertos</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400">Sequência de Estudos</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {stats.sequencia_dias} Dias
            </p>
            <p className="text-xs text-slate-500">Recorde: 14 dias</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400">Caderno de Erros</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {stats.total_no_caderno_erros}
            </p>
            <p className="text-xs text-slate-500">{stats.erros_revisados} revisados</p>
          </div>
        </div>

        {/* Disciplinas */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Desempenho por Disciplina
          </h2>
          <div className="space-y-3">
            {stats.por_disciplina.slice(0, 5).map((disc) => (
              <div key={disc.disciplina_id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-800 dark:text-slate-200">
                    {disc.disciplina_nome}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {disc.percentual}% ({disc.acertos}/{disc.total})
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${disc.percentual}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/questoes"
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">
              Banco de Questões
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pratique questões de concursos passados
            </p>
          </Link>

          <Link
            href="/concursos"
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">
              Concursos em Aberto
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Veja editais e cargos disponíveis
            </p>
          </Link>

          <Link
            href="/simulados"
            className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">
              Simulados
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Teste seus conhecimentos com tempo
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}