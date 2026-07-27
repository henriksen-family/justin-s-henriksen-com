import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Press_Start_2P, Special_Elite } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'
import { Nav } from '@/components/ui/nav'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, personNode, websiteNode, organizationNode } from '@/lib/seo/schema'

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

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-typewriter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Justin S. Henriksen',
  description: 'Founder of GetLatest AI and former Microsoft Sr. Director. I drive AI adoption across organizations that don\'t report to me, and build production multi-agent systems. CEO, investor, builder.',
  metadataBase: new URL('https://justinshenriksen.com'),
  alternates: {
    canonical: 'https://justinshenriksen.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Justin S. Henriksen',
    description: 'Founder of GetLatest AI and former Microsoft Sr. Director. I drive AI adoption across organizations that don\'t report to me, and build production multi-agent systems. CEO, investor, builder.',
    url: 'https://justinshenriksen.com',
    siteName: 'Justin S. Henriksen',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin S. Henriksen',
    description: 'Founder of GetLatest AI and former Microsoft Sr. Director. I drive AI adoption across organizations that don\'t report to me, and build production multi-agent systems. CEO, investor, builder.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Justin S. Henriksen', url: 'https://justinshenriksen.com' }],
  creator: 'Justin S. Henriksen',
  keywords: [
    'AI adoption',
    'AI transformation',
    'AI enablement and upskilling',
    'AI strategy',
    'enterprise AI',
    'multi-agent systems',
    'Microsoft AI partner',
    'AI governance',
    'Azure architect',
    'Fractional AI Officer',
    'Fractional Solutions Architect',
    'Justin Henriksen',
  ],
  manifest: '/site.webmanifest',
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${pressStart2P.variable} ${specialElite.variable}`}
    >
      <body>
        <JsonLd data={graph([personNode, websiteNode, organizationNode])} />
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
                  href="mailto:justin.henriksen@gmail.com"
                  className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors font-mono"
                >
                  justin.henriksen@gmail.com
                </a>
                <a
                  href="https://getlatest.ai/meet/justin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors font-mono"
                >
                  Book time ↗
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
