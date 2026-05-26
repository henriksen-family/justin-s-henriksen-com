import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Press_Start_2P } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'
import { Nav } from '@/components/ui/nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Justin S. Henriksen - Fractional AI Officer & Solutions Architect',
  description: '25 years building technology. Available fractionally. Fractional AI Officer and Solutions Architect with deep Microsoft, Azure, and enterprise AI experience.',
  metadataBase: new URL('https://justinshenriksen.com'),
  openGraph: {
    title: 'Justin S. Henriksen',
    description: '25 years building technology. Available fractionally.',
    url: 'https://justinshenriksen.com',
    siteName: 'Justin S. Henriksen',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin S. Henriksen',
    description: '25 years building technology. Available fractionally.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="professional"
      className={`${inter.variable} ${jetbrainsMono.variable} ${pressStart2P.variable}`}
    >
      <body>
        <ThemeProvider>
          <Nav />
          <ThemeSwitcher />
          <main>{children}</main>
          <footer className="border-t border-[var(--border)] py-8 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[var(--muted)] font-mono">
                Justin S. Henriksen &copy; {new Date().getFullYear()}
              </p>
              <div className="flex gap-6">
                <a
                  href="https://cal.com/justinh-cal"
                  className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors font-mono"
                >
                  justin.henriksen@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/henriksenjustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors font-mono"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
