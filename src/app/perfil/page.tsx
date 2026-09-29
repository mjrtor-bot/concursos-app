"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useConcurso } from "@/contexts/ConcursoContext";
import { useToast } from "@/contexts/ToastContext";
import {
  User,
  Mail,
  Target,
  Sparkles,
  Check,
  Save,
  Award,
} from "lucide-react";

export default function PerfilPage() {
  const { user, updateUser } = useAuth();
  const { concursos, concursoAtivo, selecionarConcursoAtivo } = useConcurso();
  const { success, info } = useToast();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [metaDiaria, setMetaDiaria] = useState(30);

  useEffect(() => {
    if (user) {
      setNome(user.nome || "");
      setEmail(user.email || "");
      setMetaDiaria(user.meta_diaria_questoes || 30);
    }
  }, [user]);

  const handleSalvarPerfil = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultado = await updateUser({
      nome: nome.trim(),
      email: email.trim(),
      meta_diaria_questoes: Number(metaDiaria),
    });
    if (resultado.success) {
      success("Perfil e preferências atualizados com sucesso!");
    } else {
      info(resultado.error || "Não foi possível atualizar o perfil.");
    }
  };



  return (
    <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Meu Perfil & Configurações
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Personalize suas informações, metas diárias e preferências de estudo
          </p>
        </div>

        {/* Profile Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <CardTitle>Dados Pessoais & Metas</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSalvarPerfil} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Meta Diária de Questões
                  </label>
                  <select
                    value={metaDiaria}
                    onChange={(e) => setMetaDiaria(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                  >
                    <option value={10}>10 questões / dia (Ritmo Leve)</option>
                    <option value={20}>20 questões / dia (Moderado)</option>
                    <option value={30}>30 questões / dia (Recomendado)</option>
                    <option value={50}>50 questões / dia (Intensivo)</option>
                    <option value={100}>100 questões / dia (Hardcore)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Concurso Alvo Principal
                  </label>
                  <select
                    value={concursoAtivo?.id || ""}
                    onChange={(e) => selecionarConcursoAtivo(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100"
                  >
                    {concursos.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.sigla} - {c.nome}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  size="md"
                  leftIcon={<Save className="w-4 h-4" />}
                >
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>


      </div>
  );
}
