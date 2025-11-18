import { motion } from 'framer-motion'

const work = [
  {
    title: 'Vibrant Creatures Pack',
    tag: 'Game Assets',
    cover: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Micro Worlds',
    tag: '3D Environments',
    cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Title Animation',
    tag: 'Motion Design',
    cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
]

function Showcase() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-slate-300 max-w-xl">A peek at recent projects across stylized 3D, motion, and interactive storytelling.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Get in touch</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item, i) => (
            <motion.a
              key={item.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40"
            >
              <img src={item.cover} alt="" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/80">
                <p className="text-xs uppercase tracking-wider text-slate-300">{item.tag}</p>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
