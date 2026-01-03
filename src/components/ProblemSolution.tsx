'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProblemSolution() {
  const challenges = [
    {
      emoji: '😰',
      title: 'Complex Text Barriers',
      description: 'Students struggle with decoding complex text, limiting their access to grade-level content'
    },
    {
      emoji: '⏰',
      title: 'Time Constraints',
      description: 'Teachers lack time to create multiple simplified versions of learning materials'
    },
    {
      emoji: '📊',
      title: 'Assessment Difficulties',
      description: 'Measuring comprehension in non-verbal or minimally verbal students is challenging'
    }
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Challenges Side */}
          <div>
            <div className="mb-10">
              <div className="inline-block px-4 py-1.5 bg-black text-white rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                The Challenge
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                We Understand<br />the Challenges
              </h2>
            </div>

            <div className="space-y-5">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:border-black p-6 rounded-2xl transition-colors"
                >
                  <div className="flex gap-5 items-start">
                    <div className="text-5xl flex-shrink-0">
                      {challenge.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-0.5 bg-black" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          0{index + 1}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900">
                        {challenge.title}
                      </h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                The Solution
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Our Solution
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-3">
                Praxis automatically simplifies complex text to each student&apos;s comprehension level and uses emoji-based responses to measure understanding—making learning accessible and progress measurable.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Student learning with accessible materials"
                className="w-full h-auto"
                width={800}
                height={600}
              />
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '📖', text: 'Simplified Text' },
                { icon: '😊', text: 'Emoji Checks' },
                { icon: '📊', text: 'Analytics' }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  <span className="text-lg">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
