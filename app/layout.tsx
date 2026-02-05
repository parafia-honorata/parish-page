import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parafia Honorata",
  description:
    "Parafia Rzymskokatolicka pw. błogosławionego Honorata Koźmińskiego w Będzinie-Grodźcu. Msze święte, ogłoszenia, intencje i aktualności parafialne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] pt-16 lg:pt-20">
            <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              {children}
            </div>
            <footer className="w-full border-t border-border bg-muted/30 py-6 mt-auto">
              <p className="text-center text-sm text-muted-foreground">
                © Parafia pw. bł. Honorata Koźmińskiego {new Date().getFullYear()}
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
