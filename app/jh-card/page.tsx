'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Mail, Phone, Globe, Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function JHCardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 pt-28">
      <Container narrow>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          {/* Avatar */}
          <motion.div variants={fadeIn} transition={{ duration: 0.5 }} className="mb-6">
            <div
              className="inline-block rounded-full overflow-hidden border-2 border-[var(--primary)]"
              style={{ boxShadow: '0 0 40px var(--primary)20' }}
            >
              <Image
                src="/jh-avatar.jpg"
                alt="Justin Henriksen"
                width={160}
                height={160}
                priority
                className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] object-cover"
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-1">
              Justin Henriksen
            </h1>
            <p className="text-[var(--primary)] text-base font-medium mb-1">
              Co-Founder &amp; Chief Everything Officer
            </p>
            <p className="text-[var(--muted)] text-base">GetLatest AI</p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 mb-8 max-w-xs mx-auto"
          >
            <a
              href="tel:+18016789807"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--card,transparent)] hover:border-[var(--primary)] transition-colors"
            >
              <Phone className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span className="text-[var(--text)]">(801) 678-9807</span>
            </a>
            <a
              href="mailto:justin@getlatest.ai"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--card,transparent)] hover:border-[var(--primary)] transition-colors"
            >
              <Mail className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span className="text-[var(--text)]">justin@getlatest.ai</span>
            </a>
            <a
              href="https://getlatest.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--card,transparent)] hover:border-[var(--primary)] transition-colors"
            >
              <Globe className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span className="text-[var(--text)]">getlatest.ai</span>
            </a>
            <a
              href="https://justinshenriksen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--card,transparent)] hover:border-[var(--primary)] transition-colors"
            >
              <Globe className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span className="text-[var(--text)]">justinshenriksen.com</span>
            </a>
            <a
              href="https://linkedin.com/in/henriksenjustin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--card,transparent)] hover:border-[var(--primary)] transition-colors"
            >
              <Linkedin className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span className="text-[var(--text)]">LinkedIn</span>
            </a>
          </motion.div>

          {/* QR Code */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-block p-4 bg-white rounded-2xl shadow-lg">
              <Image
                src="/qr-jh.svg"
                alt="Scan to add Justin Henriksen to your contacts"
                width={180}
                height={180}
                className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]"
              />
            </div>
          </motion.div>

          {/* Save Contact */}
          <motion.div variants={fadeIn} transition={{ duration: 0.5, delay: 0.4 }}>
            <Button href="/api/vcard">
              <Download className="w-5 h-5 mr-2" />
              Save Contact
            </Button>
            <p className="text-sm text-[var(--muted)] mt-4">
              Scan the QR code or tap Save Contact
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}
