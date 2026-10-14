import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pdf-parse carrega o worker do pdfjs por caminho relativo ao próprio pacote.
  // Se for empacotado nos chunks do servidor, o arquivo pdf.worker.mjs não é encontrado.
  serverExternalPackages: ["pdf-parse", "pdfjs-dist"],
};

export default nextConfig;
