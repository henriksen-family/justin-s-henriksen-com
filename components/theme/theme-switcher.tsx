'use client'

import { useTheme, type Theme } from './theme-provider'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Gamepad2, Rocket, TerminalSquare, ChevronDown, Keyboard } from 'lucide-react'

const themes: { id: Theme; Icon: React.ElementType; label: string }[] = [
  { id: 'professional', Icon: Briefcase, label: 'Professional' },
  { id: 'arcade', Icon: Gamepad2, label: 'Arcade' },
  { id: 'futuristic', Icon: Rocket, label: 'Futuristic' },
  { id: 'terminal', Icon: TerminalSquare, label: 'Terminal' },
  { id: 'typewriter', Icon: Keyboard, label: 'Typewriter' },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const active = themes.find((t) => t.id === theme) ?? themes[0]

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-1 items-end"
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setOpen(false) }}
                className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-mono transition-all duration-200 border
                  ${theme === t.id
                    ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--card)]'
                    : 'border-[var(--border)] text-[var(--muted)] bg-[var(--card)] hover:border-[var(--primary)] hover:text-[var(--text)]'
                  }`}
                title={t.label}
              >
                <t.Icon className="w-4 h-4" />
                <span>{t.label}</span>
                {theme === t.id && <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] ml-1" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded border border-[var(--primary)] bg-[var(--card)] text-[var(--primary)] text-sm font-mono shadow-lg hover:opacity-80 transition-opacity"
        aria-label="Switch theme"
      >
        <active.Icon className="w-4 h-4" />
        <span className="hidden sm:inline">Theme</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3 h-3" />
        </motion.span>
      </button>
    </div>
  )
}
