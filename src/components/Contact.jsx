import { useState } from 'react'
import { motion } from 'framer-motion'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'mayub4806@gmail.com',
    href: 'mailto:mayub4806@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/ayubmo',
    href: 'https://github.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ayubmo',
    href: 'https://linkedin.com/in/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '206-369-7311',
    href: 'tel:+12063697311',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mayub4806@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="section-num text-lg">05.</span>
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <div className="flex-1 h-px" style={{ background: 'rgba(183,165,122,0.1)' }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{
              background: 'linear-gradient(160deg, #F0EDE8 30%, #555 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let's Build Something.
          </h3>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#444' }}>
            I'm actively looking for new opportunities — full-time roles,
            internships, or interesting projects to collaborate on. My inbox is always open.
          </p>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #B7A57A, #7A6645)',
              color: '#080808',
              boxShadow: '0 0 24px rgba(183,165,122,0.2)',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 36px rgba(183,165,122,0.35)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(183,165,122,0.2)')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {copied
                ? <path d="M20 6L9 17l-5-5"/>
                : <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>
              }
            </svg>
            {copied ? 'Copied!' : 'Copy Email Address'}
          </button>
        </motion.div>

        {/* Right: links */}
        <div className="space-y-3">
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Phone' && link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(183,165,122,0.2)'
                e.currentTarget.style.transform = 'translateX(5px)'
                e.currentTarget.style.background = 'rgba(183,165,122,0.04)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.background = '#0f0f0f'
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(183,165,122,0.07)', color: '#7A6645' }}
              >
                {link.icon}
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-0.5"
                  style={{ color: '#2e2e2e', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {link.label}
                </p>
                <p className="text-sm" style={{ color: '#888' }}>{link.value}</p>
              </div>
              <span className="ml-auto text-sm" style={{ color: '#2e2e2e' }}>→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
