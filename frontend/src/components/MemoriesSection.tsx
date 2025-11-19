import React, { useEffect, useState } from 'react';
import { VIDEO_CONFIG } from '../config/videos';

interface Memory {
  title: string;
  description: string;
  icon: string;
  video?: string;
}

const MemoriesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoErrors, setVideoErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('memories-timeline');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const timelineItems = [
    {
      date: "10 Dec 2020",
      subtitle: "We started"
    },
    {
      date: "06 Jan 2021",
      subtitle: "First meet (Big Bazaar, Dhanbad)"
    },
    {
      date: "2021 – paya badh ra tha mera tmhare liye ",
      subtitle: "tm ghar me chup cup ke baat karti thi kiu ki mai door tha ata tha to chat pe milta tha khe khe  mazaa ata tha bhot jada yaad hai na "
    },
    {
      date: "2022 – is samaya thora kharab hua ttha but hamne sambhal liya hai na ",
      subtitle: "dono ki galti thi bina wajha ladai karte the. ha parr agar pata hota ki sab thik ho jayega jaise abhi hai to kabhi nahi karte but wo bhi jaruri tha wo nahi hota to ye kaise hota hai na! "
    },
    {
      date: "2023 – is saamy to tm mere sath thi or yahi best tha ",
      subtitle: "waha pe ham bhot sara maza kiye ghumi kiye phratha kya sath me ladai kiye or kitna  order kar ke park me khaye last me ghumi kiye the city park me vhot sara bakchodi or fir pen to yaad hi hoga mr diy wala or cine mall walla ADVENTROUS chiz jo kiye or bocarting bhi or diwali kasise bhul sakete bhot maza aya uff!  "
    },
    {
      date: "2024 –  ye saal ok ok tha ",
      subtitle: "ye saal me sab thik hi tha but wo college khojne samay bhot dikkat hua tha but last me sab kuch theek hogaya maza aagaya "
    },
    {
      date: "2025 – present jo ki sabse best hai",
      subtitle: "line yaad hai na I LOVE YOU MORE THAN TOMMOROW BUT LESS THAN TOMMOROW   is baat se apna present or acha banate hai taki future or acha ban jaye or sab kuch acha ho"
    }
  ];

  const memories: Memory[] = [
    {
      title: "Big Bazaar – Pehli Mulaqat",
      description: "06 Jan 2021 – Jahan sab shuru hua. Pehli baar tumhe dekha aur dil ne kaha, ye ladki special hai.",
      icon: "🏬",
      video: VIDEO_CONFIG.VIDEOS.BIG_BAZAAR
    },
    {
      title: "Woh Jagah Jahan Baithke Baatein Karte The",
      description: "Hostel ke neeche wala spot. Jahan bohot saari baithke baatein karte the. Ladai bhi, pyaar bhi, sab yahin hua.",
      icon: "💬",
      video: VIDEO_CONFIG.VIDEOS.SITTING_TALKING
    },
    {
      title: "Maggi Point",
      description: "Late night maggi sessions. Har baar maggi ka bahana aur tumhare saath time bitane ka maza.",
      icon: "🍜",
      video: VIDEO_CONFIG.VIDEOS.MAGGI_POINT
    },
    {
      title: "Paratha Wali Jagah",
      description: "Jahan hum paratha khane jate the. Simple moments, lekin bohot special memories.",
      icon: "🥘",
      video: VIDEO_CONFIG.VIDEOS.PARATHA_SPOT
    },
    {
      title: "Chandigarh Cricket Match",
      description: "Pehli baar hum dono akele itni door gaye. Cricket dekhne nahi, bas saath time bitane.",
      icon: "🏏",
      video: VIDEO_CONFIG.VIDEOS.CHANDIGARH
    }
  ];

  const handleVideoError = (key: string) => {
    setVideoErrors(prev => ({ ...prev, [key]: true }));
  };

  return (
    <section id="memories" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-12 text-center">
          Our Beautiful Memories 💭
        </h2>
        
        {/* Curved Ribbon Timeline */}
        <div id="memories-timeline" className="relative py-12">
          {/* Desktop: Curved horizontal path */}
          <div className="hidden md:block">
            <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M 0,60 Q 150,20 300,60 T 600,60 T 900,60 T 1200,60"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray={isVisible ? "0" : "2000"}
                strokeDashoffset={isVisible ? "0" : "2000"}
                className="wave-path"
                style={{ transition: 'stroke-dashoffset 2s ease-out' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F5A9A4" />
                  <stop offset="50%" stopColor="#E67D87" />
                  <stop offset="100%" stopColor="#F5A9A4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Timeline nodes */}
            <div className="relative -mt-24">
              <div className="flex justify-between px-4">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center text-center max-w-[140px] ${
                      isVisible ? 'fade-sequence' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${0.3 + index * 0.2}s`,
                      transform: `translateY(${Math.sin((index / timelineItems.length) * Math.PI) * -20}px)`
                    }}
                  >
                    <div className="relative group mb-4">
                      <div className="absolute inset-0 bg-pink-400/30 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-xl glow-pink transform group-hover:scale-125 transition-transform cursor-pointer">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-charcoal mb-1">{item.date}</p>
                    <p className="text-xs text-muted-text">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="md:hidden space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-4 fade-sequence" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold glow-soft">
                    {index + 1}
                  </div>
                  {index < timelineItems.length - 1 && (
                    <div className="w-1 flex-1 bg-gradient-to-b from-pink-400 to-pink-200 my-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-sm font-bold text-charcoal mb-1">{item.date}</p>
                  <p className="text-xs text-muted-text">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Big memory card with video - Near Hostel */}
        <div className="bg-white rounded-[28px] overflow-hidden shadow-sm card-hover-enhanced border border-pink-300/20 mb-6">
          <div className="aspect-video bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center overflow-hidden">
            {videoErrors['near-hostel'] ? (
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏫</div>
                <p className="text-muted-text font-medium text-lg">
                  Near Hostel Video
                </p>
              </div>
            ) : (
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                onError={() => handleVideoError('near-hostel')}
              >
                <source src={VIDEO_CONFIG.VIDEOS.NEAR_HOSTEL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-2">
              Near Hostel – Our Special Spot
            </h3>
            <p className="text-muted-text leading-relaxed">
              Hostel ke paas woh jagah jahan hum ghanto baithke baatein karte the. 
              Har ek moment special tha, har ek baat yaadgaar thi.
            </p>
          </div>
        </div>

        {/* Memory video grid - 5 videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`bg-white rounded-[24px] overflow-hidden shadow-sm card-hover-enhanced border-l-4 border-pink-600 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Video section */}
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center overflow-hidden">
                {videoErrors[`memory-${index}`] ? (
                  <div className="text-center p-8">
                    <div className="text-4xl mb-2">{memory.icon}</div>
                    <p className="text-muted-text text-sm">{memory.title}</p>
                  </div>
                ) : (
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    onError={() => handleVideoError(`memory-${index}`)}
                  >
                    <source src={memory.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              {/* Content section */}
              <div className="p-6">
                <div className="text-2xl mb-2">{memory.icon}</div>
                <h4 className="text-lg font-bold text-charcoal mb-2">
                  {memory.title}
                </h4>
                <p className="text-muted-text text-sm leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;