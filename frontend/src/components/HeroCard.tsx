import React from 'react';

const HeroCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Curved background blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-100/60 to-pink-200/60 rounded-[40px] md:rounded-[60px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="slide-from-left space-y-6">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-sm text-pink-700 font-medium">
              Born to Bloom
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
              Happy Birthday,<br />
              <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                Tannu 💞
              </span>
            </h1>
            
            <div className="space-y-3 text-xl md:text-2xl text-muted-text italic leading-relaxed">
              <p>Artist of my heart,</p>
              <p>redefining my world with your cutest smile.</p>
            </div>
            
            <div className="glass glow-soft rounded-[30px] p-6 md:p-8 transform hover:scale-105 transition-transform">
              <p className="text-xl md:text-2xl font-bold text-pink-800 text-center">
                ✨ Tannu universe me sabse jada pyari hai ✨
              </p>
            </div>
          </div>

          {/* Right: Photo Blob */}
          <div className="slide-from-right flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 to-purple-300/40 blur-3xl rounded-full transform scale-110"></div>
              
              {/* Photo blob */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 blob bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center overflow-hidden glow-pink">
                <img 
                  src="/images/tannu-hero.jpg" 
                  alt="Tannu" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

