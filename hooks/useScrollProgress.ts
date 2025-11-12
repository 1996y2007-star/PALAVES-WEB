import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ScrollProgressOutput {
  ref: RefObject<HTMLDivElement>;
  scaleX: MotionValue<number>;
}

export function useScrollProgress(): ScrollProgressOutput {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return { ref, scaleX };
}
