"use client";

import React, { useEffect, useState, useRef } from "react";
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
  Award,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  TrendingUp,
  Check,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import {
  MentoriaPerfil,
  MentoriaCicloPlanoCompleto,
  MentoriaCicloItem,
  MentoriaCicloStatusSessao,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function MentoriaHojePage() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [planoCiclo, setPlanoCiclo] = useState<MentoriaCicloPlanoCompleto | null>(null);
  const [loading, setLoading] = useState(true);

  // ── ESTADO DO CRONÔMETRO DE ESTUDO REAL ────────────────────────────────────
  const [cronometroAtivo, setCronometroAtivo] = useState(false);
  const [cronometroIniciado, setCronometroIniciado] = useState(false);
  const [segundosLiquidos, setSegundosLiquidos] = useState(0);
  const [pausasContador, setPausasContador] = useState(0);
  const [segundosPausaTotal, setSegundosPausaTotal] = useState(0);
  const [tempoInicioSessao, setTempoInicioSessao] = useState<string | null>(null);

  // Formulário de finalização da sessão
  const [questoesRespondidas, setQuestoesRespondidas] = useState<number>(0);
  const [questoesAcertadas, setQuestoesAcertadas] = useState<number>(0);
  const [observacoesSessao, setObservacoesSessao] = useState<string>("");
  const [finalizando, setFinalizando] = useState(false);
  const [resultadoUltimaSessao, setResultadoUltimaSessao] = useState<{
    status: MentoriaCicloStatusSessao;
    volta_completa: boolean;
    minutos_estudados: number;
    disciplina_nome: string;
  } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function carregar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const [p, ciclo] = await Promise.all([
          MentoriaService.getPerfil(user.id),
          MentoriaCicloService.obterPlanoCiclo(user.id),
        ]);
        setPerfil(p);
        setPlanoCiclo(ciclo);
      } catch (err) {
        console.error("Erro ao carregar dados do estudo de hoje:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  // Cronômetro de tempo líquido ativo
  useEffect(() => {
    if (cronometroAtivo) {
      timerRef.current = setInterval(() => {
        setSegundosLiquidos((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [cronometroAtivo]);

  // Cronômetro de tempo de pausa
  useEffect(() => {
    if (!cronometroAtivo && cronometroIniciado) {
      pauseTimerRef.current = setInterval(() => {
        setSegundosPausaTotal((prev) => prev + 1);
      }, 1000);
    } else {
      if (pauseTimerRef.current) clearInterval(pauseTimerRef.current);
    }
    return () => {
      if (pauseTimerRef.current) clearInterval(pauseTimerRef.current);
    };
  }, [cronometroAtivo, cronometroIniciado]);

  function handleIniciar() {
    if (!cronometroIniciado) {
      setCronometroIniciado(true);
      setTempoInicioSessao(new Date().toISOString());
    }
    setCronometroAtivo(true);
  }

  function handlePausar() {
    setCronometroAtivo(false);
    setPausasContador((prev) => prev + 1);
  }

  function handleZerar() {
    setCronometroAtivo(false);
    setCronometroIniciado(false);
    setSegundosLiquidos(0);
    setPausasContador(0);
    setSegundosPausaTotal(0);
    setTempoInicioSessao(null);
  }

  async function handleFinalizarSessao() {
    if (!user || !planoCiclo || !planoCiclo.bloco_atual) return;

    setFinalizando(true);
    try {
      const bloco = planoCiclo.bloco_atual;
      const res = await MentoriaCicloService.registrarSessaoConcluida({
        usuario_id: user.id,
        plano_id: planoCiclo.plano_id,
        tarefa_id: bloco.id,
        disciplina_id: bloco.disciplina_id,
        disciplina_nome: bloco.disciplina_nome,
        bloco_ordem: bloco.ordem_bloco,
        tipo: bloco.tipo,
        duracao_planejada_minutos: bloco.duracao_minutos,
        duracao_liquida_segundos: segundosLiquidos,
        questoes_respondidas: questoesRespondidas,
        questoes_acertadas: questoesAcertadas,
        pausas_quantidade: pausasContador,
        pausas_segundos_total: segundosPausaTotal,
        observacoes: observacoesSessao,
      });

      if (res.success) {
        setResultadoUltimaSessao({
          status: res.status,
          volta_completa: res.volta_completa,
          minutos_estudados: Math.round(segundosLiquidos / 60),
          disciplina_nome: bloco.disciplina_nome,
        });

        // Recarrega o plano atualizado com o ponteiro avançado
        const planoAtualizado = await MentoriaCicloService.obterPlanoCiclo(user.id);
        if (planoAtualizado) {
          setPlanoCiclo(planoAtualizado);
        }

        // Reseta o cronômetro
        handleZerar();
        setQuestoesRespondidas(0);
        setQuestoesAcertadas(0);
        setObservacoesSessao("");
      }
    } catch (err) {
      console.error("Erro ao registrar sessão concluída:", err);
    } finally {
      setFinalizando(false);
    }
  }

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
        <p className="text-sm font-medium text-slate-500">Carregando sessão do ciclo...</p>
      </div>
    );
  }

  const blocoAtual = planoCiclo?.bloco_atual;
  const duracaoPlanejadaSegundos = (blocoAtual?.duracao_minutos || 40) * 60;
  const percentualConcluido = Math.min(
    100,
    Math.round((segundosLiquidos / duracaoPlanejadaSegundos) * 100)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Topo / Voltar */}
      <div className="flex items-center justify-between">
        <Link
          href="/mentoria"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Dashboard da Mentoria
        </Link>

        <Link
          href="/mentoria/plano"
          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
        >
          Ver Visão Completa do Ciclo
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Header do Estudo de Hoje */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider capitalize">
              {hojeFormatado}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
            Estudo de Hoje & Execução do Ciclo
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Foco direcionado: estude no seu ritmo. O ciclo continua exatamente de onde você parou.
          </p>
        </div>

        {planoCiclo && (
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 px-3.5 py-2 rounded-xl">
            <RotateCw className="w-4 h-4 text-blue-600" />
            <div className="text-xs">
              <span className="font-extrabold text-blue-900 dark:text-blue-200">
                Bloco {planoCiclo.posicao_atual_index + 1} de {planoCiclo.total_blocos_ciclo}
              </span>
              <p className="text-slate-500 font-medium">Volta {planoCiclo.ciclo_concluidos_voltas + 1} do ciclo</p>
            </div>
          </div>
        )}
      </div>

      {/* BANNER DE RESULTADO DA SESSÃO ANTERIOR */}
      {resultadoUltimaSessao && (
        <Card className="border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/30">
          <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-emerald-950 dark:text-emerald-100">
                  Sessão registrada com sucesso! ({resultadoUltimaSessao.status.toUpperCase()})
                </h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">
                  Você concluiu {resultadoUltimaSessao.minutos_estudados} minutos de {resultadoUltimaSessao.disciplina_nome}. O ponteiro do ciclo avançou automaticamente para o próximo bloco!
                </p>
                {resultadoUltimaSessao.volta_completa && (
                  <p className="text-xs font-black text-indigo-700 dark:text-indigo-300 mt-1 flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Parabéns! Você completou uma volta inteira do Ciclo de Estudos!
                  </p>
                )}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setResultadoUltimaSessao(null)}
              className="font-bold text-xs"
            >
              Dispensar
            </Button>
          </CardContent>
        </Card>
      )}

      {/* BLOCO ATIVO & CRONÔMETRO INTEGRADO */}
      {blocoAtual ? (
        <div className="space-y-6">
          <Card className="border-2 border-blue-500 dark:border-blue-600 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 fill-white" />
                <span className="text-xs font-black uppercase tracking-wider">
                  BLOCO ATIVO DO CICLO #{blocoAtual.ordem_bloco}
                </span>
              </div>
              <Badge variant="secondary" className="font-bold text-xs capitalize">
                Prioridade {blocoAtual.prioridade_nivel} ({blocoAtual.prioridade_score} pts)
              </Badge>
            </div>

            <CardContent className="p-6 sm:p-8 space-y-6">
              {/* Informações da Disciplina */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
                    {blocoAtual.disciplina_nome}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <Badge
                      variant={
                        blocoAtual.tipo === "TEORIA"
                          ? "primary"
                          : blocoAtual.tipo === "QUESTOES"
                          ? "success"
                          : "warning"
                      }
                      className="font-bold text-xs"
                    >
                      {blocoAtual.tipo === "TEORIA"
                        ? "ESTUDO TEÓRICO"
                        : blocoAtual.tipo === "QUESTOES"
                        ? "QUESTÕES COMENTADAS"
                        : "REVISÃO ESPAÇADA"}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      Meta: {blocoAtual.duracao_minutos} minutos
                    </span>
                    {blocoAtual.tipo === "QUESTOES" && (
                      <span className="flex items-center gap-1">
                        <CheckSquare2 className="w-3.5 h-3.5 text-emerald-600" />
                        Sugerido: ~{blocoAtual.quantidade_questoes_sugerida} questões
                      </span>
                    )}
                  </div>
                </div>

                {/* Ações diretas de estudo */}
                <div className="flex items-center gap-2">
                  <Link href={`/questoes?busca=${encodeURIComponent(blocoAtual.disciplina_nome)}`}>
                    <Button variant="outline" size="sm" className="font-bold text-xs">
                      Resolver Questões
                    </Button>
                  </Link>
                </div>
              </div>

              {/* CRONÔMETRO DE SESSÃO */}
              <div className="p-6 bg-slate-900 dark:bg-slate-950 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-inner">
                <div className="space-y-1">
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    TEMPO LÍQUIDO CRONOMETRADO
                  </p>
                  <p className="text-4xl sm:text-5xl font-mono font-black text-emerald-400 tracking-tight">
                    {formatarTempo(segundosLiquidos)}
                  </p>
                  <p className="text-xs text-slate-400">
                    Progresso do bloco: {percentualConcluido}% ({Math.round(segundosLiquidos / 60)} de {blocoAtual.duracao_minutos} min)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {!cronometroAtivo ? (
                    <Button
                      size="lg"
                      onClick={handleIniciar}
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold shadow-lg"
                      leftIcon={<Play className="w-5 h-5 fill-white" />}
                    >
                      {cronometroIniciado ? "Continuar" : "Iniciar Bloco"}
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      onClick={handlePausar}
                      className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-extrabold shadow-lg"
                      leftIcon={<Pause className="w-5 h-5" />}
                    >
                      Pausar
                    </Button>
                  )}

                  {cronometroIniciado && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handleFinalizarSessao}
                      disabled={finalizando || segundosLiquidos === 0}
                      className="w-full sm:w-auto font-bold border-slate-700 text-white hover:bg-slate-800"
                    >
                      {finalizando ? "Registrando..." : "Finalizar & Avançar"}
                    </Button>
                  )}

                  {segundosLiquidos > 0 && !cronometroAtivo && (
                    <button
                      onClick={handleZerar}
                      title="Zerar cronômetro"
                      className="p-2.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Informações adicionais da sessão em andamento */}
              {cronometroIniciado && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div>
                    <label className="block text-slate-500 font-bold mb-1">Questões Resolvidas</label>
                    <input
                      type="number"
                      min={0}
                      value={questoesRespondidas}
                      onChange={(e) => setQuestoesRespondidas(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                      placeholder="Ex: 15"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 font-bold mb-1">Acertos</label>
                    <input
                      type="number"
                      min={0}
                      value={questoesAcertadas}
                      onChange={(e) => setQuestoesAcertadas(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                      placeholder="Ex: 12"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 font-bold mb-1">Pausas Realizadas</label>
                    <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-semibold">
                      {pausasContador} pausas ({Math.round(segundosPausaTotal / 60)} min)
                    </div>
                  </div>
                </div>
              )}

              {/* Motivo de Explicabilidade do Bloco */}
              {blocoAtual.motivo_explicabilidade && blocoAtual.motivo_explicabilidade.length > 0 && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Por que estou estudando este bloco agora?
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {blocoAtual.motivo_explicabilidade.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* PRÓXIMOS BLOCOS NA FILA CONTÍNUA */}
          {planoCiclo.blocos.length > 1 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                Próximos Blocos do Ciclo
              </h3>

              <div className="space-y-2">
                {planoCiclo.blocos.slice(0, 4).map((bloco, idx) => {
                  if (idx === planoCiclo.posicao_atual_index) return null;

                  return (
                    <div
                      key={bloco.id || idx}
                      className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs flex items-center justify-center">
                          {bloco.ordem_bloco}
                        </span>
                        <div>
                          <p className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                            {bloco.disciplina_nome}
                          </p>
                          <p className="text-xs text-slate-500">
                            {bloco.tipo} • {bloco.duracao_minutos} minutos • Prioridade {bloco.prioridade_nivel}
                          </p>
                        </div>
                      </div>

                      <Badge variant="outline" className="text-xs font-semibold">
                        Aguardando
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Card className="border-slate-200 dark:border-slate-800">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-full flex items-center justify-center mx-auto">
              <RotateCw className="w-6 h-6" />
            </div>
            <h3 className="font-black text-lg text-slate-900 dark:text-slate-100">
              Nenhum ciclo ativo no momento
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Gere seu ciclo de estudos adaptativo para receber o roteiro diário com cronômetro integrado.
            </p>
            <Link href="/mentoria/plano">
              <Button variant="primary" size="md">
                Gerar Meu Ciclo de Estudos
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Orientação Pedagógica sobre Dia Perdido */}
      <Card className="border-blue-200 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/20">
        <CardContent className="p-5 flex items-start gap-3.5">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-blue-950 dark:text-blue-100">
              Princípio do Ciclo Contínuo Adaptativo
            </h4>
            <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
              O ciclo não depende do dia do calendário. Se você teve um imprevisto e não pôde estudar hoje, você <strong>não acumula matéria atrasada</strong> nem perde tarefas. Quando você puder voltar aos estudos, basta abrir esta página e continuar exatamente do próximo bloco pendente.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
