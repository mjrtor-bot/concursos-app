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
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<AuthResult>;
  updateUser: (updates: Partial<Profile>) => Promise<AuthResult>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ── Parser de Erros do Supabase com Códigos Estruturados ─────────────────────
function parseAuthError(error: unknown): { message: string; code: string } {
  if (!error) return { message: "Erro desconhecido de autenticação.", code: "unknown_error" };
  const errObj = typeof error === "object" && error !== null ? (error as Record<string, unknown>) : {};
  const rawMsg = (typeof errObj.message === "string" ? errObj.message : "").toLowerCase();
  const rawCode = (typeof errObj.code === "string" || typeof errObj.code === "number" ? String(errObj.code) : typeof errObj.status === "string" || typeof errObj.status === "number" ? String(errObj.status) : "").toLowerCase();

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
    message: (typeof errObj.message === "string" ? errObj.message : null) || "Ocorreu um erro durante a autenticação.",
    code: (typeof errObj.code === "string" ? errObj.code : null) || "auth_error",
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
    cargo_alvo_id:
      (supabaseUser.user_metadata?.cargo_alvo_id as string | undefined) ||
      undefined,
    meta_diaria_questoes:
      (supabaseUser.user_metadata?.meta_diaria_questoes as number | undefined) ||
      30,
    role:
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
      queueMicrotask(() => {
        setIsLoading(false);
      });
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      queueMicrotask(() => {
        setIsLoading(false);
      });
      return;
    }

    // Lê a sessão atual (token SSR sincronizado pelo middleware)
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const profile = buildProfileFromSupabaseUser(session.user);
        const { data: dbProfile } = await supabase.from("profiles").select("nome,role").eq("id", session.user.id).maybeSingle();
        setUser({ ...profile, nome: dbProfile?.nome || profile.nome, role: (dbProfile?.role as Profile["role"]) || profile.role });
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
        const profile = buildProfileFromSupabaseUser(session.user);
        supabase.from("profiles").select("nome,role").eq("id", session.user.id).maybeSingle().then(({ data: dbProfile }) => setUser({ ...profile, nome: dbProfile?.nome || profile.nome, role: (dbProfile?.role as Profile["role"]) || profile.role }));
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
          const profile = buildProfileFromSupabaseUser(data.session.user);
          const { data: dbProfile } = await supabase.from("profiles").select("nome,role").eq("id", data.session.user.id).maybeSingle();
          setUser({ ...profile, nome: dbProfile?.nome || profile.nome, role: (dbProfile?.role as Profile["role"]) || profile.role });
          return { success: true };
        }

        return {
          success: false,
          error: "Sessão não pôde ser estabelecida.",
          code: "no_session",
        };
      } catch (err: unknown) {
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
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              nome,
              concurso_alvo_id: concursoAlvoId ?? null,
            },
          },
        });

        if (error) {
          const parsed = parseAuthError(error);
          console.error("[Auth] Erro no cadastro:", error.message);
          return { success: false, error: parsed.message, code: parsed.code };
        }

        if (data.session?.user) {
          setUser(buildProfileFromSupabaseUser(data.session.user));
          return {
            success: true,
            requiresEmailConfirmation: false,
          };
        }

        return {
          success: false,
          error: "O cadastro foi criado, mas o Supabase não iniciou uma sessão. Desative Confirm email no Supabase Auth.",
          code: "email_confirmation_still_enabled",
        };
      } catch (err: unknown) {
        const parsed = parseAuthError(err);
        console.error("[Auth] Exceção no cadastro:", err);
        return { success: false, error: parsed.message, code: parsed.code };
      } finally {
        setIsLoading(false);
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
    } catch (err: unknown) {
      const parsed = parseAuthError(err);
      console.error("[Auth] Exceção ao redefinir senha:", err);
      return { success: false, error: parsed.message, code: parsed.code };
    }
  }, []);

  // ── updateUser — Supabase é a fonte autoritativa do perfil autenticado ─────
  const updateUser = useCallback(async (updates: Partial<Profile>): Promise<AuthResult> => {
    const supabase = createClient();
    if (!supabase) return { success: false, error: "Supabase indisponível.", code: "supabase_unavailable" };

    const metadata: Record<string, unknown> = {};
    if (updates.nome !== undefined) metadata.nome = updates.nome;
    if (updates.concurso_alvo_id !== undefined) metadata.concurso_alvo_id = updates.concurso_alvo_id;
    if (updates.cargo_alvo_id !== undefined) metadata.cargo_alvo_id = updates.cargo_alvo_id;
    if (updates.meta_diaria_questoes !== undefined) metadata.meta_diaria_questoes = updates.meta_diaria_questoes;

    const payload: { email?: string; data?: Record<string, unknown> } = {};
    if (updates.email) payload.email = updates.email;
    if (Object.keys(metadata).length) payload.data = metadata;

    const { data, error } = await supabase.auth.updateUser(payload);
    if (error) {
      const parsed = parseAuthError(error);
      return { success: false, error: parsed.message, code: parsed.code };
    }
    if (data.user) setUser(buildProfileFromSupabaseUser(data.user));
    return { success: true };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isSupabaseConnected: isSupabaseConfigured,
        login,
        signup,
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
