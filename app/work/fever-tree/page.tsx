"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageExpand from '@/components/ImageExpand';
import LightboxGallery from '@/components/LightboxGallery';
import { projectsData } from '../../data/projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeverTree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Find the next project for the footer
  const currentIndex = projectsData.findIndex(p => p.slug === 'fever-tree');
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  // Map out the gallery images to be used in the lightbox if needed
  const galleryImages = [
    { url: "/projects/Fever-Tree/OOH Main.png" },
    { url: "/projects/Fever-Tree/social_moment_challenge.jpg" },
    { url: "/projects/Fever-Tree/KV 1.PNG" },
    { url: "/projects/Fever-Tree/KV 2.PNG" },
    { url: "/projects/Fever-Tree/KV 3.PNG" },
    { url: "/projects/Fever-Tree/KV 4.PNG" },
    { url: "/projects/Fever-Tree/KV 5.PNG" },
    { url: "/projects/Fever-Tree/OOH 1.png" },
    { url: "/projects/Fever-Tree/OOH 2.png" },
    { url: "/projects/Fever-Tree/Experiential.png" },
    { url: "/projects/Fever-Tree/Social-Influencer.png" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for text blocks
      gsap.utils.toArray('.reveal-text').forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        );
      });

      // Parallax on hero
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openLightbox = (url: string) => {
    const index = galleryImages.findIndex(g => g.url === url);
    if (index !== -1) setLightboxIndex(index);
  };

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#1b1b1a] text-[#f1e5d1] selection:bg-[#9D4EDD] selection:text-[#1b1b1a] font-sans">
      
      {/* GLOBAL GRID SYSTEM */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-0 left-[6%] w-[1px] h-full bg-[#f1e5d1]"></div>
        <div className="absolute top-0 right-[6%] w-[1px] h-full bg-[#f1e5d1]"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#f1e5d1] -translate-x-1/2"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full h-[65vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-[#f1e5d1]/10">
        <div ref={heroImgRef} className="absolute inset-0 z-0 opacity-60">
          <img src="/projects/Fever-Tree/OOH Main.png" alt="Mix Your Aura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b1a]/80 via-transparent to-[#1b1b1a]"></div>
        </div>
        <div className="absolute inset-0 z-10 w-full h-full px-[6%] pt-24 pb-12 md:pt-32 md:pb-24 flex flex-col justify-center items-center pointer-events-none">
          <div className="text-center flex flex-col items-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[#f1e5d1] mb-6 md:mb-8 opacity-90">
              Campaign & Art Direction
            </span>
            <div style={{ fontFamily: 'EditorialnewItalicRegular', fontSize: 'clamp(3rem, 15vw, 15rem)', lineHeight: '0.85', color: '#f1e5d1' }}>
              Mix Your Aura
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest uppercase opacity-50 flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="w-[1px] h-8 bg-[#f1e5d1] opacity-50"></div>
        </div>
      </section>

      {/* MY ROLE / CAMPAIGN DETAILS */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-4 flex flex-col gap-12 font-mono text-xs tracking-widest uppercase text-[#f1e5d1]/60 reveal-text">
            <div>
              <div className="mb-2 text-[#9D4EDD]">Client</div>
              <div className="text-[#f1e5d1]">Fever-Tree</div>
            </div>
            <div>
              <div className="mb-2 text-[#9D4EDD]">Type</div>
              <div className="text-[#f1e5d1]">Campaign & Art Direction</div>
            </div>
            <div>
              <div className="mb-2 text-[#9D4EDD]">Disciplines</div>
              <div className="text-[#f1e5d1] leading-relaxed">Art Direction<br/>Campaign Concept<br/>Creative Strategy<br/>Visual System<br/>Personality Framework<br/>Product-to-Occasion Mapping<br/>KV Development<br/>OOH Direction<br/>Experiential Direction<br/>Social & Influencer</div>
            </div>
          </div>

          <div className="md:col-span-8 md:pl-16 reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">My Role</h3>
            <div className="space-y-8 font-serif text-lg leading-relaxed text-[#f1e5d1]/80">
              <div>
                <p>I developed the campaign from the initial strategic thought through to the personality system, product mapping, visual language and integrated touchpoints, creating a consistent but flexible world across the campaign.</p>
              </div>
              <div>
                <strong className="text-[#f1e5d1] font-sans font-bold uppercase text-sm tracking-wider block mb-2">Concept + Strategy</strong>
                <p>Developed the "Mix Your Aura" concept. Created the Personality Framework and Product-to-Occasion mapping.</p>
              </div>
              <div>
                <strong className="text-[#f1e5d1] font-sans font-bold uppercase text-sm tracking-wider block mb-2">Art Direction & Visual System</strong>
                <p>Defined the raw, social, bold visual world. Moved away from conventional premium-beverage advertising toward nightlife photography and editorial culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE & THE INSIGHT */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-32">
          
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">The Challenge</h3>
            <h2 className="text-4xl md:text-6xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              Make the brand culturally relevant to a younger audience.
            </h2>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
              Fever-Tree already owns premium mixers, but as younger demographics shift their drinking habits, the brand needed to stand on its own as a cultural lifestyle accessory. The opportunity was to give it a stronger role in the social moments where drinks actually live. Instead of simply showing the product at different occasions, we wanted to explore the people behind them.
            </p>
          </div>

          <div className="reveal-text">
            <ImageExpand src="/projects/Fever-Tree/social_moment_challenge.jpg" alt="Social Moment" className="w-full shadow-2xl border border-[#f1e5d1]/10 object-cover aspect-video" onExpand={() => openLightbox("/projects/Fever-Tree/social_moment_challenge.jpg")} />
          </div>

          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">The Insight</h3>
            <div className="space-y-6 font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
              <p>We don't show up the same way everywhere.</p>
              <p>The person you see in a corporate party isn't necessarily the same person you meet at a house party.</p>
              <p className="border-l-2 border-[#9D4EDD] pl-6 py-2 my-8 text-2xl text-[#f1e5d1]">
                Different people.<br/>Different energy.<br/>Different behaviour.
              </p>
              <p>But instead of treating these as separate audiences, we saw them as different sides of the same person.</p>
            </div>
          </div>

        </div>
      </section>

      {/* THE BIG IDEA */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">The Big Idea</h3>
            <h2 className="text-6xl md:text-8xl mb-12" style={{ fontFamily: 'EditorialnewItalicRegular', color: '#f1e5d1' }}>
              Mix Your Aura
            </h2>
            <div className="space-y-6 font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
              <p>We turn Fever-Tree into a catalyst for these different sides of personality.</p>
              <p>The campaign follows people through different social occasions, showing how their personality, energy and behaviour shift with the moment.</p>
              <p className="text-3xl text-[#9D4EDD] py-6" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
                One person. Different sides.
              </p>
            </div>
          </div>
          <div className="reveal-text">
            <ImageExpand src="/projects/Fever-Tree/OOH Main.png" alt="OOH Main" className="w-full object-cover shadow-2xl border border-[#f1e5d1]/10" onExpand={() => openLightbox("/projects/Fever-Tree/OOH Main.png")} />
          </div>
        </div>
      </section>

      {/* THE STRATEGY & THE PRODUCT STRATEGY */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">The Strategy</h3>
            <h2 className="text-4xl md:text-5xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              A Personality System
            </h2>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
              Rather than building communication around generic occasions, we created a personality system. Each occasion was assigned a distinct social character. This gave every execution a human point of view, rather than simply showing another party scene.
            </p>
          </div>
        </div>

        <div className="w-full reveal-text mb-16 md:mb-32">
          <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-6 font-sans overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="border border-[#f1e5d1]/10 p-8 min-w-[280px] md:min-w-0 shrink-0 snap-start">
              <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase mb-2 text-sm">CORPORATE</h4>
              <p className="text-[#f1e5d1] mb-2 font-semibold">The Conversation Leader</p>
              <p className="text-[#f1e5d1]/70">Confident, composed and sharp.</p>
            </div>
            <div className="border border-[#f1e5d1]/10 p-8 min-w-[280px] md:min-w-0 shrink-0 snap-start">
              <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase mb-2 text-sm">HOUSE PARTY</h4>
              <p className="text-[#f1e5d1] mb-2 font-semibold">The Culture Setter</p>
              <p className="text-[#f1e5d1]/70">Expressive, spontaneous and socially magnetic.</p>
            </div>
            <div className="border border-[#f1e5d1]/10 p-8 min-w-[280px] md:min-w-0 shrink-0 snap-start">
              <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase mb-2 text-sm">STAYCATION</h4>
              <p className="text-[#f1e5d1] mb-2 font-semibold">The Experience Curator</p>
              <p className="text-[#f1e5d1]/70">Relaxed, considered and always discovering something new.</p>
            </div>
            <div className="border border-[#f1e5d1]/10 p-8 min-w-[280px] md:min-w-0 shrink-0 snap-start">
              <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase mb-2 text-sm">GET-TOGETHER</h4>
              <p className="text-[#f1e5d1] mb-2 font-semibold">The Connector</p>
              <p className="text-[#f1e5d1]/70">The person who brings everyone into the same conversation.</p>
            </div>
            <div className="border border-[#f1e5d1]/10 p-8 min-w-[280px] md:min-w-0 shrink-0 snap-start">
              <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase mb-2 text-sm">AFTER-PARTY</h4>
              <p className="text-[#f1e5d1] mb-2 font-semibold">The Energy Driver</p>
              <p className="text-[#f1e5d1]/70">Unfiltered, spontaneous and always ready for one more.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 md:space-y-32">
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">The Product Strategy</h3>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-8">
              The personality system extended into the product itself. We mapped Fever-Tree's distinctive ingredients against the different social personalities. But we deliberately avoided the most obvious pairings. The rule: Match the ingredient against the personality in a way that creates tension.
            </p>

            <div className="overflow-x-auto border border-[#f1e5d1]/10 rounded-lg">
              <table className="w-full text-left font-sans text-sm md:text-base">
                <thead>
                  <tr className="bg-[#151515] text-[#9D4EDD] border-b border-[#f1e5d1]/10 uppercase tracking-widest">
                    <th className="p-4 font-normal text-xs">Occasion</th>
                    <th className="p-4 font-normal text-xs">Ingredient</th>
                    <th className="p-4 font-normal text-xs">Character</th>
                  </tr>
                </thead>
                <tbody className="text-[#f1e5d1]/80 divide-y divide-[#f1e5d1]/10">
                  <tr><td className="p-4 font-semibold text-[#f1e5d1]">Corporate</td><td className="p-4">Ginger</td><td className="p-4 italic">Sharp × Spicy</td></tr>
                  <tr><td className="p-4 font-semibold text-[#f1e5d1]">House Party</td><td className="p-4">Lemon Thyme</td><td className="p-4 italic">Expressive × Refined</td></tr>
                  <tr><td className="p-4 font-semibold text-[#f1e5d1]">Staycation</td><td className="p-4">Quinine</td><td className="p-4 italic">Relaxed × Complex</td></tr>
                  <tr><td className="p-4 font-semibold text-[#f1e5d1]">Get-together</td><td className="p-4">Bitter Orange</td><td className="p-4 italic">Social × Bright</td></tr>
                  <tr><td className="p-4 font-semibold text-[#f1e5d1]">After-party</td><td className="p-4">Ginger</td><td className="p-4 italic">Unrestrained × Spicy</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-3xl text-[#9D4EDD] py-12 text-center" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              The drink therefore becomes more than a product shot. It becomes another expression of personality.
            </p>
          </div>

        </div>
      </section>

      {/* THE CREATIVE DIRECTION */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-16 items-center">
          <div className="reveal-text text-left">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">The Creative Direction</h3>
            <h2 className="text-4xl md:text-5xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              Raw. Social. Bold. Contemporary. Unpredictable.
            </h2>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-12">
              The initial visual language was deliberately moved away from conventional premium-beverage advertising. The visual world takes cues from nightlife photography, editorial culture and contemporary event graphics.
            </p>
            
            <div className="space-y-8 font-sans text-sm tracking-wide uppercase text-[#f1e5d1]/60">
              <div>
                <strong className="text-[#9D4EDD] block mb-2">Photography</strong>
                Instead of polished, posed lifestyle photography, we created imagery that feels caught in the moment. Flash photography. Motion blur. Hard crops. Unfiltered expressions. Crowded frames. Unexpected perspectives.
              </div>
              <div>
                <strong className="text-[#9D4EDD] block mb-2">Lighting & Colour</strong>
                Deep night environments are punctuated by controlled flashes, coloured practicals and strong directional light. A dark base with purple and blue, interrupted by brighter accents of Yellow, Pink, Orange.
              </div>
              <div>
                <strong className="text-[#9D4EDD] block mb-2">Typography</strong>
                We moved away from conventional premium typography and developed a bold brutalist system. Large type. Aggressive cropping. Handwritten interventions. Hard graphic blocks.
              </div>
            </div>
          </div>
          
          <div className="reveal-text flex flex-col gap-4 w-full md:w-[85%] md:ml-auto">
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Fever-Tree/KV 1.PNG" alt="KV 1" className="w-full h-auto object-contain" onExpand={() => openLightbox("/projects/Fever-Tree/KV 1.PNG")} />
            </div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#f1e5d1]/40 text-right">Corporate KV</p>
          </div>
        </div>
      </section>

      {/* OCCASION KVs */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="text-center mb-16 md:mb-32 reveal-text">
          <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">The Key Visual System</h3>
          <h2 className="text-4xl md:text-6xl" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
            Occasion KVs
          </h2>
          <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mt-6 max-w-3xl mx-auto">
            We built individual KVs for five social moments. The visual language stays recognisable while composition, imagery and energy change with the occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-4 reveal-text">
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Fever-Tree/KV 2.PNG" alt="House Party KV" className="w-full h-auto" onExpand={() => openLightbox("/projects/Fever-Tree/KV 2.PNG")} />
            </div>
            <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase text-sm mt-4">House Party</h4>
            <p className="font-serif text-[#f1e5d1]/70">More intimate, expressive and spontaneous.</p>
          </div>
          <div className="flex flex-col gap-4 reveal-text">
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Fever-Tree/KV 3.PNG" alt="Staycation KV" className="w-full h-auto" onExpand={() => openLightbox("/projects/Fever-Tree/KV 3.PNG")} />
            </div>
            <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase text-sm mt-4">Staycation</h4>
            <p className="font-serif text-[#f1e5d1]/70">Relaxed but still culturally considered.</p>
          </div>
          <div className="flex flex-col gap-4 reveal-text">
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Fever-Tree/KV 4.PNG" alt="Get-together KV" className="w-full h-auto" onExpand={() => openLightbox("/projects/Fever-Tree/KV 4.PNG")} />
            </div>
            <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase text-sm mt-4">Get-together</h4>
            <p className="font-serif text-[#f1e5d1]/70">Warm, social and people-focused.</p>
          </div>
          <div className="flex flex-col gap-4 reveal-text">
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Fever-Tree/KV 5.PNG" alt="After-party KV" className="w-full h-auto" onExpand={() => openLightbox("/projects/Fever-Tree/KV 5.PNG")} />
            </div>
            <h4 className="text-[#9D4EDD] font-bold tracking-widest uppercase text-sm mt-4">After-party</h4>
            <p className="font-serif text-[#f1e5d1]/70">Rawer, louder and more energetic.</p>
          </div>
        </div>
      </section>

      {/* CAMPAIGN ECOSYSTEM */}
      <section className="relative w-full py-16 md:py-32 px-[6%] z-10 bg-[#1b1b1a]">
        
        <div className="flex flex-col gap-16 md:gap-32">
          
          {/* OOH */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-8 reveal-text">
              <ImageExpand src="/projects/Fever-Tree/OOH 1.png" alt="OOH 1" className="w-full" onExpand={() => openLightbox("/projects/Fever-Tree/OOH 1.png")} />
              <ImageExpand src="/projects/Fever-Tree/OOH 2.png" alt="OOH 2" className="w-full" onExpand={() => openLightbox("/projects/Fever-Tree/OOH 2.png")} />
            </div>
            {/* Right: Sticky Text */}
            <div className="w-full md:w-1/2 order-1 md:order-2 sticky top-[calc(50vh-10rem)] md:pl-12">
              <div className="reveal-text">
                <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-8">OOH</h3>
                <h2 className="text-4xl md:text-5xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
                  The personality system at scale.
                </h2>
                <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-6">
                  Large-format billboard executions introduce the personality system at scale.
                </p>
                <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-6">
                  Dynamic digital screens allow the creative to respond to the moment, changing imagery and messaging according to the environment or occasion.
                </p>
                <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-12">
                  <strong className="text-[#f1e5d1]">Contextual OOH:</strong> The placement itself becomes part of the idea. The creative changes depending on where and when people encounter it, making the communication feel relevant rather than simply placed.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* EXPERIENTIAL */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal-text">
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
              <ImageExpand src="/projects/Fever-Tree/Experiential.png" alt="Experiential" className="w-full border border-[#f1e5d1]/10" onExpand={() => openLightbox("/projects/Fever-Tree/Experiential.png")} />
            </div>
            <div className="order-1 md:order-2 md:pl-12">
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-4">Experiential</h3>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'EditorialnewItalicRegular' }}>MIX YOUR AURA EXPERIENCE</h2>
              <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80 mb-8">
                We translated the campaign from something people see into something they can participate in. The activation turns the campaign's personality system into something tangible and social.
              </p>
              <div className="bg-[#151515] p-8 border border-[#f1e5d1]/10 space-y-4 font-serif text-lg">
                <p><span className="text-[#9D4EDD] font-mono mr-2">01</span> Choose your occasion</p>
                <p><span className="text-[#9D4EDD] font-mono mr-2">02</span> Step into the experience</p>
                <p><span className="text-[#9D4EDD] font-mono mr-2">03</span> Discover your mix</p>
                <p><span className="text-[#9D4EDD] font-mono mr-2">04</span> Create a personalised social output</p>
                <p><span className="text-[#9D4EDD] font-mono mr-2">05</span> Share it</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* SOCIAL & INFLUENCER */}
          <div className="flex flex-col gap-12 reveal-text">
            <div className="max-w-4xl">
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#9D4EDD] mb-4">Social & Influencer</h3>
              <h2 className="text-4xl mb-8" style={{ fontFamily: 'EditorialnewItalicRegular' }}>Unexpected sides of people.</h2>
              <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80 mb-6">
                The social ecosystem extends the idea into short-form content. Instead of producing generic product content, each piece is built around a recognisable social personality. The same campaign language adapts across Reels, Stories and creator content.
              </p>
              <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80">
                Creators become a natural extension of the personality system. Rather than simply asking creators to feature the product, the activation asks them to step outside their expected persona. That gives creators something more interesting to participate in than a conventional product integration.
              </p>
            </div>
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Fever-Tree/Social-Influencer.png" alt="Social" className="w-full h-auto" onExpand={() => openLightbox("/projects/Fever-Tree/Social-Influencer.png")} />
            </div>
          </div>

        </div>
      </section>

      {/* FINAL LOCKUP */}
      <section className="relative w-full h-[80vh] bg-black flex flex-col items-center justify-center border-t border-[#f1e5d1]/10 z-10 px-[6%]">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12 text-white text-center">
          Mix Your Aura
        </h1>
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-3xl text-[#9D4EDD] font-bold tracking-[0.1em] uppercase">
            Different occasions bring out different sides of us.
          </h2>
          <h2 className="text-xl md:text-3xl text-[#f1e5d1] font-bold tracking-[0.1em] uppercase">
            Fever-Tree gives each one something distinctive to mix with.
          </h2>
        </div>
      </section>

      {/* FOOTER / NEXT PROJECT */}
      {nextProject && (
        <section className="relative w-full py-16 md:py-32 flex items-center justify-center z-10 bg-[#1b1b1a] overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {nextProject.isVideo ? (
              <video src={nextProject.img} autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 blur-xl" />
            ) : (
              <img src={nextProject.img} className="w-full h-full object-cover scale-110 blur-xl" alt="" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1a] via-transparent to-[#1b1b1a] pointer-events-none"></div>

          <Link href={`/work/${nextProject.slug}`} className="group relative flex flex-col items-center gap-8 text-center z-10">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#f1e5d1]/50 group-hover:text-[#f1e5d1] transition-colors">
              Next Project
            </div>
            <div className="w-[70vw] md:w-[24vw] aspect-video relative overflow-hidden border border-[#f1e5d1]/20 opacity-70 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100 shadow-2xl">
              {nextProject.isVideo ? (
                <video src={nextProject.img} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <img src={nextProject.img} className="w-full h-full object-cover" alt="Next Project" />
              )}
            </div>
            <div className="text-3xl md:text-6xl text-[#f1e5d1] opacity-70 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              {nextProject.titleLeft.replace('\n', ' ')} {nextProject.titleRight.replace('\n', ' ')}
            </div>
          </Link>
        </section>
      )}

      {lightboxIndex !== null && (
        <LightboxGallery 
          mediaList={galleryImages} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}
    </div>
  );
}
