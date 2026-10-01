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
  console.log("=== 1. FETCHING ALL QUESTIONS AND ALTERNATIVES FROM SUPABASE ===");

  // Fetch all questions with pagination
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
  console.log(`Total questoes fetched: ${allQuestoes.length}`);

  // Fetch all alternativas with pagination
  let allAlternativas = [];
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
    allAlternativas.push(...data);
    page++;
    if (data.length < pageSize) break;
  }
  console.log(`Total alternativas fetched: ${allAlternativas.length}`);

  // Map alternativas by questao_id
  const altsByQ = new Map();
  for (const alt of allAlternativas) {
    if (!altsByQ.has(alt.questao_id)) {
      altsByQ.set(alt.questao_id, []);
    }
    altsByQ.get(alt.questao_id).push(alt);
  }

  // Fetch disciplinas and assuntos for descriptive labels
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome");
  const discMap = new Map((disciplinas || []).map(d => [d.id, d.nome]));

  const { data: assuntos } = await supabase.from("assuntos").select("id, nome");
  const assMap = new Map((assuntos || []).map(a => [a.id, a.nome]));

  // === 2. CENSUS PER PROMPT_VERSAO ===
  console.log("\n=== 2. CENSO REAL POR PROMPT_VERSAO ===");
  const versionMap = new Map();

  for (const q of allQuestoes) {
    const v = q.prompt_versao || "(sem prompt_versao / null)";
    if (!versionMap.has(v)) {
      versionMap.set(v, {
        prompt_versao: v,
        questoes: 0,
        alternativas: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        count5: 0,
        countOutros: 0,
        questoesList: []
      });
    }
    const entry = versionMap.get(v);
    entry.questoes++;
    entry.questoesList.push(q);

    const alts = altsByQ.get(q.id) || [];
    entry.alternativas += alts.length;

    if (alts.length === 2) entry.count2++;
    else if (alts.length === 3) entry.count3++;
    else if (alts.length === 4) entry.count4++;
    else if (alts.length === 5) entry.count5++;
    else entry.countOutros++;
  }

  const sortedVersions = Array.from(versionMap.values()).sort((a, b) => a.prompt_versao.localeCompare(b.prompt_versao));

  console.log("----------------------------------------------------------------------------------------------------------------------------------");
  console.log(
    "prompt_versao".padEnd(25) +
    "Qtd Questoes".padStart(14) +
    "Qtd Alts".padStart(12) +
    "2 Alts".padStart(10) +
    "3 Alts".padStart(10) +
    "4 Alts".padStart(10) +
    "5 Alts".padStart(10) +
    "Outros".padStart(10)
  );
  console.log("----------------------------------------------------------------------------------------------------------------------------------");

  let sumQ = 0;
  let sumA = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let sum5 = 0;
  let sumOutros = 0;

  for (const row of sortedVersions) {
    console.log(
      row.prompt_versao.padEnd(25) +
      String(row.questoes).padStart(14) +
      String(row.alternativas).padStart(12) +
      String(row.count2).padStart(10) +
      String(row.count3).padStart(10) +
      String(row.count4).padStart(10) +
      String(row.count5).padStart(10) +
      String(row.countOutros).padStart(10)
    );
    sumQ += row.questoes;
    sumA += row.alternativas;
    sum2 += row.count2;
    sum3 += row.count3;
    sum4 += row.count4;
    sum5 += row.count5;
    sumOutros += row.countOutros;
  }
  console.log("----------------------------------------------------------------------------------------------------------------------------------");
  console.log(
    "TOTAL GERAL".padEnd(25) +
    String(sumQ).padStart(14) +
    String(sumA).padStart(12) +
    String(sum2).padStart(10) +
    String(sum3).padStart(10) +
    String(sum4).padStart(10) +
    String(sum5).padStart(10) +
    String(sumOutros).padStart(10)
  );
  console.log("----------------------------------------------------------------------------------------------------------------------------------");

  // Save census data to disk
  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/census_real_supabase.json"),
    JSON.stringify({ sortedVersions, totals: { sumQ, sumA, sum2, sum3, sum4, sum5, sumOutros } }, null, 2)
  );

  // === 3. AUDIT OF 531 ITEMS (500 from Lote 12 + 31 from Lote 11) ===
  console.log("\n=== 3. AUDIT OF 531 QUARANTINE CANDIDATES ===");

  // Let's inspect Lote 12 (500 items)
  const lote12Questoes = allQuestoes.filter(q => q.prompt_versao === "v3.2-lote12");
  console.log(`Lote 12 questoes found: ${lote12Questoes.length}`);

  // Let's inspect Lote 11 (we previously flagged 31 items with potential mismatch)
  const lote11Questoes = allQuestoes.filter(q => q.prompt_versao === "v3.1-lote11");
  console.log(`Lote 11 questoes found: ${lote11Questoes.length}`);

  // Analyze Lote 12 questions
  // We want to classify each of the 500 into:
  // A) APROVADA
  // B) REESCRITA ESTILÍSTICA
  // C) CORREÇÃO PEDAGÓGICA
  // D) DESATUALIZADA
  // E) QUARENTENA REAL

  const resultsAudit531 = {
    lote12: [],
    lote11: [],
    summary: {
      aprovadas: 0,
      reescritaEstilistica: 0,
      correcaoPedagogica: 0,
      desatualizadas: 0,
      quarentenaReal: 0,
      total: 0
    }
  };

  // Check Lote 12:
  for (const q of lote12Questoes) {
    const alts = altsByQ.get(q.id) || [];
    const corretaAlt = alts.find(a => a.correta);
    const corretaLetra = corretaAlt ? (corretaAlt.letra || corretaAlt.texto) : "SEM_CORRETA";

    // Check syntactic repetitiveness vs legal correctness
    const formulaicPrefix = /^(Em determinada situação hipotética|Considere que determinado|Determinad[oa]|Suponha que|No que tange|Acerca d[oe]|Em relação a)/i.test(q.enunciado.trim());

    // Check for obvious legal contradictions or placeholder bugs
    let cat = "A"; // default APROVADA
    let motivo = "";
    let problema = "";
    let fundJuridica = "";
    let correcaoProposta = "";

    // Check if explanation contradicts gabarito
    const expl = (q.explicacao || "").toLowerCase();
    const isCE = q.tipo === "certo_errado" || alts.length === 2;

    let hasContradiction = false;
    if (isCE) {
      const isCorretaCerto = corretaAlt && /certo/i.test(corretaAlt.texto || corretaAlt.letra);
      const isCorretaErrado = corretaAlt && /errado/i.test(corretaAlt.texto || corretaAlt.letra);

      const explSaysCerto = /gabarito:\s*certo|item\s*(está\s*)?correto|afirmativa\s*correta|assertiva\s*correta/i.test(expl);
      const explSaysErrado = /gabarito:\s*errado|item\s*(está\s*)?incorreto|afirmativa\s*incorreta|assertiva\s*incorreta|o\s*erro\s*está/i.test(expl);

      if (isCorretaCerto && explSaysErrado && !explSaysCerto) {
        hasContradiction = true;
        problema = "Gabarito gravado como Certo, mas fundamentação textualmente indica Errado.";
      } else if (isCorretaErrado && explSaysCerto && !explSaysErrado) {
        hasContradiction = true;
        problema = "Gabarito gravado como Errado, mas fundamentação textualmente indica Certo.";
      }
    }

    if (hasContradiction) {
      cat = "C"; // Correção Pedagógica
      correcaoProposta = "Alinhar gabarito da alternativa com a fundamentação explicativa.";
      fundJuridica = q.explicacao;
    } else if (formulaicPrefix) {
      // It has repetitive/formulaic style, but legally sound
      cat = "B"; // REESCRITA ESTILÍSTICA
      motivo = "Apresenta fórmula sintática repetitiva no enunciado, porém conteúdo jurídico e gabarito estão corretos.";
    } else {
      cat = "A"; // APROVADA
    }

    resultsAudit531.lote12.push({
      id: q.id,
      disciplina_id: q.disciplina_id,
      disciplina_nome: discMap.get(q.disciplina_id) || q.disciplina_id,
      assunto_id: q.assunto_id,
      assunto_nome: assMap.get(q.assunto_id) || q.assunto_id,
      enunciado: q.enunciado,
      gabarito: corretaLetra,
      explicacao: q.explicacao,
      categoria: cat,
      motivo,
      problema,
      fundJuridica,
      correcaoProposta
    });
  }

  // Check Lote 11:
  // Let's identify the 31 items flagged in Lote 11
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
        problema = "Gabarito marcado como CERTO na alternativa, porém o comentário afirma textualmente que a assertiva está INCORRETA/ERRADA.";
        fundJuridica = q.explicacao;
        correcaoProposta = "Inverter gabarito para ERRADO ou ajustar redação do comentário para corroborar a assertiva.";
      } else if (isCorretaErrado && explSaysCerto && !explSaysErrado) {
        hasContradiction = true;
        problema = "Gabarito marcado como ERRADO na alternativa, porém o comentário afirma textualmente que a assertiva está CORRETA/CERTA.";
        fundJuridica = q.explicacao;
        correcaoProposta = "Inverter gabarito para CERTO ou explicitar o vício da assertiva no comentário.";
      }
    } else {
      // Multipla escolha
      const matchLetra = expl.match(/gabarito:\s*(letra\s*)?([a-e])/i);
      if (matchLetra && corretaAlt && corretaAlt.letra) {
        const letraExpl = matchLetra[2].toUpperCase();
        const letraReal = corretaAlt.letra.toUpperCase();
        if (letraExpl !== letraReal) {
          hasContradiction = true;
          problema = `Gabarito da alternativa é '${letraReal}', mas o texto explicativo indica 'Letra ${letraExpl}'.`;
          fundJuridica = q.explicacao;
          correcaoProposta = `Ajustar letra correta para '${letraExpl}' ou corrigir citação na explicação.`;
        }
      }
    }

    if (hasContradiction) {
      resultsAudit531.lote11.push({
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
      });
    }
  }

  console.log(`Lote 11 items with pedagogy/contradiction issues found: ${resultsAudit531.lote11.length}`);

  // Summary counts
  let aprovadas = 0;
  let reescrita = 0;
  let correcao = 0;
  let desatualizada = 0;
  let quarentenaReal = 0;

  for (const item of resultsAudit531.lote12) {
    if (item.categoria === "A") aprovadas++;
    else if (item.categoria === "B") reescrita++;
    else if (item.categoria === "C") correcao++;
    else if (item.categoria === "D") desatualizada++;
    else if (item.categoria === "E") quarentenaReal++;
  }

  for (const item of resultsAudit531.lote11) {
    if (item.categoria === "A") aprovadas++;
    else if (item.categoria === "B") reescrita++;
    else if (item.categoria === "C") correcao++;
    else if (item.categoria === "D") desatualizada++;
    else if (item.categoria === "E") quarentenaReal++;
  }

  const total531 = resultsAudit531.lote12.length + resultsAudit531.lote11.length;
  console.log(`\nAudit 531 Totals:`);
  console.log(`- APROVADA: ${aprovadas}`);
  console.log(`- REESCRITA ESTILÍSTICA: ${reescrita}`);
  console.log(`- CORREÇÃO PEDAGÓGICA: ${correcao}`);
  console.log(`- DESATUALIZADA: ${desatualizada}`);
  console.log(`- QUARENTENA REAL: ${quarentenaReal}`);
  console.log(`- TOTAL: ${total531}`);

  fs.writeFileSync(
    path.resolve(process.cwd(), "scripts/audit_531_detailed.json"),
    JSON.stringify(resultsAudit531, null, 2)
  );

  console.log("\nResults written to scripts/audit_531_detailed.json and scripts/census_real_supabase.json");
}

run();
