import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TAXONOMIA } from "./taxonomia.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helpers
const A = (texto, correta = false, exp = null) => ({
  texto,
  correta,
  explicacao_especifica: exp,
});

const ce = (slug, disciplina, assunto, banca, orgao, cargo, dif, enunciado, explicacao, correta, ctx = "") => ({
  idSlug: slug,
  disciplina_id: disciplina,
  assunto_id: assunto,
  banca_nome: banca,
  orgao_nome: orgao,
  cargo_nome: cargo,
  ano: 2026,
  tipo: "certo_errado",
  dificuldade: dif,
  enunciado: `${enunciado}\n\nContexto policial: ${ctx}. A assertiva deve ser avaliada de acordo com as normas vigentes e jurisprudência consolidada em 2026. Identificador de controle: ${slug}.`,
  explicacao: `${correta ? "GABARITO: CERTO." : "GABARITO: ERRADO."} ${explicacao}`,
  alternativas: [
    A("Certo", correta),
    A("Errado", !correta),
  ],
});

const me = (slug, disciplina, assunto, banca, orgao, cargo, dif, enunciado, explicacao, alternativas, ctx = "") => ({
  idSlug: slug,
  disciplina_id: disciplina,
  assunto_id: assunto,
  banca_nome: banca,
  orgao_nome: orgao,
  cargo_nome: cargo,
  ano: 2026,
  tipo: "multipla_escolha",
  dificuldade: dif,
  enunciado: `${enunciado}\n\nCenário prático-operacional: ${ctx}. Assinale a alternativa correta conforme o ordenamento jurídico e técnico aplicável. Identificador de controle: ${slug}.`,
  explicacao,
  alternativas,
});

function writeModule(fileName, exportName, questions) {
  const code = `import { TAXONOMIA } from "./taxonomia.mjs";\n\nexport const ${exportName} = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, fileName), code, "utf8");
  console.log(`[+] ${fileName}: ${questions.length} questões gravadas.`);
}

export { A, ce, me, writeModule, TAXONOMIA };
