import { useState } from 'react'
import { projects } from '../utils/data'
import ProjectModal from '../components/ProjectModal'

function ProjectCard({ project, onOpen }) {
  return (
    <div className="project-card reveal group">
      <div className="h-full rounded-2xl glass animated-border overflow-hidden flex flex-col">
        {/* Colored top strip */}
        <div className={`h-1 bg-gradient-to-r ${project.color}`} />

        <div className="p-7 flex flex-col flex-1">
          {/* Badge */}
          <span className={`self-start px-3 py-1 rounded-full text-xs border ${project.badgeColor} mb-4`}>
            {project.badge}
          </span>

          {/* Icon + title */}
          <div className="mb-4">
            <h3 className="font-display font-bold text-white text-xl leading-tight group-hover:text-azure-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-500 text-xs mt-1 font-mono">{project.subtitle}</p>
          </div>

          {/* Tagline */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
            {project.tagline}
          </p>

          {/* Key highlights (3 bullets) */}
          <ul className="space-y-2 mb-6">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2 text-slate-400 text-xs">
                <span style={{ color: project.accentColor }} className="mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 4).map((t) => (
              <span key={t} className="tech-tag text-[11px]">{t}</span>
            ))}
            {project.techStack.length > 4 && (
              <span className="tech-tag text-[11px] opacity-50">+{project.techStack.length - 4}</span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-auto">
            <button
              onClick={() => onOpen(project)}
              className="w-full py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02]"
              style={{ background: `linear-gradient(135deg, ${project.accentColor}30, ${project.accentColor}15)`, border: `1px solid ${project.accentColor}30` }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-28 bg-[#020817]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azure-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Real-world systems built with AI, IoT, and software engineering — from national-level
            hackathons to academic research.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.id} style={{ transitionDelay: `${i * 100}ms` }}>
              <ProjectCard project={p} onOpen={setSelected} />
            </div>
          ))}
        </div>

        {/* Architecture showcase strip */}
        <div className="mt-16 reveal">
          <div className="p-8 rounded-2xl glass border border-azure-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-azure-500/10 border border-azure-500/20 flex items-center justify-center">
                <span className="text-azure-400 text-sm">⚡</span>
              </div>
              <h3 className="font-display font-semibold text-white">SIH 2025 – System Architecture</h3>
              <span className="px-2 py-0.5 rounded text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-mono ml-auto">
                National Finalist
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'IoT Sensors', color: '#0ea5e9' },
                { label: '→', color: '#475569' },
                { label: 'Data Pipeline', color: '#0ea5e9' },
                { label: '→', color: '#475569' },
                { label: 'Random Forest', color: '#8b5cf6' },
                { label: '→', color: '#475569' },
                { label: 'XAI Layer', color: '#8b5cf6' },
                { label: '→', color: '#475569' },
                { label: 'Dashboard', color: '#10b981' },
                { label: '→', color: '#475569' },
                { label: 'Alerts', color: '#f59e0b' },
              ].map((node, i) => (
                <span
                  key={i}
                  className={node.label === '→' ? 'text-slate-600 text-lg' : 'px-3 py-1.5 rounded-lg text-xs font-mono font-medium'}
                  style={node.label !== '→' ? {
                    background: `${node.color}12`,
                    border: `1px solid ${node.color}30`,
                    color: node.color,
                  } : {}}
                >
                  {node.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
