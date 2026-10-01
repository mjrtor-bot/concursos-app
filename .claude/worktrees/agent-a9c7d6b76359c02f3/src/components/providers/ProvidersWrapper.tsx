"use client";

import React from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ConcursoProvider } from "@/contexts/ConcursoContext";
import { ToastProvider } from "@/contexts/ToastContext";

interface ProvidersWrapperProps {
  children: React.ReactNode;
}

export function ProvidersWrapper({ children }: ProvidersWrapperProps) {
  return (
    <ToastProvider>
      <AuthProvider>
        <ConcursoProvider>
          {children}
        </ConcursoProvider>
      </AuthProvider>
    </ToastProvider>
  );
}