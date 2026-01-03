'use client';

import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any = null;

    const initScroll = async () => {
      if (scrollRef.current) {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.8,
        lerp: 0.1,
        class: 'is-reveal'
      });

        // Update scroll after a short delay to ensure proper initialization
        setTimeout(() => {
          scroll?.update();
        }, 100);

        // Update scroll on window resize
        const handleResize = () => {
          scroll?.update();
        };
        window.addEventListener('resize', handleResize);
      }
    };

    initScroll();

    return () => {
      scroll?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
