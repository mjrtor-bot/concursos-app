"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { aguardarProcessamento } from "@/lib/editais/aguardarProcessamento";

interface EditalForm {
  id?: string;
  concurso_id: string;
  cargo_id: string;
  numero: string;
  titulo: string;
  publicado_em: string;
  prova_em: string;
  banca: string;
  status: string;
  fonte_oficial_url: string;
  pdf_url: string;
}

interface ConcursoCargo {
  id: string;
  nome: string;
  concurso_id?: string;
}

interface ConcursoItem {
  id: string;
  nome: string;
  concurso_cargos?: ConcursoCargo[];
}

interface EditalItem {
  id: string;
  concurso_id: string;
  cargo_id: string;
  numero?: string | null;
  titulo: string;
  publicado_em?: string | null;
  prova_em?: string | null;
  banca?: string | null;
  status: string;
  fonte_oficial_url?: string | null;
  pdf_url?: string | null;
  concursos?: { nome: string } | null;
  concurso_cargos?: { nome: string } | null;
  edital_topicos?: Array<{ id: string }> | null;
}

interface PreviewDisciplina {
  nome: string;
  assuntos?: Array<string | { nome: string; topicos?: string[]; subassuntos?: string[] }>;
}

interface PreviewCargo {
  nome: string;
  disciplinas?: PreviewDisciplina[];
}

interface PreviewData {
  edital_id?: string;
  total_disciplinas?: number;
  total_assuntos?: number;
  estrutura?: {
    cargos?: PreviewCargo[];
    disciplinas?: PreviewDisciplina[];
    observacoes?: string[];
  };
}

interface TopicoImportacao {
  disciplina_id?: string;
  assunto_id?: string;
  peso?: number | string;
  incidencia?: number | string;
  ordem?: number | string;
  [key: string]: unknown;
}

const empty: EditalForm = { id: "", concurso_id: "", cargo_id: "", numero: "", titulo: "", publicado_em: "", prova_em: "", banca: "", status: "publicado", fonte_oficial_url: "", pdf_url: "" };

export default function AdminEditais() {
  const [lista, setLista] = useState<EditalItem[]>([]);
  const [concursos, setConcursos] = useState<ConcursoItem[]>([]);
  const [form, setForm] = useState<EditalForm>(empty);
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [cargoSelecionado, setCargoSelecionado] = useState<string>("");
  const [uploadId, setUploadId] = useState("");

  async function loadData() {
    const [re, rc] = await Promise.all([fetch("/api/admin/editais", { cache: "no-store" }), fetch("/api/admin/concursos", { cache: "no-store" })]);
    const [je, jc] = await Promise.all([re.json(), rc.json()]);
    if (!re.ok || !rc.ok) { setMsg(je.error || jc.error || "Erro ao carregar"); return; }
    setLista(je.editais || []);
    setConcursos(jc.concursos || []);
  }

  useEffect(() => {
    let active = true;
    (async () => {
      const [re, rc] = await Promise.all([fetch("/api/admin/editais", { cache: "no-store" }), fetch("/api/admin/concursos", { cache: "no-store" })]);
      const [je, jc] = await Promise.all([re.json(), rc.json()]);
      if (!active) return;
      if (!re.ok || !rc.ok) { setMsg(je.error || jc.error || "Erro ao carregar"); return; }
      setLista(je.editais || []);
      setConcursos(jc.concursos || []);
    })();
    return () => { active = false; };
  }, []);
  const cargos: ConcursoCargo[] = (concursos.find(c => c.id === form.concurso_id)?.concurso_cargos || []);

  const previewCargos = preview?.estrutura?.cargos || [];
  const cargoAtivo = previewCargos.find(c => c.nome === cargoSelecionado);
  const disciplinasExibidas: PreviewDisciplina[] = cargoAtivo?.disciplinas || preview?.estrutura?.disciplinas || (previewCargos.length === 1 ? previewCargos[0].disciplinas : []) || [];

  async function salvar() {
    const payload = { ...form };
    if (!payload.id) delete payload.id;
    const r = await fetch("/api/admin/editais", { method: form.id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const j = await r.json();
    if (!r.ok) { setMsg(j.error || "Erro ao salvar"); return; }
    setMsg("Edital salvo.");
    setForm(empty);
    await loadData();
  }

  async function importarPdf(edital: EditalItem, file: File) {
    try {
      if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) throw new Error("Selecione um arquivo PDF.");
      if (file.size <= 0) throw new Error("O PDF está vazio.");
      if (file.size > 20 * 1024 * 1024) throw new Error("O PDF deve ter no máximo 20 MB.");
      setMsg("Enviando e analisando PDF...");
      const fd = new FormData();
      fd.append("arquivo", file);
      fd.append("nome", edital.titulo || file.name);
      fd.append("orgao", edital.concursos?.nome || "");
      fd.append("cargo", edital.concurso_cargos?.nome || "");
      fd.append("edital_id", edital.id);
      const ur = await fetch("/api/editais/upload", { method: "POST", body: fd });
      const uj = await ur.json();
      if (!ur.ok) throw new Error(uj.error || "Falha no upload");
      const id = uj.edital_usuario_id || uj.edital?.id;
      const pr = await fetch("/api/editais/processar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ edital_usuario_id: id }) });
      const pj = await pr.json();
      if (!pr.ok) throw new Error(pj.error || "Falha ao processar PDF");

      setMsg("PDF recebido. A análise está sendo executada...");
      const resultado = (await aguardarProcessamento(id, setMsg)) as PreviewData;

      setUploadId(id);
      setPreview({ ...resultado, edital_id: edital.id });
      const cargosList = resultado.estrutura?.cargos || [];
      if (cargosList.length > 0) {
        setCargoSelecionado(cargosList[0].nome);
      } else {
        setCargoSelecionado("");
      }
      setMsg(`Prévia pronta: ${resultado.total_disciplinas} disciplinas e ${resultado.total_assuntos} assuntos. Revise antes de confirmar.`);
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Erro ao importar PDF");
    }
  }

  async function confirmarPdf() {
    if (!preview || !uploadId) return;
    setMsg("Confirmando conteúdo...");
    const r = await fetch("/api/editais/confirmar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        edital_usuario_id: uploadId,
        edital_id: preview.edital_id,
        cargo_nome: cargoSelecionado || null
      })
    });
    const j = await r.json();
    if (!r.ok) { setMsg(j.error || "Falha ao confirmar"); return; }
    setMsg(`${j.total_topicos} tópicos confirmados no edital.`);
    setPreview(null);
    setCargoSelecionado("");
    setUploadId("");
    await loadData();
  }

  async function importar(editalId: string, file: File) {
    try {
      const txt = await file.text();
      let topicos: TopicoImportacao[] = [];
      if (file.name.toLowerCase().endsWith(".json")) {
        const j = JSON.parse(txt);
        topicos = Array.isArray(j) ? j : j.topicos || [];
      } else {
        const [h, ...rows] = txt.split(/\r?\n/).filter(Boolean);
        const cols = h.split(",").map(x => x.trim());
        topicos = rows.map(row => {
          const v = row.split(",").map(x => x.trim());
          return Object.fromEntries(cols.map((k, i) => [k, v[i]]));
        });
      }
      const r = await fetch("/api/admin/editais", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "importar_topicos", edital_id: editalId, topicos }) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Falha na importação");
      setMsg(`${j.total} tópicos importados.`);
      await loadData();
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Arquivo inválido");
    }
  }

  const c = "w-full border rounded-lg p-2 bg-transparent";
  return (
    <div className="max-w-6xl mx-auto space-y-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black">Admin · Editais</h1>
          <p className="text-sm text-slate-500">Cadastre edital, banca, datas e conteúdo programático.</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-100 transition-colors" href="/admin/cobertura">
            Relatório de Cobertura
          </Link>
          <Link className="text-blue-600 hover:underline" href="/admin/concursos">
            Gerenciar concursos/cargos
          </Link>
        </div>
      </div>
      {msg && <div className="border rounded-lg p-3">{msg}</div>}
      <div className="grid md:grid-cols-3 gap-2 border rounded-xl p-4">
        <select className={c} value={form.concurso_id} onChange={e => setForm({ ...form, concurso_id: e.target.value, cargo_id: "" })}>
          <option value="">Concurso</option>
          {concursos.map(x => <option key={x.id} value={x.id}>{x.nome}</option>)}
        </select>
        <select className={c} value={form.cargo_id} onChange={e => setForm({ ...form, cargo_id: e.target.value })}>
          <option value="">Cargo</option>
          {cargos.map((x: ConcursoCargo) => <option key={x.id} value={x.id}>{x.nome}</option>)}
        </select>
        <input className={c} placeholder="Número" value={form.numero || ""} onChange={e => setForm({ ...form, numero: e.target.value })} />
        <input className={c + " md:col-span-2"} placeholder="Título" value={form.titulo || ""} onChange={e => setForm({ ...form, titulo: e.target.value })} />
        <input className={c} placeholder="Banca" value={form.banca || ""} onChange={e => setForm({ ...form, banca: e.target.value })} />
        <input className={c} type="date" value={form.publicado_em || ""} onChange={e => setForm({ ...form, publicado_em: e.target.value })} />
        <input className={c} type="date" value={form.prova_em || ""} onChange={e => setForm({ ...form, prova_em: e.target.value })} />
        <select className={c} value={form.status || "publicado"} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option value="rascunho">Rascunho</option>
          <option value="publicado">Publicado</option>
          <option value="retificado">Retificado</option>
          <option value="encerrado">Encerrado</option>
        </select>
        <input className={c + " md:col-span-3"} placeholder="Fonte oficial" value={form.fonte_oficial_url || ""} onChange={e => setForm({ ...form, fonte_oficial_url: e.target.value })} />
        <input className={c + " md:col-span-3"} placeholder="URL do PDF" value={form.pdf_url || ""} onChange={e => setForm({ ...form, pdf_url: e.target.value })} />
        <button className="bg-blue-600 text-white rounded-lg p-2 md:col-span-3" onClick={salvar}>Salvar edital</button>
      </div>
      {preview && (
        <div className="border-2 rounded-xl p-4 space-y-3">
          <div className="flex justify-between gap-4">
            <div>
              <h2 className="font-bold">Revisar conteúdo extraído</h2>
              <p className="text-xs text-slate-500">Nada abaixo será gravado até você confirmar.</p>
            </div>
            <div className="flex gap-2">
              <button className="border rounded-lg px-3 py-2" onClick={() => { setPreview(null); setCargoSelecionado(""); setUploadId(""); }}>Descartar</button>
              <button className="bg-green-700 text-white rounded-lg px-3 py-2" onClick={confirmarPdf}>Confirmar importação</button>
            </div>
          </div>
          {previewCargos.length > 1 && (
            <div className="rounded-lg border p-3 bg-slate-50 dark:bg-slate-900">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Selecione o cargo a ser importado ({previewCargos.length} cargos detectados):
              </label>
              <select
                value={cargoSelecionado}
                onChange={e => setCargoSelecionado(e.target.value)}
                className="w-full rounded-lg border bg-transparent p-2 text-sm font-semibold"
              >
                {previewCargos.map((c, i) => (
                  <option key={i} value={c.nome}>
                    {c.nome} ({c.disciplinas?.length || 0} disciplinas)
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="max-h-96 overflow-auto space-y-3">
            {disciplinasExibidas.map((d: PreviewDisciplina, i: number) => (
              <div key={i}>
                <b>{d.nome}</b>
                <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
                  {d.assuntos?.map((a, j) => {
                    if (typeof a === "object" && a !== null) {
                      const sub = a.subassuntos || a.topicos || [];
                      return (
                        <li key={j}>
                          <span className="font-medium">{a.nome}</span>
                          {sub.length > 0 && (
                            <ul className="list-disc ml-5 text-xs text-slate-500 space-y-0.5 mt-0.5">
                              {sub.map((st, k) => <li key={k}>{st}</li>)}
                            </ul>
                          )}
                        </li>
                      );
                    }
                    return <li key={j}>{a}</li>;
                  })}
                </ul>
              </div>
            ))}
          </div>
          {(preview.estrutura?.observacoes?.length ?? 0) > 0 && (
            <div className="text-sm">
              <b>Observações da extração:</b>
              <ul className="list-disc ml-5">
                {preview.estrutura?.observacoes?.map((o: string, i: number) => <li key={i}>{o}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="space-y-3">
        {lista.map(e => (
          <div key={e.id} className="border rounded-xl p-4">
            <div className="flex justify-between gap-4">
              <button
                className="text-left"
                onClick={() =>
                  setForm({
                    id: e.id,
                    concurso_id: e.concurso_id || "",
                    cargo_id: e.cargo_id || "",
                    numero: e.numero || "",
                    titulo: e.titulo || "",
                    publicado_em: e.publicado_em || "",
                    prova_em: e.prova_em || "",
                    banca: e.banca || "",
                    status: e.status || "publicado",
                    fonte_oficial_url: e.fonte_oficial_url || "",
                    pdf_url: e.pdf_url || "",
                  })
                }
              >
                <b>{e.titulo}</b>
                <p className="text-xs text-slate-500">{e.numero || "Sem número"} · {e.banca || "Sem banca"} · {e.status} · {e.edital_topicos?.length || 0} tópicos</p>
              </button>
              <div className="flex gap-2">
                <label className="text-xs border rounded-lg px-3 py-2 cursor-pointer">
                  Importar PDF
                  <input
                    type="file"
                    accept="application/pdf,.pdf"
                    className="hidden"
                    onChange={x => {
                      const f = x.target.files?.[0];
                      if (f) void importarPdf(e, f);
                      x.currentTarget.value = "";
                    }}
                  />
                </label>
                <label className="text-xs border rounded-lg px-3 py-2 cursor-pointer">
                  Importar CSV/JSON
                  <input
                    type="file"
                    accept=".csv,.json"
                    className="hidden"
                    onChange={x => {
                      const f = x.target.files?.[0];
                      if (f) void importar(e.id, f);
                      x.currentTarget.value = "";
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500">CSV: disciplina_id,assunto_id,peso,incidencia,ordem. JSON aceita array com os mesmos campos.</p>
    </div>
  );
}
