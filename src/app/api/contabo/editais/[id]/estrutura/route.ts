import {NextRequest,NextResponse} from "next/server";
import {createHash} from "node:crypto";
import {Pool} from "pg";
export const runtime="nodejs";
export const dynamic="force-dynamic";
type Ctx={params:Promise<{id:string}>};
async function run(req:NextRequest,ctx:Ctx,mode:"read"|"structure"|"progress"){
 if(process.env.CONTABO_AUTH_HOMOLOGACAO!=="enabled")return NextResponse.json({error:"Indisponível"},{status:404});
 const token=req.cookies.get("mentoria_homologacao_session")?.value;
 if(!token)return NextResponse.json({error:"Não autenticado"},{status:401});
 const {id}=await ctx.params;
 if(!/^[0-9a-f-]{36}$/i.test(id))return NextResponse.json({error:"ID inválido"},{status:400});
 if(!process.env.CONTABO_DATABASE_URL)return NextResponse.json({error:"Banco indisponível"},{status:503});
 const hash=createHash("sha256").update(token).digest("hex");
 const db=new Pool({connectionString:process.env.CONTABO_DATABASE_URL,max:1});
 try{
  const q=await db.query("SELECT e.id,e.nome,e.cargo,e.status,e.estrutura_extraida FROM mentoria_recovery.editais_usuario e JOIN mentoria_auth.sessions s ON s.user_id=e.usuario_id JOIN mentoria_auth.users u ON u.id=s.user_id WHERE e.id=$1 AND s.token_hash=$2 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",[id,hash]);
  if(!q.rowCount)return NextResponse.json({error:"Edital não encontrado"},{status:404});
  if(mode==="read")return NextResponse.json({edital:q.rows[0]},{headers:{"Cache-Control":"private, no-store"}});
  const body=await req.json().catch(()=>null);
  if(mode==="progress"){
   const p=body?.progresso;
   if(!p||typeof p!=="object"||Array.isArray(p)||Object.keys(p).length>12000)return NextResponse.json({error:"Progresso inválido"},{status:422});
   for(const [key,v] of Object.entries(p)){
    const x=v as Record<string,unknown>;
    if(!/^\d+-\d+-(?:\d+|a)$/.test(key)||!x||typeof x!=="object"||typeof x.video!=="boolean"||typeof x.dirigido!=="boolean"||!Array.isArray(x.revisoes)||x.revisoes.length!==3||x.revisoes.some(z=>typeof z!=="boolean"))return NextResponse.json({error:"Registro inválido"},{status:422});
    const t=String(x.total??""),a=String(x.acertos??"");
    if(!/^\d{0,6}$/.test(t)||!/^\d{0,6}$/.test(a)||(t!==""&&a!==""&&Number(a)>Number(t)))return NextResponse.json({error:"Total e acertos inconsistentes"},{status:422});
   }
   const result=await db.query("UPDATE mentoria_recovery.editais_usuario SET estrutura_extraida=jsonb_set(COALESCE(estrutura_extraida,'{}'::jsonb),'{verticalizado_progresso}',$1::jsonb,true) WHERE id=$2 AND usuario_id=(SELECT user_id FROM mentoria_auth.sessions WHERE token_hash=$3 AND revoked_at IS NULL AND expires_at>now() LIMIT 1) RETURNING id",[JSON.stringify(p),id,hash]);
   if(!result.rowCount)return NextResponse.json({error:"Sessão expirada"},{status:401});
   return NextResponse.json({ok:true,registros:Object.keys(p).length});
  }
  const disciplinas=body?.disciplinas;
  if(!Array.isArray(disciplinas)||!disciplinas.length||disciplinas.length>100)return NextResponse.json({error:"Disciplinas inválidas"},{status:422});
  let total=0;
  for(const d of disciplinas){
   if(typeof d?.nome!=="string"||!d.nome.trim()||d.nome.length>180||!Array.isArray(d.assuntos)||d.assuntos.length>250)return NextResponse.json({error:"Disciplina inválida"},{status:422});
   for(const a of d.assuntos){
    if(typeof a?.nome!=="string"||!a.nome.trim()||a.nome.length>400||!Array.isArray(a.topicos)||a.topicos.length>500||a.topicos.some((t:unknown)=>typeof t!=="string"||!t.trim()||(t as string).length>600))return NextResponse.json({error:"Assunto ou tópico inválido"},{status:422});
    total+=a.topicos.length+1;
   }
  }
  if(total>12000)return NextResponse.json({error:"Conteúdo excede limite"},{status:422});
  const patch=JSON.stringify({disciplinas,edicao_manual_contabo:true,edicao_manual_em:new Date().toISOString()});
  const result=await db.query("UPDATE mentoria_recovery.editais_usuario SET estrutura_extraida=COALESCE(estrutura_extraida,'{}'::jsonb)||$1::jsonb WHERE id=$2 AND usuario_id=(SELECT user_id FROM mentoria_auth.sessions WHERE token_hash=$3 AND revoked_at IS NULL AND expires_at>now() LIMIT 1) RETURNING id",[patch,id,hash]);
  if(!result.rowCount)return NextResponse.json({error:"Sessão expirada"},{status:401});
  return NextResponse.json({ok:true,disciplinas:disciplinas.length,assuntos_e_topicos:total});
 }catch(e){console.error("[contabo-estrutura]",e);return NextResponse.json({error:"Falha ao acessar estrutura"},{status:500});}
 finally{await db.end();}
}
export async function GET(req:NextRequest,ctx:Ctx){return run(req,ctx,"read")}
export async function PUT(req:NextRequest,ctx:Ctx){return run(req,ctx,"structure")}
export async function PATCH(req:NextRequest,ctx:Ctx){return run(req,ctx,"progress")}
