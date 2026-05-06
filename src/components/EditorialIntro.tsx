'use client';
import Image from 'next/image';
import { useRevealEl } from '@/hooks/useReveal';
import { useEffect, useRef, useState } from 'react';

function useCounter(target: number, duration = 1600, startDelay = 0) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    let raf: number;
    const delay = setTimeout(() => {
      const step = (ts: number) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, startDelay);
    return () => { clearTimeout(delay); cancelAnimationFrame(raf); };
  }, [started, target, duration, startDelay]);

  return { value, ref };
}

function StatItem({ value, label, isNumber, delay }: { value: string; label: string; isNumber: boolean; delay: number }) {
  const { value: count, ref } = useCounter(isNumber ? parseInt(value) : 0, 1400, delay);
  const textRef = useRevealEl();
  return (
    <div ref={isNumber ? ref as React.Ref<HTMLDivElement> : textRef} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div style={{
        fontFamily: 'Cinzel,serif', fontSize: 'clamp(24px,2.5vw,36px)',
        fontWeight: 300, color: 'var(--oxblood)', letterSpacing: '.03em',
        animation: 'counterUp .6s cubic-bezier(.22,1,.36,1) both',
        animationDelay: `${delay}ms`,
      }}>
        {isNumber ? `${count}%` : value}
      </div>
      <div style={{
        fontFamily: 'Inter,sans-serif', fontSize: 9,
        letterSpacing: '.3em', textTransform: 'uppercase',
        color: '#999', marginTop: 8,
      }}>
        {label}
      </div>
    </div>
  );
}

export default function EditorialIntro({ craftImage }: { craftImage: string }) {
  const leftRef  = useRevealEl();
  const rightRef = useRevealEl();

  const stats = [
    { value: '100', label: 'Full-Grain Leather', isNumber: true,  delay: 0   },
    { value: 'Hand', label: 'Finished & Stitched', isNumber: false, delay: 120 },
    { value: '∞',   label: 'Years of Patina',    isNumber: false, delay: 240 },
  ];

  return (
    <section style={{ padding: 'clamp(60px,10vh,120px) clamp(24px,6vw,80px)', maxWidth: 1400, margin: '0 auto' }}>
      <div
        className="editorial-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}
      >
        {/* Left text */}
        <div ref={leftRef} className="reveal-left">
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 9, letterSpacing: '.45em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: 20 }}>
            About AMNT
          </p>
          <h2 style={{
            fontFamily: 'Cinzel,serif', fontWeight: 300,
            fontSize: 'clamp(30px,4.5vw,58px)', lineHeight: 1.15,
            letterSpacing: '.03em', color: 'var(--charcoal)', marginBottom: 28,
          }}>
            Where Leather<br />Becomes Legacy
          </h2>
          <p style={{
            fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(16px,1.5vw,20px)',
            lineHeight: 1.9, fontWeight: 300, color: '#666', maxWidth: 500,
          }}>
            AMNT was founded on the belief that a well-made leather piece is not a luxury — it is a decision. Each piece is crafted from the finest full-grain leathers, designed to age with grace and carry the mark of every journey.
          </p>

          {/* Stats with counter animation */}
          <div style={{ display: 'flex', gap: 'clamp(24px,4vw,56px)', marginTop: 40, flexWrap: 'wrap' }}>
            {stats.map(s => <StatItem key={s.label} {...s} />)}
          </div>
        </div>

        {/* Right image */}
        <div
          ref={rightRef}
          className="reveal-right"
          style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}
        >
          <Image
            src={craftImage}
            alt="AMNT Leather Craft"
            fill
            style={{
              objectFit: 'cover',
              transition: 'transform 1.4s cubic-bezier(.22,1,.36,1)',
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          {/* Animated border */}
          <div style={{
            position: 'absolute', inset: -10,
            border: '1px solid var(--rose)', opacity: .22,
            pointerEvents: 'none', zIndex: -1,
            transition: 'opacity .4s, inset .4s',
          }} />
        </div>
      </div>

      <hr style={{
        border: 'none', height: 1,
        background: 'linear-gradient(90deg, transparent, var(--rose), transparent)',
        opacity: .28, marginTop: 'clamp(40px,6vw,80px)',
      }} />
    </section>
  );
}
