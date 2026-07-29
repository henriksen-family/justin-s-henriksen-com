import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Site map',
  robots: {
    index: false,
    follow: false,
  },
}

const links = [
  {
    group: 'Main',
    items: [
      { href: '/', label: 'Home' },
      { href: '/jh-card', label: 'Contact card' },
    ],
  },
  {
    group: 'Fractional roles',
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
        <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-10">/site</p>
        {links.map((group) => (
          <div key={group.group} className="mb-10">
            <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-3">
              {group.group}
            </p>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[var(--primary)] hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                    <span className="text-[var(--muted)] ml-2 text-sm">{item.href}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
