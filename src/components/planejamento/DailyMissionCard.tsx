"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  HelpCircle,
  RotateCcw,
  AlertTriangle,
  FileCheck,
  CheckCircle2,
  Clock,
  Play,
  Sparkles,
  BookMarked,
  Timer,
  CheckSquare,
  ChevronRight,
  Save,
  X,
  Flame,
  Check,
  Target,
  Calendar,
  Lightbulb,
} from "lucide-react";
import { MissaoDiariaItem, MentoriaTarefaTipo } from "@/types";

interface DailyMissionCardProps {
  missao: MissaoDiariaItem;
  onIniciar?: (missao: MissaoDiariaItem) => void;
  onConcluir?: (missaoId: string) => void;
  onAdiar?: (missaoId: string) => void;
}

export function DailyMissionCard({
  missao,
  onIniciar,
  onConcluir,
  onAdiar,
}: DailyMissionCardProps) {
  const [isCadernoOpen, setIsCadernoOpen] = useState(false);
  const [isCronometroOpen, setIsCronometroOpen] = useState(false);
  const [cadernoTexto, setCadernoTexto] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const key = `concursos_caderno_${missao.disciplina_id}_${missao.assunto_id || "geral"}`;
        const saved = localStorage.getItem(key);
        if (saved) return saved;
      } catch {
        // Ignore
      }
    }
    return missao.anotacoes || "";
  });
  const [salvoCaderno, setSalvoCaderno] = useState(false);
  const [statusLocal, setStatusLocal] = useState(missao.status);
  const [prevMissaoKey, setPrevMissaoKey] = useState(`${missao.id}_${missao.status}`);

  if (`${missao.id}_${missao.status}` !== prevMissaoKey) {
    setPrevMissaoKey(`${missao.id}_${missao.status}`);
    setStatusLocal(missao.status);
  }

  const handleSalvarCaderno = () => {
    if (typeof window !== "undefined") {
      try {
        const key = `concursos_caderno_${missao.disciplina_id}_${missao.assunto_id || "geral"}`;
        localStorage.setItem(key, cadernoTexto);
        setSalvoCaderno(true);
        setTimeout(() => setSalvoCaderno(false), 2500);
      } catch {
        // Ignore
      }
    }
  };

  const handleToggleConcluir = () => {
    const novoStatus = statusLocal === "concluida" ? "pendente" : "concluida";
    setStatusLocal(novoStatus);
    if (onConcluir) {
      onConcluir(missao.id);
    }
  };

  // Formatação do Título: TIPO + DISCIPLINA
  const getTituloFormatado = (tipo: MentoriaTarefaTipo, disciplina: string) => {
    switch (tipo) {
      case "TEORIA":
        return `Teoria de ${disciplina}`;
      case "QUESTOES":
        return `Exercício de ${disciplina}`;
      case "REVISAO":
        return `Revisão de ${disciplina}`;
      case "CADERNO_ERROS":
        return `Caderno de Erros de ${disciplina}`;
      case "SIMULADO":
        return `Simulado de ${disciplina}`;
      default:
        return `Estudo de ${disciplina}`;
    }
  };

  // Informações Visuais por Tipo de Estudo
  const getTipoEstudoInfo = (tipo: MentoriaTarefaTipo) => {
    switch (tipo) {
      case "TEORIA":
        return {
          label: "Teoria Policial",
          icon: BookOpen,
          bgBadge: "bg-blue-600 text-white",
          boxBg: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/60",
          dica: "Estude com foco na literalidade da lei seca e nas súmulas mais recorrentes da banca. Destaque prazos, exceções e palavras-chave usando o botão Caderno para sintetizar os esquemas.",
        };
      case "QUESTOES":
        return {
          label: "Exercício Prático",
          icon: HelpCircle,
          bgBadge: "bg-indigo-600 text-white",
          boxBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60",
          dica: "Resolva as questões mantendo o ritmo de prova (máximo de 2 a 3 minutos por questão). Ao errar, leia os comentários com atenção e registre os pontos fracos no seu Caderno.",
        };
      case "REVISAO":
        return {
          label: "Revisão Espaçada (SRS)",
          icon: RotateCcw,
          bgBadge: "bg-amber-600 text-white",
          boxBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60",
          dica: "Pratique a recuperação ativa (active recall): tente lembrar das regras, mnemônicos e exceções antes de consultar as notas. Isso fortalece a consolidação neural de longo prazo.",
        };
      case "CADERNO_ERROS":
        return {
          label: "Caderno de Erros",
          icon: AlertTriangle,
          bgBadge: "bg-rose-600 text-white",
          boxBg: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/60",
          dica: "Identifique a causa raiz de cada erro anterior: foi falta de atenção, pegadinha da banca ou lacuna teórica? Compreenda a fundamentação para blindar sua pontuação.",
        };
      case "SIMULADO":
        return {
          label: "Simulado Policial",
          icon: FileCheck,
          bgBadge: "bg-purple-600 text-white",
          boxBg: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/60",
          dica: "Simule as condições reais de prova: cronômetro ativo, sem consultas paralelas e reservando os minutos finais para o preenchimento do cartão-resposta.",
        };
      default:
        return {
          label: "Estudo Dirigido",
          icon: BookOpen,
          bgBadge: "bg-slate-600 text-white",
          boxBg: "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200",
          dica: "Mantenha o foco contínuo e cumpra o tempo estipulado para maximizar a retenção do conteúdo programático.",
        };
    }
  };

  const tipoInfo = getTipoEstudoInfo(missao.tipo);
  const Icone = tipoInfo.icon;
  const concluida = statusLocal === "concluida";

  // Data formatada para a meta do dia (DD/MM)
  const formatarDataMeta = (dataIso?: string) => {
    if (!dataIso) {
      const hoje = new Date();
      return `${String(hoje.getDate()).padStart(2, "0")}/${String(hoje.getMonth() + 1).padStart(2, "0")}`;
    }
    try {
      const parts = dataIso.slice(0, 10).split("-");
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}`;
      }
      return dataIso;
    } catch {
      return dataIso;
    }
  };

  // Verificar se a meta está atrasada
  const isAtrasada = () => {
    if (missao.atrasada) return true;
    if (missao.data_planejada && !concluida) {
      const hojeIso = new Date().toISOString().slice(0, 10);
      return missao.data_planejada.slice(0, 10) < hojeIso;
    }
    return false;
  };

  const metaAtrasada = isAtrasada();
  const taxaAcerto = missao.taxa_acerto !== undefined ? missao.taxa_acerto : null;

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
          concluida
            ? "bg-slate-50/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-85"
            : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg shadow-slate-200/40 dark:shadow-none"
        }`}
      >
        {/* Top Accent Bar */}
        <div
          className={`h-1.5 w-full ${
            concluida
              ? "bg-emerald-500"
              : missao.tipo === "QUESTOES"
              ? "bg-indigo-600"
              : missao.tipo === "TEORIA"
              ? "bg-blue-600"
              : missao.tipo === "REVISAO"
              ? "bg-amber-500"
              : missao.tipo === "CADERNO_ERROS"
              ? "bg-rose-500"
              : "bg-purple-600"
          }`}
        />

        <div className="p-5 sm:p-6 space-y-4">
          {/* 1. LINHA DE BADGES (Acertos, Meta do Dia, Alerta de Atraso, Duração) */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            {/* Bloco */}
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] ${tipoInfo.bgBadge}`}
            >
              Bloco {missao.bloco_ordem} • {tipoInfo.label}
            </span>

            {/* % de Acertos */}
            <div
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold text-[11px] border ${
                taxaAcerto !== null && taxaAcerto >= 75
                  ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                  : taxaAcerto !== null && taxaAcerto >= 50
                  ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                  : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>
                {taxaAcerto !== null ? `${taxaAcerto}% de acertos` : "Taxa de acerto ativa"}
              </span>
            </div>

            {/* Meta do Dia */}
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Meta do dia {formatarDataMeta(missao.data_planejada)}</span>
            </div>

            {/* Alerta de Atraso */}
            {metaAtrasada && !concluida && (
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 animate-pulse">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                <span>⚠️ Essa meta está atrasada</span>
              </div>
            )}

            {/* Minutos de Atividade */}
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/70 dark:border-slate-700">
              <Clock className="w-3.5 h-3.5" />
              <span>{missao.duracao_minutos || 40} min de atividade</span>
            </div>
          </div>

          {/* 2. TÍTULO E SUBTÍTULO DA MISSÃO */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3
                className={`text-lg sm:text-xl font-extrabold tracking-tight ${
                  concluida
                    ? "line-through text-slate-400 dark:text-slate-500"
                    : "text-slate-900 dark:text-slate-100"
                }`}
              >
                {getTituloFormatado(missao.tipo, missao.disciplina_nome)}
              </h3>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                <span className="text-slate-400 dark:text-slate-500">📌</span>
                <span>
                  {missao.assunto_nome
                    ? (missao.subassunto_nome || missao.topico_nome
                        ? `${missao.assunto_nome} › ${missao.subassunto_nome || missao.topico_nome}`
                        : missao.assunto_nome)
                    : "Conteúdo Programático do Edital"}
                </span>
              </div>
            </div>

            {/* Botão de Conclusão / Checkbox */}
            <button
              onClick={handleToggleConcluir}
              className={`shrink-0 p-2 rounded-2xl border transition-all ${
                concluida
                  ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/20"
                  : "bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 hover:text-emerald-500 hover:border-emerald-400"
              }`}
              title={concluida ? "Missão concluída (clique para reabrir)" : "Marcar como concluída"}
            >
              <CheckCircle2 className="w-6 h-6" />
            </button>
          </div>

          {/* Explicabilidade / Motivos */}
          {missao.motivo_explicabilidade && missao.motivo_explicabilidade.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
              {missao.motivo_explicabilidade.map((motivo, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                >
                  <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                  {motivo}
                </span>
              ))}
            </div>
          )}

          {/* 3. BOTÕES DE AÇÃO: Caderno, Cronômetro, Fazer Exercícios */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Botão Caderno */}
              <button
                type="button"
                onClick={() => setIsCadernoOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <BookMarked className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Caderno</span>
                {cadernoTexto.trim() && (
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </button>

              {/* Botão Opções de Cronômetro */}
              <button
                type="button"
                onClick={() => setIsCronometroOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <Timer className="w-4 h-4 text-amber-500" />
                <span>Opções de Cronômetro</span>
              </button>
            </div>

            {/* CTA Principal: Fazer Exercícios ou Iniciar Estudo */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Link
                href={`/questoes?disciplina_id=${missao.disciplina_id}${
                  missao.assunto_id ? `&assunto_id=${missao.assunto_id}` : ""
                }`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 transition-all"
              >
                <CheckSquare className="w-4 h-4" />
                <span>Fazer Exercícios</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 4. CAIXA DE DICA PEDAGÓGICA ("Dica") */}
          <div className="rounded-2xl p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                <span>Dica Pedagógica da Missão</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {tipoInfo.dica}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL CADERNO DE ANOTAÇÕES DO TÓPICO ───────────────────────────── */}
      {isCadernoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  <BookMarked className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Caderno de Anotações
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {missao.disciplina_nome} • {missao.assunto_nome || "Geral"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCadernoOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {/* Sugestões Rápidas de Tags */}
              <div className="flex items-center gap-1.5 flex-wrap text-xs">
                <span className="text-slate-400 text-[11px] font-medium">Inserir:</span>
                <button
                  type="button"
                  onClick={() => setCadernoTexto((prev) => `${prev}\n📌 Mnemônico: `)}
                  className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-[11px] font-medium"
                >
                  + Mnemônico
                </button>
                <button
                  type="button"
                  onClick={() => setCadernoTexto((prev) => `${prev}\n⚖️ Lei Seca / Artigo: `)}
                  className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-[11px] font-medium"
                >
                  + Lei Seca
                </button>
                <button
                  type="button"
                  onClick={() => setCadernoTexto((prev) => `${prev}\n⚠️ Pegadinha da Banca: `)}
                  className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-[11px] font-medium"
                >
                  + Pegadinha
                </button>
                <button
                  type="button"
                  onClick={() => setCadernoTexto((prev) => `${prev}\n📖 Súmula: `)}
                  className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-[11px] font-medium"
                >
                  + Súmula
                </button>
              </div>

              <textarea
                value={cadernoTexto}
                onChange={(e) => setCadernoTexto(e.target.value)}
                placeholder="Escreva seus resumos, artigos importantes, mnemônicos e pontos de atenção para fixação..."
                rows={8}
                className="w-full p-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
            </div>

            <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {salvoCaderno ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-4 h-4" /> Salvo com sucesso!
                  </span>
                ) : (
                  "Salvo localmente com sincronização"
                )}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCadernoOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  onClick={handleSalvarCaderno}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
                >
                  <Save className="w-4 h-4" /> Salvar Anotações
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL OPÇÕES DE CRONÔMETRO ───────────────────────────────────────── */}
      {isCronometroOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                  <Timer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Opções de Cronômetro
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Selecione o modo de foco para a missão
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCronometroOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-3">
              {/* Opção 1: Iniciar Direto na Mentoria */}
              <Link
                href={`/mentoria/hoje?bloco=${missao.bloco_ordem}&iniciar=1`}
                onClick={() => setIsCronometroOpen(false)}
                className="p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800/70 bg-indigo-50/60 dark:bg-indigo-950/30 hover:bg-indigo-100/70 dark:hover:bg-indigo-950/60 transition-all flex items-center justify-between group block"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-bold text-indigo-950 dark:text-indigo-200">
                      Sessão Completa de Mentoria
                    </span>
                  </div>
                  <p className="text-xs text-indigo-700/80 dark:text-indigo-400">
                    Inicia o cronômetro oficial com registro de telemetria e questões
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Opção 2: Modo Pomodoro 25/5 */}
              <Link
                href={`/mentoria/hoje?bloco=${missao.bloco_ordem}&modo=pomodoro`}
                onClick={() => setIsCronometroOpen(false)}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-between group block"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Modo Pomodoro (25 min foco / 5 min pausa)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Ciclos de alta concentração intercalados com pausas restauradoras
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Opção 3: Foco Contínuo Estimado */}
              <Link
                href={`/mentoria/hoje?bloco=${missao.bloco_ordem}&tempo=${missao.duracao_minutos || 40}`}
                onClick={() => setIsCronometroOpen(false)}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-between group block"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Foco Contínuo ({missao.duracao_minutos || 40} minutos)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Temporizador contínuo ajustado para o tempo planejado do bloco
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-end">
              <button
                type="button"
                onClick={() => setIsCronometroOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
