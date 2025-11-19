import React from 'react';

const PromiseSection: React.FC = () => {
  return (
    <section id="promise" className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[28px] p-8 md:p-12 shadow-sm card-hover-enhanced border border-pink-300/30">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
          My Promise 🤝
        </h3>
        <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-10 shadow-sm border border-pink-300/30">
          <p className="text-xl md:text-2xl text-muted-text leading-relaxed text-center mb-6">
            Mera ek sapna hai – <span className="font-bold text-pink-800">sath rehna aur sath me successful hona</span>.
          </p>
          <p className="text-lg text-muted-text leading-relaxed text-center">
            Jo bhi ho, main hamesha tumhare saath rahunga, annoy bhi karunga, 
            par hamesha tumhari smile ke liye. 💞
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 backdrop-blur-sm rounded-[20px] p-6 text-center shadow-sm border border-pink-200/30">
            <div className="text-4xl mb-3">💑</div>
            <p className="text-charcoal font-semibold">Together Forever</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-[20px] p-6 text-center shadow-sm border border-pink-200/30">
            <div className="text-4xl mb-3">🎯</div>
            <p className="text-charcoal font-semibold">Success Together</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-[20px] p-6 text-center shadow-sm border border-pink-200/30">
            <div className="text-4xl mb-3">😊</div>
            <p className="text-charcoal font-semibold">Always Smiling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;

