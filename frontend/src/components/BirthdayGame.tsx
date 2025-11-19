import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks/useWindowSize';

interface BirthdayGameProps {
  onClose: () => void;
}

const BirthdayGame: React.FC<BirthdayGameProps> = ({ onClose }) => {
  const [cakeSliced, setCakeSliced] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [sliceCount, setSliceCount] = useState(0);
  const { width, height } = useWindowSize();

  const handleCakeCut = () => {
    if (!cakeSliced) {
      setCakeSliced(true);
      setShowConfetti(true);
      setSliceCount(1);
      
      // Stop confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } else {
      // Allow multiple cuts for fun
      setSliceCount(prev => prev + 1);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  };

  const resetGame = () => {
    setCakeSliced(false);
    setSliceCount(0);
    setShowConfetti(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          colors={['#FADADD', '#F5A9A4', '#F4B6AE', '#E67D87', '#F2C7CC', '#FFD700', '#FFA500']}
          gravity={0.3}
        />
      )}

      {/* Game Container */}
      <div className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 rounded-[32px] p-8 md:p-12 max-w-2xl w-full mx-4 shadow-2xl border-2 border-pink-200/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-pink-200/50 hover:bg-pink-300/70 flex items-center justify-center transition-all duration-300 hover:scale-110 text-pink-800 hover:text-pink-900 text-xl font-bold"
          aria-label="Close game"
        >
          ×
        </button>

        {/* Game Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-2">
            🎂 Birthday Cake Cutting Game 🎂
          </h2>
          <p className="text-pink-600 text-sm md:text-base">
            {!cakeSliced ? 'Click on the cake to cut it!' : 'Keep celebrating! 🎉'}
          </p>
        </div>

        {/* Game Area */}
        <div className="relative flex flex-col items-center justify-center mb-8">
          {/* Cake Container */}
          <div className="relative">
            {/* Floating candle flame animation */}
            {!cakeSliced && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="text-6xl">🕯️</div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-yellow-500 text-2xl animate-pulse">
                  🔥
                </div>
              </div>
            )}

            {/* Cake */}
            <button
              onClick={handleCakeCut}
              disabled={cakeSliced && sliceCount > 5}
              className={`relative text-[180px] md:text-[220px] transition-all duration-500 ${
                cakeSliced ? 'scale-110' : 'hover:scale-105 active:scale-95'
              } ${sliceCount > 5 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              style={{
                filter: cakeSliced ? 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.5))' : 'none',
                animation: !cakeSliced ? 'float 3s ease-in-out infinite' : 'none'
              }}
            >
              {cakeSliced ? '🍰' : '🎂'}
            </button>

            {/* Knife indicator */}
            {!cakeSliced && (
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 animate-pulse">
                <div className="text-4xl rotate-45">🔪</div>
                <div className="text-xs text-pink-600 mt-1 -rotate-45">Click!</div>
              </div>
            )}
          </div>

          {/* Celebration Message */}
          {cakeSliced && (
            <div className="mt-8 text-center animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-2">
                🎉 Happy Birthday, Tannu! 🎂
              </h3>
              <p className="text-pink-600 text-lg mb-4">
                May all your dreams come true! ✨
              </p>
              <div className="flex items-center justify-center gap-2 text-3xl mb-4">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎊</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💝</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎈</span>
                <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎁</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎊</span>
              </div>
              {sliceCount > 1 && (
                <p className="text-sm text-pink-500 italic">
                  Cake pieces collected: {sliceCount} 🍰
                </p>
              )}
              {sliceCount > 5 && (
                <p className="text-sm text-pink-700 font-semibold mt-2">
                  That's enough cake! You'll get a tummy ache! 😄
                </p>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          {cakeSliced && (
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🔄 Play Again
            </button>
          )}
          <button
            onClick={onClose}
            className="px-6 py-3 bg-pink-200 text-pink-800 rounded-full font-semibold hover:bg-pink-300 transition-all duration-300 hover:scale-105"
          >
            {cakeSliced ? '✓ Done' : '← Back'}
          </button>
        </div>

        {/* Instructions */}
        {!cakeSliced && (
          <div className="mt-6 text-center">
            <p className="text-xs text-pink-600/70">
              💡 Tap the cake to celebrate Tannu's special day!
            </p>
          </div>
        )}
      </div>

      {/* Custom floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default BirthdayGame;

