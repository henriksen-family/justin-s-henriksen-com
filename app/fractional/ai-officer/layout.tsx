import type { Metadata } from 'next'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, serviceNode, breadcrumbNode, SITE_URL } from '@/lib/seo/schema'

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional AI Officer - Justin S. Henriksen',
    description: 'Senior AI leadership without the full-time overhead. Former Microsoft Sr. Director. Production AI platform today.',
  },
}

export default function AIOfficeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={graph([
          serviceNode({
            name: 'Fractional AI Officer',
            description:
              'Senior AI strategy, governance, and implementation leadership on a fractional basis - without the full-time overhead.',
            serviceType: 'Fractional AI leadership',
            url: `${SITE_URL}/fractional/ai-officer`,
          }),
          breadcrumbNode([
            { name: 'Home', url: SITE_URL },
            { name: 'Fractional AI Officer', url: `${SITE_URL}/fractional/ai-officer` },
          ]),
        ])}
      />
      {children}
    </>
  )
}
