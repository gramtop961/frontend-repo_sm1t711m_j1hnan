import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-black/5 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} AuraVision. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#cta" className="hover:text-gray-900">Get early access</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
