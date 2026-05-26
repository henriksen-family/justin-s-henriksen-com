'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { testimonials as allTestimonials, type Testimonial } from '@/components/data/testimonials'

interface TestimonialsSectionProps {
  ids?: string[]
  title?: string
  subtitle?: string
}

export function TestimonialsSection({
  ids,
  title = 'What people say',
  subtitle = 'From LinkedIn - direct reports, peers, and leaders across the career.',
}: TestimonialsSectionProps) {
  const items: Testimonial[] = ids
    ? ids.map((id) => allTestimonials.find((t) => t.id === id)!).filter(Boolean)
    : allTestimonials

  return (
    <section className="py-20 border-t border-[var(--border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{title}</h2>
          <p className="text-[var(--muted)]">{subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-[var(--border)] bg-[var(--card)] rounded p-6 flex flex-col"
            >
              <div className="text-3xl text-[var(--primary)] font-serif leading-none mb-4 opacity-60">&ldquo;</div>
              <p className="text-sm text-[var(--muted)] leading-relaxed flex-1 mb-5">{t.quote}</p>
              <div className="border-t border-[var(--border)] pt-4">
                <p className="font-bold text-[var(--text)] text-sm">{t.name}</p>
                <p className="text-xs text-[var(--muted)] mt-0.5">{t.title}</p>
                <p className="text-xs text-[var(--primary)] font-mono mt-1">{t.relationship}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
