import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background subtle pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.06),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Blue Studio — Playful 3D & Motion</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
