'use client';

import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            Our Mission
          </p>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            To end the quiet failure of brilliant minds by making understanding{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              visible, measurable, and undeniable
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Praxis makes comprehension observable through adaptive simplification and non-verbal evidence, 
            giving educators and learners clear proof of growth where traditional systems see none.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
