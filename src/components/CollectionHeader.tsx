'use client';
import { useRevealEl } from '@/hooks/useReveal';

export default function CollectionHeader() {
  const ref = useRevealEl();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        textAlign: 'center',
        padding: 'clamp(60px, 9vh, 100px) clamp(24px, 5vw, 48px) clamp(40px, 6vh, 70px)',
      }}
    >
      <span style={{
        fontFamily: 'Inter, sans-serif', fontSize: '9px',
        letterSpacing: '0.5em', textTransform: 'uppercase',
        color: 'var(--rose)', display: 'block', marginBottom: '18px',
      }}>
        The Artifacts
      </span>
      <h2 style={{
        fontFamily: 'Cinzel, serif', fontWeight: 300,
        fontSize: 'clamp(26px, 4vw, 52px)',
        letterSpacing: '0.08em', color: 'var(--charcoal)',
      }}>
        Our Collections
      </h2>
    </div>
  );
}
