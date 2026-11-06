import { useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useAnimationOnScroll<T extends HTMLElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px' } = options;
    const currentRef = ref.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation is triggered, no need to keep observing
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isVisible };
}
