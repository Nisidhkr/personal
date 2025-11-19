import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Apple-style glassmorphic background with curved bottom */}
      <div 
        className="relative backdrop-blur-xl overflow-visible"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.85) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(252, 231, 243, 0.85) 100%)',
          borderBottomLeftRadius: '32px',
          borderBottomRightRadius: '32px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
          boxShadow: `
            inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.7),
            0 10px 40px -10px rgba(236, 72, 153, 0.15)
          `
        }}
      >
        {/* Border with fade effect */}
        <div 
          className="absolute inset-0 rounded-b-[32px] pointer-events-none"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderTop: 'none',
            maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
          }}
        ></div>
                
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(251, 207, 232, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(252, 231, 243, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 0%, rgba(255, 240, 245, 0.5) 0%, transparent 40%)
            `,
            maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-8 py-5 md:py-6 relative">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 to-rose-300/40 blur-xl rounded-full"></div>
                <div 
                  className="relative w-full h-full rounded-full overflow-hidden"
                  style={{
                    border: '2px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: `
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.8),
                      0 4px 12px -2px rgba(236, 72, 153, 0.2)
                    `
                  }}
                >
                  <img 
                    src="/tannu-profile.jpg" 
                    alt="Tannu"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-2xl md:text-3xl bg-gradient-to-br from-pink-200 to-rose-200">🎂</div>';
                    }}
                  />
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl md:text-3xl font-light tracking-tight bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent" style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em'}}>
                  Happy to you bubu!
                </h1>
                <p className="text-xs md:text-sm text-pink-600/70 font-light tracking-wide" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                  Celebrating you · November 10, 2025
                </p>
              </div>
            </div>

            {/* Minimalist Navigation */}
            <nav className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => scrollToSection('memories')}
                className="group relative py-2 text-sm md:text-base font-light text-pink-700/80 hover:text-pink-700 transition-all duration-300 hidden md:block"
                style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em'}}
              >
                <span className="relative z-10">Memories</span>
                {/* Curved label banner outline on hover */}
                <div 
                  className="absolute inset-0 -inset-x-3 -inset-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  style={{
                    border: '1.5px solid rgba(236, 72, 153, 0.3)',
                    borderRadius: '32px',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 240, 245, 0.2) 100%)',
                    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), 0 2px 8px -2px rgba(236, 72, 153, 0.15)'
                  }}
                ></div>
              </button>

              <button
                onClick={() => scrollToSection('promise')}
                className="group relative py-2 text-sm md:text-base font-light text-pink-700/80 hover:text-pink-700 transition-all duration-300 hidden md:block"
                style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em'}}
              >
                <span className="relative z-10">My Promise</span>
                <div 
                  className="absolute inset-0 -inset-x-3 -inset-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  style={{
                    border: '1.5px solid rgba(236, 72, 153, 0.3)',
                    borderRadius: '32px',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 240, 245, 0.2) 100%)',
                    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), 0 2px 8px -2px rgba(236, 72, 153, 0.15)'
                  }}
                ></div>
              </button>

              {/* Birthday Game Button - Matches other header buttons */}
              <button
                onClick={() => {
                  const event = new CustomEvent('openBirthdayGame');
                  window.dispatchEvent(event);
                }}
                className="group relative py-2 text-sm md:text-base font-light text-pink-700/80 hover:text-pink-700 transition-all duration-300 flex items-center gap-2"
                style={{fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em'}}
              >
                <span className="text-base md:text-lg">🎮</span>
                <span className="relative z-10 hidden sm:inline">Play Birthday Game</span>
                <span className="relative z-10 sm:hidden">Game</span>
                <div 
                  className="absolute inset-0 -inset-x-3 -inset-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  style={{
                    border: '1.5px solid rgba(236, 72, 153, 0.4)',
                    borderRadius: '32px',
                    background: 'linear-gradient(180deg, rgba(244, 114, 182, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 2px 8px -2px rgba(236, 72, 153, 0.2)'
                  }}
                ></div>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;