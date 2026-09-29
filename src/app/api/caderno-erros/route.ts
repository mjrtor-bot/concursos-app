import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function getUser() {
  const supabase = await createClientServer();
  if (!supabase) return { supabase: null, user: null };
  const { data: { user } } = await supabase.auth.getUser();
  return { supabase, user };
}

export async function GET() {
  const { supabase, user } = await getUser();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const { data: itens, error } = await supabase.from("caderno_erros")
    .select("id,usuario_id,questao_id,total_erros,revisado,anotacao,ultimo_erro_em,updated_at")
    .eq("usuario_id", user.id).order("ultimo_erro_em", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const ids = (itens || []).map(i => i.questao_id);
  if (!ids.length) return NextResponse.json({ itens: [] });

  const [{ data: qs }, { data: alts }] = await Promise.all([
    supabase.from("questoes").select("id,disciplina_id,assunto_id,subassunto_id,prova_id,banca_nome,orgao_nome,cargo_nome,ano,tipo,dificuldade,enunciado,texto_apoio,explicacao,is_autoral_ia,anulada,desatualizada,auditoria_status,versao,fingerprint_hash,created_at,updated_at").in("id", ids),
    supabase.from("questoes_alternativas").select("id,questao_id,letra,texto,correta,ordem,explicacao_especifica").in("questao_id", ids).order("ordem")
  ]);
  const qMap = new Map((qs || []).map(q => [q.id, q]));
  const altMap = new Map<string, any[]>();
  for (const a of alts || []) {
    if (!altMap.has(a.questao_id)) altMap.set(a.questao_id, []);
    altMap.get(a.questao_id)!.push(a);
  }

  const resultado = (itens || []).map(item => {
    const q: any = qMap.get(item.questao_id);
    return {
      ...item,
      questao: q ? {
        id:q.id, disciplina_id:q.disciplina_id, assunto_id:q.assunto_id, subassunto_id:q.subassunto_id,
        prova_id:q.prova_id, banca:q.banca_nome || "", orgao:q.orgao_nome || "", cargo:q.cargo_nome || undefined,
        ano:q.ano || 0, tipo:q.tipo, dificuldade:q.dificuldade, enunciado:q.enunciado,
        texto_apoio:q.texto_apoio || undefined, explicacao:q.explicacao || "", is_autoral_ia:q.is_autoral_ia,
        anulada:q.anulada, desatualizada:q.desatualizada, auditoria_status:q.auditoria_status,
        versao:q.versao, fingerprint_hash:q.fingerprint_hash, created_at:q.created_at, updated_at:q.updated_at,
        alternativas:(altMap.get(q.id) || []).map(a => ({ id:a.id, questao_id:a.questao_id, letra:a.letra, texto:a.texto, correta:a.correta, ordem:a.ordem, explicacao_especifica:a.explicacao_especifica || undefined }))
      } : undefined
    };
  }).filter(i => i.questao);
  return NextResponse.json({ itens: resultado });
}

export async function PATCH(request: NextRequest) {
  const { supabase, user } = await getUser();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  const body = await request.json();
  if (!body.questao_id) return NextResponse.json({ error: "questao_id obrigatório" }, { status: 400 });
  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (typeof body.anotacao === "string") updates.anotacao = body.anotacao;
  if (typeof body.revisado === "boolean") updates.revisado = body.revisado;
  const { error } = await supabase.from("caderno_erros").update(updates).eq("usuario_id", user.id).eq("questao_id", body.questao_id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const { supabase, user } = await getUser();
  if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  const questaoId = new URL(request.url).searchParams.get("questao_id");
  if (!questaoId) return NextResponse.json({ error: "questao_id obrigatório" }, { status: 400 });
  const { error } = await supabase.from("caderno_erros").delete().eq("usuario_id", user.id).eq("questao_id", questaoId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}