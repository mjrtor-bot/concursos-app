import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

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
