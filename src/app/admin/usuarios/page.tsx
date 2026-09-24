"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Users,
  Shield,
  Search,
  Filter,
  GraduationCap,
  Target,
  Calendar,
  CheckCircle2,
  Edit3,
  UserCheck,
  UserX,
  Mail,
  RefreshCw,
  Award,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Profile, Concurso } from "@/types";
import { DataService } from "@/services/dataService";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function AdminUsuariosPage() {
  const [usuarios, setUsuarios] = useState<Profile[]>([]);
  const [concursos, setConcursos] = useState<Concurso[]>([]);
  const [loading, setLoading] = useState(true);

  // Filtros
  const [termoBusca, setTermoBusca] = useState("");
  const [roleFiltro, setRoleFiltro] = useState<string>("todos");
  const [concursoFiltro, setConcursoFiltro] = useState<string>("todos");
  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 10;

  // Estado de edição rápida
  const [usuarioEditando, setUsuarioEditando] = useState<Profile | null>(null);
  const [novaMeta, setNovaMeta] = useState<number>(30);
  const [novoRole, setNovoRole] = useState<"user" | "admin" | "editor">("user");
  const [novoConcursoId, setNovoConcursoId] = useState<string>("");
  const [salvandoEdicao, setSalvandoEdicao] = useState(false);

  const [feedbackMsg, setFeedbackMsg] = useState<{
    tipo: "sucesso" | "erro";
    texto: string;
  } | null>(null);

  const showFeedback = (tipo: "sucesso" | "erro", texto: string) => {
    setFeedbackMsg({ tipo, texto });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const carregarUsuarios = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (termoBusca.trim()) params.set("termo", termoBusca.trim());
      if (roleFiltro !== "todos") params.set("role", roleFiltro);
      if (concursoFiltro !== "todos") params.set("concurso_id", concursoFiltro);

      const res = await fetch(`/api/admin/usuarios?${params.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.usuarios)) {
          setUsuarios(json.usuarios);
          setLoading(false);
          return;
        }
      }

      // Fallback
      const profile = DataService.getProfile();
      setUsuarios([profile]);
    } catch {
      const profile = DataService.getProfile();
      setUsuarios([profile]);
    } finally {
      setLoading(false);
    }
  }, [termoBusca, roleFiltro, concursoFiltro]);

  useEffect(() => {
    const listaConcursos = DataService.getConcursos();
    setConcursos(listaConcursos);
    carregarUsuarios();
  }, [carregarUsuarios]);

  const handleAbrirEdicao = (u: Profile) => {
    setUsuarioEditando(u);
    setNovaMeta(u.meta_diaria_questoes || 30);
    setNovoRole(u.role || "user");
    setNovoConcursoId(u.concurso_alvo_id || "");
  };

  const handleSalvarEdicao = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuarioEditando) return;

    setSalvandoEdicao(true);
    try {
      const res = await fetch("/api/admin/usuarios", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: usuarioEditando.id,
          role: novoRole,
          meta_diaria_questoes: novaMeta,
          concurso_alvo_id: novoConcursoId || null,
        }),
      });

      if (res.ok) {
        showFeedback("sucesso", `Usuário "${usuarioEditando.nome}" atualizado com sucesso!`);
        setUsuarioEditando(null);
        carregarUsuarios();
      } else {
        showFeedback("erro", "Erro ao salvar alterações no usuário.");
      }
    } catch {
      showFeedback("erro", "Falha de rede ao atualizar usuário.");
    } finally {
      setSalvandoEdicao(false);
    }
  };

  // Métricas rápidas
  const totalUsuarios = usuarios.length;
  const totalAdmins = usuarios.filter((u) => u.role === "admin" || u.role === "editor").length;
  const totalAlunos = usuarios.filter((u) => u.role === "user" || !u.role).length;
  const mediaMetas = Math.round(
    usuarios.reduce((acc, u) => acc + (u.meta_diaria_questoes || 30), 0) / (totalUsuarios || 1)
  );

  // Paginação
  const totalPaginas = Math.ceil(usuarios.length / itensPorPagina) || 1;
  const usuariosExibidos = usuarios.slice(
    (pagina - 1) * itensPorPagina,
    pagina * itensPorPagina
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <Link
              href="/admin/questoes"
              className="hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Administração
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Gestão de Usuários
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2.5">
            <Users className="w-8 h-8 text-blue-600" />
            Gestão de Usuários e Acessos
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Gerenciamento de concurseiros cadastrados, papéis administrativos (Admin/Editor) e metas diárias
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/admin/questoes">
            <Button variant="outline" size="sm" leftIcon={<BookOpen className="w-4 h-4" />}>
              Catálogo de Questões
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={carregarUsuarios}
            leftIcon={<RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />}
          >
            Atualizar
          </Button>
        </div>
      </div>

      {/* Feedback Toast */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-2xl border text-sm font-medium flex items-center gap-2.5 animate-in fade-in duration-200 ${
            feedbackMsg.tipo === "sucesso"
              ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
              : "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300"
          }`}
        >
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{feedbackMsg.texto}</span>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Total de Contas
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-2">
            {totalUsuarios}
          </p>
          <span className="text-[11px] text-slate-400 mt-0.5 block">
            Base de concurseiros
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Alunos Concurseiros
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2">
            {totalAlunos}
          </p>
          <span className="text-[11px] text-slate-400 mt-0.5 block">
            Estudantes ativos
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Equipe / Admins
            </span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-2">
            {totalAdmins}
          </p>
          <span className="text-[11px] text-slate-400 mt-0.5 block">
            Gestores & Editores
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Média Meta Diária
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-2">
            {mediaMetas} <span className="text-sm font-normal text-slate-400">q/dia</span>
          </p>
          <span className="text-[11px] text-slate-400 mt-0.5 block">
            Ritmo planejado
          </span>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role Filter */}
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={roleFiltro}
              onChange={(e) => setRoleFiltro(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            >
              <option value="todos">Todos os Papéis (Roles)</option>
              <option value="user">Alunos (User)</option>
              <option value="admin">Administradores (Admin)</option>
              <option value="editor">Editores Pedagógicos (Editor)</option>
            </select>
          </div>

          {/* Concurso Filter */}
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={concursoFiltro}
              onChange={(e) => setConcursoFiltro(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            >
              <option value="todos">Todos os Concursos Alvo</option>
              {concursos.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.sigla} - {c.nome.substring(0, 30)}...
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Usuário</th>
                <th className="py-3 px-4">Papel / Acesso</th>
                <th className="py-3 px-4">Concurso Alvo</th>
                <th className="py-3 px-4 text-center">Meta Diária</th>
                <th className="py-3 px-4">Cadastrado Em</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {usuariosExibidos.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 font-medium">
                    Nenhum usuário encontrado com os filtros selecionados.
                  </td>
                </tr>
              ) : (
                usuariosExibidos.map((u) => {
                  const concurso = concursos.find((c) => c.id === u.concurso_alvo_id);
                  const dataCad = u.created_at
                    ? new Date(u.created_at).toLocaleDateString("pt-BR")
                    : "01/01/2024";

                  return (
                    <tr
                      key={u.id}
                      className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      {/* Nome e E-mail */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                            {u.nome?.charAt(0).toUpperCase() || "U"}
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 dark:text-slate-100 block">
                              {u.nome}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                              <Mail className="w-3 h-3 text-slate-400" />
                              {u.email}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Papel */}
                      <td className="py-3 px-4">
                        {u.role === "admin" ? (
                          <Badge variant="primary" size="sm">
                            <Shield className="w-3 h-3 mr-1" /> Administrador
                          </Badge>
                        ) : u.role === "editor" ? (
                          <Badge variant="warning" size="sm">
                            <Edit3 className="w-3 h-3 mr-1" /> Editor Pedagógico
                          </Badge>
                        ) : (
                          <Badge variant="secondary" size="sm">
                            <GraduationCap className="w-3 h-3 mr-1" /> Aluno
                          </Badge>
                        )}
                      </td>

                      {/* Concurso Alvo */}
                      <td className="py-3 px-4">
                        {concurso ? (
                          <div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                              {concurso.sigla}
                            </span>
                            <span className="text-[10px] text-slate-400 line-clamp-1">
                              {concurso.nome}
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">Geral / Não definido</span>
                        )}
                      </td>

                      {/* Meta Diária */}
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-lg text-xs">
                          <Target className="w-3 h-3" />
                          {u.meta_diaria_questoes || 30} q/dia
                        </span>
                      </td>

                      {/* Data de Cadastro */}
                      <td className="py-3 px-4 text-slate-500 dark:text-slate-400">
                        {dataCad}
                      </td>

                      {/* Ações */}
                      <td className="py-3 px-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleAbrirEdicao(u)}
                          leftIcon={<Edit3 className="w-3.5 h-3.5" />}
                        >
                          Gerenciar
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {totalPaginas > 1 && (
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>
              Mostrando {usuariosExibidos.length} de {usuarios.length} usuários
            </span>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPagina((p) => Math.max(1, p - 1))}
                disabled={pagina === 1}
              >
                Anterior
              </Button>
              <span className="px-2.5 font-bold text-slate-800 dark:text-slate-200">
                {pagina} / {totalPaginas}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
                disabled={pagina === totalPaginas}
              >
                Próxima
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Edição de Usuário */}
      {usuarioEditando && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Gerenciar Acesso do Usuário
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {usuarioEditando.nome} ({usuarioEditando.email})
                </p>
              </div>
              <button
                onClick={() => setUsuarioEditando(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSalvarEdicao} className="space-y-4">
              {/* Papel */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Papel no Sistema (Role / Permissão):
                </label>
                <select
                  value={novoRole}
                  onChange={(e) => setNovoRole(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option value="user">Aluno (Acesso Padrão)</option>
                  <option value="editor">Editor Pedagógico (Criação e Revisão)</option>
                  <option value="admin">Administrador (Acesso Irrestrito)</option>
                </select>
              </div>

              {/* Meta Diária */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Meta Diária de Questões:
                </label>
                <input
                  type="number"
                  min="5"
                  max="500"
                  value={novaMeta}
                  onChange={(e) => setNovaMeta(parseInt(e.target.value, 10) || 30)}
                  className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>

              {/* Concurso Alvo */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Concurso Alvo Principal:
                </label>
                <select
                  value={novoConcursoId}
                  onChange={(e) => setNovoConcursoId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  <option value="">Nenhum concurso específico</option>
                  {concursos.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.sigla} - {c.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setUsuarioEditando(null)}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  isLoading={salvandoEdicao}
                  rightIcon={<CheckCircle2 className="w-4 h-4" />}
                >
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
