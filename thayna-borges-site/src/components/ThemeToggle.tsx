'use client'

import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/theme-provider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      type="button"
      aria-label={`Alternar para o tema ${isDark ? 'claro' : 'escuro'}`}
      title={`Tema ${isDark ? 'Claro' : 'Escuro'}`}
      className="p-2 rounded-full border border-border bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-white transition-colors duration-300 hover:bg-white dark:hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </motion.button>
  )
}
