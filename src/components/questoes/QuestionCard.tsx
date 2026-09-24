"use client";

import React, { useState, useEffect } from "react";
import { Questao, RespostaUsuario } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DataService } from "@/services/dataService";
import { useToast } from "@/contexts/ToastContext";
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  RotateCcw,
  BookOpen,
  Share2,
  ChevronRight,
  TrendingUp,
  FileText,
  Save,
  Trash2,
  ShieldCheck,
  AlertTriangle,
  Ban,
} from "lucide-react";

interface QuestionCardProps {
  questao: Questao;
  onProxima?: () => void;
  onRespostaSalva?: (correta: boolean) => void;
  numeroQuestao?: number;
  totalQuestoes?: number;
  modoSimulado?: boolean;
  respostaInicial?: string | null;
  onSelecionarAlternativaSimulado?: (altId: string) => void;
}

export function QuestionCard({
  questao,
  onProxima,
  onRespostaSalva,
  numeroQuestao,
  totalQuestoes,
  modoSimulado = false,
  respostaInicial,
  onSelecionarAlternativaSimulado,
}: QuestionCardProps) {
  const { success, info } = useToast();
  const [selecionadaId, setSelecionadaId] = useState<string | null>(
    respostaInicial || null
  );
  const [resposta, setResposta] = useState<RespostaUsuario | null>(null);
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false);
  const [isFavorita, setIsFavorita] = useState(false);
  const [tempoInicio, setTempoInicio] = useState<number>(Date.now());
  const [anotacao, setAnotacao] = useState("");
  const [mostrarAnotacao, setMostrarAnotacao] = useState(false);
  const [historicoAnterior, setHistoricoAnterior] = useState<RespostaUsuario | null>(null);

  // Inicializa a questão sempre limpa e pronta para resolução ativa
  useEffect(() => {
    setTempoInicio(Date.now());
    setSelecionadaId(respostaInicial || null);
    setResposta(null);
    setMostrarExplicacao(false);
    setMostrarAnotacao(false);

    if (!modoSimulado) {
      const respExistente = DataService.getRespostaByQuestaoId(questao.id);
      setHistoricoAnterior(respExistente || null);
    } else {
      setHistoricoAnterior(null);
    }

    setIsFavorita(DataService.isFavorita(questao.id));
    const notaSalva = DataService.getAnotacaoQuestao(questao.id);
    setAnotacao(notaSalva || "");
  }, [questao.id, modoSimulado, respostaInicial]);

  const handleSalvarAnotacao = () => {
    DataService.salvarAnotacaoQuestao(questao.id, anotacao);
    if (anotacao.trim()) {
      success("Anotação de estudo salva!");
    } else {
      info("Anotação removida.");
    }
  };

  const handleLimparAnotacao = () => {
    setAnotacao("");
    DataService.salvarAnotacaoQuestao(questao.id, "");
    info("Anotação limpa.");
  };

  const handleSelectAlternativa = (altId: string) => {
    if (resposta && !modoSimulado) return; // already answered
    setSelecionadaId(altId);
    if (modoSimulado && onSelecionarAlternativaSimulado) {
      onSelecionarAlternativaSimulado(altId);
    }
  };

  const handleResponder = () => {
    if (!selecionadaId) return;

    const tempoGastoSegundos = Math.max(
      1,
      Math.round((Date.now() - tempoInicio) / 1000)
    );
    const resultado = DataService.registrarResposta(
      questao.id,
      selecionadaId,
      tempoGastoSegundos
    );

    setResposta(resultado.resposta);
    setMostrarExplicacao(true);

    if (resultado.correta) {
      success("Parabéns! Resposta correta 🎉");
    } else {
      info(
        "Resposta incorreta",
        "A questão foi enviada ao seu Caderno de Erros para revisão."
      );
    }

    if (onRespostaSalva) {
      onRespostaSalva(resultado.correta);
    }
  };

  const handleToggleFavorito = () => {
    const estado = DataService.toggleFavorito(questao.id);
    setIsFavorita(estado);
    if (estado) {
      success("Questão favoritada com sucesso!");
    } else {
      info("Questão removida dos favoritos.");
    }
  };

  const handleRefazer = () => {
    setResposta(null);
    setSelecionadaId(null);
    setMostrarExplicacao(false);
    setTempoInicio(Date.now());
  };

  const disciplina = DataService.getDisciplinaById(questao.disciplina_id);
  const assunto = DataService.getAssuntoById(questao.assunto_id);

  const getDificuldadeBadge = () => {
    switch (questao.dificuldade) {
      case "facil":
        return <Badge variant="success">Fácil</Badge>;
      case "medio":
        return <Badge variant="warning">Média</Badge>;
      case "dificil":
        return <Badge variant="error">Difícil</Badge>;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden transition-all">
      {/* Header Info */}
      <div className="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-800/40 border-b border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {numeroQuestao && (
            <span className="font-bold text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-900">
              Questão {numeroQuestao} {totalQuestoes ? `de ${totalQuestoes}` : ""}
            </span>
          )}
          <Badge variant="primary" size="sm">
            {questao.banca}
          </Badge>
          <Badge variant="outline" size="sm">
            Ano {questao.ano}
          </Badge>
          <Badge variant="secondary" size="sm">
            {questao.orgao}
          </Badge>
          {questao.cargo && (
            <span className="text-slate-500 text-[11px] hidden md:inline">
              • {questao.cargo}
            </span>
          )}
          {getDificuldadeBadge()}

          {/* Badge Visual Obrigatório: Questão Autoral / IA */}
          {questao.is_autoral_ia && (
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 px-2.5 py-0.5 rounded-md"
              title={`Questão autoral gerada por IA (${questao.modelo_ia || "Claude 3.5 Sonnet"} - Prompt ${questao.prompt_versao || "v2.1"})`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
              Questão autoral/IA
              {questao.modelo_ia && (
                <span className="text-[10px] opacity-75 font-normal">
                  ({questao.modelo_ia})
                </span>
              )}
            </span>
          )}

          {/* Badge: Revisada por Especialista */}
          {questao.revisada_por_especialista && (
            <span
              className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-md"
              title="Questão revisada e validada por professor especialista"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Revisada
            </span>
          )}

          {/* Badges de Status: Anulada e Desatualizada */}
          {questao.anulada && (
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 px-2 py-0.5 rounded-md"
              title="Esta questão foi anulada pela banca examinadora."
            >
              <Ban className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
              Anulada
            </span>
          )}
          {questao.desatualizada && (
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded-md"
              title={questao.motivo_desatualizacao || "Legislação ou entendimento alterado desde a aplicação da prova."}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              Desatualizada
            </span>
          )}

          {/* Versionamento cadastral */}
          {questao.versao && questao.versao > 1 && (
            <span
              className="text-[10px] text-slate-400 dark:text-slate-500 font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800"
              title={`Versão cadastral ${questao.versao} (histórico preservado)`}
            >
              v{questao.versao}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {!modoSimulado && (
            <button
              onClick={() => setMostrarAnotacao((prev) => !prev)}
              className={`p-2 rounded-xl transition-colors flex items-center gap-1 text-xs font-semibold ${
                mostrarAnotacao || anotacao.trim()
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title="Minhas anotações de estudo"
              aria-label="Anotações"
            >
              <FileText className="w-4 h-4" />
              {anotacao.trim() && (
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              )}
            </button>
          )}

          <button
            onClick={handleToggleFavorito}
            className={`p-2 rounded-xl transition-colors ${
              isFavorita
                ? "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
            title={isFavorita ? "Remover dos favoritos" : "Salvar nos favoritos"}
            aria-label="Favoritar"
          >
            <Bookmark className={`w-4 h-4 ${isFavorita ? "fill-amber-500" : ""}`} />
          </button>
        </div>
      </div>

      {/* Discipline & Subject Breadcrumb */}
      <div className="px-5 py-2.5 bg-slate-100/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
        <BookOpen className="w-3.5 h-3.5 text-blue-500" />
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          {disciplina?.nome || "Disciplina"}
        </span>
        <span>›</span>
        <span className="text-slate-600 dark:text-slate-400">
          {assunto?.nome || "Assunto"}
        </span>
      </div>

      {/* Histórico Anterior Informativo (Sem travar ou pré-marcar a questão) */}
      {historicoAnterior && !resposta && !modoSimulado && (
        <div className="px-5 py-2 bg-blue-50/60 dark:bg-blue-950/30 border-b border-blue-100 dark:border-blue-900/40 flex items-center justify-between text-xs flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-blue-800 dark:text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              Você já respondeu esta questão anteriormente (
              <strong>{historicoAnterior.correta ? "Acertou" : "Errou"}</strong>). Resolva novamente para reforçar a fixação.
            </span>
          </div>
          <button
            onClick={() => {
              setResposta(historicoAnterior);
              setSelecionadaId(historicoAnterior.alternativa_id);
              setMostrarExplicacao(true);
            }}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
          >
            Ver Gabarito Anterior
          </button>
        </div>
      )}

      {/* Painel de Anotações Pessoais do Concurseiro */}
      {mostrarAnotacao && (
        <div className="p-4 bg-amber-50/50 dark:bg-amber-950/20 border-b border-amber-200/60 dark:border-amber-900/40 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Minhas Anotações de Estudo</span>
            </div>
            <span className="text-[10px] font-normal text-amber-700/80 dark:text-amber-400/80">
              Salvo no seu dispositivo
            </span>
          </div>

          <textarea
            value={anotacao}
            onChange={(e) => setAnotacao(e.target.value)}
            placeholder="Escreva seus macetes, mnemônicos, pegadinhas da banca ou dúvidas desta questão..."
            rows={3}
            className="w-full text-xs p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:outline-hidden resize-none"
          />

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400">
              {anotacao.length} caracteres
            </span>
            <div className="flex items-center gap-2">
              {anotacao.trim() && (
                <button
                  onClick={handleLimparAnotacao}
                  className="px-2.5 py-1 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Limpar
                </button>
              )}
              <Button
                size="sm"
                variant="primary"
                onClick={handleSalvarAnotacao}
                leftIcon={<Save className="w-3 h-3" />}
              >
                Salvar Anotação
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Body: Enunciado */}
      <div className="p-5 sm:p-7 space-y-6">
        {questao.texto_apoio && (
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-l-4 border-blue-500 rounded-r-xl text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
            {questao.texto_apoio}
          </div>
        )}

        <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
          {questao.enunciado}
        </div>

        {/* Alternativas */}
        <div className="space-y-3">
          {questao.alternativas.map((alt) => {
            const isSelected = selecionadaId === alt.id;
            const isAnswered = Boolean(resposta);
            const isCorrect = alt.correta;

            let optionStyle =
              "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 text-slate-800 dark:text-slate-200";

            if (isSelected && !isAnswered) {
              optionStyle =
                "bg-blue-500/10 border-blue-600 dark:border-blue-500 text-blue-900 dark:text-blue-100 shadow-xs";
            }

            if (isAnswered) {
              if (isCorrect) {
                optionStyle =
                  "bg-emerald-500/10 border-emerald-500 dark:border-emerald-500 text-emerald-950 dark:text-emerald-100 font-medium";
              } else if (isSelected && !isCorrect) {
                optionStyle =
                  "bg-rose-500/10 border-rose-500 dark:border-rose-500 text-rose-950 dark:text-rose-100";
              } else {
                optionStyle =
                  "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400 opacity-70";
              }
            }

            return (
              <div
                key={alt.id}
                onClick={() => handleSelectAlternativa(alt.id)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 select-none ${optionStyle}`}
              >
                {/* Letter or check indicator */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    isAnswered
                      ? isCorrect
                        ? "bg-emerald-600 text-white"
                        : isSelected
                        ? "bg-rose-600 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      : isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {isAnswered ? (
                    isCorrect ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : isSelected ? (
                      <XCircle className="w-4 h-4" />
                    ) : (
                      alt.letra || alt.texto.charAt(0)
                    )
                  ) : (
                    alt.letra || (alt.texto === "Certo" ? "C" : "E")
                  )}
                </div>

                <div className="flex-1 text-xs sm:text-sm pt-0.5 leading-relaxed">
                  {alt.texto}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button: Responder (when not answered in standard mode) */}
        {!modoSimulado && !resposta && (
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">
              Selecione uma alternativa e confirme sua resposta.
            </span>
            <Button
              onClick={handleResponder}
              disabled={!selecionadaId}
              size="md"
              leftIcon={<CheckCircle2 className="w-4 h-4" />}
            >
              Responder Questão
            </Button>
          </div>
        )}

        {/* Resposta e Gabarito Comentado */}
        {mostrarExplicacao && !modoSimulado && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-in fade-in duration-300">
            {/* Outcome banner */}
            <div
              className={`p-4 rounded-xl flex items-center justify-between gap-4 ${
                resposta?.correta
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300"
                  : "bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {resposta?.correta ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                )}
                <div>
                  <p className="font-bold text-sm">
                    {resposta?.correta
                      ? "Você acertou esta questão!"
                      : "Você errou esta questão."}
                  </p>
                  <p className="text-xs opacity-80">
                    {resposta?.correta
                      ? "Ótimo trabalho! Continue praticando."
                      : "Revise a explicação abaixo para fixar o conteúdo."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefazer}
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Refazer
                </Button>
              </div>
            </div>

            {/* Teacher comment / explanation */}
            <div className="p-5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                  <Sparkles className="w-4 h-4" />
                  GABARITO E RESOLUÇÃO COMENTADA
                </div>
                {questao.taxa_acerto_comunidade && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span>
                      Taxa de acerto da comunidade:{" "}
                      <strong>{questao.taxa_acerto_comunidade}%</strong>
                    </span>
                  </div>
                )}
              </div>

              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed font-sans">
                {questao.explicacao}
              </div>
            </div>

            {/* Bottom Question Controls */}
            {onProxima && (
              <div className="flex justify-end pt-2">
                <Button
                  onClick={onProxima}
                  size="md"
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                >
                  Próxima Questão
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
