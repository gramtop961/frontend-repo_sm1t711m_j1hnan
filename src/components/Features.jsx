import React from 'react';
import { Eye, Camera, Mic, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Eye,
    title: 'Scene Narration',
    desc: 'Hear concise descriptions of your surroundings with spatial awareness and context.',
    hue: 'from-fuchsia-500 to-violet-500',
  },
  {
    icon: Camera,
    title: 'Object Recognition',
    desc: 'Identify people, obstacles, signage, and everyday items in real time.',
    hue: 'from-cyan-400 to-sky-500',
  },
  {
    icon: Mic,
    title: 'In-house AI Agent',
    desc: 'Ask questions and get instant, private answers. Works offline for core tasks.',
    hue: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    desc: 'On-device processing keeps your world yours. No unnecessary data leaves the glasses.',
    hue: 'from-amber-400 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight"
        >
          Built for vision. Engineered for trust.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-2xl text-white/75"
        >
          A seamless blend of hardware and AI that augments perception without compromising privacy.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, hue }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${hue}`} />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${hue} text-black shadow-lg shadow-black/20`}> 
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/75 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
