import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xvpqcibdarcelvcwnglq.supabase.co";
const SUPABASE_KEY = "sb_publishable_H4tJcmZrldnoKZridIy8Ow_xmg-KAra";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testInsert() {
  console.log("Testando inserção em disciplinas com anon key...");
  const { data, error } = await supabase.from("disciplinas").insert([
    {
      nome: "Língua Portuguesa Teste " + Date.now(),
      slug: "lingua-portuguesa-teste-" + Date.now(),
      descricao: "Teste de permissão de escrita",
      icone: "BookOpen",
      cor: "#3b82f6",
      ordem: 1
    }
  ]).select();

  if (error) {
    console.log("Erro ao inserir:", error);
  } else {
    console.log("Inserção bem-sucedida!", data);
  }
}

testInsert();
