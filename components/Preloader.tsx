'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentProgress = 0;
    
    // Animate the counter from 0 to 100
    gsap.to({}, {
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: function() {
        currentProgress = Math.round(this.progress() * 100);
        if (counterRef.current) {
          counterRef.current.innerText = currentProgress.toString();
        }
      },
      onComplete: () => {
        // Animate out the preloader
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: onComplete
        });
      }
    });
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#102a28] flex flex-col items-center justify-center text-[#f1e5d1] font-mono selection:bg-transparent"
    >
      <div className="flex items-start">
        <span 
          ref={counterRef} 
          className="text-[15vw] md:text-[10vw] leading-none" 
          style={{ fontFamily: 'EditorialnewItalicRegular, Playfair Display, serif' }}
        >
          0
        </span>
        <span className="text-[3vw] md:text-[2vw] mt-2 ml-1 font-bold">%</span>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] opacity-50 uppercase">
        Loading Assets
      </div>
    </div>
  );
}
