'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme/theme-provider'

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
  { src: '/images/jd.jpg', alt: 'Friends' },
  { src: '/images/sandler.jpg', alt: 'Friends' },
]

export default function Personal() {
  const { theme } = useTheme()
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const headlineSize = theme === 'arcade'
    ? 'font-pixel text-lg sm:text-xl lg:text-2xl leading-loose'
    : 'text-4xl sm:text-5xl lg:text-6xl font-bold'

  const sectionHeading = theme === 'arcade'
    ? 'font-pixel text-sm leading-relaxed'
    : theme === 'terminal' || theme === 'futuristic'
    ? 'font-mono text-lg sm:text-xl'
    : 'font-bold text-2xl'

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-16">
        <Container>
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:gap-16">
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
                <Image src="/images/me.jpg" alt="Justin S. Henriksen" fill className="object-cover" priority />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl flex-1 lg:order-1"
            >
              <h1 className={`text-[var(--text)] ${headlineSize} leading-tight mb-4`}>
                {theme === 'terminal' && <span className="text-[var(--primary)]">$ </span>}
                {'The personal side'}
                {theme === 'terminal' && <span className="animate-blink ml-1">_</span>}
              </h1>
              <p className="text-[var(--muted)] text-lg leading-relaxed">
                {'Beyond the companies and the code, there’s family, a foundation, and a long list of places I’ve been lucky enough to see. This is the part of the story that has nothing to do with a P&L.'}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Family & Giving ──────────────────────────────────── */}
      <section id="giving" className="py-16 border-t border-[var(--border)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-[var(--text)] ${sectionHeading} mb-4 inline-flex items-center gap-2`}>
                {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
                <Heart className="w-5 h-5 text-[var(--primary)]" />
                {'Family & giving'}
              </h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed mb-4">
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
              <p className="text-[var(--muted)] text-lg leading-relaxed">
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
        </Container>
      </section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <section id="gallery" className="py-16 border-t border-[var(--border)]">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-[var(--text)] ${sectionHeading} mb-8`}
          >
            {theme === 'terminal' && <span className="text-[var(--primary)]">{'// '}</span>}
            {'A few photos'}
          </motion.h2>
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
