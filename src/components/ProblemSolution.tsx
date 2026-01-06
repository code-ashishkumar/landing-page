'use client';

import { motion } from 'framer-motion';

export default function ProblemSolution() {
  const challenges = [
    {
      emoji: '',
      title: 'Complex Text Barriers',
      description: 'Students struggle with decoding complex text, limiting their access to grade-level content'
    },
    {
      emoji: '',
      title: 'Time Constraints',
      description: 'Teachers lack time to create multiple simplified versions of learning materials'
    },
    {
      emoji: '',
      title: 'Assessment Difficulties',
      description: 'Measuring comprehension in non-verbal or minimally verbal students is challenging'
    }
  ];

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Challenges Side */}
          <div>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-[10px] font-semibold mb-3 uppercase tracking-wider">
                The Challenge
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                We Understand<br />the Challenges
              </h2>
            </div>

            <div className="space-y-3">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:border-primary p-4 rounded-xl transition-colors border border-transparent"
                >
                  <div className="flex gap-4 items-start">
                    {/* <div className="text-3xl flex-shrink-0">
                      {challenge.emoji}
                    </div> */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-0.5 bg-primary" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          0{index + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold mb-1 text-gray-900">
                        {challenge.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-[10px] font-semibold mb-3 uppercase tracking-wider">
                The Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Our Solution
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                Praxis automatically simplifies complex text to each student's comprehension level and uses emoji-based responses to measure understanding—making learning accessible and progress measurable.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Student learning with accessible materials"
                className="w-full h-auto"
              />
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: '📖', text: 'Simplified Text' },
                { icon: '😊', text: 'Emoji Checks' },
                { icon: '📊', text: 'Analytics' }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
                >
                  <span className="text-base">{feature.icon}</span>
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
