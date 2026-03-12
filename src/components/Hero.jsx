import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'Security Enthusiast',
  'Game Developer',
  'UW CS Graduate',
]

const GOLD   = '#B7A57A'
const PURPLE = '#7B52C9'

function Typewriter() {
  const [roleIndex, setRoleIndex]     = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting]   = useState(false)

  useEffect(() => {
    const role  = ROLES[roleIndex]
    const speed = isDeleting ? 45 : 110
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2200)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex(i => (i + 1) % ROLES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <div
      className="flex items-center justify-center gap-2 text-base md:text-xl font-light mb-6"
      style={{ fontFamily: 'JetBrains Mono, monospace' }}
    >
      <span style={{ color: GOLD, opacity: 0.5 }}>&lt;</span>
      <span className="min-w-[240px] md:min-w-[320px] text-left" style={{ color: '#777' }}>
        {displayText}
        <span className="cursor ml-0.5" style={{ color: GOLD }}>|</span>
      </span>
      <span style={{ color: GOLD, opacity: 0.5 }}>/&gt;</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <HeroCanvas />

      {/* Dual-color radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 40% 50%, rgba(75,46,131,0.07) 0%, transparent 60%), radial-gradient(ellipse at 60% 50%, rgba(183,165,122,0.05) 0%, transparent 60%)',
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)', zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative text-center px-6 max-w-4xl mx-auto" style={{ zIndex: 10 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.4em]"
          style={{ color: GOLD, fontFamily: 'JetBrains Mono, monospace', opacity: 0.7 }}
        >
          Hello World! I'm Ayub
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-4"
          style={{
            background: 'linear-gradient(160deg, #F0EDE8 20%, #aaa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.05,
          }}
        >
          Ayub Mohamed
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed"
          style={{ color: '#444' }}
        >
          UW Husky. CS graduate building impactful software — full-stack apps,
          security systems, and game engines.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #B7A57A, #7A6645)',
              color: '#080808',
              boxShadow: '0 0 24px rgba(183,165,122,0.2)',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(183,165,122,0.35)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(183,165,122,0.2)')}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              border: '1px solid rgba(75,46,131,0.4)',
              color: '#888',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(123,82,201,0.7)'
              e.currentTarget.style.color = PURPLE
              e.currentTarget.style.background = 'rgba(75,46,131,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(75,46,131,0.4)'
              e.currentTarget.style.color = '#888'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex gap-8 justify-center mt-10"
        >
          {[
            { label: 'GitHub',   href: 'https://github.com/' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
            { label: 'Email',    href: 'mailto:mayub4806@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest transition-colors duration-200"
              style={{ color: '#2e2e2e', fontFamily: 'JetBrains Mono, monospace' }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = '#2e2e2e')}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <span
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: '#222', fontFamily: 'JetBrains Mono, monospace' }}
        >
          scroll
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, #B7A57A, rgba(75,46,131,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
