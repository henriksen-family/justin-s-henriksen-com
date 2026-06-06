import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Justin S. Henriksen - Fractional Director of AI Integration'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0f1e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '20px',
              background: '#3b82f6',
              borderRadius: '2px',
            }}
          />
          <span
            style={{
              fontSize: '16px',
              color: '#6b7280',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            University of Utah - Director of AI Integration
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '58px',
              fontWeight: '700',
              color: '#f9fafb',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            Justin S. Henriksen
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#3b82f6',
              fontWeight: '500',
              letterSpacing: '-0.01em',
            }}
          >
            Fractional Director of AI Integration
          </div>
        </div>

        {/* Bottom credentials row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {[
            'Former Microsoft Sr. Director',
            'MBA, University of Utah',
            '25 years building technology',
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {i > 0 && (
                <div
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#374151',
                    marginRight: '22px',
                  }}
                />
              )}
              <span
                style={{
                  fontSize: '18px',
                  color: '#9ca3af',
                  fontWeight: '400',
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
