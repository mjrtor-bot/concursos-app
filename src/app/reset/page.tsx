"use client";

import { useState } from "react";
import Link from "next/link";
import { DataService } from "@/services/dataService";
import { RefreshCw, Trash2, CheckCircle, AlertTriangle } from "lucide-react";

export default function ResetPage() {
  const [status, setStatus] = useState<"idle" | "resetting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const resetarRespostas = () => {
    setStatus("resetting");
    setMessage("Limpando suas respostas...");

    try {
      DataService.resetarRespostas();
      setStatus("success");
      setMessage("✅ Todas as respostas foram removidas! Você pode começar do zero.");
    } catch (error) {
      setStatus("error");
      setMessage("❌ Erro ao limpar respostas. Tente novamente.");
    }
  };

  const resetarTudo = () => {
    setStatus("resetting");
    setMessage("Resetando todos os dados...");

    try {
      DataService.resetarDadosParaPadrao();
      setStatus("success");
      setMessage("✅ Todos os dados foram resetados para o estado padrão.");
    } catch (error) {
      setStatus("error");
      setMessage("❌ Erro ao resetar dados. Tente novamente.");
    }
  };

  const inicializarSemRespostas = () => {
    setStatus("resetting");
    setMessage("Inicializando sem respostas...");

    try {
      DataService.inicializarSemRespostas();
      setStatus("success");
      setMessage("✅ Sistema inicializado sem respostas. Você começa do zero.");
    } catch (error) {
      setStatus("error");
      setMessage("❌ Erro ao inicializar. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            ← Voltar para página inicial
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Controle de Dados
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Gerencie seus dados de estudo e reset quando necessário
          </p>
        </header>

        {/* Status Message */}
        {status !== "idle" && (
          <div
            className={`p-4 rounded-xl mb-6 ${
              status === "success"
                ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                : status === "error"
                ? "bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                : "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            }`}
          >
            <div className="flex items-center gap-3">
              {status === "success" && <CheckCircle className="w-5 h-5" />}
              {status === "error" && <AlertTriangle className="w-5 h-5" />}
              {status === "resetting" && <RefreshCw className="w-5 h-5 animate-spin" />}
              <div>
                <p className="font-medium">{message}</p>
                {status === "success" && (
                  <p className="text-sm mt-1">
                    As páginas agora mostrarão questões não respondidas.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Information Cards */}
        <div className="space-y-6">
          {/* Problem Description */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-1">
                  Problema Atual
                </h3>
                <p className="text-amber-700 dark:text-amber-400 text-sm">
                  O sistema está mostrando questões como <strong>já respondidas</strong> porque há
                  dados de demonstração pré-carregados. Use as opções abaixo para começar com
                  questões <strong>não resolvidas</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Reset Options */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Opções de Reset
            </h2>

            <div className="space-y-4">
              {/* Option 1 - Start Fresh */}
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Começar do Zero (Recomendado)
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">
                    Ideal
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Remove todas as respostas existentes e mantém seu perfil. Você começará com
                  <strong> 0 questões respondidas</strong>.
                </p>
                <button
                  onClick={resetarRespostas}
                  disabled={status === "resetting"}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "resetting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Processando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Começar do Zero
                    </span>
                  )}
                </button>
              </div>

              {/* Option 2 - Initialize Fresh */}
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Inicializar sem Dados de Demo
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Configura o sistema sem as respostas de demonstração. O dashboard mostrará
                  gráficos vazios inicialmente.
                </p>
                <button
                  onClick={inicializarSemRespostas}
                  disabled={status === "resetting"}
                  className="w-full py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Inicializar Limpo
                </button>
              </div>

              {/* Option 3 - Full Reset */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h3 className="font-semibold text-red-800 dark:text-red-300">
                    Reset Total (Cuidado)
                  </h3>
                </div>
                <p className="text-sm text-red-700 dark:text-red-400 mb-3">
                  Remove <strong>TODOS os dados</strong> incluindo perfil e favoritos, e reinicializa
                  com dados de demonstração completos. Perderá todo o progresso.
                </p>
                <button
                  onClick={resetarTudo}
                  disabled={status === "resetting"}
                  className="w-full py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "resetting" ? "Resetando..." : "Reset Total"}
                </button>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Próximos Passos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/dashboard"
                className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
              >
                <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                  Ver Dashboard
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Veja seu dashboard atualizado
                </p>
              </Link>

              <Link
                href="/questoes"
                className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition"
              >
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                  Questões
                </h3>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                  Pratique questões não respondidas
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}