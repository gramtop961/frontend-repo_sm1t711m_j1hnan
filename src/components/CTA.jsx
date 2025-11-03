import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-32 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.12),transparent_60%)]" />
        <div className="absolute -inset-16 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                Be first to try LumenSight
              </h3>
              <p className="mt-2 text-white/75 max-w-xl">
                Early access, launch updates, and an invite to our beta program.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-emerald-200"
              >
                Thanks! You’re on the list. We’ll be in touch soon.
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="flex w-full md:w-auto items-center gap-3">
                <div className="relative flex-1 md:w-80">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                    aria-label="Email address"
                    required
                  />
                  <div className="pointer-events-none absolute inset-px rounded-[11px] bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10" />
                </div>
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 shadow-[0_0_40px_-8px] shadow-fuchsia-500/60 hover:shadow-fuchsia-500/80 transition-shadow"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
