import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal - Justin S. Henriksen',
  description: 'The personal side - family, the Henriksen Family Giving Fund, and a few photos from a life spent building, traveling, and giving back.',
  alternates: {
    canonical: 'https://justinshenriksen.com/personal',
  },
  openGraph: {
    title: 'Personal - Justin S. Henriksen',
    description: 'The personal side - family, the Henriksen Family Giving Fund, and a few photos from a life spent building, traveling, and giving back.',
    url: 'https://justinshenriksen.com/personal',
    siteName: 'Justin S. Henriksen',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal - Justin S. Henriksen',
    description: 'Family, the Henriksen Family Giving Fund, and photos from a life spent building and giving back.',
  },
}

export default function PersonalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
