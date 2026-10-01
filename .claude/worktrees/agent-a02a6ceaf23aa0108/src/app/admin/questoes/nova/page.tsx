"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  PlusCircle,
  Save,
  Eye,
  Sparkles,
  ShieldCheck,
  Building2,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { Questao, Alternativa, Disciplina, Assunto, QuestaoTipo, QuestaoDificuldade } from "@/types";
import { DataService } from "@/services/dataService";
import { mockDisciplinas, mockAssuntos } from "@/data/mockData";
import { gerarFingerprintQuestao } from "@/services/questionFingerprint";
import { QuestionCard } from "@/components/questoes/QuestionCard";
import { Button } from "@/components/ui/Button";

export default function AdminNovaQuestaoPage() {
  const router = useRouter();

  const [disciplinas, setDisciplinas] = useState<Disciplina[]>(mockDisciplinas);
  const [assuntos, setAssuntos] = useState<Assunto[]>(mockAssuntos);

  // Form State
  const [disciplinaId, setDisciplinaId] = useState("");
  const [assuntoId, setAssuntoId] = useState("");
  const [banca, setBanca] = useState("FGV");
  const [ano, setAno] = useState<number>(new Date().getFullYear());
  const [orgao, setOrgao] = useState("Tribunal de Justiça");
  const [cargo, setCargo] = useState("Analista Judiciário");
  const [tipo, setTipo] = useState<QuestaoTipo>("multipla_escolha");
  const [dificuldade, setDificuldade] = useState<QuestaoDificuldade>("medio");
  const [enunciado, setEnunciado] = useState("");
  const [textoApoio, setTextoApoio] = useState("");
  const [explicacao, setExplicacao] = useState("");

  // Alternativas (para múltipla escolha)
  const [alternativasME, setAlternativasME] = useState<Array<{ letra: "A" | "B" | "C" | "D" | "E"; texto: string }>>([
    { letra: "A", texto: "" },
    { letra: "B", texto: "" },
    { letra: "C", texto: "" },
    { letra: "D", texto: "" },
    { letra: "E", texto: "" },
  ]);
  const [gabaritoME, setGabaritoME] = useState<"A" | "B" | "C" | "D" | "E">("A");

  // Alternativa (para Certo / Errado)
  const [gabaritoCE, setGabaritoCE] = useState<"certo" | "errado">("certo");

  // Metadados de IA e Auditoria
  const [isAutoralIA, setIsAutoralIA] = useState(false);
  const [modeloIA, setModeloIA] = useState("Claude 3.5 Sonnet");
  const [promptVersao, setPromptVersao] = useState("v2.1");
  const [revisadaEspecialista, setRevisadaEspecialista] = useState(true);

  // Status & Erros
  const [erroValidacao, setErroValidacao] = useState<string | null>(null);
  const [duplicataDetectada, setDuplicataDetectada] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    try {
      const discs = DataService.getDisciplinas();
      if (discs && discs.length > 0) {
        setDisciplinas(discs);
        setDisciplinaId(discs[0].id);
      }
      const ass = DataService.getAssuntos();
      if (ass && ass.length > 0) {
        setAssuntos(ass);
      }
    } catch {
      // fallback
    }
  }, []);

  const assuntosFiltrados = assuntos.filter((a) => !disciplinaId || a.disciplina_id === disciplinaId);

  useEffect(() => {
    if (assuntosFiltrados.length > 0 && (!assuntoId || !assuntosFiltrados.some((a) => a.id === assuntoId))) {
      setAssuntoId(assuntosFiltrados[0].id);
    }
  }, [disciplinaId, assuntosFiltrados, assuntoId]);

  // Montagem da Questão Preview
  const montarQuestaoObjeto = (): Questao => {
    let alternativasMontadas: Alternativa[] = [];

    if (tipo === "multipla_escolha") {
      alternativasMontadas = alternativasME.map((alt, idx) => ({
        id: `alt_prev_${idx + 1}`,
        letra: alt.letra,
        texto: alt.texto || `Texto da Alternativa ${alt.letra}`,
        correta: gabaritoME === alt.letra,
        ordem: idx + 1,
      }));
    } else {
      alternativasMontadas = [
        {
          id: "alt_ce_1",
          letra: "A",
          texto: "Certo",
          correta: gabaritoCE === "certo",
          ordem: 1,
        },
        {
          id: "alt_ce_2",
          letra: "B",
          texto: "Errado",
          correta: gabaritoCE === "errado",
          ordem: 2,
        },
      ];
    }

    const fingerprint_hash = gerarFingerprintQuestao({
      enunciado: enunciado || "Exemplo de enunciado",
      tipo,
      banca,
      ano,
      orgao,
      alternativas: alternativasMontadas,
    });

    return {
      id: `q_preview_${Date.now()}`,
      disciplina_id: disciplinaId || "disc_dir_const",
      assunto_id: assuntoId || "ass_dc_dir_fund",
      enunciado: enunciado || "Enunciado da questão em preenchimento...",
      tipo,
      dificuldade,
      banca,
      ano,
      orgao,
      cargo,
      explicacao: explicacao || "Resolução comentada do professor especialista.",
      texto_apoio: textoApoio || undefined,
      alternativas: alternativasMontadas,
      is_autoral_ia: isAutoralIA,
      modelo_ia: isAutoralIA ? modeloIA : null,
      prompt_versao: isAutoralIA ? promptVersao : null,
      revisada_por_especialista: revisadaEspecialista,
      anulada: false,
      desatualizada: false,
      versao: 1,
      fingerprint_hash,
      created_at: new Date().toISOString(),
    };
  };

  // Checagem de duplicidade em tempo real
  useEffect(() => {
    if (!enunciado || enunciado.length < 15) {
      setDuplicataDetectada(null);
      return;
    }
    const questaoObj = montarQuestaoObjeto();
    const todas = DataService.getTodasQuestoes();
    const hash = questaoObj.fingerprint_hash;
    const existente = todas.find((q) => q.fingerprint_hash === hash);

    if (existente) {
      setDuplicataDetectada(`Uma questão idêntica já existe no catálogo (ID: ${existente.id.substring(0, 8)}...).`);
    } else {
      setDuplicataDetectada(null);
    }
  }, [enunciado, tipo, banca, ano, orgao, alternativasME, gabaritoME, gabaritoCE]);

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    setErroValidacao(null);

    // Validações
    if (!enunciado || enunciado.trim().length < 10) {
      setErroValidacao("O enunciado da questão deve ter no mínimo 10 caracteres.");
      return;
    }

    if (!explicacao || explicacao.trim().length < 5) {
      setErroValidacao("A resolução comentada / explicação é obrigatória.");
      return;
    }

    if (tipo === "multipla_escolha") {
      const vazias = alternativasME.filter((a) => !a.texto.trim());
      if (vazias.length > 0) {
        setErroValidacao("Todas as 5 alternativas de múltipla escolha devem ser preenchidas.");
        return;
      }
    }

    if (duplicataDetectada) {
      if (!confirm("Aviso: Esta questão possui uma assinatura idêntica a outra já cadastrada. Deseja cadastrar mesmo assim?")) {
        return;
      }
    }

    setSalvando(true);

    try {
      const novaQuestao = montarQuestaoObjeto();
      novaQuestao.id = `q_custom_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      novaQuestao.created_at = new Date().toISOString();

      DataService.salvarQuestao(novaQuestao);
      setSucesso(true);

      setTimeout(() => {
        router.push("/admin/questoes");
      }, 1500);
    } catch (err: any) {
      setErroValidacao(err.message || "Erro ao salvar a questão no banco de dados.");
      setSalvando(false);
    }
  };

  const questaoPreview = montarQuestaoObjeto();

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-16">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <Link
            href="/admin/questoes"
            className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center gap-1 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para Gestão do Catálogo
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-2">
            <PlusCircle className="w-6 h-6 text-blue-600" />
            Cadastrar Nova Questão
          </h1>
        </div>
      </div>

      {sucesso && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-200 font-bold">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          Questão cadastrada com sucesso! Redirecionando para o catálogo...
        </div>
      )}

      {erroValidacao && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 rounded-2xl flex items-center gap-3 text-rose-800 dark:text-rose-200 font-medium">
          <AlertCircle className="w-6 h-6 text-rose-600 shrink-0" />
          {erroValidacao}
        </div>
      )}

      {duplicataDetectada && (
        <div className="p-4 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 rounded-2xl flex items-center gap-3 text-amber-800 dark:text-amber-200 text-xs font-medium">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          {duplicataDetectada}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Formulário */}
        <form onSubmit={handleSalvar} className="lg:col-span-7 space-y-6">
          {/* Seção 1: Origem e Metadados Éticos */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              Origem & Classificação da Questão
            </h3>

            {/* Toggle Prova Oficial vs IA */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsAutoralIA(false)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  !isAutoralIA
                    ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100 ring-2 ring-blue-500/20"
                    : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                }`}
              >
                <span className="font-bold text-xs block flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-600" /> Prova Oficial
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Concurso público anterior com fonte oficial
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsAutoralIA(true)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isAutoralIA
                    ? "border-purple-600 bg-purple-50/50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-100 ring-2 ring-purple-500/20"
                    : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                }`}
              >
                <span className="font-bold text-xs block flex items-center gap-1.5 text-purple-700 dark:text-purple-300">
                  <Sparkles className="w-4 h-4 text-purple-600" /> Questão Autoral / IA
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Identificação explícita de autoria e modelo
                </span>
              </button>
            </div>

            {isAutoralIA && (
              <div className="grid grid-cols-2 gap-3 p-3 bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 rounded-xl text-xs">
                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Modelo de IA Empregado
                  </label>
                  <input
                    type="text"
                    value={modeloIA}
                    onChange={(e) => setModeloIA(e.target.value)}
                    placeholder="Ex: Claude 3.5 Sonnet"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Versão do Prompt / Template
                  </label>
                  <input
                    type="text"
                    value={promptVersao}
                    onChange={(e) => setPromptVersao(e.target.value)}
                    placeholder="Ex: v2.1"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs"
                  />
                </div>
              </div>
            )}

            {/* Disciplina e Assunto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Disciplina *
                </label>
                <select
                  value={disciplinaId}
                  onChange={(e) => setDisciplinaId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 font-medium"
                >
                  {disciplinas.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Assunto *
                </label>
                <select
                  value={assuntoId}
                  onChange={(e) => setAssuntoId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                >
                  {assuntosFiltrados.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Banca, Órgão, Cargo, Ano */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Banca</label>
                <input
                  type="text"
                  value={banca}
                  onChange={(e) => setBanca(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 font-medium"
                />
              </div>
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Ano</label>
                <input
                  type="number"
                  value={ano}
                  onChange={(e) => setAno(Number(e.target.value))}
                  min={1990}
                  max={2035}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                />
              </div>
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Órgão</label>
                <input
                  type="text"
                  value={orgao}
                  onChange={(e) => setOrgao(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                />
              </div>
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Cargo</label>
                <input
                  type="text"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            {/* Modalidade e Dificuldade */}
            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Modalidade</label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as QuestaoTipo)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 font-medium"
                >
                  <option value="multipla_escolha">Múltipla Escolha (A, B, C, D, E)</option>
                  <option value="certo_errado">Certo ou Errado</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Dificuldade</label>
                <select
                  value={dificuldade}
                  onChange={(e) => setDificuldade(e.target.value as QuestaoDificuldade)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 font-medium"
                >
                  <option value="facil">Fácil</option>
                  <option value="medio">Média</option>
                  <option value="dificil">Difícil</option>
                </select>
              </div>
            </div>
          </div>

          {/* Seção 2: Enunciado e Texto de Apoio */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Enunciado & Conteúdo
            </h3>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Texto de Apoio / Legislação de Referência (Opcional)
              </label>
              <textarea
                rows={3}
                value={textoApoio}
                onChange={(e) => setTextoApoio(e.target.value)}
                placeholder="Insira trechos de leis, excertos doutrinários ou casos hipotéticos introdutórios..."
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Enunciado da Questão *
              </label>
              <textarea
                rows={4}
                required
                value={enunciado}
                onChange={(e) => setEnunciado(e.target.value)}
                placeholder="Digite o comando da questão com clareza..."
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 font-medium leading-relaxed"
              />
            </div>
          </div>

          {/* Seção 3: Alternativas e Gabarito */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Alternativas & Gabarito Oficial
              </h3>
              <span className="text-[11px] text-slate-500">Selecione o botão de rádio da alternativa correta</span>
            </div>

            {tipo === "multipla_escolha" ? (
              <div className="space-y-3">
                {alternativasME.map((alt, index) => (
                  <div
                    key={alt.letra}
                    className={`flex items-start gap-2.5 p-2.5 rounded-xl border transition-all ${
                      gabaritoME === alt.letra
                        ? "border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20"
                        : "border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <label className="flex items-center gap-1.5 cursor-pointer pt-2 shrink-0">
                      <input
                        type="radio"
                        name="gabarito_me"
                        checked={gabaritoME === alt.letra}
                        onChange={() => setGabaritoME(alt.letra)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                          gabaritoME === alt.letra
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {alt.letra}
                      </span>
                    </label>

                    <input
                      type="text"
                      required
                      placeholder={`Texto da alternativa (${alt.letra})...`}
                      value={alt.texto}
                      onChange={(e) => {
                        const novo = [...alternativasME];
                        novo[index].texto = e.target.value;
                        setAlternativasME(novo);
                      }}
                      className="flex-1 px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setGabaritoCE("certo")}
                  className={`p-4 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
                    gabaritoCE === "certo"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Gabarito: CERTO
                </button>

                <button
                  type="button"
                  onClick={() => setGabaritoCE("errado")}
                  className={`p-4 rounded-xl border text-center font-bold text-sm transition-all cursor-pointer ${
                    gabaritoCE === "errado"
                      ? "bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-500/20"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Gabarito: ERRADO
                </button>
              </div>
            )}
          </div>

          {/* Seção 4: Resolução Comentada */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Resolução Comentada / Justificativa *
            </h3>

            <div>
              <textarea
                rows={4}
                required
                value={explicacao}
                onChange={(e) => setExplicacao(e.target.value)}
                placeholder="Fundamentação teórica completa do gabarito oficial com citações de artigos ou súmulas..."
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 leading-relaxed"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="check_revisao"
                checked={revisadaEspecialista}
                onChange={(e) => setRevisadaEspecialista(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <label htmlFor="check_revisao" className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Marcar como conferida e validada por especialista
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <Link href="/admin/questoes">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </Link>

            <Button
              type="submit"
              disabled={salvando}
              className="flex items-center gap-2 shadow-md shadow-blue-500/20"
            >
              <Save className="w-4 h-4" />
              {salvando ? "Cadastrando..." : "Cadastrar Questão no Catálogo"}
            </Button>
          </div>
        </form>

        {/* Live Preview Lateral */}
        <div className="lg:col-span-5 space-y-4">
          <div className="sticky top-20">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <Eye className="w-4 h-4 text-blue-600" />
              Pré-Visualização do Aluno em Tempo Real
            </div>

            <div className="bg-slate-50/50 dark:bg-slate-950/30 p-2 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
              <QuestionCard
                questao={questaoPreview}
                numeroQuestao={1}
                totalQuestoes={1}
                onRespostaSalva={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
