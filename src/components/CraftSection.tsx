'use client';
import { useRevealEl } from '@/hooks/useReveal';

const steps = [
  { num: '01', title: 'Selection',  desc: 'We source only the finest full-grain and crazy horse leathers — chosen by hand for texture, density, and the beauty of natural variation.' },
  { num: '02', title: 'Cutting',    desc: 'Each panel is hand-cut along the grain to preserve strength and ensure every piece fits precisely within our uncompromising templates.' },
  { num: '03', title: 'Stitching',  desc: 'Saddle-stitched by hand using waxed linen thread — a technique unchanged for centuries, offering twice the strength of machine stitching.' },
  { num: '04', title: 'Finishing',  desc: 'Edges are burnished and sealed. Hardware is set by hand. Every piece leaves our studio ready for a decade — and beyond.' },
];

function CraftCard({ num, title, desc, delay }: typeof steps[0] & { delay: string }) {
  const ref = useRevealEl();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: delay }}>
      <div className="craft-card-inner">
        <div style={{
          fontFamily: 'Cinzel,serif', fontSize: 'clamp(36px,4vw,52px)',
          fontWeight: 300, color: 'rgba(232,228,221,.1)',
          letterSpacing: '.05em', marginBottom: 14,
          transition: 'color .4s ease',
        }}>{num}</div>
        <div style={{
          width: 36, height: 1,
          background: 'var(--rose)', opacity: .6,
          marginBottom: 14,
          transition: 'width .45s cubic-bezier(.22,1,.36,1)',
        }} />
        <div style={{
          fontFamily: 'Cinzel,serif', fontSize: 'clamp(11px,1.1vw,14px)',
          letterSpacing: '.16em', color: 'var(--offwhite)',
          textTransform: 'uppercase', marginBottom: 14,
        }}>{title}</div>
        <p style={{
          fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(14px,1.3vw,17px)',
          lineHeight: 1.85, color: 'rgba(232,228,221,.6)', fontWeight: 300,
        }}>{desc}</p>
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
        }}>The Process</span>
        <h2 style={{
          fontFamily: 'Cinzel,serif', fontWeight: 300,
          fontSize: 'clamp(24px,4vw,50px)',
          letterSpacing: '.08em', color: 'var(--offwhite)',
        }}>From Hide to Hand</h2>
      </div>
      <div
        className="craft-grid-4"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(16px,3vw,48px)' }}
      >
        {steps.map((s, i) => <CraftCard key={s.num} {...s} delay={`${i * 0.13}s`} />)}
      </div>
    </section>
  );
}
