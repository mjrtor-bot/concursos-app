import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { Pool } from "pg";
export const runtime = "nodejs";
export async function contaboQuestions(req: NextRequest) {
 const token = req.cookies.get("mentoria_homologacao_session")?.value;
 if (!token) return NextResponse.json({success:false,error:"Não autenticado"},{status:401});
 const url = process.env.CONTABO_DATABASE_URL;
 if (!url) return NextResponse.json({success:false,error:"Banco não configurado"},{status:503});
 const db = new Pool({connectionString:url,max:2,connectionTimeoutMillis:5000});
 try {
  const hash = createHash("sha256").update(token).digest("hex");
  const auth = await db.query("SELECT 1 FROM mentoria_auth.sessions s JOIN mentoria_auth.users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",[hash]);
  if (!auth.rowCount) return NextResponse.json({success:false,error:"Não autenticado"},{status:401});
  const p = new URL(req.url).searchParams;
  const page = Math.max(1,Number.parseInt(p.get("page")||"1",10)||1);
  const pageSize = Math.min(200,Math.max(1,Number.parseInt(p.get("pageSize")||"10",10)||10));
  if (p.get("escopo")==="meu_edital" || p.get("edital_id") || p.get("concurso_id")) return NextResponse.json({success:true,questoes:[],total:0,page,pageSize,totalPages:1,hasMore:false,fonte:"contabo",aviso:"Editais ainda não migrados. Selecione Banco Inteiro."});
  const clauses:string[]=[]; const values:unknown[]=[];
  for (const [key,col] of [["disciplina_id","q.disciplina_id"],["assunto_id","q.assunto_id"],["banca","q.banca_nome"],["tipo","q.tipo"],["dificuldade","q.dificuldade"]] as const) {
   const v=p.get(key); if(v && v!=="todos" && v!=="todas"){values.push(v);clauses.push(col+"=$"+values.length);}
  }
  const ano=p.get("ano"); if(ano && /^[0-9]{4}$/.test(ano)){values.push(Number(ano));clauses.push("q.ano=$"+values.length);}
  const termo=p.get("termo_busca"); if(termo){values.push("%"+termo.slice(0,120)+"%");clauses.push("(q.enunciado ILIKE $"+values.length+" OR q.explicacao ILIKE $"+values.length+")");}
  const where=clauses.length?" WHERE "+clauses.join(" AND "):"";
  const total=Number((await db.query("SELECT count(*)::int AS n FROM mentoria_recovery.questoes q"+where,values)).rows[0].n);
  const args=[...values,pageSize,(page-1)*pageSize];
  const sql="SELECT q.*,d.nome AS disciplina_nome,a.nome AS assunto_nome FROM mentoria_recovery.questoes q JOIN mentoria_recovery.disciplinas d ON d.id=q.disciplina_id JOIN mentoria_recovery.assuntos a ON a.id=q.assunto_id"+where+" ORDER BY q.id LIMIT $"+(values.length+1)+" OFFSET $"+(values.length+2);
  const rows=(await db.query(sql,args)).rows;
  const ids=rows.map(r=>r.id);
  const alternatives=ids.length?(await db.query("SELECT id,questao_id,letra,texto,ordem FROM mentoria_recovery.alternativas WHERE questao_id=ANY($1::uuid[]) ORDER BY ordem",[ids])).rows:[];
  const map=new Map<string,typeof alternatives>();
  for(const a of alternatives)map.set(a.questao_id,[...(map.get(a.questao_id)||[]),a]);
  const questoes=rows.map(q=>({...q,banca:q.banca_nome,orgao:q.orgao_nome,cargo:q.cargo_nome,alternativas:map.get(q.id)||[],anulada:false,desatualizada:false,auditoria_status:"pendente"}));
  return NextResponse.json({success:true,questoes,total,page,pageSize,totalPages:Math.max(1,Math.ceil(total/pageSize)),hasMore:page*pageSize<total,fonte:"contabo"});
 } catch(e){console.error("[contaboQuestions]",e);return NextResponse.json({success:false,error:"Falha na consulta de questões"},{status:500});}
 finally {await db.end();}
}