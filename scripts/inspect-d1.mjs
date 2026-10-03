import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function run() {
  const { data: concursos, error: cErr } = await supabase
    .from("concursos")
    .select("*, concurso_cargos(*, editais_concurso(*))");

  console.log("=== CONCURSOS ===");
  if (cErr) console.error("Error fetching concursos:", cErr);
  for (const c of concursos || []) {
    console.log(
      `ID: ${c.id} | Nome: "${c.nome}" | Orgao: "${c.orgao}" | UF: "${c.uf}" | Status: "${c.status}" | Fonte: "${c.fonte_oficial_url}"`
    );
    for (const cargo of c.concurso_cargos || []) {
      console.log(`  -> Cargo ID: ${cargo.id} | Nome: "${cargo.nome}"`);
      for (const edital of cargo.editais_concurso || []) {
        console.log(
          `     -> Edital ID: ${edital.id} | Titulo: "${edital.titulo}" | Status: "${edital.status}" | Fonte: "${edital.fonte_oficial_url}"`
        );
      }
    }
  }

  console.log("\n=== USUARIO CONCURSO ALVO ===");
  const { data: alvos } = await supabase.from("usuario_concurso_alvo").select("*");
  console.log(JSON.stringify(alvos, null, 2));

  console.log("\n=== MENTORIA PERFIS ===");
  const { data: perfis } = await supabase.from("mentoria_perfis").select("*");
  console.log(JSON.stringify(perfis, null, 2));

  console.log("\n=== EDITAIS USUARIO ===");
  const { data: edUsr } = await supabase
    .from("editais_usuario")
    .select("id, usuario_id, nome, orgao_nome, cargo, uf, status, edital_id, created_at");
  console.log(JSON.stringify(edUsr, null, 2));
}

run().catch(console.error);
