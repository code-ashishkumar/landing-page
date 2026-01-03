'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-8">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-9xl mb-12"
          >
            🚀
          </motion.div>

          <h2 className="text-7xl md:text-9xl font-bold leading-none mb-12">
            READY TO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              TRANSFORM
            </span>
          </h2>

          <p className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Join 7,500+ students experiencing the future of accessible education
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.9 }}
              className="px-12 py-5 bg-white text-black text-xl font-bold rounded-full transition-all"
            >
              Start Free Trial
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-12 py-5 border-2 border-white text-xl font-bold rounded-full transition-all"
            >
              Book a Demo
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-8 text-sm text-gray-500"
          >
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ 14-day free trial</span>
            <span>•</span>
            <span>✓ Cancel anytime</span>
          </motion.div>
        </motion.div>

        {/* Floating Emojis */}
        <div className="absolute top-20 left-10">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl opacity-30"
          >
            ✨
          </motion.div>
        </div>
        
        <div className="absolute bottom-20 right-10">
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl opacity-30"
          >
            🎯
          </motion.div>
        </div>
      </div>
    </section>
  );
}
