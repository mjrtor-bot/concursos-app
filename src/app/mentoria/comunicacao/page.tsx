"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MessageSquare, Megaphone, Send } from "lucide-react";

interface PostItem {
  id: string;
  titulo: string;
  mensagem: string;
  created_at: string;
}

interface MsgItem {
  id: string;
  remetente_id: string;
  destinatario_id?: string;
  mensagem: string;
  created_at: string;
}

interface UsuarioItem {
  id: string;
  nome: string;
}

export default function Comunicacao() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [msgs, setMsgs] = useState<MsgItem[]>([]);
  const [usuarios, setUsuarios] = useState<UsuarioItem[]>([]);
  const [texto, setTexto] = useState("");
  const [dest, setDest] = useState("");
  const [titulo, setTitulo] = useState("");
  const [post, setPost] = useState("");
  const [msg, setMsg] = useState("");

  const staff = user?.role === "admin" || user?.role === "editor";

  const load = useCallback(async () => {
    try {
      const [a, b] = await Promise.all([
        fetch("/api/mentoria/mural", { cache: "no-store" }).then((r) => r.json()),
        fetch("/api/mentoria/inbox", { cache: "no-store" }).then((r) => r.json()),
      ]);
      setPosts(a.posts || []);
      setMsgs(b.mensagens || []);
      setUsuarios(b.destinatarios || b.usuarios || []);
    } catch {
      // Ignore network errors
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    async function init() {
      try {
        const [a, b] = await Promise.all([
          fetch("/api/mentoria/mural", { cache: "no-store" }).then((r) => r.json()),
          fetch("/api/mentoria/inbox", { cache: "no-store" }).then((r) => r.json()),
        ]);
        if (!ignore) {
          setPosts(a.posts || []);
          setMsgs(b.mensagens || []);
          setUsuarios(b.destinatarios || b.usuarios || []);
        }
      } catch {
        // Ignore
      }
    }
    void init();
    return () => {
      ignore = true;
    };
  }, []);

  async function enviar() {
    const r = await fetch("/api/mentoria/inbox", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destinatario_id: dest || undefined, mensagem: texto }),
    });
    const j = await r.json();
    if (!r.ok) return setMsg(j.error || "Erro");
    setTexto("");
    setMsg("Mensagem enviada.");
    void load();
  }

  async function publicar() {
    const r = await fetch("/api/mentoria/mural", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, mensagem: post }),
    });
    const j = await r.json();
    if (!r.ok) return setMsg(j.error || "Erro");
    setTitulo("");
    setPost("");
    setMsg("Aviso publicado.");
    void load();
  }

  const nome = (id: string) => usuarios.find((x) => x.id === id)?.nome || "Usuário";
  const alunos = usuarios.filter((x) => x.id !== user?.id);
  const inputClass = "w-full px-3 py-2 border rounded-xl bg-transparent border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100";

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <h1 className="text-3xl font-black flex items-center gap-2 text-slate-900 dark:text-white">
        <MessageSquare className="w-8 h-8 text-blue-600" />
        Mentoria e comunicação
      </h1>

      {msg && (
        <p className="p-3 border rounded-xl text-sm bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-900">
          {msg}
        </p>
      )}

      <div className="grid lg:grid-cols-2 gap-5">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-amber-500" />
              Mural
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {staff && (
              <div className="space-y-2 p-3 border rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <input
                  className={inputClass}
                  placeholder="Título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <textarea
                  className={inputClass}
                  placeholder="Aviso para os alunos"
                  rows={3}
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                />
                <Button onClick={publicar}>Publicar</Button>
              </div>
            )}
            {posts.length ? (
              posts.map((x) => (
                <div key={x.id} className="p-3 border rounded-xl border-slate-200 dark:border-slate-800">
                  <b className="text-slate-900 dark:text-slate-100">{x.titulo}</b>
                  <p className="text-sm mt-1 whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                    {x.mensagem}
                  </p>
                  <small className="text-slate-500 block mt-2">
                    {new Date(x.created_at).toLocaleString("pt-BR")}
                  </small>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">Nenhum aviso publicado.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {staff && (
              <select
                className={inputClass}
                value={dest}
                onChange={(e) => setDest(e.target.value)}
              >
                <option value="">Selecione o destinatário</option>
                {alunos.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.nome}
                  </option>
                ))}
              </select>
            )}
            <textarea
              className={inputClass}
              placeholder={staff ? "Mensagem ao aluno" : "Mensagem ao mentor"}
              rows={3}
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
            <Button
              onClick={enviar}
              disabled={!texto.trim() || (staff && !dest)}
              leftIcon={<Send className="w-4 h-4" />}
            >
              Enviar
            </Button>
            <div className="space-y-2 max-h-[480px] overflow-y-auto pt-2">
              {msgs.map((x) => (
                <div
                  key={x.id}
                  className={
                    "p-3 rounded-xl border text-sm " +
                    (x.remetente_id === user?.id
                      ? "ml-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900"
                      : "mr-8 border-slate-200 dark:border-slate-800")
                  }
                >
                  <b>{x.remetente_id === user?.id ? "Você" : nome(x.remetente_id)}</b>
                  <p className="whitespace-pre-wrap mt-1">{x.mensagem}</p>
                  <small className="text-slate-500 block mt-1">
                    {new Date(x.created_at).toLocaleString("pt-BR")}
                  </small>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
