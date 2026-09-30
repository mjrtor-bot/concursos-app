"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AlertCircle, ChevronDown, ExternalLink, FileText, Loader2, Search, Upload } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";

type Edital = {
  id: string; orgao_nome: string; sigla?: string | null; uf?: string | null;
  esfera: "federal"|"estadual"|"municipal"; carreira: string; cargo: string;
  banca?: string | null; edital_numero?: string | null; data_publicacao: string;
  data_prova?: string | null; status: string; fonte_url: string; pdf_url?: string | null;
  total_disciplinas: number; total_topicos: number;
};

type PreviewDisciplina = { nome: string; assuntos: string[] };
type Preview = { titulo_detectado: string; disciplinas: PreviewDisciplina[]; observacoes: string[] };

const carreiras = [
  ["todos","Todas"],["PF","PF"],["PRF","PRF"],["POLICIA_CIVIL","Polícia Civil"],
  ["POLICIA_MILITAR","Polícia Militar"],["BOMBEIROS","Bombeiros"],
  ["POLICIA_PENAL","Polícia Penal"],["GUARDA_MUNICIPAL","Guarda Municipal"],
];

const statusLabel: Record<string,string> = {
  aberto:"Aberto", previsto:"Previsto", prova_realizada:"Prova realizada",
  encerrado:"Encerrado", expirado:"Expirado",
};

export default function BibliotecaEditaisPage() {
  const { user } = useAuth();
  const { recarregarConcursoAlvo } = useConcurso();
  const [editais,setEditais]=useState<Edital[]>([]);
  const [loading,setLoading]=useState(true);
  const [erro,setErro]=useState("");
  const [q,setQ]=useState("");
  const [carreira,setCarreira]=useState("todos");
  const [uf,setUf]=useState("todos");
  const [status,setStatus]=useState("todos");

  const [formValues,setFormValues]=useState({nome:"",orgao:"",cargo:"",uf:""});
  const [arquivo,setArquivo]=useState<File|null>(null);
  const [enviando,setEnviando]=useState(false);
  const [processando,setProcessando]=useState(false);
  const [mensagem,setMensagem]=useState("");
  const [aplicando,setAplicando]=useState<string|null>(null);
  const [uploadId,setUploadId]=useState<string|null>(null);
  const [preview,setPreview]=useState<Preview|null>(null);
  const [mostrarPreview,setMostrarPreview]=useState(false);

  async function carregar(){
    setLoading(true); setErro("");
    const p=new URLSearchParams();
    if(q.trim())p.set("q",q.trim());
    if(carreira!=="todos")p.set("carreira",carreira);
    if(uf!=="todos")p.set("uf",uf);
    if(status!=="todos")p.set("status",status);
    try{
      const r=await fetch("/api/editais?"+p.toString(),{cache:"no-store"});
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha ao carregar editais");
      setEditais(j.editais||[]);
    }catch(e){setErro(e instanceof Error?e.message:"Falha ao carregar editais");}
    finally{setLoading(false);}
  }

  useEffect(()=>{const t=setTimeout(carregar,250);return()=>clearTimeout(t);},[q,carreira,uf,status]);

  const ufs=useMemo(()=>Array.from(new Set(editais.map(e=>e.uf).filter(Boolean) as string[])).sort(),[editais]);

  async function usarNoPlanejamento(id:string){
    setAplicando(id); setMensagem("");
    try{
      const r=await fetch(`/api/editais/${id}/usar`,{method:"POST"});
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha ao aplicar edital");
      await recarregarConcursoAlvo();
      if(user?.id){
        const ciclo=await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
        if(!ciclo.success)throw new Error(ciclo.error||"Edital aplicado, mas o ciclo não pôde ser gerado.");
      }
      setMensagem(`${j.aviso} ${j.topicos} tópicos sincronizados e ciclo atualizado.`);
    }catch(err){setMensagem(err instanceof Error?err.message:"Falha ao aplicar edital");}
    finally{setAplicando(null);}
  }

  async function processarPdf(id:string){
    setProcessando(true); setMensagem("");
    try{
      const r=await fetch("/api/editais/processar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({edital_usuario_id:id})});
      const j=await r.json();
      if(!r.ok && r.status!==422)throw new Error(j.error||"Falha ao processar o PDF");
      if(j.estrutura){
        setPreview(j.estrutura);
        setMostrarPreview(true);
      }
      if(r.status===422){
        throw new Error(j.aviso||"Nenhum conteúdo programático foi encontrado no PDF.");
      }
      setMensagem(`PDF processado: ${j.total_disciplinas} disciplinas e ${j.total_assuntos} assuntos encontrados.`);
    }catch(err){
      setMensagem(err instanceof Error?err.message:"Falha ao processar o PDF");
    }finally{setProcessando(false);}
  }

  async function enviar(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setMensagem(""); setPreview(null); setMostrarPreview(false); setUploadId(null);

    if(!arquivo){setMensagem("Selecione um PDF.");return;}
    if(arquivo.type!=="application/pdf"||!arquivo.name.toLowerCase().endsWith(".pdf")){
      setMensagem("Envie somente um arquivo PDF.");return;
    }
    if(arquivo.size<=0||arquivo.size>20*1024*1024){
      setMensagem("O PDF deve ter no máximo 20 MB.");return;
    }

    setEnviando(true);
    try{
      const fd=new FormData();
      fd.set("nome",formValues.nome);
      fd.set("orgao",formValues.orgao);
      fd.set("cargo",formValues.cargo);
      fd.set("uf",formValues.uf);
      fd.set("arquivo",arquivo);

      const r=await fetch("/api/editais/upload",{method:"POST",body:fd});
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha no upload");

      const id=j.edital_usuario_id||j.edital?.id;
      if(!id)throw new Error("Upload concluído, mas o identificador do edital não foi retornado.");

      setUploadId(id);
      setMensagem("PDF armazenado com segurança. Agora processe o arquivo para gerar a prévia.");
      setFormValues({nome:"",orgao:"",cargo:"",uf:""});
      setArquivo(null);
      await processarPdf(id);
    }catch(err){
      setMensagem(err instanceof Error?err.message:"Falha no upload");
    }finally{
      setEnviando(false);
    }
  }

  return <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
    <header className="rounded-2xl border bg-white dark:bg-slate-900 p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Editais Verticalizados</p>
      <h1 className="mt-1 text-3xl font-black">Biblioteca de concursos policiais</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Editais oficiais publicados nos últimos dois anos permanecem disponíveis mesmo após o encerramento. Editais históricos podem ser usados como referência de estudo.</p>
    </header>

    <section className="rounded-2xl border bg-white dark:bg-slate-900 p-4 space-y-3">
      <div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar órgão, cargo ou banca..." className="w-full rounded-xl border bg-transparent py-2.5 pl-10 pr-3"/></div>
      <div className="grid gap-2 sm:grid-cols-3">
        <select value={carreira} onChange={e=>setCarreira(e.target.value)} className="rounded-xl border bg-transparent p-2.5">{carreiras.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select>
        <select value={uf} onChange={e=>setUf(e.target.value)} className="rounded-xl border bg-transparent p-2.5"><option value="todos">Todas as UFs</option>{ufs.map(x=><option key={x}>{x}</option>)}</select>
        <select value={status} onChange={e=>setStatus(e.target.value)} className="rounded-xl border bg-transparent p-2.5"><option value="todos">Todos os status</option><option value="aberto">Abertos</option><option value="previsto">Previstos</option><option value="prova_realizada">Prova realizada</option><option value="encerrado">Encerrados</option><option value="expirado">Expirados</option></select>
      </div>
    </section>

    <section>
      {loading?<div className="flex items-center justify-center gap-2 py-12"><Loader2 className="h-5 w-5 animate-spin"/>Carregando editais...</div>:
       erro?<div className="rounded-xl border border-red-200 p-4 text-red-700">{erro}</div>:
       editais.length===0?<div className="rounded-xl border border-dashed p-8 text-center text-slate-500">Nenhum edital oficial encontrado com esses filtros. O catálogo não usa dados inventados; ele precisa ser alimentado com fontes oficiais verificadas.</div>:
       <div className="grid gap-4 md:grid-cols-2">{editais.map(ed=><article key={ed.id} className="rounded-2xl border bg-white dark:bg-slate-900 p-5">
         <div className="flex justify-between gap-3"><div><p className="text-xs font-bold text-indigo-600">{ed.sigla||ed.orgao_nome}{ed.uf?" · "+ed.uf:""}</p><h2 className="text-lg font-black">{ed.cargo}</h2></div><span className="h-fit rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold">{statusLabel[ed.status]||ed.status}</span></div>
         <dl className="mt-4 grid grid-cols-2 gap-2 text-sm"><div><dt className="text-slate-500">Banca</dt><dd className="font-semibold">{ed.banca||"Não informado"}</dd></div><div><dt className="text-slate-500">Edital</dt><dd className="font-semibold">{ed.edital_numero||"Não informado"}</dd></div><div><dt className="text-slate-500">Publicação</dt><dd>{new Date(ed.data_publicacao+"T12:00:00").toLocaleDateString("pt-BR")}</dd></div><div><dt className="text-slate-500">Prova</dt><dd>{ed.data_prova?new Date(ed.data_prova+"T12:00:00").toLocaleDateString("pt-BR"):"Data a definir"}</dd></div><div><dt className="text-slate-500">Disciplinas</dt><dd>{ed.total_disciplinas}</dd></div><div><dt className="text-slate-500">Tópicos</dt><dd>{ed.total_topicos}</dd></div></dl>
         {["prova_realizada","encerrado","expirado"].includes(ed.status)&&<p className="mt-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 p-2 text-xs text-amber-800 dark:text-amber-300">Este concurso já foi realizado. O conteúdo pode ser usado como referência, mas um novo edital poderá apresentar alterações.</p>}
         <div className="mt-4 flex flex-wrap gap-2"><a href={ed.fonte_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-semibold">Fonte oficial <ExternalLink className="h-3.5 w-3.5"/></a>{ed.pdf_url&&<a href={ed.pdf_url} target="_blank" rel="noreferrer" className="rounded-lg border px-3 py-2 text-sm font-semibold">Ver PDF</a>}<button onClick={()=>usarNoPlanejamento(ed.id)} disabled={aplicando===ed.id||ed.total_disciplinas===0||ed.total_topicos===0} title={(ed.total_disciplinas===0||ed.total_topicos===0)?"Este edital ainda não possui conteúdo programático validado.":undefined} className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-bold text-white disabled:opacity-50">{aplicando===ed.id?"Aplicando...":(ed.total_disciplinas===0||ed.total_topicos===0)?"Aguardando conteúdo validado":"Usar para meu planejamento"}</button></div>
       </article>)}</div>}
    </section>

    <section id="importar" className="rounded-2xl border bg-white dark:bg-slate-900 p-6">
      <div className="flex items-start gap-3"><Upload className="mt-1 h-5 w-5 text-indigo-600"/><div><h2 className="text-xl font-black">Importar edital em PDF</h2><p className="text-sm text-slate-600 dark:text-slate-400">Envie o edital para gerar automaticamente uma prévia de disciplinas e assuntos. O arquivo fica privado e vinculado à sua conta.</p></div></div>
      <form onSubmit={enviar} className="mt-5 grid gap-3 sm:grid-cols-2">
        <input name="nome" value={formValues.nome} onChange={e=>setFormValues(v=>({...v,nome:e.target.value}))} required placeholder="Nome do concurso / edital" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="orgao" value={formValues.orgao} onChange={e=>setFormValues(v=>({...v,orgao:e.target.value}))} placeholder="Órgão" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="cargo" value={formValues.cargo} onChange={e=>setFormValues(v=>({...v,cargo:e.target.value}))} placeholder="Cargo" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="uf" value={formValues.uf} onChange={e=>setFormValues(v=>({...v,uf:e.target.value.toUpperCase().slice(0,2)}))} maxLength={2} placeholder="UF" className="rounded-xl border bg-transparent p-2.5 uppercase"/>
        <label className="sm:col-span-2 rounded-xl border border-dashed p-5 text-sm"><span className="font-bold">PDF do edital (máx. 20 MB)</span><input type="file" accept="application/pdf,.pdf" onChange={e=>setArquivo(e.target.files?.[0]||null)} className="mt-2 block w-full"/></label>
        <button disabled={enviando||processando} className="sm:col-span-2 rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white disabled:opacity-50">{enviando?"Enviando PDF...":processando?"Processando PDF...":"Enviar e gerar prévia"}</button>
      </form>

      {mensagem&&<div className="mt-4 flex gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 p-3 text-sm"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5"/>{mensagem}</div>}

      {uploadId&&!preview&&!processando&&<button onClick={()=>processarPdf(uploadId)} className="mt-3 rounded-xl border px-4 py-2.5 text-sm font-bold">Processar PDF novamente</button>}

      {processando&&<div className="mt-4 flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm"><Loader2 className="h-5 w-5 animate-spin text-indigo-600"/><div><strong>Processando edital...</strong><p className="text-slate-600">O PDF inteiro está sendo analisado para localizar disciplinas e todos os assuntos. Isso pode levar alguns minutos.</p></div></div>}

      {preview&&<section className="mt-5 rounded-2xl border border-indigo-200 bg-white dark:bg-slate-900 overflow-hidden">
        <button type="button" onClick={()=>setMostrarPreview(v=>!v)} className="w-full flex items-center justify-between gap-3 p-5 text-left">
          <div><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Prévia estruturada</p><h3 className="text-xl font-black">{preview.titulo_detectado||formValues.nome||"Edital importado"}</h3><p className="mt-1 text-sm text-slate-500">{preview.disciplinas.length} disciplinas · {preview.disciplinas.reduce((n,d)=>n+d.assuntos.length,0)} assuntos</p></div>
          <ChevronDown className={`h-5 w-5 transition-transform ${mostrarPreview?"rotate-180":""}`}/>
        </button>
        {mostrarPreview&&<div className="border-t p-5 space-y-3">
          {preview.observacoes?.length>0&&<div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800"><strong>Observações:</strong><ul className="mt-1 list-disc pl-5">{preview.observacoes.map((x,i)=><li key={i}>{x}</li>)}</ul></div>}
          {preview.disciplinas.map((d,i)=><details key={i} className="rounded-xl border p-4" open={i<3}>
            <summary className="cursor-pointer font-bold">{d.nome} <span className="ml-2 text-xs font-normal text-slate-500">{d.assuntos.length} assuntos</span></summary>
            <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm">{d.assuntos.map((a,j)=><li key={j}>{a}</li>)}</ol>
          </details>)}
          <div className="pt-2 text-xs text-slate-500">A prévia é extraída do PDF. O sistema não deve inventar disciplinas ou assuntos ausentes no documento.</div>
        </div>}
      </section>}

      <p className="mt-3 text-xs text-slate-500">O upload é privado. Após o processamento, a prévia fica disponível para conferência antes de qualquer gravação do conteúdo programático.</p>
    </section>
  </main>;
}
