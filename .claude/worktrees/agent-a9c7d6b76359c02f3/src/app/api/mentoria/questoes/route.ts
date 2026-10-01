import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { MentoriaQuestoesService } from "@/services/mentoriaQuestoesService";
import { MentoriaNivelCalculado, MentoriaTarefaTipo } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const disciplinaId = searchParams.get("disciplinaId") || "";
    const disciplinaNome = searchParams.get("disciplinaNome") || "";
    const assuntoId = searchParams.get("assuntoId") || undefined;
    const quantidade = parseInt(searchParams.get("quantidade") || "10", 10);
    const nivel = (searchParams.get("nivel") as MentoriaNivelCalculado) || "intermediario";
    const tipoBloco = (searchParams.get("tipoBloco") as MentoriaTarefaTipo) || "QUESTOES";
    const apenasErros = searchParams.get("apenasErros") === "true";

    let usuarioId = "";

    if (isSupabaseConfigured) {
      const supabase = await createClientServer();
      if (supabase) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          usuarioId = user.id;
        }
      }
    }

    const resultado = await MentoriaQuestoesService.selecionarQuestoesParaBloco({
      usuarioId,
      disciplinaId,
      disciplinaNome,
      assuntoId,
      quantidade,
      nivelUsuario: nivel,
      tipoBloco,
      apenasErros,
    });

    return NextResponse.json({
      success: true,
      data: resultado,
    });
  } catch (error: any) {
    console.error("[API /api/mentoria/questoes] Erro:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Erro ao selecionar questões" },
      { status: 500 }
    );
  }
}
