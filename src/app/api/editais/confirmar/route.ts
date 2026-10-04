import { NextRequest, NextResponse } from "next/server";
import { createAdminClient, createClientServer } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const uploadId = body?.edital_usuario_id, editalId = body?.edital_id;
  const cargoNome = body?.cargo_nome || body?.cargo || null;
  if (!uploadId || !editalId) return NextResponse.json({ error: "edital_usuario_id e edital_id são obrigatórios" }, { status: 400 });

  const { data: upload } = await supabase.from("editais_usuario").select("id,status,estrutura_extraida,edital_id").eq("id", uploadId).eq("usuario_id", user.id).maybeSingle();
  if (!upload || upload.status !== "aguardando_revisao" || !upload.estrutura_extraida) return NextResponse.json({ error: "Não há prévia processada aguardando confirmação." }, { status: 409 });

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  const isStaff = Boolean(profile && ["admin", "editor"].includes(profile.role));
  const admin = createAdminClient();
  let destinationId = String(editalId);
  let privateCopy = false;

  if (!isStaff) {
    // A estrutura enviada por um usuário comum vai para a cópia privada criada
    // para ele, sem alterar a taxonomia do edital oficial compartilhado.
    if (!admin) return NextResponse.json({ error: "Não foi possível preparar seu edital privado. Tente novamente." }, { status: 503 });
    if (!upload.edital_id) {
      return NextResponse.json({ error: "Sua cópia pessoal ainda está sendo preparada. Atualize a prévia e tente confirmar novamente." }, { status: 409 });
    }

    destinationId = upload.edital_id;
    const { data: edital } = await admin.from("editais_concurso").select("id,status,criado_por,concurso_id").eq("id", destinationId).maybeSingle();
    const { data: concurso } = edital
      ? await admin.from("concursos").select("criado_por").eq("id", edital.concurso_id).maybeSingle()
      : { data: null };
    if (!edital || edital.status !== "rascunho" || edital.criado_por !== user.id || concurso?.criado_por !== user.id) {
      return NextResponse.json({ error: "A importação precisa ser confirmada em uma cópia privada sua. Atualize a prévia e tente novamente." }, { status: 403 });
    }
    privateCopy = true;
  } else {
    const { data: edital } = await supabase.from("editais_concurso").select("id").eq("id", destinationId).maybeSingle();
    if (!edital) return NextResponse.json({ error: "Edital de destino não encontrado." }, { status: 404 });
  }

  const { data: res, error: rpcError } = await supabase.rpc("confirmar_edital_usuario", {
    p_upload_id: uploadId,
    p_edital_id: destinationId,
    p_cargo: cargoNome
  });
  if (rpcError) return NextResponse.json({ error: rpcError.message }, { status: 500 });

  return NextResponse.json({ ok: true, edital_id: destinationId, private_copy: privateCopy, total_topicos: (res as any)?.total_topicos ?? 0 });
}
