import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Director of AI Integration - Fractional - Justin S. Henriksen',
  description: 'Looking to hire a Director of AI Integration? A fractional engagement gets you the same senior leadership faster, at a fraction of the cost - without the hiring risk.',
  alternates: {
    canonical: 'https://justinshenriksen.com/fractional/ai-integration-director',
  },
  openGraph: {
    title: 'Director of AI Integration - Fractional - Justin S. Henriksen',
    description: 'Looking to hire a Director of AI Integration? A fractional engagement gets you the same senior leadership faster, at a fraction of the cost.',
    url: 'https://justinshenriksen.com/fractional/ai-integration-director',
    siteName: 'Justin S. Henriksen',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Director of AI Integration - Fractional - Justin S. Henriksen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Director of AI Integration - Fractional - Justin S. Henriksen',
    description: 'Senior AI integration leadership without the full-time hire. Former Microsoft Sr. Director. MBA, University of Utah.',
    images: ['/og-image.jpg'],
  },
}

export default function AIIntegrationDirectorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
