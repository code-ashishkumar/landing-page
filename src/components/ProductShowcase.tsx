'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'AI-Powered Task Creation',
      description: 'Generate comprehension questions automatically from any text with our intelligent AI system',
      image: '/product-1.png',
      alt: 'Praxis AI Task Creation interface showing task generation for Sally and the Mystery of the Missing Socks'
    },
    {
      title: 'Emoji-Based Comprehension',
      description: 'Students demonstrate understanding through interpretive emoji selections, not just recall',
      image: '/product-2.png',
      alt: 'Comprehension question showing emoji sets for understanding how Sally solved the mystery'
    },
    {
      title: 'Interpretive Assessment',
      description: 'Measure conceptual understanding with non-verbal evidence that\'s quantifiable and defensible',
      image: '/product-3.png',
      alt: 'Multiple comprehension questions with emoji-based answer choices'
    },
    {
      title: 'Observable Learning',
      description: 'Track student progress longitudinally with clear, measurable evidence of growth',
      image: '/product-4.png',
      alt: 'Question about Sally feeling happy with emoji response options'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            The Praxis Platform
          </h2>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-12"
              >
                {/* Text Content */}
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                    fill
                    className="object-contain p-4"
                    priority={currentSlide === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-primary'
                    : 'w-3 h-3 border border-gray-200 hover:bg-gray-400'
                } rounded-full `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
