import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { MentoriaQuestoesService } from "@/services/mentoriaQuestoesService";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const disciplinaId = searchParams.get("disciplinaId") || undefined;

    if (!isSupabaseConfigured) {
      return NextResponse.json({ success: true, data: [] });
    }

    const supabase = await createClientServer();
    if (!supabase) {
      return NextResponse.json({ success: true, data: [] });
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: "Não autenticado" }, { status: 401 });
    }

    const revisoes = await MentoriaQuestoesService.obterRevisoesPendentes(user.id, disciplinaId);

    return NextResponse.json({
      success: true,
      data: revisoes,
    });
  } catch (error: any) {
    console.error("[API /api/mentoria/revisoes] Erro GET:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Erro ao buscar revisões" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json({ success: false, error: "Supabase não configurado" }, { status: 500 });
    }

    const supabase = await createClientServer();
    if (!supabase) {
      return NextResponse.json({ success: false, error: "Supabase indisponível" }, { status: 500 });
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: "Não autenticado" }, { status: 401 });
    }

    const body = await request.json();
    const { revisaoId, acertou } = body;

    if (!revisaoId) {
      return NextResponse.json({ success: false, error: "revisaoId é obrigatório" }, { status: 400 });
    }

    const resultado = await MentoriaQuestoesService.processarProgressoRevisao(
      user.id,
      revisaoId,
      Boolean(acertou)
    );

    return NextResponse.json({
      success: true,
      data: resultado,
    });
  } catch (error: any) {
    console.error("[API /api/mentoria/revisoes] Erro POST:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Erro ao processar revisão" },
      { status: 500 }
    );
  }
}
