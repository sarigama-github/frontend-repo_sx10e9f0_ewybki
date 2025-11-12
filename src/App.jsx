import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Features, Tokenomics, Roadmap, Community } from './components/Sections'

function App() {
  useEffect(() => {
    document.title = 'AmeroX — DeFi DEX, Staking & Flash Loans'
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDesc.name = 'description'
    metaDesc.content = 'AmeroX is a next-generation DeFi platform with a DEX, liquidity staking, and flash loan engine on the AMR blockchain.'
    document.head.appendChild(metaDesc)

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.name = 'keywords'
    metaKeywords.content = 'DeFi, DEX, staking, flash loans, AMR token, AmeroX, crypto, liquidity, blockchain'
    document.head.appendChild(metaKeywords)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Community />
      <footer className="bg-black/80 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} AmeroX. All rights reserved.</p>
          <div className="text-white/50 text-sm">Built for the decentralized future.</div>
        </div>
      </footer>
      <style>{`
        .font-orbitron { font-family: 'Orbitron', 'Poppins', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; }
      `}</style>
    </div>
  )
}

export default App
