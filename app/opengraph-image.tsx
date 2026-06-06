export const runtime = 'edge'
export const alt = 'Justin S. Henriksen - Fractional AI Officer & Solutions Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

import { buildOgImage } from '@/lib/og-image'

export default function Image() {
  return buildOgImage('Fractional AI Officer & Solutions Architect')
}
