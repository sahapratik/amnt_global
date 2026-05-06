'use client';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader${hidden ? ' hidden' : ''}`}>
      {/* letters spread in the same layout as the hero AMNT */}
      <div className="loader-letters-wrap">
        {'AMNT'.split('').map((letter, i) => (
          <span key={i} className="loader-letter">{letter}</span>
        ))}
      </div>
    </div>
  );
}
