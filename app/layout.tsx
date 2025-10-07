import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RootProvider } from "fumadocs-ui/provider/next";
import { FlickeringGridDemo2 } from "@/components/docs-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neko UI",
  description: "A modern UI component library",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            {/* Background component */}
            <div className="fixed inset-0 z-0">
              <FlickeringGridDemo2 />
            </div>
            
            {/* Main content with higher z-index */}
            <div className="relative z-10">
              <RootProvider>{children}</RootProvider>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
