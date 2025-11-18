import { Sparkles, Clapperboard, Shapes, Palette } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: '3D Asset Production',
    desc: 'Stylized and realistic models for games and film — characters, props, and environments.',
  },
  {
    icon: Clapperboard,
    title: 'Cinematics & Motion',
    desc: 'Storyboards to final edit. Title sequences, in-game cutscenes, and trailers.',
  },
  {
    icon: Shapes,
    title: 'Interactive Experiences',
    desc: 'Real-time scenes, WebGL/Spline interactivity, and interactive brand storytelling.',
  },
  {
    icon: Palette,
    title: 'Art Direction',
    desc: 'Worldbuilding, look-dev, and visual language systems that feel cohesive and fun.',
  },
]

function Features() {
  return (
    <section id="services" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-300">
            A tight team of artists, animators, and engineers building joyful, performant visuals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-800/40 p-6 transition hover:border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
