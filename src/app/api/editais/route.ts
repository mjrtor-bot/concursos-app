import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const url = new URL(request.url);
  const busca=(url.searchParams.get("q")||"").trim().toLowerCase();
  const uf=url.searchParams.get("uf"), statusFiltro=url.searchParams.get("status"), carreiraFiltro=url.searchParams.get("carreira");

  const { data,error }=await supabase.from("editais_concurso")
    .select("id,numero,titulo,publicado_em,prova_em,fonte_oficial_url,pdf_url,status,banca,concurso_id,cargo_id,concursos(nome,orgao,esfera,uf,status),concurso_cargos(nome),edital_topicos(id,disciplina_id)")
    .neq("status","rascunho").gte("publicado_em","2024-01-01").order("publicado_em",{ascending:false});
  if(error)return NextResponse.json({error:error.message},{status:500});

  const hoje=new Date().toISOString().slice(0,10);
  const editais=(data||[]).map((e:any)=>{
    const concurso=Array.isArray(e.concursos)?e.concursos[0]:e.concursos;
    const cargo=Array.isArray(e.concurso_cargos)?e.concurso_cargos[0]:e.concurso_cargos;
    const orgao=concurso?.orgao||concurso?.nome||"Órgão", upper=orgao.toUpperCase();
    const nomeConcurso=String(concurso?.nome||"").toUpperCase();
    const base=(upper+" "+nomeConcurso).normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    const carreira=base.includes("RODOVIARIA FEDERAL")||base.includes(" PRF")?"PRF":base.includes("POLICIA FEDERAL")?"PF":base.includes("POLICIA MILITAR")||base.includes(" PM")?"POLICIA_MILITAR":base.includes("POLICIA PENAL")||base.includes("PENAL")?"POLICIA_PENAL":base.includes("POLICIA CIVIL")||base.includes(" PC")?"POLICIA_CIVIL":"POLICIA";
    const topicos=e.edital_topicos||[];
    const status=e.status==="encerrado"?"encerrado":e.prova_em&&e.prova_em<hoje?"prova_realizada":e.status==="previsto"?"previsto":"aberto";
    return {id:e.id,orgao_nome:orgao,sigla:carreira==="POLICIA_MILITAR"?"PM":carreira==="POLICIA_CIVIL"?"PC":carreira==="POLICIA_PENAL"?"PP":carreira,uf:concurso?.uf||null,esfera:concurso?.esfera||"estadual",carreira,cargo:cargo?.nome||"Cargo",banca:e.banca||null,edital_numero:e.numero,data_publicacao:e.publicado_em,data_prova:e.prova_em,status,fonte_url:e.fonte_oficial_url,pdf_url:e.pdf_url,total_disciplinas:new Set(topicos.map((t:any)=>t.disciplina_id)).size,total_topicos:topicos.length};
  }).filter((e:any)=>(!busca||[e.orgao_nome,e.sigla,e.cargo,e.edital_numero,e.banca].join(" ").toLowerCase().includes(busca))&&(!uf||uf==="todos"||e.uf===uf)&&(!statusFiltro||statusFiltro==="todos"||e.status===statusFiltro)&&(!carreiraFiltro||carreiraFiltro==="todos"||e.carreira===carreiraFiltro));
  return NextResponse.json({editais});
}