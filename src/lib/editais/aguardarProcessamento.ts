export async function aguardarProcessamento(
  editalUsuarioId: string,
  onProgress: (msg: string) => void
): Promise<Record<string, unknown>> {
  for (let tentativa = 0; tentativa < 300; tentativa++) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const sr = await fetch(`/api/editais/processar/status?edital_usuario_id=${encodeURIComponent(editalUsuarioId)}`, { cache: "no-store" });
    const sj = await sr.json();

    if (!sr.ok) {
      throw new Error(sj.error || "Falha ao consultar o processamento do PDF");
    }

    if (sj.done) {
      if (!sj.ok || sj.status === "erro" || sj.status === "revisao_sem_conteudo") {
        throw new Error(sj.error || sj.aviso || "Nenhum conteúdo programático foi encontrado no PDF.");
      }
      return sj;
    }

    onProgress("Analisando o PDF completo... aguarde. O processamento continua mesmo enquanto esta tela consulta o andamento.");
  }
  throw new Error("A análise ainda está em andamento. Atualize a página em alguns instantes para continuar.");
}
