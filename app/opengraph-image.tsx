export const alt = 'Justin S. Henriksen'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

import { buildOgImage } from '@/lib/og-image'

export default function Image() {
  return buildOgImage('Founder. Builder. Investor.', [
    'Co-Founder & CEO, GetLatest AI',
    'Building Snappy Agents and 5 other AI products',
    'Investor and board member via Fenix Venture',
  ])
}
