"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDevelopment) {
      console.error("[AppRouter] Erro de renderização", {
        name: error.name,
        message: error.message,
        digest: error.digest,
      });
    }
  }, [error, isDevelopment]);

  return (
    <div className="flex min-h-[400px] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-4 rounded-2xl border border-rose-200 bg-white p-6 text-center shadow-sm dark:border-rose-900/60 dark:bg-slate-900">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="space-y-1.5">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Não foi possível carregar esta página
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Tente novamente. Se o problema continuar, volte mais tarde.
          </p>
          {isDevelopment && error.digest && (
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Diagnóstico: {error.digest}
            </p>
          )}
        </div>
        <Button
          type="button"
          onClick={reset}
          leftIcon={<RotateCcw className="h-4 w-4" />}
        >
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}
