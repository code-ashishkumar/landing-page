'use client';

import { motion } from 'framer-motion';

export default function ThreeScene() {
  const floatingEmojis = [
    { emoji: '📖', delay: 0, x: '15%', y: '15%' },
    { emoji: '✏️', delay: 0.2, x: '65%', y: '25%' },
    { emoji: '🎓', delay: 0.4, x: '45%', y: '50%' },
    { emoji: '📚', delay: 0.6, x: '75%', y: '65%' },
    { emoji: '💡', delay: 0.8, x: '25%', y: '75%' },
    { emoji: '🌟', delay: 1, x: '55%', y: '85%' },
  ];

  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Floating Emojis Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0">
        {floatingEmojis.map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.4, 
              scale: 1,
              y: [0, -15, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              opacity: { delay: item.delay, duration: 0.5 },
              scale: { delay: item.delay, duration: 0.5 },
              y: { repeat: Infinity, duration: 3, delay: item.delay },
              rotate: { repeat: Infinity, duration: 4, delay: item.delay }
            }}
          >
            <div className="text-9xl drop-shadow-lg">{item.emoji}</div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-8xl font-bold mb-8 leading-none">
              LEARN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400">
                DIFFERENT
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform reading comprehension with simplified texts and emoji-based assessments designed for special education.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-black text-white rounded-full font-semibold text-lg flex items-center gap-3"
            >
              Discover More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>

            {/* Emoji Feature Cards */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { emoji: '📖', label: 'Simplified Reading', desc: 'Easy comprehension' },
                { emoji: '😊', label: 'Emoji Checks', desc: 'Fun assessments' },
                { emoji: '📊', label: 'Track Progress', desc: 'Real-time insights' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.08 }}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="text-6xl mb-3">{item.emoji}</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
