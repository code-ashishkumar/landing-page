'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const emojis = ['✨', '🚀', '💡', '🎯', '⭐', '🎨', '📚', '🌟'];

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentEmoji, setCurrentEmoji] = useState(0);

  const springConfig = { damping: 15, stiffness: 400 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const changeEmoji = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(changeEmoji);
    };
  }, [x, y]);

  return (
    <>
      {/* Emoji Follower */}
      <motion.div
        className="fixed text-3xl pointer-events-none z-[9998] opacity-70"
        style={{ 
          x, 
          y, 
          translateX: '-50%', 
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {emojis[currentEmoji]}
      </motion.div>
    </>
  );
}
