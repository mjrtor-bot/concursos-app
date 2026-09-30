import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const supabase = await createClientServer();
  if (!supabase) return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const url = new URL(request.url);
  const busca = (url.searchParams.get("q") || "").trim().toLowerCase();
  const uf = url.searchParams.get("uf");
  const statusFiltro = url.searchParams.get("status");

  const { data, error } = await supabase
    .from("editais_concurso")
    .select("id,numero,titulo,publicado_em,prova_em,fonte_oficial_url,pdf_url,status,concurso_id,cargo_id,concursos(nome,orgao,esfera,uf,status),concurso_cargos(nome)")
    .neq("status","rascunho")
    .order("publicado_em",{ascending:false});
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const editais=(data||[]).map((e:any)=>{
    const concurso=Array.isArray(e.concursos)?e.concursos[0]:e.concursos;
    const cargo=Array.isArray(e.concurso_cargos)?e.concurso_cargos[0]:e.concurso_cargos;
    const orgao=concurso?.orgao||concurso?.nome||"Órgão";
    const upper=orgao.toUpperCase();
    const carreira=upper.includes("RODOVIÁRIA")?"PRF":upper.includes("FEDERAL")?"PF":upper.includes("MILITAR")?"POLICIA_MILITAR":upper.includes("PENAL")?"POLICIA_PENAL":upper.includes("CIVIL")?"POLICIA_CIVIL":"POLICIA";
    return {id:e.id,orgao_nome:orgao,sigla:carreira==="POLICIA_MILITAR"?"PM":carreira==="POLICIA_CIVIL"?"PC":carreira==="POLICIA_PENAL"?"PP":carreira,uf:concurso?.uf||null,esfera:concurso?.esfera||"estadual",carreira,cargo:cargo?.nome||"Cargo",banca:null,edital_numero:e.numero,data_publicacao:e.publicado_em,data_prova:e.prova_em,status:e.status==="encerrado"?"encerrado":e.prova_em&&e.prova_em<new Date().toISOString().slice(0,10)?"prova_realizada":"aberto",fonte_url:e.fonte_oficial_url,pdf_url:e.pdf_url,total_disciplinas:0,total_topicos:0};
  }).filter((e:any)=>(!busca||[e.orgao_nome,e.sigla,e.cargo,e.edital_numero].join(" ").toLowerCase().includes(busca))&&(!uf||uf==="todos"||e.uf===uf)&&(!statusFiltro||statusFiltro==="todos"||e.status===statusFiltro));

  return NextResponse.json({ editais });
}
