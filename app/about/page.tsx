'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme/theme-provider'

const building = [
  {
    name: 'SnappyClaw',
    url: 'https://snappyclaw.ai',
    desc: 'An AI assistant that\'s powerful, private, and dead simple.',
  },
  {
    name: 'Ronin',
    url: 'https://myronin.ai',
    desc: 'Your AI powered job search agent.',
  },
  {
    name: 'FindTime',
    url: 'https://find-time.ai',
    desc: 'The scheduling platform built for AI agents.',
  },
  {
    name: 'Helix',
    url: 'https://helix.getlatest.ai',
    desc: 'Automated GTM - buying signals, personalized outreach, SEO, and more.',
  },
  {
    name: 'Heimdall',
    url: 'https://heimdall.getlatest.ai',
    desc: 'Automated intelligence - customer voice, competitor strategy, positioning map, and more.',
  },
]

const investments = [
  { role: 'Investor and Board Member', name: 'AromaTherapist' },
  { role: 'Investor and Board Member', name: 'Boss Strategy Global' },
  { role: 'Strategic Advisor', name: 'Black Star Syndicate' },
  { role: 'Investor', name: 'Anchor 3PL' },
  { role: 'Investor', name: 'OTP Tequila' },
]

export default function AboutPage() {
  const { theme } = useTheme()

  const subheadingClass =
    theme === 'arcade'
      ? 'font-pixel text-sm leading-relaxed'
      : theme === 'terminal' || theme === 'futuristic'
      ? 'font-mono text-lg sm:text-xl'
      : 'font-bold text-xl sm:text-2xl'

  return (
    <div className="pt-20 pb-24">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {theme === 'terminal' && (
              <p className="font-mono text-xs text-[var(--primary)] mb-4 uppercase tracking-widest">
                {'> whoami'}
              </p>
            )}
            <h1 className={`text-[var(--text)] leading-tight mb-8 ${
              theme === 'arcade'
                ? 'font-pixel text-lg sm:text-xl'
                : theme === 'terminal' || theme === 'futuristic'
                ? 'font-mono text-2xl sm:text-3xl'
                : 'font-bold text-3xl sm:text-4xl'
            }`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              {'I build AI solutions and tinker with other things.'}
              {theme === 'terminal' && <span className="animate-blink">_</span>}
            </h1>

            <div className="space-y-4 text-[var(--muted)] text-lg leading-relaxed">
              <p>
                {'I co-founded '}
                <a
                  href="https://getlatest.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:opacity-80 transition-opacity"
                >
                  GetLatest AI
                </a>
                {', where we work with leaders who don\'t want to "learn AI" or experiment endlessly. They want to place smarter bets and see measurable outcomes. We help you identify the areas of your business where AI has the most impact and then we build the solution for you.'}
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-[var(--border)]" />

      {/* Currently building */}
      <section className="py-16 sm:py-20">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-[var(--text)] ${subheadingClass} mb-3`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              {"I'm currently building"}
            </h2>
            <div className="mt-8 space-y-4">
              {building.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start border border-[var(--border)] rounded p-4"
                >
                  <div className="min-w-0 flex-1">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-semibold text-[var(--primary)] hover:opacity-80 transition-opacity uppercase tracking-wide"
                    >
                      {item.name} ↗
                    </a>
                    <p className="text-[var(--muted)] text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-[var(--border)]" />

      {/* Fenix Venture */}
      <section className="py-16 sm:py-20">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-[var(--text)] ${subheadingClass} mb-6`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              Fenix Venture
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed mb-10">
              {"I'm the founder of Fenix Venture, my personal investment vehicle. Through it, I invest directly and work closely with leadership teams on strategy, structure, and execution when that involvement is useful. The form varies. The goal is measurable progress, not activity."}
            </p>
            <p className="text-[var(--muted)] mb-6">
              {'I also invest and advise where I can contribute leadership, insight, and judgment:'}
            </p>
            <div className="space-y-3">
              {investments.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="flex items-baseline gap-3"
                >
                  <span className="text-[var(--primary)] font-mono text-xs shrink-0 mt-0.5">—</span>
                  <span className="text-[var(--muted)] text-sm">
                    <span className="text-[var(--text)] font-medium">{item.role}</span>
                    {', '}
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-[var(--border)]" />

      {/* Giving */}
      <section className="py-16 sm:py-20">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-[var(--text)] ${subheadingClass} mb-6`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              Henriksen Family Giving Fund
            </h2>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              {'Alongside my business work, my family and I run the Henriksen Family Giving Fund, which reflects how we think about responsibility, stewardship, and long-term impact.'}
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-[var(--border)]" />

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[var(--muted)] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              {'I work with people who are fun to be around, passionate about their purpose, and like to build cool things. If there\'s overlap, let\'s talk.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://cal.com/justinh-cal" external>
                Book a conversation
              </Button>
              <Button href="mailto:justin@getlatest.ai" variant="secondary">
                Send an email
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
