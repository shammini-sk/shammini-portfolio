import { meta, education } from '../utils/data'

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#020817]">
      {/* Subtle section separator gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azure-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div className="reveal">
            <p className="section-label">Who I Am</p>
            <h2 className="section-title mb-6">
              Building intelligent<br />
              <span className="gradient-text">systems that matter</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              I'm an MCA student with a passion for creating AI-driven solutions that solve
              real-world problems. From predictive maintenance systems to civic-tech apps,
              I enjoy translating complex engineering into tangible impact.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              My recent national finalist placement at Smart India Hackathon 2025 validated
              my ability to deliver production-quality systems under pressure alongside a
              cross-functional team.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📍', label: 'Location', val: meta.location },
                { icon: '🎓', label: 'Degree', val: 'MCA (2024–2026)' },
                { icon: '💼', label: 'Focus', val: 'AI · IoT · Software' },
                { icon: '🏆', label: 'Achievement', val: 'SIH 2025 Finalist' },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 p-4 rounded-xl glass glass-hover"
                >
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-slate-500">{f.label}</p>
                    <p className="text-slate-200 text-sm font-medium mt-0.5">{f.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – education timeline */}
          <div className="reveal">
            <p className="section-label">Education</p>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl glass glass-hover animated-border group"
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-azure-500/60 to-transparent rounded-full" />
                  <div className="pl-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display font-bold text-white text-lg leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-azure-400 text-sm mt-1">{edu.institution}</p>
                        <p className="text-slate-500 text-xs mt-1 font-mono">{edu.location}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-xs text-slate-500 block">{edu.period}</span>
                        <span className="mt-2 inline-block px-3 py-1 rounded-full bg-azure-500/10 border border-azure-500/20 text-azure-400 text-xs font-mono font-semibold">
                          CGPA {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="mt-6 p-5 rounded-xl glass">
              <p className="font-mono text-xs text-slate-500 mb-3">SOFT SKILLS</p>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Teamwork', 'Analytical Thinking', 'Problem Solving', 'Fast Learner'].map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
