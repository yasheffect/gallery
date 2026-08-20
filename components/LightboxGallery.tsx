'use client';

import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Minimize } from 'lucide-react';

interface Media {
  url: string;
  isVideo?: boolean;
}

export default function LightboxGallery({ 
  mediaList, 
  initialIndex, 
  onClose 
}: { 
  mediaList: Media[], 
  initialIndex: number, 
  onClose: () => void 
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  }, [mediaList.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  }, [mediaList.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    // Prevent scrolling behind lightbox
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handleNext, handlePrev]);

  const currentMedia = mediaList[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute bottom-6 right-6 md:right-8 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors z-50"
      >
        <Minimize className="w-5 h-5" />
      </button>

      {mediaList.length > 1 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </>
      )}

      <div 
        className="relative w-[85vw] h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {currentMedia.isVideo ? (
          <video 
            src={currentMedia.url} 
            className="max-w-full max-h-full object-contain"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img 
            src={currentMedia.url} 
            alt={`Gallery media ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm tracking-widest uppercase">
        {currentIndex + 1} / {mediaList.length}
      </div>
    </div>
  );
}
