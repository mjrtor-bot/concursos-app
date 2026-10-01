"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Settings,
  Save,
  Clock,
  Calendar,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Compass,
  Target,
  Sliders,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { MentoriaService } from "@/services/mentoriaService";
import {
  MentoriaNivel,
  MentoriaHorario,
  MentoriaPrioridade,
  MentoriaPerfil,
  MentoriaDisponibilidade,
} from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const DIAS_SEMANA_NOMES = [
  { dia: 0, nome: "Domingo", sigla: "Dom" },
  { dia: 1, nome: "Segunda-feira", sigla: "Seg" },
  { dia: 2, nome: "Terça-feira", sigla: "Ter" },
  { dia: 3, nome: "Quarta-feira", sigla: "Qua" },
  { dia: 4, nome: "Quinta-feira", sigla: "Qui" },
  { dia: 5, nome: "Sexta-feira", sigla: "Sex" },
  { dia: 6, nome: "Sábado", sigla: "Sáb" },
];

export default function ConfigurarMentoriaPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { concursoAtivo } = useConcurso();

  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  // Estados do formulário de Perfil
  const [concursoNome, setConcursoNome] = useState("");
  const [cargoNome, setCargoNome] = useState("");
  const [dataProva, setDataProva] = useState("");
  const [nivel, setNivel] = useState<MentoriaNivel>("intermediario");
  const [horarioPreferido, setHorarioPreferido] = useState<MentoriaHorario>("noite");
  const [prioridadeEstudo, setPrioridadeEstudo] = useState<MentoriaPrioridade>("equilibrado");
  const [duracaoBloco, setDuracaoBloco] = useState(40);
  const [questoesBloco, setQuestoesBloco] = useState(15);

  // Estados da Grade de Disponibilidade Semanal (minutos por dia)
  const [grade, setGrade] = useState<{ dia_semana: number; minutos_disponiveis: number; horario_preferido?: MentoriaHorario }[]>([
    { dia_semana: 0, minutos_disponiveis: 0, horario_preferido: "manha" },
    { dia_semana: 1, minutos_disponiveis: 120, horario_preferido: "noite" },
    { dia_semana: 2, minutos_disponiveis: 120, horario_preferido: "noite" },
    { dia_semana: 3, minutos_disponiveis: 120, horario_preferido: "noite" },
    { dia_semana: 4, minutos_disponiveis: 120, horario_preferido: "noite" },
    { dia_semana: 5, minutos_disponiveis: 120, horario_preferido: "noite" },
    { dia_semana: 6, minutos_disponiveis: 180, horario_preferido: "manha" },
  ]);

  // Carregar dados existentes
  useEffect(() => {
    async function carregar() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const [perfil, disp] = await Promise.all([
          MentoriaService.getPerfil(user.id),
          MentoriaService.getDisponibilidade(user.id),
        ]);

        if (perfil) {
          setConcursoNome(perfil.concurso_nome || "");
          setCargoNome(perfil.cargo_nome || "");
          setDataProva(perfil.data_prova || "");
          setNivel(perfil.nivel || "intermediario");
          setHorarioPreferido(perfil.horario_preferido || "noite");
          setPrioridadeEstudo(perfil.prioridade_estudo || "equilibrado");
          setDuracaoBloco(perfil.duracao_bloco_minutos || 40);
          setQuestoesBloco(perfil.quantidade_questoes_bloco || 15);
        } else if (concursoAtivo) {
          // Preenchimento prévio inteligente com o concurso ativo no contexto
          setConcursoNome(concursoAtivo.nome || "");
          if (concursoAtivo.data_prova) {
            setDataProva(concursoAtivo.data_prova.substring(0, 10));
          }
        }

        if (disp && disp.length > 0) {
          setGrade(
            disp.map((d) => ({
              dia_semana: d.dia_semana,
              minutos_disponiveis: d.minutos_disponiveis,
              horario_preferido: d.horario_preferido || "noite",
            }))
          );
        }
      } catch (err) {
        console.error("Erro ao carregar dados do perfil de mentoria:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user, concursoAtivo]);

  // Cálculos dinâmicos em tempo real
  const totalMinutosSemanais = grade.reduce((acc, curr) => acc + curr.minutos_disponiveis, 0);
  const totalHorasSemanais = (totalMinutosSemanais / 60).toFixed(1);
  const diasAtivos = grade.filter((g) => g.minutos_disponiveis > 0).length;
  const diasDescanso = 7 - diasAtivos;
  const estimativaBlocosSemana = Math.floor(totalMinutosSemanais / duracaoBloco);

  const atualizarMinutosDia = (diaIndex: number, minutos: number) => {
    setGrade((prev) =>
      prev.map((item) =>
        item.dia_semana === diaIndex ? { ...item, minutos_disponiveis: Math.max(0, minutos) } : item
      )
    );
  };

  const salvarTudo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setMensagemErro("Você precisa estar autenticado para salvar.");
      return;
    }

    if (!concursoNome.trim()) {
      setMensagemErro("Por favor, informe o nome do seu concurso alvo.");
      return;
    }

    if (!cargoNome.trim()) {
      setMensagemErro("Por favor, informe o cargo pretendido.");
      return;
    }

    setSalvando(true);
    setMensagemSucesso(null);
    setMensagemErro(null);

    try {
      const diasDescansoArray = grade
        .filter((g) => g.minutos_disponiveis === 0)
        .map((g) => DIAS_SEMANA_NOMES[g.dia_semana].sigla);

      const res = await MentoriaService.salvarPerfil(
        user.id,
        {
          concurso_id: concursoAtivo?.id || null,
          concurso_nome: concursoNome,
          cargo_id: null,
          cargo_nome: cargoNome,
          data_prova: dataProva ? dataProva : null,
          nivel,
          horario_preferido: horarioPreferido,
          duracao_bloco_minutos: duracaoBloco,
          quantidade_questoes_bloco: questoesBloco,
          dias_descanso: diasDescansoArray,
          prioridade_estudo: prioridadeEstudo,
        },
        grade
      );

      if (res.success) {
        setMensagemSucesso("Perfil e Grade de Disponibilidade salvos com sucesso!");
        setTimeout(() => {
          router.push("/mentoria");
        }, 1200);
      } else {
        setMensagemErro(res.error || "Erro ao salvar o perfil.");
      }
    } catch (err: any) {
      setMensagemErro("Erro inesperado: " + (err.message || String(err)));
    } finally {
      setSalvando(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Carregando preferências de estudo...
        </p>
      </div>
    );
  }

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
      </div>

      {/* Cabeçalho */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          <Sliders className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">PLANEJAMENTO & GRADE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-50">
          Configurar Perfil de Estudos & Disponibilidade
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Defina seu objetivo e quanto tempo real você tem disponível em cada dia. Nosso algoritmo utilizará essas informações para balancear sua carga de estudo sem sobrecarga.
        </p>
      </div>

      {/* Feedback de Erro ou Sucesso */}
      {mensagemErro && (
        <div className="p-4 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-xl flex items-center gap-3 text-red-800 dark:text-red-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span>{mensagemErro}</span>
        </div>
      )}

      {mensagemSucesso && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-xl flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
          <span>{mensagemSucesso} Redirecionando...</span>
        </div>
      )}

      <form onSubmit={salvarTudo} className="space-y-8">
        {/* SEÇÃO 1: CONCURSO & CARGO */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              1. Concurso Alvo e Cargo Pretendido
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Concurso Alvo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Receita Federal, CNU, TJ-SP, PF"
                  value={concursoNome}
                  onChange={(e) => setConcursoNome(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Cargo Pretendido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Auditor Fiscal, Analista Judiciário"
                  value={cargoNome}
                  onChange={(e) => setCargoNome(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Data Prevista da Prova (Opcional)
                </label>
                <input
                  type="date"
                  value={dataProva}
                  onChange={(e) => setDataProva(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-[11px] text-slate-500">
                  Ajuda a calcular os dias restantes e ajustar o ritmo de estudo.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Seu Nível Atual no Conteúdo
                </label>
                <select
                  value={nivel}
                  onChange={(e) => setNivel(e.target.value as MentoriaNivel)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="iniciante">Iniciante (Começando do zero na maioria das matérias)</option>
                  <option value="intermediario">Intermediário (Já viu a base, focado em consolidar)</option>
                  <option value="avancado">Avançado (Foco em questões, detalhes e alto rendimento)</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEÇÃO 2: PARÂMETROS PEDAGÓGICOS */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              2. Parâmetros de Estudo & Foco
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Prioridade Pedagógica
                </label>
                <select
                  value={prioridadeEstudo}
                  onChange={(e) => setPrioridadeEstudo(e.target.value as MentoriaPrioridade)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="equilibrado">Equilibrado (Teoria + Questões + Revisão)</option>
                  <option value="teoria">Foco em Teoria (Construção de base)</option>
                  <option value="questoes">Foco em Questões (Prática intensiva)</option>
                  <option value="revisao">Foco em Revisão (Pós-edital ou reta final)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Horário de Maior Rendimento
                </label>
                <select
                  value={horarioPreferido}
                  onChange={(e) => setHorarioPreferido(e.target.value as MentoriaHorario)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="manha">Manhã (06:00 às 12:00)</option>
                  <option value="tarde">Tarde (12:00 às 18:00)</option>
                  <option value="noite">Noite (18:00 às 23:00)</option>
                  <option value="madrugada">Madrugada (23:00 às 06:00)</option>
                  <option value="flexivel">Flexível (Horários alternados)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Duração do Bloco de Estudo (Pomodoro / Ciclo)
                </label>
                <select
                  value={duracaoBloco}
                  onChange={(e) => setDuracaoBloco(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={30}>30 minutos (Foco curto)</option>
                  <option value={40}>40 minutos (Recomendado)</option>
                  <option value={50}>50 minutos (Padrão 50/10)</option>
                  <option value={60}>60 minutos (1 hora contínua)</option>
                  <option value={90}>90 minutos (Bloco longo)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Questões Recomendadas por Bloco
                </label>
                <select
                  value={questoesBloco}
                  onChange={(e) => setQuestoesBloco(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={10}>10 questões</option>
                  <option value={15}>15 questões (Ideal para 40-50m)</option>
                  <option value={20}>20 questões</option>
                  <option value={30}>30 questões (Intensivo)</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEÇÃO 3: GRADE SEMANAL DE DISPONIBILIDADE */}
        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle className="text-base font-bold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                3. Grade de Disponibilidade Semanal
              </span>
              <Badge variant="primary" className="text-xs font-bold">
                Total: {totalHorasSemanais}h semanais
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Ajuste o tempo líquido que você realmente tem para estudar em cada dia da semana. Dias com 0h são considerados dias de descanso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3">
              {DIAS_SEMANA_NOMES.map((d) => {
                const item = grade.find((g) => g.dia_semana === d.dia) || {
                  dia_semana: d.dia,
                  minutos_disponiveis: 0,
                };
                const horas = (item.minutos_disponiveis / 60).toFixed(1);
                const isDescanso = item.minutos_disponiveis === 0;

                return (
                  <div
                    key={d.dia}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between space-y-3 transition-all ${
                      isDescanso
                        ? "border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 opacity-80"
                        : "border-blue-300 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/20"
                    }`}
                  >
                    <div>
                      <p className="font-extrabold text-xs text-slate-900 dark:text-slate-100">
                        {d.nome}
                      </p>
                      <p className={`text-lg font-black mt-1 ${isDescanso ? "text-slate-400" : "text-blue-600 dark:text-blue-400"}`}>
                        {item.minutos_disponiveis > 0 ? `${horas}h` : "Folga"}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <select
                        value={item.minutos_disponiveis}
                        onChange={(e) => atualizarMinutosDia(d.dia, Number(e.target.value))}
                        className="w-full text-xs font-bold py-1.5 px-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-1 focus:ring-blue-500"
                      >
                        <option value={0}>0h (Folga)</option>
                        <option value={30}>30 min</option>
                        <option value={60}>1h</option>
                        <option value={90}>1h30</option>
                        <option value={120}>2h</option>
                        <option value={150}>2h30</option>
                        <option value={180}>3h</option>
                        <option value={240}>4h</option>
                        <option value={300}>5h</option>
                        <option value={360}>6h</option>
                      </select>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resumo da Carga Horária */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div>
                <span>Dias de Estudo: <strong>{diasAtivos} dias</strong></span>
                {" • "}
                <span>Dias de Descanso: <strong>{diasDescanso} dias</strong></span>
              </div>
              <div>
                <span>Estimativa de Blocos Semanais: <strong>~{estimativaBlocosSemana} blocos</strong> de {duracaoBloco}min</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* BOTÃO DE SALVAR */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <Link href="/mentoria">
            <Button type="button" variant="outline" size="md">
              Cancelar
            </Button>
          </Link>
          <Button
            type="submit"
            size="lg"
            isLoading={salvando}
            leftIcon={<Save className="w-4 h-4" />}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 shadow-md shadow-blue-500/20"
          >
            {salvando ? "Salvando Perfil..." : "Salvar Perfil e Disponibilidade"}
          </Button>
        </div>
      </form>
    </div>
  );
}
