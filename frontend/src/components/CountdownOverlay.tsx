import React, { useState, useEffect } from 'react';

interface CountdownOverlayProps {
  onComplete: () => void;
}

const CountdownOverlay: React.FC<CountdownOverlayProps> = ({ onComplete }) => {
  const [countdown, setCountdown] = useState(10);
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasSeenCountdown = sessionStorage.getItem('tannu-countdown-seen');
    
    if (hasSeenCountdown) {
      setShow(false);
      onComplete();
      return;
    }

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      sessionStorage.setItem('tannu-countdown-seen', 'true');
      setFadeOut(true);
      setTimeout(() => {
        setShow(false);
        onComplete();
      }, 1000);
    }
  }, [countdown, onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('tannu-countdown-seen', 'true');
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
      onComplete();
    }, 500);
  };

  const handleReplay = () => {
    sessionStorage.removeItem('tannu-countdown-seen');
    setCountdown(10);
    setShow(true);
    setFadeOut(false);
  };

  if (!show) {
    return (
      <button
        onClick={handleReplay}
        className="fixed bottom-6 right-6 text-sm font-medium px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-50"
        style={{
          backgroundColor: '#ffc0d3',
          color: '#2d2d2d'
        }}
      >
        Replay
      </button>
    );
  }

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#fde4e9',
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <div className="px-6 py-2 rounded-full" style={{ backgroundColor: '#fff5f7' }}>
              <p className="text-sm font-medium" style={{ color: '#ffc0d3' }}>
                Born to Bloom
              </p>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ color: '#2d2d2d' }}>
            Happy
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ color: '#2d2d2d' }}>
            Birthday,
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-8" style={{ color: '#ffc0d3' }}>
            Tannu
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl italic mb-8" style={{ color: '#8b8b8b' }}>
            Artist of my heart,
          </p>
          <p className="text-lg md:text-xl italic mb-12" style={{ color: '#8b8b8b' }}>
            redefining my world with your cutest smile.
          </p>

          {/* Countdown Section */}
          <div className="mb-10">
            <p className="text-lg md:text-xl mb-6" style={{ color: '#8b8b8b' }}>
              Your celebration begins in
            </p>
            
            {/* Countdown Number */}
            <div className="relative inline-flex items-center justify-center mb-8">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: '#fff5f7' }}>
                <span className="text-7xl md:text-9xl font-bold animate-pulse"
                  style={{ color: '#ffc0d3' }}>
                  {countdown}
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg" style={{ color: '#8b8b8b' }}>
              seconds...
            </p>
          </div>

          {/* Quote Box */}
          <div className="max-w-2xl mx-auto px-8 py-6 rounded-3xl" style={{ backgroundColor: '#fff5f7' }}>
            <p className="text-lg md:text-xl font-medium" style={{ color: '#ffc0d3' }}>
              Tannu universe me sabse jada pyari hai
            </p>
          </div>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-sm font-medium hover:scale-110 transition-all px-5 py-2.5 rounded-full"
        style={{
          color: '#8b8b8b',
          backgroundColor: '#fff5f7',
        }}
      >
        Skip
      </button>
    </div>
  );
};

export default CountdownOverlay;