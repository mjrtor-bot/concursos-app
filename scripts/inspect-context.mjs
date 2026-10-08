import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

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
  auth: { persistSession: false },
});

function calcularTotalTopicosEsperados(item, cargoPreferido) {
  let disciplinas = [];
  if (Array.isArray(item.estrutura_extraida?.disciplinas) && item.estrutura_extraida.disciplinas.length > 0) {
    disciplinas = item.estrutura_extraida.disciplinas;
  } else if (Array.isArray(item.estrutura_extraida?.cargos) && item.estrutura_extraida.cargos.length > 0) {
    const cargoMatch = cargoPreferido
      ? item.estrutura_extraida.cargos.find((c) => c.nome?.trim().toLowerCase() === cargoPreferido.trim().toLowerCase())
      : item.estrutura_extraida.cargos[0];

    disciplinas = cargoMatch?.disciplinas || item.estrutura_extraida.cargos.flatMap((c) => c.disciplinas || []);
  }

  let total = 0;
  for (const disciplina of disciplinas) {
    const disciplinaNome = String(disciplina?.nome || "").trim();
    if (!disciplinaNome) continue;

    const assuntos = Array.isArray(disciplina?.assuntos) ? disciplina.assuntos : [];
    for (const assuntoRaw of assuntos) {
      let assuntoNome = "";
      let subtopicos = [];

      if (typeof assuntoRaw === "object" && assuntoRaw !== null) {
        assuntoNome = String(assuntoRaw.nome || "").trim();
        subtopicos = Array.isArray(assuntoRaw.subassuntos)
          ? assuntoRaw.subassuntos
          : (Array.isArray(assuntoRaw.topicos) ? assuntoRaw.topicos : []);
      } else {
        assuntoNome = String(assuntoRaw || "").trim();
      }

      if (!assuntoNome) continue;

      if (subtopicos.length > 0) {
        for (const subRaw of subtopicos) {
          const subNome = typeof subRaw === "object" && subRaw !== null
            ? String(subRaw.nome || "").trim()
            : String(subRaw || "").trim();
          if (!subNome) continue;
          total += 1;
        }
      } else {
        total += 1;
      }
    }
  }
  return total;
}

async function main() {
  const { data: upload } = await supabase
    .from("editais_usuario")
    .select("*")
    .eq("id", "e1ebb384-e1dd-4a94-943e-6a6cfac33abd")
    .single();

  const total = calcularTotalTopicosEsperados(upload, upload.cargo);
  console.log(`Cálculo de tópicos esperados para upload e1ebb384: ${total}`);
}

main().catch(console.error);
