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

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

async function dumpPdfStreams() {
  const { data: fileData, error } = await supabase.storage
    .from("materiais-assuntos")
    .download("9b6de688-4113-4c3a-8ee2-fb0d01ca3734/23198921-e86d-4427-9313-7e03222433c9.pdf");

  if (error) {
    console.error(error);
    return;
  }

  const buffer = Buffer.from(await fileData.arrayBuffer());
  const str = buffer.toString("binary");
  console.log("PDF RAW:\n", str);
}

dumpPdfStreams().catch(console.error);
