'use client';
import { useEffect, useState } from 'react';

export default function CartToast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setMessage(detail.message || 'Added to cart');
      setVisible(true);
      setTimeout(() => setVisible(false), 3200);
    };
    window.addEventListener('amnt:addtocart', handler);
    return () => window.removeEventListener('amnt:addtocart', handler);
  }, []);

  return (
    <div className={`cart-toast${visible ? ' show' : ''}`}>
      {message}
    </div>
  );
}
