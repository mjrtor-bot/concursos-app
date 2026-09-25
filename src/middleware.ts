import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// ── Rotas que NÃO exigem autenticação ───────────────────────────────────────
const PUBLIC_ROUTES = [
  "/login",
  "/cadastro",
  "/recuperar-senha",
  "/redefinir-senha",
  "/onboarding",
  "/reset",
  "/auth/callback",
  "/auth/confirm",
  "/",
];

// ── Rotas exclusivas para administradores ────────────────────────────────────
const ADMIN_ROUTES = ["/admin"];

// Verifica se o pathname começa com algum dos prefixos listados
function matchesPrefix(pathname: string, prefixes: string[]): boolean {
  return prefixes.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar assets estáticos e internals do Next.js
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next({ request });
  }

  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || "")
    .replace(/\/rest\/v1\/?$/, "")
    .replace(/\/+$/, "")
    .trim();
  const supabaseAnonKey = (
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  ).trim();

  const isConfigured = Boolean(
    supabaseUrl &&
      supabaseAnonKey &&
      supabaseUrl !== "https://your-project.supabase.co" &&
      supabaseAnonKey !== "your-anon-key"
  );

  // Se o Supabase não estiver configurado, deixa passar (fallback de demo)
  if (!isConfigured) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // Atualiza o token de sessão (necessário para SSR com @supabase/ssr)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isPublicRoute = matchesPrefix(pathname, PUBLIC_ROUTES);
  const isAdminRoute = matchesPrefix(pathname, ADMIN_ROUTES);

  // ── Usuário NÃO autenticado ──────────────────────────────────────────────
  if (!user) {
    if (!isPublicRoute) {
      // Redireciona rotas privadas para /login, preservando o destino
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return response;
  }

  // ── Usuário autenticado tentando acessar /login ou /cadastro ─────────────
  if (
    user &&
    (pathname === "/login" || pathname === "/cadastro")
  ) {
    const dashboardUrl = request.nextUrl.clone();
    dashboardUrl.pathname = "/dashboard";
    dashboardUrl.search = "";
    return NextResponse.redirect(dashboardUrl);
  }

  // ── Verificação de papel admin para rotas /admin/* ───────────────────────
  if (isAdminRoute) {
    // Autorização restrita EXCLUSIVAMENTE ao app_metadata gerenciado pelo servidor (Service Role)
    // Jamais confiar em user_metadata, que pode ser manipulado pelo cliente.
    const role = user.app_metadata?.role || "user";

    if (role !== "admin") {
      // Redireciona não-admins para o dashboard
      const dashboardUrl = request.nextUrl.clone();
      dashboardUrl.pathname = "/dashboard";
      dashboardUrl.search = "";
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Aplica o middleware a todos os caminhos exceto:
     * - _next/static (arquivos estáticos)
     * - _next/image (otimização de imagens)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
