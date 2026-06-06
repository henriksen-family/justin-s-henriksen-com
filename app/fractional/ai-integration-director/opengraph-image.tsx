export const alt = 'Justin S. Henriksen - Fractional Director of AI Integration'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

import { buildOgImage } from '@/lib/og-image'

export default function Image() {
  return buildOgImage('Fractional Director of AI Integration', [
    'Former Microsoft Sr. Director, AI/ML Partner Ecosystem',
    'MBA, David Eccles School of Business',
    '$1.5M AI initiative funding converted to $5M+ outcomes',
  ])
}
