"use client";

import React from 'react';
import Link from 'next/link';

export const JasonNav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-start pointer-events-auto mix-blend-difference">
      
      {/* Left: Logo & Creative Mode */}
      <div className="flex flex-col gap-4">
        <Link href="/" className="nav-logo-wrapper group flex items-center gap-[2px] text-xl uppercase font-monument overflow-hidden h-6">
          <div className="relative h-full flex flex-col justify-start">
            <div className="chars-block is--1 flex flex-col items-center leading-none">
              <span className="has--style-italic normal-case text-2xl leading-[0.8]">J</span>
              <span className="absolute top-full uppercase leading-[0.8]">J</span>
            </div>
          </div>
          <span className="leading-none mt-1">ason</span>
          <span className="ml-2"></span>
          <div className="relative h-full flex flex-col justify-start">
            <div className="chars-block is--2 flex flex-col items-center leading-none -translate-y-full">
              <span className="absolute bottom-full uppercase leading-[0.8]">B</span>
              <span className="has--style-italic normal-case text-2xl leading-[0.8]">B</span>
            </div>
          </div>
          <span className="leading-none mt-1">ergh</span>
        </Link>
        
        <button className="text-[10px] font-monumentMono uppercase tracking-widest text-left opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-lightText rounded-full inline-block"></span>
          Creative Mode
        </button>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-12 font-monument uppercase text-xs tracking-widest mt-2">
        <Link href="/" className="nav-link-block group flex items-center gap-2">
          <span className="text-dot w-1.5 h-1.5 bg-lightText rounded-full"></span>
          <span className="opacity-50 font-monumentMono mr-1">01.</span>
          <span className="has--style-italic normal-case text-lg leading-none -mt-1">W</span>ork
        </Link>
        <Link href="/reportage" className="nav-link-block group flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-dot w-1.5 h-1.5 bg-lightText rounded-full"></span>
          <span className="opacity-50 font-monumentMono mr-1">02.</span>
          <span className="has--style-italic normal-case text-lg leading-none -mt-1">r</span>eportage
        </Link>
        <Link href="/about" className="nav-link-block group flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-dot w-1.5 h-1.5 bg-lightText rounded-full"></span>
          <span className="opacity-50 font-monumentMono mr-1">03.</span>
          <span className="has--style-italic normal-case text-lg leading-none -mt-1">A</span>bout
        </Link>
        <Link href="/archive" className="nav-link-block group flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-dot w-1.5 h-1.5 bg-lightText rounded-full"></span>
          <span className="opacity-50 font-monumentMono mr-1">04.</span>
          <span className="has--style-italic normal-case text-lg leading-none -mt-1">A</span>rchive
        </Link>
        <Link href="/contact" className="nav-link-block group flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-dot w-1.5 h-1.5 bg-lightText rounded-full"></span>
          <span className="opacity-50 font-monumentMono mr-1">05.</span>
          <span className="has--style-italic normal-case text-lg leading-none -mt-1">C</span>ontact
        </Link>
      </div>

      {/* Right: Credits */}
      <div className="hidden lg:flex flex-col items-end text-[10px] font-monumentMono uppercase opacity-50 mt-2 text-right leading-relaxed">
        <span>Credits:</span>
        <div className="flex gap-2">
          <span>BL/S®</span>
          <span>Artycoders</span>
          <span>serhii polyvanyi</span>
        </div>
      </div>

    </nav>
  );
};
