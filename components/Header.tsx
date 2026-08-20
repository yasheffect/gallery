'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-8 py-8 z-[100] mix-blend-difference pointer-events-none text-xs md:text-[13px] font-sans tracking-[0.2em] uppercase">
      <nav className="flex justify-between items-start w-full">
        {/* LOGO */}
        <Link href="/" className="pointer-events-auto">
          <span className="font-sans font-bold tracking-[0.2em] uppercase text-xs md:text-[13px] hover:text-[#f1e5d1]/60 transition-colors">
            Yash Yadav
          </span>
        </Link>

        {/* RIGHT NAVIGATION */}
        <div className="flex gap-16 text-right">
          <Link href="/" className="pointer-events-auto hover:text-[#f1e5d1]/60 transition-colors nav-link-block relative flex items-center">
            <span className="absolute -left-3 text-[#f1e5d1] text-dot font-bold">•</span>
            WORK
          </Link>
          
          <Link href="/about" className="pointer-events-auto hover:text-[#f1e5d1]/60 transition-colors nav-link-block relative flex items-center">
            <span className="absolute -left-3 text-[#f1e5d1] text-dot font-bold">•</span>
            ABOUT
          </Link>
        </div>
      </nav>
    </header>
  );
}
