'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show text when scrolled down at least 50px
      if (scrollPosition > 50) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative  overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900 pt-[64px] lg:pt-[96px] ">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(82,114,173,0.05),transparent_40%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/5 blur-3xl rounded-full translate-x-1/4 translate-y-1/4" />
      </div> */}

      <div className="w-full h-full relative z-10 w-full">
        <div className=" w-full items-center bg-white md:bg-transparent">

          {/* Left Column: Content */}
          <div className={`flex flex-col items-start absolute z-10 sm:bg-white lg:bg-transparent p-2 rounded-lg top-[75%] sm:top-[28%] md:top-[11%] left-[5%] sm:left-[6%] md:left-[7%] transform -translate-y-1/2 text-left max-w-[90%] sm:max-w-[85%] md:max-w-xl lg:max-w-2xl transition-all duration-700 ease-out ${isMobile ? (showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') : 'opacity-100 translate-y-0'}`}>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 leading-[1.1]">
              Understanding first.<br />
              Expression follows.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8">
              Unlock accessible learning and empower every voice with AI-powered simplification and emoji-based communication
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="#demo" className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-purpleDark transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 text-center">
                Start Free Trial
              </a>
          
            </div>
          </div>

          <div className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
            <video
              src="/sped.mp4"
              className="object-cover w-full h-full rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
