'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/sections/stat-card'
import { Timeline, type TimelineItem } from '@/components/sections/timeline'
import { useTheme } from '@/components/theme/theme-provider'

const deliverables = [
  {
    icon: '🗺️',
    title: 'AI strategy and roadmap',
    desc: 'Where to start, what to build, what to buy. A sequenced plan that maps to your actual business - not a generic AI framework.',
  },
  {
    icon: '🛡️',
    title: 'Governance and risk framework',
    desc: 'Guardrails, policy, compliance, and human review processes before something goes wrong. Not after.',
  },
  {
    icon: '🔍',
    title: 'Vendor evaluation and selection',
    desc: 'Unbiased assessment. No vendor kickbacks. You get a recommendation that serves your needs, not a sales commission.',
  },
  {
    icon: '🎓',
    title: 'Team upskilling and change management',
    desc: 'AI only works if your team can use it. Training, playbooks, and the change management to make adoption stick.',
  },
  {
    icon: '🔗',
    title: 'Implementation oversight',
    desc: 'Bridging strategy and delivery. I can review code, challenge architectural decisions, and make sure what ships matches what was planned.',
  },
  {
    icon: '📊',
    title: 'Board and executive communication',
    desc: 'Translating AI for non-technical leaders. I can run board sessions, write executive briefs, and help leadership make informed decisions.',
  },
]

const proofPoints = [
  { value: '9.5yr', label: 'At Microsoft', detail: 'Including Sr. Director of AI/ML partner ecosystem' },
  { value: '30+', label: 'AI initiatives', detail: '$1.5M funding into $5M+ revenue' },
  { value: '$51M', label: 'P&L at Crayon', detail: 'After AI/ML transformation' },
  { value: 'Live', label: 'Production AI platform', detail: 'SnappyClaw - real customers today' },
]

const fteVsFractional = [
  {
    label: 'Total comp',
    fte: '$300,000 - $500,000+',
    fractional: 'Scales with actual need',
  },
  {
    label: 'Time to start',
    fte: '3-6 month hiring timeline',
    fractional: 'Engaged within weeks',
  },
  {
    label: 'Overhead',
    fte: 'Benefits, equity, recruiting fees',
    fractional: 'None',
  },
  {
    label: 'Flexibility',
    fte: 'Full-time headcount, fixed scope',
    fractional: 'Adjusts as needs change',
  },
  {
    label: 'Risk',
    fte: 'Bad hire = 6-12 months wasted',
    fractional: 'Disengage without severance',
  },
  {
    label: 'Seniority',
    fte: 'Depends on who you can hire',
    fractional: 'Sr. Director / CEO-level from day one',
  },
]

const careerTimeline: TimelineItem[] = [
  {
    title: 'Founder & CEO',
    company: 'GetLatest AI / Fenix Venture',
    period: 'Jun 2024 - Present',
    current: true,
    bullets: [
      'Building SnappyClaw: a production multi-agent AI platform with real enterprise customers.',
      'GetLatest AI consulting: AI strategy and implementation for businesses making the transition.',
      'Writing actively on AI agent architecture at getlatest.ai/blog.',
    ],
  },
  {
    title: 'CEO / General Manager',
    company: 'Crayon US',
    period: 'Oct 2021 - Jan 2023',
    bullets: [
      'Transformed Crayon US from licensing/cloud reseller to AI/ML/Analytics/M365 managed services provider.',
      '$43M to $51M P&L. 200% increase in new customer acquisition.',
      '200-person org. Awards: 2024 Utah Fast 50, 2023 Utah 100.',
    ],
  },
  {
    title: 'Sr. Director, Partner Ecosystem (AI/ML)',
    company: 'Microsoft',
    period: 'Jul 2017 - Oct 2021',
    bullets: [
      'Led AI/ML and advanced analytics partner strategy for the Microsoft ecosystem.',
      '30+ AI enablement initiatives driving $5M+ partner revenue.',
      '$100M+ in customer growth driven through the partner ecosystem.',
      'Partners scaled 10x, 14x, and 20x within 4 years. 2020 Leadership Spotlight, 2019 Manager of the Year.',
    ],
  },
]

export default function AIOfficerrPage() {
  const { theme } = useTheme()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-16">
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
              Fractional AI Officer
            </motion.div>

            <h1 className={`text-[var(--text)] leading-tight mb-6 ${
              theme === 'arcade'
                ? 'font-pixel text-base sm:text-lg leading-loose'
                : theme === 'terminal' || theme === 'futuristic'
                ? 'font-mono text-2xl sm:text-3xl lg:text-4xl'
                : 'text-3xl sm:text-4xl lg:text-5xl font-bold'
            }`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              Your AI strategy deserves a leader who has done it - not someone figuring it out on your dime.
              {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--muted)] text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed"
            >
              Fractional AI Officer. Available to drive your AI roadmap, governance, vendor selection,
              and implementation - without the full-time overhead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="mailto:justin.henriksen@gmail.com" variant="primary">
                Book a strategy conversation
              </Button>
              <Button href="https://www.linkedin.com/in/henriksenjustin" variant="secondary" external>
                View LinkedIn
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* FTE vs Fractional */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">
              Why fractional makes sense right now
            </h2>
            <p className="text-[var(--muted)]">
              Most companies need senior AI leadership. Most can&apos;t justify the full-time cost, risk, or timeline.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-[var(--muted)] font-mono font-normal border-b border-[var(--border)] w-1/3"></th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text)] border-b border-[var(--border)]">
                    FTE AI Officer
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--primary)] border-b border-[var(--border)]">
                    Fractional (Justin)
                  </th>
                </tr>
              </thead>
              <tbody>
                {fteVsFractional.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="border-b border-[var(--border)] hover:bg-[var(--card)] transition-colors"
                  >
                    <td className="py-3 px-4 text-[var(--muted)] font-mono font-semibold">{row.label}</td>
                    <td className="py-3 px-4 text-[var(--text)]">{row.fte}</td>
                    <td className="py-3 px-4 text-[var(--primary)] font-semibold">{row.fractional}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* What you get */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">What you get</h2>
            <p className="text-[var(--muted)]">Concrete deliverables, not advisory theater.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-5 hover:border-[var(--primary)] transition-colors duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Justin */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Why Justin specifically</h2>
            <p className="text-[var(--muted)]">Proof over positioning.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {proofPoints.map((p, i) => (
              <StatCard key={i} {...p} index={i} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                headline: '9.5 years at Microsoft',
                body: 'Including Sr. Director of Partner Ecosystem for AI/ML and analytics. Led the team that built out the Microsoft AI partner ecosystem from scratch.',
              },
              {
                headline: 'Led 30+ AI enablement initiatives',
                body: 'At Microsoft, managed $1.5M in AI initiative funding and converted it into $5M+ in sustainable partner revenue.',
              },
              {
                headline: 'Transformed Crayon US',
                body: 'As GM, pivoted a traditional licensing and cloud reseller into a full AI/ML/Analytics/M365 managed services provider.',
              },
              {
                headline: 'Shipping production AI today',
                body: 'SnappyClaw is a live AI agent platform with real enterprise customers. Blogs actively on AI agent architecture and MCP integrations at getlatest.ai/blog.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 border border-[var(--border)] bg-[var(--card)] rounded p-5"
              >
                <div className="text-[var(--primary)] font-bold text-2xl shrink-0">›</div>
                <div>
                  <h3 className="font-bold text-[var(--text)] mb-1">{item.headline}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 border border-[var(--border)] bg-[var(--card)] rounded p-5"
          >
            <h3 className="font-bold text-[var(--text)] mb-3">Education and credentials</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'MBA, University of Utah',
                'BA Computer Science, Weber State University',
                'Microsoft Data Science Degree',
                'Azure MCSE (Microsoft Certified Solutions Expert)',
                'Six Sigma / Lean Six Sigma Green Belt',
              ].map((cred, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <span className="text-[var(--primary)]">✓</span>
                  {cred}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Career Evidence */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Career evidence</h2>
            <p className="text-[var(--muted)]">The roles that made the expertise.</p>
          </motion.div>
          <Timeline items={careerTimeline} />
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
              A 30-minute conversation to understand your AI challenges.
              No pitch deck. No obligation.
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
