import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional AI Officer - Justin S. Henriksen',
  description: 'Senior AI strategy, governance, and implementation leadership - without the full-time overhead. Former Microsoft Sr. Director. 25+ AI initiatives. Production AI platform today.',
  alternates: {
    canonical: 'https://justinshenriksen.com/fractional/ai-officer',
  },
  openGraph: {
    title: 'Fractional AI Officer - Justin S. Henriksen',
    description: 'Senior AI strategy, governance, and implementation leadership - without the full-time overhead. Former Microsoft Sr. Director. 25+ AI initiatives.',
    url: 'https://justinshenriksen.com/fractional/ai-officer',
    siteName: 'Justin S. Henriksen',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fractional AI Officer - Justin S. Henriksen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional AI Officer - Justin S. Henriksen',
    description: 'Senior AI leadership without the full-time overhead. Former Microsoft Sr. Director. Production AI platform today.',
    images: ['/og-image.jpg'],
  },
}

export default function AIOfficeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
