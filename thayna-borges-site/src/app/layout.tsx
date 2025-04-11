import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import { ThemeProvider } from '@/context/theme-provider'

export const metadata: Metadata = {
  title: 'Thayná Borges | Psicóloga',
  description: 'Site oficial da psicóloga Thayná Borges. Atendimento online e acolhedor.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Aplica o tema salvo/local antes da renderização para evitar FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const saved = localStorage.getItem('theme');
                  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const theme = saved || system;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="transition-all duration-500 ease-in-out bg-[var(--bg)] text-[var(--text-body)]">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen relative overflow-x-hidden">
            {/* Fundo animado sutil */}
            <div className="animated-bg" aria-hidden="true" />
            
            <Header />

            <main className="flex-1 relative z-10">
              <PageTransitionWrapper>{children}</PageTransitionWrapper>
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
