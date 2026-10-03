import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  const pmprConcursoId = "5cb70595-4ab4-4bdf-823e-cab5baaee38e";
  const pmprCargoId = "e44910ab-9cec-4416-9933-a128d1cb09c5";
  const pmprEditalId = "3d7ec744-97af-4aa8-ad61-af8f8363c816";

  console.log("Atualizando usuario_concurso_alvo que apontavam para o concurso 1 (4455dd48-7658-49a4-a09d-25bd3538a4e2)...");
  const { data: alvos, error: errAlvos } = await supabase
    .from("usuario_concurso_alvo")
    .update({
      concurso_id: pmprConcursoId,
      cargo_id: pmprCargoId,
      edital_id: pmprEditalId,
      updated_at: new Date().toISOString(),
    })
    .eq("concurso_id", "4455dd48-7658-49a4-a09d-25bd3538a4e2")
    .select("*");

  if (errAlvos) {
    console.error("Erro ao atualizar usuario_concurso_alvo:", errAlvos);
  } else {
    console.log("Alvos atualizados:", alvos);
  }

  console.log("Definindo concurso fantasma 1 como status rascunho...");
  await supabase
    .from("concursos")
    .update({ status: "rascunho" })
    .eq("id", "4455dd48-7658-49a4-a09d-25bd3538a4e2");

  await supabase
    .from("editais_concurso")
    .update({ status: "rascunho" })
    .eq("id", "f0abc8e7-3466-423e-9d65-dbb2892e8500");

  console.log("Atualizando mentoria_perfis que apontavam para o concurso 1...");
  const { data: perfis, error: errPerfis } = await supabase
    .from("mentoria_perfis")
    .update({
      concurso_id: pmprConcursoId,
      concurso_nome: "PMPR Soldado — Concurso 2025",
      cargo_id: pmprCargoId,
      cargo_nome: "Aluno-Soldado de 3ª Classe Policial Militar",
      updated_at: new Date().toISOString(),
    })
    .eq("concurso_id", "4455dd48-7658-49a4-a09d-25bd3538a4e2")
    .select("*");

  if (errPerfis) {
    console.error("Erro ao atualizar mentoria_perfis:", errPerfis);
  } else {
    console.log("Perfis atualizados:", perfis);
  }
}

run().catch(console.error);
