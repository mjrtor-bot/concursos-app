import { NextRequest, NextResponse } from "next/server";
import { createClientServer, createAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 60;

async function requireAuth() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
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

export async function POST(request: NextRequest) {
  const auth = await requireAuth();
  if (auth.error) return auth.error;
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: "OPENAI_API_KEY não configurada no servidor." }, { status: 503 });

  const body = await request.json().catch(() => null);
  const editalUsuarioId = typeof body?.edital_usuario_id === "string" ? body.edital_usuario_id : "";
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuid.test(editalUsuarioId)) return NextResponse.json({ error: "edital_usuario_id inválido" }, { status: 400 });

  const db = createAdminClient() || auth.supabase;
  const { data: registro, error: regError } = await db.from("editais_usuario").select("*").eq("id", editalUsuarioId).maybeSingle();
  if (regError) return NextResponse.json({ error: "Não foi possível consultar o PDF enviado." }, { status: 500 });
  if (!registro) return NextResponse.json({ error: "PDF não encontrado." }, { status: 404 });
  if (registro.usuario_id !== auth.user.id) return NextResponse.json({ error: "PDF não pertence ao usuário autenticado." }, { status: 403 });

  const statusesRetriaveis = ["aguardando_processamento", "erro", "aguardando_revisao", "revisao_sem_conteudo"];
  if (!statusesRetriaveis.includes(registro.status)) {
    return NextResponse.json({ error: "Este PDF já está em processamento ou não pode ser reprocessado." }, { status: 409 });
  }

  const model = process.env.OPENAI_EDITAL_MODEL || "gpt-5.6-luna";
  const modelRes = await fetch(`https://api.openai.com/v1/models/${model}`, {
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
  });
  if (!modelRes.ok) {
    console.error(`Modelo ${model} inválido ou indisponível.`);
    return NextResponse.json({ error: `Modelo configurado ${model} indisponível.` }, { status: 503 });
  }

  const { data: locked, error: updateError } = await db
    .from("editais_usuario")
    .update({ status: "processando", erro_processamento: null, updated_at: new Date().toISOString() })
    .eq("id", registro.id)
    .eq("usuario_id", auth.user.id)
    .eq("status", registro.status)
    .select("id")
    .maybeSingle();
  if (updateError || !locked) return NextResponse.json({ error: "Este edital já foi iniciado ou mudou de estado. Atualize a página e tente novamente." }, { status: 409 });

  try {
    const { data: arquivo, error: downloadError } = await db.storage.from("editais-usuario").download(registro.arquivo_path);
    if (downloadError || !arquivo) throw new Error(downloadError?.message || "Não foi possível baixar o PDF.");

    const form = new FormData();
    form.append("purpose", "user_data");
    form.append("file", new File([await arquivo.arrayBuffer()], registro.arquivo_nome, { type: "application/pdf" }));
    const up = await fetch("https://api.openai.com/v1/files", { method: "POST", headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }, body: form });
    const uploaded = await up.json();
    if (!up.ok || !uploaded.id) throw new Error(uploaded.error?.message || "Falha ao preparar PDF para análise.");

    const schema = {
      type: "object",
      additionalProperties: false,
      required: ["titulo_detectado", "cargos", "disciplinas", "observacoes"],
      properties: {
        titulo_detectado: { type: "string" },
        observacoes: { type: "array", items: { type: "string" } },
        cargos: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            required: ["nome", "disciplinas"],
            properties: {
              nome: { type: "string" },
              disciplinas: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["nome", "assuntos"],
                  properties: {
                    nome: { type: "string" },
                    assuntos: {
                      type: "array",
                      items: {
                        type: "object",
                        additionalProperties: false,
                        required: ["nome", "topicos"],
                        properties: {
                          nome: { type: "string" },
                          topicos: { type: "array", items: { type: "string" } }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        disciplinas: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            required: ["nome", "assuntos"],
            properties: {
              nome: { type: "string" },
              assuntos: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["nome", "topicos"],
                  properties: {
                    nome: { type: "string" },
                    topicos: { type: "array", items: { type: "string" } }
                  }
                }
              }
            }
          }
        }
      }
    };

    // Iniciar processamento assíncrono (não aguarda GPT concluir)
    const resp = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: model,
        background: true,
        input: [{
          role: "user", content: [
            { type: "input_file", file_id: uploaded.id },
            { type: "input_text", text: "Analise somente o conteúdo programático efetivamente presente neste edital. Extraia a hierarquia completa de 4 níveis de taxonomia: Cargos -> Disciplinas -> Assuntos -> Subassuntos/Tópicos. Se o edital contiver múltiplos cargos, preencha o array 'cargos'; se for um cargo único ou conteúdo geral comum, preencha 'disciplinas' diretamente. Em cada assunto, liste detalhadamente seus subtópicos/itens no array 'topicos'. Não invente, complete, resuma ou acrescente conteúdo externo. Preserve nomes e granularidade do documento. Se uma seção estiver ambígua, registre em observacoes e não crie assunto especulativo." }
          ]
        }],
        text: { format: { type: "json_schema", name: "edital_conteudo", strict: true, schema } }
      })
    });
    const json = await resp.json();
    if (!resp.ok) throw new Error(json.error?.message || "Falha ao iniciar análise do edital.");

    // Armazenar ID da resposta para polling e retornar aceito (HTTP 202)
    const { error: saveMetaError } = await db.from("editais_usuario").update({
      status: "processando",
      processamento_iniciado_em: new Date().toISOString(),
      openai_response_id: json.id,
      openai_file_id: uploaded.id,
      provider_status: "queued",
      erro_processamento: null,
      updated_at: new Date().toISOString()
    }).eq("id", registro.id);
    if (saveMetaError) {
      console.error("[processar/route] Erro ao salvar metadados do processamento:", saveMetaError);
    }

    return NextResponse.json({ ok: true, processing: true, edital_usuario_id: registro.id }, { status: 202 });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro inesperado";
    console.error("[processar/route] Erro no processamento do edital:", { id: registro.id, error: message });
    await db.from("editais_usuario").update({
      status: "erro",
      erro_processamento: message,
      updated_at: new Date().toISOString()
    }).eq("id", registro.id);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
