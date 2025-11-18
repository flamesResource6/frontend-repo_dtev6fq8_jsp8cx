function CTA() {
  return (
    <section id="contact" className="relative bg-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something playful</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Tell us about your world, characters, or the feeling you want to evoke. We’ll bring it to life with motion and interactivity.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <ul className="grid gap-2 text-slate-200 text-sm">
                <li>• 3D character and environment production</li>
                <li>• Motion design and cinematic sequences</li>
                <li>• Interactive web experiences</li>
              </ul>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-slate-300">Your name</label>
              <input className="w-full rounded-lg bg-slate-900/60 px-4 py-2 text-white placeholder-slate-500 outline-none border border-white/10 focus:border-blue-500/40" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" className="w-full rounded-lg bg-slate-900/60 px-4 py-2 text-white placeholder-slate-500 outline-none border border-white/10 focus:border-blue-500/40" placeholder="you@studio.com" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-slate-300">What are you building?</label>
              <textarea rows="4" className="w-full rounded-lg bg-slate-900/60 px-4 py-2 text-white placeholder-slate-500 outline-none border border-white/10 focus:border-blue-500/40" placeholder="Short brief" />
            </div>
            <button type="button" className="inline-flex justify-center rounded-xl bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-600">Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
