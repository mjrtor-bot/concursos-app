import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const uploadId = body?.edital_usuario_id, editalId = body?.edital_id;
  if (!uploadId || !editalId) return NextResponse.json({ error: "edital_usuario_id e edital_id são obrigatórios" }, { status: 400 });

  const { data: upload } = await supabase.from("editais_usuario").select("id,status,estrutura_extraida").eq("id", uploadId).eq("usuario_id", user.id).maybeSingle();
  if (!upload || upload.status !== "aguardando_revisao" || !upload.estrutura_extraida) return NextResponse.json({ error: "Não há prévia processada aguardando confirmação." }, { status: 409 });

  const { data: edital } = await supabase.from("editais_concurso").select("id").eq("id", editalId).maybeSingle();
  if (!edital) return NextResponse.json({ error: "Edital de destino não encontrado." }, { status: 404 });

  const { data: res, error: rpcError } = await supabase.rpc("confirmar_edital_usuario", {
    p_upload_id: uploadId,
    p_edital_id: editalId
  });
  if (rpcError) return NextResponse.json({ error: rpcError.message }, { status: 500 });

  return NextResponse.json({ ok: true, total_topicos: res.total_topicos });
}
