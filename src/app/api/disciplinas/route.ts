import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { MOCK_DISCIPLINAS } from "@/data/mockData";
import { Disciplina } from "@/types";

export async function GET(request: Request) {
  const somenteComQuestoes = new URL(request.url).searchParams.get("com_questoes") === "1";
  try {
    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (supabase) {
        const { data, error } = await supabase
          .from("disciplinas")
          .select("*")
          .order("ordem", { ascending: true });

        if (!error && data && data.length > 0) {
          const { data: contagem } = await supabase.rpc("disciplinas_contagem_questoes");
          const totais = new Map<string, number>(((contagem as any[]) || []).map((c: any) => [c.disciplina_id, Number(c.total)]));
          const linhas = somenteComQuestoes ? data.filter((row: any) => (totais.get(row.id) || 0) > 0) : data;
          const disciplinas: (Disciplina & { total_questoes: number })[] = linhas.map((row: any) => ({
            total_questoes: totais.get(row.id) || 0,
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
