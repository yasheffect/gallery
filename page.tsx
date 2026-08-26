"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoPlayer from '@/components/VideoPlayer';
import ImageExpand from '@/components/ImageExpand';
import LightboxGallery from '@/components/LightboxGallery';
import { projectsData } from '../../data/projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NikeRunForLife() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Find the next project for the footer
  const currentIndex = projectsData.findIndex(p => p.slug === 'nike-run-for-life');
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  // Map out the gallery images to be used in the lightbox if needed
  const galleryImages = [
    { url: "/projects/Nike - Run for Life/main video.mp4", isVideo: true },
    { url: "/projects/Nike - Run for Life/KV.PNG" },
    { url: "/projects/Nike - Run for Life/running_city.jpg" },
    { url: "/projects/Nike - Run for Life/runner_alive.jpg" },
    { url: "/projects/Nike - Run for Life/IMG_5094.PNG" },
    { url: "/projects/Nike - Run for Life/OOH 2.png" },
    { url: "/projects/Nike - Run for Life/OOH 3.jpeg" },
    { url: "/projects/Nike - Run for Life/OOH 4.png" },
    { url: "/projects/Nike - Run for Life/OOH 5.PNG" },
    { url: "/projects/Nike - Run for Life/social 1.PNG" },
    { url: "/projects/Nike - Run for Life/social 2.PNG" },
    { url: "/projects/Nike - Run for Life/social 3.PNG" },
    { url: "/projects/Nike - Run for Life/social 4.PNG" },
    { url: "/projects/Nike - Run for Life/on ground activation 1.PNG" },
    { url: "/projects/Nike - Run for Life/on ground activation 2.PNG" },
    { url: "/projects/Nike - Run for Life/mobile experience.PNG" },
    { url: "/projects/Nike - Run for Life/store experience 1.PNG" },
    { url: "/projects/Nike - Run for Life/store experience 2.PNG" },
    { url: "/projects/Nike - Run for Life/storyboard.png" },
    { url: "/projects/Nike - Run for Life/Main LOCKUP.PNG" }
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
    <div ref={containerRef} className="w-full min-h-screen bg-[#1b1b1a] text-[#f1e5d1] selection:bg-[#ff6600] selection:text-[#1b1b1a] font-sans">
      
      {/* GLOBAL GRID SYSTEM */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-0 left-[6%] w-[1px] h-full bg-[#f1e5d1]"></div>
        <div className="absolute top-0 right-[6%] w-[1px] h-full bg-[#f1e5d1]"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#f1e5d1] -translate-x-1/2"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full h-[65vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-[#f1e5d1]/10">
        <div ref={heroImgRef} className="absolute inset-0 z-0 opacity-60">
          <img src="/projects/Nike - Run for Life/OOH 3.jpeg" alt="Run For Life" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b1a]/80 via-transparent to-[#1b1b1a]"></div>
        </div>
        <div className="absolute inset-0 z-10 w-full h-full px-[6%] pt-24 pb-12 md:pt-32 md:pb-24 flex flex-col justify-center items-center mix-blend-difference pointer-events-none">
          <div className="text-center flex flex-col items-center">
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[#f1e5d1] mb-6 md:mb-8 opacity-80">
              360 Campaign
            </span>
            <div style={{ fontFamily: 'EditorialnewItalicRegular', fontSize: 'clamp(3rem, 15vw, 15rem)', lineHeight: '0.85', color: '#ff6600' }}>
              Run For Life
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
              <div className="mb-2 text-[#ff6600]">Client</div>
              <div className="text-[#f1e5d1]">Nike Running</div>
            </div>
            <div>
              <div className="mb-2 text-[#ff6600]">Type</div>
              <div className="text-[#f1e5d1]">360 Campaign</div>
            </div>
            <div>
              <div className="mb-2 text-[#ff6600]">Disciplines</div>
              <div className="text-[#f1e5d1] leading-relaxed">Concept Development<br/>Art Direction<br/>Campaign Strategy<br/>Experiential<br/>Digital<br/>Retail<br/>Film Direction</div>
            </div>
          </div>

          <div className="md:col-span-8 md:pl-16 reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">My Role</h3>
            <div className="space-y-8 font-serif text-lg leading-relaxed text-[#f1e5d1]/80">
              <div>
                <strong className="text-[#f1e5d1] font-sans font-bold uppercase text-sm tracking-wider block mb-2">Concept + Art Direction</strong>
                <p>Developed the human insight. Connected the behaviour of the city to the behaviour of its people. Defined the common-man protagonist. Identified the identity + relevance barrier. Defined Nike's role as motivator, the emotional territory, and the mental shift. Developed the campaign platform.</p>
              </div>
              <div>
                <strong className="text-[#f1e5d1] font-sans font-bold uppercase text-sm tracking-wider block mb-2">Art Direction</strong>
                <p>Built the campaign visual language. Defined casting and character direction. Developed photography and cinematic language. Created typography and colour system. Developed urban route/map visual language. Art-directed OOH, social, experiential, digital and retail.</p>
              </div>
              <div>
                <strong className="text-[#f1e5d1] font-sans font-bold uppercase text-sm tracking-wider block mb-2">Film</strong>
                <p>Developed the narrative. Wrote the 30-second VO. Defined camera progression. Developed storyboard direction. Defined motion identity.</p>
              </div>
              <div>
                <strong className="text-[#f1e5d1] font-sans font-bold uppercase text-sm tracking-wider block mb-2">AI-Assisted Visualisation</strong>
                <p>Generative AI was used as a visualisation and prototyping tool to explore campaign imagery, environments, UI, experiential spaces and film storyboards while maintaining a consistent art direction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE BRIEF & THE THINKING */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-32">
          
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">The Brief</h3>
            <h2 className="text-4xl md:text-6xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              Make running feel like it belongs to everyone.
            </h2>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
              Running is often associated with athletes, fitness enthusiasts and people chasing performance goals. The challenge was to challenge that perception and make running feel human, accessible and personal—something an ordinary person could claim for themselves.
            </p>
          </div>

          <div className="reveal-text">
            <ImageExpand src="/projects/Nike - Run for Life/running_city.jpg" alt="Running in the city" className="w-full shadow-2xl border border-[#f1e5d1]/10 object-cover aspect-video" onExpand={() => openLightbox("/projects/Nike - Run for Life/running_city.jpg")} />
          </div>

          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">The Thinking</h3>
            <div className="space-y-6 font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
              <p>It started with a city.</p>
              <p>Mumbai is a city that is: Always moving. Always awake. Always hustling. Always adapting.</p>
              <p>But the more I looked at the city, the more interesting its people became. Because the people are moving too.</p>
              <p>Everyone is running for something. A student runs toward an opportunity. A worker runs toward a deadline. A business owner runs toward the next customer. A parent runs toward responsibility. Someone else is simply running toward a better version of themselves.</p>
              <p className="border-l-2 border-[#ff6600] pl-6 py-2 my-8 text-2xl text-[#f1e5d1]">
                The destinations are different.<br/>The instinct is the same: Keep moving.
              </p>
              <p>That was the moment the idea started becoming bigger than Mumbai. The city became the context. Human behaviour became the insight.</p>
            </div>
          </div>

        </div>
      </section>

      {/* HUMAN INSIGHT & BARRIER */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">The Common Human</h3>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-6">
              Instead of starting with an athlete, I built the campaign around an ordinary person. Someone who is ambitious, intelligent, emotionally aware, disciplined, socially conscious, family-oriented, physically ordinary, not fitness obsessed, not a runner.
            </p>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1] font-bold">
              The important part: He doesn't need to change before he can run. He simply hasn't considered running as something that belongs to him.
            </p>
          </div>
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">The Barrier</h3>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-6">
              The problem wasn't: "I can't run." It was: "I'm not a runner."
            </p>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-6">
              And that creates the next question: "So why would I run?" The barrier became less about physical capability and more about Identity + Relevance. Running felt like something that belonged to a specific kind of person.
            </p>
          </div>
        </div>
      </section>

      {/* THE SEARCH FOR HUMAN TRUTH & NIKE'S ROLE */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-32">
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">The Search For The Human Truth</h3>
            <div className="space-y-8">
              <p className="font-serif text-2xl leading-relaxed text-[#f1e5d1]/80">
                The obvious reasons to run were easy: Fitness. Health. Performance. Achievement. Ambition. But every one of those pushed the campaign back toward athletes.
              </p>
              <h2 className="text-4xl md:text-5xl leading-snug text-[#f1e5d1]" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
                So the question became: What happens when you remove the goal?
              </h2>
              <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
                You still move. You still breathe. You still experience your body.
              </p>
              <p className="text-5xl md:text-6xl text-[#ff6600] pt-4" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
                And sometimes, you simply: FEEL ALIVE.
              </p>
              <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
                That became the emotional centre of the campaign.
              </p>
            </div>
          </div>

          <div className="reveal-text">
            <ImageExpand src="/projects/Nike - Run for Life/runner_alive.jpg" alt="Runner catching their breath" className="w-full shadow-2xl border border-[#f1e5d1]/10 object-cover aspect-video" onExpand={() => openLightbox("/projects/Nike - Run for Life/runner_alive.jpg")} />
          </div>

          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8 flex items-center gap-3">
              Nike's Role
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" className="w-10 h-auto invert brightness-0" />
            </h3>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-12">
              This distinction became critical. Nike doesn't make you feel alive. Running does. So the roles became:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              <div className="border border-[#f1e5d1]/10 p-8">
                <h4 className="text-[#ff6600] font-bold tracking-widest uppercase mb-2 text-sm">Nike &rarr; Motivator</h4>
                <p className="text-[#f1e5d1]/70">Challenges the mental barrier and encourages the first step.</p>
              </div>
              <div className="border border-[#f1e5d1]/10 p-8">
                <h4 className="text-[#ff6600] font-bold tracking-widest uppercase mb-2 text-sm">Product &rarr; Helper</h4>
                <p className="text-[#f1e5d1]/70">Supports the physical act.</p>
              </div>
              <div className="border border-[#f1e5d1]/10 p-8">
                <h4 className="text-[#ff6600] font-bold tracking-widest uppercase mb-2 text-sm">Running &rarr; Experience</h4>
                <p className="text-[#f1e5d1]/70">Creates the moment.</p>
              </div>
              <div className="border border-[#f1e5d1]/10 p-8">
                <h4 className="text-[#ff6600] font-bold tracking-widest uppercase mb-2 text-sm">Feeling Alive &rarr; Human Outcome</h4>
                <p className="text-[#f1e5d1]/70">Belongs to the person.</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-text text-center py-16">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">The Mental Shift</h3>
            <p className="font-serif text-2xl leading-relaxed text-[#f1e5d1]/80 max-w-2xl mx-auto">
              We didn't want the audience to think: "I am a runner." Or "I need to become a runner." The desired shift was much simpler:
            </p>
            <h2 className="text-5xl md:text-7xl mt-12 text-[#ff6600]" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              Running can be for me.
            </h2>
          </div>
        </div>
      </section>

      {/* THE BIG IDEA */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal-text">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">The Big Idea</h3>
            <h2 className="text-6xl md:text-8xl mb-12" style={{ fontFamily: 'EditorialnewItalicRegular', color: '#f1e5d1' }}>
              Run For Life
            </h2>
            <div className="space-y-6 font-serif text-xl leading-relaxed text-[#f1e5d1]/80">
              <p>The platform works because “life” has two meanings.</p>
              <p>The life we're already running for. Money. Work. Family. Achievement. Ambition. Stability.</p>
              <p className="text-2xl text-[#ff6600] py-6" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
                And: Running for life. Running simply to move, breathe, reset and reconnect with the feeling of being alive.
              </p>
              <p className="italic">The campaign doesn't prescribe a reason. It gives people permission to find their own.</p>
            </div>
          </div>
          <div className="reveal-text">
            <ImageExpand src="/projects/Nike - Run for Life/Main LOCKUP.PNG" alt="Main Lockup" className="w-full object-cover shadow-2xl border border-[#f1e5d1]/10" onExpand={() => openLightbox("/projects/Nike - Run for Life/Main LOCKUP.PNG")} />
          </div>
        </div>
      </section>

      {/* ART DIRECTION */}
      <section className="relative w-full py-16 md:py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-16 mb-16 items-center">
          <div className="reveal-text text-left">
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">Art Direction</h3>
            <h2 className="text-4xl md:text-5xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              Raw Street × Premium Cinema
            </h2>
            <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-12">
              The visual world needed to feel lived, not manufactured. The campaign combines documentary-style human observation with premium sports-film cinematography. Movement becomes the connective visual language across every medium.
            </p>
            
            <div className="space-y-8 font-sans text-sm tracking-wide uppercase text-[#f1e5d1]/60">
              <div>
                <strong className="text-[#ff6600] block mb-2">Photography</strong>
                Real people. Real environments. Natural imperfections. Real movement. No fitness-model casting. No perfect athletic bodies. No sterile running tracks.
              </div>
              <div>
                <strong className="text-[#ff6600] block mb-2">Cinematography</strong>
                Wide environmental compositions. Kinetic tracking. Low angles. Intimate close-ups. Controlled motion blur. Stillness contrasted against movement.
              </div>
              <div>
                <strong className="text-[#ff6600] block mb-2">Graphic language</strong>
                Black + off-white + campaign orange. Bold editorial typography. Distressed texture. Urban route language. City-map geometry. Strong negative space.
              </div>
            </div>
          </div>
          
          <div className="reveal-text flex flex-col gap-4 w-full md:w-[85%] md:ml-auto">
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Nike - Run for Life/KV.PNG" alt="Art Direction KV" className="w-full h-auto object-contain" onExpand={() => openLightbox("/projects/Nike - Run for Life/KV.PNG")} />
            </div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#f1e5d1]/40 text-right">Main KV</p>
          </div>
        </div>

        {/* Horizontal Grid */}
        <div className="grid md:grid-cols-2 gap-8 reveal-text">
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[16/10] border border-[#f1e5d1]/10 bg-[#151515]">
              <VideoPlayer src="/projects/Nike - Run for Life/main video.mp4" className="w-full h-full object-cover" onExpand={() => openLightbox("/projects/Nike - Run for Life/main video.mp4")} hasAudio={true} />
            </div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#ff6600]">Cinematography</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[16/10] border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Nike - Run for Life/IMG_5094.PNG" alt="Graphic Language" className="w-full h-full object-cover" onExpand={() => openLightbox("/projects/Nike - Run for Life/IMG_5094.PNG")} />
            </div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#ff6600]">Graphic Language</p>
          </div>
        </div>
      </section>

      {/* CAMPAIGN ECOSYSTEM */}
      <section className="relative w-full py-16 md:py-32 px-[6%] z-10 bg-[#1b1b1a]">
        
        <div className="text-center mb-16 md:mb-32 reveal-text">
          <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">Campaign Ecosystem</h3>
          <h2 className="text-4xl md:text-6xl" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
            One idea. Different ways to experience it.
          </h2>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* OOH */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col gap-8 reveal-text">
              <ImageExpand src="/projects/Nike - Run for Life/OOH 2.png" alt="OOH" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/OOH 2.png")} />
              <div className="grid grid-cols-2 gap-8 items-start">
                <ImageExpand src="/projects/Nike - Run for Life/OOH backup.PNG" alt="OOH" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/OOH backup.PNG")} />
                <ImageExpand src="/projects/Nike - Run for Life/OOH 4.png" alt="OOH" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/OOH 4.png")} />
              </div>
              <ImageExpand src="/projects/Nike - Run for Life/OOH 3.jpeg" alt="OOH" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/OOH 3.jpeg")} />
              <ImageExpand src="/projects/Nike - Run for Life/OOH 5.PNG" alt="OOH" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/OOH 5.PNG")} />
            </div>
            {/* Right: Sticky Text */}
            <div className="w-full md:w-1/2 order-1 md:order-2 sticky top-[calc(50vh-10rem)] md:pl-12">
              <div className="reveal-text">
                <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-8">OOH</h3>
                <h2 className="text-4xl md:text-5xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
                  Make the city notice.
                </h2>
                <p className="font-serif text-xl leading-relaxed text-[#f1e5d1]/80 mb-12">
                  The OOH system uses five executions, each exploring a different human relationship with running. Rather than producing five versions of the same poster, each execution owns a different territory: Human &rarr; Emotion &rarr; Everyday Life &rarr; City &rarr; Ambition. The visual language remains consistent. The reason for running changes.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* HERO FILM STORYBOARD */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal-text">
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
              <ImageExpand src="/projects/Nike - Run for Life/storyboard.png" alt="Hero Film Storyboard" className="w-full border border-[#f1e5d1]/10" onExpand={() => openLightbox("/projects/Nike - Run for Life/storyboard.png")} />
            </div>
            <div className="order-1 md:order-2 md:pl-12">
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-4">Hero Film</h3>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'EditorialnewItalicRegular' }}>The visual narrative.</h2>
              <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80 mb-8">
                The film establishes the emotional core of the campaign. The script follows a progression from the chaos of everyday city life to the quiet, internal rhythm of just moving.
              </p>
              <div className="bg-[#151515] p-8 border border-[#f1e5d1]/10 space-y-8">
                <div>
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#ff6600] mb-2">Title</h4>
                  <p className="font-serif text-lg text-[#f1e5d1]/90">Everyone's Running (30s)</p>
                </div>
                
                <div>
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#ff6600] mb-2">Action</h4>
                  <div className="font-serif text-base leading-relaxed text-[#f1e5d1]/70 space-y-4">
                    <p>A cinematic montage begins with an Indian city already in motion: commuters, workers, riders and everyday people moving with purpose.</p>
                    <p>We then find our protagonist: an ordinary man standing still amidst all that movement.</p>
                    <p>He watches, walks out of the station and encounters a RUN FOR LIFE billboard.</p>
                    <p>Something clicks.</p>
                    <p>He starts moving: walks, jogs, then runs: gradually becoming part of the same rhythm we saw throughout the film.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#ff6600] mb-2">Direction</h4>
                  <p className="font-serif text-base leading-relaxed text-[#f1e5d1]/70">
                    Raw street realism × premium cinema.<br/>
                    Progressive camera language from wide city to intimate human moments to kinetic running. Natural morning light, controlled motion blur, realistic Indian environments and understated performances.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#ff6600] mb-2">VO</h4>
                  <p className="font-serif text-lg italic leading-relaxed text-[#f1e5d1]/90">
                    "Everyone's running.<br/>
                    To get somewhere.<br/>
                    To get something done.<br/>
                    To keep things moving.<br/><br/>
                    But sometimes…<br/>
                    You just need to move.<br/><br/>
                    Maybe that's enough."
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#ff6600] mb-2">End</h4>
                  <p className="font-mono text-xs tracking-[0.2em] text-[#f1e5d1]/90">
                    KEEP GOING.<br/>RUN FOR LIFE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-12 reveal-text">
            <div className="max-w-4xl">
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-4">Social</h3>
              <h2 className="text-4xl mb-8" style={{ fontFamily: 'EditorialnewItalicRegular' }}>Make the campaign feel personal.</h2>
              <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80 mb-6">
                Social shifts from broad outdoor communication toward intimate human observation. OOH makes you notice the campaign. Social makes you recognise yourself in it. So the photography becomes more intimate, the typography more flexible, and the stories more personal.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="relative w-full aspect-[4/5] border border-[#f1e5d1]/10 bg-[#151515] overflow-hidden">
                <ImageExpand src="/projects/Nike - Run for Life/social 1.PNG" alt="Social" className="!object-cover" onExpand={() => openLightbox("/projects/Nike - Run for Life/social 1.PNG")} />
              </div>
              <div className="relative w-full aspect-[4/5] border border-[#f1e5d1]/10 bg-[#151515] overflow-hidden">
                <ImageExpand src="/projects/Nike - Run for Life/social 2.PNG" alt="Social" className="!object-cover" onExpand={() => openLightbox("/projects/Nike - Run for Life/social 2.PNG")} />
              </div>
              <div className="relative w-full aspect-[4/5] border border-[#f1e5d1]/10 bg-[#151515] overflow-hidden">
                <ImageExpand src="/projects/Nike - Run for Life/social 3.PNG" alt="Social" className="!object-cover" onExpand={() => openLightbox("/projects/Nike - Run for Life/social 3.PNG")} />
              </div>
              <div className="relative w-full aspect-[4/5] border border-[#f1e5d1]/10 bg-[#151515] overflow-hidden">
                <ImageExpand src="/projects/Nike - Run for Life/social 4.PNG" alt="Social" className="!object-cover" onExpand={() => openLightbox("/projects/Nike - Run for Life/social 4.PNG")} />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* EXPERIENTIAL & MESSAGE BOARDS */}
          <div className="flex flex-col gap-8 md:gap-16">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start reveal-text">
              <div className="order-2 md:order-1">
                <ImageExpand src="/projects/Nike - Run for Life/on ground activation 1.PNG" alt="Experiential" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/on ground activation 1.PNG")} />
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-4">Experiential</h3>
                <h2 className="text-4xl mb-8" style={{ fontFamily: 'EditorialnewItalicRegular' }}>Don't tell people why they run. Let them feel it.</h2>
                <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80 mb-6">
                  A large-scale travelling public experience invites everyday people to try running. Experienced runners act as hosts. Ordinary people become participants. It's not a race. It's not a fitness test. It's not about proving anything. It's simply an invitation to experience running. Nike motivates the next step. The participant defines what that step means.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start reveal-text">
              <div className="order-2 md:order-1">
                <ImageExpand src="/projects/Nike - Run for Life/on ground activation 2.PNG" alt="Experiential" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/on ground activation 2.PNG")} />
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-4">Message Boards</h3>
                <h2 className="text-3xl mb-6" style={{ fontFamily: 'EditorialnewItalicRegular' }}>A city full of reasons to keep going.</h2>
                <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80 mb-8">
                  Physical message boards appear across the city. Runners and passers-by can leave thoughts, reasons, reflections, encouragement and reminders. Over time, the boards become a living archive of what keeps people moving.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* DIGITAL */}
          <div className="flex flex-col gap-12 reveal-text">
            <div className="max-w-4xl">
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-4">Mobile Experience</h3>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'EditorialnewItalicRegular' }}>Your run. Your pace. Your journey.</h2>
              <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80">
                The digital experience continues the campaign after the run. This isn't another performance-heavy running app. The app doesn't tell you how to run. It remembers why you started. The journey is personal rather than competitive.
              </p>
            </div>
            <div className="relative w-full border border-[#f1e5d1]/10 bg-[#151515]">
              <ImageExpand src="/projects/Nike - Run for Life/mobile experience.PNG" alt="Digital" className="w-full h-auto !object-contain" onExpand={() => openLightbox("/projects/Nike - Run for Life/mobile experience.PNG")} />
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* RETAIL */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-1/2 sticky top-[calc(50vh-10rem)] md:pr-12">
              <div className="reveal-text">
                <h3 className="font-mono text-xs tracking-widest uppercase text-[#ff6600] mb-4">Retail</h3>
                <h2 className="text-4xl mb-8" style={{ fontFamily: 'EditorialnewItalicRegular' }}>From the street to the store.</h2>
                <p className="font-serif text-lg leading-relaxed text-[#f1e5d1]/80 mb-6">
                  The same campaign system moves into the retail environment. RUN FOR LIFE becomes the first visual interruption before entering. The campaign doesn't suddenly become: Buy this shoe. Instead, it continues the conversation: Where are you now? What's next? Product becomes the helper for the next step.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-8 reveal-text">
              <ImageExpand src="/projects/Nike - Run for Life/store experience 1.PNG" alt="Retail 1" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/store experience 1.PNG")} />
              <ImageExpand src="/projects/Nike - Run for Life/store experience 2.PNG" alt="Retail 2" className="w-full" onExpand={() => openLightbox("/projects/Nike - Run for Life/store experience 2.PNG")} />
            </div>
          </div>

          <div className="w-full h-px bg-[#f1e5d1]/10"></div>

          {/* FILM VIDEO */}
          <div className="reveal-text">
            <h2 className="text-4xl md:text-5xl mb-16 text-center" style={{ fontFamily: 'EditorialnewItalicRegular' }}>Everyone's running.</h2>
            <div className="max-w-5xl mx-auto border border-[#f1e5d1]/20">
              <VideoPlayer src="/projects/Nike - Run for Life/main video.mp4" className="w-full aspect-video object-cover" onExpand={() => openLightbox("/projects/Nike - Run for Life/main video.mp4")} hasAudio={true} />
            </div>
          </div>

        </div>
      </section>

      {/* FINAL LOCKUP */}
      <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center border-t border-[#f1e5d1]/10 z-10">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-6 text-white text-center">
          Run For Life
        </h1>
        <h2 className="text-2xl md:text-4xl text-[#ff6600] font-bold tracking-[0.2em] uppercase mt-12">
          Keep Going.
        </h2>
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
