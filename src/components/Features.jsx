import React from 'react';
import { Eye, Mic, Camera, Shield } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Scene Narration',
    desc: 'Understand your surroundings with natural, concise descriptions delivered through a discrete audio cue.'
  },
  {
    icon: Camera,
    title: 'Real‑time Recognition',
    desc: 'Identify people, objects, text, and obstacles instantly with on‑device vision models tuned for speed.'
  },
  {
    icon: Mic,
    title: 'In‑house AI Agent',
    desc: 'Speak naturally. Your private voice assistant guides you hands‑free — no cloud required.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Local processing keeps your data secure. What you see and say stays with you.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(168,85,247,0.10),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Designed for clarity and confidence</h2>
          <p className="mt-3 text-gray-700">
            Every detail is crafted to empower independence — fast feedback, gentle prompts, and reliable assistance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
