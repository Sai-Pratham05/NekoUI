import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import { baseOptions } from '@/lib/layout.shared';
import { ThemeProvider } from '@/components/theme-provider';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <DocsLayout {...baseOptions()} tree={source.pageTree}>
        {children}
      </DocsLayout>
    </ThemeProvider>
  );
}