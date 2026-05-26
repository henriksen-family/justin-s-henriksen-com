'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'

interface Testimonial {
  quote: string
  name: string
  title: string
  relationship: string
}

const testimonials: Testimonial[] = [
  {
    quote: "His technical depth and thought leadership in Artificial Intelligence enables him to work with the technical talent on his teams in a capacity that is highly effective and impactful. I could not recommend Justin more highly as an incredible asset to any organization.",
    name: "Lauren Tran",
    title: "Chief Architect @ Microsoft, Office of the CTO",
    relationship: "Reported directly to Justin",
  },
  {
    quote: "Justin knows and understands the details of how to apply technology in ways others just don't comprehend. Beyond all his technical and business skills, Justin is an amazing person - reliable, loyal, considerate and generous. He is the kind of person you would want as a business partner and a friend.",
    name: "Marian Watkins",
    title: "Marketing Executive | GTM Advisor",
    relationship: "Reported directly to Justin",
  },
  {
    quote: "In a year, he brought our attrition down over 20%, grew our GP by 20% and increased revenue by 18%. This was all possible because Justin leads with a collaborative, people-first approach. He is thoughtful, strategic, transparent and wickedly smart. Any company or board would be lucky to have his expertise on their team.",
    name: "Jason Skinner",
    title: "VP at Long View Systems",
    relationship: "Justin was senior",
  },
  {
    quote: "People work harder for Justin because of how he curates performance and career success. His leadership style is thoughtful, prescriptive, direct, and relatable to both buyers and employees to drive momentum, loyalty, and big results. I would work for him for the rest of my career if the privilege presented itself because he's earned it.",
    name: "Tara DarConte",
    title: "AI & Cloud Acceleration",
    relationship: "Reported directly to Justin",
  },
  {
    quote: "Justin is an innovator, visionary, and highly technical leader who was an honor to work with in multiple capacities. He was one of the most influential career and technical mentors I've had in my career. Justin is an outstanding people-first leader who creates an empowering environment where everyone can do their best work.",
    name: "Karen Trubisky",
    title: "Advisor | Former AWS, Microsoft, VMware",
    relationship: "Justin was senior",
  },
  {
    quote: "Justin is one of the most brilliant business minds I have ever met. He has a knack for knowing how to maximize business opportunities that come his way. In addition to his business acumen, he also has incredible knowledge of technology, software, artificial intelligence and machine learning. Having spent time as a talented software engineer, Justin knows and understands the details of how to apply technology in ways others just don't comprehend.",
    name: "Tony Spencer",
    title: "C# Cowboy | Software Engineer",
    relationship: "Worked on the same team",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 border-t border-[var(--border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] mb-2">What people say</h2>
          <p className="text-[var(--muted)]">From LinkedIn - direct reports, peers, and leaders across the career.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
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
