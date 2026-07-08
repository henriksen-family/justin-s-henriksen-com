'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/components/theme/theme-provider'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
]

export function Nav() {
  const pathname = usePathname()
  const { theme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border)] bg-[var(--bg)] bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            'font-bold text-[var(--primary)] hover:opacity-80 transition-opacity',
            theme === 'arcade' ? 'font-pixel text-xs' : 'text-sm font-mono'
          )}
        >
          {theme === 'terminal' ? '> JSH' : 'JSH'}
        </Link>

        <div className="flex items-center gap-6 pr-28 sm:pr-32">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-mono transition-colors hidden sm:block',
                pathname === link.href
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              )}
            >
              {theme === 'terminal' && pathname !== link.href ? `[${link.label}]` : link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
