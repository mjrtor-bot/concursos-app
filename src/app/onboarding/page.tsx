"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { Disciplina } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  GraduationCap,
  Target,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Flame,
  Zap,
  Trophy,
  UploadCloud,
  FileText,
} from "lucide-react";

interface ApiCargo {
  id: string;
  nome: string;
  escolaridade: string | null;
  vagas: number | null;
  salario: number | null;
  ativo: boolean;
  editais_concurso?: Array<{
    id: string;
    banca: string | null;
    prova_em: string | null;
    titulo: string;
    status: string;
  }>;
}

interface ApiConcurso {
  id: string;
  nome: string;
  orgao: string;
  esfera: string | null;
  uf: string | null;
  status: string;
  fonte_oficial_url: string | null;
  concurso_cargos?: ApiCargo[];
}

export default function OnboardingPage() {
  const router = useRouter();
  const { user, updateUser } = useAuth();
  const { recarregarConcursoAlvo } = useConcurso();
  const { success, error: showError } = useToast();

  const [step, setStep] = useState(1);
  const [concursos, setConcursos] = useState<ApiConcurso[]>([]);
  const [cargos, setCargos] = useState<ApiCargo[]>([]);
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [loadingDados, setLoadingDados] = useState(true);

  // Form states
  const [selectedConcursoId, setSelectedConcursoId] = useState<string>("");
  const [selectedCargoId, setSelectedCargoId] = useState<string>("");
  const [metaDiaria, setMetaDiaria] = useState<number>(30);
  const [disciplinasFoco, setDisciplinasFoco] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let ativo = true;

    async function carregarDadosIniciais() {
      setLoadingDados(true);
      try {
        const [resAlvo, resDisc] = await Promise.all([
          fetch("/api/concursos/alvo", { cache: "no-store" }).then((r) =>
            r.ok ? r.json() : { concursos: [], alvo: null }
          ),
          fetch("/api/disciplinas", { cache: "no-store" }).then((r) =>
            r.ok ? r.json() : { disciplinas: [] }
          ),
        ]);

        if (!ativo) return;

        const listaConcursos: ApiConcurso[] = resAlvo.concursos || [];
        const listaDisciplinas: Disciplina[] = resDisc.disciplinas || [];

        setConcursos(listaConcursos);
        setDisciplinas(listaDisciplinas);

        // Se já tem alvo selecionado pelo usuário ou o primeiro da lista
        const alvoAtualId = resAlvo.alvo?.concurso_id || (listaConcursos.length > 0 ? listaConcursos[0].id : "");
        setSelectedConcursoId(alvoAtualId);

        if (alvoAtualId) {
          const conc = listaConcursos.find((c) => c.id === alvoAtualId);
          const cargosValidos = (conc?.concurso_cargos || []).filter((c) => c.ativo);
          setCargos(cargosValidos);
          const cargoPadrao = resAlvo.alvo?.cargo_id || (cargosValidos.length > 0 ? cargosValidos[0].id : "");
          setSelectedCargoId(cargoPadrao);
        }

        if (user?.meta_diaria_questoes) {
          setMetaDiaria(user.meta_diaria_questoes);
        }

        // Pré-selecionar as 3 primeiras disciplinas como foco padrão
        if (listaDisciplinas.length > 0) {
          setDisciplinasFoco(listaDisciplinas.slice(0, 3).map((d) => d.id));
        }
      } catch (err) {
        console.error("Erro ao carregar dados do onboarding:", err);
      } finally {
        if (ativo) setLoadingDados(false);
      }
    }

    carregarDadosIniciais();

    return () => {
      ativo = false;
    };
  }, [user]);

  const handleConcursoChange = (concursoId: string) => {
    setSelectedConcursoId(concursoId);
    const conc = concursos.find((c) => c.id === concursoId);
    const cargosDoConcurso = (conc?.concurso_cargos || []).filter((c) => c.ativo);
    setCargos(cargosDoConcurso);
    if (cargosDoConcurso.length > 0) {
      setSelectedCargoId(cargosDoConcurso[0].id);
    } else {
      setSelectedCargoId("");
    }
  };

  const toggleDisciplina = (discId: string) => {
    setDisciplinasFoco((prev) =>
      prev.includes(discId)
        ? prev.filter((id) => id !== discId)
        : [...prev, discId]
    );
  };

  const handleFinalizar = async () => {
    setIsSubmitting(true);
    try {
      if (selectedConcursoId && selectedCargoId) {
        const resp = await fetch("/api/concursos/alvo", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            concurso_id: selectedConcursoId,
            cargo_id: selectedCargoId,
          }),
        });

        if (!resp.ok) {
          const errData = await resp.json().catch(() => ({}));
          console.warn("Aviso ao definir concurso alvo:", errData.error);
        }
      }

      await updateUser({
        concurso_alvo_id: selectedConcursoId || undefined,
        cargo_alvo_id: selectedCargoId || undefined,
        meta_diaria_questoes: metaDiaria,
      });

      if (recarregarConcursoAlvo) {
        await recarregarConcursoAlvo();
      }

      success("Perfil configurado com sucesso! Bons estudos.");
      router.push("/dashboard");
    } catch (err) {
      console.error("Erro ao salvar onboarding:", err);
      showError("Ocorreu um erro ao salvar suas preferências. Redirecionando...");
      router.push("/dashboard");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
      {/* Header com Progresso */}
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-500/20">
              C
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-slate-100 hidden sm:inline">
              Concursos<span className="text-blue-600">App</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Passo {step} de 3
            </span>
            <button
              onClick={handleFinalizar}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-4 underline"
            >
              Pular configuração
            </button>
          </div>
        </div>

        {/* Barra de Progresso visual */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div
            className={`h-1.5 rounded-full transition-all ${
              step >= 1 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-800"
            }`}
          />
          <div
            className={`h-1.5 rounded-full transition-all ${
              step >= 2 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-800"
            }`}
          />
          <div
            className={`h-1.5 rounded-full transition-all ${
              step >= 3 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-800"
            }`}
          />
        </div>
      </div>

      {/* Conteúdo Central */}
      <div className="max-w-3xl w-full mx-auto my-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/40 dark:shadow-none space-y-8">
          {/* PASSO 1: CONCURSO ALVO & CARGO */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold mb-3">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Passo 1 • Seu Foco de Aprovação
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  Qual é o seu Concurso Alvo Principal?
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Personalizaremos seu painel, simulados e estatísticas com base no edital escolhido.
                </p>
              </div>

              {/* Grid de Concursos */}
              {loadingDados ? (
                <div className="py-12 text-center text-sm text-slate-500">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  Carregando editais disponíveis...
                </div>
              ) : concursos.length === 0 ? (
                <div className="p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center space-y-3">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Nenhum concurso pré-cadastrado no momento. Você pode importar o PDF do seu edital diretamente.
                  </p>
                  <Link
                    href="/mentoria/edital/importar"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <UploadCloud className="w-4 h-4" />
                    Importar Edital (PDF)
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {concursos.map((c) => {
                    const isSelected = selectedConcursoId === c.id;
                    const banca =
                      c.concurso_cargos?.[0]?.editais_concurso?.[0]?.banca ||
                      "Banca Oficial";
                    const totalVagas = (c.concurso_cargos || []).reduce(
                      (acc, cg) => acc + (cg.vagas || 0),
                      0
                    );

                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleConcursoChange(c.id)}
                        className={`p-4 rounded-2xl border text-left transition-all relative ${
                          isSelected
                            ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                            : "bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold text-slate-900 dark:text-slate-100 text-sm line-clamp-1">
                            {c.nome}
                          </span>
                          <Badge
                            variant={
                              c.status === "publicado" || c.status === "aberto"
                                ? "success"
                                : "secondary"
                            }
                            size="sm"
                          >
                            {c.status === "publicado" || c.status === "aberto"
                              ? "Edital Ativo"
                              : "Previsto"}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium line-clamp-1">
                          {c.orgao} {c.uf ? `• ${c.uf}` : ""}
                        </p>
                        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
                          <span>Banca: {banca}</span>
                          <span>
                            {totalVagas > 0
                              ? `${totalVagas.toLocaleString("pt-BR")} vagas`
                              : "Vagas no edital"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Cargo Específico */}
              {cargos.length > 0 && (
                <div className="pt-2">
                  <label
                    htmlFor="cargoSelect"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Cargo / Especialidade Almejada:
                  </label>
                  <select
                    id="cargoSelect"
                    value={selectedCargoId}
                    onChange={(e) => setSelectedCargoId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    {cargos.map((cargo) => (
                      <option key={cargo.id} value={cargo.id}>
                        {cargo.nome}
                        {cargo.escolaridade
                          ? ` (${cargo.escolaridade.toUpperCase()})`
                          : ""}
                        {cargo.salario
                          ? ` — R$ ${cargo.salario.toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })}`
                          : ""}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Opção de Importar Meu Edital */}
              <div className="mt-3 p-4 rounded-2xl border border-dashed border-blue-300 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Não encontrou seu concurso na lista?
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Envie o PDF do seu edital para verticalizar os tópicos e montar seu plano de estudos.
                    </p>
                  </div>
                </div>
                <Link
                  href="/mentoria/edital/importar"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Importar Edital (PDF)
                </Link>
              </div>
            </div>
          )}

          {/* PASSO 2: META DIÁRIA DE ESTUDOS */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/50 border border-amber-200/60 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-full text-xs font-semibold mb-3">
                  <Target className="w-3.5 h-3.5" />
                  Passo 2 • Ritmo de Estudos
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  Defina sua Meta Diária de Questões
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  A consistência diária é o fator número 1 comprovado para a aprovação em concursos de alto nível.
                </p>
              </div>

              {/* Opções de Ritmo */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* 15 questões */}
                <button
                  type="button"
                  onClick={() => setMetaDiaria(15)}
                  className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between gap-3 ${
                    metaDiaria === 15
                      ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                      : "bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-slate-100 text-base">
                      Moderado
                    </span>
                    <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 block my-1">
                      15
                    </span>
                    <span className="text-xs text-slate-500 block">
                      questões / dia (~30 min)
                    </span>
                  </div>
                </button>

                {/* 30 questões (Recomendado) */}
                <button
                  type="button"
                  onClick={() => setMetaDiaria(30)}
                  className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between gap-3 relative ${
                    metaDiaria === 30
                      ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                      : "bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="absolute -top-2.5 px-2.5 py-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-[10px] font-bold shadow-xs">
                    Recomendado
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-slate-100 text-base">
                      Focado
                    </span>
                    <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 block my-1">
                      30
                    </span>
                    <span className="text-xs text-slate-500 block">
                      questões / dia (~1 hora)
                    </span>
                  </div>
                </button>

                {/* 50 questões */}
                <button
                  type="button"
                  onClick={() => setMetaDiaria(50)}
                  className={`p-5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between gap-3 ${
                    metaDiaria === 50
                      ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                      : "bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-slate-100 text-base">
                      Intensivo
                    </span>
                    <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 block my-1">
                      50+
                    </span>
                    <span className="text-xs text-slate-500 block">
                      questões / dia (~2 horas)
                    </span>
                  </div>
                </button>
              </div>

              {/* Dica de Gamificação */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                <span>
                  Ao bater sua meta diária, você mantém sua <strong>Ofensiva de Estudos ativa</strong> e acumula pontos de maestria no ranking da plataforma!
                </span>
              </div>
            </div>
          )}

          {/* PASSO 3: DISCIPLINAS PRIORITÁRIAS */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/60 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-semibold mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  Passo 3 • Matérias Prioritárias
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                  Quais disciplinas você quer priorizar agora?
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Selecione as matérias que você quer ver em destaque no seu painel de estudos inicial.
                </p>
              </div>

              {/* Grid de Disciplinas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                {disciplinas.map((disc) => {
                  const isChecked = disciplinasFoco.includes(disc.id);
                  return (
                    <button
                      key={disc.id}
                      type="button"
                      onClick={() => toggleDisciplina(disc.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isChecked
                          ? "bg-blue-50/80 dark:bg-blue-950/50 border-blue-500 ring-1 ring-blue-500"
                          : "bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">
                          {disc.nome}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200/50 dark:border-blue-900/50 text-[11px] text-blue-700 dark:text-blue-300">
                Você terá acesso irrestrito a todas as matérias e assuntos no Banco de Questões e Simulados a qualquer momento.
              </div>
            </div>
          )}

          {/* Botões de Ação Inferiores */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            {step > 1 ? (
              <Button
                variant="outline"
                onClick={() => setStep((s) => s - 1)}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Voltar
              </Button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button
                variant="primary"
                onClick={() => setStep((s) => s + 1)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continuar
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleFinalizar}
                isLoading={isSubmitting}
                rightIcon={<CheckCircle2 className="w-4 h-4" />}
              >
                Concluir e Ir para o Painel
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Footer minimalista */}
      <div className="max-w-3xl w-full mx-auto text-center text-xs text-slate-400">
        © 2026 ConcursosApp • Plataforma Inteligente para Concursos Públicos
      </div>
    </div>
  );
}
