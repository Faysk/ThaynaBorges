'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Agendamentos', href: '#agendamentos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  const activeId = useScrollSpy(
    ['inicio', 'sobre', 'abordagem', 'agendamentos', 'blog', 'contato'],
    120
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    const offset = 100

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <a
          href="#inicio"
          onClick={(e) => handleSmoothScroll(e, '#inicio')}
          className="header__logo"
        >
          Thayná Borges
        </a>

        <button
          onClick={toggleMenu}
          className="header__menu-button md:hidden"
          aria-label="Abrir ou fechar menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul className="header__menu-desktop hidden md:flex text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleSmoothScroll(e, href)}
                className={`transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeId === href.replace('#', '')
                    ? 'text-primary font-semibold'
                    : 'text-muted hover:text-primary'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="header__menu-mobile md:hidden"
          >
            <ul className="flex flex-col gap-5 text-base font-medium">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleSmoothScroll(e, href)}
                    className={`block transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeId === href.replace('#', '')
                        ? 'text-primary font-semibold'
                        : 'text-muted hover:text-primary'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
