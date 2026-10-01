import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { MOCK_ASSUNTOS } from "@/data/mockData";
import { Assunto } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const disciplina_id = searchParams.get("disciplina_id") || undefined;

    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (supabase) {
        let query = supabase.from("assuntos").select("*").order("ordem", { ascending: true });

        if (disciplina_id && disciplina_id !== "todos") {
          query = query.eq("disciplina_id", disciplina_id);
        }

        const { data, error } = await query;

        if (!error && data && data.length > 0) {
          const assuntos: Assunto[] = data.map((row: any) => ({
            id: row.id,
            disciplina_id: row.disciplina_id,
            nome: row.nome,
            slug: row.slug,
            descricao: row.descricao ?? undefined,
            ordem: row.ordem ?? 0,
            questoes_count: row.questoes_count ?? 0,
            created_at: row.created_at,
          }));

          return NextResponse.json({
            success: true,
            assuntos,
            fonte: "supabase",
          });
        }
      }
    }

    // Fallback: Mock data
    let assuntos = [...MOCK_ASSUNTOS];
    if (disciplina_id && disciplina_id !== "todos") {
      assuntos = assuntos.filter((a) => a.disciplina_id === disciplina_id);
    }

    return NextResponse.json({
      success: true,
      assuntos,
      fonte: "mock",
    });
  } catch (error: any) {
    console.error("[API /assuntos] Erro:", error);
    return NextResponse.json(
      { success: false, error: "Erro ao buscar assuntos", message: error.message },
      { status: 500 }
    );
  }
}
