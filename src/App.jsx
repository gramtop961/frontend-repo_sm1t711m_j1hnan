import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Features />

      {/* Technology/Accessibility section with subtle parallax copy */}
      <section id="tech" className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              On-device intelligence. Off-the-charts immersion.
            </h2>
            <p className="mt-4 text-white/75 max-w-xl">
              Our in-house agent is optimized for low-latency audio and scene understanding. Core experiences run offline; connectivity enhances cloud-only extras — never your privacy.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <ul className="space-y-3 text-sm text-white/80">
                <li>• Real-time object and text recognition</li>
                <li>• Spatial audio narration with context</li>
                <li>• Wake-word and tap-to-talk voice agent</li>
                <li>• Private by default — no tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <footer className="relative border-t border-white/10 bg-black/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 text-center text-white/60">
          © {new Date().getFullYear()} LumenSight. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
