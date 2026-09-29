import { NextResponse } from "next/server"; import { createClientServer } from "@/lib/supabase/server";
export async function GET(){const s=await createClientServer();if(!s)return NextResponse.json({error:"Supabase indisponível"},{status:503});const {data:{user}}=await s.auth.getUser();if(!user)return NextResponse.json({error:"Não autenticado"},{status:401});
 const [{data:p},{data:sessoes},{data:ranking}] = await Promise.all([
 s.from("gamificacao_perfis").select("xp,nivel").eq("usuario_id",user.id).maybeSingle(),
 s.from("mentoria_sessoes").select("tempo_liquido_segundos,created_at").eq("usuario_id",user.id),
 s.from("gamificacao_perfis").select("usuario_id,xp,nivel").order("xp",{ascending:false}).limit(10)
 ]);
 const {data:conq}=await s.from("gamificacao_conquistas").select("conquistas").eq("usuario_id",user.id).maybeSingle();
 const totalSeg=(sessoes||[]).reduce((a:any,x:any)=>a+(Number(x.tempo_liquido_segundos)||0),0);
 const hoje=new Date().toISOString().slice(0,10); const hojeSeg=(sessoes||[]).filter((x:any)=>String(x.created_at).slice(0,10)===hoje).reduce((a:any,x:any)=>a+(Number(x.tempo_liquido_segundos)||0),0);
 const ids=(ranking||[]).map((x:any)=>x.usuario_id); const {data:profiles}=ids.length?await s.from("profiles").select("id,nome").in("id",ids):{data:[] as any[]};
 const nomes=new Map((profiles||[]).map((x:any)=>[x.id,x.nome]));
 return NextResponse.json({xp:p?.xp||0,nivel:p?.nivel||1,conquistas:conq?.conquistas||[],horas_total:Number((totalSeg/3600).toFixed(1)),horas_hoje:Number((hojeSeg/3600).toFixed(1)),ranking:(ranking||[]).map((x:any,i:number)=>({posicao:i+1,nome:nomes.get(x.usuario_id)||"Estudante",xp:x.xp,nivel:x.nivel,eu:x.usuario_id===user.id}))});}