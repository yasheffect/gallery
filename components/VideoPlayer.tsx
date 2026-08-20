'use client';

import { useRef, useState } from 'react';
import { Maximize, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoPlayer({ src, className, onExpand, hasAudio = true }: { src: string, className?: string, onExpand?: () => void, hasAudio?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(!hasAudio);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExpand) {
      onExpand();
      return;
    }
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative group w-full h-auto cursor-pointer ${className || ''}`} onClick={togglePlay}>
      <video 
        ref={videoRef}
        src={src}
        className="w-full h-auto"
        playsInline
        loop
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Play Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none transition-opacity duration-300 z-10 group-hover:bg-black/40">
          <div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Controls Container */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {/* Mute Button */}
        {hasAudio && (
          <button 
            onClick={toggleMute}
            className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        )}
        {/* Fullscreen Button */}
        <button 
          onClick={toggleFullScreen}
          className="p-3 bg-black/50 hover:bg-black/80 rounded-full text-white"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
