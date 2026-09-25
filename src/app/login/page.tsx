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
  AlertCircle,
  Clock,
  Send,
  Loader2,
  ShieldAlert,
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
  const { login, resendConfirmationEmail, user, isLoading: isAuthLoading, isSupabaseConnected } = useAuth();
  const { success, error: showError } = useToast();

  const nextUrl = useMemo(
    () => sanitizeNext(searchParams.get("next")),
    [searchParams]
  );

  const initialEmail = useMemo(
    () => searchParams.get("email") || "",
    [searchParams]
  );

  const isJustRegistered = useMemo(
    () => searchParams.get("registered") === "true",
    [searchParams]
  );

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [lembrarMe, setLembrarMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estados para Tratamento Específico de E-mail Não Confirmado & Rate Limit
  const [unconfirmedEmail, setUnconfirmedEmail] = useState<string | null>(null);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendError, setResendError] = useState<string | null>(null);
  const [resendSuccess, setResendSuccess] = useState(false);

  // Redireciona se usuário já estiver autenticado
  useEffect(() => {
    if (!isAuthLoading && user) {
      router.replace("/dashboard");
    }
  }, [isAuthLoading, router, user]);

  // Temporizador de Cooldown para Reenvio de E-mail (evita 429 - rate limit)
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUnconfirmedEmail(null);
    setResendError(null);
    setResendSuccess(false);

    if (!email.trim() || !password.trim()) {
      showError("Por favor, preencha e-mail e senha.");
      return;
    }

    if (!isSupabaseConnected) {
      showError("Autenticação indisponível. Supabase não configurado.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await login(email, password);
      if (result.success) {
        success("Login realizado com sucesso! Bem-vindo(a) de volta.");
        router.replace(nextUrl);
      } else {
        if (result.code === "email_not_confirmed") {
          setUnconfirmedEmail(email.trim());
          showError("Seu e-mail ainda não foi confirmado.");
        } else {
          showError(result.error || "E-mail ou senha inválidos.");
        }
      }
    } catch {
      showError("Ocorreu um erro ao realizar login. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendConfirmation = async () => {
    const targetEmail = unconfirmedEmail || email.trim();
    if (!targetEmail) return;

    setIsResending(true);
    setResendError(null);
    setResendSuccess(false);

    try {
      const result = await resendConfirmationEmail(targetEmail);
      if (result.success) {
        setResendSuccess(true);
        setResendCooldown(60); // 60 segundos de cooldown
        success("E-mail de confirmação reenviado com sucesso! Verifique sua caixa de entrada e spam.");
      } else {
        if (result.code === "over_email_send_rate_limit") {
          setResendCooldown(120); // 2 minutos se atingiu limite
          setResendError("Limite de disparos do servidor atingido. Aguarde alguns minutos antes de tentar novamente.");
        } else {
          setResendError(result.error || "Não foi possível reenviar o e-mail de confirmação.");
        }
      }
    } catch {
      setResendError("Erro inesperado ao solicitar reenvio.");
    } finally {
      setIsResending(false);
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

          {/* Banner de Cadastro Recente / E-mail de confirmação necessário */}
          {isJustRegistered && !unconfirmedEmail && (
            <div className="p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-2xl text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Conta criada com sucesso!</span>
              </div>
              <p className="leading-relaxed">
                Um e-mail com o link de ativação foi enviado para o seu endereço. Se o seu projeto exigir confirmação de e-mail, valide-o antes do primeiro login.
              </p>
            </div>
          )}

          {/* Alerta Destacado: E-mail Não Confirmado com Ação Direta de Reenvio */}
          {unconfirmedEmail && (
            <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl text-xs text-amber-900 dark:text-amber-200 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-sm block">Confirmação de E-mail Pendente</span>
                  <p className="leading-relaxed text-amber-800 dark:text-amber-300">
                    O e-mail <strong className="font-semibold text-amber-950 dark:text-amber-100">{unconfirmedEmail}</strong> ainda não foi ativado no Supabase. Verifique sua caixa de entrada e spam.
                  </p>
                </div>
              </div>

              {resendError && (
                <div className="p-2.5 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 rounded-xl text-red-700 dark:text-red-300 text-[11px] flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{resendError}</span>
                </div>
              )}

              {resendSuccess && (
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 rounded-xl text-emerald-700 dark:text-emerald-300 text-[11px] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>E-mail reenviado! Verifique sua caixa de entrada agora.</span>
                </div>
              )}

              <div className="pt-1 flex items-center justify-between">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleResendConfirmation}
                  disabled={isResending || resendCooldown > 0}
                  className="w-full justify-center bg-white dark:bg-slate-800 border-amber-300 dark:border-amber-800 hover:bg-amber-100/50 dark:hover:bg-amber-900/30 text-amber-900 dark:text-amber-100 text-xs font-semibold py-2"
                  leftIcon={
                    isResending ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : resendCooldown > 0 ? (
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                    ) : (
                      <Send className="w-3.5 h-3.5 text-amber-600" />
                    )
                  }
                >
                  {isResending
                    ? "Reenviando confirmação..."
                    : resendCooldown > 0
                    ? `Aguarde ${resendCooldown}s para reenviar`
                    : "Reenviar e-mail de confirmação"}
                </Button>
              </div>
            </div>
          )}

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
