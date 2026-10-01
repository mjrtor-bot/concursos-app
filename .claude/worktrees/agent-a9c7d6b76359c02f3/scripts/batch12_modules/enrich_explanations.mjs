import { writeModule } from "./builder.mjs";
import { transito01Questoes } from "./transito_01.mjs";
import { transito02Questoes } from "./transito_02.mjs";
import { criminologia01Questoes } from "./criminologia_01.mjs";
import { criminologia02Questoes } from "./criminologia_02.mjs";
import { info01Questoes } from "./info_01.mjs";
import { info02Questoes } from "./info_02.mjs";
import { rlm01Questoes } from "./rlm_01.mjs";
import { rlm02Questoes } from "./rlm_02.mjs";
import { dh01Questoes } from "./dh_01.mjs";
import { dh02Questoes } from "./dh_02.mjs";
import { penal01Questoes } from "./penal_01.mjs";
import { penal02Questoes } from "./penal_02.mjs";
import { procPenal01Questoes } from "./proc_penal_01.mjs";
import { procPenal02Questoes } from "./proc_penal_02.mjs";
import { const01Questoes } from "./const_01.mjs";
import { const02Questoes } from "./const_02.mjs";
import { adm01Questoes } from "./adm_01.mjs";
import { adm02Questoes } from "./adm_02.mjs";
import { legEsp01Questoes } from "./leg_esp_01.mjs";
import { legEsp02Questoes } from "./leg_esp_02.mjs";
import { port01Questoes } from "./portugues_01.mjs";
import { port02Questoes } from "./portugues_02.mjs";

const modules = [
  ["transito_01.mjs", "transito01Questoes", transito01Questoes, "Trânsito"],
  ["transito_02.mjs", "transito02Questoes", transito02Questoes, "Trânsito"],
  ["criminologia_01.mjs", "criminologia01Questoes", criminologia01Questoes, "Criminologia"],
  ["criminologia_02.mjs", "criminologia02Questoes", criminologia02Questoes, "Criminologia"],
  ["info_01.mjs", "info01Questoes", info01Questoes, "Informática"],
  ["info_02.mjs", "info02Questoes", info02Questoes, "Informática"],
  ["rlm_01.mjs", "rlm01Questoes", rlm01Questoes, "RLM"],
  ["rlm_02.mjs", "rlm02Questoes", rlm02Questoes, "RLM"],
  ["dh_01.mjs", "dh01Questoes", dh01Questoes, "Direitos Humanos"],
  ["dh_02.mjs", "dh02Questoes", dh02Questoes, "Direitos Humanos"],
  ["penal_01.mjs", "penal01Questoes", penal01Questoes, "Direito Penal"],
  ["penal_02.mjs", "penal02Questoes", penal02Questoes, "Direito Penal"],
  ["proc_penal_01.mjs", "procPenal01Questoes", procPenal01Questoes, "Processo Penal"],
  ["proc_penal_02.mjs", "procPenal02Questoes", procPenal02Questoes, "Processo Penal"],
  ["const_01.mjs", "const01Questoes", const01Questoes, "Direito Constitucional"],
  ["const_02.mjs", "const02Questoes", const02Questoes, "Direito Constitucional"],
  ["adm_01.mjs", "adm01Questoes", adm01Questoes, "Direito Administrativo"],
  ["adm_02.mjs", "adm02Questoes", adm02Questoes, "Direito Administrativo"],
  ["leg_esp_01.mjs", "legEsp01Questoes", legEsp01Questoes, "Legislação Especial"],
  ["leg_esp_02.mjs", "legEsp02Questoes", legEsp02Questoes, "Legislação Especial"],
  ["portugues_01.mjs", "port01Questoes", port01Questoes, "Língua Portuguesa"],
  ["portugues_02.mjs", "port02Questoes", port02Questoes, "Língua Portuguesa"],
];

function getFundamento(materia, q) {
  switch (materia) {
    case "Trânsito":
      return "Fundamentação: Código de Trânsito Brasileiro (Lei nº 9.503/1997) e Resoluções vigentes do CONTRAN.";
    case "Criminologia":
      return "Fundamentação: Doutrina criminológica contemporânea, teorias sociológicas do crime e princípios de prevenção criminal.";
    case "Informática":
      return "Fundamentação: Padrões técnicos de segurança da informação (ISO/IEC 27001/27002), arquitetura TCP/IP e normas de computação forense.";
    case "RLM":
      return "Fundamentação: Princípios da lógica formal proposicional, teoria dos conjuntos e métodos analíticos de dedução lógica.";
    case "Direitos Humanos":
      return "Fundamentação: Declaração Universal dos Direitos Humanos, Convenção Americana sobre Direitos Humanos (Pacto de San José) e jurisprudência da Corte IDH.";
    case "Direito Penal":
      return "Fundamentação: Código Penal (Decreto-Lei nº 2.848/1940), doutrina penal finalista e jurisprudência pacificada do STF e STJ.";
    case "Processo Penal":
      return "Fundamentação: Código de Processo Penal (Decreto-Lei nº 3.689/1941 com alterações da Lei nº 13.964/2019) e súmulas dos Tribunais Superiores.";
    case "Direito Constitucional":
      return "Fundamentação: Constituição da República Federativa do Brasil de 1988, garantias fundamentais e súmulas vinculantes do STF.";
    case "Direito Administrativo":
      return "Fundamentação: Princípios constitucionais da Administração Pública (CF/88, art. 37), Lei nº 14.133/2021 e Lei de Improbidade (Lei nº 8.429/1992).";
    case "Legislação Especial":
      return "Fundamentação: Microssistema penal extravagante e legislação de segurança pública vigente no ordenamento jurídico brasileiro.";
    case "Língua Portuguesa":
      return "Fundamentação: Norma-padrão da Língua Portuguesa, gramática normativa e regras ortográficas do Acordo Ortográfico vigente.";
    default:
      return "Fundamentação: Ordenamento jurídico e técnico aplicável às carreiras policiais.";
  }
}

for (const [file, exportName, questions, materia] of modules) {
  const updated = questions.map((q) => {
    let exp = q.explicacao.trim();
    const fund = getFundamento(materia, q);
    if (!exp.includes("Fundamentação:")) {
      exp = `${exp} ${fund}`;
    }
    return { ...q, explicacao: exp };
  });
  writeModule(file, exportName, updated);
}
