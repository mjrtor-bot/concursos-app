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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyAllIds() {
  const snap = JSON.parse(fs.readFileSync("scripts/backup_pre_correcao_integridade_questoes.json", "utf8"));
  const snapQIds = new Set(snap.questoes.map(q => q.id));
  const snapAltIds = new Set(snap.alternativas.map(a => a.id));

  let liveQuestoes = [];
  let page = 0;
  while (true) {
    const { data } = await supabase.from("questoes").select("id").range(page*1000, (page+1)*1000 - 1).order("id", { ascending: true });
    if (!data || data.length === 0) break;
    liveQuestoes.push(...data);
    page++;
    if (data.length < 1000) break;
  }

  let liveAlternativas = [];
  page = 0;
  while (true) {
    const { data } = await supabase.from("questoes_alternativas").select("id").range(page*1000, (page+1)*1000 - 1).order("id", { ascending: true });
    if (!data || data.length === 0) break;
    liveAlternativas.push(...data);
    page++;
    if (data.length < 1000) break;
  }

  const liveQIds = new Set(liveQuestoes.map(q => q.id));
  const liveAltIds = new Set(liveAlternativas.map(a => a.id));

  let missingQ = 0;
  let addedQ = 0;
  for (const id of snapQIds) {
    if (!liveQIds.has(id)) missingQ++;
  }
  for (const id of liveQIds) {
    if (!snapQIds.has(id)) addedQ++;
  }

  let missingAlt = 0;
  let addedAlt = 0;
  for (const id of snapAltIds) {
    if (!liveAltIds.has(id)) missingAlt++;
  }
  for (const id of liveAltIds) {
    if (!snapAltIds.has(id)) addedAlt++;
  }

  console.log(`Snapshot Questoes: ${snapQIds.size} | Live Questoes: ${liveQIds.size}`);
  console.log(`Missing Questoes: ${missingQ} | Added Questoes: ${addedQ}`);
  console.log(`Snapshot Alternativas: ${snapAltIds.size} | Live Alternativas: ${liveAltIds.size}`);
  console.log(`Missing Alternativas: ${missingAlt} | Added Alternativas: ${addedAlt}`);
}

verifyAllIds();
