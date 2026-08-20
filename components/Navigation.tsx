"use client";

import React from 'react';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference border-brutal-b text-cream bg-transparent py-4 px-6 sm:px-12 flex justify-between items-center">
      <div className="font-display font-bold text-xl uppercase tracking-widest">
        <Link href="/">
          <span className="italic">Y</span>ash <span className="italic">Y</span>adav
        </Link>
      </div>
      <div className="flex space-x-8 text-sm font-sans uppercase tracking-widest">
        <Link href="/" className="hover:text-orange transition-colors">Work</Link>
        <Link href="/about" className="hover:text-orange transition-colors">About</Link>
        <Link href="/#contact" className="hover:text-orange transition-colors">Contact</Link>
      </div>
    </nav>
  );
};
