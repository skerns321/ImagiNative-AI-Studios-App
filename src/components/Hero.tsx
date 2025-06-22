"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/hero/digital-innovation.jpg",
    alt: "Digital Innovation",
    title: "DIGITAL_INNOVATION",
    description: "> Transforming ideas into digital reality_",
  },
  {
    src: "/hero/ai-solutions.jpg",
    alt: "AI Solutions",
    title: "AI_SOLUTIONS",
    description: "> Powering the future with artificial intelligence_",
  },
  {
    src: "/hero/creative-tech.jpg",
    alt: "Creative Technology",
    title: "CREATIVE_TECH",
    description: "> Where creativity meets innovation_",
  },
  {
    src: "/hero/web-development.jpg",
    alt: "Web Development",
    title: "WEB_DEVELOPMENT",
    description: "> Building the next generation of web experiences_",
  },
];

const gradientBackgrounds = [
  "bg-gradient-to-r from-primary-black via-primary-red to-primary-black",
  "bg-gradient-to-r from-primary-black via-primary-yellow to-primary-black",
  "bg-gradient-to-r from-primary-red via-primary-black to-primary-yellow",
  "bg-gradient-to-r from-primary-yellow via-primary-red to-primary-black",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="relative min-h-[100svh] bg-primary-black overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {/* Fallback gradient - show while image is loading */}
          <div className={`absolute inset-0 ${gradientBackgrounds[currentIndex]} transition-opacity duration-500
                        ${isLoading ? 'opacity-100' : 'opacity-0'}`} />

          {/* Optimized Image */}
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            fill
            className={`object-cover transition-opacity duration-500 
                     ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            priority={currentIndex === 0}
            sizes="100vw"
            quality={90}
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              setIsLoading(false);
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-black/70 via-primary-black/50 to-primary-black" />

          {/* Content */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-mono text-primary-white mb-4">
              {heroImages[currentIndex].title}
            </h1>
            <p className="text-xl font-mono text-primary-white/80">
              {heroImages[currentIndex].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-10">
        <button
          onClick={handlePrevious}
          className="p-2 border-2 border-primary-white text-primary-white 
                   hover:border-primary-red hover:text-primary-red transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors
                       ${currentIndex === index ? 'bg-primary-red' : 'bg-primary-white/50 hover:bg-primary-white'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 border-2 border-primary-white text-primary-white 
                   hover:border-primary-red hover:text-primary-red transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-24 h-24 border-t-4 border-r-4 border-primary-red" />
      <div className="absolute bottom-4 left-4 w-24 h-24 border-b-4 border-l-4 border-primary-yellow" />
    </div>
  );
}
