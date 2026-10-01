"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, ChevronDown, ExternalLink, Loader2, Search, Upload } from "lucide-react";
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
type Alvo = { concurso_id: string; cargo_id: string; edital_id: string | null };
type AlvoDetalhe = { concurso: string; cargo: string; edital: string };

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
  const [confirmando,setConfirmando]=useState(false);
  const [confirmado,setConfirmado]=useState(false);
  const [mensagem,setMensagem]=useState("");
  const [aplicando,setAplicando]=useState<string|null>(null);
  const [uploadId,setUploadId]=useState<string|null>(null);
  const [preview,setPreview]=useState<Preview|null>(null);
  const [mostrarPreview,setMostrarPreview]=useState(false);
  const [alvo,setAlvo]=useState<Alvo|null>(null);
  const [alvoDetalhe,setAlvoDetalhe]=useState<AlvoDetalhe|null>(null);

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

  async function carregarAlvo(){
    try{
      const r=await fetch("/api/concursos/alvo",{cache:"no-store"});
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha ao carregar concurso alvo");
      setAlvo(j.alvo||null);
      const concurso=(j.concursos||[]).find((c:any)=>c.id===j.alvo?.concurso_id);
      const cargo=(concurso?.concurso_cargos||[]).find((c:any)=>c.id===j.alvo?.cargo_id);
      const edital=(cargo?.editais_concurso||[]).find((e:any)=>e.id===j.alvo?.edital_id);
      if(concurso&&cargo) setAlvoDetalhe({
        concurso:concurso.nome,
        cargo:cargo.nome,
        edital:edital?.titulo||edital?.numero||"Edital do concurso alvo",
      });
    }catch(e){
      setAlvo(null); setAlvoDetalhe(null);
      setMensagem(e instanceof Error?e.message:"Não foi possível identificar o concurso alvo.");
    }
  }

  useEffect(()=>{void carregarAlvo()},[user?.id]);
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
    setProcessando(true); setMensagem(""); setConfirmado(false); setPreview(null); setMostrarPreview(false);
    try{
      const r=await fetch("/api/editais/processar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({edital_usuario_id:id})});
      const j=await r.json();
      if(!r.ok && r.status!==202 && r.status!==422)throw new Error(j.error||"Falha ao iniciar o processamento do PDF");
      if(r.status===422)throw new Error(j.aviso||"Nenhum conteúdo programático foi encontrado no PDF.");

      if(j.processing){
        setMensagem("PDF recebido. A análise está sendo executada; esta tela será atualizada automaticamente.");
        for(let tentativa=0; tentativa<120; tentativa++){
          await new Promise(resolve=>setTimeout(resolve,3000));
          const sr=await fetch(`/api/editais/processar/status?edital_usuario_id=${encodeURIComponent(id)}`,{cache:"no-store"});
          const sj=await sr.json();
          if(!sr.ok)throw new Error(sj.error||"Falha ao consultar o processamento do PDF");
          if(sj.done){
            if(!sj.ok || sj.status==="erro" || sj.status==="revisao_sem_conteudo"){
              throw new Error(sj.error||sj.aviso||"Nenhum conteúdo programático foi encontrado no PDF.");
            }
            setPreview(sj.estrutura);
            setMostrarPreview(true);
            setMensagem(`PDF processado: ${sj.total_disciplinas} disciplinas e ${sj.total_assuntos} assuntos encontrados. Revise a prévia antes de confirmar.`);
            return;
          }
          setMensagem("Analisando o PDF completo... aguarde. O processamento continua mesmo enquanto esta tela consulta o andamento.");
        }
        throw new Error("A análise ainda está em andamento. Atualize a página em alguns instantes para continuar.");
      }

      if(j.estrutura){
        setPreview(j.estrutura);
        setMostrarPreview(true);
        setMensagem(`PDF processado: ${j.total_disciplinas} disciplinas e ${j.total_assuntos} assuntos encontrados. Revise a prévia antes de confirmar.`);
      }
    }catch(err){setMensagem(err instanceof Error?err.message:"Falha ao processar o PDF");}
    finally{setProcessando(false);}
  }

  async function confirmarPreview(){
    if(!uploadId||!preview)return;
    if(!alvo?.edital_id){
      setMensagem("Seu concurso alvo não possui um edital cadastrado. Selecione um concurso/edital válido antes de confirmar a importação.");
      return;
    }
    setConfirmando(true); setMensagem("");
    try{
      const r=await fetch("/api/editais/confirmar",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({edital_usuario_id:uploadId,edital_id:alvo.edital_id})
      });
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha ao confirmar e importar o conteúdo.");

      const sync=await fetch("/api/concursos/alvo",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({concurso_id:alvo.concurso_id,cargo_id:alvo.cargo_id,edital_id:alvo.edital_id})
      });
      const sj=await sync.json();
      if(!sync.ok)throw new Error(sj.error||"Conteúdo confirmado, mas a sincronização do planejamento falhou.");

      await recarregarConcursoAlvo();
      if(user?.id){
        const ciclo=await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
        if(!ciclo.success)throw new Error(ciclo.error||"Conteúdo importado, mas o ciclo não pôde ser recalculado.");
      }

      setConfirmado(true);
      setMensagem(`Conteúdo confirmado: ${j.total_topicos} tópicos importados e sincronizados com o planejamento.`);
    }catch(err){setMensagem(err instanceof Error?err.message:"Falha ao confirmar a prévia");}
    finally{setConfirmando(false);}
  }

  async function enviar(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setMensagem(""); setPreview(null); setMostrarPreview(false); setUploadId(null); setConfirmado(false);
    if(!arquivo){setMensagem("Selecione um PDF.");return;}
    if(arquivo.type!=="application/pdf"||!arquivo.name.toLowerCase().endsWith(".pdf")){setMensagem("Envie somente um PDF.");return;}
    if(arquivo.size<=0||arquivo.size>20*1024*1024){setMensagem("O PDF deve ter no máximo 20 MB.");return;}
    setEnviando(true);
    try{
      const fd=new FormData();
      fd.set("nome",formValues.nome); fd.set("orgao",formValues.orgao); fd.set("cargo",formValues.cargo); fd.set("uf",formValues.uf); fd.set("arquivo",arquivo);
      const r=await fetch("/api/editais/upload",{method:"POST",body:fd});
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha no upload");
      const id=j.edital_usuario_id||j.edital?.id;
      if(!id)throw new Error("Upload concluído, mas o identificador do edital não foi retornado.");
      setUploadId(id);
      setFormValues({nome:"",orgao:"",cargo:"",uf:""}); setArquivo(null);
      await processarPdf(id);
    }catch(err){setMensagem(err instanceof Error?err.message:"Falha no upload");}
    finally{setEnviando(false);}
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
         <div className="mt-4 flex flex-wrap gap-2"><a href={ed.fonte_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-semibold">Fonte oficial <ExternalLink className="h-3.5 w-3.5"/></a>{ed.pdf_url&&<a href={ed.pdf_url} target="_blank" rel="noreferrer" className="rounded-lg border px-3 py-2 text-sm font-semibold">Ver PDF</a>}<button onClick={()=>usarNoPlanejamento(ed.id)} disabled={aplicando===ed.id||ed.total_disciplinas===0||ed.total_topicos===0} className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-bold text-white disabled:opacity-50">{aplicando===ed.id?"Aplicando...":(ed.total_disciplinas===0||ed.total_topicos===0)?"Aguardando conteúdo validado":"Usar para meu planejamento"}</button></div>
       </article>)}</div>}
    </section>

    <section id="importar" className="rounded-2xl border bg-white dark:bg-slate-900 p-6">
      <div className="flex items-start gap-3"><Upload className="mt-1 h-5 w-5 text-indigo-600"/><div><h2 className="text-xl font-black">Importar edital em PDF</h2><p className="text-sm text-slate-600 dark:text-slate-400">Envie o edital, confira a prévia e só depois confirme a importação para o concurso alvo.</p></div></div>

      {alvoDetalhe&&<div className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm">
        <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">Destino da importação</p>
        <p className="mt-1 font-black">{alvoDetalhe.concurso}</p>
        <p className="text-slate-700">{alvoDetalhe.cargo} · {alvoDetalhe.edital}</p>
        <p className="mt-1 text-xs text-slate-600">A confirmação gravará os tópicos extraídos neste edital. Verifique o destino antes de confirmar.</p>
      </div>}

      <form onSubmit={enviar} className="mt-5 grid gap-3 sm:grid-cols-2">
        <input name="nome" required value={formValues.nome} onChange={e=>setFormValues(v=>({...v,nome:e.target.value}))} placeholder="Nome do concurso / edital" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="orgao" value={formValues.orgao} onChange={e=>setFormValues(v=>({...v,orgao:e.target.value}))} placeholder="Órgão" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="cargo" value={formValues.cargo} onChange={e=>setFormValues(v=>({...v,cargo:e.target.value}))} placeholder="Cargo" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="uf" maxLength={2} value={formValues.uf} onChange={e=>setFormValues(v=>({...v,uf:e.target.value}))} placeholder="UF" className="rounded-xl border bg-transparent p-2.5 uppercase"/>
        <label className="sm:col-span-2 rounded-xl border border-dashed p-5 text-sm"><span className="font-bold">PDF do edital (máx. 20 MB)</span><input type="file" accept="application/pdf,.pdf" onChange={e=>setArquivo(e.target.files?.[0]||null)} className="mt-2 block w-full"/></label>
        <button disabled={enviando||processando||confirmando} className="sm:col-span-2 rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white disabled:opacity-50">{enviando?"Enviando PDF...":processando?"Processando PDF...":"Enviar e gerar prévia"}</button>
      </form>

      {mensagem&&<div className="mt-4 flex gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 p-3 text-sm"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5"/>{mensagem}</div>}

      {processando&&<div className="mt-4 flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm"><Loader2 className="h-5 w-5 animate-spin text-indigo-600"/><div><strong>Processando edital...</strong><p className="text-slate-600">O PDF inteiro está sendo analisado para localizar disciplinas e todos os assuntos.</p></div></div>}

      {preview&&<section className="mt-5 rounded-2xl border border-indigo-200 bg-white dark:bg-slate-900 overflow-hidden">
        <button type="button" onClick={()=>setMostrarPreview(v=>!v)} className="w-full flex items-center justify-between gap-3 p-5 text-left">
          <div><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Prévia estruturada</p><h3 className="text-xl font-black">{preview.titulo_detectado||"Edital importado"}</h3><p className="mt-1 text-sm text-slate-500">{preview.disciplinas.length} disciplinas · {preview.disciplinas.reduce((n,d)=>n+d.assuntos.length,0)} assuntos</p></div>
          <ChevronDown className={`h-5 w-5 transition-transform ${mostrarPreview?"rotate-180":""}`}/>
        </button>
        {mostrarPreview&&<div className="border-t p-5 space-y-3">
          {preview.observacoes?.length>0&&<div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800"><strong>Observações:</strong><ul className="mt-1 list-disc pl-5">{preview.observacoes.map((x,i)=><li key={i}>{x}</li>)}</ul></div>}
          {preview.disciplinas.map((d,i)=><details key={i} className="rounded-xl border p-4" open={i<3}><summary className="cursor-pointer font-bold">{d.nome} <span className="ml-2 text-xs font-normal text-slate-500">{d.assuntos.length} assuntos</span></summary><ol className="mt-3 list-decimal pl-5 space-y-1 text-sm">{d.assuntos.map((a,j)=><li key={j}>{a}</li>)}</ol></details>)}
          <div className="pt-2 text-xs text-slate-500">A prévia é extraída exclusivamente do PDF. Nenhum tópico deve ser inventado.</div>

          {!confirmado&&<div className="mt-5 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-4">
            <p className="font-black">Revisou a prévia?</p>
            <p className="mt-1 text-sm text-slate-700">A confirmação gravará os {preview.disciplinas.reduce((n,d)=>n+d.assuntos.length,0)} assuntos no edital indicado acima e atualizará seu planejamento.</p>
            <label className="mt-3 flex items-start gap-2 text-sm"><input id="confirmar-conteudo" type="checkbox" className="mt-1" required/><span>Revisei o conteúdo e confirmo que os assuntos acima estão de acordo com o PDF.</span></label>
            <button type="button" disabled={confirmando||!alvo?.edital_id} onClick={async()=>{
              const box=document.getElementById("confirmar-conteudo") as HTMLInputElement|null;
              if(!box?.checked){setMensagem("Marque a confirmação após revisar a prévia.");return;}
              await confirmarPreview();
            }} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-black text-white disabled:opacity-50">
              {confirmando?<><Loader2 className="h-4 w-4 animate-spin"/>Confirmando...</>:<>Confirmar e importar para meu concurso</>}
            </button>
          </div>}

          {confirmado&&<div className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
            <CheckCircle2 className="h-5 w-5 mt-0.5"/>
            <div><p className="font-black">Edital confirmado e importado</p><p className="text-sm">{mensagem}</p><button type="button" onClick={()=>window.location.hash="planejamento"} className="mt-2 underline font-semibold">Ir para o planejamento</button></div>
          </div>}
        </div>}
      </section>}

      <p className="mt-3 text-xs text-slate-500">O upload é privado. O conteúdo só é gravado após sua confirmação explícita.</p>
    </section>
  </main>;
}
