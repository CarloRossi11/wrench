import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Your App Name'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ fontSize: 80, fontWeight: 'bold', margin: 0 }}>
          Your App Name
        </h1>
        <p style={{ fontSize: 32, opacity: 0.85 }}>Your tagline here</p>
      </div>
    ),
    { ...size }
  )
}