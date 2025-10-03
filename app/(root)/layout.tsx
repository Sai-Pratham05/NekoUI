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
      <html lang="en" suppressHydrationWarning={true}>
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
    )
  }

  