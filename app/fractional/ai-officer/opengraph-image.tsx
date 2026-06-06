export const alt = 'Justin S. Henriksen - Fractional AI Officer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

import { buildOgImage } from '@/lib/og-image'

export default function Image() {
  return buildOgImage('Fractional AI Officer', [
    '30+ AI initiatives - $1.5M funding to $25M+ revenue',
    'Transformed Crayon US from reseller to AI/ML managed services',
    'Shipping production AI today - SnappyClaw',
  ])
}
