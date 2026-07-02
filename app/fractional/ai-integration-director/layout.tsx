import type { Metadata } from 'next'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, serviceNode, breadcrumbNode, SITE_URL } from '@/lib/seo/schema'

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Director of AI Integration - Fractional - Justin S. Henriksen',
    description: 'Senior AI integration leadership without the full-time hire. Former Microsoft Sr. Director. MBA, University of Utah.',
  },
}

export default function AIIntegrationDirectorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={graph([
          serviceNode({
            name: 'Fractional Director of AI Integration',
            description:
              'Senior AI integration leadership on a fractional engagement - the same senior leadership as a full-time hire, faster and without the hiring risk.',
            serviceType: 'Fractional AI leadership',
            url: `${SITE_URL}/fractional/ai-integration-director`,
          }),
          breadcrumbNode([
            { name: 'Home', url: SITE_URL },
            { name: 'Director of AI Integration', url: `${SITE_URL}/fractional/ai-integration-director` },
          ]),
        ])}
      />
      {children}
    </>
  )
}
