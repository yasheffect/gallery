'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const [time, setTime] = useState<string>('');
  const pathname = usePathname();
  const isWorkPage = pathname?.startsWith('/work');

  useEffect(() => {
    setTime(format(new Date(), 'HH:mm:ss'));
    const timer = setInterval(() => {
      setTime(format(new Date(), 'HH:mm:ss'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full px-8 py-8 h-32 z-[100] mix-blend-difference pointer-events-none text-xs md:text-[13px] font-sans tracking-[0.2em] uppercase flex items-end">
      {/* Col 1 */}
      <div className="absolute left-8 bottom-8 pointer-events-auto text-[#f1e5d1]/80">
        © 2026
      </div>



      {/* Col 3 */}
      {!isWorkPage && (
        <div className="absolute left-[65%] bottom-8 pointer-events-auto hidden md:flex gap-3 leading-tight">
          <span className="w-1.5 h-1.5 bg-[#f1e5d1] rounded-full mt-1.5"></span>
          <div className="flex flex-col">
            <Link href="/" className="font-bold text-[#f1e5d1] mb-1 hover:text-[#f1e5d1]/80 transition-colors">ALL <span className="italic font-serif normal-case opacity-70">(9)</span></Link>
            <Link href="/?filter=visual-design" className="text-[#f1e5d1]/50 hover:text-[#f1e5d1] transition-colors mb-0.5">VISUAL DESIGN</Link>
            <Link href="/?filter=art-direction" className="text-[#f1e5d1]/50 hover:text-[#f1e5d1] transition-colors mb-0.5">ART DIRECTION</Link>
            <Link href="/?filter=ui-ux-motion" className="text-[#f1e5d1]/50 hover:text-[#f1e5d1] transition-colors">UI/UX & MOTION</Link>
          </div>
        </div>
      )}

      {/* Col 4 */}
      <div className="absolute left-[80%] bottom-8 pointer-events-auto text-[#f1e5d1]/80 font-mono tracking-widest text-[10px]">
        {time || '00:00:00'}
      </div>

    </footer>
  );
}
