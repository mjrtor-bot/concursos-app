import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { MOCK_DISCIPLINAS } from "@/data/mockData";
import { Disciplina } from "@/types";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const somenteComQuestoes = url.searchParams.get("com_questoes") === "1";
  const concursoId = url.searchParams.get("concurso_id");
  const editalId = url.searchParams.get("edital_id");
  try {
    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (supabase) {
        let discIdsDoEdital: string[] | null = null;
        if (editalId || concursoId) {
          let edIds: string[] = [];
          if (editalId) {
            edIds = [editalId];
          } else if (concursoId) {
            const { data: directEds } = await supabase
              .from("editais_concurso")
              .select("id")
              .eq("concurso_id", concursoId);
            if (directEds) edIds = directEds.map((e: any) => e.id);
          }
          if (edIds.length > 0) {
            const { data: tops } = await supabase
              .from("edital_topicos")
              .select("disciplina_id")
              .in("edital_id", edIds);
            if (tops && tops.length > 0) {
              discIdsDoEdital = Array.from(new Set(tops.map((t: any) => t.disciplina_id).filter(Boolean)));
            }
          }
        }

        const { data, error } = await supabase
          .from("disciplinas")
          .select("*")
          .order("ordem", { ascending: true });

        if (!error && data && data.length > 0) {
          const { data: contagem } = await supabase.rpc("disciplinas_contagem_questoes");
          const totais = new Map<string, number>(((contagem as any[]) || []).map((c: any) => [c.disciplina_id, Number(c.total)]));
          let linhas = somenteComQuestoes ? data.filter((row: any) => (totais.get(row.id) || 0) > 0) : data;
          if (discIdsDoEdital && discIdsDoEdital.length > 0) {
            linhas = linhas.filter((row: any) => discIdsDoEdital!.includes(row.id));
          }
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
            edital_disciplina_ids: discIdsDoEdital || [],
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
