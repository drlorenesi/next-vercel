import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Toaster } from "react-hot-toast";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./styles.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <DatesProvider settings={{ locale: "es" }}>
          <MantineProvider>{children}</MantineProvider>
        </DatesProvider>
        <Toaster />
      </body>
    </html>
  );
}
