import { internship } from '../utils/data'

export default function Internship() {
  return (
    <section id="internship" className="relative py-28 bg-[#030c1e]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azure-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            Industry{' '}
            <span className="gradient-text">Internship</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <div className="relative p-8 rounded-2xl glass animated-border overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-azure-500/3 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-azure-500/10 border border-azure-500/20 flex items-center justify-center text-lg">
                    🏭
                  </div>
                  <span className="font-mono text-xs text-azure-400 uppercase tracking-widest">
                    Internship Trainee
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {internship.company}
                </h3>
              </div>
              <span className="shrink-0 px-4 py-2 rounded-xl glass border border-azure-500/20 font-mono text-xs text-azure-400 h-fit">
                {internship.period}
              </span>
            </div>

            {/* Collaboration tag */}
            <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <span className="text-xl">🤝</span>
              <div>
                <p className="text-slate-300 text-sm font-medium">Industry Collaboration with TVS Company</p>
                <p className="text-slate-500 text-xs mt-0.5">Industrial plant project · scheduling & operations</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              {internship.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/30 transition-colors group"
                >
                  <div className="w-6 h-6 rounded-md bg-azure-500/10 border border-azure-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-azure-400 text-xs font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills gained */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="font-mono text-xs text-slate-500 mb-3">SKILLS APPLIED</p>
              <div className="flex flex-wrap gap-2">
                {['Project Planning', 'Data Collection', 'Workflow Monitoring', 'Process Documentation', 'Team Collaboration', 'Resource Management'].map((s) => (
                  <span key={s} className="tech-tag text-[11px]">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
