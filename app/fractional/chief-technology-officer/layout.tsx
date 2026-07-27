import type { Metadata } from 'next'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, serviceNode, breadcrumbNode, SITE_URL } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Fractional CTO - Justin S. Henriksen',
  description: 'Technology leadership that scales with your company. Engineering org, technical roadmap, hiring, and the architecture decisions that determine whether you can grow - without a full-time CTO overhead.',
  alternates: {
    canonical: 'https://justinshenriksen.com/fractional/chief-technology-officer',
  },
  openGraph: {
    title: 'Fractional CTO - Justin S. Henriksen',
    description: 'Technology leadership that scales with your company. IC to CEO since 2004. Former Microsoft Sr. Director. Production AI platform today.',
    url: 'https://justinshenriksen.com/fractional/chief-technology-officer',
    siteName: 'Justin S. Henriksen',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO - Justin S. Henriksen',
    description: 'Technology leadership that scales with your company. IC to CEO since 2004. Production AI platform today.',
  },
}

export default function CTOLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={graph([
          serviceNode({
            name: 'Fractional CTO',
            description:
              'Technology leadership, engineering org building, and technical roadmap execution on a fractional basis - without the full-time overhead.',
            serviceType: 'Fractional CTO',
            url: `${SITE_URL}/fractional/chief-technology-officer`,
          }),
          breadcrumbNode([
            { name: 'Home', url: SITE_URL },
            { name: 'Fractional CTO', url: `${SITE_URL}/fractional/chief-technology-officer` },
          ]),
        ])}
      />
      {children}
    </>
  )
}
