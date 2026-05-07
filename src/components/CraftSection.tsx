'use client';
import { useRevealEl } from '@/hooks/useReveal';

/* ── Premium craft icons ──────────────────────────────────────────── */
function IconSelection() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Leather hide silhouette */}
      <path d="M22 5 C18 5 13 7.5 11 12 C9 16 9.5 21.5 12 26 C14 30 17.5 33 22 34 C26.5 33 30 30 32 26 C34.5 21.5 35 16 33 12 C31 7.5 26 5 22 5Z"/>
      {/* Grain texture marks */}
      <line x1="22" y1="13" x2="22" y2="17"/>
      <line x1="18" y1="18" x2="22" y2="17"/>
      <line x1="26" y1="18" x2="22" y2="17"/>
      <circle cx="22" cy="21" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconCutting() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Craft knife blade */}
      <path d="M12 32 L30 10"/>
      <path d="M30 10 L36 7 L34 13 Z"/>
      {/* Handle */}
      <path d="M12 32 C11 33 9 35 8 36 C9 37 10 37 11 36 L14 33"/>
      {/* Cutting line */}
      <path d="M16 36 L36 16" strokeDasharray="2.5 2.5" strokeOpacity="0.45"/>
    </svg>
  );
}

function IconStitching() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Curved needle body */}
      <path d="M13 33 C10 28 12 21 18 17 L30 10"/>
      {/* Needle eye */}
      <ellipse cx="30.5" cy="10.5" rx="2.5" ry="1.4" transform="rotate(-30 30.5 10.5)"/>
      {/* Sharp tip */}
      <line x1="13" y1="33" x2="11" y2="36"/>
      {/* Saddle-stitch thread dashes */}
      <path d="M20 28 C24 24 28 20 32 16" strokeDasharray="2.8 2.2" strokeOpacity="0.5"/>
      <path d="M17 31 C21 27 25 23 29 19" strokeDasharray="2.8 2.2" strokeOpacity="0.5" strokeDashoffset="2.5"/>
    </svg>
  );
}

function IconFinishing() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      {/* Shield */}
      <path d="M22 7 L34 12 L34 25 C34 31 28.5 36 22 38 C15.5 36 10 31 10 25 L10 12 Z"/>
      {/* Checkmark */}
      <polyline points="16,22 20,27 29,17"/>
    </svg>
  );
}

const steps = [
  { num: '01', title: 'Selection',  Icon: IconSelection,  delay: '0s',    desc: 'We source only the finest full-grain and crazy horse leathers — chosen by hand for texture, density, and the beauty of natural variation.' },
  { num: '02', title: 'Cutting',    Icon: IconCutting,    delay: '0.13s', desc: 'Each panel is hand-cut along the grain to preserve strength and ensure every piece fits precisely within our uncompromising templates.' },
  { num: '03', title: 'Stitching',  Icon: IconStitching,  delay: '0.26s', desc: 'Saddle-stitched by hand using waxed linen thread — a technique unchanged for centuries, offering twice the strength of machine stitching.' },
  { num: '04', title: 'Finishing',  Icon: IconFinishing,  delay: '0.39s', desc: 'Edges are burnished and sealed. Hardware is set by hand. Every piece leaves our studio ready for a decade — and beyond.' },
];

function CraftCard({ num, title, Icon, desc, delay }: typeof steps[0]) {
  const ref = useRevealEl();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: delay }}>
      <div className="craft-card-inner">
        {/* Step number — ghost */}
        <div style={{
          fontFamily: 'Cinzel,serif',
          fontSize: 'clamp(32px,3.5vw,48px)',
          fontWeight: 300,
          color: 'rgba(232,228,221,.08)',
          letterSpacing: '.05em',
          marginBottom: 10,
          lineHeight: 1,
          userSelect: 'none',
        }}>
          {num}
        </div>

        {/* Premium icon */}
        <div className="craft-icon">
          <Icon />
        </div>

        {/* Accent line */}
        <div className="craft-accent-line" />

        {/* Title */}
        <div style={{
          fontFamily: 'Cinzel,serif',
          fontSize: 'clamp(11px,1.1vw,14px)',
          letterSpacing: '.18em',
          color: 'var(--offwhite)',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}>
          {title}
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'Cormorant Garamond,serif',
          fontSize: 'clamp(14px,1.3vw,17px)',
          lineHeight: 1.85,
          color: 'rgba(232,228,221,.6)',
          fontWeight: 300,
        }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function CraftSection() {
  const headerRef = useRevealEl();
  return (
    <section className="craft-section" id="craft">
      <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 'clamp(48px,7vh,80px)' }}>
        <span style={{
          fontFamily: 'Inter,sans-serif', fontSize: 9,
          letterSpacing: '.5em', textTransform: 'uppercase',
          color: 'var(--rose)', display: 'block', marginBottom: 16,
        }}>
          The Process
        </span>
        <h2 style={{
          fontFamily: 'Cinzel,serif', fontWeight: 300,
          fontSize: 'clamp(24px,4vw,50px)',
          letterSpacing: '.08em', color: 'var(--offwhite)',
        }}>
          From Hide to Hand
        </h2>
      </div>

      <div
        className="craft-grid-4"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(16px,3vw,48px)' }}
      >
        {steps.map(s => <CraftCard key={s.num} {...s} />)}
      </div>
    </section>
  );
}
