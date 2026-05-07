'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

/* ── Icons ──────────────────────────────────────────────────── */
function IconSearch() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/>
      <line x1="16.5" y1="16.5" x2="22" y2="22"/>
    </svg>
  );
}

function IconBag({ count }: { count: number }) {
  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      {count > 0 && (
        <span style={{
          position: 'absolute', top: '-7px', right: '-8px',
          background: 'var(--oxblood)', color: 'var(--offwhite)',
          borderRadius: '50%', width: 16, height: 16,
          fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Inter, sans-serif', fontWeight: 400,
        }}>
          {count}
        </span>
      )}
    </div>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="0" y1="1"  x2="22" y2="1"/>
      <line x1="4" y1="7.5" x2="22" y2="7.5"/>
      <line x1="0" y1="14" x2="22" y2="14"/>
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="1" y1="1"  x2="17" y2="17"/>
      <line x1="17" y1="1" x2="1"  y2="17"/>
    </svg>
  );
}

/* ── Component ───────────────────────────────────────────────── */
const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Craft',       href: '#craft'       },
  { label: 'Heritage',    href: '#about'       },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [cartCount,  setCartCount]  = useState(0);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = () => setCartCount(c => c + 1);
    window.addEventListener('amnt:addtocart', fn);
    return () => window.removeEventListener('amnt:addtocart', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 100);
  }, [searchOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>

        {/*
         * ─── LEFT ZONE ────────────────────────────────────────────────
         * Desktop  → shows nav-links-desktop, hamburger hidden
         * Mobile   → hamburger visible (⊂ LEFT), nav-links hidden
         */}
        <div className="nav-left">
          {/* Desktop nav links */}
          <div className="nav-links-desktop">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="nav-link"
                onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Hamburger — MOBILE ONLY, lives on the LEFT */}
          <button
            className="hamburger-btn nav-icon-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/*
         * ─── CENTRE: Logo (absolute, never touches flex flow) ─────────
         */}
        <Link href="/" className="nav-logo" aria-label="AMNT Home">
          AMNT
        </Link>

        {/*
         * ─── RIGHT ZONE ───────────────────────────────────────────────
         * Search + Bag on ALL screen sizes — always on the right
         */}
        <div className="nav-right">
          <button className="nav-icon-btn" aria-label="Search"
            onClick={() => setSearchOpen(s => !s)}>
            <IconSearch />
          </button>
          <button
            className="nav-icon-btn" aria-label="Shopping bag"
            onClick={() => {
              if (cartCount > 0)
                alert(`Your bag has ${cartCount} item(s).\n\nFull checkout coming soon.`);
              else
                alert('Your bag is empty.');
            }}
          >
            <IconBag count={cartCount} />
          </button>
        </div>
      </nav>

      {/* ── Search overlay ─────────────────────────────────────────── */}
      {searchOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(26,26,26,0.96)',
            zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={e => { if (e.target === e.currentTarget) setSearchOpen(false); }}
        >
          <div style={{ width: 'min(640px, 90vw)', textAlign: 'center' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 9,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'var(--rose)', marginBottom: 24,
            }}>
              Search Collection
            </p>
            <input
              ref={searchRef} type="text"
              placeholder="Weekender, Messenger, Wallet…"
              style={{
                width: '100%', background: 'transparent', border: 'none',
                borderBottom: '1px solid rgba(232,228,221,0.28)',
                color: 'var(--offwhite)', fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 300, fontStyle: 'italic',
                letterSpacing: '0.04em', padding: '12px 0', outline: 'none',
                textAlign: 'center',
              }}
            />
            <button
              onClick={() => setSearchOpen(false)}
              style={{
                marginTop: 32, background: 'none', border: 'none',
                color: 'rgba(232,228,221,0.42)', fontFamily: 'Inter, sans-serif',
                fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ── Mobile full-screen menu ─────────────────────────────────── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="nav-icon-btn"
          style={{ position: 'absolute', top: 24, right: 24, color: 'var(--offwhite)' }}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <IconClose />
        </button>

        {navLinks.map(l => (
          <a key={l.label} href={l.href} className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>New Arrivals</a>
        <a href="#" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* ── Scoped layout rules ─────────────────────────────────────── */}
      <style>{`
        /* .nav-left */
        .nav-left {
          display: flex;
          align-items: center;
          gap: 44px;
        }
        /* .nav-right */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        /* Desktop (≥769px): show links, hide hamburger */
        @media (min-width: 769px) {
          .nav-links-desktop { display: flex !important; gap: 44px; align-items: center; }
          .hamburger-btn     { display: none  !important; }
        }

        /* Mobile (≤768px): hide links, show hamburger on LEFT */
        @media (max-width: 768px) {
          .nav-links-desktop { display: none  !important; }
          .hamburger-btn     { display: flex  !important; }
          /* nav-left is now just the hamburger; nav-right has search+bag.
             space-between keeps them at opposite ends with logo centred. */
        }
      `}</style>
    </>
  );
}
