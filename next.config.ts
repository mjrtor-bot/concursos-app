import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pdf-parse carrega o worker do pdfjs por caminho relativo ao próprio pacote.
  // Se for empacotado nos chunks do servidor, o arquivo pdf.worker.mjs não é encontrado.
  serverExternalPackages: ["pdf-parse", "pdfjs-dist"],
  // Não anuncia o framework nas respostas.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // SAMEORIGIN (e não DENY) para não quebrar páginas que exibam o PDF do próprio sistema.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=()" },
          // Só tem efeito quando a página é servida por HTTPS; navegadores ignoram em HTTP.
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
    ];
  },
};

export default nextConfig;
