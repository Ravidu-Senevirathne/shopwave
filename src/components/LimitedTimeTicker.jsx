import React from 'react';

const LimitedTimeTicker = () => {
  return (
    <div className="overflow-hidden bg-[#fcecd8] py-2">
    
      <div className="flex whitespace-nowrap animate-marquee">
    
        {[...Array(10)].map((_, i) => (
          <span key={`first-${i}`} className="px-8 font-bold text-3xl text-gray-900">
            🔥 Limited Time Offer 🔥
          </span>
        ))}
        
        {[...Array(10)].map((_, i) => (
          <span key={`second-${i}`} className="px-8 font-bold text-3xl text-gray-900">
            🔥 Limited Time Offer 🔥
          </span>
        ))}
      </div>
    </div>
  );
};

export default LimitedTimeTicker;
