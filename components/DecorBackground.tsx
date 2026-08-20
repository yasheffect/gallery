"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';

export const DecorBackground = () => {
  useEffect(() => {
    // A slow continuous scroll animation for the numbers
    gsap.to('.decor-inner', {
      y: '-50%', // Move halfway up
      duration: 30,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const numbers = Array.from({ length: 100 }, (_, i) => i * 10).join('          ');
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20 flex justify-between px-2">
      <div className="w-8 h-[200vh] overflow-hidden">
        <div className="decor-inner text-[10px] font-monumentMono leading-[2rem] text-center w-full break-all whitespace-pre-wrap">
          {numbers} {numbers}
        </div>
      </div>
      <div className="w-8 h-[200vh] overflow-hidden">
        <div className="decor-inner text-[10px] font-monumentMono leading-[2rem] text-center w-full break-all whitespace-pre-wrap">
          {numbers} {numbers}
        </div>
      </div>
    </div>
  );
};
