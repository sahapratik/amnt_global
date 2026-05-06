'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

function IconSearch() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
    </svg>
  );
}

function IconBag({ count }: { count: number }) {
  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      {count > 0 && (
        <span style={{
          position: 'absolute', top: '-7px', right: '-8px',
          background: 'var(--oxblood)', color: 'var(--offwhite)',
          borderRadius: '50%', width: '16px', height: '16px',
          fontSize: '9px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontFamily: 'Inter, sans-serif', fontWeight: 400,
        }}>
          {count}
        </span>
      )}
    </div>
  );
}

function IconMenu() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="0" y1="1"  x2="20" y2="1"  />
      <line x1="4" y1="7"  x2="20" y2="7"  />
      <line x1="0" y1="13" x2="20" y2="13" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="1" y1="1"  x2="17" y2="17" />
      <line x1="17" y1="1" x2="1"  y2="17" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [cartCount,   setCartCount]   = useState(0);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = () => setCartCount(c => c + 1);
    window.addEventListener('amnt:addtocart', handler);
    return () => window.removeEventListener('amnt:addtocart', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 100);
  }, [searchOpen]);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Craft',       href: '#craft'       },
    { label: 'Heritage',    href: '#about'       },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Desktop nav links — left (hidden on mobile via CSS) */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '44px', alignItems: 'center' }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="nav-link"
              style={{ display: 'block' }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Center logo — absolutely positioned so it never disrupts flex flow */}
        <Link href="/" className="nav-logo">AMNT</Link>

        {/* Right icons — on mobile these become the only flex item,
            so navbar justify-content:flex-end keeps them on the right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button className="nav-icon-btn" aria-label="Search" onClick={() => setSearchOpen(s => !s)}>
            <IconSearch />
          </button>
          <button
            className="nav-icon-btn" aria-label="Bag"
            onClick={() => {
              if (cartCount > 0) alert(`Your bag has ${cartCount} item(s).\n\nFull checkout coming soon.`);
              else alert('Your bag is empty.');
            }}
          >
            <IconBag count={cartCount} />
          </button>
          {/* Hamburger — mobile only */}
          <button className="nav-icon-btn hamburger-btn" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(26,26,26,0.96)',
          zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
          onClick={e => { if (e.target === e.currentTarget) setSearchOpen(false); }}
        >
          <div style={{ width: 'min(640px, 90vw)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '24px' }}>
              Search Collection
            </p>
            <input
              ref={searchRef} type="text"
              placeholder="Weekender, Messenger, Wallet…"
              style={{
                width: '100%', background: 'transparent', border: 'none',
                borderBottom: '1px solid rgba(232,228,221,0.3)',
                color: 'var(--offwhite)', fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 300, fontStyle: 'italic',
                letterSpacing: '0.04em', padding: '12px 0', outline: 'none',
                textAlign: 'center', cursor: 'text',
              }}
            />
            <button onClick={() => setSearchOpen(false)} style={{
              marginTop: '32px', background: 'none', border: 'none',
              color: 'rgba(232,228,221,0.45)', fontFamily: 'Inter, sans-serif',
              fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', cursor: 'pointer',
            }}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="nav-icon-btn"
          style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--offwhite)' }}
          onClick={() => setMenuOpen(false)}
        >
          <IconClose />
        </button>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>New Arrivals</a>
        <a href="#" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          /* Hide desktop links */
          .nav-links-desktop { display: none !important; }
          /* With desktop links gone there is only 1 flex child (icons).
             justify-content:flex-end (set in globals.css) keeps them on the right. */
        }
      `}</style>
    </>
  );
}
