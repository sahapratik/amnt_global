'use client';
import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.12) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (targets.length === 0) {
      // The container itself is the target
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) container.classList.add('visible'); },
        { threshold }
      );
      observer.observe(container);
      return () => observer.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold }
    );

    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}

// Standalone single-element reveal
export function useRevealEl(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
