import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";

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

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return NextResponse.json({ success:false, error:"Não autenticado." }, { status:401 });
      const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
      if (!me || !["admin","editor"].includes(me.role)) return NextResponse.json({ success:false, error:"Sem permissão." }, { status:403 });

      // Consulta de usuários através da tabela profiles
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
        console.error("[API /admin/usuarios] Erro Supabase:", error.message);
        return NextResponse.json({ success:false, error:"Falha ao consultar usuários." }, { status:500 });
      }

      return NextResponse.json({
        success: true,
        usuarios: data ?? [],
        total: (data ?? []).length,
        fonte: "supabase",
      });
    }

    return NextResponse.json({ success:false, error:"Supabase não configurado." }, { status:503 });
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
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return NextResponse.json({ success:false, error:"Não autenticado." }, { status:401 });
        const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
        if (!me || !["admin","editor"].includes(me.role)) return NextResponse.json({ success:false, error:"Sem permissão." }, { status:403 });
        if (role && !["user","admin","editor"].includes(role)) return NextResponse.json({ success:false, error:"Role inválido." }, { status:400 });
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
