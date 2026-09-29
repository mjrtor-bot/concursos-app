import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function adminClient() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!profile || !["admin", "editor"].includes(profile.role)) return { error: NextResponse.json({ error: "Sem permissão" }, { status: 403 }) };
  return { supabase };
}

export async function GET(req: NextRequest) {
  const ctx = await adminClient(); if (ctx.error) return ctx.error; const supabase = ctx.supabase!;
  const assuntoId = req.nextUrl.searchParams.get("assunto_id");
  let q = supabase.from("assunto_conteudos").select("*").order("ordem");
  if (assuntoId) q = q.eq("assunto_id", assuntoId);
  const { data, error } = await q;
  return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ conteudos: data || [] });
}
export async function POST(req: NextRequest) {
  const ctx = await adminClient(); if (ctx.error) return ctx.error; const supabase = ctx.supabase!;
  const body = await req.json();
  if (!body.assunto_id || !body.titulo?.trim()) return NextResponse.json({ error: "Assunto e título são obrigatórios" }, { status: 400 });
  const payload = { assunto_id: body.assunto_id, titulo: body.titulo.trim(), orientacao: body.orientacao || null, lei_seca: body.lei_seca || null, lei_seca_url: body.lei_seca_url || null, pdf_url: body.pdf_url || null, video_url: body.video_url || null, ordem: Number(body.ordem) || 0, ativo: body.ativo !== false, updated_at: new Date().toISOString() };
  const { data, error } = await supabase.from("assunto_conteudos").insert(payload).select().single();
  return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ conteudo: data }, { status: 201 });
}
export async function PUT(req: NextRequest) {
  const ctx = await adminClient(); if (ctx.error) return ctx.error; const supabase = ctx.supabase!;
  const body = await req.json(); if (!body.id) return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });
  const payload = { titulo: body.titulo?.trim(), orientacao: body.orientacao || null, lei_seca: body.lei_seca || null, lei_seca_url: body.lei_seca_url || null, pdf_url: body.pdf_url || null, video_url: body.video_url || null, ordem: Number(body.ordem) || 0, ativo: body.ativo !== false, updated_at: new Date().toISOString() };
  const { data, error } = await supabase.from("assunto_conteudos").update(payload).eq("id", body.id).select().single();
  return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ conteudo: data });
}
export async function DELETE(req: NextRequest) {
  const ctx = await adminClient(); if (ctx.error) return ctx.error; const supabase = ctx.supabase!;
  const id = req.nextUrl.searchParams.get("id"); if (!id) return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });
  const { error } = await supabase.from("assunto_conteudos").delete().eq("id", id);
  return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ success: true });
}
