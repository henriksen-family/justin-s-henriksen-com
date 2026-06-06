import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional Solutions Architect - Justin S. Henriksen',
  description: '25 years of hands-on technical work. AI system design, Azure/AWS/GCP cloud architecture, and the technical decisions that compound over time - without the full-time overhead.',
  alternates: {
    canonical: 'https://justinshenriksen.com/fractional/solutions-architect',
  },
  openGraph: {
    title: 'Fractional Solutions Architect - Justin S. Henriksen',
    description: '25 years of hands-on technical work. AI system design, cloud architecture, and the technical decisions that compound over time.',
    url: 'https://justinshenriksen.com/fractional/solutions-architect',
    siteName: 'Justin S. Henriksen',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Solutions Architect - Justin S. Henriksen',
    description: '25 years of hands-on technical work. AI system design, cloud architecture, daily commits on a live production platform.',
  },
}

export default function SolutionsArchitectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
