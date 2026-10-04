"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  Plus,
  Save,
  Trash2,
  ArrowLeft,
  Upload,
  FileText,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  X,
  Layers,
  Search,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

type Disciplina = { id: string; nome: string };
type Assunto = { id: string; nome: string; disciplina_id: string };

type Conteudo = {
  id?: string;
  assunto_id: string;
  titulo: string;
  orientacao: string;
  lei_seca: string;
  lei_seca_url: string;
  pdf_url: string;
  video_url: string;
  ordem: number;
  ativo: boolean;
  pdf_path?: string | null;
  pdf_nome?: string | null;
  pdf_tamanho?: number | null;
  signed_pdf_url?: string | null;
};

type BatchItem = {
  id: string;
  file: File;
  assunto_id: string;
  titulo: string;
  status: "pending" | "uploading" | "success" | "error";
  progress?: number;
  errorMsg?: string;
};

const vazio: Conteudo = {
  assunto_id: "",
  titulo: "",
  orientacao: "",
  lei_seca: "",
  lei_seca_url: "",
  pdf_url: "",
  video_url: "",
  ordem: 0,
  ativo: true,
  pdf_path: null,
  pdf_nome: null,
  pdf_tamanho: null,
  signed_pdf_url: null,
};

function formatBytes(bytes?: number | null) {
  if (!bytes || bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

export default function AdminConteudosPage() {
  const [tab, setTab] = useState<"individual" | "lote">("individual");
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [assuntos, setAssuntos] = useState<Assunto[]>([]);
  const [todosAssuntos, setTodosAssuntos] = useState<Assunto[]>([]);
  const [disciplina, setDisciplina] = useState("");
  const [form, setForm] = useState<Conteudo>(vazio);
  const [lista, setLista] = useState<Conteudo[]>([]);
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);

  // Single upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploadingSingle, setIsUploadingSingle] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Batch upload state
  const [batchItems, setBatchItems] = useState<BatchItem[]>([]);
  const [isUploadingBatch, setIsUploadingBatch] = useState(false);
  const batchFileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/disciplinas")
      .then((r) => r.json())
      .then((j) => setDisciplinas(j.disciplinas || j.data || []));

    fetch("/api/assuntos")
      .then((r) => r.json())
      .then((j) => {
        const list = j.assuntos || j.data || [];
        setTodosAssuntos(list);
      });
  }, []);

  useEffect(() => {
    if (!disciplina) return;
    let cancel = false;
    fetch(`/api/assuntos?disciplina_id=${encodeURIComponent(disciplina)}`)
      .then((r) => r.json())
      .then((j) => {
        if (!cancel) {
          setAssuntos(j.assuntos || j.data || []);
        }
      });
    return () => {
      cancel = true;
    };
  }, [disciplina]);

  async function carregar(aid: string) {
    setForm({ ...vazio, assunto_id: aid });
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (!aid) {
      setLista([]);
      return;
    }
    try {
      const r = await fetch(`/api/admin/conteudos?assunto_id=${encodeURIComponent(aid)}`);
      const j = await r.json();
      setLista(j.conteudos || []);
    } catch {
      setLista([]);
    }
  }

  async function uploadSinglePdf(assuntoId: string, file: File, titulo?: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("assunto_id", assuntoId);
    if (titulo) formData.append("titulo", titulo);
    formData.append("auto_create", "false"); // We want just the path to link to our form

    const res = await fetch("/api/admin/conteudos/upload", {
      method: "POST",
      body: formData,
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error || "Erro no upload do PDF");
    }
    return json;
  }

  async function salvar() {
    setSaving(true);
    setMsg(null);

    let currentPdfPath = form.pdf_path;
    let currentPdfNome = form.pdf_nome;
    let currentPdfTamanho = form.pdf_tamanho;

    // Se houver um arquivo PDF selecionado no form individual, fazemos o upload antes de salvar
    if (selectedFile && form.assunto_id) {
      try {
        setIsUploadingSingle(true);
        const uploadResult = await uploadSinglePdf(form.assunto_id, selectedFile, form.titulo);
        currentPdfPath = uploadResult.pdf_path;
        currentPdfNome = uploadResult.pdf_nome;
        currentPdfTamanho = uploadResult.pdf_tamanho;
      } catch (err: any) {
        setIsUploadingSingle(false);
        setSaving(false);
        setMsg({ type: "error", text: err.message || "Erro no upload do PDF" });
        return;
      } finally {
        setIsUploadingSingle(false);
      }
    }

    const payload = {
      ...form,
      pdf_path: currentPdfPath,
      pdf_nome: currentPdfNome,
      pdf_tamanho: currentPdfTamanho,
    };

    const r = await fetch("/api/admin/conteudos", {
      method: form.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const j = await r.json();
    setSaving(false);

    if (!r.ok) {
      setMsg({ type: "error", text: j.error || "Erro ao salvar conteúdo" });
      return;
    }

    setMsg({ type: "success", text: "Conteúdo salvo com sucesso!" });
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    await carregar(form.assunto_id);
    if (j.conteudo) {
      setForm(j.conteudo);
    }
  }

  async function excluir(id?: string) {
    if (!id || !confirm("Excluir este conteúdo e seu arquivo associado?")) return;
    const aid = form.assunto_id;
    const r = await fetch(`/api/admin/conteudos?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    if (r.ok) {
      setMsg({ type: "success", text: "Conteúdo excluído com sucesso." });
      await carregar(aid);
    } else {
      const j = await r.json();
      setMsg({ type: "error", text: j.error || "Erro ao excluir conteúdo." });
    }
  }

  function handleRemovePdfAttachment() {
    setForm({
      ...form,
      pdf_path: null,
      pdf_nome: null,
      pdf_tamanho: null,
      signed_pdf_url: null,
    });
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // --- Batch Upload Handlers ---
  function handleBatchFilesSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newItems: BatchItem[] = files.map((file) => {
      // Smart matching with subject name
      const cleanFileName = file.name.replace(/\.pdf$/i, "").toLowerCase();
      let matchedAssuntoId = "";

      const match = todosAssuntos.find((a) => {
        const assuntoName = a.nome.toLowerCase();
        return cleanFileName.includes(assuntoName) || assuntoName.includes(cleanFileName);
      });

      if (match) {
        matchedAssuntoId = match.id;
      }

      return {
        id: crypto.randomUUID(),
        file,
        assunto_id: matchedAssuntoId,
        titulo: file.name.replace(/\.pdf$/i, "").trim(),
        status: "pending",
      };
    });

    setBatchItems((prev) => [...prev, ...newItems]);
    if (batchFileInputRef.current) batchFileInputRef.current.value = "";
  }

  function updateBatchItem(id: string, patch: Partial<BatchItem>) {
    setBatchItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  }

  function removeBatchItem(id: string) {
    setBatchItems((prev) => prev.filter((item) => item.id !== id));
  }

  async function processBatchItem(item: BatchItem) {
    if (!item.assunto_id) {
      updateBatchItem(item.id, {
        status: "error",
        errorMsg: "Assunto não selecionado",
      });
      return false;
    }

    updateBatchItem(item.id, { status: "uploading", errorMsg: undefined });

    try {
      const formData = new FormData();
      formData.append("file", item.file);
      formData.append("assunto_id", item.assunto_id);
      formData.append("titulo", item.titulo);
      formData.append("auto_create", "true");

      const res = await fetch("/api/admin/conteudos/upload", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Erro no envio");
      }

      updateBatchItem(item.id, { status: "success" });
      return true;
    } catch (err: any) {
      updateBatchItem(item.id, {
        status: "error",
        errorMsg: err.message || "Erro desconhecido",
      });
      return false;
    }
  }

  async function handleStartBatchUpload() {
    setIsUploadingBatch(true);
    const pendingItems = batchItems.filter((i) => i.status === "pending" || i.status === "error");

    for (const item of pendingItems) {
      await processBatchItem(item);
    }
    setIsUploadingBatch(false);
  }

  const batchStats = useMemo(() => {
    const total = batchItems.length;
    const success = batchItems.filter((i) => i.status === "success").length;
    const error = batchItems.filter((i) => i.status === "error").length;
    const uploading = batchItems.filter((i) => i.status === "uploading").length;
    const pending = batchItems.filter((i) => i.status === "pending").length;
    const percent = total > 0 ? Math.round((success / total) * 100) : 0;
    return { total, success, error, uploading, pending, percent };
  }, [batchItems]);

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all";

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/admin/questoes"
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex gap-1 items-center mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para Administração
          </Link>
          <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Materiais de Estudo por Assunto
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Gerencie PDFs (armazenamento seguro), orientações, lei seca e vídeos exibidos aos alunos.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setTab("individual")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              tab === "individual"
                ? "bg-white dark:bg-slate-900 text-blue-600 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Individual por Assunto
          </button>
          <button
            onClick={() => setTab("lote")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              tab === "lote"
                ? "bg-white dark:bg-slate-900 text-blue-600 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Upload em Lote (PDFs)
            {batchItems.length > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded-full text-[10px]">
                {batchItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Global Alert Notification */}
      {msg && (
        <div
          className={`p-4 rounded-2xl border flex items-center justify-between text-sm ${
            msg.type === "success"
              ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300"
              : "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800/60 text-red-800 dark:text-red-300"
          }`}
        >
          <div className="flex items-center gap-2">
            {msg.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
            )}
            <span>{msg.text}</span>
          </div>
          <button
            onClick={() => setMsg(null)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ----------------- TAB: INDIVIDUAL ----------------- */}
      {tab === "individual" && (
        <div className="space-y-6">
          {/* Selectors */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                1. Disciplina
              </label>
              <select
                className={inputClass}
                value={disciplina}
                onChange={(e) => {
                  const val = e.target.value;
                  setDisciplina(val);
                  setAssuntos([]);
                  setForm(vazio);
                  setLista([]);
                }}
              >
                <option value="">Selecione a disciplina</option>
                {disciplinas.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                2. Assunto
              </label>
              <select
                className={inputClass}
                value={form.assunto_id}
                disabled={!disciplina}
                onChange={(e) => carregar(e.target.value)}
              >
                <option value="">
                  {disciplina ? "Selecione o assunto" : "Primeiro escolha uma disciplina"}
                </option>
                {assuntos.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {form.assunto_id && (
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6 items-start">
              {/* Sidebar: Lista de Materiais do Assunto */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h2 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    Materiais cadastrados ({lista.length})
                  </h2>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setForm({ ...vazio, assunto_id: form.assunto_id });
                      setSelectedFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    leftIcon={<Plus className="w-3.5 h-3.5" />}
                  >
                    Novo
                  </Button>
                </div>

                {lista.length === 0 ? (
                  <p className="text-xs text-slate-500 dark:text-slate-400 p-6 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                    Nenhum material cadastrado para este assunto.
                  </p>
                ) : (
                  <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1">
                    {lista.map((c) => {
                      const isSelected = form.id === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => {
                            setForm(c);
                            setSelectedFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                            isSelected
                              ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200"
                              : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <strong className="text-sm font-semibold line-clamp-1">
                              {c.titulo}
                            </strong>
                            {(c.pdf_path || c.pdf_url) && (
                              <span className="shrink-0 text-[10px] bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-md font-bold flex items-center gap-1">
                                <FileText className="w-2.5 h-2.5" /> PDF
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <span>Ordem: {c.ordem}</span>
                            <span>•</span>
                            <span className={c.ativo ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600"}>
                              {c.ativo ? "Ativo" : "Inativo"}
                            </span>
                            {c.pdf_tamanho && (
                              <>
                                <span>•</span>
                                <span>{formatBytes(c.pdf_tamanho)}</span>
                              </>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Form: Edição do Conteúdo */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {form.id ? "Editar Material de Estudo" : "Cadastrar Novo Material"}
                  </h3>
                  {form.id && (
                    <span className="text-xs text-slate-400 font-mono">ID: {form.id.slice(0, 8)}...</span>
                  )}
                </div>

                {/* Título */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Título do Material *
                  </label>
                  <input
                    className={inputClass}
                    placeholder="Ex: Teoria Completa - Princípios Fundamentais"
                    value={form.titulo}
                    onChange={(e) => setForm({ ...form, titulo: e.target.value })}
                  />
                </div>

                {/* Bloco de Upload / Anexo de PDF */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-red-500" />
                      Anexo PDF (Bucket Privado - Até 50 MB)
                    </label>
                  </div>

                  {/* Se já existe PDF anexado no banco */}
                  {form.pdf_path ? (
                    <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-5 h-5 text-red-500 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                            {form.pdf_nome || "documento.pdf"}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {formatBytes(form.pdf_tamanho)} • Armazenamento seguro
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {form.signed_pdf_url && (
                          <a
                            href={form.signed_pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/60 flex items-center gap-1"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Abrir PDF
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={handleRemovePdfAttachment}
                          className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                          title="Remover anexo"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : null}

                  {/* Upload de novo arquivo PDF */}
                  <div className="space-y-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,application/pdf"
                      className="hidden"
                      id="single-pdf-input"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 50 * 1024 * 1024) {
                            alert("O arquivo PDF excede o limite máximo de 50 MB.");
                            e.target.value = "";
                            return;
                          }
                          setSelectedFile(file);
                          if (!form.titulo.trim()) {
                            setForm((prev) => ({
                              ...prev,
                              titulo: file.name.replace(/\.pdf$/i, "").trim(),
                            }));
                          }
                        }
                      }}
                    />

                    {!form.pdf_path && !selectedFile && (
                      <label
                        htmlFor="single-pdf-input"
                        className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 bg-white dark:bg-slate-900 hover:bg-blue-50/20 transition-all text-center"
                      >
                        <Upload className="w-6 h-6 text-slate-400 mb-1.5" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Clique para selecionar um arquivo PDF
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5">
                          Tamanho máximo: 50 MB • Salvo automaticamente no bucket seguro
                        </span>
                      </label>
                    )}

                    {selectedFile && (
                      <div className="flex items-center justify-between p-3 bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-xl">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-blue-900 dark:text-blue-200 truncate">
                              {selectedFile.name}
                            </p>
                            <p className="text-[11px] text-blue-600/80 dark:text-blue-400">
                              {formatBytes(selectedFile.size)} • Pronto para upload ao salvar
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="p-1 text-slate-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* URL Externa de PDF como alternativa */}
                  <div className="pt-2">
                    <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      Ou informe uma URL externa de PDF (opcional):
                    </label>
                    <input
                      className={inputClass}
                      placeholder="https://exemplo.com/material.pdf"
                      value={form.pdf_url || ""}
                      onChange={(e) => setForm({ ...form, pdf_url: e.target.value })}
                    />
                  </div>
                </div>

                {/* Orientação */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Orientação de Estudo
                  </label>
                  <textarea
                    className={inputClass}
                    rows={3}
                    placeholder="Instruções pedagógicas, pontos de maior incidência, etc."
                    value={form.orientacao || ""}
                    onChange={(e) => setForm({ ...form, orientacao: e.target.value })}
                  />
                </div>

                {/* Lei Seca e URL */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Lei Seca / Artigos
                    </label>
                    <textarea
                      className={inputClass}
                      rows={3}
                      placeholder="Artigos ou dispositivos legais recomendados"
                      value={form.lei_seca || ""}
                      onChange={(e) => setForm({ ...form, lei_seca: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      URL Oficial da Legislação
                    </label>
                    <input
                      className={inputClass}
                      placeholder="https://planalto.gov.br/..."
                      value={form.lei_seca_url || ""}
                      onChange={(e) => setForm({ ...form, lei_seca_url: e.target.value })}
                    />
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2.5 mb-1">
                      URL de Vídeo (Opcional)
                    </label>
                    <input
                      className={inputClass}
                      placeholder="https://youtube.com/watch?v=..."
                      value={form.video_url || ""}
                      onChange={(e) => setForm({ ...form, video_url: e.target.value })}
                    />
                  </div>
                </div>

                {/* Ordem & Ativo */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      Ordem:
                      <input
                        type="number"
                        className="w-16 px-2 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-900"
                        value={form.ordem}
                        onChange={(e) => setForm({ ...form, ordem: Number(e.target.value) })}
                      />
                    </label>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.ativo}
                        onChange={(e) => setForm({ ...form, ativo: e.target.checked })}
                        className="w-4 h-4 rounded text-blue-600"
                      />
                      Ativo
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    {form.id && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => excluir(form.id)}
                        leftIcon={<Trash2 className="w-3.5 h-3.5 text-red-500" />}
                      >
                        Excluir
                      </Button>
                    )}
                    <Button
                      size="sm"
                      onClick={salvar}
                      disabled={saving || !form.titulo.trim() || isUploadingSingle}
                      isLoading={saving || isUploadingSingle}
                      leftIcon={<Save className="w-3.5 h-3.5" />}
                    >
                      {saving || isUploadingSingle ? "Salvando..." : "Salvar Conteúdo"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ----------------- TAB: UPLOAD EM LOTE ----------------- */}
      {tab === "lote" && (
        <div className="space-y-6">
          {/* Dropzone / File Picker */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Upload em Lote de Materiais em PDF
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Selecione múltiplos arquivos PDF. O sistema tentará associar automaticamente os assuntos pelo nome do arquivo.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <input
                  ref={batchFileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  multiple
                  className="hidden"
                  id="batch-pdf-input"
                  onChange={handleBatchFilesSelect}
                />
                <Button
                  size="sm"
                  onClick={() => batchFileInputRef.current?.click()}
                  leftIcon={<Plus className="w-4 h-4" />}
                >
                  Selecionar PDFs
                </Button>
                {batchItems.length > 0 && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setBatchItems([])}
                    leftIcon={<Trash2 className="w-4 h-4" />}
                  >
                    Limpar Fila
                  </Button>
                )}
              </div>
            </div>

            {/* Status Summary & Progress Bar */}
            {batchItems.length > 0 && (
              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Progresso Geral: {batchStats.success} de {batchStats.total} enviados ({batchStats.percent}%)
                  </span>
                  <div className="flex items-center gap-3">
                    {batchStats.pending > 0 && (
                      <span className="text-slate-500">{batchStats.pending} pendentes</span>
                    )}
                    {batchStats.uploading > 0 && (
                      <span className="text-blue-600 font-semibold flex items-center gap-1">
                        <Loader2 className="w-3 h-3 animate-spin" /> Enviando {batchStats.uploading}...
                      </span>
                    )}
                    {batchStats.success > 0 && (
                      <span className="text-emerald-600 font-semibold">{batchStats.success} com sucesso</span>
                    )}
                    {batchStats.error > 0 && (
                      <span className="text-red-600 font-semibold">{batchStats.error} com erro</span>
                    )}
                  </div>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${batchStats.percent}%` }}
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <Button
                    size="sm"
                    onClick={handleStartBatchUpload}
                    disabled={isUploadingBatch || batchStats.pending + batchStats.error === 0}
                    isLoading={isUploadingBatch}
                    leftIcon={<Upload className="w-4 h-4" />}
                  >
                    {isUploadingBatch ? "Enviando Arquivos..." : "Iniciar Upload em Lote"}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Batch Items List */}
          {batchItems.length === 0 ? (
            <div
              onClick={() => batchFileInputRef.current?.click()}
              className="p-12 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl bg-white dark:bg-slate-900 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-all text-center space-y-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center shadow-xs">
                <Upload className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                Nenhum arquivo na fila de upload
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                Clique aqui ou no botão acima para selecionar um ou mais arquivos PDF para associar aos assuntos.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {batchItems.map((item, idx) => {
                const isUploading = item.status === "uploading";
                const isSuccess = item.status === "success";
                const isError = item.status === "error";

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border bg-white dark:bg-slate-900 shadow-xs transition-all space-y-3 ${
                      isSuccess
                        ? "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20"
                        : isError
                        ? "border-red-200 dark:border-red-900/60 bg-red-50/20"
                        : "border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      {/* File details & Status */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isSuccess
                              ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600"
                              : isError
                              ? "bg-red-100 dark:bg-red-950/60 text-red-600"
                              : "bg-blue-50 dark:bg-blue-950/60 text-blue-600"
                          }`}
                        >
                          {isUploading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : isSuccess ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : isError ? (
                            <AlertCircle className="w-5 h-5" />
                          ) : (
                            <FileText className="w-5 h-5" />
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                            {item.file.name}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {formatBytes(item.file.size)} • Item #{idx + 1}
                          </p>
                        </div>
                      </div>

                      {/* Status Tag and Actions */}
                      <div className="flex items-center gap-2 shrink-0">
                        {isSuccess && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Enviado
                          </span>
                        )}
                        {isError && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {item.errorMsg || "Erro"}
                          </span>
                        )}
                        {item.status === "pending" && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                            Pendente
                          </span>
                        )}

                        {(!isSuccess || isError) && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => processBatchItem(item)}
                            disabled={isUploading}
                            title="Enviar este arquivo"
                          >
                            <Upload className="w-3.5 h-3.5" />
                          </Button>
                        )}

                        <button
                          type="button"
                          onClick={() => removeBatchItem(item.id)}
                          disabled={isUploading}
                          className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Mapping fields */}
                    {!isSuccess && (
                      <div className="grid md:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                            Assunto Associado *
                          </label>
                          <select
                            className={inputClass}
                            value={item.assunto_id}
                            onChange={(e) => updateBatchItem(item.id, { assunto_id: e.target.value })}
                          >
                            <option value="">Selecione o assunto</option>
                            {todosAssuntos.map((a) => (
                              <option key={a.id} value={a.id}>
                                {a.nome}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                            Título do Conteúdo
                          </label>
                          <input
                            className={inputClass}
                            value={item.titulo}
                            onChange={(e) => updateBatchItem(item.id, { titulo: e.target.value })}
                            placeholder="Título do material"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
