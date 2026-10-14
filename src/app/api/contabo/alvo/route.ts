import { NextRequest, NextResponse } from "next/server";
import { COOKIE_SESSAO, getPool, usuarioDaSessao } from "@/lib/contabo-db";
export const runtime="nodejs";
export const dynamic="force-dynamic";
async function handler(req:NextRequest) {
 if(process.env.CONTABO_AUTH_HOMOLOGACAO!=="enabled") return NextResponse.json({error:"Indisponível"},{status:404});
 const token=req.cookies.get(COOKIE_SESSAO)?.value;
 if(!token)return NextResponse.json({error:"Não autenticado"},{status:401});
 const db=getPool();
 if(!db)return NextResponse.json({error:"Banco indisponível"},{status:503});
 try {
  const userId=await usuarioDaSessao(db,token);
  if(!userId)return NextResponse.json({error:"Não autenticado"},{status:401});
  if(req.method==="GET"){
   const result=await db.query("SELECT a.edital_usuario_id,e.nome,e.cargo,e.status,e.estrutura_extraida FROM mentoria_recovery.usuario_edital_alvo a JOIN mentoria_recovery.editais_usuario e ON e.id=a.edital_usuario_id AND e.usuario_id=a.usuario_id WHERE a.usuario_id=$1",[userId]);
   const a=result.rows[0];
   if(!a)return NextResponse.json({alvo:null,concursos:[]},{headers:{"Cache-Control":"private, no-store"}});
   const concursoId=a.edital_usuario_id;
   const cargoId=a.edital_usuario_id;
   const estrutura=a.estrutura_extraida||{};
   const concurso={id:concursoId,nome:a.nome||a.cargo||"Edital importado",orgao:estrutura.orgao||"Edital pessoal",esfera:"estadual",uf:estrutura.uf||null,status:"publicado",fonte_oficial_url:null,eh_importado:true,concurso_cargos:[{id:cargoId,nome:a.cargo||a.nome||"Cargo do edital",escolaridade:null,vagas:null,salario:null,ativo:true,editais_concurso:[{id:concursoId,prova_em:null,fonte_oficial_url:"",status:"publicado",banca:estrutura.banca||null}]}]};
   return NextResponse.json({alvo:{concurso_id:concursoId,cargo_id:cargoId,edital_id:concursoId},concursos:[concurso]},{headers:{"Cache-Control":"private, no-store"}});
  }
  const body=await req.json().catch(()=>null);
  const id=String(body?.edital_id||"");
  if(!/^[0-9a-f-]{36}$/i.test(id))return NextResponse.json({error:"ID inválido"},{status:400});
  const edital=await db.query("SELECT id,status,estrutura_extraida FROM mentoria_recovery.editais_usuario WHERE id=$1 AND usuario_id=$2",[id,userId]);
  if(!edital.rowCount)return NextResponse.json({error:"Edital não encontrado"},{status:404});
  const row=edital.rows[0];
  const structure=row.estrutura_extraida||{};
  const disciplines=Array.isArray(structure.disciplinas)?structure.disciplinas:[];
  const cargos=Array.isArray(structure.cargos)?structure.cargos:[];
  const total=disciplines.length+cargos.reduce((n:number,c:{disciplinas?:unknown[]})=>n+(Array.isArray(c.disciplinas)?c.disciplinas.length:0),0);
  if(row.status!=="confirmado"||total===0)return NextResponse.json({error:"Confirme um edital com disciplinas extraídas antes de defini-lo como alvo"},{status:409});
  await db.query("INSERT INTO mentoria_recovery.usuario_edital_alvo(usuario_id,edital_usuario_id,updated_at) VALUES($1,$2,now()) ON CONFLICT(usuario_id) DO UPDATE SET edital_usuario_id=EXCLUDED.edital_usuario_id,updated_at=now()",[userId,id]);
  return NextResponse.json({ok:true,edital_id:id});
 }catch(e){console.error("[contabo-alvo]",e);return NextResponse.json({error:"Não foi possível consultar ou salvar o alvo"},{status:500});}
}
export async function GET(req:NextRequest){return handler(req);}
export async function POST(req:NextRequest){return handler(req);}
