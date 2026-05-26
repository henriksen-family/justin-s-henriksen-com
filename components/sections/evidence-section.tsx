'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'

interface EvidenceItem {
  title: string
  description: string
  link?: string
  tag: string
}

const products: EvidenceItem[] = [
  {
    title: 'SnappyClaw',
    description: 'Multi-tenant AI agent platform. Three-layer architecture: Next.js application layer, Python worker services, Docker-based tenant isolation with fleet ops. Human-in-the-loop approval boundaries by design. Live customers.',
    link: 'https://snappyclaw.ai',
    tag: 'Live Product',
  },
  {
    title: 'Helix - GTM Agent',
    description: 'Go-to-market agent. Monitors hiring signals, funding rounds, job posts, and intent data continuously. Signal detection, prospect research, lead scoring, and personalized outreach - running without human intervention.',
    link: 'https://helix.getlatest.ai',
    tag: 'Live Product',
  },
  {
    title: 'Heimdall - Market Intelligence',
    description: 'Competitive intelligence agent. 95 structured intel files per target: pricing, positioning, messaging, tech stack, hiring. Monthly refresh cycle. Knows what competitors are doing before they announce it.',
    link: 'https://heimdall.getlatest.ai',
    tag: 'Live Product',
  },
  {
    title: 'Ronin - Career Agent',
    description: 'Job search agent that discovers opportunities, qualifies them against the user\'s criteria, and handles applications autonomously. Continuous scanning of job boards, company sites, and hidden listings.',
    link: 'https://myronin.ai',
    tag: 'Live Product',
  },
]

const selectedWork: EvidenceItem[] = [
  {
    title: 'Azure SQL DTU Calculator',
    description: 'ASP.NET web application for sizing Azure SQL Database workloads. Translated on-prem SQL Server performance benchmarks into Azure DTU recommendations. Used by Microsoft field sellers and partners during the early Azure SQL migration era. Stack: C#, ASP.NET, Azure SQL, JavaScript.',
    tag: 'Engineering',
  },
  {
    title: 'Bot Framework Training Labs',
    description: 'Hands-on curriculum for the Microsoft Bot Framework, built as part of the Microsoft Data Science Degree (DAT211x) program. Working code samples in C# and Node.js covering conversational AI before "agent" was a category.',
    tag: 'Engineering',
  },
  {
    title: 'Azure Data & AI Workshops',
    description: 'End-to-end hands-on workshops covering Azure Machine Learning, Azure Data Factory, Apache Spark, and Python ML pipelines. Delivered to Microsoft partners as part of the AI Accelerate and Data Science Partner Program enablement track.',
    tag: 'Engineering',
  },
]

const industries = [
  { vertical: 'Financial Services', segments: 'Banking, Insurance, Capital Markets' },
  { vertical: 'Healthcare', segments: 'Payor, Provider, Pharma & Life Sciences' },
  { vertical: 'Manufacturing', segments: 'Discrete and Process Manufacturing' },
  { vertical: 'Retail / CPG', segments: 'Retailers and Consumer Goods' },
  { vertical: 'Government', segments: 'Civilian, Public Safety & Justice, Defense' },
  { vertical: 'Media & Comms', segments: 'Media & Entertainment, Telco' },
  { vertical: 'Automotive', segments: 'OEMs and Tier-1 Suppliers' },
  { vertical: 'Energy', segments: 'Oil & Gas, Utilities' },
]

const writing: EvidenceItem[] = [
  {
    title: 'The Platform the Taxonomy Demands',
    description: 'Why most "agent" products aren\'t actually agentic - and how SnappyClaw\'s three-layer architecture (persistent per-person memory, shared business knowledge, agent-to-agent coordination) solves the problem that model capability improvements alone cannot.',
    link: 'https://getlatest.ai/blog/snappyclaw-platform-truly-agentic-architecture',
    tag: 'Writing',
  },
  {
    title: 'Why Most AI Systems Aren\'t Actually Agents',
    description: 'A research-backed taxonomy of what qualifies as an agent vs. a session assistant. The math is brutal: a ten-step pipeline at 90% per-step accuracy has a 35% end-to-end success rate. Reliability is an architectural property, not a model quality issue.',
    link: 'https://getlatest.ai/blog/why-most-ai-systems-arent-actually-agents',
    tag: 'Writing',
  },
  {
    title: 'Why AI Agents Still Disappoint',
    description: 'The gap between automation and intelligence: why organizations actually need deterministic systems that reason at decision points - not pure autonomous agents. Compares n8n, MAF, Claude Cowork, and developer frameworks on real criteria.',
    link: 'https://getlatest.ai/blog/why-ai-agents-still-disappoint',
    tag: 'Writing',
  },
  {
    title: 'Why Your AI Forgets You Every Time',
    description: 'Maps five memory architectures (semantic/vector, graph, episodic, observational, validated knowledge base) and explains why persistent agent memory is infrastructure, not a feature. The difference between an assistant and an agent that actually knows you.',
    link: 'https://getlatest.ai/blog/why-ai-forgets-you-persistent-memory-explained',
    tag: 'Writing',
  },
]

const speaking: EvidenceItem[] = [
  {
    title: 'AI Collective - Founder Panel',
    description: '"Why We Built This: 3 Founders and Their Raw Decisions" - 90-minute virtual panel for The AI Collective, 200,000+ members across 100+ global forums. Problem identification, product scope, and building methodology for early-stage AI products.',
    link: 'https://lu.ma/0cv4j9ba',
    tag: 'Speaking',
  },
  {
    title: 'AI for Sales & Marketing',
    description: '"What\'s real, what\'s hard, and who\'s solving it" - practical AI applications for sales and marketing teams, cutting through the hype to what enterprises are actually deploying.',
    link: 'https://getlatest.ai/sales-and-marketing-deck',
    tag: 'Speaking',
  },
  {
    title: 'MasterClaw Workshop',
    description: '"I Just Shipped Myself: Build and Deploy Your Personal Portfolio with AI" - live workshop teaching practitioners to build and deploy real AI-powered products.',
    link: 'https://getlatest.ai/masterclaw-deck',
    tag: 'Speaking',
  },
  {
    title: 'AI Collective - Live Build',
    description: '"Digital Contact Cards: Build and ship a contact card with an AI agent, live" - hands-on session with the AI Collective community.',
    link: 'https://getlatest.ai/ai-agents-deck',
    tag: 'Speaking',
  },
]

function EvidenceCard({ item, index }: { item: EvidenceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-[var(--border)] bg-[var(--card)] rounded p-5 hover:border-[var(--primary)] transition-colors duration-300 flex flex-col"
    >
      <div className="mb-3">
        <span className="text-xs font-mono text-[var(--primary)] border border-[var(--primary)] px-2 py-0.5 rounded-full">
          {item.tag}
        </span>
      </div>
      <h3 className="font-bold text-[var(--text)] mb-2">{item.title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">{item.description}</p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 pt-3 border-t border-[var(--border)] text-xs text-[var(--primary)] hover:opacity-80 transition-opacity font-mono flex items-center gap-1"
        >
          {item.link.replace('https://', '')} ↗
        </a>
      )}
    </motion.div>
  )
}

export function EvidenceSection() {
  return (
    <section className="py-20 border-t border-[var(--border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Products built and shipped</h2>
          <p className="text-[var(--muted)]">Four products in production. Not demos - live systems with real users.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {products.map((item, i) => (
            <EvidenceCard key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Selected engineering work</h2>
          <p className="text-[var(--muted)]">Shipped, used in production, predates the current portfolio.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {selectedWork.map((item, i) => (
            <EvidenceCard key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Industries</h2>
          <p className="text-[var(--muted)]">Vertical experience from the Microsoft partner ecosystem.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-3 mb-16"
        >
          {industries.map((row, i) => (
            <div key={i} className="flex gap-3 border border-[var(--border)] bg-[var(--card)] rounded px-4 py-3">
              <span className="font-bold text-[var(--text)] text-sm shrink-0 w-36">{row.vertical}</span>
              <span className="text-sm text-[var(--muted)]">{row.segments}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Writing</h2>
          <p className="text-[var(--muted)]">Technical takes on agent architecture, AI systems design, and what actually works in production.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {writing.map((item, i) => (
            <EvidenceCard key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Speaking</h2>
          <p className="text-[var(--muted)]">Active in the community, not just building in private.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {speaking.map((item, i) => (
            <EvidenceCard key={i} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
