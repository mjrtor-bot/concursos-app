import { PDFParse } from "pdf-parse";

// Leitura de texto de PDF com teto de custo: no máximo MAX_SIMULTANEOS leituras ao
// mesmo tempo no processo e TEMPO_MAX_MS por leitura. Evita que uploads ou extrações
// seguidas (ou um PDF malicioso) travem o servidor.

export class PdfOcupadoError extends Error {
  constructor() {
    super("Servidor ocupado processando outros PDFs.");
    this.name = "PdfOcupadoError";
  }
}

export class PdfTempoEsgotadoError extends Error {
  constructor() {
    super("A leitura do PDF excedeu o tempo limite.");
    this.name = "PdfTempoEsgotadoError";
  }
}

const MAX_SIMULTANEOS = 2;
const TEMPO_MAX_MS = 90_000;
let emUso = 0;

export async function extrairTextoPdf(dados: Uint8Array): Promise<{ texto: string; paginas: number }> {
  if (emUso >= MAX_SIMULTANEOS) throw new PdfOcupadoError();
  emUso += 1;
  let liberado = false;
  const liberar = () => {
    if (!liberado) {
      liberado = true;
      emUso -= 1;
    }
  };
  let timer: ReturnType<typeof setTimeout> | undefined;
  let parser: PDFParse | undefined;
  let trabalho: ReturnType<PDFParse["getText"]> | undefined;
  try {
    parser = new PDFParse({ data: dados });
    trabalho = parser.getText();
    const limite = new Promise<never>((_, rejeitar) => {
      timer = setTimeout(() => rejeitar(new PdfTempoEsgotadoError()), TEMPO_MAX_MS);
    });
    const resultado = await Promise.race([trabalho, limite]);
    return { texto: resultado.text, paginas: resultado.total };
  } finally {
    if (timer) clearTimeout(timer);
    liberar();
    const analisador = parser;
    if (analisador && trabalho) {
      // Libera o parser quando o trabalho realmente terminar (ou falhar), mesmo após timeout.
      trabalho.then(
        () => analisador.destroy(),
        () => analisador.destroy()
      ).catch(() => undefined);
    } else if (analisador) {
      analisador.destroy().catch(() => undefined);
    }
  }
}
