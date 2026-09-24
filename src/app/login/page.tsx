"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

function sanitizeNext(nextParam: string | null): string {
  if (!nextParam || !nextParam.startsWith("/") || nextParam.startsWith("//")) {
    return "/dashboard";
  }

  if (nextParam.startsWith("/login") || nextParam.startsWith("/cadastro")) {
    return "/dashboard";
  }

  return nextParam;
}

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, user, isLoading: isAuthLoading, isSupabaseConnected } = useAuth();
  const { success, error: showError } = useToast();

  const nextUrl = useMemo(
    () => sanitizeNext(searchParams.get("next")),
    [searchParams]
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [lembrarMe, setLembrarMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthLoading && user) {
      router.replace("/dashboard");
    }
  }, [isAuthLoading, router, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      showError("Por favor, preencha e-mail e senha.");
      return;
    }

    if (!isSupabaseConnected) {
      showError("Autenticação indisponível. Verifique a configuração do Supabase.");
      return;
    }

    setIsSubmitting(true);
    try {
      const ok = await login(email, password);
      if (ok) {
        success("Login realizado com sucesso! Bem-vindo(a) de volta.");
        router.replace(nextUrl);
      } else {
        showError("E-mail ou senha inválidos. Verifique seus dados e tente novamente.");
      }
    } catch {
      showError("Ocorreu um erro ao realizar login. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 font-bold text-2xl tracking-wider">
              C
            </div>
          </Link>
        </div>

        <h2 className="mt-4 text-center text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Acesse sua conta
        </h2>
        <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
          Entre com seu e-mail e senha cadastrados para continuar seus estudos
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 rounded-3xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo E-mail */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Endereço de E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.email@exemplo.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Senha de Acesso
                </label>
                <Link
                  href="/recuperar-senha"
                  className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  tabIndex={-1}
                  aria-label="Alternar visibilidade da senha"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Lembrar-me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={lembrarMe}
                  onChange={(e) => setLembrarMe(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800"
                />
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Lembrar meus dados neste dispositivo
                </span>
              </label>
            </div>

            {/* Botão Entrar */}
            <Button
              type="submit"
              className="w-full mt-2 justify-center py-2.5"
              size="lg"
              isLoading={isSubmitting || isAuthLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Entrar na Plataforma
            </Button>
          </form>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>
              {isSupabaseConnected
                ? "Conexão segura com Supabase Auth"
                : "Supabase não configurado: login real indisponível"}
            </span>
          </div>
        </div>

        {/* Cadastro Link */}
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Ainda não tem uma conta?{" "}
          <Link
            href="/cadastro"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Cadastre-se gratuitamente
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-sm text-slate-500 gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-blue-600" /> Carregando login...
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
