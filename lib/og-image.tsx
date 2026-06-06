import { ImageResponse } from 'next/og'

export const OG_SIZE = { width: 1200, height: 630 }

export async function buildOgImage(title: string) {
  const avatarData = await fetch(
    new URL('/justin.jpg', 'https://justinshenriksen.com')
  ).then((res) => res.arrayBuffer())

  const avatarBase64 = `data:image/jpeg;base64,${Buffer.from(avatarData).toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d1117 0%, #0f1923 50%, #0d1117 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Blue accent line on left edge */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '15%',
            bottom: '15%',
            width: '4px',
            background: 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
            borderRadius: '0 2px 2px 0',
          }}
        />

        {/* Left: text */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 48px 64px 72px',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              color: '#4b5563',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            justinshenriksen.com
          </div>

          <div
            style={{
              fontSize: '52px',
              fontWeight: '700',
              color: '#f9fafb',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Justin S. Henriksen
          </div>

          <div
            style={{
              fontSize: '24px',
              color: '#3b82f6',
              fontWeight: '500',
              marginBottom: '36px',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </div>

          <div
            style={{
              width: '48px',
              height: '2px',
              background: '#1f2937',
              marginBottom: '28px',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Former Microsoft Sr. Director, AI/ML',
              'MBA - David Eccles School of Business',
              '25 years building technology',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#3b82f6',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '17px', color: '#6b7280' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: avatar */}
        <div
          style={{
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #1f2937',
            marginRight: '72px',
            flexShrink: 0,
            display: 'flex',
          }}
        >
          <img
            src={avatarBase64}
            width={320}
            height={320}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    ),
    { ...OG_SIZE }
  )
}
