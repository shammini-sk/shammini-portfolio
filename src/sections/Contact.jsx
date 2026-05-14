import { useState } from 'react'
import { meta } from '../utils/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens default mail client with prefilled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Hi Shammini,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const socials = [
    { label: 'Email', value: meta.email, href: `mailto:${meta.email}`, icon: '✉️' },
    { label: 'LinkedIn', value: 'linkedin.com/in/shammini-sk-636939309', href: meta.linkedin, icon: '💼' },
    { label: 'GitHub', value: 'github.com/shammini-sk', href: meta.github, icon: '⌥' },
    { label: 'Phone', value: meta.phone, href: `tel:${meta.phone}`, icon: '📱' },
  ]

  return (
    <section id="contact" className="relative py-28 bg-[#030c1e]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azure-500/20 to-transparent" />

      {/* Glow orb */}
      <div className="orb w-[400px] h-[400px] bg-azure-600 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" style={{ opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="section-label">Let's Talk</p>
          <h2 className="section-title">
            Get in{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Open to internship opportunities, collaborations, and interesting conversations about AI and software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left – contact info */}
          <div className="reveal space-y-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' && s.label !== 'Phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-xl glass glass-hover group"
              >
                <div className="w-11 h-11 rounded-xl bg-azure-500/10 border border-azure-500/20 flex items-center justify-center text-xl group-hover:border-azure-500/40 transition-colors shrink-0">
                  {s.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500">{s.label}</p>
                  <p className="text-slate-200 text-sm mt-0.5 group-hover:text-azure-300 transition-colors break-all">
                    {s.value}
                  </p>
                </div>
                <span className="ml-auto text-slate-600 group-hover:text-azure-400 transition-colors">↗</span>
              </a>
            ))}

            {/* Resume download CTA */}
            <a
              href="/Shammini_SK_Resume.pdf"
              download
              className="flex items-center justify-center gap-3 w-full p-5 rounded-xl bg-azure-500/10 border border-azure-500/25 text-azure-400 hover:bg-azure-500/20 hover:border-azure-500/50 transition-all font-medium group"
            >
              <span>Download Resume</span>
              <span className="text-lg group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>

          {/* Right – contact form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-4 p-7 rounded-2xl glass animated-border">
              <h3 className="font-display font-semibold text-white text-lg mb-5">Send a Message</h3>

              <div>
                <label className="font-mono text-xs text-slate-500 mb-1.5 block">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/60 border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-azure-500/50 focus:ring-1 focus:ring-azure-500/20 transition-all"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-500 mb-1.5 block">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/60 border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-azure-500/50 focus:ring-1 focus:ring-azure-500/20 transition-all"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-500 mb-1.5 block">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="I'd love to discuss an internship opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-navy-900/60 border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-azure-500/50 focus:ring-1 focus:ring-azure-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-azure-500 hover:bg-azure-400 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 glow-blue"
              >
                {sent ? '✓ Opening mail client...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
