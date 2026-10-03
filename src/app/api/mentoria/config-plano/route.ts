import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function ctx() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  return { supabase, user };
}

export async function GET() {
  const c = await ctx();
  if (c.error) return c.error;
  const { data, error } = await c.supabase!
    .from("mentoria_config_plano")
    .select("*")
    .eq("usuario_id", c.user!.id)
    .maybeSingle();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({
    config: data || {
      materias_simultaneas: 3,
      velocidade: "normal",
      etapas: ["estudo", "resumo", "revisao", "exercicio"],
      disciplinas_ativas: [],
      assuntos_ativos: [],
      data_final: null,
      pausado: false,
      data_inicio_pausa: null,
      data_fim_pausa: null,
    },
  });
}

export async function PUT(req: Request) {
  const c = await ctx();
  if (c.error) return c.error;
  const b = await req.json();

  const payload: any = {
    usuario_id: c.user!.id,
    materias_simultaneas: Math.min(20, Math.max(1, Number(b.materias_simultaneas) || 3)),
    velocidade: ["leve", "normal", "intensiva"].includes(b.velocidade) ? b.velocidade : "normal",
    etapas: Array.isArray(b.etapas)
      ? b.etapas.filter((x: string) => ["estudo", "resumo", "revisao", "exercicio"].includes(x))
      : ["estudo", "resumo", "revisao", "exercicio"],
    disciplinas_ativas: Array.isArray(b.disciplinas_ativas) ? b.disciplinas_ativas : [],
    assuntos_ativos: Array.isArray(b.assuntos_ativos) ? b.assuntos_ativos : [],
    data_final: b.data_final || null,
    pausado: Boolean(b.pausado),
    data_inicio_pausa: b.data_inicio_pausa || null,
    data_fim_pausa: b.data_fim_pausa || null,
    updated_at: new Date().toISOString(),
  };

  let { data, error } = await c.supabase!
    .from("mentoria_config_plano")
    .upsert(payload, { onConflict: "usuario_id" })
    .select()
    .single();

  if (error && (error.code === "PGRST204" || error.message?.includes("column"))) {
    // Se colunas data_inicio_pausa/data_fim_pausa ainda não existem no cache schema remoto
    delete payload.data_inicio_pausa;
    delete payload.data_fim_pausa;
    const retry = await c.supabase!
      .from("mentoria_config_plano")
      .upsert(payload, { onConflict: "usuario_id" })
      .select()
      .single();
    data = retry.data ? { ...retry.data, data_inicio_pausa: b.data_inicio_pausa || null, data_fim_pausa: b.data_fim_pausa || null } : null;
    error = retry.error;
  }

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ config: data });
}

export async function DELETE() {
  const c = await ctx();
  if (c.error) return c.error;
  const { data: plano } = await c.supabase!
    .from("mentoria_planos")
    .select("id")
    .eq("usuario_id", c.user!.id)
    .eq("status", "ativo")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (plano) {
    await c.supabase!
      .from("mentoria_tarefas")
      .update({ status: "pendente", concluida_em: null })
      .eq("plano_id", plano.id);
    await c.supabase!
      .from("mentoria_planos")
      .update({ posicao_atual_index: 0, ciclos_concluidos: 0, updated_at: new Date().toISOString() })
      .eq("id", plano.id);
  }
  return NextResponse.json({ success: true });
}
