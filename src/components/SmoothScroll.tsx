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
        multiplier: 0.8, // Reduced for less aggressive scrolling
        lerp: 0.1, // Lower value = smoother/slower scroll interpolation
        class: 'is-reveal',
        smartphone: {
          smooth: true,
          multiplier: 0.6
        },
        tablet: {
          smooth: true,
          multiplier: 0.7
        }
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
