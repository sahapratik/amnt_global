'use client';
import Image from 'next/image';
import { useRevealEl } from '@/hooks/useReveal';

export default function EditorialIntro({ craftImage }: { craftImage: string }) {
  const leftRef = useRevealEl();
  const rightRef = useRevealEl();

  const stats = [
    { value: '100%', label: 'Full-Grain Leather' },
    { value: 'Hand', label: 'Finished & Stitched' },
    { value: '∞', label: 'Years of Patina' },
  ];

  return (
    <section
      style={{
        padding: 'clamp(60px, 10vh, 120px) clamp(24px, 6vw, 80px)',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <div className="editorial-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
        {/* Left text */}
        <div ref={leftRef} className="reveal-left">
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '9px',
            letterSpacing: '0.45em', textTransform: 'uppercase',
            color: 'var(--rose)', marginBottom: '20px',
          }}>
            About AMNT
          </p>
          <h2 style={{
            fontFamily: 'Cinzel, serif', fontWeight: 300,
            fontSize: 'clamp(30px, 4.5vw, 58px)', lineHeight: 1.15,
            letterSpacing: '0.03em', color: 'var(--charcoal)',
            marginBottom: '28px',
          }}>
            Where Leather<br />Becomes Legacy
          </h2>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(16px, 1.5vw, 20px)',
            lineHeight: 1.9, fontWeight: 300, color: '#666',
            maxWidth: '500px',
          }}>
            AMNT was founded on the belief that a well-made leather piece is not a luxury — it is a decision. Each piece is crafted from the finest full-grain leathers, designed to age with grace and carry the mark of every journey.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 'clamp(24px, 4vw, 56px)', marginTop: '40px', flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'Cinzel, serif', fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 300, color: 'var(--oxblood)', letterSpacing: '0.03em',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '9px',
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: '#999', marginTop: '8px',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
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
            style={{ objectFit: 'cover', transition: 'transform 1.2s ease' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{
            position: 'absolute', inset: '-10px',
            border: '1px solid var(--rose)',
            opacity: 0.25, pointerEvents: 'none',
            zIndex: -1,
          }} />
        </div>
      </div>

      {/* Horizontal rule */}
      <hr style={{
        border: 'none', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--rose), transparent)',
        opacity: 0.3, marginTop: 'clamp(40px, 6vw, 80px)',
      }} />
    </section>
  );
}
