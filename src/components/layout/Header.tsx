"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Moon,
  Sun,
  LogOut,
  User as UserIcon,
  ChevronDown,
  Sparkles,
  Search,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { ConcursoSelectorModal } from "@/components/concursos/ConcursoSelectorModal";

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export function Header({ onOpenMobileMenu }: HeaderProps) {
  const { user, logout } = useAuth();
  const { concursoAtivo } = useConcurso();
  const [isConcursoModalOpen, setIsConcursoModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sincronizar tema com localStorage ou preferência do sistema
    const temaSalvo = localStorage.getItem("theme");
    const prefereDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const deveSerDark = temaSalvo === "dark" || (!temaSalvo && prefereDark);

    setIsDarkMode(deveSerDark);
    if (deveSerDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const novoTema = !prev;
      if (novoTema) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return novoTema;
    });
  };

  return (
    <>
      <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: Mobile menu toggle + Concurso active pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Quick Target Concurso trigger */}
          <button
            onClick={() => setIsConcursoModalOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="truncate max-w-[200px] md:max-w-[320px]">
              {concursoAtivo ? concursoAtivo.sigla || concursoAtivo.nome : "Escolher Concurso"}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Right: Search shortcut, theme toggle, notifications, profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick practice link button */}
          <Link
            href="/questoes"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Resolver Questões</span>
          </Link>

          {/* Dark mode switch */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Alternar tema escuro/claro"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Menu Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {user?.nome ? user.nome.charAt(0).toUpperCase() : "A"}
              </div>
              <div className="hidden sm:block text-left text-xs">
                <p className="font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                  {user?.nome || "Alexandre Silva"}
                </p>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {user?.email || "concurseiro@estudos.com"}
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setIsUserMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-30 py-1.5 animate-in zoom-in-95 duration-150">
                  <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      {user?.nome || "Alexandre Silva"}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">
                      {user?.email || "concurseiro@estudos.com"}
                    </p>
                  </div>

                  <Link
                    href="/perfil"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <UserIcon className="w-4 h-4 text-slate-400" />
                    Meu Perfil & Metas
                  </Link>

                  <Link
                    href="/concursos"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    Trocar Concurso Alvo
                  </Link>

                  <div className="border-t border-slate-100 dark:border-slate-800 my-1" />

                  <button
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Sair da Conta
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Concurso Switcher Modal */}
      <ConcursoSelectorModal
        isOpen={isConcursoModalOpen}
        onClose={() => setIsConcursoModalOpen(false)}
      />
    </>
  );
}
