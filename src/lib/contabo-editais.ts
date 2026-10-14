import { NextRequest,NextResponse } from "next/server";
import { rm } from "node:fs/promises";
import path from "node:path";
import { COOKIE_SESSAO,getPool,usuarioDaSessao } from "@/lib/contabo-db";
export async function contaboEditais(req:NextRequest){
 const token=req.cookies.get(COOKIE_SESSAO)?.value;
 if(!token)return NextResponse.json({error:"Não autenticado"},{status:401});
 const db=getPool();
 if(!db)return NextResponse.json({error:"Banco indisponível"},{status:503});
 if(req.method!=="GET"&&req.method!=="DELETE")return NextResponse.json({error:"Método não permitido"},{status:405});
 try {
  const usuarioId=await usuarioDaSessao(db,token);
  if(!usuarioId)return NextResponse.json({error:"Não autenticado"},{status:401});
  if(req.method==="DELETE"){
   const id=req.nextUrl.searchParams.get("id")||"";
   if(!/^[0-9a-f-]{36}$/i.test(id))return NextResponse.json({error:"ID inválido"},{status:400});
   const atual=await db.query("SELECT arquivo_path FROM mentoria_recovery.editais_usuario WHERE id=$1 AND usuario_id=$2",[id,usuarioId]);
   if(!atual.rowCount)return NextResponse.json({error:"Edital não encontrado"},{status:404});
   const alvo=await db.query("SELECT 1 FROM mentoria_recovery.usuario_edital_alvo WHERE usuario_id=$1 AND edital_usuario_id=$2",[usuarioId,id]);
   if(alvo.rowCount)return NextResponse.json({error:"Este edital é o seu concurso alvo. Defina outro alvo antes de excluir."},{status:409});
   try{
    await db.query("DELETE FROM mentoria_recovery.editais_usuario WHERE id=$1 AND usuario_id=$2",[id,usuarioId]);
   }catch(e){
    console.error("[contaboEditais:delete]",e);
    return NextResponse.json({error:"Não foi possível excluir: o edital possui dados vinculados."},{status:409});
   }
   // Remove o PDF do disco depois do registro; falha aqui não desfaz a exclusão.
   const relativo=String(atual.rows[0].arquivo_path||"");
   if(relativo){
    const raiz=path.resolve(process.env.CONTABO_EDITAIS_STORAGE_ROOT||"/opt/mentoria/storage/editais-usuario");
    const arquivo=path.resolve(raiz,relativo);
    if(arquivo.startsWith(raiz+path.sep)){
     await rm(arquivo,{force:true}).catch(e=>console.error("[contaboEditais:rm]",e));
    }
   }
   return NextResponse.json({ok:true});
  }
  const result=await db.query("SELECT id,nome,orgao_nome,cargo,uf,status,arquivo_nome,arquivo_tamanho,erro_processamento,estrutura_extraida,created_at,updated_at,confirmado_em,edital_id FROM mentoria_recovery.editais_usuario WHERE usuario_id=$1 ORDER BY created_at DESC",[usuarioId]);
  const editais=result.rows.map(e=>{
   const estrutura=e.estrutura_extraida||{};
   const disciplinas=Array.isArray(estrutura.disciplinas)&&estrutura.disciplinas.length?estrutura.disciplinas:Array.isArray(estrutura.cargos)?estrutura.cargos.flatMap((c:{disciplinas?:unknown[]})=>Array.isArray(c.disciplinas)?c.disciplinas:[]):[];
   return {id:e.id,nome:e.nome,orgao:e.orgao_nome||estrutura.orgao||null,banca:estrutura.banca||null,cargo:e.cargo,uf:e.uf||estrutura.uf||null,status:e.status,arquivo_nome:e.arquivo_nome,arquivo_tamanho:e.arquivo_tamanho,erro_processamento:e.erro_processamento,edital_id:e.edital_id,created_at:e.created_at,updated_at:e.updated_at,confirmado_em:e.confirmado_em,total_disciplinas:disciplinas.length,total_topicos:disciplinas.reduce((n:number,d:{assuntos?:unknown[]})=>n+(Array.isArray(d.assuntos)?d.assuntos.length:0),0)};
  });
  return NextResponse.json({editais,fonte:"contabo"});
 }catch(e){console.error("[contaboEditais]",e);return NextResponse.json({error:"Erro ao consultar editais"},{status:500});}
}
