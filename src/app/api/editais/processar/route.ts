import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 300;

async function requireAdmin() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (!profile || !["admin","editor"].includes(profile.role)) return { error: NextResponse.json({ error: "Sem permissão" }, { status: 403 }) };
  return { supabase, user };
}

function extractOutputText(json:any) {
  if (typeof json.output_text === "string") return json.output_text;
  return (json.output || []).flatMap((x:any)=>x.content || []).filter((x:any)=>x.type==="output_text").map((x:any)=>x.text).join("");
}

export async function POST(request: NextRequest) {
  const auth = await requireAdmin();
  if (auth.error) return auth.error;
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: "OPENAI_API_KEY não configurada no servidor." }, { status: 503 });

  const body = await request.json().catch(()=>null);
  const editalUsuarioId = body?.edital_usuario_id;
  if (!editalUsuarioId) return NextResponse.json({ error: "edital_usuario_id obrigatório" }, { status: 400 });

  const { data: registro, error: regError } = await auth.supabase!.from("editais_usuario").select("*").eq("id", editalUsuarioId).eq("usuario_id", auth.user!.id).maybeSingle();
  if (regError || !registro) return NextResponse.json({ error: "PDF não encontrado." }, { status: 404 });

  await auth.supabase!.from("editais_usuario").update({ status:"processando", erro_processamento:null, updated_at:new Date().toISOString() }).eq("id", registro.id);

  let openAIFileId:string | null = null;
  try {
    const { data: arquivo, error: downloadError } = await auth.supabase!.storage.from("editais-usuario").download(registro.arquivo_path);
    if (downloadError || !arquivo) throw new Error(downloadError?.message || "Não foi possível baixar o PDF.");

    const form = new FormData();
    form.append("purpose", "user_data");
    form.append("file", new File([await arquivo.arrayBuffer()], registro.arquivo_nome, { type:"application/pdf" }));
    const up = await fetch("https://api.openai.com/v1/files", { method:"POST", headers:{ Authorization:`Bearer ${process.env.OPENAI_API_KEY}` }, body:form });
    const uploaded = await up.json();
    if (!up.ok || !uploaded.id) throw new Error(uploaded.error?.message || "Falha ao preparar PDF para análise.");
    openAIFileId = uploaded.id;

    const schema = {
      type:"object",
      additionalProperties:false,
      required:["titulo_detectado","disciplinas","observacoes"],
      properties:{
        titulo_detectado:{type:"string"},
        observacoes:{type:"array",items:{type:"string"}},
        disciplinas:{type:"array",items:{type:"object",additionalProperties:false,required:["nome","assuntos"],properties:{
          nome:{type:"string"},
          assuntos:{type:"array",items:{type:"string"}}
        }}}
      }
    };

    const resp = await fetch("https://api.openai.com/v1/responses", {
      method:"POST",
      headers:{ Authorization:`Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type":"application/json" },
      body:JSON.stringify({
        model:"gpt-5.6-luna",
        input:[{role:"user",content:[
          {type:"input_file",file_id:uploaded.id},
          {type:"input_text",text:"Leia o PDF inteiro, inclusive anexos, tabelas e páginas finais. Localize qualquer seção equivalente a conteúdo programático, programa de matérias, conhecimentos, disciplinas, objetos de avaliação, conteúdo das provas ou tópicos exigidos. Extraia cada disciplina e TODOS os subitens/assuntos que o próprio documento exigir, preservando a redação e a granularidade. Não use conhecimento externo e não invente itens. Títulos como Conhecimentos Gerais/Específicos são grupos: procure as matérias e tópicos dentro deles. Se o edital apenas remeter o conteúdo programático para outro documento/anexo que NÃO esteja neste PDF, deixe disciplinas vazio e escreva em observacoes exatamente qual anexo/documento está faltando e onde a remissão aparece. Se houver conteúdo em tabelas, listas numeradas ou texto corrido, converta-o para disciplina → assuntos sem resumir."}
        ]}],
        reasoning:{effort:"low"},
        text:{format:{type:"json_schema",name:"edital_conteudo",strict:true,schema}}
      })
    });
    const json = await resp.json();
    if (!resp.ok) throw new Error(json.error?.message || "Falha na análise do edital.");
    const output = extractOutputText(json).trim();
    if (!output) throw new Error("A análise do PDF terminou sem retornar conteúdo estruturado.");
    let estrutura:any;
    try { estrutura = JSON.parse(output); } catch { throw new Error("A análise do PDF retornou uma estrutura inválida. Tente novamente com o arquivo original."); }
    if (!estrutura || !Array.isArray(estrutura.disciplinas)) throw new Error("A análise do PDF não retornou a lista de disciplinas esperada.");
    const totalAssuntos = estrutura.disciplinas.reduce((n:number,d:any)=>n+(d.assuntos?.length||0),0);
    if (!estrutura.disciplinas.length || totalAssuntos===0) {
      const diagnostico = Array.isArray(estrutura.observacoes) && estrutura.observacoes.length ? estrutura.observacoes.join(" | ") : "Nenhum conteúdo programático foi localizado no PDF.";
      await auth.supabase!.from("editais_usuario").update({ status:"revisao_sem_conteudo", estrutura_extraida:estrutura, erro_processamento:diagnostico, updated_at:new Date().toISOString() }).eq("id", registro.id);
      return NextResponse.json({ ok:false, edital_usuario_id:registro.id, estrutura, total_disciplinas:estrutura.disciplinas?.length||0, total_assuntos:totalAssuntos, aviso:diagnostico }, { status:422 });
    }

    await auth.supabase!.from("editais_usuario").update({ status:"aguardando_confirmacao", estrutura_extraida:estrutura, erro_processamento:null, updated_at:new Date().toISOString() }).eq("id", registro.id);
    return NextResponse.json({ ok:true, edital_usuario_id:registro.id, estrutura, total_disciplinas:estrutura.disciplinas.length, total_assuntos:totalAssuntos });
  } catch (e) {
    const message=e instanceof Error?e.message:"Erro inesperado";
    await auth.supabase!.from("editais_usuario").update({ status:"erro", erro_processamento:message, updated_at:new Date().toISOString() }).eq("id", registro.id);
    return NextResponse.json({ error:message }, { status:500 });
  } finally {
    if (openAIFileId && process.env.OPENAI_API_KEY) {
      await fetch(`https://api.openai.com/v1/files/${openAIFileId}`, { method:"DELETE", headers:{ Authorization:`Bearer ${process.env.OPENAI_API_KEY}` } }).catch(()=>undefined);
    }
  }
}