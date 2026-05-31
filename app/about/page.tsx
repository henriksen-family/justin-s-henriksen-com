'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme/theme-provider'

const values = [
  {
    label: 'Builder first',
    body: `I've shipped code, run P&Ls, led teams, and sat with customers debugging production issues at midnight. The consulting work is better because I never stopped being hands-on. Opinions formed from the chair beat opinions formed from a slide deck every time.`,
  },
  {
    label: 'Direct by default',
    body: `You're not paying for careful hedging. If I think the plan is wrong, I'll say so - with the reasoning, not just the verdict. I'd rather have a hard conversation in week one than a comfortable one that leads nowhere.`,
  },
  {
    label: 'Long-term thinking, short-term action',
    body: `AI strategy without sequencing is just a vision document. I build roadmaps that can survive contact with your actual budget, your actual team, and your actual IT constraints. The best plan is the one you can execute.`,
  },
  {
    label: 'The work is the credential',
    body: `25 years of titles don't matter much. What matters is whether the thing you built is still running, whether the numbers moved, whether the team got better. I measure my work that way and I expect my clients to hold me to it.`,
  },
]

const interests = [
  {
    emoji: '🏗️',
    label: 'Building things',
    detail: `Products, companies, teams - the medium changes, the instinct does not.`,
  },
  {
    emoji: '🤖',
    label: 'AI as infrastructure',
    detail: `Not AI as a feature. The shift happening right now - agents, memory, reasoning - is the most interesting thing I've seen in 25 years of tech.`,
  },
  {
    emoji: '🏔️',
    label: 'Utah',
    detail: `Home base. The mountains help.`,
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    label: 'Family',
    detail: `Everything else is in service of this.`,
  },
]

export default function AboutPage() {
  const { theme } = useTheme()

  const headingClass =
    theme === 'arcade'
      ? 'font-pixel text-lg sm:text-xl leading-relaxed'
      : theme === 'terminal' || theme === 'futuristic'
      ? 'font-mono text-2xl sm:text-3xl'
      : 'font-bold text-3xl sm:text-4xl'

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
            <h1 className={`text-[var(--text)] ${headingClass} leading-tight mb-6`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              {'The person behind the resume'}
              {theme === 'terminal' && <span className="animate-blink">_</span>}
            </h1>
            <div className="space-y-5 text-[var(--muted)] text-lg leading-relaxed">
              <p>
                {'I started in tech because I liked building things. That hasn\'t changed. What\'s changed is the scale - from writing code in a startup bedroom to running a $51M business unit to now building AI products from scratch again. The full loop.'}
              </p>
              <p>
                {'The fractional work came out of a simple observation: most companies facing real AI decisions don\'t need a full-time hire. They need someone who has already made the mistakes, can compress a year of learning into a few months, and isn\'t trying to build an empire inside their org. That\'s the job I do.'}
              </p>
              <p>
                {'GetLatest AI is both the consulting practice and the product company. SnappyClaw, Helix, Heimdall, Ronin - these aren\'t demos. They run in production, serve real customers, and teach me things every day that make the consulting work sharper. I don\'t think you can advise on AI strategy without staying in the arena.'}
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-[var(--border)]" />

      {/* How I work */}
      <section className="py-16 sm:py-20">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-[var(--text)] ${subheadingClass} mb-12`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              {'How I work'}
            </h2>
            <div className="space-y-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8"
                >
                  <div className="text-[var(--primary)] font-mono text-sm font-semibold pt-0.5 uppercase tracking-wide">
                    {v.label}
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <div className="border-t border-[var(--border)]" />

      {/* Outside work */}
      <section className="py-16 sm:py-20">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-[var(--text)] ${subheadingClass} mb-10`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              {'Outside the work'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-[var(--border)] rounded p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" role="img" aria-label={item.label}>{item.emoji}</span>
                    <span className="font-mono text-sm text-[var(--primary)] font-semibold uppercase tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className={`text-[var(--text)] ${subheadingClass} mb-4`}>
              {"Let's talk"}
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto leading-relaxed">
              {"If something on this site resonated - a project you're navigating, a decision you're stuck on, or just curiosity about where AI fits in your business - a 30-minute conversation costs nothing."}
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
