import { motion } from 'framer-motion'
import { Shield, BarChart3, Zap, Repeat, Boxes, Atom, Banknote, LineChart, Layers } from 'lucide-react'

export function About() {
  const Item = ({ title, desc, icon: Icon }) => (
    <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 grid place-items-center">
          <Icon className="text-blue-300" size={20} />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-white/70 text-sm">{desc}</p>
    </motion.div>
  )

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-[#0b0b12] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-orbitron text-3xl md:text-4xl">About AmeroX</h2>
            <p className="mt-4 text-white/80">Mission: “Empowering the decentralized economy with intelligence, security, and accessibility.”</p>
            <p className="mt-2 text-white/80">Vision: “Bridging traditional finance and DeFi through AI-powered trading and capital efficiency.”</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Item title="Built on AMR" desc="High throughput, low fees, and secure by design." icon={Atom} />
              <Item title="Security First" desc="Audited smart contracts and rigorous risk controls." icon={Shield} />
              <Item title="Analytics" desc="AI-driven insights for smarter trades and yields." icon={BarChart3} />
              <Item title="Capital Efficiency" desc="Flash liquidity where and when you need it." icon={Zap} />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-orbitron text-blue-300">$120M</p>
                <p className="text-xs text-white/70">All-time Volume</p>
              </div>
              <div>
                <p className="text-3xl font-orbitron text-purple-300">65k</p>
                <p className="text-xs text-white/70">Community</p>
              </div>
              <div>
                <p className="text-3xl font-orbitron text-pink-300">99.9%</p>
                <p className="text-xs text-white/70">Uptime</p>
              </div>
            </div>
            <div className="mt-6 h-32 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 grid place-items-center text-white/70 text-sm">
              AMR Blockchain — Optimized for DeFi
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const features = [
    { title: 'Decentralized Exchange', desc: 'Instant swaps, multi-token pairs, and AI trading analytics', icon: Repeat },
    { title: 'Liquidity Staking', desc: 'Stake AMR or LP tokens to earn dynamic rewards', icon: Layers },
    { title: 'Flash Loans', desc: 'Zero-collateral loans for arbitrage, liquidation, and automation', icon: Zap },
  ]
  return (
    <section id="features" className="py-20 bg-[#0b0b12] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl">Core Features</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <motion.div key={f.title} whileHover={{ y: -6, boxShadow: '0 0 40px rgba(124,58,237,0.35)' }} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur group">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 grid place-items-center">
                <f.icon className="text-blue-300" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
              <button className="mt-4 text-sm text-blue-300 group-hover:text-blue-200">Learn more →</button>
            </motion.div>
          ))}
        </div>
        <div id="launch" className="mt-10 flex flex-wrap gap-4">
          <a className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 shadow-[0_0_24px_#7c3aed]">Launch App</a>
          <a className="rounded-xl border border-white/10 backdrop-blur px-5 py-2.5 hover:bg-white/10">Stake Now</a>
          <a className="rounded-xl border border-white/10 backdrop-blur px-5 py-2.5 hover:bg-white/10">Get Flash Loan</a>
        </div>
      </div>
    </section>
  )
}

export function Tokenomics() {
  // simple static allocation
  const allocations = [
    { label: 'Community', value: 40, color: '#60a5fa' },
    { label: 'Liquidity', value: 25, color: '#a78bfa' },
    { label: 'Team', value: 15, color: '#22d3ee' },
    { label: 'Treasury', value: 10, color: '#34d399' },
    { label: 'Advisors', value: 10, color: '#f472b6' },
  ]
  const total = allocations.reduce((a, b) => a + b.value, 0)
  let offset = 0

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-[#0b0b12] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-orbitron text-3xl md:text-4xl">Tokenomics</h2>
          <p className="mt-4 text-white/80">Token: AMR (utility & governance)</p>
          <p className="text-white/80">Supply: 100,000,000</p>
          <ul className="mt-4 space-y-2 text-white/80 text-sm">
            <li>• Governance and protocol upgrades</li>
            <li>• Staking rewards and liquidity incentives</li>
            <li>• Trading fee discounts</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 42 42" className="w-64 h-64">
            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#1f2937" strokeWidth="6" />
            {allocations.map((a, i) => {
              const val = (a.value / total) * 100
              const dash = (val / 100) * 100
              const dashArray = `${dash} ${100 - dash}`
              const dashOffset = 25 - (offset / 100) * 100
              offset += val
              return (
                <circle key={a.label} cx="21" cy="21" r="15.915" fill="transparent" stroke={a.color} strokeWidth="6" strokeDasharray={dashArray} strokeDashoffset={dashOffset} />
              )
            })}
          </svg>
        </div>
      </div>
    </section>
  )
}

export function Roadmap() {
  const items = [
    { q: 'Q1', t: 'Testnet launch' },
    { q: 'Q2', t: 'Mainnet deployment' },
    { q: 'Q3', t: 'Flash loan API for developers' },
    { q: 'Q4', t: 'Cross-chain bridge' },
  ]
  return (
    <section id="roadmap" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl">Roadmap</h2>
        <div className="mt-10 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {items.map((it, idx) => (
              <motion.div key={it.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10">
                <p className="font-orbitron text-blue-300">{it.q}</p>
                <p className="mt-2 text-white/80">{it.t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Community() {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-black to-[#0b0b12] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-orbitron text-3xl md:text-4xl">Join the Community</h2>
          <p className="mt-4 text-white/80">Connect with us on social channels and stay updated.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {['Telegram','X','Discord','GitHub'].map((s) => (
              <a key={s} className="rounded-xl border border-white/10 px-4 py-2 backdrop-blur hover:bg-white/10">{s}</a>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <form className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="font-semibold">Newsletter</h3>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <input placeholder="Email address" className="sm:col-span-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-white shadow-[0_0_24px_#7c3aed]">Subscribe</button>
            </div>
          </form>
          <form className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="mt-4 grid gap-3">
              <input placeholder="Name" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Email" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea rows="4" placeholder="Message" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-white shadow-[0_0_24px_#7c3aed]">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
