"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Profile } from "@/types";
import { isSupabaseConfigured, createClient } from "@/lib/supabase/client";

// ── Tipos e Resultados Estruturados ─────────────────────────────────────────
export interface AuthResult {
  success: boolean;
  error?: string;
  code?: string;
  requiresEmailConfirmation?: boolean;
}

interface AuthContextType {
  user: Profile | null;
  isLoading: boolean;
  isSupabaseConnected: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  signup: (nome: string, email: string, password: string, concursoAlvoId?: string) => Promise<AuthResult>;
  resendConfirmationEmail: (email: string) => Promise<AuthResult>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<AuthResult>;
  updateUser: (updates: Partial<Profile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ── Parser de Erros do Supabase com Códigos Estruturados ─────────────────────
function parseAuthError(error: any): { message: string; code: string } {
  if (!error) return { message: "Erro desconhecido de autenticação.", code: "unknown_error" };
  const rawMsg = (error.message || "").toLowerCase();
  const rawCode = (error.code || error.status || "").toString().toLowerCase();

  if (rawMsg.includes("email not confirmed") || rawCode === "email_not_confirmed") {
    return {
      message: "E-mail não confirmado. Por favor, verifique sua caixa de entrada e spam para ativar sua conta.",
      code: "email_not_confirmed",
    };
  }

  if (
    rawMsg.includes("rate limit") ||
    rawMsg.includes("too many requests") ||
    rawCode === "over_email_send_rate_limit" ||
    rawCode === "429"
  ) {
    return {
      message: "Limite de tentativas de envio atingido pelo servidor. Aguarde alguns minutos antes de tentar novamente.",
      code: "over_email_send_rate_limit",
    };
  }

  if (
    rawMsg.includes("invalid login credentials") ||
    rawMsg.includes("invalid_credentials") ||
    rawMsg.includes("invalid username or password")
  ) {
    return {
      message: "E-mail ou senha inválidos. Verifique seus dados e tente novamente.",
      code: "invalid_credentials",
    };
  }

  if (
    rawMsg.includes("user already registered") ||
    rawMsg.includes("already registered") ||
    rawMsg.includes("user_already_exists")
  ) {
    return {
      message: "Já existe uma conta cadastrada com este endereço de e-mail.",
      code: "user_already_exists",
    };
  }

  if (rawMsg.includes("password should be at least")) {
    return {
      message: "A senha deve conter no mínimo 6 caracteres.",
      code: "weak_password",
    };
  }

  return {
    message: error.message || "Ocorreu um erro durante a autenticação.",
    code: error.code || "auth_error",
  };
}

// ── Monta um Profile a partir do objeto User do Supabase ─────────────────────
function buildProfileFromSupabaseUser(supabaseUser: {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
  app_metadata?: Record<string, unknown>;
  created_at?: string;
}): Profile {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email ?? "",
    nome:
      (supabaseUser.user_metadata?.nome as string | undefined) ||
      (supabaseUser.user_metadata?.full_name as string | undefined) ||
      "",
    avatar_url:
      (supabaseUser.user_metadata?.avatar_url as string | null | undefined) ??
      null,
    concurso_alvo_id:
      (supabaseUser.user_metadata?.concurso_alvo_id as string | undefined) ||
      undefined,
    role:
      (supabaseUser.user_metadata?.role as "user" | "admin" | "editor" | undefined) ||
      (supabaseUser.app_metadata?.role as "user" | "admin" | "editor" | undefined) ||
      "user",
    created_at: supabaseUser.created_at ?? new Date().toISOString(),
  };
}

// ── Provider ─────────────────────────────────────────────────────────────────
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // ── Inicialização: carrega a sessão atual do Supabase ─────────────────────
  useEffect(() => {
    if (!isSupabaseConfigured) {
      // Sem Supabase configurado → usuário nulo (nunca logado)
      setUser(null);
      setIsLoading(false);
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    // Lê a sessão atual (token SSR sincronizado pelo middleware)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(buildProfileFromSupabaseUser(session.user));
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    // Ouve mudanças de estado de autenticação em tempo real
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(buildProfileFromSupabaseUser(session.user));
      } else {
        // SESSÃO ENCERRADA — nunca cria usuário visitante/mock
        setUser(null);
        router.push("/login");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  // ── login ─────────────────────────────────────────────────────────────────
  const login = useCallback(
    async (email: string, password: string): Promise<AuthResult> => {
      if (!isSupabaseConfigured) {
        return {
          success: false,
          error: "Autenticação indisponível. Supabase não configurado.",
          code: "supabase_not_configured",
        };
      }

      const supabase = createClient();
      if (!supabase) {
        return {
          success: false,
          error: "Cliente Supabase indisponível.",
          code: "supabase_unavailable",
        };
      }

      setIsLoading(true);
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          const parsed = parseAuthError(error);
          console.error("[Auth] Erro no login:", error.message);
          return { success: false, error: parsed.message, code: parsed.code };
        }

        if (data.session?.user) {
          setUser(buildProfileFromSupabaseUser(data.session.user));
          return { success: true };
        }

        return {
          success: false,
          error: "Sessão não pôde ser estabelecida.",
          code: "no_session",
        };
      } catch (err: any) {
        const parsed = parseAuthError(err);
        console.error("[Auth] Exceção no login:", err);
        return { success: false, error: parsed.message, code: parsed.code };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // ── signup ────────────────────────────────────────────────────────────────
  const signup = useCallback(
    async (
      nome: string,
      email: string,
      password: string,
      concursoAlvoId?: string
    ): Promise<AuthResult> => {
      if (!isSupabaseConfigured) {
        return {
          success: false,
          error: "Cadastro indisponível. Supabase não configurado.",
          code: "supabase_not_configured",
        };
      }

      const supabase = createClient();
      if (!supabase) {
        return {
          success: false,
          error: "Cliente Supabase indisponível.",
          code: "supabase_unavailable",
        };
      }

      setIsLoading(true);
      try {
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              nome,
              concurso_alvo_id: concursoAlvoId ?? null,
            },
            emailRedirectTo: `${origin}/auth/callback`,
          },
        });

        if (error) {
          const parsed = parseAuthError(error);
          console.error("[Auth] Erro no cadastro:", error.message);
          return { success: false, error: parsed.message, code: parsed.code };
        }

        // Se o Supabase exige confirmação de e-mail (data.user existe mas data.session é null)
        if (data.user && !data.session) {
          return {
            success: true,
            requiresEmailConfirmation: true,
          };
        }

        if (data.session?.user) {
          setUser(buildProfileFromSupabaseUser(data.session.user));
          return {
            success: true,
            requiresEmailConfirmation: false,
          };
        }

        return {
          success: true,
          requiresEmailConfirmation: true,
        };
      } catch (err: any) {
        const parsed = parseAuthError(err);
        console.error("[Auth] Exceção no cadastro:", err);
        return { success: false, error: parsed.message, code: parsed.code };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // ── resendConfirmationEmail ───────────────────────────────────────────────
  const resendConfirmationEmail = useCallback(
    async (email: string): Promise<AuthResult> => {
      if (!isSupabaseConfigured) {
        return {
          success: false,
          error: "Supabase não configurado.",
          code: "supabase_not_configured",
        };
      }

      const supabase = createClient();
      if (!supabase) {
        return {
          success: false,
          error: "Cliente Supabase indisponível.",
          code: "supabase_unavailable",
        };
      }

      try {
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        const { error } = await supabase.auth.resend({
          type: "signup",
          email: email.trim(),
          options: {
            emailRedirectTo: `${origin}/auth/callback`,
          },
        });

        if (error) {
          const parsed = parseAuthError(error);
          console.error("[Auth] Erro ao reenviar confirmação:", error.message);
          return { success: false, error: parsed.message, code: parsed.code };
        }

        return { success: true };
      } catch (err: any) {
        const parsed = parseAuthError(err);
        console.error("[Auth] Exceção ao reenviar confirmação:", err);
        return { success: false, error: parsed.message, code: parsed.code };
      }
    },
    []
  );

  // ── logout ────────────────────────────────────────────────────────────────
  const logout = useCallback(async (): Promise<void> => {
    const supabase = createClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    router.push("/login");
  }, [router]);

  // ── resetPassword ─────────────────────────────────────────────────────────
  const resetPassword = useCallback(async (email: string): Promise<AuthResult> => {
    if (!isSupabaseConfigured) {
      return {
        success: false,
        error: "Supabase não configurado.",
        code: "supabase_not_configured",
      };
    }

    const supabase = createClient();
    if (!supabase) {
      return {
        success: false,
        error: "Cliente Supabase indisponível.",
        code: "supabase_unavailable",
      };
    }

    try {
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo: `${origin}/redefinir-senha`,
        }
      );

      if (error) {
        const parsed = parseAuthError(error);
        console.error("[Auth] Erro ao enviar redefinição de senha:", error.message);
        return { success: false, error: parsed.message, code: parsed.code };
      }

      return { success: true };
    } catch (err: any) {
      const parsed = parseAuthError(err);
      console.error("[Auth] Exceção ao redefinir senha:", err);
      return { success: false, error: parsed.message, code: parsed.code };
    }
  }, []);

  // ── updateUser — atualiza apenas os metadados locais do perfil ────────────
  const updateUser = useCallback((updates: Partial<Profile>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isSupabaseConnected: isSupabaseConfigured,
        login,
        signup,
        resendConfirmationEmail,
        logout,
        resetPassword,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
