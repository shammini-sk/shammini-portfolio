import { achievements } from '../utils/data'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 bg-[#020817]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azure-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">
            Achievements &{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`reveal p-7 rounded-2xl bg-gradient-to-br ${a.color} border glass-hover relative overflow-hidden group`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Decorative bg circle */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/3 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/2 group-hover:scale-125 transition-transform duration-700" />

              <span className="text-4xl mb-5 block relative z-10">{a.icon}</span>
              <h3 className="font-display font-bold text-white text-lg leading-tight mb-3 relative z-10">
                {a.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                {a.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline strip */}
        <div className="mt-16 reveal">
          <p className="font-mono text-xs text-slate-600 text-center mb-8 tracking-widest">JOURNEY TIMELINE</p>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-azure-500/30 via-azure-500/10 to-transparent -translate-x-1/2 hidden md:block" />
            <div className="space-y-6">
              {[
                { year: '2021', label: 'Started B.Sc. Computer Science at Meenakshi College', side: 'left' },
                { year: '2024', label: 'IoT Gas Leakage Detection – Academic Project', side: 'right' },
                { year: '2024', label: 'Graduated B.Sc. with CGPA 8.5 · Joined MCA', side: 'left' },
                { year: '2025', label: 'Nagrik Saathi shortlisted for SIH 2025', side: 'right' },
                { year: '2025', label: '🏆 Smart India Hackathon 2025 – National Finalist', side: 'left' },
                { year: '2026', label: 'Internship at Easwari × TVS Industry Collaboration', side: 'right' },
              ].map((t, i) => (
                <div key={i} className={`flex items-center gap-6 ${t.side === 'right' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-1 p-4 rounded-xl glass glass-hover ${t.side === 'right' ? 'text-right' : ''}`}>
                    <span className="font-mono text-xs text-azure-500">{t.year}</span>
                    <p className="text-slate-300 text-sm mt-1">{t.label}</p>
                  </div>
                  <div className="hidden md:flex w-3 h-3 rounded-full bg-azure-500 border-2 border-[#020817] shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
