import type { Metadata } from 'next'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, serviceNode, breadcrumbNode, SITE_URL } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Fractional Solutions Architect - Justin S. Henriksen',
  description: 'Hands-on technical work since 2004. AI system design, Azure/AWS/GCP cloud architecture, and the technical decisions that compound over time - without the full-time overhead.',
  alternates: {
    canonical: 'https://justinshenriksen.com/fractional/solutions-architect',
  },
  openGraph: {
    title: 'Fractional Solutions Architect - Justin S. Henriksen',
    description: 'Hands-on technical work since 2004. AI system design, cloud architecture, and the technical decisions that compound over time.',
    url: 'https://justinshenriksen.com/fractional/solutions-architect',
    siteName: 'Justin S. Henriksen',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Solutions Architect - Justin S. Henriksen',
    description: 'Hands-on technical work since 2004. AI system design, cloud architecture, daily commits on a live production platform.',
  },
}

export default function SolutionsArchitectLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={graph([
          serviceNode({
            name: 'Fractional Solutions Architect',
            description:
              'AI system design and Azure/AWS/GCP cloud architecture from Hands-on technical work since 2004 - on a fractional basis, without the full-time overhead.',
            serviceType: 'Fractional solutions architecture',
            url: `${SITE_URL}/fractional/solutions-architect`,
          }),
          breadcrumbNode([
            { name: 'Home', url: SITE_URL },
            { name: 'Fractional Solutions Architect', url: `${SITE_URL}/fractional/solutions-architect` },
          ]),
        ])}
      />
      {children}
    </>
  )
}
