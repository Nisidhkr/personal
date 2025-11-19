import React from 'react';

const LetterSection: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Letter Paper */}
        <div className="relative letter-drop">
          {/* Paper fold shadow */}
          <div className="absolute -top-2 left-4 right-4 h-4 bg-gradient-to-b from-gray-200/50 to-transparent rounded-t-lg blur-sm"></div>
          
          {/* Main letter paper */}
          <div className="relative bg-gradient-to-br from-white to-pink-50/30 rounded-[30px] p-8 md:p-12 shadow-xl">
            {/* Decorative lines (like notebook paper) */}
            <div className="absolute top-0 left-8 w-1 h-full bg-pink-200/30"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                  Letter for Tannu 💌
                </h3>
                <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-text leading-relaxed text-lg">
                  Tannu, jab se <span className="font-bold text-pink-800">10 Dec 2020</span> ko hamari story start hui hai na, 
                  tab se life ka har din thoda extra special lagta hai. Dhanbad ka Big Bazaar ho, kota ke roads ho 
                  ya hostel ke neeche wala spot, sab jagah sirf ek hi cheez common thi – <span className="font-bold text-pink-800">tum</span>.
                </p>
                
                <p className="text-muted-text leading-relaxed text-lg">
                  Mujhe tumhara har mood pasand hai, ladai wala bhi, nakhre wala bhi, aur sabse zyada woh cute cute sa face 
                  jo tum banaati ho. Video call pe bhi jab tum <span className="italic">'mere se pal lena'</span> wali aadat karti ho na, 
                  tab literally screen ke uss side se bhi feel hota hai ki mera pura world yahin hai.
                </p>
                
                {/* Sticky Note */}
                <div className="relative my-8">
                  <div className="sticky-note bg-gradient-to-br from-pink-200 to-pink-300 rounded-[20px] p-6 shadow-lg border-t-4 border-pink-400">
                    <p className="text-charcoal leading-relaxed text-lg font-medium">
                      Main chahta hun hum dono saath rahein, saath me successful ho, aur ek din wapas in sab memories ko dekhke bolein – 
                      <span className="font-bold text-pink-900"> "Dekha, humne kar dikhaya."</span>
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-text leading-relaxed text-lg">
                  I know main kabhi kabhi tumhe annoy karta hun, par sach me, woh bhi sirf isliye kyunki mujhe tumhari smile 
                  sabse zyada pasand hai. You are, and will always be, my Tunu Bubu – 
                  <span className="font-bold text-warm-pink underline-grow cursor-default"> universe ki sabse zyada pyaari ladki.</span> 💞
                </p>
                
                <div className="text-center mt-12 pt-8 border-t-2 border-pink-200/50">
                  <p className="text-2xl font-bold text-charcoal">
                    Forever Yours,
                  </p>
                  <p className="text-xl text-pink-700 mt-2">
                    Your Annoying Partner 😊
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterSection;

