import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProvidersWrapper } from "@/components/providers/ProvidersWrapper";
import { AppLayout } from "@/components/layout/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConcursosApp - Preparação para Concursos Públicos",
  description:
    "Plataforma completa para preparação para concursos públicos brasileiros. Questões, simulados, plano de estudos e muito mais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ProvidersWrapper>
          <AppLayout>
            {children}
          </AppLayout>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
