import { createBrowserClient } from "@supabase/ssr";

export function sanitizeSupabaseUrl(url?: string): string {
  if (!url) return "";
  let clean = url.trim();
  clean = clean.replace(/\/rest\/v1\/?$/, "");
  clean = clean.replace(/\/+$/, "");
  return clean;
}

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseUrl = sanitizeSupabaseUrl(rawUrl);
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "").trim();

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== "https://your-project.supabase.co" &&
    supabaseAnonKey !== "your-anon-key"
);

export function createClient() {
  if (!isSupabaseConfigured) {
    // Return null or client that gracefully fails so dataService handles fallback
    return null;
  }
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

