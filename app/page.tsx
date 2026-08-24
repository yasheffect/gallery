'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/dist/Observer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(Observer);
}

import Link from 'next/link';
import { Volume2, VolumeX } from 'lucide-react';
import { projectsData as allSlidesData } from './data/projects';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Preloader from '../components/Preloader';

function HomeContent({ filter }: { filter: string }) {
  // Filter projects based on query param
  const slidesData = React.useMemo(() => {
    if (filter === 'visual-design') return allSlidesData.filter(p => [5, 6, 7, 8].includes(p.id));
    if (filter === 'art-direction') return allSlidesData.filter(p => [1, 4].includes(p.id));
    if (filter === 'ui-ux-motion') return allSlidesData.filter(p => [2, 3, 9].includes(p.id));
    return allSlidesData;
  }, [filter]);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const animating = useRef(false);
  const filmStripLeftRef = useRef<HTMLDivElement>(null);
  const filmStripRightRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const viewButtonRef = useRef<HTMLDivElement>(null);

  // Use refs for GSAP quick setters to avoid re-renders
  const xSetter = useRef<gsap.QuickToFunc>();
  const ySetter = useRef<gsap.QuickToFunc>();

  const [activeSlide, setActiveSlide] = useState(slidesData[0]);
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Sync muted state across all videos manually for reliability
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
      v.muted = isGlobalMuted;
    });
  }, [isGlobalMuted]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const images = gsap.utils.toArray('.slide-img-layer') as HTMLElement[];
      const topImages = gsap.utils.toArray('.top-slide-img-layer') as HTMLElement[];
      const bottomImages = gsap.utils.toArray('.bottom-slide-img-layer') as HTMLElement[];
      
      const textsLeft = gsap.utils.toArray('.title-left-text') as HTMLElement[];
      const textsRight = gsap.utils.toArray('.title-right-text') as HTMLElement[];
      
      const transitionSlide = (nextIndex: number, direction: 1 | -1) => {
        if (animating.current) return;
        animating.current = true;
        
        const getIndex = (idx: number) => (idx + slidesData.length) % slidesData.length;
        
        const currentImg = images[currentIndex.current];
        const nextImg = images[nextIndex];
        
        const currentTopImg = topImages[getIndex(currentIndex.current - 1)];
        const nextTopImg = topImages[getIndex(nextIndex - 1)];
        
        const currentBottomImg = bottomImages[getIndex(currentIndex.current + 1)];
        const nextBottomImg = bottomImages[getIndex(nextIndex + 1)];
        
        const currentTitleLeft = textsLeft[currentIndex.current];
        const nextTitleLeft = textsLeft[nextIndex];
        
        const currentTitleRight = textsRight[currentIndex.current];
        const nextTitleRight = textsRight[nextIndex];

        const tl = gsap.timeline({
          onComplete: () => {
            // Cleanup all inactive layers to prevent overlapping stacks
            images.forEach((img, i) => {
              if (i !== nextIndex) gsap.set(img, { clipPath: 'inset(100% 0% 0% 0%)', zIndex: 0 });
            });
            topImages.forEach((img, i) => {
              if (i !== getIndex(nextIndex - 1)) gsap.set(img, { clipPath: 'inset(100% 0% 0% 0%)', zIndex: 0 });
            });
            bottomImages.forEach((img, i) => {
              if (i !== getIndex(nextIndex + 1)) gsap.set(img, { clipPath: 'inset(100% 0% 0% 0%)', zIndex: 0 });
            });
            
            // Manage video play states
            images.forEach((img, i) => {
              const video = img.querySelector('video');
              if (video) {
                if (i === nextIndex) {
                  video.play().catch(() => {});
                } else {
                  video.pause();
                }
              }
            });
            
            setActiveSlide(slidesData[nextIndex]);
            currentIndex.current = nextIndex;
            animating.current = false;
          }
        });
        
        // Setup wrapper layers
        gsap.set(nextImg, { clipPath: direction === 1 ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', zIndex: 2 });
        gsap.set(currentImg, { zIndex: 1, clipPath: 'inset(0% 0% 0% 0%)' });
        
        if (nextTopImg) gsap.set(nextTopImg, { clipPath: direction === 1 ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', zIndex: 2 });
        if (currentTopImg) gsap.set(currentTopImg, { zIndex: 1, clipPath: 'inset(0% 0% 0% 0%)' });
        
        if (nextBottomImg) gsap.set(nextBottomImg, { clipPath: direction === 1 ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', zIndex: 2 });
        if (currentBottomImg) gsap.set(currentBottomImg, { zIndex: 1, clipPath: 'inset(0% 0% 0% 0%)' });
        
        // Text animation setup
        gsap.set(nextTitleLeft, { y: direction === 1 ? 40 : -40, opacity: 0, zIndex: 2, display: 'block' });
        gsap.set(nextTitleRight, { y: direction === 1 ? 40 : -40, opacity: 0, zIndex: 2, display: 'block' });

        // Center card transition
        tl.to(nextImg, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.inOut' }, 0);
        tl.to(currentImg.querySelector('img, video'), { yPercent: direction === 1 ? -20 : 20, scale: 1.1, duration: 1.2, ease: 'power4.inOut' }, 0);
        tl.to(nextImg.querySelector('img, video'), { yPercent: 0, scale: 1, startAt: { yPercent: direction === 1 ? 20 : -20, scale: 1.1 }, duration: 1.2, ease: 'power4.inOut' }, 0);
        
        // Top card transition
        if (nextTopImg) {
          tl.to(nextTopImg, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.inOut' }, 0);
          tl.to(nextTopImg.querySelector('img, video'), { yPercent: 0, scale: 1, startAt: { yPercent: direction === 1 ? 20 : -20, scale: 1.1 }, duration: 1.2, ease: 'power4.inOut' }, 0);
        }
        if (currentTopImg) tl.to(currentTopImg.querySelector('img, video'), { yPercent: direction === 1 ? -20 : 20, scale: 1.1, duration: 1.2, ease: 'power4.inOut' }, 0);
        
        // Bottom card transition
        if (nextBottomImg) {
          tl.to(nextBottomImg, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power4.inOut' }, 0);
          tl.to(nextBottomImg.querySelector('img, video'), { yPercent: 0, scale: 1, startAt: { yPercent: direction === 1 ? 20 : -20, scale: 1.1 }, duration: 1.2, ease: 'power4.inOut' }, 0);
        }
        if (currentBottomImg) tl.to(currentBottomImg.querySelector('img, video'), { yPercent: direction === 1 ? -20 : 20, scale: 1.1, duration: 1.2, ease: 'power4.inOut' }, 0);
        
        // Text out
        tl.to([currentTitleLeft, currentTitleRight], {
          y: direction === 1 ? -40 : 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.inOut'
        }, 0);

        // Text in
        tl.to([nextTitleLeft, nextTitleRight], {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.inOut'
        }, 0);
        
        // Film strip parallax effect
        const yOffsetLeft = direction === 1 ? '-=100' : '+=100';
        const yOffsetRight = direction === 1 ? '+=100' : '-=100';
        
        tl.to(filmStripLeftRef.current, { y: yOffsetLeft, duration: 1.2, ease: 'power4.inOut' }, 0);
        tl.to(filmStripRightRef.current, { y: yOffsetRight, duration: 1.2, ease: 'power4.inOut' }, 0);

      };

      // Set up mouse follower for View button
      if (viewButtonRef.current && cardRef.current) {
        xSetter.current = gsap.quickTo(viewButtonRef.current, "x", { duration: 0.6, ease: "power3.out" });
        ySetter.current = gsap.quickTo(viewButtonRef.current, "y", { duration: 0.6, ease: "power3.out" });
        
        // Initial center position
        const rect = cardRef.current.getBoundingClientRect();
        xSetter.current(rect.width / 2 - 60); // approx half width
        ySetter.current(rect.height / 2 - 20); // approx half height
      }

      // Play initial video if present
      const initialImg = images[currentIndex.current];
      if (initialImg) {
        const video = initialImg.querySelector('video');
        if (video) video.play().catch(() => {});
      }

      Observer.create({
        target: window,
        type: 'wheel,touch,pointer',
        onDown: () => {
          if (!animating.current) {
            transitionSlide((currentIndex.current + 1) % slidesData.length, 1);
          }
        },
        onUp: () => {
          if (!animating.current) {
            transitionSlide((currentIndex.current - 1 + slidesData.length) % slidesData.length, -1);
          }
        },
        tolerance: 10,
        preventDefault: true
      });
      
      // Initialization
      gsap.set(textsLeft.slice(1), { opacity: 0, display: 'none' });
      gsap.set(textsRight.slice(1), { opacity: 0, display: 'none' });
      gsap.set(images.slice(1), { clipPath: 'inset(100% 0% 0% 0%)' });
      
      gsap.set(topImages, { clipPath: 'inset(100% 0% 0% 0%)' });
      if (topImages[0 - 1]) gsap.set(topImages[0 - 1], { clipPath: 'inset(0% 0% 0% 0%)' }); // -1 is undefined, so it starts empty
      
      gsap.set(bottomImages, { clipPath: 'inset(100% 0% 0% 0%)' });
      if (bottomImages[0 + 1]) gsap.set(bottomImages[0 + 1], { clipPath: 'inset(0% 0% 0% 0%)' }); // slide 1

    }, containerRef);

    // Initial resize handler to recenter the button if needed
    const handleResize = () => {
      if (cardRef.current && viewButtonRef.current && xSetter.current && ySetter.current) {
        const rect = cardRef.current.getBoundingClientRect();
        xSetter.current(rect.width / 2 - viewButtonRef.current.offsetWidth / 2);
        ySetter.current(rect.height / 2 - viewButtonRef.current.offsetHeight / 2);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !viewButtonRef.current || !xSetter.current || !ySetter.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - (viewButtonRef.current.offsetWidth / 2);
    const y = e.clientY - rect.top - (viewButtonRef.current.offsetHeight / 2);
    xSetter.current(x);
    ySetter.current(y);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !viewButtonRef.current || !xSetter.current || !ySetter.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    xSetter.current(rect.width / 2 - viewButtonRef.current.offsetWidth / 2);
    ySetter.current(rect.height / 2 - viewButtonRef.current.offsetHeight / 2);
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen bg-[#1b1b1a] text-[#f1e5d1] relative overflow-hidden font-sans selection:bg-[#f1e5d1] selection:text-[#1b1b1a] touch-none"
    >
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}
      
      {/* Dynamic Background Glow - 4 Corners */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000 ease-in-out opacity-10"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, ${activeSlide.accentColor || 'rgba(255,255,255,0.02)'} 0%, transparent 40%),
            radial-gradient(circle at 100% 0%, ${activeSlide.accentColor || 'rgba(255,255,255,0.02)'} 0%, transparent 40%),
            radial-gradient(circle at 0% 100%, ${activeSlide.accentColor || 'rgba(255,255,255,0.02)'} 0%, transparent 40%),
            radial-gradient(circle at 100% 100%, ${activeSlide.accentColor || 'rgba(255,255,255,0.02)'} 0%, transparent 40%)
          `
        }}
      >
        <div className="absolute -inset-[20%] ambient-glow-layer opacity-100 mix-blend-screen" style={{
           background: `
             radial-gradient(circle at 10% 10%, ${activeSlide.accentColor || 'transparent'} 0%, transparent 30%),
             radial-gradient(circle at 90% 90%, ${activeSlide.accentColor || 'transparent'} 0%, transparent 30%)
           `
        }}></div>
      </div>

      {/* FILM STRIP WRAPPER WITH MASK TO PREVENT OVERLAP */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
      >
        {/* FILM STRIP LEFT */}
        <div className="absolute left-4 md:left-8 top-0 h-[200vh] -top-[50vh] flex items-center text-[10px] md:text-xs font-mono text-[#f1e5d1] opacity-30" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <div ref={filmStripLeftRef} className="tracking-[0.3em] whitespace-nowrap">
            • CMYK 88.30.60.80 • HEX #102A28 • GRID 12-COL • BASELINE • X-HEIGHT • KERNING • LEADING • TYPOGRAPHY • VECTOR • BEZIER • OPACITY 50% • ALIGNMENT • WHITE SPACE • GOLDEN RATIO • MARGIN 24PX • CMYK 88.30.60.80 • HEX #102A28 • GRID 12-COL • BASELINE • X-HEIGHT • KERNING • LEADING • TYPOGRAPHY • VECTOR • BEZIER • OPACITY 50% • ALIGNMENT • WHITE SPACE • GOLDEN RATIO • MARGIN 24PX • CMYK 88.30.60.80 • HEX #102A28 • GRID 12-COL • BASELINE • X-HEIGHT • KERNING • LEADING • TYPOGRAPHY • VECTOR • BEZIER • OPACITY 50% • ALIGNMENT • WHITE SPACE • GOLDEN RATIO • MARGIN 24PX •
          </div>
        </div>
        
        {/* FILM STRIP RIGHT */}
        <div className="absolute right-4 md:right-8 top-0 h-[200vh] -top-[50vh] flex items-center text-[10px] md:text-xs font-mono text-[#f1e5d1] opacity-30" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <div ref={filmStripRightRef} className="tracking-[0.3em] whitespace-nowrap">
            • BLEED 0.125&quot; • CROP MARKS • SAFE AREA • REGISTRATION • 1440PX WIDTH • RESPONSIVE • MOBILE FIRST • ASPECT RATIO 16:9 • CONTRAST RATIO 4.5:1 • FONT-WEIGHT 600 • TRACKING 0.2EM • BLEED 0.125&quot; • CROP MARKS • SAFE AREA • REGISTRATION • 1440PX WIDTH • RESPONSIVE • MOBILE FIRST • ASPECT RATIO 16:9 • CONTRAST RATIO 4.5:1 • FONT-WEIGHT 600 • TRACKING 0.2EM • BLEED 0.125&quot; • CROP MARKS • SAFE AREA • REGISTRATION • 1440PX WIDTH • RESPONSIVE • MOBILE FIRST • ASPECT RATIO 16:9 • CONTRAST RATIO 4.5:1 • FONT-WEIGHT 600 • TRACKING 0.2EM •
          </div>
        </div>
      </div>

      {/* BACKGROUND TYPOGRAPHY CONTAINER - FIXED CENTER */}
      <div className="absolute w-full h-[45vh] md:h-auto px-[5%] md:px-[6%] top-1/2 -translate-y-1/2 flex flex-col md:flex-row justify-between items-center z-0 pointer-events-none gap-2 md:gap-0">
        <div className="relative w-full md:w-[24vw] h-auto md:h-[20vw] flex items-center justify-center md:justify-start">
          {slidesData.map((slide, i) => (
            <div key={`left-${slide.id}`} className="absolute left-0 md:left-auto w-full title-left-text" style={{ display: i === 0 ? 'block' : 'none' }}>
              <div>
                <h2 className="text-[10vw] md:text-[4vw] font-normal leading-[1] text-[#f1e5d1] whitespace-pre-wrap tracking-tight break-words text-center md:text-left" style={{ fontFamily: 'EditorialnewItalicRegular, Playfair Display, serif' }}>
                  {slide.titleLeft}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-full md:w-[24vw] h-auto md:h-[20vw] flex items-center justify-center md:justify-end mt-4 md:mt-0">
          {slidesData.map((slide, i) => (
            <div key={`right-${slide.id}`} className="absolute right-0 md:right-auto w-full flex justify-center md:justify-end title-right-text" style={{ display: i === 0 ? 'block' : 'none' }}>
              <div>
                <h2 className="text-[10vw] md:text-[4vw] font-normal leading-[1] text-[#f1e5d1] whitespace-pre-wrap tracking-tight text-center md:text-right break-words" style={{ fontFamily: 'EditorialnewItalicRegular, Playfair Display, serif' }}>
                  {slide.titleRight}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED TOP CARD */}
      <div className="absolute top-[2%] md:-top-[2vw] left-1/2 -translate-x-1/2 w-[45vw] md:w-[18vw] aspect-video z-10 opacity-50 pointer-events-none">
        
        {/* Infinite Grid Lines */}
        <div className="absolute top-1/2 left-0 w-[1px] h-[200vh] -translate-y-1/2 bg-[#f1e5d1]/5"></div>
        <div className="absolute top-1/2 right-0 w-[1px] h-[200vh] -translate-y-1/2 bg-[#f1e5d1]/5"></div>
        <div className="absolute top-0 left-1/2 w-[200vw] h-[1px] -translate-x-1/2 bg-[#f1e5d1]/5"></div>
        <div className="absolute bottom-0 left-1/2 w-[200vw] h-[1px] -translate-x-1/2 bg-[#f1e5d1]/5"></div>

        <div className="relative w-full h-full border border-[#f1e5d1]/20 bg-[#102a28] overflow-hidden">
          {slidesData.map((slide, i) => (
            <div key={`top-img-${slide.id}`} className="top-slide-img-layer absolute top-0 left-0 w-full h-full overflow-hidden" style={{ zIndex: i === slidesData.length - 1 ? 1 : 0, clipPath: i === slidesData.length - 1 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}>
              {slide.isVideo ? (
                <video src={slide.img} loop muted playsInline preload={i === 0 || i === 1 || i === slidesData.length - 1 ? 'auto' : 'none'} className="w-full h-full object-cover scale-[1.02]" />
              ) : (
                <img src={slide.img} className="w-full h-full object-cover scale-[1.02]" alt="" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FIXED BOTTOM CARD */}
      <div className="absolute bottom-[2%] md:-bottom-[2vw] left-1/2 -translate-x-1/2 w-[45vw] md:w-[18vw] aspect-video z-10 opacity-50 pointer-events-none">
        
        {/* Infinite Grid Lines */}
        <div className="absolute top-1/2 left-0 w-[1px] h-[200vh] -translate-y-1/2 bg-[#f1e5d1]/5"></div>
        <div className="absolute top-1/2 right-0 w-[1px] h-[200vh] -translate-y-1/2 bg-[#f1e5d1]/5"></div>
        <div className="absolute top-0 left-1/2 w-[200vw] h-[1px] -translate-x-1/2 bg-[#f1e5d1]/5"></div>
        <div className="absolute bottom-0 left-1/2 w-[200vw] h-[1px] -translate-x-1/2 bg-[#f1e5d1]/5"></div>

        <div className="relative w-full h-full border border-[#f1e5d1]/20 bg-[#102a28] overflow-hidden">
          {slidesData.map((slide, i) => (
            <div key={`bottom-img-${slide.id}`} className="bottom-slide-img-layer absolute top-0 left-0 w-full h-full overflow-hidden" style={{ zIndex: i === 1 ? 1 : 0, clipPath: i === 1 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}>
              {slide.isVideo ? (
                <video src={slide.img} loop muted playsInline preload={i === 0 || i === 1 || i === slidesData.length - 1 ? 'auto' : 'none'} className="w-full h-full object-cover scale-[1.02]" />
              ) : (
                <img src={slide.img} className="w-full h-full object-cover scale-[1.02]" alt="" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FIXED CENTER CARD */}
      <div 
        ref={cardRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[55vw] max-w-[1000px] aspect-video z-20 pointer-events-auto group/card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Infinite Grid Lines */}
        <div className="absolute top-1/2 left-0 w-[1px] h-[200vh] -translate-y-1/2 bg-[#f1e5d1]/[0.15] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 right-0 w-[1px] h-[200vh] -translate-y-1/2 bg-[#f1e5d1]/[0.15] pointer-events-none -z-10"></div>
        <div className="absolute top-0 left-1/2 w-[200vw] h-[1px] -translate-x-1/2 bg-[#f1e5d1]/[0.15] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-1/2 w-[200vw] h-[1px] -translate-x-1/2 bg-[#f1e5d1]/[0.15] pointer-events-none -z-10"></div>

        
        {/* Top Info Bar */}
        <div className="absolute -top-6 md:-top-8 left-0 w-full flex justify-between text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-[#f1e5d1]/80 uppercase overflow-hidden" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
          <div className="w-1/2 truncate">
            <span className="inline-block relative transition-transform duration-500" key={activeSlide.id + 'catLeft'}>{activeSlide.catLeft}</span>
          </div>
          <div className="w-1/2 text-right truncate">
            <span className="inline-block relative transition-transform duration-500" key={activeSlide.id + 'catRight'}>{activeSlide.catRight}</span>
          </div>
        </div>

        {/* Custom VIEW Button (Now a Link) */}
        <Link 
          href={`/work/${activeSlide.slug}`}
          ref={viewButtonRef as any}
          className="absolute top-0 left-0 px-5 py-2 md:px-8 md:py-3 bg-[#102a28]/60 backdrop-blur-md flex items-center justify-center z-40 cursor-pointer group border border-[#f1e5d1]/30 hover:bg-[#f1e5d1] hover:text-[#102a28] opacity-100 pointer-events-auto scale-100 md:opacity-0 md:group-hover/card:opacity-100 md:scale-95 md:group-hover/card:scale-100 transition-all duration-300 md:pointer-events-none md:group-hover/card:pointer-events-auto"
          style={{ willChange: 'transform' }}
        >
          <span className="text-[#f1e5d1] group-hover:text-[#102a28] text-[10px] md:text-[12px] font-mono tracking-widest uppercase font-bold transition-colors">View</span>
        </Link>

        {/* Video/Image Container */}
        <div className="relative w-full h-full border border-[#f1e5d1]/20 bg-[#102a28] overflow-hidden group cursor-pointer shadow-2xl">
          {/* Corner Brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#f1e5d1]/50 z-20 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#f1e5d1]/50 z-20 transition-all duration-300 group-hover:top-4 group-hover:right-4"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#f1e5d1]/50 z-20 transition-all duration-300 group-hover:bottom-4 group-hover:left-4"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#f1e5d1]/50 z-20 transition-all duration-300 group-hover:bottom-4 group-hover:right-4"></div>
          
          {slidesData.map((slide, i) => (
            <div key={`img-${slide.id}`} className="slide-img-layer absolute top-0 left-0 w-full h-full overflow-hidden" style={{ zIndex: i === 0 ? 1 : 0, clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}>
              {slide.isVideo ? (
                <video src={slide.img} loop muted playsInline preload={i === 0 || i === 1 || i === slidesData.length - 1 ? 'auto' : 'none'} className="w-full h-full object-cover scale-[1.02]" />
              ) : (
                <img src={slide.img} className="w-full h-full object-cover scale-[1.02]" alt={slide.titleLeft} />
              )}
            </div>
          ))}

          {/* Mute Toggle on Card */}
          {activeSlide.isVideo && (
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsGlobalMuted(!isGlobalMuted); }}
              className="absolute bottom-4 right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white border border-white/20 z-50 transition-all duration-300 backdrop-blur-sm pointer-events-auto"
            >
              {isGlobalMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute -bottom-6 md:-bottom-8 left-0 w-full flex justify-between items-center text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-[#f1e5d1]/90 uppercase" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
          <div className="w-1/4 text-left">
            <span className="inline-block relative transition-transform duration-500" key={activeSlide.id + 'num'}>{activeSlide.num}</span>
          </div>
          <div className="w-1/2 text-center truncate px-2 opacity-80">
            <span className="inline-block relative transition-transform duration-500" key={activeSlide.id + 'client'}>{activeSlide.client}</span>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

function HomeContentWrapper() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'all';
  
  return <HomeContent key={filter} filter={filter} />;
}

export default function Home() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-[#1b1b1a]"></div>}>
      <HomeContentWrapper />
    </Suspense>
  );
}
