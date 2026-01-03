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
    <section className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-medium tracking-[0.3em] uppercase mb-6">
            What We Offer
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-none mb-4">
            Three Pillars of Accessible Learning
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to make complex concepts accessible and measurable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 p-8 h-full transition-all duration-500 group-hover:shadow-xl">
                <div className="text-6xl mb-4 drop-shadow-lg">
                  {feature.emoji}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-6 right-6 text-5xl font-bold text-black/5">
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
