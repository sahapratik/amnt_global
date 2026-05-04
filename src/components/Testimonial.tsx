'use client';
import { useRevealEl } from '@/hooks/useReveal';

export default function Testimonial() {
  const ref = useRevealEl();
  return (
    <section style={{
      background: 'var(--offwhite)',
      padding: 'clamp(60px, 10vh, 110px) clamp(24px, 8vw, 120px)',
      textAlign: 'center',
    }}>
      <div ref={ref} className="reveal">
        <div style={{
          fontFamily: 'Cinzel, serif', fontSize: 'clamp(20px, 3vw, 36px)',
          fontWeight: 300, color: 'rgba(90,10,10,0.12)',
          letterSpacing: '0.05em', marginBottom: '-10px',
          lineHeight: 1,
        }}>
          &#8220;
        </div>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(18px, 3vw, 36px)',
          fontWeight: 300, fontStyle: 'italic',
          letterSpacing: '0.02em', lineHeight: 1.6,
          color: 'var(--charcoal)',
          maxWidth: '820px', margin: '0 auto 32px',
        }}>
          The Nomad Weekender has become part of every journey. It does not just carry my things — it carries the memory of everywhere I&apos;ve taken it.
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '9px',
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: 'var(--rose)',
        }}>
          — A Valued Patron, Dhaka
        </p>
      </div>
    </section>
  );
}
