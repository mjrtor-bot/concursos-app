import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";

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

  // 1. Obter plano do ciclo para identificar o bloco atual
  const plano = await MentoriaCicloService.obterPlanoCiclo(user.id, supabase);
  if (!plano || plano.total_blocos_ciclo === 0) {
    return NextResponse.json({ error: "Nenhum ciclo ativo disponível." }, { status: 404 });
  }

  // 2. Verificar se há sessão ativa recente (últimas 12h) APENAS para o bloco atual do ciclo (fail-closed)
  const idsBlocoAtual: string[] = [];
  if (plano.bloco_atual) {
    if (plano.bloco_atual.id) idsBlocoAtual.push(plano.bloco_atual.id);
    if ((plano.bloco_atual as any).bloco_id && (plano.bloco_atual as any).bloco_id !== plano.bloco_atual.id) {
      idsBlocoAtual.push((plano.bloco_atual as any).bloco_id);
    }
  }

  if (idsBlocoAtual.length > 0) {
    const dozeHorasAtras = new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString();

    const { data: sessoesAtivas, error: sessaoError } = await supabase
      .from("mentoria_sessoes_ativas")
      .select("id")
      .eq("usuario_id", user.id)
      .eq("cronometro_iniciado", true)
      .in("tarefa_id", idsBlocoAtual)
      .gte("updated_at", dozeHorasAtras)
      .limit(1);

    if (sessaoError) {
      console.error("[selecionar-bloco] Erro ao consultar sessão ativa:", sessaoError);
      return NextResponse.json(
        { error: "Erro ao verificar sessão ativa." },
        { status: 500 }
      );
    }

    if (sessoesAtivas && sessoesAtivas.length > 0) {
      return NextResponse.json(
        { error: "Finalize ou descarte a sessão em andamento antes de trocar de bloco." },
        { status: 409 }
      );
    }
  }

  const resultado = await MentoriaCicloService.selecionarBlocoInicial(user.id, blocoId, supabase);

  if (!resultado.success) {
    const isClientError =
      resultado.error?.includes("não pertence ao ciclo") ||
      resultado.error?.includes("incompletos");
    const isNotFound = resultado.error?.includes("Nenhum ciclo");
    const status = isClientError ? 400 : isNotFound ? 404 : 500;

    return NextResponse.json(
      { error: resultado.error || "Não foi possível selecionar o bloco." },
      { status }
    );
  }

  return NextResponse.json({
    success: true,
    posicao_atual: resultado.plano?.posicao_atual_index,
    plano_id: resultado.plano?.plano_id,
  });
}
