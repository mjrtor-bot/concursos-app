import { generateStudyPdf } from "./pdf-engine.mjs";
import fs from "fs";

async function testEngine() {
  const sampleData = {
    disciplina: "Direito Constitucional",
    assunto: "Direitos e Garantias Fundamentais (Art. 5º)",
    visaoGeral: {
      descricao:
        "O artigo 5º da Constituição Federal de 1988 estabelece o catálogo principal dos direitos individuais e coletivos no Brasil. Trata-se de cláusula pétrea (art. 60, §4º, IV) que se aplica a brasileiros natos, naturalizados e estrangeiros residentes ou em trânsito no país.",
      importancia: "Representa mais de 35% das questões de Direito Constitucional em carreiras policiais (PF, PRF, PC e PM).",
    },
    doutrina: [
      {
        titulo: "Destinatários dos Direitos Fundamentais",
        conteudo:
          "O STF possui entendimento pacificado de que os direitos fundamentais alcançam brasileiros (natos e naturalizados), estrangeiros residentes no país, estrangeiros em trânsito e também pessoas jurídicas (naquilo que couber, como direito à honra objetiva e imagem).",
      },
      {
        titulo: "Inviolabilidade de Domicílio (Art. 5º, XI)",
        conteudo:
          "A casa é asilo inviolável do indivíduo. Regra: ninguém nela pode penetrar sem consentimento do morador. Exceções a qualquer hora do dia ou da noite: flagrante delito, desastre ou para prestar socorro. Exceção exclusiva durante o dia: determinação judicial (critério solar/psicofísico ou das 05h às 21h conforme Lei de Abuso de Autoridade).",
      },
      {
        titulo: "Remédios Constitucionais (Garantias)",
        conteudo:
          "Habeas Corpus (protege liberdade de locomoção, ação gratuita, não exige advogado); Mandado de Segurança (protege direito líquido e certo não amparado por HC ou HD, prazo decadencial de 120 dias); Habeas Data (acesso/retificação de informações pessoais em bancos de dados governamentais/públicos, gratuito, exige recusa administrativa prévia - Súmula 2 do STJ); Mandado de Injunção (falta de norma regulamentadora inviabilizando direito constitucional); Ação Popular (anulação de ato lesivo ao patrimônio público, moralidade, meio ambiente, exclusiva de cidadão com título eleitoral).",
      },
    ],
    legislacao: [
      {
        referencia: "CF/88, Art. 5º, XI",
        dispositivo:
          "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      },
      {
        referencia: "CF/88, Art. 5º, LVI",
        dispositivo: "São inadmissíveis, no processo, as provas obtidas por meios ilícitos.",
      },
      {
        referencia: "Súmula Vinculante 11 (STF)",
        dispositivo:
          "Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito.",
      },
    ],
    pegadinhas: [
      "A banca afirma que estrangeiro em trânsito não possui direitos fundamentais: FALSO, o STF estende as garantias básicas.",
      "A banca afirma que mandado de busca domiciliar pode ser cumprido à noite se houver ordem do juiz: FALSO, ordem judicial somente durante o dia.",
      "A banca afirma que pessoa jurídica pode impetrar Habeas Corpus em favor de si mesma: FALSO, PJ não tem liberdade de locomoção física.",
      "A banca afirma que o Habeas Data pode ser ajuizado sem recusa administrativa: FALSO, exige prova de recusa (Súmula 2 STJ).",
    ],
    roteiro: [
      "Leitura atenta dos incisos I a LXXIX do Artigo 5º da CF/88 (Lei Seca).",
      "Memorização da tabela comparativa dos Remédios Constitucionais e seus requisitos.",
      "Resolução de 30 questões comentadas focando em pegadinhas de banca sobre inviolabilidade domiciliar e interceptação telefônica.",
      "Revisão ativa das Súmulas Vinculantes 11 (algemas), 14 (defensor/inquérito) e 25 (depositário infiel).",
    ],
  };

  const pdfBytes = await generateStudyPdf(sampleData);
  fs.writeFileSync("test-study-guide.pdf", pdfBytes);
  console.log("PDF gerado com sucesso! Tamanho:", pdfBytes.length, "bytes");
}

testEngine().catch(console.error);
