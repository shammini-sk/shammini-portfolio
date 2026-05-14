import { useEffect, useRef } from 'react'
import { meta, typewriterWords } from '../utils/data'
import useTypewriter from '../hooks/useTypewriter'

// Animated particle background
function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Spawn particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(14,165,233,${0.07 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw dots
      particles.forEach((p) => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${p.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function Hero() {
  const typed = useTypewriter(typewriterWords, 75, 1800)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020817]"
    >
      {/* Particle canvas */}
      <ParticleField />

      {/* Orb gradients */}
      <div className="orb w-[500px] h-[500px] bg-azure-500 top-[-100px] left-[-150px] animate-pulse-slow" />
      <div className="orb w-[400px] h-[400px] bg-blue-700 bottom-[-80px] right-[-100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="orb w-[300px] h-[300px] bg-indigo-600 top-[40%] right-[20%]" style={{ opacity: 0.06 }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-azure-500/20 text-sm text-slate-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs tracking-wide">Available for Internships & Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-6xl md:text-8xl font-extrabold text-white leading-none mb-4 tracking-tight">
            {meta.name.split(' ')[0]}{' '}
            <span className="gradient-text">{meta.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xl md:text-2xl text-azure-400 tracking-wide">
              {typed}
            </span>
            <span className="typewriter-cursor" />
          </div>

          {/* Summary */}
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            MCA student at Easwari Engineering College · CGPA 9.21 · Building intelligent systems
            at the intersection of AI, IoT, and software engineering. National Finalist at{' '}
            <span className="text-azure-400 font-medium">Smart India Hackathon 2025</span>.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl bg-azure-500 hover:bg-azure-400 text-white font-semibold text-sm transition-all duration-200 glow-blue hover:glow-blue-strong hover:scale-105 active:scale-95"
            >
              View Projects
            </button>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl glass border border-azure-500/25 text-slate-300 hover:text-white font-medium text-sm transition-all duration-200 hover:border-azure-500/50 hover:scale-105"
            >
              LinkedIn ↗
            </a>
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl glass border border-slate-700/60 text-slate-400 hover:text-white font-medium text-sm transition-all duration-200 hover:border-slate-600 hover:scale-105"
            >
              GitHub ↗
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { val: '3+', label: 'Major Projects' },
              { val: '9.21', label: 'MCA CGPA' },
              { val: 'SIH \'25', label: 'National Finalist' },
              { val: 'IoT + AI', label: 'Core Expertise' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-white">{s.val}</span>
                <span className="font-mono text-xs text-slate-500 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="6.5" y="0" width="3" height="3" rx="1.5" fill="rgba(56,189,248,0.4)" />
          <rect x="6.5" y="6" width="3" height="3" rx="1.5" fill="rgba(56,189,248,0.25)" />
          <rect x="6.5" y="12" width="3" height="3" rx="1.5" fill="rgba(56,189,248,0.1)" />
        </svg>
      </div>
    </section>
  )
}
