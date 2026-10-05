"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  Settings,
  BookOpen,
  RotateCw,
  Clock,
  CalendarDays,
  CheckCircle2,
  FileSearch,
  PauseCircle,
  PlayCircle,
  Calendar,
  AlertTriangle,
  ChevronRight,
  Search,
  Check,
  Sparkles,
  Save,
  Trash2,
  ArrowRight,
  Sliders,
  Filter,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { MentoriaService } from "@/services/mentoriaService";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import {
  MentoriaPerfil,
  MentoriaDisponibilidade,
  EditalVerticalizadoResumo,
  EditalVerticalizadoItem,
  MentoriaHorario,
} from "@/types";

interface MeuPlanoDropdownMenuProps {
  onPlanUpdated?: () => void;
  variant?: "icon" | "button" | "sidebar";
  className?: string;
}

type ModalType =
  | "materias"
  | "ciclo"
  | "horarios"
  | "replanejar"
  | "sinalizar"
  | "rever"
  | "pausar"
  | "data_final"
  | "reiniciar"
  | null;

export function MeuPlanoDropdownMenu({
  onPlanUpdated,
  variant = "icon",
  className = "",
}: MeuPlanoDropdownMenuProps) {
  const { user } = useAuth();
  const { success, error: showError, info } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const mounted = typeof document !== "undefined";
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const triggerRef = useRef<HTMLButtonElement | HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [menuCoords, setMenuCoords] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 0,
    width: 360,
  });

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const menuWidth = Math.min(384, window.innerWidth - 32);
    const maxHeight = Math.min(540, window.innerHeight * 0.8);

    // Sidebar: abre à direita do ícone
    let left = rect.right + 10;
    if (left + menuWidth > window.innerWidth - 16) {
      left = Math.max(16, window.innerWidth - menuWidth - 16);
    }
    let top = rect.top;
    if (top + maxHeight > window.innerHeight - 16) {
      top = Math.max(16, window.innerHeight - maxHeight - 16);
    }
    if (top < 16) top = 16;

    setMenuCoords({ top, left, width: menuWidth });
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Atualizar posição ao abrir, no scroll ou no resize quando variant === "sidebar"
  useEffect(() => {
    if (!isOpen || variant !== "sidebar") return;
    updatePosition();

    const handleScrollOrResize = () => {
      updatePosition();
    };

    window.addEventListener("resize", handleScrollOrResize);
    window.addEventListener("scroll", handleScrollOrResize, true);

    return () => {
      window.removeEventListener("resize", handleScrollOrResize);
      window.removeEventListener("scroll", handleScrollOrResize, true);
    };
  }, [isOpen, variant, updatePosition]);

  const handleOpenOption = (modal: ModalType) => {
    setIsOpen(false);
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleActionSuccess = (msg: string) => {
    success(msg);
    handleCloseModal();
    if (onPlanUpdated) onPlanUpdated();
  };

  const menuContent = (
    <>
      <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 shrink-0">
        <p className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          Gestão do Meu Plano de Estudos
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Personalize, replaneje ou ajuste as configurações do seu ciclo
        </p>
      </div>

      <div className="py-1 overflow-y-auto max-h-[80vh] flex-1 divide-y divide-slate-100 dark:divide-slate-800/60 overscroll-contain">
        {/* 1. Editar Matérias */}
        <button
          type="button"
          onClick={() => handleOpenOption("materias")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              1. Editar Matérias
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (quais disciplinas entram ou saem do plano)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 2. Editar Ciclo */}
        <button
          type="button"
          onClick={() => handleOpenOption("ciclo")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <RotateCw className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              2. Editar Ciclo
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (quantas vezes cada matéria aparece no ciclo)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 3. Editar Horários */}
        <button
          type="button"
          onClick={() => handleOpenOption("horarios")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              3. Editar Horários
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (disponibilidade de tempo por dia da semana)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 4. Replanejar Atrasos */}
        <button
          type="button"
          onClick={() => handleOpenOption("replanejar")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <CalendarDays className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400">
              4. Replanejar Atrasos
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (redistribuir metas atrasadas nos próximos dias)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 5. Sinalizar Assuntos já Estudados */}
        <button
          type="button"
          onClick={() => handleOpenOption("sinalizar")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400">
              5. Sinalizar Assuntos já Estudados
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (marcar tópicos como concluídos)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 6. Rever Assuntos do Plano */}
        <button
          type="button"
          onClick={() => handleOpenOption("rever")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <FileSearch className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400">
              6. Rever Assuntos do Plano
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (visualizar status de cada tópico do edital)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 7. Pausar Plano */}
        <button
          type="button"
          onClick={() => handleOpenOption("pausar")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <PauseCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400">
              7. Pausar Plano
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (congelar o plano por um período)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 8. Ajustar Data Final */}
        <button
          type="button"
          onClick={() => handleOpenOption("data_final")}
          className="w-full px-4 py-2.5 text-left hover:bg-blue-50/60 dark:hover:bg-blue-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
              8. Ajustar Data Final
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              (recalcular o ritmo com nova data da prova)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 9. Reiniciar o Plano */}
        <button
          type="button"
          onClick={() => handleOpenOption("reiniciar")}
          className="w-full px-4 py-2.5 text-left hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-start gap-3 transition-colors group cursor-pointer"
        >
          <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-rose-700 dark:text-rose-400 group-hover:underline">
              9. Reiniciar o Plano
            </p>
            <p className="text-[11px] text-rose-500/80 dark:text-rose-400/80 leading-tight">
              (recomeçar do zero mantendo o histórico)
            </p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </>
  );

  return (
    <div className={`relative inline-block text-left ${className}`}>
      {/* Botão de Disparo */}
      {variant === "sidebar" ? (
        <button
          ref={triggerRef as React.RefObject<HTMLButtonElement>}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
          title="Gerenciar Meu Plano"
          aria-label="Gerenciar Meu Plano"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>
      ) : variant === "button" ? (
        <div ref={triggerRef as React.RefObject<HTMLDivElement>} className="inline-block">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen((prev) => !prev)}
            leftIcon={<Settings className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
            className="gap-1.5 font-semibold text-xs"
          >
            Opções do Plano
          </Button>
        </div>
      ) : (
        <button
          ref={triggerRef as React.RefObject<HTMLButtonElement>}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition-colors cursor-pointer"
          title="Opções do Plano"
          aria-label="Opções do Plano"
        >
          <Settings className="w-4 h-4" />
        </button>
      )}

      {/* Menu Suspenso */}
      {isOpen && (
        variant === "sidebar" ? (
          mounted && typeof document !== "undefined" ? (
            createPortal(
              <div
                ref={menuRef}
                style={{
                  position: "fixed",
                  top: `${menuCoords.top}px`,
                  left: `${menuCoords.left}px`,
                  width: `${menuCoords.width}px`,
                  maxHeight: "80vh",
                  zIndex: 9999,
                }}
                className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 py-2 animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
              >
                {menuContent}
              </div>,
              document.body
            )
          ) : null
        ) : (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-84 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-150 flex flex-col overflow-hidden"
          >
            {menuContent}
          </div>
        )
      )}

      {/* ── MODAIS FUNCIONAIS ────────────────────────────────────────────── */}

      {/* 1. Modal Editar Matérias */}
      {activeModal === "materias" && (
        <ModalEditarMaterias
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}

      {/* 2. Modal Editar Ciclo */}
      {activeModal === "ciclo" && (
        <ModalEditarCiclo
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}

      {/* 3. Modal Editar Horários */}
      {activeModal === "horarios" && (
        <ModalEditarHorarios
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}

      {/* 4. Modal Replanejar Atrasos */}
      {activeModal === "replanejar" && (
        <ModalReplanejarAtrasos
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}

      {/* 5. Modal Sinalizar Assuntos já Estudados */}
      {activeModal === "sinalizar" && (
        <ModalSinalizarEstudados
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}

      {/* 6. Modal Rever Assuntos do Plano */}
      {activeModal === "rever" && (
        <ModalReverAssuntos
          isOpen={true}
          onClose={handleCloseModal}
        />
      )}

      {/* 7. Modal Pausar Plano */}
      {activeModal === "pausar" && (
        <ModalPausarPlano
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}

      {/* 8. Modal Ajustar Data Final */}
      {activeModal === "data_final" && (
        <ModalAjustarDataFinal
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}

      {/* 9. Modal Reiniciar o Plano */}
      {activeModal === "reiniciar" && (
        <ModalReiniciarPlano
          isOpen={true}
          onClose={handleCloseModal}
          onSuccess={handleActionSuccess}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. MODAL: EDITAR MATÉRIAS
// ─────────────────────────────────────────────────────────────────────────────
function ModalEditarMaterias({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [disciplinas, setDisciplinas] = useState<Array<{ id: string; nome: string; total_topicos: number }>>([]);
  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  useEffect(() => {
    async function carregar() {
      if (!user) return;
      try {
        const [editalRes, configRes] = await Promise.all([
          MentoriaService.getEditalVerticalizado(user.id),
          fetch("/api/mentoria/config-plano").then((r) => r.json()),
        ]);

        const discs = (editalRes?.disciplinas || []).map((d) => ({
          id: d.disciplina_id,
          nome: d.disciplina_nome,
          total_topicos: d.total_topicos,
        }));
        setDisciplinas(discs);

        const ativas = Array.isArray(configRes?.config?.disciplinas_ativas) && configRes.config.disciplinas_ativas.length > 0
          ? configRes.config.disciplinas_ativas
          : discs.map((d) => d.id);
        setSelecionadas(ativas);
      } catch (err) {
        console.error("Erro ao carregar matérias:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  const toggleDisciplina = (id: string) => {
    if (selecionadas.includes(id)) {
      if (selecionadas.length === 1) return; // manter ao menos 1
      setSelecionadas(selecionadas.filter((d) => d !== id));
    } else {
      setSelecionadas([...selecionadas, id]);
    }
  };

  const handleSalvar = async () => {
    if (!user || selecionadas.length === 0) return;
    setSalvando(true);
    try {
      await fetch("/api/mentoria/config-plano", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disciplinas_ativas: selecionadas }),
      });
      await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      onSuccess("Disciplinas do plano atualizadas e ciclo recalculado com sucesso!");
    } catch (err) {
      console.error(err);
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="1. Editar Matérias do Plano"
      description="Selecione quais disciplinas do seu edital devem fazer parte do ciclo de estudos atual."
      size="lg"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : disciplinas.length === 0 ? (
        <div className="py-8 text-center text-sm text-slate-500">
          Nenhuma disciplina vinculada ao seu edital alvo.
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>
              {selecionadas.length} de {disciplinas.length} disciplinas selecionadas
            </span>
            <div className="space-x-2">
              <button
                type="button"
                onClick={() => setSelecionadas(disciplinas.map((d) => d.id))}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Selecionar todas
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
            {disciplinas.map((d) => {
              const isChecked = selecionadas.includes(d.id);
              return (
                <label
                  key={d.id}
                  className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    isChecked
                      ? "bg-blue-50/60 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-slate-900 dark:text-slate-100"
                      : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-500 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleDisciplina(d.id)}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-700"
                    />
                    <span className="text-sm font-semibold">{d.nome}</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    {d.total_topicos} tópicos
                  </Badge>
                </label>
              );
            })}
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={onClose} disabled={salvando}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSalvar}
              isLoading={salvando}
              leftIcon={<Save className="w-4 h-4" />}
            >
              Salvar e Recalcular Ciclo
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. MODAL: EDITAR CICLO
// ─────────────────────────────────────────────────────────────────────────────
function ModalEditarCiclo({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [materiasSimultaneas, setMateriasSimultaneas] = useState(4);
  const [velocidade, setVelocidade] = useState<"leve" | "normal" | "intensiva">("normal");
  const [duracaoBloco, setDuracaoBloco] = useState(40);
  const [etapas, setEtapas] = useState<string[]>(["estudo", "resumo", "revisao", "exercicio"]);

  useEffect(() => {
    async function carregar() {
      if (!user) return;
      try {
        const [configRes, perfil] = await Promise.all([
          fetch("/api/mentoria/config-plano").then((r) => r.json()),
          MentoriaService.getPerfil(user.id),
        ]);

        if (configRes?.config) {
          setMateriasSimultaneas(configRes.config.materias_simultaneas || 4);
          setVelocidade(configRes.config.velocidade || "normal");
          if (Array.isArray(configRes.config.etapas)) setEtapas(configRes.config.etapas);
        }
        if (perfil?.duracao_bloco_minutos) {
          setDuracaoBloco(perfil.duracao_bloco_minutos);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  const toggleEtapa = (etapa: string) => {
    if (etapas.includes(etapa)) {
      if (etapas.length === 1) return;
      setEtapas(etapas.filter((e) => e !== etapa));
    } else {
      setEtapas([...etapas, etapa]);
    }
  };

  const handleSalvar = async () => {
    if (!user) return;
    setSalvando(true);
    try {
      await Promise.all([
        fetch("/api/mentoria/config-plano", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            materias_simultaneas: materiasSimultaneas,
            velocidade,
            etapas,
          }),
        }),
        MentoriaService.atualizarPerfil(user.id, {
          duracao_bloco_minutos: duracaoBloco,
        }),
      ]);

      await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      onSuccess("Configurações do ciclo ajustadas e recalculadas com sucesso!");
    } catch (err) {
      console.error(err);
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="2. Editar Parâmetros do Ciclo"
      description="Ajuste o número de matérias simultâneas, ritmo de avanço e tipos de blocos do ciclo."
      size="md"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-5">
          {/* Matérias Simultâneas */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Matérias simultâneas no ciclo
              </label>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                {materiasSimultaneas} disciplinas
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={12}
              value={materiasSimultaneas}
              onChange={(e) => setMateriasSimultaneas(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Controla a rotação das matérias mais prioritárias no ciclo ativo.
            </p>
          </div>

          {/* Duração do Bloco */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Duração recomendada por bloco de estudo
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[30, 40, 50, 60].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setDuracaoBloco(mins)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    duracaoBloco === mins
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>

          {/* Ritmo / Velocidade */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Ritmo de Estudo
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["leve", "normal", "intensiva"] as const).map((ritmo) => (
                <button
                  key={ritmo}
                  type="button"
                  onClick={() => setVelocidade(ritmo)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold capitalize border transition-all ${
                    velocidade === ritmo
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {ritmo}
                </button>
              ))}
            </div>
          </div>

          {/* Etapas Permitidas */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Tipos de blocos a incluir na rotação
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "estudo", label: "Teoria" },
                { id: "resumo", label: "Resumo" },
                { id: "revisao", label: "Revisão" },
                { id: "exercicio", label: "Questões" },
              ].map((et) => {
                const isSelected = etapas.includes(et.id);
                return (
                  <button
                    key={et.id}
                    type="button"
                    onClick={() => toggleEtapa(et.id)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                      isSelected
                        ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-700 dark:text-blue-300 font-bold"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 opacity-60"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-blue-600" />}
                    {et.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={onClose} disabled={salvando}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSalvar}
              isLoading={salvando}
              leftIcon={<Save className="w-4 h-4" />}
            >
              Aplicar ao Ciclo
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. MODAL: EDITAR HORÁRIOS
// ─────────────────────────────────────────────────────────────────────────────
function ModalEditarHorarios({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [grade, setGrade] = useState<
    Array<{ dia_semana: number; minutos_disponiveis: number; horario_preferido: MentoriaHorario }>
  >([]);

  const diasSemana = [
    { dia: 0, nome: "Domingo" },
    { dia: 1, nome: "Segunda-feira" },
    { dia: 2, nome: "Terça-feira" },
    { dia: 3, nome: "Quarta-feira" },
    { dia: 4, nome: "Quinta-feira" },
    { dia: 5, nome: "Sexta-feira" },
    { dia: 6, nome: "Sábado" },
  ];

  useEffect(() => {
    async function carregar() {
      if (!user) return;
      try {
        const d = await MentoriaService.getDisponibilidade(user.id);
        const inicial = diasSemana.map((item) => {
          const found = d.find((x) => x.dia_semana === item.dia);
          return {
            dia_semana: item.dia,
            minutos_disponiveis: found?.minutos_disponiveis ?? (item.dia === 0 ? 0 : item.dia === 6 ? 180 : 120),
            horario_preferido: (found?.horario_preferido as MentoriaHorario) || "noite",
          };
        });
        setGrade(inicial);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  const updateMinutos = (dia: number, minutos: number) => {
    setGrade(grade.map((g) => (g.dia_semana === dia ? { ...g, minutos_disponiveis: Math.max(0, minutos) } : g)));
  };

  const updateHorario = (dia: number, turno: MentoriaHorario) => {
    setGrade(grade.map((g) => (g.dia_semana === dia ? { ...g, horario_preferido: turno } : g)));
  };

  const handleSalvar = async () => {
    if (!user) return;
    setSalvando(true);
    try {
      await MentoriaService.salvarDisponibilidade(user.id, grade);
      await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      onSuccess("Disponibilidade semanal atualizada e ciclo recalculado!");
    } catch (err) {
      console.error(err);
    } finally {
      setSalvando(false);
    }
  };

  const totalHorasSemana = (
    grade.reduce((acc, curr) => acc + curr.minutos_disponiveis, 0) / 60
  ).toFixed(1);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="3. Editar Horários e Disponibilidade"
      description="Configure quantas horas de estudo você tem por dia e seu turno de preferência."
      size="lg"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-xl text-xs">
            <span className="font-semibold text-blue-800 dark:text-blue-300">
              Total Planejado: {totalHorasSemana}h por semana
            </span>
            <span className="text-slate-500">
              Distribuído em {grade.filter((g) => g.minutos_disponiveis > 0).length} dias ativos
            </span>
          </div>

          <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
            {grade.map((item) => {
              const diaNome = diasSemana.find((d) => d.dia === item.dia_semana)?.nome;
              const horas = (item.minutos_disponiveis / 60).toFixed(1);

              return (
                <div
                  key={item.dia_semana}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 gap-3"
                >
                  <div className="w-32">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {diaNome}
                    </span>
                    <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                      {item.minutos_disponiveis} min ({horas}h)
                    </p>
                  </div>

                  {/* Presets de minutos */}
                  <div className="flex items-center gap-1.5">
                    {[0, 60, 120, 180, 240].map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        onClick={() => updateMinutos(item.dia_semana, mins)}
                        className={`px-2 py-1 rounded-lg text-[11px] font-semibold border transition-all ${
                          item.minutos_disponiveis === mins
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
                        }`}
                      >
                        {mins === 0 ? "Folga" : `${mins / 60}h`}
                      </button>
                    ))}
                  </div>

                  {/* Turno */}
                  <div className="flex items-center gap-1">
                    {(["manha", "tarde", "noite"] as MentoriaHorario[]).map((turno) => (
                      <button
                        key={turno}
                        type="button"
                        onClick={() => updateHorario(item.dia_semana, turno)}
                        className={`px-2 py-1 rounded-lg text-[10px] font-bold capitalize border transition-all ${
                          item.horario_preferido === turno
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100"
                        }`}
                      >
                        {turno === "manha" ? "Manhã" : turno === "tarde" ? "Tarde" : "Noite"}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={onClose} disabled={salvando}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSalvar}
              isLoading={salvando}
              leftIcon={<Save className="w-4 h-4" />}
            >
              Salvar Disponibilidade
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. MODAL: REPLANEJAR ATRASOS
// ─────────────────────────────────────────────────────────────────────────────
function ModalReplanejarAtrasos({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const [loading, setLoading] = useState(true);
  const [replanejando, setReplanejando] = useState(false);
  const [totalAtrasadas, setTotalAtrasadas] = useState(0);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch("/api/mentoria/calendario").then((r) => r.json());
        setTotalAtrasadas(res?.atrasadas || 0);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  const handleReplanejar = async () => {
    setReplanejando(true);
    try {
      const res = await fetch("/api/mentoria/calendario", { method: "POST" }).then((r) => r.json());
      if (res.success) {
        onSuccess(
          `Replanejamento concluído! ${res.replanejadas || totalAtrasadas} tarefas atrasadas foram redistribuídas a partir de hoje.`
        );
      } else {
        onSuccess("Cronograma sincronizado com sucesso!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setReplanejando(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="4. Replanejar Atrasos"
      description="Redistribua metas de estudo pendentes sem perder conteúdo ou sobrecarregar seus próximos dias."
      size="md"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3">
            <CalendarDays className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <p className="font-bold text-sm">
                {totalAtrasadas > 0
                  ? `${totalAtrasadas} tarefa(s) pendente(s) identificada(s)`
                  : "Nenhuma tarefa com data retroativa pendente"}
              </p>
              <p className="text-amber-700 dark:text-amber-300/90 leading-relaxed">
                Ao replanejar, o sistema reorganiza as metas atrasadas a partir de hoje,
                respeitando seu limite diário de blocos de estudo.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={onClose} disabled={replanejando}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleReplanejar}
              isLoading={replanejando}
              leftIcon={<RotateCw className="w-4 h-4" />}
            >
              Redistribuir Atrasos a partir de Hoje
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. MODAL: SINALIZAR ASSUNTOS JÁ ESTUDADOS
// ─────────────────────────────────────────────────────────────────────────────
function ModalSinalizarEstudados({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [edital, setEdital] = useState<EditalVerticalizadoResumo | null>(null);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [disciplinaFiltro, setDisciplinaFiltro] = useState<string>("todas");
  const [statusMarcados, setStatusMarcados] = useState<Map<string, "nao_iniciado" | "estudando" | "revisando" | "dominado">>(new Map());

  useEffect(() => {
    async function carregar() {
      if (!user) return;
      try {
        const res = await MentoriaService.getEditalVerticalizado(user.id);
        setEdital(res);
        const map = new Map<string, "nao_iniciado" | "estudando" | "revisando" | "dominado">();
        for (const d of res?.disciplinas || []) {
          for (const t of d.topicos) {
            map.set(t.assunto_id, t.status);
          }
        }
        setStatusMarcados(map);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  const toggleStatus = (assuntoId: string) => {
    const atual = statusMarcados.get(assuntoId) || "nao_iniciado";
    const proximo = atual === "dominado" ? "nao_iniciado" : atual === "nao_iniciado" ? "dominado" : "dominado";
    const novo = new Map(statusMarcados);
    novo.set(assuntoId, proximo);
    setStatusMarcados(novo);
  };

  const marcarTodosDisciplina = (discId: string, novoStatus: "dominado" | "nao_iniciado") => {
    const disc = edital?.disciplinas.find((d) => d.disciplina_id === discId);
    if (!disc) return;
    const novo = new Map(statusMarcados);
    for (const t of disc.topicos) {
      novo.set(t.assunto_id, novoStatus);
    }
    setStatusMarcados(novo);
  };

  const handleSalvar = async () => {
    if (!user || !edital) return;
    setSalvando(true);
    try {
      const promises: Promise<any>[] = [];
      for (const d of edital.disciplinas) {
        for (const t of d.topicos) {
          const statusEscolhido = statusMarcados.get(t.assunto_id);
          if (statusEscolhido && statusEscolhido !== t.status) {
            promises.push(
              MentoriaService.atualizarTopicoStatus(
                user.id,
                d.disciplina_id,
                t.assunto_id,
                statusEscolhido
              )
            );
          }
        }
      }
      await Promise.all(promises);
      await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      onSuccess("Status dos tópicos atualizado com sucesso!");
    } catch (err) {
      console.error(err);
    } finally {
      setSalvando(false);
    }
  };

  const topicosFiltrados = (edital?.disciplinas || [])
    .filter((d) => disciplinaFiltro === "todas" || d.disciplina_id === disciplinaFiltro)
    .flatMap((d) =>
      d.topicos
        .filter((t) => !filtroTexto || t.assunto_nome.toLowerCase().includes(filtroTexto.toLowerCase()))
        .map((t) => ({ ...t, disciplina_nome: d.disciplina_nome }))
    );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="5. Sinalizar Assuntos já Estudados"
      description="Marque tópicos do edital que você já estudou ou domina para calibrar a prioridade do ciclo."
      size="xl"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          {/* Barra de Filtros */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={filtroTexto}
                onChange={(e) => setFiltroTexto(e.target.value)}
                placeholder="Buscar tópico por nome..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
            <select
              value={disciplinaFiltro}
              onChange={(e) => setDisciplinaFiltro(e.target.value)}
              className="px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
            >
              <option value="todas">Todas as Disciplinas</option>
              {edital?.disciplinas.map((d) => (
                <option key={d.disciplina_id} value={d.disciplina_id}>
                  {d.disciplina_nome}
                </option>
              ))}
            </select>
          </div>

          {/* Lista de Tópicos */}
          <div className="max-h-80 overflow-y-auto space-y-1.5 pr-1">
            {topicosFiltrados.length === 0 ? (
              <p className="py-8 text-center text-xs text-slate-500">Nenhum tópico encontrado.</p>
            ) : (
              topicosFiltrados.map((t) => {
                const status = statusMarcados.get(t.assunto_id) || "nao_iniciado";
                const isConcluido = status === "dominado" || status === "revisando" || status === "estudando";

                return (
                  <div
                    key={t.assunto_id}
                    onClick={() => toggleStatus(t.assunto_id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                      isConcluido
                        ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60 text-slate-900 dark:text-slate-100"
                        : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                          isConcluido
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "border-slate-300 dark:border-slate-600"
                        }`}
                      >
                        {isConcluido && <Check className="w-3 h-3" />}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold truncate">{t.assunto_nome}</p>
                        <p className="text-[10px] text-slate-400">{t.disciplina_nome}</p>
                      </div>
                    </div>

                    <Badge
                      variant={isConcluido ? "success" : "secondary"}
                      className="text-[10px] shrink-0"
                    >
                      {status === "dominado"
                        ? "Dominado"
                        : status === "revisando"
                        ? "Revisando"
                        : status === "estudando"
                        ? "Estudando"
                        : "Não iniciado"}
                    </Badge>
                  </div>
                );
              })
            )}
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={onClose} disabled={salvando}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSalvar}
              isLoading={salvando}
              leftIcon={<Save className="w-4 h-4" />}
            >
              Salvar Alterações
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. MODAL: REVER ASSUNTOS DO PLANO
// ─────────────────────────────────────────────────────────────────────────────
function ModalReverAssuntos({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [edital, setEdital] = useState<EditalVerticalizadoResumo | null>(null);
  const [filtroAba, setFiltroAba] = useState<"todos" | "estudados" | "pendentes" | "dominados">("todos");
  const [filtroTexto, setFiltroTexto] = useState("");

  useEffect(() => {
    async function carregar() {
      if (!user) return;
      try {
        const res = await MentoriaService.getEditalVerticalizado(user.id);
        setEdital(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  const todosTopicos = (edital?.disciplinas || []).flatMap((d) =>
    d.topicos.map((t) => ({ ...t, disciplina_nome: d.disciplina_nome }))
  );

  const topicosFiltrados = todosTopicos.filter((t) => {
    if (filtroTexto && !t.assunto_nome.toLowerCase().includes(filtroTexto.toLowerCase()) && !t.disciplina_nome.toLowerCase().includes(filtroTexto.toLowerCase())) {
      return false;
    }
    if (filtroAba === "estudados") return t.estudado;
    if (filtroAba === "pendentes") return !t.estudado;
    if (filtroAba === "dominados") return t.status === "dominado" || t.taxa_acerto >= 80;
    return true;
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="6. Rever Assuntos do Plano"
      description="Visão analítica de todos os tópicos do edital, percentual de conclusão e taxa de acerto."
      size="xl"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          {/* Métricas Rápidas */}
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
              <p className="text-[10px] text-slate-500 font-bold uppercase">Total Tópicos</p>
              <p className="text-base font-black text-slate-900 dark:text-slate-100">{edital?.total_topicos || 0}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
              <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase">Estudados</p>
              <p className="text-base font-black text-blue-700 dark:text-blue-300">{edital?.topicos_estudados || 0}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60">
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase">Dominados</p>
              <p className="text-base font-black text-emerald-700 dark:text-emerald-300">{edital?.topicos_dominados || 0}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60">
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase">Conclusão</p>
              <p className="text-base font-black text-indigo-700 dark:text-indigo-300">{edital?.percentual_conclusao || 0}%</p>
            </div>
          </div>

          {/* Abas e Filtro */}
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
              {[
                { id: "todos", label: "Todos" },
                { id: "estudados", label: "Estudados" },
                { id: "pendentes", label: "Pendentes" },
                { id: "dominados", label: "Dominados" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFiltroAba(tab.id as any)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    filtroAba === tab.id
                      ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                value={filtroTexto}
                onChange={(e) => setFiltroTexto(e.target.value)}
                placeholder="Filtrar tópico..."
                className="pl-8 pr-3 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
              />
            </div>
          </div>

          {/* Tabela / Lista */}
          <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
            {topicosFiltrados.map((t) => (
              <div
                key={t.assunto_id}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-3 text-xs"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">{t.assunto_nome}</span>
                    <Badge variant={t.peso === "critico" || t.peso === "alto" ? "warning" : "secondary"} className="text-[9px] uppercase">
                      {t.peso}
                    </Badge>
                  </div>
                  <p className="text-[10px] text-slate-400">{t.disciplina_nome}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0 text-right">
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{t.taxa_acerto}% acerto</span>
                    <p className="text-[10px] text-slate-400">{t.questoes_respondidas} qst</p>
                  </div>
                  <Badge variant={t.status === "dominado" ? "success" : t.estudado ? "primary" : "secondary"} className="text-[10px]">
                    {t.status === "dominado" ? "Dominado" : t.estudado ? "Estudado" : "Pendente"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="primary" size="sm" onClick={onClose}>
              Fechar
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. MODAL: PAUSAR PLANO
// ─────────────────────────────────────────────────────────────────────────────
function ModalPausarPlano({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [pausado, setPausado] = useState(false);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    let active = true;
    async function carregar() {
      try {
        const res = await fetch("/api/mentoria/config-plano").then((r) => r.json());
        if (!active) return;
        const cfg = res?.config || {};
        setPausado(Boolean(cfg.pausado));
        const hojeIso = new Date().toISOString().slice(0, 10);
        setDataInicio(cfg.data_inicio_pausa || hojeIso);
        setDataFim(cfg.data_fim_pausa || "");
      } catch (err) {
        console.error(err);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }
    if (isOpen) {
      carregar();
    }
    return () => {
      active = false;
    };
  }, [isOpen]);

  const formatarDDMM = (dataStr: string) => {
    try {
      const parts = dataStr.slice(0, 10).split("-");
      if (parts.length === 3) return `${parts[2]}/${parts[1]}`;
    } catch {}
    return dataStr;
  };

  const handleSalvarPausa = async (ativar: boolean) => {
    setErro(null);
    if (ativar) {
      if (dataInicio && dataFim && dataFim < dataInicio) {
        setErro("A data de término da pausa não pode ser anterior à data de início.");
        return;
      }
    }

    setSalvando(true);
    try {
      const payload = ativar
        ? {
            pausado: true,
            data_inicio_pausa: dataInicio || new Date().toISOString().slice(0, 10),
            data_fim_pausa: dataFim || null,
          }
        : {
            pausado: false,
            data_inicio_pausa: null,
            data_fim_pausa: null,
          };

      const res = await fetch("/api/mentoria/config-plano", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Erro ao salvar pausa do plano");
      }

      setPausado(ativar);
      if (ativar) {
        const msgAviso = dataFim
          ? `Plano pausado até ${formatarDDMM(dataFim)} com sucesso!`
          : "Plano pausado com sucesso! Suas metas ficam congeladas até que você retome.";
        onSuccess(msgAviso);
      } else {
        onSuccess("Plano retomado com sucesso! O ciclo voltou à atividade normal.");
      }
    } catch (err: any) {
      console.error(err);
      setErro(err.message || "Falha ao atualizar status do plano.");
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="7. Pausar ou Retomar o Plano"
      description="Congele seu plano temporariamente com data de início e fim, sem penalidades de atraso nas metas diárias."
      size="md"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-2xl border flex items-start gap-3 ${
              pausado
                ? "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900"
                : "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900"
            }`}
          >
            {pausado ? (
              <PauseCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />
            ) : (
              <PlayCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
            )}
            <div className="text-xs space-y-1">
              <p className="font-bold text-sm text-slate-900 dark:text-slate-100">
                Status Atual: {pausado ? (dataFim ? `Plano Pausado até ${formatarDDMM(dataFim)}` : "Plano Pausado") : "Plano Ativo"}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {pausado
                  ? "Seu ciclo está congelado. Nenhuma tarefa acumula atraso ou altera sua sequência durante o período."
                  : "Seu ciclo está em andamento normal, calculando missões e rotatividade de matérias."}
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Data de Início da Pausa
                </label>
                <input
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Data de Fim da Pausa (opcional)
                </label>
                <input
                  type="date"
                  value={dataFim}
                  min={dataInicio || undefined}
                  onChange={(e) => setDataFim(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>
            </div>

            {erro && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{erro}</span>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={onClose} disabled={salvando}>
              Cancelar
            </Button>
            {pausado ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSalvarPausa(true)}
                  isLoading={salvando}
                  leftIcon={<Save className="w-4 h-4" />}
                >
                  Atualizar Período
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleSalvarPausa(false)}
                  isLoading={salvando}
                  leftIcon={<PlayCircle className="w-4 h-4" />}
                >
                  Retomar Plano
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleSalvarPausa(true)}
                isLoading={salvando}
                leftIcon={<PauseCircle className="w-4 h-4" />}
              >
                Pausar Plano
              </Button>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. MODAL: AJUSTAR DATA FINAL
// ─────────────────────────────────────────────────────────────────────────────
function ModalAjustarDataFinal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [dataProva, setDataProva] = useState("");
  const [perfil, setPerfil] = useState<MentoriaPerfil | null>(null);
  const [disponibilidade, setDisponibilidade] = useState<MentoriaDisponibilidade[]>([]);
  const [edital, setEdital] = useState<EditalVerticalizadoResumo | null>(null);

  useEffect(() => {
    async function carregar() {
      if (!user) return;
      try {
        const [p, d, e] = await Promise.all([
          MentoriaService.getPerfil(user.id),
          MentoriaService.getDisponibilidade(user.id),
          MentoriaService.getEditalVerticalizado(user.id).catch(() => null),
        ]);
        if (p?.data_prova) {
          setDataProva(p.data_prova);
        }
        setPerfil(p);
        setDisponibilidade(d || []);
        setEdital(e);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, [user]);

  const calcularDiasRestantes = () => {
    if (!dataProva) return null;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const alvo = new Date(dataProva + "T00:00:00");
    const diff = alvo.getTime() - hoje.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const dias = calcularDiasRestantes();

  // Cálculo de disponibilidade semanal e diária
  const totalMinutosSemanais = disponibilidade.reduce(
    (acc, curr) => acc + (curr.minutos_disponiveis || 0),
    0
  );
  const mediaMinutosDiariosDisponiveis = totalMinutosSemanais > 0 ? totalMinutosSemanais / 7 : 120;
  const mediaHorasDiariasDisponiveis = mediaMinutosDiariosDisponiveis / 60;
  const horasSemanais = totalMinutosSemanais / 60;

  // Cálculo da carga horária necessária para cobrir o edital
  const topicosRestantes = Math.max(
    1,
    (edital?.total_topicos || 0) > 0
      ? (edital?.total_topicos || 0) - (edital?.topicos_estudados || 0)
      : 20
  );
  const duracaoBlocoMinutos = perfil?.duracao_bloco_minutos || 40;
  const minutosTotaisNecessarios = topicosRestantes * duracaoBlocoMinutos;

  const minutosNecessariosPorDia = dias && dias > 0 ? minutosTotaisNecessarios / dias : 0;
  const horasNecessariasPorDia = minutosNecessariosPorDia / 60;

  const excedeDisponibilidade =
    dias !== null && dias > 0 && minutosNecessariosPorDia > mediaMinutosDiariosDisponiveis;

  const handleSalvar = async () => {
    if (!user) return;

    if (excedeDisponibilidade) {
      const dataFormatada = dataProva
        ? new Date(dataProva + "T00:00:00").toLocaleDateString("pt-BR")
        : "";
      const confirma = window.confirm(
        `Aviso de Sobrecarga de Horários:\n\nPara cobrir os ${topicosRestantes} tópicos restantes até a data ${dataFormatada}, você precisará de ~${horasNecessariasPorDia.toFixed(1)}h por dia (${Math.round(minutosNecessariosPorDia)} min/dia).\n\nSua disponibilidade semanal configurada é de ${horasSemanais.toFixed(1)}h/semana (~${mediaHorasDiariasDisponiveis.toFixed(1)}h/dia).\n\nDeseja salvar e recalcular o plano mesmo com a sobrecarga de carga diária?`
      );
      if (!confirma) return;
    }

    setSalvando(true);
    try {
      await Promise.all([
        MentoriaService.atualizarPerfil(user.id, { data_prova: dataProva || null }),
        fetch("/api/mentoria/config-plano", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data_final: dataProva || null }),
        }),
      ]);
      await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      onSuccess("Data da prova atualizada e ritmo de estudos recalculado!");
    } catch (err) {
      console.error(err);
    } finally {
      setSalvando(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="8. Ajustar Data Final da Prova"
      description="Recalcule o ritmo e a distribuição dos blocos de estudo informando a data prevista da sua prova."
      size="md"
    >
      {loading ? (
        <div className="py-8 flex justify-center items-center">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Data Prevista da Prova
            </label>
            <input
              type="date"
              value={dataProva}
              onChange={(e) => setDataProva(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
            />
          </div>

          {dias !== null && (
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 rounded-xl text-xs flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Contagem Regressiva:</span>
                <span className="font-bold text-blue-700 dark:text-blue-300">
                  {dias > 0 ? `${dias} dias até a prova` : dias === 0 ? "A prova é hoje! 🎯" : "Data no passado"}
                </span>
              </div>

              {dias > 0 && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Carga Diária Necessária</p>
                    <p className={`text-sm font-bold mt-0.5 ${excedeDisponibilidade ? "text-amber-600 dark:text-amber-400" : "text-slate-800 dark:text-slate-200"}`}>
                      ~{horasNecessariasPorDia.toFixed(1)}h/dia
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{Math.round(minutosNecessariosPorDia)} min/dia ({topicosRestantes} tópicos)</p>
                  </div>
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl">
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Disponibilidade Atual</p>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                      ~{mediaHorasDiariasDisponiveis.toFixed(1)}h/dia
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{horasSemanais.toFixed(1)}h/semana configuradas</p>
                  </div>
                </div>
              )}

              {excedeDisponibilidade && (
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex gap-2.5 items-start">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Atenção: Sobrecarga de Horários!</p>
                    <p className="text-[11px] text-amber-700 dark:text-amber-300 mt-0.5">
                      A carga necessária (~{horasNecessariasPorDia.toFixed(1)}h/dia) excede a sua disponibilidade configurada (~{mediaHorasDiariasDisponiveis.toFixed(1)}h/dia). Ao salvar, o plano será recalculado considerando esse ritmo acelerado.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" size="sm" onClick={onClose} disabled={salvando}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSalvar}
              isLoading={salvando}
              leftIcon={<Save className="w-4 h-4" />}
            >
              Salvar e Recalcular Ritmo
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. MODAL: REINICIAR O PLANO (COM CONFIRMAÇÃO EXPLÍCITA "REINICIAR")
// ─────────────────────────────────────────────────────────────────────────────
function ModalReiniciarPlano({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}) {
  const { user } = useAuth();
  const [confirmacaoTexto, setConfirmacaoTexto] = useState("");
  const [reiniciando, setReiniciando] = useState(false);

  const podeReiniciar = confirmacaoTexto.trim() === "REINICIAR";

  const handleReiniciar = async () => {
    if (!user || !podeReiniciar) return;
    setReiniciando(true);
    try {
      await fetch("/api/mentoria/config-plano", { method: "DELETE" });
      await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
      onSuccess("Plano de estudos reiniciado com sucesso! O ciclo recomeçou do Bloco 1.");
    } catch (err) {
      console.error(err);
    } finally {
      setReiniciando(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="9. Reiniciar o Plano de Estudos"
      description="Recomece a sequência do ciclo do zero sem perder seu histórico de questões e simulados."
      size="md"
    >
      <div className="space-y-4">
        {/* Alerta Destrutivo */}
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          <div className="text-xs text-rose-900 dark:text-rose-200 space-y-1.5 leading-relaxed">
            <p className="font-bold text-sm">Atenção: Ação de Reinicialização</p>
            <p>
              Ao reiniciar, a posição atual do ciclo volta para o <strong>Bloco 1</strong> e o
              status das tarefas pendentes é redefinido.
            </p>
            <p className="text-rose-700 dark:text-rose-300/90 font-medium">
              ✓ Seu histórico de respostas, estatísticas de acerto e diagnósticos são preservados intactos.
            </p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Para confirmar, digite exatamente <strong className="text-rose-600 font-mono">REINICIAR</strong>:
          </label>
          <input
            type="text"
            value={confirmacaoTexto}
            onChange={(e) => setConfirmacaoTexto(e.target.value)}
            placeholder="Digite REINICIAR"
            className="w-full px-3 py-2 text-sm font-mono uppercase bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
          />
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <Button variant="ghost" size="sm" onClick={onClose} disabled={reiniciando}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={handleReiniciar}
            disabled={!podeReiniciar}
            isLoading={reiniciando}
            leftIcon={<Trash2 className="w-4 h-4" />}
          >
            Reiniciar Plano de Estudos
          </Button>
        </div>
      </div>
    </Modal>
  );
}
