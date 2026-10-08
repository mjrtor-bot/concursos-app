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

  const defaultModel = "gpt-4o-mini";
  const model = process.env.OPENAI_EDITAL_MODEL || defaultModel;

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
      required: ["titulo_detectado", "orgao", "banca", "uf", "cargos", "disciplinas", "observacoes"],
      properties: {
        titulo_detectado: { type: "string" },
        orgao: { type: "string" },
        banca: { type: "string" },
        uf: { type: "string" },
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

    const promptText = `Você é um especialista em análise e verticalização de editais de concursos públicos.
Analise com máxima precisão o conteúdo programático efetivamente presente no documento PDF anexado.

REGRAS OBRIGATÓRIAS DE EXTRAÇÃO:
1. HIERARQUIA TAXONÔMICA ESTRITA (4 NÍVEIS):
   - Nível 1: CARGO (ex: "Cadete PM", "Aluno Oficial", "Agente", etc.). Se houver múltiplos cargos com conteúdos distintos no edital, extraia cada cargo separadamente no array "cargos". Se for cargo único ou conteúdo comum, preencha "disciplinas" ou "cargos". NUNCA misture conteúdos de cargos diferentes.
   - Nível 2: DISCIPLINA (ex: "Língua Portuguesa", "Direito Constitucional", "Direito Administrativo", "Direito Penal", "Direito Processual Penal", "Direito Penal Militar", "Direito Processual Penal Militar", "Legislação Extravagante", "Realidade de Goiás", etc.).
   - Nível 3: ASSUNTO (cada item temático numerado ou tópico principal do edital, ex: "1. Compreensão e interpretação de textos", "2. Tipologia textual", "1. Aplicação da lei penal militar", "2. Do crime militar").
   - Nível 4: TÓPICOS/SUBASSUNTOS (subitens, leis específicas, parágrafos ou desdobramentos de cada assunto no array "topicos").

2. BLOCOS E SEÇÕES NÃO SÃO DISCIPLINAS:
   - Rótulos como "CONHECIMENTOS GERAIS", "CONHECIMENTOS ESPECÍFICOS", "BLOCO I", "MÓDULO BÁSICO", "PROVA OBJETIVA" NÃO são disciplinas. Identifique e extraia as disciplinas reais contidas dentro de cada bloco.

3. CONSISTÊNCIA DE GRANULARIDADE:
   - Cada item numerado ou tema substantivo DEVE ser um "assunto" individual.
   - NUNCA agrupe uma disciplina inteira (como Direito Penal Militar ou Legislação Extravagante) em um único assunto genérico com todos os tópicos jogados dentro de "topicos". Cada unidade temática/lei/tópico numerado deve ser seu próprio assunto.

4. METADADOS E FIDELIDADE:
   - Identifique titulo_detectado, orgao, banca examinadora e uf (sigla com 2 letras, ex: "GO", "PR", "SP").
   - Não invente, não resuma, não complete com informações externas. Extraia estritamente o conteúdo do edital.
   - Se o PDF NÃO contiver anexo de conteúdo programático (ex: edital puramente administrativo sem disciplinas), retorne os arrays de disciplinas e cargos vazios e descreva explicitamente em "observacoes" (ex: "O documento não contém o anexo de conteúdo programático").`;

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
            { type: "input_text", text: promptText }
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
