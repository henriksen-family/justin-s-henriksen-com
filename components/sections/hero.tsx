'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme/theme-provider'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface HeroProps {
  headline: string
  sub?: string
  ctas?: { label: string; href: string; variant?: 'primary' | 'secondary' }[]
  badge?: string
  mono?: boolean
}

export function Hero({ headline, sub, ctas, badge, mono }: HeroProps) {
  const { theme } = useTheme()

  const headlineClass = theme === 'arcade'
    ? 'font-pixel text-xl sm:text-2xl leading-relaxed'
    : theme === 'terminal' || theme === 'futuristic'
    ? 'font-mono text-3xl sm:text-4xl lg:text-5xl'
    : 'font-bold text-4xl sm:text-5xl lg:text-6xl'

  const glitchClass = theme === 'futuristic' ? 'animate-glitch' : ''

  return (
    <section className="relative min-h-[70vh] flex items-center py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-[var(--primary)] px-3 py-1 rounded-full text-xs font-mono text-[var(--primary)] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              {badge}
            </motion.div>
          )}

          <h1 className={`text-[var(--text)] ${headlineClass} ${glitchClass} leading-tight mb-6`}>
            {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
            {headline}
            {theme === 'terminal' && <span className="animate-blink">_</span>}
          </h1>

          {sub && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-[var(--muted)] text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed ${mono ? 'font-mono text-base' : ''}`}
            >
              {sub}
            </motion.p>
          )}

          {ctas && ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              {ctas.map((cta, i) => (
                <Button key={i} href={cta.href} variant={cta.variant || 'primary'}>
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
