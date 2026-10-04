import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";

function sanitizeForWinAnsi(text) {
  if (!text) return "";
  return text
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/–/g, "-")
    .replace(/—/g, "--")
    .replace(/…/g, "...")
    .replace(/•/g, "*")
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "") // Remove emojis
    .replace(/[\u{2600}-\u{27BF}]/gu, "");
}

async function testAccents() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const page = pdfDoc.addPage([595.28, 841.89]);

  const testString = sanitizeForWinAnsi(
    "Acentuação, Crase à vista, Conceituação Geral, Órgão Público, Jurisprudência do STF & STJ: “Atenção especial”."
  );

  page.drawText(testString, {
    x: 40,
    y: 800,
    size: 11,
    font: fontRegular,
    color: rgb(0.1, 0.1, 0.1),
  });

  const bytes = await pdfDoc.save();
  console.log("Teste de acentuação concluído com sucesso, tamanho:", bytes.length);
}

testAccents().catch(console.error);
