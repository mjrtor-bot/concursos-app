"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  CheckSquare2,
  AlertTriangle,
  FileSpreadsheet,
  FileText,
  BarChart3,
  Database,
  Users,
  User,
  ChevronRight,
  ChevronDown,
  Flame,
  Clock,
  Sparkles,
  Compass,
  Zap,
  Calendar,
  Layers,
  Trophy,
  PlusCircle,
  MessageSquare,
  X,
} from "lucide-react";
import { useConcurso } from "@/contexts/ConcursoContext";
import { useAuth } from "@/contexts/AuthContext";
import { ConcursoSelectorModal } from "@/components/concursos/ConcursoSelectorModal";
import { DataService } from "@/services/dataService";

interface SidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({ isOpenMobile, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const { concursoAtivo, prazoProva } = useConcurso();
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [sequenciaDias, setSequenciaDias] = useState(0);
  const [questoesHoje, setQuestoesHoje] = useState(0);
  const [isMentoriaOpen, setIsMentoriaOpen] = useState(true);

  // Auto-expand quando estiver em qualquer rota da mentoria
  useEffect(() => {
    if (!pathname.startsWith("/mentoria")) return;

    const frame = window.requestAnimationFrame(() => {
      setIsMentoriaOpen(true);
      try {
        localStorage.setItem("mentoria_submenu_open", "true");
      } catch {
        // Ignore storage errors
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const toggleMentoria = () => {
    setIsMentoriaOpen((prev) => {
      const nextState = !prev;
      try {
        localStorage.setItem("mentoria_submenu_open", String(nextState));
      } catch {
        // Ignore storage errors
      }
      return nextState;
    });
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stats = DataService.getEstatisticas();
        setSequenciaDias(stats.sequencia_dias ?? 0);
        setQuestoesHoje(stats.questoes_hoje ?? 0);
      } catch {
        // Fallback gracioso
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const mentoriaSubItems = [
    {
      href: "/mentoria",
      label: "Visão Geral",
      icon: Compass,
      isExact: true,
    },
    {
      href: "/mentoria/hoje",
      label: "Missão Diária",
      icon: Zap,
      badge: "Hoje",
    },
    {
      href: "/mentoria/semanal",
      label: "Planejamento Semanal",
      icon: Calendar,
    },
    {
      href: "/mentoria/plano",
      label: "Meu Plano",
      icon: Layers,
    },
    {
      href: "/mentoria/edital",
      label: "Edital Verticalizado",
      icon: BookOpen,
    },
    {
      href: "/mentoria/edital/importados",
      label: "Meus Editais Importados",
      icon: FileText,
    },
    {
      href: "/mentoria/comunicacao",
      label: "Mural & Inbox",
      icon: MessageSquare,
    },
  ];

  const otherNavItems = [
    {
      href: "/concursos",
      label: "Concursos & Cargos",
      icon: GraduationCap,
    },
    {
      href: "/disciplinas",
      label: "Disciplinas & Assuntos",
      icon: BookOpen,
    },
    {
      href: "/questoes",
      label: "Banco de Questões",
      icon: CheckSquare2,
    },
    {
      href: "/questoes/externas",
      label: "Questões Externas",
      icon: PlusCircle,
    },
    {
      href: "/ranking",
      label: "Ranking & XP",
      icon: Trophy,
    },
    {
      href: "/caderno-de-erros",
      label: "Caderno de Erros",
      icon: AlertTriangle,
      badge: "Revisão",
    },
    {
      href: "/simulados",
      label: "Simulados",
      icon: FileSpreadsheet,
    },
    {
      href: "/desempenho",
      label: "Meu Desempenho",
      icon: BarChart3,
    },
    {
      href: "/perfil",
      label: "Meu Perfil",
      icon: User,
    },

  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800/80 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header / Brand */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 font-bold text-lg tracking-wider">
              C
            </div>
            <div>
              <span className="font-bold text-base text-slate-900 dark:text-slate-50 tracking-tight">
                Concursos<span className="text-blue-600 dark:text-blue-400">App</span>
              </span>
              <span className="block text-[10px] text-slate-400 font-medium -mt-1">
                Plataforma de Aprovação
              </span>
            </div>
          </Link>

          {/* Close for mobile */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Concurso Alvo Widget */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800/60">
          <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/20 border border-blue-200/60 dark:border-blue-900/40 rounded-xl">
            <div className="flex items-center justify-between text-[11px] font-semibold text-blue-700 dark:text-blue-300 mb-1">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                CONCURSO ALVO
              </span>
              <button
                onClick={() => setIsSelectorOpen(true)}
                className="text-[11px] underline hover:text-blue-800 dark:hover:text-blue-200"
              >
                Trocar
              </button>
            </div>
            <p className="font-bold text-xs text-slate-900 dark:text-slate-100 line-clamp-1">
              {concursoAtivo ? concursoAtivo.nome : "Selecione um Concurso"}
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 px-2 py-1 rounded-md">
              <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span>
                {prazoProva.situacao === "futura" ? (
                  <>Faltam <strong className="text-blue-600 dark:text-blue-400">{prazoProva.dias}</strong> dias para a prova</>
                ) : prazoProva.situacao === "hoje" ? (
                  "A prova é hoje! 🎯"
                ) : prazoProva.situacao === "realizada" ? (
                  "Prova realizada"
                ) : (
                  "Data da prova a definir"
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {/* 1. Dashboard */}
          <Link
            href="/dashboard"
            onClick={onCloseMobile}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
              pathname === "/dashboard"
                ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20 font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard
                className={`w-4 h-4 ${
                  pathname === "/dashboard"
                    ? "text-white"
                    : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                }`}
              />
              <span>Dashboard</span>
            </div>
            {pathname === "/dashboard" && <ChevronRight className="w-4 h-4 opacity-70" />}
          </Link>

          {/* 2. Mentoria Inteligente (Submenu Expansível / Accordion) */}
          <div className="space-y-1 pt-0.5">
            <button
              type="button"
              onClick={toggleMentoria}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                pathname.startsWith("/mentoria")
                  ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200/50 dark:border-blue-900/40"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <div className="flex items-center gap-3">
                <Compass
                  className={`w-4 h-4 ${
                    pathname.startsWith("/mentoria")
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                  }`}
                />
                <span>Mentoria</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    pathname.startsWith("/mentoria")
                      ? "bg-blue-600/10 text-blue-600 dark:text-blue-300 border border-blue-500/20"
                      : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                  }`}
                >
                  Inteligente
                </span>
                {isMentoriaOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400 transition-transform duration-200" />
                )}
              </div>
            </button>

            {/* Submenu Itens da Mentoria */}
            {isMentoriaOpen && (
              <div className="pl-3 ml-3.5 space-y-1 border-l-2 border-slate-200/80 dark:border-slate-800 py-1 transition-all">
                {mentoriaSubItems.map((sub) => {
                  const SubIcon = sub.icon;
                  const isSubActive = sub.isExact
                    ? pathname === sub.href
                    : pathname.startsWith(sub.href);

                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onCloseMobile}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group ${
                        isSubActive
                          ? "bg-blue-600 text-white font-bold shadow-xs shadow-blue-500/20"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <SubIcon
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSubActive
                              ? "text-white"
                              : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                          }`}
                        />
                        <span className="truncate">{sub.label}</span>
                      </div>

                      {sub.badge ? (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0 ${
                            isSubActive
                              ? "bg-white/20 text-white"
                              : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                          }`}
                        >
                          {sub.badge}
                        </span>
                      ) : (
                        isSubActive && <ChevronRight className="w-3.5 h-3.5 opacity-70 shrink-0" />
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {user?.role === "admin" && (
            <div className="pt-3 mt-2 border-t border-slate-200/80 dark:border-slate-800">
              <div className="px-3.5 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">Administração</div>
              {[
                { href:"/admin/editais", label:"Editais", icon:BookOpen },
                { href:"/admin/concursos", label:"Concursos", icon:GraduationCap },
                { href:"/admin/questoes", label:"Questões", icon:Database },
                { href:"/admin/usuarios", label:"Usuários", icon:Users },
              ].map((item)=>{const Icon=item.icon;const active=pathname.startsWith(item.href);return <Link key={item.href} href={item.href} onClick={onCloseMobile} className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${active?"bg-blue-600 text-white font-bold":"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"}`}><Icon className="w-4 h-4"/><span>{item.label}</span></Link>})}
            </div>
          )}

          {/* 3. Outros Módulos da Plataforma */}
          {otherNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20 font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge ? (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {item.badge}
                  </span>
                ) : (
                  isActive && <ChevronRight className="w-4 h-4 opacity-70" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Streak & Daily Motivation Box */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 fill-amber-500/30" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                {sequenciaDias === 0
                  ? "0 Dias de Foco"
                  : sequenciaDias === 1
                  ? "1 Dia de Foco! 🔥"
                  : `${sequenciaDias} Dias Seguidos! 🔥`}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {questoesHoje > 0
                  ? `${questoesHoje} questões hoje. Muito bem!`
                  : "Resolva questões hoje para manter"}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Concurso Switcher Modal */}
      <ConcursoSelectorModal
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
      />
    </>
  );
}
