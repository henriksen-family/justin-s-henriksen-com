'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Cpu } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/sections/stat-card'
import { Timeline, type TimelineItem } from '@/components/sections/timeline'
import { EvidenceSection } from '@/components/sections/evidence-section'
import { useTheme } from '@/components/theme/theme-provider'

const stats = [
  { value: '172%', label: 'MRR increase', detail: '$440K to $1.2M in 8 months' },
  { value: '$100M+', label: 'Customer growth at Microsoft', detail: 'AI/ML partner ecosystem' },
  { value: '30+', label: 'AI enablement initiatives', detail: '$1.5M funding into $5M+ revenue' },
  { value: '200%', label: 'New customer acquisition', detail: 'At Crayon as GM' },
  { value: '$51M', label: 'P&L managed', detail: 'From $43M at Crayon US' },
  { value: '95/100', label: 'Manager rating', detail: '5-year average' },
]

const careerTimeline: TimelineItem[] = [
  {
    title: 'Founder & CEO',
    company: 'GetLatest AI / Fenix Venture',
    period: 'Jun 2024 - Present',
    current: true,
    bullets: [
      'Building SnappyClaw, a production AI agent platform with real customers.',
      'GetLatest AI consulting practice focused on enterprise AI strategy and implementation.',
    ],
  },
  {
    title: 'CEO / President',
    company: 'Blue Eye',
    period: 'Apr 2023 - Jun 2024',
    bullets: [
      'Grew P&L from $5M to $11M. Led team of 150.',
      'EBITDA turnaround: -$250K/month to +$125K/month in 6 months.',
    ],
  },
  {
    title: 'CEO / General Manager',
    company: 'Crayon US',
    period: 'Oct 2021 - Jan 2023',
    bullets: [
      'Grew revenue from $43M to $51M. 200-person org.',
      'Transformed Crayon US from licensing/cloud to AI/ML/Analytics/M365 managed services.',
      '200% increase in new customer acquisition. Awards: 2024 Utah Fast 50, 2023 Utah 100.',
    ],
  },
  {
    title: 'Sr. Director, Partner Ecosystem',
    company: 'Microsoft',
    period: 'Jul 2017 - Oct 2021',
    bullets: [
      'Led AI/ML and analytics partner strategy. $100M+ in customer growth driven.',
      '30+ AI enablement initiatives. Partners scaled 10x, 14x, 20x within 4 years.',
      '2020 Leadership Spotlight, 2019 Manager of the Year.',
    ],
  },
  {
    title: 'Principal Software Engineer',
    company: 'Microsoft',
    period: 'Sept 2013 - Jun 2017',
    bullets: [
      'Azure adoption architecture and technical consultation.',
      'Led technical architecture for large enterprise customers.',
    ],
  },
  {
    title: 'Software Engineering Manager',
    company: 'Microsoft',
    period: 'Mar 2012 - Sept 2013',
    bullets: [
      'Massively distributed software systems for global data center infrastructure.',
    ],
  },
  {
    title: 'Solutions Architect',
    company: 'LDS Church',
    period: 'Jul 2008 - Mar 2012',
    bullets: [
      'Architecture roadmaps across .Net, Java, AWS, and Azure.',
      'Multi-million dollar project delivery.',
    ],
  },
  {
    title: 'Development Manager',
    company: 'TaxWorks',
    period: 'Jun 2004 - Jul 2008',
    bullets: ['Led development team for tax software products.'],
  },
]

export default function Home() {
  const { theme } = useTheme()

  const headlineSize = theme === 'arcade'
    ? 'font-pixel text-lg sm:text-xl lg:text-2xl leading-loose'
    : 'text-4xl sm:text-5xl lg:text-6xl font-bold'

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-16">
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
              Available for fractional engagements
            </motion.div>

            <h1 className={`text-[var(--text)] ${headlineSize} leading-tight mb-4`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              Justin S. Henriksen
              {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--primary)] text-xl sm:text-2xl font-semibold mb-4"
            >
              20 years building technology. Available fractionally.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[var(--muted)] text-lg max-w-2xl mb-10 leading-relaxed"
            >
              Former Microsoft Sr. Director. CEO twice over. Now applying that experience as a
              fractional AI Officer and Solutions Architect to companies that need senior leadership
              without the full-time overhead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/fractional/ai-officer" variant="primary">
                Fractional AI Officer
              </Button>
              <Button href="/fractional/solutions-architect" variant="secondary">
                Fractional Solutions Architect
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* What I Do */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[var(--text)] mb-10"
          >
            What I do
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/fractional/ai-officer"
                className="block border border-[var(--border)] bg-[var(--card)] rounded p-8 hover:border-[var(--primary)] transition-all duration-300 group h-full"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded border border-[var(--primary)] mb-5 bg-[var(--bg)] group-hover:bg-[var(--primary)]/10 transition-colors">
                  <Brain className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  Fractional AI Officer
                </h3>
                <p className="text-[var(--muted)] mb-6 leading-relaxed">
                  AI strategy, governance, vendor selection, and implementation oversight.
                  Get senior AI leadership without the $400K+ full-time cost.
                </p>
                <span className="text-sm font-mono text-[var(--primary)]">Learn more ›</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Link
                href="/fractional/solutions-architect"
                className="block border border-[var(--border)] bg-[var(--card)] rounded p-8 hover:border-[var(--primary)] transition-all duration-300 group h-full"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded border border-[var(--primary)] mb-5 bg-[var(--bg)] group-hover:bg-[var(--primary)]/10 transition-colors">
                  <Cpu className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  Fractional Solutions Architect
                </h3>
                <p className="text-[var(--muted)] mb-6 leading-relaxed">
                  AI system design, cloud architecture, M365 agent deployments, and the technical
                  decisions that compound over time.
                </p>
                <span className="text-sm font-mono text-[var(--primary)]">Learn more ›</span>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Key Stats */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">By the numbers</h2>
            <p className="text-[var(--muted)]">Results from two decades of building and leading technology organizations.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Career Snapshot */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Career snapshot</h2>
            <p className="text-[var(--muted)]">
              20 years from developer to CEO - and now fractional.
            </p>
          </motion.div>

          <Timeline items={careerTimeline} condensed />
        </Container>
      </section>

      {/* Evidence */}
      <EvidenceSection />

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
              Ready to talk?
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
              Whether you need AI strategy, technical architecture, or both -
              let&apos;s figure out if there&apos;s a fit.
            </p>
            <Button href="mailto:justin.henriksen@gmail.com" variant="primary">
              Book a strategy conversation
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
