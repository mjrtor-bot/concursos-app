import { NextRequest, NextResponse } from "next/server";
import { createAdminClient, createClientServer } from "@/lib/supabase/server";
import { materializarImportado, ImportadoItem } from "@/lib/editais/materializarImportado";

export async function POST(request: NextRequest) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const uploadId = body?.edital_usuario_id;
  const cargoNome = body?.cargo_nome || body?.cargo || null;
  if (!uploadId) {
    return NextResponse.json({ error: "edital_usuario_id é obrigatório" }, { status: 400 });
  }

  const { data: upload } = await supabase
    .from("editais_usuario")
    .select("id,nome,orgao_nome,cargo,uf,status,arquivo_nome,estrutura_extraida,edital_id")
    .eq("id", uploadId)
    .eq("usuario_id", user.id)
    .maybeSingle();

  if (!upload || !upload.estrutura_extraida) {
    return NextResponse.json({ error: "Não há prévia processada para este edital." }, { status: 409 });
  }

  if (upload.status === "confirmado" && upload.edital_id) {
    return NextResponse.json({
      ok: true,
      edital_id: upload.edital_id,
      private_copy: true,
      message: "Edital já estava confirmado.",
    });
  }

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  const isStaff = Boolean(profile && ["admin", "editor"].includes(profile.role));
  const admin = createAdminClient();

  const sourceUrl = request.nextUrl.origin || "https://concursos.app";

  if (!isStaff) {
    if (!admin) {
      return NextResponse.json({ error: "Não foi possível preparar seu edital privado. Tente novamente." }, { status: 503 });
    }

    // Materializar ou garantir que a cópia privada e os tópicos existem
    let destinationId: string;
    try {
      destinationId = await materializarImportado(
        admin,
        upload as unknown as ImportadoItem,
        sourceUrl,
        user.id,
        cargoNome || upload.cargo
      );
    } catch (err: any) {
      return NextResponse.json({ error: err?.message || "Falha ao materializar tópicos do edital." }, { status: 500 });
    }

    const { count } = await admin
      .from("edital_topicos")
      .select("id", { count: "exact", head: true })
      .eq("edital_id", destinationId);

    const now = new Date().toISOString();
    const { error: confirmarError } = await admin
      .from("editais_usuario")
      .update({
        status: "confirmado",
        edital_id: destinationId,
        confirmado_em: now,
        updated_at: now
      })
      .eq("id", uploadId)
      .eq("usuario_id", user.id);

    if (confirmarError) {
      return NextResponse.json({ error: confirmarError.message }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      edital_id: destinationId,
      private_copy: true,
      total_topicos: count || 0,
    });
  } else {
    // Para staff, se foi passado um edital_id oficial existente que queira popular globalmente:
    const editalId = body?.edital_id || upload.edital_id;
    if (editalId) {
      const { data: edital } = await supabase.from("editais_concurso").select("id").eq("id", editalId).maybeSingle();
      if (edital) {
        const { data: res, error: rpcError } = await supabase.rpc("confirmar_edital_usuario", {
          p_upload_id: uploadId,
          p_edital_id: editalId,
          p_cargo: cargoNome
        });
        if (!rpcError) {
          return NextResponse.json({
            ok: true,
            edital_id: editalId,
            private_copy: false,
            total_topicos: (res as any)?.total_topicos ?? 0
          });
        }
      }
    }

    // Se não for edital de catálogo oficial ou RPC falhar, materializa como cópia privada
    if (!admin) {
      return NextResponse.json({ error: "Serviço administrativo indisponível." }, { status: 503 });
    }

    const destinationId = await materializarImportado(
      admin,
      upload as unknown as ImportadoItem,
      sourceUrl,
      user.id,
      cargoNome || upload.cargo
    );

    const { count } = await admin
      .from("edital_topicos")
      .select("id", { count: "exact", head: true })
      .eq("edital_id", destinationId);

    const now = new Date().toISOString();
    await admin
      .from("editais_usuario")
      .update({
        status: "confirmado",
        edital_id: destinationId,
        confirmado_em: now,
        updated_at: now
      })
      .eq("id", uploadId)
      .eq("usuario_id", user.id);

    return NextResponse.json({
      ok: true,
      edital_id: destinationId,
      private_copy: true,
      total_topicos: count || 0,
    });
  }
}
