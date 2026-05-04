'use client';
import { useRevealEl } from '@/hooks/useReveal';

export default function NarrativeQuote() {
  const ref = useRevealEl();
  return (
    <section
      style={{
        background: 'var(--navy)',
        padding: 'clamp(60px, 10vh, 110px) clamp(24px, 6vw, 80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost background text */}
      <div style={{
        fontFamily: 'Cinzel, serif',
        fontSize: 'clamp(60px, 18vw, 200px)',
        fontWeight: 300,
        letterSpacing: '0.2em',
        color: 'rgba(232,228,221,0.04)',
        lineHeight: 1,
        userSelect: 'none',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        whiteSpace: 'nowrap',
      }}>
        AMNT
      </div>

      <div ref={ref} className="reveal" style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(18px, 2.8vw, 34px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--offwhite)',
          lineHeight: 1.7,
          maxWidth: '820px',
          margin: '0 auto',
          letterSpacing: '0.02em',
        }}>
          &ldquo;Every piece tells the story of its owner — the scratches, the wear,
          the patina of a life well-lived.&rdquo;
        </p>
      </div>
    </section>
  );
}
