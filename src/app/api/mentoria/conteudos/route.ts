import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const assuntoId = req.nextUrl.searchParams.get("assunto_id");
  if (!assuntoId) return NextResponse.json({ conteudos: [] });

  const { data, error } = await supabase
    .from("assunto_conteudos")
    .select("id,assunto_id,titulo,orientacao,lei_seca,lei_seca_url,pdf_url,video_url,ordem")
    .eq("assunto_id", assuntoId).eq("ativo", true).order("ordem");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ conteudos: data || [] });
}
