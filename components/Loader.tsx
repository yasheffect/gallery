"use client";

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Simulate loading progress
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide up and remove loader
          gsap.to('.loader-container', {
            yPercent: -100,
            duration: 1,
            ease: 'expo.inOut',
            onComplete,
          });
        }
      });

      tl.to({ value: 0 }, {
        value: 100,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: function() {
          setProgress(Math.round(this.targets()[0].value));
        }
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 z-[100] bg-charcoal flex items-center justify-center pointer-events-none">
      <div className="text-[15vw] font-display font-bold text-orange tracking-tighter mix-blend-difference">
        {progress}%
      </div>
    </div>
  );
};
