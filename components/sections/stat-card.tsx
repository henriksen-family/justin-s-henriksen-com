'use client'

import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  detail?: string
  index?: number
}

export function StatCard({ value, label, detail, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-[var(--border)] bg-[var(--card)] p-5 rounded hover:border-[var(--primary)] transition-colors duration-300 group"
    >
      <div className="text-2xl sm:text-3xl font-bold text-[var(--primary)] group-hover:opacity-90 transition-opacity">
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold text-[var(--text)]">{label}</div>
      {detail && <div className="mt-1 text-xs text-[var(--muted)]">{detail}</div>}
    </motion.div>
  )
}
