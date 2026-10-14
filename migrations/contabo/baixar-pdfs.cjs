const fs=require('node:fs');const path=require('node:path');const crypto=require('node:crypto');
const project=path.resolve(__dirname,'..','..');const cfg=Object.fromEntries(fs.readFileSync(path.join(project,'.env.local'),'utf8').split(/\r?\n/).filter(x=>/^[A-Z_][A-Z0-9_]*=/.test(x)).map(x=>{const i=x.indexOf('=');return [x.slice(0,i),x.slice(i+1).trim().replace(/^["']|["']$/g,'')]}));
const base=cfg.NEXT_PUBLIC_SUPABASE_URL,key=cfg.SUPABASE_SERVICE_ROLE_KEY;
if(!base?.includes('xvpqcibdarcelvcwnglq')||!key)throw Error('Configuração Supabase inválida');
const owner='2264c03d-5ec8-4005-a2aa-12824ba09ea1';
const dest=path.join(process.env.USERPROFILE,'Desktop','mentoria-pdfs-contabo');fs.mkdirSync(dest,{recursive:true});
const headers={apikey:key,Authorization:'Bearer '+key};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function request(url){for(let i=0;i<3;i++){try{const r=await fetch(url,{headers,signal:AbortSignal.timeout(45000)});if(r.ok)return r;throw Error('HTTP '+r.status);}catch(e){if(i===2)throw e;await sleep(800*(i+1));}}}
(async()=>{
const response=await request(base+'/rest/v1/editais_usuario?select=id,arquivo_path,arquivo_tamanho,arquivo_nome&usuario_id=eq.'+owner+'&limit=100');
const rows=await response.json();if(rows.length!==47)throw Error('Esperados 47 registros; recebidos '+rows.length);
let done=0,bytes=0;const manifest=[];
for(const item of rows){
 const name=item.arquivo_path;
 if(typeof name!=='string'||!name.startsWith(owner+'/')||name.includes('..')||name.includes('\\'))throw Error('Caminho inválido');
 const url=base+'/storage/v1/object/authenticated/editais-usuario/'+name.split('/').map(encodeURIComponent).join('/');
 const res=await request(url);const buffer=Buffer.from(await res.arrayBuffer());
 if(buffer.length<5||buffer.subarray(0,5).toString()!=='%PDF-')throw Error('Arquivo não é PDF válido: '+item.id);
 if(item.arquivo_tamanho!==null&&Number(item.arquivo_tamanho)!==buffer.length)throw Error('Tamanho divergente: '+item.id);
 const folder=path.join(dest,owner);fs.mkdirSync(folder,{recursive:true});
 const filename=path.basename(name);fs.writeFileSync(path.join(folder,filename),buffer,{flag:'w'});
 manifest.push({id:item.id,path:name,bytes:buffer.length,sha256:crypto.createHash('sha256').update(buffer).digest('hex')});
 done++;bytes+=buffer.length;console.log('PDF '+done+'/47 verificado');
}
fs.writeFileSync(path.join(dest,'manifest.json'),JSON.stringify(manifest,null,2));
console.log('TRANSFERENCIA_LOCAL_OK arquivos='+done+' bytes='+bytes+' pasta='+dest);
})().catch(e=>{console.error('FALHA:',e.message);process.exitCode=1;});