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
      <body className="bg-[var(--bg)] text-[var(--text-body)] transition-colors duration-500 ease-in-out">
        <ThemeProvider>
          <div className="relative flex flex-col min-h-screen overflow-x-hidden">

            {/* Fundo animado ativo */}
            <div className="animated-bg" aria-hidden="true" />

            {/* Outras opções de fundo (descomente para testar) */}

            {/*
            <div className="gradient-bg" aria-hidden="true" />
            <div className="wave-svg-bg" aria-hidden="true">
              <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                  fill="var(--bg-wave)"
                  fillOpacity="0.25"
                  d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,192C840,181,960,139,1080,128C1200,117,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                />
              </svg>
            </div>

            <div className="stars-bg" aria-hidden="true">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="star" />
              ))}
            </div>
            */}

            <Header />
            <main className="relative z-10 flex-1">
              <PageTransitionWrapper>{children}</PageTransitionWrapper>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
