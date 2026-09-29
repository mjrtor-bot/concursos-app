import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

async function auth() {
  const supabase = await createClientServer();
  if (!supabase) return { error: NextResponse.json({ error: "Supabase indisponível" }, { status: 503 }) };
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  return { supabase, user };
}

export async function GET() {
  const ctx=await auth(); if(ctx.error) return ctx.error;
  const { data: plano }=await ctx.supabase!.from("mentoria_planos").select("id").eq("usuario_id",ctx.user!.id).eq("status","ativo").order("created_at",{ascending:false}).limit(1).maybeSingle();
  if(!plano) return NextResponse.json({tarefas:[],atrasadas:0,previsao_termino:null});
  const {data,error}=await ctx.supabase!.from("mentoria_tarefas").select("*").eq("plano_id",plano.id).order("data_planejada").order("ordem_dia");
  if(error) return NextResponse.json({error:error.message},{status:500});
  const hoje=new Date().toISOString().slice(0,10);
  const tarefas=(data||[]).map((t:any)=>({...t,status_calendario:t.status==="concluida"?"cumprida":t.data_planejada&&t.data_planejada<hoje?"atrasada":"planejada"}));
  const pend=tarefas.filter((t:any)=>t.status!=="concluida");
  return NextResponse.json({tarefas,atrasadas:pend.filter((t:any)=>t.status_calendario==="atrasada").length,previsao_termino:pend.map((t:any)=>t.data_planejada).filter(Boolean).sort().at(-1)||null});
}

export async function POST() {
  const ctx=await auth(); if(ctx.error) return ctx.error;
  const { data: plano }=await ctx.supabase!.from("mentoria_planos").select("id").eq("usuario_id",ctx.user!.id).eq("status","ativo").order("created_at",{ascending:false}).limit(1).maybeSingle();
  if(!plano) return NextResponse.json({error:"Plano ativo não encontrado"},{status:404});
  const hoje=new Date().toISOString().slice(0,10);
  const {data:atrasadas,error}=await ctx.supabase!.from("mentoria_tarefas").select("id,ordem").eq("plano_id",plano.id).neq("status","concluida").lt("data_planejada",hoje).order("ordem");
  if(error) return NextResponse.json({error:error.message},{status:500});
  for(let i=0;i<(atrasadas||[]).length;i++){
    const d=new Date(); d.setDate(d.getDate()+Math.floor(i/3)); const data=d.toISOString().slice(0,10);
    await ctx.supabase!.from("mentoria_tarefas").update({data_planejada:data,ordem_dia:(i%3)+1,replanejada_em:new Date().toISOString()}).eq("id",(atrasadas as any[])[i].id);
  }
  return NextResponse.json({success:true,replanejadas:(atrasadas||[]).length});
}


export async function PATCH(req: Request) {
  const ctx=await auth(); if(ctx.error) return ctx.error;
  const body=await req.json();
  if(!body.tarefa_id || !body.data_planejada) return NextResponse.json({error:"tarefa_id e data_planejada obrigatórios"},{status:400});
  const { data: plano }=await ctx.supabase!.from("mentoria_planos").select("id").eq("usuario_id",ctx.user!.id).eq("status","ativo").order("created_at",{ascending:false}).limit(1).maybeSingle();
  if(!plano) return NextResponse.json({error:"Plano ativo não encontrado"},{status:404});
  const {data,error}=await ctx.supabase!.from("mentoria_tarefas").update({
    data_planejada:String(body.data_planejada).slice(0,10),
    ordem_dia:Math.max(1,Number(body.ordem_dia)||1),
    replanejada_em:new Date().toISOString()
  }).eq("id",body.tarefa_id).eq("plano_id",plano.id).select().single();
  if(error) return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json({tarefa:data});
}
