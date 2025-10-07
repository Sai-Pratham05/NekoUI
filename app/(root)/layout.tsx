import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Acme',
    template: '%s | Acme',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}