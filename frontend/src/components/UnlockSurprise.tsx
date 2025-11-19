import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks/useWindowSize';
import Gallery from './Gallery';

// ========================================================================
// ✏️ EDIT THESE CONFIGURATION VALUES
// ========================================================================
const SECRET_CODE = '10-12-2020'; // Change to your special date (DD-MM-YYYY)
const SECRET_HINT = "The date our forever started. (DD-MM-YYYY)"; // Customize the hint
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'; // Backend URL
// ========================================================================

const UnlockSurprise: React.FC = () => {
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [error, setError] = useState('');
  const [bonusUnlocked, setBonusUnlocked] = useState(false);
  const [bonusError, setBonusError] = useState('');
  const [currentCompliment, setCurrentCompliment] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const { width, height } = useWindowSize();

  // Load unlock status from sessionStorage on mount (only persists during current session)
  useEffect(() => {
    const unlocked = sessionStorage.getItem('secretSurpriseUnlocked');
    const bonusUnlockedStatus = sessionStorage.getItem('bonusSurpriseUnlocked');
    
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    if (bonusUnlockedStatus === 'true') {
      setBonusUnlocked(true);
    }
  }, []);
  
  const compliments = [
    "Tannu, tum literally universe ki sabse cutest ho.",
    "Tumhari smile mera favourite notification hai.",
    "Jitna time tumhare saath hoon, utna hi life perfect lagti hai.",
    "Tum jitni special ho utna words me bata paana mushkil hai.",
    "Har din tumhare saath naya aur special lagta hai.",
    "Tumhari awaaz sunte hi mood achha ho jaata hai.",
    "Tum mere liye duniya ki sabse precious gift ho."
  ];

  const handleUnlock = () => {
    if (code === SECRET_CODE) {
      setIsUnlocking(true);
      setError('');
      
      // Dramatic unlock animation
      setTimeout(() => {
        setIsUnlocked(true);
        setShowConfetti(true);
        
        // Save to sessionStorage (only for current session)
        sessionStorage.setItem('secretSurpriseUnlocked', 'true');
        
        setIsUnlocking(false);
      }, 800);
      
      // Stop confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
    } else {
      setError('Almost there, try again my love 🥺');
      // Shake animation on error
      const input = document.getElementById('secret-code-input');
      input?.classList.add('animate-shake');
      setTimeout(() => {
        input?.classList.remove('animate-shake');
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  const handleBonusUnlock = (nickname: string) => {
    if (nickname === 'Tunu Bubu') {
      setBonusUnlocked(true);
      setBonusError('');
      
      // Save bonus unlock status (only for current session)
      sessionStorage.setItem('bonusSurpriseUnlocked', 'true');
    } else {
      setBonusError('Close, but nahi… ek aur baar try karo 😜');
    }
  };

  const getRandomCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCurrentCompliment(compliments[randomIndex]);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="mb-8">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          colors={['#FADADD', '#F5A9A4', '#F4B6AE', '#E67D87', '#F2C7CC']}
        />
      )}

      {!isUnlocked ? (
        <div className={`bg-gradient-to-br from-pink-100 to-pink-200 rounded-[28px] p-8 md:p-12 shadow-md card-hover-enhanced border border-pink-300/30 transition-all duration-500 ${
          isUnlocking ? 'scale-105 glow-pink' : ''
        }`}>
          <div className="text-center max-w-xl mx-auto">
            {/* Lock icon with animation */}
            <div className="text-6xl mb-4 inline-block">
              {isUnlocking ? (
                <span className="animate-spin">🔓</span>
              ) : (
                <span className="heart-float">🔐</span>
              )}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Unlock Your Secret Birthday Surprise 🎁
            </h3>
            <p className="text-lg text-muted-text mb-2">
              Enter the secret code to reveal your special surprise ✨
            </p>
            
            {/* Hint display */}
            <div className="bg-white/60 backdrop-blur-sm rounded-[16px] px-6 py-3 mb-8 inline-block">
              <p className="text-sm text-pink-700 font-medium">
                💡 Hint: {SECRET_HINT}
              </p>
            </div>
            
            <div className="space-y-4">
              <input
                id="secret-code-input"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter code (DD-MM-YYYY)"
                disabled={isUnlocking}
                className="w-full px-6 py-4 rounded-[20px] border-2 border-pink-300 focus:border-pink-600 focus:outline-none text-center text-lg input-glow transition-all disabled:opacity-50"
              />
              
              {error && (
                <div className="bg-pink-200/80 backdrop-blur-sm text-pink-800 px-6 py-3 rounded-[16px] animate-pulse">
                  {error}
                </div>
              )}
              
              <button
                onClick={handleUnlock}
                disabled={isUnlocking}
                className="w-full bg-gradient-to-r from-peach-pink to-warm-pink text-white px-8 py-4 rounded-[20px] text-lg font-semibold hover:from-pink-500 hover:to-pink-600 transition-all shadow-md hover:shadow-lg button-bounce disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isUnlocking ? (
                  <>Unlocking... ✨</>
                ) : (
                  <>Unlock Surprise 💝</>
                )}
              </button>
            </div>

            {/* Random Compliment Button */}
            <div className="mt-8 pt-6 border-t border-pink-300/50">
              <button
                onClick={getRandomCompliment}
                className="bg-white text-pink-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-pink-50 transition-all shadow-sm hover:shadow-md"
              >
                Get another compliment 💌
              </button>
              {currentCompliment && (
                <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-[16px] p-4 fade-in-up">
                  <p className="text-pink-800 italic">"{currentCompliment}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          {/* Already Unlocked Badge */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-peach-pink to-warm-pink text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md flex items-center gap-2">
              <span>✓</span>
              <span>Already unlocked 💖</span>
            </div>
          </div>

          {/* Main Surprise Message */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[28px] p-8 md:p-12 text-center shadow-md border border-pink-300/30 glow-soft">
            <div className="text-6xl mb-4">🎂</div>
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Your Secret Birthday Surprise 🎉
            </h3>
            <p className="text-xl text-muted-text max-w-2xl mx-auto leading-relaxed">
              Tannu, tumhe pata hai na? Tumhare saath har din special hai. 
              Jab tumhara birthday aata hai, toh mann karta hai duniya ki saari khushiyan tumhe de doon. 
              Tum hamesha khush raho, hamesha successful bano, aur hamesha mere saath raho. 
              This website is just a small gesture to show how much you mean to me. 💞
            </p>
          </div>

          {/* Video Section with Real Video */}
          <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-md border border-pink-300/20">
            <h4 className="text-2xl font-bold text-charcoal mb-4 text-center">
              Special Video Message 🎬
            </h4>
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 rounded-[20px] overflow-hidden flex items-center justify-center">
              {videoError ? (
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-muted-text font-medium">
                    Special Birthday Message
                  </p>
                  <p className="text-sm text-pink-600 mt-2">
                    Video loading...
                  </p>
                </div>
              ) : (
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                  onError={handleVideoError}
                >
                  <source 
                    src={`${API_BASE_URL}/videos/special-message.mp4`} 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <p className="text-center text-muted-text text-sm mt-4">
              A special message just for you, Tannu ❤️
            </p>
          </div>

          {/* Gallery Section */}
          <Gallery />

          {/* Bonus Surprise */}
          {!bonusUnlocked ? (
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-[28px] p-6 md:p-8 shadow-md border border-pink-300/30">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-charcoal mb-4">
                  Bonus Surprise 🔒
                </h4>
                <p className="text-muted-text mb-6">
                  Agar tum guess kar lo ki mera favourite nickname kaunsa hai, toh ek aur chhota sa surprise milega.
                </p>
                <div className="flex flex-wrap gap-3 justify-center mb-4">
                  {['Tannu', 'Tunu Bubu', 'Pupi'].map((name) => (
                    <button
                      key={name}
                      onClick={() => handleBonusUnlock(name)}
                      className="px-6 py-3 bg-pink-100 text-pink-800 rounded-full font-medium hover:bg-pink-200 hover:scale-105 transition-all shadow-sm"
                    >
                      {name}
                    </button>
                  ))}
                </div>
                {bonusError && (
                  <p className="text-pink-700 text-sm italic">{bonusError}</p>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[28px] p-6 md:p-8 shadow-md border border-pink-300/30 fade-in-up">
              <div className="text-center mb-6">
                <div className="inline-block bg-white text-pink-700 px-6 py-2 rounded-full text-sm font-semibold shadow-sm mb-4">
                  Bonus Unlocked! 💗
                </div>
                <h4 className="text-2xl font-bold text-charcoal mb-4">
                  Sahi pakde! Tunu Bubu hi mera favourite hai. 💗
                </h4>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-[20px] p-6">
                <p className="text-muted-text leading-relaxed text-lg">
                  Tunu Bubu naam sunte hi na, dil me alag hi khushi hoti hai. Ye nickname sirf ek naam nahi hai, 
                  ye hamari closeness aur pyaar ko represent karta hai. Jab bhi main "Tunu Bubu" bolta hun, 
                  toh mujhe feel hota hai ki tum mere sabse pass ho. Tum meri life ki sabse special person ho, 
                  aur tumhare saath har moment precious hai. I love you, Tunu Bubu! 💞
                </p>
              </div>
            </div>
          )}

          {/* Additional Message */}
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-[24px] p-8 md:p-12 shadow-md">
            <h4 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 text-center">
              One More Thing... 💕
            </h4>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-text leading-relaxed text-lg text-center">
                Tannu, tumhe pata hai na? Tumhare saath har din special hai. 
                Jab tumhara birthday aata hai, toh mann karta hai duniya ki saari khushiyan tumhe de doon. 
                Tum hamesha khush raho, hamesha successful bano, aur hamesha mere saath raho. 
                I love you so much! ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnlockSurprise;