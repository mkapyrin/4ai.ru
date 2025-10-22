'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { trackBreathingView } from '@/utils/analytics';

interface BreathingCircleProps {
  className?: string;
}

const BreathingCircle: React.FC<BreathingCircleProps> = ({ className = '' }) => {
  const [hasTracked, setHasTracked] = useState(false);

  // Track visibility after 10 seconds
  useEffect(() => {
    // Check if already tracked in this session
    const sessionKey = 'breathing_animation_tracked';
    if (sessionStorage.getItem(sessionKey)) {
      return;
    }

    // Set 10-second timer for tracking
    const timer = setTimeout(() => {
      if (!hasTracked) {
        trackBreathingView(10);
        setHasTracked(true);
        sessionStorage.setItem(sessionKey, 'true');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasTracked]);

  return (
    <motion.div
      className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${className}`}
      style={{
        background: 'linear-gradient(to right, #c084fc, #ec4899)',
        filter: 'blur(2px)'
      }}
      animate={{
        scale: [1, 1.3, 1],
        filter: ['blur(2px)', 'blur(4px)', 'blur(2px)']
      }}
      transition={{
        duration: 10, // 4s inhale + 6s exhale
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      aria-label="Breathing animation for relaxation"
      role="img"
    />
  );
};

export default BreathingCircle;
