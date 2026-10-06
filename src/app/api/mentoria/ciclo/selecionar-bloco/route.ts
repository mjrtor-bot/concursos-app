import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClientServer();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as { bloco_id?: string } | null;
  const blocoId = body?.bloco_id;

  if (!blocoId || typeof blocoId !== "string") {
    return NextResponse.json({ error: "bloco_id é obrigatório" }, { status: 400 });
  }

  // Verificar se há sessão ativa em andamento para o usuário
  const { data: sessaoAtiva, error: sessaoError } = await supabase
    .from("mentoria_sessoes_ativas")
    .select("id, cronometro_iniciado")
    .eq("usuario_id", user.id)
    .eq("cronometro_iniciado", true)
    .maybeSingle();

  if (sessaoError) {
    console.error("[selecionar-bloco] Erro ao consultar sessão ativa:", sessaoError);
  }

  if (sessaoAtiva) {
    return NextResponse.json(
      { error: "Finalize ou descarte a sessão em andamento antes de trocar de bloco." },
      { status: 409 }
    );
  }

  // Obter o plano ativo do usuário
  const { data: plano, error: planoError } = await supabase
    .from("mentoria_planos")
    .select("id, ciclo_posicao_atual, estrutura_ciclo")
    .eq("usuario_id", user.id)
    .eq("status", "ativo")
    .order("versao", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (planoError) {
    return NextResponse.json({ error: planoError.message }, { status: 500 });
  }

  if (!plano) {
    return NextResponse.json({ error: "Nenhum ciclo ativo encontrado." }, { status: 404 });
  }

  const blocos = (plano.estrutura_ciclo || []) as Array<{ id: string }>;
  const novoIndex = blocos.findIndex((b) => b.id === blocoId);

  if (novoIndex === -1) {
    return NextResponse.json(
      { error: "O bloco informado não pertence ao ciclo atual." },
      { status: 400 }
    );
  }

  if (novoIndex === plano.ciclo_posicao_atual) {
    return NextResponse.json({ success: true, posicao_atual: novoIndex, plano_id: plano.id });
  }

  // Atualiza apenas a posição atual e updated_at (não altera voltas, minutos nem estrutura)
  const { error: updateError } = await supabase
    .from("mentoria_planos")
    .update({
      ciclo_posicao_atual: novoIndex,
      updated_at: new Date().toISOString(),
    })
    .eq("id", plano.id)
    .eq("usuario_id", user.id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, posicao_atual: novoIndex, plano_id: plano.id });
}
