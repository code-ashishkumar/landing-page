'use client';

export default function Hero() {
  const title = "Every Student Deserves";
  const subtitle = "Accessible Learning";
  
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <div className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-gray-600">
          Praxis Learning Platform
        </div>

        <div className="mb-8">
          <h1 className="text-[11vw] md:text-[6vw] font-extrabold leading-[1] tracking-normal">
            {title}
          </h1>
        </div>

        <h2 className="text-[7vw] md:text-[6vw] font-extrabold leading-[1] mb-10 tracking-tighter bg-clip-text bg-gradient-to-r from-black to-gray-400">
          {subtitle}
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-normal leading-relaxed">
          Simplify complex concepts and give SPED students a voice through emoji-based comprehension checks
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#features" className="px-12 py-5 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all">
            Explore Now
          </a>
          
          <a href="/contact" className="px-12 py-5 border-2 border-gray-300 text-lg font-semibold rounded-full hover:border-black transition-all">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="text-4xl animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
}
