'use client'

import { motion } from 'framer-motion'
import { ScanSearch, Bot, Cloud, Plug, FileSearch, Users } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/sections/stat-card'
import { Timeline, type TimelineItem } from '@/components/sections/timeline'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { useTheme } from '@/components/theme/theme-provider'

const engagementTypes = [
  {
    icon: ScanSearch,
    title: 'Architecture review and advisory',
    desc: 'An outside set of eyes on your current state. What is working, what is fragile, what will bite you at scale.',
  },
  {
    icon: Bot,
    title: 'AI system design',
    desc: 'Agent architectures, RAG systems, MCP integrations, multi-agent coordination. Hands-on design, not whiteboard theory.',
  },
  {
    icon: Cloud,
    title: 'Cloud architecture - Azure, AWS, GCP',
    desc: 'Hands-on with all three clouds across 25 years - MCSE certified on Azure, AWS since 2008, GCP/Vertex AI for AI-native workloads. Platform-agnostic recommendation, not vendor loyalty.',
  },
  {
    icon: Plug,
    title: 'API and integration architecture',
    desc: 'System-to-system integration, event-driven architectures, API design that does not become technical debt.',
  },
  {
    icon: FileSearch,
    title: 'Technical due diligence',
    desc: 'For investors, acquirers, or boards who need to know what they are actually buying or building.',
  },
  {
    icon: Users,
    title: 'Engineering team mentorship',
    desc: 'Elevating team capabilities. Code reviews, architecture coaching, and the institutional knowledge transfer that actually sticks.',
  },
]

const domains = [
  {
    title: 'AI and Agent Systems',
    items: ['SnappyClaw multi-agent platform (live, paying customers)', 'MCP (Model Context Protocol) integrations', 'RAG system design and implementation', 'Multi-agent coordination and orchestration', 'LLM API integration and optimization'],
  },
  {
    title: 'Cloud and Infrastructure',
    items: ['Azure (MCSE certified) - AKS, AI Foundry, M365 Copilot, AD', 'AWS - EC2, Lambda, SageMaker, Bedrock, IAM', 'GCP - Vertex AI, Cloud Run, BigQuery, Gemini API', 'Multi-region, high-availability design at global scale', 'IaC, DevOps pipelines, containerization'],
  },
  {
    title: 'Software Engineering',
    items: ['25 years hands-on: C#/.NET, Python, TypeScript/JavaScript, Java', 'Distributed systems at global data center scale', 'Enterprise application architecture from ground up', 'Full product lifecycle - from first commit to production', 'Engineering management and technical mentorship'],
  },
  {
    title: 'Data and Analytics',
    items: ['AI/ML pipeline architecture', 'Advanced analytics at enterprise scale', 'SQL and NoSQL design patterns', 'Real-time data architectures', 'Data Science degree'],
  },
  {
    title: 'Enterprise Architecture',
    items: ['API design and governance', 'Event-driven and microservices patterns', 'Legacy modernization and platform migration', 'Technical due diligence for investors and acquirers', 'Architecture roadmaps across .NET, Java, AWS, and Azure'],
  },
  {
    title: 'Product Strategy',
    items: ['Product vision and roadmap for AI-native products', 'Build vs. buy vs. partner framework decisions', 'Go-to-market strategy for technical products', 'Commercializing technology: pricing, packaging, positioning', 'Product-market fit iteration with real customers'],
  },
]

const proofPoints = [
  { value: '25yr', label: 'Technical experience', detail: 'IC to CEO and back to building' },
  { value: '3', label: 'Cloud platforms', detail: 'Azure MCSE / AWS since 2008 / GCP Vertex AI' },
  { value: '$51M', label: 'P&L led as GM', detail: 'While staying close to the architecture' },
  { value: 'Live', label: 'Shipping code today', detail: 'SnappyClaw platform, daily commits' },
]

const careerTimeline: TimelineItem[] = [
  {
    title: 'Founder & CEO',
    company: 'GetLatest AI / Fenix Venture',
    period: 'Jun 2024 - Present',
    current: true,
    bullets: [
      'Architecting and shipping SnappyClaw: production AI agent platform with multi-agent coordination, MCP integrations, and enterprise customer deployments.',
      'Daily coding in TypeScript/Next.js. Hands-on system design for every feature.',
      'GetLatest AI consulting: technical architecture reviews and AI system design for enterprise clients.',
    ],
  },
  {
    title: 'Sr. Director, Partner Ecosystem',
    company: 'Microsoft',
    period: 'Jul 2017 - Oct 2021',
    bullets: [
      'Built the technical partner ecosystem for AI/ML and advanced analytics.',
      'Technical architecture advisory for the largest Microsoft AI/ML partners.',
      '$100M+ in customer growth driven through architectural alignment.',
    ],
  },
  {
    title: 'Principal Software Engineer',
    company: 'Microsoft',
    period: 'Sept 2013 - Jun 2017',
    bullets: [
      'Azure adoption architecture and technical consultation for enterprise Azure migrations.',
      'Led architecture review boards for strategic Data & AI customer engagements.',
      'Built the Azure SQL DTU Calculator - sizing tool used by Microsoft field and partners in the early Azure SQL migration era.',
      'Architected Cloud Center of Excellence reference patterns adopted across the partner ecosystem.',
      'Hands-on technical depth across Azure SQL, Azure ML, Azure Data Factory, Synapse, Databricks, Cognitive Services.',
    ],
  },
  {
    title: 'Software Engineering Manager',
    company: 'Microsoft',
    period: 'Mar 2012 - Sept 2013',
    bullets: [
      'Led engineering team building massively distributed software systems for global data center infrastructure.',
      'Managed architecture decisions at hardware and software boundary.',
    ],
  },
  {
    title: 'Solutions Architect',
    company: 'LDS Church',
    period: 'Jul 2008 - Mar 2012',
    bullets: [
      'Architecture roadmaps spanning .Net, Java, AWS, and Azure.',
      'Multi-million dollar project delivery across enterprise systems.',
      'Introduced cloud architecture patterns to the organization early in the AWS era.',
    ],
  },
  {
    title: 'Development Manager',
    company: 'TaxWorks',
    period: 'Jun 2004 - Jul 2008',
    bullets: [
      'Led development team for tax software products.',
      'Built the technical foundation that supported the platform for years after.',
    ],
  },
]

export default function SolutionsArchitectPage() {
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
              Fractional Solutions Architect
            </motion.div>

            <h1 className={`text-[var(--text)] leading-tight mb-6 ${
              theme === 'arcade'
                ? 'font-pixel text-base sm:text-base leading-loose'
                : theme === 'terminal' || theme === 'futuristic'
                ? 'font-mono text-2xl sm:text-3xl lg:text-4xl'
                : 'text-3xl sm:text-4xl lg:text-5xl font-bold'
            }`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
              25 years of hands-on technical work. None of the full-time overhead.
              {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--muted)] text-base sm:text-xl max-w-3xl mb-8 leading-relaxed"
            >
              Fractional Solutions Architect for AI integrations, Azure/AWS/GCP cloud systems, M365 agent deployments,
              and the technical decisions that compound over time.
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

      {/* Proof Points */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {proofPoints.map((p, i) => (
              <StatCard key={i} {...p} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement Types */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">
              What a fractional SA engagement looks like
            </h2>
            <p className="text-[var(--muted)]">
              Scoped to what you actually need. None of what you don&apos;t.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {engagementTypes.map((item, i) => (
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

      {/* What I'm building right now */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">The architecture I&apos;m running today</h2>
            <p className="text-[var(--muted)] max-w-3xl">
              Most architects advise from past experience. This is what I&apos;m actively designing, building, and shipping right now - and the decisions behind it.
            </p>
          </motion.div>

          {/* Three-layer overview */}
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                layer: 'Application layer',
                stack: 'Next.js 16, React 19, TypeScript, Tailwind 4, Supabase',
                why: 'Handles onboarding, configuration, approvals, analytics, and admin workflows. Chosen for fast product iteration, TypeScript-first development, and a pragmatic multi-tenant SaaS foundation without overbuilding infrastructure too early.',
              },
              {
                layer: 'Worker layer',
                stack: 'Python, Pydantic, HTTPX, JWT, pytest, MCP, Microsoft Agent Framework',
                why: 'Agent execution runs in separate worker services - not inside the web app request cycle. Agent systems need scheduled execution, retries, workflow state, long-running tasks, and fault isolation that a standard web process should not carry.',
              },
              {
                layer: 'Platform layer',
                stack: 'Docker, centralized OAuth gateway, WebSocket transport, fleet tooling',
                why: 'Handles integrations, runtime provisioning, transport, and operational controls. Managed runtime model with tenant isolation, predictable deployment, health checks, spend controls, and policy enforcement at the infrastructure level.',
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
                <div className="text-xs font-mono text-[var(--primary)] uppercase tracking-wide mb-2">{item.layer}</div>
                <div className="text-xs text-[var(--muted)] font-mono mb-4 leading-relaxed">{item.stack}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.why}</p>
              </motion.div>
            ))}
          </div>

          {/* Key decisions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--primary)] bg-[var(--card)] rounded p-7"
          >
            <h3 className="font-bold text-[var(--text)] mb-6 text-base">Decisions made and why they matter</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  decision: 'Human-in-the-loop by design',
                  reasoning: 'The system can research, classify, draft, score, and prepare actions automatically. But anything customer-facing or externally visible routes through an approval boundary. The real problem is not generating output - it is generating output that is trustworthy, reviewable, and operationally safe.',
                },
                {
                  decision: 'Centralized OAuth gateway',
                  reasoning: 'Instead of letting each product own its token lifecycle, all OAuth and third-party connections run through a shared gateway. Calendars, email, meetings, analytics, professional networks - one place. No duplicated auth logic, no connector drift, consistent entitlements and callback handling across the platform.',
                },
                {
                  decision: 'Microsoft Agent Framework for new orchestration',
                  reasoning: 'Standardizing new orchestration work on MAF rather than accumulating framework sprawl. Better built-in orchestration primitives, more forkable, less dependent on a single closed runtime pattern. Optimizing for long-term maintainability of multi-agent systems, not speed to first demo.',
                },
                {
                  decision: 'Not building a thin chat wrapper',
                  reasoning: 'Agent-native software means the architecture separates execution from UX at the infrastructure level. The agents have different runtime characteristics than the application - different process model, different failure modes, different scaling requirements. That separation is a first-class architectural concern, not an afterthought.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-[var(--primary)] font-bold text-base shrink-0 mt-0.5">›</div>
                  <div>
                    <h4 className="font-bold text-[var(--text)] mb-1 text-sm">{item.decision}</h4>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">{item.reasoning}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Selected Architectures */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Selected architectures</h2>
            <p className="text-[var(--muted)]">Shipped and used in production. Predates the current portfolio.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Azure SQL DTU Calculator',
                period: '2014-2015',
                stack: 'C#, ASP.NET, Azure SQL, JavaScript',
                description: 'Sizing tool for Azure SQL Database workloads. Translated on-prem SQL Server performance benchmarks into Azure DTU recommendations. Used by Microsoft field sellers and partners during the early Azure SQL migration era.',
              },
              {
                title: 'Bot Framework Training Architecture',
                period: '2016-2017',
                stack: 'C#, Node.js, Bot Framework, LUIS',
                description: 'Hands-on curriculum for the Microsoft Bot Framework, built as part of the Microsoft Data Science Degree program. Working code samples covering conversational AI before "agent" was a category.',
              },
              {
                title: 'Azure Data & AI Workshop Platform',
                period: '2018-2021',
                stack: 'Azure ML, Azure Data Factory, Apache Spark, Python',
                description: 'End-to-end hands-on workshops covering Azure Machine Learning, ADF, and Python ML pipelines. Delivered to Microsoft partners as part of the AI Accelerate and Data Science Partner Program enablement track.',
              },
              {
                title: 'Cloud Center of Excellence Reference Patterns',
                period: '2018-2021',
                stack: 'Azure platform-wide',
                description: 'Cloud architecture frameworks and best practices for enterprise adoption. Reference patterns the Microsoft partner ecosystem built against - covering governance, landing zones, and adoption methodology.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-[var(--text)]">{item.title}</h3>
                  <span className="text-xs font-mono text-[var(--primary)] border border-[var(--primary)] px-2 py-0.5 rounded-full shrink-0">{item.period}</span>
                </div>
                <div className="text-xs font-mono text-[var(--muted)] mb-3">{item.stack}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <TestimonialsSection
        ids={['lauren-tran', 'karen-trubisky', 'tony-spencer']}
        title="What people say about the engineering work"
        subtitle="From direct reports and colleagues who worked alongside the technical architecture and engineering leadership."
      />

      {/* Domains */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Domain expertise</h2>
            <p className="text-[var(--muted)]">Not a generalist. Deep in the areas that matter for modern AI systems.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-5"
              >
                <h3 className="font-bold text-[var(--primary)] mb-3 text-sm uppercase tracking-wide font-mono">
                  {domain.title}
                </h3>
                <ul className="space-y-1.5">
                  {domain.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <span className="text-[var(--primary)] shrink-0 mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
            <p className="text-[var(--muted)]">
              From writing code to running P&amp;Ls - and back to writing code. The full arc.
            </p>
          </motion.div>
          <Timeline items={careerTimeline} />
        </Container>
      </section>

      {/* Technical snapshot */}
      <section className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[var(--border)] bg-[var(--card)] rounded p-8"
          >
            <h2 className="text-xl font-bold text-[var(--text)] mb-6">Technical stack snapshot</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Languages', items: ['TypeScript / JavaScript', 'C# / .NET', 'Python', 'SQL'] },
                { label: 'Cloud', items: ['Azure (MCSE certified)', 'AWS (hands-on since 2008)', 'GCP / Vertex AI', 'Vercel / edge / Docker'] },
                { label: 'AI/ML', items: ['OpenAI / Anthropic APIs', 'RAG architectures', 'MCP protocol', 'Agent frameworks'] },
                { label: 'Data', items: ['PostgreSQL / Supabase', 'NoSQL patterns', 'Analytics pipelines', 'Real-time systems'] },
              ].map((col, i) => (
                <div key={i}>
                  <h3 className="text-xs font-mono text-[var(--primary)] uppercase tracking-wide mb-3">{col.label}</h3>
                  <ul className="space-y-1">
                    {col.items.map((item, j) => (
                      <li key={j} className="text-sm text-[var(--muted)] flex items-center gap-2">
                        <span className="text-[var(--primary)] text-xs">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-2xl font-bold text-[var(--text)] mb-2">How engagements work</h2>
            <p className="text-[var(--muted)]">Project-based monthly retainers. Scoped to your technical situation.</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Architecture conversation',
                desc: '30 minutes to understand your technical challenge, current stack, and where things are fragile. If there\'s a fit, we scope it together.',
              },
              {
                step: '02',
                title: 'Scoped project',
                desc: 'Defined deliverables, timeline, and monthly retainer. Architecture review, AI system design, or ongoing advisory - scoped to what you actually need.',
              },
              {
                step: '03',
                title: 'Monthly retainer',
                desc: 'Ongoing engagement billed monthly. Adjust scope as the project evolves. No long-term lock-in - wind down when the architecture work is done.',
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
              Solve the architecture problem
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
              30 minutes to understand your technical challenge.
              No pitch. No scope creep. Just honest architecture thinking.
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
