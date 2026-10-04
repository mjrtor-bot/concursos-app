import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

/**
 * Sanitiza texto para compatibilidade com WinAnsiEncoding da fonte padrão Helvetica do PDF.
 */
export function sanitizeWinAnsi(text) {
  if (!text) return "";
  return String(text)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/–/g, "-")
    .replace(/—/g, "--")
    .replace(/…/g, "...")
    .replace(/•/g, "*")
    .replace(/[§]/g, "Art.")
    .replace(/[º°]/g, "o")
    .replace(/[ª]/g, "a")
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
    .replace(/[\u{2600}-\u{27BF}]/gu, "")
    .replace(/[\u{2000}-\u{206F}]/gu, " ")
    .replace(/[\u{FE00}-\u{FE0F}]/gu, "");
}

/**
 * Quebra uma linha de texto para que ela caiba na largura máxima especificada.
 */
function wrapText(text, font, fontSize, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      // Se a palavra sozinha for maior que a linha (raro), quebra ela
      if (font.widthOfTextAtSize(word, fontSize) > maxWidth) {
        let partial = "";
        for (const char of word) {
          if (font.widthOfTextAtSize(partial + char, fontSize) <= maxWidth) {
            partial += char;
          } else {
            lines.push(partial);
            partial = char;
          }
        }
        currentLine = partial;
      } else {
        currentLine = word;
      }
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

/**
 * Constrói um documento PDF estruturado, com múltiplas páginas, cabeçalho institucional, seções e rodapé.
 */
export async function generateStudyPdf({
  disciplina,
  assunto,
  visaoGeral,
  doutrina,
  legislacao,
  pegadinhas,
  roteiro,
}) {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const pageWidth = 595.28; // A4
  const pageHeight = 841.89;
  const marginX = 40;
  const contentWidth = pageWidth - marginX * 2;

  let pages = [];
  let currentPage = null;
  let cursorY = 0;

  function addNewPage(isFirstPage = false) {
    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    pages.push(page);
    currentPage = page;

    if (isFirstPage) {
      // Top Header Banner (Navy)
      page.drawRectangle({
        x: 0,
        y: pageHeight - 85,
        width: pageWidth,
        height: 85,
        color: rgb(0.06, 0.12, 0.22), // Deep Navy
      });

      // Gold Accent Bar
      page.drawRectangle({
        x: 0,
        y: pageHeight - 88,
        width: pageWidth,
        height: 3,
        color: rgb(0.85, 0.65, 0.22), // Gold
      });

      // Header Tagline
      page.drawText(sanitizeWinAnsi("MENTORIA CARREIRAS POLICIAIS & CONCURSOS PUBLICOS"), {
        x: marginX,
        y: pageHeight - 30,
        size: 8.5,
        font: fontBold,
        color: rgb(0.85, 0.65, 0.22),
      });

      // Disciplina & Assunto
      const discTitle = sanitizeWinAnsi(disciplina.toUpperCase());
      page.drawText(discTitle, {
        x: marginX,
        y: pageHeight - 48,
        size: 13,
        font: fontBold,
        color: rgb(1, 1, 1),
      });

      const assuntoTitle = sanitizeWinAnsi(assunto);
      const safeAssuntoTitle = fontBold.widthOfTextAtSize(assuntoTitle, 10) > contentWidth
        ? assuntoTitle.substring(0, 75) + "..."
        : assuntoTitle;

      page.drawText(`Topico: ${safeAssuntoTitle}`, {
        x: marginX,
        y: pageHeight - 68,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.85, 0.88, 0.95),
      });

      cursorY = pageHeight - 110;
    } else {
      // Small Header for subsequent pages
      page.drawRectangle({
        x: 0,
        y: pageHeight - 35,
        width: pageWidth,
        height: 35,
        color: rgb(0.06, 0.12, 0.22),
      });

      page.drawRectangle({
        x: 0,
        y: pageHeight - 37,
        width: pageWidth,
        height: 2,
        color: rgb(0.85, 0.65, 0.22),
      });

      page.drawText(sanitizeWinAnsi(`${disciplina.toUpperCase()} - ${assunto}`), {
        x: marginX,
        y: pageHeight - 22,
        size: 8,
        font: fontBold,
        color: rgb(0.9, 0.9, 0.9),
      });

      cursorY = pageHeight - 55;
    }

    return page;
  }

  // Inicia primeira página
  addNewPage(true);

  function checkPageOverflow(requiredHeight) {
    if (cursorY - requiredHeight < 55) {
      addNewPage(false);
    }
  }

  function drawSectionHeader(title, badgeText = "") {
    checkPageOverflow(32);
    cursorY -= 8;

    // Header container with soft background
    currentPage.drawRectangle({
      x: marginX,
      y: cursorY - 18,
      width: contentWidth,
      height: 22,
      color: rgb(0.92, 0.95, 0.98),
      borderColor: rgb(0.75, 0.82, 0.92),
      borderWidth: 0.8,
    });

    // Left accent vertical bar
    currentPage.drawRectangle({
      x: marginX,
      y: cursorY - 18,
      width: 4,
      height: 22,
      color: rgb(0.08, 0.24, 0.48),
    });

    currentPage.drawText(sanitizeWinAnsi(title.toUpperCase()), {
      x: marginX + 12,
      y: cursorY - 12,
      size: 9.5,
      font: fontBold,
      color: rgb(0.06, 0.15, 0.30),
    });

    if (badgeText) {
      const badgeClean = sanitizeWinAnsi(badgeText);
      const bWidth = fontBold.widthOfTextAtSize(badgeClean, 7.5) + 12;
      currentPage.drawRectangle({
        x: marginX + contentWidth - bWidth - 6,
        y: cursorY - 15,
        width: bWidth,
        height: 15,
        color: rgb(0.85, 0.65, 0.22),
      });
      currentPage.drawText(badgeClean, {
        x: marginX + contentWidth - bWidth,
        y: cursorY - 11,
        size: 7.5,
        font: fontBold,
        color: rgb(0.05, 0.05, 0.05),
      });
    }

    cursorY -= 26;
  }

  function drawParagraph(text, { font = fontRegular, size = 9, color = rgb(0.18, 0.20, 0.24), indent = 0, lineSpacing = 13 } = {}) {
    if (!text) return;
    const clean = sanitizeWinAnsi(text);
    const lines = wrapText(clean, font, size, contentWidth - indent);

    for (const line of lines) {
      checkPageOverflow(lineSpacing);
      currentPage.drawText(line, {
        x: marginX + indent,
        y: cursorY,
        size,
        font,
        color,
      });
      cursorY -= lineSpacing;
    }
    cursorY -= 3;
  }

  function drawBulletPoint(title, text, { size = 8.5 } = {}) {
    const fullText = title ? `${title}: ${text}` : text;
    const clean = sanitizeWinAnsi(fullText);
    const lines = wrapText(clean, fontRegular, size, contentWidth - 14);

    checkPageOverflow(lines.length * 12 + 4);

    // Bullet icon / dot
    currentPage.drawRectangle({
      x: marginX + 2,
      y: cursorY + 2,
      width: 3.5,
      height: 3.5,
      color: rgb(0.85, 0.65, 0.22),
    });

    for (let i = 0; i < lines.length; i++) {
      checkPageOverflow(12);
      if (i === 0 && title) {
        // Draw first line with bold prefix if possible
        const cleanTitle = sanitizeWinAnsi(`${title}: `);
        const titleW = fontBold.widthOfTextAtSize(cleanTitle, size);
        if (titleW < contentWidth - 25) {
          currentPage.drawText(cleanTitle, {
            x: marginX + 12,
            y: cursorY,
            size,
            font: fontBold,
            color: rgb(0.08, 0.18, 0.32),
          });
          const rest = lines[0].substring(cleanTitle.length);
          currentPage.drawText(rest, {
            x: marginX + 12 + titleW,
            y: cursorY,
            size,
            font: fontRegular,
            color: rgb(0.2, 0.22, 0.26),
          });
        } else {
          currentPage.drawText(lines[i], {
            x: marginX + 12,
            y: cursorY,
            size,
            font: fontRegular,
            color: rgb(0.2, 0.22, 0.26),
          });
        }
      } else {
        currentPage.drawText(lines[i], {
          x: marginX + 12,
          y: cursorY,
          size,
          font: fontRegular,
          color: rgb(0.2, 0.22, 0.26),
        });
      }
      cursorY -= 12;
    }
    cursorY -= 3;
  }

  function drawCalloutBox(title, items, type = "dica") {
    const isPegadinha = type === "pegadinha";
    const bgCol = isPegadinha ? rgb(0.99, 0.95, 0.95) : rgb(0.95, 0.98, 0.95);
    const borderCol = isPegadinha ? rgb(0.90, 0.65, 0.65) : rgb(0.65, 0.85, 0.65);
    const barCol = isPegadinha ? rgb(0.82, 0.20, 0.20) : rgb(0.18, 0.60, 0.28);
    const titleCol = isPegadinha ? rgb(0.65, 0.12, 0.12) : rgb(0.12, 0.45, 0.20);

    // Calculate approximate height
    let totalLines = 1;
    for (const item of items) {
      const clean = sanitizeWinAnsi(item);
      totalLines += wrapText(clean, fontRegular, 8, contentWidth - 28).length;
    }
    const boxHeight = totalLines * 11.5 + 16;

    checkPageOverflow(boxHeight + 8);
    cursorY -= 6;

    const boxTop = cursorY;

    currentPage.drawRectangle({
      x: marginX,
      y: boxTop - boxHeight,
      width: contentWidth,
      height: boxHeight,
      color: bgCol,
      borderColor: borderCol,
      borderWidth: 0.8,
    });

    currentPage.drawRectangle({
      x: marginX,
      y: boxTop - boxHeight,
      width: 4,
      height: boxHeight,
      color: barCol,
    });

    currentPage.drawText(sanitizeWinAnsi(title), {
      x: marginX + 12,
      y: boxTop - 12,
      size: 8.5,
      font: fontBold,
      color: titleCol,
    });

    let itemY = boxTop - 24;
    for (const item of items) {
      const clean = sanitizeWinAnsi(item);
      const lines = wrapText(clean, fontRegular, 8, contentWidth - 28);
      for (const line of lines) {
        currentPage.drawText(line, {
          x: marginX + 16,
          y: itemY,
          size: 8,
          font: fontRegular,
          color: rgb(0.18, 0.20, 0.22),
        });
        itemY -= 11;
      }
      itemY -= 2;
    }

    cursorY = boxTop - boxHeight - 8;
  }

  // --- MONTAGEM DO CONTEÚDO ---

  // 1. VISÃO GERAL
  drawSectionHeader("1. Enquadramento e Visao Geral do Tema", "ALTA INCIDENCIA");
  drawParagraph(visaoGeral.descricao);
  if (visaoGeral.importancia) {
    drawParagraph(`Incidencia em Provas: ${visaoGeral.importancia}`, {
      font: fontOblique,
      size: 8.5,
      color: rgb(0.3, 0.35, 0.45),
    });
  }

  // 2. DOUTRINA & CONCEITOS FUNDAMENTAIS
  drawSectionHeader("2. Conceitos Fundamentais & Esquematizacao");
  for (const item of doutrina) {
    drawBulletPoint(item.titulo, item.conteudo);
  }

  // 3. LEGISLAÇÃO / DISPOSITIVOS CRÍTICOS
  if (legislacao && legislacao.length > 0) {
    drawSectionHeader("3. Dispositivos Legais & Normas Aplicaveis", "LEI SECA");
    for (const leg of legislacao) {
      drawBulletPoint(leg.referencia, leg.dispositivo);
    }
  }

  // 4. PEGADINHAS DE PROVA & JURISPRUDÊNCIA / MACETES
  if (pegadinhas && pegadinhas.length > 0) {
    drawSectionHeader("4. Pegadinhas de Prova & Estrategia de Banca", "ATENCAO");
    drawCalloutBox("COMO AS BANCAS TENTAM TE ENGANAR:", pegadinhas, "pegadinha");
  }

  // 5. ROTEIRO DE ESTUDO ATIVO E FIXAÇÃO
  if (roteiro && roteiro.length > 0) {
    drawSectionHeader("5. Roteiro de Fixacao & Estudo Ativo");
    for (let i = 0; i < roteiro.length; i++) {
      drawBulletPoint(`Passo ${i + 1}`, roteiro[i]);
    }
  }

  // Desenhar rodapé em todas as páginas
  const totalPages = pages.length;
  for (let pIndex = 0; pIndex < totalPages; pIndex++) {
    const page = pages[pIndex];
    page.drawLine({
      start: { x: marginX, y: 35 },
      end: { x: pageWidth - marginX, y: 35 },
      thickness: 0.5,
      color: rgb(0.8, 0.85, 0.9),
    });

    page.drawText(
      sanitizeWinAnsi("Material Exclusivo para Concursos e Carreiras Policiais - Todos os direitos reservados"),
      {
        x: marginX,
        y: 22,
        size: 7.5,
        font: fontRegular,
        color: rgb(0.5, 0.55, 0.6),
      }
    );

    const pageNumText = `Pagina ${pIndex + 1} de ${totalPages}`;
    const numWidth = fontRegular.widthOfTextAtSize(pageNumText, 7.5);
    page.drawText(pageNumText, {
      x: pageWidth - marginX - numWidth,
      y: 22,
      size: 7.5,
      font: fontBold,
      color: rgb(0.3, 0.35, 0.45),
    });
  }

  return await pdfDoc.save();
}
