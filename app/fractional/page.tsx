'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Map, Cpu, Users } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme/theme-provider'

const roles = [
  {
    href: '/fractional/ai-officer',
    icon: Cpu,
    badge: 'Fractional AI Officer',
    headline: 'Your AI strategy deserves a leader who has done it.',
    description:
      'AI roadmap, governance, vendor selection, implementation oversight, and board communication. For companies that need senior AI leadership without betting on a $400K hire.',
    tags: ['AI strategy', 'Governance', 'Vendor evaluation', 'Executive comms'],
  },
  {
    href: '/fractional/chief-technology-officer',
    icon: Users,
    badge: 'Fractional CTO',
    headline: 'Technology leadership that scales with your company.',
    description:
      'Engineering org design, technical roadmap, hiring, architecture decisions, and investor credibility. For pre-Series B companies, CTO transitions, and specific technical inflection points.',
    tags: ['Org design', 'Hiring', 'Technical roadmap', 'Architecture'],
  },
  {
    href: '/fractional/solutions-architect',
    icon: Map,
    badge: 'Fractional Solutions Architect',
    headline: '25 years of hands-on technical work. None of the overhead.',
    description:
      'Architecture reviews, AI system design, cloud architecture across Azure/AWS/GCP, API and integration design, and technical due diligence. Scoped to what you actually need.',
    tags: ['AI systems', 'Cloud architecture', 'Due diligence', 'API design'],
  },
]

export default function FractionalPage() {
  const { theme } = useTheme()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 border border-[var(--primary)] px-3 py-1 rounded-full text-xs font-mono text-[var(--primary)] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              Fractional Leadership
            </motion.div>

            <h1 className={`text-[var(--text)] leading-tight mb-6 ${
              theme === 'arcade'
                ? 'font-pixel text-base sm:text-base leading-loose'
                : theme === 'terminal' || theme === 'futuristic'
                ? 'font-mono text-2xl sm:text-3xl lg:text-4xl'
                : 'text-3xl sm:text-4xl lg:text-5xl font-bold'
            }`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              Senior technology leadership. Without the full-time overhead.
              {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--muted)] text-base sm:text-xl max-w-3xl mb-8 leading-relaxed"
            >
              25 years from individual contributor to CEO and back to shipping code.
              Former Microsoft Sr. Director. Production AI platform today.
              Available fractionally as the role your company actually needs right now.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Button href="https://getlatest.ai/meet/justin" variant="primary">
                Book a strategy conversation
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Roles */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Available roles</h2>
            <p className="text-[var(--muted)]">Three distinct engagement models. The right one depends on what your company needs.</p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={role.href}
                  className="block border border-[var(--border)] bg-[var(--card)] rounded p-6 hover:border-[var(--primary)] transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded border border-[var(--primary)] bg-[var(--bg)] shrink-0 group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)] transition-colors duration-300">
                      <role.icon className="w-6 h-6 text-[var(--primary)] group-hover:text-[var(--bg)] transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono text-[var(--primary)] mb-1">{role.badge}</div>
                      <h3 className="font-bold text-[var(--text)] text-lg mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                        {role.headline}
                      </h3>
                      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{role.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-xs font-mono px-2 py-0.5 border border-[var(--border)] rounded text-[var(--muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-[var(--primary)] text-xl font-bold shrink-0 mt-1 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* How to choose */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Not sure which fits?</h2>
            <p className="text-[var(--muted)]">A 30-minute conversation is usually enough to figure it out.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                signal: 'You need help with AI specifically',
                rec: 'Fractional AI Officer',
                href: '/fractional/ai-officer',
                desc: 'Strategy, governance, vendor selection, team upskilling, and executive communication around AI.',
              },
              {
                signal: 'You need overall technology leadership',
                rec: 'Fractional CTO',
                href: '/fractional/chief-technology-officer',
                desc: 'Engineering org, roadmap, hiring, architecture, and technical credibility for investors or the board.',
              },
              {
                signal: 'You need hands-on technical work',
                rec: 'Fractional Solutions Architect',
                href: '/fractional/solutions-architect',
                desc: 'Architecture reviews, AI system design, cloud architecture, due diligence, and integration design.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-5"
              >
                <div className="text-xs font-mono text-[var(--muted)] uppercase tracking-wide mb-2">If...</div>
                <p className="font-semibold text-[var(--text)] text-sm mb-3">{item.signal}</p>
                <div className="text-xs font-mono text-[var(--primary)] uppercase tracking-wide mb-1">Consider</div>
                <Link
                  href={item.href}
                  className="font-bold text-[var(--primary)] hover:underline text-sm block mb-3"
                >
                  {item.rec} →
                </Link>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[var(--border)]">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
              Let&apos;s figure out if there&apos;s a fit
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
              A 30-minute conversation to understand your technology challenges.
              No pitch deck. No obligation.
            </p>
            <Button href="https://getlatest.ai/meet/justin" variant="primary">
              Book a strategy conversation
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
