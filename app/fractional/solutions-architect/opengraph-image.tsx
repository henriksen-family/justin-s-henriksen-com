export const alt = 'Justin S. Henriksen - Fractional Solutions Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

import { buildOgImage } from '@/lib/og-image'

export default function Image() {
  return buildOgImage('Fractional Solutions Architect', [
    'IC to CEO since 2004 and back to shipping code daily',
    'Azure MCSE, AWS since 2008, GCP Vertex AI',
    'Architecting Snappy Agents - live multi-agent AI platform',
  ])
}
