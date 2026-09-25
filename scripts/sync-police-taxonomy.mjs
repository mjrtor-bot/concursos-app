import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import crypto from "crypto";

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

export function stringToUuid(str) {
  const hash = crypto.createHash("sha1").update(str, "utf8").digest("hex");
  return [
    hash.substring(0, 8),
    hash.substring(8, 12),
    "5" + hash.substring(13, 16),
    ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16).padStart(2, "0") + hash.substring(18, 20),
    hash.substring(20, 32),
  ].join("-");
}

const NOVAS_DISCIPLINAS = [
  {
    id: stringToUuid("disc-criminologia"),
    nome: "Criminologia",
    slug: "criminologia",
    descricao: "Escolas criminológicas, teorias sociológicas, vitimologia, prevenção criminal e estatísticas do crime.",
    icone: "Fingerprint",
    cor: "#059669",
    ordem: 16
  },
  {
    id: stringToUuid("disc-legislacao-transito"),
    nome: "Legislação de Trânsito",
    slug: "legislacao-transito",
    descricao: "Código de Trânsito Brasileiro (Lei 9.503/1997), normas de circulação, infrações, penalidades e resoluções do CONTRAN.",
    icone: "Truck",
    cor: "#eab308",
    ordem: 17
  }
];

const NOVOS_ASSUNTOS = [
  // Criminologia
  { id: stringToUuid("ass-escolas-criminologicas"), disciplina_id: stringToUuid("disc-criminologia"), nome: "Escolas Criminológicas e Teorias Sociológicas", slug: "escolas-criminologicas", ordem: 1 },
  { id: stringToUuid("ass-vitimologia"), disciplina_id: stringToUuid("disc-criminologia"), nome: "Vitimologia, Processos de Vitimização e Cifras Criminais", slug: "vitimologia-cifras", ordem: 2 },
  { id: stringToUuid("ass-prevencao-delito"), disciplina_id: stringToUuid("disc-criminologia"), nome: "Prevenção Delitiva e Modelos de Reação ao Crime", slug: "prevencao-criminal", ordem: 3 },

  // Legislação de Trânsito
  { id: stringToUuid("ass-ctb-normas-circulacao"), disciplina_id: stringToUuid("disc-legislacao-transito"), nome: "Normas Gerais de Circulação e Conduta (CTB)", slug: "ctb-normas-circulacao", ordem: 1 },
  { id: stringToUuid("ass-crimes-infracoes-transito"), disciplina_id: stringToUuid("disc-legislacao-transito"), nome: "Crimes e Infrações de Trânsito (CTB)", slug: "ctb-crimes-infracoes", ordem: 2 },

  // Direito Penal (novos assuntos policiais)
  { id: stringToUuid("ass-concurso-crimes"), disciplina_id: stringToUuid("disc-direito-penal"), nome: "Concurso de Pessoas e Concurso de Crimes", slug: "concurso-pessoas-crimes", ordem: 5 },
  { id: stringToUuid("ass-penas-extincao"), disciplina_id: stringToUuid("disc-direito-penal"), nome: "Penas, Medidas de Segurança e Extinção da Punibilidade", slug: "penas-extincao-punibilidade", ordem: 6 },

  // Processo Penal (novos assuntos policiais)
  { id: stringToUuid("ass-jurisdicao-competencia"), disciplina_id: stringToUuid("disc-direito-processual-penal"), nome: "Jurisdição e Competência Penal", slug: "jurisdicao-competencia-penal", ordem: 5 },
  { id: stringToUuid("ass-medidas-asseguratorias-procedimentos"), disciplina_id: stringToUuid("disc-direito-processual-penal"), nome: "Busca e Apreensão, Medidas Cautelares e Procedimentos", slug: "busca-apreensao-procedimentos", ordem: 6 },

  // Legislação Especial (novos assuntos policiais)
  { id: stringToUuid("ass-organizacoes-criminosas"), disciplina_id: stringToUuid("disc-legislacao-especial"), nome: "Organizações Criminosas (Lei nº 12.850/2013)", slug: "organizacoes-criminosas-12850", ordem: 5 },
  { id: stringToUuid("ass-crimes-hediondos"), disciplina_id: stringToUuid("disc-legislacao-especial"), nome: "Crimes Hediondos (Lei nº 8.072/1990)", slug: "crimes-hediondos-8072", ordem: 6 },
  { id: stringToUuid("ass-lavagem-capitais"), disciplina_id: stringToUuid("disc-legislacao-especial"), nome: "Lavagem de Dinheiro (Lei nº 9.613/1998)", slug: "lavagem-dinheiro-9613", ordem: 7 },
  { id: stringToUuid("ass-tortura-interceptacao"), disciplina_id: stringToUuid("disc-legislacao-especial"), nome: "Lei de Tortura e Interceptação Telefônica", slug: "tortura-interceptacao", ordem: 8 },
];

async function syncTaxonomia() {
  console.log("Sincronizando novas disciplinas e assuntos policiais...");

  for (const d of NOVAS_DISCIPLINAS) {
    const { error } = await supabase.from("disciplinas").upsert(d, { onConflict: "id" });
    if (error) console.error(`Erro ao inserir disciplina ${d.nome}:`, error);
    else console.log(`[+] Disciplina ${d.nome} sincronizada (${d.id})`);
  }

  for (const a of NOVOS_ASSUNTOS) {
    const { error } = await supabase.from("assuntos").upsert(a, { onConflict: "id" });
    if (error) console.error(`Erro ao inserir assunto ${a.nome}:`, error);
    else console.log(`[+] Assunto ${a.nome} sincronizado (${a.id})`);
  }

  const { count: cd } = await supabase.from("disciplinas").select("*", { count: "exact", head: true });
  const { count: ca } = await supabase.from("assuntos").select("*", { count: "exact", head: true });
  console.log(`Total Disciplinas agora: ${cd} | Total Assuntos agora: ${ca}`);
}

syncTaxonomia().catch(console.error);
