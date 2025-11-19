import React from 'react';

const NicknamesCard: React.FC = () => {
  const nicknames = [
    { name: 'Tannu', icon: '💗' },
    { name: 'Tunu Bubu', icon: '🧸' },
    { name: 'Pupi', icon: '🌸' },
    { name: 'Tutui', icon: '🎀' },
    { name: 'Cutu', icon: '💕' },
    { name: 'Bubu', icon: '🦋' }
  ];

  return (
    <div className="py-8">
      <h3 className="text-center text-lg md:text-xl text-muted-text mb-6 font-medium">
        My cute names for you 💕
      </h3>
      
      {/* Horizontal scrolling pills */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent pb-4">
        <div className="flex gap-4 px-4 min-w-max md:justify-center">
          {nicknames.map((item, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass hover:glass-strong rounded-full px-6 py-4 flex items-center gap-3 glow-soft hover:glow-pink transition-all transform hover:scale-110 cursor-default">
                <span className="text-2xl group-hover:heart-float">{item.icon}</span>
                <span className="text-lg font-semibold text-pink-800 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NicknamesCard;

