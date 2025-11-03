import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white to-white" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
          Early Access
        </div>
        <h3 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">Be the first to try AuraVision</h3>
        <p className="mt-3 text-gray-700">Join the waitlist and we’ll notify you as we open pilot programs in select cities.</p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full sm:w-80 rounded-full border border-black/10 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
              required
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition-colors">
              Join waitlist
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 text-green-800 px-4 py-3 text-sm">
            Thanks! You’re on the list. We’ll be in touch soon.
          </div>
        )}

        <p className="mt-6 text-xs text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
