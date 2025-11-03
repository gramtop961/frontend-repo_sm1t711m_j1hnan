import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that do not block interaction */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      <div aria-hidden className="pointer-events-none absolute -inset-x-20 -top-40 h-80 blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-blue-400 to-orange-300" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
          New • AI for Accessibility
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Smart Glasses with an In‑House AI Agent
        </h1>
        <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Real‑time object recognition and scene narration designed for the visually impaired. Subtle, fast, and private — right on your device.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-900 transition-colors">
            Join the waitlist
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium hover:border-black/20 transition-colors">
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
