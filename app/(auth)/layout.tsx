import { redirect } from "next/navigation";
import { Container } from "@mantine/core";
import type { Metadata } from "next";
// Utils
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  description: "App creada con Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/");
  return <Container fluid>{children}</Container>;
}
