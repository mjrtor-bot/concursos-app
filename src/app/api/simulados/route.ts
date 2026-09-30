import { NextRequest, NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET() {
  const supabase=await createClientServer();
  if(!supabase) return NextResponse.json({error:"Supabase indisponível"},{status:503});
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.json({error:"Não autenticado"},{status:401});
  const {data,error}=await supabase.from("simulados_usuario").select("*").eq("usuario_id",user.id).order("created_at",{ascending:false});
  if(error) return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({simulados:(data||[]).map(s=>({...s,criado_por_sistema:false})),tentativas:[]});
}

export async function POST(request:NextRequest) {
  const supabase=await createClientServer();
  if(!supabase) return NextResponse.json({error:"Supabase indisponível"},{status:503});
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.json({error:"Não autenticado"},{status:401});
  const b=await request.json();
  const ids=Array.isArray(b.questoes_ids)?b.questoes_ids.filter((x:unknown)=>typeof x==="string"&&/^[0-9a-f-]{36}$/i.test(x as string)):[];
  if(!String(b.titulo||"").trim()||ids.length===0) return NextResponse.json({error:"Título e questões válidas são obrigatórios."},{status:400});
  const payload={usuario_id:user.id,concurso_id:/^[0-9a-f-]{36}$/i.test(String(b.concurso_id||""))?b.concurso_id:null,titulo:String(b.titulo).trim(),descricao:String(b.descricao||""),tempo_limite_minutos:Math.max(1,Number(b.tempo_limite_minutos)||60),questoes_ids:ids,total_questoes:ids.length,dificuldade:String(b.dificuldade||"medio")};
  const {data,error}=await supabase.from("simulados_usuario").insert(payload).select("*").single();
  if(error) return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({simulado:{...data,criado_por_sistema:false}},{status:201});
}