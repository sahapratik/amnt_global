'use client';

const footerSections = [
  { heading: 'Collections', links: ['The Bastion','The Foundry','New Arrivals','Archive'] },
  { heading: 'Company',     links: ['Our Story','The Craft','Bespoke Orders','Contact'] },
  { heading: 'Support',     links: ['Care Guide','Sizing','Returns','FAQ'] },
];

const INSTAGRAM = 'https://www.instagram.com/amnt_global/';
const FACEBOOK  = 'https://www.facebook.com/profile.php?id=61576477898387';

function IconInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.2"/>
      <circle cx="17.6" cy="6.4" r=".9" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}

const socialButtons = [
  { label: 'Instagram', href: INSTAGRAM, Icon: IconInstagram },
  { label: 'Facebook',  href: FACEBOOK,  Icon: IconFacebook  },
];

function SocialIcon({ label, href, Icon }: typeof socialButtons[0]) {
  return (
    <a
      href={href}
      target="_blank" rel="noopener noreferrer"
      aria-label={label}
      title={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 40, height: 40,
        border: '1px solid rgba(232,228,221,.15)',
        borderRadius: '50%',
        color: 'rgba(232,228,221,.45)',
        textDecoration: 'none',
        transition: 'color .3s, border-color .3s, background .3s, transform .3s cubic-bezier(.34,1.56,.64,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = 'var(--offwhite)';
        e.currentTarget.style.borderColor = 'var(--rose)';
        e.currentTarget.style.background = 'rgba(183,132,132,.13)';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = 'rgba(232,228,221,.45)';
        e.currentTarget.style.borderColor = 'rgba(232,228,221,.15)';
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      <Icon />
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a
        href="#"
        style={{
          fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 300,
          color: 'rgba(232,228,221,.55)', textDecoration: 'none', letterSpacing: '.04em',
          transition: 'color .3s, letter-spacing .35s',
          display: 'inline-block',
        }}
        onMouseEnter={e => { e.currentTarget.style.color='var(--offwhite)'; e.currentTarget.style.letterSpacing='.08em'; }}
        onMouseLeave={e => { e.currentTarget.style.color='rgba(232,228,221,.55)'; e.currentTarget.style.letterSpacing='.04em'; }}
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer>
      <div style={{ padding: 'clamp(52px,8vh,84px) clamp(22px,6vw,80px) clamp(28px,5vh,48px)' }}>

        {/* Top grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 'clamp(28px,4vw,60px)',
            paddingBottom: 'clamp(36px,6vh,56px)',
            borderBottom: '1px solid rgba(255,255,255,.07)',
            marginBottom: 'clamp(24px,4vh,40px)',
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{
              fontFamily: 'Cinzel,serif',
              fontSize: 'clamp(20px,2.4vw,28px)',
              letterSpacing: '.5em', color: 'var(--offwhite)', fontWeight: 300, marginBottom: 16,
            }}>AMNT</div>
            <p style={{
              fontFamily: 'Cormorant Garamond,serif', fontSize: 16,
              fontStyle: 'italic', color: 'rgba(232,228,221,.45)',
              lineHeight: 1.75, maxWidth: 280,
            }}>
              Leather goods for modern living. Crafted with purpose. Built to last.
            </p>
            {/* Social icon circles */}
            <div style={{ display: 'flex', gap: 12, marginTop: 26 }}>
              {socialButtons.map(s => <SocialIcon key={s.label} {...s} />)}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map(sec => (
            <div key={sec.heading}>
              <p style={{
                fontFamily: 'Inter,sans-serif', fontSize: 9, letterSpacing: '.42em',
                textTransform: 'uppercase', color: 'var(--rose)', marginBottom: 20,
              }}>{sec.heading}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
                {sec.links.map(l => <FooterLink key={l} label={l} />)}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 14,
        }}>
          <p style={{
            fontFamily: 'Inter,sans-serif', fontSize: 10, letterSpacing: '.08em',
            color: 'rgba(232,228,221,.28)',
          }}>
            © {new Date().getFullYear()} AMNT Luxury Leather Goods. All rights reserved.
          </p>

          {/* Bottom bar — icon-only social links */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {socialButtons.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                aria-label={s.label} title={s.label}
                style={{
                  color: 'rgba(232,228,221,.35)',
                  transition: 'color .3s, transform .25s cubic-bezier(.34,1.56,.64,1)',
                  display: 'flex', alignItems: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.color='var(--rose)'; e.currentTarget.style.transform='translateY(-2px) scale(1.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.color='rgba(232,228,221,.35)'; e.currentTarget.style.transform='translateY(0) scale(1)'; }}
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Credit */}
        <div style={{
          marginTop: 'clamp(24px,4vh,40px)',
          paddingTop: 'clamp(18px,3vh,28px)',
          borderTop: '1px solid rgba(255,255,255,.04)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Inter,sans-serif', fontSize: 9, letterSpacing: '.3em',
            textTransform: 'uppercase', color: 'rgba(232,228,221,.2)',
          }}>
            Crafted by{' '}
            <span style={{ color: 'rgba(183,132,132,.5)', letterSpacing: '.3em' }}>Pratik Studios</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
