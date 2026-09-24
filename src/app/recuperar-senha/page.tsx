"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

export default function RecuperarSenhaPage() {
  const { resetPassword, isSupabaseConnected } = useAuth();
  const { success, error: showError } = useToast();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      showError("Por favor, informe seu e-mail cadastrado.");
      return;
    }

    setIsLoading(true);
    try {
      const ok = await resetPassword(email);
      if (ok) {
        setEnviadoComSucesso(true);
        success("Instruções de recuperação enviadas para o seu e-mail!");
      } else {
        showError("Não foi possível enviar o e-mail. Verifique o endereço digitado.");
      }
    } catch {
      showError("Ocorreu um erro ao processar a solicitação. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 font-bold text-2xl tracking-wider">
              C
            </div>
          </Link>
        </div>

        <h2 className="mt-4 text-center text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Recuperar sua senha
        </h2>
        <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
          Enviaremos um link seguro para você redefinir sua senha de acesso
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 rounded-3xl space-y-6">
          {enviadoComSucesso ? (
            <div className="text-center space-y-4 py-2">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  E-mail Enviado com Sucesso!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                  Enviamos o link de recuperação para{" "}
                  <strong className="text-slate-800 dark:text-slate-200">{email}</strong>.
                  Verifique também sua caixa de spam ou lixo eletrônico.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/login">
                  <Button
                    variant="primary"
                    className="w-full justify-center"
                    size="lg"
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                  >
                    Voltar para a Página de Login
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  E-mail da sua conta
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

              {/* Botão Enviar Link */}
              <Button
                type="submit"
                className="w-full mt-2 justify-center py-2.5"
                size="lg"
                isLoading={isLoading}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Enviar Link de Redefinição
              </Button>
            </form>
          )}

          {/* Dica de Segurança */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>
              {isSupabaseConnected
                ? "Autenticação Criptografada Supabase Auth"
                : "Modo Local Seguro de Demonstração"}
            </span>
          </div>
        </div>

        {/* Voltar ao Login */}
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Lembrou sua senha?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  );
}
