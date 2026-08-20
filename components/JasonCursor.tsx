"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const JasonCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial GSAP centering
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    };

    // Track interactive elements for the "PLAY" cursor state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // If hovering over a video slide or trigger
      if (target.closest('.swiper-slide') || target.closest('.play-trigger')) {
        cursor.classList.add('play-mode');
      }

      // If hovering over a press article card
      if (target.closest('.press-card')) {
        cursor.classList.add('article-mode');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      cursor.classList.remove('play-mode');
      cursor.classList.remove('article-mode');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isClient]);

  if (!isClient) return null;

  return <div ref={cursorRef} className="custom-cursor" />;
};
