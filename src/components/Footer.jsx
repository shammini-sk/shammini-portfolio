import { meta } from '../utils/data'

export default function Footer() {
  return (
    <footer className="relative py-10 bg-[#020817] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-white">
            <span className="text-azure-400">S</span>K
          </span>
          <span className="text-slate-700">|</span>
          <span className="font-mono text-xs text-slate-600">Shammini S K – Portfolio {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-600 hover:text-azure-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-600 hover:text-azure-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="font-mono text-xs text-slate-600 hover:text-azure-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
