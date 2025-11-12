import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center text-white">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-orbitron text-4xl sm:text-5xl md:text-6xl leading-tight">
          Trade. Earn. Borrow.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">The DeFi Way.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-4 max-w-2xl text-white/80">
          AmeroX is a DeFi ecosystem combining a DEX, liquidity staking, and flash loan engine powered by the AMR blockchain.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-8 flex flex-wrap gap-4">
          <a href="#launch" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white shadow-[0_0_24px_#7c3aed] transition-transform hover:scale-[1.03]">Launch App</a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/20 backdrop-blur px-6 py-3 text-white hover:bg-white/10">Explore Features</a>
        </motion.div>
      </div>
    </section>
  )
}
