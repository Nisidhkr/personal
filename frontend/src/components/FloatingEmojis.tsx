import React from 'react';

const FloatingEmojis: React.FC = () => {
  const emojis = ['💞', '🧸', '🌸', '🎀', '💕', '✨', '💖', '🦋'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className={`absolute text-4xl opacity-10 ${
            index % 3 === 0 ? 'animate-float' : 
            index % 3 === 1 ? 'animate-float-slow' : 
            'animate-float-slower'
          }`}
          style={{
            left: `${(index * 12 + 5) % 95}%`,
            top: `${(index * 15 + 10) % 80}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {emoji}
        </span>
      ))}
      {emojis.map((emoji, index) => (
        <span
          key={`second-${index}`}
          className={`absolute text-3xl opacity-10 ${
            index % 3 === 0 ? 'animate-float-slow' : 
            index % 3 === 1 ? 'animate-float-slower' : 
            'animate-float'
          }`}
          style={{
            left: `${(index * 15 + 50) % 90}%`,
            top: `${(index * 18 + 40) % 85}%`,
            animationDelay: `${index * 0.7 + 2}s`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingEmojis;

