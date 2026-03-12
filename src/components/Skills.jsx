import { motion } from 'framer-motion'

const GOLD = '#B7A57A'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'Java', 'Swift', 'JavaScript', 'SQL (Postgres)', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    skills: ['.NET', 'React', 'Node.js', 'Flask', 'FastAPI', 'Spring Boot'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'PyCharm', 'Xcode', 'CI/CD', 'AWS'],
  },
  {
    category: 'Libraries & AI',
    skills: ['TensorFlow', 'PyTorch', 'pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
]

const CORE_COMPETENCIES = [
  { label: 'Full-Stack Development',        level: 90 },
  { label: 'Security Engineering',           level: 85 },
  { label: 'Data Structures & Algorithms',   level: 88 },
  { label: 'Machine Learning',               level: 75 },
  { label: 'Game Development',               level: 78 },
  { label: 'Database Design',                level: 82 },
]

function SkillBar({ label, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.09 }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm" style={{ color: '#888' }}>{label}</span>
        <span className="text-xs" style={{ color: '#333', fontFamily: 'JetBrains Mono, monospace' }}>
          {level}%
        </span>
      </div>
      <div
        className="h-px rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, delay: index * 0.09 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #4B2E83, #B7A57A, #D4B896)`,
            boxShadow: '0 0 8px rgba(75,46,131,0.25)',
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-16" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="section-num text-lg">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="flex-1 h-px" style={{ background: 'rgba(183,165,122,0.1)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skill tag groups */}
          <div className="space-y-10">
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: GOLD, fontFamily: 'JetBrains Mono, monospace', opacity: 0.7 }}
                >
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1.5 rounded text-xs"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: '#555',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Competency bars */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest mb-8"
              style={{ color: '#2e2e2e', fontFamily: 'JetBrains Mono, monospace' }}
            >
              // core competencies
            </motion.p>

            {CORE_COMPETENCIES.map((item, i) => (
              <SkillBar key={item.label} {...item} index={i} />
            ))}

            {/* Coursework block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 p-5 rounded-xl"
              style={{
                background: 'rgba(183,165,122,0.03)',
                border: '1px solid rgba(183,165,122,0.08)',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: GOLD, fontFamily: 'JetBrains Mono, monospace', opacity: 0.6 }}
              >
                Notable Coursework
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'OS Security', 'Network Security', 'NLP / LLM', 'AI & ML',
                  'Big Data', 'Compiler Design', 'Concurrent Programming',
                  'Embedded Systems', 'Computer Architecture', 'Automata & Formal Languages',
                ].map(course => (
                  <span
                    key={course}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: 'rgba(255,255,255,0.03)', color: '#333' }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
