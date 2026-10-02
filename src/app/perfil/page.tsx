"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import { User, Save } from "lucide-react";

type EditalReal = { id:string; numero:string|null; titulo:string; publicado_em:string|null; prova_em:string|null; fonte_oficial_url:string; pdf_url:string|null; status:string };
type CargoReal = { id:string; nome:string; escolaridade:string|null; vagas:number|null; salario:number|null; fonte_oficial_url:string|null; ativo:boolean; editais_concurso?:EditalReal[] };
type ConcursoReal = { id:string; nome:string; orgao:string; esfera:string|null; uf:string|null; status:string; fonte_oficial_url:string|null; concurso_cargos?:CargoReal[] };
type Alvo = { concurso_id:string; cargo_id:string; edital_id:string|null };

export default function PerfilPage() {
  const { user, updateUser } = useAuth();
  const { success, info } = useToast();
  const { recarregarConcursoAlvo } = useConcurso();
  const [nome,setNome]=useState("");
  const [email,setEmail]=useState("");
  const [metaDiaria,setMetaDiaria]=useState(30);
  const [concursos,setConcursos]=useState<ConcursoReal[]>([]);
  const [concursoId,setConcursoId]=useState("");
  const [cargoId,setCargoId]=useState("");
  const [editalId,setEditalId]=useState("");
  const [carregandoAlvo,setCarregandoAlvo]=useState(true);

  useEffect(()=>{ if(user){setNome(user.nome||"");setEmail(user.email||"");setMetaDiaria(user.meta_diaria_questoes||30)} },[user]);

  useEffect(()=>{
    let ativo=true;
    (async()=>{
      try{
        const res=await fetch("/api/concursos/alvo",{cache:"no-store"});
        const json=await res.json();
        if(!res.ok) throw new Error(json.error||"Falha ao carregar concursos");
        if(!ativo) return;
        const lista:ConcursoReal[]=json.concursos||[];
        const alvo:Alvo|null=json.alvo||null;
        setConcursos(lista);
        if(alvo){setConcursoId(alvo.concurso_id);setCargoId(alvo.cargo_id);setEditalId(alvo.edital_id||"");}
      }catch(e){ if(ativo) info(e instanceof Error?e.message:"Não foi possível carregar concursos reais."); }
      finally{if(ativo)setCarregandoAlvo(false)}
    })();
    return()=>{ativo=false};
  },[info]);

  const concurso=concursos.find(c=>c.id===concursoId);
  const cargos=concurso?.concurso_cargos?.filter(c=>c.ativo)??[];
  const cargo=cargos.find(c=>c.id===cargoId);
  const editais=cargo?.editais_concurso??[];

  const trocarConcurso=(id:string)=>{setConcursoId(id);const primeiro=concursos.find(c=>c.id===id)?.concurso_cargos?.find(c=>c.ativo);setCargoId(primeiro?.id||"");setEditalId(primeiro?.editais_concurso?.[0]?.id||"");};
  const trocarCargo=(id:string)=>{setCargoId(id);const escolhido=cargos.find(c=>c.id===id);setEditalId(escolhido?.editais_concurso?.[0]?.id||"");};

  const [salvando,setSalvando]=useState(false);
  const handleSalvarPerfil=async(e:React.FormEvent)=>{
    e.preventDefault();
    if(salvando)return;
    setSalvando(true);
    try{
    const resultado=await updateUser({nome:nome.trim(),email:email.trim(),meta_diaria_questoes:Number(metaDiaria)});
    if(!resultado.success){info(resultado.error||"Não foi possível atualizar o perfil.");return;}
    if(concursoId&&cargoId){
      const res=await fetch("/api/concursos/alvo",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({concurso_id:concursoId,cargo_id:cargoId,edital_id:editalId||null})});
      const json=await res.json();
      if(!res.ok){info(json.error||"Perfil salvo, mas não foi possível salvar o concurso alvo.");return;}
      await recarregarConcursoAlvo();
      if(user?.id){
        const ciclo=await MentoriaCicloService.gerarOuRecalcularCiclo(user.id);
        if(!ciclo.success){info(ciclo.error||"Alvo salvo, mas o ciclo ainda não pôde ser gerado.");return;}
      }
    }
    success("Perfil salvo e planejamento atualizado para o edital selecionado.");
    }catch(err){info(err instanceof Error?err.message:"Falha ao salvar o perfil.");}
    finally{setSalvando(false);}
  };

  const cls="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100";
  return <div className="space-y-6 max-w-4xl">
    <div><h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Meu Perfil & Configurações</h1><p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Dados pessoais e alvo de estudo vinculados a concursos e editais cadastrados com fonte oficial.</p></div>
    <Card><CardHeader><div className="flex items-center gap-2"><User className="w-5 h-5 text-blue-600"/><CardTitle>Dados Pessoais & Metas</CardTitle></div></CardHeader><CardContent>
      <form onSubmit={handleSalvarPerfil} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className="block text-xs font-semibold mb-1">Nome Completo</label><input value={nome} onChange={e=>setNome(e.target.value)} required className={cls}/></div>
          <div><label className="block text-xs font-semibold mb-1">E-mail</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className={cls}/></div>
        </div>
        <div><label className="block text-xs font-semibold mb-1">Meta Diária de Questões</label><select value={metaDiaria} onChange={e=>setMetaDiaria(Number(e.target.value))} className={cls}><option value={10}>10 questões / dia</option><option value={20}>20 questões / dia</option><option value={30}>30 questões / dia</option><option value={50}>50 questões / dia</option><option value={100}>100 questões / dia</option></select></div>
        <div className="border-t border-slate-200 dark:border-slate-700 pt-5">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">Alvo principal</h2>
          <p className="text-xs text-slate-500 mt-1 mb-4">Somente concursos publicados no banco real são exibidos. Vagas, salário e datas dependem de fonte oficial cadastrada.</p>
          {carregandoAlvo?<p className="text-sm text-slate-500">Carregando concursos...</p>:concursos.length===0?<div className="rounded-xl border border-dashed p-4 text-sm text-slate-500">Nenhum concurso real publicado ainda. Cadastre um concurso, cargo e edital com fonte oficial para habilitar a seleção.</div>:
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div><label className="block text-xs font-semibold mb-1">Concurso</label><select value={concursoId} onChange={e=>trocarConcurso(e.target.value)} className={cls}><option value="">Selecione</option>{concursos.map(c=><option key={c.id} value={c.id}>{c.orgao} — {c.nome}</option>)}</select></div>
            <div><label className="block text-xs font-semibold mb-1">Cargo</label><select value={cargoId} onChange={e=>trocarCargo(e.target.value)} disabled={!concursoId} className={cls}><option value="">Selecione</option>{cargos.map(c=><option key={c.id} value={c.id}>{c.nome}</option>)}</select></div>
            <div><label className="block text-xs font-semibold mb-1">Edital</label><select value={editalId} onChange={e=>setEditalId(e.target.value)} disabled={!cargoId} className={cls}><option value="">Mais recente disponível</option>{editais.map(e=><option key={e.id} value={e.id}>{e.numero?e.numero+" — ":""}{e.titulo}</option>)}</select></div>
          </div>}
          {editais.find(e=>e.id===editalId)?.fonte_oficial_url&&<a className="inline-block mt-3 text-sm text-blue-600 hover:underline" href={editais.find(e=>e.id===editalId)!.fonte_oficial_url} target="_blank" rel="noreferrer">Abrir fonte oficial do edital</a>}
        </div>
        <div className="flex justify-end pt-2"><Button type="submit" size="md" disabled={salvando} leftIcon={<Save className="w-4 h-4"/>}>{salvando?"Salvando...":"Salvar Alterações"}</Button></div>
      </form>
    </CardContent></Card>
  </div>;
}
