import {NextRequest,NextResponse} from "next/server";
import {readFile,stat} from "node:fs/promises";
import path from "node:path";
import {detectarEExtrair,resumirProposta} from "@/lib/editais/detectarEExtrair";
import {COOKIE_SESSAO,excedeuLimite,getPool,hashToken} from "@/lib/contabo-db";
import {PdfOcupadoError,PdfTempoEsgotadoError,extrairTextoPdf} from "@/lib/contabo-pdf";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function POST(req:NextRequest,{params}:{params:Promise<{id:string}>}){
 if(process.env.CONTABO_AUTH_HOMOLOGACAO!=="enabled")return NextResponse.json({error:"Disponível apenas na homologação"},{status:404});
 const token=req.cookies.get(COOKIE_SESSAO)?.value;
 if(!token)return NextResponse.json({error:"Sessão não encontrada"},{status:401});
 const {id}=await params;
 if(!/^[0-9a-f-]{36}$/i.test(id))return NextResponse.json({error:"ID inválido"},{status:400});
 const db=getPool();
 if(!db)return NextResponse.json({error:"Banco indisponível"},{status:503});
 const body=await req.json().catch(()=>({}));
 const gravar=body?.gravar===true;
 const hash=hashToken(token);
 try{
  const q=await db.query("SELECT e.arquivo_path,e.arquivo_tamanho,e.nome,e.cargo,e.status,e.estrutura_extraida,e.usuario_id FROM mentoria_recovery.editais_usuario e JOIN mentoria_auth.sessions s ON s.user_id=e.usuario_id JOIN mentoria_auth.users u ON u.id=s.user_id WHERE e.id=$1 AND s.token_hash=$2 AND s.revoked_at IS NULL AND s.expires_at>now() AND u.disabled_at IS NULL",[id,hash]);
  if(!q.rowCount)return NextResponse.json({error:"Edital não encontrado"},{status:404});
  const e=q.rows[0],relative=String(e.arquivo_path||"");
  if(excedeuLimite("extrair:"+String(e.usuario_id),20,3_600_000))return NextResponse.json({error:"Muitas extrações em pouco tempo. Tente novamente mais tarde."},{status:429});
  if(!/^[0-9a-f-]{36}\/[^/\\]+\.pdf$/i.test(relative)||relative.includes(".."))return NextResponse.json({error:"Caminho de PDF inválido"},{status:422});
  const root=path.resolve(process.env.CONTABO_EDITAIS_STORAGE_ROOT||"/opt/mentoria/storage/editais-usuario");
  const file=path.resolve(root,relative);
  if(!file.startsWith(root+path.sep))return NextResponse.json({error:"Caminho proibido"},{status:403});
  const meta=await stat(file);
  if(!meta.isFile()||meta.size>40*1024*1024||(e.arquivo_tamanho!=null&&Number(e.arquivo_tamanho)!==meta.size))return NextResponse.json({error:"Arquivo ausente ou divergente"},{status:409});
  const buf=await readFile(file);
  if(buf.subarray(0,5).toString()!=="%PDF-")return NextResponse.json({error:"PDF inválido"},{status:422});
  let texto="";
  let paginas=0;
  try{
   const lido=await extrairTextoPdf(new Uint8Array(buf));
   texto=lido.texto;paginas=lido.paginas;
  }catch(err){
   if(err instanceof PdfOcupadoError)return NextResponse.json({error:"O servidor está processando outros PDFs. Tente novamente em instantes."},{status:503});
   if(err instanceof PdfTempoEsgotadoError)return NextResponse.json({error:"A leitura do PDF excedeu o tempo limite."},{status:504});
   throw err;
  }
  if(!texto||texto.trim().length<100)return NextResponse.json({error:"PDF sem texto selecionável. OCR necessário."},{status:422});
  const linhas=texto.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  const marcadores=/\b(CONTE[ÚU]DO(?:S)? PROGRAM[ÁA]TICO(?:S)?|PROGRAMA(?:S)? DE PROVA|ANEXO\s+(?:II|III|IV|V|2|3|4|5))\b/i;
  const indices=linhas.map((x,i)=>marcadores.test(x)?i:-1).filter(i=>i>=0);
  const trechos=indices.slice(0,25).map(i=>({linha:i+1,titulo:linhas[i].slice(0,220),amostra:linhas.slice(i,Math.min(i+35,linhas.length)).join("\n").slice(0,4000)}));
  const proposta=detectarEExtrair(texto,e.cargo);
  const resumo=resumirProposta(proposta);
  const cabecalhos={"Cache-Control":"private, no-store"};
  if(!gravar){
   return NextResponse.json({ok:true,arquivo:e.nome,cargo:e.cargo,paginas,caracteres:texto.length,marcadores:trechos,proposta:resumo,observacao:trechos.length?"Prévia para revisão humana; nenhuma disciplina foi alterada.":"Nenhum anexo programático identificado automaticamente; confira o PDF original."},{headers:cabecalhos});
  }
  if(!proposta.gravavel)return NextResponse.json({error:"A extração automática não é confiável para este PDF.",proposta:resumo},{status:422,headers:cabecalhos});
  const atual=e.estrutura_extraida&&typeof e.estrutura_extraida==="object"?e.estrutura_extraida:{};
  const jaTemEstrutura=Array.isArray(atual.disciplinas)&&atual.disciplinas.length>0;
  if(e.status==="confirmado"||jaTemEstrutura||atual.edicao_manual_contabo===true)return NextResponse.json({error:"Este edital já tem conteúdo programático. A extração automática não sobrescreve estrutura existente.",proposta:resumo},{status:409,headers:cabecalhos});
  const patch=JSON.stringify({disciplinas:proposta.disciplinas,observacoes:["Conteúdo extraído automaticamente do PDF. Revisar antes de confirmar."],extracao_automatica_contabo:{metodo:proposta.metodo,em:new Date().toISOString()}});
  const upd=await db.query("UPDATE mentoria_recovery.editais_usuario SET estrutura_extraida=COALESCE(estrutura_extraida,'{}'::jsonb)||$1::jsonb,status='aguardando_revisao',erro_processamento=NULL,updated_at=now() WHERE id=$2 AND usuario_id=(SELECT user_id FROM mentoria_auth.sessions WHERE token_hash=$3 AND revoked_at IS NULL AND expires_at>now() LIMIT 1) RETURNING id",[patch,id,hash]);
  if(!upd.rowCount)return NextResponse.json({error:"Sessão expirada"},{status:401});
  return NextResponse.json({ok:true,gravado:true,proposta:resumo},{headers:cabecalhos});
 }catch(err){console.error("[contabo-extrair]",err);return NextResponse.json({error:"Não foi possível ler o PDF. Verifique os logs do servidor."},{status:500})}
}
