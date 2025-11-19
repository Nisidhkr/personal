import React, { useEffect, useState } from 'react';

// ========================================================================
// ✏️ BIRTHDAY DAY HOURLY MESSAGES IN HINGLISH
// ========================================================================
const BIRTHDAY_HOURLY_MESSAGES = [
  { hour: 0, text: "Happy Birthday my love! Aaj tumhara special din hai. Maine tumhare liye kuch special banaya hai jo tumhe dikhane ka intezaar tha.", emoji: "🎂" },
  { hour: 1, text: "1 baj gaye! Tannu, aaj tumhara birthday hai aur main chahta tha ki ye din tumhare liye unforgettable ho.", emoji: "✨" },
  { hour: 2, text: "2 AM Birthday Girl! Maine tumhare liye apne dil ki baatein is website mein daali hain. Enjoy karo.", emoji: "💝" },
  { hour: 3, text: "3 baje! Aaj tumhara din hai Tannu. Ye website meri feelings ka ek chhota sa gift hai tumhare liye.", emoji: "🎁" },
  { hour: 4, text: "4 baj gaye Birthday Queen! Maine yahan sab kuch wo likha hai jo main personally tumse kehna chahta tha.", emoji: "👑" },
  { hour: 5, text: "Good Morning Birthday Girl! Aaj se tumhara naya saal shuru. Ye website mera pyaar ka izhaar hai.", emoji: "🌅" },
  { hour: 6, text: "6 AM! Happy Birthday Tannu! Is website pe tumhare liye 100 reasons, memories, aur bahut kuch hai.", emoji: "☀️" },
  { hour: 7, text: "7 baje Birthday Morning! Maine tumhare liye ye sab special banaya hai kyunki tum mere liye bahut special ho.", emoji: "💕" },
  { hour: 8, text: "8 baj gaye! Tannu, aaj tumhara birthday hai. Ye website meri taraf se ek heartfelt gift hai.", emoji: "🎈" },
  { hour: 9, text: "9 AM Birthday Celebrations! Scroll karte raho aur dekhte raho kitna pyaar karta hun main tumse.", emoji: "🎊" },
  { hour: 10, text: "10 baje! Happy Birthday! Is website mein maine apne dil ki har baat tumhare saath share ki hai.", emoji: "💖" },
  { hour: 11, text: "11 AM! Tannu, aaj tumhara special day hai. Maine ye sab sirf tumhare liye banaya hai.", emoji: "🌟" },
  { hour: 12, text: "12 PM Birthday Time! Dopahar ho gayi. Is website pe jo bhi hai wo sab tumhare liye hai, sirf tumhare liye.", emoji: "🎂" },
  { hour: 13, text: "1 PM! Happy Birthday my sweetheart! Ye website explore karo aur meri feelings ko mehsoos karo.", emoji: "💗" },
  { hour: 14, text: "2 baje! Birthday Afternoon! Har section mein maine kuch special daala hai jo main tumse kehna chahta tha.", emoji: "🎀" },
  { hour: 15, text: "3 PM Birthday Girl! Maine ye website isliye banaya kyunki kuch cheezein sirf special tareeke se hi kahin ja sakti hain.", emoji: "💌" },
  { hour: 16, text: "4 baje! Happy Birthday Tannu! Yahan jo memories aur messages hain wo humare pyaar ki kahaani hai.", emoji: "📖" },
  { hour: 17, text: "5 PM Birthday Evening! Is website mein maine apna dil khol ke rakh diya hai tumhare saamne.", emoji: "🌺" },
  { hour: 18, text: "6 baj gaye! Happy Birthday! Sunset dekho aur is website pe mere pyaar ko feel karo.", emoji: "🌸" },
  { hour: 19, text: "7 PM Birthday Dinner Time! Maine tumhare liye jo likha hai wo dil se hai, bilkul genuine.", emoji: "💐" },
  { hour: 20, text: "8 baje! Happy Birthday Tannu! Ye website mera tareeka hai tumhe ye batane ka ki tum kitni special ho.", emoji: "🎉" },
  { hour: 21, text: "9 PM! Birthday ke din khatam hone wala hai par mera pyaar kabhi khatam nahi hoga. Ye website uska proof hai.", emoji: "💞" },
  { hour: 22, text: "10 baje! Happy Birthday my love! Sone se pehle is website ko phir se dekh lena, bahut kuch hai yahan.", emoji: "🌙" },
  { hour: 23, text: "11 PM! Birthday din ka last hour. Par ye website hamesha rahegi tumhare paas, jab bhi meri yaad aaye.", emoji: "⭐" },
];

const HourlyMessageCard: React.FC = () => {
  const [showPop, setShowPop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showConfetti, setShowConfetti] = useState(false);
  
  const currentHour = currentTime.getHours();
  const currentMessage = BIRTHDAY_HOURLY_MESSAGES[currentHour];

  useEffect(() => {
    setShowPop(true);
    setShowConfetti(true);
    
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    setTimeout(() => setShowConfetti(false), 2500);

    return () => clearInterval(timer);
  }, []);

  // Trigger animation on hour change
  useEffect(() => {
    setShowPop(false);
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowPop(true);
    }, 100);

    setTimeout(() => {
      setShowConfetti(false);
    }, 2500);
  }, [currentHour]);

  return (
    <div className="py-8 md:py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg mb-3 animate-bounce-slow">
            Happy Birthday Tannu
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent mb-2">
            Your Special Day Message
          </h2>
          <p className="text-base md:text-lg font-semibold text-pink-600">
            Tumhare liye ek special message
          </p>
        </div>

        <div className={`relative transition-all duration-700 ${showPop ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          {/* Floating confetti animation */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[32px]">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`confetti-${i}`}
                  className="absolute text-2xl animate-float-up"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0
                  }}
                >
                  {['🎂', '🎉', '🎁', '💕'][Math.floor(Math.random() * 4)]}
                </div>
              ))}
            </div>
          )}

          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 via-pink-300/30 to-pink-400/30 rounded-[32px] blur-xl animate-pulse opacity-50"></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-pink-100 via-white to-pink-100 rounded-[32px] p-1 shadow-xl">
            <div className="bg-white rounded-[30px] p-6 md:p-8">
              {/* Time Badge and Emoji */}
              <div className="flex items-center justify-between mb-6 gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-5xl md:text-6xl animate-bounce-slow">
                    {currentMessage.emoji}
                  </div>
                  <div>
                    <p className="text-xs text-muted-text font-medium">Current Time</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                        {currentHour.toString().padStart(2, '0')}:00
                      </span>
                      <span className="text-lg font-semibold text-pink-500">
                        {currentHour >= 12 ? 'PM' : 'AM'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Birthday badge */}
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-3 rounded-full shadow-lg flex-shrink-0">
                  <p className="text-[10px] font-semibold mb-0.5 text-center">YOUR</p>
                  <p className="text-xl font-bold text-center">B'DAY</p>
                </div>
              </div>
              
              {/* Message Content */}
              <div className="relative mb-6">
                <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 rounded-full"></div>
                <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 rounded-[20px] p-5 md:p-6 border-2 border-pink-200 shadow-lg">
                  <p className="text-base md:text-xl text-charcoal leading-relaxed font-semibold">
                    "{currentMessage.text}"
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center gap-4 mb-6">
                <span className="text-3xl md:text-4xl heart-float">🎂</span>
                <span className="text-3xl md:text-4xl heart-float" style={{ animationDelay: '0.5s' }}>💕</span>
              </div>

              {/* Footer info */}
              <div className="text-center space-y-2">
                <p className="text-sm md:text-base text-pink-600 font-bold">
                  Har ghanta ek naya message tumhare liye
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-text flex-wrap">
                  <span className="font-semibold">Next message in:</span>
                  <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 px-3 py-1.5 rounded-full font-bold border border-pink-300">
                    {60 - currentTime.getMinutes()} minutes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-[20px] p-5 md:p-6 shadow-lg border-2 border-pink-200 text-center">
            <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Ye website mera dil hai jo tumhare liye khula hai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyMessageCard;