import fs from "fs";

const envContent = fs.readFileSync(".env.local", "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const idx = line.indexOf("=");
  if (idx !== -1) {
    process.env[line.substring(0, idx).trim()] = line
      .substring(idx + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "");
  }
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function testEndpoints() {
  const urls = [
    `${SUPABASE_URL}/database/query`,
    `${SUPABASE_URL}/rest/v1/rpc/exec_sql`,
    `${SUPABASE_URL}/sql`,
    `https://api.supabase.com/v1/projects/xvpqcibdarcelvcwnglq/database/query`,
  ];

  for (const u of urls) {
    try {
      const res = await fetch(u, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SERVICE_KEY,
          "Authorization": `Bearer ${SERVICE_KEY}`
        },
        body: JSON.stringify({ query: "SELECT 1;" })
      });
      console.log(`URL ${u}: Status ${res.status} - ${await res.text()}`);
    } catch (e) {
      console.log(`URL ${u}: Error ${e.message}`);
    }
  }
}

testEndpoints().catch(console.error);
