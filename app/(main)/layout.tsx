import { redirect } from "next/navigation";
import type { Metadata } from "next";
// Utils
import { createClient } from "@/utils/supabase/server";
// Components
import Shell from "@/app/_components/shell/Shell";

export const metadata: Metadata = {
  title: "Dashboard Layout",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return <Shell>{children}</Shell>;
}
