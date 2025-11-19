import { useState, useEffect } from 'react';

// ========================================================================
// ✏️ EDIT THIS ARRAY - Add your 100 reasons here!
// ========================================================================
const LOVE_REASONS = [
  "Tumhari smile mera har bura din acha kar deti hai.",
  "Tum hamesha meri sunti ho, chahe main kitna bhi bakwas karu.",
  "Tum ordinary moments ko special bana deti ho.",
  "Tum mere sapno ko support karti ho jab main khud par doubt karta hun.",
  "Tumhara apni hi jokes pe hasna bahut cute hai.",
  "Jab main ziddi hota hun tab bhi tum patient rehti ho.",
  "Tumhari sabke saath kindness mujhe inspire karti hai.",
  "Tum wo choti choti baatein yaad rakhti ho jo main tumhe batata hun.",
  "Tumhara chhoti si surprises pe excited hona.",
  "Tum mujhe ek better person banna sikhati ho.",
  "Tumhari hugs ghar jaisa feel karati hai.",
  "Tum mujhe bina explain kiye samajh jaati ho.",
  "Tumhari aankhon mein wo chamak jab tum apne passion ke baare mein baat karti ho.",
  "Tum jo cheezein tumhare liye important hai unhe kabhi chhodti nahi.",
  "Tumhari awaaz duniya ki meri sabse pasandida awaaz hai.",
  "Tum mere worst days pe bhi mujhe hasa deti ho.",
  "Tumhara apne loved ones ka care karna.",
  "Tumhari strength mujhe har din amaze karti hai.",
  "Jab main khud par believe nahi karta tab tum mujh par believe karti ho.",
  "Tumhare saath rehne se jo comfort milti hai.",
  "Tumhare random dance moves jab tum happy hoti ho.",
  "Tum har jagah ko ek adventure bana deti ho.",
  "Tumhara sochte waqt naak ko scrunch karna bahut pyaara hai.",
  "Tumhari apne goals achieve karne ki determination.",
  "Tum meri weirdness accept karti ho aur phir bhi pyaar karti ho.",
  "Tumhare wo chhote messages jo tum sirf mujhe check karne ke liye bhejti ho.",
  "Tumhari simple cheezon mein khushi dhoondhne ki ability.",
  "Tum genuine aur real ho, kabhi fake nahi.",
  "Tumhara sabko valued feel karana.",
  "Tumhara wo beautiful dil jo itna deeply care karta hai.",
  "Tum mujhe grow aur improve karne ke liye challenge karti ho.",
  "Jab hum saath hote hain tab jo peace milti hai.",
  "Tumhari creativity aur duniya ko dekhne ka unique tareeka.",
  "Tum hamare special moments aur dates yaad rakhti ho.",
  "Tumhara mere crazy ideas ko support karna.",
  "Tumhari intelligence aur har cheez ke baare mein curiosity.",
  "Tum boring tasks ko bhi fun bana deti ho.",
  "Hamara jo trust build hua hai ek dusre pe.",
  "Tumhari honesty, chahe wo kitni bhi hard ho.",
  "Tumhara ek room ko light up karna.",
  "Tum meri safe space ho, mera comfort zone.",
  "Tumhara ambition aur succeed karne ki drive.",
  "Wo chhoti sacrifices jo tum humare liye karti ho.",
  "Tumhari positive energy contagious hai.",
  "Tum mujhe har din loved feel karati ho.",
  "Tumhara difficult situations ko grace ke saath handle karna.",
  "Tumhari loyalty aur hamare liye commitment.",
  "Tum mujhe apne dreams chase karne ke liye inspire karti ho.",
  "Wo inside jokes jo sirf hum dono samajhte hain.",
  "Tumhari beautiful soul jo har cheez mein shine karti hai.",
  "Tum mujhe duniya ka sabse lucky person feel karati ho.",
  "Tumhara mere wins ko celebrate karna, chahe wo bade ho ya chhote.",
  "Tumhari empathy aur understanding nature.",
  "Tum kabhi meri mistakes ke liye judge nahi karti.",
  "Wo future jo main tumhe dekhkar dekhta hun.",
  "Tumhara challenges face karne mein resilience.",
  "Tum everyday life ko extraordinary bana deti ho.",
  "Hamara jo chemistry hai wo undeniable hai.",
  "Tumhara life pe unique perspective.",
  "Tum meri flaws accept karti ho aur mujhe completely pyaar karti ho.",
  "Tumhara kitni bhi busy ho, humare liye time nikalna.",
  "Tumhari spontaneity aur adventurous spirit.",
  "Tum mere sabse best version ko bahar lati ho.",
  "Wo memories jo humne saath mein banayi hain.",
  "Tumhara har cheez mein thoughtfulness.",
  "Tum meri silence ko bhi utna hi samajhti ho jitna meri words ko.",
  "Tumhara mujhe keep going karne ke liye motivate karna.",
  "Tumhara beautiful mind jo mujhe fascinate karta hai.",
  "Tum mujhe complete feel karati ho.",
  "Hamara ek dusre ke liye jo respect hai.",
  "Pretense se bhari duniya mein tumhari authenticity.",
  "Tum meri best friend ho aur meri love bhi.",
  "Tumhara forgive karna aur kabhi grudges na rakhna.",
  "Tumhare dreams mere dreams ke saath perfectly align hote hain.",
  "Tum bina kuch expect kiye sacrifices karti ho.",
  "Wo butterflies jo ab bhi tumhe dekhkar aate hain.",
  "Tumhari independence aur strength.",
  "Tum mujhe myself rehne ke liye encourage karti ho.",
  "Tumhara hamare disagreements ko maturely handle karna.",
  "Tumhara life ke liye passion.",
  "Tum mujhe forever mein believe kara deti ho.",
  "Wo chhoti cheezein jo tum karti ho jo dikhati hai ki tum care karti ho.",
  "Tumhari optimism chahe tough times mein bhi.",
  "Tum sab kuch ho jo mujhe pata nahi tha ki mujhe chahiye.",
  "Tumhara mujhe safe aur secure feel karana.",
  "Tumhara har cheez mein unwavering support.",
  "Tum meri life mein meaning lati ho.",
  "Wo pyaar jo tum itni freely aur unconditionally deti ho.",
  "Tumhari smile mere din ki highlight hai.",
  "Tum mujhe tumhare liye best partner banna chahti ho.",
  "Tumhara mujhe pyaar karna, flaws ke saath bhi.",
  "Tumhari presence meri life mein sabse bada gift hai.",
  "Tum mujhe un tareeko se complete karti ho jinki maine kabhi imagine nahi ki.",
  "Wo journey jo hum saath mein kar rahe hain.",
  "Tumhara dil pure gold hai.",
  "Tum mujhe true love mein believe kara deti ho.",
  "Tumhara jo tum ho, bilkul waisa hi.",
  "Tum meri aaj ho aur meri saari tomorrows bhi.",
  "Tumhara pyaar sabse best cheez hai jo mere saath kabhi hui.",
  "Tum meri everything ho, my always, my forever.",
];

// ========================================================================

const HundredReasonsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownReasons, setShownReasons] = useState<number[]>([0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [hasCompletedOnce, setHasCompletedOnce] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('loveReasonsProgress');
    if (saved) {
      const data = JSON.parse(saved);
      setShownReasons(data.shownReasons || [0]);
      setCurrentIndex(data.currentIndex || 0);
      setHasCompletedOnce(data.hasCompletedOnce || false);
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (index: number, shown: number[], completed: boolean) => {
    localStorage.setItem('loveReasonsProgress', JSON.stringify({
      currentIndex: index,
      shownReasons: shown,
      hasCompletedOnce: completed
    }));
  };

  const showNextReason = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShowHearts(true);

    // Find next unseen reason
    let nextIndex = currentIndex;
    let attempts = 0;
    
    do {
      nextIndex = Math.floor(Math.random() * LOVE_REASONS.length);
      attempts++;
    } while (shownReasons.includes(nextIndex) && attempts < 100);

    // If all reasons shown, mark complete and restart
    if (shownReasons.length >= LOVE_REASONS.length) {
      setHasCompletedOnce(true);
      nextIndex = 0;
      setShownReasons([0]);
      saveProgress(0, [0], true);
    } else {
      const newShown = [...shownReasons, nextIndex];
      setShownReasons(newShown);
      saveProgress(nextIndex, newShown, hasCompletedOnce);
    }

    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsAnimating(false);
    }, 400);

    setTimeout(() => {
      setShowHearts(false);
    }, 1500);
  };

  const restart = () => {
    setCurrentIndex(0);
    setShownReasons([0]);
    setHasCompletedOnce(true);
    saveProgress(0, [0], true);
  };

  const allReasonsShown = shownReasons.length >= LOVE_REASONS.length;

  return (
    <div className="mb-12 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-peach-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-peach-pink to-warm-pink text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md mb-4 animate-bounce-slow">
            ✨ Special For You ✨
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            100 Reasons I Love You 💗
          </h2>
          <p className="text-muted-text text-lg md:text-xl">
            Tap the button to discover another reason, birthday girl ✨
          </p>
        </div>

        {/* Main Card with Reason */}
        <div className="relative max-w-3xl mx-auto mb-10">
          {/* Floating hearts animation */}
          {showHearts && (
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`heart-${i}`}
                  className="absolute text-2xl md:text-3xl animate-float-up"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0
                  }}
                >
                  {i % 3 === 0 ? '💕' : i % 3 === 1 ? '💖' : '💗'}
                </div>
              ))}
            </div>
          )}

          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-peach-pink/20 to-pink-400/20 rounded-[36px] blur-xl animate-pulse"></div>

          {/* Reason Card */}
          <div 
            className={`relative bg-gradient-to-br from-white via-pink-50/30 to-white rounded-[36px] p-10 md:p-16 shadow-2xl border-2 border-pink-200/50 min-h-[380px] flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-500 ${
              isAnimating ? 'animate-reason-out scale-95' : 'animate-reason-in scale-100'
            }`}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-6 right-6 text-4xl opacity-20 heart-float">💖</div>
            <div className="absolute bottom-6 left-6 text-4xl opacity-20 heart-float" style={{ animationDelay: '1s' }}>💗</div>

            {/* Progress indicator */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 px-6 py-3 rounded-full text-sm font-bold shadow-md border border-pink-300/50">
              Reason #{currentIndex + 1} of {LOVE_REASONS.length}
            </div>

            {/* Reason text with gradient background */}
            <div className="text-center z-10 mt-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-peach-pink/30 blur-2xl rounded-full"></div>
                <p className="relative text-2xl md:text-4xl font-semibold text-charcoal leading-relaxed px-4 py-2">
                  "{LOVE_REASONS[currentIndex]}"
                </p>
              </div>
            </div>

            {/* Completion message */}
            {allReasonsShown && (
              <div className="mt-8 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 rounded-[24px] px-8 py-5 animate-fade-in shadow-lg border border-pink-300/50">
                <p className="text-pink-700 font-semibold text-center text-lg">
                  🎉 You reached the end, but my reasons are endless. Let's start again 💞
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-3xl mx-auto mb-8">
          <button
            onClick={showNextReason}
            disabled={isAnimating}
            className="relative group bg-gradient-to-r from-peach-pink to-warm-pink text-white px-10 py-5 rounded-[28px] text-lg font-bold hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-2xl button-bounce disabled:opacity-50 disabled:cursor-not-allowed min-w-[280px] overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Show another reason 💘
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={restart}
            className="bg-white text-pink-700 px-8 py-5 rounded-[28px] text-base font-semibold hover:bg-pink-50 transition-all shadow-md hover:shadow-lg border-2 border-pink-300 hover:border-pink-400"
          >
            Restart from beginning ↺
          </button>
        </div>

        {/* Enhanced Progress bar */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-pink-100 rounded-full h-4 overflow-hidden shadow-inner border border-pink-200">
            <div 
              className="bg-gradient-to-r from-peach-pink via-pink-500 to-warm-pink h-full transition-all duration-700 rounded-full relative overflow-hidden"
              style={{ width: `${(shownReasons.length / LOVE_REASONS.length) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-sm font-medium text-pink-600">
              {shownReasons.length} discovered
            </p>
            <p className="text-sm font-medium text-pink-600">
              {LOVE_REASONS.length - shownReasons.length} remaining
            </p>
          </div>
        </div>

        {/* Milestone celebration */}
        {shownReasons.length === 25 && (
          <div className="text-center mt-6 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-pink-200 to-peach-pink/50 text-pink-800 px-6 py-3 rounded-full text-sm font-bold shadow-md">
              🎊 25% complete! Keep going! 🎊
            </div>
          </div>
        )}
        {shownReasons.length === 50 && (
          <div className="text-center mt-6 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-pink-300 to-peach-pink text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              🎉 Halfway there! You're amazing! 🎉
            </div>
          </div>
        )}
        {shownReasons.length === 75 && (
          <div className="text-center mt-6 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-warm-pink text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              ✨ 75% complete! Almost there! ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HundredReasonsSection;