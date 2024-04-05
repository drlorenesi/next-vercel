import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { UserProvider } from "@auth0/nextjs-auth0/client";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./styles.css";

export default function RootLayout({
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
      <UserProvider>
        <body>
          <MantineProvider>{children}</MantineProvider>
        </body>
      </UserProvider>
    </html>
  );
}
