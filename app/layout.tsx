import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Aslam Kureshi",
  description:
    "Backend Engineer | AI Engineer | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}