"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Concurso, Cargo } from "@/types";
import { DataService } from "@/services/dataService";
import { calcularPrazoProva, PrazoProva } from "@/lib/prazoProva";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";

interface ConcursoContextType {
  concursoAtivo: Concurso | null;
  cargoAtivo: Cargo | null;
  concursos: Concurso[];
  cargosDoConcurso: Cargo[];
  prazoProva: PrazoProva;
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
    const frame = window.requestAnimationFrame(() => {
      setConcursos(DataService.getConcursos());
      const savedId = DataService.getConcursoAtivoId();
      if (savedId) setConcursoAtivoId(savedId);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (user?.concurso_alvo_id) setConcursoAtivoId(user.concurso_alvo_id);
      if (user?.cargo_alvo_id) setCargoAtivoId(user.cargo_alvo_id);
    });
    return () => window.cancelAnimationFrame(frame);
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

  const prazoProva = React.useMemo(
    () => calcularPrazoProva(concursoAtivo?.data_prova),
    [concursoAtivo?.data_prova]
  );

  return (
    <ConcursoContext.Provider
      value={{
        concursoAtivo,
        cargoAtivo,
        concursos,
        cargosDoConcurso,
        prazoProva,
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
