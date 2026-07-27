import type { Metadata } from 'next'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, breadcrumbNode, SITE_URL } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Fractional Leadership - Justin S. Henriksen',
  description: 'Fractional AI Officer, CTO, and Solutions Architect. Senior technology leadership without the full-time overhead. Former Microsoft Sr. Director. IC to CEO since 2004.',
  alternates: {
    canonical: 'https://justinshenriksen.com/fractional',
  },
  openGraph: {
    title: 'Fractional Leadership - Justin S. Henriksen',
    description: 'Fractional AI Officer, CTO, and Solutions Architect. Senior technology leadership without the full-time overhead.',
    url: 'https://justinshenriksen.com/fractional',
    siteName: 'Justin S. Henriksen',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Leadership - Justin S. Henriksen',
    description: 'Fractional AI Officer, CTO, and Solutions Architect. Senior technology leadership without the full-time overhead.',
  },
}

export default function FractionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbNode([
            { name: 'Home', url: SITE_URL },
            { name: 'Fractional Leadership', url: `${SITE_URL}/fractional` },
          ]),
        ])}
      />
      {children}
    </>
  )
}
