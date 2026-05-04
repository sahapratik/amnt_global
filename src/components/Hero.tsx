'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const quadRefs = useRef<(HTMLDivElement | null)[]>([]);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      quadRefs.current.forEach(q => q?.classList.add('visible'));
      setTimeout(() => {
        letterRefs.current.forEach(l => l?.classList.add('visible'));
      }, 350);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      quadRefs.current.forEach((q, i) => {
        if (!q) return;
        const dir = i < 2 ? -1 : 1;
        const speed = 0.06 + i * 0.015;
        q.style.transform = `scale(1) translateY(${sy * speed * dir}px)`;
      });
      letterRefs.current.forEach(l => {
        if (!l) return;
        l.style.transform = `translateY(${-sy * 0.14}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="AMNT Hero">
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          className="hero-quad"
          ref={el => { quadRefs.current[i] = el; }}
        />
      ))}

      {/* AMNT letters across quadrant boundary */}
      <div className="hero-letters" aria-hidden="true">
        {'AMNT'.split('').map((letter, i) => (
          <span
            key={i}
            className="hero-letter"
            ref={el => { letterRefs.current[i] = el; }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline + CTA */}
      <div className="hero-tagline">
        <p>Leather goods for modern living.</p>
        <p>Crafted with purpose. Built to last.</p>
        <p>Timeless by design.</p>
        <a href="#collections" className="hero-cta">Explore Collection</a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
