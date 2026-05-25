import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
}

export function Button({ children, href, onClick, variant = 'primary', className, external }: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold transition-all duration-200 cursor-pointer',
    'border text-sm uppercase tracking-wide',
    variant === 'primary' && 'bg-[var(--primary)] text-[var(--bg)] border-[var(--primary)] hover:opacity-80',
    variant === 'secondary' && 'bg-transparent text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg)]',
    variant === 'ghost' && 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:text-[var(--text)] hover:border-[var(--muted)]',
    className
  )

  if (href) {
    if (external || href.startsWith('mailto') || href.startsWith('http')) {
      return (
        <a href={href} className={base} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      )
    }
    return <Link href={href} className={base}>{children}</Link>
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}
