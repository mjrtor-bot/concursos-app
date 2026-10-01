"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  FileText,
  ArrowLeft,
  Search,
  Filter,
  CheckCircle2,
  Circle,
  AlertCircle,
  Layers,
  Sparkles,
  BookOpen,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Check,
  Clock,
  Flame,
  Award,
  BarChart2,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { MentoriaService } from "@/services/mentoriaService";
import {
  MentoriaPerfil,
  EditalVerticalizadoResumo,
  EditalVerticalizadoItem,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

type StatusFiltro = "todos" | "nao_iniciado" | "estudando" | "revisando" | "dominado";
type PesoFiltro = "todos" | "baixo" | "medio" | "alto" | "critico";

export default function MentoriaEditalPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [alvoOficial, setAlvoOficial] = useState<{ concurso:string; cargo:string; edital:string; fonte:string } | null>(null);
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [resumoEdital, setResumoEdital] = useState<EditalVerticalizadoResumo | null>(null);
  const [loading, setLoading] = useState(true);
  const [atualizandoTopico, setAtualizandoTopico] = useState<string | null>(null);

  // Filtros e busca
  const [busca, setBusca] = useState("");
  const [filtroDisciplina, setFiltroDisciplina] = useState<string>("todas");
  const [filtroStatus, setFiltroStatus] = useState<StatusFiltro>("todos");
  const [filtroPeso, setFiltroPeso] = useState<PesoFiltro>("todos");
  const [disciplinasAbertas, setDisciplinasAbertas] = useState<Record<string, boolean>>({});

  const carregarDados = async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const [p, edital, alvoResp] = await Promise.all([
        MentoriaService.getPerfil(user.id),
        MentoriaService.getEditalVerticalizado(user.id),
        fetch("/api/concursos/alvo", { cache: "no-store" }).then(r => r.ok ? r.json() : null),
      ]);
      setPerfil(p);
      setResumoEdital(edital);
      if (alvoResp?.alvo) {
        const c = (alvoResp.concursos || []).find((x: any) => x.id === alvoResp.alvo.concurso_id);
        const cargo = c?.concurso_cargos?.find((x: any) => x.id === alvoResp.alvo.cargo_id);
        const ed = cargo?.editais_concurso?.find((x: any) => x.id === alvoResp.alvo.edital_id);
        setAlvoOficial(c && cargo && ed ? { concurso: c.nome, cargo: cargo.nome, edital: ed.numero ? `${ed.numero} — ${ed.titulo}` : ed.titulo, fonte: ed.fonte_oficial_url } : null);
      } else setAlvoOficial(null);

      // Abrir todas as disciplinas por padrão
      const abertas: Record<string, boolean> = {};
      edital.disciplinas.forEach((d) => {
        abertas[d.disciplina_id] = true;
      });
      setDisciplinasAbertas(abertas);
    } catch (err) {
      console.error("Erro ao carregar edital verticalizado:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, [user]);

  const toggleDisciplina = (disciplinaId: string) => {
    setDisciplinasAbertas((prev) => ({
      ...prev,
      [disciplinaId]: !prev[disciplinaId],
    }));
  };

  const handleAlterarStatus = async (
    item: EditalVerticalizadoItem,
    novoStatus: "nao_iniciado" | "estudando" | "revisando" | "dominado"
  ) => {
    if (!user || item.status === novoStatus) return;

    setAtualizandoTopico(item.id);

    // Otimista: atualizar estado local imediatamente
    setResumoEdital((prev) => {
      if (!prev) return prev;

      const novasDisciplinas = prev.disciplinas.map((disc) => {
        if (disc.disciplina_id !== item.disciplina_id) return disc;

        const novosTopicos = disc.topicos.map((topico) => {
          if (topico.assunto_id !== item.assunto_id) return topico;
          const novoDominio =
            novoStatus === "dominado"
              ? 100
              : novoStatus === "revisando"
              ? Math.max(70, topico.percentual_dominio)
              : novoStatus === "estudando"
              ? Math.max(30, topico.percentual_dominio)
              : 0;

          return {
            ...topico,
            status: novoStatus,
            estudado: novoStatus !== "nao_iniciado",
            percentual_dominio: novoDominio,
          };
        });

        const estudados = novosTopicos.filter((t) => t.status !== "nao_iniciado").length;
        const dominados = novosTopicos.filter((t) => t.status === "dominado").length;
        const conclusao = Math.round((estudados / Math.max(1, novosTopicos.length)) * 100);

        return {
          ...disc,
          topicos: novosTopicos,
          topicos_estudados: estudados,
          topicos_dominados: dominados,
          percentual_conclusao: conclusao,
        };
      });

      const totalTopicos = prev.total_topicos;
      const estudadosGeral = novasDisciplinas.reduce((acc, d) => acc + d.topicos_estudados, 0);
      const dominadosGeral = novasDisciplinas.reduce((acc, d) => acc + d.topicos_dominados, 0);
      const conclusaoGeral = Math.round((estudadosGeral / Math.max(1, totalTopicos)) * 100);

      return {
        ...prev,
        disciplinas: novasDisciplinas,
        topicos_estudados: estudadosGeral,
        topicos_dominados: dominadosGeral,
        percentual_conclusao: conclusaoGeral,
      };
    });

    try {
      await MentoriaService.atualizarTopicoStatus(
        user.id,
        item.disciplina_id,
        item.assunto_id,
        novoStatus
      );
    } catch (err) {
      console.error("Erro ao persistir status do tópico:", err);
      // Recarregar dados se falhar
      carregarDados();
    } finally {
      setAtualizandoTopico(null);
    }
  };

  // Filtragem dos tópicos
  const disciplinasFiltradas = useMemo(() => {
    if (!resumoEdital) return [];

    return resumoEdital.disciplinas
      .filter((d) => filtroDisciplina === "todas" || d.disciplina_id === filtroDisciplina)
      .map((disc) => {
        const topicosFiltrados = disc.topicos.filter((item) => {
          // Busca textual
          if (busca.trim()) {
            const termo = busca.toLowerCase();
            const matchNome = item.assunto_nome.toLowerCase().includes(termo);
            const matchDisc = item.disciplina_nome.toLowerCase().includes(termo);
            if (!matchNome && !matchDisc) return false;
          }

          // Filtro de status
          if (filtroStatus !== "todos" && item.status !== filtroStatus) {
            return false;
          }

          // Filtro de peso
          if (filtroPeso !== "todos" && item.peso !== filtroPeso) {
            return false;
          }

          return true;
        });

        return {
          ...disc,
          topicos: topicosFiltrados,
        };
      })
      .filter((d) => d.topicos.length > 0);
  }, [resumoEdital, busca, filtroDisciplina, filtroStatus, filtroPeso]);

  const getStatusBadge = (status: EditalVerticalizadoItem["status"]) => {
    switch (status) {
      case "dominado":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Dominado
          </span>
        );
      case "revisando":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Revisando
          </span>
        );
      case "estudando":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Estudando
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            <Circle className="w-3 h-3 text-slate-400" />
            Não Iniciado
          </span>
        );
    }
  };

  const getPesoBadge = (peso: EditalVerticalizadoItem["peso"]) => {
    switch (peso) {
      case "critico":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <Flame className="w-3 h-3 text-rose-600 dark:text-rose-400" />
            Crítico
          </span>
        );
      case "alto":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            Alto
          </span>
        );
      case "baixo":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Baixo
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Médio
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          Carregando Matriz do Edital Verticalizado...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 px-4 sm:px-6">
      {/* Topo / Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/mentoria"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a Mentoria
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={carregarDados}
            leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
          >
            Sincronizar
          </Button>
          <Link href="/mentoria/hoje">
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold">
              Estudo de Hoje
            </Button>
          </Link>
        </div>
      </div>

      {/* Header Principal */}
      <div className="p-6 sm:p-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Conteúdo oficial do edital selecionado</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
            Edital Verticalizado
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            {alvoOficial
              ? `${alvoOficial.concurso} — ${alvoOficial.cargo}. Edital: ${alvoOficial.edital}. O progresso considera somente os tópicos vinculados a esse edital.`
              : "Selecione um concurso, cargo e edital oficial no Perfil para carregar o conteúdo programático."}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Cobertura do Edital
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
              {resumoEdital?.percentual_conclusao || 0}%
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              ({resumoEdital?.topicos_estudados || 0}/{resumoEdital?.total_topicos || 0} tópicos)
            </span>
          </div>
        </div>
      </div>

      {!alvoOficial && (
        <Card className="border-dashed border-2 border-amber-300 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
          <CardContent className="p-6 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
            <h2 className="font-bold text-slate-900 dark:text-slate-100">Defina seu concurso alvo</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">O Edital Verticalizado não usa mais uma matriz policial genérica. Escolha um concurso, cargo e edital oficial no Perfil.</p>
            <Button onClick={() => router.push("/perfil")}>Ir para o Perfil</Button>
          </CardContent>
        </Card>
      )}
      {alvoOficial && <div className="flex flex-wrap items-center gap-3 text-sm"><a href={alvoOficial.fonte} target="_blank" rel="noreferrer" className="font-semibold text-indigo-600 hover:underline">Abrir fonte oficial do edital</a><Link href="/mentoria/edital/biblioteca" className="font-semibold text-slate-600 hover:text-indigo-600">Consultar biblioteca de editais</Link><Link href="/mentoria/edital/importados" className="font-semibold text-indigo-600 hover:underline">Meus editais importados</Link></div>}

      {/* 5 Cards de Métricas e KPIs Globais */}
      {resumoEdital && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
            <CardContent className="p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                <span className="text-xs font-semibold">Total de Tópicos</span>
                <Layers className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 dark:text-slate-100">
                  {resumoEdital.total_topicos}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Mapeados no edital
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
            <CardContent className="p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                <span className="text-xs font-semibold">Tópicos Estudados</span>
                <BookOpen className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                  {resumoEdital.topicos_estudados}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {resumoEdital.percentual_conclusao}% do edital
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
            <CardContent className="p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                <span className="text-xs font-semibold">Tópicos Dominados</span>
                <Award className="w-4 h-4 text-emerald-500" />
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {resumoEdital.topicos_dominados}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  ≥ 80% de acertos
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
            <CardContent className="p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                <span className="text-xs font-semibold">Taxa de Acerto</span>
                <TrendingUp className="w-4 h-4 text-amber-500" />
              </div>
              <div>
                <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                  {resumoEdital.taxa_acerto_global}%
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Média geral em questões
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2 sm:col-span-1 bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
            <CardContent className="p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                <span className="text-xs font-semibold">Progresso Global</span>
                <BarChart2 className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-1.5 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, resumoEdital.percentual_conclusao)}%` }}
                  />
                </div>
                <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  {resumoEdital.topicos_estudados} de {resumoEdital.total_topicos} concluídos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Barra de Filtros e Busca */}
      <Card className="bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800">
        <CardContent className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Input de Busca */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar assunto ou disciplina no edital..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              {busca && (
                <button
                  onClick={() => setBusca("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Filtro por Disciplina */}
            <div className="w-full sm:w-auto">
              <select
                value={filtroDisciplina}
                onChange={(e) => setFiltroDisciplina(e.target.value)}
                className="w-full sm:w-56 px-3 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              >
                <option value="todas">Todas as Disciplinas</option>
                {resumoEdital?.disciplinas.map((d) => (
                  <option key={d.disciplina_id} value={d.disciplina_id}>
                    {d.disciplina_nome} ({d.topicos.length})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filtros em Pílulas */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            {/* Status */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-500 font-semibold mr-1">Status:</span>
              {(
                [
                  { key: "todos", label: "Todos" },
                  { key: "nao_iniciado", label: "Não Iniciados" },
                  { key: "estudando", label: "Estudando" },
                  { key: "revisando", label: "Revisando" },
                  { key: "dominado", label: "Dominados" },
                ] as const
              ).map((item) => (
                <button
                  key={item.key}
                  onClick={() => setFiltroStatus(item.key)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    filtroStatus === item.key
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Peso */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-500 font-semibold mr-1">Importância:</span>
              {(
                [
                  { key: "todos", label: "Todas" },
                  { key: "critico", label: "Crítica" },
                  { key: "alto", label: "Alta" },
                  { key: "medio", label: "Média" },
                ] as const
              ).map((item) => (
                <button
                  key={item.key}
                  onClick={() => setFiltroPeso(item.key)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    filtroPeso === item.key
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Disciplinas e Tópicos */}
      {disciplinasFiltradas.length === 0 ? (
        <Card className="border-dashed border-2 border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <CardContent className="p-8 text-center space-y-3">
            <SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              Nenhum tópico encontrado
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Nenhum tópico corresponde aos filtros selecionados. Tente ajustar os filtros de busca, status ou disciplina.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setBusca("");
                setFiltroDisciplina("todas");
                setFiltroStatus("todos");
                setFiltroPeso("todos");
              }}
            >
              Limpar Filtros
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {disciplinasFiltradas.map((disc) => {
            const isAberta = !!disciplinasAbertas[disc.disciplina_id];

            return (
              <div
                key={disc.disciplina_id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                {/* Cabeçalho da Disciplina (Accordion Trigger) */}
                <div
                  onClick={() => toggleDisciplina(disc.disciplina_id)}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-base shrink-0">
                      {disc.disciplina_nome.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        {disc.disciplina_nome}
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {disc.topicos.length} tópicos
                        </span>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {disc.topicos_estudados} estudados • {disc.topicos_dominados} dominados • Taxa de acerto média: {disc.taxa_acerto_media}%
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Barra de Progresso da Disciplina */}
                    <div className="w-32 sm:w-44 hidden sm:block text-right">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        <span>Progresso</span>
                        <span>{disc.percentual_conclusao}%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(100, disc.percentual_conclusao)}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      {isAberta ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Tabela/Lista de Tópicos do Edital */}
                {isAberta && (
                  <div className="border-t border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/80 bg-slate-50/30 dark:bg-slate-950/20">
                    {disc.topicos.map((item, idx) => (
                      <div
                        key={item.id}
                        className="p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-white dark:hover:bg-slate-850/60 transition-colors"
                      >
                        {/* Lado Esquerdo: Info do Tópico */}
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <span className="text-xs font-bold text-slate-400 mt-1 shrink-0 w-6">
                            #{idx + 1}
                          </span>

                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                                {item.assunto_nome}
                              </span>
                              {getPesoBadge(item.peso)}
                              {getStatusBadge(item.status)}
                            </div>

                            {/* Estatísticas de Questões do Tópico */}
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                              <span>
                                <strong className="text-slate-700 dark:text-slate-300">
                                  {item.questoes_respondidas}
                                </strong>{" "}
                                questões resolvidas
                              </span>
                              {item.questoes_respondidas > 0 && (
                                <>
                                  <span>•</span>
                                  <span>
                                    <strong className="text-emerald-600 dark:text-emerald-400">
                                      {item.questoes_acertadas}
                                    </strong>{" "}
                                    acertos ({item.taxa_acerto}%)
                                  </span>
                                </>
                              )}
                              <span>•</span>
                              <span>Incidência aprox.: {item.incidencia_percentual}%</span>
                            </div>

                            {/* Barra de Domínio do Tópico */}
                            <div className="flex items-center gap-2 pt-1 max-w-xs">
                              <div className="w-full bg-slate-200 dark:bg-slate-700/80 rounded-full h-1.5 overflow-hidden">
                                <div
                                  className={`h-1.5 rounded-full transition-all duration-300 ${
                                    item.status === "dominado"
                                      ? "bg-emerald-500"
                                      : item.status === "revisando"
                                      ? "bg-amber-500"
                                      : item.status === "estudando"
                                      ? "bg-blue-500"
                                      : "bg-slate-300 dark:bg-slate-600"
                                  }`}
                                  style={{ width: `${Math.min(100, item.percentual_dominio)}%` }}
                                />
                              </div>
                              <span className="text-[10px] font-bold text-slate-500 shrink-0">
                                {item.percentual_dominio}% domínio
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Lado Direito: Ações & Seletor de Status */}
                        <div className="flex items-center justify-between md:justify-end gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                          {/* Seletor Rápido de Status */}
                          <div className="flex items-center bg-white dark:bg-slate-800 rounded-xl p-1 border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                            {(
                              [
                                { key: "nao_iniciado", label: "Não Iniciado", title: "Marcar como Não Iniciado" },
                                { key: "estudando", label: "Estudando", title: "Marcar como Estudando" },
                                { key: "revisando", label: "Revisando", title: "Marcar como Revisando" },
                                { key: "dominado", label: "Dominado", title: "Marcar como Dominado" },
                              ] as const
                            ).map((st) => {
                              const isAtivo = item.status === st.key;
                              return (
                                <button
                                  key={st.key}
                                  onClick={() => handleAlterarStatus(item, st.key)}
                                  disabled={atualizandoTopico === item.id}
                                  title={st.title}
                                  className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                                    isAtivo
                                      ? st.key === "dominado"
                                        ? "bg-emerald-600 text-white shadow-2xs"
                                        : st.key === "revisando"
                                        ? "bg-amber-600 text-white shadow-2xs"
                                        : st.key === "estudando"
                                        ? "bg-blue-600 text-white shadow-2xs"
                                        : "bg-slate-600 text-white shadow-2xs"
                                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                                  }`}
                                >
                                  {st.label}
                                </button>
                              );
                            })}
                          </div>

                          {/* Botão Praticar Questões do Tópico */}
                          <Link
                            href={`/questoes?disciplina=${item.disciplina_id}&assunto=${item.assunto_id}`}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs font-bold hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 hover:border-indigo-300"
                              leftIcon={<HelpCircle className="w-3.5 h-3.5 text-indigo-500" />}
                            >
                              Praticar
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Box de Orientação Pedagógica Policial */}
      <div className="p-5 rounded-2xl bg-linear-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
            Diretriz da Mentoria: Como Dominar o Edital Verticalizado
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Priorize tópicos marcados como <strong className="text-rose-600 dark:text-rose-400 font-bold">Críticos</strong> e <strong className="text-amber-600 dark:text-amber-400 font-bold">Altos</strong>. Ao resolver pelo menos 15 questões com taxa de acerto $\ge 80\%$, o algoritmo eleva o status para <em>Dominado</em> automaticamente, inserindo o tópico no ciclo de <strong>Revisão Espaçada (SRS)</strong> a cada 30 dias para evitar a curva do esquecimento.
          </p>
        </div>
      </div>
    </div>
  );
}
