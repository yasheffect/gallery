"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    // Track interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        cursor.classList.add('hovering');
      }
      
      const cursorState = target.getAttribute('data-cursor') || target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      if (cursorState === 'orange') {
        cursor.classList.add('hovering-orange');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      cursor.classList.remove('hovering');
      cursor.classList.remove('hovering-orange');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isClient) return null;

  return <div ref={cursorRef} className="custom-cursor pointer-events-none" />;
};
