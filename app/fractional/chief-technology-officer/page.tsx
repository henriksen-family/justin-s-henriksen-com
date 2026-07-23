'use client'

import { motion } from 'framer-motion'
import { Users, Map, GitMerge, Shield, Cpu, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/sections/stat-card'
import { Timeline, type TimelineItem } from '@/components/sections/timeline'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { useTheme } from '@/components/theme/theme-provider'

const responsibilities = [
  {
    icon: Map,
    title: 'Technology roadmap and strategy',
    desc: 'A sequenced, prioritized technology plan tied to your business goals - not a wish list. What to build now, what to defer, and what to stop doing.',
  },
  {
    icon: Users,
    title: 'Engineering org design and hiring',
    desc: 'Structuring the team for where you are and where you are going. Hiring criteria, interview frameworks, onboarding, and the culture that retains senior engineers.',
  },
  {
    icon: GitMerge,
    title: 'Technical debt and architecture decisions',
    desc: 'Knowing which debt to pay down and when. Guiding the architectural inflection points that determine whether you can scale - before they become emergencies.',
  },
  {
    icon: Shield,
    title: 'Security, compliance, and risk',
    desc: 'Security posture, compliance requirements, vendor risk, and the engineering practices that keep you out of the news. Built into the process, not bolted on after.',
  },
  {
    icon: Cpu,
    title: 'AI integration and product direction',
    desc: 'Evaluating where AI actually adds value in your product. Build vs. buy decisions, LLM vendor selection, agent architecture, and what your competitors are about to do.',
  },
  {
    icon: TrendingUp,
    title: 'Board and investor technical credibility',
    desc: 'Translating your technical reality for boards, investors, and acquirers. Architecture reviews, due diligence support, and the technical narrative that builds confidence.',
  },
]

const proofPoints = [
  { value: '25yr', label: 'From IC to CEO', detail: 'And back to shipping code today' },
  { value: '200', label: 'Person org led', detail: 'As GM at Crayon US' },
  { value: '$51M', label: 'P&L responsibility', detail: 'While staying close to the architecture' },
  { value: 'Live', label: 'Production AI platform', detail: 'SnappyClaw - daily commits' },
]

const fteVsFractional = [
  { label: 'Total comp', fte: '$350,000 - $600,000+', fractional: 'Scales with actual need' },
  { label: 'Time to start', fte: '3-6 month search + notice period', fractional: 'Engaged within weeks' },
  { label: 'Overhead', fte: 'Equity, benefits, recruiting fees', fractional: 'None' },
  { label: 'Flexibility', fte: 'Full-time headcount, fixed scope', fractional: 'Adjusts as company evolves' },
  { label: 'Risk', fte: 'Wrong CTO = 12-18 months wasted', fractional: 'Disengage without severance' },
  { label: 'Right for', fte: 'Series B+ with stable technical direction', fractional: 'Seed to Series A, transitions, or specific problems' },
]

const whenItFits = [
  {
    title: 'Pre-seed to Series A',
    desc: 'You need senior technical leadership but cannot justify a $400K+ FTE. A fractional CTO gives you the judgment without the overhead - and helps you hire the right full-time person when the time comes.',
  },
  {
    title: 'Between CTOs',
    desc: 'Your last CTO left and you need continuity. Keep the engineering org functioning, preserve institutional knowledge, and avoid a chaotic search while things are on fire.',
  },
  {
    title: 'Specific technical inflection',
    desc: 'A major architectural pivot, a platform migration, an AI integration initiative, or a security audit. Bring in senior leadership for the hard part and right-size from there.',
  },
  {
    title: 'Investor or board requirement',
    desc: 'Investors want technical credibility before the next round. A fractional CTO bridges the gap while you find the right permanent hire.',
  },
]

const careerTimeline: TimelineItem[] = [
  {
    title: 'Founder & CEO',
    company: 'GetLatest AI / Fenix Venture',
    period: 'Jun 2024 - Present',
    current: true,
    bullets: [
      'Architecting and shipping SnappyClaw: production multi-agent AI platform with paying enterprise customers.',
      'Full-stack technical leadership - product vision, system design, daily coding, and go-to-market.',
      'GetLatest AI consulting: fractional technology leadership for companies navigating AI adoption.',
    ],
  },
  {
    title: 'CEO / General Manager',
    company: 'Crayon US',
    period: 'Oct 2021 - Jan 2023',
    bullets: [
      'Led a 200-person technology org through a full business model transformation.',
      'Built AI/ML, Data, and M365 managed services practices from scratch: hiring, partner certifications, service catalog, pricing, and delivery playbooks.',
      '$43M to $51M P&L. 200% increase in new customer acquisition. Utah Fast 50, Utah 100.',
    ],
  },
  {
    title: 'Sr. Director, Partner Ecosystem (AI/ML)',
    company: 'Microsoft',
    period: 'Jul 2017 - Oct 2021',
    bullets: [
      'Led AI/ML and advanced analytics partner strategy for the Microsoft ecosystem.',
      '30+ AI enablement initiatives. $1.5M in initiative funding converted to $25M+ in partner revenue.',
      'Partners scaled 10x, 14x, and 20x within four years.',
    ],
  },
  {
    title: 'Principal Software Engineer',
    company: 'Microsoft',
    period: 'Sept 2013 - Jun 2017',
    bullets: [
      'Enterprise architecture advisory for Azure migrations at scale.',
      'Built the Azure SQL DTU Calculator - used by Microsoft field and partners.',
      'Architected Cloud Center of Excellence reference patterns adopted across the partner ecosystem.',
    ],
  },
  {
    title: 'Software Engineering Manager',
    company: 'Microsoft',
    period: 'Mar 2012 - Sept 2013',
    bullets: [
      'Led engineering teams building massively distributed systems for global data center infrastructure.',
      'Architecture decisions at the hardware and software boundary.',
    ],
  },
]

export default function CTOPage() {
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
              Fractional CTO
            </motion.div>

            <h1 className={`text-[var(--text)] leading-tight mb-6 ${
              theme === 'arcade'
                ? 'font-pixel text-base sm:text-base leading-loose'
                : theme === 'terminal' || theme === 'futuristic'
                ? 'font-mono text-2xl sm:text-3xl lg:text-4xl'
                : 'text-3xl sm:text-4xl lg:text-5xl font-bold'
            }`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              Technology leadership that scales with your company - not against it.
              {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--muted)] text-base sm:text-xl max-w-3xl mb-8 leading-relaxed"
            >
              Fractional CTO for companies that need senior technology leadership
              without the full-time overhead. Engineering org, technical roadmap, hiring,
              and the architecture decisions that determine whether you can grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="https://cal.com/justinh-cal" variant="primary">
                Book a strategy conversation
              </Button>
              <Button href="https://www.linkedin.com/in/henriksenjustin" variant="secondary" external>
                View LinkedIn
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* When it fits */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">When a fractional CTO makes sense</h2>
            <p className="text-[var(--muted)]">Not every stage needs a full-time CTO. Most need the judgment without the overhead.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {whenItFits.map((item, i) => (
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
                  <h3 className="font-bold text-[var(--text)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Why fractional makes sense right now</h2>
            <p className="text-[var(--muted)]">
              Most companies need senior technology leadership. Most can&apos;t justify the full-time cost, risk, or timeline.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-[var(--muted)] font-mono font-normal border-b border-[var(--border)] w-1/3"></th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text)] border-b border-[var(--border)]">
                    FTE CTO
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
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">What a fractional CTO actually does</h2>
            <p className="text-[var(--muted)]">Concrete responsibilities, not advisory theater.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {responsibilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-5 hover:border-[var(--primary)] transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded border border-[var(--primary)] mb-4 bg-[var(--bg)]">
                  <item.icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Proof Points */}
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
                headline: 'IC to CEO and back to shipping code',
                body: 'Started as a developer. Moved through engineering management, principal engineer, Sr. Director at Microsoft, and GM of a 200-person technology organization. Now back to building full-stack every day at GetLatest AI. That arc means the strategic and the tactical are not separate disciplines - they are the same job.',
              },
              {
                headline: 'Built and led a 200-person engineering org through transformation',
                body: 'As GM at Crayon US, rebuilt the entire organization from a licensing reseller into an AI/ML managed services provider. New practices, new hiring profiles, new service delivery, new culture. P&L went from $43M to $51M. That is what CTO-level organizational leadership looks like at scale.',
              },
              {
                headline: 'Shipping AI in production today - not advising from theory',
                body: 'SnappyClaw is a live, multi-tenant AI agent platform with paying enterprise customers. Multi-agent coordination, MCP integrations, Docker-based tenant isolation, centralized OAuth, human-in-the-loop approval architecture. Every CTO recommendation comes from what is actually working in production right now.',
              },
              {
                headline: 'Technical depth across the full Microsoft and cloud stack',
                body: 'Azure MCSE certified. AWS hands-on since 2008. GCP Vertex AI. 25 years of language depth across C#/.NET, Python, TypeScript, and Java. That breadth means vendor-agnostic recommendations - not attachment to whatever I last sold.',
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

      {/* Testimonials */}
      <TestimonialsSection
        ids={['lauren-tran', 'tara-darconte', 'tony-spencer']}
        title="What people say about the leadership"
        subtitle="From direct reports and colleagues across engineering, AI strategy, and executive leadership."
      />

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
            <p className="text-[var(--muted)]">From first commit to P&L leadership - and back to shipping code.</p>
          </motion.div>
          <Timeline items={careerTimeline} />
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">How engagements work</h2>
            <p className="text-[var(--muted)]">Project-based monthly retainers. Scoped to your situation.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Technology conversation',
                desc: '30 minutes to understand your current technical state, where the gaps are, and what leadership you actually need. No pitch deck. If there\'s a fit, we scope it together.',
              },
              {
                step: '02',
                title: 'Scoped engagement',
                desc: 'Clear deliverables, defined scope, and a monthly retainer. Whether that is roadmap development, engineering org work, or ongoing CTO coverage - you know exactly what you\'re getting.',
              },
              {
                step: '03',
                title: 'Monthly retainer',
                desc: 'Ongoing engagement billed monthly. Adjust scope as the company evolves. No severance, no long-term lock-in - disengage or transition to a full-time hire when the time is right.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-6"
              >
                <div className="text-3xl font-bold text-[var(--primary)] font-mono mb-3">{item.step}</div>
                <h3 className="font-bold text-[var(--text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
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
              30 minutes to understand your technology challenges and current state.
              No pitch. No obligation.
            </p>
            <Button href="https://cal.com/justinh-cal" variant="primary">
              Book a strategy conversation
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
