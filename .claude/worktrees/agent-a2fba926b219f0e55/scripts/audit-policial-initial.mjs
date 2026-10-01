import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

// Carregar variáveis de ambiente de .env.local
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

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  console.log("=================================================");
  console.log("🔍 AUDITORIA INICIAL COMPLETA DO BANCO DE DADOS");
  console.log("=================================================");

  // 1. Contagens exatas
  const { count: countQuestoes } = await supabase
    .from("questoes")
    .select("*", { count: "exact", head: true });
  const { count: countAlternativas } = await supabase
    .from("questoes_alternativas")
    .select("*", { count: "exact", head: true });
  const { count: countDisciplinas } = await supabase
    .from("disciplinas")
    .select("*", { count: "exact", head: true });
  const { count: countAssuntos } = await supabase
    .from("assuntos")
    .select("*", { count: "exact", head: true });

  console.log(`[+] Total Questoes no Supabase: ${countQuestoes}`);
  console.log(`[+] Total Alternativas no Supabase: ${countAlternativas}`);
  console.log(`[+] Total Disciplinas: ${countDisciplinas}`);
  console.log(`[+] Total Assuntos: ${countAssuntos}`);

  // 2. Buscar todas as disciplinas e assuntos
  const { data: disciplinas } = await supabase.from("disciplinas").select("id, nome, slug, ordem").order("ordem");
  const { data: assuntos } = await supabase.from("assuntos").select("id, disciplina_id, nome, slug, ordem");

  const discMap = new Map((disciplinas || []).map(d => [d.id, d.nome]));
  const assMap = new Map((assuntos || []).map(a => [a.id, a.nome]));

  // 3. Buscar todas as 1.260 questões
  let allQuestoes = [];
  let from = 0;
  const step = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, disciplina_id, assunto_id, banca_nome, orgao_nome, cargo_nome, ano, tipo, dificuldade, is_autoral_ia, modelo_ia, fingerprint_hash, versao")
      .range(from, from + step - 1);
    if (error) {
      console.error("Erro ao buscar questoes:", error);
      break;
    }
    if (!data || data.length === 0) break;
    allQuestoes.push(...data);
    from += step;
    if (data.length < step) break;
  }

  console.log(`[+] Questoes recuperadas para analise: ${allQuestoes.length}`);

  // Distribuições
  const porDisciplina = {};
  const porAssunto = {};
  const porBanca = {};
  const porOrgao = {};
  const porCargo = {};
  const porAno = {};
  const porTipo = {};
  const porDificuldade = {};
  const porOrigem = { oficiais: 0, autorais_ia: 0 };
  const porModelo = {};
  const fingerprints = new Set();
  let duplicates = 0;

  for (const q of allQuestoes) {
    const discNome = discMap.get(q.disciplina_id) || q.disciplina_id || "Sem Disciplina";
    porDisciplina[discNome] = (porDisciplina[discNome] || 0) + 1;

    const assNome = assMap.get(q.assunto_id) || q.assunto_id || "Sem Assunto";
    porAssunto[`${discNome} -> ${assNome}`] = (porAssunto[`${discNome} -> ${assNome}`] || 0) + 1;

    const banca = q.banca_nome || "Indefinida";
    porBanca[banca] = (porBanca[banca] || 0) + 1;

    const orgao = q.orgao_nome || "Indefinido";
    porOrgao[orgao] = (porOrgao[orgao] || 0) + 1;

    const cargo = q.cargo_nome || "Indefinido";
    porCargo[cargo] = (porCargo[cargo] || 0) + 1;

    const ano = q.ano || "Indefinido";
    porAno[ano] = (porAno[ano] || 0) + 1;

    const tipo = q.tipo || "Indefinido";
    porTipo[tipo] = (porTipo[tipo] || 0) + 1;

    const dif = q.dificuldade || "Indefinida";
    porDificuldade[dif] = (porDificuldade[dif] || 0) + 1;

    if (q.is_autoral_ia) {
      porOrigem.autorais_ia++;
      const mod = q.modelo_ia || "Nao Especificado";
      porModelo[mod] = (porModelo[mod] || 0) + 1;
    } else {
      porOrigem.oficiais++;
    }

    if (q.fingerprint_hash) {
      if (fingerprints.has(q.fingerprint_hash)) {
        duplicates++;
      } else {
        fingerprints.add(q.fingerprint_hash);
      }
    }
  }

  console.log("\n--- 1. DISTRIBUIÇÃO POR DISCIPLINA (1.260 ATUAIS) ---");
  console.table(Object.entries(porDisciplina).map(([disciplina, qtd]) => ({
    disciplina,
    qtd,
    percentual: ((qtd / allQuestoes.length) * 100).toFixed(1) + "%"
  })).sort((a, b) => b.qtd - a.qtd));

  console.log("\n--- 2. DISTRIBUIÇÃO POR BANCA ---");
  console.table(Object.entries(porBanca).map(([banca, qtd]) => ({ banca, qtd })).sort((a, b) => b.qtd - a.qtd));

  console.log("\n--- 3. DISTRIBUIÇÃO POR ÓRGÃO (TOP 10) ---");
  console.table(Object.entries(porOrgao).map(([orgao, qtd]) => ({ orgao, qtd })).sort((a, b) => b.qtd - a.qtd).slice(0, 10));

  console.log("\n--- 4. DISTRIBUIÇÃO POR CARGO (TOP 10) ---");
  console.table(Object.entries(porCargo).map(([cargo, qtd]) => ({ cargo, qtd })).sort((a, b) => b.qtd - a.qtd).slice(0, 10));

  console.log("\n--- 5. DISTRIBUIÇÃO POR TIPO & DIFICULDADE ---");
  console.log("Tipos:", porTipo);
  console.log("Dificuldades:", porDificuldade);

  console.log("\n--- 6. ORIGEM & FINGERPRINTS ---");
  console.log(`Oficiais: ${porOrigem.oficiais} | Autorais/IA: ${porOrigem.autorais_ia}`);
  console.log("Modelos IA:", porModelo);
  console.log(`Fingerprints únicos: ${fingerprints.size} | Duplicatas no banco atual: ${duplicates}`);

  console.log("\n--- 7. ANÁLISE DE LACUNAS NA CARREIRA POLICIAL ---");
  const disciplinasPoliciais = [
    { nome: "Direito Penal", ideal: 2600 },
    { nome: "Direito Processual Penal", ideal: 2400 },
    { nome: "Legislação Especial", ideal: 2400 },
    { nome: "Direito Constitucional", ideal: 2000 },
    { nome: "Direito Administrativo", ideal: 2000 },
    { nome: "Língua Portuguesa", ideal: 2500 },
    { nome: "Direitos Humanos", ideal: 1200 },
    { nome: "Criminologia", ideal: 1000 },
    { nome: "Informática e Tecnologia", ideal: 1600 },
    { nome: "Raciocínio Lógico-Matemático", ideal: 1300 },
    { nome: "Contabilidade Geral e Pública", ideal: 500 },
    { nome: "Legislação de Trânsito", ideal: 500 }
  ];

  const relatorioLacunas = disciplinasPoliciais.map(d => {
    const atual = porDisciplina[d.nome] || 0;
    const deficit = Math.max(0, d.ideal - atual);
    return {
      Disciplina: d.nome,
      Atual: atual,
      Alvo20k: d.ideal,
      Deficit: deficit
    };
  });
  console.table(relatorioLacunas);
}

main().catch(console.error);
