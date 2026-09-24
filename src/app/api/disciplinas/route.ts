import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { MOCK_DISCIPLINAS } from "@/data/mockData";
import { Disciplina } from "@/types";

export async function GET() {
  try {
    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (supabase) {
        const { data, error } = await supabase
          .from("disciplinas")
          .select("*")
          .order("ordem", { ascending: true });

        if (!error && data && data.length > 0) {
          const disciplinas: Disciplina[] = data.map((row: any) => ({
            id: row.id,
            nome: row.nome,
            slug: row.slug,
            descricao: row.descricao ?? undefined,
            icone: row.icone ?? "BookOpen",
            cor: row.cor ?? "#3b82f6",
            ordem: row.ordem ?? 0,
            created_at: row.created_at,
          }));

          return NextResponse.json({
            success: true,
            disciplinas,
            fonte: "supabase",
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      disciplinas: MOCK_DISCIPLINAS,
      fonte: "mock",
    });
  } catch (error: any) {
    console.error("[API /disciplinas] Erro:", error);
    return NextResponse.json(
      { success: false, error: "Erro ao buscar disciplinas", message: error.message },
      { status: 500 }
    );
  }
}
