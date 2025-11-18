import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="inline-flex items-center gap-3">
              <img src="/flame-icon.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-white font-semibold tracking-tight">Blue Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors">
                Start a project
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-slate-200 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600">
                  Start a project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
