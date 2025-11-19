import React, { useState, useEffect, useRef } from 'react';
import { useGallery } from '../hooks/useAPI';

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

const Gallery: React.FC = () => {
  const { photos, loading } = useGallery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [preloadedImages, setPreloadedImages] = useState<{ [key: number]: boolean }>({});
  const [imageDimensions, setImageDimensions] = useState<{ [key: number]: ImageDimensions }>({});
  const [containerHeight, setContainerHeight] = useState<number>(600);
  const imageRef = useRef<HTMLImageElement>(null);

  // Preload adjacent images and get their dimensions
  useEffect(() => {
    if (photos.length > 0) {
      const preloadImage = (index: number) => {
        if (!preloadedImages[index] && !imageError[index]) {
          const img = new Image();
          img.src = photos[index].url;
          img.onload = () => {
            // Store image dimensions
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            setImageDimensions(prev => ({
              ...prev,
              [index]: {
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio
              }
            }));
            setPreloadedImages(prev => ({ ...prev, [index]: true }));
          };
          img.onerror = () => {
            handleImageError(index);
          };
        }
      };

      // Preload current, next, and previous images
      preloadImage(currentIndex);
      preloadImage((currentIndex + 1) % photos.length);
      preloadImage((currentIndex - 1 + photos.length) % photos.length);
    }
  }, [currentIndex, photos.length]);

  useEffect(() => {
    if (isAutoPlaying && photos.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 3000); // Change photo every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, photos.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Calculate optimal container height based on current image aspect ratio
  useEffect(() => {
    const updateContainerHeight = () => {
      const dims = imageDimensions[currentIndex];
      if (dims) {
        const containerWidth = window.innerWidth;
        let maxWidth = 1200; // Max container width
        
        // Responsive max width
        if (containerWidth < 640) {
          maxWidth = containerWidth - 48; // Mobile: full width minus padding
        } else if (containerWidth < 1024) {
          maxWidth = containerWidth - 96; // Tablet
        }
        
        const actualWidth = Math.min(maxWidth, containerWidth * 0.9);
        
        // Calculate height based on aspect ratio
        let calculatedHeight = actualWidth / dims.aspectRatio;
        
        // Set reasonable min and max heights
        const minHeight = 300;
        const maxHeight = window.innerHeight * 0.7; // Max 70% of viewport height
        
        calculatedHeight = Math.max(minHeight, Math.min(calculatedHeight, maxHeight));
        
        setContainerHeight(calculatedHeight);
      }
    };
    
    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);
    
    return () => window.removeEventListener('resize', updateContainerHeight);
  }, [currentIndex, imageDimensions]);

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };
  
  const handleImageLoad = (index: number, img: HTMLImageElement) => {
    if (!imageDimensions[index]) {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      setImageDimensions(prev => ({
        ...prev,
        [index]: {
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio
        }
      }));
    }
  };

  if (loading || photos.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h4 className="text-2xl font-bold text-pink-800 mb-4 text-center">
          Our Memories Gallery 📸
        </h4>
        <div className="text-center py-8">
          <div className="animate-spin text-4xl">💞</div>
          <p className="mt-4 text-pink-600">Loading memories...</p>
        </div>
      </div>
    );
  }

  const currentPhoto = photos[currentIndex];

  return (
    <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-sm border border-pink-300/20">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-bold text-charcoal">
          Our Memories Gallery 📸
        </h4>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium hover:bg-pink-200 transition-all shadow-sm"
        >
          {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
      </div>

      {/* Main slideshow */}
      <div className="relative">
        <div 
          className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[24px] overflow-hidden flex items-center justify-center relative"
          style={{
            height: `${containerHeight}px`,
            transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            minHeight: '300px',
            maxHeight: '70vh'
          }}
        >
          {imageError[currentIndex] ? (
            <div className="text-center p-8">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-muted-text font-medium text-lg">
                Photo {currentIndex + 1} of {photos.length}
              </p>
              <p className="text-sm text-pink-700 mt-2">
                {currentPhoto.caption}
              </p>
            </div>
          ) : (
            <img 
              ref={imageRef}
              src={currentPhoto.url} 
              alt={currentPhoto.caption}
              className="max-w-full max-h-full object-contain transition-opacity duration-500"
              onError={() => handleImageError(currentIndex)}
              onLoad={(e) => handleImageLoad(currentIndex, e.currentTarget)}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{ 
                opacity: preloadedImages[currentIndex] ? 1 : 0.5,
                transition: 'opacity 0.5s ease-in-out'
              }}
            />
          )}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-pink-800 p-3 rounded-full shadow-md hover:bg-white transition-all hover:scale-110"
          aria-label="Previous photo"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-pink-800 p-3 rounded-full shadow-md hover:bg-white transition-all hover:scale-110"
          aria-label="Next photo"
        >
          →
        </button>

        {/* Caption */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-[20px] p-4 border border-pink-200/50">
          <p className="text-charcoal font-semibold text-center">
            {currentPhoto.caption}
          </p>
        </div>
      </div>

      {/* Thumbnail dots */}
      <div className="flex gap-2 justify-center mt-6 flex-wrap">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-pink-600 w-8'
                : 'bg-pink-300 hover:bg-pink-400'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-muted-text text-sm">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default Gallery;

