import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function adminClient() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!profile || !["admin", "editor"].includes(profile.role)) {
    return { error: NextResponse.json({ error: "Sem permissão de administrador" }, { status: 403 }) };
  }
  return { supabase };
}

export async function GET(req: NextRequest) {
  const ctx = await adminClient();
  if (ctx.error) return ctx.error;
  const supabase = ctx.supabase!;
  const assuntoId = req.nextUrl.searchParams.get("assunto_id");
  let q = supabase.from("assunto_conteudos").select("*").order("ordem");
  if (assuntoId) q = q.eq("assunto_id", assuntoId);
  const { data, error } = await q;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const conteudos = await Promise.all(
    (data || []).map(async (item) => {
      let signedPdfUrl = item.pdf_url;
      if (item.pdf_path) {
        try {
          const { data: signedData } = await supabase.storage
            .from("materiais-assuntos")
            .createSignedUrl(item.pdf_path, 3600);
          if (signedData?.signedUrl) {
            signedPdfUrl = signedData.signedUrl;
          }
        } catch {
          // Ignore
        }
      }
      return {
        ...item,
        signed_pdf_url: signedPdfUrl || null,
      };
    })
  );

  return NextResponse.json({ conteudos });
}

export async function POST(req: NextRequest) {
  const ctx = await adminClient();
  if (ctx.error) return ctx.error;
  const supabase = ctx.supabase!;
  const body = await req.json();

  if (!body.assunto_id || !body.titulo?.trim()) {
    return NextResponse.json({ error: "Assunto e título são obrigatórios" }, { status: 400 });
  }

  const payload = {
    assunto_id: body.assunto_id,
    titulo: body.titulo.trim(),
    orientacao: body.orientacao || null,
    lei_seca: body.lei_seca || null,
    lei_seca_url: body.lei_seca_url || null,
    pdf_url: body.pdf_url || null,
    video_url: body.video_url || null,
    ordem: Number(body.ordem) || 0,
    ativo: body.ativo !== false,
    pdf_path: body.pdf_path || null,
    pdf_nome: body.pdf_nome || null,
    pdf_tamanho: body.pdf_tamanho ? Number(body.pdf_tamanho) : null,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase.from("assunto_conteudos").insert(payload).select().single();
  return error
    ? NextResponse.json({ error: error.message }, { status: 500 })
    : NextResponse.json({ conteudo: data }, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const ctx = await adminClient();
  if (ctx.error) return ctx.error;
  const supabase = ctx.supabase!;
  const body = await req.json();

  if (!body.id) return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });

  const payload: Record<string, string | number | boolean | null> = {
    titulo: body.titulo?.trim(),
    orientacao: body.orientacao || null,
    lei_seca: body.lei_seca || null,
    lei_seca_url: body.lei_seca_url || null,
    pdf_url: body.pdf_url || null,
    video_url: body.video_url || null,
    ordem: Number(body.ordem) || 0,
    ativo: body.ativo !== false,
    updated_at: new Date().toISOString(),
  };

  if ("pdf_path" in body) payload.pdf_path = body.pdf_path || null;
  if ("pdf_nome" in body) payload.pdf_nome = body.pdf_nome || null;
  if ("pdf_tamanho" in body) payload.pdf_tamanho = body.pdf_tamanho ? Number(body.pdf_tamanho) : null;

  const { data, error } = await supabase.from("assunto_conteudos").update(payload).eq("id", body.id).select().single();
  return error
    ? NextResponse.json({ error: error.message }, { status: 500 })
    : NextResponse.json({ conteudo: data });
}

export async function DELETE(req: NextRequest) {
  const ctx = await adminClient();
  if (ctx.error) return ctx.error;
  const supabase = ctx.supabase!;
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });

  // Buscar registro para verificar se há arquivo em storage para remover
  const { data: item } = await supabase
    .from("assunto_conteudos")
    .select("pdf_path")
    .eq("id", id)
    .maybeSingle();

  if (item?.pdf_path) {
    try {
      await supabase.storage.from("materiais-assuntos").remove([item.pdf_path]);
    } catch (e) {
      console.warn("Aviso ao remover arquivo do bucket:", e);
    }
  }

  const { error } = await supabase.from("assunto_conteudos").delete().eq("id", id);
  return error
    ? NextResponse.json({ error: error.message }, { status: 500 })
    : NextResponse.json({ success: true });
}
