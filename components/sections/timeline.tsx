'use client'

import { motion } from 'framer-motion'

export interface TimelineItem {
  title: string
  company: string
  period: string
  bullets: string[]
  current?: boolean
}

interface TimelineProps {
  items: TimelineItem[]
  condensed?: boolean
}

export function Timeline({ items, condensed }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--border)]" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div
              className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 transition-colors
                ${item.current
                  ? 'bg-[var(--primary)] border-[var(--primary)]'
                  : 'bg-[var(--card)] border-[var(--border)]'
                }`}
            />

            <div className="border border-[var(--border)] bg-[var(--card)] rounded p-4 hover:border-[var(--primary)] transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div>
                  <span className="font-bold text-[var(--primary)]">{item.title}</span>
                  <span className="text-[var(--muted)] mx-2">|</span>
                  <span className="text-[var(--text)] font-semibold">{item.company}</span>
                </div>
                <span className="text-xs font-mono text-[var(--muted)] shrink-0">{item.period}</span>
              </div>
              {!condensed && (
                <ul className="space-y-1">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-[var(--muted)] flex gap-2">
                      <span className="text-[var(--primary)] shrink-0">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {condensed && item.bullets[0] && (
                <p className="text-sm text-[var(--muted)]">{item.bullets[0]}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
