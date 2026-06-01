import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Justin Henriksen - Contact',
  description: 'Contact card for Justin Henriksen, Co-Founder of GetLatest AI.',
  manifest: '/jh-card-manifest.json',
}

export default function JHCardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
