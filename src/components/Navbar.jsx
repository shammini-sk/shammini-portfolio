import { useState, useEffect } from 'react'
import { meta } from '../utils/data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internship', href: '#internship' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // Highlight active section
      const sections = links.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-azure-500/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-xl text-white tracking-tight group"
        >
          <span className="text-azure-400">S</span>
          <span className="group-hover:text-azure-300 transition-colors">K</span>
          <span className="font-mono text-slate-500 text-sm ml-2 font-normal">./portfolio</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`font-body text-sm transition-all duration-200 hover:text-azure-400 ${
                active === l.href.replace('#', '')
                  ? 'text-azure-400'
                  : 'text-slate-400'
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/Shammini_SK_Resume.pdf"
            download
            className="ml-2 px-4 py-2 rounded-lg bg-azure-500/10 border border-azure-500/30 text-azure-400 text-sm font-medium hover:bg-azure-500/20 hover:border-azure-500/50 transition-all duration-200"
          >
            Resume ↓
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-azure-500/10 mt-1">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left text-slate-300 hover:text-azure-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </button>
            ))}
            <a
              href="/Shammini_SK_Resume.pdf"
              download
              className="text-left text-azure-400 text-sm font-medium"
            >
              Download Resume ↓
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
