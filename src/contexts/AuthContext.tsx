"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Profile } from "@/types";
import { isSupabaseConfigured, createClient } from "@/lib/supabase/client";

// ── Tipos ────────────────────────────────────────────────────────────────────
interface AuthContextType {
  user: Profile | null;
  isLoading: boolean;
  isSupabaseConnected: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (nome: string, email: string, password: string, concursoAlvoId?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<boolean>;
  updateUser: (updates: Partial<Profile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
    async (email: string, password: string): Promise<boolean> => {
      if (!isSupabaseConfigured) {
        // Sem Supabase configurado → autenticação impossível
        return false;
      }

      const supabase = createClient();
      if (!supabase) return false;

      setIsLoading(true);
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          console.error("[Auth] Erro no login:", error.message);
          return false;
        }

        if (data.session?.user) {
          setUser(buildProfileFromSupabaseUser(data.session.user));
          return true;
        }

        return false;
      } catch (err) {
        console.error("[Auth] Exceção no login:", err);
        return false;
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
    ): Promise<boolean> => {
      if (!isSupabaseConfigured) return false;

      const supabase = createClient();
      if (!supabase) return false;

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
          console.error("[Auth] Erro no cadastro:", error.message);
          return false;
        }

        // Cadastro com confirmação de e-mail pendente
        if (data.user && !data.session) {
          return true; // usuário criado, mas precisa confirmar e-mail
        }

        if (data.session?.user) {
          setUser(buildProfileFromSupabaseUser(data.session.user));
          return true;
        }

        return false;
      } catch (err) {
        console.error("[Auth] Exceção no cadastro:", err);
        return false;
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
    // Limpa o estado local — onAuthStateChange também vai acionar isso,
    // mas garantimos a limpeza imediata
    setUser(null);
    router.push("/login");
  }, [router]);

  // ── resetPassword ─────────────────────────────────────────────────────────
  const resetPassword = useCallback(async (email: string): Promise<boolean> => {
    if (!isSupabaseConfigured) return false;

    const supabase = createClient();
    if (!supabase) return false;

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo: `${window.location.origin}/reset`,
        }
      );

      if (error) {
        console.error("[Auth] Erro ao enviar redefinição de senha:", error.message);
        return false;
      }

      return true;
    } catch (err) {
      console.error("[Auth] Exceção ao redefinir senha:", err);
      return false;
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
