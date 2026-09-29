import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function contexto() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  return { supabase, user };
}

export async function GET(req: NextRequest) {
  const ctx = await contexto(); if (ctx.error) return ctx.error;
  const tarefaId = new URL(req.url).searchParams.get("tarefaId");
  if (!tarefaId) return NextResponse.json({ error: "tarefaId obrigatório" }, { status: 400 });
  const { data, error } = await ctx.supabase!.from("mentoria_sessoes_ativas").select("*")
    .eq("usuario_id", ctx.user!.id).eq("tarefa_id", tarefaId).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ sessao: data || null });
}

export async function PUT(req: NextRequest) {
  const ctx = await contexto(); if (ctx.error) return ctx.error;
  const body = await req.json();
  if (!body.tarefa_id) return NextResponse.json({ error: "tarefa_id obrigatório" }, { status: 400 });
  const payload = {
    usuario_id: ctx.user!.id, plano_id: body.plano_id || null, tarefa_id: body.tarefa_id,
    cronometro_iniciado: Boolean(body.cronometro_iniciado), cronometro_ativo: Boolean(body.cronometro_ativo),
    segundos_liquidos: Math.max(0, Number(body.segundos_liquidos) || 0),
    pausas_contador: Math.max(0, Number(body.pausas_contador) || 0),
    segundos_pausa_total: Math.max(0, Number(body.segundos_pausa_total) || 0),
    tempo_inicio_sessao: body.tempo_inicio_sessao || null,
    questoes_respondidas: Math.max(0, Number(body.questoes_respondidas) || 0),
    questoes_acertadas: Math.max(0, Number(body.questoes_acertadas) || 0),
    observacoes: String(body.observacoes || ""), anotacoes: String(body.anotacoes || ""), updated_at: new Date().toISOString()
  };
  const { data, error } = await ctx.supabase!.from("mentoria_sessoes_ativas").upsert(payload, { onConflict: "usuario_id,tarefa_id" }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ sessao: data });
}

export async function DELETE(req: NextRequest) {
  const ctx = await contexto(); if (ctx.error) return ctx.error;
  const tarefaId = new URL(req.url).searchParams.get("tarefaId");
  if (!tarefaId) return NextResponse.json({ error: "tarefaId obrigatório" }, { status: 400 });
  const { error } = await ctx.supabase!.from("mentoria_sessoes_ativas").delete().eq("usuario_id", ctx.user!.id).eq("tarefa_id", tarefaId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
