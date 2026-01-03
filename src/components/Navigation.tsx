'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <motion.a 
          href="/"
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold tracking-tight"
        >
          Praxis
        </motion.a>
        
        <div className="hidden md:flex gap-12 items-center">
          <motion.a
            href="/#features"
            whileHover={{ y: -2 }}
            className="text-sm font-medium tracking-wider uppercase hover:opacity-60 transition"
          >
            Features
          </motion.a>
          <motion.a
            href="/#who-its-for"
            whileHover={{ y: -2 }}
            className="text-sm font-medium tracking-wider uppercase hover:opacity-60 transition"
          >
            Who It's For
          </motion.a>
          <motion.a
            href="/#pricing"
            whileHover={{ y: -2 }}
            className="text-sm font-medium tracking-wider uppercase hover:opacity-60 transition"
          >
            Pricing
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ y: -2 }}
            className="text-sm font-medium tracking-wider uppercase hover:opacity-60 transition"
          >
            Contact
          </motion.a>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 rounded-full bg-black text-white font-semibold text-sm tracking-wide"
        >
          Start Free Trial
        </motion.button>
      </div>
    </motion.nav>
  );
}
