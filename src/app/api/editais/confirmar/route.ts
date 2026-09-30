import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

function slugify(v:string){return v.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,180)}

export async function POST(request:NextRequest){
  const supabase=await createClientServer();
  if(!supabase)return NextResponse.json({error:"Supabase indisponível"},{status:503});
  const {data:{user}}=await supabase.auth.getUser();
  if(!user)return NextResponse.json({error:"Não autenticado"},{status:401});
  const {data:profile}=await supabase.from("profiles").select("role").eq("id",user.id).maybeSingle();
  if(!profile||!["admin","editor"].includes(profile.role))return NextResponse.json({error:"Sem permissão"},{status:403});
  const body=await request.json().catch(()=>null);
  const uploadId=body?.edital_usuario_id, editalId=body?.edital_id;
  if(!uploadId||!editalId)return NextResponse.json({error:"edital_usuario_id e edital_id são obrigatórios"},{status:400});

  const {data:upload}=await supabase.from("editais_usuario").select("id,status,estrutura_extraida").eq("id",uploadId).eq("usuario_id",user.id).maybeSingle();
  if(!upload||upload.status!=="aguardando_confirmacao"||!upload.estrutura_extraida)return NextResponse.json({error:"Não há prévia processada aguardando confirmação."},{status:409});
  const {data:edital}=await supabase.from("editais_concurso").select("id").eq("id",editalId).maybeSingle();
  if(!edital)return NextResponse.json({error:"Edital de destino não encontrado."},{status:404});

  const estrutura:any=upload.estrutura_extraida;
  const disciplinasValidas=(estrutura.disciplinas||[]).filter((d:any)=>String(d?.nome||"").trim() && Array.isArray(d?.assuntos) && d.assuntos.some((a:any)=>String(a||"").trim()));
  if(!disciplinasValidas.length)return NextResponse.json({error:"A prévia não possui conteúdo programático válido para confirmar."},{status:422});
  let ordem=0,total=0;
  for(const d of disciplinasValidas){
    const nome=String(d.nome||"").trim(); if(!nome)continue;
    const slug=slugify(nome);
    let {data:disc}=await supabase.from("disciplinas").select("id").eq("slug",slug).maybeSingle();
    if(!disc){const ins=await supabase.from("disciplinas").insert({nome,slug}).select("id").single();if(ins.error)return NextResponse.json({error:ins.error.message},{status:500});disc=ins.data}
    for(const raw of d.assuntos||[]){
      const assuntoNome=String(raw||"").trim();if(!assuntoNome)continue;
      const assuntoSlug=slugify(assuntoNome);
      let {data:ass}=await supabase.from("assuntos").select("id").eq("disciplina_id",disc!.id).eq("slug",assuntoSlug).maybeSingle();
      if(!ass){const ins=await supabase.from("assuntos").insert({disciplina_id:disc!.id,nome:assuntoNome,slug:assuntoSlug}).select("id").single();if(ins.error)return NextResponse.json({error:ins.error.message},{status:500});ass=ins.data}
      ordem++;
      const up=await supabase.from("edital_topicos").upsert({edital_id:editalId,disciplina_id:disc!.id,assunto_id:ass!.id,ordem},{onConflict:"edital_id,disciplina_id,assunto_id"});
      if(up.error)return NextResponse.json({error:up.error.message},{status:500});
      total++;
    }
  }
  if(total===0)return NextResponse.json({error:"Nenhum tópico válido foi gravado."},{status:422});
  await supabase.from("editais_usuario").update({status:"confirmado",confirmado_em:new Date().toISOString(),updated_at:new Date().toISOString()}).eq("id",uploadId);
  return NextResponse.json({ok:true,total_topicos:total});
}