'use client';

import { motion } from 'framer-motion';

export default function OriginStory() {
  return (
    <section className="relative py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              Where It Started
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              A Question That Changed Everything
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              As most great things do, Praxis started with a question:
            </p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-4 md:p-6 rounded-r-lg my-6"
            >
              <p className="text-lg md:text-xl font-semibold text-gray-900 italic leading-relaxed">
                How do you measure reading comprehension and understanding in students who cannot 
                reliably express it through text or speech and do so in a way that is defensible for IEPs?
              </p>
            </motion.div>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-primary">Praxis is the first platform</span> to treat visual 
              symbols as a valid assessment language for reading comprehension, not just a communication aid.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
