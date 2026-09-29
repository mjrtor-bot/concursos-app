"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, Plus, Save, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Disciplina={id:string;nome:string}; type Assunto={id:string;nome:string;disciplina_id:string};
type Conteudo={id?:string;assunto_id:string;titulo:string;orientacao:string;lei_seca:string;lei_seca_url:string;pdf_url:string;video_url:string;ordem:number;ativo:boolean};
const vazio:Conteudo={assunto_id:"",titulo:"",orientacao:"",lei_seca:"",lei_seca_url:"",pdf_url:"",video_url:"",ordem:0,ativo:true};

export default function AdminConteudosPage(){
 const [disciplinas,setDisciplinas]=useState<Disciplina[]>([]),[assuntos,setAssuntos]=useState<Assunto[]>([]);
 const [disciplina,setDisciplina]=useState(""),[form,setForm]=useState<Conteudo>(vazio),[lista,setLista]=useState<Conteudo[]>([]);
 const [msg,setMsg]=useState(""),[saving,setSaving]=useState(false);
 useEffect(()=>{fetch("/api/disciplinas").then(r=>r.json()).then(j=>setDisciplinas(j.disciplinas||j.data||[]));},[]);
 useEffect(()=>{if(!disciplina){setAssuntos([]);return;} fetch(`/api/assuntos?disciplina_id=${encodeURIComponent(disciplina)}`).then(r=>r.json()).then(j=>setAssuntos(j.assuntos||j.data||[]));},[disciplina]);
 async function carregar(aid:string){setForm({...vazio,assunto_id:aid});if(!aid){setLista([]);return;}const r=await fetch(`/api/admin/conteudos?assunto_id=${encodeURIComponent(aid)}`);const j=await r.json();setLista(j.conteudos||[]);}
 async function salvar(){setSaving(true);setMsg("");const r=await fetch("/api/admin/conteudos",{method:form.id?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});const j=await r.json();setSaving(false);if(!r.ok){setMsg(j.error||"Erro ao salvar");return;}setMsg("Conteúdo salvo com sucesso.");await carregar(form.assunto_id);}
 async function excluir(id?:string){if(!id||!confirm("Excluir este conteúdo?"))return;const aid=form.assunto_id;const r=await fetch(`/api/admin/conteudos?id=${encodeURIComponent(id)}`,{method:"DELETE"});if(r.ok){setMsg("Conteúdo excluído.");await carregar(aid);}}
 const input="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm";
 return <div className="max-w-5xl mx-auto space-y-6 pb-12">
  <div className="flex items-center justify-between"><div><Link href="/admin/questoes" className="text-xs text-slate-500 flex gap-1 items-center"><ArrowLeft className="w-3 h-3"/>Administração</Link><h1 className="text-2xl font-black mt-2 flex gap-2 items-center"><BookOpen className="w-6 h-6 text-blue-600"/>Conteúdo por Assunto</h1><p className="text-sm text-slate-500">Cadastre roteiro, lei seca, PDF e vídeo exibidos na Missão Diária.</p></div></div>
  {msg&&<div className="p-3 rounded-xl border text-sm">{msg}</div>}
  <div className="grid md:grid-cols-2 gap-3">
   <select className={input} value={disciplina} onChange={e=>{setDisciplina(e.target.value);setForm(vazio);setLista([])}}><option value="">Selecione a disciplina</option>{disciplinas.map(d=><option key={d.id} value={d.id}>{d.nome}</option>)}</select>
   <select className={input} value={form.assunto_id} onChange={e=>carregar(e.target.value)}><option value="">Selecione o assunto</option>{assuntos.map(a=><option key={a.id} value={a.id}>{a.nome}</option>)}</select>
  </div>
  {form.assunto_id&&<div className="grid lg:grid-cols-[1fr_1.5fr] gap-5">
   <div className="space-y-2"><div className="flex justify-between items-center"><h2 className="font-bold">Materiais cadastrados</h2><Button size="sm" variant="outline" onClick={()=>setForm({...vazio,assunto_id:form.assunto_id})} leftIcon={<Plus className="w-4 h-4"/>}>Novo</Button></div>
   {lista.length===0?<p className="text-sm text-slate-500 p-4 border rounded-xl">Nenhum material cadastrado.</p>:lista.map(c=><button key={c.id} onClick={()=>setForm(c)} className="w-full text-left p-3 border rounded-xl hover:border-blue-400"><strong className="text-sm">{c.titulo}</strong><span className="block text-xs text-slate-500">Ordem {c.ordem} · {c.ativo?"Ativo":"Inativo"}</span></button>)}</div>
   <div className="p-5 border rounded-2xl space-y-3 bg-white dark:bg-slate-900">
    <input className={input} placeholder="Título do material" value={form.titulo} onChange={e=>setForm({...form,titulo:e.target.value})}/>
    <textarea className={input} rows={4} placeholder="Orientação de estudo" value={form.orientacao} onChange={e=>setForm({...form,orientacao:e.target.value})}/>
    <textarea className={input} rows={4} placeholder="Lei seca / artigos / referência" value={form.lei_seca} onChange={e=>setForm({...form,lei_seca:e.target.value})}/>
    <input className={input} placeholder="URL oficial da legislação" value={form.lei_seca_url} onChange={e=>setForm({...form,lei_seca_url:e.target.value})}/>
    <input className={input} placeholder="URL do PDF" value={form.pdf_url} onChange={e=>setForm({...form,pdf_url:e.target.value})}/>
    <input className={input} placeholder="URL do vídeo" value={form.video_url} onChange={e=>setForm({...form,video_url:e.target.value})}/>
    <div className="flex gap-4 items-center"><label className="text-sm">Ordem <input type="number" className="ml-2 w-20 px-2 py-1 border rounded" value={form.ordem} onChange={e=>setForm({...form,ordem:Number(e.target.value)})}/></label><label className="text-sm flex gap-2"><input type="checkbox" checked={form.ativo} onChange={e=>setForm({...form,ativo:e.target.checked})}/>Ativo</label></div>
    <div className="flex justify-between"><div>{form.id&&<Button variant="outline" onClick={()=>excluir(form.id)} leftIcon={<Trash2 className="w-4 h-4"/>}>Excluir</Button>}</div><Button onClick={salvar} disabled={saving||!form.titulo.trim()} leftIcon={<Save className="w-4 h-4"/>}>{saving?"Salvando...":"Salvar conteúdo"}</Button></div>
   </div>
  </div>}
 </div>
}