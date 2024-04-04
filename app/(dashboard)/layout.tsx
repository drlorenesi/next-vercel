import type { Metadata } from "next";
// Components
import Shell from "@/app/_components/shell/Shell";

export const metadata: Metadata = {
  title: "Dashboard Layout",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Shell>{children}</Shell>;
}
