import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 rounded-xl border border-white/10 shadow-lg"
      >
        <a href="#" className="relative inline-flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-500 ring-2 ring-white/20 shadow-[0_0_40px_-10px] shadow-fuchsia-500/60" />
          <span className="text-white font-semibold tracking-tight text-lg">LumenSight</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#tech" className="hover:text-white transition-colors">Technology</a>
          <a href="#access" className="hover:text-white transition-colors">Accessibility</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 shadow-[0_0_40px_-8px] shadow-fuchsia-500/50 hover:shadow-fuchsia-500/80 transition-shadow"
          >
            Join the Waitlist
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
