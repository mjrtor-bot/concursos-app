import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const env = fs.readFileSync(".env.local", "utf8");
let url = "", key = "";
for (const line of env.split("\n")) {
  const trimmed = line.trim();
  if (trimmed.startsWith("NEXT_PUBLIC_SUPABASE_URL=")) url = trimmed.split("=")[1].trim().replace(/['"]/g, "");
  if (trimmed.startsWith("SUPABASE_SERVICE_ROLE_KEY=")) key = trimmed.split("=")[1].trim().replace(/['"]/g, "");
}

const supabase = createClient(url, key);

async function checkRpc() {
  // Test common RPC function names
  const rpcs = ["exec_sql", "execute_sql", "run_sql", "query", "sql"];
  for (const fn of rpcs) {
    try {
      const { data, error } = await supabase.rpc(fn, { query: "SELECT 1" });
      console.log(`RPC [${fn}]:`, error ? error.message : "SUCCESS: " + JSON.stringify(data));
    } catch (e) {
      console.log(`RPC [${fn}] throw:`, e.message);
    }
  }
}

checkRpc().catch(console.error);
