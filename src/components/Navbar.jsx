import { useEffect, useState } from 'react'
import { Menu, X, Rocket, Wallet } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_24px_#6366f1] grid place-items-center">
            <Rocket className="text-white" size={18} />
          </div>
          <span className="font-orbitron text-white text-lg tracking-wide">AmeroX</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToId('about')} className="nav-link">About</button>
          <button onClick={() => scrollToId('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToId('tokenomics')} className="nav-link">Tokenomics</button>
          <button onClick={() => scrollToId('roadmap')} className="nav-link">Roadmap</button>
          <button onClick={() => scrollToId('community')} className="nav-link">Community</button>
        </div>
        <div className="hidden md:flex">
          <a href="#launch" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow-[0_0_24px_#7c3aed] transition-transform hover:scale-[1.02]">
            <Wallet size={18} />
            <span>Launch App</span>
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3 bg-black/60 backdrop-blur">
          {[
            ['About','about'],
            ['Features','features'],
            ['Tokenomics','tokenomics'],
            ['Roadmap','roadmap'],
            ['Community','community']
          ].map(([label, id]) => (
            <button key={id} onClick={() => scrollToId(id)} className="w-full text-left text-white/90 py-2">
              {label}
            </button>
          ))}
          <a href="#launch" className="block text-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow-[0_0_24px_#7c3aed]">Launch App</a>
        </div>
      )}
      <style>{`
        .nav-link { color: rgba(255,255,255,0.85); transition: color .2s }
        .nav-link:hover { color: #fff }
      `}</style>
    </header>
  )
}
