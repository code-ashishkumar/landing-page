'use client';

const features = [
  {
    emoji: '📖',
    title: 'Accessible Learning',
    description: 'AI-powered paraphrasing automatically simplifies complex concepts to match each student\'s comprehension level - from grade-level text to simple sentences.',
    color: 'from-blue-100 to-blue-50'
  },
  {
    emoji: '😊',
    title: 'Engaging Communication',
    description: 'Emoji-based comprehension checks make learning expressive and fun. Students respond with emojis to show understanding, giving non-verbal learners a powerful voice.',
    color: 'from-yellow-100 to-yellow-50'
  },
  {
    emoji: '📊',
    title: 'Data-Driven Progress',
    description: 'Track comprehension trends over time with detailed analytics. Generate IEP-ready reports that show measurable learning outcomes and goal progress.',
    color: 'from-green-100 to-green-50'
  }
];

export default function Features() {
  return (
    <section className="bg-white py-12 px-9" id="features">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3 text-primary">
            What We Offer
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
            Three Pillars of Accessible Learning
          </h2>
          
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Everything you need to make complex concepts accessible and measurable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-50 shadow-sm p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                {/* <div className="text-4xl mb-3 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.emoji}
                </div> */}
                
                <h3 className="text-lg font-bold mb-2 leading-tight text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-4 right-4 text-4xl font-bold text-primary/5 select-none">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
