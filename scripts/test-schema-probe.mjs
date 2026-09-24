import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import crypto from "crypto";

const envContent = fs.readFileSync(".env.local", "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const idx = trimmed.indexOf("=");
    if (idx !== -1) {
      process.env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim().replace(/^["']|["']$/g, "");
    }
  }
}

const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
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

async function probe() {
  const discId = stringToUuid("disc-portugues");
  const assId = stringToUuid("ass-sintaxe");
  const qId = stringToUuid("q-test-001");
  const altId = stringToUuid("alt-test-001-a");

  console.log("Inserindo disciplina de teste com UUID:", discId);
  const discRes = await supabase.from("disciplinas").insert([
    {
      id: discId,
      nome: "Língua Portuguesa Teste",
      slug: "lingua-portuguesa-teste",
      descricao: "Gramática e Interpretação",
      icone: "BookOpen",
      cor: "#3b82f6",
      ordem: 1
    }
  ]).select();
  console.log("Disciplina:", discRes.error ? discRes.error.message : "OK");

  if (!discRes.error) {
    const assRes = await supabase.from("assuntos").insert([
      {
        id: assId,
        disciplina_id: discId,
        nome: "Sintaxe Teste",
        slug: "sintaxe-teste",
        descricao: "Termos essenciais",
        ordem: 1
      }
    ]).select();
    console.log("Assunto:", assRes.error ? assRes.error.message : "OK");

    const qRes = await supabase.from("questoes").insert([
      {
        id: qId,
        disciplina_id: discId,
        assunto_id: assId,
        banca_nome: "FGV",
        orgao_nome: "Receita Federal",
        ano: 2024,
        tipo: "multipla_escolha",
        dificuldade: "medio",
        enunciado: "Enunciado de teste para verificar tipos de colunas no Supabase.",
        explicacao: "Explicação de teste.",
        is_autoral_ia: true,
        modelo_ia: "claude-3-5-sonnet",
        prompt_versao: "v2.1",
        revisada_por_especialista: true,
        fingerprint_hash: "a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0"
      }
    ]).select();
    console.log("Questão:", qRes.error ? qRes.error.message : "OK");

    const altRes = await supabase.from("questoes_alternativas").insert([
      {
        id: altId,
        questao_id: qId,
        letra: "A",
        texto: "Alternativa correta",
        correta: true,
        ordem: 1
      }
    ]).select();
    console.log("Alternativa:", altRes.error ? altRes.error.message : "OK");

    // Limpar teste
    await supabase.from("questoes_alternativas").delete().eq("id", altId);
    await supabase.from("questoes").delete().eq("id", qId);
    await supabase.from("assuntos").delete().eq("id", assId);
    await supabase.from("disciplinas").delete().eq("id", discId);
    console.log("Limpeza de teste concluída com sucesso!");
  }
}

probe();
