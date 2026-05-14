import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Internship from './sections/Internship'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  // Activate scroll-reveal animations
  useScrollReveal()

  // Re-run reveal on route changes (single page, but good practice)
  useEffect(() => {
    // Small delay so sections render first
    const t = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal')
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )
      elements.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-[#020817] text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Achievements />
        <Contact />
      </main>
      <Footer />

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full glass border border-azure-500/20 text-azure-400 hover:border-azure-500/50 hover:text-azure-300 transition-all hover:scale-110 active:scale-95 z-40 text-sm"
        title="Back to top"
      >
        ↑
      </button>
    </div>
  )
}
