'use client'

import { motion } from 'framer-motion'
import { Map, GraduationCap, BarChart3, Users, Shield, GitMerge, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { StatCard } from '@/components/sections/stat-card'
import { useTheme } from '@/components/theme/theme-provider'

const jobRequirements = [
  {
    icon: Map,
    requirement: 'Architect and lead a statewide AI integration strategy',
    delivery: 'At Microsoft, I designed and executed AI strategy across hundreds of partners, universities, and employers spanning multiple states and countries. I know what a statewide program requires structurally - and where these initiatives typically break down two years in.',
  },
  {
    icon: Users,
    requirement: 'Collaborate with industry and higher education partners to develop AI-centric curricula and certification programs',
    delivery: 'I built the AI partner enablement programs that connected the Microsoft ecosystem to universities and employers at scale - AI Accelerate, the Data Science Partner Program, AI Country Plans. The U already has strong industry relationships through Silicon Slopes. I know how to activate them for something like this.',
  },
  {
    icon: BarChart3,
    requirement: 'Establish performance indicators to measure the impact of AI-related initiatives',
    delivery: 'I\'ve run $1.5M in AI initiative funding and tracked it to $25M+ in measurable outcomes. I can build the measurement framework this program needs - one that will hold up when the legislature or the board asks how it\'s going.',
  },
  {
    icon: GraduationCap,
    requirement: 'Develop AI upskilling programs for faculty, staff, and students',
    delivery: 'Training design and change management for AI adoption is something I\'ve done at organizations ranging from 200-person teams to partner networks across multiple countries. Faculty adoption in particular requires a different approach than corporate upskilling. I\'ve thought carefully about this.',
  },
  {
    icon: Shield,
    requirement: 'Governance, policy, and responsible AI frameworks',
    delivery: 'Academic AI governance has to work in a shared governance environment - faculty senate, IRB considerations, student data, research integrity. I can build a framework that doesn\'t just satisfy a compliance checklist, but actually holds up in practice.',
  },
  {
    icon: GitMerge,
    requirement: 'Implementation oversight and vendor evaluation',
    delivery: 'The AI vendor landscape is full of promises. I can read a proposal and tell you whether the architecture will actually do what they say. No vendor relationships to protect. No kickbacks. Just an honest assessment.',
  },
]

const proofPoints = [
  { value: 'Since 2004', label: 'Building with technology', detail: 'IC to CEO and back to shipping code' },
  { value: '30+', label: 'AI initiatives led', detail: '$1.5M funding into $25M+ revenue' },
  { value: '$51M', label: 'P&L transformed', detail: 'After AI/ML shift at Crayon' },
  { value: 'Eccles', label: 'MBA, U of U', detail: 'David Eccles School of Business' },
]

export default function AIIntegrationDirectorPage() {
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
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs font-mono text-[var(--muted)] mb-8 uppercase tracking-widest"
            >
              University of Utah - Director of AI Integration
            </motion.p>

            <h1 className={`text-[var(--text)] leading-tight mb-6 ${
              theme === 'arcade'
                ? 'font-pixel text-base sm:text-base leading-loose'
                : theme === 'terminal' || theme === 'futuristic'
                ? 'font-mono text-2xl sm:text-3xl lg:text-4xl'
                : 'text-3xl sm:text-4xl lg:text-5xl font-bold'
            }`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              The U needs senior AI leadership. The salary band won&apos;t attract it. Fractional solves that.
              {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--muted)] text-base sm:text-xl leading-relaxed"
            >
              People who have actually led AI integration at scale - built the programs, managed the
              vendors, transformed organizations, and shipped systems that worked - command $300K-$500K+
              in total comp. At $100K-$120K, the U will get applicants who are adjacent to that work,
              not accountable for it. A fractional engagement is a different structure: senior
              experience scoped to what the University actually needs, at a cost that fits the budget.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[var(--muted)] text-base sm:text-xl leading-relaxed mt-4"
            >
              I graduated from the David Eccles School of Business. I spent nearly a decade at
              Microsoft - as a software engineering manager, principal engineer, and ultimately Sr.
              Director of Partner Ecosystem for AI/ML - building the programs that connected
              universities and employers across the country. I ran a $51M P&amp;L transformation into
              AI/ML managed services. I&apos;m local, I know the institution, and I&apos;m currently building
              and operating a production AI platform in Salt Lake City.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Job requirements mapped */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">
              What the position requires. What I bring to it.
            </h2>
            <p className="text-[var(--muted)]">
              The U&apos;s job posting, mapped against actual experience.
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobRequirements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-6 grid sm:grid-cols-2 gap-4"
              >
                <div className="flex gap-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded border border-[var(--border)] shrink-0 bg-[var(--bg)]">
                    <item.icon className="w-4 h-4 text-[var(--muted)]" />
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed italic">&ldquo;{item.requirement}&rdquo;</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text)] leading-relaxed">{item.delivery}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Background */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Background</h2>
            <p className="text-[var(--muted)]">The experience that makes this relevant.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {proofPoints.map((p, i) => (
              <StatCard key={i} {...p} index={i} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                headline: 'MBA, David Eccles School of Business',
                body: 'I understand the University\'s context - the academic priorities, the faculty governance structure, the relationship between the U and the state, and the Silicon Slopes industry ecosystem the U is already embedded in. This isn\'t a national search candidate who will spend their first year learning the landscape.',
              },
              {
                headline: 'Built the Microsoft AI/ML partner programs that connected employers and universities',
                body: 'AI Accelerate, the Data Science Partner Program, AI Country Plans. Curriculum design, employer certification pathways, and adoption programs built at scale across the US and multiple countries. The institutional partnership model the U is describing is work I\'ve done - just at the Microsoft partner ecosystem level.',
              },
              {
                headline: 'Led AI transformation at P&L accountability level',
                body: 'As GM at Crayon US, transformed a $43M to $51M business from a traditional reseller into a full AI/ML managed services provider. Not advisory work - building practices, hiring, service delivery, and go-to-market. The credibility to lead an AI integration strategy comes from having been responsible for one.',
              },
              {
                headline: 'Shipping production AI in Salt Lake City today',
                body: 'Snappy Agents is a live, multi-tenant AI agent platform with enterprise customers. When I advise on AI tools, implementation risk, or what a curriculum should prepare students to work with, it is grounded in what is actually working in production systems in 2026 - not white papers or vendor roadmaps.',
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
            <h3 className="font-bold text-[var(--text)] mb-3">Credentials</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'MBA, University of Utah - David Eccles School of Business',
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

      {/* Close */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container narrow>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">
              If it&apos;s worth a conversation
            </h2>
            <p className="text-[var(--muted)] mb-6 leading-relaxed">
              I&apos;m local, I know the institution, and I have done exactly this kind of work.
              If the Dean or the hiring team wants to talk through what a fractional engagement
              could look like for what the U is trying to build, I&apos;m easy to reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <a
                href="mailto:justin@getlatest.ai"
                className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline font-medium"
              >
                justin@getlatest.ai
              </a>
              <span className="text-[var(--muted)] hidden sm:inline">·</span>
              <a
                href="https://www.linkedin.com/in/henriksenjustin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline font-medium"
              >
                linkedin.com/in/henriksenjustin
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
