'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const features = [
    {
      icon: '🎯',
      title: 'Emojis as semantic representations',
      description: 'Not decoration',
    },
    {
      icon: '💡',
      title: 'Responses are interpretive',
      description: 'Not recall-based',
    },
    {
      icon: '🧠',
      title: 'Measures conceptual understanding',
      description: 'Not decoding ability',
    },
    {
      icon: '📊',
      title: 'Results are quantified',
      description: 'And tracked longitudinally',
    },
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
            The Praxis Difference
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
            But how?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-secondary p-6 md:p-8 rounded-2xl text-center text-white"
        >
          <p className="text-xl md:text-2xl font-bold mb-3">
            This turns symbols into an assessment medium, not just a communication aid.
          </p>
          <p className="text-lg md:text-xl font-semibold opacity-90">
            That is new.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
