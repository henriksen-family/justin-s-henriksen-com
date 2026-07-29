import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Site map',
  robots: {
    index: false,
    follow: false,
  },
}

const groups = [
  {
    label: 'Main',
    items: [
      { href: '/', label: 'Home' },
      { href: '/jh-card', label: 'Contact card' },
    ],
  },
  {
    label: 'Fractional roles',
    items: [
      { href: '/fractional', label: 'Overview' },
      { href: '/fractional/ai-officer', label: 'Fractional AI Officer' },
      { href: '/fractional/chief-technology-officer', label: 'Fractional CTO' },
      { href: '/fractional/solutions-architect', label: 'Fractional Solutions Architect' },
      { href: '/fractional/ai-integration-director', label: 'Fractional AI Integration Director' },
    ],
  },
]

export default function SitePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-1">/site</p>
        <h1 className="text-2xl font-bold text-[var(--text)] mb-2">Table of contents</h1>
        <p className="text-sm text-[var(--muted)] font-mono mb-10">Every page on this site.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-3 pb-2 border-b border-[var(--border)]">
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex flex-col"
                    >
                      <span className="font-mono text-[var(--primary)] group-hover:opacity-70 transition-opacity">
                        {item.label}
                      </span>
                      <span className="text-xs text-[var(--muted)] font-mono">{item.href}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
