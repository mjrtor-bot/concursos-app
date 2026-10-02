import { NextRequest, NextResponse } from "next/server";
import { createAdminClient, createClientServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 60;

function extractOutputText(json: any) {
  if (typeof json.output_text === "string") return json.output_text;
  return (json.output || [])
    .flatMap((x: any) => x.content || [])
    .filter((x: any) => x.type === "output_text")
    .map((x: any) => x.text)
    .join("");
}

async function isAuthorized(request: NextRequest): Promise<boolean> {
  // 1. Vercel Cron envia Authorization: Bearer <CRON_SECRET>
  const authHeader = request.headers.get("authorization");
  const cronSecretHeader = request.headers.get("x-cron-secret");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret) {
    if (authHeader === `Bearer ${cronSecret}` || cronSecretHeader === cronSecret) {
      return true;
    }
  }

  // 2. Permitir que admin autenticado também execute a reconciliação manualmente
  const supabase = await createClientServer();
  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
      if (profile && ["admin", "editor"].includes(profile.role)) {
        return true;
      }
    }
  }

  return false;
}

async function handleReconcile(request: NextRequest) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const db = createAdminClient();
  if (!db) {
    const supabase = await createClientServer();
    if (!supabase) return NextResponse.json({ error: "Supabase indisponível" }, { status: 503 });
  }
  const client = db || (await createClientServer())!;

  const apiKey = process.env.OPENAI_API_KEY;
  const resultados: Array<{ id: string; anterior: string; novo: string; motivo?: string }> = [];

  // 1. Reconciliar editais em 'processando'
  const { data: processando, error: errProcessando } = await client
    .from("editais_usuario")
    .select("id, status, erro_processamento, openai_response_id, openai_file_id, processamento_iniciado_em, created_at")
    .eq("status", "processando");

  if (errProcessando) {
    console.error("[reconciliar] Erro ao buscar registros em processando:", errProcessando);
    return NextResponse.json({ error: errProcessando.message }, { status: 500 });
  }

  if (processando && processando.length > 0) {
    for (const reg of processando) {
      let responseId = reg.openai_response_id;
      let fileId = reg.openai_file_id;

      if (!responseId && reg.erro_processamento) {
        try {
          const meta = JSON.parse(reg.erro_processamento);
          responseId = meta?.response_id;
          fileId = fileId || meta?.file_id;
        } catch {
          // Ignora
        }
      }

      const startedAt = reg.processamento_iniciado_em
        ? new Date(reg.processamento_iniciado_em).getTime()
        : (reg.created_at ? new Date(reg.created_at).getTime() : Date.now());
      const elapsedMs = Date.now() - startedAt;

      if (!responseId) {
        if (elapsedMs > 30 * 60 * 1000) {
          const msg = "Processamento expirado: nenhum response_id da OpenAI foi associado após 30 minutos.";
          await client.from("editais_usuario").update({
            status: "erro",
            erro_processamento: msg,
            updated_at: new Date().toISOString()
          }).eq("id", reg.id);
          resultados.push({ id: reg.id, anterior: reg.status, novo: "erro", motivo: msg });
        }
        continue;
      }

      if (!apiKey) {
        console.warn("[reconciliar] OPENAI_API_KEY não configurada para consultar OpenAI.");
        continue;
      }

      try {
        const resp = await fetch(`https://api.openai.com/v1/responses/${responseId}`, {
          headers: { Authorization: `Bearer ${apiKey}` },
          cache: "no-store"
        });
        const json = await resp.json();

        if (!resp.ok) {
          const msg = json.error?.message || "Erro retornado pela API da OpenAI.";
          await client.from("editais_usuario").update({
            status: "erro",
            erro_processamento: msg,
            updated_at: new Date().toISOString()
          }).eq("id", reg.id);
          resultados.push({ id: reg.id, anterior: reg.status, novo: "erro", motivo: msg });

          if (fileId) {
            await fetch(`https://api.openai.com/v1/files/${fileId}`, {
              method: "DELETE",
              headers: { Authorization: `Bearer ${apiKey}` }
            }).catch(() => undefined);
          }
          continue;
        }

        if (json.status === "completed") {
          const output = extractOutputText(json).trim();
          let estrutura: any = null;
          try { estrutura = JSON.parse(output); } catch { /* ignore */ }

          if (!estrutura || !Array.isArray(estrutura.disciplinas)) {
            const msg = "A análise da OpenAI terminou mas não retornou a lista de disciplinas esperada.";
            await client.from("editais_usuario").update({
              status: "erro",
              provider_status: "completed",
              erro_processamento: msg,
              updated_at: new Date().toISOString()
            }).eq("id", reg.id);
            resultados.push({ id: reg.id, anterior: reg.status, novo: "erro", motivo: msg });
          } else {
            const totalAssuntos = estrutura.disciplinas.reduce((n: number, d: any) => n + (d.assuntos?.length || 0), 0);
            if (!estrutura.disciplinas.length || totalAssuntos === 0) {
              const diagnostico = Array.isArray(estrutura.observacoes) && estrutura.observacoes.length
                ? estrutura.observacoes.join(" | ")
                : "Nenhum conteúdo programático foi localizado no PDF.";
              await client.from("editais_usuario").update({
                status: "revisao_sem_conteudo",
                provider_status: "completed",
                estrutura_extraida: estrutura,
                erro_processamento: diagnostico,
                updated_at: new Date().toISOString()
              }).eq("id", reg.id);
              resultados.push({ id: reg.id, anterior: reg.status, novo: "revisao_sem_conteudo", motivo: diagnostico });
            } else {
              await client.from("editais_usuario").update({
                status: "aguardando_revisao",
                provider_status: "completed",
                estrutura_extraida: estrutura,
                erro_processamento: null,
                updated_at: new Date().toISOString()
              }).eq("id", reg.id);
              resultados.push({ id: reg.id, anterior: reg.status, novo: "aguardando_revisao", motivo: `${estrutura.disciplinas.length} disciplinas, ${totalAssuntos} assuntos` });
            }
          }

          if (fileId) {
            await fetch(`https://api.openai.com/v1/files/${fileId}`, {
              method: "DELETE",
              headers: { Authorization: `Bearer ${apiKey}` }
            }).catch(() => undefined);
          }
        } else if (json.status === "failed" || json.status === "cancelled" || json.status === "incomplete") {
          const msg = json.error?.message || `OpenAI finalizou com estado: ${json.status}.`;
          await client.from("editais_usuario").update({
            status: "erro",
            provider_status: json.status,
            erro_processamento: msg,
            updated_at: new Date().toISOString()
          }).eq("id", reg.id);
          resultados.push({ id: reg.id, anterior: reg.status, novo: "erro", motivo: msg });

          if (fileId) {
            await fetch(`https://api.openai.com/v1/files/${fileId}`, {
              method: "DELETE",
              headers: { Authorization: `Bearer ${apiKey}` }
            }).catch(() => undefined);
          }
        } else if (json.status === "queued" || json.status === "in_progress") {
          if (elapsedMs > 30 * 60 * 1000) {
            const msg = `Processamento cancelado por timeout de 30 minutos (status OpenAI: ${json.status}).`;
            await client.from("editais_usuario").update({
              status: "erro",
              provider_status: json.status,
              erro_processamento: msg,
              updated_at: new Date().toISOString()
            }).eq("id", reg.id);
            resultados.push({ id: reg.id, anterior: reg.status, novo: "erro", motivo: msg });

            if (fileId) {
              await fetch(`https://api.openai.com/v1/files/${fileId}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${apiKey}` }
              }).catch(() => undefined);
            }
          } else {
            await client.from("editais_usuario").update({
              provider_status: json.status,
              updated_at: new Date().toISOString()
            }).eq("id", reg.id);
          }
        }
      } catch (err: any) {
        console.error(`[reconciliar] Erro ao consultar OpenAI para registro ${reg.id}:`, err);
      }
    }
  }

  // 2. Reconciliar editais em 'aguardando_processamento' há mais de 30 minutos
  const limite30Min = new Date(Date.now() - 30 * 60 * 1000).toISOString();
  const { data: abandonados, error: errAbandonados } = await client
    .from("editais_usuario")
    .select("id, status, created_at")
    .eq("status", "aguardando_processamento")
    .lt("created_at", limite30Min);

  if (errAbandonados) {
    console.error("[reconciliar] Erro ao buscar aguardando_processamento:", errAbandonados);
  } else if (abandonados && abandonados.length > 0) {
    for (const reg of abandonados) {
      const msg = "Upload expirado: processamento não foi iniciado dentro de 30 minutos.";
      await client.from("editais_usuario").update({
        status: "erro",
        erro_processamento: msg,
        updated_at: new Date().toISOString()
      }).eq("id", reg.id);
      resultados.push({ id: reg.id, anterior: reg.status, novo: "erro", motivo: msg });
    }
  }

  return NextResponse.json({
    ok: true,
    total_reconciliados: resultados.length,
    detalhes: resultados
  });
}

export async function GET(request: NextRequest) {
  return handleReconcile(request);
}

export async function POST(request: NextRequest) {
  return handleReconcile(request);
}
