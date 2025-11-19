import React from 'react';

const AboutCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 rounded-[32px] p-8 md:p-12 shadow-lg card-hover-enhanced border-2 border-pink-200/40 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-peach-pink/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Header with cute emoji */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-peach-pink to-warm-pink text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md mb-4">
            ✨ My Little World ✨
          </div>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent mb-2">
            About Tuupi Babu 🌸
          </h3>
          <p className="text-pink-600 text-sm italic">Meri choti si, cute si, little si jaan</p>
        </div>

        {/* Main content in beautiful cards */}
        <div className="space-y-6">
          {/* Cuteness Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 border border-pink-200/50 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <div className="text-3xl flex-shrink-0">💖</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">The Cutest Ever</h4>
                <p className="text-muted-text leading-relaxed">
                  Tannu mere liye sirf cute nahi, <span className="font-bold text-pink-800">pura cutest world</span> hai. 
                  Brave, cute, beautiful – in 3 words me bhi kam hai. Sabse zyada pyaari hai wo, 
                  aur pata hai? <span className="font-semibold text-pink-700">Har din aur bhi zyada cute hoti ja rahi hai.</span> 
                  Matlab daily level up ho rahi hai cuteness mein.
                </p>
              </div>
            </div>
          </div>

          {/* Personality Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 border border-pink-200/50 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start gap-3">
              <div className="text-3xl flex-shrink-0">🎀</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Meri Bamash Tuupi</h4>
                <p className="text-muted-text leading-relaxed">
                  <span className="font-semibold text-pink-700">Bamashh bhi hai meri,</span> din bhar bamashi karti rehti hai. 
                  Kabhi idhar se udhar bhaagti hai, kabhi bina wajah hansi aati hai usko. 
                  <span className="italic text-pink-600"> Pagal si hai thodi, lekin meri hai.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Soft Toys */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-[20px] p-5 border border-pink-200/50">
              <div className="text-2xl mb-2">🧸</div>
              <h5 className="font-bold text-charcoal mb-2">Soft Toys Love</h5>
              <p className="text-sm text-muted-text">
                Soft toys ka toh alag hi craze hai uska. Ek nahi toh dusre ka chakkar!
              </p>
            </div>

            {/* Gupchup */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-[20px] p-5 border border-pink-200/50">
              <div className="text-2xl mb-2">🍬</div>
              <h5 className="font-bold text-charcoal mb-2">Gupchup Queen</h5>
              <p className="text-sm text-muted-text">
                Gupchup? Bhai puchho hi mat, jaise uske liye bana ho!
              </p>
            </div>

            {/* Chicken Lover */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-[20px] p-5 border border-pink-200/50">
              <div className="text-2xl mb-2">🍗</div>
              <h5 className="font-bold text-charcoal mb-2">Full Foodie</h5>
              <p className="text-sm text-muted-text">
                Chicken bhi pasand hai, full foodie hai meri tuupi. Khaate waqt uska expression dekh ke hi pet bhar jaata hai mera.
              </p>
            </div>

            {/* Dress Lover */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-[20px] p-5 border border-pink-200/50">
              <div className="text-2xl mb-2">👗</div>
              <h5 className="font-bold text-charcoal mb-2">Fashionista Bubu</h5>
              <p className="text-sm text-muted-text">
                Dress bubu ke pass hamesha kam hi rehta hai, har wakt bubu ko naya dress chahiye hota hai!
              </p>
            </div>
          </div>

          {/* What Makes Her Special */}
          <div className="bg-gradient-to-r from-pink-200/30 to-peach-pink/20 rounded-[24px] p-6 border-2 border-pink-300/40">
            <div className="text-center">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="text-xl font-bold text-charcoal mb-3">What Makes Her Special?</h4>
              <p className="text-muted-text leading-relaxed mb-4">
                Agar koi bole ki Tannu ke baare mein kya special hai, toh main bas itna bolunga — 
                <span className="font-bold text-pink-800"> wo hi toh special hai.</span> Uski har ek baat, 
                har ek harkat, sab kuch alag hai.
              </p>
              <p className="text-muted-text leading-relaxed">
                Aur haan, ab wo <span className="font-semibold text-pink-700">samajhdar bhi ho gayi hai.</span> 
                Meri baat maan jaati hai, haan sab nahi, par maximum toh sun leti hai. 
                Aur jab nahi sunti, tab bhi pyaari lagti hai. 
                <span className="italic text-pink-600"> Kya karein, tuupi hai hi aisi.</span>
              </p>
            </div>
          </div>

          {/* Final Quote */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-peach-pink/20 rounded-[24px] blur-xl"></div>
            <div className="relative bg-white rounded-[24px] p-8 shadow-md border-2 border-pink-300/50">
              <div className="text-center">
                <div className="text-4xl mb-4">💞</div>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent leading-relaxed">
                  East or West,<br />
                  Tuupi Babu is the Cutest – Always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;