import type { Metadata } from 'next'
import { JsonLd } from '@/components/seo/json-ld'
import { graph, breadcrumbNode, SITE_URL } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: 'Justin Henriksen - Contact',
  description: 'Contact card for Justin Henriksen, Founder & CEO of GetLatest AI. Save his details or download the vCard.',
  manifest: '/jh-card-manifest.json',
  alternates: {
    canonical: `${SITE_URL}/jh-card`,
  },
  openGraph: {
    title: 'Justin Henriksen - Contact',
    description: 'Contact card for Justin Henriksen, Founder & CEO of GetLatest AI.',
    url: `${SITE_URL}/jh-card`,
    siteName: 'Justin S. Henriksen',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin Henriksen - Contact',
    description: 'Contact card for Justin Henriksen, Founder & CEO of GetLatest AI.',
  },
}

export default function JHCardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbNode([
            { name: 'Home', url: SITE_URL },
            { name: 'Contact', url: `${SITE_URL}/jh-card` },
          ]),
        ])}
      />
      {children}
    </>
  )
}
