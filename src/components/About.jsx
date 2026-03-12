import { motion } from 'framer-motion'

const GOLD = '#B7A57A'

const stats = [
  { value: '3.5', label: 'GPA',      sub: 'University of Washington' },
  { value: '3+',  label: 'Years',    sub: 'Professional Experience'  },
  { value: '10+', label: 'Projects', sub: 'Shipped & Deployed'       },
  { value: '25+', label: 'Courses',  sub: 'Completed at UW'          },
]

const highlights = [
  { icon: '🎓', text: 'B.S. Computer Science, UW — June 2025' },
  { icon: '🔒', text: 'Security Operations & Access Management' },
  { icon: '⚡', text: 'Full-Stack Development & APIs' },
  { icon: '🎮', text: 'Game Development & AI Systems' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="section-num text-lg">01.</span>
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <div className="flex-1 h-px" style={{ background: 'rgba(183, 165, 122, 0.1)' }} />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#666' }}>
            I'm a{' '}
            <span style={{ color: '#F0EDE8', fontWeight: 500 }}>
              Computer Science graduate from the University of Washington
            </span>{' '}
            (GPA 3.5, June 2025) with a passion for building software that actually matters.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#666' }}>
            My experience spans{' '}
            <span style={{ color: GOLD }}>full-stack development</span>,{' '}
            <span style={{ color: GOLD }}>enterprise security operations</span>, and{' '}
            <span style={{ color: GOLD }}>game development</span>. I've shipped projects
            across Java, Python, JavaScript, and more — while managing mission-critical
            security infrastructure for Amazon.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#666' }}>
            I thrive at the intersection of technical depth and creative problem-solving —
            whether architecting enemy AI for a dungeon crawler, building database-backed
            applications, or managing access control for a Fortune 500 company.
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2">
            {highlights.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="text-base">{icon}</span>
                <span className="text-sm" style={{ color: '#444' }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avatar + stats */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-48 h-48 md:w-56 md:h-56"
          >
            {/* Gold ring border */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #B7A57A, #3a2a10)',
                padding: '1.5px',
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: '#0f0f0f' }}
              >
                <span
                  className="text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #D4B896, #7A6645)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  AM
                </span>
              </div>
            </div>
            <div
              className="float-anim absolute -top-1 -right-1 w-3 h-3 rounded-full"
              style={{ background: GOLD, boxShadow: `0 0 10px ${GOLD}` }}
            />
            <div
              className="float-anim absolute -bottom-1 -left-1 w-2 h-2 rounded-full"
              style={{ background: '#7A6645', animationDelay: '2.5s' }}
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="glass rounded-xl p-5 text-center transition-all duration-300"
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(183,165,122,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(183,165,122,0.12)')}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #D4B896, #7A6645)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="font-semibold text-sm mb-0.5" style={{ color: '#888' }}>
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: '#333' }}>
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
