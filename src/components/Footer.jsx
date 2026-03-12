import { motion } from 'framer-motion'

const GOLD = '#B7A57A'

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 md:px-16"
      style={{ borderTop: '1px solid rgba(183,165,122,0.06)' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="text-center md:text-left">
          <p className="text-xs" style={{ color: GOLD, fontFamily: 'JetBrains Mono, monospace' }}>
            Designed & Built by{' '}
            <span style={{ color: GOLD }}>Ayub Mohamed</span>
          </p>
          <p className="text-xs mt-1" style={{ color: GOLD, opacity: 0.5, fontFamily: 'JetBrains Mono, monospace' }}>
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-xs transition-colors duration-200"
              style={{ color: GOLD, opacity: 0.6, fontFamily: 'JetBrains Mono, monospace' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.6' }}
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: GOLD, opacity: 0.4, fontFamily: 'JetBrains Mono, monospace' }}>
          React · Three.js · Framer Motion
        </p>
      </motion.div>
    </footer>
  )
}
