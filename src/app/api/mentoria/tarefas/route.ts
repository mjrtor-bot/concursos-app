import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function getAuthContext() {
  const supabase = await createClientServer();
  if (!supabase) {
    return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  }
  return { supabase, user };
}

export async function GET(req: NextRequest) {
  const ctx = await getAuthContext();
  if (ctx.error) return ctx.error;

  const planoId = new URL(req.url).searchParams.get("plano_id");
  let query = ctx.supabase!
    .from("mentoria_tarefas")
    .select("*")
    .eq("usuario_id", ctx.user!.id)
    .order("ordem", { ascending: true });

  if (planoId) {
    query = query.eq("plano_id", planoId);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ tarefas: data || [] });
}

export async function PATCH(req: NextRequest) {
  const ctx = await getAuthContext();
  if (ctx.error) return ctx.error;

  const body = await req.json();
  const { tarefa_id, plano_id, bloco_ordem, status, concluido_em } = body;

  if (!tarefa_id && !plano_id) {
    return NextResponse.json({ error: "tarefa_id ou plano_id é obrigatório" }, { status: 400 });
  }

  const novoStatus = status === "concluida" ? "concluida" : "pendente";
  const agoraIso = new Date().toISOString();
  const concluidoEmValor = novoStatus === "concluida" ? (concluido_em || agoraIso) : null;

  let tarefaAtualizada: any = null;

  // 1. Tenta atualizar diretamente por ID se for UUID válido
  const isUuid = typeof tarefa_id === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(tarefa_id);
  if (isUuid) {
    const { data, error } = await ctx.supabase!
      .from("mentoria_tarefas")
      .update({
        status: novoStatus,
        concluido_em: concluidoEmValor,
        updated_at: agoraIso,
      })
      .eq("id", tarefa_id)
      .eq("usuario_id", ctx.user!.id)
      .select()
      .maybeSingle();

    if (!error && data) {
      tarefaAtualizada = data;
    }
  }

  // 2. Se não encontrou por UUID (ex: ID virtual como 'missao-1-...'), busca pelo plano e ordem
  if (!tarefaAtualizada) {
    let targetPlanoId = plano_id;
    if (!targetPlanoId) {
      const { data: planoAtivo } = await ctx.supabase!
        .from("mentoria_planos")
        .select("id")
        .eq("usuario_id", ctx.user!.id)
        .eq("status", "ativo")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      targetPlanoId = planoAtivo?.id;
    }

    if (targetPlanoId) {
      let query = ctx.supabase!
        .from("mentoria_tarefas")
        .update({
          status: novoStatus,
          concluido_em: concluidoEmValor,
          updated_at: agoraIso,
        })
        .eq("plano_id", targetPlanoId)
        .eq("usuario_id", ctx.user!.id);

      if (typeof bloco_ordem === "number") {
        query = query.eq("ordem", bloco_ordem);
      } else {
        query = query.eq("ordem", 1);
      }

      const { data, error } = await query.select().maybeSingle();
      if (!error && data) {
        tarefaAtualizada = data;
      }
    }
  }

  // 3. Atualiza tópicos do edital se o assunto foi concluído
  if (tarefaAtualizada?.disciplina_id && tarefaAtualizada?.assunto_id && novoStatus === "concluida") {
    try {
      const { data: topico } = await ctx.supabase!
        .from("mentoria_edital_topicos")
        .select("id, status, percentual_dominio")
        .eq("usuario_id", ctx.user!.id)
        .eq("disciplina_id", tarefaAtualizada.disciplina_id)
        .eq("assunto_id", tarefaAtualizada.assunto_id)
        .maybeSingle();

      if (topico) {
        await ctx.supabase!
          .from("mentoria_edital_topicos")
          .update({
            estudado: true,
            status: topico.status === "nao_iniciado" ? "estudando" : topico.status,
            percentual_dominio: Math.max(Number(topico.percentual_dominio) || 0, 30),
            updated_at: agoraIso,
          })
          .eq("id", topico.id);
      }
    } catch {
      // Ignore
    }
  }

  return NextResponse.json({
    success: true,
    tarefa: tarefaAtualizada,
    status: novoStatus,
    concluido_em: concluidoEmValor,
  });
}
