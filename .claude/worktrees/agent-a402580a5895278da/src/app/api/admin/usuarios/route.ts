import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { Profile } from "@/types";
import { MOCK_PROFILE } from "@/data/mockData";

// Lista expandida de usuários mock para demonstração segura quando o Supabase não estiver configurado
const MOCK_USUARIOS_ADMIN: Profile[] = [
  MOCK_PROFILE,
  {
    id: "user-demo-admin-1",
    email: "admin@concursosapp.com.br",
    nome: "Administrador do Sistema",
    avatar_url: null,
    concurso_alvo_id: "concurso-cnu-2024",
    cargo_alvo_id: "cargo-cnu-analista",
    meta_diaria_questoes: 50,
    role: "admin",
    created_at: "2024-01-01T08:00:00Z",
  },
  {
    id: "user-demo-2",
    email: "mariana.costa@gmail.com",
    nome: "Mariana Costa",
    avatar_url: null,
    concurso_alvo_id: "concurso-pf-2025",
    cargo_alvo_id: "cargo-pf-agente",
    meta_diaria_questoes: 40,
    role: "user",
    created_at: "2024-02-15T14:30:00Z",
  },
  {
    id: "user-demo-3",
    email: "carlos.eduardo@outlook.com",
    nome: "Carlos Eduardo Mendes",
    avatar_url: null,
    concurso_alvo_id: "concurso-receita-2025",
    cargo_alvo_id: "cargo-receita-auditor",
    meta_diaria_questoes: 60,
    role: "user",
    created_at: "2024-03-01T09:15:00Z",
  },
  {
    id: "user-demo-4",
    email: "juliana.pedagoga@concursos.com",
    nome: "Profª Juliana Rezende",
    avatar_url: null,
    concurso_alvo_id: "concurso-tcu-2025",
    cargo_alvo_id: "cargo-tcu-auditor",
    meta_diaria_questoes: 20,
    role: "editor",
    created_at: "2024-01-20T11:00:00Z",
  },
  {
    id: "user-demo-5",
    email: "lucas.prf@estudos.com",
    nome: "Lucas Ferreira Lima",
    avatar_url: null,
    concurso_alvo_id: "concurso-prf-2025",
    cargo_alvo_id: "cargo-prf-policial",
    meta_diaria_questoes: 35,
    role: "user",
    created_at: "2024-04-10T16:45:00Z",
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const termo = searchParams.get("termo")?.toLowerCase().trim();
    const role = searchParams.get("role");
    const concurso_id = searchParams.get("concurso_id");

    // ── Supabase path ────────────────────────────────────────────────────────
    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (!supabase) {
        return NextResponse.json(
          { success: false, error: "Supabase indisponível" },
          { status: 503 }
        );
      }

      // Consulta de usuários através da tabela auth / profiles
      let query = supabase
        .from("profiles")
        .select(
          `
          id, email, nome, avatar_url, concurso_alvo_id,
          cargo_alvo_id, meta_diaria_questoes, role, created_at
        `
        )
        .order("created_at", { ascending: false });

      if (role && role !== "todos") {
        query = query.eq("role", role);
      }
      if (concurso_id && concurso_id !== "todos") {
        query = query.eq("concurso_alvo_id", concurso_id);
      }
      if (termo) {
        query = query.or(`nome.ilike.%${termo}%,email.ilike.%${termo}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.warn("[API /admin/usuarios] Fallback de tabela profiles:", error.message);
        // Fallback para mock caso a tabela ainda não tenha sido populada no ambiente
        return NextResponse.json({
          success: true,
          usuarios: MOCK_USUARIOS_ADMIN,
          total: MOCK_USUARIOS_ADMIN.length,
          fonte: "fallback",
        });
      }

      return NextResponse.json({
        success: true,
        usuarios: data ?? [],
        total: (data ?? []).length,
        fonte: "supabase",
      });
    }

    // ── Fallback local / demo ────────────────────────────────────────────────
    let lista = [...MOCK_USUARIOS_ADMIN];

    if (role && role !== "todos") {
      lista = lista.filter((u) => u.role === role);
    }
    if (concurso_id && concurso_id !== "todos") {
      lista = lista.filter((u) => u.concurso_alvo_id === concurso_id);
    }
    if (termo) {
      lista = lista.filter(
        (u) =>
          u.nome.toLowerCase().includes(termo) ||
          u.email.toLowerCase().includes(termo)
      );
    }

    return NextResponse.json({
      success: true,
      usuarios: lista,
      total: lista.length,
      fonte: "mock",
    });
  } catch (error: any) {
    console.error("[API /admin/usuarios] Erro:", error);
    return NextResponse.json(
      { success: false, error: "Erro ao consultar usuários", message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, role, meta_diaria_questoes, concurso_alvo_id } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID do usuário não fornecido." },
        { status: 400 }
      );
    }

    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (supabase) {
        const { error } = await supabase
          .from("profiles")
          .update({
            ...(role && { role }),
            ...(meta_diaria_questoes !== undefined && { meta_diaria_questoes }),
            ...(concurso_alvo_id && { concurso_alvo_id }),
          })
          .eq("id", id);

        if (error) {
          console.error("[API /admin/usuarios] Erro no update Supabase:", error);
          return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
          );
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: "Usuário atualizado com sucesso.",
    });
  } catch (error: any) {
    console.error("[API /admin/usuarios PUT] Erro:", error);
    return NextResponse.json(
      { success: false, error: "Erro ao atualizar usuário", message: error.message },
      { status: 500 }
    );
  }
}
