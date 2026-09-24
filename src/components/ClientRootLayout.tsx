"use client";

import { AppLayout } from "./layout/AppLayout";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}