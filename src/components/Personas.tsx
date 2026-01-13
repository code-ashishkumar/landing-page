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
    <section className="py-12 px-9 bg-white" id="who-its-for">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3 text-primary">
            Who We Serve
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
            Built For Everyone in the Learning Journey
          </h2>
          
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Praxis serves the entire special education ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-50 shadow-sm p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                {/* <div className="text-4xl mb-3 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {persona.emoji}
                </div> */}
                
                <h3 className="text-lg font-bold mb-2 leading-tight text-gray-900 group-hover:text-primary transition-colors">
                  {persona.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {persona.description}
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
