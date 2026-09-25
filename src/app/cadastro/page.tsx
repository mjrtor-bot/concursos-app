"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { DataService } from "@/services/dataService";
import { Concurso } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Clock,
  Send,
  Loader2,
  ShieldCheck,
} from "lucide-react";

export default function CadastroPage() {
  const router = useRouter();
  const { signup, resendConfirmationEmail, isSupabaseConnected } = useAuth();
  const { success, error: showError } = useToast();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [concursoAlvoId, setConcursoAlvoId] = useState("");
  const [concursos, setConcursos] = useState<Concurso[]>([]);
  const [aceitouTermos, setAceitouTermos] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Estado de confirmação de e-mail pendente pós-cadastro
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    try {
      const lista = DataService.getConcursos();
      setConcursos(lista);
      if (lista.length > 0) {
        setConcursoAlvoId(lista[0].id);
      }
    } catch {
      // Fallback
    }
  }, []);

  // Cooldown timer para reenvio
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !email.trim() || !password.trim()) {
      showError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (password.length < 6) {
      showError("A senha deve conter no mínimo 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      showError("As senhas digitadas não coincidem.");
      return;
    }

    if (!aceitouTermos) {
      showError("É necessário aceitar os termos de uso para continuar.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await signup(nome, email, password, concursoAlvoId);
      if (result.success) {
        if (result.requiresEmailConfirmation) {
          setRegisteredEmail(email.trim());
          setResendCooldown(60);
          success("Conta criada com sucesso! Verifique seu e-mail para ativar.");
        } else {
          success("Conta criada com sucesso! Bem-vindo(a) à plataforma.");
          router.push("/onboarding");
        }
      } else {
        showError(result.error || "Não foi possível concluir o cadastro.");
      }
    } catch {
      showError("Ocorreu um erro ao criar a conta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (!registeredEmail) return;
    setIsResending(true);
    try {
      const result = await resendConfirmationEmail(registeredEmail);
      if (result.success) {
        setResendCooldown(60);
        success("E-mail de confirmação reenviado com sucesso!");
      } else {
        if (result.code === "over_email_send_rate_limit") {
          setResendCooldown(120);
          showError("Limite de envio atingido pelo servidor. Aguarde alguns minutos.");
        } else {
          showError(result.error || "Erro ao reenviar e-mail de confirmação.");
        }
      }
    } catch {
      showError("Erro inesperado ao reenviar confirmação.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 font-bold text-2xl tracking-wider">
              C
            </div>
          </Link>
        </div>

        <h2 className="mt-4 text-center text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          {registeredEmail ? "Verifique seu e-mail" : "Crie sua conta gratuita"}
        </h2>
        <p className="mt-1 text-center text-sm text-slate-500 dark:text-slate-400">
          {registeredEmail
            ? "Enviamos um link de confirmação para ativar sua conta"
            : "Acelere sua aprovação com questões comentadas, simulados e IA"}
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white dark:bg-slate-900 py-8 px-6 sm:px-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-800 rounded-3xl space-y-6">

          {registeredEmail ? (
            /* Tela de Confirmação de E-mail Pendente */
            <div className="text-center space-y-5 py-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                <Mail className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Quase pronto! Confirme seu cadastro
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
                  Enviamos uma mensagem de ativação para{" "}
                  <strong className="text-slate-900 dark:text-slate-100 font-semibold">{registeredEmail}</strong>.
                  Clique no botão dentro do e-mail para validar sua conta e começar.
                </p>
              </div>

              <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-2 text-left">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Não encontrou a mensagem? Verifique sua <strong>caixa de Spam ou Lixo Eletrônico</strong>. Se necessário, solicite um novo envio abaixo.
                </span>
              </div>

              <div className="pt-2 space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={handleResend}
                  disabled={isResending || resendCooldown > 0}
                  className="w-full justify-center text-xs"
                  leftIcon={
                    isResending ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : resendCooldown > 0 ? (
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                    ) : (
                      <Send className="w-3.5 h-3.5 text-blue-600" />
                    )
                  }
                >
                  {isResending
                    ? "Reenviando confirmação..."
                    : resendCooldown > 0
                    ? `Aguarde ${resendCooldown}s para reenviar`
                    : "Reenviar e-mail de confirmação"}
                </Button>

                <Link
                  href={`/login?registered=true&email=${encodeURIComponent(registeredEmail)}`}
                  className="block"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Ir para a Página de Login
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            /* Formulário Principal de Cadastro */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome Completo */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Nome Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex.: Alexandre Silva"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  E-mail Principal
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

              {/* Grid Senha e Confirmação */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Senha
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mínimo 6 dígitos"
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repita a senha"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Concurso Alvo Inicial */}
              <div>
                <label
                  htmlFor="concursoAlvo"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5"
                >
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Qual é o seu Concurso Alvo Principal?
                </label>
                <select
                  id="concursoAlvo"
                  value={concursoAlvoId}
                  onChange={(e) => setConcursoAlvoId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  {concursos.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.sigla} - {c.nome} ({c.banca})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1">
                  Você poderá trocar seu concurso alvo ou adicionar novos a qualquer momento.
                </p>
              </div>

              {/* Termos de Uso */}
              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={aceitouTermos}
                    onChange={(e) => setAceitouTermos(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800"
                  />
                  <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Concordo com os{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Termos de Uso
                    </span>{" "}
                    e a{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Política de Privacidade
                    </span>{" "}
                    da plataforma ConcursosApp.
                  </span>
                </label>
              </div>

              {/* Botão Cadastrar */}
              <Button
                type="submit"
                className="w-full mt-2 justify-center py-2.5"
                size="lg"
                isLoading={isLoading}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Criar Conta e Iniciar Preparação
              </Button>
            </form>
          )}

          {/* Destaques de Benefícios */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Banco com 1.260+ questões reais</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Caderno de erros inteligente</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Simulados com cronômetro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Explicações por especialistas</span>
            </div>
          </div>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Faça login aqui
          </Link>
        </p>
      </div>
    </div>
  );
}
