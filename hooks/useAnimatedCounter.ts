import { useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(end: number | string, duration = 2000) {
  const [count, setCount] = useState<number | string>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    
    const numericalEnd = parseFloat(String(end));
    if (isNaN(numericalEnd)) {
      setCount(end);
      return;
    }

    const suffix = String(end).substring(String(numericalEnd).length);
    const decimalPlaces = String(end).includes('.') ? (String(end).split('.')[1] || '').length - suffix.length : 0;
    
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentValue = progress * numericalEnd;
      
      if (decimalPlaces > 0) {
        setCount(currentValue.toFixed(decimalPlaces) + suffix);
      } else {
        setCount(Math.floor(currentValue) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { ref, count };
}