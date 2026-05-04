'use client';

const footerSections = [
  {
    heading: 'Collections',
    links: ['The Bastion', 'The Foundry', 'New Arrivals', 'Archive'],
  },
  {
    heading: 'Company',
    links: ['Our Story', 'The Craft', 'Bespoke Orders', 'Contact'],
  },
  {
    heading: 'Support',
    links: ['Care Guide', 'Sizing', 'Returns', 'FAQ'],
  },
];

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a
        href="#"
        style={{
          fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300,
          color: 'rgba(232,228,221,0.6)', textDecoration: 'none',
          letterSpacing: '0.04em',
          transition: 'color 0.3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--offwhite)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,228,221,0.6)')}
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)' }}>
      <div style={{ padding: 'clamp(50px, 8vh, 80px) clamp(24px, 6vw, 80px) clamp(32px, 5vh, 48px)' }}>

        {/* Top grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 'clamp(32px, 5vw, 60px)',
            paddingBottom: 'clamp(40px, 6vh, 60px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            marginBottom: 'clamp(28px, 4vh, 44px)',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{
              fontFamily: 'Cinzel, serif', fontSize: 'clamp(20px, 2.5vw, 28px)',
              letterSpacing: '0.5em', color: 'var(--offwhite)',
              fontWeight: 300, marginBottom: '18px',
            }}>
              AMNT
            </div>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '16px',
              fontStyle: 'italic', color: 'rgba(232,228,221,0.5)',
              lineHeight: 1.75, maxWidth: '280px',
            }}>
              Leather goods for modern living. Crafted with purpose. Built to last. Timeless by design.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map(section => (
            <div key={section.heading}>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '9px',
                letterSpacing: '0.42em', textTransform: 'uppercase',
                color: 'var(--rose)', marginBottom: '22px',
              }}>
                {section.heading}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {section.links.map(l => <FooterLink key={l} label={l} />)}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '10px',
            letterSpacing: '0.08em', color: 'rgba(232,228,221,0.3)',
          }}>
            © 2025 AMNT Luxury Leather Goods. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {['Instagram', 'Facebook'].map(s => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '9px',
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: 'rgba(232,228,221,0.4)', textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--rose)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,228,221,0.4)')}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Pratik Studios credit */}
        <div style={{
          marginTop: 'clamp(28px, 4vh, 44px)',
          paddingTop: 'clamp(20px, 3vh, 30px)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '9px',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(232,228,221,0.2)',
          }}>
            Crafted by{' '}
            <span style={{ color: 'rgba(183,132,132,0.55)', letterSpacing: '0.3em' }}>
              Pratik Studios
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}
