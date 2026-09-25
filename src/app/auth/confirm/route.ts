import { type NextRequest, NextResponse } from "next/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { createClientServer } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/dashboard";

  if (token_hash && type) {
    const supabase = await createClientServer();
    if (supabase) {
      const { error } = await supabase.auth.verifyOtp({
        type,
        token_hash,
      });

      if (!error) {
        return NextResponse.redirect(`${origin}${next}`);
      }
      console.error("[Auth Confirm] Erro ao verificar OTP:", error.message);
    }
  }

  // Redireciona para o login informando erro de link inválido/expirado
  return NextResponse.redirect(`${origin}/login?error=token_invalid_or_expired`);
}
