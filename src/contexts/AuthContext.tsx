"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Profile } from "@/types";
import { DataService } from "@/services/dataService";
import { isSupabaseConfigured, createClient } from "@/lib/supabase/client";

interface AuthContextType {
  user: Profile | null;
  isLoading: boolean;
  isSupabaseConnected: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  signup: (nome: string, email: string, password?: string, concursoAlvoId?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  updateUser: (updates: Partial<Profile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize demo data once
    DataService.inicializarDadosDemonstracaoSeNecessario();

    if (isSupabaseConfigured) {
      const supabase = createClient();
      if (supabase) {
        supabase.auth.getSession().then(({ data: { session } }) => {
          if (session?.user) {
            setUser({
              id: session.user.id,
              email: session.user.email || "",
              nome: session.user.user_metadata?.nome || "Concurseiro",
              avatar_url: session.user.user_metadata?.avatar_url || null,
              concurso_alvo_id: session.user.user_metadata?.concurso_alvo_id || "concurso-cnu-2024",
              created_at: session.user.created_at,
            });
          } else {
            // Load local mock profile
            const profile = DataService.getProfile();
            setUser(profile);
          }
          setIsLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          (_event, session) => {
            if (session?.user) {
              setUser({
                id: session.user.id,
                email: session.user.email || "",
                nome: session.user.user_metadata?.nome || "Concurseiro",
                avatar_url: session.user.user_metadata?.avatar_url || null,
                created_at: session.user.created_at,
              });
            }
          }
        );

        return () => {
          subscription.unsubscribe();
        };
      }
    }

    // Local mode fallback
    const profile = DataService.getProfile();
    setUser(profile);
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password?: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      if (isSupabaseConfigured) {
        const supabase = createClient();
        if (supabase) {
          const { error } = await supabase.auth.signInWithPassword({
            email,
            password: _password || "123456",
          });
          if (error) throw error;
        }
      }

      // Local mock login
      const current = DataService.getProfile();
      const updated = DataService.updateProfile({
        ...current,
        email,
        nome: email.split("@")[0].replace(".", " ").replace(/^[a-z]/, (c) => c.toUpperCase()) || "Alexandre Silva",
      });
      setUser(updated);
      return true;
    } catch (err) {
      console.error("Login error:", err);
      // Fallback to local profile
      const updated = DataService.updateProfile({ email });
      setUser(updated);
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (
    nome: string,
    email: string,
    _password?: string,
    concursoAlvoId?: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      if (isSupabaseConfigured) {
        const supabase = createClient();
        if (supabase) {
          const { error } = await supabase.auth.signUp({
            email,
            password: _password || "123456",
            options: {
              data: { nome, concurso_alvo_id: concursoAlvoId },
            },
          });
          if (error) throw error;
        }
      }

      const newProfile: Profile = {
        id: `user-${Date.now()}`,
        email,
        nome,
        avatar_url: null,
        concurso_alvo_id: concursoAlvoId || "concurso-cnu-2024",
        meta_diaria_questoes: 30,
        created_at: new Date().toISOString(),
      };
      DataService.updateProfile(newProfile);
      if (concursoAlvoId) {
        DataService.setConcursoAtivoId(concursoAlvoId);
      }
      setUser(newProfile);
      return true;
    } catch (err) {
      console.error("Signup error:", err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    if (isSupabaseConfigured) {
      const supabase = createClient();
      if (supabase) {
        await supabase.auth.signOut();
      }
    }
    // In local mode, just reset to guest/mock
    const guest: Profile = {
      id: "user-demo-guest",
      email: "visitante@concursos.com",
      nome: "Concurseiro Visitante",
      concurso_alvo_id: "concurso-cnu-2024",
      meta_diaria_questoes: 20,
      created_at: new Date().toISOString(),
    };
    setUser(guest);
  };

  const updateUser = (updates: Partial<Profile>) => {
    const updated = DataService.updateProfile(updates);
    setUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isSupabaseConnected: isSupabaseConfigured,
        login,
        signup,
        logout,
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
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
