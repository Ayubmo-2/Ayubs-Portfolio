import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GOLD = '#B7A57A'

const EXPERIENCE = [
  {
    id: 0,
    company: 'Securitas | Amazon LEO',
    role: 'Corporate Security Officer',
    period: 'October 2025 – Present',
    location: 'Seattle, WA',
    bullets: [
      'Led daily access management operations, providing Tier 1–3 technical support for badges, alarms, and system issues using Lenel OnGuard.',
      'Managed customer and internal requests through Jira, monitored ticket queues, coordinated escalations, and partnered with internal teams and vendors to resolve issues.',
      'Verified visitors and supported ITAR-controlled access using RightCrowd, mitigated alarms, maintained documentation, and trained team members on access procedures.',
    ],
    tags: ['Lenel OnGuard', 'Jira', 'RightCrowd', 'ITAR', 'Access Management'],
  },
  {
    id: 1,
    company: 'Securitas | Amazon',
    role: 'Security Command Center Operator',
    period: 'April 2022 – October 2025',
    location: 'Seattle, WA',
    bullets: [
      'Maintained detailed records and reports, ensuring secure handling of sensitive information across Amazon facilities.',
      'Applied critical thinking and fast decision-making during security incidents in high-pressure environments while monitoring Lenel and CCTV systems.',
      'Coordinated with team members to implement security protocols and maintain site safety across large-scale operations.',
    ],
    tags: ['Lenel', 'CCTV', 'Incident Response', 'Security Protocols'],
  },
  {
    id: 2,
    company: 'University of Washington',
    role: 'B.S. Computer Science',
    period: 'Graduated June 2025',
    location: 'Seattle, WA',
    bullets: [
      'GPA: 3.5/4.0 — Completed rigorous coursework in data structures, algorithms, operating systems, compilers, and AI/ML.',
      'Senior Capstone: Operating Systems Security — deep dive into kernel-level security mechanisms and exploit mitigations.',
      'Relevant coursework: Computer/Network Security, NLP/LLM, AI & ML, Big Data, Embedded Systems, Concurrent Programming, Compiler Design.',
    ],
    tags: ['GPA 3.5', 'OS Security', 'NLP/LLM', 'AI/ML', 'Algorithms'],
  },
]

export default function Experience() {
  const [activeId, setActiveId] = useState(0)

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-16"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-num text-lg">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <div className="flex-1 h-px" style={{ background: 'rgba(183, 165, 122, 0.1)' }} />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab list */}
          <div className="md:w-60 flex md:flex-col overflow-x-auto md:overflow-visible gap-0.5 shrink-0 pb-2 md:pb-0">
            {EXPERIENCE.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className="px-4 py-3 text-left whitespace-nowrap transition-all duration-200 border-l-2"
                style={{
                  borderColor: activeId === exp.id ? GOLD : 'rgba(255,255,255,0.04)',
                  color:       activeId === exp.id ? GOLD : '#444',
                  background:  activeId === exp.id ? 'rgba(183,165,122,0.05)' : 'transparent',
                  fontFamily:  'JetBrains Mono, monospace',
                  fontSize:    '0.78rem',
                }}
                onMouseEnter={e => { if (activeId !== exp.id) e.currentTarget.style.color = '#888' }}
                onMouseLeave={e => { if (activeId !== exp.id) e.currentTarget.style.color = '#444' }}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1 min-h-[320px]">
            <AnimatePresence mode="wait">
              {EXPERIENCE.filter(e => e.id === activeId).map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-1.5" style={{ color: '#F0EDE8' }}>
                      {exp.role}{' '}
                      <span style={{ color: GOLD }}>@ {exp.company}</span>
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: '#3a3a3a', fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {exp.period} · {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span
                          className="mt-2 shrink-0 w-1 h-1 rounded-full"
                          style={{ background: GOLD }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: '#555' }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-xs"
                        style={{
                          background: 'rgba(183,165,122,0.06)',
                          border: '1px solid rgba(183,165,122,0.15)',
                          color: '#7A6645',
                          fontFamily: 'JetBrains Mono, monospace',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24"
        >
          <div className="hidden md:flex items-start justify-between relative">
            <div
              className="absolute top-4 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, #B7A57A, #4B2E83, #B7A57A)' }}
            />
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.id} className="flex flex-col items-center gap-3 relative z-10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-200"
                  onClick={() => setActiveId(exp.id)}
                  style={{
                    background: activeId === exp.id ? GOLD : '#1a1a1a',
                    color: activeId === exp.id ? '#080808' : '#444',
                    border: `1px solid rgba(183,165,122,${activeId === exp.id ? '1' : '0.2'})`,
                    fontFamily: 'JetBrains Mono, monospace',
                    boxShadow: activeId === exp.id ? `0 0 14px rgba(183,165,122,0.4)` : 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-center max-w-[160px]">
                  <p className="text-xs font-medium mb-0.5" style={{ color: '#555' }}>
                    {exp.company}
                  </p>
                  <p className="text-xs" style={{ color: '#2e2e2e', fontFamily: 'JetBrains Mono, monospace' }}>
                    {exp.period.split('–')[0].trim()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
