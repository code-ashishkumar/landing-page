'use client';

const personas = [
  {
    emoji: '👩‍🏫',
    title: 'Special Ed Teachers',
    description: 'Save hours creating differentiated materials. Get instant simplified versions and track each student\'s progress toward IEP goals.',
  },
  {
    emoji: '🏫',
    title: 'School Administrators',
    description: 'Ensure IEP compliance with measurable learning outcomes. Access district-wide analytics and demonstrate program effectiveness.',
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'Parents & Guardians',
    description: 'Reinforce learning at home with materials at your child\'s level. See real-time progress and celebrate every comprehension milestone.',
  },
];

export default function Personas() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Who We Serve
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-none mb-4">
            Built For Everyone in the Learning Journey
          </h2>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Praxis serves the entire special education ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 p-8 h-full transition-all duration-500 group-hover:shadow-xl">
                <div className="text-6xl mb-4 drop-shadow-lg">
                  {persona.emoji}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  {persona.title}
                </h3>
                
                <p className="text-base text-gray-700 leading-relaxed">
                  {persona.description}
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
