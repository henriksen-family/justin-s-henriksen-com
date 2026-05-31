import { NextResponse } from 'next/server'

export async function GET() {
  const photoUrl = 'https://justinshenriksen.com/jh-avatar.jpg'

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Justin Henriksen',
    'N:Henriksen;Justin;;;',
    'ORG:GetLatest AI',
    'TITLE:Co-Founder & Chief Everything Officer',
    'TEL;TYPE=CELL:+18016789807',
    'EMAIL;TYPE=WORK:justin@getlatest.ai',
    'URL:https://justinshenriksen.com',
    'URL:https://getlatest.ai',
    'URL:https://linkedin.com/in/henriksenjustin',
    'NOTE:AI strategy\\, products\\, and outcomes you can measure.',
  ]

  // Embed photo as base64 for maximum device compatibility
  try {
    const photoRes = await fetch(photoUrl)
    if (photoRes.ok) {
      const buf = await photoRes.arrayBuffer()
      const base64 = Buffer.from(buf).toString('base64')
      const folded = base64.match(/.{1,75}/g)?.join('\r\n ') ?? base64
      lines.push(`PHOTO;ENCODING=b;TYPE=JPEG:${folded}`)
    }
  } catch {
    // Skip photo if fetch fails
  }

  lines.push('END:VCARD')

  return new NextResponse(lines.join('\r\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="justin-henriksen.vcf"',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
