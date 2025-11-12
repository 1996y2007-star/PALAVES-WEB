import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from './icons.tsx';
import { motion, AnimatePresence } from 'framer-motion';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
  title: string;
  autoPlayInterval?: number;
  className?: string;
}

export default function PhotoCarousel({ 
  photos, 
  title, 
  autoPlayInterval = 5500,
  className = ''
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isLightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, photos.length, isLightboxOpen]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlaying(false);
  }, [photos.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoPlaying(false);
  }, [photos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextLightboxImage = () => setLightboxIndex((prev) => (prev + 1) % photos.length);
  const previousLightboxImage = () => setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) goToNext();
    if (touchStart - touchEnd < -75) goToPrevious();
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') previousLightboxImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, nextLightboxImage, previousLightboxImage, closeLightbox]);

  return (
    <>
      {/* Main Carousel */}
      <div className={`w-full ${className}`}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-display-sm font-serif text-warm-gray-900 text-center mb-12">
            {title}
          </h3>

          <div className="relative">
            <div 
              className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-lg bg-warm-gray-100 shadow-xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence>
                <motion.img
                  key={photos[currentIndex].id}
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => openLightbox(currentIndex)}
                />
              </AnimatePresence>

              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-warm-white/80 hover:bg-warm-white text-warm-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-warm-white/80 hover:bg-warm-white text-warm-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Siguiente foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 flex gap-3 justify-center overflow-x-auto pb-4 px-2 scrollbar-hide">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-md overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-4 ring-accent scale-105 opacity-100'
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                  aria-label={`Ver foto ${index + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={`Miniatura ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'w-10 bg-accent-dark'
                      : 'w-5 bg-primary-200 hover:bg-primary-300'
                  }`}
                  aria-label={`Ir a foto ${index + 1}`}
                />
              ))}
            </div>

            <div className="text-center mt-4 text-warm-gray-600 text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-warm-gray-300 p-2 transition-colors z-20"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); previousLightboxImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-warm-gray-300 p-3 transition-colors z-20"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-warm-gray-300 p-3 transition-colors z-20"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                className="relative w-full h-full p-8 md:p-16 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}