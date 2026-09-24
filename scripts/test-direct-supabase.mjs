import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xvpqcibdarcelvcwnglq.supabase.co";
const SUPABASE_KEY = "sb_publishable_H4tJcmZrldnoKZridIy8Ow_xmg-KAra";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkCapabilities() {
  console.log("Checando tabelas...");
  const tables = ["disciplinas", "assuntos", "bancas", "orgaos", "provas", "questoes", "questoes_alternativas", "usuarios", "respostas_usuarios"];

  for (const t of tables) {
    const { data, error, count } = await supabase.from(t).select("*", { count: "exact" }).limit(1);
    if (error) {
      console.log(`Table ${t}: Error ->`, error.message);
    } else {
      console.log(`Table ${t}: Count = ${count}, Exists = true`);
    }
  }

  // Check if we can sign in or sign up
  console.log("\nTestando Auth...");
  const testEmail = `test_admin_${Date.now()}@concursos.com`;
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: testEmail,
    password: "Password123!@#",
    options: {
      data: { role: "admin" }
    }
  });
  if (authError) {
    console.log("Auth SignUp error:", authError.message);
  } else {
    console.log("Auth SignUp success! User ID:", authData.user?.id);
    if (authData.session) {
      console.log("Session obtained! Testing insert with authenticated user...");
      const authClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
        global: { headers: { Authorization: `Bearer ${authData.session.access_token}` } }
      });
      const { data: insData, error: insError } = await authClient.from("disciplinas").insert([{
        nome: "Teste Auth " + Date.now(),
        slug: "teste-auth-" + Date.now(),
        descricao: "Teste",
        icone: "BookOpen",
        cor: "#3b82f6",
        ordem: 100
      }]).select();
      if (insError) {
        console.log("Insert with authenticated user failed:", insError.message);
      } else {
        console.log("Insert with authenticated user SUCCEEDED!", insData);
      }
    } else {
      console.log("No immediate session (email confirmation might be required)");
    }
  }
}

checkCapabilities();
