import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/client";

export async function GET() {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json({ success: false, error: "Supabase não configurado" }, { status: 503 });
    }
    const supabase = await createClientServer();
    if (!supabase) {
      return NextResponse.json({ success: false, error: "Supabase indisponível" }, { status: 503 });
    }
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ success: false, error: "Não autenticado" }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("respostas_usuarios")
      .select("id, usuario_id, questao_id, alternativa_id, correta, tempo_resposta_segundos, created_at")
      .eq("usuario_id", user.id)
      .order("created_at", { ascending: true })
      .limit(5000);

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    const questaoIds = Array.from(new Set((data || []).map((r) => r.questao_id).filter(Boolean)));
    const { data: questoes } = questaoIds.length
      ? await supabase
          .from("questoes")
          .select("id, disciplina_id, banca_nome")
          .in("id", questaoIds)
      : { data: [] as any[] };

    const disciplinaIds = Array.from(new Set((questoes || []).map((q: any) => q.disciplina_id).filter(Boolean)));
    const { data: disciplinas } = disciplinaIds.length
      ? await supabase.from("disciplinas").select("id, nome").in("id", disciplinaIds)
      : { data: [] as any[] };

    const questaoMeta = new Map((questoes || []).map((q: any) => [q.id, q]));
    const disciplinaMeta = new Map((disciplinas || []).map((d: any) => [d.id, d.nome]));

    return NextResponse.json({
      success: true,
      respostas: (data || []).map((r) => {
        const q: any = questaoMeta.get(r.questao_id);
        return {
          id: r.id,
          usuario_id: user.id,
          questao_id: r.questao_id,
          alternativa_id: r.alternativa_id,
          correta: Boolean(r.correta),
          tempo_resposta: r.tempo_resposta_segundos || 0,
          disciplina_id: q?.disciplina_id || undefined,
          disciplina_nome: q?.disciplina_id ? disciplinaMeta.get(q.disciplina_id) : undefined,
          banca: q?.banca_nome || undefined,
          created_at: r.created_at,
        };
      }),
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Erro interno" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json({ success: true, saved: false, reason: "supabase_not_configured" });
    }

    const supabase = await createClientServer();
    if (!supabase) {
      return NextResponse.json({ success: true, saved: false, reason: "supabase_unavailable" });
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      // Usuário não autenticado - permitido responder offline no cliente
      return NextResponse.json({ success: false, saved: false, reason: "unauthenticated" }, { status: 401 });
    }

    const body = await request.json();
    const {
      questao_id,
      alternativa_id,
      correta,
      tempo_resposta_segundos,
      tipo,
      alternativa_texto,
      questao_versao,
    } = body;

    const isUuid = (val?: string) =>
      Boolean(val && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val));

    if (!isUuid(questao_id)) {
      return NextResponse.json({ success: true, saved: false, reason: "non_uuid_question" });
    }

    // Grava na tabela respostas_usuarios
    const { error: insertError } = await supabase.from("respostas_usuarios").insert({
      usuario_id: user.id,
      questao_id,
      alternativa_id: isUuid(alternativa_id) ? alternativa_id : null,
      resposta_certo_errado:
        tipo === "certo_errado"
          ? alternativa_texto?.toLowerCase() === "certo"
            ? "certo"
            : "errado"
          : null,
      correta: Boolean(correta),
      tempo_resposta_segundos: tempo_resposta_segundos || 0,
      questao_versao: questao_versao || 1,
    });

    if (insertError) {
      console.error("[API /questoes/resposta] Erro ao gravar resposta:", insertError);
      return NextResponse.json(
        { success: false, error: insertError.message },
        { status: 500 }
      );
    }

    // Mantém o caderno de erros consistente com o histórico real.
    const agora = new Date().toISOString();
    const { data: erroAtual } = await supabase
      .from("caderno_erros")
      .select("id,total_erros")
      .eq("usuario_id", user.id)
      .eq("questao_id", questao_id)
      .maybeSingle();

    if (!correta) {
      const payload = erroAtual
        ? {
            total_erros: (erroAtual.total_erros || 0) + 1,
            revisado: false,
            ultimo_erro_em: agora,
            updated_at: agora,
          }
        : {
            usuario_id: user.id,
            questao_id,
            total_erros: 1,
            revisado: false,
            ultimo_erro_em: agora,
            updated_at: agora,
          };
      const operacao = erroAtual
        ? supabase.from("caderno_erros").update(payload).eq("id", erroAtual.id)
        : supabase.from("caderno_erros").insert(payload);
      const { error: cadernoError } = await operacao;
      if (cadernoError) console.warn("[API /questoes/resposta] Aviso caderno_erros:", cadernoError.message);
    } else if (erroAtual) {
      const { error: revisaoError } = await supabase
        .from("caderno_erros")
        .update({ revisado: true, updated_at: agora })
        .eq("id", erroAtual.id);
      if (revisaoError) console.warn("[API /questoes/resposta] Aviso revisão caderno:", revisaoError.message);
    }

    return NextResponse.json({ success: true, saved: true });
  } catch (error: any) {
    console.error("[API /questoes/resposta] Exceção:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Erro interno" },
      { status: 500 }
    );
  }
}
