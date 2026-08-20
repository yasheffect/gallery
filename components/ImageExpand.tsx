'use client';

import { useRef } from 'react';
import { Maximize } from 'lucide-react';

export default function ImageExpand({ src, alt, className, onExpand }: { src: string, alt: string, className?: string, onExpand?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExpand) {
      onExpand();
      return;
    }
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if ((containerRef.current as any).webkitRequestFullscreen) {
        (containerRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  return (
    <div ref={containerRef} className="relative group w-full h-full cursor-pointer overflow-hidden flex items-center justify-center bg-black">
      <img 
        src={src} 
        alt={alt} 
        className={`${className || ''} w-full h-full object-contain`}
      />
      
      {/* Fullscreen Button */}
      <button 
        onClick={toggleFullScreen}
        className="absolute bottom-6 right-6 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
      >
        <Maximize className="w-5 h-5" />
      </button>
    </div>
  );
}
