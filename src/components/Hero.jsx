import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />

      {/* Spline canvas */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <Spline scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Soft radial glow overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        {/* Headline content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
                Creative studio for 3D and video game content
              </h1>
              <p className="mt-4 text-slate-300 md:text-lg">
                We craft playful, vibrant worlds and cinematic visuals. From concept to shipped assets — characters, environments, motion, and more.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors">
                  See our work
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold backdrop-blur hover:bg-white/20 transition-colors">
                  Start a project
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
