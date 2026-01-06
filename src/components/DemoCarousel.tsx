'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DemoCarousel() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.to('.scroll-text', {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: -200,
    });

    gsap.to('.scroll-text-reverse', {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      x: 200,
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-8 bg-primary text-white overflow-hidden">
      <div className="mb-24">
        <div className="scroll-text text-9xl font-bold whitespace-nowrap opacity-10">
          INNOVATION • EDUCATION • TRANSFORMATION • INNOVATION • EDUCATION •
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-24 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-sm font-medium tracking-[0.3em] uppercase mb-6 text-gray-400">
                How It Works
              </div>
              
              <h2 className="text-6xl md:text-7xl font-bold leading-none mb-8">
                SIMPLE<br />
                POWERFUL<br />
                EFFECTIVE
              </h2>
            </motion.div>
          </div>

          <div className="space-y-8">
            {[
              { num: '01', title: 'Upload Content', desc: 'Add any educational material to our platform' },
              { num: '02', title: 'AI Simplification', desc: 'Our AI adapts content to reading levels' },
              { num: '03', title: 'Engage Students', desc: 'Interactive emoji-based assessments' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ x: 10 }}
                className="flex gap-6 items-start group cursor-pointer"
              >
                <div className="text-6xl font-bold text-white/10 group-hover:text-white/30 transition">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <div className="scroll-text-reverse text-9xl font-bold whitespace-nowrap opacity-10">
          • ACCESSIBILITY • ENGAGEMENT • RESULTS • ACCESSIBILITY • ENGAGEMENT
        </div>
      </div>
    </section>
  );
}
