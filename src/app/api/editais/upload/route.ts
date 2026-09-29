import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const MAX_BYTES = 20 * 1024 * 1024;

function safeName(name: string) {
  const base = name.replace(/[^a-zA-Z0-9._-]/g, "_").replace(/_+/g, "_");
  return base.toLowerCase().endsWith(".pdf") ? base : base + ".pdf";
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const form = await request.formData();
  const file = form.get("arquivo");
  if (!(file instanceof File)) return NextResponse.json({ error: "PDF obrigatório" }, { status: 400 });
  if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Envie somente arquivo PDF válido." }, { status: 415 });
  }
  if (file.size <= 0 || file.size > MAX_BYTES) {
    return NextResponse.json({ error: "O PDF deve ter no máximo 20 MB." }, { status: 413 });
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  if (bytes.length < 5 || String.fromCharCode(...bytes.slice(0,5)) !== "%PDF-") {
    return NextResponse.json({ error: "O conteúdo enviado não possui assinatura de PDF." }, { status: 415 });
  }

  const path = `${user.id}/${crypto.randomUUID()}-${safeName(file.name)}`;
  const { error: storageError } = await supabase.storage.from("editais-usuario").upload(path, bytes, {
    contentType: "application/pdf",
    upsert: false,
  });
  if (storageError) return NextResponse.json({ error: storageError.message }, { status: 500 });

  const nome = String(form.get("nome") || file.name.replace(/\.pdf$/i, "")).slice(0,250);
  const { data, error } = await supabase.from("editais_usuario").insert({
    usuario_id: user.id,
    nome,
    orgao_nome: String(form.get("orgao") || "").slice(0,200) || null,
    cargo: String(form.get("cargo") || "").slice(0,200) || null,
    uf: String(form.get("uf") || "").slice(0,2).toUpperCase() || null,
    arquivo_path: path,
    arquivo_nome: safeName(file.name),
    arquivo_tamanho: file.size,
    mime_type: "application/pdf",
    status: "aguardando_processamento",
  }).select("id,nome,status,created_at").single();

  if (error) {
    await supabase.storage.from("editais-usuario").remove([path]);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    edital: data,
    message: "PDF armazenado com segurança. A extração estruturada ainda depende do processador de PDF e ficará pendente até essa etapa ser configurada.",
  }, { status: 201 });
}
