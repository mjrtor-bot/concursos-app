import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import { createHash } from "node:crypto";
export const runtime="nodejs";
export async function contaboAnswer(req:NextRequest) {
 const token=req.cookies.get("mentoria_homologacao_session")?.value;
 if(!token)return NextResponse.json({success:false,saved:false,reason:"unauthenticated"},{status:401});
 if(!process.env.CONTABO_DATABASE_URL)return NextResponse.json({success:false,saved:false,reason:"database_unavailable"},{status:503});
 const db=new Pool({connectionString:process.env.CONTABO_DATABASE_URL,max:2});
 try {
  const auth=await db.query("SELECT u.id FROM mentoria_auth.sessions s JOIN mentoria_auth.users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",[createHash("sha256").update(token).digest("hex")]);
  if(!auth.rowCount)return NextResponse.json({success:false,saved:false,reason:"unauthenticated"},{status:401});
  const userId=auth.rows[0].id;
  if(req.method==="GET"){
   const rows=await db.query("SELECT r.*,q.disciplina_id,d.nome AS disciplina_nome,q.banca_nome AS banca FROM mentoria_recovery.respostas_usuarios r JOIN mentoria_recovery.questoes q ON q.id=r.questao_id JOIN mentoria_recovery.disciplinas d ON d.id=q.disciplina_id WHERE r.usuario_id=$1 ORDER BY r.created_at DESC LIMIT 5000",[userId]);
   return NextResponse.json({success:true,respostas:rows.rows.map(r=>({...r,tempo_resposta:r.tempo_resposta_segundos}))});
  }
  const body=await req.json();
  const uuid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if(!uuid.test(body.questao_id||"")||!uuid.test(body.alternativa_id||""))return NextResponse.json({success:false,saved:false,reason:"invalid_ids"},{status:400});
  const answer=await db.query("SELECT a.correta,a.id,q.versao FROM mentoria_recovery.alternativas a JOIN mentoria_recovery.questoes q ON q.id=a.questao_id WHERE a.id=$1 AND a.questao_id=$2",[body.alternativa_id,body.questao_id]);
  if(!answer.rowCount)return NextResponse.json({success:false,saved:false,reason:"invalid_alternative"},{status:400});
  const correta=Boolean(answer.rows[0].correta);
  const seconds=Math.max(0,Math.min(86400,Number(body.tempo_resposta_segundos)||0));
  await db.query("INSERT INTO mentoria_recovery.respostas_usuarios(usuario_id,questao_id,alternativa_id,correta,tempo_resposta_segundos,questao_versao) VALUES($1,$2,$3,$4,$5,$6)",[userId,body.questao_id,body.alternativa_id,correta,seconds,answer.rows[0].versao||1]);
  const correct=await db.query("SELECT id FROM mentoria_recovery.alternativas WHERE questao_id=$1 AND correta=true LIMIT 1",[body.questao_id]);
  return NextResponse.json({success:true,saved:true,correta,alternativa_correta_id:correct.rows[0]?.id||null});
 }catch(e){console.error("[contaboAnswer]",e);return NextResponse.json({success:false,saved:false,error:"Falha ao registrar resposta"},{status:500});}
 finally{await db.end();}
}
