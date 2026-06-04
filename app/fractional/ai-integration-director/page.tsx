'use client'

import { motion } from 'framer-motion'
import { Map, GraduationCap, BarChart3, Users, Shield, GitMerge, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/sections/stat-card'
import { useTheme } from '@/components/theme/theme-provider'

const jobRequirements = [
  {
    icon: Map,
    requirement: 'Architect and lead a statewide AI integration strategy',
    delivery: 'A sequenced AI roadmap built around your actual institutional priorities - curriculum, workforce, research, and operations. Not a generic framework. A plan you can act on.',
  },
  {
    icon: Users,
    requirement: 'Collaborate with industry and higher education partners to develop AI-centric curricula and certification programs',
    delivery: 'Experience building AI partner programs at scale across industry and education. At Microsoft, led 30+ AI enablement initiatives with universities and employers. I know how these partnerships get built - and where they break down.',
  },
  {
    icon: BarChart3,
    requirement: 'Establish performance indicators to measure the impact of AI-related initiatives',
    delivery: 'KPIs, adoption metrics, and outcome frameworks that connect AI activity to institutional goals. Built into the engagement from day one, not added as an afterthought.',
  },
  {
    icon: GraduationCap,
    requirement: 'Develop AI upskilling programs for faculty, staff, and students',
    delivery: 'Training design, change management, and the playbooks that make adoption stick. I have built these for organizations ranging from 200-person teams to partner networks spanning multiple countries.',
  },
  {
    icon: Shield,
    requirement: 'Governance, policy, and responsible AI frameworks',
    delivery: 'Academic AI governance is different from enterprise AI governance. I can help you build guardrails, responsible use policy, and human review processes that work in an educational context - before something surfaces in a faculty senate meeting.',
  },
  {
    icon: GitMerge,
    requirement: 'Implementation oversight and vendor evaluation',
    delivery: 'Unbiased vendor assessment - no kickbacks, no preferred partners. And unlike a pure strategist, I can read a vendor\'s architecture proposal and tell you when it doesn\'t match what they pitched.',
  },
]

const comparison = [
  {
    label: 'Cost',
    fte: '$100,000 - $120,000 salary + benefits + recruiting',
    fractional: 'Monthly retainer scaled to your actual need',
  },
  {
    label: 'Time to start',
    fte: '3-6 month search, interview, and onboarding',
    fractional: 'Engaged within weeks',
  },
  {
    label: 'Flexibility',
    fte: 'Full-time headcount, annual budget commitment',
    fractional: 'Adjusts as priorities shift - no severance',
  },
  {
    label: 'Risk',
    fte: 'Wrong hire = a year of budget and momentum lost',
    fractional: 'Disengage without consequence if it isn\'t working',
  },
  {
    label: 'Caliber',
    fte: 'Sr. AI leaders command $300K-$500K+ in total comp. At $120K, you get who\'s available.',
    fractional: 'Former Microsoft Sr. Director, CEO who led $51M AI transformation - scoped to your budget',
  },
  {
    label: 'Overhead',
    fte: 'HR, benefits administration, equity, onboarding',
    fractional: 'None',
  },
]

const proofPoints = [
  { value: '25yr', label: 'Building with technology', detail: 'IC to CEO and back to shipping code' },
  { value: '30+', label: 'AI initiatives led', detail: '$1.5M funding into $5M+ revenue' },
  { value: '$51M', label: 'P&L transformed', detail: 'After AI/ML shift at Crayon' },
  { value: 'Utah', label: 'MBA, U of U', detail: 'Local. Knows the ecosystem.' },
]

export default function AIIntegrationDirectorPage() {
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
              Fractional AI Integration Director
            </motion.div>

            <h1 className={`text-[var(--text)] leading-tight mb-6 ${
              theme === 'arcade'
                ? 'font-pixel text-base sm:text-lg leading-loose'
                : theme === 'terminal' || theme === 'futuristic'
                ? 'font-mono text-2xl sm:text-3xl lg:text-4xl'
                : 'text-3xl sm:text-4xl lg:text-5xl font-bold'
            }`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              $100,000 - $120,000 won&apos;t attract someone who has actually done this at scale. Fractional will.
              {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--muted)] text-lg sm:text-xl max-w-3xl mb-8 leading-relaxed"
            >
              A Director of AI Integration with real credentials - someone who has led AI transformation
              at a major organization, shipped production systems, and built programs that lasted - commands
              $300,000 to $500,000+ in total compensation. At $100K-$120K, you&apos;re competing for people
              who are figuring it out on your timeline and your budget. A fractional engagement gets you
              the senior leader the role actually requires, scoped to what you need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="https://cal.com/justinh-cal" variant="primary">
                Book a 30-minute conversation
              </Button>
              <Button href="/fractional/ai-officer" variant="secondary">
                See the full AI Officer page
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Salary reality check */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--primary)] bg-[var(--card)] rounded p-6 sm:p-8 max-w-3xl"
          >
            <h2 className="text-xl font-bold text-[var(--text)] mb-4">
              The honest picture on AI talent at this salary band
            </h2>
            <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
              <p>
                Senior AI leaders with real-world track records - people who have run large-scale AI programs,
                managed vendor relationships worth millions, transformed organizational capabilities, and shipped
                production systems - are compensated at $300,000 to $500,000+ in total comp. That&apos;s the market.
              </p>
              <p>
                At $100K-$120K, the applicant pool is mostly people who have studied AI, advised on AI,
                or been adjacent to AI initiatives without owning outcomes. You will find candidates with
                impressive-sounding titles and certifications. You will have a harder time finding someone
                who has been accountable for results.
              </p>
              <p className="text-[var(--text)] font-medium">
                Fractional changes the math. You get a former Microsoft Sr. Director and CEO who has
                led $51M P&L transformation, managed 30+ AI initiatives, and is shipping production AI
                today - not in theory. The engagement is scoped to your actual need, so the cost
                fits your budget. The capability doesn&apos;t get watered down to match it.
              </p>
            </div>
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
              What the job requires. What I deliver.
            </h2>
            <p className="text-[var(--muted)]">
              The standard Director of AI Integration job description, mapped to concrete deliverables.
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

      {/* Comparison */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">
              Full-time hire vs. fractional engagement
            </h2>
            <p className="text-[var(--muted)]">
              The math works differently when you need the capability, not the headcount.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-[var(--muted)] font-mono font-normal border-b border-[var(--border)] w-1/3"></th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--text)] border-b border-[var(--border)]">
                    FTE Director ($100K - $120K)
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-[var(--primary)] border-b border-[var(--border)]">
                    Fractional (Justin)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
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

      {/* Proof points */}
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
                headline: 'Built AI/ML education programs at Microsoft scale',
                body: 'As Sr. Director of Partner Ecosystem for AI/ML at Microsoft, built the programs that trained and certified hundreds of partners across the US and multiple countries. AI Accelerate, the Data Science Partner Program, and AI Country Plans - curriculum design, partner enablement, and scaled adoption all in scope. This is directly applicable to building AI integration programs across institutions and employers.',
              },
              {
                headline: 'MBA, University of Utah - local, connected',
                body: 'Not someone parachuting in. I understand the Utah education landscape, the state\'s workforce development priorities, and the industry relationships that make programs like this actually work. The ecosystem that a statewide AI integration initiative depends on is one I\'m already part of.',
              },
              {
                headline: 'Led AI transformation at the P&L level',
                body: 'As GM at Crayon US, transformed a $43M to $51M business from a licensing reseller into a full AI/ML managed services provider. This wasn\'t advisory work. It was building practices, hiring, pricing, delivery, and go-to-market from scratch. That\'s the experience that makes an AI integration strategy credible - I\'ve operated the thing, not just designed it.',
              },
              {
                headline: 'Shipping production AI today',
                body: 'SnappyClaw is a live, multi-tenant AI agent platform with real enterprise customers. When I advise on AI tool selection, curriculum design, or implementation risk, it\'s grounded in what\'s actually working in production in 2026 - not what a vendor slide deck says.',
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

      {/* How it works */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">How it works</h2>
            <p className="text-[var(--muted)]">Scoped engagements. No long procurement cycles.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: '30-minute conversation',
                desc: 'Tell me what you\'re trying to accomplish and where you\'re stuck. I\'ll tell you honestly if a fractional engagement makes sense for your situation. No pitch deck.',
              },
              {
                step: '02',
                title: 'Scoped engagement',
                desc: 'Clear deliverables, timeline, and a monthly retainer. You know exactly what you\'re getting and what it costs before anything starts.',
              },
              {
                step: '03',
                title: 'Monthly retainer',
                desc: 'Adjust scope as priorities shift. Disengage without severance when the work is done. Or build on the engagement as the program scales.',
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
              Worth a 30-minute conversation
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
              If you&apos;re building an AI integration program and need senior leadership to get it right,
              let&apos;s talk. No obligation, no pitch deck.
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
