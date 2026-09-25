import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { formatarQuestao as formatarQ1 } from "./batch1_modules/helper.mjs";
import { penalQuestions as p1 } from "./batch1_modules/penal.mjs";
import { dppQuestions as dpp1 } from "./batch1_modules/processo_penal.mjs";
import { legEspQuestions as leg1 } from "./batch1_modules/legislacao_especial.mjs";
import { constQuestions as c1 } from "./batch1_modules/constitucional.mjs";
import { admQuestions as adm1 } from "./batch1_modules/administrativo.mjs";
import { portQuestions as port1 } from "./batch1_modules/portugues.mjs";
import { dhQuestions as dh1 } from "./batch1_modules/direitos_humanos.mjs";
import { crimQuestions as crim1 } from "./batch1_modules/criminologia.mjs";
import { infoQuestions as info1 } from "./batch1_modules/informatica.mjs";
import { rlmQuestions as rlm1 } from "./batch1_modules/rlm.mjs";

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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function checkLote1vsOriginais() {
  const b1Lists = [p1, dpp1, leg1, c1, adm1, port1, dh1, crim1, info1, rlm1];
  const lote1IdsSet = new Set();
  const lote1FpsSet = new Set();
  let idx = 1;
  for (const list of b1Lists) {
    for (const raw of list) {
      const { questao } = formatarQ1(raw, idx++);
      lote1IdsSet.add(questao.id);
      lote1FpsSet.add(questao.fingerprint_hash);
    }
  }

  // Buscar todas as questões
  let allQuestions = [];
  let page = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("questoes")
      .select("id, fingerprint_hash, prompt_versao")
      .range(page * pageSize, (page + 1) * pageSize - 1);
    if (error) throw error;
    allQuestions.push(...data);
    if (data.length < pageSize) break;
    page++;
  }

  const lote2Q = allQuestions.filter(q => q.prompt_versao === "v2.2-lote2");
  const lote1Q = allQuestions.filter(q => lote1IdsSet.has(q.id));
  const originaisQ = allQuestions.filter(q => !lote1IdsSet.has(q.id) && q.prompt_versao !== "v2.2-lote2");

  console.log(`[+] Total Geral: ${allQuestions.length}`);
  console.log(`[+] Lote 2 identificados por prompt_versao: ${lote2Q.length}`);
  console.log(`[+] Lote 1 identificados por ID de lote 1: ${lote1Q.length}`);
  console.log(`[+] Originais (1260): ${originaisQ.length}`);

  const originaisFpsSet = new Set(originaisQ.map(q => q.fingerprint_hash));
  let colisoesL2ComOriginais = 0;
  let colisoesL2ComL1 = 0;
  for (const q of lote2Q) {
    if (originaisFpsSet.has(q.fingerprint_hash)) colisoesL2ComOriginais++;
    if (lote1FpsSet.has(q.fingerprint_hash)) colisoesL2ComL1++;
  }

  console.log(`[+] Colisões Lote 2 vs Lote 1: ${colisoesL2ComL1}`);
  console.log(`[+] Colisões Lote 2 vs 1.260 Originais: ${colisoesL2ComOriginais}`);
}

checkLote1vsOriginais();
