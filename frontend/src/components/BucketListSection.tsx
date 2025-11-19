import { useState, useEffect } from 'react';

// ========================================================================
// ✏️ EDIT THIS ARRAY - Add your bucket list items here!
// ========================================================================
const BUCKET_LIST_ITEMS = [
  {
    id: "sunrise-beach",
    icon: "🌅",
    title: "Saath mein sunrise dekhna",
    description: "Sirf hum dono, waves, aur ek naya din shuru hote hue.",
  },
  {
    id: "random-train",
    icon: "🚆",
    title: "Bina plan ke train journey",
    description: "Kisi bhi train mein baith jao aur dekho kahan le jaati hai.",
  },
  {
    id: "cook-dinner",
    icon: "🍝",
    title: "Saath mein pura dinner banana",
    description: "Chopping se lekar dessert tak, sab khud se.",
  },
  {
    id: "stargazing",
    icon: "⭐",
    title: "Raat ko taare ginne",
    description: "Ek shaant jagah dhoondhna aur taare dekhte rehna.",
  },
  {
    id: "road-trip",
    icon: "🚗",
    title: "Spontaneous road trip",
    description: "Bag pack karo aur kisi naye jagah ki taraf nikal jao.",
  },
  {
    id: "dance-rain",
    icon: "🌧️",
    title: "Baarish mein dance karna",
    description: "Puri tarah bheeg jao aur koi parwah nahi.",
  },
  {
    id: "photo-album",
    icon: "📸",
    title: "Physical photo album banana",
    description: "Apni favorite memories print karke scrapbook banana.",
  },
  {
    id: "learn-together",
    icon: "📚",
    title: "Saath mein kuch naya seekhna",
    description: "Koi class join karo ya ek dusre ko kuch sikhao.",
  },
  {
    id: "camping",
    icon: "⛺",
    title: "Taaron ke neeche camping",
    description: "Tent mein sona aur nature ke beech uthna.",
  },
  {
    id: "breakfast-bed",
    icon: "🥞",
    title: "Surprise breakfast in bed",
    description: "Baari baari se ek dusre ke liye special breakfast banana.",
  },
  {
    id: "paint-together",
    icon: "🎨",
    title: "Saath mein painting karna",
    description: "Chahe kaisa bhi ho, saath mein art create karna.",
  },
  {
    id: "volunteer",
    icon: "❤️",
    title: "Saath mein volunteer work",
    description: "Ek team ki tarah community ko help karna.",
  },
  {
    id: "movie-marathon",
    icon: "🎬",
    title: "Poori raat movie marathon",
    description: "Humare favorite movies dekhte rehna subah tak.",
  },
  {
    id: "street-food",
    icon: "🍜",
    title: "Street food tour",
    description: "Har gali ka famous khaana try karna saath mein.",
  },
  {
    id: "surprise-trip",
    icon: "✈️",
    title: "Surprise trip plan karna",
    description: "Ek dusre ko bina bataye trip plan karna.",
  },
];

// ========================================================================

type ItemStatus = 'planned' | 'done';

interface BucketListStatus {
  [key: string]: ItemStatus;
}

const BucketListSection = () => {
  const [statuses, setStatuses] = useState<BucketListStatus>({});
  const [celebrateId, setCelebrateId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Load statuses from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bucketListStatus');
    if (saved) {
      try {
        setStatuses(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse bucket list status:', error);
      }
    }
  }, []);

  // Save statuses to localStorage
  const saveStatuses = (newStatuses: BucketListStatus) => {
    localStorage.setItem('bucketListStatus', JSON.stringify(newStatuses));
  };

  const toggleStatus = (id: string) => {
    const currentStatus = statuses[id] || 'planned';
    const newStatus: ItemStatus = currentStatus === 'planned' ? 'done' : 'planned';
    
    const newStatuses = {
      ...statuses,
      [id]: newStatus
    };
    
    setStatuses(newStatuses);
    saveStatuses(newStatuses);

    // Celebrate when marking as done
    if (newStatus === 'done') {
      setCelebrateId(id);
      setTimeout(() => setCelebrateId(null), 2000);
    }
  };

  const getStatus = (id: string): ItemStatus => {
    return statuses[id] || 'planned';
  };

  const completedCount = Object.values(statuses).filter(s => s === 'done').length;
  const progressPercentage = (completedCount / BUCKET_LIST_ITEMS.length) * 100;

  return (
    <div className="mb-12 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-pink-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md mb-4 animate-bounce-slow">
            💫 Hamare Sapne 💫
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            Our Bucket List Together ✨
          </h2>
          <p className="text-muted-text text-lg md:text-xl mb-6">
            Wo sab cheezein jo hum karenge, yaadein jo banayenge, aur pal jo share karenge.
          </p>
          
          {/* Progress Card */}
          <div className="max-w-xl mx-auto bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-[28px] p-8 shadow-lg border-2 border-pink-200/50">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl animate-bounce">🎯</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {completedCount} of {BUCKET_LIST_ITEMS.length}
              </span>
            </div>
            
            {/* Animated Progress Bar */}
            <div className="relative bg-pink-100 rounded-full h-6 overflow-hidden shadow-inner border border-pink-200 mb-3">
              <div 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 h-full transition-all duration-1000 ease-out rounded-full relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>
            
            <p className="text-sm font-semibold text-purple-700">
              {completedCount === 0 && "Chalo shuru karte hain! 💕"}
              {completedCount > 0 && completedCount < 5 && "Great start! Keep going 🌟"}
              {completedCount >= 5 && completedCount < 10 && "Amazing progress! 🎉"}
              {completedCount >= 10 && "You're incredible! 💖✨"}
            </p>
          </div>
        </div>

        {/* Bucket List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUCKET_LIST_ITEMS.map((item, index) => {
            const status = getStatus(item.id);
            const isDone = status === 'done';
            const isCelebrating = celebrateId === item.id;
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                className={`relative bg-white rounded-[28px] p-7 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 scroll-reveal group ${
                  isDone 
                    ? 'border-pink-400 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50' 
                    : 'border-pink-200/50 hover:border-pink-300'
                } ${
                  isCelebrating ? 'scale-110 shadow-2xl' : 'hover:scale-105'
                }`}
                onClick={() => toggleStatus(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Celebration confetti */}
                {isCelebrating && (
                  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[28px]">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-2xl animate-float-up"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 50}%`,
                          animationDelay: `${i * 0.1}s`,
                          opacity: 0
                        }}
                      >
                        {['💖', '✨', '🎉', '💕', '⭐'][Math.floor(Math.random() * 5)]}
                      </div>
                    ))}
                  </div>
                )}

                {/* Glowing effect on hover */}
                {isHovered && !isDone && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-[28px] blur-xl animate-pulse"></div>
                )}

                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-md ${
                    isDone 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white animate-bounce-slow' 
                      : 'bg-pink-100 text-pink-700'
                  }`}>
                    {isDone ? '✓ Done 😍' : 'Planned'}
                  </div>
                </div>

                {/* Icon with animation */}
                <div className={`text-6xl mb-5 transition-all duration-500 ${
                  isDone ? 'scale-125 animate-bounce-slow' : isHovered ? 'scale-110' : 'scale-100'
                }`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  isDone ? 'text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text' : 'text-charcoal'
                }`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-text text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Action indicator */}
                <div className={`flex items-center gap-2 font-medium text-sm transition-all duration-300 ${
                  isDone ? 'text-pink-600' : 'text-purple-600 opacity-0 group-hover:opacity-100'
                }`}>
                  {isDone ? (
                    <>
                      <span className="text-xl animate-pulse">✓</span>
                      <span>Yaad ban gayi! 💕</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">👆</span>
                      <span>Click to mark done</span>
                    </>
                  )}
                </div>

                {/* Checkmark animation for done items */}
                {isDone && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-8xl opacity-10 animate-ping">✓</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-[32px] blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-[32px] p-10 border-2 border-pink-200/50 shadow-xl">
              <div className="text-4xl mb-4">💞</div>
              <p className="text-xl text-muted-text leading-relaxed mb-4">
                Ye sirf humare adventure ki shuruat hai. Har item jo hum complete karte hain, 
                wo ek kadam aur paas hai us life ke jise hum bana rahe hain.
              </p>
              {completedCount > 0 && (
                <div className="mt-6 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-[24px] border border-pink-300/50">
                  <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Humne already {completedCount} special {completedCount === 1 ? 'memory' : 'memories'} bana li hai saath mein! 💕✨
                  </p>
                </div>
              )}
              {completedCount === BUCKET_LIST_ITEMS.length && (
                <div className="mt-6 p-8 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 rounded-[24px] shadow-lg animate-pulse">
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-700 to-purple-700 bg-clip-text">
                    🎉 Wow! Sab complete! You're absolutely amazing! 🎉
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketListSection;