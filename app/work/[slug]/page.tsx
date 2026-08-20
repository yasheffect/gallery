"use client";

import { useEffect, useRef, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../../data/projects';
import VideoPlayer from '@/components/VideoPlayer';
import ImageExpand from '@/components/ImageExpand';
import LightboxGallery from '@/components/LightboxGallery';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const currentIndex = projectsData.findIndex(p => p.slug === params.slug);
  const project = projectsData[currentIndex];
  
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const titleLeftRef = useRef<HTMLDivElement>(null);
  const titleRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    
    // Initial entrance animations
    const tl = gsap.timeline();
    
    tl.fromTo(heroImgRef.current, 
      { scale: 1.2, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2, ease: 'power4.out' }
    )
    .fromTo([titleLeftRef.current, titleRightRef.current],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', stagger: 0.2 },
      "-=1.5"
    );

    // Subtle parallax on scroll for hero image
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

  }, [project]);

  if (!project) {
    notFound();
  }

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#1b1b1a] text-[#f1e5d1] selection:bg-[#f1e5d1] selection:text-[#1b1b1a] overflow-x-hidden font-sans">
      
      {/* GLOBAL GRID SYSTEM */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-0 left-[6%] w-[1px] h-full bg-[#f1e5d1]"></div>
        <div className="absolute top-0 right-[6%] w-[1px] h-full bg-[#f1e5d1]"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#f1e5d1] -translate-x-1/2"></div>
      </div>


      {/* HERO SECTION */}
      <section className="relative w-full h-[65vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-[#f1e5d1]/10">
        
        {/* Background Media */}
        <div className="absolute inset-0 z-0 opacity-60">
          {project.isVideo ? (
            <video 
              ref={heroImgRef as any}
              src={project.img} 
              autoPlay loop muted playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              ref={heroImgRef as any}
              src={project.img} 
              alt={project.titleLeft} 
              className="w-full h-full object-cover"
            />
          )}
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b1a]/80 via-transparent to-[#1b1b1a]"></div>
        </div>

        {/* Hero Typography */}
        <div className="absolute inset-0 z-10 w-full h-full px-[6%] pt-24 pb-12 md:pt-32 md:pb-24 flex flex-col justify-between mix-blend-difference pointer-events-none">
          <div ref={titleLeftRef} className="title-left-text self-start mt-4" style={{ fontFamily: 'EditorialnewItalicRegular', fontSize: 'clamp(2.5rem, 12vw, 12rem)', lineHeight: '0.85', color: '#f1e5d1' }}>
            {project.titleLeft.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </div>
          <div ref={titleRightRef} className="title-right-text self-end text-right mb-4" style={{ fontFamily: 'EditorialnewItalicRegular', fontSize: 'clamp(2.5rem, 12vw, 12rem)', lineHeight: '0.85', color: '#f1e5d1' }}>
            {project.titleRight.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest uppercase opacity-50 flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="w-[1px] h-8 bg-[#f1e5d1] opacity-50"></div>
        </div>
      </section>

      {/* PROJECT INFO SECTION */}
      <section className="relative w-full py-32 px-[6%] border-b border-[#f1e5d1]/10 z-10 bg-[#1b1b1a]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          {/* Left Metadata */}
          <div className="md:col-span-4 flex flex-col gap-12 font-mono text-xs tracking-widest uppercase text-[#f1e5d1]/60">
            <div>
              <div className="mb-2 text-[#f1e5d1]">Client</div>
              <div>{project.client}</div>
            </div>
            <div>
              <div className="mb-2 text-[#f1e5d1]">Role</div>
              <div>{project.role}</div>
            </div>
            <div>
              <div className="mb-2 text-[#f1e5d1]">Year</div>
              <div>{project.year}</div>
            </div>
          </div>

          {/* Right Description */}
          <div className="md:col-span-8 md:pl-16">
            <h2 className="text-2xl md:text-4xl mb-8 leading-snug" style={{ fontFamily: 'EditorialnewItalicRegular' }}>
              {project.conceptHeading || "We approached this project with a singular vision: to strip away the excess and reveal the raw, underlying structure of the narrative."}
            </h2>
            <div className="text-sm md:text-base leading-relaxed text-[#f1e5d1]/80 max-w-2xl font-serif space-y-6">
              {(project.conceptDescription || project.description)?.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-32 px-[6%] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-y-32 md:gap-x-16 items-start z-10 bg-[#1b1b1a] max-w-[100rem] mx-auto">
        {project.gallery?.map((media, idx) => {
          let colSpanClass = 'md:col-span-12';
          if (media.layout === 'half') colSpanClass = 'md:col-span-6';
          if (media.layout === 'third') colSpanClass = 'md:col-span-4';
          if (!media.layout) {
             colSpanClass = project.gallery!.length <= 4 ? 'md:col-span-6' : 'md:col-span-4';
          }
          if (project.gallery!.length === 1) colSpanClass = 'md:col-span-12';

          return (
            <div key={idx} className={`relative w-full flex flex-col gap-6 ${colSpanClass}`}>
              <div className="relative w-full border border-[#f1e5d1]/10 overflow-hidden bg-[#151515]">
                {media.isVideo ? (
                  <VideoPlayer src={media.url} className="w-full" onExpand={() => setLightboxIndex(idx)} hasAudio={media.hasAudio} />
                ) : (
                  <ImageExpand 
                    src={media.url} 
                    alt={media.captionTitle || `Gallery media ${idx + 1}`} 
                    className="w-full hover:scale-105 transition-transform duration-1000"
                    onExpand={() => setLightboxIndex(idx)}
                  />
                )}
              </div>
              {(media.captionTitle || media.captionText) && (
                <div className="flex flex-col gap-2 px-2 max-w-xl">
                  {media.captionTitle && <h4 className="font-mono text-xs uppercase tracking-widest text-[#f1e5d1]">{media.captionTitle}</h4>}
                  {media.captionText && <p className="font-serif text-[15px] leading-relaxed text-[#f1e5d1]/60">{media.captionText}</p>}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* FOOTER / NEXT PROJECT */}
      <section className="relative w-full py-32 flex items-center justify-center border-t border-[#f1e5d1]/10 z-10 bg-[#1b1b1a] overflow-hidden">
        {/* Blurred Background */}
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

          {/* Preview Card */}
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

      {lightboxIndex !== null && project.gallery && (
        <LightboxGallery 
          mediaList={project.gallery} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}
    </div>
  );
}
