'use client';
import Image from 'next/image';
import { useRevealEl } from '@/hooks/useReveal';

interface PhotoGridProps {
  images: string[];
  labels: string[];
}

export default function PhotoGrid({ images, labels }: PhotoGridProps) {
  const headerRef = useRevealEl();
  return (
    <div>
      <div
        ref={headerRef}
        className="reveal"
        style={{
          textAlign: 'center',
          padding: 'clamp(50px, 8vh, 90px) clamp(24px, 5vw, 48px) clamp(32px, 5vh, 60px)',
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: '9px',
          letterSpacing: '0.5em', textTransform: 'uppercase',
          color: 'var(--rose)', display: 'block', marginBottom: '16px',
        }}>
          The Archive
        </span>
        <h2 style={{
          fontFamily: 'Cinzel, serif', fontWeight: 300,
          fontSize: 'clamp(24px, 4vw, 50px)',
          letterSpacing: '0.08em', color: 'var(--charcoal)',
        }}>
          Crafted Moments
        </h2>
      </div>

      <div className="collection-grid">
        {images.map((src, i) => (
          <div key={i} className="collection-cell">
            <Image
              src={src}
              alt={labels[i]}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="cell-overlay">
              <span className="cell-label">{labels[i]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
