import { NextRequest,NextResponse } from "next/server";
import { Pool } from "pg";
import { createHash } from "node:crypto";
export async function contaboEditais(req:NextRequest){
 const token=req.cookies.get("mentoria_homologacao_session")?.value;
 if(!token)return NextResponse.json({error:"Não autenticado"},{status:401});
 if(!process.env.CONTABO_DATABASE_URL)return NextResponse.json({error:"Banco indisponível"},{status:503});
 const db=new Pool({connectionString:process.env.CONTABO_DATABASE_URL,max:2});
 try {
  const auth=await db.query("SELECT u.id FROM mentoria_auth.sessions s JOIN mentoria_auth.users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",[createHash("sha256").update(token).digest("hex")]);
  if(!auth.rowCount)return NextResponse.json({error:"Não autenticado"},{status:401});
  if(req.method!=="GET")return NextResponse.json({error:"Exclusão desativada durante a migração"},{status:405});
  const result=await db.query("SELECT id,nome,orgao_nome,cargo,uf,status,arquivo_nome,arquivo_tamanho,erro_processamento,estrutura_extraida,created_at,updated_at,confirmado_em,edital_id FROM mentoria_recovery.editais_usuario WHERE usuario_id=$1 ORDER BY created_at DESC",[auth.rows[0].id]);
  const editais=result.rows.map(e=>{
   const estrutura=e.estrutura_extraida||{};
   const disciplinas=Array.isArray(estrutura.disciplinas)&&estrutura.disciplinas.length?estrutura.disciplinas:Array.isArray(estrutura.cargos)?estrutura.cargos.flatMap((c:{disciplinas?:unknown[]})=>Array.isArray(c.disciplinas)?c.disciplinas:[]):[];
   return {id:e.id,nome:e.nome,orgao:e.orgao_nome||estrutura.orgao||null,banca:estrutura.banca||null,cargo:e.cargo,uf:e.uf||estrutura.uf||null,status:e.status,arquivo_nome:e.arquivo_nome,arquivo_tamanho:e.arquivo_tamanho,erro_processamento:e.erro_processamento,edital_id:e.edital_id,created_at:e.created_at,updated_at:e.updated_at,confirmado_em:e.confirmado_em,total_disciplinas:disciplinas.length,total_topicos:disciplinas.reduce((n:number,d:{assuntos?:unknown[]})=>n+(Array.isArray(d.assuntos)?d.assuntos.length:0),0)};
  });
  return NextResponse.json({editais,fonte:"contabo"});
 }catch(e){console.error("[contaboEditais]",e);return NextResponse.json({error:"Erro ao consultar editais"},{status:500});}
 finally{await db.end();}
}
