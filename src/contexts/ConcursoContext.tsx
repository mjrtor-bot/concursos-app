"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Concurso, Cargo } from "@/types";
import { calcularPrazoProva, PrazoProva } from "@/lib/prazoProva";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";

type ApiEdital = { id:string; prova_em:string|null; fonte_oficial_url:string; status:string };
type ApiCargo = { id:string; nome:string; escolaridade:string|null; vagas:number|null; salario:number|null; ativo:boolean; editais_concurso?:ApiEdital[] };
type ApiConcurso = { id:string; nome:string; orgao:string; esfera:string|null; uf:string|null; status:string; fonte_oficial_url:string|null; concurso_cargos?:ApiCargo[] };
type ApiAlvo = { concurso_id:string; cargo_id:string; edital_id:string|null };

interface ConcursoContextType {
  concursoAtivo: Concurso | null;
  cargoAtivo: Cargo | null;
  concursos: Concurso[];
  cargosDoConcurso: Cargo[];
  prazoProva: PrazoProva;
  selecionarConcursoAtivo: (concursoId: string) => Promise<void>;
  selecionarCargoAtivo: (cargoId: string) => Promise<void>;
  recarregarConcursoAlvo: () => Promise<void>;
}

const ConcursoContext = createContext<ConcursoContextType | undefined>(undefined);

const nivel = (v?:string|null): Cargo["escolaridade"] =>
  /superior/i.test(v||"") ? "superior" : /fundamental/i.test(v||"") ? "fundamental" : "medio";

const status = (v?:string|null): Concurso["status"] => {
  const x=(v||"").toLowerCase();
  if(x==="aberto"||x==="previsto"||x==="em_andamento"||x==="encerrado") return x;
  if(x==="publicado") return "aberto";
  if(x==="homologado"||x==="finalizado") return "encerrado";
  return "previsto";
};

export function ConcursoProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { success, info } = useToast();
  const [raw,setRaw]=useState<ApiConcurso[]>([]);
  const [alvo,setAlvo]=useState<ApiAlvo|null>(null);

  const carregar=async()=>{
    if(!user){setRaw([]);setAlvo(null);return;}
    try{
      const res=await fetch("/api/concursos/alvo",{cache:"no-store"});
      const json=await res.json();
      if(!res.ok) throw new Error(json.error||"Falha ao carregar concurso alvo");
      const oficiais=(json.concursos||[]).filter((c:ApiConcurso)=>Boolean(c.fonte_oficial_url));
      setRaw(oficiais);
      setAlvo(json.alvo||null);
    }catch(e){setRaw([]);setAlvo(null);info(e instanceof Error?e.message:"Não foi possível carregar concursos oficiais.");}
  };
  useEffect(()=>{void carregar()},[user?.id]);

  const concursos=useMemo<Concurso[]>(()=>raw.map(c=>{
    const cargos=(c.concurso_cargos||[]).filter(x=>x.ativo);
    const editais=cargos.flatMap(x=>x.editais_concurso||[]);
    const prova=editais.find(e=>e.id===alvo?.edital_id)?.prova_em||editais.find(e=>e.prova_em)?.prova_em||null;
    const siglas=c.orgao.match(/\b[A-Z]{2,6}\b/g)||[];
    const sigla=siglas.length?siglas[siglas.length-1]:c.orgao.replace(/[^A-Za-z]/g,"").slice(0,6).toUpperCase();
    return {id:c.id,nome:c.nome,orgao:c.orgao,sigla,ano:new Date().getFullYear(),nivel:nivel(cargos[0]?.escolaridade),esfera:(c.esfera==="municipal"||c.esfera==="estadual"||c.esfera==="federal"?c.esfera:"estadual") as Concurso["esfera"],status:status(c.status),banca:"",descricao:"Dados provenientes de fonte oficial cadastrada.",vagas_totais:cargos.reduce((s,x)=>s+(x.vagas||0),0),salario_max:Math.max(0,...cargos.map(x=>Number(x.salario||0))),data_prova:prova,edital_url:c.fonte_oficial_url,uf:c.uf,created_at:""};
  }),[raw,alvo?.edital_id]);

  const concursoAtivo=concursos.find(c=>c.id===alvo?.concurso_id)||null;
  const rawConcurso=raw.find(c=>c.id===alvo?.concurso_id);
  const cargosDoConcurso:Cargo[]=(rawConcurso?.concurso_cargos||[]).filter(c=>c.ativo).map(c=>({id:c.id,concurso_id:rawConcurso!.id,nome:c.nome,vagas:c.vagas||0,salario:Number(c.salario||0),escolaridade:nivel(c.escolaridade),created_at:""}));
  const cargoAtivo=cargosDoConcurso.find(c=>c.id===alvo?.cargo_id)||null;

  async function salvar(concursoId:string,cargoId:string){
    const res=await fetch("/api/concursos/alvo",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({concurso_id:concursoId,cargo_id:cargoId})});
    const json=await res.json(); if(!res.ok) throw new Error(json.error||"Falha ao salvar alvo");
    setAlvo(json.alvo);
  }
  const selecionarConcursoAtivo=async(id:string)=>{
    const c=raw.find(x=>x.id===id); const cargo=c?.concurso_cargos?.find(x=>x.ativo);
    if(!cargo){info("Este concurso ainda não possui cargo oficial ativo.");return;}
    try{await salvar(id,cargo.id);success("Concurso alvo atualizado.");}catch(e){info(e instanceof Error?e.message:"Não foi possível alterar o concurso.");}
  };
  const selecionarCargoAtivo=async(id:string)=>{
    if(!alvo?.concurso_id)return;
    try{await salvar(alvo.concurso_id,id);success("Cargo alvo atualizado.");}catch(e){info(e instanceof Error?e.message:"Não foi possível alterar o cargo.");}
  };
  const prazoProva=useMemo(()=>calcularPrazoProva(concursoAtivo?.data_prova),[concursoAtivo?.data_prova]);
  return <ConcursoContext.Provider value={{concursoAtivo,cargoAtivo,concursos,cargosDoConcurso,prazoProva,selecionarConcursoAtivo,selecionarCargoAtivo,recarregarConcursoAlvo:carregar}}>{children}</ConcursoContext.Provider>;
}
export function useConcurso(){const c=useContext(ConcursoContext);if(!c)throw new Error("useConcurso must be used within a ConcursoProvider");return c;}
