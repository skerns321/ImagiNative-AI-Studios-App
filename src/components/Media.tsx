'use client';

import { useState, useRef, useEffect, useMemo, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Move types to separate file for reusability
type MediaItem = {
  id: string;
  title: string;
  type: 'audio' | 'video';
  url: string;
  thumbnail?: string;
  duration: string;
  description: string;
  date: string;
};

// Custom hook for media handling
function useMediaPlayer(type: 'audio' | 'video') {
  const mediaRef = useRef<HTMLAudioElement | HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    const handleTimeUpdate = () => setCurrentTime(media.currentTime);
    const handleDurationChange = () => setDuration(media.duration);
    const handleEnded = () => setIsPlaying(false);

    media.addEventListener('timeupdate', handleTimeUpdate);
    media.addEventListener('durationchange', handleDurationChange);
    media.addEventListener('ended', handleEnded);

    return () => {
      media.removeEventListener('timeupdate', handleTimeUpdate);
      media.removeEventListener('durationchange', handleDurationChange);
      media.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!mediaRef.current) return;
    
    if (isPlaying) {
      mediaRef.current.pause();
    } else {
      mediaRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return {
    mediaRef,
    isPlaying,
    duration,
    currentTime,
    togglePlay
  };
}

const mediaItems: MediaItem[] = [
  {
    id: '1',
    title: 'Project_Symphony_01',
    type: 'audio',
    url: '/media/audio/symphony-01.mp3',
    duration: '3:45',
    description: 'Electronic symphony with AI-generated elements',
    date: '2024-03-15'
  },
  // Add more items here
];

export default function Media() {
  const [activeMedia, setActiveMedia] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const mediaRefs = useRef<Map<string, HTMLAudioElement | HTMLVideoElement>>(new Map());

  // Cleanup function for media elements
  useEffect(() => {
    const currentMediaRefs = mediaRefs.current;
    return () => {
      currentMediaRefs.forEach(media => {
        media.pause();
        media.currentTime = 0;
      });
    };
  }, []);

  // Memoize mediaItems to prevent unnecessary re-renders
  const mediaItems = useMemo(() => [
    {
      id: '1',
      title: 'Project_Symphony_01',
      type: 'audio' as const,
      url: '/media/audio/symphony-01.mp3',
      duration: '3:45',
      description: 'Electronic symphony with AI-generated elements',
      date: '2024-03-15'
    },
    // Add more items here
  ], []);

  // Handle media activation
  const handleMediaActivation = useCallback((id: string) => {
    mediaRefs.current.forEach((media, mediaId) => {
      if (mediaId !== id) {
        media.pause();
      }
    });
    setActiveMedia(activeMedia === id ? null : id);
  }, [activeMedia]);

  // Format time for display
  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  return (
    <section id="media" className="py-24 bg-primary-black relative">

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-yellow" />
          <h2 className="font-mono text-5xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            Media Lab
            <span className="text-primary-red">]_</span>
          </h2>
          <p className="font-mono text-primary-white/70 mt-4">
            &gt; ffplay -showmode 1 -f lavfi "amovie=input.mp3,asplit[out0][out1]"
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaItems.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              isActive={activeMedia === item.id}
              isMuted={isMuted}
              onActivate={handleMediaActivation}
              mediaRef={(el) => {
                if (el) {
                  mediaRefs.current.set(item.id, el);
                } else {
                  mediaRefs.current.delete(item.id);
                }
              }}
              formatTime={formatTime}
            />
          ))}
        </div>

        {/* Global Controls */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="border-2 border-primary-white p-2 hover:border-primary-red 
                     transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-primary-red" />
            ) : (
              <Volume2 className="w-6 h-6 text-primary-white" />
            )}
          </button>
        </div>
      </div>

      {/* Brutalist Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary-yellow" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary-red" />
    </section>
  );
}

// Separate MediaCard component for better performance
const MediaCard = memo(function MediaCard({
  item,
  isActive,
  isMuted,
  onActivate,
  mediaRef,
  formatTime
}: MediaCardProps) {
  const { mediaRef: playerRef, isPlaying, duration, currentTime, togglePlay } = 
    useMediaPlayer(item.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Offset background */}
      <div className="absolute inset-0 bg-primary-red translate-x-2 translate-y-2" />
      
      {/* Media Card */}
      <div className="border-2 border-primary-white bg-primary-black p-6 relative">
        {/* Media Player */}
        <div className="relative aspect-video mb-4">
          {item.type === 'video' ? (
            <video
              ref={(el) => {
                mediaRef(el);
                if (playerRef) playerRef.current = el;
              }}
              src={item.url}
              poster={item.thumbnail}
              className="w-full h-full object-cover"
              controls={isActive}
              muted={isMuted}
            />
          ) : (
            <div className="w-full h-full bg-primary-black border-2 border-primary-white flex items-center justify-center">
              <audio
                ref={(el) => {
                  mediaRef(el);
                  if (playerRef) playerRef.current = el;
                }}
                src={item.url}
                className="hidden"
                controls={isActive}
                muted={isMuted}
              />
              {/* Audio Visualizer Placeholder */}
              <div className="flex items-center gap-2 h-12">
                {Array(12).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary-red"
                    style={{
                      height: `${Math.random() * 100}%`,
                      transition: 'height 150ms ease'
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Play/Pause Button */}
          <button
            onClick={() => {
              onActivate(item.id);
              togglePlay();
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     border-2 border-primary-white bg-primary-black p-4
                     hover:border-primary-red transition-colors group-hover:opacity-100
                     opacity-0 transition-opacity"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-primary-white" />
            ) : (
              <Play className="w-6 h-6 text-primary-white" />
            )}
          </button>
        </div>

        {/* Media Info */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-mono text-xl text-primary-white">
              {item.title}_
            </h3>
            <span className="font-mono text-sm text-primary-yellow">
              {formatTime(duration)}
            </span>
          </div>
          <p className="font-mono text-sm text-primary-white/70">
            &gt; {item.description}
          </p>
          <p className="font-mono text-xs text-primary-white/50">
            $ date -r {item.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
}); 