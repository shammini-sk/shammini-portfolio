import { skills } from '../utils/data'

const categoryIcons = {
  'Languages': '{ }',
  'AI / ML': '🧠',
  'Automation': '⚙️',
  'IoT': '📡',
  'Databases': '🗄️',
  'Dev Tools': '🛠',
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[#030c1e]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azure-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">Technical Expertise</p>
          <h2 className="section-title">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A curated set of tools and technologies I've applied in production projects and academic research.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.category}
              className="reveal p-6 rounded-2xl glass glass-hover group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Header row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{categoryIcons[skill.category]}</span>
                <h3 className="font-display font-semibold text-white">
                  {skill.category}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50 hover:border-azure-500/30 hover:text-azure-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tag cloud */}
        <div className="mt-12 reveal text-center">
          <p className="font-mono text-xs text-slate-600 mb-4 tracking-widest">ALSO FAMILIAR WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'Linux', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Scikit-learn', 'GitHub Actions', 'Postman'].map((t) => (
              <span key={t} className="tech-tag opacity-60 hover:opacity-100 transition-opacity cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
