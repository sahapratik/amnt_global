'use client';
import { useEffect, useRef, useCallback } from 'react';

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const rafId = useRef<number>(0);

  const animate = useCallback(() => {
    // Ring follows with lag — but faster than before
    ringX.current += (mouseX.current - ringX.current) * 0.18;
    ringY.current += (mouseY.current - ringY.current) * 0.18;

    if (ringRef.current) {
      ringRef.current.style.left = ringX.current + 'px';
      ringRef.current.style.top = ringY.current + 'px';
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Only run on pointer:fine (mouse) devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const onEnterInteractive = () => {
      dotRef.current?.classList.add('hovered');
      ringRef.current?.classList.add('hovered');
    };
    const onLeaveInteractive = () => {
      dotRef.current?.classList.remove('hovered');
      ringRef.current?.classList.remove('hovered');
    };

    document.addEventListener('mousemove', onMove, { passive: true });

    const addListeners = () => {
      document
        .querySelectorAll('a, button, .thumb, .collection-cell, .image-row-item, .product-visual')
        .forEach((el) => {
          el.addEventListener('mouseenter', onEnterInteractive);
          el.addEventListener('mouseleave', onLeaveInteractive);
        });
    };

    addListeners();
    // Re-attach after any DOM mutations (dynamic content)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, [animate]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
