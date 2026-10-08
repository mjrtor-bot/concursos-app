"use client";

import { FormEvent, useEffect, useMemo, useState, useCallback } from "react";
import { AlertCircle, CheckCircle2, ChevronDown, ExternalLink, Loader2, RefreshCw, Search, Trash2, Upload } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { MentoriaCicloService } from "@/services/mentoriaCicloService";
import { aguardarProcessamento } from "@/lib/editais/aguardarProcessamento";

type Edital = {
  id: string; orgao_nome: string; sigla?: string | null; uf?: string | null;
  esfera: "federal"|"estadual"|"municipal"; carreira: string; cargo: string;
  banca?: string | null; edital_numero?: string | null; data_publicacao: string;
  data_prova?: string | null; status: string; fonte_url: string; pdf_url?: string | null;
  total_disciplinas: number; total_topicos: number;
};

type PreviewAssunto = string | { nome: string; topicos?: string[]; subassuntos?: string[] };
type PreviewDisciplina = { nome: string; assuntos: PreviewAssunto[] };
type PreviewCargo = { nome: string; disciplinas: PreviewDisciplina[] };
type Preview = {
  titulo_detectado: string;
  cargos?: PreviewCargo[];
  disciplinas?: PreviewDisciplina[];
  observacoes: string[];
};
type Alvo = { concurso_id: string; cargo_id: string; edital_id: string | null };
type AlvoDetalhe = { concurso: string; cargo: string; edital: string };

type MeuEditalUpload = {
  id: string;
  nome: string;
  orgao?: string | null;
  cargo?: string | null;
  uf?: string | null;
  status: string;
  arquivo_nome?: string | null;
  arquivo_tamanho?: number | null;
  erro_processamento?: string | null;
  edital_id?: string | null;
  created_at: string;
  confirmado_em?: string | null;
  total_disciplinas: number;
  total_topicos: number;
};

const carreiras = [
  ["todos","Todas"],["PF","PF"],["PRF","PRF"],["POLICIA_CIVIL","Polícia Civil"],
  ["POLICIA_MILITAR","Polícia Militar"],["BOMBEIROS","Bombeiros"],
  ["POLICIA_PENAL","Polícia Penal"],["GUARDA_MUNICIPAL","Guarda Municipal"],
];

const statusLabel: Record<string,string> = {
  aberto:"Aberto", previsto:"Previsto", prova_realizada:"Prova realizada",
  encerrado:"Encerrado", expirado:"Expirado",
};

const statusUploadLabel: Record<string, { label: string; bg: string; text: string }> = {
  aguardando_processamento: { label: "Aguardando processamento", bg: "bg-amber-100 dark:bg-amber-950/40", text: "text-amber-800 dark:text-amber-300" },
  processando: { label: "Processando IA", bg: "bg-blue-100 dark:bg-blue-950/40", text: "text-blue-800 dark:text-blue-300" },
  aguardando_revisao: { label: "Aguardando revisão", bg: "bg-indigo-100 dark:bg-indigo-950/40", text: "text-indigo-800 dark:text-indigo-300" },
  revisao_sem_conteudo: { label: "Sem conteúdo programático", bg: "bg-orange-100 dark:bg-orange-950/40", text: "text-orange-800 dark:text-orange-300" },
  confirmado: { label: "Confirmado", bg: "bg-green-100 dark:bg-green-950/40", text: "text-green-800 dark:text-green-300" },
  erro: { label: "Erro no processamento", bg: "bg-red-100 dark:bg-red-950/40", text: "text-red-800 dark:text-red-300" },
};

export default function BibliotecaEditaisPage() {
  const { user } = useAuth();
  const { recarregarConcursoAlvo } = useConcurso();
  const [editais,setEditais]=useState<Edital[]>([]);
  const [meusEditais,setMeusEditais]=useState<MeuEditalUpload[]>([]);
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
  const [excluindoId,setExcluindoId]=useState<string|null>(null);
  const [mensagem,setMensagem]=useState("");
  const [aplicando,setAplicando]=useState<string|null>(null);
  const [uploadId,setUploadId]=useState<string|null>(null);
  const [preview,setPreview]=useState<Preview|null>(null);
  const [cargoSelecionado,setCargoSelecionado]=useState<string>("");
  const [mostrarPreview,setMostrarPreview]=useState(false);
  const [,setAlvo]=useState<Alvo|null>(null);
  const [,setAlvoDetalhe]=useState<AlvoDetalhe|null>(null);

  const reconciliarProcessando = useCallback(async (lista: MeuEditalUpload[]) => {
    const pendentes = lista.filter((x) => x.status === "processando");
    if (!pendentes.length) return;

    let houveMudanca = false;
    await Promise.all(
      pendentes.map(async (p) => {
        try {
          const res = await fetch(`/api/editais/processar/status?edital_usuario_id=${encodeURIComponent(p.id)}`, {
            cache: "no-store",
          });
          const data = await res.json();
          if (data.done || (data.status && data.status !== "processando")) {
            houveMudanca = true;
          }
        } catch {
          // Continua em caso de erro individual
        }
      })
    );

    if (houveMudanca) {
      try {
        const r = await fetch("/api/editais/importados", { cache: "no-store" });
        if (r.ok) {
          const j = await r.json();
          setMeusEditais(j.editais || []);
        }
      } catch {
        // Ignore
      }
    }
  }, []);

  const carregarMeusEditais = useCallback(async () => {
    try {
      const r = await fetch("/api/editais/importados", { cache: "no-store" });
      const j = await r.json();
      if (r.ok) {
        const list = j.editais || [];
        setMeusEditais(list);
        void reconciliarProcessando(list);
      }
    } catch {
      /* a biblioteca oficial continua disponível mesmo se a consulta dos importados falhar */
    }
  }, [reconciliarProcessando]);

  async function carregar() {
    setLoading(true);
    setErro("");
    const p = new URLSearchParams();
    if (q.trim()) p.set("q", q.trim());
    if (carreira !== "todos") p.set("carreira", carreira);
    if (uf !== "todos") p.set("uf", uf);
    if (status !== "todos") p.set("status", status);
    try {
      const r = await fetch("/api/editais?" + p.toString(), { cache: "no-store" });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Falha ao carregar editais");
      setEditais(j.editais || []);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Falha ao carregar editais");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let ignore = false;
    async function init() {
      try {
        const [rMeus, rAlvo] = await Promise.all([
          fetch("/api/editais/importados", { cache: "no-store" }),
          fetch("/api/concursos/alvo", { cache: "no-store" }),
        ]);

        if (ignore) return;

        if (rMeus.ok) {
          const j = await rMeus.json();
          const list = j.editais || [];
          setMeusEditais(list);
          void reconciliarProcessando(list);
        }

        if (rAlvo.ok) {
          const j = await rAlvo.json();
          setAlvo(j.alvo || null);
          const concurso = (j.concursos || []).find((c: any) => c.id === j.alvo?.concurso_id);
          const cargo = (concurso?.concurso_cargos || []).find((c: any) => c.id === j.alvo?.cargo_id);
          const edital = (cargo?.editais_concurso || []).find((e: any) => e.id === j.alvo?.edital_id);
          if (concurso && cargo) {
            setAlvoDetalhe({
              concurso: concurso.nome,
              cargo: cargo.nome,
              edital: edital?.titulo || edital?.numero || "Edital do concurso alvo",
            });
          }
        }
      } catch (e) {
        if (!ignore) {
          setAlvo(null);
          setAlvoDetalhe(null);
          setMensagem(e instanceof Error ? e.message : "Não foi possível identificar o concurso alvo.");
        }
      }
    }
    void init();
    return () => {
      ignore = true;
    };
  }, [user?.id, reconciliarProcessando]);
  useEffect(()=>{const t=setTimeout(carregar,250);return()=>clearTimeout(t);},[q,carreira,uf,status]);

  const ufs=useMemo(()=>Array.from(new Set(editais.map(e=>e.uf).filter(Boolean) as string[])).sort(),[editais]);

  const disciplinasExibidas = useMemo(() => {
    if (!preview) return [];
    if (preview.cargos && preview.cargos.length > 0) {
      const c = preview.cargos.find(cargo => cargo.nome === cargoSelecionado) || preview.cargos[0];
      return c?.disciplinas || [];
    }
    return preview.disciplinas || [];
  }, [preview, cargoSelecionado]);

  const totalAssuntosExibidos = useMemo(() => {
    return disciplinasExibidas.reduce((n, d) => n + (d.assuntos?.length || 0), 0);
  }, [disciplinasExibidas]);

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
      setMensagem(`${j.aviso||"Edital selecionado."} ${j.topicos||0} tópicos sincronizados e ciclo atualizado.`);
    }catch(err){setMensagem(err instanceof Error?err.message:"Falha ao aplicar edital");}
    finally{setAplicando(null);}
  }

  async function processarPdf(id:string){
    setProcessando(true); setMensagem(""); setConfirmado(false); setPreview(null); setCargoSelecionado(""); setMostrarPreview(false); setUploadId(id);
    try{
      const r=await fetch("/api/editais/processar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({edital_usuario_id:id})});
      const j=await r.json();
      if(!r.ok && r.status!==202 && r.status!==422)throw new Error(j.error||"Falha ao iniciar o processamento do PDF");
      if(r.status===422)throw new Error(j.aviso||"Nenhum conteúdo programático foi encontrado no PDF.");

      if(j.processing){
        setMensagem("PDF recebido. A análise está sendo executada; esta tela será atualizada automaticamente.");
        const sj = await aguardarProcessamento(id, setMensagem);
        const est = sj.estrutura as Preview;
        setPreview(est);
        if (est?.cargos && est.cargos.length > 0) {
          setCargoSelecionado(est.cargos[0].nome);
        } else {
          setCargoSelecionado("");
        }
        setMostrarPreview(true);
        setMensagem(`PDF processado: ${sj.total_disciplinas} disciplinas e ${sj.total_assuntos} assuntos encontrados. Revise a prévia antes de confirmar.`);
        await carregarMeusEditais();
        return;
      }

      if(j.estrutura){
        const est = j.estrutura as Preview;
        setPreview(est);
        if (est?.cargos && est.cargos.length > 0) {
          setCargoSelecionado(est.cargos[0].nome);
        } else {
          setCargoSelecionado("");
        }
        setMostrarPreview(true);
        setMensagem(`PDF processado: ${j.total_disciplinas} disciplinas e ${j.total_assuntos} assuntos encontrados. Revise a prévia antes de confirmar.`);
        await carregarMeusEditais();
      }
    }catch(err){
      setMensagem(err instanceof Error?err.message:"Falha ao processar o PDF");
      await carregarMeusEditais();
    }
    finally{setProcessando(false);}
  }

  async function carregarPreviewExistente(id: string) {
    setProcessando(true);
    setMensagem("");
    setConfirmado(false);
    setPreview(null);
    setMostrarPreview(false);
    setUploadId(id);
    try {
      const response = await fetch(`/api/editais/processar/status?edital_usuario_id=${encodeURIComponent(id)}`, { cache: "no-store" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Não foi possível abrir a prévia salva.");
      if (!result.estrutura) throw new Error(result.error || "A prévia salva não está disponível. Tente processar o PDF novamente.");

      const estrutura = result.estrutura as Preview;
      setPreview(estrutura);
      setCargoSelecionado(estrutura.cargos?.[0]?.nome || "");
      setMostrarPreview(true);
      setMensagem(`Prévia carregada: ${result.total_disciplinas || 0} disciplinas e ${result.total_assuntos || 0} assuntos. Revise e confirme a importação.`);
      await carregarMeusEditais();
      window.setTimeout(() => document.getElementById("preview-edital")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
    } catch (error) {
      setMensagem(error instanceof Error ? error.message : "Falha ao abrir a prévia salva.");
    } finally {
      setProcessando(false);
    }
  }

  async function excluirUpload(id:string){
    if(!confirm("Tem certeza que deseja excluir este PDF e suas prévias?")) return;
    setExcluindoId(id);
    try{
      const r=await fetch(`/api/editais/importados?id=${id}`,{method:"DELETE"});
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha ao excluir upload");
      setMensagem("PDF excluído com sucesso.");
      if(uploadId===id){
        setUploadId(null); setPreview(null); setMostrarPreview(false);
      }
      await carregarMeusEditais();
    }catch(err){
      setMensagem(err instanceof Error?err.message:"Falha ao excluir o upload");
    }finally{
      setExcluindoId(null);
    }
  }

  async function confirmarPreview(){
    if(!uploadId){ setMensagem("O identificador do upload não está disponível. Atualize a página e gere uma nova prévia."); return; }
    if(!preview){ setMensagem("A prévia do edital ainda não está disponível."); return; }
    setConfirmando(true); setMensagem("");
    try{
      const r=await fetch("/api/editais/confirmar",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          edital_usuario_id:uploadId,
          cargo_nome:cargoSelecionado || null
        })
      });
      const j=await r.json();
      if(!r.ok)throw new Error(j.error||"Falha ao confirmar e importar o conteúdo.");

      await recarregarConcursoAlvo();
      await carregar();
      await carregarMeusEditais();

      setConfirmado(true);
      setMensagem(j.private_copy
        ? `Conteúdo salvo na sua cópia privada: ${j.total_topicos} assuntos importados. O edital público do catálogo não foi alterado.`
        : `Conteúdo confirmado: ${j.total_topicos} tópicos importados com sucesso.`);
      setUploadId(null);
      setPreview(null);
      setCargoSelecionado("");
      setMostrarPreview(false);
    }catch(err){
      setMensagem(err instanceof Error?err.message:"Falha ao confirmar a prévia");
    }
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
      setFormValues({nome:"",orgao:"",cargo:"",uf:""}); setArquivo(null);
      await carregarMeusEditais();

      if (j.deduplicated) {
        if (j.status === "aguardando_revisao") {
          setMensagem(j.message || "Prévia carregada do upload existente.");
          await carregarPreviewExistente(id);
          return;
        }
        if (j.status === "processando") {
          setMensagem(j.message || "PDF já está sendo processado.");
          const sj = await aguardarProcessamento(id, setMensagem);
          const est = sj.estrutura as Preview;
          setPreview(est);
          if (est?.cargos && est.cargos.length > 0) {
            setCargoSelecionado(est.cargos[0].nome);
          } else {
            setCargoSelecionado("");
          }
          setMostrarPreview(true);
          setMensagem(`PDF processado: ${sj.total_disciplinas} disciplinas e ${sj.total_assuntos} assuntos encontrados.`);
          await carregarMeusEditais();
          return;
        }
        if (j.status === "revisao_sem_conteudo") {
          setMensagem(j.message || "Este PDF não contém anexo de conteúdo programático.");
          return;
        }
        if (j.status === "confirmado") {
          setMensagem(j.message || "Este edital já foi importado e confirmado.");
          return;
        }
      }

      await processarPdf(id);
    }catch(err){setMensagem(err instanceof Error?err.message:"Falha no upload");}
    finally{setEnviando(false);}
  }

  return <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
    <div className="flex flex-wrap gap-2">
      <a href="/mentoria/edital" className="inline-flex items-center gap-2 rounded-xl border bg-white dark:bg-slate-900 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-indigo-300 hover:text-indigo-600">Meu edital</a>
      <a href="/mentoria/edital/biblioteca" className="inline-flex items-center gap-2 rounded-xl border bg-white dark:bg-slate-900 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-indigo-300 hover:text-indigo-600">Biblioteca policial</a>
      <a href="/mentoria/edital/importados" className="inline-flex items-center gap-2 rounded-xl border border-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 px-4 py-2.5 text-sm font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100">Meus editais importados</a>
      <a href="/mentoria/edital/biblioteca#importar" className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-600">Importar edital em PDF</a>
    </div>

    <header className="rounded-2xl border bg-white dark:bg-slate-900 p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Editais Verticalizados</p>
      <h1 className="mt-1 text-3xl font-black">Biblioteca de concursos policiais</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Editais oficiais publicados nos últimos dois anos permanecem disponíveis mesmo após o encerramento. Editais históricos podem ser usados como referência de estudo.</p>
      <div className="mt-4"><a href="/mentoria/edital/importados" className="inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-sm font-bold text-white">Meus Editais Importados</a></div>
    </header>

    <section className="rounded-2xl border bg-white dark:bg-slate-900 p-4 space-y-3">
      <div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar órgão, cargo ou banca..." className="w-full rounded-xl border bg-transparent py-2.5 pl-10 pr-3"/></div>
      <div className="grid gap-2 sm:grid-cols-3">
        <select value={carreira} onChange={e=>setCarreira(e.target.value)} className="rounded-xl border bg-transparent p-2.5">{carreiras.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select>
        <select value={uf} onChange={e=>setUf(e.target.value)} className="rounded-xl border bg-transparent p-2.5"><option value="todos">Todas as UFs</option>{ufs.map(x=><option key={x}>{x}</option>)}</select>
        <select value={status} onChange={e=>setStatus(e.target.value)} className="rounded-xl border bg-transparent p-2.5"><option value="todos">Todos os status</option><option value="aberto">Abertos</option><option value="previsto">Previstos</option><option value="prova_realizada">Prova realizada</option><option value="encerrado">Encerrados</option><option value="expirado">Expirados</option></select>
      </div>
    </section>

    {meusEditais.length>0&&<section className="rounded-2xl border border-indigo-200 bg-indigo-50/40 dark:bg-indigo-950/20 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Meus uploads de editais</p>
          <h2 className="mt-1 text-xl font-black">Histórico de PDFs e importações</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Acompanhe o status do processamento, revise prévias ou gerencie seus arquivos.</p>
        </div>
        <span className="rounded-full bg-indigo-100 dark:bg-indigo-900 px-3 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300">{meusEditais.length} upload{meusEditais.length===1?"":"s"}</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {meusEditais.map((ed)=><article key={ed.id} className="rounded-xl border bg-white dark:bg-slate-900 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-indigo-600">{ed.orgao||"Órgão não informado"}{ed.uf?" · "+ed.uf:""}</p>
                <h3 className="font-black text-base">{ed.nome}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{ed.cargo||"Cargo não informado"}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap ${(statusUploadLabel[ed.status]||statusUploadLabel.aguardando_processamento).bg} ${(statusUploadLabel[ed.status]||statusUploadLabel.aguardando_processamento).text}`}>
                {(statusUploadLabel[ed.status]||statusUploadLabel.aguardando_processamento).label}
              </span>
            </div>

            {ed.erro_processamento && (
              <div className="mt-2 rounded-lg bg-red-50 dark:bg-red-950/30 p-2.5 text-xs text-red-700 dark:text-red-300">
                <strong>Diagnóstico:</strong> {ed.erro_processamento}
              </div>
            )}

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-slate-500">Disciplinas</span><p className="font-bold">{ed.total_disciplinas}</p></div>
              <div><span className="text-slate-500">Assuntos</span><p className="font-bold">{ed.total_topicos}</p></div>
            </div>
            <p className="mt-2 truncate text-xs text-slate-500">{ed.arquivo_nome}</p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 border-t pt-3">
            {ed.status !== "confirmado" && (
              <button
                type="button"
                onClick={()=>ed.status === "aguardando_revisao" ? carregarPreviewExistente(ed.id) : processarPdf(ed.id)}
                disabled={processando}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100"
              >
                <RefreshCw className="h-3.5 w-3.5"/>
                {ed.status === "aguardando_revisao" ? "Revisar prévia" : "Tentar novamente"}
              </button>
            )}

            {ed.status === "confirmado" && ed.edital_id && (
              <button
                type="button"
                onClick={()=>usarNoPlanejamento(ed.edital_id!)}
                disabled={aplicando === ed.edital_id}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-indigo-700"
              >
                {aplicando === ed.edital_id ? "Aplicando..." : "Usar no meu planejamento"}
              </button>
            )}

            <button
              type="button"
              onClick={()=>excluirUpload(ed.id)}
              disabled={excluindoId === ed.id}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 px-3 py-1.5 text-xs font-bold text-red-700 dark:text-red-300 hover:bg-red-100 ml-auto"
            >
              {excluindoId === ed.id ? <Loader2 className="h-3.5 w-3.5 animate-spin"/> : <Trash2 className="h-3.5 w-3.5"/>}
              Excluir
            </button>
          </div>
        </article>)}
      </div>
    </section>}

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
      <div className="flex items-start gap-3"><Upload className="mt-1 h-5 w-5 text-indigo-600"/><div><h2 className="text-xl font-black">Importar edital em PDF</h2><p className="text-sm text-slate-600 dark:text-slate-400">Envie o edital, confira a prévia e só depois confirme a importação para o concurso selecionado.</p></div></div>

      <div className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 dark:bg-indigo-950/40 p-4 text-sm space-y-2">
        <p className="text-xs font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">Importação Privada</p>
        <p className="text-slate-700 dark:text-slate-300">
          O PDF enviado será estruturado e salvo exclusivamente como seu edital privado de estudos, sem alterar editais públicos do catálogo oficial.
        </p>
      </div>

      <form onSubmit={enviar} className="mt-5 grid gap-3 sm:grid-cols-2">
        <input name="nome" required value={formValues.nome} onChange={e=>setFormValues(v=>({...v,nome:e.target.value}))} placeholder="Nome do concurso / edital" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="orgao" value={formValues.orgao} onChange={e=>setFormValues(v=>({...v,orgao:e.target.value}))} placeholder="Órgão" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="cargo" value={formValues.cargo} onChange={e=>setFormValues(v=>({...v,cargo:e.target.value}))} placeholder="Cargo" className="rounded-xl border bg-transparent p-2.5"/>
        <input name="uf" maxLength={2} value={formValues.uf} onChange={e=>setFormValues(v=>({...v,uf:e.target.value}))} placeholder="UF" className="rounded-xl border bg-transparent p-2.5 uppercase"/>
        <label className="sm:col-span-2 rounded-xl border border-dashed p-5 text-sm cursor-pointer hover:border-indigo-400"><span className="font-bold">PDF do edital (máx. 20 MB)</span><input type="file" accept="application/pdf,.pdf" onChange={e=>setArquivo(e.target.files?.[0]||null)} className="mt-2 block w-full"/></label>
        <button disabled={enviando||processando||confirmando} className="sm:col-span-2 rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white disabled:opacity-50">{enviando?"Enviando PDF...":processando?"Processando PDF...":"Enviar e gerar prévia"}</button>
      </form>

      {mensagem&&<div className="mt-4 flex gap-2 rounded-xl bg-slate-50 dark:bg-slate-800 p-3 text-sm"><AlertCircle className="h-4 w-4 shrink-0 mt-0.5"/>{mensagem}</div>}

      {processando&&<div className="mt-4 flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50 dark:bg-indigo-950/40 p-4 text-sm"><Loader2 className="h-5 w-5 animate-spin text-indigo-600"/><div><strong>Processando edital...</strong><p className="text-slate-600 dark:text-slate-400">O PDF inteiro está sendo analisado para localizar disciplinas e todos os assuntos.</p></div></div>}

      {preview&&<section id="preview-edital" className="mt-5 rounded-2xl border border-indigo-200 bg-white dark:bg-slate-900 overflow-hidden">
        <button type="button" onClick={()=>setMostrarPreview(v=>!v)} className="w-full flex items-center justify-between gap-3 p-5 text-left">
          <div><p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Prévia estruturada</p><h3 className="text-xl font-black">{preview.titulo_detectado||"Edital importado"}</h3><p className="mt-1 text-sm text-slate-500">{disciplinasExibidas.length} disciplinas · {totalAssuntosExibidos} assuntos</p></div>
          <ChevronDown className={`h-5 w-5 transition-transform ${mostrarPreview?"rotate-180":""}`}/>
        </button>
        {mostrarPreview&&<div className="border-t p-5 space-y-4">
          {preview.cargos && preview.cargos.length > 1 && (
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 dark:bg-indigo-950/40 p-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-1.5">
                Selecione o cargo a ser importado ({preview.cargos.length} cargos detectados no edital):
              </label>
              <select
                value={cargoSelecionado}
                onChange={e => setCargoSelecionado(e.target.value)}
                className="w-full rounded-xl border bg-white dark:bg-slate-900 p-2.5 text-sm font-semibold"
              >
                {preview.cargos.map((c, i) => (
                  <option key={i} value={c.nome}>
                    {c.nome} ({c.disciplinas?.length || 0} disciplinas)
                  </option>
                ))}
              </select>
            </div>
          )}

          {preview.observacoes?.length>0&&<div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 p-3 text-sm text-amber-800 dark:text-amber-300"><strong>Observações:</strong><ul className="mt-1 list-disc pl-5">{preview.observacoes.map((x,i)=><li key={i}>{x}</li>)}</ul></div>}

          <div className="space-y-3">
            {disciplinasExibidas.map((d,i)=>(
              <details key={i} className="rounded-xl border p-4" open={i<3}>
                <summary className="cursor-pointer font-bold">
                  {d.nome} <span className="ml-2 text-xs font-normal text-slate-500">{d.assuntos?.length || 0} assuntos</span>
                </summary>
                <ol className="mt-3 list-decimal pl-5 space-y-1.5 text-sm">
                  {d.assuntos?.map((a,j)=>{
                    if (typeof a === "object" && a !== null) {
                      const sub = a.subassuntos || a.topicos || [];
                      return (
                        <li key={j} className="space-y-1">
                          <span className="font-medium">{a.nome}</span>
                          {sub.length > 0 && (
                            <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-400 space-y-0.5">
                              {sub.map((st, k) => <li key={k}>{st}</li>)}
                            </ul>
                          )}
                        </li>
                      );
                    }
                    return <li key={j}>{a}</li>;
                  })}
                </ol>
              </details>
            ))}
          </div>

          <div className="pt-2 text-xs text-slate-500">A prévia é extraída exclusivamente do PDF. Nenhum tópico deve ser inventado.</div>

          {!confirmado&&<div className="mt-5 rounded-xl border-2 border-indigo-200 bg-indigo-50 dark:bg-indigo-950/30 p-4">
            <p className="font-black">Revisou a prévia?</p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
              A confirmação salvará os {totalAssuntosExibidos} assuntos em sua cópia privada. O edital oficial do catálogo não será alterado.
            </p>
            <label className="mt-3 flex items-start gap-2 text-sm"><input id="confirmar-conteudo" type="checkbox" className="mt-1" required/><span>Revisei o conteúdo e confirmo que os assuntos acima estão de acordo com o PDF.</span></label>
            <button type="button" disabled={confirmando} onClick={async()=>{
              const box=document.getElementById("confirmar-conteudo") as HTMLInputElement|null;
              if(!box?.checked){setMensagem("Marque a confirmação após revisar a prévia.");return;}
              await confirmarPreview();
            }} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-black text-white disabled:opacity-50">
              {confirmando?<><Loader2 className="h-4 w-4 animate-spin"/>Confirmando...</>:<>Confirmar e salvar na minha cópia privada</>}
            </button>
          </div>}

          {confirmado&&<div className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 dark:bg-green-950/30 p-4 text-green-800 dark:text-green-300">
            <CheckCircle2 className="h-5 w-5 mt-0.5"/>
            <div><p className="font-black">Edital confirmado e importado</p><p className="text-sm">{mensagem}</p><a href="/mentoria/edital" className="mt-2 inline-block underline font-semibold">Ir para o edital verticalizado</a></div>
          </div>}
        </div>}
      </section>}

      <p className="mt-3 text-xs text-slate-500">O upload é privado. O conteúdo só é gravado após sua confirmação explícita.</p>
    </section>
  </main>;
}
