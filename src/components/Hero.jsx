import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });
  const glowShift = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);

  const onMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white"
    >
      {/* Spline cover background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle galaxy gradients (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -inset-40 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.25),transparent_60%)]" />
      </div>

      {/* Content with parallax tilt */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-20 mx-auto max-w-7xl px-6 pt-36 pb-24 md:pt-44 md:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs md:text-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 animate-pulse" />
          In-house AI agent • Real-time vision • Scene narration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight"
        >
          See the world, differently.
          <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            Smart glasses that speak your surroundings.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-base md:text-lg text-white/80"
        >
          Our on-device AI recognizes objects, reads signs, and narrates scenes in real time — designed from the ground up for accessibility and privacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#waitlist"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 shadow-[0_0_40px_-8px] shadow-fuchsia-500/60 hover:shadow-fuchsia-500/80 transition-shadow"
          >
            Join the Waitlist
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white/90 border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
          >
            Explore Features
          </a>
        </motion.div>
      </motion.div>

      {/* Moving holographic glow behind the CTA area */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-64 w-[120vw]"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(217,70,239,0.15), rgba(59,130,246,0.08), rgba(6,182,212,0.15), rgba(217,70,239,0.15))',
          maskImage: 'radial-gradient(closest-side, black, transparent)'
        }}
      >
        <motion.div
          style={{ x: glowShift }}
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
