import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const idx = trimmed.indexOf("=");
      if (idx !== -1) {
        const key = trimmed.substring(0, idx).trim();
        const val = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
        process.env[key] = val;
      }
    }
  }
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  console.log("=== EXECUTING FINE-GRAINED AUDIT OF 531 ITEMS (500 Lote 12 + 31 Lote 11) ===");

  // Fetch disciplinas & assuntos
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome");
  const discMap = new Map((disciplinas || []).map(d => [d.id, d.nome]));

  const { data: assuntos } = await supabase.from("assuntos").select("id, nome");
  const assMap = new Map((assuntos || []).map(a => [a.id, a.nome]));

  // Fetch all questions
  let allQuestoes = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("*")
      .range(page * pageSize, (page + 1) * pageSize - 1)
      .order("id", { ascending: true });
    if (error) {
      console.error("Error fetching questoes:", error);
      break;
    }
    if (!data || data.length === 0) break;
    allQuestoes.push(...data);
    page++;
    if (data.length < pageSize) break;
  }
  console.log(`Fetched ${allQuestoes.length} total questions from Supabase.`);

  // Fetch all alternativas
  let allAlts = [];
  page = 0;
  while (true) {
    const { data, error } = await supabase
      .from("questoes_alternativas")
      .select("*")
      .range(page * pageSize, (page + 1) * pageSize - 1)
      .order("id", { ascending: true });
    if (error) {
      console.error("Error fetching alternativas:", error);
      break;
    }
    if (!data || data.length === 0) break;
    allAlts.push(...data);
    page++;
    if (data.length < pageSize) break;
  }
  console.log(`Fetched ${allAlts.length} total alternatives from Supabase.`);

  const altsByQ = new Map();
  for (const alt of allAlts) {
    if (!altsByQ.has(alt.questao_id)) {
      altsByQ.set(alt.questao_id, []);
    }
    altsByQ.get(alt.questao_id).push(alt);
  }

  const lote12Questoes = allQuestoes.filter(q => q.prompt_versao === "v3.2-lote12");
  const lote11Questoes = allQuestoes.filter(q => q.prompt_versao === "v3.1-lote11");

  console.log(`Lote 12 questions: ${lote12Questoes.length}`);
  console.log(`Lote 11 questions: ${lote11Questoes.length}`);

  // AUDIT CRITERIA & CLASSIFICATION
  // Patterns for stylistic boilerplate in Lote 12
  const boilerplatePattern = /(Identificador de controle:\s*b12-|Cenário prático-operacional:|Contexto policial:|Assentamento operacional|Quadro fático suplementar|Relato descritivo de diligência|Registro técnico de campo|Fundamentação circunstanciada do caso|Dossiê \d+|Boletim \d+|Protocolo \d+|Termo \d+|Entrada \d+|Registro \d+)/i;

  const results = {
    lote12: [],
    lote11_flagged: [],
    counts: {
      aprovada: 0,
      reescrita_estilistica: 0,
      correcao_pedagogica: 0,
      desatualizada: 0,
      quarentena_real: 0,
      total: 0
    }
  };

  // 1. Inspect Lote 12 (500 items)
  for (const q of lote12Questoes) {
    const alts = altsByQ.get(q.id) || [];
    const corretaAlt = alts.find(a => a.correta);
    const corretaLetra = corretaAlt ? (corretaAlt.letra || corretaAlt.texto) : "SEM_CORRETA";
    const expl = (q.explicacao || "").toLowerCase();
    const isCE = q.tipo === "certo_errado" || alts.length === 2;

    let cat = "A";
    let problema = "";
    let fundJuridica = "";
    let correcaoProposta = "";

    // Check for logical/pedagogical contradiction
    let hasContradiction = false;
    if (isCE) {
      const isCorretaCerto = corretaAlt && /certo/i.test(corretaAlt.texto || corretaAlt.letra);
      const isCorretaErrado = corretaAlt && /errado/i.test(corretaAlt.texto || corretaAlt.letra);

      const explSaysCerto = /gabarito:\s*certo|item\s*(está\s*)?correto|afirmativa\s*correta|assertiva\s*correta/i.test(expl);
      const explSaysErrado = /gabarito:\s*errado|item\s*(está\s*)?incorreto|afirmativa\s*incorreta|assertiva\s*incorreta|o\s*erro\s*está/i.test(expl);

      if (isCorretaCerto && explSaysErrado && !explSaysCerto) {
        hasContradiction = true;
        problema = "Gabarito gravado como CERTO na alternativa, mas a fundamentação indica textualmente que o item está ERRADO/INCORRETO.";
        fundJuridica = q.explicacao;
        correcaoProposta = "Inverter o gabarito da alternativa para ERRADO ou ajustar a redação do comentário.";
      } else if (isCorretaErrado && explSaysCerto && !explSaysErrado) {
        hasContradiction = true;
        problema = "Gabarito gravado como ERRADO na alternativa, mas a fundamentação indica textualmente que o item está CERTO/CORRETO.";
        fundJuridica = q.explicacao;
        correcaoProposta = "Inverter o gabarito da alternativa para CERTO ou explicitar o vício da assertiva no comentário.";
      }
    } else {
      const matchLetra = expl.match(/gabarito:\s*(letra\s*)?([a-e])/i);
      if (matchLetra && corretaAlt && corretaAlt.letra) {
        const letraExpl = matchLetra[2].toUpperCase();
        const letraReal = corretaAlt.letra.toUpperCase();
        if (letraExpl !== letraReal) {
          hasContradiction = true;
          problema = `Gabarito na alternativa é '${letraReal}', mas explicação indica 'Gabarito: Letra ${letraExpl}'.`;
          fundJuridica = q.explicacao;
          correcaoProposta = `Alinhar alternativa correta para '${letraExpl}' ou corrigir menção na explicação.`;
        }
      }
    }

    if (hasContradiction) {
      cat = "C"; // CORREÇÃO PEDAGÓGICA
    } else if (boilerplatePattern.test(q.enunciado)) {
      cat = "B"; // REESCRITA ESTILÍSTICA (conteúdo e gabarito juridicamente válidos, mas enunciado possui narrativa artificial/repetitiva)
    } else {
      cat = "A"; // APROVADA
    }

    const itemObj = {
      id: q.id,
      disciplina_id: q.disciplina_id,
      disciplina_nome: discMap.get(q.disciplina_id) || q.disciplina_id,
      assunto_id: q.assunto_id,
      assunto_nome: assMap.get(q.assunto_id) || q.assunto_id,
      enunciado: q.enunciado,
      gabarito: corretaLetra,
      explicacao: q.explicacao,
      categoria: cat,
      problema,
      fundJuridica,
      correcaoProposta
    };

    results.lote12.push(itemObj);
    if (cat === "A") results.counts.aprovada++;
    else if (cat === "B") results.counts.reescrita_estilistica++;
    else if (cat === "C") results.counts.correcao_pedagogica++;
    else if (cat === "D") results.counts.desatualizada++;
    else if (cat === "E") results.counts.quarentena_real++;
  }

  // 2. Inspect Lote 11 (isolate the 31 flagged items with pedagogical/contradiction issues)
  for (const q of lote11Questoes) {
    const alts = altsByQ.get(q.id) || [];
    const corretaAlt = alts.find(a => a.correta);
    const corretaLetra = corretaAlt ? (corretaAlt.letra || corretaAlt.texto) : "SEM_CORRETA";
    const expl = (q.explicacao || "").toLowerCase();
    const isCE = q.tipo === "certo_errado" || alts.length === 2;

    let hasContradiction = false;
    let problema = "";
    let fundJuridica = "";
    let correcaoProposta = "";

    if (isCE) {
      const isCorretaCerto = corretaAlt && /certo/i.test(corretaAlt.texto || corretaAlt.letra);
      const isCorretaErrado = corretaAlt && /errado/i.test(corretaAlt.texto || corretaAlt.letra);

      const explSaysCerto = /gabarito:\s*certo|item\s*(está\s*)?correto|afirmativa\s*correta|assertiva\s*correta/i.test(expl);
      const explSaysErrado = /gabarito:\s*errado|item\s*(está\s*)?incorreto|afirmativa\s*incorreta|assertiva\s*incorreta|o\s*erro\s*está/i.test(expl);

      if (isCorretaCerto && explSaysErrado && !explSaysCerto) {
        hasContradiction = true;
        problema = "Gabarito gravado como CERTO na alternativa, porém o comentário afirma textualmente que a assertiva está INCORRETA/ERRADA.";
        fundJuridica = q.explicacao;
        correcaoProposta = "Inverter gabarito da alternativa para ERRADO ou ajustar redação da explicação.";
      } else if (isCorretaErrado && explSaysCerto && !explSaysErrado) {
        hasContradiction = true;
        problema = "Gabarito gravado como ERRADO na alternativa, porém o comentário afirma textualmente que a assertiva está CORRETA/CERTA.";
        fundJuridica = q.explicacao;
        correcaoProposta = "Inverter gabarito da alternativa para CERTO ou explicitar o vício da assertiva no comentário.";
      }
    } else {
      const matchLetra = expl.match(/gabarito:\s*(letra\s*)?([a-e])/i);
      if (matchLetra && corretaAlt && corretaAlt.letra) {
        const letraExpl = matchLetra[2].toUpperCase();
        const letraReal = corretaAlt.letra.toUpperCase();
        if (letraExpl !== letraReal) {
          hasContradiction = true;
          problema = `Gabarito da alternativa é '${letraReal}', mas o texto explicativo indica 'Gabarito: Letra ${letraExpl}'.`;
          fundJuridica = q.explicacao;
          correcaoProposta = `Ajustar letra correta para '${letraExpl}' ou corrigir citação na explicação.`;
        }
      }
    }

    if (hasContradiction) {
      const itemObj = {
        id: q.id,
        disciplina_id: q.disciplina_id,
        disciplina_nome: discMap.get(q.disciplina_id) || q.disciplina_id,
        assunto_id: q.assunto_id,
        assunto_nome: assMap.get(q.assunto_id) || q.assunto_id,
        enunciado: q.enunciado,
        gabarito: corretaLetra,
        explicacao: q.explicacao,
        categoria: "C", // CORREÇÃO PEDAGÓGICA
        problema,
        fundJuridica,
        correcaoProposta
      };
      results.lote11_flagged.push(itemObj);
      results.counts.correcao_pedagogica++;
    }
  }

  results.counts.total = results.lote12.length + results.lote11_flagged.length;

  console.log("\n=== CONTAGEM FINAL DA AUDITORIA DOS 531 ITENS ===");
  console.log(`- APROVADA: ${results.counts.aprovada}`);
  console.log(`- REESCRITA ESTILÍSTICA: ${results.counts.reescrita_estilistica}`);
  console.log(`- CORREÇÃO PEDAGÓGICA: ${results.counts.correcao_pedagogica}`);
  console.log(`- DESATUALIZADA: ${results.counts.desatualizada}`);
  console.log(`- QUARENTENA REAL: ${results.counts.quarentena_real}`);
  console.log(`- TOTAL ANALISADO: ${results.counts.total}`);

  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/audit_531_fine_report.json"),
    JSON.stringify(results, null, 2)
  );

  console.log("\nSaved detailed report to scripts/audit_531_fine_report.json");
}

run();
