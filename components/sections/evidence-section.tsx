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
    link: 'https://snappyclaw.com',
    tag: 'Live Product',
  },
  {
    title: 'Helix — GTM Agent',
    description: 'Go-to-market agent. Monitors hiring signals, funding rounds, job posts, and intent data continuously. Signal detection, prospect research, lead scoring, and personalized outreach - running without human intervention.',
    link: 'https://getlatest.ai/solutions/gtm-engine',
    tag: 'Live Product',
  },
  {
    title: 'Heimdall — Market Intelligence',
    description: 'Competitive intelligence agent. 95 structured intel files per target: pricing, positioning, messaging, tech stack, hiring. Monthly refresh cycle. Knows what competitors are doing before they announce it.',
    link: 'https://getlatest.ai/solutions/market-intelligence',
    tag: 'Live Product',
  },
  {
    title: 'Ronin — Career Agent',
    description: 'Job search agent that discovers opportunities, qualifies them against the user\'s criteria, and handles applications autonomously. Continuous scanning of job boards, company sites, and hidden listings.',
    link: 'https://getlatest.ai/solutions/career-agent',
    tag: 'Live Product',
  },
  {
    title: 'Lead Agent — B2B Lead Generation',
    description: 'Qualified B2B leads custom-built to ICP, delivered weekly. AI that discovers, qualifies, and delivers leads matching the ideal customer profile. 30-day money-back guarantee.',
    link: 'https://getlatest.ai/solutions/lead-agent',
    tag: 'Live Product',
  },
  {
    title: 'M365 Copilot Agents',
    description: 'AI agents built natively inside Microsoft 365. Graph and connector scoping, tenant-aware guardrails, approval paths. Deployed inside Copilot, Teams, Outlook, and SharePoint for enterprise customers.',
    link: 'https://getlatest.ai/solutions/copilot-agent',
    tag: 'Delivered',
  },
  {
    title: 'Google Agent Garden',
    description: 'Agent deployments configured for Google Workspace teams. Purpose-built agents integrated into the tools teams already use in the Google ecosystem.',
    link: 'https://getlatest.ai/solutions/google-agent-garden',
    tag: 'Delivered',
  },
  {
    title: 'Shared OAuth Gateway',
    description: 'Centralized OAuth and third-party connection handling across all products. Calendars, email, meetings, analytics, professional networks - one gateway. Eliminates auth logic duplication and connector drift across the platform.',
    tag: 'Platform',
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
    tag: 'Speaking',
  },
  {
    title: 'MasterClaw Workshop',
    description: '"I Just Shipped Myself: Build and Deploy Your Personal Portfolio with AI" - live workshop teaching practitioners to build and deploy real AI-powered products.',
    link: 'https://getlatest.ai/decks',
    tag: 'Speaking',
  },
  {
    title: 'AI Collective - Live Build',
    description: '"Digital Contact Cards: Build and ship a contact card with an AI agent, live" - hands-on session with the AI Collective community.',
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
      className="border border-[var(--border)] bg-[var(--card)] rounded p-5 hover:border-[var(--primary)] transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono text-[var(--primary)] border border-[var(--primary)] px-2 py-0.5 rounded-full">
          {item.tag}
        </span>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--muted)] hover:text-[var(--primary)] transition-colors font-mono"
          >
            {item.link.replace('https://', '')} ↗
          </a>
        )}
      </div>
      <h3 className="font-bold text-[var(--text)] mb-2">{item.title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
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
          <p className="text-[var(--muted)]">Eight products in production. Not demos - live systems with real users.</p>
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
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Writing and speaking</h2>
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
