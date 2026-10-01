"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Concurso, Cargo } from "@/types";
import { DataService } from "@/services/dataService";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";

interface ConcursoContextType {
  concursoAtivo: Concurso | null;
  cargoAtivo: Cargo | null;
  concursos: Concurso[];
  cargosDoConcurso: Cargo[];
  diasAteAProva: number | null;
  selecionarConcursoAtivo: (concursoId: string) => void;
  selecionarCargoAtivo: (cargoId: string) => void;
}

const ConcursoContext = createContext<ConcursoContextType | undefined>(undefined);

export function ConcursoProvider({ children }: { children: React.ReactNode }) {
  const { user, updateUser } = useAuth();
  const { success } = useToast();
  const [concursos, setConcursos] = useState<Concurso[]>([]);
  const [concursoAtivoId, setConcursoAtivoId] = useState<string>("concurso-cnu-2024");
  const [cargoAtivoId, setCargoAtivoId] = useState<string | null>(null);

  useEffect(() => {
    const list = DataService.getConcursos();
    setConcursos(list);

    const savedId = DataService.getConcursoAtivoId();
    if (savedId) {
      setConcursoAtivoId(savedId);
    }
  }, []);

  useEffect(() => {
    if (user?.concurso_alvo_id && user.concurso_alvo_id !== concursoAtivoId) {
      setConcursoAtivoId(user.concurso_alvo_id);
    }
    if (user?.cargo_alvo_id) {
      setCargoAtivoId(user.cargo_alvo_id);
    }
  }, [user]);

  const concursoAtivo =
    concursos.find((c) => c.id === concursoAtivoId) || concursos[0] || null;

  const cargosDoConcurso = concursoAtivo
    ? DataService.getCargos(concursoAtivo.id)
    : [];

  const cargoAtivo =
    cargosDoConcurso.find((c) => c.id === cargoAtivoId) ||
    cargosDoConcurso[0] ||
    null;

  const selecionarConcursoAtivo = (id: string) => {
    setConcursoAtivoId(id);
    DataService.setConcursoAtivoId(id);
    updateUser({ concurso_alvo_id: id });
    const c = concursos.find((item) => item.id === id);
    if (c) {
      success(`Concurso Ativo alterado para ${c.sigla || c.nome}`);
    }
  };

  const selecionarCargoAtivo = (cargoId: string) => {
    setCargoAtivoId(cargoId);
    updateUser({ cargo_alvo_id: cargoId });
    const cargo = cargosDoConcurso.find((c) => c.id === cargoId);
    if (cargo) {
      success(`Cargo alterado para ${cargo.nome}`);
    }
  };

  // Calculate days to exam
  const diasAteAProva: number | null = React.useMemo(() => {
    if (!concursoAtivo?.data_prova) return null;
    const dataProva = new Date(concursoAtivo.data_prova);
    const hoje = new Date();
    const diffTime = dataProva.getTime() - hoje.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  }, [concursoAtivo]);

  return (
    <ConcursoContext.Provider
      value={{
        concursoAtivo,
        cargoAtivo,
        concursos,
        cargosDoConcurso,
        diasAteAProva,
        selecionarConcursoAtivo,
        selecionarCargoAtivo,
      }}
    >
      {children}
    </ConcursoContext.Provider>
  );
}

export function useConcurso() {
  const context = useContext(ConcursoContext);
  if (!context) {
    throw new Error("useConcurso must be used within a ConcursoProvider");
  }
  return context;
}
