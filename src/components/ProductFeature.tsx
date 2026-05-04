'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useRevealEl } from '@/hooks/useReveal';

interface ProductFeatureProps {
  id: string;
  collection: string;
  name: string[];
  description: string;
  price: string;
  images: string[];
  theme: 'cream' | 'navy' | 'offwhite';
  layout: 'normal' | 'reverse';
}

const themes = {
  cream: {
    bg: 'var(--cream)',
    text: 'var(--charcoal)',
    subtext: '#666',
    collection: 'var(--rose)',
    price: 'var(--oxblood)',
    divider: 'rgba(90,10,10,0.15)',
    btnBg: 'var(--oxblood)',
    btnColor: 'var(--offwhite)',
    btnBorder: 'var(--oxblood)',
    btnBgHover: 'transparent',
    btnColorHover: 'var(--oxblood)',
    secColor: 'var(--charcoal)',
    secBorder: 'var(--charcoal)',
    visualOverlay: 'rgba(90,10,10,0.12)',
    topLine: 'var(--rose)',
  },
  navy: {
    bg: 'var(--navy)',
    text: 'var(--offwhite)',
    subtext: 'rgba(232,228,221,0.7)',
    collection: 'var(--rose)',
    price: 'var(--rose)',
    divider: 'rgba(183,132,132,0.25)',
    btnBg: 'var(--rose)',
    btnColor: 'var(--navy)',
    btnBorder: 'var(--rose)',
    btnBgHover: 'transparent',
    btnColorHover: 'var(--rose)',
    secColor: 'var(--offwhite)',
    secBorder: 'var(--offwhite)',
    visualOverlay: 'rgba(15,26,58,0.18)',
    topLine: 'var(--rose)',
  },
  offwhite: {
    bg: 'var(--offwhite)',
    text: 'var(--charcoal)',
    subtext: '#666',
    collection: 'var(--rose)',
    price: 'var(--oxblood)',
    divider: 'rgba(90,10,10,0.15)',
    btnBg: 'var(--oxblood)',
    btnColor: 'var(--offwhite)',
    btnBorder: 'var(--oxblood)',
    btnBgHover: 'transparent',
    btnColorHover: 'var(--oxblood)',
    secColor: 'var(--charcoal)',
    secBorder: 'var(--charcoal)',
    visualOverlay: 'rgba(183,132,132,0.12)',
    topLine: 'var(--rose)',
  },
};

export default function ProductFeature({
  id, collection, name, description, price, images, theme, layout,
}: ProductFeatureProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [imgFading, setImgFading] = useState(false);
  const t = themes[theme];

  const visualRef = useRevealEl();
  const infoRef = useRevealEl();

  const switchImage = useCallback((idx: number) => {
    if (idx === activeImg) return;
    setImgFading(true);
    setTimeout(() => {
      setActiveImg(idx);
      setImgFading(false);
    }, 320);
  }, [activeImg]);

  const handleAddToCart = () => {
    window.dispatchEvent(new CustomEvent('amnt:addtocart', {
      detail: { message: `${name.join(' ')} — ${price} added to bag` },
    }));
  };

  const visualBlock = (
    <div
      ref={visualRef}
      className={`product-visual ${layout === 'reverse' ? 'reveal-right' : 'reveal-left'}`}
      style={{ background: t.bg, minHeight: 'clamp(320px, 55vw, 800px)' }}
    >
      <Image
        src={images[activeImg]}
        alt={name.join(' ')}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: imgFading ? 0 : 1,
          transition: 'opacity 0.35s ease, transform 1.4s cubic-bezier(0.22,1,0.36,1)',
        }}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={id === 'weekender'}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${t.visualOverlay} 0%, transparent 60%)`,
        pointerEvents: 'none',
      }} />
    </div>
  );

  const infoBlock = (
    <div
      ref={infoRef}
      className={`product-info ${layout === 'reverse' ? 'reveal-left' : 'reveal-right'}`}
      style={{ background: t.bg }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, ${t.topLine} 0%, transparent 100%)`,
        opacity: 0.45,
      }} />

      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '9px',
        letterSpacing: '0.45em', textTransform: 'uppercase',
        color: t.collection, marginBottom: '18px',
      }}>
        {collection}
      </p>

      <h2 style={{
        fontFamily: 'Cinzel, serif', fontWeight: 300,
        fontSize: 'clamp(26px, 3.2vw, 46px)',
        letterSpacing: '0.05em', lineHeight: 1.2,
        color: t.text, marginBottom: '28px',
      }}>
        {name.map((line, i) => (
          <span key={i}>{line}{i < name.length - 1 && <br />}</span>
        ))}
      </h2>

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.9,
        fontWeight: 300, color: t.subtext,
        marginBottom: '40px', maxWidth: '440px',
      }}>
        {description}
      </p>

      {/* Price row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '40px' }}>
        <span style={{
          fontFamily: 'Cinzel, serif', fontSize: 'clamp(20px, 2vw, 28px)',
          fontWeight: 400, letterSpacing: '0.04em', color: t.price,
        }}>
          {price}
        </span>
        <div style={{ flex: 1, height: '1px', background: t.divider }} />
      </div>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <button
          className="btn-primary"
          style={{ background: t.btnBg, color: t.btnColor, borderColor: t.btnBorder }}
          onClick={handleAddToCart}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = t.btnBgHover;
            (e.currentTarget as HTMLButtonElement).style.color = t.btnColorHover;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = t.btnBg;
            (e.currentTarget as HTMLButtonElement).style.color = t.btnColor;
          }}
        >
          Add to Bag
        </button>
        <a
          href={`#${id}`}
          className="btn-secondary"
          style={{ color: t.secColor, borderBottomColor: t.secBorder }}
        >
          View Details
        </a>
      </div>

      {/* Thumbnail strip */}
      <div className="thumb-strip">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${name.join(' ')} view ${i + 1}`}
            width={68}
            height={68}
            className={`thumb${i === activeImg ? ' active' : ''}`}
            style={{ objectFit: 'cover' }}
            onClick={() => switchImage(i)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id={id}
      className={`product-feature${layout === 'reverse' ? ' reverse-layout' : ''}`}
      style={{
        direction: layout === 'reverse' ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ direction: 'ltr' }}>{layout === 'reverse' ? infoBlock : visualBlock}</div>
      <div style={{ direction: 'ltr' }}>{layout === 'reverse' ? visualBlock : infoBlock}</div>
    </section>
  );
}
