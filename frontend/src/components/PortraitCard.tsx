import React from 'react';

const PortraitCard: React.FC = () => {
  return (
    <div className="bg-white rounded-[28px] p-6 shadow-sm card-hover-enhanced border border-pink-300/20">
      <div className="aspect-[3/4] bg-gradient-to-br from-pink-100 to-pink-200 rounded-[24px] overflow-hidden">
        <img
          src="/images/tannu-portrait.jpg" // 👈 Make sure your image is named 'portrait.jpg'
          alt="Tannu's portrait"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-pink-800">Pure Universe ki sabse pyari bubu 💕</p>
      </div>
    </div>
  );
};

export default PortraitCard;