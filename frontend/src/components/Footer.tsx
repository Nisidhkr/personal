import coupleFooter from "../assets/couple-footer.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Couple illustration sitting on footer */}
      <div className="relative flex flex-col items-center justify-center -mb-8 md:-mb-32 z-20">
        <div className="relative couple-float">
          {/* Shadow under couple */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/10 rounded-full blur-xl" />
          
          {/* Couple image */}
          <img 
            src={coupleFooter} 
            alt="Us Together" 
            className="w-48 md:w-64 lg:w-72 h-auto relative z-10 drop-shadow-2xl"
          />
        </div>
        
        {/* Tagline under couple */}
        <p className="text-pink-600 text-base md:text-lg font-medium mt-4 text-center drop-shadow-lg">
          Just us, always together. 💕
        </p>
      </div>

      <footer className="relative w-full overflow-hidden">
        {/* Realistic Pinkish Brick Wall Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#F5E6E8',
            backgroundImage: `
              linear-gradient(335deg, #E8D4D6 23px, transparent 23px),
              linear-gradient(155deg, #E8D4D6 23px, transparent 23px),
              linear-gradient(335deg, #F0DFE1 23px, transparent 23px),
              linear-gradient(155deg, #F0DFE1 23px, transparent 23px)
            `,
            backgroundSize: '58px 58px',
            backgroundPosition: '0 2px, 4px 35px, 29px 31px, 34px 6px'
          }}
        >
          {/* Brick mortar lines */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 29px,
                  rgba(255, 255, 255, 0.6) 29px,
                  rgba(255, 255, 255, 0.6) 32px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 58px,
                  rgba(255, 255, 255, 0.5) 58px,
                  rgba(255, 255, 255, 0.5) 61px
                )
              `
            }}
          />
          
          {/* Brick texture and depth */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.03) 100%),
                linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%, rgba(0, 0, 0, 0.05) 100%)
              `,
              backgroundSize: '58px 29px, 100% 100%',
              boxShadow: 'inset 0 0 150px rgba(0,0,0,0.08)'
            }}
          />
          
          {/* Pink tint for theme matching */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 192, 203, 0.15) 0%, rgba(255, 182, 193, 0.12) 50%, rgba(255, 192, 203, 0.15) 100%)'
            }}
          />
        </div>
        
        {/* Soft overlay for perfect text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,250,252,0.85) 50%, rgba(255,255,255,0.75) 100%)'
          }}
        />
        
        {/* Subtle decorative elements with better shadows */}
        <div className="absolute top-20 left-[15%] text-2xl opacity-15 animate-float" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>💕</div>
        <div className="absolute top-32 right-[20%] text-xl opacity-12 animate-float-slow" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>✨</div>
        <div className="absolute bottom-24 left-[25%] text-xl opacity-12 animate-float-slower" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>💖</div>
        
        {/* Footer content */}
        <div className="relative pt-28 md:pt-32 pb-8">
          {/* Main content container */}
          <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl">
            
            {/* Footer sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
              
              {/* Section 1 - About */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">💖</span>
                  <h3 className="text-lg font-bold text-pink-800">Tannu Birthday</h3>
                </div>
                <p className="text-pink-700/80 text-sm leading-relaxed mb-4">
                  A special website made with love to celebrate your birthday. 
                  Every moment with you is precious. 💞
                </p>
                <p className="text-pink-600/60 text-xs">
                  Since 10 Dec 2020
                </p>
              </div>
              
              {/* Section 2 - Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-pink-800 mb-4 tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => scrollToSection('memories')}
                      className="text-pink-700/70 hover:text-pink-800 text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      <span className="text-pink-400 group-hover:text-pink-600">→</span>
                      Our Memories
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        const element = document.getElementById('promise');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-pink-700/70 hover:text-pink-800 text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      <span className="text-pink-400 group-hover:text-pink-600">→</span>
                      My Promise
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-pink-700/70 hover:text-pink-800 text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      <span className="text-pink-400 group-hover:text-pink-600">→</span>
                      Back to Top
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Section 3 - Connect */}
              <div>
                <h4 className="text-sm font-semibold text-pink-800 mb-4 tracking-wide">
                  Connect
                </h4>
                <p className="text-pink-700/70 text-sm mb-4">
                  Explore more special moments
                </p>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://open.spotify.com/playlist/57EhKDCdJfQSs1qVOUCB7S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-pink-200/50 hover:bg-pink-300/70 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-pink-700 hover:text-pink-800"
                    title="Our Playlist"
                  >
                    🎵
                  </a>
                  <button 
                    onClick={() => scrollToSection('memories')}
                    className="w-10 h-10 rounded-full bg-pink-200/50 hover:bg-pink-300/70 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-pink-700 hover:text-pink-800"
                    title="Photo Gallery"
                  >
                    📷
                  </button>
                  <button 
                    className="w-10 h-10 rounded-full bg-pink-200/50 hover:bg-pink-300/70 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-pink-700 hover:text-pink-800"
                    title="Messages"
                  >
                    💬
                  </button>
                </div>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="border-t border-pink-300/30 pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-pink-700/70 text-sm text-center md:text-left">
                  © 2025 · Made with 💕 for Tannu
                </p>
                <p className="text-pink-600/60 text-xs text-center md:text-right">
                  Happy Birthday, Universe ki sabse pyari! 🎂✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

