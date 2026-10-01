import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 60;

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

  const { data: registro, error: regError } = await auth.supabase!.from("editais_usuario").select("*").eq("id", editalUsuarioId).eq("usuario_id", auth.user!.id).in("status", ["aguardando_processamento", "erro"]).maybeSingle();
  if (regError || !registro) return NextResponse.json({ error: "PDF não encontrado ou não aguardando processamento." }, { status: 404 });

  const { error: updateError } = await auth.supabase!.from("editais_usuario").update({ status:"processando", erro_processamento:null, updated_at:new Date().toISOString() }).eq("id", registro.id).eq("status", registro.status);
  if (updateError) return NextResponse.json({ error: "Conflito de estado ao iniciar processamento." }, { status: 409 });

  try {
    const { data: arquivo, error: downloadError } = await auth.supabase!.storage.from("editais-usuario").download(registro.arquivo_path);
    if (downloadError || !arquivo) throw new Error(downloadError?.message || "Não foi possível baixar o PDF.");

    const form = new FormData();
    form.append("purpose", "user_data");
    form.append("file", new File([await arquivo.arrayBuffer()], registro.arquivo_nome, { type:"application/pdf" }));
    const up = await fetch("https://api.openai.com/v1/files", { method:"POST", headers:{ Authorization:`Bearer ${process.env.OPENAI_API_KEY}` }, body:form });
    const uploaded = await up.json();
    if (!up.ok || !uploaded.id) throw new Error(uploaded.error?.message || "Falha ao preparar PDF para análise.");

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
        model:"gpt-5.1-mini",
        input:[{role:"user",content:[
          {type:"input_file",file_id:uploaded.id},
          {type:"input_text",text:"Analise somente o conteúdo programático efetivamente presente neste edital. Extraia disciplinas e seus assuntos. Não invente, complete, resuma ou acrescente conteúdo externo. Preserve nomes e granularidade do documento. Se uma seção estiver ambígua, registre em observacoes e não crie assunto especulativo."}
        ]}],
        text:{format:{type:"json_schema",name:"edital_conteudo",strict:true,schema}}
      })
    });
    const json = await resp.json();
    if (!resp.ok) throw new Error(json.error?.message || "Falha na análise do edital.");
    const output = extractOutputText(json);
    const estrutura = JSON.parse(output);
    const totalAssuntos = estrutura.disciplinas.reduce((n:number,d:any)=>n+(d.assuntos?.length||0),0);
    if (!estrutura.disciplinas.length || totalAssuntos===0) throw new Error("Nenhum conteúdo programático confiável foi identificado.");

    await auth.supabase!.from("editais_usuario").update({ status:"aguardando_confirmacao", estrutura_extraida:estrutura, erro_processamento:null, updated_at:new Date().toISOString() }).eq("id", registro.id);
    return NextResponse.json({ ok:true, edital_usuario_id:registro.id, estrutura, total_disciplinas:estrutura.disciplinas.length, total_assuntos:totalAssuntos });
  } catch (e) {
    const message=e instanceof Error?e.message:"Erro inesperado";
    await auth.supabase!.from("editais_usuario").update({ status:"erro", erro_processamento:message, updated_at:new Date().toISOString() }).eq("id", registro.id);
    return NextResponse.json({ error:message }, { status:500 });
  }
}