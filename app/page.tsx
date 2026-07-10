'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/sections/stat-card'
import { Timeline, type TimelineItem } from '@/components/sections/timeline'
import { EvidenceSection } from '@/components/sections/evidence-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { useTheme } from '@/components/theme/theme-provider'

const building = [
  { name: 'SnappyClaw', url: 'https://snappyclaw.ai', desc: 'An AI assistant that\'s powerful, private, and dead simple.' },
  { name: 'Ronin', url: 'https://myronin.ai', desc: 'Your AI powered job search agent.' },
  { name: 'FindTime', url: 'https://find-time.ai', desc: 'The scheduling platform built for AI agents.' },
  { name: 'Helix', url: 'https://helixagency.ai', desc: 'Automated GTM - buying signals, personalized outreach, SEO, and more.' },
  { name: 'Heimdall', url: 'https://heimdall.getlatest.ai', desc: 'Automated intelligence - customer voice, competitor strategy, positioning map, and more.' },
  { name: 'Shelfer', url: 'https://shelfer.co', desc: 'Growth platform helping CPG brands coordinate ecommerce, retail distribution, affiliate channels, and working capital from launch to shelf.' },
]

const investments = [
  { role: 'Investor and Board Member', name: 'AromaTherapist', url: 'https://aromatherapist.com' },
  { role: 'Investor and Board Member', name: 'Boss Strategy Global', url: 'https://www.bosstrategy.com' },
  { role: 'Strategic Advisor', name: 'Black Star Syndicate', url: 'https://blackstarsyndicate.com' },
  { role: 'Investor', name: 'Anchor 3PL', url: 'https://www.anchor3pl.com' },
  { role: 'Investor', name: 'OTP Tequila', url: 'https://www.otptequila.com/en' },
]

const gallery = [
  { src: '/images/hike.jpg', alt: 'Hiking' },
  { src: '/images/fishing.jpg', alt: 'Fishing' },
  { src: '/images/kayak.jpg', alt: 'Kayaking' },
  { src: '/images/victoria-falls.jpg', alt: 'Victoria Falls' },
  { src: '/images/south-africa.jpg', alt: 'South Africa' },
  { src: '/images/elephant.jpg', alt: 'On safari' },
  { src: '/images/london-1.jpg', alt: 'London' },
  { src: '/images/london-2.jpg', alt: 'London' },
  { src: '/images/nascar.jpg', alt: 'NASCAR awards' },
  { src: '/images/trophy.jpeg', alt: 'Trophy' },
  { src: '/images/tom.jpg', alt: 'Friends' },
  { src: '/images/sandler.jpg', alt: 'Friends' },
]

const stats = [
  { value: '172%', label: 'MRR increase', detail: '$440K to $1.2M in 8 months' },
  { value: '$100M+', label: 'Customer growth', detail: 'Microsoft partner ecosystem' },
  { value: '$1.5M - $25M+', label: 'AI initiative funding converted', detail: 'Sustainable partner revenue' },
  { value: '$51M', label: 'P&L led as GM', detail: 'Crayon US' },
  { value: '200%', label: 'New customer acquisition', detail: 'At Crayon as GM' },
  { value: '95/100', label: 'Manager rating', detail: '5-year average' },
]

const programs = [
  { title: 'AI Accelerate', desc: "Microsoft's partner enablement program for AI: strategy briefings, envisioning sessions, solution acceleration. Scaled across multiple countries and hundreds of partners." },
  { title: 'Data Science Partner Program', desc: 'Curriculum, maturity assessments, and graduation criteria for Microsoft partners building data science practices. Deployed across the US partner ecosystem.' },
  { title: 'AI Country Plans', desc: 'Country-level AI adoption playbooks. Strategic plans for AI readiness implemented across multiple geographies.' },
  { title: 'Cloud Center of Excellence', desc: 'Cloud architecture frameworks and best practices for enterprise adoption. Reference patterns the partner ecosystem built against.' },
]

const careerTimeline: TimelineItem[] = [
  {
    title: 'Founder & CEO',
    company: 'GetLatest AI / Fenix Venture',
    period: 'Jun 2024 - Present',
    current: true,
    bullets: [
      'Building SnappyClaw, a production AI agent platform with real customers.',
      'GetLatest AI consulting practice focused on enterprise AI strategy and implementation.',
    ],
  },
  {
    title: 'CEO / President',
    company: 'Blue Eye',
    period: 'Apr 2023 - Jun 2024',
    bullets: [
      'Grew P&L from $5M to $11M. Led team of 150.',
      'EBITDA turnaround: -$250K/month to +$125K/month in 6 months.',
    ],
  },
  {
    title: 'CEO / General Manager',
    company: 'Crayon US',
    period: 'Oct 2021 - Jan 2023',
    bullets: [
      'Grew revenue from $43M to $51M. 200-person org.',
      'Transformed Crayon US from licensing/cloud to AI/ML/Analytics/M365 managed services.',
      '200% increase in new customer acquisition. Awards: 2024 Utah Fast 50, 2023 Utah 100.',
    ],
  },
  {
    title: 'Sr. Director, Partner Ecosystem',
    company: 'Microsoft',
    period: 'Jul 2017 - Oct 2021',
    bullets: [
      'Sr. Director - Partner Ecosystem (AI/ML, Data, Advanced Analytics). Led AI Accelerate, AI Country Plans, and the Data Science Partner Program. Partners scaled 10x, 14x, and 20x within four years. $100M+ in customer growth driven.',
      '2020 Leadership Spotlight, 2019 Manager of the Year.',
    ],
  },
  {
    title: 'Principal Software Engineer',
    company: 'Microsoft',
    period: 'Sept 2013 - Jun 2017',
    bullets: [
      'Azure adoption architecture for enterprise customers and partners. Architected Cloud Center of Excellence reference patterns. Built the Azure SQL DTU Calculator early in the Azure SQL migration era.',
    ],
  },
  {
    title: 'Software Engineering Manager',
    company: 'Microsoft',
    period: 'Mar 2012 - Sept 2013',
    bullets: ['Massively distributed software systems for global data center infrastructure.'],
  },
  {
    title: 'Solutions Architect',
    company: 'LDS Church',
    period: 'Jul 2008 - Mar 2012',
    bullets: [
      'Architecture roadmaps across .Net, Java, AWS, and Azure.',
      'Multi-million dollar project delivery.',
    ],
  },
  {
    title: 'Development Manager',
    company: 'TaxWorks',
    period: 'Jun 2004 - Jul 2008',
    bullets: ['Led development team for tax software products.'],
  },
]

export default function Home() {
  const { theme } = useTheme()
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const headlineSize = theme === 'arcade'
    ? 'font-pixel text-base sm:text-xl lg:text-2xl leading-loose'
    : 'text-4xl sm:text-5xl lg:text-6xl font-bold'

  const sectionHeading = theme === 'arcade'
    ? 'font-pixel text-sm leading-relaxed'
    : theme === 'terminal' || theme === 'futuristic'
    ? 'font-mono text-base sm:text-xl'
    : 'font-bold text-2xl'

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-16">
        <Container>
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:gap-16">

            {/* Avatar - visible on all screen sizes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="shrink-0 mb-8 lg:mb-0 lg:order-2"
            >
              <div
                className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-[var(--primary)]"
                style={{ boxShadow: '0 0 40px color-mix(in srgb, var(--primary) 20%, transparent)' }}
              >
                <Image
                  src="/jh-avatar.jpg"
                  alt="Justin S. Henriksen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl flex-1 lg:order-1"
            >
              <h1 className={`text-[var(--text)] ${headlineSize} leading-tight mb-3`}>
                {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
                Justin S. Henriksen
                {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[var(--primary)] text-xl sm:text-2xl font-semibold mb-4"
              >
                {'I build AI solutions and tinker with other things.'}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[var(--muted)] text-base max-w-2xl mb-10 leading-relaxed"
              >
                {'I co-founded '}
                <a
                  href="https://getlatest.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:opacity-80 transition-opacity"
                >
                  GetLatest AI
                </a>
                {', where we work with leaders who don\'t want to "learn AI" or experiment endlessly. They want to place smarter bets and see measurable outcomes. We help you identify the areas of your business where AI has the most impact and then we build the solution for you.'}
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── TOC (desktop only) ───────────────────────────────── */}
      <nav className="hidden sm:block border-t border-[var(--border)]">
        <Container>
          <div className="flex items-center justify-center gap-0 py-0 whitespace-nowrap">
            {[
              { label: "What I'm building", href: '#building' },
              { label: "What I've accomplished", href: '#accomplished' },
              { label: "Where I've been", href: '#career' },
              { label: "What people say", href: '#testimonials' },
              { label: "What I've written", href: '#writing' },
              { label: "What I've spoken about", href: '#speaking' },
              { label: "Where I invest", href: '#investing' },
              { label: "Education", href: '#education' },
              { label: "Personal & giving", href: '#giving' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-xs font-mono text-[var(--muted)] hover:text-[var(--primary)] transition-colors px-4 py-3 border-r border-[var(--border)] last:border-r-0 shrink-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {/* ── What I'm building ────────────────────────────────── */}
      <section id="building" className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-[var(--text)] ${sectionHeading} mb-8`}
          >
            {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
            {"What I'm building"}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {building.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border border-[var(--border)] bg-[var(--card)] rounded p-5 hover:border-[var(--primary)] transition-colors duration-300 group"
              >
                <div className="font-mono text-sm font-semibold text-[var(--primary)] group-hover:opacity-80 transition-opacity uppercase tracking-wide mb-2">
                  {item.name} ↗
                </div>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── What I've accomplished ───────────────────────────── */}
      <section id="accomplished" className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className={`text-[var(--text)] ${sectionHeading} mb-2`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              {"What I've accomplished"}
            </h2>
            <p className="text-[var(--muted)]">
              {"I've been building since 2004 - as an engineer, an architect, a GM, and a founder. Here's what that looks like in numbers."}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {stats.map((stat, i) => <StatCard key={i} {...stat} index={i} />)}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h3 className="text-base font-bold text-[var(--text)] mb-1">Programs built at scale</h3>
            <p className="text-sm text-[var(--muted)]">Named programs from the Microsoft AI partner motion.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {programs.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="border border-[var(--border)] bg-[var(--card)] rounded p-5">
                <h4 className="font-bold text-[var(--text)] mb-2">{p.title}</h4>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Where I've been ──────────────────────────────────── */}
      <section id="career" className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className={`text-[var(--text)] ${sectionHeading} mb-2`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              {"Where I've been"}
            </h2>
            <p className="text-[var(--muted)]">25 years from developer to CEO - and now fractional.</p>
          </motion.div>
          <Timeline items={careerTimeline} condensed />
        </Container>
      </section>

      {/* ── What people say ──────────────────────────────────── */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* ── What I've written / spoken about ─────────────────── */}
      <EvidenceSection hideProducts hideShipped hideIndustries />

      {/* ── Where I invest ───────────────────────────────────── */}
      <section id="investing" className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className={`text-[var(--text)] ${sectionHeading} mb-4`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              {"Where I invest"}
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed max-w-3xl mb-10">
              {"I'm the founder of Fenix Venture, my personal investment vehicle. I invest directly and work closely with leadership teams on strategy, structure, and execution when that involvement is useful. The form varies. The goal is measurable progress, not activity."}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {investments.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="border border-[var(--border)] bg-[var(--card)] rounded px-4 py-3 hover:border-[var(--primary)] transition-colors group"
                >
                  <div className="font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors text-sm mb-0.5">
                    {item.name} ↗
                  </div>
                  <div className="text-xs text-[var(--muted)] font-mono">{item.role}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Education & credentials ──────────────────────────── */}
      <section id="education" className="py-12 border-t border-[var(--border)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-base font-bold text-[var(--text)] mb-5">Education and credentials</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'MBA - University of Utah',
                'BA Computer Science - Weber State University',
                'Microsoft Professional Program - Data Science',
                'Microsoft Professional Program - Big Data',
                'Azure MCSE',
                'AI-900, AZ-900, DP-100, DP-900',
                'Deep Learning Specialization (Andrew Ng / Coursera)',
                'Six Sigma Green Belt',
              ].map((cred, i) => (
                <span key={i} className="text-sm text-[var(--muted)] border border-[var(--border)] bg-[var(--card)] rounded px-3 py-1.5 font-mono">
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Personal & how we give ───────────────────────────── */}
      <section id="giving" className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className={`text-[var(--text)] ${sectionHeading} mb-4`}>
              {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
              {'Personal & how we give'}
            </h2>
            <p className="text-[var(--muted)] text-base leading-relaxed max-w-3xl">
              {'Beyond the companies and the code, there’s family, a foundation, and a long list of places I’ve been lucky enough to see — the part of the story that has nothing to do with a P&L.'}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[var(--muted)] text-base leading-relaxed mb-4">
                {'Outside of business, my wife and I run a private foundation, the '}
                <a
                  href="https://henriksenfamily.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:opacity-80 transition-opacity"
                >
                  Henriksen Family Giving Fund
                </a>
                {', focused on giving back in ways that are thoughtful, practical, and impactful. We believe success carries responsibility, and that strong communities are built when people invest in one another — not just financially, but with time, care, and attention.'}
              </p>
              <p className="text-[var(--muted)] text-base leading-relaxed">
                {'At the core of everything I do is a simple belief: people should be encouraged to chase meaningful dreams, and those dreams should pull others forward with them. Build things that matter. Learn constantly. Share success. And leave whatever you touch better than you found it.'}
              </p>
              <div className="mt-8">
                <Button href="https://henriksenfamily.org" variant="secondary" external>
                  {'Visit the foundation'}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded overflow-hidden border border-[var(--border)]"
            >
              <Image
                src="/images/christmas.jpg"
                alt="The Henriksen family"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {gallery.map((photo, i) => (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setLightbox(photo)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="relative aspect-square rounded overflow-hidden border border-[var(--border)] hover:border-[var(--primary)] transition-colors duration-300 group cursor-pointer"
                aria-label={`View photo: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 border-t border-[var(--border)]">
        <Container narrow>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-[var(--muted)] text-base mb-8 max-w-xl mx-auto leading-relaxed">
              {'I work with people who are fun to be around, passionate about their purpose, and like to build cool things. If there\'s overlap, let\'s talk.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://cal.com/justinh-cal" external variant="primary">
                Book a conversation
              </Button>
              <Button href="mailto:justin@getlatest.ai" variant="secondary">
                Send an email
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" sizes="90vw" />
          </div>
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl font-mono leading-none"
            aria-label="Close"
          >
            {'×'}
          </button>
        </div>
      )}
    </>
  )
}
