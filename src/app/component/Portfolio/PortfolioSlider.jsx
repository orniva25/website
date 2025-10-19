// components/PortfolioSlider.js (Client-side Component)
'use client';  // This marks the component as client-side

import React from 'react';

const PortfolioSlider = ({ websites }) => {
  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full group-hover:opacity-100 transition-opacity duration-300 opacity-0 z-10" 
        onClick={() => {
          document.getElementById('portfolioSlider').scrollBy({ left: -400, behavior: 'smooth' });
        }}>
        &#8592;
      </button>

      {/* Portfolio Slider */}
      <div id="portfolioSlider" className="overflow-x-auto flex gap-6 pb-4 portfolio-slider snap-x snap-mandatory scroll-smooth">
        {websites.map((website) => (
          <div
            key={website.id}
            className="min-w-[300px] md:min-w-[400px] max-w-xs bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 snap-start transform hover:scale-105"
          >
            <img
              src={website.imageUrl}
              alt={website.name}
              className="rounded-t-lg w-full h-66 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full group-hover:opacity-100 transition-opacity duration-300 opacity-0 z-10"
        onClick={() => {
          document.getElementById('portfolioSlider').scrollBy({ left: 400, behavior: 'smooth' });
        }}>
        &#8594;
      </button>
    </div>
  );
};

export default PortfolioSlider;
