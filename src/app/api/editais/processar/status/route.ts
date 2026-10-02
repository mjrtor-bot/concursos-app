import { NextRequest, NextResponse } from "next/server";
import { createClientServer, createAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 60;

async function requireAdmin() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!profile || !["admin", "editor"].includes(profile.role)) return { error: NextResponse.json({ error: "Sem permissão" }, { status: 403 }) };
  return { supabase, user };
}

function extractOutputText(json: any) {
  if (typeof json.output_text === "string") return json.output_text;
  return (json.output || [])
    .flatMap((x: any) => x.content || [])
    .filter((x: any) => x.type === "output_text")
    .map((x: any) => x.text)
    .join("");
}

function schema() {
  return {
    type: "object",
    additionalProperties: false,
    required: ["titulo_detectado", "disciplinas", "observacoes"],
    properties: {
      titulo_detectado: { type: "string" },
      observacoes: { type: "array", items: { type: "string" } },
      disciplinas: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["nome", "assuntos"],
          properties: {
            nome: { type: "string" },
            assuntos: { type: "array", items: { type: "string" } }
          }
        }
      }
    }
  };
}

export async function GET(request: NextRequest) {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: "OPENAI_API_KEY não configurada no servidor." }, { status: 503 });

  const id = new URL(request.url).searchParams.get("edital_usuario_id");
  if (!id) return NextResponse.json({ error: "edital_usuario_id obrigatório" }, { status: 400 });

  const db = createAdminClient() || auth.supabase!;

  const { data: registro, error: registroError } = await db
    .from("editais_usuario")
    .select("id,status,erro_processamento,estrutura_extraida,usuario_id,processamento_iniciado_em,created_at,openai_response_id,openai_file_id,provider_status")
    .eq("id", id)
    .maybeSingle();

  if (registro && registro.usuario_id !== auth.user!.id) {
    return NextResponse.json({ error: "PDF não pertence ao usuário autenticado." }, { status: 403 });
  }

  if (registroError) {
    console.error("[status/route] Erro ao consultar edital_usuario no polling:", registroError);
    return NextResponse.json({ error: registroError.message }, { status: 500 });
  }

  if (!registro) return NextResponse.json({ error: "PDF não encontrado." }, { status: 404 });

  if (registro.status === "aguardando_revisao" && registro.estrutura_extraida) {
    const estrutura: any = registro.estrutura_extraida;
    const totalAssuntos = (estrutura.disciplinas || []).reduce((n: number, d: any) => n + (d.assuntos?.length || 0), 0);
    return NextResponse.json({
      ok: true,
      done: true,
      status: registro.status,
      estrutura,
      total_disciplinas: estrutura.disciplinas?.length || 0,
      total_assuntos: totalAssuntos
    });
  }

  if (registro.status === "erro" || registro.status === "revisao_sem_conteudo") {
    return NextResponse.json({
      ok: false,
      done: true,
      status: registro.status,
      error: registro.erro_processamento || "O processamento terminou com erro."
    });
  }

  let responseId = registro.openai_response_id;
  let fileId = registro.openai_file_id;

  if (!responseId && registro.erro_processamento) {
    try {
      const meta = JSON.parse(registro.erro_processamento);
      responseId = meta?.response_id;
      fileId = fileId || meta?.file_id;
    } catch {
      // Ignora erro de parse se for mensagem de texto puro
    }
  }

  if (!responseId) {
    return NextResponse.json({ ok: true, done: false, status: registro.status || "processando" });
  }

  const resp = await fetch(`https://api.openai.com/v1/responses/${responseId}`, {
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    cache: "no-store"
  });
  const json = await resp.json();

  if (!resp.ok) {
    const message = json.error?.message || "Não foi possível consultar o processamento na OpenAI.";
    const { error: updateError } = await db.from("editais_usuario").update({
      status: "erro",
      erro_processamento: message,
      updated_at: new Date().toISOString()
    }).eq("id", id);
    if (updateError) console.error(`[status/route] Erro ao atualizar para erro no edital ${id}:`, updateError);
    if (fileId) {
      await fetch(`https://api.openai.com/v1/files/${fileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
      }).catch(() => undefined);
    }
    return NextResponse.json({ ok: false, done: true, status: "erro", error: message }, { status: 502 });
  }

  if (json.status === "queued" || json.status === "in_progress") {
    const startedAt = registro.processamento_iniciado_em
      ? new Date(registro.processamento_iniciado_em).getTime()
      : (registro.created_at ? new Date(registro.created_at).getTime() : Date.now());
    const elapsedMs = Date.now() - startedAt;
    const providerStatus = json.status;

    const { error: progUpdateError } = await db.from("editais_usuario").update({
      provider_status: providerStatus,
      updated_at: new Date().toISOString()
    }).eq("id", id).eq("status", "processando");
    if (progUpdateError) console.error(`[status/route] Erro ao atualizar provider_status no edital ${id}:`, progUpdateError);

    if (elapsedMs > 15 * 60 * 1000) {
      const message = `A análise da OpenAI permaneceu em ${providerStatus} por mais de 15 minutos. O processamento foi encerrado para evitar ficar preso indefinidamente. Envie o PDF novamente.`;
      const { error: timeoutError } = await db.from("editais_usuario").update({
        status: "erro",
        provider_status: providerStatus,
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id).eq("status", "processando");
      if (timeoutError) console.error(`[status/route] Erro no timeout do edital ${id}:`, timeoutError);

      if (fileId) {
        await fetch(`https://api.openai.com/v1/files/${fileId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
        }).catch(() => undefined);
      }
      return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
    }

    return NextResponse.json({ ok: true, done: false, status: providerStatus, provider_status: providerStatus });
  }

  if (json.status === "failed" || json.status === "cancelled" || json.status === "incomplete") {
    const message = json.error?.message || `Processamento OpenAI terminou com status: ${json.status}.`;
    const { error: updateError } = await db.from("editais_usuario").update({
      status: "erro",
      provider_status: json.status,
      erro_processamento: message,
      updated_at: new Date().toISOString()
    }).eq("id", id);
    if (updateError) console.error(`[status/route] Erro ao atualizar para erro no edital ${id}:`, updateError);
    if (fileId) {
      await fetch(`https://api.openai.com/v1/files/${fileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
      }).catch(() => undefined);
    }
    return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
  }

  if (json.status === "completed") {
    const output = extractOutputText(json).trim();
    if (!output) {
      const message = "A análise terminou sem retornar conteúdo estruturado.";
      const { error: updateError } = await db.from("editais_usuario").update({
        status: "erro",
        provider_status: "completed",
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id);
      if (updateError) console.error(`[status/route] Erro ao atualizar para erro no edital ${id}:`, updateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
    }

    let estrutura: any;
    try { estrutura = JSON.parse(output); }
    catch {
      const message = "A análise terminou, mas o conteúdo estruturado retornado pelo modelo é inválido.";
      const { error: updateError } = await db.from("editais_usuario").update({
        status: "erro",
        provider_status: "completed",
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id);
      if (updateError) console.error(`[status/route] Erro ao atualizar para erro no edital ${id}:`, updateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
    }

    if (!estrutura || !Array.isArray(estrutura.disciplinas)) {
      const message = "A análise não retornou a lista de disciplinas esperada.";
      const { error: updateError } = await db.from("editais_usuario").update({
        status: "erro",
        provider_status: "completed",
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id);
      if (updateError) console.error(`[status/route] Erro ao atualizar para erro no edital ${id}:`, updateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
    }

    const totalAssuntos = estrutura.disciplinas.reduce((n: number, d: any) => n + (d.assuntos?.length || 0), 0);

    if (!estrutura.disciplinas.length || totalAssuntos === 0) {
      const diagnostico = Array.isArray(estrutura.observacoes) && estrutura.observacoes.length
        ? estrutura.observacoes.join(" | ")
        : "Nenhum conteúdo programático foi localizado no PDF.";

      const { error: semConteudoError } = await db.from("editais_usuario").update({
        status: "revisao_sem_conteudo",
        provider_status: "completed",
        estrutura_extraida: estrutura,
        erro_processamento: diagnostico,
        updated_at: new Date().toISOString()
      }).eq("id", id);
      if (semConteudoError) console.error(`[status/route] Erro ao atualizar revisao_sem_conteudo no edital ${id}:`, semConteudoError);

      if (fileId) {
        await fetch(`https://api.openai.com/v1/files/${fileId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
        }).catch(() => undefined);
      }

      return NextResponse.json({
        ok: false,
        done: true,
        status: "revisao_sem_conteudo",
        estrutura,
        total_disciplinas: estrutura.disciplinas.length,
        total_assuntos: totalAssuntos,
        aviso: diagnostico
      });
    }

    const { error: finalUpdateError } = await db.from("editais_usuario").update({
      status: "aguardando_revisao",
      provider_status: "completed",
      estrutura_extraida: estrutura,
      erro_processamento: null,
      updated_at: new Date().toISOString()
    }).eq("id", id);
    if (finalUpdateError) {
      console.error(`[status/route] Erro ao salvar estrutura para edital ${id}:`, finalUpdateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: "Falha ao salvar edição final." }, { status: 500 });
    }

    if (fileId) {
      await fetch(`https://api.openai.com/v1/files/${fileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
      }).catch(() => undefined);
    }

    return NextResponse.json({
      ok: true,
      done: true,
      status: "aguardando_revisao",
      estrutura,
      total_disciplinas: estrutura.disciplinas.length,
      total_assuntos: totalAssuntos
    });
  }

  const unknownStatus = json.status || "unknown";
  const message = `A OpenAI retornou um estado de processamento não reconhecido: ${unknownStatus}.`;
  const { error: unknownStatusError } = await db.from("editais_usuario").update({
    status: "erro",
    provider_status: unknownStatus,
    erro_processamento: message,
    updated_at: new Date().toISOString()
  }).eq("id", id).eq("status", "processando");
  if (unknownStatusError) console.error(`[status/route] Erro ao atualizar para erro no edital ${id}:`, unknownStatusError);
  return NextResponse.json({ ok: false, done: true, status: "erro", error: message, provider_status: unknownStatus });
}
