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
  PauseCircle,
  FileText,
  ExternalLink,
} from "lucide-react";
import { MissaoDiariaItem, MentoriaTarefaTipo } from "@/types";

interface DailyMissionCardProps {
  missao: MissaoDiariaItem;
  onIniciar?: (missao: MissaoDiariaItem) => void;
  onConcluir?: (missaoId: string) => void;
  onAdiar?: (missaoId: string) => void;
  planoPausado?: boolean;
  dataFimPausa?: string | null;
}

export function DailyMissionCard({
  missao,
  onIniciar,
  onConcluir,
  onAdiar,
  planoPausado,
  dataFimPausa,
}: DailyMissionCardProps) {
  const [isCadernoOpen, setIsCadernoOpen] = useState(false);
  const [isCronometroOpen, setIsCronometroOpen] = useState(false);
  const [fetchedPausadoInfo, setFetchedPausadoInfo] = useState<{ pausado: boolean; data_fim_pausa: string | null } | null>(null);

  useEffect(() => {
    if (planoPausado === undefined) {
      let active = true;
      async function carregarPausa() {
        try {
          const res = await fetch("/api/mentoria/config-plano").then((r) => r.json());
          if (res?.config && active) {
            setFetchedPausadoInfo({
              pausado: Boolean(res.config.pausado),
              data_fim_pausa: res.config.data_fim_pausa || null,
            });
          }
        } catch {
          // Ignore
        }
      }
      carregarPausa();
      return () => {
        active = false;
      };
    }
  }, [planoPausado]);

  const pausadoInfo = planoPausado !== undefined
    ? { pausado: planoPausado, data_fim_pausa: dataFimPausa || null }
    : fetchedPausadoInfo;
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
  const [materiaisCarregados, setMateriaisCarregados] = useState<{ assuntoId: string; items: { id: string; titulo: string; pdf_url?: string | null; pdf_nome?: string | null }[] } | null>(null);
  const materiais = materiaisCarregados && materiaisCarregados.assuntoId === missao.assunto_id ? materiaisCarregados.items : [];

  useEffect(() => {
    if (!missao.assunto_id) return;
    let active = true;
    fetch(`/api/mentoria/conteudos?assunto_id=${missao.assunto_id}`)
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        const pdfs = (data?.conteudos || []).filter((c: any) => c.pdf_url);
        setMateriaisCarregados({ assuntoId: missao.assunto_id!, items: pdfs });
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [missao.assunto_id]);

  const materiaisExibidos = missao.assunto_id ? materiais : [];

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

  const handleToggleConcluir = async () => {
    const novoStatus = statusLocal === "concluida" ? "pendente" : "concluida";
    setStatusLocal(novoStatus);

    try {
      await fetch("/api/mentoria/tarefas", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tarefa_id: missao.id,
          plano_id: missao.plano_id,
          bloco_ordem: missao.bloco_ordem,
          status: novoStatus,
          concluido_em: novoStatus === "concluida" ? new Date().toISOString() : null,
        }),
      });
    } catch (err) {
      console.error("Erro ao gravar status da tarefa:", err);
    }

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

  // Classificação da Área da Disciplina para Contexto Pedagógico
  const getAreaDisciplina = (disciplinaNome?: string): "juridica" | "portugues" | "exatas" | "informatica" | "geral" => {
    if (!disciplinaNome) return "geral";
    const nome = disciplinaNome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");

    if (
      nome.includes("direito") ||
      nome.includes("legislacao") ||
      nome.includes("estatuto") ||
      nome.includes("constitucional") ||
      nome.includes("penal") ||
      nome.includes("processual") ||
      nome.includes("administrativ") ||
      nome.includes("tributario") ||
      nome.includes("previdenciario") ||
      nome.includes("eleitoral") ||
      nome.includes("criminolog") ||
      nome.includes("juridic") ||
      nome.includes("normas") ||
      nome.includes("lei") ||
      nome.includes("humanos") ||
      nome.includes("trabalho") ||
      nome.includes("civil")
    ) {
      return "juridica";
    }

    if (
      nome.includes("portugues") ||
      nome.includes("lingua portuguesa") ||
      nome.includes("redacao") ||
      nome.includes("gramatica") ||
      nome.includes("interpretacao") ||
      nome.includes("linguagens") ||
      nome.includes("literatura")
    ) {
      return "portugues";
    }

    if (
      nome.includes("raciocinio") ||
      nome.includes("logico") ||
      nome.includes("matematica") ||
      nome.includes("estatistica") ||
      nome.includes("contabilidade") ||
      nome.includes("financeir") ||
      nome.includes("fisica") ||
      nome.includes("quimica") ||
      nome.includes("rlm")
    ) {
      return "exatas";
    }

    if (
      nome.includes("informatica") ||
      nome.includes("tecnologia") ||
      nome.includes("computacao") ||
      nome.includes("dados") ||
      nome.includes("sistemas") ||
      nome.includes("redes") ||
      nome.includes("seguranca da informacao") ||
      nome.includes("programacao")
    ) {
      return "informatica";
    }

    return "geral";
  };

  // Dica Pedagógica Contextualizada por Tipo de Meta e Área da Disciplina
  const getDicaPedagogica = (tipo: MentoriaTarefaTipo, disciplinaNome?: string): string => {
    const area = getAreaDisciplina(disciplinaNome);

    if (tipo === "SIMULADO") {
      return "Simule as condições reais de prova: cronômetro ativo, sem consultas paralelas e reservando os minutos finais para o preenchimento do cartão-resposta.";
    }

    if (tipo === "TEORIA") {
      switch (area) {
        case "juridica":
          return "Estude com foco na literalidade da lei seca e nas súmulas mais recorrentes da banca. Destaque prazos, exceções e palavras-chave usando o botão Caderno para sintetizar os esquemas.";
        case "portugues":
          return "Foque nas regras gramaticais centrais e nos padrões de cobrança da banca. Analise exemplos práticos de sintaxe, concordância e pontuação, registrando casos especiais no Caderno.";
        case "exatas":
          return "Compreenda os conceitos fundamentais, propriedades lógicas e fórmulas antes de partir para atalhos. Registre o passo a passo da resolução teórica no Caderno.";
        case "informatica":
          return "Atente-se aos conceitos de arquitetura, ferramentas e sistemas operacionais. Destaque atalhos de teclado, protocolos e termos técnicos no seu Caderno.";
        default:
          return "Faça uma leitura ativa identificando os conceitos-chave e a estrutura do conteúdo. Destaque pontos centrais e anote resumos no Caderno para fixação.";
      }
    }

    if (tipo === "QUESTOES") {
      switch (area) {
        case "juridica":
          return "Resolva aplicando a letra da lei e a interpretação jurisprudencial. Ao errar, confira o dispositivo legal citado no gabarito comentado e registre no Caderno.";
        case "portugues":
          return "Analise com atenção o enunciado e os trechos do texto. Identifique o padrão de pegadinhas da banca em interpretação, reescrita de frases e tipologia textual.";
        case "exatas":
          return "Treine o raciocínio estruturado: isole os dados, identifique a fórmula e resolva com controle do tempo por questão (máximo de 2 a 3 minutos).";
        case "informatica":
          return "Foque no comportamento real das ferramentas e sistemas cobrados. Cuidado com pegadinhas que inventam botões, menus ou comandos inexistentes.";
        default:
          return "Resolva as questões mantendo ritmo de prova (máximo de 2 a 3 minutos por questão). Ao errar, leia os comentários com atenção e registre os pontos fracos no seu Caderno.";
      }
    }

    if (tipo === "REVISAO") {
      switch (area) {
        case "juridica":
          return "Pratique a recuperação ativa (active recall): tente lembrar dos artigos da lei seca, prazos e entendimentos sumulados antes de consultar as anotações do Caderno.";
        case "portugues":
          return "Revise seus resumos de regras gramaticais e casos especiais. Teste sua memória sobre regência, crase e valores semânticos de conectivos antes de abrir as notas.";
        case "exatas":
          return "Refaça as fórmulas e propriedades lógicas de memória. Resolva no rascunho ao menos um exemplo de cada modelo mental para reativar o raciocínio.";
        case "informatica":
          return "Relembre os atalhos de teclado, extensões de arquivos e protocolos de rede sem olhar o material antes de checar suas anotações.";
        default:
          return "Pratique a recuperação ativa (active recall): tente lembrar das regras, mnemônicos e exceções antes de consultar as notas. Isso fortalece a consolidação neural de longo prazo.";
      }
    }

    if (tipo === "CADERNO_ERROS") {
      switch (area) {
        case "juridica":
          return "Identifique se o erro decorreu de confusão na literalidade do texto legal ou jurisprudência. Releia o artigo com atenção e anote a fundamentação.";
        case "portugues":
          return "Analise se o erro foi por leitura apressada do enunciado ou regra sintática específica. Registre a pegadinha clássica da banca no Caderno.";
        case "exatas":
          return "Verifique a causa raiz do erro: conta, interpretação do enunciado ou aplicação errada de fórmula. Refaça a resolução passo a passo do zero.";
        case "informatica":
          return "Analise se a pegadinha envolveu versão de software ou nomenclatura técnica. Registre a funcionalidade correta no seu resumo.";
        default:
          return "Identifique a causa raiz de cada erro anterior: foi falta de atenção, pegadinha da banca ou lacuna teórica? Compreenda a fundamentação para blindar sua pontuação.";
      }
    }

    return "Mantenha o foco contínuo e cumpra o tempo estipulado para maximizar a retenção do conteúdo programático.";
  };

  // Informações Visuais por Tipo de Estudo
  const getTipoEstudoInfo = (tipo: MentoriaTarefaTipo, disciplinaNome?: string) => {
    switch (tipo) {
      case "TEORIA":
        return {
          label: "Estudo Teórico",
          icon: BookOpen,
          bgBadge: "bg-blue-600 text-white",
          boxBg: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/60",
          dica: getDicaPedagogica(tipo, disciplinaNome),
        };
      case "QUESTOES":
        return {
          label: "Exercício Prático",
          icon: HelpCircle,
          bgBadge: "bg-indigo-600 text-white",
          boxBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60",
          dica: getDicaPedagogica(tipo, disciplinaNome),
        };
      case "REVISAO":
        return {
          label: "Revisão Espaçada (SRS)",
          icon: RotateCcw,
          bgBadge: "bg-amber-600 text-white",
          boxBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60",
          dica: getDicaPedagogica(tipo, disciplinaNome),
        };
      case "CADERNO_ERROS":
        return {
          label: "Caderno de Erros",
          icon: AlertTriangle,
          bgBadge: "bg-rose-600 text-white",
          boxBg: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/60",
          dica: getDicaPedagogica(tipo, disciplinaNome),
        };
      case "SIMULADO":
        return {
          label: "Simulado de Prova",
          icon: FileCheck,
          bgBadge: "bg-purple-600 text-white",
          boxBg: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/60",
          dica: getDicaPedagogica(tipo, disciplinaNome),
        };
      default:
        return {
          label: "Estudo Dirigido",
          icon: BookOpen,
          bgBadge: "bg-slate-600 text-white",
          boxBg: "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200",
          dica: getDicaPedagogica(tipo, disciplinaNome),
        };
    }
  };

  const tipoInfo = getTipoEstudoInfo(missao.tipo, missao.disciplina_nome);
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

  const formatarDataDDMM = (dataIso?: string | null) => {
    if (!dataIso) return null;
    try {
      const parts = dataIso.slice(0, 10).split("-");
      if (parts.length === 3) return `${parts[2]}/${parts[1]}`;
    } catch {}
    return dataIso;
  };

  const estaPausado = Boolean(pausadoInfo?.pausado);
  const dataFimPausaDDMM = formatarDataDDMM(pausadoInfo?.data_fim_pausa);

  // Verificar se a meta está atrasada
  const isAtrasada = () => {
    if (estaPausado) return false;
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
          {/* Aviso de Plano Pausado */}
          {estaPausado && (
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs font-semibold">
              <PauseCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>
                {dataFimPausaDDMM
                  ? `Plano pausado até ${dataFimPausaDDMM}`
                  : "Plano pausado"}
              </span>
            </div>
          )}

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

          {/* 3. BLOCO DE AÇÕES E FERRAMENTAS INTUITIVAS */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
            {/* A. AÇÕES PRINCIPAIS DE ESTUDO (Hero Buttons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Botão 1: Ler Teoria / PDF do Assunto */}
              {materiaisExibidos.length > 0 ? (
                <a
                  href={materiaisExibidos[0].pdf_url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-rose-700 dark:text-rose-200 bg-rose-50/90 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800/80 transition-all shadow-xs group"
                  title={materiaisExibidos[0].pdf_nome || materiaisExibidos[0].titulo || "Abrir material de estudo em PDF"}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-1.5 rounded-lg bg-rose-100 dark:bg-rose-900/80 text-rose-600 dark:text-rose-300 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="text-left truncate">
                      <span className="block font-extrabold truncate">Ler Material Teórico (PDF)</span>
                      <span className="block text-[10px] font-medium text-rose-600/80 dark:text-rose-400/90">
                        {materiaisExibidos.length > 1 ? `${materiaisExibidos.length} PDFs disponíveis` : "PDF formatado com teoria"}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </a>
              ) : (
                <div className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span>Teoria do Edital</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Diretriz da Banca</span>
                </div>
              )}

              {/* Botão 2: Resolver Questões Práticas */}
              <Link
                href={
                  missao.tipo === "CADERNO_ERROS"
                    ? "/caderno-erros"
                    : missao.tipo === "SIMULADO"
                    ? "/simulados"
                    : `/questoes?disciplina_id=${missao.disciplina_id}${
                        missao.assunto_id ? `&assunto_id=${missao.assunto_id}` : ""
                      }`
                }
                className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md shadow-indigo-500/20 transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1.5 rounded-lg bg-white/20 text-white shrink-0">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div className="text-left truncate">
                    <span className="block font-extrabold truncate">
                      {missao.tipo === "CADERNO_ERROS"
                        ? "Revisar Caderno de Erros"
                        : missao.tipo === "SIMULADO"
                        ? "Fazer Simulado Completo"
                        : "Resolver Questões do Assunto"}
                    </span>
                    <span className="block text-[10px] font-medium text-indigo-100">
                      Banco oficial com comentários
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>
            </div>

            {/* B. BARRA DE FERRAMENTAS DE APOIO & PRODUTIVIDADE */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex items-center gap-2 flex-wrap">
                {/* 1. Caderno de Anotações */}
                <button
                  type="button"
                  onClick={() => setIsCadernoOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                  title="Abrir anotações e resumos pessoais para este tópico"
                >
                  <BookMarked className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Meu Caderno</span>
                  {cadernoTexto.trim() ? (
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  ) : null}
                </button>

                {/* 2. Cronômetro & Modo Foco */}
                <button
                  type="button"
                  onClick={() => setIsCronometroOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                  title="Ajustar tempo ou modo Pomodoro"
                >
                  <Timer className="w-3.5 h-3.5 text-amber-500" />
                  <span>Cronômetro & Foco</span>
                </button>

                {/* 3. Iniciar Estudo Guiado (se onIniciar presente) ou Link direto */}
                {onIniciar ? (
                  <button
                    type="button"
                    onClick={() => onIniciar(missao)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 transition-all cursor-pointer"
                    title="Iniciar cronômetro de estudo guiado agora"
                  >
                    <Play className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Iniciar Bloco</span>
                  </button>
                ) : (
                  <Link
                    href={`/mentoria/hoje?bloco=${missao.bloco_ordem}&iniciar=1`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 transition-all"
                    title="Abrir sessão de estudo guiado com cronômetro integrado"
                  >
                    <Flame className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Sessão Guiada</span>
                  </Link>
                )}

                {/* 4. Adiar Meta (se onAdiar disponível) */}
                {onAdiar && (
                  <button
                    type="button"
                    onClick={() => onAdiar(missao.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                    title="Adiar esta meta para outro momento"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                    <span>Adiar</span>
                  </button>
                )}
              </div>

              {/* 5. Alternador Rápido de Conclusão */}
              <button
                type="button"
                onClick={handleToggleConcluir}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  concluida
                    ? "bg-emerald-500 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-300"
                }`}
                title={concluida ? "Missão concluída (clique para reabrir)" : "Marcar como concluída"}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${concluida ? "text-white" : "text-slate-400"}`} />
                <span>{concluida ? "Concluída" : "Concluir"}</span>
              </button>
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
