import {NextRequest,NextResponse} from "next/server";
import {COOKIE_SESSAO,getPool,hashToken} from "@/lib/contabo-db";
export const runtime="nodejs";
export const dynamic="force-dynamic";
type Ctx={params:Promise<{id:string}>};

// Linhas do verticalizado com a mesma chave que a tela usa para guardar o progresso
// ("disciplina-assunto-topico" ou "disciplina-assunto-a" quando o assunto não tem tópicos).
function linhasVerticalizado(estrutura:unknown):Map<string,string>{
 const e=(estrutura&&typeof estrutura==="object"?estrutura:{}) as {disciplinas?:unknown;cargos?:{disciplinas?:unknown}[]};
 const base:unknown[]=Array.isArray(e.disciplinas)&&e.disciplinas.length?e.disciplinas:Array.isArray(e.cargos)?e.cargos.flatMap(c=>Array.isArray(c?.disciplinas)?c.disciplinas as unknown[]:[]):[];
 const mapa=new Map<string,string>();
 base.forEach((d,i)=>{
  const assuntos=Array.isArray((d as {assuntos?:unknown})?.assuntos)?(d as {assuntos:unknown[]}).assuntos:[];
  assuntos.forEach((a,j)=>{
   const nome=typeof a==="string"?a:String((a as {nome?:unknown})?.nome??"");
   const topicos:unknown[]=typeof a==="string"?[]:Array.isArray((a as {topicos?:unknown})?.topicos)?(a as {topicos:unknown[]}).topicos:[];
   if(topicos.length)topicos.forEach((t,k)=>mapa.set(i+"-"+j+"-"+k,String(t)));
   else mapa.set(i+"-"+j+"-a",nome);
  });
 });
 return mapa;
}
const normalizar=(s:string)=>s.normalize("NFC").replace(/\s+/g," ").trim().toLowerCase();
function temDados(v:unknown):boolean{
 const x=v as {video?:unknown;dirigido?:unknown;total?:unknown;acertos?:unknown;revisoes?:unknown}|null;
 if(!x||typeof x!=="object")return false;
 return x.video===true||x.dirigido===true||String(x.total??"")!==""||String(x.acertos??"")!==""||(Array.isArray(x.revisoes)&&x.revisoes.some(r=>r===true));
}

async function run(req:NextRequest,ctx:Ctx,mode:"read"|"structure"|"progress"){
 if(process.env.CONTABO_AUTH_HOMOLOGACAO!=="enabled")return NextResponse.json({error:"Indisponível"},{status:404});
 const token=req.cookies.get(COOKIE_SESSAO)?.value;
 if(!token)return NextResponse.json({error:"Não autenticado"},{status:401});
 const {id}=await ctx.params;
 if(!/^[0-9a-f-]{36}$/i.test(id))return NextResponse.json({error:"ID inválido"},{status:400});
 const db=getPool();
 if(!db)return NextResponse.json({error:"Banco indisponível"},{status:503});
 const hash=hashToken(token);
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
   const result=await db.query("UPDATE mentoria_recovery.editais_usuario SET estrutura_extraida=jsonb_set(COALESCE(estrutura_extraida,'{}'::jsonb),'{verticalizado_progresso}',$1::jsonb,true),updated_at=now() WHERE id=$2 AND usuario_id=(SELECT user_id FROM mentoria_auth.sessions WHERE token_hash=$3 AND revoked_at IS NULL AND expires_at>now() LIMIT 1) RETURNING id",[JSON.stringify(p),id,hash]);
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

  // O progresso é guardado por posição (disciplina-assunto-tópico). Se a edição mudar uma
  // linha que já tem progresso, esse progresso passaria a apontar para outro tópico.
  // Nesse caso exige confirmação e guarda uma cópia do que for removido.
  const atual=(q.rows[0].estrutura_extraida&&typeof q.rows[0].estrutura_extraida==="object"?q.rows[0].estrutura_extraida:{}) as Record<string,unknown>;
  const progAtual=(atual.verticalizado_progresso&&typeof atual.verticalizado_progresso==="object"&&!Array.isArray(atual.verticalizado_progresso)?atual.verticalizado_progresso:{}) as Record<string,unknown>;
  const antes=linhasVerticalizado(atual);
  const depois=linhasVerticalizado({disciplinas});
  const afetadas:string[]=[];
  for(const [chave,valor] of Object.entries(progAtual)){
   if(!temDados(valor))continue;
   const velho=antes.get(chave),novo=depois.get(chave);
   if(velho===undefined||novo===undefined||normalizar(velho)!==normalizar(novo))afetadas.push(chave);
  }
  if(afetadas.length&&body?.confirmar_perda_progresso!==true){
   return NextResponse.json({error:"Esta edição altera "+afetadas.length+" linha(s) do edital que já têm progresso registrado (videoaula, questões ou revisões). Se continuar, o progresso dessas linhas será removido, e uma cópia fica guardada no banco. Deseja continuar?",codigo:"progresso_afetado",afetadas:afetadas.length},{status:409});
  }
  const patchObj:Record<string,unknown>={disciplinas,edicao_manual_contabo:true,edicao_manual_em:new Date().toISOString()};
  let progressoNovo:Record<string,unknown>|undefined;
  if(afetadas.length){
   progressoNovo={...progAtual};
   const removidos:Record<string,unknown>={};
   for(const chave of afetadas){removidos[chave]=progAtual[chave];delete progressoNovo[chave];}
   const anteriores=Array.isArray(atual.verticalizado_progresso_backups)?atual.verticalizado_progresso_backups as unknown[]:[];
   patchObj.verticalizado_progresso=progressoNovo;
   patchObj.verticalizado_progresso_backups=[...anteriores,{em:new Date().toISOString(),itens:removidos}].slice(-5);
  }
  const patch=JSON.stringify(patchObj);
  const result=await db.query("UPDATE mentoria_recovery.editais_usuario SET estrutura_extraida=COALESCE(estrutura_extraida,'{}'::jsonb)||$1::jsonb,updated_at=now() WHERE id=$2 AND usuario_id=(SELECT user_id FROM mentoria_auth.sessions WHERE token_hash=$3 AND revoked_at IS NULL AND expires_at>now() LIMIT 1) RETURNING id",[patch,id,hash]);
  if(!result.rowCount)return NextResponse.json({error:"Sessão expirada"},{status:401});
  return NextResponse.json({ok:true,disciplinas:disciplinas.length,assuntos_e_topicos:total,progresso_removido:afetadas.length,...(progressoNovo?{progresso:progressoNovo}:{})});
 }catch(e){console.error("[contabo-estrutura]",e);return NextResponse.json({error:"Falha ao acessar estrutura"},{status:500});}
}
export async function GET(req:NextRequest,ctx:Ctx){return run(req,ctx,"read")}
export async function PUT(req:NextRequest,ctx:Ctx){return run(req,ctx,"structure")}
export async function PATCH(req:NextRequest,ctx:Ctx){return run(req,ctx,"progress")}
