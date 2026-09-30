import { createBrowserClient } from "@supabase/ssr";

const DEFAULT_SUPABASE_URL = "https://xvpqcibdarcelvcwnglq.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_H4tJcmZrldnoKZridIy8Ow_xmg-KAra";

export function sanitizeSupabaseUrl(url?: string): string {
  if (!url) return "";
  let clean = url.trim();
  clean = clean.replace(/\/rest\/v1\/?$/, "");
  clean = clean.replace(/\/+$/, "");
  return clean;
}

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL;
export const supabaseUrl = sanitizeSupabaseUrl(rawUrl);
export const supabaseAnonKey =
  (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY).trim();

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== "https://your-project.supabase.co" &&
    supabaseAnonKey !== "your-anon-key"
);

export function createClient() {
  if (!isSupabaseConfigured) {
    return null;
  }
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
