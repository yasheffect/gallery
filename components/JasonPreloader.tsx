"use client";

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const JasonPreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Odometer counter
      gsap.to({ value: 0 }, {
        value: 100,
        duration: 1.5,
        ease: "power4.inOut",
        onUpdate: function() {
          setProgress(Math.round(this.targets()[0].value));
        },
        onComplete: () => {
          // Fade out the entire preloader
          gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete,
          });
        }
      });
      
      // Flashing images
      gsap.fromTo('.flash-img', 
        { opacity: 0, scale: 0.8 }, 
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.1, 
          stagger: 0.1, 
          yoyo: true, 
          repeat: 3 
        }
      );
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-[100] bg-darkBg flex flex-col items-center justify-center pointer-events-none">
      
      {/* Flashing Images Layer */}
      <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-screen">
        <img src="https://images.unsplash.com/photo-1540039155733-d7696d4eb98b" className="flash-img absolute top-10 left-10 w-48 object-cover" alt="" />
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" className="flash-img absolute bottom-20 right-10 w-64 object-cover" alt="" />
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" className="flash-img absolute top-1/4 right-1/4 w-32 object-cover" alt="" />
      </div>

      <div className="relative z-10 text-center">
        <div className="text-sm font-editorial italic tracking-widest opacity-80 mb-8 animate-pulse">
          Intimate, Raw Human Storytelling
        </div>
        
        <div className="text-[12vw] font-monument font-bold leading-none tabular-nums">
          {progress.toString().padStart(2, '0')}
        </div>
        
        <div className="mt-8 flex justify-between text-2xl font-monument w-64 mx-auto uppercase">
          <span>Jaso<span className="has--style-italic normal-case">n</span></span>
          <span><span className="has--style-italic normal-case">B</span>ergh</span>
        </div>
      </div>
    </div>
  );
};
