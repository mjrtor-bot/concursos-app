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

  const { data: registro } = await auth.supabase!
    .from("editais_usuario")
    .select("id,status,erro_processamento,estrutura_extraida,usuario_id,processamento_iniciado_em,created_at")
    .eq("id", id)
    .eq("usuario_id", auth.user!.id)
    .maybeSingle();

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

  let meta: any = null;
  try { meta = registro.erro_processamento ? JSON.parse(registro.erro_processamento) : null; } catch { meta = null; }

  if (!meta?.response_id) {
    return NextResponse.json({ ok: true, done: false, status: registro.status || "processando" });
  }

  const resp = await fetch(`https://api.openai.com/v1/responses/${meta.response_id}`, {
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    cache: "no-store"
  });
  const json = await resp.json();

  if (!resp.ok) {
    const message = json.error?.message || "Não foi possível consultar o processamento.";
    const { error: updateError } = await db.from("editais_usuario").update({
      status: "erro",
      erro_processamento: message,
      updated_at: new Date().toISOString()
    }).eq("id", id);
    if (updateError) console.error(`Erro ao atualizar para erro no edital ${id}:`, updateError);
    if (meta.file_id) {
      await fetch(`https://api.openai.com/v1/files/${meta.file_id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
      }).catch(() => undefined);
    }
    return NextResponse.json({ ok: false, done: true, status: "erro", error: message }, { status: 502 });
  }

  if (json.status === "queued" || json.status === "in_progress") {
    const startedAt = registro.processamento_iniciado_em ? new Date(registro.processamento_iniciado_em).getTime() : (registro.created_at ? new Date(registro.created_at).getTime() : Date.now());
    const elapsedMs = Date.now() - startedAt;
    const providerStatus = json.status;

    await auth.supabase!.from("editais_usuario").update({
      erro_processamento: JSON.stringify({
        response_id: meta.response_id,
        file_id: meta.file_id,
        started_at: startedAt,
        provider_status: providerStatus,
        last_checked_at: new Date().toISOString()
      }),
      updated_at: new Date().toISOString()
    }).eq("id", id).eq("status", "processando");

    if (elapsedMs > 15 * 60 * 1000) {
      const message = `A análise da OpenAI permaneceu em ${providerStatus} por mais de 15 minutos. O processamento foi encerrado para evitar ficar preso indefinidamente. Envie o PDF novamente.`;
      await auth.supabase!.from("editais_usuario").update({
        status: "erro",
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id).eq("status", "processando");
      if (meta.file_id) {
        await fetch(`https://api.openai.com/v1/files/${meta.file_id}`, {
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
    const { error: updateError } = await auth.supabase!.from("editais_usuario").update({
      status: "erro",
      erro_processamento: message,
      updated_at: new Date().toISOString()
    }).eq("id", id);
    if (updateError) console.error(`Erro ao atualizar para erro no edital ${id}:`, updateError);
    if (meta.file_id) {
      await fetch(`https://api.openai.com/v1/files/${meta.file_id}`, {
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
      const { error: updateError } = await auth.supabase!.from("editais_usuario").update({
        status: "erro",
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id);
      if (updateError) console.error(`Erro ao atualizar para erro no edital ${id}:`, updateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
    }

    let estrutura: any;
    try { estrutura = JSON.parse(output); }
    catch {
      const message = "A análise terminou, mas o conteúdo estruturado retornado pelo modelo é inválido.";
      const { error: updateError } = await auth.supabase!.from("editais_usuario").update({
        status: "erro",
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id);
      if (updateError) console.error(`Erro ao atualizar para erro no edital ${id}:`, updateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
    }

    if (!estrutura || !Array.isArray(estrutura.disciplinas)) {
      const message = "A análise não retornou a lista de disciplinas esperada.";
      const { error: updateError } = await auth.supabase!.from("editais_usuario").update({
        status: "erro",
        erro_processamento: message,
        updated_at: new Date().toISOString()
      }).eq("id", id);
      if (updateError) console.error(`Erro ao atualizar para erro no edital ${id}:`, updateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: message });
    }

    const totalAssuntos = estrutura.disciplinas.reduce((n: number, d: any) => n + (d.assuntos?.length || 0), 0);

    if (!estrutura.disciplinas.length || totalAssuntos === 0) {
      const diagnostico = Array.isArray(estrutura.observacoes) && estrutura.observacoes.length
        ? estrutura.observacoes.join(" | ")
        : "Nenhum conteúdo programático foi localizado no PDF.";

      await auth.supabase!.from("editais_usuario").update({
        status: "revisao_sem_conteudo",
        estrutura_extraida: estrutura,
        erro_processamento: diagnostico,
        updated_at: new Date().toISOString()
      }).eq("id", id);

      if (meta.file_id) {
        await fetch(`https://api.openai.com/v1/files/${meta.file_id}`, {
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

    const { error: finalUpdateError } = await auth.supabase!.from("editais_usuario").update({
      status: "aguardando_revisao",
      estrutura_extraida: estrutura,
      erro_processamento: null,
      updated_at: new Date().toISOString()
    }).eq("id", id);
    if (finalUpdateError) {
      console.error(`Erro ao confirmar e salvar estrutura para edital ${id}:`, finalUpdateError);
      return NextResponse.json({ ok: false, done: true, status: "erro", error: "Falha ao salvar edição final." }, { status: 500 });
    }

    if (meta.file_id) {
      await fetch(`https://api.openai.com/v1/files/${meta.file_id}`, {
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
  const { error: unknownStatusError } = await auth.supabase!.from("editais_usuario").update({
    status: "erro",
    erro_processamento: message,
    updated_at: new Date().toISOString()
  }).eq("id", id).eq("status", "processando");
  if (unknownStatusError) console.error(`Erro ao atualizar para erro no edital ${id}:`, unknownStatusError);
  return NextResponse.json({ ok: false, done: true, status: "erro", error: message, provider_status: unknownStatus });
}
