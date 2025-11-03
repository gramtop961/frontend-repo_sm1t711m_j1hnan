import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold text-lg tracking-tight">AuraVision</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
          <a href="#cta" className="text-gray-700 hover:text-gray-900">Get early access</a>
        </div>
        <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white bg-black hover:bg-gray-900 transition-colors text-sm">
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
