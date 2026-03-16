import { useRef, useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

const GOLD = '#B7A57A'

const PROJECTS = [
  {
    id: 0,
    title: 'FinTrackr',
    subtitle: 'Full-Stack Personal Finance SaaS',
    date: '2025',
    description:
      'Built a full-stack SaaS app for personal finance tracking with user authentication, Stripe subscription payments, and interactive charts. Features a React frontend with a Node.js/Express backend and PostgreSQL database.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe'],
    icon: '💰',
    github: 'https://github.com/Ayubmo-2',
    highlights: [
      'JWT auth with refresh tokens',
      'Stripe Pro subscription ($5/mo)',
      'Interactive finance dashboards',
    ],
  },
  {
    id: 1,
    title: "Paladin's Quest",
    subtitle: '2D Roguelike Dungeon Game',
    date: 'December 2024',
    description:
      'Led a team of four to develop a 2D top-down roguelike dungeon game featuring medieval-themed combat. Designed enemy AI for skeletons, goblins, and boss fights, with a level progression system for health, speed, and attack power.',
    tags: ['JavaScript', 'Python', 'Pygame', 'AI Systems', 'Game Dev'],
    icon: '⚔️',
    github: 'https://ayubmo-2.github.io/Paladins-Quest/',
    highlights: [
      'Led team of 4 engineers',
      'Enemy AI with dynamic difficulty',
      'Level progression system',
    ],
  },
  {
    id: 2,
    title: 'Sports Trivia Maze',
    subtitle: 'Interactive Database-Backed Game',
    date: 'August 2024',
    description:
      'Created an interactive maze game using Java and GUI-based design, integrating sports trivia questions to guide players. Implemented SQLite database to store and manage player responses and game results for personalization.',
    tags: ['Java', 'SQLite', 'Swing', 'GUI', 'Database'],
    icon: '🏆',
    github: 'https://github.com/Ayubmo-2/Sports-Trivia-Maze',
    highlights: [
      'SQLite persistence layer',
      'Question-based navigation',
      'Player result tracking',
    ],
  },
  {
    id: 3,
    title: 'Java Paint Project',
    subtitle: 'Full-Featured Digital Art App',
    date: 'March 2024',
    description:
      'Developed a full painting application using Java and Swing, allowing users to create and manipulate digital artwork. Implemented a wide range of brush shapes, color selection tools, and an intuitive user interface.',
    tags: ['Java', 'Swing', 'UI Design', 'OOP', 'Desktop App'],
    icon: '🎨',
    github: 'https://github.com/Ayubmo-2',
    highlights: [
      'Multiple brush shapes & tools',
      'Full color selection system',
      'Intuitive UI for all skill levels',
    ],
  },
]

const VISIBLE = 3
const MAX_OFFSET = PROJECTS.length - VISIBLE

function ProjectCard({ project, dragging }) {
  const cardRef = useRef()

  const handleMouseMove = (e) => {
    if (dragging) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rx = ((y - cy) / cy) * 7
    const ry = ((cx - x) / cx) * 7
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`
    card.style.boxShadow = '0 24px 50px rgba(0,0,0,0.6), 0 0 30px rgba(183,165,122,0.08)'
    card.style.borderColor = 'rgba(183,165,122,0.25)'
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'
    card.style.borderColor = 'rgba(183,165,122,0.08)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card rounded-xl overflow-hidden flex-shrink-0"
      style={{
        width: 'calc((100% - 40px) / 3)',
        scrollSnapAlign: 'start',
        background: '#0f0f0f',
        border: '1px solid rgba(183,165,122,0.08)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
        userSelect: 'none',
      }}
    >
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(183,165,122,0.4), transparent)' }}
      />
      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-2xl">{project.icon}</span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: 'rgba(183,165,122,0.06)',
                  border: '1px solid rgba(183,165,122,0.12)',
                  color: '#7A6645',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {project.date}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-0.5" style={{ color: '#F0EDE8' }}>
              {project.title}
            </h3>
            <p className="text-xs" style={{ color: '#555' }}>
              {project.subtitle}
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => { if (dragging) e.preventDefault() }}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110 shrink-0"
            style={{
              background: 'rgba(183,165,122,0.05)',
              border: '1px solid rgba(183,165,122,0.1)',
              color: '#555',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = 'rgba(183,165,122,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = 'rgba(183,165,122,0.1)' }}
            title="View on GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: '#444' }}>
          {project.description}
        </p>

        <div className="space-y-1.5 mb-5">
          {project.highlights.map(h => (
            <div key={h} className="flex items-center gap-2">
              <span style={{ color: GOLD, fontSize: '0.6rem' }}>◆</span>
              <span className="text-xs" style={{ color: '#555' }}>{h}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: '#444',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArrowButton({ onClick, disabled, direction }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center rounded-lg transition-all duration-200"
      style={{
        width: 36,
        height: 36,
        background: disabled ? 'rgba(255,255,255,0.02)' : 'rgba(183,165,122,0.06)',
        border: `1px solid ${disabled ? 'rgba(255,255,255,0.04)' : 'rgba(183,165,122,0.15)'}`,
        color: disabled ? '#333' : GOLD,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {direction === 'left' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      )}
    </button>
  )
}

export default function Projects() {
  const [offset, setOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const scrollRef = useRef()
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const hasDragged = useRef(false)

  const getCardStep = useCallback(() => {
    const container = scrollRef.current
    if (!container) return 0
    return container.scrollWidth / PROJECTS.length + 20 / PROJECTS.length
  }, [])

  const scrollToOffset = useCallback((newOffset) => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = (container.scrollWidth - (PROJECTS.length - 1) * 20) / PROJECTS.length
    container.scrollTo({ left: newOffset * (cardWidth + 20), behavior: 'smooth' })
  }, [])

  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = (container.scrollWidth - (PROJECTS.length - 1) * 20) / PROJECTS.length
    const newOffset = Math.round(container.scrollLeft / (cardWidth + 20))
    setOffset(Math.min(MAX_OFFSET, Math.max(0, newOffset)))
  }, [])

  // Mouse drag-to-scroll
  const onMouseDown = useCallback((e) => {
    const container = scrollRef.current
    if (!container) return
    hasDragged.current = false
    dragStart.current = { x: e.clientX, scrollLeft: container.scrollLeft }
    setDragging(true)
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!dragging) return
    const dx = e.clientX - dragStart.current.x
    if (Math.abs(dx) > 4) hasDragged.current = true
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx
  }, [dragging])

  const onMouseUp = useCallback(() => {
    if (!dragging) return
    setDragging(false)
    // Snap to nearest card after drag
    handleScroll()
    const container = scrollRef.current
    if (!container) return
    const cardWidth = (container.scrollWidth - (PROJECTS.length - 1) * 20) / PROJECTS.length
    const newOffset = Math.round(container.scrollLeft / (cardWidth + 20))
    const clamped = Math.min(MAX_OFFSET, Math.max(0, newOffset))
    setOffset(clamped)
    container.scrollTo({ left: clamped * (cardWidth + 20), behavior: 'smooth' })
  }, [dragging, handleScroll])

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [onMouseUp, onMouseMove])

  const prev = () => {
    const n = Math.max(0, offset - 1)
    setOffset(n)
    scrollToOffset(n)
  }

  const next = () => {
    const n = Math.min(MAX_OFFSET, offset + 1)
    setOffset(n)
    scrollToOffset(n)
  }

  return (
    <section id="projects" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-5"
      >
        <span className="section-num text-lg">03.</span>
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="flex-1 h-px" style={{ background: 'rgba(183,165,122,0.1)' }} />
      </motion.div>

      <div className="flex items-center justify-between mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs"
          style={{ color: '#2e2e2e', fontFamily: 'JetBrains Mono, monospace' }}
        >
          // drag or use arrows to scroll
        </motion.p>

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 mr-2">
            {Array.from({ length: MAX_OFFSET + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setOffset(i); scrollToOffset(i) }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: offset === i ? 16 : 6,
                  height: 6,
                  background: offset === i ? GOLD : 'rgba(183,165,122,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
          <ArrowButton onClick={prev} disabled={offset === 0} direction="left" />
          <ArrowButton onClick={next} disabled={offset === MAX_OFFSET} direction="right" />
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onScroll={handleScroll}
        className="flex gap-5"
        style={{
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: dragging ? 'grabbing' : 'grab',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} dragging={dragging} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center mt-14"
      >
        <a
          href="https://github.com/Ayubmo-2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs transition-all duration-300"
          style={{ color: '#444', fontFamily: 'JetBrains Mono, monospace' }}
          onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.gap = '10px' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#444'; e.currentTarget.style.gap = '8px' }}
        >
          View all repositories on GitHub →
        </a>
      </motion.div>
    </section>
  )
}
