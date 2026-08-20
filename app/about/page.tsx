'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  
  // Hover animation for the hero card
  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroCardRef.current) return;
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 100; // -50 to 50
    const yPos = (clientY / window.innerHeight - 0.5) * 100;
    
    gsap.to(heroCardRef.current, {
      x: xPos,
      y: yPos,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in hero text words individually
      gsap.fromTo(
        '.hero-word',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: 'power3.out',
        }
      );

      // Section reveal triggers
      gsap.utils.toArray('.reveal-section').forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
          }
        );
      });

      // Parallax effect on the Hero Background
      gsap.to('.hero-bg', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#1b1b1a] text-[#f1e5d1] selection:bg-[#f1e5d1] selection:text-[#1b1b1a]">
      
      {/* FIXED ELEMENTS (Filmstrip) */}
      <div className="fixed top-0 w-full flex justify-center pointer-events-none z-[5] h-screen overflow-hidden">
        <div className="relative w-[45vw] h-full">
          {/* Left numbers */}
          <div className="absolute top-0 h-full -left-8 flex flex-col justify-between items-center text-[8px] font-mono text-[#f1e5d1]/30 py-[25vh] md:py-[20vh]">
            <span className="-rotate-90">010</span>
            <span className="-rotate-90">020</span>
            <span className="-rotate-90">030</span>
            <span className="-rotate-90">040</span>
            <span className="-rotate-90">050</span>
            <span className="-rotate-90">060</span>
            <span className="-rotate-90">070</span>
            <span className="-rotate-90">080</span>
          </div>
          {/* Right numbers */}
          <div className="absolute top-0 h-full -right-8 flex flex-col justify-between items-center text-[8px] font-mono text-[#f1e5d1]/30 py-[25vh] md:py-[20vh]">
            <span className="rotate-90">080</span>
            <span className="rotate-90">070</span>
            <span className="rotate-90">060</span>
            <span className="rotate-90">050</span>
            <span className="rotate-90">040</span>
            <span className="rotate-90">030</span>
            <span className="rotate-90">020</span>
            <span className="rotate-90">010</span>
          </div>
        </div>
      </div>

      {/* FIXED SIDE LABELS */}
      <div className="hidden md:block fixed top-1/2 -translate-y-1/2 left-8 text-xs md:text-sm font-sans tracking-[0.2em] uppercase font-bold z-10 pointer-events-none">
        VISUAL DESIGNER
      </div>
      <div className="hidden md:block fixed top-1/2 -translate-y-1/2 right-8 text-xs md:text-sm font-sans tracking-[0.2em] uppercase font-bold z-10 pointer-events-none">
        ART DIRECTOR
      </div>

      {/* HERO SECTION */}
      <section 
        className="relative w-full h-screen flex flex-col items-center justify-center z-10 overflow-hidden cursor-crosshair"
        onMouseMove={handleHeroMouseMove}
      >
        
        {/* Full-Screen Portrait Background */}
        <div className="absolute inset-0 w-full h-[120vh] z-0 opacity-40 mix-blend-lighten hero-bg pointer-events-none">
          <img src="/yash_bg.jpg" className="w-full h-full object-cover object-[center_80%]" alt="Background Texture" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1a] via-[#1b1b1a]/40 to-[#1b1b1a]/80"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none mt-20">
          
          {/* Floating Bracket Card */}
          <div className="relative md:absolute top-0 md:top-[10vh] w-[40vw] md:w-[25vw] max-w-[250px] aspect-[3/4] z-20 pointer-events-none mb-8 md:mb-0" ref={heroCardRef}>
            <div className="w-full h-full relative p-2 border border-[#f1e5d1]/20 bg-black/20 backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#f1e5d1]/50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#f1e5d1]/50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#f1e5d1]/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#f1e5d1]/50"></div>
              <img src="/yash_hero.jpg" className="w-full h-full object-cover" alt="Yash Yadav Hero" />
            </div>
          </div>

          <div className="text-[10px] font-mono tracking-[0.2em] mb-4 font-bold text-[#f1e5d1]/90 drop-shadow-md z-30 mt-4 md:mt-0">
            ABOUT ME
          </div>

          <h1 className="text-[12vw] md:text-[10vw] lg:text-[9vw] leading-none font-serif tracking-tight mb-8 text-center drop-shadow-lg z-30 flex flex-wrap justify-center">
            <span className="hero-word inline-block italic pr-4">Yash</span>
            <span className="hero-word inline-block">Yadav</span>
          </h1>

          <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] mb-6 font-bold text-[#f1e5d1]/90 drop-shadow-md z-30 text-center px-4 leading-relaxed">
            SENIOR VISUAL DESIGNER & ART DIRECTOR
          </div>

          <div className="text-center font-mono text-[8px] md:text-[10px] lg:text-xs leading-relaxed tracking-[0.1em] text-[#f1e5d1]/70 uppercase drop-shadow-md z-30 px-4">
            TEAM LEADERSHIP • BRANDING • MOTION • UI/UX
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 bg-[#1b1b1a] px-8 pb-32 w-full max-w-[80vw] mx-auto">
        
        {/* BIO SECTION */}
        <section className="reveal-section border-t border-[#f1e5d1]/20 pt-16 mt-16 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-24 items-center">
          
          {/* Info Card (from Screenshot) */}
          <div className="bg-[#f1e5d1] text-[#1b1b1a] p-8 md:p-12 shadow-2xl relative rounded-sm">
            <div className="flex justify-between items-center mb-8 border-b border-[#1b1b1a]/10 pb-4">
              <span className="font-mono text-xs font-bold tracking-widest text-[#1b1b1a]/60">ABOUT</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1b1b1a]/20"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1b1b1a]/20"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1b1b1a]/20"></span>
              </div>
            </div>
            
            <div className="space-y-6 text-sm">
              <div className="flex justify-between border-b border-[#1b1b1a]/5 pb-4">
                <span className="text-[#1b1b1a]/60">Location</span>
                <span className="font-semibold">Mumbai, IN</span>
              </div>
              <div className="flex justify-between border-b border-[#1b1b1a]/5 pb-4">
                <span className="text-[#1b1b1a]/60">Experience</span>
                <span className="font-semibold">5+ Years</span>
              </div>
              <div className="flex justify-between border-b border-[#1b1b1a]/5 pb-4">
                <span className="text-[#1b1b1a]/60">Identity</span>
                <span className="font-semibold">Proper Mumbaikar</span>
              </div>
              <div className="flex justify-between border-b border-[#1b1b1a]/5 pb-4">
                <span className="text-[#1b1b1a]/60">Fuel</span>
                <span className="font-semibold">Chai & Vadapav</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1b1b1a]/60">Hobbies</span>
                <span className="font-semibold">Bikes & Travel</span>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-[8vw] md:text-[4vw] leading-[1.1] mb-10 tracking-tight">
              Making things look good,<br className="hidden md:block"/> and feel right.
            </h2>
            <div className="font-sans text-lg md:text-xl leading-relaxed text-[#f1e5d1]/80 space-y-8 font-light">
              <p>
                I'm a Senior Visual Designer with over five years of experience building brands across FMCG, BFSI, F&B, and Fashion. 
                I specialize in crafting comprehensive visual systems and leading creative projects that actually connect with people. 
                Whether it's designing a high-converting digital platform or a striking out-of-home campaign, I care deeply about 
                how design makes audiences feel.
              </p>
              <p className="text-2xl md:text-3xl font-serif italic opacity-90 leading-relaxed text-[#f1e5d1]" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
                A true Maharashtrian who finds inspiration in the everyday chaos, riding bikes, and traveling the world.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section className="reveal-section border-t border-[#f1e5d1]/20 pt-16 mt-32">
          <h2 className="text-center font-serif text-[6vw] md:text-[4vw] leading-none mb-24 italic">Background</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            
            {/* Experience */}
            <div className="flex flex-col gap-12 border-l border-[#f1e5d1]/20 pl-8 md:pl-12 relative">
              <div className="absolute top-0 -left-1.5 w-3 h-3 bg-[#f1e5d1] rounded-full"></div>
              
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <h3 className="text-2xl md:text-3xl font-serif">Senior Graphic Designer</h3>
                  <span className="font-mono text-xs tracking-widest text-[#f1e5d1]/50 border border-[#f1e5d1]/20 px-3 py-1 rounded-full">
                    MAY 2024 - MAY 2026
                  </span>
                </div>
                <div className="text-[#f1e5d1]/70 font-mono text-sm tracking-widest uppercase mb-6">
                  @ Chtrbox
                </div>
                <p className="text-[#f1e5d1]/80 leading-relaxed font-sans font-light">
                  I led the design team and helped shape Chtrbox's visual identity across major campaigns. 
                  My focus was on elevating our creative output and delivering UI/UX solutions that actually worked 
                  for the business. Alongside the hands-on design work, I mentored a team of designers to maintain 
                  a consistently high standard of craft.
                </p>
              </div>

            </div>

            {/* Education & Ethos */}
            <div className="flex flex-col gap-16">
              
              <div className="border border-[#f1e5d1]/10 p-8 md:p-12 bg-[#102a28]/20 backdrop-blur-sm relative">
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#f1e5d1]/50"></div>
                 <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#f1e5d1]/50"></div>
                 <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#f1e5d1]/50"></div>
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#f1e5d1]/50"></div>
                 
                 <h4 className="font-mono text-[10px] tracking-widest text-[#f1e5d1]/50 mb-4 uppercase">Education</h4>
                 <h3 className="font-serif text-2xl mb-2">Mass Communication & Media Studies</h3>
                 <p className="text-[#f1e5d1]/70 font-mono text-sm tracking-widest uppercase">University of Mumbai</p>
              </div>

              <div className="border-t border-[#f1e5d1]/10 pt-8">
                <h4 className="font-mono text-[10px] tracking-widest text-[#f1e5d1]/50 mb-6 uppercase">Design Philosophy</h4>
                <p className="font-sans text-lg md:text-xl font-light text-[#f1e5d1]/90 leading-relaxed">
                  Passionate about art, colors, and creating meaningful visuals. 
                  My foundation in media studies deeply values storytelling, with a 
                  commitment to continuous learning and delivering high-quality creatives that resonate.
                </p>
              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
