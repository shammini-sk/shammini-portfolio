import { useEffect, useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [activeScreenshot, setActiveScreenshot] = useState(null)

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (activeScreenshot) {
          setActiveScreenshot(null)
        } else {
          onClose()
        }
      }
    }

    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [activeScreenshot, onClose])

  if (!project) return null

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-content w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a1628] border border-azure-500/20 shadow-2xl">
        {/* Header */}
        <div className={`relative p-8 bg-gradient-to-br ${project.color} rounded-t-2xl`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors text-lg"
          >
            ×
          </button>
          <span className={`inline-block px-3 py-1 rounded-full text-xs border ${project.badgeColor} mb-3`}>
            {project.badge}
          </span>
          <h2 className="font-display text-2xl font-bold text-white">{project.title}</h2>
          <p className="text-white/70 text-sm mt-1">{project.subtitle}</p>
        </div>

        <div className="p-8 space-y-7">
          {/* Description */}
          <div>
            <h3 className="font-mono text-xs text-azure-400 uppercase tracking-widest mb-3">Overview</h3>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-mono text-xs text-azure-400 uppercase tracking-widest mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-azure-500 mt-1 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="font-mono text-xs text-azure-400 uppercase tracking-widest mb-4">Architecture / Workflow</h3>
            <div className="grid grid-cols-2 gap-3">
              {project.architecture.map((a) => (
                <div key={a.step} className="p-4 rounded-xl bg-navy-900/60 border border-slate-800">
                  <span className="font-mono text-xs text-azure-500">{a.step}</span>
                  <h4 className="font-semibold text-white text-sm mt-1">{a.label}</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="font-mono text-xs text-azure-400 uppercase tracking-widest mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="font-mono text-xs text-azure-400 uppercase tracking-widest mb-3">Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveScreenshot(screenshot)}
                    className="group relative aspect-video rounded-xl bg-navy-900 border border-slate-800 overflow-hidden focus:outline-none focus:ring-2 focus:ring-azure-500"
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-100 text-sm opacity-0 transition-opacity group-hover:opacity-100">
                      View full image
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-center hidden">
                      <div>
                        <span className="text-4xl">{project.icon}</span>
                        <p className="text-slate-600 text-sm mt-3 font-mono">Screenshot not found</p>
                        <p className="text-slate-700 text-xs mt-1">Add image to public/screenshots/</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Fullscreen screenshot preview */}
          {activeScreenshot && (
            <div
              className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-6"
              onClick={() => setActiveScreenshot(null)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveScreenshot(null)
                }}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center text-xl"
                aria-label="Close screenshot preview"
              >
                ×
              </button>
              <img
                src={activeScreenshot}
                alt={`${project.title} full screenshot`}
                className="max-w-full max-h-full rounded-3xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
