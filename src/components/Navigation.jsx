import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#contact',    label: 'Contact' },
]

const GOLD = '#B7A57A'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => { setActive(href); setMenuOpen(false) }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500"
        style={{
          background:   scrolled ? 'rgba(8, 8, 8, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(183, 165, 122, 0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" onClick={() => handleNav('')}>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm"
            style={{
              background: `linear-gradient(135deg, #B7A57A, #7A6645)`,
              color: '#080808',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            AM
          </div>
          <span
            className="font-semibold tracking-wider text-sm hidden sm:block"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#888' }}
          >
            ayub.dev
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => handleNav(href)}
              className="nav-link text-sm transition-colors duration-200"
              style={{
                color: active === href ? GOLD : '#555',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <span style={{ color: GOLD, fontSize: '0.65rem', opacity: 0.7 }}>0{i + 1}. </span>
              {label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs font-semibold rounded transition-all duration-300"
            style={{
              border: `1px solid rgba(183, 165, 122, 0.4)`,
              color: GOLD,
              fontFamily: 'JetBrains Mono, monospace',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(183, 165, 122, 0.08)'
              e.currentTarget.style.borderColor = 'rgba(183, 165, 122, 0.7)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(183, 165, 122, 0.4)'
            }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-5 h-px transition-all duration-300"
              style={{
                background: GOLD,
                transform:
                  i === 0 && menuOpen ? 'rotate(45deg) translateY(6px)' :
                  i === 2 && menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10"
            style={{ background: 'rgba(8, 8, 8, 0.98)', backdropFilter: 'blur(20px)' }}
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => handleNav(href)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-3xl font-light tracking-wide"
                style={{ color: '#F0EDE8' }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color = '#F0EDE8')}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-8 py-3 text-sm rounded mt-4"
              style={{
                border: `1px solid rgba(183, 165, 122, 0.4)`,
                color: GOLD,
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
