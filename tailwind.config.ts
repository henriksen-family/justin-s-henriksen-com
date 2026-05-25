import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'theme-text': 'var(--text)',
        muted: 'var(--muted)',
        card: 'var(--card)',
        border: 'var(--border)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Courier New', 'monospace'],
        pixel: ['var(--font-pixel)', '"Press Start 2P"', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'typewriter': 'typewriter 3s steps(40) forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
