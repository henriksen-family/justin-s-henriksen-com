'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'

interface EvidenceItem {
  title: string
  description: string
  link?: string
  tag: string
}

const items: EvidenceItem[] = [
  {
    title: 'SnappyClaw AI Agent Platform',
    description: 'Actively shipping production code. Real customers, real agents, real infrastructure.',
    link: 'https://snappyclaw.com',
    tag: 'Live Product',
  },
  {
    title: 'GetLatest AI Blog',
    description: 'Writing regularly on AI agent architecture, MCP integrations, and enterprise AI strategy.',
    link: 'https://getlatest.ai/blog',
    tag: 'Writing',
  },
  {
    title: 'Microsoft AI Enablement',
    description: '30+ AI enablement initiatives across the Microsoft partner ecosystem. $5M+ in partner revenue generated.',
    tag: 'Track Record',
  },
  {
    title: 'Crayon AI Transformation',
    description: 'Led organizational pivot from licensing/cloud to full AI/ML/Analytics/M365 managed services. $43M to $51M P&L.',
    tag: 'Track Record',
  },
]

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
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">Evidence of work</h2>
          <p className="text-[var(--muted)]">Not case studies. Actual things built and shipped.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
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
          ))}
        </div>
      </Container>
    </section>
  )
}
