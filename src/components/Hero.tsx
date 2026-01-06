'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Complex text for Frame 1
  const complexText = [
    "In contemporary discourse, the manifestation of uncertainty regarding anticipated outcomes necessitates careful consideration of multiple variables and potential ramifications.",
    "The protagonist experienced significant hesitation and ambivalence when confronted with the necessity of determining an appropriate course of action.",
    "Evaluation of circumstances requires comprehensive analysis of contextual factors and their interrelationships within the broader framework."
  ];

  // Simplified text for Frame 2
  const simplifiedText = [
    "The character felt uncertain about the outcome.",
    "Making a choice was difficult.",
    "Understanding the situation takes time."
  ];

  // Emoji mappings for Frame 3
  const emojiMappings = [
    { text: "The character felt uncertain", emoji: "😕" },
    { text: "about the outcome", emoji: "🎯" }
  ];

  // Response options for Frame 4
  const emojiOptions = ["😊", "😕", "🤔", "😌", "🎯", "💭"];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
      });

      // FRAME 1: Complex Language Exists (0-2s)
      tl.set('.frame-1', { opacity: 1 })
        .set('.complex-text', { opacity: 0, y: 30 })
        .to('.complex-text', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out'
        })
        .to('.microcopy-1', {
          opacity: 0.6,
          duration: 0.5,
          delay: 0.2
        });

      // FRAME 2: Language Adapts (2-4s)
      tl.to(['.complex-text', '.microcopy-1'], {
        opacity: 0,
        y: -30,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.in'
      }, '+=0.6')
        .set('.frame-1', { display: 'none' })
        .set('.frame-2', { display: 'block', opacity: 1 })
        .set('.simplified-text', {
          opacity: 0,
          y: 30,
          lineHeight: '1.3'
        })
        .to('.simplified-text', {
          opacity: 1,
          y: 0,
          lineHeight: '2',
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        })
        .to('.microcopy-2', {
          opacity: 0.6,
          duration: 0.5
        }, '-=0.3');

      // FRAME 3: Meaning Becomes Visible (4-6s)
      tl.to('.microcopy-2', { opacity: 0, duration: 0.4 }, '+=0.6')
        .set('.frame-2', { display: 'none' })
        .set('.frame-3', { display: 'block', opacity: 1 })
        .to('.emoji-symbol', {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.25,
          ease: 'elastic.out(1, 0.6)'
        })
        .to('.microcopy-3', {
          opacity: 0.6,
          duration: 0.5
        }, '-=0.2');

      // FRAME 4: Understanding Is Expressed (6-8s)
      tl.to(['.text-with-emoji', '.microcopy-3'], {
          opacity: 0,
          y: -30,
          duration: 0.6,
          ease: 'power3.in'
        }, '+=0.7')
        .set('.frame-3', { display: 'none' })
        .set('.frame-4', { display: 'flex', opacity: 1 })
        .to('.emoji-option', {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.4)'
        })
        .to('.emoji-selected', {
          scale: 1.15,
          duration: 0.35,
          repeat: 2,
          yoyo: true,
          ease: 'power2.inOut'
        }, '-=0.3')
        .to('.microcopy-4', {
          opacity: 0.6,
          duration: 0.5
        }, '-=0.4');

      // FRAME 5: Insight Without Pressure (8-10s)
      tl.to(['.frame-4', '.microcopy-4'], {
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in'
      }, '+=0.6')
        .set('.frame-4', { display: 'none' })
        .set('.frame-5', { display: 'flex', opacity: 1 })
        .to('.insight-dot', {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'elastic.out(1, 0.5)'
        })
        .to('.insight-arc', {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out'
        }, '-=0.5')
        .to('.microcopy-5', {
          opacity: 0.6,
          duration: 0.5
        }, '-=0.6')
        // Fade out Frame 5 before looping
        .to(['.frame-5', '.insight-dot', '.insight-arc', '.microcopy-5'], {
          opacity: 0,
          duration: 0.6,
          ease: 'power3.in'
        }, '+=1')
        .set('.frame-5', { display: 'none' })
        .set('.frame-1', { display: 'block' });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-gray-900 py-8 lg:py-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(82,114,173,0.05),transparent_40%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/5 blur-3xl rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
           
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
              Understanding first.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expression follows.</span>
            </h1>
            
            {/* <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-6">
              Symbol-first AI literacy for learners who think differently. No pressure, no scores—just pure understanding.
            </p> */}

            <div className="flex flex-row gap-4 w-full sm:w-auto">
              <a href="#demo" className="px-6 py-3 bg-primary text-white text-base font-semibold rounded-full hover:bg-purpleDark transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5">
                See how it works
              </a>
              <a href="#features" className="px-6 py-3 bg-gray-50 text-gray-700 text-base font-semibold rounded-full hover:bg-gray-100 hover:text-primary transition-all">
                Explore features
              </a>
            </div>
          </div>

          {/* Right Column: Animation Stage */}
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-b from-primary/5 to-transparent blur-xl -z-10" />
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden min-h-[350px] md:min-h-[450px] flex items-center justify-center relative p-6 md:p-8">
              
              {/* Animation Container */}
              <div className="animation-container w-full max-w-lg mx-auto">
                {/* FRAME 1: Complex Language */}
                <div className="frame-1 w-full">
                  <div className="space-y-4">
                    {complexText.map((text, idx) => (
                      <p key={idx} className="complex-text text-sm md:text-base leading-relaxed text-gray-600 opacity-0 font-medium bg-gray-50 p-3 rounded-lg">
                        {text}
                      </p>
                    ))}
                  </div>
                  <p className="microcopy-1 text-xs font-bold tracking-widest text-gray-400 mt-6 text-center opacity-0 uppercase">
                    Language is complex
                  </p>
                </div>

                {/* FRAME 2: Language Adapts */}
                <div className="frame-2 w-full hidden">
                  <div className="space-y-2 text-center">
                    {simplifiedText.map((text, idx) => (
                      <p key={idx} className="simplified-text text-xl md:text-2xl text-gray-900 opacity-0 font-medium leading-tight">
                        {text}
                      </p>
                    ))}
                  </div>
                  <p className="microcopy-2 text-xs font-bold tracking-widest text-gray-400 mt-8 text-center opacity-0 uppercase">
                    Content adapts
                  </p>
                </div>

                {/* FRAME 3: Meaning Becomes Visible */}
                <div className="frame-3 w-full hidden">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between gap-4 text-with-emoji group bg-gray-50 p-4 rounded-2xl">
                      <span className="text-lg md:text-xl text-gray-900 font-medium">{emojiMappings[0].text}</span>
                      <span className="emoji-symbol text-4xl md:text-5xl opacity-0 scale-0 origin-center filter drop-shadow-sm">{emojiMappings[0].emoji}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-with-emoji group bg-gray-50 p-4 rounded-2xl">
                      <span className="text-lg md:text-xl text-gray-900 font-medium">{emojiMappings[1].text}</span>
                      <span className="emoji-symbol text-4xl md:text-5xl opacity-0 scale-0 origin-center filter drop-shadow-sm">{emojiMappings[1].emoji}</span>
                    </div>
                  </div>
                  <p className="microcopy-3 text-xs font-bold tracking-widest text-gray-400 mt-8 text-center opacity-0 uppercase">
                    Meaning becomes visible
                  </p>
                </div>

                {/* FRAME 4: Understanding Is Expressed */}
                <div className="frame-4 w-full hidden flex-col items-center">
                  <div className="grid grid-cols-3 gap-4 mt-4 w-full">
                    {emojiOptions.map((emoji, idx) => (
                      <button
                        key={idx}
                        className={`emoji-option ${idx === 0 ? 'emoji-selected ring-2 ring-primary/20 bg-primary/5' : 'bg-white'} text-4xl md:text-5xl p-4 rounded-2xl shadow-sm transition-all opacity-0 scale-0 cursor-default flex items-center justify-center aspect-square`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  <p className="microcopy-4 text-xs font-bold tracking-widest text-gray-400 mt-8 text-center opacity-0 uppercase">
                    Understanding can be expressed
                  </p>
                </div>

                {/* FRAME 5: Insight Without Pressure */}
                <div className="frame-5 w-full hidden flex-col items-center justify-center py-12">
                  <div className="flex justify-center items-center gap-6">
                    <div className="insight-dot w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full opacity-0 scale-0 shadow-lg shadow-primary/30"></div>
                    <div className="insight-dot w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full opacity-0 scale-0 shadow-lg shadow-primary/30"></div>
                    <div className="insight-dot w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full opacity-0 scale-0 shadow-lg shadow-primary/30"></div>
                    <div className="insight-arc w-32 md:w-48 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary/20 rounded-full origin-left scale-x-0 opacity-0 shadow-sm"></div>
                  </div>
                  <p className="microcopy-5 text-xs font-bold tracking-widest text-gray-400 mt-12 text-center opacity-0 uppercase">
                    Insight, without pressure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
